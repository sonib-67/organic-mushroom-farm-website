'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Sprout,
  CheckCircle2,
  Phone,
  Calendar,
  Clock,
  User,
  ArrowRight,
  ChevronDown,
  Layers,
  Thermometer,
  Droplets,
  DollarSign,
  ShieldCheck,
  Award,
  Store,
  Zap,
  HelpCircle,
  MessageCircle,
  Calculator,
  Scale,
  Sparkles,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const BlogButtonVsOysterMushroomInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal, openQuickOrderModal, openQuoteCalculatorModal } = useAppModals();

  // Interactive Variety Decision Wizard
  const [budgetTier, setBudgetTier] = useState<'low' | 'medium' | 'high'>('low');
  const [hasACRoom, setHasACRoom] = useState<boolean>(false);
  const [spaceSqFt, setSpaceSqFt] = useState<number>(200);

  const getRecommendedVariety = () => {
    if (budgetTier === 'high' && hasACRoom) {
      return {
        name: 'White Button Mushroom (Agaricus bisporus)',
        verdict: 'Ideal for Commercial High-Volume B2B Supply',
        badge: 'Mass Market Champion',
        reasons: [
          'High capital allows setting up PUF insulated climate-controlled AC sheds (14°C–18°C).',
          'Established bulk mandi & supermarket demand with massive daily turnover.',
          'Predictable multi-ton recurring supply contracts with hotels and aggregators.',
        ],
        link: '/services/button-mushroom',
      };
    }
    if (budgetTier === 'low' || !hasACRoom) {
      return {
        name: 'Oyster Mushroom (Pleurotus spp. / Dhingri)',
        verdict: 'Best Choice for Low-Cost Startup & Quick Profit',
        badge: 'Fastest Cashflow Crop',
        reasons: [
          'Zero expensive air-conditioning required (grows naturally at 20°C–30°C).',
          'Simple pasteurized wheat or paddy straw substrate (no complex composting phase).',
          'Rapid 25-day harvest cycle ensures immediate reinvestment and monthly returns.',
        ],
        link: '/blog/oyster-mushroom-cultivation-india',
      };
    }
    return {
      name: 'Oyster + Seasonal Milky Mushroom Combo',
      verdict: 'Best 365-Day Rotation with Zero Cooling Costs',
      badge: 'All-Season Dual Model',
      reasons: [
        'Grow Oyster mushrooms in monsoon & winter (20°C–28°C).',
        'Rotate to Milky mushroom in peak summer (30°C–38°C) in the same shed.',
        'Zero idle infrastructure and 100% year-round farm profitability.',
      ],
      link: '/services/milky-mushroom',
    };
  };

  const recommendation = getRecommendedVariety();

  const comparisonRows = [
    {
      feature: 'Ideal Growing Temperature',
      button: '14°C – 18°C (Strict AC cooling required)',
      oyster: '20°C – 30°C (Grows in natural ambient climate)',
      impact: 'Oyster saves huge electricity and HVAC equipment costs.',
    },
    {
      feature: 'Relative Humidity (RH)',
      button: '85% – 90% (Strict fogging)',
      oyster: '80% – 85% (Simple floor watering / misting)',
      impact: 'Oyster is highly resilient to temporary humidity swings.',
    },
    {
      feature: 'Substrate & Raw Material',
      button: 'Complex 28-day fermented pasteurized compost (Straw, manure, gypsum, urea)',
      oyster: 'Simple wheat straw / paddy straw (boiled or chemical cold-soaked)',
      impact: 'Oyster substrate is prepared in 24 hours vs 28 days for Button.',
    },
    {
      feature: 'Cropping / Harvest Cycle',
      button: '55 – 70 Days per cycle',
      oyster: '20 – 25 Days to first harvest',
      impact: 'Oyster generates cash flow 2.5x faster than Button.',
    },
    {
      feature: 'Initial Minimum Investment',
      button: '₹5 Lakh – ₹25+ Lakh (Commercial AC shed & compost yard)',
      oyster: '₹5,000 – ₹25,000 (Can start in a spare 10x10 room)',
      impact: 'Oyster has virtually zero financial entry barrier for beginners.',
    },
    {
      feature: 'Biological Efficiency (BE)',
      button: '18% – 25% (on wet compost)',
      oyster: '85% – 110% (on dry straw substrate)',
      impact: 'Oyster produces significantly more mushroom weight per kg of straw.',
    },
    {
      feature: 'Market Demand & Sales',
      button: 'Everyday mass market (Sabzi mandis, supermarkets, fast food)',
      oyster: 'Gourmet dining, health food stores, vegan diets & dry powder export',
      impact: 'Button sells in heavy volume; Oyster commands premium retail margin.',
    },
    {
      feature: 'Fresh vs Dried Storage',
      button: 'Fresh cold chain mandatory (3–5 days shelf life)',
      oyster: 'Can be sun-dried (10:1 ratio) with 12+ months shelf life',
      impact: 'Oyster has zero post-harvest distress selling risk.',
    },
  ];

  const faqs = [
    {
      q: 'Which mushroom is more profitable: Button or Oyster?',
      a: 'For small to medium growers, Oyster mushroom yields higher profit margins (55%–65%) because operational overheads (no AC power bills) and raw material costs are extremely low. For industrial entrepreneurs with ₹10–25+ Lakhs capital, Button mushroom delivers higher absolute revenue due to massive multi-ton daily demand in wholesale mandis.',
    },
    {
      q: 'Can I grow Button mushrooms without air-conditioning in India?',
      a: 'Yes, but ONLY seasonally during the peak winter months (November to February) in North & Central India when ambient temperatures stay naturally below 18°C. For year-round 365-day cultivation, a PUF-insulated room with chiller/AC cooling is mandatory.',
    },
    {
      q: 'Why do most beginners fail in Button mushroom farming?',
      a: 'Beginners often struggle with Button mushrooms due to poorly pasteurized compost, failure to maintain tight temperature bands during casing (14°C–18°C), and high electricity costs from undersized cooling systems. Starting with Oyster or Milky mushrooms builds practical farm management experience with minimal risk.',
    },
    {
      q: 'What should I do if fresh Oyster mushrooms don’t sell immediately?',
      a: 'Unlike Button mushrooms which turn brown and spoil quickly without refrigeration, Oyster mushrooms can be easily sun-dried or solar-dehydrated. 10 kg of fresh Oyster dries into 1 kg of dry mushroom, which sells at ₹600–₹1,200/kg for soup mixes, health supplements, and bakery powder.',
    },
    {
      q: 'What kind of spawn (seed) is best for Button vs Oyster?',
      a: 'Both require 100% pure F1 lab-tested master grain spawn (wheat or sorghum base). Organic Mushrooms Farm supplies tested F1 spawn with fast mycelial vigor and zero contamination pan-India via express courier.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <div className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-emerald-500 transition-colors">
              Blog & Agri-Guides
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Button vs Oyster Mushroom Comparison
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-10">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Scale size={13} /> Complete Head-to-Head Comparison
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider">
                <TrendingUp size={13} /> Commercial Agri-Decision Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Button Mushroom vs Oyster Mushroom:{' '}
              <span className="gradient-text font-black">Which is Better for You?</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-4xl mb-6">
              A comprehensive technical and commercial breakdown of Button Mushroom (*Agaricus bisporus*) vs Oyster Mushroom (*Pleurotus*). Compare startup investment, temperature requirements, substrate preparation, market demand, and ROI.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-emerald-500" />
                  <span className="font-semibold dark:text-slate-200 text-slate-800">
                    Organic Mushrooms Farm Technical Team
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>Updated for 2026 Commercial Farming</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>7 Min Analytical Read</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20confused%20between%20Button%20and%20Oyster%20mushroom%20farming.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-transform hover:scale-105"
                >
                  <MessageCircle size={13} /> WhatsApp Expert Advisor
                </a>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Featured Image / Visual Comparison Banner */}
        <div className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-12">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-900">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
              {/* Button Side */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950/40 text-white space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-black uppercase tracking-wider">
                    High Volume • Mass Market
                  </span>
                  <span className="text-xs text-blue-200 font-bold">14°C – 18°C AC Room</span>
                </div>
                <h3 className="text-2xl font-black">White Button Mushroom</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The king of supermarket shelves, pizza toppings, and culinary restaurants. Requires 28-day fermented compost, casing soil layer, and strict chilling.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 text-[10px] block">Startup Budget</span>
                    <strong className="text-blue-300">₹5 Lakh – ₹25+ Lakh</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 text-[10px] block">Cycle Duration</span>
                    <strong className="text-blue-300">55 – 70 Days</strong>
                  </div>
                </div>
              </div>

              {/* Oyster Side */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider">
                    Low Cost • Rapid Cashflow
                  </span>
                  <span className="text-xs text-emerald-200 font-bold">20°C – 30°C Natural Room</span>
                </div>
                <h3 className="text-2xl font-black">Oyster (Dhingri) Mushroom</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Fastest growing edible mushroom. Thrives on simple boiled wheat or paddy straw with zero air conditioning and exceptional sun-drying stability.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 text-[10px] block">Startup Budget</span>
                    <strong className="text-emerald-300">₹5,000 – ₹25,000</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 text-[10px] block">Cycle Duration</span>
                    <strong className="text-emerald-300">20 – 25 Days</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Comparison Body */}
        <article className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto space-y-12">
          {/* Executive Introduction */}
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-5">
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                Agar aap superfoods aur organic farming mein kadam rakhne ki soch rahe hain, toh aapke dimaag mein sabse pehla sawal yahi aata hai: <strong className="dark:text-white text-slate-900">Button Mushroom vs Oyster Mushroom — in dono mein se sabse behtar aur profitable kaun sa hai?</strong>
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Dono mushrooms ki apni alag biological requirements, market demand, aur capital investment hoti hai. Ek taraf jahan <strong>White Button Mushroom</strong> pure India ke sabji mandiyon aur supermarkets ka 80%+ volume capture karta hai, wahi doosri taraf <strong>Oyster Mushroom (Dhingri)</strong> low startup cost, fast harvest cycle, aur natural climate adaptability ke karan beginners aur micro-entrepreneurs ka sabse favourite crop ban chuka hai.
              </p>
            </div>
          </div>

          {/* Interactive Variety Recommendation Tool */}
          <section className="p-6 md:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-slate-900/5 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Calculator size={13} /> Interactive Advisor
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Which Mushroom Should <span className="gradient-text font-black">You Grow?</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Select your investment budget and facility capability to get an instant tailored recommendation.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Selectors */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    1. Your Initial Investment Budget:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'low', label: 'Under ₹50,000', desc: 'Spare Room' },
                      { id: 'medium', label: '₹1L – ₹5 Lakh', desc: 'Commercial Shed' },
                      { id: 'high', label: '₹5L – ₹25L+', desc: 'Insulated AC Unit' },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setBudgetTier(tier.id as any)}
                        className={`p-3 rounded-xl text-left transition-all border ${
                          budgetTier === tier.id
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100'
                        }`}
                      >
                        <span className="text-xs font-bold block">{tier.label}</span>
                        <span className={`text-[10px] block ${budgetTier === tier.id ? 'text-emerald-100' : 'text-slate-400'}`}>
                          {tier.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    2. Air-Conditioning (Chilling / HVAC) Availability:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setHasACRoom(false)}
                      className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                        !hasACRoom
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100'
                      }`}
                    >
                      No AC (Ambient Room / Shed)
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasACRoom(true)}
                      className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                        hasACRoom
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100'
                      }`}
                    >
                      Yes, Have Insulated AC Unit
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    <span>Available Floor Space:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-black">
                      {spaceSqFt} Sq. Ft.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="3000"
                    step="50"
                    value={spaceSqFt}
                    onChange={(e) => setSpaceSqFt(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>100 Sq. Ft.</span>
                    <span>1,000 Sq. Ft.</span>
                    <span>3,000+ Sq. Ft.</span>
                  </div>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className="lg:col-span-6 bg-white dark:bg-slate-850 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                  Optimal Match for Your Facility
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider inline-block mb-3">
                  {recommendation.badge}
                </span>

                <h3 className="text-xl font-black dark:text-white text-slate-900 mb-1">
                  {recommendation.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                  {recommendation.verdict}
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-600 dark:text-slate-300">
                  {recommendation.reasons.map((r, ri) => (
                    <div key={ri} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href={recommendation.link}
                    className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 shadow-md"
                  >
                    View Setup Blueprint <ArrowRight size={14} />
                  </Link>
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20based%20on%20my%20${spaceSqFt}%20sqft%20space%20and%20budget,%20I%20want%20to%20consult%20about%20${encodeURIComponent(
                      recommendation.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs inline-flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={14} /> WhatsApp Expert
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Master Comparison Matrix Table */}
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Master Technical & Commercial Comparison Table
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Side-by-side breakdown across all parameters for prospective growers in India.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-4 px-5">Cultivation Parameter</th>
                    <th className="py-4 px-5 text-blue-600 dark:text-blue-400">White Button Mushroom</th>
                    <th className="py-4 px-5 text-emerald-600 dark:text-emerald-400">Oyster (Dhingri) Mushroom</th>
                    <th className="py-4 px-5 text-slate-500">Commercial Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <td className="py-4 px-5 font-bold dark:text-white text-slate-900">{row.feature}</td>
                      <td className="py-4 px-5 text-slate-700 dark:text-slate-300">{row.button}</td>
                      <td className="py-4 px-5 font-medium text-emerald-700 dark:text-emerald-300">{row.oyster}</td>
                      <td className="py-4 px-5 text-xs text-slate-500 dark:text-slate-400 italic">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep Dive: Taste & Culinary Profile */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                1. Taste, Culinary Appeal & Shelf-Life
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                How consumers, chefs, and food processing industries utilize both varieties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full bg-blue-500/10">
                  Button Mushroom Culinary
                </span>
                <h3 className="text-xl font-black dark:text-white text-slate-900">Mild, Earthy & Firm Texture</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  White Button mushrooms have an universally accepted mild earthy flavor with a firm, bouncy bite. They absorb gravy and spices exceptionally well in curries, stir-fries, pizza, and canned food packaging.
                </p>
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <strong>Shelf Life:</strong> 3–5 days under refrigeration (4°C–7°C). Spoilage leads to cap browning and moisture leakage.
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10">
                  Oyster Mushroom Culinary
                </span>
                <h3 className="text-xl font-black dark:text-white text-slate-900">Velvety, Nutty & Seafood-Like</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Oyster mushrooms boast a delicate, velvety texture with a rich umami flavor reminiscent of gourmet seafood. Widely popular in Asian stir-fries, vegan pulled-mushroom BBQ, soups, and nutritious superfood powders.
                </p>
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-700 dark:text-slate-300">
                  <strong>Shelf Life:</strong> 2–3 days fresh, but can be 100% preserved for 12+ months through cost-free sun drying or solar dehydration.
                </div>
              </div>
            </div>
          </section>

          {/* Deep Dive: Cultivation Infrastructure */}
          <section className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                2. Substrate & Infrastructure Complexity
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Comparing the technical difficulty and daily labor requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg space-y-4">
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">Button Mushroom Infrastructure:</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Composting Unit:</strong> Concrete yard for 28-day outdoor turning or automated Phase-1/Phase-2 pasteurization tunnels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Chilling Plant:</strong> Heavy duty compressor, AHU, and ducting to maintain 14°C–18°C round the clock.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Casing Soil:</strong> Treated peat moss or well-rotted coir pith required over colonized compost to trigger fruiting.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg space-y-4">
                <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">Oyster Mushroom Infrastructure:</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Zero Composting:</strong> Simply pasteurize dry straw in boiling water (75°C–80°C) for 1 hour or use cold soak.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>No AC Required:</strong> Easily grown in simple brick rooms, thatched sheds, or basements with cross-ventilation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>No Casing Layer:</strong> Pinheads emerge directly from perforated PP bag sides without any soil casing step.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final Verdict Summary */}
          <section className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900/5 to-teal-500/10 dark:bg-slate-900/70 backdrop-blur-md shadow-xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              The Final Verdict: Which One Should You Choose?
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>Choose White Button Mushroom if:</strong> You have high capital (₹10L+), wish to build an industrial-scale automated facility, can handle strict cooling HVAC maintenance, and want to capture high-volume daily wholesale mandi supply contracts.
              </p>
              <p>
                <strong>Choose Oyster Mushroom if:</strong> You are a first-time grower, want to start with a minimal risk budget (under ₹50,000), lack expensive cooling infrastructure, want first cash flow within 25 days, and want zero post-harvest loss through sun-drying.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/services/button-mushroom"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-2 shadow-md transition-all"
              >
                Button Mushroom Setup Guide <ArrowRight size={14} />
              </Link>
              <Link
                href="/blog/oyster-mushroom-cultivation-india"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-2 shadow-md transition-all"
              >
                Oyster Mushroom Cultivation Guide <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Frequently Asked Questions (FAQs)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Clear answers regarding Button vs Oyster mushroom farming economics in India.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm dark:text-white text-slate-900 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle size={16} className="text-emerald-500 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Banner */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Start Your Mushroom Farming Journey with Expert Guidance
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Whether you choose commercial Button or low-cost Oyster mushrooms, our experienced agricultural consultants provide turnkey shed design, high-vigor F1 spawn supply, and hands-on training.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20between%20Button%20and%20Oyster%20mushroom%20farm%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> Chat on WhatsApp (9203544140)
              </a>
              <Link
                href="/training/online"
                className="px-8 py-3.5 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all border border-white/20"
              >
                <BookOpen size={16} /> Enroll in Training Course
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Floating & Sticky CTAs */}
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <AIChatWidget />
      <HomeModals />
      <Footer />
    </div>
  );
};

export const BlogButtonVsOysterMushroomContent: React.FC = () => {
  return (
    <ModalProvider>
      <BlogButtonVsOysterMushroomInner />
    </ModalProvider>
  );
};
