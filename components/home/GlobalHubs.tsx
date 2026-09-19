"use client";

import React from "react";
import Link from "next/link";

export const GlobalHubs = () => {
  return (
    <section className="py-12 md:py-16 px-4 lg:px-8 relative z-10 w-full overflow-hidden">
      {/* Ambient Liquid 3D Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[200px] bg-purple-500/5 dark:bg-purple-900/10 blur-[80px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest dark:text-purple-300 text-purple-700 mb-4 shadow-sm">
          TRAINING ACADEMY
        </div>
        
        <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 leading-tight mb-3 tracking-tight uppercase">
          LOCATION-BASED <span className="text-purple-600 dark:text-[#8B5CF6]">LEARNING</span> <span className="text-emerald-500 dark:text-[#10B981]">VERTICALS</span>
        </h2>
        
        <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mb-6">
          Comprehensive Mushroom Training
        </p>

        <div>
          <Link
            href="/pan-india-global-operations"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-white/10 dark:bg-black/20 border-t border-l border-white/40 dark:border-white/10 border-r border-b border-black/10 dark:border-black/50 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] transition-all backdrop-blur-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-white/5"
          >
            Pan India & Global Operations
          </Link>
        </div>
      </div>
    </section>
  );
};
