"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Activity, BarChart, Table, MessageCircle, Phone, CheckCircle2, TrendingUp, IndianRupee } from "lucide-react";

const prices = {
  wholesale: [
    { type: "Button Mushroom", min: "₹120", max: "₹180", avg: "₹150", trend: "+2%" },
    { type: "Oyster Mushroom", min: "₹150", max: "₹220", avg: "₹180", trend: "-1%" },
    { type: "Milky Mushroom", min: "₹250", max: "₹350", avg: "₹300", trend: "+5%" },
    { type: "Dry Oyster", min: "₹800", max: "₹1200", avg: "₹1000", trend: "0%" },
  ],
  retail: [
    { type: "Button Mushroom (200g)", min: "₹40", max: "₹60", avg: "₹50", trend: "+2%" },
    { type: "Oyster Mushroom (200g)", min: "₹60", max: "₹80", avg: "₹70", trend: "+0%" },
    { type: "Milky Mushroom (200g)", min: "₹80", max: "₹120", avg: "₹100", trend: "+1%" },
    { type: "Dry Oyster (100g)", min: "₹120", max: "₹200", avg: "₹150", trend: "0%" },
  ]
};

const statePrices = [
  { state: "Madhya Pradesh", button: "₹140/kg", oyster: "₹170/kg" },
  { state: "Maharashtra", button: "₹160/kg", oyster: "₹200/kg" },
  { state: "Delhi NCR", button: "₹130/kg", oyster: "₹160/kg" },
  { state: "Karnataka", button: "₹180/kg", oyster: "₹220/kg" },
  { state: "Punjab", button: "₹120/kg", oyster: "₹150/kg" },
];

export default function PriceClient() {
  const [activeTab, setActiveTab] = useState<'wholesale' | 'retail'>('wholesale');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Premium Background Effects (Glassmorphism, no black boxes) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <article className="max-w-5xl mx-auto px-4 relative z-10 space-y-8 pb-24">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-500 to-emerald-500 opacity-50" />
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/[0.05] border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Live Market Rates</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Mushroom Price <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-amber-500">Today</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
            Get the latest daily wholesale and retail pricing for premium commercial mushrooms across major Indian markets. If you're planning a <Link href="/turnkey-projects" className="text-emerald-600 font-bold hover:underline">commercial setup</Link>, mastering these economics is crucial. Need professional guidance? Check our <Link href="/training" className="text-emerald-600 font-bold hover:underline">training programs</Link>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold transition-all text-[10px] md:text-[11px] shadow-lg shadow-emerald-500/25">
              <MessageCircle className="w-3.5 h-3.5" /> Bulk Order on WhatsApp
            </a>
            <a href="tel:9203544140" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border dark:border-white/20 border-black/20 dark:text-white text-slate-900 rounded-full font-bold transition-all text-[10px] md:text-[11px]">
              <Phone className="w-3.5 h-3.5" /> Call for Hotel Supply
            </a>
          </div>
        </header>

        {/* Pricing Tabs & Cards */}
        <section className="space-y-6">
          <div className="flex justify-center">
            <div className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm rounded-full p-1 border dark:border-white/10 border-black/10 inline-flex shadow-sm">
              <button 
                onClick={() => setActiveTab('wholesale')}
                className={`px-6 py-2.5 rounded-full text-[10px] md:text-[11px] font-bold transition-all ${activeTab === 'wholesale' ? 'bg-emerald-600 text-white shadow-md' : 'dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900'}`}
              >
                Wholesale Rates (Per Kg)
              </button>
              <button 
                onClick={() => setActiveTab('retail')}
                className={`px-6 py-2.5 rounded-full text-[10px] md:text-[11px] font-bold transition-all ${activeTab === 'retail' ? 'bg-emerald-600 text-white shadow-md' : 'dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900'}`}
              >
                Retail Rates
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {prices[activeTab].map((item, i) => (
                <motion.div 
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm p-6 rounded-3xl border dark:border-white/10 border-black/10 hover:border-emerald-500/50 transition-colors shadow-sm group"
                >
                  <h3 className="font-bold dark:text-white text-slate-900 text-[12px] md:text-[13px] mb-3">{item.type}</h3>
                  <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-amber-500 mb-3">{item.avg}</div>
                  <div className="space-y-1.5 mb-4 border-t dark:border-white/10 border-black/10 pt-3">
                    <div className="flex justify-between text-[9px] md:text-[10px]">
                      <span className="dark:text-slate-500 text-slate-400">Min Rate:</span>
                      <span className="font-bold dark:text-slate-300 text-slate-700">{item.min}</span>
                    </div>
                    <div className="flex justify-between text-[9px] md:text-[10px]">
                      <span className="dark:text-slate-500 text-slate-400">Max Rate:</span>
                      <span className="font-bold dark:text-slate-300 text-slate-700">{item.max}</span>
                    </div>
                  </div>
                  <div className={`text-[9px] font-bold px-2.5 py-1.5 rounded-md inline-flex items-center gap-1.5 ${item.trend.startsWith('+') ? 'bg-green-500/10 text-green-600 dark:text-green-400' : item.trend.startsWith('-') ? 'bg-red-500/10 text-red-600 dark:text-red-400' : 'bg-slate-500/10 text-slate-600 dark:text-slate-400'}`}>
                    <Activity className="w-3 h-3" /> Trend: {item.trend} today
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* State wise & Demand Analysis Section */}
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border dark:border-white/10 border-black/10 shadow-sm">
            <h2 className="text-[14px] md:text-[16px] font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-2">
              <Table className="text-emerald-500 w-5 h-5" /> State-wise Wholesale Rates
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b dark:border-white/10 border-black/10">
                    <th className="pb-3 text-[9px] md:text-[10px] font-black uppercase text-slate-500">State / Region</th>
                    <th className="pb-3 text-[9px] md:text-[10px] font-black uppercase text-slate-500">Button (Per Kg)</th>
                    <th className="pb-3 text-[9px] md:text-[10px] font-black uppercase text-slate-500">Oyster (Per Kg)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5">
                  {statePrices.map((row, i) => (
                    <tr key={i} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <td className="py-3 text-[10px] md:text-[11px] font-bold dark:text-white text-slate-900">{row.state}</td>
                      <td className="py-3 text-[10px] md:text-[11px] font-medium dark:text-slate-300 text-slate-700">{row.button}</td>
                      <td className="py-3 text-[10px] md:text-[11px] font-medium dark:text-slate-300 text-slate-700">{row.oyster}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-500/5 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-emerald-500/20 shadow-sm">
              <h3 className="text-[13px] md:text-[15px] font-bold dark:text-white text-slate-900 mb-3 flex items-center gap-2">
                <BarChart className="text-emerald-500 w-4 h-4" /> Market Demand Analysis
              </h3>
              <p className="dark:text-slate-400 text-slate-600 text-[10px] md:text-[11px] leading-relaxed mb-4">
                The demand for organic mushrooms is surging by 25% YoY in Indian Metros. Button mushrooms maintain a premium requirement in the hotel and restaurant segment, while Oyster mushrooms are dominating direct-to-consumer health segments. Check out our <Link href="/mushroom-types/oyster" className="text-emerald-600 font-bold hover:underline">Oyster Guide</Link> for details.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] dark:text-slate-300 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> High Restaurant Supply Demand
                </div>
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] dark:text-slate-300 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Export Potential Increasing
                </div>
              </div>
            </div>

            <div className="bg-amber-500/5 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-amber-500/20 shadow-sm">
              <h3 className="text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 mb-2">Want to setup bulk daily supply?</h3>
              <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 mb-4">We provide contracted, continuous high-quality B2B supply for hotels, restaurants, and cloud kitchens. Explore our <Link href="/spawn-seed" className="text-amber-600 font-bold hover:underline">high-yield spawn</Link>.</p>
              <a href="tel:9203544140" className="inline-flex justify-center items-center gap-2 w-full px-4 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 rounded-xl font-bold transition-all text-[10px] md:text-[11px] border border-amber-500/20">
                <Phone className="w-3.5 h-3.5" /> Contact Sales Team
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10 text-center shadow-sm relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-500/5 pointer-events-none" />
           <div className="relative z-10">
              <h2 className="text-[18px] md:text-[22px] font-bold dark:text-white text-slate-900 mb-3">Need Accurate Pricing for Your Area?</h2>
              <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 mb-6 max-w-xl mx-auto leading-relaxed">
                Prices vary by transport and local mandi conditions. Click below to message our sales desk on WhatsApp and get the exact current rates and delivery feasibility for your location.
              </p>
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-[11px] md:text-[12px] items-center gap-2 shadow-lg transition-transform hover:scale-105">
                <MessageCircle className="w-4 h-4" /> Get Custom Quote
              </a>
           </div>
        </section>
      </article>
    </>
  );
}
