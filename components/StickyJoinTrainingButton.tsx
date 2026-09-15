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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className={`cursor-pointer rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold shadow-[0_4px_25px_rgba(139,92,246,0.35)] hover:shadow-[0_4px_35px_rgba(139,92,246,0.55)] border border-purple-400/30 flex items-center gap-2 group backdrop-blur-md relative overflow-hidden px-3 py-2 text-[11px]`}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <BookOpen size={14} className="text-purple-200 group-hover:-rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10 whitespace-nowrap">Join Training</span>
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
