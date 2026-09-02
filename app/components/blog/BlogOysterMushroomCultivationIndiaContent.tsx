'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Sprout,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  ArrowRight,
  ChevronDown,
  Layers,
  Thermometer,
  Droplets,
  DollarSign,
  ShieldCheck,
  Award,
  Store,
  Sparkles,
  Zap,
  Boxes,
  HelpCircle,
  MessageCircle,
  Calculator,
  Download,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const BlogOysterMushroomCultivationIndiaInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal, openQuickOrderModal, openQuoteCalculatorModal } = useAppModals();

  // Interactive Quick Estimator
  const [bagCount, setBagCount] = useState<number>(200);
  const [avgSellingPrice, setAvgSellingPrice] = useState<number>(180); // ₹/kg

  // Calculations:
  // 1 bag (dry straw 1.2kg) yields ~1.8 to 2.2kg over 3 flushes
  const estYieldKg = Math.round(bagCount * 2.0);
  const estSubstrateAndSpawnCost = Math.round(bagCount * 38); // ~₹38 per bag
  const estGrossRevenue = Math.round(estYieldKg * avgSellingPrice);
  const estNetProfit = estGrossRevenue - estSubstrateAndSpawnCost - Math.round(bagCount * 12); // labor/electricity

  const varieties = [
    {
      name: 'White Oyster (Florida)',
      latin: 'Pleurotus ostreatus / florida',
      temp: '20°C – 28°C',
      humidity: '80% – 88%',
      harvest: '20 – 25 Days',
      color: 'Pure Pearl White',
      desc: 'Most widely cultivated commercial strain in India. High biological efficiency (85–110%), broad cap morphology, and fast colonization.',
    },
    {
      name: 'Grey Oyster (Sajor-Caju)',
      latin: 'Pleurotus sajor-caju',
      temp: '22°C – 30°C',
      humidity: '80% – 90%',
      harvest: '22 – 28 Days',
      color: 'Ash Grey to Tan',
      desc: 'Remarkably hardy variety that tolerates higher ambient temperatures. Thick, fleshy stems with high protein and excellent dehydration stability.',
    },
    {
      name: 'Pink Oyster (Flamingo)',
      latin: 'Pleurotus djamor',
      temp: '24°C – 32°C',
      humidity: '85% – 95%',
      harvest: '16 – 20 Days',
      color: 'Vibrant Salmon Pink',
      desc: 'Super-fast vegetative growth and pinning. High culinary aesthetic for gourmet restaurants, salad bars, and luxury hotel catering.',
    },
    {
      name: 'Yellow Oyster (Golden)',
      latin: 'Pleurotus citrinopileatus',
      temp: '22°C – 29°C',
      humidity: '85% – 90%',
      harvest: '20 – 24 Days',
      color: 'Bright Golden Yellow',
      desc: 'Delicate nutty aroma with cascading cluster growth. Premium retail pricing in boutique organic supermarkets and health wellness outlets.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Substrate Sourcing & Chopping',
      desc: 'Select clean, golden agricultural waste such as wheat straw (gehu ka bhusa), paddy straw, or sugarcane bagasse. Chop the straw into uniform 2–3 inch segments to facilitate compact packing and optimal mycelium colonization.',
    },
    {
      step: '02',
      title: 'Sterilization / Pasteurization',
      desc: 'Choose between Hot Water Pasteurization (submerging straw at 75°C–80°C for 60–90 mins) or Chemical Cold Soaking (2% agricultural lime + bleaching solution for 12–16 hrs). Drain until moisture reaches 65% (no dripping when squeezed).',
    },
    {
      step: '03',
      title: 'Spawning (Inoculation)',
      desc: 'Mix high-purity, lab-tested F1 grain spawn at 2.5%–3.0% of wet substrate weight in clean PP bags (12x18 inch, 100 gauge). Layer spawn uniformly and punch 12–16 aeration pinholes covered with micropore tape.',
    },
    {
      step: '04',
      title: 'Spawn Run (Dark Incubation)',
      desc: 'Place inoculated bags in a clean, dark room at 24°C–28°C and 70%–80% RH. Within 15–20 days, the vigorous white mycelium fully covers and solidifies the substrate into a dense white brick.',
    },
    {
      step: '05',
      title: 'Pinhead Initiation & Cropping',
      desc: 'Shift colonized bags to the well-ventilated fruiting room. Introduce indirect natural light, fresh air circulation (CO2 < 1000 ppm), and 85%–90% RH via fine foggers. Pinheads emerge within 3–5 days.',
    },
    {
      step: '06',
      title: 'Harvesting & Multi-Flush Management',
      desc: 'Harvest mature clusters by gently twisting at the base when cap edges are still slightly curled downward. Re-hydrate bags for 2nd and 3rd flush harvests spaced 7–10 days apart.',
    },
  ];

  const economicsTable = [
    { scale: 'Home Pilot (50 Bags)', investment: '₹3,500 – ₹5,000', yield: '90 – 110 kg', monthlyProfit: '₹8,000 – ₹12,000' },
    { scale: 'Semi-Commercial (200 Bags)', investment: '₹12,000 – ₹18,000', yield: '360 – 440 kg', monthlyProfit: '₹28,000 – ₹42,000' },
    { scale: 'Commercial Unit (1,000 Bags)', investment: '₹55,000 – ₹85,000', yield: '1,800 – 2,200 kg', monthlyProfit: '₹1,20,000 – ₹1,75,000' },
    { scale: 'Industrial Farm (5,000+ Bags)', investment: '₹3,00,000 – ₹5,50,000', yield: '9,000 – 11,000 kg', monthlyProfit: '₹5,50,000 – ₹8,50,000+' },
  ];

  const faqs = [
    {
      q: 'Why is Oyster Mushroom (Dhingri) the easiest variety for beginners in India?',
      a: 'Unlike White Button mushrooms that mandate strict air conditioning (14°C–18°C) and multi-phase pasteurized compost, Oyster mushrooms thrive in natural ambient temperatures (20°C–30°C) on simple crop waste like wheat and paddy straw. Their lightning-fast 25-day turnaround minimizes risk and yields immediate cash flow.',
    },
    {
      q: 'How much space do I need to start commercial Oyster mushroom farming?',
      a: 'You can begin in a compact 10x10 ft or 15x20 ft room, garage, basement, or shaded thatched shed. By using vertical 4 to 5-tier bamboo or GI pipe racks or hanging nylon rope systems, a 200 sq ft room easily accommodates 250–350 bags producing over 450–600 kg of fresh crop per cycle.',
    },
    {
      q: 'What is the best method to pasteurize straw substrate without expensive boilers?',
      a: 'For small to medium farms, the hot water drum method (soaking straw in a metal drum heated to 75°C–80°C for 60–90 minutes) is highly effective, chemical-free, and virtually cost-free. For larger scale setups, steam chambers or low-dose chemical cold soaking (using Carbendazim and Formalin, or organic hydrated lime solutions) are widely adopted.',
    },
    {
      q: 'How do I prevent green mold (Trichoderma) contamination in my mushroom bags?',
      a: 'Contamination occurs due to inadequate substrate pasteurization, excessive moisture in straw (>70%), unhygienic spawning rooms, or poor-quality contaminated spawn. Maintain strict sterilization protocols, always use 100% pure lab-tested F1 grain spawn, wear sanitized gloves, and ensure good air exchange.',
    },
    {
      q: 'Can I sell dried Oyster mushrooms if fresh market prices drop?',
      a: 'Yes! Oyster mushrooms have a dehydration ratio of 10:1 (10 kg fresh = 1 kg dry). Sun-dried or solar-dehydrated oyster mushrooms have a shelf life of 12+ months and sell for ₹600–₹1,200/kg to Ayurvedic medicine makers, mushroom powder manufacturers, culinary soup mix brands, and export aggregators.',
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
              Blog & Agri-Insights
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Oyster Mushroom Cultivation India
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-10">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider">
                <TrendingUp size={13} /> Commercial Agri-Business Guide
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Sprout size={13} /> Low-Cost High-Margin Crop
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              The Rise of Oyster Mushroom Cultivation in India:{' '}
              <span className="gradient-text font-black">A High-Profit, Low-Cost Agri-Business</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-4xl mb-6">
              Discover why commercial Oyster mushroom farming (Dhingri ki Kheti) is empowering thousands of rural farmers, urban entrepreneurs, and youth across India with 100%+ profit margins, minimal startup investment, and a lightning-fast 25-day crop cycle.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-emerald-500" />
                  <span className="font-semibold dark:text-slate-200 text-slate-800">Organic Mushrooms Farm Technical Team</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>Updated for 2026 Commercial Season</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>8 Min Comprehensive Read</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20read%20your%20Oyster%20Mushroom%20Cultivation%20Guide%20and%20want%20to%20start%20commercial%20farming."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-transform hover:scale-105"
                >
                  <MessageCircle size={13} /> WhatsApp Advisor
                </a>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Quick Highlights Metrics Strip */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 block mb-0.5">
                ₹3,500
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Min Startup Cost</span>
              <span className="text-[10px] text-slate-400">Can start in a 10x10 ft room</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 block mb-0.5">
                20–25 Days
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">First Harvest Speed</span>
              <span className="text-[10px] text-slate-400">Rapid monthly cashflow turnaround</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 block mb-0.5">
                85%–110%
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Biological Efficiency</span>
              <span className="text-[10px] text-slate-400">Yield per kg dry substrate</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 block mb-0.5">
                ₹160–₹240
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Average Retail Rate</span>
              <span className="text-[10px] text-slate-400">Fresh market price per kg</span>
            </div>
          </div>
        </section>

        {/* Main Article Body */}
        <article className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto space-y-12">
          {/* Executive Overview */}
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-5">
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                Traditional farming across India often demands vast agricultural acreage, heavy capital investment in tractors and borewells, and an exhausting vulnerability to unpredictable monsoon cycles. But what if you could launch a highly profitable, climate-resilient agricultural enterprise inside a small 10x10 foot room—generating continuous recurring income all 365 days a year?
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Welcome to the booming sector of <strong className="dark:text-white text-slate-900">Oyster Mushroom Cultivation (Dhingri Mushroom ki Kheti)</strong>. From the agro-hubs of Madhya Pradesh, Uttar Pradesh, and Bihar to Karnataka, Maharashtra, and Tamil Nadu, thousands of educated youth, progressive farmers, and women self-help groups are building scalable micro-agri businesses with Oyster mushrooms.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-1">
                  <Award size={16} /> Key Takeaway for Agri-Entrepreneurs
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed m-0">
                  Oyster mushrooms require no expensive AC cooling infrastructure (unlike Button mushrooms), utilize cheap agricultural residues (wheat/paddy straw), and provide first harvest cashflow in just 25 days with over 55%–65% net operational profit margins.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Success */}
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                4 Reasons Why Oyster Mushroom is India&apos;s Smartest Agribusiness
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                The strategic, biological, and economic drivers making Dhingri cultivation unstoppable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Layers size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                  1. Zero Requirement for Arable Land
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cultivation takes place 100% indoors on vertical multi-tier shelving or vertical hanging ropes. A single 500 sq. ft. room accommodates up to 800–1,000 bags, yielding over 1,500 to 2,000 kg of fresh crop per cycle.
                </p>
              </div>

              <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Sprout size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                  2. Transforms Crop Residue into Wealth
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instead of burning wheat and paddy straw (causing dangerous environmental smog), mushroom growers turn this cheap agricultural residue into high-value organic protein at just ₹30–₹40 raw cost per bag.
                </p>
              </div>

              <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                  <Zap size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                  3. Rapid 25–30 Day Cashflow Turnaround
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  While fruit orchards and cereals require months or years, Oyster mycelium colonizes in 15–18 days, with vigorous pinheading and harvesting completing in 25–30 days, providing non-stop revolving capital.
                </p>
              </div>

              <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <Store size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                  4. Skyrocketing Demand in Vegan & Health Foods
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Oyster mushrooms contain 25%–30% crude protein, zero cholesterol, essential amino acids, and Lovastatin (natural heart protector). High demand from local mandis, cloud kitchens, and gourmet restaurants.
                </p>
              </div>
            </div>
          </section>

          {/* Popular Cultivation Varieties */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Top Oyster Mushroom Strains Grown in India
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Choose the best strain based on your local state temperature and seasonal harvest window.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {varieties.map((v, i) => (
                <div
                  key={i}
                  className="p-6 md:p-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-slate-900/70 backdrop-blur-md shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {v.color}
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{v.harvest}</span>
                    </div>

                    <h3 className="text-lg font-black dark:text-white text-slate-900 mb-0.5">{v.name}</h3>
                    <span className="text-xs italic text-slate-400 block mb-3">{v.latin}</span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {v.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-200 dark:border-white/10 text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">Temperature</span>
                        <span className="font-semibold dark:text-white text-slate-900">{v.temp}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">Humidity</span>
                        <span className="font-semibold dark:text-white text-slate-900">{v.humidity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between">
                    <Link
                      href="/spawn-seeds"
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                    >
                      Buy Lab-Tested Spawn <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step-by-Step Practical Cultivation Process */}
          <section className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Step-by-Step Commercial Cultivation Guide
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Standard Operating Procedure (SOP) used by leading commercial mushroom farms across India.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md flex flex-col md:flex-row items-start md:items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Economics & ROI Estimator */}
          <section className="p-6 md:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-slate-900/5 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Calculator size={13} /> Live Profit Modeler
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Oyster Farm Profit & <span className="gradient-text font-black">ROI Calculator</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Estimate your monthly harvest yield, gross revenue, and net profit based on bag capacity and selling price.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Sliders */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    <span>Active Bag Count (100–2,000 Bags):</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-black">
                      {bagCount} Bags
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={bagCount}
                    onChange={(e) => setBagCount(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>50 (Home Room)</span>
                    <span>500 (Commercial Shed)</span>
                    <span>2,000 (Industrial)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    <span>Selling Price per Kg (Fresh Retail/Wholesale):</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-black">
                      ₹{avgSellingPrice} / kg
                    </span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="280"
                    step="10"
                    value={avgSellingPrice}
                    onChange={(e) => setAvgSellingPrice(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹120 (Wholesale Mandi)</span>
                    <span>₹180 (Supermarkets)</span>
                    <span>₹280 (Organic Retail)</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                  <div className="flex justify-between">
                    <span>Biological Yield (~2.0 kg / bag):</span>
                    <strong className="dark:text-white text-slate-900">{estYieldKg.toLocaleString()} kg total</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Substrate & Spawn Cost (~₹38/bag):</span>
                    <strong className="text-red-500 dark:text-red-400">₹{estSubstrateAndSpawnCost.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Crop Cycle Duration:</span>
                    <strong className="dark:text-white text-slate-900">30 – 35 Days</strong>
                  </div>
                </div>
              </div>

              {/* Outputs */}
              <div className="lg:col-span-6 bg-white dark:bg-slate-850 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                  Projected Financial Summary
                </span>
                <h3 className="text-xl font-black dark:text-white text-slate-900 mb-6">
                  {bagCount} Bags Oyster Cultivation Profit
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/5">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Total Harvested Crop</span>
                    <span className="text-base font-black text-emerald-600 dark:text-emerald-400">
                      {estYieldKg.toLocaleString()} kg
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/5">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Estimated Gross Revenue</span>
                    <span className="text-base font-black dark:text-white text-slate-900">
                      ₹{estGrossRevenue.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      Estimated Net Profit per Cycle
                    </span>
                    <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                      ₹{estNetProfit.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20calculated%20a%20${bagCount}%20bags%20Oyster%20Mushroom%20farm%20with%20net%20profit%20of%20₹${estNetProfit}.%20Please%20guide%20me%20on%20spawn%20and%20setup.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle size={16} /> Get Blueprint on WhatsApp
                  </a>
                  <button
                    onClick={() => openConsultationModal()}
                    className="w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs inline-flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                  >
                    Book Farm Site Consultation
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Investment vs Return Scale Table */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Oyster Mushroom Farm Scaling & Profit Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Realistic financial benchmark across different production tiers in India.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-4 px-5">Production Scale</th>
                    <th className="py-4 px-5">Initial Working Capital</th>
                    <th className="py-4 px-5">Estimated Fresh Yield</th>
                    <th className="py-4 px-5 text-emerald-600 dark:text-emerald-400">Monthly Net Profit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                  {economicsTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <td className="py-4 px-5 font-bold dark:text-white text-slate-900">{row.scale}</td>
                      <td className="py-4 px-5 text-slate-600 dark:text-slate-400">{row.investment}</td>
                      <td className="py-4 px-5 text-slate-600 dark:text-slate-400">{row.yield}</td>
                      <td className="py-4 px-5 font-black text-emerald-600 dark:text-emerald-400">
                        {row.monthlyProfit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* F1 Pure Spawn Supply Section */}
          <section className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900/5 to-teal-500/10 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                  Pan-India Express Delivery
                </span>
                <h3 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900">
                  Looking for High-Yield F1 Oyster Mushroom Spawn?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We supply 100% lab-tested, high-vigor grain spawn (wheat / sorghum base) with zero contamination risk. Direct courier dispatch to all states and pin-codes across India with fresh batch guarantees.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/spawn-seeds"
                  className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Sprout size={16} /> Order Spawn Online
                </Link>
                <a
                  href="tel:9203544140"
                  className="px-6 py-3.5 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-900 dark:text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all"
                >
                  <Phone size={16} /> Call +91 9203544140
                </a>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Frequently Asked Questions (FAQs)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Clear answers to the most critical technical and commercial questions.
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

          {/* Conversion CTA Card */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Ready to Launch Your High-Profit Oyster Mushroom Farm?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t leave your agricultural startup to trial and error. Get hands-on practical training, verified lab-tested F1 grain spawn, and turnkey shed blueprints from <strong>Organic Mushrooms Farm</strong>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20am%20ready%20to%20start%20Oyster%20Mushroom%20cultivation%20and%20need%20training%20and%20spawn."
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

export const BlogOysterMushroomCultivationIndiaContent: React.FC = () => {
  return (
    <ModalProvider>
      <BlogOysterMushroomCultivationIndiaInner />
    </ModalProvider>
  );
};
