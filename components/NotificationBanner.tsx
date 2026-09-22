"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bell, X, Check, Sparkles } from "lucide-react";
import {
  isNotificationSupported,
  getNotificationPermission,
  subscribeToPush,
  isBannerDismissedOrMuted,
  recordBannerDismiss,
  getVisitorGeo,
  syncDailyNotificationSchedule,
  VisitorGeo
} from "@/lib/notificationManager";

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [geo, setGeo] = useState<VisitorGeo | null>(null);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if browser supports notifications
    if (!isNotificationSupported()) return;

    // If user already granted permission, ensure daily 10am/5pm IST schedule is synced!
    if (getNotificationPermission() === "granted") {
      syncDailyNotificationSchedule();
      return;
    }

    if (isBannerDismissedOrMuted()) {
      return;
    }

    // 1. Resolve State/Location early in background (non-blocking)
    getVisitorGeo().then((res) => {
      setGeo(res);
    });

    // 2. Exact user requirement: Open after 3 seconds
    const showTimeout = setTimeout(() => {
      // Re-check before showing
      if (getNotificationPermission() !== "granted" && !isBannerDismissedOrMuted()) {
        setIsVisible(true);

        // 3. Exact user requirement: Stay visible for 10 seconds, then auto-dismiss
        timerRef.current = setTimeout(() => {
          handleAutoDismiss();
        }, 10000);
      }
    }, 3000);

    // Listen for custom event if permission granted elsewhere (e.g. via WhatsApp tap)
    const handleStatusChanged = (e: Event) => {
      const customEvent = e as CustomEvent<{ status: string }>;
      if (customEvent.detail?.status === "granted") {
        setIsSubscribed(true);
        setTimeout(() => setIsVisible(false), 1800);
      }
    };
    window.addEventListener("omf-push-status-changed", handleStatusChanged as EventListener);

    return () => {
      clearTimeout(showTimeout);
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("omf-push-status-changed", handleStatusChanged as EventListener);
    };
  }, []);

  const handleAutoDismiss = () => {
    setIsVisible(false);
  };

  const handleManualClose = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    recordBannerDismiss();
    setIsVisible(false);
  };

  const handleAllow = async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsSubscribing(true);

    try {
      const res = await subscribeToPush();
      if (res.success && res.permission === "granted") {
        setIsSubscribed(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      } else {
        handleManualClose();
      }
    } catch {
      handleManualClose();
    } finally {
      setIsSubscribing(false);
    }
  };

  if (!isVisible) return null;

  const stateName = geo?.state || "India";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="pointer-events-auto w-[calc(100%-16px)] sm:w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-4xl mt-1.5 mx-auto z-40"
        >
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-emerald-500/30 dark:border-emerald-500/25 shadow-[0_8px_25px_-5px_rgba(16,185,129,0.15),0_2px_10px_-2px_rgba(0,0,0,0.08)] backdrop-blur-xl px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3">
            {/* Subtle Neon Glow Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.06] via-purple-500/[0.04] to-sky-500/[0.05] pointer-events-none" />

            {/* Left: Icon & Text */}
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 relative z-10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 shadow-xs">
                {isSubscribed ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Bell className="w-4 h-4 animate-bounce" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                {isSubscribed ? (
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Notifications Active!</span>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 truncate flex items-center gap-1">
                      <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">[{stateName}]</span>
                      <span>Mushroom Training & Farm Updates</span>
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      Get timely batch alerts, government subsidy guides & market rates
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 relative z-10">
              {!isSubscribed && (
                <button
                  type="button"
                  onClick={handleAllow}
                  disabled={isSubscribing}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-[11px] sm:text-xs shadow-xs hover:shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  aria-label="Allow Notifications"
                >
                  <Bell className="w-3 h-3" />
                  <span>{isSubscribing ? "Activating..." : "Allow Notifications"}</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleManualClose}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close notification banner"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
