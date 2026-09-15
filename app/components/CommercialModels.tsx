"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export const CommercialModels = () => {
  const [activeTab, setActiveTab] = useState<"fixed" | "custom">("fixed");
  const [customArea, setCustomArea] = useState(1500);
  const [customBudget, setCustomBudget] = useState(1200000);

  const models = [
    {
      name: "Standard Commercial Unit",
      size: "1 Room (18x70 ft)",
      investment: "₹8-14 Lakh",
      yield: "800-1200 kg/cycle",
      features: [
        "80mm PUF Insulated Panels",
        "Daikin Industrial Split AC Setup",
        "Pre-Fabricated GI Grow Racks",
        "Digital Temp & Humidity Monitor"
      ],
      label: "Entry Commercial",
      recommended: false,
    },
    {
      name: "High-Yield Multi-Room Setup",
      size: "2-3 Grow Rooms",
      investment: "₹15-42 Lakh",
      yield: "3,000-3,500 kg/cycle",
      features: [
        "100mm PUF Commercial Structure",
        "Automated Microclimate & CO2 Exhaust",
        "Pre-Cooling & Cold Storage Facility",
        "Full SOPs & Buyback Assistance"
      ],
      label: "Most Popular",
      recommended: true,
    },
    {
      name: "Industrial Factory Scale",
      size: "Compost Unit + 4-6 Rooms",
      investment: "₹1.5Cr - 2.5Cr",
      yield: "15,000+ kg/cycle",
      features: [
        "Phase-II Pasteurized Compost Bunker",
        "PLC Central Automation & AHU System",
        "Canning & Post-Harvest Processing",
        "Full Export Ready Compliance"
      ],
      label: "Enterprise Farm",
      recommended: false,
    },
  ];

  const getRecommendedSetup = () => {
    if (customBudget >= 5000000 || customArea >= 4000) {
      return {
        title: "Large Commercial / Industrial Facility",
        desc: "Ideal for 4+ grow rooms with integrated Phase-II compost tunnel and blast cooling.",
      };
    } else if (customBudget >= 1500000 || customArea >= 1500) {
      return {
        title: "Multi-Room Automated Unit (2-3 Rooms)",
        desc: "Best ROI balance with year-round button and oyster mushroom production.",
      };
    } else {
      return {
        title: "Standard 1-Room Commercial Setup",
        desc: "Compact 18x70 ft unit ideal for starting profitable commercial operations.",
      };
    }
  };

  return (
    <section id="farming-models" className="py-12 sm:py-20 relative border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 text-center lg:text-left items-center">
          <div className="max-w-xl">
            <span className="text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3.5 py-1 rounded-full border border-purple-500/20">
              Investment Paths
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4">
              Commercial Farming <span className="gradient-text">Models</span> & Setup ROI
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
              Scientifically engineered mushroom grow rooms optimized for Indian and diverse global climate zones.
            </p>
          </div>

          <div className="glass p-1.5 rounded-2xl flex gap-1 border border-black/10 dark:border-white/10">
            <button
              onClick={() => setActiveTab("fixed")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "fixed"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Fixed Models
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "custom"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Custom Calculator
            </button>
          </div>
        </div>

        {activeTab === "fixed" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {models.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative glass p-6 sm:p-8 rounded-3xl flex flex-col justify-between border ${
                  m.recommended
                    ? "border-purple-500/50 shadow-2xl shadow-purple-500/10 lg:-translate-y-2 ring-1 ring-purple-500/30"
                    : "border-black/5 dark:border-white/10"
                }`}
              >
                {m.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full btn-primary text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                    <Sparkles size={12} />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                    {m.label}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {m.name}
                  </h3>
                  <div className="mt-1 text-slate-500 text-xs font-medium">
                    {m.size}
                  </div>

                  <div className="grid grid-cols-2 gap-3 my-6">
                    <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">
                        Est. Setup Cost
                      </div>
                      <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        {m.investment}
                      </div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">
                        Yield / Cycle
                      </div>
                      <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                        {m.yield}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {m.features.map((f, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                      >
                        <CheckCircle2 size={16} className="text-purple-600 dark:text-purple-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20want%20details%20and%20quotation%20for%20Commercial%20Farm%20Setup."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex justify-center items-center gap-2 transition-all ${
                    m.recommended ? "btn-primary" : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white"
                  }`}
                >
                  <span>Request Full Project DPR</span>
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-6 sm:p-12 rounded-3xl border border-black/10 dark:border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                  Interactive Custom Setup Estimator
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                      <span>Available Land / Shed Area</span>
                      <span className="text-purple-600 dark:text-purple-400">
                        {customArea.toLocaleString()} sq. ft.
                      </span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="10000"
                      step="100"
                      value={customArea}
                      onChange={(e) => setCustomArea(Number(e.target.value))}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                      <span>Planned Capital Budget</span>
                      <span className="text-purple-600 dark:text-purple-400">
                        ₹{(customBudget / 100000).toFixed(1)} Lakhs
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100000"
                      max="10000000"
                      step="50000"
                      value={customBudget}
                      onChange={(e) => setCustomBudget(Number(e.target.value))}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-linear-to-br from-purple-500/10 to-emerald-500/10 border border-purple-500/20 text-center flex flex-col items-center justify-center">
                <ShieldCheck size={44} className="text-purple-600 dark:text-purple-400 mb-4" />
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-1">
                  Custom Recommendation
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-2">
                  {getRecommendedSetup().title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
                  {getRecommendedSetup().desc}
                </p>
                <a
                  href={`https://wa.me/919203544140?text=Hi,%20I%20have%20${customArea}%20sqft%20area%20and%20budget%20of%20Rs%20${(customBudget/100000).toFixed(1)}%20Lakhs.%20Please%20suggest%20a%20mushroom%20farm%20plan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2"
                >
                  <span>Get Custom Layout & Quote</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CommercialModels;
