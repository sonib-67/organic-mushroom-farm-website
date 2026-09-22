import fs from "fs";
import path from "path";
import { getAllPushSubscribers, recordPushSent } from "./notificationStore";
import { generateDailyAiNotification } from "./aiNotificationGenerator";
import { sendWebPushNotification } from "./webPushServer";

const DATA_DIR = path.join(process.cwd(), ".data");
const HISTORY_FILE = path.join(DATA_DIR, "cron_history.json");

let isSchedulerRunning = false;
let checkInterval: NodeJS.Timeout | null = null;

function getExecutionHistory(): Record<string, string> {
  try {
    if (fs.existsSync(HISTORY_FILE)) {
      const data = fs.readFileSync(HISTORY_FILE, "utf-8");
      return JSON.parse(data) || {};
    }
  } catch (err) {
    console.warn("Failed reading cron history:", err);
  }
  return {};
}

function recordExecution(slotKey: string) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const history = getExecutionHistory();
    history[slotKey] = new Date().toISOString();
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), "utf-8");
  } catch (err) {
    console.warn("Failed writing cron history:", err);
  }
}

export async function executeDailyNotificationDispatch(forcedSlot?: "10am" | "5pm") {
  const subscribers = getAllPushSubscribers();
  const nowIst = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  const hour = nowIst.getUTCHours();
  const dateStr = nowIst.toISOString().slice(0, 10);

  const activeSlot: "10am" | "5pm" = forcedSlot || (hour < 14 ? "10am" : "5pm");
  const slotKey = `${dateStr}_${activeSlot}`;

  const stateCache: Record<string, any> = {};
  const results: Array<{
    subscriberId: string;
    state: string;
    slot: string;
    title: string;
    url: string;
    pushSent: boolean;
    pushError?: string;
  }> = [];

  for (const sub of subscribers) {
    const state = sub.state || "Madhya Pradesh";
    const lang = sub.language || "hi";
    const cacheKey = `${state}_${lang}_${activeSlot}`;

    if (!stateCache[cacheKey]) {
      stateCache[cacheKey] = await generateDailyAiNotification(activeSlot, state, lang);
    }

    const msg = stateCache[cacheKey];
    recordPushSent(sub.id, `${activeSlot}_${dateStr}`);

    let pushSent = false;
    let pushError: string | undefined = undefined;

    // Send Web Push if subscriber has browser push credentials
    if (sub.endpoint && sub.keys?.p256dh && sub.keys?.auth) {
      const pushRes = await sendWebPushNotification(sub, {
        title: msg.title,
        body: msg.body,
        url: msg.url,
        tag: `omf-${activeSlot}-${dateStr}`
      });
      pushSent = pushRes.success;
      pushError = pushRes.error;
    }

    results.push({
      subscriberId: sub.id,
      state,
      slot: activeSlot,
      title: msg.title,
      url: msg.url,
      pushSent,
      pushError
    });
  }

  recordExecution(slotKey);

  return {
    slot: activeSlot,
    date: dateStr,
    totalSubscribers: subscribers.length,
    results
  };
}

export function startBackgroundCronScheduler() {
  if (isSchedulerRunning) return;
  isSchedulerRunning = true;

  console.log("⏰ [OMF Push Scheduler] Initialized background cron checker for 10:00 AM & 5:00 PM IST");

  // Run initial check after 5 seconds, then every 30 seconds
  setTimeout(checkAndRunScheduledTimes, 5000);

  checkInterval = setInterval(() => {
    checkAndRunScheduledTimes().catch((err) => {
      console.error("[OMF Push Scheduler Error]:", err);
    });
  }, 30000);
}

async function checkAndRunScheduledTimes() {
  const nowIst = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  const hour = nowIst.getUTCHours();
  const minute = nowIst.getUTCMinutes();
  const dateStr = nowIst.toISOString().slice(0, 10);

  const history = getExecutionHistory();

  // Check 10:00 AM IST (window between 10:00 and 10:30)
  if (hour === 10 && minute >= 0 && minute <= 30) {
    const key = `${dateStr}_10am`;
    if (!history[key]) {
      console.log(`⏰ [OMF Push Scheduler] Triggering 10:00 AM IST daily notification for ${dateStr}`);
      await executeDailyNotificationDispatch("10am");
    }
  }

  // Check 5:00 PM IST (17:00, window between 17:00 and 17:30)
  if (hour === 17 && minute >= 0 && minute <= 30) {
    const key = `${dateStr}_5pm`;
    if (!history[key]) {
      console.log(`⏰ [OMF Push Scheduler] Triggering 5:00 PM IST daily notification for ${dateStr}`);
      await executeDailyNotificationDispatch("5pm");
    }
  }
}
