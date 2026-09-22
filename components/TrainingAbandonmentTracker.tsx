"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  getVisitorGeo,
  scheduleFunnelRecovery,
  cancelFunnelRecovery,
  FunnelType
} from "@/lib/notificationManager";

export function TrainingAbandonmentTracker() {
  const pathname = usePathname();
  const currentActiveFunnelRef = useRef<FunnelType | null>(null);
  const geoRef = useRef<{ state: string; language: string }>({
    state: "Madhya Pradesh",
    language: "hi"
  });

  useEffect(() => {
    // Resolve location quietly for state-tailored messaging
    getVisitorGeo().then((res) => {
      geoRef.current = { state: res.state, language: res.language };
    });

    const isSuccess =
      pathname?.includes("/success") ||
      pathname?.includes("/confirmation") ||
      pathname?.includes("/payment-success");

    if (isSuccess) {
      // User converted, cancel all pending recoveries
      cancelFunnelRecovery();
      if (typeof window !== "undefined") {
        sessionStorage.setItem("omf_converted_session", "true");
      }
      currentActiveFunnelRef.current = null;
      return;
    }

    // Determine current funnel based on active route
    let activeFunnel: FunnelType | null = null;

    if (
      pathname?.includes("/mushroomtrainingregistrationform") ||
      pathname?.includes("/training") ||
      pathname?.includes("/training-checkout") ||
      pathname?.includes("/workshop")
    ) {
      activeFunnel = "training";
    } else if (
      pathname?.includes("/spawn-seed") ||
      pathname?.includes("/spawn-seeds")
    ) {
      activeFunnel = "spawn";
    } else if (pathname?.includes("/subsidy")) {
      activeFunnel = "subsidy";
    } else if (
      pathname?.includes("/business-plan") ||
      pathname?.includes("/roi-calculator") ||
      pathname?.includes("/mushroomfarmingcalculators")
    ) {
      activeFunnel = "calculator";
    } else if (
      pathname?.includes("/book-consultant") ||
      pathname?.includes("/on-site-consultation")
    ) {
      activeFunnel = "consultant";
    } else if (pathname?.includes("/equipment")) {
      activeFunnel = "equipment";
    }

    if (activeFunnel) {
      currentActiveFunnelRef.current = activeFunnel;
      // If user came back or navigated inside the funnel, cancel previous recovery for this funnel
      cancelFunnelRecovery(activeFunnel);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const isConverted = sessionStorage.getItem("omf_converted_session") === "true";
        if (currentActiveFunnelRef.current && !isConverted) {
          // User exited or switched tabs without converting - schedule 10s recovery notification
          scheduleFunnelRecovery(
            currentActiveFunnelRef.current,
            geoRef.current.state,
            geoRef.current.language
          );
        }
      } else if (document.visibilityState === "visible") {
        // User came back to the website, cancel pending recovery
        if (currentActiveFunnelRef.current) {
          cancelFunnelRecovery(currentActiveFunnelRef.current);
        }
      }
    };

    const handlePageHide = () => {
      const isConverted = sessionStorage.getItem("omf_converted_session") === "true";
      if (currentActiveFunnelRef.current && !isConverted) {
        scheduleFunnelRecovery(
          currentActiveFunnelRef.current,
          geoRef.current.state,
          geoRef.current.language
        );
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [pathname]);

  return null;
}
