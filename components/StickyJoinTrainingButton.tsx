"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen } from "lucide-react";
import { TrainingModal } from "@/app/components/TrainingModal";

export const StickyJoinTrainingButton = ({
  size = "normal",
}: {
  size?: "normal" | "small";
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMobileMenuToggle = (e: CustomEvent) => {
      setIsHidden(e.detail);
      if (e.detail) {
        setShowModal(false);
      }
    };
    window.addEventListener('mobileMenuToggle', handleMobileMenuToggle as EventListener);
    
    if (typeof document !== 'undefined') {
      setIsHidden(document.body.classList.contains('mobile-menu-open'));
    }

    return () => {
      window.removeEventListener('mobileMenuToggle', handleMobileMenuToggle as EventListener);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isHidden && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.2 }}
            className="pointer-events-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowModal(true)}
              className={`cursor-pointer rounded-full bg-linear-to-b from-sky-400/25 via-blue-500/20 to-sky-600/30 hover:from-sky-400/35 hover:via-blue-500/30 hover:to-sky-600/40 text-sky-950 dark:text-sky-100 font-bold shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.85),inset_0_-1px_2px_rgba(14,165,233,0.35),0_4px_16px_rgba(14,165,233,0.28)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),inset_0_-1px_2.5px_rgba(14,165,233,0.5),0_6px_22px_rgba(14,165,233,0.42)] border border-sky-300/70 dark:border-sky-400/50 flex items-center gap-1.5 group backdrop-blur-xl relative overflow-hidden transition-all duration-200 ${
                size === "small" ? "px-2.5 py-1 text-[10px]" : "px-3 py-1.5 text-[11px]"
              }`}
              aria-label="Join Mushroom Farming Training"
            >
              {/* Top Glass Specular Highlight */}
              <div className="absolute inset-x-0 top-0 h-[45%] bg-linear-to-b from-white/45 to-transparent rounded-t-full pointer-events-none" />
              
              {/* Interactive Hover Sheen */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full pointer-events-none" />
              
              <BookOpen
                size={size === "small" ? 12 : 13}
                className="text-sky-600 dark:text-sky-300 group-hover:-rotate-12 transition-transform duration-300 relative z-10 shrink-0"
              />
              <span className="relative z-10 whitespace-nowrap tracking-tight">Join Training</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <TrainingModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
};
