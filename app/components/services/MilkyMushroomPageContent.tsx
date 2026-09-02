'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sun,
  Sprout,
  CheckCircle2,
  TrendingUp,
  Phone,
  ArrowRight,
  ShoppingCart,
  BookOpen,
  Sparkles,
  ChevronDown,
  Clock,
  ShieldCheck,
  Flame,
  Award,
  Layers,
  Thermometer,
  Droplets,
  PackageCheck,
  MessageCircle,
  Calculator,
  AlertCircle,
  HelpCircle,
  ShoppingBag,
  Send,
  Loader2,
  Check,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const MilkyMushroomInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal, openQuoteCalculatorModal, openQuickOrderModal } = useAppModals();

  // Contact / Lead capture local state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    scale: 'Commercial Summer Setup (200 - 500 Bags)',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormError('Please enter your name and phone number.');
      return;
    }

    setSubmitting(true);
    setFormError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          category: 'Milky Mushroom Services Inquiry',
          message: `Milky Mushroom Lead: Scale=${formData.scale}, Location=${formData.location}`,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err) {
      setFormError('Could not submit inquiry. Please WhatsApp or call us directly at 9203544140.');
    } finally {
      setSubmitting(false);
    }
  };

  const advantages = [
    {
      icon: Sun,
      title: 'Thrives in Intense Summer Heat',
      desc: 'Flourishes effortlessly between 30°C and 35°C with high humidity. Requires zero expensive air conditioning chillers, making it the ideal low-electricity crop for Indian summer months (March to October).',
      badge: '30°C – 35°C Heat Loving',
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    },
    {
      icon: Clock,
      title: 'Remarkable Shelf Life & Meaty Cap',
      desc: 'Naturally dense fibrous stems and thick snowy-white caps stay crisp for 3 to 5 days at ambient room temperature and up to 15 days in normal refrigeration without browning or weeping water.',
      badge: '3-5 Days Room Temp Shelf Life',
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    {
      icon: TrendingUp,
      title: 'Massive Biological Yield & Profit',
      desc: 'Achieves 80% to 100% biological efficiency on dry straw weight. Solid weight per mushroom (100g–300g each) delivers higher tonnage per square foot and gross margins exceeding 55% to 65%.',
      badge: '55% – 65% Profit Margin',
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Substrate Preparation & Pasteurization',
      desc: 'Chop clean golden wheat or paddy straw into 2–4 cm bits. Soak in water and pasteurize using hot water (75°C–80°C for 2 hrs) or steam treatment to eliminate competitive molds.',
      icon: Layers,
    },
    {
      step: '02',
      title: 'Multi-Layer Grain Spawning',
      desc: 'Drain straw to 65% moisture. Inoculate with 3%–4% pure grain Milky Mushroom (Calocybe indica) master spawn in high-gauge PP bags in 3–4 compact, firm layers.',
      icon: PackageCheck,
    },
    {
      step: '03',
      title: 'Dark Room Spawn Run (25°C–30°C)',
      desc: 'Incubate sealed bags in a dark, clean room for 20 to 25 days. Aggressive, brilliant white cottony mycelium rapidly colonizes the entire substrate block.',
      icon: Thermometer,
    },
    {
      step: '04',
      title: 'Casing Soil Application (2–3 cm)',
      desc: 'Cut bags horizontally into two halves. Apply a 2–3 cm layer of steam-pasteurized casing soil (sandy loam / 2-year old spent compost + CaCO3 at pH 7.8–8.2).',
      icon: ShieldCheck,
    },
    {
      step: '05',
      title: 'Cropping Induction & Light Trigger',
      desc: 'Move cased blocks to the cropping chamber with 80%–85% humidity, fresh air ventilation (CO2 < 1,200 ppm), and diffused lighting (200–500 lux). Pinheads emerge in 8–12 days.',
      icon: Droplets,
    },
    {
      step: '06',
      title: 'Plucking & Multiple Flush Harvests',
      desc: 'Harvest mature, closed snowy-white buttons by gentle clockwise twisting. Yields 2 to 3 substantial flushes spaced 10 days apart with total yield of 800g–1kg per bag.',
      icon: Sprout,
    },
  ];

  const parameterTable = [
    { param: 'Optimum Spawn Run Temperature', val: '25°C – 30°C', note: 'Dark room incubation' },
    { param: 'Optimum Cropping / Fruiting Temp', val: '30°C – 35°C', note: 'Natural summer ambient' },
    { param: 'Relative Humidity (RH)', val: '80% – 85%', note: 'Foggers / fine sprayers' },
    { param: 'Substrate Base', val: 'Wheat Straw / Paddy Straw', note: 'Chopped 2–4 cm' },
    { param: 'Casing Layer Requirement', val: 'Mandatory (2.5 – 3.0 cm)', note: 'pH 7.8 – 8.2 with Gypsum/Chalk' },
    { param: 'Light Requirement', val: '200 – 500 Lux (Fruiting)', note: 'Diffused daylight or LED' },
    { param: 'First Flush Turnaround', val: '32 – 38 Days from Spawning', note: 'Rapid summer cycle' },
    { param: 'Biological Efficiency (Yield)', val: '80% – 100% of Dry Straw', note: 'Up to 1 kg per kg dry straw' },
  ];

  const economics = [
    {
      scale: 'Small Summer Trial (50 Bags)',
      cost: '₹3,500 – ₹5,000',
      yield: '40 – 50 kg',
      profit: '₹5,000 – ₹8,000 / batch',
      ideal: 'Home growers & beginners',
    },
    {
      scale: 'Semi-Commercial (200 Bags)',
      cost: '₹14,000 – ₹20,000',
      yield: '160 – 200 kg',
      profit: '₹22,000 – ₹32,000 / batch',
      ideal: 'Farmers with spare sheds',
    },
    {
      scale: 'Commercial Summer Unit (500 Bags)',
      cost: '₹35,000 – ₹48,000',
      yield: '400 – 500 kg',
      profit: '₹55,000 – ₹80,000 / month',
      ideal: 'Agri-entrepreneurs',
    },
    {
      scale: 'Industrial Scale (2,000+ Bags)',
      cost: '₹1.4L – ₹1.9L',
      yield: '1,600 – 2,200 kg',
      profit: '₹2.2L – ₹3.5L+ / month',
      ideal: 'Full commercial enterprise',
    },
  ];

  const faqs = [
    {
      q: 'Why are Milky Mushrooms called the best summer crop in India?',
      a: 'Most mushroom varieties like Button and winter Oyster fail or require high electricity AC cooling when ambient temperatures cross 28°C. Milky Mushroom (Calocybe indica) is indigenous to tropical India and thrives naturally at 30°C to 35°C with high humidity. This enables growers across Central, Northern, and Southern India to maintain non-stop commercial production throughout the hot summer months without running expensive chillers.',
    },
    {
      q: 'Why is casing soil mandatory for Milky Mushroom cultivation?',
      a: 'Unlike Oyster mushrooms which fruit directly from straw slits, Milky mushroom mycelium requires a 2.5 to 3 cm moisture-retentive casing layer (pH 7.8 to 8.2) to support the heavy fruit body, retain vital humidity, and harbour beneficial soil microflora that chemically stimulate pinhead formation.',
    },
    {
      q: 'What makes Milky Mushroom shelf life superior to other varieties?',
      a: 'Milky mushrooms have a solid, thick stem and dense fibrillose cellular structure. Because of this high tissue density, they do not lose water easily and can be stored at room temperature (25°C–30°C) for 3 to 5 days without discoloring or losing weight. In a standard refrigerator (4°C–8°C), they remain fresh for up to 15 days, making them ideal for long-distance mandi transport.',
    },
    {
      q: 'What is the selling price of fresh Milky Mushrooms in wholesale and retail?',
      a: 'In local sabzi mandis and supermarkets, fresh Milky mushrooms sell between ₹140 and ₹200 per kg at retail, and ₹100 to ₹140 per kg at wholesale. In southern and central states where paneer is expensive, Milky mushrooms are highly prized as a direct culinary meat and paneer substitute.',
    },
    {
      q: 'How can I get high-yielding Milky Mushroom master spawn and cultivation training?',
      a: 'Organic Mushrooms Farm supplies lab-certified F1 hybrid Milky Mushroom grain spawn delivered safely via express courier across all Indian states. We also provide online digital masterclasses and hands-on offline farm training at our Jabalpur commercial facility.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-black uppercase tracking-widest mb-5">
              <Sun size={15} /> Commercial Summer Crop Agronomy
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 mb-5 tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              Milky Mushroom <span className="bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-black">Cultivation & Services</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
              The ultimate summer cash crop (<em>Calocybe indica</em>). Thrives effortlessly in <strong>30°C – 35°C</strong> Indian summers with low electricity costs, heavy biological yields, and exceptional <strong>3–5 days room temperature shelf life</strong>.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-4xl mx-auto mb-10 text-center">
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Fruiting Temp
                </div>
                <div className="text-xl sm:text-2xl font-black text-amber-500">
                  30°C – 35°C
                </div>
                <div className="text-[10px] text-slate-400">Zero AC required</div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Fresh Shelf Life
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  3 – 5 Days
                </div>
                <div className="text-[10px] text-slate-400">At room temp</div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Crop Cycle
                </div>
                <div className="text-xl sm:text-2xl font-black dark:text-white text-slate-900">
                  32 – 38 Days
                </div>
                <div className="text-[10px] text-slate-400">To 1st flush harvest</div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Yield Efficiency
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  80% – 100%
                </div>
                <div className="text-[10px] text-slate-400">Dry straw weight</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openQuoteCalculatorModal()}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-emerald-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg cursor-pointer"
              >
                <Calculator size={16} /> Calculate Summer Setup Cost <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => openQuickOrderModal()}
                className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <ShoppingBag size={16} /> Order F1 Master Spawn
              </button>
              <a
                href="https://wa.me/919203544140?text=Hello%20Organic%20Mushrooms%20Farm,%20I%20am%20interested%20in%20Milky%20Mushroom%20cultivation%20training%20and%20spawn."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} /> WhatsApp: 9203544140
              </a>
            </div>
          </motion.div>
        </section>

        {/* 3 Core Commercial Pillars */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${adv.color}`}>
                        {adv.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {adv.desc}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                    <CheckCircle2 size={14} /> Commercial Indian Adaptability
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6-Step Cultivation SOP */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <ShieldCheck size={12} /> Standard Operating Procedures
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Milky Mushroom <span className="gradient-text font-black">Step-by-Step Blueprint</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              From straw pasteurization and casing soil application to pinning induction and multi-flush plucking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-500 dark:text-amber-400">{s.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                      <s.icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Growth Parameters & Micro-Climate Matrix */}
        <section className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-14">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Thermometer size={12} /> Environmental Triggers
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Technical Agronomy <span className="gradient-text font-black">Cheat Sheet</span>
              </h2>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-black/5 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 uppercase text-[11px] font-bold tracking-wider">
                    <tr>
                      <th className="p-4 sm:p-5">Growth Parameter</th>
                      <th className="p-4 sm:p-5">Optimum Benchmark</th>
                      <th className="p-4 sm:p-5">Agronomic Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {parameterTable.map((row, i) => (
                      <tr key={i} className="hover:bg-amber-500/[0.03] transition-colors">
                        <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">
                          {row.param}
                        </td>
                        <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-bold">
                          {row.val}
                        </td>
                        <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400 text-xs">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Economics & Profit Table */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <TrendingUp size={12} /> Unit Economics & Margins
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Summer Cost vs Profit <span className="gradient-text font-black">Projections</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                Calculated on standard Indian wheat straw, master spawn, and fresh mandi wholesale realizations.
              </p>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-4 font-bold">Scale / Bag Count</th>
                    <th className="py-3 px-4 font-bold">Input Cost (OPEX)</th>
                    <th className="py-3 px-4 font-bold">Fresh Yield Output</th>
                    <th className="py-3 px-4 font-bold">Estimated Net Profit</th>
                    <th className="py-3 px-4 font-bold">Recommended For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {economics.map((e, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-bold dark:text-white text-slate-900">{e.scale}</td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">{e.cost}</td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 font-medium">{e.yield}</td>
                      <td className="py-3.5 px-4 font-black text-emerald-600 dark:text-emerald-400">{e.profit}</td>
                      <td className="py-3.5 px-4 text-xs text-slate-500">{e.ideal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                * Realizations based on conservative mandi price of ₹140/kg fresh. Direct retail and institutional supply yield higher margins.
              </p>
              <button
                onClick={() => openQuoteCalculatorModal()}
                className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold shrink-0 hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
              >
                <Calculator size={14} /> Calculate Custom Setup
              </button>
            </div>
          </div>
        </section>

        {/* Lead Capture & Technical Advisory Form */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 sm:p-10 rounded-3xl border border-amber-500/20 dark:border-amber-500/20 bg-gradient-to-r from-amber-500/[0.06] via-emerald-500/[0.04] to-transparent shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={13} /> Pan-India Summer Agronomy Desk
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 leading-tight">
                  Launch Your Milky Mushroom Commercial Summer Production
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Get certified F1 hybrid master spawn, casing soil formulas, hands-on training, and summer cropping room layouts directly from India’s leading mushroom agronomy specialists.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold pt-1 text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>Lab-Certified F1 Pure Spawn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>Pasteurized Casing Soil Formula</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>Low-Cost Summer Shed Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>B2B Market & Buyback Connect</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-lg">
                  {submitted ? (
                    <div className="text-center py-6 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                        <Check size={24} />
                      </div>
                      <h4 className="text-base font-bold dark:text-white text-slate-900">
                        Inquiry Received!
                      </h4>
                      <p className="text-xs text-slate-500">
                        Our agronomy advisor will call you with spawn booking and summer room layout details.
                      </p>
                      <a
                        href="https://wa.me/919203544140?text=I%20just%20submitted%20Milky%20Mushroom%20inquiry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
                      >
                        <MessageCircle size={14} /> WhatsApp Connect
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-3">
                      <h4 className="text-sm font-bold dark:text-white text-slate-900">
                        Request Milky Spawn & Guidance
                      </h4>

                      {formError && (
                        <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500 text-xs font-semibold">
                          {formError}
                        </div>
                      )}

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-amber-500 dark:text-white text-slate-900 focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                            Phone / WA *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="9876543210"
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-amber-500 dark:text-white text-slate-900 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                            City / State
                          </label>
                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="e.g. Nagpur, MH"
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-amber-500 dark:text-white text-slate-900 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          Project Scope
                        </label>
                        <select
                          value={formData.scale}
                          onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-amber-500 dark:text-white text-slate-900 focus:outline-none"
                        >
                          <option value="Commercial Summer Setup (200 - 500 Bags)">Commercial Summer Setup (200 - 500 Bags)</option>
                          <option value="Large Farm Unit (1,000+ Bags)">Large Farm Unit (1,000+ Bags)</option>
                          <option value="Small Home Setup (50 Bags)">Small Home Setup (50 Bags)</option>
                          <option value="Certified Spawn Booking Only">Certified Spawn Booking Only</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send size={13} />
                            <span>Get Technical Callback</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-14">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
              <HelpCircle size={12} /> Questions & Answers
            </div>
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Milky Mushroom <span className="gradient-text font-black">FAQs</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm dark:text-slate-200 text-slate-800 cursor-pointer"
                  >
                    <span className="flex items-start gap-2">
                      <span className="text-amber-500 shrink-0 font-black">Q:</span>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                        isOpen ? 'rotate-180 text-amber-500' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-1 pl-8">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-amber-600 via-emerald-600 to-teal-700 text-white shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight">
              Ready to Master Milky Mushroom Summer Farming?
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              Get certified high-yield F1 master spawn, professional training modules, and complete farm layout support with Organic Mushrooms Farm.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/training"
                className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black text-xs md:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <BookOpen size={16} /> Explore Training Courses
              </Link>
              <a
                href="tel:+919203544140"
                className="px-8 py-4 rounded-2xl bg-slate-950/60 border border-white/20 text-white font-black text-xs md:text-sm inline-flex items-center gap-2 hover:bg-slate-950/80 transition-all"
              >
                <Phone size={16} /> Call +91 9203544140
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <HomeModals />

      {/* Floating Elements (Left AI Chat & Training) */}
      <div className="floating-button-wrapper fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none bottom-[65px] md:bottom-[20px] z-[99999]">
        <div className="pointer-events-auto">
          <AIChatWidget />
        </div>
        <div className="flex flex-col gap-1.5 md:gap-3 items-start pointer-events-auto">
          <div className="hidden md:flex flex-col gap-3 items-start">
            <div className="w-[140px] md:w-auto">
              <StickyTrainingButton size="normal" />
            </div>
          </div>
          <div className="h-7.5 w-auto min-w-[100px] max-w-[130px] md:hidden relative z-[99998]">
            <StickyTrainingButton size="small" />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp on Right */}
      <StickyWhatsAppButton />

      {/* Mobile Sticky Bottom Bar */}
      <MobileBottomStickyBar />
    </div>
  );
};

export const MilkyMushroomPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <MilkyMushroomInner />
    </ModalProvider>
  );
};
