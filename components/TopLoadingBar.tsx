"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function RouteObserver({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    onNavigate();
  }, [pathname, searchParams, onNavigate]);

  return null;
}

export function TopLoadingBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const finishTimerRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (finishTimerRef.current) {
      clearTimeout(finishTimerRef.current);
      finishTimerRef.current = null;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setVisible(true);
    setProgress(15);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 40) return prev + 12;
        if (prev < 70) return prev + 6;
        if (prev < 88) return prev + 2;
        return prev;
      });
    }, 180);
  };

  const finish = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setProgress(100);

    finishTimerRef.current = setTimeout(() => {
      setVisible(false);
      finishTimerRef.current = setTimeout(() => {
        setProgress(0);
      }, 250);
    }, 200);
  };

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Find the closest anchor tag
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("javascript:") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      // Skip external links, new tabs, downloads
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(href, window.location.href);

        // Skip if navigating to the exact same URL
        if (
          currentUrl.origin === targetUrl.origin &&
          currentUrl.pathname === targetUrl.pathname &&
          currentUrl.search === targetUrl.search
        ) {
          return;
        }

        // Only start if same origin
        if (targetUrl.origin === window.location.origin) {
          start();
        }
      } catch {
        // invalid URL ignore
      }
    };

    const handlePopState = () => {
      start();
    };

    const handleCustomStart = () => start();
    const handleCustomStop = () => finish();

    document.addEventListener("click", handleAnchorClick, { capture: true });
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("omf-loading-start", handleCustomStart);
    window.addEventListener("omf-loading-stop", handleCustomStop);

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("omf-loading-start", handleCustomStart);
      window.removeEventListener("omf-loading-stop", handleCustomStop);
      if (timerRef.current) clearInterval(timerRef.current);
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <RouteObserver onNavigate={finish} />
      </Suspense>

      {/* Top Floating Neon Loading Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[999999] pointer-events-none transition-opacity duration-250 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          height: "2.5px",
        }}
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 transition-[width] duration-200 ease-out relative"
          style={{
            width: `${progress}%`,
            boxShadow:
              "0 0 10px rgba(168,85,247,0.8), 0 0 16px rgba(56,189,248,0.7), 0 0 8px rgba(16,185,129,0.8)",
          }}
        >
          {/* Leading luminous neon head pulse */}
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/80 to-white opacity-95 shadow-[0_0_12px_#ffffff,0_0_8px_#38bdf8]" />
        </div>
      </div>
    </>
  );
}

export default TopLoadingBar;
