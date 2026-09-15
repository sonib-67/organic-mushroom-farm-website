"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Scale, FileText, CreditCard, ShieldAlert, AlertCircle, MapPin, CheckCircle2 } from "lucide-react";

export default function TermsClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Premium Background Effects (Glassmorphism, no black boxes) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] mix-blend-screen" />
      </div>

      <article className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 opacity-50" />
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/[0.05] border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <Scale className="w-3 h-3 text-emerald-500" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Legal Agreement</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">Service</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
            Our standardized commercial service agreement and terms for <Link href="/training" className="text-emerald-600 font-bold hover:underline">cooperative training sessions</Link>, global spawn trade, and <Link href="/turnkey-projects" className="text-emerald-600 font-bold hover:underline">turnkey projects</Link>.
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
              <FileText className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" /> 
              1. Commercial Service Agreement
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              By enrolling in our <Link href="/training" className="text-emerald-600 font-bold hover:underline">training programs</Link> or contracting our commercial farm setup services, you agree to abide by the terms and conditions outlined below. Organic Mushrooms Farm provides technical consultancy and educational resources for mushroom farming business success. We ensure industry-standard support for all our clients across the nation.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <CreditCard className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" /> 
              2. Payment Terms
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Our current pricing for training is standardized at ₹399 for Online access and ₹3000 for Offline practical workshops. Commercial <Link href="/turnkey-projects" className="text-emerald-600 font-bold hover:underline">Turnkey project</Link> payments are structured in phases as per the official project quotation provided during your <Link href="/contact" className="text-emerald-600 font-bold hover:underline">consultancy session</Link>. All transactions are processed securely.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <ShieldAlert className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" /> 
              3. No Refund Policy
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Due to the digital nature of training materials, proprietary SOP documents, and the resource allocation required for commercial workshops, all payments for training and consultancy are non-refundable. Please ensure your suitability for the program before making payments. For any doubts, <Link href="/contact" className="text-emerald-600 font-bold hover:underline">reach out to us</Link> prior to enrollment.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" /> 
              4. User Responsibilities
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Users are responsible for maintaining the confidentiality of their training portal access credentials. For commercial farm setups, the client must ensure site readiness, clear land access, and electricity/water requirements as per our technical specifications provided in the initial survey.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <AlertCircle className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" /> 
              5. Limitation of Liability
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              While we provide high-precision SOPs, <Link href="/equipment" className="text-emerald-600 font-bold hover:underline">specialized infrastructure</Link>, and premium <Link href="/spawn-seed" className="text-emerald-600 font-bold hover:underline">mushroom spawn</Link>, biological yields depend heavily on local commercial management, environmental control, and hygiene practices. Organic Mushroom Farm is not liable for fluctuations in biological yields, crop failures due to mismanagement, or global market price changes of mushrooms.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <MapPin className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" /> 
              6. Governing Law
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the competent courts in Jabalpur, Madhya Pradesh, India.
            </p>
          </div>
          
          <div className="pt-6 border-t dark:border-white/10 border-black/10 text-center">
            <p className="text-[9px] md:text-[10px] dark:text-slate-500 text-slate-400 font-medium">
              Last Updated: {new Date().getFullYear()} • By continuing to use our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>

        </motion.section>
      </article>
    </>
  );
}
