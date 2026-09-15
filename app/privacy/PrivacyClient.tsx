"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Shield, Database, Lock, Globe, Cookie, Phone } from "lucide-react";

export default function PrivacyClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Premium Background Effects (Glassmorphism, no black boxes) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <article className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 opacity-50" />
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/[0.05] border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <Shield className="w-3 h-3 text-indigo-500" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Data Security</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500">Policy</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
            How we collect, use, and protect your commercial data and personal information at Organic Mushrooms Farm.
          </p>
        </header>

        {/* Content Section */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 rounded-[2rem] p-6 md:p-10 shadow-sm space-y-8"
        >
          {/* Section 1 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Database className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" /> 
              1. Data Collection
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              We collect personal information such as your name, phone number, and email address when you register for <Link href="/training" className="text-indigo-600 font-bold hover:underline">commercial training</Link>, fill out an <Link href="/contact" className="text-indigo-600 font-bold hover:underline">enquiry form</Link> for <Link href="/turnkey-projects" className="text-indigo-600 font-bold hover:underline">turnkey projects</Link>, or contact us directly via WhatsApp.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Globe className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" /> 
              2. How We Use Data
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Your data is used strictly to provide training access, respond to commercial consultancy queries, and send relevant updates about mushroom farming market trends globally. We ensure absolute confidentiality and do not sell your personal data to third parties.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Lock className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" /> 
              3. Data Protection
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              We implement industry-standard security measures and modern encryption protocols to protect your commercial information from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Shield className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" /> 
              4. Third-Party Tools
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              We use trusted third-party tools like WhatsApp for communication and Razorpay/Stripe for secure payment processing. Each platform operates under its own privacy policy which you should review separately when making transactions.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Cookie className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" /> 
              5. Cookies Usage
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Our website uses cookies to enhance your browsing experience, track session activity securely, and analyze site traffic patterns. You can choose to disable cookies in your browser settings, though some portal features may be limited.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Phone className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" /> 
              6. Contact Info
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              If you have any questions regarding your privacy, please <Link href="/contact" className="text-indigo-600 font-bold hover:underline">contact us</Link> at support@organicmushroomsfarm.com or call us directly at +91 9203544140.
            </p>
          </div>
          
          <div className="pt-6 border-t dark:border-white/10 border-black/10 text-center">
            <p className="text-[9px] md:text-[10px] dark:text-slate-500 text-slate-400 font-medium">
              Last Updated: {new Date().getFullYear()} • By continuing to use our website and services, you acknowledge that you have read and understood our Privacy Policy.
            </p>
          </div>

        </motion.section>
      </article>
    </>
  );
}
