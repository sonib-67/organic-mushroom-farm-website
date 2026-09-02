'use client';

import React from 'react';
import {
  Crown,
  Calendar,
  Clock,
  UserCheck,
  Sparkles,
  TrendingUp,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const ButtonMushroomGuideHero: React.FC = () => {
  const { openConsultationModal, openQuoteCalculatorModal } = useAppModals();
  const heroImage =
    'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png';

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Top Category */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Crown size={14} className="text-amber-500" /> Commercial Cultivation Masterclass
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> Updated 2026 Edition
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> 12 Min Read
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold dark:text-white text-slate-900 tracking-tight leading-[1.15] mb-6">
          Button Mushroom Farming: <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
            From Spawn & Compost to Commercial Setup
          </span>
        </h1>

        {/* Executive Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mb-8">
          Master the complete science and commercial business of white button mushroom (<em>Agaricus bisporus</em>)
          cultivation in India. Detailed coverage of grain spawn preparation, Phase-II compost formulation, casing soil
          microbiology, climate control triggers, and marketing economics.
        </p>

        {/* Key Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-10">
          <div className="glass p-4 rounded-2xl border dark:border-white/10 border-black/10 text-center">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Market Share
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
              75% – 85%
            </div>
            <div className="text-[11px] text-slate-500">Highest in India</div>
          </div>

          <div className="glass p-4 rounded-2xl border dark:border-white/10 border-black/10 text-center">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Fruiting Temp
            </div>
            <div className="text-xl sm:text-2xl font-black dark:text-white text-slate-900">
              15°C – 18°C
            </div>
            <div className="text-[11px] text-slate-500">Cold shock trigger</div>
          </div>

          <div className="glass p-4 rounded-2xl border dark:border-white/10 border-black/10 text-center">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Crop Turnaround
            </div>
            <div className="text-xl sm:text-2xl font-black dark:text-white text-slate-900">
              35 – 45 Days
            </div>
            <div className="text-[11px] text-slate-500">To 1st flush harvest</div>
          </div>

          <div className="glass p-4 rounded-2xl border dark:border-white/10 border-black/10 text-center">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Average Yield
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
              18% – 22%
            </div>
            <div className="text-[11px] text-slate-500">Per 100 kg compost</div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border dark:border-white/10 border-black/10 mb-8 group">
          <img
            src={heroImage}
            alt="Organic Button Mushroom Farm Setup with climate controlled vertical racks"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/40 px-4 py-2 rounded-xl border border-white/20">
              Commercial High-Density Vertical Racking Setup with Automated Temperature & Humidity Ducting
            </p>
          </div>
        </div>

        {/* Quick Action CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border dark:border-white/10 border-black/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold dark:text-white text-slate-900">
                Commercial Setup & Master Spawn Support
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Certified F1 Button Mushroom master spawn & turnkey HVAC facility blueprints
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => openQuoteCalculatorModal()}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Calculate Project Cost</span>
              <ArrowRight size={14} />
            </button>
            <a
              href="https://wa.me/919203544140?text=Hello%20Organic%20Mushrooms%20Farm,%20I%20want%20information%20about%20Button%20Mushroom%20Farming."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 dark:text-white text-slate-900 font-bold text-xs border dark:border-white/10 border-black/10 transition-all flex items-center justify-center gap-1.5"
            >
              <Phone size={14} className="text-emerald-500" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
