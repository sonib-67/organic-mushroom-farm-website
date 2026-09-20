"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ShieldAlert,
  Home,
  GraduationCap,
  MessageCircle,
  Phone,
  ArrowLeft,
  Briefcase,
  HelpCircle,
} from "lucide-react";

export default function Forbidden() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-8 md:py-16 text-center relative z-20">
      <title>403 - Access Restricted | Organic Mushroom Farm</title>
      <meta name="robots" content="noindex, nofollow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "403 - Access Restricted",
            description: "Access to this page or action is restricted.",
          }),
        }}
      />

      {/* Floating Ambient Glow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-amber-500/10 dark:bg-amber-500/15 blur-3xl" />
        <div className="w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/15 blur-3xl -ml-20 -mt-20" />
      </div>

      {/* Animated Shield Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-4 sm:mb-6"
      >
        <div className="relative inline-flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-purple-500/20 to-emerald-500/20 border border-amber-500/30 dark:border-amber-500/40 backdrop-blur-xl flex items-center justify-center shadow-xl shadow-amber-500/10">
            <ShieldAlert className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 dark:text-amber-400 animate-pulse" />
          </div>
          <span className="absolute -top-1.5 -right-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-white shadow-md">
            Restricted
          </span>
        </div>
      </motion.div>

      {/* 403 Big Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-7xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 mb-2 drop-shadow-sm select-none"
      >
        403
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2 max-w-xl"
      >
        Access Restricted / सुरक्षित पहुंच सूचना
      </motion.h2>

      {/* Subtitle / Explanation */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-6"
      >
        You do not have permission to access this resource, or your device registration limit has been reached.
        <span className="block mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          (Aap is page ya action ko access karne ke liye authorized nahi hain, ya aapke phone ki registration limit poori ho chuki hai.)
        </span>
      </motion.p>

      {/* Helpful Context Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="w-full max-w-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-white/10 p-4 sm:p-5 text-left mb-6 sm:mb-8 shadow-lg shadow-black/5"
      >
        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">
          <HelpCircle className="w-4 h-4 shrink-0" />
          <span>Possible Reasons (संभावित कारण):</span>
        </div>
        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
            <span>
              <strong>Registration Limit Reached:</strong> Is device se maximum 3 registrations pehle hi confirm ho chuki hain.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
            <span>
              <strong>Private / Restricted URL:</strong> Yeh internal administrative ya reserved route hai.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
            <span>
              <strong>Assistance Needed?</strong> Agar aap genuine candidate hain, to humari helpline par sampark karein.
            </span>
          </li>
        </ul>
      </motion.div>

      {/* Navigation & Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md"
      >
        <Link
          href="/"
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-bold py-3 px-5 rounded-xl shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Home className="w-4 h-4" />
          <span>Home Page</span>
        </Link>

        <Link
          href="/training"
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 hover:border-purple-500 text-sm font-bold py-3 px-5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Training Info</span>
        </Link>

        <a
          href="https://wa.me/919203544140?text=Hello%20Organic%20Mushroom%20Farm,%20I%20am%20getting%20a%20403%20Access%20Restricted%20notice%20on%20the%20website.%20Please%20help."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-3 px-5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Help</span>
        </a>
      </motion.div>

      {/* Direct Contact Phone Footer Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2"
      >
        <Phone className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
        <span>Direct Call Helpline: </span>
        <a
          href="tel:+919203544140"
          className="font-bold text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 underline underline-offset-2"
        >
          +91 9203544140
        </a>
      </motion.div>
    </div>
  );
}
