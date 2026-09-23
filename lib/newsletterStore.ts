import fs from "fs";
import path from "path";
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
  status: "active" | "unsubscribed";
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
 * Add or re-activate a subscriber
 */
export async function addNewsletterSubscriber(data: {
  email: string;
  name?: string;
  city?: string;
  state?: string;
  country?: string;
  language?: "hi" | "en";
  source?: string;
}): Promise<{ subscriber: NewsletterSubscriber; isNew: boolean }> {
  const emailClean = data.email.trim().toLowerCase();
  const existing = getLocalNewsletterSubscribers();
  const foundIndex = existing.findIndex((s) => s.email.toLowerCase() === emailClean);

  let isNew = false;
  let record: NewsletterSubscriber;

  if (foundIndex >= 0) {
    record = {
      ...existing[foundIndex],
      status: "active",
      city: data.city || existing[foundIndex].city || "India",
      state: data.state || existing[foundIndex].state || "Madhya Pradesh",
      country: data.country || existing[foundIndex].country || "India",
      language: data.language || existing[foundIndex].language || "hi",
      name: data.name || existing[foundIndex].name
    };
    existing[foundIndex] = record;
  } else {
    isNew = true;
    record = {
      email: emailClean,
      name: data.name,
      city: data.city || "India",
      state: data.state || "Madhya Pradesh",
      country: data.country || "India",
      language: data.language || "hi",
      subscribedAt: new Date().toISOString(),
      status: "active",
      source: data.source || "Website Form"
    };
    existing.push(record);
  }

  saveLocalNewsletterSubscribers(existing);

  // Sync to Google Sheets in background
  syncNewsletterEmailToGoogleSheet({
    email: record.email,
    name: record.name,
    state: `${record.city ? `${record.city}, ` : ""}${record.state || "India"}`,
    source: record.source
  }).catch((err) => {
    console.warn("[NewsletterStore] Google Sheet sync warning:", err);
  });

  return { subscriber: record, isNew };
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
 * Confirm a newsletter subscription (used by double opt-in / confirmation link)
 */
export async function confirmNewsletterSubscription(email: string): Promise<{
  success: boolean;
  subscriber?: NewsletterSubscriber;
  isNew?: boolean;
}> {
  if (!email || !email.includes("@")) {
    return { success: false };
  }
  const result = await addNewsletterSubscriber({
    email,
    source: "Email Confirmation"
  });
  return {
    success: true,
    subscriber: result.subscriber,
    isNew: result.isNew
  };
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
