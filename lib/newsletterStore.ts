import fs from "fs";
import path from "path";
import crypto from "crypto";
import {
  syncNewsletterEmailToGoogleSheet,
  fetchNewsletterEmailsFromGoogleSheet
} from "./googleSheetSync";

export interface NewsletterSubscriber {
  email: string;
  name?: string;
  city?: string;
  state?: string;
  country?: string;
  language?: "hi" | "en";
  subscribedAt: string;
  status: "active" | "pending" | "unsubscribed";
  verificationToken?: string;
  verifiedAt?: string;
  source?: string;
}

export interface DigestHistoryRecord {
  id: string; // timestamp or unique id
  sentAt: string;
  topicTitle: string;
  category: string;
  topicHash: string;
  recipientCount: number;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "newsletter_subscribers.json");
const HISTORY_FILE = path.join(DATA_DIR, "newsletter_history.json");

// Serverless fallback (/tmp is writable in Vercel and AWS Lambda)
const TMP_DIR = "/tmp";
const TMP_SUBSCRIBERS_FILE = path.join(TMP_DIR, "newsletter_subscribers.json");
const TMP_HISTORY_FILE = path.join(TMP_DIR, "newsletter_history.json");

// In-memory memory cache for ultra-reliable zero-loss persistence
let memorySubscribers: NewsletterSubscriber[] = [];
let memoryHistory: DigestHistoryRecord[] = [];

const TOKEN_SALT = process.env.SESSION_SECRET || process.env.CRON_SECRET || "omf_newsletter_double_optin_salt_2026";

/**
 * Generates a tamper-proof verification token with timestamp & HMAC signature
 */
export function generateVerificationToken(email: string, timestamp: number = Date.now()): string {
  const hmac = crypto.createHmac("sha256", TOKEN_SALT);
  hmac.update(`${email.toLowerCase().trim()}_${timestamp}`);
  return `${timestamp}.${hmac.digest("hex").slice(0, 32)}`;
}

/**
 * Validates the HMAC signature and checks if token is within 14 days validity
 */
export function verifySubscriptionToken(email: string, token: string): boolean {
  if (!token || !email || !token.includes(".")) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [timeStr, hash] = parts;
  const timestamp = parseInt(timeStr, 10);
  if (isNaN(timestamp)) return false;

  // Link valid for 14 days
  const maxAge = 14 * 24 * 60 * 60 * 1000;
  if (Date.now() - timestamp > maxAge) return false;

  const hmac = crypto.createHmac("sha256", TOKEN_SALT);
  hmac.update(`${email.toLowerCase().trim()}_${timestamp}`);
  const expectedHash = hmac.digest("hex").slice(0, 32);

  try {
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(expectedHash));
  } catch {
    return false;
  }
}

function ensureDirectory() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch {
    // Read-only filesystem on Vercel/Lambda is expected, will use /tmp and memory
  }
}

/**
 * Reads local subscribers from file or fallback /tmp or memory
 */
export function getLocalNewsletterSubscribers(): NewsletterSubscriber[] {
  ensureDirectory();
  try {
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
      const content = fs.readFileSync(SUBSCRIBERS_FILE, "utf-8");
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memorySubscribers = parsed;
        return parsed;
      }
    }
  } catch {
    // Fall back to /tmp or memory
  }

  try {
    if (fs.existsSync(TMP_SUBSCRIBERS_FILE)) {
      const content = fs.readFileSync(TMP_SUBSCRIBERS_FILE, "utf-8");
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memorySubscribers = parsed;
        return parsed;
      }
    }
  } catch {
    // Ignore error
  }

  return memorySubscribers;
}

/**
 * Saves subscribers to local file, /tmp, and in-memory cache
 */
function saveLocalNewsletterSubscribers(subs: NewsletterSubscriber[]): void {
  memorySubscribers = subs;
  ensureDirectory();

  // 1. Try writing to project .data directory
  try {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2), "utf-8");
  } catch {
    // Read-only filesystem
  }

  // 2. Also write to /tmp for serverless persistence
  try {
    fs.writeFileSync(TMP_SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2), "utf-8");
  } catch {
    // Ignore error
  }
}

/**
 * Add a pending subscriber for Double Opt-in (Tareeka 1)
 * If already active, flags duplicate to prevent spamming
 */
export async function addNewsletterSubscriber(data: {
  email: string;
  name?: string;
  city?: string;
  state?: string;
  country?: string;
  language?: "hi" | "en";
  source?: string;
}): Promise<{
  subscriber: NewsletterSubscriber;
  isNew: boolean;
  alreadySubscribed?: boolean;
  pendingVerification?: boolean;
  isPendingReissue?: boolean;
  verificationToken?: string;
}> {
  const emailClean = data.email.trim().toLowerCase();

  // 1. Check if email is ALREADY actively subscribed (in local store or Google Sheet)
  const allActive = await getAllActiveNewsletterSubscribers();
  const alreadyActive = allActive.some(
    (s) => s.email.toLowerCase() === emailClean && s.status === "active"
  );

  if (alreadyActive) {
    const existing = getLocalNewsletterSubscribers().find((s) => s.email.toLowerCase() === emailClean) || {
      email: emailClean,
      city: data.city,
      state: data.state,
      subscribedAt: new Date().toISOString(),
      status: "active" as const
    };
    return {
      subscriber: existing,
      isNew: false,
      alreadySubscribed: true
    };
  }

  // 2. Check if user was pending confirmation in local store
  const existingList = getLocalNewsletterSubscribers();
  const pendingIndex = existingList.findIndex(
    (s) => s.email.toLowerCase() === emailClean && s.status === "pending"
  );

  const token = generateVerificationToken(emailClean);
  let record: NewsletterSubscriber;
  let isPendingReissue = false;

  if (pendingIndex >= 0) {
    isPendingReissue = true;
    record = {
      ...existingList[pendingIndex],
      name: data.name || existingList[pendingIndex].name,
      city: data.city || existingList[pendingIndex].city,
      state: data.state || existingList[pendingIndex].state,
      language: data.language || existingList[pendingIndex].language,
      verificationToken: token,
      subscribedAt: new Date().toISOString()
    };
    existingList[pendingIndex] = record;
  } else {
    record = {
      email: emailClean,
      name: data.name,
      city: data.city || "India",
      state: data.state || "Madhya Pradesh",
      country: data.country || "India",
      language: data.language || "hi",
      subscribedAt: new Date().toISOString(),
      status: "pending",
      verificationToken: token,
      source: data.source || "Website Form"
    };
    existingList.push(record);
  }

  saveLocalNewsletterSubscribers(existingList);

  // Sync to Google Sheets in background with PENDING status
  syncNewsletterEmailToGoogleSheet({
    email: record.email,
    name: record.name,
    state: `${record.city ? `${record.city}, ` : ""}${record.state || "India"}`,
    source: record.source,
    status: "PENDING"
  }).catch((err) => {
    console.warn("[NewsletterStore] Google Sheet pending sync warning:", err);
  });

  return {
    subscriber: record,
    isNew: true,
    pendingVerification: true,
    isPendingReissue,
    verificationToken: token
  };
}

/**
 * Activates a pending subscriber upon clicking the email confirmation link (Tareeka 1)
 */
export async function confirmNewsletterSubscription(
  email: string,
  token: string
): Promise<{
  success: boolean;
  alreadyActive?: boolean;
  subscriber?: NewsletterSubscriber;
  error?: string;
}> {
  const emailClean = email.trim().toLowerCase();

  // 1. Verify token signature
  const isValidSig = verifySubscriptionToken(emailClean, token);

  const existingList = getLocalNewsletterSubscribers();
  const foundIndex = existingList.findIndex((s) => s.email.toLowerCase() === emailClean);

  // If subscriber is already active, return success without re-sending welcome
  if (foundIndex >= 0 && existingList[foundIndex].status === "active") {
    return {
      success: true,
      alreadyActive: true,
      subscriber: existingList[foundIndex]
    };
  }

  // Token must match either stored token or valid HMAC signature
  const storedMatches = foundIndex >= 0 && existingList[foundIndex].verificationToken === token;
  if (!isValidSig && !storedMatches) {
    return {
      success: false,
      error: "Invalid or expired confirmation link. Please subscribe again on our website."
    };
  }

  const nowIst = new Date().toISOString();
  let record: NewsletterSubscriber;

  if (foundIndex >= 0) {
    record = {
      ...existingList[foundIndex],
      status: "active",
      verifiedAt: nowIst,
      verificationToken: undefined
    };
    existingList[foundIndex] = record;
  } else {
    record = {
      email: emailClean,
      subscribedAt: nowIst,
      status: "active",
      verifiedAt: nowIst,
      source: "Double Opt-in Confirmation"
    };
    existingList.push(record);
  }

  saveLocalNewsletterSubscribers(existingList);

  // Clear remote cache so fresh queries include this newly active user
  cachedRemoteSubscribers = null;

  // Sync to Google Sheets with status ACTIVE and action newsletter_confirm
  syncNewsletterEmailToGoogleSheet({
    email: record.email,
    name: record.name,
    state: `${record.city ? `${record.city}, ` : ""}${record.state || "India"}`,
    source: record.source,
    status: "ACTIVE",
    action: "newsletter_confirm"
  }).catch((err) => {
    console.warn("[NewsletterStore] Google Sheet confirm sync warning:", err);
  });

  return {
    success: true,
    alreadyActive: false,
    subscriber: record
  };
}

/**
 * Unsubscribe an email
 */
export function unsubscribeEmail(email: string): boolean {
  const emailClean = email.trim().toLowerCase();
  const existing = getLocalNewsletterSubscribers();
  const foundIndex = existing.findIndex((s) => s.email.toLowerCase() === emailClean);

  if (foundIndex >= 0) {
    existing[foundIndex].status = "unsubscribed";
    saveLocalNewsletterSubscribers(existing);
    return true;
  }
  return false;
}

// In-memory cache for remote Google Sheet subscribers to prevent repeated network delays
let cachedRemoteSubscribers: { timestamp: number; data: Array<{ email: string; state?: string; subscribedAt?: string }> } | null = null;

/**
 * Get all active subscribers, combining local store with Google Sheets (with email deduplication)
 */
export async function getAllActiveNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  const localList = getLocalNewsletterSubscribers().filter((s) => s.status === "active");
  const emailMap = new Map<string, NewsletterSubscriber>();

  // 1. Load all local subscribers into map
  for (const sub of localList) {
    if (sub.email && sub.email.includes("@")) {
      emailMap.set(sub.email.toLowerCase().trim(), sub);
    }
  }

  // 2. Fetch and merge subscribers from Google Sheet (cached for 2 minutes to keep requests fast)
  try {
    const now = Date.now();
    let remoteData: Array<{ email: string; state?: string; subscribedAt?: string }> = [];

    if (cachedRemoteSubscribers && now - cachedRemoteSubscribers.timestamp < 2 * 60 * 1000) {
      remoteData = cachedRemoteSubscribers.data;
    } else {
      remoteData = await fetchNewsletterEmailsFromGoogleSheet();
      if (Array.isArray(remoteData) && remoteData.length > 0) {
        cachedRemoteSubscribers = { timestamp: now, data: remoteData };
      }
    }

    if (Array.isArray(remoteData) && remoteData.length > 0) {
      for (const item of remoteData) {
        if (item && item.email && item.email.includes("@")) {
          const cleanEmail = item.email.toLowerCase().trim();
          if (!emailMap.has(cleanEmail)) {
            emailMap.set(cleanEmail, {
              email: cleanEmail,
              state: item.state || "India",
              subscribedAt: item.subscribedAt || new Date().toISOString(),
              status: "active",
              source: "Google Sheet Sync"
            });
          }
        }
      }
    }
  } catch (err) {
    console.warn("Could not sync newsletter emails from Google Sheet:", err);
  }

  const mergedList = Array.from(emailMap.values());

  // If merged list discovered new remote subscribers, persist them locally so offline/cached reads have them too
  if (mergedList.length > localList.length) {
    try {
      saveLocalNewsletterSubscribers(mergedList);
    } catch (persistErr) {
      console.warn("Could not persist merged subscribers locally:", persistErr);
    }
  }

  return mergedList;
}

/**
 * Reads past digest history to prevent duplicate topics
 */
export function getDigestHistory(): DigestHistoryRecord[] {
  ensureDirectory();
  try {
    if (fs.existsSync(HISTORY_FILE)) {
      const content = fs.readFileSync(HISTORY_FILE, "utf-8");
      return JSON.parse(content) || [];
    }
  } catch (err) {
    console.warn("Error reading digest history:", err);
  }
  return [];
}

/**
 * Records a dispatched digest topic in history
 */
export function recordDigestSent(record: {
  topicTitle: string;
  category: string;
  recipientCount: number;
}): void {
  ensureDirectory();
  try {
    const history = getDigestHistory();
    const hash = record.topicTitle.toLowerCase().replace(/[^a-z0-9]/g, "");
    history.push({
      id: `digest_${Date.now()}`,
      sentAt: new Date().toISOString(),
      topicTitle: record.topicTitle,
      category: record.category,
      topicHash: hash,
      recipientCount: record.recipientCount
    });

    // Keep only last 100 entries to prevent infinite growth
    const trimmed = history.slice(-100);
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(trimmed, null, 2), "utf-8");
  } catch (err) {
    console.warn("Error writing digest history:", err);
  }
}

/**
 * Checks if a 2-day period has passed since the last digest
 */
export function hasTwoDaysPassedSinceLastDigest(): {
  eligible: boolean;
  lastSentAt: string | null;
  hoursSinceLast: number;
} {
  const history = getDigestHistory();
  if (history.length === 0) {
    return { eligible: true, lastSentAt: null, hoursSinceLast: 999 };
  }

  const lastRecord = history[history.length - 1];
  const lastTime = new Date(lastRecord.sentAt).getTime();
  const now = Date.now();
  const hoursSince = (now - lastTime) / (1000 * 60 * 60);

  // 44 hours (grace window for exactly 2 days minus 4 hours)
  return {
    eligible: hoursSince >= 44,
    lastSentAt: lastRecord.sentAt,
    hoursSinceLast: Math.round(hoursSince * 10) / 10
  };
}
