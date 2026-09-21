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
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[5%] left-[20%] w-[450px] h-[450px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[10%] right-[20%] w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 pt-2 pb-24">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-2 pb-1">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">
              /
            </li>
            <li>
              <Link href="/states" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                States
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">
              /
            </li>
            <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold">
              Madhya Pradesh
            </li>
          </ol>
        </nav>
        
        {/* Header and Content */}
        <header className="text-center space-y-4 mb-8 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 shadow-sm mx-auto mb-1">
            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Madhya Pradesh Hub</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Madhya Pradesh Mushroom <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Farming Resources</span>
          </h1>
          
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-slate-600 dark:text-slate-300 font-normal leading-relaxed mt-4">
            Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh to start your successful business.
            We provide local support across major cities. You can explore our comprehensive mushroom training centers, quality spawn suppliers, and professional cultivation guides in <Link href="/locations/jabalpur" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Jabalpur</Link>, <Link href="/cities/madhya-pradesh/indore" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Indore</Link>, <Link href="/cities/madhya-pradesh/bhopal" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Bhopal</Link>, and <Link href="/cities/madhya-pradesh/gwalior" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Gwalior</Link>. Whether you are starting a small indoor farm or looking to establish a large-scale commercial unit, our local experts and state-of-the-art resources are here to support your journey.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-950/40 rounded-xl p-4 sm:p-5 mt-6 text-left border border-blue-200 dark:border-blue-800/60 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>Looking for more locations?</strong> We cover resources across the entire state and all blocks. Make sure to visit our <Link href="/site-directory" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Site Directory</Link> to find specific guides for your local village or rural area. You can also explore our core <Link href="/training" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Training Programs</Link> and <Link href="/turnkey-projects" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Turnkey Setup Services</Link> available pan-India.
              </p>
            </div>
          </div>
        </header>

      </article>
    </>
  );
}
