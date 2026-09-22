// Client-Side Notification & Geolocation Manager
// Lightweight, non-blocking, zero-lag

export interface VisitorGeo {
  state: string;
  country: string;
  city: string;
  language: string;
}

const DEFAULT_GEO: VisitorGeo = {
  state: "Madhya Pradesh",
  country: "India",
  city: "Jabalpur",
  language: "hi"
};

export function isNotificationSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "Notification" in window &&
    "serviceWorker" in navigator
  );
}

export function getNotificationPermission(): NotificationPermission {
  if (!isNotificationSupported()) return "denied";
  return Notification.permission;
}

export async function getVisitorGeo(timeoutMs = 2500): Promise<VisitorGeo> {
  if (typeof window === "undefined") return DEFAULT_GEO;

  // 1. Check local cache first for 0ms instant response
  try {
    const cached = localStorage.getItem("omf_visitor_geo");
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && parsed.state) return parsed;
    }
  } catch {
    // ignore
  }

  // 2. Fetch from lightweight geo endpoint with strict timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const res = await fetch("https://get.geojs.io/v1/ip/geo.json", {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const state = data.region || "Madhya Pradesh";
      const country = data.country || "India";
      const city = data.city || "Jabalpur";

      // Simple language heuristic for Indian states
      const southStates = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana"];
      const isEnglishPreferred = southStates.includes(state) || country !== "India";
      const language = isEnglishPreferred ? "en" : "hi";

      const geoObj: VisitorGeo = { state, country, city, language };
      try {
        localStorage.setItem("omf_visitor_geo", JSON.stringify(geoObj));
      } catch {
        // ignore
      }
      return geoObj;
    }
  } catch {
    // timeout or network issue, gracefully fallback
  }

  return DEFAULT_GEO;
}

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export async function subscribeToPush(): Promise<{ success: boolean; permission: NotificationPermission }> {
  if (!isNotificationSupported()) {
    return { success: false, permission: "denied" };
  }

  try {
    // 1. CRITICAL FOR MOBILE CHROME: Request permission IMMEDIATELY on the direct user click gesture!
    // Never await other async tasks prior to this, otherwise Chrome revokes user gesture.
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      // Mark granted in localStorage immediately so refreshes never prompt again
      localStorage.setItem("omf_push_status", "granted");
      localStorage.removeItem("omf_notif_dismiss_count");
      localStorage.removeItem("omf_notif_muted_until");

      // 2. Register Service Worker in parallel/subsequent
      let registration: ServiceWorkerRegistration | null = null;
      try {
        registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/"
        });
        await navigator.serviceWorker.ready;
      } catch (swErr) {
        console.warn("ServiceWorker registration notice:", swErr);
      }

      // 3. Resolve location in background without blocking
      const geo = await getVisitorGeo();

      // 4. Genuine Web-Push Manager Subscription using VAPID Public Key
      let pushSub: PushSubscription | null = null;
      try {
        if (registration && "pushManager" in registration) {
          // Check existing subscription
          pushSub = await registration.pushManager.getSubscription();

          if (!pushSub) {
            // Fetch VAPID public key from backend
            const vapidRes = await fetch("/api/notifications/vapid-public-key");
            const vapidData = await vapidRes.json();

            if (vapidData.publicKey) {
              const convertedKey = urlBase64ToUint8Array(vapidData.publicKey);
              pushSub = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: convertedKey
              });
            }
          }
        }
      } catch (pushErr) {
        console.warn("PushManager VAPID subscription note:", pushErr);
      }

      const clientSubId =
        localStorage.getItem("omf_client_sub_id") ||
        "cli_" + Date.now() + "_" + Math.random().toString(36).substring(2, 9);
      localStorage.setItem("omf_client_sub_id", clientSubId);

      // 5. Send registration payload to backend
      try {
        await fetch("/api/notifications/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: clientSubId,
            endpoint: pushSub?.endpoint,
            keys: pushSub ? JSON.parse(JSON.stringify(pushSub)).keys : undefined,
            state: geo.state,
            country: geo.country,
            language: geo.language,
            userAgent: navigator.userAgent
          })
        });
      } catch (err) {
        console.warn("Could not sync push subscription to backend:", err);
      }

      // 6. EXACT USER REQUIREMENT: Trigger confirmation notification after 5 seconds
      // We send it to Service Worker so even if user closes/refreshes tab, it triggers!
      const notifPayload = {
        title: "🍄 Organic Mushroom Farm: Alerts Active!",
        options: {
          body: `Welcome! You will now receive timely ${geo.state} training batch alerts, daily profit tips & subsidy updates.`,
          icon: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
          badge: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
          tag: "omf-confirmation-5s",
          vibrate: [200, 100, 200],
          data: { url: "/training" }
        }
      };

      try {
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: "SCHEDULE_NOTIFICATION",
            delayMs: 5000,
            title: notifPayload.title,
            options: notifPayload.options
          });
        }
      } catch (postErr) {
        console.warn("Could not postMessage to SW controller:", postErr);
      }

      // Also keep window fallback timer
      setTimeout(async () => {
        try {
          if (registration) {
            registration.showNotification(notifPayload.title, notifPayload.options);
          }
        } catch (notifErr) {
          console.warn("Notice showing 5s confirmation notification fallback:", notifErr);
        }
      }, 5000);

      // 7. Schedule today's and tomorrow's 10:00 AM & 5:00 PM IST notifications
      syncDailyNotificationSchedule(geo.state, geo.language);

      return { success: true, permission };
    }

    return { success: false, permission };
  } catch (err) {
    console.error("Error subscribing to push notifications:", err);
    return { success: false, permission: "denied" };
  }
}

/**
 * Calculates exact milliseconds from now until the next occurrence of targetHour in IST (UTC + 5:30)
 */
function getMsUntilNextIstHour(targetHour: number): number {
  const now = new Date();
  // Current time in IST (offset +5.5 hours)
  const istOffsetMs = 5.5 * 60 * 60 * 1000;
  const nowIst = new Date(now.getTime() + istOffsetMs);

  const targetIst = new Date(nowIst);
  targetIst.setUTCHours(targetHour, 0, 0, 0);

  // If the target hour already passed today in IST, schedule for tomorrow
  if (targetIst.getTime() <= nowIst.getTime()) {
    targetIst.setUTCDate(targetIst.getUTCDate() + 1);
  }

  return targetIst.getTime() - nowIst.getTime();
}

/**
 * Local Daily Schedule Sync: Ensures 10:00 AM & 5:00 PM IST triggers are set up on client/ServiceWorker
 */
export async function syncDailyNotificationSchedule(stateName?: string, lang?: string): Promise<void> {
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission !== "granted" && localStorage.getItem("omf_push_status") !== "granted") {
    return;
  }

  const state = stateName || "Madhya Pradesh";
  const language = lang || "hi";

  const nowIst = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  const currentHour = nowIst.getUTCHours();
  const todayKey = nowIst.toISOString().slice(0, 10);

  try {
    // 1. Check if user is currently visiting within active window (10:00 - 11:00 AM or 17:00 - 18:00 PM)
    // and hasn't seen today's slot yet:
    if (currentHour >= 10 && currentHour < 12) {
      const shownKey = `omf_daily_shown_${todayKey}_10am`;
      if (!localStorage.getItem(shownKey)) {
        localStorage.setItem(shownKey, "true");
        fetchDailySlotAndShow("10am", state, language);
      }
    } else if (currentHour >= 17 && currentHour < 19) {
      const shownKey = `omf_daily_shown_${todayKey}_5pm`;
      if (!localStorage.getItem(shownKey)) {
        localStorage.setItem(shownKey, "true");
        fetchDailySlotAndShow("5pm", state, language);
      }
    }

    // 2. Schedule upcoming 10:00 AM IST in Service Worker
    const msTo10am = getMsUntilNextIstHour(10);
    const content10am = await fetch(`/api/notifications/daily-content?slot=10am&state=${encodeURIComponent(state)}&lang=${language}`).then(r => r.json()).catch(() => null);

    if (content10am?.message && navigator.serviceWorker?.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "SCHEDULE_DAILY_SLOT",
        timerKey: "daily_slot_10am",
        delayMs: msTo10am,
        title: content10am.message.title,
        options: {
          body: content10am.message.body,
          url: content10am.message.url,
          tag: `omf-10am-${todayKey}`
        }
      });
    }

    // 3. Schedule upcoming 5:00 PM IST in Service Worker
    const msTo5pm = getMsUntilNextIstHour(17);
    const content5pm = await fetch(`/api/notifications/daily-content?slot=5pm&state=${encodeURIComponent(state)}&lang=${language}`).then(r => r.json()).catch(() => null);

    if (content5pm?.message && navigator.serviceWorker?.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "SCHEDULE_DAILY_SLOT",
        timerKey: "daily_slot_5pm",
        delayMs: msTo5pm,
        title: content5pm.message.title,
        options: {
          body: content5pm.message.body,
          url: content5pm.message.url,
          tag: `omf-5pm-${todayKey}`
        }
      });
    }
  } catch (err) {
    console.warn("Could not sync daily notification schedule:", err);
  }
}

async function fetchDailySlotAndShow(slot: "10am" | "5pm", state: string, lang: string) {
  try {
    const res = await fetch(`/api/notifications/daily-content?slot=${slot}&state=${encodeURIComponent(state)}&lang=${lang}`);
    const data = await res.json();
    if (data?.message) {
      const reg = await navigator.serviceWorker?.ready;
      if (reg) {
        reg.showNotification(data.message.title, {
          body: data.message.body,
          icon: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
          badge: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
          vibrate: [200, 100, 200],
          data: { url: data.message.url },
          tag: `omf-daily-${slot}`
        } as any);
      }
    }
  } catch (err) {
    console.warn(`Error showing ${slot} daily notification:`, err);
  }
}

export function isBannerDismissedOrMuted(): boolean {
  if (typeof window === "undefined") return true;

  try {
    // If already granted in browser or in localStorage, never show banner again
    if (
      Notification.permission === "granted" ||
      localStorage.getItem("omf_push_status") === "granted"
    ) {
      return true;
    }

    // If explicitly denied in browser, don't nag user
    if (Notification.permission === "denied") {
      return true;
    }

    // User requirement: Removed the 2-times limit and 14-days mute.
    // The banner will show on visits until user allows or explicitly blocks.
    return false;
  } catch {
    // ignore
  }

  return false;
}

export function recordBannerDismiss(): void {
  if (typeof window === "undefined") return;
  try {
    const count = parseInt(localStorage.getItem("omf_notif_dismiss_count") || "0", 10) + 1;
    localStorage.setItem("omf_notif_dismiss_count", count.toString());
  } catch {
    // ignore
  }
}

export type FunnelType = "training" | "spawn" | "subsidy" | "calculator" | "consultant" | "equipment";

interface FunnelNotificationConfig {
  titleHi: string;
  titleEn: string;
  bodyHi: string;
  bodyEn: string;
  url: string;
}

const FUNNEL_CONFIGS: Record<FunnelType, FunnelNotificationConfig> = {
  training: {
    titleHi: "🍄 [{state}] मशरूम फार्मिंग प्रैक्टिकल ट्रेनिंग गाइड",
    titleEn: "🍄 [{state}] Mushroom Farming Practical Training & Subsidy Guide",
    bodyHi: "प्रैक्टिकल ट्रेनिंग बैच, सरकारी सब्सिडी DPR और पूरा सिलेबस उपलब्ध है। अपनी ट्रेनिंग डिटेल्स अभी देखें।",
    bodyEn: "Explore practical training batch dates, government subsidy support, and complete course syllabus.",
    url: "/training"
  },
  spawn: {
    titleHi: "🌱 [{state}] फ्रेश F1 लैब ग्रेड स्पॉन (बीज) गाइड",
    titleEn: "🌱 [{state}] Fresh F1 Lab-Grade Spawn Quality Alert",
    bodyHi: "उच्च उत्पादन वाले बटन व ऑयस्टर स्पॉन की पूरी जानकारी व 100% माइसेलियम शुद्धता रिपोर्ट देखें।",
    bodyEn: "View high-yield button and oyster pure mycelium spawn specifications and booking options.",
    url: "/spawn-seed"
  },
  subsidy: {
    titleHi: "🏛️ [{state}] मशरूम फार्म पर 40% से 50% सरकारी सब्सिडी!",
    titleEn: "🏛️ [{state}] 40% - 50% Govt Mushroom Farm Subsidy!",
    bodyHi: "क्या आप अपने जिले के लिए बैंक लोन और सरकारी DPR (प्रोजेक्ट रिपोर्ट) बनवाना चाहते हैं? अभी देखें।",
    bodyEn: "Apply for NHB/MIDH government subsidy & get complete bank project report assistance.",
    url: "/subsidy"
  },
  calculator: {
    titleHi: "💰 आपकी मशरूम प्रोजेक्ट प्रॉफिट रिपोर्ट तैयार है!",
    titleEn: "💰 Your Mushroom Project Profit & ROI Report Ready!",
    bodyHi: "कम जगह में ₹50,000+ का मासिक मुनाफा कैसे बनाएं? शेड लेआउट और लाइव ROI कैलकुलेटर अभी देखें।",
    bodyEn: "Explore detailed shed investment breakdown, monthly revenue & 100-bag farm ROI calculations.",
    url: "/business-plan"
  },
  consultant: {
    titleHi: "👨‍🌾 [{state}] सीनियर मशरूम फार्मिंग एक्सपर्ट एडवाइजरी",
    titleEn: "👨‍🌾 [{state}] Senior Mushroom Farming Advisory Session",
    bodyHi: "शेड निर्माण, तापमान नियंत्रण और कम्पोस्ट तकनीक पर 1-on-1 तकनीकी सलाह के लिए उपलब्ध स्लॉट्स देखें।",
    bodyEn: "Schedule your 1-on-1 technical advisory session on compost formulation, temperature & disease prevention.",
    url: "/book-consultant"
  },
  equipment: {
    titleHi: "⚙️ ग्रोइंग रूम उपकरण व ऑटोमation गाइड",
    titleEn: "⚙️ Growing Room Equipment & Setup Guide",
    bodyHi: "ह्यूमिडिफायर और ऑटो-कट कंट्रोलर की तकनीकी जानकारी। सही मशीन लगाकर बैग्स को सुरक्षित रखें।",
    bodyEn: "Explore ultrasonic humidifiers, foggers and digital temperature controllers for climate room.",
    url: "/equipment"
  }
};

/**
 * 10-Second Abandoned Funnel Recovery Trigger
 * When a visitor views a key commercial product/funnel page and leaves without converting,
 * this schedules a personalized notification 10 seconds after leaving.
 */
export function scheduleFunnelRecovery(funnel: FunnelType, stateName?: string, lang?: string): void {
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission !== "granted" && localStorage.getItem("omf_push_status") !== "granted") {
    return;
  }

  // Check if already sent recently in this session to prevent spamming
  const sessionKey = `omf_sent_recovery_${funnel}`;
  if (sessionStorage.getItem(sessionKey)) {
    return;
  }

  const state = stateName || "आपके राज्य";
  const isHindi = !lang || lang === "hi" || ["Madhya Pradesh", "Uttar Pradesh", "Bihar", "Rajasthan", "Haryana", "Delhi", "Chhattisgarh", "Jharkhand", "Uttarakhand", "Himachal Pradesh", "Punjab"].includes(state);

  const config = FUNNEL_CONFIGS[funnel];
  if (!config) return;

  const title = (isHindi ? config.titleHi : config.titleEn).replace("{state}", state);
  const body = isHindi ? config.bodyHi : config.bodyEn;

  try {
    sessionStorage.setItem(sessionKey, "true");

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "SCHEDULE_FUNNEL_RECOVERY",
        timerKey: `abandoned_${funnel}`,
        delayMs: 10000,
        title,
        options: {
          body,
          url: config.url,
          tag: `omf-${funnel}-recovery`,
          checkUrl: config.url,
          icon: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
          badge: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
        }
      });
    }
  } catch (err) {
    console.warn(`Could not postMessage SCHEDULE_FUNNEL_RECOVERY (${funnel}):`, err);
  }
}

export function cancelFunnelRecovery(funnel?: FunnelType): void {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
  try {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "CANCEL_FUNNEL_RECOVERY",
        timerKey: funnel ? `abandoned_${funnel}` : undefined
      });
    }
  } catch (err) {
    console.warn(`Could not postMessage CANCEL_FUNNEL_RECOVERY (${funnel}):`, err);
  }
}

// Backward compatibility helper
export function scheduleAbandonedTrainingRecovery(stateName?: string, lang?: string): void {
  scheduleFunnelRecovery("training", stateName, lang);
}

export function cancelAbandonedTrainingRecovery(): void {
  cancelFunnelRecovery("training");
}
