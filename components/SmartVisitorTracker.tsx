"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function getDeviceType(): "Mobile" | "Tablet" | "Desktop" {
  if (typeof window === "undefined") return "Desktop";
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return "Tablet";
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle/i.test(ua)) {
    return "Mobile";
  }
  return "Desktop";
}

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let sid = sessionStorage.getItem("omf_v_sid");
    if (!sid) {
      sid = "s_" + Math.random().toString(36).substring(2, 10) + "_" + Date.now().toString(36);
      sessionStorage.setItem("omf_v_sid", sid);
    }
    return sid;
  } catch {
    return "s_" + Math.random().toString(36).substring(2, 10);
  }
}

/**
 * SmartVisitorTracker
 * - Starts strictly 3.5 seconds AFTER the page mounts (Zero impact on initial load/FCP/LCP)
 * - Ignores quick bounces (< 3.5s bots or accidental clicks)
 * - Captures pages navigated, duration, device type, and referrer
 * - Sends session data to /api/tracker/session
 */
export default function SmartVisitorTracker() {
  const pathname = usePathname();
  const sessionStartedRef = useRef(false);
  const mountTimeRef = useRef<number>(Date.now());
  const activeDurationRef = useRef<number>(0);
  const sessionIdRef = useRef<string>("");

  useEffect(() => {
    // Check if we are in browser
    if (typeof window === "undefined") return;

    sessionIdRef.current = getOrCreateSessionId();
    mountTimeRef.current = Date.now();

    // DELAY 3.5 SECONDS before initiating tracker
    const timer = setTimeout(() => {
      sessionStartedRef.current = true;
      const device = getDeviceType();
      const referrer = document.referrer || "Direct / Organic";
      const screenRes = `${window.innerWidth}x${window.innerHeight}`;

      // Send initial 'enter' heartbeat
      try {
        fetch("/api/tracker/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: JSON.stringify({
            action: "enter",
            sessionId: sessionIdRef.current,
            path: pathname || "/",
            referrer,
            device,
            screen: screenRes,
          }),
        }).catch(() => {
          // Fail silently without disturbing the user
        });
      } catch {
        // Silent
      }
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []); // Run once on mount

  // Track route changes after initial 3.5s activation
  useEffect(() => {
    if (!sessionStartedRef.current || !sessionIdRef.current) return;

    try {
      fetch("/api/tracker/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          action: "pageview",
          sessionId: sessionIdRef.current,
          path: pathname || "/",
        }),
      }).catch(() => {});
    } catch {
      // Silent
    }
  }, [pathname]);

  // Track session exit / duration when user leaves or switches tab
  useEffect(() => {
    const handleExit = () => {
      if (!sessionStartedRef.current || !sessionIdRef.current) return;

      const elapsed = Math.round((Date.now() - mountTimeRef.current) / 1000);
      activeDurationRef.current += elapsed;

      const payload = JSON.stringify({
        action: "leave",
        sessionId: sessionIdRef.current,
        path: pathname || "/",
        durationSeconds: activeDurationRef.current,
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/tracker/session", payload);
      } else {
        fetch("/api/tracker/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: payload,
        }).catch(() => {});
      }
    };

    window.addEventListener("pagehide", handleExit);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        handleExit();
      }
    });

    return () => {
      window.removeEventListener("pagehide", handleExit);
    };
  }, [pathname]);

  // Completely invisible component - zero UI footprint
  return null;
}
