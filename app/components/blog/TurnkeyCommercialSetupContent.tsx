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
  Droplets,
  Wind,
  MessageCircle,
  Calculator,
  AlertTriangle,
  HelpCircle,
  Send,
  Loader2,
  Check,
  FileSpreadsheet,
  FileText,
  DollarSign,
  Wrench,
  Compass,
  Zap,
  Calendar,
  User,
  XCircle,
  BarChart3,
  Award,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const TurnkeyCommercialSetupInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal, openQuoteCalculatorModal } = useAppModals();

  // Interactive Project Cost & Production Estimator
  const [roomCount, setRoomCount] = useState<number>(4);
  const [cropType, setCropType] = useState<'button' | 'oyster'>('button');

  // Lead capture state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    projectScale: 'Commercial 4 Grow Rooms + Climate Automation (₹45L - ₹85L)',
    landAvailable: 'Yes, 5,000 to 15,000 sq ft',
    message: '',
  });
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const calculateProjectMetrics = () => {
    if (cropType === 'button') {
      const bagCapacity = roomCount * 2500;
      const monthlyHarvestKg = Math.round(roomCount * 2800);
      const approxMonthlyRevenue = Math.round(monthlyHarvestKg * 140);
      const estCapexLakhs = (roomCount * 14.5 + 18).toFixed(1);
      const estimatedNetMonthly = Math.round(approxMonthlyRevenue * 0.42);
      return { bagCapacity, monthlyHarvestKg, approxMonthlyRevenue, estCapexLakhs, estimatedNetMonthly };
    } else {
      const bagCapacity = roomCount * 3000;
      const monthlyHarvestKg = Math.round(roomCount * 2200);
      const approxMonthlyRevenue = Math.round(monthlyHarvestKg * 130);
      const estCapexLakhs = (roomCount * 8.5 + 8).toFixed(1);
      const estimatedNetMonthly = Math.round(approxMonthlyRevenue * 0.48);
      return { bagCapacity, monthlyHarvestKg, approxMonthlyRevenue, estCapexLakhs, estimatedNetMonthly };
    }
  };

  const metrics = calculateProjectMetrics();

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(securityAnswer, 10) !== 17) {
      setFormError('Please solve the security verification: 9 + 8 = 17');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please enter your full name and valid WhatsApp mobile number.');
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
          category: 'Turnkey Commercial Project Guide Lead',
          message: `Turnkey Investor Guide Lead: Scale=${formData.projectScale}, Land=${formData.landAvailable}, Location=${formData.location}`,
          source: 'Turnkey Commercial Setup Investor Guide Blog',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Unable to submit inquiry. Please connect directly via WhatsApp: +91 9203544140');
      }
    } catch {
      setFormError('Network error. Please contact directly via WhatsApp: +91 9203544140');
    } finally {
      setSubmitting(false);
    }
  };

  const comparisonData = [
    {
      feature: 'Engineering & Air Balance Design',
      diy: 'Trial & error with generic local AC / refrigeration vendors. Frequent hot spots and uneven airflow.',
      turnkey: 'Custom CFM & Static Pressure calculated AHU systems with continuous multi-point CO2 regulation.',
      turnkeyWins: true,
    },
    {
      feature: 'Thermal Insulation & Power Efficiency',
      diy: 'Gaps in local PUF / thermocol sheets leading to 35%–50% higher recurring power consumption.',
      turnkey: 'High-density 80mm–100mm tongue-and-groove cam-locked PUF panels with thermal-break hermetic doors.',
      turnkeyWins: true,
    },
    {
      feature: 'Sterile Cleanroom & Bio-Security',
      diy: 'Square corners, porous concrete, and unsealed joints harboring persistent Trichoderma green mold spores.',
      turnkey: 'Epoxy/coved corners, positive-pressure air curtains, HEPA filtration, and washable antibacterial finishes.',
      turnkeyWins: true,
    },
    {
      feature: 'Time to First Commercial Flush',
      diy: '8 to 14 months of troubleshooting, re-engineering, and contractor disputes.',
      turnkey: '60 to 90 days from foundation readiness to first harvest batch.',
      turnkeyWins: true,
    },
    {
      feature: 'First Year Crop Failure Risk',
      diy: 'High (40%–65% batch abortion or contamination in self-engineered first attempts).',
      turnkey: '< 3% guaranteed with SOP agronomy guidance and F1 lab-tested master spawn.',
      turnkeyWins: true,
    },
    {
      feature: 'Warranty & Agronomist Support',
      diy: 'Zero accountability between civil, HVAC, and spawn vendors when yields fail.',
      turnkey: 'Single-window turnkey warranty covering equipment, automation, and harvest SOP handholding.',
      turnkeyWins: true,
    },
  ];

  const turnkeyComponents = [
    {
      icon: <Cpu className="text-emerald-500" size={24} />,
      title: 'Smart PLC / Microclimate Automation',
      desc: 'Centralized touchscreen panel regulating temperature (±0.5°C), relative humidity (75%–95%), CO2 parts per million (PPM), and fresh air flushes automatically across all growth cycles.',
    },
    {
      icon: <Factory className="text-blue-500" size={24} />,
      title: 'Modular Insulated PUF Cleanrooms',
      desc: '80mm to 100mm high-density PUF panels with food-grade pre-painted galvanized steel (PPGI), coved floor-to-wall transitions, and airtight hermetic insulated doors.',
    },
    {
      icon: <Wind className="text-purple-500" size={24} />,
      title: 'Custom Mushroom-Spec AHU & Ducting',
      desc: 'Dedicated Air Handling Units (AHUs) with variable speed EC blowers, micro-misting ultrasonic foggers, and micro-perforated food-grade fabric ducting for uniform laminar air distribution.',
    },
    {
      icon: <Layers className="text-amber-500" size={24} />,
      title: 'Heavy-Duty 4 to 6 Tier Racking Systems',
      desc: 'Hot-dip galvanized / structural aluminum shelving designed specifically for Dutch-style compost beds or suspended multi-tier polythene substrate bags.',
    },
    {
      icon: <ShieldCheck className="text-red-500" size={24} />,
      title: 'Sterilization & Hygiene Infrastructure',
      desc: 'High-pressure steam boiler integration, Phase I/II composting infrastructure, casing preparation setups, and positive-pressure inoculation air locks.',
    },
    {
      icon: <TrendingUp className="text-teal-500" size={24} />,
      title: 'End-to-End Agronomy SOP & Market Linkage',
      desc: 'Complete standard operating procedures, staff training, harvest grading guidelines, and direct supply connections to wholesale vegetable mandis and hotel chains.',
    },
  ];

  const faqs = [
    {
      q: 'What is included in a Turnkey Commercial Mushroom Farm setup by Organic Mushrooms Farm?',
      a: 'Our turnkey solutions include complete architectural BIM design, insulated PUF cleanroom grow chambers, automated mushroom-specific HVAC & AHU systems, ultrasonic humidity foggers, heavy-duty multi-tier racks, steam sterilization systems, pure F1 master spawn supply, on-site agronomist training, and market linkage advisory.',
    },
    {
      q: 'Why do DIY mushroom farms often fail in their first year?',
      a: 'Mushroom cultivation is an exact bio-engineering science. DIY builders usually struggle with thermal bridging (skyrocketing electricity bills), incorrect CFM ventilation (causing suffocated mushrooms with long stems and pinhead abortions), and porous building materials that allow Trichoderma green mold to ruin entire crop cycles.',
    },
    {
      q: 'What is the typical investment required for a commercial Button Mushroom farm?',
      a: 'A 2 to 4 grow room commercial Button Mushroom facility typically starts between ₹45 Lakhs to ₹95 Lakhs depending on whether Phase II bunker composting is integrated. For Oyster and Milky mushrooms, a commercial 4-room automated farm can be established between ₹25 Lakhs to ₹45 Lakhs.',
    },
    {
      q: 'How fast can a turnkey mushroom farm become operational?',
      a: 'Once civil foundation and three-phase power connections are ready on-site, our modular pre-engineered panels, HVAC, and automation can be erected and commissioned within 60 to 90 days, enabling your first commercial harvest in record time.',
    },
    {
      q: 'Can we avail Government subsidies for Turnkey Commercial Mushroom Projects in India?',
      a: 'Yes! Commercial mushroom cultivation projects qualify for substantial subsidies under the National Horticulture Board (NHB) and Mission for Integrated Development of Horticulture (MIDH), offering back-ended capital subsidies ranging from 33% to 50% of the project cost. We provide complete DPR (Detailed Project Report) assistance for bank loan and subsidy clearance.',
    },
    {
      q: 'Do you provide buyback agreements or market linkages for commercial harvests?',
      a: 'We provide comprehensive institutional market linkage support, connecting your commercial harvest directly with regional APMC wholesale mandis, modern retail supermarket chains, food processing companies, and institutional hotel networks.',
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
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Turnkey Commercial Setup vs DIY
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-flex items-center gap-1.5">
                <Building2 size={14} /> Commercial Agribusiness Infrastructure
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock size={13} /> 8 Min Read
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar size={13} /> Updated 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Why Smart Investors Choose <span className="gradient-text font-black">Turnkey Setups</span> Over DIY Commercial Mushroom Farms 🏗️
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-4xl mb-8">
              The commercial mushroom industry in India and worldwide is witnessing exponential growth. High profit margins and fast 30-day crop turnarounds make it an attractive investment. However, mushroom cultivation is fundamentally an <strong className="text-slate-900 dark:text-white font-bold">environmental bio-engineering science</strong>. Discover why savvy agri-entrepreneurs avoid the DIY contractor trap to protect capital and secure maximum yields from day one.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20a%20Turnkey%20Commercial%20Mushroom%20Farm%20Setup.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={16} /> Consult Turnkey Agronomist (9203544140)
              </a>
              <button
                onClick={() => openConsultationModal({ category: 'Turnkey Commercial Farm Consultation' })}
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-xs"
              >
                <Phone size={15} /> Book Free Turnkey Project Call
              </button>
            </div>
          </motion.div>
        </header>

        {/* Executive Summary Card */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 shadow-lg">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-3">
              <Sparkles size={18} />
              <span>Executive Briefing: The Commercial Mushroom Imperative</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Unlike field crops that depend on monsoon and soil chemistry, commercial mushrooms are grown in hyper-controlled indoor microclimates. Attempting to build an industrial facility through piecemeal local contractors (separate civil, AC, ducting, and electrical vendors) invariably leads to <strong className="text-slate-900 dark:text-white">thermal leakage, CO2 suffocation, and green mold contamination</strong>. A turnkey approach guarantees precision engineering, automated PLC climate regulation, and immediate commercial harvests.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">60-90</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Days to Commission</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">&lt; 3%</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Contamination Rate</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">35-50%</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">NHB/Govt Subsidy</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">SOP & Tech Handholding</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Hidden Dangers of the DIY Trap */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl">
            <div className="border-l-4 border-red-500 pl-4 py-1 mb-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-red-500 block mb-1">
                Risk Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                The 4 Fatal Traps of Self-Built (DIY) Commercial Farms
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Many first-time commercial investors believe they can save 15% to 20% on upfront capital expenditure by hiring local building contractors and standard cold-storage technicians. In reality, fungi biology requires exact psychrometric control that generalist contractors fail to understand:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-600 flex items-center justify-center font-bold">1</div>
                  <h3 className="font-bold text-sm sm:text-base dark:text-white text-slate-900">Thermal Bridging & Skyrocketing Electricity Bills</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Poorly joined panels and inadequate floor insulation force standard AC compressors to run continuously without reaching the required 14°C–18°C setpoints, doubling monthly energy operational costs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-600 flex items-center justify-center font-bold">2</div>
                  <h3 className="font-bold text-sm sm:text-base dark:text-white text-slate-900">Airflow Bottlenecks & Pinhead Abortions</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mushrooms consume oxygen and release massive amounts of carbon dioxide. Without properly balanced static pressure and micro-perforated air distribution, CO2 collects in stagnant pools, resulting in elongated leggy stems and aborted caps.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-600 flex items-center justify-center font-bold">3</div>
                  <h3 className="font-bold text-sm sm:text-base dark:text-white text-slate-900">Persistent Trichoderma & Bacterial Invasions</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Standard masonry walls, exposed cement joints, and non-coved corners harbor microscopic mold spores and bacterial blotch pathogens that cannot be eradicated with routine sanitization.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-600 flex items-center justify-center font-bold">4</div>
                  <h3 className="font-bold text-sm sm:text-base dark:text-white text-slate-900">Multi-Vendor Blame Game & Project Delays</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  When crops underperform, the AC vendor blames the civil builder, the builder blames the spawn supplier, and the investor absorbs 100% of the financial loss with zero accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: In-Depth Comparison Matrix */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
              Architectural Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Turnkey Facility vs. DIY Commercial Build
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              A clear side-by-side comparison of engineering standards, timeframes, and operational reliability.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-white/10">
                    <th className="p-4 sm:p-5 font-black text-slate-900 dark:text-white w-1/3">Key Dimension</th>
                    <th className="p-4 sm:p-5 font-bold text-red-600 dark:text-red-400 w-1/3 bg-red-500/5">
                      DIY / Local Contractor Route
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-emerald-600 dark:text-emerald-400 w-1/3 bg-emerald-500/5">
                      Organic Mushrooms Farm Turnkey
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-slate-800 dark:text-slate-200 align-top">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400 bg-red-500/5 align-top leading-relaxed">
                        <div className="flex items-start gap-1.5">
                          <XCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                          <span>{row.diy}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-700 dark:text-slate-300 bg-emerald-500/5 font-medium align-top leading-relaxed">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{row.turnkey}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: What An Industrial Turnkey Setup Includes */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-8">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                Engineering Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                What is Included in Our Turnkey Facility Package?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {turnkeyComponents.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center mb-4 shadow-xs">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Interactive Project Scale & Revenue Estimator */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/50 text-white shadow-2xl">
            <div className="border-l-4 border-emerald-400 pl-4 py-1 mb-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-300 block mb-1">
                Commercial Feasibility Tool
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Commercial Farm Sizing & Monthly Revenue Estimator
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8 max-w-3xl">
              Select your preferred mushroom species and the number of growing rooms to calculate estimated capacity, monthly production, and project setup Capex.
            </p>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                    1. Select Mushroom Variety
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCropType('button')}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                        cropType === 'button'
                          ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                          : 'bg-slate-800 border-white/10 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      White Button (High Volume)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCropType('oyster')}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                        cropType === 'oyster'
                          ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                          : 'bg-slate-800 border-white/10 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Oyster / Dhingri (Fast Cycle)
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                    <span>2. Number of Grow Chambers</span>
                    <span className="text-white text-base font-black">{roomCount} Growing Rooms</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="1"
                    value={roomCount}
                    onChange={(e) => setRoomCount(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-500 bg-slate-700 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>2 Rooms (Mini-Commercial)</span>
                    <span>6 Rooms</span>
                    <span>10 Rooms (Industrial)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span>Target Room Dimensions:</span>
                    <strong className="text-white">40ft × 20ft × 12ft (Each)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Land Requirement:</span>
                    <strong className="text-white">{(roomCount * 1200 + 1500).toLocaleString()} Sq. Ft.</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Govt. Capital Subsidy:</span>
                    <strong className="text-emerald-400 font-bold">33% to 50% (NHB / MIDH)</strong>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="lg:col-span-7 bg-white/10 dark:bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-white/15 backdrop-blur-md">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                      Total Bag/Bed Capacity
                    </span>
                    <span className="text-2xl font-black text-white">{metrics.bagCapacity.toLocaleString()}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">Active cultivation bags</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/80 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                      Monthly Fresh Harvest
                    </span>
                    <span className="text-2xl font-black text-emerald-400">
                      {metrics.monthlyHarvestKg.toLocaleString()} kg
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">Graded commercial yield</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/80 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                      Est. Monthly Gross Revenue
                    </span>
                    <span className="text-2xl font-black text-amber-400">
                      ₹{metrics.approxMonthlyRevenue.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">At wholesale APMC rates</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/80 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                      Est. Turnkey Project Capex
                    </span>
                    <span className="text-2xl font-black text-white">₹{metrics.estCapexLakhs} Lakhs</span>
                    <span className="text-xs text-slate-400 block mt-0.5">Pre-subsidy estimation</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                  <div>
                    <span className="text-xs text-slate-300 block">Est. Net Monthly Operating Margin</span>
                    <span className="text-lg font-bold text-emerald-400">
                      ₹{metrics.estimatedNetMonthly.toLocaleString()} / month
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      openQuoteCalculatorModal({
                        variety: cropType === 'button' ? 'White Button Mushroom' : 'Oyster Mushroom',
                        area: roomCount * 800,
                      })
                    }
                    className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs inline-flex items-center gap-2 transition-transform hover:scale-105"
                  >
                    <Calculator size={14} /> Get Detailed DPR & Quotation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Step-by-Step Project Execution Roadmap */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl">
            <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-8">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                Execution Lifecycle
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Our 5-Stage Turnkey Delivery Process
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  01
                </div>
                <div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-1">
                    Site Feasibility & 3D BIM Architectural Design
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    We analyze your land topography, water hardness, and three-phase power availability to create 3D BIM architectural layouts, cleanroom flowpaths, and cold-chain dispatch zones.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  02
                </div>
                <div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-1">
                    DPR Preparation & Bank Subsidy Clearance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our financial agronomists prepare bankable Detailed Project Reports (DPR) compliant with National Horticulture Board (NHB) and bank credit appraisal standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  03
                </div>
                <div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-1">
                    Modular PUF Cleanroom & Infrastructure Erection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Installation of 80–100mm tongue-and-groove PUF insulated panels, coved hygienic flooring, anti-microbial coatings, and airtight cold-room doors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  04
                </div>
                <div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-1">
                    HVAC, Micro-Misting & PLC Automation Commissioning
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Integration of Air Handling Units, micro-perforated ductwork, ultrasonic humidifiers, CO2 scrubbers, and centralized IoT mobile dashboard monitoring.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  05
                </div>
                <div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-1">
                    First Flush Spawning, SOP Training & Harvest Handover
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our master mycologists supervise the entire first crop cycle on-site—from substrate bagging and incubation to fruiting flushes—ensuring your team operates with 100% confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Turnkey Setup Lead Capture Form */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Investor Consultation Desk
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Request a Turnkey Commercial Project Proposal
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Speak with our senior bio-infrastructure engineers. Receive custom architectural CAD concepts, equipment bill of materials, and financial ROI models tailored to your land and capital.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Comprehensive Bankable DPR for NHB / Commercial Bank Loans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Single-window warranty for PUF panels, HVAC, and PLC automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Pure F1 lab master spawn supply with continuous agronomist advisory</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Inquiry Successfully Received!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our commercial project director will connect with you on WhatsApp within 2 hours with project blueprints.
                    </p>
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20requested%20a%20Turnkey%20Commercial%20Proposal%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle size={15} /> Open WhatsApp Directly
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-3 text-xs">
                    {formError && (
                      <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-[11px]">
                        {formError}
                      </div>
                    )}
                    <div>
                      <label className="block font-bold mb-1">Investor / Promoter Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikramaditya Sharma"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">WhatsApp Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-bold mb-1">Project City / State</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Pune, Maharashtra"
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-1">Estimated Budget Scale</label>
                        <select
                          value={formData.projectScale}
                          onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        >
                          <option value="Mini-Commercial 2 Rooms (₹25L - ₹45L)">Mini-Commercial 2 Rooms (₹25L - ₹45L)</option>
                          <option value="Commercial 4 Grow Rooms (₹45L - ₹85L)">Commercial 4 Grow Rooms (₹45L - ₹85L)</option>
                          <option value="Industrial 6 to 10 Rooms + Bunker (₹1 Cr - ₹2.5 Cr)">Industrial 6 to 10 Rooms + Bunker (₹1 Cr - ₹2.5 Cr)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Security Calculation: 9 + 8 = ?</label>
                      <input
                        type="number"
                        required
                        value={securityAnswer}
                        onChange={(e) => setSecurityAnswer(e.target.value)}
                        placeholder="Enter 17"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin" /> Preparing Proposal...
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Request Custom Turnkey DPR & Quote
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-6">
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Essential questions on capital investment, government subsidies, and turnkey execution.
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

        {/* Bottom Call to Action */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Ready to Build a High-Yield Commercial Mushroom Facility?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Eliminate trial and error. Partner with India's leading bio-infrastructure specialists for guaranteed climate precision, maximum harvest yields, and complete SOP handholding.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20discuss%20a%20Turnkey%20Commercial%20Mushroom%20Farm%20Project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Commercial Desk (9203544140)
              </a>
              <Link
                href="/services/turnkey-setup"
                className="px-8 py-3.5 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all border border-white/20"
              >
                <Building2 size={16} /> Explore Turnkey Infrastructure Specs
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Floating CTAs & Modals */}
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <AIChatWidget />
      <HomeModals />
      <Footer />
    </div>
  );
};

export const TurnkeyCommercialSetupContent: React.FC = () => {
  return (
    <ModalProvider>
      <TurnkeyCommercialSetupInner />
    </ModalProvider>
  );
};
