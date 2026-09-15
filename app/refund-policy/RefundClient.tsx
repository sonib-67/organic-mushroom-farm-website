"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, MonitorPlay, Users, Building, RefreshCcw } from "lucide-react";

export default function RefundClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Premium Background Effects (Glassmorphism, no black boxes) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-rose-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <article className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 opacity-50" />
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/[0.05] border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <ShieldCheck className="w-3 h-3 text-rose-500" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Legal & Trust</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
            Refund Policy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Guarantee</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
            Transparent parameters for <Link href="/training" className="text-rose-600 font-bold hover:underline">enrollment</Link>, consultancy credits, and <Link href="/turnkey-projects" className="text-rose-600 font-bold hover:underline">project setup services</Link>.
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
              <MonitorPlay className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" /> 
              1. Digital Training & Course Materials
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Our <Link href="/training" className="text-orange-600 font-bold hover:underline">Online Commercial Mushroom Training</Link> (priced at ₹399) provides instant access to proprietary video modules, premium SOP catalogs, and lifetime documentation resources. Because these materials are instantly downloadable and copyable, all payments for digital courses are <strong>strict and non-refundable</strong>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Users className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" /> 
              2. Practical Workshops
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              For our intensive 1-day <Link href="/training" className="text-orange-600 font-bold hover:underline">offline workshops at Jabalpur</Link> (priced at ₹3000), we reserve seats and pre-order study kits/substrate ingredients. Cancellations requested over 72 hours prior to the event will be eligible for rescheduling to a future date at zero cost, but they are not eligible for cash refunds.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Building className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" /> 
              3. Commercial Turnkey Projects
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Milestone payments made for climate-controlled PUF panel structures, Daikin refrigeration design, and industrial HVAC installations as part of our <Link href="/turnkey-projects" className="text-orange-600 font-bold hover:underline">Commercial Turnkey Projects</Link> are guided by custom contracts. Once procurement is completed as per specifications, those specialized milestones are binding and non-refundable.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <RefreshCcw className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" /> 
              4. Support & Handholding Guarantee
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              While biological yields are management-dependent, we offer a <strong>100% Support Guarantee</strong>. If your <Link href="/spawn-seed" className="text-orange-600 font-bold hover:underline">G1 spawn</Link> gets contaminated due to a technical lapse in our guide materials, we will replace the spawn batch absolutely free of charge. For further assistance, please <Link href="/contact" className="text-orange-600 font-bold hover:underline">contact our support team</Link>.
            </p>
          </div>
          
          <div className="pt-6 border-t dark:border-white/10 border-black/10 text-center">
            <p className="text-[9px] md:text-[10px] dark:text-slate-500 text-slate-400 font-medium">
              Last Updated: {new Date().getFullYear()} • By continuing to use our website and services, you acknowledge that you have read and understood our Refund Policy.
            </p>
          </div>

        </motion.section>
      </article>
    </>
  );
}
