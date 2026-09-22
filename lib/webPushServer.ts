import fs from "fs";
import path from "path";
import webpush from "web-push";
import { PushSubscriptionRecord, removePushSubscriber } from "./notificationStore";

interface VapidKeys {
  publicKey: string;
  privateKey: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const VAPID_FILE = path.join(DATA_DIR, "vapid_keys.json");
export const VAPID_SUBJECT = process.env.VAPID_SUBJECT || "mailto:support@organicmushroomsfarm.com";

export const VAPID_BUSINESS_IDENTITY = {
  subject: VAPID_SUBJECT,
  company: "Organic Mushrooms Farm India",
  website: "https://organicmushroomsfarm.com",
  supportEmail: "support@organicmushroomsfarm.com"
};

// Built-in stable production VAPID key pair (Guarantees zero-mismatch across Vercel serverless cold starts)
export const DEFAULT_VAPID_PUBLIC_KEY =
  "BLcm7PDB5n_VtCd8DlE3X6i-JCpcYq80rrXcoxSg9QuvyfNOIn8juCf1bY-FricU7xxTF0MxgNOZazPNHwPmtO4";
export const DEFAULT_VAPID_PRIVATE_KEY =
  "e6DCAl_nYEa5vYAr8n9n7-R68I2zzXNNanyjS9zEr78";

let cachedKeys: VapidKeys | null = null;

export function getOrGenerateVapidKeys(): VapidKeys {
  if (cachedKeys) return cachedKeys;

  // 1. Check process.env first
  const envPub = process.env.VAPID_PUBLIC_KEY || process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const envPriv = process.env.VAPID_PRIVATE_KEY;

  if (envPub && envPriv) {
    cachedKeys = { publicKey: envPub, privateKey: envPriv };
    webpush.setVapidDetails(VAPID_SUBJECT, cachedKeys.publicKey, cachedKeys.privateKey);
    return cachedKeys;
  }

  // 2. Check persistent disk file
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (fs.existsSync(VAPID_FILE)) {
      const content = fs.readFileSync(VAPID_FILE, "utf-8");
      const parsed = JSON.parse(content);
      if (parsed.publicKey && parsed.privateKey) {
        cachedKeys = parsed;
        webpush.setVapidDetails(VAPID_SUBJECT, cachedKeys!.publicKey, cachedKeys!.privateKey);
        return cachedKeys!;
      }
    }
  } catch (err) {
    console.warn("Failed reading stored VAPID keys:", err);
  }

  // 3. Fallback to permanent stable production key pair (Guarantees no mismatch on Vercel cold boot)
  cachedKeys = {
    publicKey: DEFAULT_VAPID_PUBLIC_KEY,
    privateKey: DEFAULT_VAPID_PRIVATE_KEY
  };

  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(VAPID_FILE, JSON.stringify(cachedKeys, null, 2), "utf-8");
  } catch {
    // Non-blocking if disk is read-only in serverless
  }

  webpush.setVapidDetails(VAPID_SUBJECT, cachedKeys.publicKey, cachedKeys.privateKey);
  return cachedKeys;
}

export async function sendWebPushNotification(
  subscriber: PushSubscriptionRecord,
  payload: {
    title: string;
    body: string;
    url: string;
    icon?: string;
    badge?: string;
    tag?: string;
  }
): Promise<{ success: boolean; statusCode?: number; error?: string }> {
  if (!subscriber.endpoint || !subscriber.keys?.p256dh || !subscriber.keys?.auth) {
    return {
      success: false,
      error: "Subscriber has no active web-push subscription endpoint/keys"
    };
  }

  try {
    const keys = getOrGenerateVapidKeys();
    webpush.setVapidDetails(VAPID_SUBJECT, keys.publicKey, keys.privateKey);

    const pushSubscription = {
      endpoint: subscriber.endpoint,
      keys: {
        p256dh: subscriber.keys.p256dh,
        auth: subscriber.keys.auth
      }
    };

    const notificationString = JSON.stringify({
      title: payload.title,
      body: payload.body,
      url: payload.url,
      icon: payload.icon || "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
      badge: payload.badge || "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
      tag: payload.tag || `omf-${Date.now()}`,
      vibrate: [200, 100, 200]
    });

    const response = await webpush.sendNotification(pushSubscription, notificationString, {
      TTL: 86400, // 24 hours
      urgency: "high"
    });

    return {
      success: true,
      statusCode: response.statusCode
    };
  } catch (err: any) {
    const statusCode = err.statusCode;
    // 404 Not Found or 410 Gone means the client unsubscribed or push token expired
    if (statusCode === 404 || statusCode === 410) {
      removePushSubscriber(subscriber.id);
    }

    return {
      success: false,
      statusCode,
      error: err.message || "Failed to send web push"
    };
  }
}
