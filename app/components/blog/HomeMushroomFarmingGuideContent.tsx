'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Sprout,
  CheckCircle2,
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
  Calendar,
  Clock,
  User,
  AlertCircle,
  Calculator,
  BookOpen,
  Zap,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const HomeMushroomFarmingGuideInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal } = useAppModals();

  // Interactive Home Setup Estimator
  const [bagCount, setBagCount] = useState<number>(20);
  const [selectedVariety, setSelectedVariety] = useState<'oyster' | 'milky'>('oyster');

  const calculateEstimate = () => {
    const spawnPerBagGrams = 100;
    const strawPerBagKg = 1.5;
    const spawnKgNeeded = (bagCount * spawnPerBagGrams) / 1000;
    const strawKgNeeded = bagCount * strawPerBagKg;
    const yieldPerBagKg = selectedVariety === 'oyster' ? 1.2 : 1.0;
    const totalYieldKg = (bagCount * yieldPerBagKg).toFixed(1);
    const approxInvestment = Math.round(bagCount * 45 + 150); // straw + spawn + bags + spray bottle
    const approxMarketValue = Math.round(parseFloat(totalYieldKg) * 220);
    const netSavingsOrProfit = approxMarketValue - approxInvestment;

    return {
      spawnKgNeeded: spawnKgNeeded.toFixed(1),
      strawKgNeeded: strawKgNeeded.toFixed(0),
      totalYieldKg,
      approxInvestment,
      approxMarketValue,
      netSavingsOrProfit,
    };
  };

  const estimate = calculateEstimate();

  // Consultation & Starter Kit Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cityState: '',
    interest: 'Home Grower Starter Kit & Online Training',
    message: '',
  });
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(securityAnswer, 10) !== 17) {
      setFormError('Please solve the security calculation: 11 + 6 = 17');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please enter your full name and WhatsApp contact number.');
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
          source: 'Home Mushroom Farming Guide 2026',
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

  const stepByStepGuide = [
    {
      step: '01',
      title: 'Substrate Sourcing & Sterilization (Boiling / Chemical)',
      desc: 'Take dry wheat straw (gehu ka bhusa) or paddy straw chopped into 2-inch bits. Immerse in boiling water for 60 minutes OR soak overnight in water treated with Carbendazim (Bavistin) and Formalin to destroy all wild competitor spores.',
      badge: 'Day 1',
    },
    {
      step: '02',
      title: 'Moisture Balancing & Layer Spawning',
      desc: 'Spread the pasteurized straw on a clean sterilized plastic sheet in shade until the moisture level reaches 65% (when squeezed tightly in your fist, no water drops fall, yet your palm feels distinctly moist). Mix 100g of pure F1 grain master spawn per 1.5kg wet straw in 4 sequential layers inside a 16x18 inch PP polythene bag.',
      badge: 'Day 2',
    },
    {
      step: '03',
      title: 'Dark Room Incubation & Mycelium Colonization',
      desc: 'Punch 12–16 small ventilation pinholes around the bag and tie the mouth tightly. Place the bags in a dark, clean room or cupboard at 22°C–28°C. Over the next 15 to 18 days, the white fungal mycelium will completely colonize the straw, turning the bag solid snow-white.',
      badge: 'Days 3 – 18',
    },
    {
      step: '04',
      title: 'Pinhead Initiation & Light / Fresh Air Introduction',
      desc: 'Once the bag is fully white, cut open the plastic or make 2-inch cross-slits. Introduce gentle indirect daylight (or 40W room LED) and mist with clean water 2 to 3 times daily to keep relative humidity above 80%. Small baby pinheads will erupt in clusters within 3 to 5 days.',
      badge: 'Days 19 – 23',
    },
    {
      step: '05',
      title: 'Harvesting & Multiple Flushes',
      desc: 'Within 4 to 5 days of pinhead formation, the mushrooms expand into full-grown fleshy caps with curled edges. Twist gently from the base with clean hands to harvest. Keep misting to trigger 2nd and 3rd flush harvests every 10 days!',
      badge: 'Days 24 – 45',
    },
  ];

  const varietiesForHome = [
    {
      name: 'Oyster Mushroom (Dhingri / Pleurotus)',
      badge: 'Best for Beginners',
      season: 'Round the Year (Sept – April ideal)',
      temp: '20°C – 28°C',
      cycle: '22 – 28 Days',
      features:
        'Zero air-conditioning needed. Extremely forgiving, fastest colonization, grows in simple wheat straw bags in any room corner.',
      link: '/services/oyster-mushroom',
    },
    {
      name: 'Milky Mushroom (Calocybe indica)',
      badge: 'Best for Indian Summers',
      season: 'March to August (High Heat)',
      temp: '30°C – 38°C',
      cycle: '35 – 45 Days',
      features:
        'Thrives in hot Indian summers. Produces big, meaty, porcelain-white mushrooms with a long 4–5 day natural room shelf life.',
      link: '/services/milky-mushroom',
    },
    {
      name: 'White Button Mushroom (Agaricus bisporus)',
      badge: 'Requires Climate Control',
      season: 'Strict Winter or AC Rooms Only',
      temp: '14°C – 18°C',
      cycle: '60 – 75 Days',
      features:
        'Requires pasteurized compost, casing soil, and strict temperature control. Best suited for commercial units rather than small bedrooms.',
      link: '/services/button-mushroom',
    },
  ];

  const faqs = [
    {
      q: 'Can I really grow mushrooms at home without a farm, garden, or balcony?',
      a: 'Yes, 100%! Mushrooms do not require direct sunlight or garden soil. They grow vertically in compact polythene bags placed inside a spare bedroom, store room, basement, or shaded veranda with basic cross-ventilation.',
    },
    {
      q: 'How much money is required to start a small home mushroom setup in India?',
      a: 'You can start with as little as ₹500 to ₹1,500. This covers 1kg of certified F1 lab spawn, 15kg of wheat straw, polythene bags, and a basic hand-pump spray bottle to produce 10 to 12 kg of fresh organic mushrooms.',
    },
    {
      q: 'Which mushroom variety is easiest for a first-time home grower?',
      a: 'Oyster Mushroom (Pleurotus ostreatus / Sajor-caju / Dhingri) is the easiest variety in the world for beginners. It requires no complex composting, matures in under 25 days, and tolerates typical Indian room temperatures (20°C–28°C).',
    },
    {
      q: 'How do I prevent green mold (Trichoderma) contamination at home?',
      a: 'Always boil or chemically sterilize your straw thoroughly, wash your hands and tools with Dettol/hand sanitizer before spawning, and ensure your spawn is fresh, certified F1 lab master grain spawn from a reputable laboratory.',
    },
    {
      q: 'How many times can I harvest from a single mushroom bag?',
      a: 'A single home-grown Oyster mushroom bag yields 3 to 4 sequential harvest flushes over a span of 45 to 60 days, providing up to 1.2kg to 1.5kg of fresh mushrooms per bag.',
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
              Home Mushroom Farming Guide 2026
            </span>
          </nav>
        </div>

        {/* Hero Header */}
        <header className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Home size={14} /> Home Farming Masterclass
              </span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <Calendar size={13} /> Updated 2026 Edition
              </span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <Clock size={13} /> 8 Min Read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              How to Grow Mushrooms at Home in India: <span className="gradient-text font-black">The Ultimate 2026 Guide (Ghar Par Kaise Ugayein)</span> 🍄
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mb-6">
              In 2026, cultivating your own 100% organic, chemical-free food inside your home has become an empowering movement across India. You don’t need an open farm, rooftop garden, or even a sunny balcony. Learn how a dark corner of a spare room can produce fresh gourmet mushrooms in 25 days.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20a%20Home%20Grower%20Spawn%20Kit%20and%20start%20mushroom%20cultivation%20at%20home."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={16} /> Order Home Spawn Kit (WhatsApp: 9203544140)
              </a>
              <button
                onClick={() => openConsultationModal({ category: 'Home Mushroom Farming 2026' })}
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-xs"
              >
                <BookOpen size={15} /> Enroll in Home Video Masterclass
              </button>
            </div>
          </motion.div>
        </header>

        {/* 3 Game-Changing Advantages */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-8">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                Zero-Land Organic Agriculture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Why Home Mushroom Farming Completely Flips Traditional Gardening
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 font-black">
                  🌱 01
                </div>
                <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">Zero Land & Zero Sunlight Required</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Unlike traditional plants that rely on photosynthesis, fungi absorb nutrients directly from agricultural straw. A 5x5 ft spare room or unused corner is enough for 20 bags.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 font-black">
                  ⚡ 02
                </div>
                <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">Lightning-Fast 25-Day Harvests</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  While vegetables take months to yield, Oyster mushrooms grow from grain spawn into fleshy edible gourmet flushes in just 22 to 28 days!
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 font-black">
                  💰 03
                </div>
                <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">Economical Agro-Waste Substrate</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Mushrooms convert low-cost agricultural by-products like wheat straw (*gehu ka bhusa*) or paddy straw into premium high-protein organic food.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Cultivation Blueprint */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
              5-Step SOP Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Step-by-Step Home Cultivation Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Follow this standardized scientific protocol to harvest 100% organic mushrooms in your home without contamination.
            </p>
          </div>

          <div className="space-y-4">
            {stepByStepGuide.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-sm flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-black dark:text-white text-slate-900">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-white/5">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Variety Comparison for Home Growers */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
              Species Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Best Varieties for Home Cultivation in India
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Choose the right variety according to your room temperature and cooling capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {varietiesForHome.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {v.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black dark:text-white text-slate-900 mb-2">{v.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{v.features}</p>

                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Ideal Season:</span>
                      <strong className="dark:text-white text-slate-900 text-right">{v.season}</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Temperature:</span>
                      <strong className="dark:text-white text-slate-900">{v.temp}</strong>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-400">Harvest Cycle:</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">{v.cycle}</strong>
                    </div>
                  </div>
                </div>

                <Link
                  href={v.link}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  View Full Guide <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Home Yield & Cost Calculator */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              <Calculator size={16} />
              <span>Interactive Home Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight mb-6">
              Calculate Your Home Mushroom Yield & Economics
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Number of Bags to Start: <span className="text-emerald-600 font-black text-sm">{bagCount} Bags</span>
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={100}
                    step={5}
                    value={bagCount}
                    onChange={(e) => setBagCount(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>5 Bags (Kitchen Trial)</span>
                    <span>50 Bags (Spare Room)</span>
                    <span>100 Bags (Semi-Commercial)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Select Target Variety:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedVariety('oyster')}
                      className={`p-3 rounded-2xl border text-xs font-bold transition-all ${
                        selectedVariety === 'oyster'
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Oyster Mushroom (20°C–28°C)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedVariety('milky')}
                      className={`p-3 rounded-2xl border text-xs font-bold transition-all ${
                        selectedVariety === 'milky'
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Milky Mushroom (30°C–38°C)
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white border border-emerald-500/30 shadow-xl space-y-4">
                <h3 className="text-sm font-black tracking-wide text-emerald-400 uppercase">
                  Projected Harvest & Returns
                </h3>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[10px]">Pure Spawn Needed:</span>
                    <strong className="text-base text-white">{estimate.spawnKgNeeded} kg</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[10px]">Dry Straw Needed:</span>
                    <strong className="text-base text-white">{estimate.strawKgNeeded} kg</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[10px]">Expected Total Harvest:</span>
                    <strong className="text-base text-emerald-400">{estimate.totalYieldKg} kg</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[10px]">Est. Setup Investment:</span>
                    <strong className="text-base text-white">₹{estimate.approxInvestment}</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Retail Market Harvest Value:</span>
                    <strong className="text-lg text-emerald-300 font-black">₹{estimate.approxMarketValue}</strong>
                  </div>
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20${estimate.spawnKgNeeded}kg%20of%20F1%20Spawn%20for%20my%20${bagCount}-bag%20home%20mushroom%20setup.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition-all"
                  >
                    <MessageCircle size={14} /> Order Spawn Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture & Starter Kit Inquiry */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Certified Lab Master Spawn & Video Training
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Get Your Home Grower Kit & Masterclass
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Avoid trial-and-error failures. Get certified F1 master grain spawn, PP bags, sterilization guides, and access to step-by-step video lessons directly from agronomists.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Pure F1 grain master spawn delivered pan-India via express courier</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Lifetime access to step-by-step Hindi & English video lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Dedicated agronomist WhatsApp support for daily crop checks</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Inquiry Sent Successfully!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our agronomy coordinator will contact you on WhatsApp with starter kit details.
                    </p>
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20inquired%20for%20Home%20Mushroom%20Kit%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle size={15} /> Open WhatsApp Directly
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
                        placeholder="e.g. Ananya Sharma"
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
                        <label className="block font-bold mb-1">City / State</label>
                        <input
                          type="text"
                          value={formData.cityState}
                          onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                          placeholder="e.g. Pune, Maharashtra"
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-1">Selected Package</label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        >
                          <option value="Home Grower Starter Kit (Spawn + Bags + Manual)">Home Starter Kit (Spawn + Bags)</option>
                          <option value="Complete Online Video Masterclass">Online Video Course (Hindi / Eng)</option>
                          <option value="Bulk F1 Spawn Order (5kg - 20kg)">Bulk Spawn Order (5kg - 20kg)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Security Calculation: 11 + 6 = ?</label>
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
                          <Loader2 size={14} className="animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Request Home Starter Kit Details
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-6">
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Essential questions on cultivating fresh mushrooms at home across India.
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
              Ready to Harvest Fresh Mushrooms at Home?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Order your pure F1 lab spawn, access step-by-step video training, and start harvesting 100% chemical-free mushrooms in 25 days.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20Mushroom%20Spawn%20for%20Home%20Cultivation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Home Agri-Desk (9203544140)
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

export const HomeMushroomFarmingGuideContent: React.FC = () => {
  return (
    <ModalProvider>
      <HomeMushroomFarmingGuideInner />
    </ModalProvider>
  );
};
