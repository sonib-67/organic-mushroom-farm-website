"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Headset, Clock, MapPin, Mail, MessageCircle } from "lucide-react";

export default function SupportClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Premium Background Effects (Glassmorphism, no black boxes) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <article className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-50" />
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/[0.05] border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <Headset className="w-3 h-3 text-emerald-500" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Helpdesk</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
            Customer Support & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Helpline</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
            We are committed to providing seamless handholding and customer service for agri-entrepreneurs taking up <Link href="/training" className="text-emerald-600 font-bold hover:underline">training</Link> or <Link href="/turnkey-projects" className="text-emerald-600 font-bold hover:underline">commercial turnkey projects</Link>.
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
              <Headset className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" /> 
              1. Contact Channels & Operations
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Whether you are tracking a <Link href="/spawn-seed" className="text-teal-600 font-bold hover:underline">premium G1 spawn shipment</Link>, solving <Link href="/equipment" className="text-teal-600 font-bold hover:underline">commercial cooling ventilation errors</Link>, or applying for <Link href="/subsidy" className="text-teal-600 font-bold hover:underline">government NHB subsidies</Link>, our specialized desk is ready to assist you. Talk to senior technical advisors directly for instant commercial support via our <strong>Direct Hotline at <a href="tel:+919203544140" className="text-emerald-600 font-bold hover:underline">+91 9203544140</a></strong>. For fast tracking, photo sharing, invoice support, and SOP questions, you can directly reach out via <strong><a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">WhatsApp Support</a></strong>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Clock className="w-4 h-4 text-teal-500 group-hover:scale-110 transition-transform" /> 
              2. Helpline Operational Timings
            </h2>
            <ul className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed space-y-2 mt-3 pl-2">
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <strong>Monday to Sunday:</strong> 08:00 AM to 08:00 PM (IST)
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-500" />
                <strong>Email Assistance:</strong> <a href="mailto:support@mushroomtraining.online" className="text-emerald-600 font-bold hover:underline">support@mushroomtraining.online</a> (Responded to within 4 working hours)
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                <strong>Farm Address:</strong> Katangi Link Road, Jabalpur, Madhya Pradesh, India (Prior appointment required)
              </li>
            </ul>
          </div>
          
          <div className="pt-6 border-t dark:border-white/10 border-black/10 text-center flex flex-col items-center justify-center gap-4">
             <a
                  href="https://wa.me/919203544140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full font-bold transition-all text-[10px] md:text-[11px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp Now
                </a>
            <p className="text-[9px] md:text-[10px] dark:text-slate-500 text-slate-400 font-medium">
              We are dedicated to your success. Reach out anytime.
            </p>
          </div>

        </motion.section>
      </article>
    </>
  );
}
