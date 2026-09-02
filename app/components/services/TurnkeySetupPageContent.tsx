'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Factory,
  Cpu,
  Layers,
  Thermometer,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Phone,
  ArrowRight,
  BookOpen,
  Sparkles,
  ChevronDown,
  Clock,
  Flame,
  Award,
  Droplets,
  PackageCheck,
  MessageCircle,
  Calculator,
  AlertTriangle,
  HelpCircle,
  ShoppingBag,
  Send,
  Loader2,
  Check,
  FileSpreadsheet,
  FileText,
  DollarSign,
  Wrench,
  Boxes,
  Compass,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const TurnkeySetupInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal, openQuoteCalculatorModal, openQuickOrderModal } = useAppModals();

  // Lead capture state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    projectScale: 'Commercial 4 Grow Rooms + Compost Unit (₹65L - ₹1.1 Cr)',
    landAvailable: 'Yes, 5,000 to 15,000 sq ft',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormError('Please enter your name and contact phone number.');
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
          category: 'Turnkey Commercial Project Inquiry',
          message: `Turnkey Lead: Scale=${formData.projectScale}, Land=${formData.landAvailable}, Location=${formData.location}`,
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

  const diyProblems = [
    {
      title: 'Thermal Leaks & Skyrocketing Power Bills',
      desc: 'Local uncertified contractors use substandard PUF or poor insulation sealing. Result: AC compressors run 24/7 without tripping, multiplying power costs by 2.5x and killing profit margins.',
      icon: Flame,
    },
    {
      title: 'Airflow Bottlenecks & CO₂ Stagnation',
      desc: 'Mushroom pinning fails if CFM and CO₂ (>1,200 ppm) air turnover aren’t mathematically synchronized. Improper ducting produces long, skinny stems, small caps, and total pinhead abortion.',
      icon: AlertTriangle,
    },
    {
      title: 'Microbial Contamination Hotspots',
      desc: 'Unsealed joints, non-hygienic concrete flooring, and absence of positive-pressure filtration breed Green Mold (Trichoderma) and bacterial blotch, ruining entire flushes within 48 hours.',
      icon: AlertTriangle,
    },
    {
      title: '8–12 Month Delay & Trial-and-Error Loss',
      desc: 'Managing 10+ disconnected vendors (civil, HVAC, panels, racks, blowers, electrical) causes coordination chaos, expensive rework, and delayed time-to-market.',
      icon: Clock,
    },
  ];

  const turnkeyPillars = [
    {
      title: 'End-to-End EPC Project Execution',
      desc: 'Single-source responsibility from architectural site layouts and 3D zoning to civil works coordination, machinery installation, and cold testing.',
      icon: Factory,
      badge: 'Single-Window EPC',
    },
    {
      title: 'Daikin-Engineered HVAC & Smart AHU',
      desc: 'Heavy-duty industrial Daikin refrigeration integrated with precision air handling units, fresh air dampers, and computerized RTD/NDIR CO₂ climate controllers.',
      icon: Cpu,
      badge: 'Precision Automation',
    },
    {
      title: 'Phase-II Pasteurization Compost Complex',
      desc: 'Custom-designed aerated outdoor composting bunkers (Phase-I) and sealed bulk pasteurization tunnels (Phase-II) yielding pathogen-free, high-nutrition substrate.',
      icon: Layers,
      badge: 'Phase-II Compost Tunnels',
    },
    {
      title: 'DPR, Bank Loans & NHB Subsidy Support',
      desc: 'Bankable Detailed Project Reports (DPR) with 5-year financial cash flow modeling, plus end-to-end guidance for 25%–35% National Horticulture Board (NHB/MIDH) capital subsidies.',
      icon: FileSpreadsheet,
      badge: '25% – 35% NHB Subsidy',
    },
  ];

  const growRoomModels = [
    {
      model: '18 × 30 ft Starter Model',
      capacity: '800 – 1,000 Bags',
      hvac: '5 TR Daikin AC Unit',
      priceMachinery: '₹1,95,583',
      puf60: '₹1,505 / m²',
      puf80: '₹1,735 / m²',
      roof: '₹1,855 / m²',
      yieldPerCycle: '~2,000 kg',
      dailyAvg: '~67 kg/day',
      ideal: 'Pilot setups & high-margin boutique growers',
    },
    {
      model: '18 × 40 ft Commercial Unit',
      capacity: '1,600+ Bags',
      hvac: '7 TR Daikin AC Unit',
      priceMachinery: '₹2,75,072',
      puf60: '₹1,505 / m²',
      puf80: '₹1,735 / m²',
      roof: '₹1,855 / m²',
      yieldPerCycle: '3,200 kg',
      dailyAvg: '106.7 kg/day',
      ideal: 'Most popular medium commercial unit',
    },
    {
      model: '18 × 60 ft Expanded Commercial',
      capacity: '2,400 – 2,500 Bags',
      hvac: '9 TR Daikin AC Unit',
      priceMachinery: '₹3,46,473',
      puf60: '₹1,505 / m²',
      puf80: '₹1,735 / m²',
      roof: '₹1,855 / m²',
      yieldPerCycle: '5,000 kg',
      dailyAvg: '166.7 kg/day',
      ideal: 'High-tonnage institutional suppliers',
    },
    {
      model: '18 × 70 ft Industrial Model',
      capacity: '2,800 – 3,000+ Bags',
      hvac: '12 TR Daikin AC Unit',
      priceMachinery: '₹3,92,549',
      puf60: '₹1,505 / m²',
      puf80: '₹1,735 / m²',
      roof: '₹1,855 / m²',
      yieldPerCycle: '6,000 kg',
      dailyAvg: '200 kg/day',
      ideal: 'Industrial export & large mandi hubs',
    },
  ];

  const compostUnits = [
    {
      capacity: '20 Ton Pasteurization Unit',
      equipmentCost: '₹6,46,000',
      bunkerBlower: '3.5 HP × 2 Nos.',
      tunnelBlower: '7.5 HP × 1 No.',
      processCycle: '15 Days Approx.',
      civilScope: '₹8 – 10 Lakhs',
      monthlyOutput: 'Supports 2 – 3 Grow Rooms',
    },
    {
      capacity: '30 Ton Pasteurization Unit',
      equipmentCost: '₹7,08,000',
      bunkerBlower: '5.0 HP × 2 Nos.',
      tunnelBlower: '10.0 HP × 1 No.',
      processCycle: '15 Days Approx.',
      civilScope: '₹12 – 14 Lakhs',
      monthlyOutput: 'Supports 4 – 6 Grow Rooms',
    },
  ];

  const sopSteps = [
    {
      step: '01',
      phase: 'Phase-I Aerated Composting',
      days: 'Days 1 – 10',
      desc: 'Wheat/Paddy straw is wetted and blended with poultry manure & gypsum in high-pressure aerated bunkers. Aerobic decomposition pushes core temperatures to 60°C–70°C.',
    },
    {
      step: '02',
      phase: 'Phase-II Tunnel Pasteurization',
      days: 'Days 11 – 16',
      desc: 'Bulk substrate is transferred to sealed insulated tunnels. Conditioning at 57°C–60°C eradicates pathogens, competitor molds, and reduces free ammonia to < 5 ppm.',
    },
    {
      step: '03',
      phase: 'Grain Spawning & Bag Packing',
      days: 'Days 17 – 18',
      desc: 'Cooled, sterile compost is inoculated with 0.5%–0.7% F1 hybrid grain spawn and packed into 10 kg high-gauge PP bags on sterile automated bagging conveyors.',
    },
    {
      step: '04',
      phase: 'Dark Room Spawn Run',
      days: 'Days 19 – 33 (14–16 Days)',
      desc: 'Grow room is kept at 24°C–26°C with 90% RH and zero light. Controlled CO₂ build-up (10,000–15,000 ppm) supercharges rapid mycelium colonization.',
    },
    {
      step: '05',
      phase: 'Pasteurized Casing Soil Layer',
      days: 'Days 34 – 35',
      desc: 'A 2.5–3 cm steam-pasteurized casing soil layer (pH 7.2–7.5) is applied over colonized bags to provide moisture reserves and stimulate primordia development.',
    },
    {
      step: '06',
      phase: 'Pinhead Cold Shock Induction',
      days: 'Days 36 – 44 (7–9 Days)',
      desc: 'Temperature is dropped to 16°C–18°C, and automated fresh air dampers flush CO₂ below 1,000 ppm. Uniform snowy pinheads emerge across the casing bed.',
    },
    {
      step: '07',
      phase: '3-Flush Cropping & Harvest',
      days: 'Days 45 – 60 (25–30 Days)',
      desc: 'Cropping held at 14°C–16°C with 85%–90% RH. Yields 3 heavy commercial flushes (~2 kg/bag) followed by immediate transfer to 2°C–4°C cold storage.',
    },
  ];

  const varieties = [
    {
      name: 'White Button Mushroom',
      scientific: 'Agaricus bisporus',
      hvac: 'Full HVAC Mandatory (14°C–18°C)',
      market: 'Hotels, Mandis, Pizza Chains, Processors',
      yield: '2.0 kg / 10kg Bag',
      investment: 'High Industrial Tier',
      highlight: 'Dominates 80%+ of India’s commercial trade',
    },
    {
      name: 'Oyster Mushroom',
      scientific: 'Pleurotus ostreatus / florida',
      hvac: 'Semi-Controlled (20°C–28°C)',
      market: 'Local Wholesale, Dry Powder, Nutraceuticals',
      yield: '80%–100% BE on Dry Straw',
      investment: 'Low to Medium Capex',
      highlight: 'Easiest crop turnaround & low electricity demand',
    },
    {
      name: 'Milky Mushroom',
      scientific: 'Calocybe indica',
      hvac: 'High Temperature Tolerant (30°C–35°C)',
      market: 'Regional Mandis, Direct Retail, Meat Substitute',
      yield: '80%–100% BE with Casing',
      investment: 'Medium Capex Band',
      highlight: 'Zero AC required during scorching Indian summers',
    },
    {
      name: 'Medicinal Shiitake & Lion’s Mane',
      scientific: 'Lentinula edodes / Hericium',
      hvac: 'Precision Microclimate (16°C–22°C)',
      market: 'Gourmet HORECA, Organic Retail, Exports',
      yield: 'High Value Realization (₹600–₹1,500/kg)',
      investment: 'Premium Microfarm Tier',
      highlight: 'Highest profit per cubic foot of grow space',
    },
  ];

  const faqs = [
    {
      q: 'What is the total estimated cost to set up a commercial button mushroom farm in India?',
      a: 'A standard viable commercial setup consisting of 4 climate-controlled grow rooms (18×40 ft or 18×60 ft) paired with an in-house Phase-II compost unit typically ranges between ₹65 Lakhs to ₹1.2 Crore. Starter 1-room or 2-room setups without in-house compost tunnels range from ₹18 Lakhs to ₹35 Lakhs depending on civil structures and refrigeration capacity.',
    },
    {
      q: 'What exactly is included under Organic Mushrooms Farm EPC Turnkey Contract?',
      a: 'Our turnkey EPC delivery is true plug-and-play. It includes architectural 3D zoning blueprints, structural civil coordination, PPGL PUF panel insulation (60mm/80mm), Daikin refrigeration and Air Handling Units (AHUs), multi-tiered MS angle rack systems, automated digital RTD/NDIR CO₂ climate controllers, compost bunker & tunnel blowers, on-site commissioning, and comprehensive on-farm operator technical training.',
    },
    {
      q: 'Can we get bank loans and government subsidies (NHB / MIDH) for this project?',
      a: 'Yes! Commercial mushroom farming infrastructure qualifies for up to 25% to 35% capital subsidy under the National Horticulture Board (NHB) and Mission for Integrated Development of Horticulture (MIDH). We provide bankable Detailed Project Reports (DPR) with complete 5-year cash flow projections and balance sheets designed specifically for fast bank appraisal.',
    },
    {
      q: 'What is the difference between in-house composting vs buying compost from outside?',
      a: 'In-house compost production costs approximately ₹32–₹36 per kg of fresh mushroom yield, whereas purchasing commercial compost from third parties costs ₹50–₹55 per kg of yield. For setups with 4+ grow rooms, setting up an in-house Phase-II pasteurization tunnel increases net operating margins by 30%–40% and ensures 100% pathogen-free quality control.',
    },
    {
      q: 'What is the timeline to build and commission a turnkey commercial mushroom plant?',
      a: 'A 2-room to 4-room turnkey commercial facility is fabricated, insulated, and commissioned within 45 to 75 working days from the completion of civil floor plinths. The first commercial harvest is plucked within 45 to 55 days after initial spawning.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-black uppercase tracking-widest mb-5">
              <Building2 size={15} /> Commercial EPC Mushroom Engineering
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 mb-5 tracking-tight uppercase max-w-5xl mx-auto leading-tight">
              Turnkey Commercial <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 bg-clip-text text-transparent font-black">Mushroom Farm Setup</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
              Complete EPC Project Consultancy, Climate-Controlled Insulated Grow Rooms, Phase-II Compost Pasteurization Tunnels, Daikin HVAC, and <strong>25%–35% NHB Government Subsidy Support</strong> across India.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-5xl mx-auto mb-10 text-center">
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Climate Automation
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  Daikin HVAC
                </div>
                <div className="text-[10px] text-slate-400">14°C – 18°C Stable</div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Govt. Capital Subsidy
                </div>
                <div className="text-xl sm:text-2xl font-black text-amber-500">
                  25% – 35%
                </div>
                <div className="text-[10px] text-slate-400">NHB / MIDH / NABARD</div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Biological Yield
                </div>
                <div className="text-xl sm:text-2xl font-black dark:text-white text-slate-900">
                  2.0 kg / Bag
                </div>
                <div className="text-[10px] text-slate-400">6–7 Rotations / Year</div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  In-House Factory
                </div>
                <div className="text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400">
                  Save 15%–25%
                </div>
                <div className="text-[10px] text-slate-400">Wholesale B2B Pricing</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openQuoteCalculatorModal()}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg cursor-pointer"
              >
                <Calculator size={16} /> Calculate Turnkey Project Cost <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <FileText size={16} /> Request DPR & Site Layout
              </button>
              <a
                href="https://wa.me/919203544140?text=Hello%20Organic%20Mushrooms%20Farm,%20I%20am%20interested%20in%20Turnkey%20Commercial%20Mushroom%20Farm%20Setup."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} /> WhatsApp: 9203544140
              </a>
            </div>
          </motion.div>
        </section>

        {/* Why Turnkey vs DIY Trap */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 sm:p-10 rounded-3xl border border-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-950/[0.1] shadow-lg mb-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <AlertTriangle size={12} /> The High Cost of Trial-and-Error
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Why 80% of Self-Built (DIY) Farms <span className="text-rose-600 dark:text-rose-400 font-black">Fail in Year 1</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
                Commercial mushroom farming is a precision bio-engineering game. Attempting to hire local non-specialist contractors creates fatal operational bottlenecks:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {diyProblems.map((prob, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-xs flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <prob.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-1">{prob.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Turnkey Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {turnkeyPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <p.icon size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                  <CheckCircle2 size={13} /> Guaranteed Benchmark
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Modular Grow Room Specifications & Pricing */}
        <section className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-14">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Thermometer size={12} /> Pre-Engineered Grow Rooms
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Standard Grow Room <span className="gradient-text font-black">Capacities & Machineries</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
                High-density PUF insulation panels in premium corrosion-resistant PPGL finishes paired with Daikin industrial refrigeration.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm min-w-[700px]">
                  <thead className="bg-black/5 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 uppercase text-[11px] font-bold tracking-wider">
                    <tr>
                      <th className="p-4">Model / Dimensions</th>
                      <th className="p-4">Bag Capacity</th>
                      <th className="p-4">Daikin AC Size</th>
                      <th className="p-4">Machine Price</th>
                      <th className="p-4">Cycle Yield</th>
                      <th className="p-4">Daily Potential</th>
                      <th className="p-4">Recommended For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {growRoomModels.map((row, i) => (
                      <tr key={i} className="hover:bg-emerald-500/[0.03] transition-colors">
                        <td className="p-4 font-bold dark:text-white text-slate-900">
                          {row.model}
                        </td>
                        <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">
                          {row.capacity}
                        </td>
                        <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">
                          {row.hvac}
                        </td>
                        <td className="p-4 font-black dark:text-white text-slate-900">
                          {row.priceMachinery}
                        </td>
                        <td className="p-4 font-medium text-slate-600 dark:text-slate-400">
                          {row.yieldPerCycle}
                        </td>
                        <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">
                          {row.dailyAvg}
                        </td>
                        <td className="p-4 text-xs text-slate-500">
                          {row.ideal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50/50 dark:bg-black/20 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
                <span>* PUF Panel Rates: 60mm Wall = ₹1,505/m² | 80mm Wall = ₹1,735/m² | Corrugated Roof Panel = ₹1,855/m²</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">Includes heavy-duty 7-tier MS angle grow racks</span>
              </div>
            </div>
          </div>
        </section>

        {/* Compost Unit & Pasteurization Tunnel Specs */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Boxes size={12} /> Substrate Manufacturing
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Phase-II Compost Pasteurization <span className="gradient-text font-black">Tunnel Complex</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              In-house substrate manufacturing drops your cost of production from ₹52/kg to ₹34/kg, ensuring total control over mushroom quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {compostUnits.map((cu, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {cu.capacity}
                    </span>
                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                      {cu.equipmentCost}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm my-4">
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-500">Phase-I Bunker Blower:</span>
                      <span className="font-bold dark:text-white text-slate-900">{cu.bunkerBlower}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-500">Phase-II Tunnel Blower:</span>
                      <span className="font-bold dark:text-white text-slate-900">{cu.tunnelBlower}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-500">Process Cycle Time:</span>
                      <span className="font-bold dark:text-white text-slate-900">{cu.processCycle}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-500">Client Civil Scope Estimate:</span>
                      <span className="font-bold text-amber-600 dark:text-amber-400">{cu.civilScope}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-500">Facility Scale Compatibility:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{cu.monthlyOutput}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openConsultationModal()}
                  className="w-full mt-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold text-center hover:opacity-90 transition-all cursor-pointer"
                >
                  Request Technical Compost Layout
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 60-Day Commercial Crop SOP */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Clock size={12} /> Standard Operating Procedures
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Commercial 60-Day <span className="gradient-text font-black">Cultivation SOP Timeline</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              A scientifically disciplined commercial crop cycle designed for 6 to 7 rotations every year.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sopSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">{s.step}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      {s.days}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-1.5">{s.phase}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Multi-Variety Matrix */}
        <section className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-14">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Compass size={12} /> Variety Specialization
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Multi-Variety Farm Setup <span className="gradient-text font-black">Matrix</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {varieties.map((v, i) => (
                <div
                  key={i}
                  className="p-5 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 mb-1">
                      {v.investment}
                    </div>
                    <h3 className="text-base font-black dark:text-white text-slate-900 mb-0.5">{v.name}</h3>
                    <div className="text-[11px] italic text-slate-400 mb-3">{v.scientific}</div>

                    <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 mb-4">
                      <div>
                        <strong className="dark:text-slate-200 text-slate-800 block">Climate System:</strong>
                        <span>{v.hvac}</span>
                      </div>
                      <div>
                        <strong className="dark:text-slate-200 text-slate-800 block">Target Market:</strong>
                        <span>{v.market}</span>
                      </div>
                      <div>
                        <strong className="dark:text-slate-200 text-slate-800 block">Yield Metric:</strong>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{v.yield}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-semibold text-slate-500">
                    💡 {v.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture & DPR Advisory Form */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 sm:p-10 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/[0.06] via-teal-500/[0.04] to-transparent shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={13} /> Project Engineering Advisory Desk
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 leading-tight">
                  Start Your Commercial Turnkey Project with Guaranteed ROI
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Get certified architectural layouts, itemized BOQ, bank-ready Detailed Project Report (DPR), and complete government subsidy documentation from India’s leading mushroom EPC specialists.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold pt-1 text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>Daikin-Certified HVAC & AHU</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>25%–35% NHB Subsidy Assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>In-House PPGL PUF Panel Factory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    <span>On-Site Crop Commissioning Support</span>
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
                        Turnkey Project Request Received!
                      </h4>
                      <p className="text-xs text-slate-500">
                        Our Senior Project Engineer will review your location details and contact you with a customized DPR and layout proposal.
                      </p>
                      <a
                        href="https://wa.me/919203544140?text=I%20just%20submitted%20a%20Turnkey%20Setup%20inquiry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
                      >
                        <MessageCircle size={14} /> WhatsApp Direct Connect
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-3">
                      <h4 className="text-sm font-bold dark:text-white text-slate-900">
                        Request DPR & Commercial Quote
                      </h4>

                      {formError && (
                        <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500 text-xs font-semibold">
                          {formError}
                        </div>
                      )}

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Sharma"
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-emerald-500 dark:text-white text-slate-900 focus:outline-none"
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
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-emerald-500 dark:text-white text-slate-900 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                            Project Location
                          </label>
                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="City, State"
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-emerald-500 dark:text-white text-slate-900 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          Target Project Scale
                        </label>
                        <select
                          value={formData.projectScale}
                          onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-emerald-500 dark:text-white text-slate-900 focus:outline-none"
                        >
                          <option value="Commercial 4 Grow Rooms + Compost Unit (₹65L - ₹1.1 Cr)">Commercial 4 Grow Rooms + Compost Unit (₹65L - ₹1.1 Cr)</option>
                          <option value="2 Commercial Grow Rooms Starter (₹25L - ₹35L)">2 Commercial Grow Rooms Starter (₹25L - ₹35L)</option>
                          <option value="Industrial Mega Facility 8+ Rooms (₹1.5 Cr+)">Industrial Mega Facility 8+ Rooms (₹1.5 Cr+)</option>
                          <option value="Compost Pasteurization Tunnel Only (₹18L - ₹25L)">Compost Pasteurization Tunnel Only (₹18L - ₹25L)</option>
                          <option value="Single Grow Room Pilot Setup (₹12L - ₹18L)">Single Grow Room Pilot Setup (₹12L - ₹18L)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                          Land / Shed Availability
                        </label>
                        <select
                          value={formData.landAvailable}
                          onChange={(e) => setFormData({ ...formData, landAvailable: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-emerald-500 dark:text-white text-slate-900 focus:outline-none"
                        >
                          <option value="Yes, 5,000 to 15,000 sq ft available">Yes, 5,000 to 15,000 sq ft available</option>
                          <option value="Yes, 1 to 3+ Acres Open Land">Yes, 1 to 3+ Acres Open Land</option>
                          <option value="Existing Building / Shed to Renovate">Existing Building / Shed to Renovate</option>
                          <option value="Planning to Lease / Acquire Land">Planning to Lease / Acquire Land</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            <span>Submitting Project Request...</span>
                          </>
                        ) : (
                          <>
                            <Send size={13} />
                            <span>Get Detailed Project Proposal</span>
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
              <HelpCircle size={12} /> Commercial Questions
            </div>
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Turnkey Setup <span className="gradient-text font-black">FAQs</span>
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
                      <span className="text-emerald-600 dark:text-emerald-400 shrink-0 font-black">Q:</span>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                        isOpen ? 'rotate-180 text-emerald-500' : ''
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
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 text-white shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight">
              Ready to Build Your Commercial Agro-Enterprise?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              Connect with our Senior EPC project managers to get your customized civil layout drawings, equipment BOQ, and subsidy eligibility report.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openConsultationModal()}
                className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black text-xs md:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg cursor-pointer"
              >
                <BookOpen size={16} /> Book EPC Site Consultation
              </button>
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

export const TurnkeySetupPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <TurnkeySetupInner />
    </ModalProvider>
  );
};
