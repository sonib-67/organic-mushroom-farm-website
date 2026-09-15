"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  Phone,
  ChevronUp,
  Sparkles,
  BookOpen,
  Sprout,
  Building2,
  Layers,
  Calculator,
  Calendar
} from "lucide-react";
import { TrainingModal } from "./TrainingModal";

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTrainingModal, setShowTrainingModal] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mobileNavItems = [
    {
      label: "Masterclass ₹199",
      href: "/workshop",
      icon: Sparkles,
      highlight: true,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Mushroom%20Farming.",
      icon: MessageCircle,
      isExternal: true,
      color: "text-emerald-500",
    },
    {
      label: "Spawn (Seed)",
      href: "/spawn-seed",
      icon: Sprout,
    },
    {
      label: "Turnkey Setup",
      href: "/#farming-models",
      icon: Building2,
    },
    {
      label: "ROI Calculator",
      href: "/roi-calculator",
      icon: Calculator,
    },
    {
      label: "Call Us",
      href: "tel:9203544140",
      icon: Phone,
      isExternal: true,
    },
  ];

  return (
    <>
      {/* Training Plan Modal */}
      <TrainingModal
        isOpen={showTrainingModal}
        onClose={() => setShowTrainingModal(false)}
      />

      {/* Floating Buttons: Right Side (WhatsApp + Scroll To Top) */}
      <div className="fixed right-3 sm:right-6 bottom-20 md:bottom-8 z-50 flex flex-col items-end gap-3 pointer-events-none">
        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:scale-110 active:scale-95 shadow-xl transition-transform pointer-events-auto cursor-pointer"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Button */}
        <div className="flex flex-col items-center gap-1.5 pointer-events-auto">
          <motion.a
            href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Mushroom%20Farming.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_4px_35px_rgba(37,211,102,0.65)] flex items-center justify-center relative group"
            aria-label="Contact Organic Mushrooms Farm on WhatsApp"
          >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <MessageCircle size={28} className="relative z-10" />
          </motion.a>
          <span className="text-[10px] sm:text-xs font-bold text-slate-900 dark:text-white bg-white/90 dark:bg-black/90 px-2.5 py-0.5 rounded-full border border-black/10 dark:border-white/20 shadow-md backdrop-blur-md">
            WhatsApp
          </span>
        </div>
      </div>

      {/* Floating Buttons: Left Side (Join Training Sticky Pill) */}
      <div className="fixed left-3 sm:left-6 bottom-20 md:bottom-8 z-50 flex flex-col items-start gap-3 pointer-events-none">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowTrainingModal(true)}
          className="pointer-events-auto cursor-pointer px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-linear-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-purple-600/30 border border-purple-400/30 flex items-center gap-2 group backdrop-blur-md"
        >
          <BookOpen size={16} className="text-purple-200 group-hover:rotate-12 transition-transform" />
          <span>Join Training</span>
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] uppercase font-black tracking-wider">
            ₹199
          </span>
        </motion.button>
      </div>

      {/* Mobile Sticky Horizontal Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/85 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
        <div className="overflow-x-auto scrollbar-hide snap-x flex items-center gap-2 p-2.5 px-3">
          {mobileNavItems.map((item, idx) => {
            const isCurrent = pathname === item.href;

            if (item.isExternal) {
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`snap-start shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all active:scale-95 ${
                    item.highlight
                      ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30 font-bold"
                      : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <item.icon size={14} className={item.color || "text-purple-400"} />
                  <span className="whitespace-nowrap">{item.label}</span>
                </a>
              );
            }

            return (
              <Link
                key={idx}
                href={item.href}
                className={`snap-start shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all active:scale-95 ${
                  item.highlight || isCurrent
                    ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30 font-bold"
                    : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10"
                }`}
              >
                <item.icon size={14} className="text-purple-400" />
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
