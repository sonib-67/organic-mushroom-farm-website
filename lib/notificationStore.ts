import fs from "fs";
import path from "path";

export interface PushSubscriptionRecord {
  id: string; // generated client hash or endpoint hash
  endpoint?: string;
  keys?: {
    p256dh?: string;
    auth?: string;
  };
  state: string; // e.g. "Madhya Pradesh", "Maharashtra", "Punjab"
  country: string; // e.g. "India"
  language: string; // e.g. "hi", "en"
  ipAddress?: string;
  deviceFingerprint?: string;
  userAgent?: string;
  subscribedAt: string;
  lastSentAt?: string;
  sentTemplates: string[]; // List of template IDs already sent to prevent duplicates
}

const DATA_DIR = path.join(process.cwd(), ".data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "push_subscribers.json");

// Fast in-memory Map
const subscribersMap = new Map<string, PushSubscriptionRecord>();
let isInitialized = false;

function initStore() {
  if (isInitialized) return;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
      const content = fs.readFileSync(SUBSCRIBERS_FILE, "utf-8");
      if (content) {
        const records: PushSubscriptionRecord[] = JSON.parse(content);
        if (Array.isArray(records)) {
          subscribersMap.clear();
          for (const rec of records) {
            if (rec && rec.id) {
              subscribersMap.set(rec.id, rec);
            }
          }
        }
      }
    }
  } catch (err) {
    console.error("Failed to initialize push subscribers store:", err);
  } finally {
    isInitialized = true;
  }
}

function persistStore() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const list = Array.from(subscribersMap.values());
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(list, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to persist push subscribers store:", err);
  }
}

export function savePushSubscriber(data: {
  id?: string;
  endpoint?: string;
  keys?: { p256dh?: string; auth?: string };
  state?: string;
  country?: string;
  language?: string;
  ipAddress?: string;
  deviceFingerprint?: string;
  userAgent?: string;
}): PushSubscriptionRecord {
  initStore();

  const id =
    data.id ||
    (data.endpoint
      ? Buffer.from(data.endpoint).toString("base64").slice(-32)
      : "sub_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8));

  const existing = subscribersMap.get(id);

  const record: PushSubscriptionRecord = {
    id,
    endpoint: data.endpoint || existing?.endpoint,
    keys: data.keys || existing?.keys,
    state: data.state || existing?.state || "Madhya Pradesh",
    country: data.country || existing?.country || "India",
    language: data.language || existing?.language || "hi",
    ipAddress: data.ipAddress || existing?.ipAddress,
    deviceFingerprint: data.deviceFingerprint || existing?.deviceFingerprint,
    userAgent: data.userAgent || existing?.userAgent,
    subscribedAt: existing?.subscribedAt || new Date().toISOString(),
    lastSentAt: existing?.lastSentAt,
    sentTemplates: existing?.sentTemplates || []
  };

  subscribersMap.set(id, record);
  persistStore();

  return record;
}

export function getAllPushSubscribers(): PushSubscriptionRecord[] {
  initStore();
  return Array.from(subscribersMap.values());
}

export function recordPushSent(id: string, templateId: string): void {
  initStore();
  const sub = subscribersMap.get(id);
  if (sub) {
    sub.lastSentAt = new Date().toISOString();
    if (!sub.sentTemplates.includes(templateId)) {
      sub.sentTemplates.push(templateId);
    }
    subscribersMap.set(id, sub);
    persistStore();
  }
}

export function getSubscriberCount(): { total: number; byState: Record<string, number> } {
  initStore();
  const byState: Record<string, number> = {};
  for (const s of subscribersMap.values()) {
    const st = s.state || "Other";
    byState[st] = (byState[st] || 0) + 1;
  }
  return {
    total: subscribersMap.size,
    byState
  };
}
