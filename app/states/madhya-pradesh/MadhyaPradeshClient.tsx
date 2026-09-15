"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { MapPin, Info } from "lucide-react";

export default function MadhyaPradeshClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Background Effects (No black boxes, pure glassmorphism) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50 dark:bg-black/90 transition-colors duration-500">
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[3000ms]" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[4000ms]" />
      </div>

      <article className="max-w-4xl mx-auto px-4 relative z-10 space-y-6 pb-24">
        
        {/* Header and Content (Inline links, no separate boxes as requested) */}
        <header className="text-center space-y-3 mb-8 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[2rem] p-6 shadow-sm">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white/60 dark:bg-white/10 border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-1">
            <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span className="text-[9px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Madhya Pradesh Hub</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Madhya Pradesh Mushroom <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Farming Resources</span>
          </h1>
          
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 font-medium leading-relaxed mt-4">
            Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh to start your successful business.
            We provide local support across major cities. You can explore our comprehensive mushroom training centers, quality spawn suppliers, and professional cultivation guides in <Link href="/locations/jabalpur" className="text-blue-600 font-bold hover:underline">Jabalpur</Link>, <Link href="/cities/madhya-pradesh/indore" className="text-blue-600 font-bold hover:underline">Indore</Link>, <Link href="/cities/madhya-pradesh/bhopal" className="text-blue-600 font-bold hover:underline">Bhopal</Link>, and <Link href="/cities/madhya-pradesh/gwalior" className="text-blue-600 font-bold hover:underline">Gwalior</Link>. Whether you are starting a small indoor farm or looking to establish a large-scale commercial unit, our local experts and state-of-the-art resources are here to support your journey.
          </p>
          
          <div className="bg-blue-500/10 rounded-xl p-4 mt-6 text-left border border-blue-500/20 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <p className="text-[10px] md:text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Looking for more locations?</strong> We cover resources across the entire state and all blocks. Make sure to visit our <Link href="/site-directory" className="text-blue-600 font-bold hover:underline">Site Directory</Link> to find specific guides for your local village or rural area. You can also explore our core <Link href="/training" className="text-blue-600 font-bold hover:underline">Training Programs</Link> and <Link href="/turnkey-projects" className="text-blue-600 font-bold hover:underline">Turnkey Setup Services</Link> available pan-India.
                </p>
            </div>
          </div>
        </header>

      </article>
    </>
  );
}
