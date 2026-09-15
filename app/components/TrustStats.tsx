"use client";

import React from "react";
import { motion } from "motion/react";
import {
  TrendingUp,
  Award,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Cpu,
  BadgeDollarSign
} from "lucide-react";

export const TrustStats = () => {
  const highlights = [
    {
      title: "15–25% Lower Setup Cost",
      description: "Direct manufacturing of PUF insulated panels and custom grow racks eliminates trading middlemen.",
      icon: BadgeDollarSign,
      color: "from-purple-500/10 to-indigo-500/10",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "G1 Pure Lab Spawn Guarantee",
      description: "Cultured in ultra-clean HEPA laminar airflow labs for rapid mycelium run and maximum flushes.",
      icon: Sparkles,
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Automated Microclimate Control",
      description: "Smart temperature (14–25°C), relative humidity (85–90%), and CO2 exhaust controllers.",
      icon: Cpu,
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Government Subsidy DPR Support",
      description: "Comprehensive documentation and project feasibility reports for NHB, MIDH, and NABARD grants.",
      icon: ShieldCheck,
      color: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600 dark:text-amber-400"
    }
  ];

  return (
    <section className="py-12 sm:py-16 relative z-10 border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3.5 py-1 rounded-full border border-purple-500/20">
            Why Commercial Growers Choose Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
            Engineered For Consistent High Yields & Long-Term Profits
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Proven infrastructure and agronomy support designed specifically for Indian and global tropical climates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-3xl bg-linear-to-br ${item.color} border border-black/5 dark:border-white/10 glass hover:scale-[1.02] transition-transform`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center mb-5">
                <item.icon className={item.iconColor} size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
