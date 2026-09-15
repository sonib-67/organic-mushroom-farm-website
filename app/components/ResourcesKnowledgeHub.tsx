"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Download,
  FileText,
  PlayCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How much investment is required to start a commercial mushroom farm?",
    answer:
      "A small-to-medium commercial button mushroom farm with 1 insulated grow room (1,500 - 2,000 bags) typically requires ₹8 to ₹14 Lakh including insulated PUF panels, HVAC refrigeration, humidification, and racks. Low-cost Oyster mushroom setups can be started with as little as ₹50,000 to ₹1.5 Lakh. NHB and NABARD offer 40% - 50% capital subsidies for eligible farmers.",
    category: "Financials & Cost",
  },
  {
    question: "What is the yield per 100 kg of compost or per bag?",
    answer:
      "For White Button mushrooms, standard biological efficiency yields 18 to 22 kg of fresh mushrooms per 100 kg of Phase-II pasteurized compost across 3 flushes. For Oyster mushrooms, each 2.5 kg wet straw bag yields approximately 800g to 1.2 kg over 2-3 flushes.",
    category: "Yield & Biology",
  },
  {
    question: "How do I secure the 40% to 50% government subsidy from NHB or NABARD?",
    answer:
      "You need a certified Detailed Project Report (DPR), land possession documents (own or long lease), quotation from certified infrastructure providers, and bank term loan sanction. Our advisory provides bank-approved DPRs and assists throughout the documentation process.",
    category: "Subsidies & DPR",
  },
  {
    question: "Can I sell fresh mushrooms in my local district mandi?",
    answer:
      "Yes. Most tier-1, tier-2, and tier-3 city mandis have high demand for fresh mushrooms from hotels, wedding caterers, and retail vendors. We also connect our trained farmers with verified B2B buyers and regional wholesale distributors for buyback and contract trade.",
    category: "Marketing & Sales",
  },
  {
    question: "What is the difference between your ₹199 Workshop and ₹499 Masterclass?",
    answer:
      "The ₹199 Workshop is a 2-hour high-impact live orientation covering Button & Oyster fundamentals, compost formulas, and market basics. The ₹499 Masterclass is a comprehensive 4-week commercial blueprint covering 10+ varieties, HVAC/chiller engineering, clean-room lab design, DPR subsidy templates, and ISO certification.",
    category: "Training Programs",
  },
];

const DOWNLOADABLE_RESOURCES = [
  {
    title: "Phase-I & Phase-II Compost Formulation Formula",
    type: "PDF Guide",
    size: "2.4 MB",
    description: "Detailed raw material ratios (straw, poultry manure, gypsum, urea) with temperature schedules.",
  },
  {
    title: "Commercial Mushroom Pest & Disease Identification",
    type: "Diagnostic Chart",
    size: "3.1 MB",
    description: "How to identify and cure Trichoderma green mold, Mycogone wet bubble, and sciarid flies.",
  },
  {
    title: "NABARD / NHB 40-50% Subsidy Application Checklist",
    type: "DPR Checklist",
    size: "1.8 MB",
    description: "Step-by-step documentation guide to secure bank term loans and central government subsidies.",
  },
  {
    title: "Commercial Farm Daily Climate Log Sheet",
    type: "Excel / PDF",
    size: "950 KB",
    description: "Log sheet for daily room air temp, bed core temp, humidity, and CO2 monitoring.",
  },
];

export const ResourcesKnowledgeHub = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="knowledge-hub" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen size={14} />
            <span>Knowledge & Agronomy Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Commercial <span className="gradient-text">Resources & FAQ Hub</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
            Download certified SOP formulas, watch modern farm walkthrough videos, and get scientific answers to commercial mushroom farming questions.
          </p>
        </div>

        {/* Video Walkthrough + Download Guides Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left: Video Walkthrough */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950/80 border border-purple-500/20 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase">
              <PlayCircle size={16} />
              <span>Modern High-Yield Farm Video Walkthrough</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Inside a Commercial 6-Room Automated Facility
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Watch how our climate automation maintains 15°C cold-room temperatures, automated CO2 exhaust cycles, and high-density 5-tier vertical racking.
            </p>

            {/* Responsive Video Embed Placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-purple-500/20 shadow-inner group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?controls=1&rel=0"
                title="Commercial Mushroom Farm Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right: Downloadable SOP Guides */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 mb-2">
              <FileText size={18} className="text-purple-400" />
              <span>Downloadable Technical SOPs & DPRs</span>
            </h3>

            <div className="space-y-3">
              {DOWNLOADABLE_RESOURCES.map((res, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-950/80 border border-black/5 dark:border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-between gap-4 shadow-sm"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">
                        {res.type}
                      </span>
                      <span className="text-[11px] text-slate-500">{res.size}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {res.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {res.description}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20Please%20send%20the%20${encodeURIComponent(res.title)}%20guide.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-purple-500/10 hover:bg-purple-600 text-purple-400 hover:text-white transition-all shrink-0 cursor-pointer"
                    title="Download Guide"
                  >
                    <Download size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commercial FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase">
              Frequently Asked <span className="gradient-text">Agronomy Questions</span>
            </h3>
          </div>

          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-slate-950/80 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-black/5 dark:border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesKnowledgeHub;
