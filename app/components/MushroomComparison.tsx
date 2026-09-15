"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Sprout,
  Thermometer,
  Droplets,
  Clock,
  TrendingUp,
  Award,
  ChevronRight,
  ShieldCheck,
  Zap,
  CheckCircle2
} from "lucide-react";

interface MushroomData {
  id: string;
  name: string;
  botanical: string;
  tag: string;
  badgeColor: string;
  temp: string;
  humidity: string;
  cycle: string;
  avgYield: string;
  marketRate: string;
  profitMargin: string;
  substrate: string;
  description: string;
  advantages: string[];
}

const MUSHROOMS: MushroomData[] = [
  {
    id: "button",
    name: "White Button Mushroom",
    botanical: "Agaricus bisporus",
    tag: "Highest Market Demand",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    temp: "14°C - 24°C",
    humidity: "85% - 90%",
    cycle: "45 - 60 Days",
    avgYield: "18 - 22 kg / 100kg compost",
    marketRate: "₹120 - ₹220 / kg",
    profitMargin: "45% - 55%",
    substrate: "Pasteurized Wheat Straw / Paddy Compost (Phase-II)",
    description:
      "Accounts for over 75% of global commercial mushroom consumption. Ideal for climate-controlled indoor cold rooms with high bulk-turnover across hotels, restaurants, and retail chains.",
    advantages: [
      "Consistent year-round demand in wholesale mandis",
      "Compatible with mechanized 5-tier racking systems",
      "High yield per square foot in automated cold rooms",
      "High eligibility for NABARD & NHB 40-50% subsidies"
    ],
  },
  {
    id: "oyster",
    name: "Oyster Mushroom (Dhingri)",
    botanical: "Pleurotus ostreatus / Florida",
    tag: "Lowest Setup Cost",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    temp: "20°C - 28°C",
    humidity: "80% - 85%",
    cycle: "25 - 35 Days",
    avgYield: "800g - 1.2 kg / bag",
    marketRate: "₹140 - ₹280 / kg (Dry: ₹800-1200)",
    profitMargin: "60% - 70%",
    substrate: "Sterilized Wheat Straw / Paddy Straw / Sawdust",
    description:
      "The fastest-growing and easiest mushroom for beginners and commercial growers. Does not require pasteurized compost or heavy refrigeration in moderate climates.",
    advantages: [
      "Rapid 25-day turnaround cycle from spawning to harvest",
      "No heavy Phase-II composting bunker required",
      "High dry-powder value for export & pharmaceutical extracts",
      "Multiple flushes with high biological efficiency (>80%)"
    ],
  },
  {
    id: "milky",
    name: "Milky Mushroom",
    botanical: "Calocybe indica",
    tag: "Summer Heat Tolerant",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    temp: "30°C - 35°C",
    humidity: "85% - 90%",
    cycle: "40 - 50 Days",
    avgYield: "600g - 900g / bag",
    marketRate: "₹160 - ₹300 / kg",
    profitMargin: "50% - 60%",
    substrate: "Chopped & Sterilized Paddy Straw + Casing Soil",
    description:
      "Native to tropical India, Milky mushroom thrives in peak summer heat (up to 38°C) where other species fail. Offers the longest post-harvest shelf life among fresh mushrooms.",
    advantages: [
      "Zero cooling cost in hot Indian summer seasons",
      "Exceptional 4-6 days shelf life without discoloration",
      "Firm, meaty texture loved by culinary chefs",
      "Excellent returns during summer off-season supply dips"
    ],
  },
  {
    id: "cordyceps",
    name: "Cordyceps Militaris",
    botanical: "Cordyceps militaris",
    tag: "Ultra-High Value Medicinal",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    temp: "18°C - 20°C",
    humidity: "75% - 80%",
    cycle: "60 - 75 Days",
    avgYield: "8g - 12g dry / jar",
    marketRate: "₹1,50,000 - ₹2,50,000 / kg (Dry)",
    profitMargin: "80% - 90%",
    substrate: "Sterilized Brown Rice + Nutrient Broth in Glass Jars",
    description:
      "Known as Himalayan Gold, Cordyceps is cultivated in clean-room lab chambers under specialized spectrum LED lighting. Premium pricing in nutraceuticals and wellness exports.",
    advantages: [
      "Highest profit margin per square foot in agricultural biotech",
      "Compact 10x10 ft clean-room generates high monthly revenue",
      "Surging global demand for Cordycepin & Adenosine extracts",
      "Long shelf-life dry formulation with global export buyers"
    ],
  },
];

export const MushroomComparison = () => {
  const [selectedMushroom, setSelectedMushroom] = useState<string>("button");

  const current = MUSHROOMS.find((m) => m.id === selectedMushroom) || MUSHROOMS[0];

  return (
    <section id="mushroom-comparison" className="py-20 relative bg-slate-900/40 border-t border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sprout size={14} />
            <span>Commercial Species Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Compare <span className="gradient-text">Commercial Varieties</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
            Explore temperature requirements, yield metrics, substrate formulations, and profit margins to choose the right mushroom species for your facility.
          </p>
        </div>

        {/* Variety Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {MUSHROOMS.map((m) => {
            const isSelected = selectedMushroom === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMushroom(m.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-purple-600/15 border-purple-500 shadow-lg shadow-purple-600/20 scale-[1.02]"
                    : "bg-white/5 dark:bg-slate-950/40 border-black/5 dark:border-white/10 hover:border-purple-500/40 hover:bg-white/10"
                }`}
              >
                <div>
                  <span className={`inline-block text-[10px] font-black uppercase px-2 py-0.5 rounded-full border mb-2 ${m.badgeColor}`}>
                    {m.tag}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {m.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 italic">{m.botanical}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-purple-400">
                  <span>{m.marketRate.split("(")[0]}</span>
                  <ChevronRight size={14} className={isSelected ? "rotate-90 transition-transform" : ""} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Card for Selected Variety */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-950/80 border border-purple-500/20 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Overview & Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-xs font-black uppercase px-2.5 py-0.5 rounded-full border ${current.badgeColor}`}>
                    {current.tag}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck size={14} />
                    High F1 Spawn Purity Available
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {current.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 italic mt-0.5">{current.botanical}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-3">
                  {current.description}
                </p>
              </div>

              {/* Metric Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                    <Thermometer size={14} className="text-rose-400" />
                    <span>Optimum Temp</span>
                  </div>
                  <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    {current.temp}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                    <Droplets size={14} className="text-blue-400" />
                    <span>Relative Humidity</span>
                  </div>
                  <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    {current.humidity}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                    <Clock size={14} className="text-amber-400" />
                    <span>Harvest Cycle</span>
                  </div>
                  <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    {current.cycle}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                    <Zap size={14} className="text-purple-400" />
                    <span>Average Yield</span>
                  </div>
                  <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    {current.avgYield}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                    <TrendingUp size={14} className="text-emerald-400" />
                    <span>Market Selling Price</span>
                  </div>
                  <div className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400">
                    {current.marketRate}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                    <Award size={14} className="text-indigo-400" />
                    <span>Profit Margin</span>
                  </div>
                  <div className="text-sm sm:text-base font-black text-indigo-600 dark:text-indigo-400">
                    {current.profitMargin}
                  </div>
                </div>
              </div>

              {/* Substrate requirement */}
              <div className="p-3.5 rounded-2xl bg-purple-500/5 border border-purple-500/20 text-xs text-slate-700 dark:text-slate-300">
                <span className="font-bold text-purple-400">Recommended Substrate: </span>
                {current.substrate}
              </div>
            </div>

            {/* Right Col: Commercial Advantages & CTA */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-linear-to-br from-purple-950/40 to-slate-900/60 border border-purple-500/20 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Award size={18} className="text-purple-400" />
                  <span>Commercial Growth Advantages</span>
                </h4>
                <ul className="space-y-3 text-xs text-slate-300">
                  {current.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(current.name)}%20Spawn%20or%20get%20farm%20setup%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 py-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  <span>Order {current.name.split(" ")[0]} Spawn</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MushroomComparison;
