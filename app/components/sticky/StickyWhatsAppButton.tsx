'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ChevronUp } from 'lucide-react';

export const StickyWhatsAppButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="floating-button-wrapper fixed right-3 md:right-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-end pointer-events-none bottom-[65px] md:bottom-[20px]">
      <div className="flex flex-col items-center gap-1.5 pointer-events-auto">
        <motion.a
          href="https://wa.me/919203544140"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Organic Mushrooms Farm on WhatsApp"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all z-10 shrink-0 group relative cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></div>
          <MessageCircle size={22} className="md:w-[32px] md:h-[32px] relative z-10" />
        </motion.a>
        <span className="text-[9px] md:text-[11px] font-bold text-slate-800 dark:text-slate-200 shadow-sm leading-tight bg-white/70 dark:bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-md border border-black/10 dark:border-white/20 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </div>

      {/* Scroll To Top (Desktop) */}
      {showScrollTop && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full dark:text-slate-400 text-slate-600 flex items-center justify-center hover:dark:bg-white/10 bg-black/10 transition-all hidden md:flex pointer-events-auto cursor-pointer border dark:border-white/10 border-black/10 backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </div>
  );
};
