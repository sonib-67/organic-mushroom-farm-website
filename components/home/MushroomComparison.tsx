"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const MushroomComparison = () => {
  const mushrooms = [
    { name: "Button Mushroom", difficulty: "High Difficulty", speed: "Industrial", color: "bg-blue-500", text: "Premium market share, controlled environment commercial setup." },
    { name: "Oyster Mushroom", difficulty: "Low–Medium", speed: "Easy Growth", color: "bg-green-500", text: "Low investment start, versatile substrate requirements. Ideal for beginners." },
    { name: "Milky Mushroom", difficulty: "Seasonal", speed: "High Velocity", color: "bg-yellow-500", text: "Regional demand focus, high temperature preference perfect for Indian climate." },
    { name: "Shiitake & Lion's Mane", difficulty: "Premium", speed: "Export Grade", color: "bg-amber-600", text: "High specialty value, intensive cycle management. Best for international markets." },
  ];

  return (
    <section className="py-12 md:py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-3 shadow-sm">
            TOP SEARCHED PRODUCT VARIANTS
          </div>
          <h2 className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tight dark:text-white text-slate-900 leading-tight">
            <Link href="/blog" className="hover:text-current transition-colors">
              High-Yield Commercial Mushroom <span className="text-purple-600 dark:text-[#8B5CF6]">GEN</span><span className="text-emerald-500 dark:text-[#10B981]">ETICS</span>
            </Link>
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden shadow-lg max-w-5xl mx-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-black/10 dark:border-white/10">
              <tr>
                <th className="px-4 py-3 text-[9px] font-black uppercase tracking-wider text-slate-500">Mushroom Type</th>
                <th className="px-4 py-3 text-[9px] font-black uppercase tracking-wider text-slate-500">Difficulty</th>
                <th className="px-4 py-3 text-[9px] font-black uppercase tracking-wider text-slate-500">Complexity</th>
                <th className="px-4 py-3 text-[9px] font-black uppercase tracking-wider text-slate-500">Market Segment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              {mushrooms.map((m, i) => (
                <tr key={i} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${m.color} shadow-sm`}></div>
                      <span className="font-bold dark:text-white text-slate-900 text-[11px] md:text-xs">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 font-medium">{m.difficulty}</td>
                  <td className="px-4 py-3 text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 font-medium">{m.speed}</td>
                  <td className="px-4 py-3 text-[10px] md:text-[11px] text-slate-500 leading-relaxed font-medium">{m.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Swipe Cards */}
        <div className="md:hidden flex gap-3 overflow-x-auto pb-4 snap-x scrollbar-hide -mx-6 px-6">
          {mushrooms.map((m, i) => (
            <div key={i} className="min-w-[240px] snap-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-black/10 dark:border-white/10 p-4 rounded-2xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full ${m.color} shadow-md shadow-black/10`}></div>
                <h3 className="dark:text-white text-slate-900 font-bold text-[13px]">{m.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-black/5 dark:border-white/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Difficulty</div>
                  <div className="text-[10px] font-bold dark:text-slate-300 text-slate-700">{m.difficulty}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-black/5 dark:border-white/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Scale</div>
                  <div className="text-[10px] font-bold dark:text-slate-300 text-slate-700">{m.speed}</div>
                </div>
              </div>
              <p className="text-[10px] dark:text-slate-400 text-slate-600 leading-relaxed font-medium">{m.text}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-5xl mx-auto">
          <Link
            href="/expertise-details"
            className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all flex items-center justify-between group"
          >
            <div>
              <div className="text-[9px] uppercase tracking-wider font-bold text-slate-500 mb-0.5">Commercial Infrastructure</div>
              <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Turnkey Execution
              </div>
            </div>
            <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
          </Link>

          <Link
            href="/expertise-details"
            className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all flex items-center justify-between group"
          >
            <div>
              <div className="text-[9px] uppercase tracking-wider font-bold text-slate-500 mb-0.5">Commercial Infrastructure</div>
              <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Expert Training
              </div>
            </div>
            <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
          </Link>

          <Link
            href="/expertise-details"
            className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all flex items-center justify-between group"
          >
            <div>
              <div className="text-[9px] uppercase tracking-wider font-bold text-slate-500 mb-0.5">Commercial Infrastructure</div>
              <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Quality Guarantee
              </div>
            </div>
            <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
};
