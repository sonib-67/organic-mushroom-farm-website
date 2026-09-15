'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Factory, Timer, TrendingUp, Cpu } from 'lucide-react';

const specData = {
  name: "Sneha Sharma",
  capacity: "250 Bags (Lion's Mane & Oyster)",
  space: "12ft x 10ft Balcony / Room",
  roi: "350% (High-value retail)",
  timeframe: "7 Days Training + 90 Days Cultivation",
  investment: "₹40,000 - ₹50,000 (With basic climate control)",
  equipment: [
    "Ultrasonic Humidifier",
    "Pre-fabricated Grow Tent",
    "Digital Temperature Controller",
    "HEPA Filter Setup",
    "Metal Wire Racks"
  ]
};

export default function SnehaSharmaClient() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="section-padding pt-0 max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/success-stories" className="inline-flex items-center gap-2 dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900 transition-colors text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Stories
          </Link>
        </div>

        <motion.article 
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-10 md:p-16 rounded-[3rem] border dark:border-white/5 border-black/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 dark:text-white/5 text-black/5 pointer-events-none">
              <Factory size={160} />
          </div>

          <div className="relative z-10">
            <div className="badge mb-6">Full Project Specs</div>
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight">
              {specData.name}&apos;s <span className="gradient-text">Setup</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-[15px] mb-12 max-w-2xl">
              A comprehensive breakdown of the infrastructure, investment, and returns for this commercial mushroom operation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 text-primary-start">
                  <Factory size={24} />
                  <h2 className="font-bold dark:text-white text-slate-900 text-lg md:text-xl">Capacity & Scale</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black mb-1">Production Capacity</p>
                    <p className="dark:text-white text-slate-900 font-bold text-sm md:text-base">{specData.capacity}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black mb-1">Space Required</p>
                    <p className="dark:text-white text-slate-900 font-bold text-sm md:text-base">{specData.space}</p>
                  </div>
                </div>
              </div>

              <div className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 text-primary-start">
                  <TrendingUp size={24} />
                  <h2 className="font-bold dark:text-white text-slate-900 text-lg md:text-xl">Financials</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black mb-1">Estimated Investment</p>
                    <p className="dark:text-white text-slate-900 font-bold text-sm md:text-base">{specData.investment}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black mb-1">Expected ROI</p>
                    <p className="text-green-500 dark:text-green-400 font-bold text-sm md:text-base">{specData.roi}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-3xl p-6 md:p-8 mb-12">
              <div className="flex items-center gap-3 mb-6 text-primary-start">
                <Cpu size={24} />
                <h2 className="font-bold dark:text-white text-slate-900 text-lg md:text-xl">Equipment & Infrastructure</h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {specData.equipment.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 dark:text-slate-300 text-slate-700 font-medium text-sm md:text-base">
                    <CheckCircle size={18} className="text-primary-start shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-3xl p-6 md:p-8">
               <div className="flex items-center gap-3 mb-4 text-primary-start">
                  <Timer size={24} />
                  <h2 className="font-bold dark:text-white text-slate-900 text-lg md:text-xl">Timeline</h2>
                </div>
                <p className="dark:text-white text-slate-900 font-bold text-[15px] md:text-lg">{specData.timeframe}</p>
            </div>
            
            <div className="mt-12 text-center">
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="gradient-bg px-8 md:px-10 py-4 md:py-5 rounded-2xl dark:text-white text-slate-900 font-black inline-flex items-center gap-3 hover:scale-105 transition-all outline-none text-sm md:text-base">
                  Build a Similar Project <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.article>
      </section>
    </div>
  );
}
