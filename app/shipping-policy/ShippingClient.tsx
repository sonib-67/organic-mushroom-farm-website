"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Truck, ThermometerSnowflake, Clock, Globe2, AlertTriangle } from "lucide-react";

export default function ShippingClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Premium Background Effects (Glassmorphism, no black boxes) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <article className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-50" />
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/[0.05] border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <Truck className="w-3 h-3 text-sky-500" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Logistics & Delivery</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
            Spawn Shipping & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">Logistics</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
            How we safely package and ship high-grade G1 <Link href="/spawn-seed" className="text-sky-600 font-bold hover:underline">mushroom seed</Link> and <Link href="/equipment" className="text-sky-600 font-bold hover:underline">equipment</Link> globally.
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
              <ThermometerSnowflake className="w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform" /> 
              1. Cold Chain & Insulated Packaging
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              Our First-Generation (G1) premium quality, certified <Link href="/spawn-seed" className="text-sky-600 font-bold hover:underline">mushroom spawn</Link> is a living organism. To maintain viability and prevent high-temperature exposure during transit, all spawn batches are packed in <strong>heavy-gauge insulated polystyrene boxes with commercial ice-gel packs</strong>. This guarantees that they remain below 25°C throughout transport.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Clock className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" /> 
              2. Processing & Lead Times
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              <strong>Spawn Shipping:</strong> Shipped within 24 to 48 hours of order confirmation. <br className="hidden md:block" />
              <strong><Link href="/equipment" className="text-sky-600 font-bold hover:underline">Technical Equipment</Link>:</strong> Sensors, climate controllers, and customized racks are processed in 3–5 working days of engineering checklist completion.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <Globe2 className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" /> 
              3. Delivery Coverage (Pan-India & Global)
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              We partner with premier carriers (Delhivery, BlueDart, DTDC, and air express logistics) to deliver to all 28 States and 8 Union Territories in India. We also arrange phytosanitary certified export shipping to UAE, United Kingdom, United States, Canada, Nepal, and adjacent markets.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 group">
            <h2 className="flex items-center gap-2 text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 border-b dark:border-white/10 border-black/10 pb-2">
              <AlertTriangle className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" /> 
              4. Handling & Damage Claims
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
              If your package is damaged or delayed heavily, leading to spawn contamination or temperature damage, please record an unboxing video and send it to our official WhatsApp support number <strong><Link href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="text-sky-600 font-bold hover:underline">+91 9203544140</Link></strong> within 24 hours of delivery. We will issue a replacement shipment immediately. You can also <Link href="/contact" className="text-sky-600 font-bold hover:underline">contact us</Link> for general inquiries.
            </p>
          </div>
          
          <div className="pt-6 border-t dark:border-white/10 border-black/10 text-center">
            <p className="text-[9px] md:text-[10px] dark:text-slate-500 text-slate-400 font-medium">
              Last Updated: {new Date().getFullYear()} • Safe, secure, and fast delivery for all commercial agri-entrepreneurs globally.
            </p>
          </div>

        </motion.section>
      </article>
    </>
  );
}
