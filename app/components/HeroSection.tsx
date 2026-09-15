"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Layers,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Award,
  Users
} from "lucide-react";

export const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(35);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(Math.max(Math.round((scrollY / 600) * 100), 25), 95);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline, Description & High-conversion CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r from-purple-500/10 via-emerald-500/10 to-blue-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles size={14} className="text-emerald-500 animate-spin" style={{ animationDuration: "6s" }} />
            <span>ISO 9001:2015 Certified Farm Infrastructure & Training</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5">
            Start Highly Profitable{" "}
            <span className="gradient-text block mt-1">
              Organic Mushroom Farming
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Pan-India G1 pure laboratory spawn supplier, complete turnkey automated cold-room farm setup, NHB/NABARD subsidy project DPR preparation, and expert cultivation training.
          </p>

          {/* Quick Service Highlight Card */}
          <div className="mb-8 max-w-xl mx-auto lg:mx-0">
            <Link
              href="/workshop"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-purple-500/20 hover:border-purple-500/40 shadow-lg shadow-purple-500/5 transition-all hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold shrink-0">
                  <Building2 size={20} />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Upcoming Masterclass Workshop (₹199 Only)
                  </span>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                    Live batch, complete crop SOPs, and marketing guidance
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* High Conversion CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4 justify-center lg:justify-start mb-8">
            <Link
              href="/workshop"
              className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-purple-500/25"
            >
              <span>Join Masterclass - ₹199</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Mushroom%20Farming.%20Please%20provide%20training%20and%20setup%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#128C7E] dark:text-[#25D366] flex items-center justify-center gap-2 transition-all"
            >
              <span>WhatsApp Consultation</span>
            </a>
            <a
              href="tel:9203544140"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 transition-all"
            >
              <span>Call: +91 9203544140</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/5 dark:border-white/10 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                1,500+
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">
                Farms Commissioned
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                5,000+
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">
                Trained Growers
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">
                98.9%
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">
                Yield Success Rate
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Card & Farm Setup Highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 gradient-bg opacity-20 blur-[90px] rounded-full animate-pulse pointer-events-none" />

          <div className="relative glass rounded-3xl p-5 sm:p-7 border border-white/40 dark:border-white/10 shadow-2xl backdrop-blur-2xl">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    Turnkey Commercial Unit
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Industrial PUF Insulation Specs
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Active Unit
              </span>
            </div>

            {/* Metrics List */}
            <div className="space-y-3.5 mb-6">
              {[
                {
                  label: "Commercial Room Size",
                  value: "18 x 70 ft Standard",
                  icon: Layers,
                },
                {
                  label: "Annual Target Yield",
                  value: "35,000+ kg Button/Oyster",
                  icon: TrendingUp,
                },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <metric.icon size={18} className="text-purple-600 dark:text-purple-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      {metric.label}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Live Progress Tracker */}
            <div className="p-4 rounded-2xl bg-linear-to-br from-purple-500/10 to-emerald-500/10 border border-purple-500/15">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {scrollProgress < 50
                    ? "Phase 1: Substrate Preparation"
                    : scrollProgress < 80
                    ? "Phase 2: Inoculation & Spawn Run"
                    : "Phase 3: Cropping & Cold Chain"}
                </span>
                <span className="text-[10px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  Live Cycle {scrollProgress}%
                </span>
              </div>
              <div className="h-2 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full gradient-bg rounded-full"
                  animate={{ width: `${scrollProgress}%` }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                <span>Compost</span>
                <span>Spawning</span>
                <span>Harvest</span>
              </div>
            </div>

            {/* Floating ROI Pill */}
            <div className="absolute -top-4 -right-4 glass px-4 py-2.5 rounded-2xl border border-white/40 dark:border-white/10 shadow-xl flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-emerald-500" />
              </div>
              <div>
                <div className="text-[9px] text-slate-500 font-bold uppercase">
                  Verified ROI
                </div>
                <div className="text-xs font-black text-slate-900 dark:text-white">
                  120% Yearly Avg
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
