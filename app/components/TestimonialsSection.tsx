"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Star,
  Quote,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Building,
  UserCheck,
  Award
} from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  role: string;
  farmScale: string;
  monthlyYield: string;
  rating: number;
  comment: string;
  verificationBadge: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajendra Sharma",
    location: "Indore, Madhya Pradesh",
    role: "Commercial Button Grower",
    farmScale: "2-Room Turnkey Setup (2,500 Bags)",
    monthlyYield: "3,200 kg / Month",
    rating: 5,
    comment:
      "We started our button mushroom farm with Organic Mushrooms Farm's turnkey setup in 2024. Their spawn quality is unmatched—zero green mold contamination and we hit our first harvest in 42 days. The agronomist team in Jabalpur guided us on cold-room CO2 exhaust controls daily.",
    verificationBadge: "Verified Commercial Client",
  },
  {
    name: "Dr. Arvind Patel",
    location: "Patna, Bihar",
    role: "Agri-Entrepreneur & Masterclass Graduate",
    farmScale: "Oyster & Milky Setup (1,800 Bags)",
    monthlyYield: "1,500 kg / Month",
    rating: 5,
    comment:
      "Attended the ₹499 Masterclass and ordered 200 kg F1 Oyster spawn. The spawn arrived in refrigerated packing within 48 hours. The yield per bag exceeded 1.1 kg. Their DPR helped us secure a 40% NABARD subsidy seamlessly.",
    verificationBadge: "Masterclass Certified",
  },
  {
    name: "Sunil & Kavita Verma",
    location: "Jabalpur, Madhya Pradesh",
    role: "Commercial Farm Owner",
    farmScale: "4-Room High-Yield Unit (6,000 Bags)",
    monthlyYield: "7,800 kg / Month",
    rating: 5,
    comment:
      "Having our farm 30 km from their Jabalpur center gave us instant access to Phase-II pasteurized compost. We supply fresh white buttons daily to local hotels and supermarkets with steady 52% net profit margins.",
    verificationBadge: "Verified Commercial Client",
  },
  {
    name: "Vikram Deshmukh",
    location: "Pune, Maharashtra",
    role: "Medicinal & Oyster Exporter",
    farmScale: "Cordyceps Lab & Oyster Farm",
    monthlyYield: "600 kg Dry Export / Qtr",
    rating: 5,
    comment:
      "Organic Mushrooms Farm provided the sterile clean-room layout and pure Cordyceps militaris liquid culture. The biological efficiency is outstanding. Their export market linkage connected us directly with B2B buyers.",
    verificationBadge: "Verified Biotech Client",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            <UserCheck size={14} />
            <span>Grower Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Verified <span className="gradient-text">Grower Success Stories</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
            Over 2,400+ trained agripreneurs and 180+ commercial turnkey installations across India. Here is what real farm owners have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-950/80 border border-purple-500/20 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t.verificationBadge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <MapPin size={12} className="text-purple-400" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs">
                  <div className="font-bold text-purple-600 dark:text-purple-400">{t.farmScale}</div>
                  <div className="text-emerald-500 font-semibold">{t.monthlyYield}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
