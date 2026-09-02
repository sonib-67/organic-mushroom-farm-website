'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Crown,
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
  Building2,
  Factory,
  Cpu,
  FileSpreadsheet,
  FileText,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const ButtonMushroomInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal, openQuoteCalculatorModal, openQuickOrderModal } = useAppModals();

  // Contact / Lead capture local state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    scale: 'Commercial 18x40 ft AC Grow Room (1,600 Bags)',
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
          category: 'Button Mushroom Services Inquiry',
          message: `Button Mushroom Lead: Scale=${formData.scale}, Location=${formData.location}`,
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
      icon: Crown,
      title: '85%+ Commercial Market Dominance',
      desc: 'White Button Mushroom (Agaricus bisporus) is the uncontested global leader. From local sabzi mandis and supermarkets to luxury hotel chains, pizza giants (Domino’s, Pizza Hut), and canning processors, demand is non-stop 365 days a year.',
      badge: '85%+ Indian Market Share',
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    },
    {
      icon: Cpu,
      title: 'Year-Round Controlled AC Production',
      desc: 'Grown in high-tech PUF insulated grow rooms with computerized Daikin HVAC & Air Handling Units (AHUs). Enables predictable 6 to 7 high-tonnage crop flushes annually regardless of external weather.',
      badge: '6–7 Rotations / Year',
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Institutional B2B Off-Take',
      desc: 'Unlike volatile vegetables, fresh button mushrooms command steady wholesale prices of ₹140 to ₹220/kg. High vertical density delivers massive tonnage on minimal land footprint with 45%–60% gross profit margins.',
      badge: '₹140 – ₹220 / kg Realization',
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    },
  ];

  const pillars = [
    {
      title: 'Pasteurized Phase-II Compost',
      desc: 'Formulated with wheat straw, poultry manure, urea, and gypsum, steam conditioned at 58°C–60°C in bulk tunnels to eradicate free ammonia (<5 ppm) and competitor molds.',
      icon: Layers,
    },
    {
      title: 'Precision Microclimate & AHU',
      desc: 'Maintains tight 22°C–25°C spawn run and 14°C–18°C fruiting shock with positive air pressure, 85%–90% relative humidity, and digital NDIR CO₂ flushing (<1,000 ppm).',
      icon: Thermometer,
    },
    {
      title: 'Sterile Casing Soil Layer',
      desc: 'A 2.5–3.5 cm layer of steam-sterilized coco peat/peat moss + CaCO₃ (pH 7.2–7.6) applied to hold critical moisture reserves and trigger uniform pinhead formation.',
      icon: ShieldCheck,
    },
    {
      title: 'Certified F1 Hybrid Master Spawn',
      desc: 'Lab-certified, high-vigor Agaricus bisporus grain spawn ensuring rapid mycelial colonization, heavy bunching, tight cap buttons, and high biological efficiency.',
      icon: PackageCheck,
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Compost Formulation & Phase-I Fermentation',
      desc: 'Dry golden wheat/paddy straw is wetted and stacked with chicken manure, wheat bran, and gypsum. High-temperature aerobic decomposition pushes core heat to 65°C–75°C.',
      icon: Layers,
    },
    {
      step: '02',
      title: 'Phase-II Tunnel Pasteurization',
      desc: 'Compost is transferred to sealed insulated bulk tunnels for peak heating at 58°C–60°C and conditioning at 48°C–52°C. Free ammonia is converted to microbial protein (<5 ppm).',
      icon: Flame,
    },
    {
      step: '03',
      title: 'Grain Spawning & Bag Packing',
      desc: 'Cooled compost (25°C) is inoculated with 0.5%–0.8% pure F1 master grain spawn. Packed into 10 kg high-gauge PP bags or 7-tier stainless/MS cultivation racks.',
      icon: PackageCheck,
    },
    {
      step: '04',
      title: 'Dark Room Spawn Running (22°C–25°C)',
      desc: 'Bags are incubated in a dark room at 22°C–25°C with 85%–90% RH and elevated CO₂ (10,000+ ppm). Silky white mycelium fully colonizes the compost in 14 to 16 days.',
      icon: Thermometer,
    },
    {
      step: '05',
      title: 'Casing Soil Application & Ruffling',
      desc: 'Apply a 2.5–3 cm layer of pasteurized casing soil (coco peat + chalk, pH 7.4). After 5–7 days of mycelial run in casing, light ruffling encourages uniform pinning.',
      icon: ShieldCheck,
    },
    {
      step: '06',
      title: 'Cold Shock Induction & 3-Flush Harvest',
      desc: 'Air temp is dropped to 14°C–16°C and fresh air dampers open (CO₂ < 1,000 ppm). Dense white button pinheads emerge in 8–10 days. Yields 3 heavy flushes (~2 kg/bag).',
      icon: Sprout,
    },
  ];

  const parameterTable = [
    { param: 'Spawn Run (Vegetative) Temperature', val: '22°C – 25°C', note: 'Dark climate grow room' },
    { param: 'Cropping / Pinning (Fruiting) Temp', val: '14°C – 18°C', note: 'Daikin AC + AHU controlled' },
    { param: 'Relative Humidity (RH)', val: '85% – 90%', note: 'Micro-foggers / AHU humidifiers' },
    { param: 'Substrate Requirement', val: 'Phase-II Pasteurized Compost', note: 'Wheat straw + poultry manure + gypsum' },
    { param: 'Casing Soil Layer', val: 'Mandatory (2.5 – 3.5 cm)', note: 'Coco peat / Peat moss (pH 7.2 – 7.6)' },
    { param: 'CO₂ During Spawn Run', val: '5,000 – 15,000 ppm', note: 'High CO₂ boosts mycelium speed' },
    { param: 'CO₂ During Pinning / Fruiting', val: '< 1,000 ppm', note: 'Fresh air dampers active' },
    { param: 'Biological Yield / Output', val: '1.8 – 2.2 kg / 10kg Bag', note: 'Approx. 18% – 22% of compost weight' },
  ];

  const economics = [
    {
      scale: 'Pilot AC Setup (500 Bags)',
      area: '18 × 20 ft Room',
      capex: '₹4.5L – ₹6.5L',
      yieldPerCycle: '900 – 1,100 kg',
      profit: '₹55,000 – ₹80,000 / batch',
      ideal: 'Entry-level commercial proof-of-concept',
    },
    {
      scale: 'Commercial 18x40 ft Unit (1,600 Bags)',
      area: '18 × 40 ft Room',
      capex: '₹12L – ₹16L',
      yieldPerCycle: '3,000 – 3,400 kg',
      profit: '₹1.8L – ₹2.5L / batch',
      ideal: 'Most popular standard commercial farm unit',
    },
    {
      scale: 'Expanded 18x60 ft Unit (2,400 Bags)',
      area: '18 × 60 ft Room',
      capex: '₹18L – ₹24L',
      yieldPerCycle: '4,600 – 5,200 kg',
      profit: '₹2.8L – ₹4.0L / batch',
      ideal: 'High-tonnage regional mandi suppliers',
    },
    {
      scale: 'Industrial 4-Room Plant + Compost Unit',
      area: '5,000 – 10,000 sq ft',
      capex: '₹65L – ₹1.1 Cr',
      yieldPerCycle: '18,000 – 22,000 kg',
      profit: '₹3.5L – ₹5.5L+ / month',
      ideal: 'Agri-business investors with 25%–35% NHB Subsidy',
    },
  ];

  const faqs = [
    {
      q: 'Why is Button Mushroom called the King of the Commercial Market?',
      a: 'Button Mushroom (Agaricus bisporus) commands over 85% of India’s and the world’s mushroom consumption. Because of its mild gourmet taste, dense culinary versatility, and long-standing acceptance across domestic households, 5-star hotels, restaurants, and pizza chains, it provides growers with guaranteed high-volume wholesale off-take and fixed forward-buying contracts that exotic seasonal varieties cannot match.',
    },
    {
      q: 'Why is climate control (AC & AHU) necessary for button mushroom farming?',
      a: 'Button mushrooms are temperate fungi that require cold conditions to initiate pinning. Spawn running occurs at 22°C–25°C, but mushroom fruiting strictly requires 14°C–18°C with CO₂ levels dropped below 1,000 ppm. In tropical and sub-tropical Indian regions, maintaining these exact parameters year-round requires insulated PUF rooms equipped with Daikin refrigeration, precision cooling coils, and automated air handling units.',
    },
    {
      q: 'What is the difference between Phase-I and Phase-II compost?',
      a: 'Phase-I is outdoor aerobic fermentation where straw and nitrogen supplements break down at 65°C–75°C. Phase-II is bulk tunnel pasteurization where the compost is steam-heated to 58°C–60°C to kill nematode pests, weed fungi, and pathogens, followed by a conditioning phase at 48°C–52°C that eliminates toxic free ammonia (<5 ppm). Phase-II compost yields 25% to 40% higher mushroom output than unpasteurized compost.',
    },
    {
      q: 'Can I get government subsidies for a commercial button mushroom farm?',
      a: 'Yes! High-tech climate-controlled button mushroom units with integrated compost tunnels qualify for 25% to 35% capital investment subsidies under the National Horticulture Board (NHB) and Mission for Integrated Development of Horticulture (MIDH). Organic Mushrooms Farm provides bankable Detailed Project Reports (DPR) and end-to-end technical documentation for subsidy sanctioning.',
    },
    {
      q: 'How much fresh button mushroom can I harvest from a 10 kg compost bag?',
      a: 'Under standard climate parameters, a healthy 10 kg Phase-II compost bag yields approximately 1.8 kg to 2.2 kg of fresh button mushrooms across 3 flushes over a 30 to 45 days harvesting window. The first flush typically delivers 50% to 60% of the total harvest.',
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
              <Crown size={15} /> King of Commercial Mushroom Farming
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 mb-5 tracking-tight uppercase max-w-5xl mx-auto leading-tight">
              White Button Mushroom <span className="bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-black">Cultivation & Services</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
              Master the commercial science of <em>Agaricus bisporus</em>. Dominating <strong>85%+ of the global and Indian market</strong> with high-tech AC climate rooms, Phase-II pasteurized compost, F1 master spawn, and <strong>25%–35% NHB subsidy support</strong>.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-5xl mx-auto mb-10 text-center">
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Fruiting Temp
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  14°C – 18°C
                </div>
                <div className="text-[10px] text-slate-400">Precision Daikin AC</div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Market Share
                </div>
                <div className="text-xl sm:text-2xl font-black text-amber-500">
                  85%+
                </div>
                <div className="text-[10px] text-slate-400">Largest B2B & Mandi Trade</div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Yield Benchmark
                </div>
                <div className="text-xl sm:text-2xl font-black dark:text-white text-slate-900">
                  2.0 kg / Bag
                </div>
                <div className="text-[10px] text-slate-400">Per 10kg Compost Block</div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Market Price
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  ₹140 – ₹220/kg
                </div>
                <div className="text-[10px] text-slate-400">45%–60% Profit Margin</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openQuoteCalculatorModal()}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-emerald-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg cursor-pointer"
              >
                <Calculator size={16} /> Calculate Button Farm Cost <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => openQuickOrderModal()}
                className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <ShoppingBag size={16} /> Order F1 Button Spawn
              </button>
              <a
                href="https://wa.me/919203544140?text=Hello%20Organic%20Mushrooms%20Farm,%20I%20am%20interested%20in%20Button%20Mushroom%20farming%20setup,%20training,%20and%20spawn."
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
                    <CheckCircle2 size={14} /> Year-Round Commercial Stability
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4 Technical Foundation Pillars */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xl">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <ShieldCheck size={12} /> The 4 Cornerstones of High Yield
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Engineering Scientific <span className="gradient-text font-black">Precision</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Unlike simple straw-bag mushrooms, Button mushrooms require exact bioprocessing standards. Cutting corners on any of these four pillars directly leads to crop failure:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                      <p.icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-1.5">{p.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6-Step Cultivation SOP */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Clock size={12} /> Standard Operating Procedures
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Button Mushroom <span className="gradient-text font-black">Step-by-Step Blueprint</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              From Phase-I bulk composting and Phase-II tunnel pasteurization to casing soil ruffling and cold shock pinning.
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
                Button Mushroom Setup Cost vs <span className="gradient-text font-black">Profit Projections</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                Calculated on climate-controlled PUF grow rooms, Daikin HVAC systems, and average mandi wholesale rates.
              </p>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-4 font-bold">Scale / Bag Count</th>
                    <th className="py-3 px-4 font-bold">Room Dimensions</th>
                    <th className="py-3 px-4 font-bold">Approx. CAPEX</th>
                    <th className="py-3 px-4 font-bold">Yield Output / Cycle</th>
                    <th className="py-3 px-4 font-bold">Est. Net Profit</th>
                    <th className="py-3 px-4 font-bold">Target Segment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {economics.map((e, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-bold dark:text-white text-slate-900">{e.scale}</td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">{e.area}</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-700 dark:text-slate-300">{e.capex}</td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 font-medium">{e.yieldPerCycle}</td>
                      <td className="py-3.5 px-4 font-black text-emerald-600 dark:text-emerald-400">{e.profit}</td>
                      <td className="py-3.5 px-4 text-xs text-slate-500">{e.ideal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                * Realizations based on conservative mandi realization of ₹140–₹160/kg fresh. Direct supply to supermarkets and hotel chains yields ₹180–₹220/kg.
              </p>
              <button
                onClick={() => openQuoteCalculatorModal()}
                className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold shrink-0 hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
              >
                <Calculator size={14} /> Calculate Custom Farm Setup
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
                  <Sparkles size={13} /> Commercial Button Mushroom Desk
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 leading-tight">
                  Launch Your High-Tech Button Mushroom Farm
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Get certified F1 hybrid master spawn, Phase-II compost tunnel blueprints, Daikin climate machinery layouts, and 25%–35% NHB subsidy DPR support directly from Organic Mushrooms Farm.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold pt-1 text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>Lab-Certified F1 Button Spawn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>Phase-II Compost Tunnel Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>Daikin HVAC & AHU Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>Bankable DPR & Subsidy Assistance</span>
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
                        Our Senior Mushroom Agronomy Engineer will call you with spawn booking and climate room layout details.
                      </p>
                      <a
                        href="https://wa.me/919203544140?text=I%20just%20submitted%20Button%20Mushroom%20inquiry."
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
                        Request Button Spawn & Farm Setup
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
                          placeholder="e.g. Rajesh Mehra"
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
                            placeholder="e.g. Pune, MH"
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-amber-500 dark:text-white text-slate-900 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          Project Scale
                        </label>
                        <select
                          value={formData.scale}
                          onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-amber-500 dark:text-white text-slate-900 focus:outline-none"
                        >
                          <option value="Commercial 18x40 ft AC Grow Room (1,600 Bags)">Commercial 18x40 ft AC Grow Room (1,600 Bags)</option>
                          <option value="Industrial 4 Grow Rooms + Compost Complex (₹65L+)">Industrial 4 Grow Rooms + Compost Complex (₹65L+)</option>
                          <option value="Starter 18x20 ft Pilot Room (500 Bags)">Starter 18x20 ft Pilot Room (500 Bags)</option>
                          <option value="Certified F1 Spawn Booking Only">Certified F1 Spawn Booking Only</option>
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
              Button Mushroom <span className="gradient-text font-black">FAQs</span>
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
              Ready to Establish a Commercial Button Mushroom Plant?
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              Partner with Organic Mushrooms Farm for certified F1 master spawn, Phase-II compost tunnel execution, Daikin climate HVAC setups, and practical farm training.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/training"
                className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black text-xs md:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <BookOpen size={16} /> Explore Commercial Masterclass
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

export const ButtonMushroomPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <ButtonMushroomInner />
    </ModalProvider>
  );
};
