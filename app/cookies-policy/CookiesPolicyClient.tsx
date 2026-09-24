"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Cookie, ShieldCheck, Database, Settings, HelpCircle, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function CookiesPolicyClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[12%] left-[10%] w-[360px] h-[360px] bg-amber-500/10 rounded-full blur-[110px] mix-blend-screen" />
        <div className="absolute bottom-[15%] right-[10%] w-[380px] h-[380px] bg-emerald-500/10 rounded-full blur-[110px] mix-blend-screen" />
      </div>

      <article className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-purple-500 opacity-60" />
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/[0.05] border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <Cookie className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Transparency & Privacy</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
            Cookies <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-emerald-500 to-purple-500">Policy</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
            Learn how Organic Mushrooms Farm uses cookies and local browser storage to provide a seamless, secure, and fast browsing experience.
          </p>
          <div className="pt-2 text-[9px] font-semibold text-slate-500 dark:text-slate-400">
            Last Updated: September 2026 • Effective Date: January 1, 2026
          </div>
        </header>

        {/* Content Section */}
        <motion.section 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 rounded-[2rem] p-6 md:p-10 shadow-sm space-y-8"
        >
          {/* Section 1: What Are Cookies */}
          <div className="space-y-3 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Cookie className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" /> 
              1. What Are Cookies and Local Storage?
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Cookies are small text files placed on your computer, tablet, or smartphone when you visit a website. In addition to cookies, modern web technologies use client-side local storage (HTML5 LocalStorage) to keep information directly on your browser. These tools allow our website to remember your preferences (such as your chosen language), protect your form entries from accidental loss, and provide relevant commercial information without slowing down your connection.
            </p>
          </div>

          {/* Section 2: How We Use Cookies */}
          <div className="space-y-3 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Database className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" /> 
              2. How Organic Mushrooms Farm Uses Cookies
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              We use cookies and browser storage strictly to improve your experience and ensure reliable services for mushroom farmers, trainees, and commercial clients:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 rounded-xl bg-white/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h3 className="text-[11px] md:text-xs font-bold text-slate-800 dark:text-slate-200">
                    Essential & Draft Recovery
                  </h3>
                </div>
                <p className="text-[9.5px] md:text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  When you fill out the <Link href="/mushroomtrainingregistrationform" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Training Registration Form</Link>, your progress is securely saved locally so you don’t lose your data if your network drops or your battery runs out.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <h3 className="text-[11px] md:text-xs font-bold text-slate-800 dark:text-slate-200">
                    Language & Preferences
                  </h3>
                </div>
                <p className="text-[9.5px] md:text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Stores your preferred language selection (e.g. Hindi, English, Punjabi, Tamil) across visits so you never have to re-select it on every page navigation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <h3 className="text-[11px] md:text-xs font-bold text-slate-800 dark:text-slate-200">
                    Visitor Support Intelligence
                  </h3>
                </div>
                <p className="text-[9.5px] md:text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Helps our agronomy team know via WhatsApp whether you are a new grower inquiring for the first time or a returning farmer needing course or setup support.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                  <h3 className="text-[11px] md:text-xs font-bold text-slate-800 dark:text-slate-200">
                    Security & Fraud Prevention
                  </h3>
                </div>
                <p className="text-[9.5px] md:text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Protects checkout flows, verifies genuine user submissions, and blocks automated bot abuse or duplicate registration submissions.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Categories of Cookies We Use */}
          <div className="space-y-3 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <ShieldCheck className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" /> 
              3. Categories of Cookies We Deploy
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[9.5px] md:text-[10.5px]">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/10 text-slate-900 dark:text-white font-bold">
                    <th className="py-2.5 px-3">Category</th>
                    <th className="py-2.5 px-3">Purpose</th>
                    <th className="py-2.5 px-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5 text-slate-600 dark:text-slate-400">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-800 dark:text-slate-200">Strictly Necessary</td>
                    <td className="py-2 px-3">Session handling, security tokens, anti-CSRF, and form crash protection.</td>
                    <td className="py-2 px-3">Session / 30 Days</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-800 dark:text-slate-200">Functional & Preference</td>
                    <td className="py-2 px-3">Language preference (<code className="text-[9px] bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded">googtrans</code>) and dark/light UI mode.</td>
                    <td className="py-2 px-3">Up to 1 Year</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-800 dark:text-slate-200">Third-Party Payment & Maps</td>
                    <td className="py-2 px-3">Razorpay, PayPal, and Google Maps security tokens for processing orders and farm locations.</td>
                    <td className="py-2 px-3">Provider Specific</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Managing and Disabling Cookies */}
          <div className="space-y-3 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Settings className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" /> 
              4. How You Can Control or Delete Cookies
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              You have the right to decide whether to accept or reject cookies. Most modern web browsers allow you to modify your settings to block cookies or delete cookies already set on your device.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[9.5px] md:text-[10.5px] text-slate-600 dark:text-slate-400 pl-2">
              <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies → Clear browsing data.</li>
              <li><strong>Apple Safari:</strong> Preferences → Privacy → Block all cookies or Manage Website Data.</li>
              <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data.</li>
              <li><strong>Android & iOS Devices:</strong> Go into browser settings (Chrome/Safari) and tap &quot;Clear Browsing Data&quot;.</li>
            </ul>
            <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 italic">
              Please note: Disabling strictly necessary cookies may prevent form auto-drafts from saving or reset your chosen language to English on reload.
            </p>
          </div>

          {/* Section 5: Updates and Contact */}
          <div className="space-y-3 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <HelpCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" /> 
              5. Questions & Contact Information
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              If you have any questions about our use of cookies or your personal privacy rights, please reach out to our team:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1 text-[10px] md:text-[11px]">
              <a 
                href="mailto:support@organicmushroomsfarm.com" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 font-bold hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                support@organicmushroomsfarm.com
              </a>
              <a 
                href="https://wa.me/919203544140" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 font-bold hover:text-emerald-500 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                +91 9203544140 (Support / WhatsApp)
              </a>
            </div>
          </div>

        </motion.section>

        {/* Footer Navigation Back to Legal Pages */}
        <div className="text-center pt-4 pb-2 text-[10px] text-slate-500 dark:text-slate-400">
          Also review our{" "}
          <Link href="/privacy" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/terms" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Terms of Service</Link>.
        </div>

      </article>
    </>
  );
}
