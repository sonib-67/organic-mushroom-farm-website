"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import { FloatingWidgetsLayer } from "@/components/FloatingWidgetsLayer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { FloatingBottomMenu } from "@/components/FloatingBottomMenu";

export function ConditionalWidgets() {
  const pathname = usePathname();
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);

  useEffect(() => {
    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ isOpen: boolean }>;
      setIsOfflineModalOpen(Boolean(customEvent.detail?.isOpen));
    };

    window.addEventListener(
      "omf-offline-checklist-toggle",
      handleToggle as EventListener
    );

    if (typeof document !== "undefined") {
      setIsOfflineModalOpen(
        document.body.classList.contains("offline-checklist-open")
      );
    }

    return () => {
      window.removeEventListener(
        "omf-offline-checklist-toggle",
        handleToggle as EventListener
      );
    };
  }, []);

  // Hide entirely on checkout pages
  const isCheckoutPage =
    pathname?.includes("/training-checkout") ||
    pathname?.includes("/checkout") ||
    pathname?.includes("/training/success") ||
    pathname?.includes("/training/cancel");

  // Hide sticky floating buttons on registration form and workshop pages so UI and fields are completely unobstructed
  const isFormOrWorkshopPage =
    pathname?.includes("/mushroomtrainingregistrationform") ||
    pathname?.includes("/training/register") ||
    pathname?.includes("/workshop");

  if (isCheckoutPage) {
    return null;
  }

  return (
    <>
      {/* Global Footer */}
      <Footer />

      {/* Floating Widgets Layer - Automatically hidden when offline checklist is active OR on registration form/workshop */}
      {!isOfflineModalOpen && !isFormOrWorkshopPage && (
        <>
          {/* ================= FLOATING STACK LAYER ================= */}
          <FloatingWidgetsLayer />

          {/* Right Side: WhatsApp Floating Action */}
          <WhatsAppWidget />

          {/* Bottom Mobile Scrollable Dock */}
          <FloatingBottomMenu />
        </>
      )}
    </>
  );
}

