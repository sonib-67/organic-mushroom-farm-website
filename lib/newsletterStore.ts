import fs from "fs";
import path from "path";
import { getDb } from "./firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit
} from "firebase/firestore";

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
  updatedAt?: string;
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

// In-memory cache for ultra-reliable zero-loss persistence and instant reads
let memorySubscribers: NewsletterSubscriber[] = [];
let memoryHistory: DigestHistoryRecord[] = [];
let isHistoryLoadedFromFirebase = false;

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
 * Add or re-activate a subscriber in Firebase Firestore
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
  const db = getDb();

  let isNew = true;
  let record: NewsletterSubscriber = {
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

  // 1. Check & Persist in Firebase Firestore
  if (db) {
    try {
      const docRef = doc(db, "newsletter_subscribers", emailClean);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const existingData = docSnap.data() as Partial<NewsletterSubscriber>;
        if (existingData.status === "active") {
          isNew = false;
        }
        record = {
          email: emailClean,
          name: data.name || existingData.name,
          city: data.city || existingData.city || "India",
          state: data.state || existingData.state || "Madhya Pradesh",
          country: data.country || existingData.country || "India",
          language: data.language || existingData.language || "hi",
          subscribedAt: existingData.subscribedAt || record.subscribedAt,
          status: "active",
          source: data.source || existingData.source || "Website Form",
          updatedAt: new Date().toISOString()
        };
      }

      await setDoc(docRef, record, { merge: true });
    } catch (firebaseErr) {
      console.warn("[NewsletterStore] Firebase save warning, fallback to local:", firebaseErr);
    }
  }

  // 2. Also update local cache for zero-latency retrieval
  const existingLocal = getLocalNewsletterSubscribers();
  const foundIndex = existingLocal.findIndex((s) => s.email.toLowerCase() === emailClean);
  if (foundIndex >= 0) {
    if (existingLocal[foundIndex].status === "active") {
      isNew = false;
    }
    existingLocal[foundIndex] = record;
  } else {
    existingLocal.push(record);
  }
  saveLocalNewsletterSubscribers(existingLocal);

  return { subscriber: record, isNew };
}

/**
 * Unsubscribe an email in Firebase Firestore
 */
export async function unsubscribeEmail(email: string): Promise<boolean> {
  const emailClean = email.trim().toLowerCase();
  const db = getDb();

  // 1. Update in Firebase
  if (db) {
    try {
      const docRef = doc(db, "newsletter_subscribers", emailClean);
      await setDoc(
        docRef,
        {
          status: "unsubscribed",
          unsubscribedAt: new Date().toISOString()
        },
        { merge: true }
      );
    } catch (err) {
      console.warn("[NewsletterStore] Firebase unsubscribe warning:", err);
    }
  }

  // 2. Update in local cache
  const existing = getLocalNewsletterSubscribers();
  const foundIndex = existing.findIndex((s) => s.email.toLowerCase() === emailClean);
  if (foundIndex >= 0) {
    existing[foundIndex].status = "unsubscribed";
    saveLocalNewsletterSubscribers(existing);
    return true;
  }

  return true;
}

/**
 * Get all active subscribers from Firebase Firestore
 * Eliminates all Google Sheets / Excel latency and timeout issues
 */
export async function getAllActiveNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  const db = getDb();

  // 1. Fetch directly from Firebase Firestore (primary source of truth)
  if (db) {
    try {
      const q = query(
        collection(db, "newsletter_subscribers"),
        where("status", "==", "active")
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const firestoreSubs: NewsletterSubscriber[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data() as NewsletterSubscriber;
          if (data && data.email && data.email.includes("@")) {
            firestoreSubs.push(data);
          }
        });

        // Sync with local store for offline/cache fallback
        saveLocalNewsletterSubscribers(firestoreSubs);
        return firestoreSubs;
      }
    } catch (err) {
      console.warn("[NewsletterStore] Firebase read error, falling back to cache:", err);
    }
  }

  // 2. Fallback to local store / memory cache
  const localList = getLocalNewsletterSubscribers().filter((s) => s.status === "active");
  return localList;
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

  if (memoryHistory.length > 0) {
    return memoryHistory;
  }

  try {
    if (fs.existsSync(HISTORY_FILE)) {
      const content = fs.readFileSync(HISTORY_FILE, "utf-8");
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryHistory = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Error reading local digest history:", err);
  }

  // Trigger non-blocking async fetch from Firebase if not loaded yet
  if (!isHistoryLoadedFromFirebase) {
    fetchDigestHistoryFromFirebase().catch(() => {});
  }

  return memoryHistory;
}

/**
 * Loads history from Firebase Firestore
 */
export async function fetchDigestHistoryFromFirebase(): Promise<DigestHistoryRecord[]> {
  const db = getDb();
  if (!db) return memoryHistory;

  try {
    isHistoryLoadedFromFirebase = true;
    const q = query(
      collection(db, "newsletter_digest_history"),
      orderBy("sentAt", "asc"),
      limit(100)
    );
    const snap = await getDocs(q);
    const historyList: DigestHistoryRecord[] = [];
    snap.forEach((d) => {
      historyList.push(d.data() as DigestHistoryRecord);
    });

    if (historyList.length > 0) {
      memoryHistory = historyList;
      ensureDirectory();
      try {
        fs.writeFileSync(HISTORY_FILE, JSON.stringify(historyList, null, 2), "utf-8");
      } catch {}
    }
    return memoryHistory;
  } catch (err) {
    console.warn("[NewsletterStore] Firebase history fetch warning:", err);
    return memoryHistory;
  }
}

/**
 * Records a dispatched digest topic in history (Firebase + local)
 */
export async function recordDigestSent(record: {
  topicTitle: string;
  category: string;
  recipientCount: number;
}): Promise<void> {
  ensureDirectory();
  const hash = record.topicTitle.toLowerCase().replace(/[^a-z0-9]/g, "");
  const id = `digest_${Date.now()}`;
  const newRecord: DigestHistoryRecord = {
    id,
    sentAt: new Date().toISOString(),
    topicTitle: record.topicTitle,
    category: record.category,
    topicHash: hash,
    recipientCount: record.recipientCount
  };

  const history = getDigestHistory();
  history.push(newRecord);
  const trimmed = history.slice(-100);
  memoryHistory = trimmed;

  try {
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(trimmed, null, 2), "utf-8");
  } catch (err) {
    console.warn("Error writing local digest history:", err);
  }

  // Persist to Firebase Firestore
  const db = getDb();
  if (db) {
    try {
      const docRef = doc(db, "newsletter_digest_history", id);
      await setDoc(docRef, newRecord);
    } catch (err) {
      console.warn("[NewsletterStore] Firebase recordDigestSent warning:", err);
    }
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

