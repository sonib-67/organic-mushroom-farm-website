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
  todaySendCount?: number;
  lastSendDate?: string; // YYYY-MM-DD in IST
  sentTemplates: string[]; // List of template IDs already sent to prevent duplicates
}

export interface AntiFatigueOptions {
  minCooldownMinutes?: number; // default: 240 (4 hours)
  maxPerDay?: number;          // default: 2 per calendar day
  bypassQuietHours?: boolean;  // default: false (quiet hours 9 PM - 8 AM IST)
}

export interface AntiFatigueStatus {
  allowed: boolean;
  reason?: string;
  remainingMinutes?: number;
  todayCount: number;
  maxPerDay: number;
}

/**
 * Anti-Fatigue / Cooldown Engine:
 * Prevents notification fatigue, user annoyance, and Chrome spam flagging.
 * Enforces:
 * 1. 4-hour minimum spacing between any notifications to the same device
 * 2. Maximum 2 notifications per calendar day
 * 3. Quiet hours between 9:00 PM and 8:00 AM IST
 */
export function evaluateAntiFatigueCooldown(
  sub: PushSubscriptionRecord,
  options?: AntiFatigueOptions
): AntiFatigueStatus {
  const minCooldownMinutes = options?.minCooldownMinutes ?? 240; // 4 hours default
  const maxPerDay = options?.maxPerDay ?? 2;

  // Calculate current IST date and hour
  const nowIst = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  const todayIstDate = nowIst.toISOString().slice(0, 10);
  const currentIstHour = nowIst.getUTCHours();

  const todayCount = sub.lastSendDate === todayIstDate ? (sub.todaySendCount || 0) : 0;

  // 1. Quiet Hours Enforcement (No notifications between 9:00 PM and 8:00 AM IST)
  if (!options?.bypassQuietHours && (currentIstHour < 8 || currentIstHour >= 21)) {
    return {
      allowed: false,
      reason: `Quiet hours active (${currentIstHour}:00 IST). Notifications permitted between 8:00 AM and 9:00 PM IST only.`,
      remainingMinutes: 0,
      todayCount,
      maxPerDay
    };
  }

  // 2. Minimum Inter-Notification Interval (Anti-Fatigue Cooldown)
  if (sub.lastSentAt) {
    const elapsedMs = Date.now() - new Date(sub.lastSentAt).getTime();
    const minCooldownMs = minCooldownMinutes * 60 * 1000;
    if (elapsedMs < minCooldownMs) {
      const remainingMinutes = Math.ceil((minCooldownMs - elapsedMs) / (60 * 1000));
      return {
        allowed: false,
        reason: `Anti-fatigue cooldown active (${remainingMinutes}m remaining). Minimum gap between pushes is ${Math.round(minCooldownMinutes / 60)}h.`,
        remainingMinutes,
        todayCount,
        maxPerDay
      };
    }
  }

  // 3. Daily Frequency Cap (Max 2 per day)
  if (todayCount >= maxPerDay) {
    return {
      allowed: false,
      reason: `Daily frequency limit reached (${todayCount}/${maxPerDay} notifications sent today).`,
      remainingMinutes: 0,
      todayCount,
      maxPerDay
    };
  }

  return {
    allowed: true,
    todayCount,
    maxPerDay
  };
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
    todaySendCount: existing?.todaySendCount,
    lastSendDate: existing?.lastSendDate,
    sentTemplates: existing?.sentTemplates || []
  };

  subscribersMap.set(id, record);
  persistStore();

  return record;
}

export function removePushSubscriber(id: string): void {
  initStore();
  if (subscribersMap.has(id)) {
    subscribersMap.delete(id);
    persistStore();
  }
}

export function getAllPushSubscribers(): PushSubscriptionRecord[] {
  initStore();
  return Array.from(subscribersMap.values());
}

export function recordPushSent(id: string, templateId: string): void {
  initStore();
  const sub = subscribersMap.get(id);
  if (sub) {
    const nowIst = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
    const todayDateStr = nowIst.toISOString().slice(0, 10);

    sub.lastSentAt = new Date().toISOString();
    if (sub.lastSendDate === todayDateStr) {
      sub.todaySendCount = (sub.todaySendCount || 0) + 1;
    } else {
      sub.lastSendDate = todayDateStr;
      sub.todaySendCount = 1;
    }

    if (!sub.sentTemplates) {
      sub.sentTemplates = [];
    }
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
