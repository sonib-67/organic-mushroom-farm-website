'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  Calculator,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  BarChart3,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const BusinessPlanHero: React.FC = () => {
  const { openConsultationModal, openQuoteCalculatorModal } = useAppModals();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badges & Meta */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-500 border border-emerald-500/20 flex items-center gap-1.5">
            <Sparkles size={13} /> Complete 2026 Agribusiness Guide
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
            <Calendar size={13} /> Updated July 2026
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
            <Clock size={13} /> 12 Min Read
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold dark:text-white text-slate-900 tracking-tight leading-[1.15] mb-6"
        >
          Mushroom Farming Business Plan India:{' '}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Cost, Profit & Complete Startup Blueprint
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          A step-by-step commercial roadmap for Indian entrepreneurs and farmers. Learn setup costs,
          high-yield varieties, vertical farming economics, 40%+ profit margins, government subsidies,
          and proven marketing strategies.
        </motion.p>

        {/* Quick CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => openQuoteCalculatorModal()}
            className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
          >
            <Calculator size={18} />
            <span>Calculate Setup Cost & ROI</span>
          </button>
          <button
            onClick={() =>
              openConsultationModal({
                category: 'Turnkey Farm Setup',
                message: 'I need a custom Project Report (DPR) and Business Plan consultation for my farm.',
              })
            }
            className="px-6 py-3.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold text-sm sm:text-base flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <span>Book Expert Consultation</span>
            <ArrowRight size={18} />
          </button>
          <a
            href="https://wa.me/919203544140?text=Hello%20Organic%20Mushrooms%20Farm,%20I%20read%20your%20Business%20Plan%20guide%20and%20want%20to%20start%20my%20mushroom%20farm."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-sm sm:text-base border border-emerald-500/20 flex items-center gap-2 transition-all"
          >
            <Phone size={18} />
            <span>WhatsApp 9203544140</span>
          </a>
        </motion.div>

        {/* Snapshot Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left"
        >
          <div className="glass p-4 sm:p-5 rounded-2xl border dark:border-white/10 border-black/10">
            <div className="flex items-center gap-2 text-emerald-500 mb-1">
              <TrendingUp size={16} />
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">Gross Margin</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold dark:text-white text-slate-900">40% – 60%</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Highest among Indian agri-sectors</p>
          </div>

          <div className="glass p-4 sm:p-5 rounded-2xl border dark:border-white/10 border-black/10">
            <div className="flex items-center gap-2 text-blue-500 mb-1">
              <Building2 size={16} />
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">Min. Space</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold dark:text-white text-slate-900">300 – 500 Sq Ft</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Multi-tier vertical racking</p>
          </div>

          <div className="glass p-4 sm:p-5 rounded-2xl border dark:border-white/10 border-black/10">
            <div className="flex items-center gap-2 text-amber-500 mb-1">
              <BarChart3 size={16} />
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">Crop Cycle</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold dark:text-white text-slate-900">22 – 45 Days</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Fast cash turnover cycle</p>
          </div>

          <div className="glass p-4 sm:p-5 rounded-2xl border dark:border-white/10 border-black/10">
            <div className="flex items-center gap-2 text-purple-500 mb-1">
              <Award size={16} />
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">Govt Subsidy</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold dark:text-white text-slate-900">20% – 50%</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">NHB & NABARD schemes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
