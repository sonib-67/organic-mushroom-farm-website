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

      // 4. Try to get PushManager subscription if supported
      let pushSub: PushSubscription | null = null;
      try {
        if (registration && "pushManager" in registration) {
          pushSub = await registration.pushManager.getSubscription();
        }
      } catch {
        // ignore
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
      setTimeout(async () => {
        try {
          if (registration) {
            registration.showNotification("🍄 Organic Mushroom Farm: Alerts Active!", {
              body: `Welcome! You will now receive timely ${geo.state} training batch alerts, daily profit tips & subsidy updates.`,
              icon: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
              badge: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
              tag: "omf-confirmation-5s",
              data: { url: "/mushroomtrainingregistrationform" }
            });
          }
        } catch (notifErr) {
          console.warn("Notice showing 5s confirmation notification:", notifErr);
        }
      }, 5000);

      // Notify other components
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("omf-push-status-changed", { detail: { status: "granted" } })
        );
      }

      return { success: true, permission: "granted" };
    } else {
      localStorage.setItem("omf_push_status", permission);
      return { success: false, permission };
    }
  } catch (err) {
    console.error("Push subscription error:", err);
    return { success: false, permission: "denied" };
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

    // Check 14-day mute expiration
    const mutedUntil = localStorage.getItem("omf_notif_muted_until");
    if (mutedUntil && Number(mutedUntil) > Date.now()) {
      return true;
    }

    // Check dismiss count (2 times rule requested by user)
    const count = parseInt(localStorage.getItem("omf_notif_dismiss_count") || "0", 10);
    if (count >= 2) {
      return true;
    }
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

    // If dismissed twice, mute for 14 days
    if (count >= 2) {
      const twoWeeksLater = Date.now() + 14 * 24 * 60 * 60 * 1000;
      localStorage.setItem("omf_notif_muted_until", twoWeeksLater.toString());
    }
  } catch {
    // ignore
  }
}
