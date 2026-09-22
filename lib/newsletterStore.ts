import fs from "fs";
import path from "path";
import {
  syncNewsletterEmailToGoogleSheet,
  fetchNewsletterEmailsFromGoogleSheet
} from "./googleSheetSync";

export interface NewsletterSubscriber {
  email: string;
  name?: string;
  state?: string;
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

function ensureDirectory() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (err) {
    console.warn("Could not create .data directory:", err);
  }
}

/**
 * Reads local subscribers from file
 */
export function getLocalNewsletterSubscribers(): NewsletterSubscriber[] {
  ensureDirectory();
  try {
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
      const content = fs.readFileSync(SUBSCRIBERS_FILE, "utf-8");
      return JSON.parse(content) || [];
    }
  } catch (err) {
    console.warn("Error reading newsletter subscribers file:", err);
  }
  return [];
}

/**
 * Saves subscribers to local file
 */
function saveLocalNewsletterSubscribers(subs: NewsletterSubscriber[]): void {
  ensureDirectory();
  try {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2), "utf-8");
  } catch (err) {
    console.warn("Error saving newsletter subscribers file:", err);
  }
}

/**
 * Add or re-activate a subscriber
 */
export async function addNewsletterSubscriber(data: {
  email: string;
  name?: string;
  state?: string;
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
      state: data.state || existing[foundIndex].state || "India",
      name: data.name || existing[foundIndex].name
    };
    existing[foundIndex] = record;
  } else {
    isNew = true;
    record = {
      email: emailClean,
      name: data.name,
      state: data.state || "India",
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
    state: record.state,
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

/**
 * Get all active subscribers, falling back to Google Sheets if local file is empty (e.g. Vercel cold boot)
 */
export async function getAllActiveNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  let list = getLocalNewsletterSubscribers().filter((s) => s.status === "active");

  if (list.length === 0) {
    try {
      const remote = await fetchNewsletterEmailsFromGoogleSheet();
      if (Array.isArray(remote) && remote.length > 0) {
        const merged: NewsletterSubscriber[] = [];
        for (const item of remote) {
          if (item && item.email && item.email.includes("@")) {
            merged.push({
              email: item.email.toLowerCase().trim(),
              state: item.state || "India",
              subscribedAt: item.subscribedAt || new Date().toISOString(),
              status: "active",
              source: "Google Sheet Import"
            });
          }
        }
        if (merged.length > 0) {
          saveLocalNewsletterSubscribers(merged);
          list = merged;
        }
      }
    } catch (err) {
      console.warn("Could not sync newsletter emails from Google Sheet fallback:", err);
    }
  }

  return list;
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
