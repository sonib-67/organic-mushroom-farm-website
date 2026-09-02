'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  ShieldCheck,
  Play,
  TrendingUp,
  Home,
  Award,
  BookOpen,
  Sprout,
  Users,
  ChevronDown,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';

export const TrainingPageContent: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is the duration of training?',
      a: 'Online training is self-paced with lifetime access so you can learn anytime at your convenience. Offline practical training is typically 3-5 days of intensive hands-on workshop at our commercial farm in Jabalpur, MP.',
    },
    {
      q: 'Is it beginner friendly?',
      a: 'Absolutely! Our courses are designed from scratch with step-by-step video tutorials and SOP manuals, making them perfect for farmers, students, entrepreneurs, and hobbyists with zero prior agricultural background.',
    },
    {
      q: 'Will I get support after training?',
      a: 'Yes! We provide lifetime technical and advisory support for both online and offline students. You also get access to our private WhatsApp and grower community for real-time problem solving and spawn ordering.',
    },
    {
      q: 'Can I sell mushrooms back or get marketing help?',
      a: 'Yes, we teach direct B2B marketing, local retail strategies, institutional hotel supply, and dry mushroom value addition. We also connect verified growers with regional buyers and supply chain partners.',
    },
    {
      q: 'What equipment do I need to start?',
      a: 'For beginners, simple rooms with basic humidity sprays and racking work. For commercial setups, we provide blueprints for AC temperature control, automated foggers, exhaust fans, and hygiene maintenance.',
    },
  ];

  const curriculum = [
    {
      title: 'Oyster Mushroom',
      desc: 'Comprehensive guide to substrates (straw/husk), chemical/steam sterilization, spawning, incubation, and cropping for high-yield Oyster cultivation.',
    },
    {
      title: 'Button Mushroom',
      desc: 'Step-by-step commercial method covering long/short composting, casing soil pasteurization, pinning induction, and temperature-controlled harvesting.',
    },
    {
      title: 'Low-Cost Setup',
      desc: 'Smart, budget-friendly infrastructure designs using bamboo, thatch, and locally available materials without compromising on yield or hygiene.',
    },
    {
      title: 'Fogger System',
      desc: 'Automation of humidity controls, nozzle selection (high-pressure misting), and installation layouts for maintaining ideal 85-95% moisture levels.',
    },
    {
      title: 'Temperature Control',
      desc: 'Efficient insulation techniques (PUF/thermocol) and cooling/heating methods tailored for seasonal and round-the-year commercial farming.',
    },
    {
      title: 'Spawn Making',
      desc: 'Scientific process of grain selection (wheat/sorghum), sterilization, mother culture inoculation, and pure culture maintenance for high-quality seeds.',
    },
    {
      title: 'Marketing & Sales',
      desc: 'Strategic insights on target markets, B2B/B2C sales, branding, local mandi & vegetable vendor tie-ups, export standards, and digital positioning.',
    },
    {
      title: 'Dry Mushroom Value Addition',
      desc: 'Standard solar and mechanical dehydration protocols to increase shelf-life up to 12 months and maintain premium export-grade color and texture.',
    },
    {
      title: 'Mushroom Powder & Products',
      desc: 'Processing value-added goods, hygienic grinding standards, FSSAI compliance, packaging, and capturing nutraceutical health-supplement markets.',
    },
    {
      title: 'Commercial Farm Blueprint',
      desc: 'Industrial layout planning, directional ventilation design, stainless/GI rack systems, and strict SOP hygiene protocols to eliminate contamination.',
    },
  ];

  const whatYouGet = [
    {
      title: 'Lifetime Support',
      desc: 'Continuous community and expert assistance to solve your ongoing farming doubts anytime.',
      icon: ShieldCheck,
    },
    {
      title: 'Live Training',
      desc: 'Interactive live sessions with real-time Q&A, plus lifetime access to session recordings.',
      icon: Play,
    },
    {
      title: 'WhatsApp Group',
      desc: 'Access to an exclusive, active community of growers for real-time networking and knowledge sharing.',
      icon: MessageCircle,
    },
    {
      title: 'Practical Guidance',
      desc: 'Actionable, real-world insights from live farm operations rather than just textbook theory.',
      icon: TrendingUp,
    },
    {
      title: 'Farm Setup Help',
      desc: 'Personalized consultancy on designing blueprints and choosing the right equipment for your farm.',
      icon: Home,
    },
  ];

  const galleryImages = [
    {
      src: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png',
      alt: 'Mushroom farming setup and commercial turnkey project in Jabalpur Madhya Pradesh India',
    },
    {
      src: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382178/Screenshot_2026-04-24_201138_wcjrml.png',
      alt: 'Commercial mushroom training session online and offline India',
    },
    {
      src: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png',
      alt: 'Students learning organic button and oyster mushroom farming',
    },
    {
      src: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378181/Screenshot_2026-02-22_165318_cyla5n.png',
      alt: 'High yield oyster and button mushroom growth facility',
    },
    {
      src: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378147/img_5794_tjestw.png',
      alt: 'Indoor climate controlled mushroom farm setup India USA',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-3 sm:px-6 md:px-8 max-w-7xl mx-auto text-center mb-8 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Award size={14} /> ISO 9001:2015 Certified Curriculum
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              <span className="gradient-text font-black">Mushroom Cultivation</span> Training Program
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium mb-6">
              Learn scientific commercial cultivation of Button, Oyster, and Milky mushrooms. 
              Choose online self-paced masterclasses or hands-on practical farm workshops.
            </p>

            {/* Region Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-md mx-auto">
              <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs md:text-sm shadow-lg shadow-purple-500/25 leading-tight flex-1">
                <Globe size={16} /> India (₹ INR Plans)
              </span>
              <Link
                href="/usatraining"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold text-xs md:text-sm transition-all hover:scale-105 active:scale-95 leading-tight flex-1 shadow-xs"
              >
                <Globe size={16} /> USA & Global ($ USD)
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Pricing Options Section */}
        <section
          id="pricing-plans"
          className="py-8 md:py-16 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent border-y border-purple-500/10 px-3 sm:px-6 md:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-2 tracking-tight uppercase">
                Choose Your <span className="gradient-text font-black">Training Program</span>
              </h2>
              <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
                Start with self-paced online courses or gain hands-on commercial experience at our practical farm workshops in Jabalpur, MP.
              </p>
            </div>

            {/* Group 1: Online Programs */}
            <div className="mb-12">
              <h3 className="text-sm md:text-base font-black text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center justify-center gap-2 border-b dark:border-white/10 border-slate-200 pb-2.5">
                <Globe className="text-purple-500 shrink-0" size={18} />
                <span>1. Online Cultivation Programs (Self-Paced with Lifetime Access)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto items-stretch">
                {/* Basic Online Plan */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 dark:bg-[#121824]/80 bg-white/80 backdrop-blur-md shadow-xl"
                >
                  <div className="self-start bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">
                    Beginner Friendly
                  </div>
                  <h4 className="text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1 text-left tracking-tight">
                    Basic Online Training
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 text-left font-medium">
                    Learn fundamentals of domestic & small-scale mushroom growing.
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4 border-b border-dashed border-slate-200 dark:border-white/10 pb-4 text-left">
                    <span className="text-2xl md:text-3xl font-black gradient-text">₹299</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                      One-Time Fee
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex-1 text-left mb-6">
                    <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      What You Will Learn:
                    </h5>
                    <ul className="space-y-2 text-xs md:text-sm">
                      {[
                        '**Basics**: Mushroom growth cycle and environmental parameters.',
                        '**Varieties**: Cultivation protocols for Oyster & Button mushrooms.',
                        '**Home Setup**: Low-cost indoor room/backyard infrastructure.',
                        '**Spawning**: Substrate selection, boiling/sterilizing & safe bagging.',
                        '**Climate**: Simple temperature and moisture management.',
                      ].map((item, i) => {
                        const parts = item.split('**');
                        return (
                          <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                            <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                            <span>
                              {parts.map((p, idx) =>
                                idx % 2 === 1 ? (
                                  <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">
                                    {p}
                                  </strong>
                                ) : (
                                  p
                                )
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <Link
                    href="/training-checkout"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-purple-400/40 dark:border-purple-300/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-900 dark:text-purple-200 font-black text-xs md:text-sm transition-all hover:scale-[1.01] active:scale-95 shadow-md"
                  >
                    Enroll in Basic (₹299) <ArrowRight size={14} />
                  </Link>
                </motion.div>

                {/* Advanced Online Plan */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col p-5 sm:p-6 rounded-2xl border-2 border-purple-500 dark:border-purple-400 dark:bg-purple-950/20 bg-purple-50/50 backdrop-blur-md shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-purple-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-xs">
                      Highly Recommended
                    </span>
                    <span className="text-[10px] text-purple-600 dark:text-purple-400 font-black uppercase tracking-widest flex items-center gap-1">
                      <Sparkles size={12} className="animate-spin" /> BEST VALUE
                    </span>
                  </div>

                  <h4 className="text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1 text-left tracking-tight">
                    Commercial Master Training
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 text-left font-medium">
                    Complete commercial training with certificate & lifetime direct mentorship.
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4 border-b border-dashed border-purple-500/30 pb-4 text-left">
                    <span className="text-2xl md:text-3xl font-black text-purple-600 dark:text-purple-400">₹699</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                      One-Time Fee
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex-1 text-left mb-6">
                    <h5 className="text-[11px] font-bold text-purple-400 uppercase tracking-widest mb-3">
                      What You Will Learn:
                    </h5>
                    <ul className="space-y-2 text-xs md:text-sm">
                      {[
                        '**All Basic Features**: Plus high-yield Milky Mushroom.',
                        '**Commercial Shed Setup**: Low-cost bamboo & modern GI racks.',
                        '**Advanced Climate Control**: Automated foggers, timers & AC setup.',
                        '**Protection**: Pest, green mold & disease mitigation protocols.',
                        '**Packaging & Cold Chain**: Professional harvesting & shelf-life.',
                        '**Business & Sales**: Direct hotel supply, mandi sales & B2B contracts.',
                        '**Bonus**: ISO Certification & Private WhatsApp Community Access.',
                      ].map((item, i) => {
                        const parts = item.split('**');
                        return (
                          <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                            <CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" />
                            <span>
                              {parts.map((p, idx) =>
                                idx % 2 === 1 ? (
                                  <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">
                                    {p}
                                  </strong>
                                ) : (
                                  p
                                )
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <Link
                    href="/training-checkout"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white font-black text-xs md:text-sm transition-all hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:scale-[1.01] active:scale-95"
                  >
                    Enroll in Commercial (₹699) <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Group 2: Offline Practical Workshops */}
            <div>
              <h3 className="text-sm md:text-base font-black text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center justify-center gap-2 border-b dark:border-white/10 border-slate-200 pb-2.5">
                <Users className="text-emerald-500 shrink-0" size={18} />
                <span>2. Offline Practical Workshops (Hands-on Training at Farm in Jabalpur, MP)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto items-stretch">
                {/* Offline Basic (₹3000) */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 dark:bg-[#121824]/80 bg-white/80 backdrop-blur-md shadow-xl"
                >
                  <div className="self-start bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">
                    Focus: Button Mushroom Only
                  </div>
                  <h4 className="text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1 text-left tracking-tight">
                    Standard Button Mushroom Workshop
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 text-left font-medium">
                    Intensive hands-on training focusing exclusively on commercial Button Mushroom farming.
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4 border-b border-dashed border-slate-200 dark:border-white/10 pb-4 text-left">
                    <span className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400">₹3000</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                      Per Person (Hands-on)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex-1 text-left mb-6">
                    <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      What You Will Get:
                    </h5>
                    <ul className="space-y-2 text-xs md:text-sm">
                      {[
                        '**Practical Hands-On training** on compost formulation, turning cycles & casing soil.',
                        '**Live Demonstration** of compost bed layout & spawning procedures.',
                        '**Farm Visit & Live Demo** of our state-of-the-art climate-controlled growing rooms.',
                        '**Temperature & Moisture Management** practical setup protocols.',
                        '**Direct Q&A Session** with senior commercial farm agronomists.',
                      ].map((item, i) => {
                        const parts = item.split('**');
                        return (
                          <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>
                              {parts.map((p, idx) =>
                                idx % 2 === 1 ? (
                                  <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">
                                    {p}
                                  </strong>
                                ) : (
                                  p
                                )
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a
                      href="tel:+919203544140"
                      className="flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-wider"
                    >
                      <Phone size={14} /> Call Us
                    </a>
                    <a
                      href="https://wa.me/919203544140?text=I%20am%20interested%20in%203000%20Offline%20Button%20Mushroom%20Training"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all text-xs font-bold uppercase tracking-wider shadow-md"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                  </div>
                </motion.div>

                {/* Offline Master (₹6000) */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col p-5 sm:p-6 rounded-2xl border-2 border-emerald-500 dark:border-emerald-400 dark:bg-emerald-950/20 bg-emerald-50/50 backdrop-blur-md shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="self-start bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 shadow-xs">
                    Button, Oyster & Milky Mushrooms
                  </div>
                  <h4 className="text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1 text-left tracking-tight">
                    Master Commercial Workshop
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 text-left font-medium">
                    Our ultimate 3-day practical training covering all commercial varieties and setup engineering.
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4 border-b border-dashed border-emerald-500/30 pb-4 text-left">
                    <span className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400">₹6000</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                      Per Person (All Inclusive)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex-1 text-left mb-6">
                    <h5 className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest mb-3">
                      What You Will Get:
                    </h5>
                    <ul className="space-y-2 text-xs md:text-sm">
                      {[
                        '**Multi-Variety Mastery**: Practicals for **Button**, **Oyster**, and high-yield summer **Milky**.',
                        '**Turnkey Laboratory Visit**: Spawn production, mother culture, sterilization & laminar air flow.',
                        '**Advanced Climate Setup Demo**: Learn installation of automatic foggers, exhausts & AC units.',
                        '**Commercial Packaging & Cold Chain**: Preservation techniques to extend fresh mushroom shelf-life.',
                        '**1-on-1 Consultancy Project**: Expert validation on your land layout and government subsidy guidance.',
                        '**Master Certification & Grower Network**: Lifetime membership in our premium commercial growers club.',
                      ].map((item, i) => {
                        const parts = item.split('**');
                        return (
                          <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>
                              {parts.map((p, idx) =>
                                idx % 2 === 1 ? (
                                  <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">
                                    {p}
                                  </strong>
                                ) : (
                                  p
                                )
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a
                      href="tel:+919203544140"
                      className="flex items-center justify-center gap-1.5 py-3 rounded-xl border border-emerald-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-wider"
                    >
                      <Phone size={14} /> Call Us
                    </a>
                    <a
                      href="https://wa.me/919203544140?text=I%20am%20interested%20in%206000%20Offline%20Master%20Mushroom%20Training"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all text-xs font-bold uppercase tracking-wider shadow-md"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-12 md:py-20 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight mb-2">
              What You Will <span className="gradient-text font-black">Get</span>
            </h3>
            <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-xs md:text-sm font-medium">
              Everything required to launch, scale, and profit from a commercial mushroom setup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whatYouGet.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md hover:border-emerald-500/40 transition-all flex flex-col items-start shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <h4 className="text-base font-bold dark:text-white text-slate-900 mb-1.5 leading-tight">
                  {item.title}
                </h4>
                <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Training Curriculum (10 Modules) */}
        <section className="py-12 md:py-20 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-3 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight mb-2">
                10-Module Training <span className="gradient-text font-black">Curriculum</span>
              </h3>
              <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-xs md:text-sm font-medium">
                Master every technical and commercial phase from grain to market.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {curriculum.map((item, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md flex flex-col justify-start hover:border-purple-500/40 transition-all shadow-xs"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-xs mb-3">
                    {i + 1}
                  </div>
                  <h4 className="text-sm md:text-base font-bold dark:text-white text-slate-900 mb-1.5 leading-tight">
                    {item.title}
                  </h4>
                  <p className="dark:text-slate-400 text-slate-600 text-[11px] md:text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spawn Supply Banner CTA */}
        <section className="py-12 md:py-16 px-3 sm:px-6 md:px-8 max-w-5xl mx-auto text-center">
          <div className="p-6 md:p-10 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/30 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-widest mb-3">
              Lab Certified F1 Spawn
            </div>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-3 uppercase tracking-tight">
              Need High-Yield Commercial <span className="gradient-text font-black">Mushroom Seed / Spawn?</span>
            </h3>
            <p className="dark:text-slate-400 text-slate-600 mb-6 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
              Buy high-purity lab-grown F1 hybrid spawn for Button, Oyster, and Milky mushrooms. Direct express cold-chain delivery across all states in India & international exports.
            </p>
            <Link
              href="/spawn-seed"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm inline-flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
            >
              Order Mushroom Spawn & Seeds <Sprout size={16} />
            </Link>
          </div>
        </section>

        {/* Real Experience & Farm Gallery */}
        <section className="py-10 md:py-16 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-2 uppercase tracking-tight">
              Our Training & Commercial <span className="gradient-text font-black">Facilities</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Real glimpse into our practical farm setups, workshops, and lab infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md group relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Detailed SEO Guide Section */}
        <section className="py-12 md:py-16 bg-slate-100/50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-3 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-base sm:text-xl font-black dark:text-white text-slate-900 mb-4 border-l-4 border-emerald-500 pl-3 uppercase tracking-tight">
              Start Your Commercial <span className="gradient-text font-black">Mushroom Farming Journey</span> in India & Globally
            </h3>
            <div className="dark:text-slate-400 text-slate-600 space-y-4 leading-relaxed text-xs sm:text-sm">
              <p>
                Looking for the best{' '}
                <strong className="dark:text-white text-slate-900">mushroom farming training in India</strong>? At
                Organic Mushrooms Farm, we provide the most comprehensive{' '}
                <strong className="dark:text-white text-slate-900">commercial mushroom training course</strong> designed
                specifically for Indian climate zones, temperature variances, and international global standards.
              </p>
              <p>
                Our{' '}
                <strong className="dark:text-white text-slate-900">online mushroom farming training</strong> gives you
                self-paced flexibility with HD video lectures, downloadable SOP templates, compost formulas, and
                climate monitoring sheets.
              </p>
              <p>
                Whether you want to cultivate button mushrooms on pasteurized compost, grow fast-yielding oyster mushrooms
                on wheat straw, or produce protein-rich milky mushrooms in summer, our curriculum covers complete
                end-to-end guidance including government subsidy application procedures (MIDH, NHM).
              </p>
            </div>
          </div>
        </section>

        {/* Interactive FAQ Accordion */}
        <section className="py-12 md:py-20 px-3 sm:px-6 md:px-8 max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-2 uppercase tracking-tight">
              Frequently Asked <span className="gradient-text font-black">Questions</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Clear answers to common questions about our training courses and practical sessions.
            </p>
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
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm dark:text-slate-200 text-slate-800"
                  >
                    <span>{faq.q}</span>
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
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-1">
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
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Elements (AI, Sticky buttons, Mobile Bottom Bar) */}
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

      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
    </div>
  );
};
