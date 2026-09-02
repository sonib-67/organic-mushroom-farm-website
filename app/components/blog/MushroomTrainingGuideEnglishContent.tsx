'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Sprout,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  Phone,
  Mail,
  MessageCircle,
  Thermometer,
  Droplets,
  Wind,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowRight,
  Send,
  Loader2,
  Building2,
  AlertTriangle,
  UserCheck,
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

const MushroomTrainingGuideEnglishInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal } = useAppModals();

  // Consultation & Guide Request Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cityState: '',
    varietyInterest: 'All 3 Varieties (Commercial Masterclass)',
    farmScale: 'Commercial Setup (500 - 2,000 Bags)',
    message: '',
  });
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(securityAnswer, 10) !== 13) {
      setFormError('Please solve the security calculation: 7 + 6 = 13');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please enter your full name and WhatsApp mobile number.');
      return;
    }

    setSubmitting(true);
    setFormError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'English Mushroom Cultivation Master Training Guide',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Unable to submit inquiry. Please connect directly on WhatsApp: +91 9203544140');
      }
    } catch {
      setFormError('Network error. Please connect directly via WhatsApp: +91 9203544140');
    } finally {
      setSubmitting(false);
    }
  };

  const corePillars = [
    {
      icon: <Layers className="text-emerald-500" size={24} />,
      title: '1. Substrate Science & Pasteurization',
      desc: 'Master wheat straw, paddy straw, and sugarcane bagasse processing. Learn exact hot water thermal dipping (80°C for 90 mins) versus chemical formalin-bavistin formulation to eliminate 100% of wild competitors.',
    },
    {
      icon: <Sprout className="text-blue-500" size={24} />,
      title: '2. Pure F1 Spawning & Inoculation',
      desc: 'Learn proper spawn grain hygiene, optimal 2%–3% spawning ratio, layer vs thorough mixing techniques, aerobic gas filter plugs, and dark-room incubation protocols (22°C–28°C).',
    },
    {
      icon: <Thermometer className="text-amber-500" size={24} />,
      title: '3. Climate & Humidity Automation',
      desc: 'Understand how to balance 85%–90% relative humidity with continuous fresh air exchange (FAE) without causing dry air aborts or excessive CO2 stem elongation (stipe stretching).',
    },
    {
      icon: <ShieldCheck className="text-purple-500" size={24} />,
      title: '4. Bio-Security & Contamination Control',
      desc: 'Identify early-stage Trichoderma (green mold), cobweb mold, yellow blotch bacteria, and sciarid flies. Execute immediate chemical swab isolation before spores spread across the grow room.',
    },
    {
      icon: <Clock className="text-emerald-500" size={24} />,
      title: '5. Harvesting & Post-Harvest Cold Chain',
      desc: 'Master the zero-bruising twist-and-pull harvesting technique, micro-perforated punnet packaging, 0°C–4°C cold room preservation, and 10:1 solar dehydration for premium dry mushroom sales.',
    },
    {
      icon: <TrendingUp className="text-cyan-500" size={24} />,
      title: '6. Direct B2B Marketing & Scalability',
      desc: 'Draft actionable DPR bank loan proposals for NABARD/MSME subsidies, negotiate wholesale sabzi mandi contracts, and supply high-margin gourmet cafes and retail supermarkets.',
    },
  ];

  const speciesComparison = [
    {
      name: 'Oyster Mushroom (Pleurotus ostreatus / Dhingri)',
      level: 'Beginner to Commercial',
      growthCycle: '21 – 25 Days',
      idealTemp: '20°C – 28°C',
      humidity: '80% – 88%',
      substrate: 'Paddy or Wheat Straw (No Composting needed)',
      yieldRatio: '80% – 100% Biological Efficiency (1kg mushroom per 1kg dry straw)',
      capitalNeeded: 'Low (₹25,000 – ₹1.5 Lakhs)',
      link: '/services/oyster-mushroom',
    },
    {
      name: 'Milky Mushroom (Calocybe indica)',
      level: 'Intermediate (Heat-Tolerant Champion)',
      growthCycle: '35 – 45 Days',
      idealTemp: '30°C – 38°C (Thrives in peak summers)',
      humidity: '85% – 90%',
      substrate: 'Wheat Straw + Casing Soil Layer (2-3cm)',
      yieldRatio: '80% – 100% Biological Efficiency',
      capitalNeeded: 'Low to Medium (₹50,000 – ₹2.5 Lakhs)',
      link: '/services/milky-mushroom',
    },
    {
      name: 'White Button Mushroom (Agaricus bisporus)',
      level: 'Advanced Commercial Scale',
      growthCycle: '60 – 75 Days (Including Composting)',
      idealTemp: '14°C – 18°C (Requires AC or Winter chill)',
      humidity: '85% – 92%',
      substrate: 'Phase-II Fermented Compost + Casing Soil',
      yieldRatio: '18% – 22% of Total Wet Compost Weight',
      capitalNeeded: 'High (₹5 Lakhs – ₹50 Lakhs for automated AC plant)',
      link: '/services/button-mushroom',
    },
  ];

  const stepByStepRoadmap = [
    {
      step: 'Step 1: Substrate Preparation & Sourcing',
      detail:
        'Source fresh, golden, moisture-free wheat straw or paddy straw. Mechanically chop into 2 to 3-inch fiber segments. This size ensures optimal pore space for mycelial respiration while retaining sufficient moisture.',
      proTip:
        'Avoid weathered, black, or moldy straw as it carries high initial spore loads that survive weak pasteurization.',
    },
    {
      step: 'Step 2: Disinfection (Boiling vs Chemical Sterilization)',
      detail:
        'Method A (Hot Water): Submerge chopped straw in 80°C water for 90 minutes. Method B (Cold Chemical): Treat 100kg wet straw in 100L water with 125ml Formalin (37%) + 10g Carbendazim (Bavistin) for 16-18 hours. Drain excess water on a sanitized slope until palm moisture reaches 65%.',
      proTip:
        'Palm Squeeze Test: Squeeze a handful of straw tightly. If water trickles in streams, it is too wet (will cause bacterial rot). If 2-3 drops appear between fingers without dripping, moisture is calibrated.',
    },
    {
      step: 'Step 3: Spawning & Bag Packing',
      detail:
        'Inoculate at 2% to 3% spawn-to-dry-straw ratio using pure certified F1 wheat-grain master spawn. Pack in clean 16x18 or 18x24-inch polypropylene bags in 3 to 4 alternating layers. Punch 12-16 needle perforations around the bag for oxygen respiration.',
      proTip:
        'Sanitize hands, arms, and tools with 70% isopropyl alcohol before touching grain spawn.',
    },
    {
      step: 'Step 4: Dark Room Incubation (Mycelium Run)',
      detail:
        'Transfer bags to a completely dark incubation chamber. Maintain 22°C to 26°C with 70% humidity. Over the next 15 to 20 days, the fungal mycelium will colonize the entire substrate, turning the bag solid chalk-white.',
      proTip:
        'Do not expose to sunlight or high ventilation during spawn run. CO2 accumulation aids rapid mycelial expansion.',
    },
    {
      step: 'Step 5: Pinhead Triggering & Fruiting Room Induction',
      detail:
        'Once 100% colonized, slit or remove the outer polythene bag. Introduce fresh air exchange (FAE) 4 to 6 times daily, maintain 85% to 90% relative humidity using automated foggers, and provide diffused indirect light (500-1000 lux) for 4-6 hours daily.',
      proTip:
        'Tiny pinheads (primordia) will appear within 3 to 5 days after fresh air and humidity induction.',
    },
    {
      step: 'Step 6: Harvesting, Packing & Second Flush Care',
      detail:
        'Harvest when the mushroom cap margins are flat and before they curl upward or release spores. Gently twist at the base without slicing with a dirty knife. Clean the bag surface, spray light misting, and prepare for the 2nd and 3rd flushes at 7-10 day intervals.',
      proTip:
        'Pack fresh mushrooms in micro-perforated 200g punnets to prevent condensation droplets from causing bacterial blotch.',
    },
  ];

  const faqs = [
    {
      q: 'How much space do I need to start a commercial mushroom farm?',
      a: 'Because mushroom farming is vertical, you can start in a compact 10x10 ft room (100 sq. ft.) with 3-tier bamboo or iron racks holding 150 to 200 bags. A standard 1,000 sq. ft. commercial shed can accommodate 4,000 to 5,000 bags vertically, yielding 25kg to 40kg of fresh harvest daily.',
    },
    {
      q: 'What is the difference between F1 spawn and secondary commercial spawn?',
      a: 'F1 Master Spawn is produced in sterile laminar airflow laboratories directly from pristine pure slant cultures. It guarantees 99%+ biological vigor, dense colonization speed (15 days), and high disease resistance. Sub-cultured F2/F3 seeds often suffer from genetic degeneration and high contamination rates.',
    },
    {
      q: 'Can I grow mushrooms during extreme summer heat in India?',
      a: 'Yes! Milky Mushroom (Calocybe indica) naturally thrives between 30°C and 38°C during peak summer months across Rajasthan, Gujarat, Maharashtra, and North India. Alternatively, Oyster and Button mushrooms can be grown in insulated rooms with evaporative desert coolers or automated chillers.',
    },
    {
      q: 'Do I get a verified certificate for bank loans and government subsidies?',
      a: 'Yes. Upon completing our training program, Organic Mushrooms Farm issues an official Certificate of Completion with a unique verification registration code, which is widely recognized for NABARD, NHM, and Mudra bank loan DPR applications.',
    },
    {
      q: 'What is the average profit margin in commercial mushroom farming?',
      a: 'For Oyster and Milky mushrooms, the production cost is roughly ₹35 to ₹45 per kg, while wholesale market prices range from ₹90 to ₹160/kg (and retail ₹180 to ₹250/kg), offering profit margins of 100% to 150%. White Button mushrooms yield stable recurring profits of ₹30 to ₹60 per kg at commercial scale.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-6">
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
              Mushroom Training Guide (English)
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider">
                <BookOpen size={13} /> Complete Technical Guide
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Award size={13} /> Commercial Agronomy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-[11px] font-bold uppercase tracking-wider">
                <CheckCircle2 size={13} /> 2026 Updated Edition
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Master Commercial Mushroom Cultivation: <span className="gradient-text font-black">Your Step-by-Step Training Guide in English</span> 🍄
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-4xl mb-6">
              The commercial mushroom industry offers rapid cash flow cycles, high profit margins, and minimal land requirements. However, mushroom cultivation is an exact biological discipline. Discover the scientific roadmap to pasteurization, climate control, disease eradication, and profitable market distribution.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <UserCheck size={14} className="text-emerald-500" />
                  <span className="font-semibold dark:text-slate-200 text-slate-800">
                    By Organic Mushrooms Farm Agronomy Team
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>15 Min Read • Practical Actionable Blueprint</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20read%20the%20English%20Mushroom%20Training%20Guide.%20I%20want%20to%20enroll%20in%20training%20and%20order%20spawn."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-transform hover:scale-105 shadow-md"
                >
                  <MessageCircle size={14} /> WhatsApp Advisory Desk
                </a>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Why Structured Training Beats DIY Guesswork */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                Core Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Why Professional Training Beats Trial and Error Every Time
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              The number one reason new agri-entrepreneurs fail is relying on scattered internet videos and unverified DIY experiments. They buy equipment, set up a room, and inoculate straw, only to lose their entire crop to <em>Trichoderma</em> (green mold) or suffocating carbon dioxide levels within three weeks.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center mb-3">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Variety Comparison Matrix */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2 inline-block">
              Species Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Selecting the Right Commercial Mushroom Variety
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Compare climatic requirements, capital investments, and harvest cycles across the three leading commercial varieties in India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {speciesComparison.map((sp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 inline-block mb-3">
                    {sp.level}
                  </span>
                  <h3 className="text-lg font-black dark:text-white text-slate-900 mb-3">{sp.name}</h3>

                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Crop Cycle:</span>
                      <strong className="dark:text-white text-slate-900">{sp.growthCycle}</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Ideal Temp:</span>
                      <strong className="dark:text-white text-slate-900">{sp.idealTemp}</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Humidity:</span>
                      <strong className="dark:text-white text-slate-900">{sp.humidity}</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Substrate:</span>
                      <span className="dark:text-white text-slate-900 text-right font-medium max-w-[60%]">{sp.substrate}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Biological Efficiency:</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">{sp.yieldRatio}</strong>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-400">Capital Needed:</span>
                      <strong className="dark:text-white text-slate-900">{sp.capitalNeeded}</strong>
                    </div>
                  </div>
                </div>

                <Link
                  href={sp.link}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  View Complete Production Guide <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step 6-Stage Roadmap */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-8">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                Operational Standard Operating Procedure (SOP)
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                The 6-Stage Commercial Mushroom Cultivation Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Follow this precise commercial workflow from raw straw preparation to supermarket punnet packing.
              </p>
            </div>

            <div className="space-y-6">
              {stepByStepRoadmap.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-black dark:text-white text-slate-900">{item.step}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 pl-8">
                    {item.detail}
                  </p>

                  <div className="ml-8 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-start gap-2">
                    <Sparkles size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Agronomist Pro-Tip:</strong> {item.proTip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture & Course Enrollment */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Certified Mentorship
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Enroll in Our Complete Online or Offline Mushroom Masterclass
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Gain instant lifetime access to 10 practical video modules, printed SOP handbooks, verified completion certification, and priority agronomist WhatsApp support.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Oyster, Milky & White Button composting masterclasses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Govt & bank recognized certificate for NABARD loan subsidies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Direct F1 lab spawn discount & wholesale buyback pricing advisory</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Enrollment Request Received!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our training coordinator will send the syllabus, video demo, and certificate details to your WhatsApp number.
                    </p>
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20enrolled%20for%20the%20English%20Mushroom%20Training%20Program%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp (9203544140)
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                    {formError && (
                      <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-[11px]">
                        {formError}
                      </div>
                    )}
                    <div>
                      <label className="block font-bold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Amit Kumar"
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
                        placeholder="e.g. 9829XXXXXX"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-bold mb-1">Your City & State</label>
                        <input
                          type="text"
                          value={formData.cityState}
                          onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                          placeholder="e.g. Jaipur, Rajasthan"
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-1">Preferred Training</label>
                        <select
                          value={formData.varietyInterest}
                          onChange={(e) => setFormData({ ...formData, varietyInterest: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        >
                          <option value="Online Video Course (₹699)">Online Video Course (₹699)</option>
                          <option value="2-Day Offline Farm Workshop">2-Day Offline Farm Workshop</option>
                          <option value="Turnkey Commercial Farm Setup">Turnkey Farm Setup & Advisory</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Security Check: 7 + 6 = ?</label>
                      <input
                        type="number"
                        required
                        value={securityAnswer}
                        onChange={(e) => setSecurityAnswer(e.target.value)}
                        placeholder="Enter 13"
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
                          <Loader2 size={14} className="animate-spin" /> Enrolling...
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Get Training Syllabus & Enrollment Details
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-6">
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Essential answers for beginners and commercial mushroom growers in India.
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

        {/* Bottom CTA */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Ready to Build Your Profitable Mushroom Farm?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Equip yourself with the scientific insights, operational SOPs, and pure F1 master spawn required to achieve commercial success from Day One.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20F1%20Spawn%20and%20enroll%20in%20Mushroom%20Training."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Training Desk (9203544140)
              </a>
              <Link
                href="/training/online"
                className="px-8 py-3.5 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all border border-white/20"
              >
                <BookOpen size={16} /> Explore Video Courses
              </Link>
            </div>
          </div>
        </section>
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

export const MushroomTrainingGuideEnglishContent: React.FC = () => {
  return (
    <ModalProvider>
      <MushroomTrainingGuideEnglishInner />
    </ModalProvider>
  );
};
