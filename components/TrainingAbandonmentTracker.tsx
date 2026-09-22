"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  getVisitorGeo,
  scheduleAbandonedTrainingRecovery,
  cancelAbandonedTrainingRecovery
} from "@/lib/notificationManager";

export function TrainingAbandonmentTracker() {
  const pathname = usePathname();
  const hasEnteredTrainingRef = useRef(false);
  const geoRef = useRef<{ state: string; language: string }>({
    state: "Madhya Pradesh",
    language: "hi"
  });

  useEffect(() => {
    // Resolve location quietly for tailored messaging
    getVisitorGeo().then((res) => {
      geoRef.current = { state: res.state, language: res.language };
    });

    const isSuccess =
      pathname?.includes("/training/success") ||
      pathname?.includes("/success") ||
      pathname?.includes("/confirmation");

    if (isSuccess) {
      // Payment or registration completed, cancel any pending abandonment triggers
      cancelAbandonedTrainingRecovery();
      if (typeof window !== "undefined") {
        sessionStorage.setItem("omf_training_paid", "true");
      }
      return;
    }

    const isTrainingFunnel =
      pathname?.includes("/mushroomtrainingregistrationform") ||
      pathname?.includes("/training") ||
      pathname?.includes("/checkout");

    if (isTrainingFunnel) {
      hasEnteredTrainingRef.current = true;
      // If user came back, cancel previous scheduled recovery
      cancelAbandonedTrainingRecovery();
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const isPaid = sessionStorage.getItem("omf_training_paid") === "true";
        if (hasEnteredTrainingRef.current && !isPaid) {
          // User exited or switched tabs without paying - schedule 10s recovery notification
          scheduleAbandonedTrainingRecovery(
            geoRef.current.state,
            geoRef.current.language
          );
        }
      } else if (document.visibilityState === "visible") {
        // User came back to the website, cancel the 10s recovery notification
        cancelAbandonedTrainingRecovery();
      }
    };

    const handlePageHide = () => {
      const isPaid = sessionStorage.getItem("omf_training_paid") === "true";
      if (hasEnteredTrainingRef.current && !isPaid) {
        scheduleAbandonedTrainingRecovery(
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
