"use client";
import React from 'react';
import NextLink from 'next/link';
import { motion } from 'motion/react';

const MushroomComparison = () => {
  const mushrooms = [
    {
      name: "Button Mushroom",
      difficulty: "High Difficulty",
      speed: "Industrial",
      color: "bg-blue-500",
      text: "Premium market share, controlled environment commercial setup.",
    },
    {
      name: "Oyster Mushroom",
      difficulty: "Low–Medium",
      speed: "Easy Growth",
      color: "bg-green-500",
      text: "Low investment start, versatile substrate requirements. Ideal for beginners and detailed multi-page online training.",
    },
    {
      name: "Milky Mushroom",
      difficulty: "Seasonal",
      speed: "High Velocity",
      color: "bg-yellow-500",
      text: "Regional demand focus, high temperature preference perfect for Indian climate.",
    },
    {
      name: "Shiitake & Lion's Mane",
      difficulty: "Premium",
      speed: "Export Grade",
      color: "bg-amber-700",
      text: "High specialty value, intensive cycle management. Best for international markets like USA & Australia.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5">
          <div className="badge mx-auto mb-4">
            Top Searched Product Variants
          </div>
          <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
            <NextLink href="/blog" className="hover:text-current transition-colors">
              High-Yield Commercial Mushroom{" "}
              <span className="gradient-text">Genetics</span>
            </NextLink>
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block glass border dark:border-white/5 border-black/5 rounded-3xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="dark:bg-white/5 bg-black/5 border-b dark:border-white/10 border-black/10">
              <tr>
                <th className="px-5 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Mushroom Type
                </th>
                <th className="px-5 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Difficulty
                </th>
                <th className="px-5 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Complexity
                </th>
                <th className="px-5 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Market Segment
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mushrooms.map((m, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${m.color}`}></div>
                      <span className="font-bold dark:text-white text-slate-900 text-sm">
                        {m.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-[12px] dark:text-slate-400 text-slate-600 font-medium">
                    {m.difficulty}
                  </td>
                  <td className="px-5 py-5 text-[12px] dark:text-slate-400 text-slate-600 font-medium">
                    {m.speed}
                  </td>
                  <td className="px-5 py-5 text-[12px] text-slate-500 leading-relaxed font-medium">
                    {m.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Swipe Cards */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 snap-x scrollbar-hide">
          {mushrooms.map((m, i) => (
            <div
              key={i}
              className="min-w-[280px] snap-center glass border dark:border-white/10 border-black/10 p-3 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-4 h-4 rounded-full ${m.color} shadow-lg shadow-black/50`}
                ></div>
                <h3 className="dark:text-white text-slate-900 font-bold text-sm">
                  {m.name}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase mb-1">
                    Difficulty
                  </div>
                  <div className="text-[11px] font-bold dark:text-slate-300 text-slate-700">
                    {m.difficulty}
                  </div>
                </div>
                <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase mb-1">
                    Scale
                  </div>
                  <div className="text-[11px] font-bold dark:text-slate-300 text-slate-700">
                    {m.speed}
                  </div>
                </div>
              </div>
              <p className="text-[13px] dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MushroomComparison;
