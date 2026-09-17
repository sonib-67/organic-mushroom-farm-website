"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AIChatWidget } from "@/components/AIChatWidget";
import { StickyJoinTrainingButton } from "@/components/StickyJoinTrainingButton";

export const FloatingWidgetsLayer = () => {
  const pathname = usePathname();
  const isTraining = pathname === "/training";

  return (
    <div 
      className={`fixed left-3 md:left-[30px] flex flex-col items-start pointer-events-none transition-all duration-300 ease-out z-[99999] ${
        isTraining 
          ? "bottom-[calc(65px+env(safe-area-inset-bottom))] md:bottom-[20px] gap-0" 
          : "bottom-[calc(65px+env(safe-area-inset-bottom))] md:bottom-[20px] gap-2 md:gap-4"
      }`}
    >
      <div className="pointer-events-auto">
        <AIChatWidget />
      </div>
      
      {!isTraining && (
        <div className="pointer-events-auto mt-0 md:mt-0">
          <div className="hidden md:block">
            <StickyJoinTrainingButton size="normal" />
          </div>
          <div className="md:hidden">
            <StickyJoinTrainingButton size="small" />
          </div>
        </div>
      )}
    </div>
  );
};
