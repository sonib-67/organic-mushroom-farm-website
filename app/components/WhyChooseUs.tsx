"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  TrendingUp,
  Briefcase,
  MapPin,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Video
} from "lucide-react";

export const WhyChooseUs = () => {
  const chooseItems = [
    {
      title: "Cost Efficiency (15–25% Savings)",
      subtitle:
        "Direct manufacturing eliminates middlemen, ensuring 15–25% lower setup costs.",
      points: [
        "In-house PUF panel production",
        "Own rack fabrication unit",
        "Direct pricing advantage",
        "Strict quality control",
      ],
      icon: TrendingUp,
      color: "from-blue-500/15 to-purple-500/15",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Smart B2B Pricing",
      subtitle:
        "Wholesale pricing model for every mushroom farmer regardless of project size.",
      points: [
        "Wholesale pricing model",
        "Volume discounts",
        "Transparent breakdown",
        "No hidden costs",
      ],
      icon: Briefcase,
      color: "from-purple-500/15 to-pink-500/15",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      title: "Nationwide & Global Execution",
      subtitle:
        "Delivery and execution across India & worldwide with expert setup teams.",
      points: [
        "Coverage across all states & UTs in India",
        "International project support",
        "Local installation teams",
        "End-to-end logistics",
      ],
      icon: MapPin,
      color: "from-blue-600/15 to-cyan-500/15",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      title: "Price Match Guarantee",
      subtitle:
        "Lowest cost guarantee without compromising on commercial project quality.",
      points: [
        "Guaranteed lowest pricing",
        "Market comparison support",
        "Extra discount on matching quotes",
        "No quality compromise",
      ],
      icon: ShieldCheck,
      color: "from-indigo-500/15 to-blue-500/15",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      title: "Certified Quality",
      subtitle:
        "Built on international recognized standards for commercial mushroom cultivation.",
      points: [
        "Premium materials only",
        "Multi-level quality checks",
        "Standardized processes",
        "Long-term durability",
      ],
      icon: Award,
      color: "from-amber-400/15 to-orange-500/15",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Reliable Partnership",
      subtitle:
        "We help you build highly profitable commercial mushroom businesses.",
      points: [
        "Lifetime technical support",
        "Expert B2B consultation",
        "Proven project success",
        "Farmer-first approach",
      ],
      icon: Users,
      color: "from-emerald-500/15 to-teal-500/15",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section id="why-us" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 360 View Video Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            <Video size={14} />
            <span>Virtual Farm Tour</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">
            Commercial Mushroom Farm <span className="gradient-text">360° View</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Explore our state-of-the-art commercial mushroom farm setup. Watch this 360-degree view video to understand the infrastructure and scientific approach we implement for high-yield turnkey projects.
          </p>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-black aspect-video relative max-w-3xl mx-auto">
            <video
              className="w-full h-full object-cover"
              controls
              preload="none"
              poster="/images/mushroom360viewimage.jpeg"
              title="Commercial Mushroom Farm 360 View Setup - Modern Infrastructure and Scientific Cultivation"
              aria-label="360 Degree Virtual Tour of Commercial Mushroom Farm Setup"
            >
              <source src="/video/mushroom360viewfarmsetup.mp4" type="video/mp4" />
              <track kind="captions" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Why Choose Us Cards */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3.5 py-1 rounded-full border border-purple-500/20">
            Mushroom Infrastructure Leaders
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4">
            Why Choose <span className="gradient-text">Organic Mushrooms Farm</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Industry-leading specifications, transparent pricing, and nationwide execution for high-yield success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chooseItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-6 rounded-3xl bg-linear-to-br ${item.color} border border-black/5 dark:border-white/10 glass flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center mb-5">
                  <item.icon className={item.iconColor} size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-black/5 dark:border-white/10">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
