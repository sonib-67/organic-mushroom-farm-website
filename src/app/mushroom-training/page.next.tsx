
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, Users, Target, BookOpen, ExternalLink, Calendar,
  ArrowRight, ShieldCheck, MapPin, Play, Leaf, Award, Briefcase, Zap, Layers,
  Phone, Mail, MessageCircle, Star, Sparkles, Sprout
} from 'lucide-react';
import SEO from '@/src/components/SEO';
import MushroomSEOSections from '@/src/components/MushroomSEOSections';

const MushroomTraining = () => {
  const navigate = useNavigate();
  const faqs = [
    {
      q: "What is the duration of training?",
      a: "Online training is self-paced with lifetime access. Offline training is typically 3-5 days of intensive hands-on workshop.",
    },
    {
      q: "Is it beginner friendly?",
      a: "Absolutely! Our courses are designed from scratch, making them perfect for students, entrepreneurs, and hobbyists with zero farming background.",
    },
    {
      q: "Will I get support after training?",
      a: "Yes, we provide lifetime technical support for both online and offline students. You also get access to our private community for ongoing guidance.",
    },
  ];

  const curriculum = [
    {
      title: "Oyster Mushroom",
      desc: "Comprehensive guide to substrates, spawning, incubation, and cropping for high-yield Oyster cultivation.",
    },
    {
      title: "Button Mushroom",
      desc: "Step-by-step commercial method covering composting, casing, pinning, and temperature-controlled harvesting.",
    },
    {
      title: "Low-Cost Setup",
      desc: "Smart, budget-friendly infrastructure designs using locally available materials without compromising yield.",
    },
    {
      title: "Fogger System",
      desc: "Automation of humidity controls, nozzle selection, and installation layouts for maintaining ideal moisture levels.",
    },
    {
      title: "Temperature Control",
      desc: "Efficient insulation techniques and cooling/heating methods tailored for seasonal and round-the-year farming.",
    },
    {
      title: "Spawn Making",
      desc: "Scientific process of grain selection, sterilization, inoculation, and pure culture maintenance for high-quality seeds.",
    },
    {
      title: "Marketing",
      desc: "Strategic insights on target markets, B2B/B2C sales, branding, local vendor tie-ups, and digital positioning.",
    },
    {
      title: "Dry Mushroom",
      desc: "Standard solar and mechanical dehydration protocols to increase shelf-life and maintain premium color/quality.",
    },
    {
      title: "Mushroom Powder",
      desc: "Processing value-added products, grinding standards, packaging, and capturing health-supplement markets.",
    },
    {
      title: "Farm Setup",
      desc: "Commercial layout planning, ventilation design, rack systems, and hygiene protocols to minimize contamination.",
    },
  ];

  const whatYouGet = [
    {
      title: "Lifetime Support",
      desc: "Continuous community and expert assistance to solve your ongoing farming doubts anytime.",
      icon: ShieldCheck,
    },
    {
      title: "Live Training",
      desc: "Interactive live sessions with real-time Q&A, plus lifetime access to session recordings.",
      icon: Play,
    },
    {
      title: "WhatsApp Group",
      desc: "Access to an exclusive, active community of growers for real-time networking and knowledge sharing.",
      icon: MessageCircle,
    },
    {
      title: "Practical Guidance",
      desc: "Actionable, real-world insights from live farm operations rather than just textbook theory.",
      icon: TrendingUp,
    },
    {
      title: "Farm Setup Help",
      desc: "Personalized consultancy on designing blueprints and choosing the right equipment for your farm.",
      icon: Home,
    },
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png",
      alt: "Mushroom farming setup and commercial turnkey project in Jabalpur Madhya Pradesh India",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382178/Screenshot_2026-04-24_201138_wcjrml.png",
      alt: "Commercial mushroom training session online and offline India",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png",
      alt: "Students learning organic button and oyster mushroom farming",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378181/Screenshot_2026-02-22_165318_cyla5n.png",
      alt: "High yield oyster and button mushroom growth facility",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378147/img_5794_tjestw.png",
      alt: "Indoor climate controlled mushroom farm setup India USA",
    },
  ];

  return (
    <section id="training" className="relative pb-16 lg:pb-0 overflow-hidden">
      {/* Tiny bit of Hero style for internal section */}
      <div className="py-2 md:py-2 text-center px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            
          >
            <h1 className="text-sm md:text-sm lg:text-xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-4xl mx-auto" id="training-h1">
              <span className="gradient-text">Mushroom Cultivation</span> Training
            </h1>

            {/* Region Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6 w-full max-w-sm mx-auto">
              <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-[10px] md:text-xs shadow-lg shadow-purple-500/25 leading-tight flex-1">
                <Globe size={12} className="md:w-[14px] md:h-[14px]" /> India (INR)
              </span>
              <Link href="/usatraining" className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold text-[10px] md:text-xs transition-all hover:scale-105 active:scale-95 leading-tight flex-1">
                <Globe size={12} className="md:w-[14px] md:h-[14px]" /> USA & Global (USD)
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Training Options Section */}
      <div
        id="options"
        className="py-2 md:py-8 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent border-y border-purple-500/10 px-2 md:px-4"
      >
        <div className="max-w-7xl mx-auto" id="pricing-plans">
          <div className="text-center mb-4 md:mb-5">
            <h2 className="text-sm md:text-sm font-extrabold dark:text-white text-slate-900 mb-1 md:mb-2 tracking-tight uppercase">
                Choose Your <span className="gradient-text font-black">Training Program</span>
              </h2>
            <p className="dark:text-slate-400 text-slate-600 text-[10px] md:text-xs max-w-xl mx-auto font-medium leading-relaxed">
              Start with self-paced online courses or gain hands-on commercial experience at our practical farm workshops.
            </p>
          </div>

          {/* Group 1: Online Programs */}
          <div className="mb-5">
            <h4 className="text-sm md:text-sm font-black text-slate-800 dark:text-slate-200 mb-3 uppercase tracking-wider flex items-center justify-center gap-2 border-b dark:border-white/10 border-slate-200 pb-2">
              <Globe className="text-purple-500 animate-spin-slow shrink-0" size={14} />
              <span>1. Online Cultivation Programs (Self-Paced)</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-5 w-full max-w-5xl mx-auto items-stretch">
              {/* Basic Online Plan */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass relative flex flex-col p-3 md:p-3 rounded-[1rem] md:rounded-[1.5rem] border border-slate-200 dark:border-white/10 dark:bg-black/40 bg-white/50 backdrop-blur-md shadow-lg"
              >
                <div className="badge mb-2 self-start bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                  Beginner Friendly
                </div>
                <h4 className="text-sm md:text-xl font-black dark:text-white text-slate-900 mb-1 text-left tracking-tight">
                  Basic Online Training (₹299)
                </h4>
                
                {/* Pricing Display */}
                <div className="flex items-baseline gap-1.5 mb-3 border-b border-dashed border-slate-200 dark:border-white/10 pb-3 text-left">
                  <span className="text-sm md:text-xl font-black gradient-text">₹299</span>
                  <span className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                </div>

                {/* Learning Outcomes */}
                <div className="flex-1 text-left mb-4">
                  <h5 className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">What You Will Learn:</h5>
                  <ul className="space-y-1.5 text-[10px] md:text-xs">
                    {[
                      "**Basics**: Mushroom growth fundamentals.",
                      "**Varieties**: Grow Oyster & Button.",
                      "**Home Setup**: Small room/backyard setup.",
                      "**Spawning**: Substrate prep & safe bagging.",
                      "**Climate**: Basic temp & moisture control."
                    ].map((item, i) => {
                      const parts = item.split("**");
                      return (
                        <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>
                            {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">{p}</strong> : p)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Call to Action */}
                <button
                  onClick={() => navigate("/training-checkout", { state: { productType: "training_basic", price: "₹299" } })}
                  className="relative overflow-hidden w-full flex items-center justify-center rounded-[0.85rem] md:rounded-xl group transition-all backdrop-blur-md shadow-[0_8px_32px_rgba(167,139,250,0.15)] hover:shadow-[0_8px_32px_rgba(167,139,250,0.3)] border border-purple-400/40 dark:border-purple-300/30 bg-linear-to-r from-purple-500/10 via-fuchsia-400/10 to-indigo-500/10 dark:from-purple-900/30 dark:via-fuchsia-900/20 dark:to-indigo-900/30 hover:from-purple-500/20 hover:via-fuchsia-400/20 hover:to-indigo-500/20 dark:hover:from-purple-900/40 dark:hover:via-fuchsia-900/30 dark:hover:to-indigo-900/40 text-purple-950 dark:text-purple-100 font-black tracking-wide py-2.5 md:py-2 hover:scale-[1.01] active:scale-95 text-[11px] md:text-sm"
                >
                  <span className="z-10 flex items-center justify-center gap-1.5">
                    Join Mushroom Training <ArrowRight size={12} className="text-purple-700 dark:text-purple-300 md:w-3.5 md:h-3.5" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </button>
              </motion.div>

              {/* Advanced Online Plan */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative flex flex-col p-3 md:p-3 rounded-[1rem] md:rounded-[1.5rem] border-2 border-purple-500 dark:border-purple-400 dark:bg-purple-950/10 bg-purple-50/10 backdrop-blur-md shadow-2xl overflow-hidden"
              >
                {/* Premium Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="badge bg-purple-500 text-white dark:bg-purple-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                    Highly Recommended
                  </span>
                  <span className="text-[9px] md:text-[10px] text-purple-600 dark:text-purple-400 font-black uppercase tracking-widest flex items-center gap-1">
                    <Sparkles size={10} className="animate-spin-slow" /> BEST VALUE
                  </span>
                </div>
                
                <h4 className="text-sm md:text-xl font-black dark:text-white text-slate-900 mb-1 text-left tracking-tight">
                  Commercial Training (₹699)
                </h4>
                
                {/* Pricing Display */}
                <div className="flex items-baseline gap-1.5 mb-3 border-b border-dashed border-purple-500/20 pb-3 text-left">
                  <span className="text-sm md:text-xl font-black text-purple-600 dark:text-purple-400">₹699</span>
                  <span className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                </div>

                {/* Learning Outcomes */}
                <div className="flex-1 text-left mb-4">
                  <h5 className="text-[9px] md:text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-2">What You Will Learn:</h5>
                  <ul className="space-y-1.5 text-[10px] md:text-xs">
                    {[
                      "**All Basic Features**: Plus Milky Mushroom.",
                      "**Farm Setup**: Low-cost sheds & racks.",
                      "**Advanced Climate**: ACs, foggers & humidifiers.",
                      "**Protection**: Pest & disease management.",
                      "**Packaging**: Pro harvesting & shelf-life.",
                      "**Business**: B2B sales, ads & export.",
                      "**Bonus**: Certificate & Community access."
                    ].map((item, i) => {
                      const parts = item.split("**");
                      return (
                        <li key={i} className="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 size={12} className="text-purple-500 shrink-0 mt-0.5 md:w-3.5 md:h-3.5" />
                          <span>
                            {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">{p}</strong> : p)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Call to Action */}
                <button
                  onClick={() => navigate("/training-checkout", { state: { productType: "training_advanced", price: "₹699" } })}
                  className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] text-white font-black tracking-wide py-2.5 md:py-2 rounded-[0.85rem] md:rounded-xl transition-all flex items-center justify-center gap-1.5 hover:scale-[1.01] active:scale-95 text-[11px] md:text-sm"
                >
                  Join Mushroom Training <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Group 2: Offline Practical Workshops */}
          <div>
            <h4 className="text-sm md:text-sm font-black text-slate-800 dark:text-slate-200 mb-3 uppercase tracking-wider flex items-center justify-center gap-2 border-b dark:border-white/10 border-slate-200 pb-2">
              <Users className="text-emerald-500 shrink-0" size={14} />
              <span>2. Offline Practical Workshops (Hands-on Training at Farm)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-5 w-full max-w-5xl mx-auto items-stretch">
              {/* Offline Basic Plan (₹3000) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass relative flex flex-col p-3 md:p-3 rounded-[1rem] md:rounded-[1.5rem] border border-slate-200 dark:border-white/10 dark:bg-black/40 bg-white/50 backdrop-blur-md shadow-lg"
              >
                <div className="badge mb-2 self-start bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                  Focus: Button Mushroom Only
                </div>
                <h4 className="text-sm md:text-xl font-black dark:text-white text-slate-900 mb-1 text-left tracking-tight">
                  Standard Button Mushroom Workshop
                </h4>
                <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mb-3 text-left font-medium min-h-[30px] md:min-h-[36px]">
                  Intensive hands-on training focusing exclusively on commercial Button Mushroom farming.
                </p>
                
                {/* Pricing Display */}
                <div className="flex items-baseline gap-1.5 mb-3 border-b border-dashed border-slate-200 dark:border-white/10 pb-3 text-left">
                  <span className="text-sm md:text-xl font-black text-emerald-600 dark:text-emerald-400">₹3000</span>
                  <span className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Per Person</span>
                </div>

                {/* Outcomes */}
                <div className="flex-1 text-left mb-4">
                  <h5 className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">What You Will Get:</h5>
                  <ul className="space-y-1.5 text-[10px] md:text-xs">
                    {[
                      "**Practical Hands-On training** on compost preparation and casing soil.",
                      "**Live Demonstration** of compost bed layout & spawning procedures.",
                      "**Farm Visit & Live Demo** of our state-of-the-art Button Mushroom growing facilities.",
                      "**Temperature & Moisture Management** practical setup protocols.",
                      "**Standard Setup Guidance** and local market sales tips to launch your venture.",
                      "**Direct Q&A Session** with senior farm experts during the workshop."
                    ].map((item, i) => {
                      const parts = item.split("**");
                      return (
                        <li key={i} className="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5 md:w-3.5 md:h-3.5" />
                          <span>
                            {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">{p}</strong> : p)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a
                    href="tel:9203544140"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-[0.85rem] md:rounded-xl border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider"
                  >
                    <Phone size={12} className="md:w-3.5 md:h-3.5" /> Call
                  </a>
                  <a
                    href="https://wa.me/919203544140?text=I%20am%20interested%20in%203000%20Offline%20Button%20Mushroom%20Training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-[0.85rem] md:rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-md"
                  >
                    <MessageCircle size={12} className="md:w-3.5 md:h-3.5" /> WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Offline Master Plan (₹6000) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative flex flex-col p-3 md:p-3 rounded-[1rem] md:rounded-[1.5rem] border-2 border-emerald-500 dark:border-emerald-400 dark:bg-emerald-950/10 bg-emerald-50/10 backdrop-blur-md shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="badge mb-2 self-start bg-emerald-500 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                  Button, Oyster & Milky Mushrooms
                </div>
                <h4 className="text-sm md:text-xl font-black dark:text-white text-slate-900 mb-1 text-left tracking-tight">
                  Master Commercial Workshop
                </h4>
                <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mb-3 text-left font-medium min-h-[30px] md:min-h-[36px]">
                  Our ultimate 3-day premium practical training covers the entire commercial cultivation spectrum of all three major varieties.
                </p>
                
                {/* Pricing Display */}
                <div className="flex items-baseline gap-1.5 mb-3 border-b border-dashed border-emerald-500/20 pb-3 text-left">
                  <span className="text-sm md:text-xl font-black text-emerald-600 dark:text-emerald-400">₹6000</span>
                  <span className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Per Person</span>
                </div>

                {/* Outcomes */}
                <div className="flex-1 text-left mb-4">
                  <h5 className="text-[9px] md:text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-2">What You Will Get:</h5>
                  <ul className="space-y-1.5 text-[10px] md:text-xs">
                    {[
                      "**Multi-Variety Mastery**: Hands-on practicals for **Button**, **Oyster**, and high-yield summer **Milky** mushrooms.",
                      "**Turnkey Laboratory Visit**: Real-world study of spawn production, sterilization, and inoculation processes.",
                      "**Advanced Climate Setup Demo**: Learn installation of automatic foggers, humidifiers, exhausts, and AC units.",
                      "**Commercial Packaging & Cold Chain**: Packaging techniques to double the shelf-life of harvested mushrooms.",
                      "**Exclusive Market Tie-Ups**: Step-by-step strategies to sell in wholesale markets, tie up with local premium hotels & explore exports.",
                      "**1-on-1 Consultancy Project**: Get expert validation on your farm blueprint design and site viability assessment.",
                      "**Certification & Lifetime Access**: Master completion certificate and premium offline grower network membership."
                    ].map((item, i) => {
                      const parts = item.split("**");
                      return (
                        <li key={i} className="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5 md:w-3.5 md:h-3.5" />
                          <span>
                            {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">{p}</strong> : p)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a
                    href="tel:9203544140"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-[0.85rem] md:rounded-xl border border-emerald-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider"
                  >
                    <Phone size={12} className="md:w-3.5 md:h-3.5" /> Call
                  </a>
                  <a
                    href="https://wa.me/919203544140?text=I%20am%20interested%20in%206000%20Offline%20Master%20Mushroom%20Training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-[0.85rem] md:rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-md"
                  >
                    <MessageCircle size={12} className="md:w-3.5 md:h-3.5" /> WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* What You Will Get Section */}
      <div className="py-2 md:py-16 px-2 md:px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-4 md:mb-5">
            <h3 className="text-md md:text-xl font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-1 md:mb-4">
                What You Will <span className="gradient-text">Get</span>
              </h3>
            <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-[9px] md:text-sm">
              Everything you need to succeed in commercial mushroom farming.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-1.5 md:gap-5">
            {whatYouGet.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                
                className={`glass p-2 md:p-3 rounded-lg md:rounded-3xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-colors flex flex-col justify-start ${i === 4 ? "col-span-2 lg:col-span-1 mx-auto w-1/2 lg:w-full" : ""}`}
              >
                <div className="w-5 h-5 md:w-14 md:h-14 rounded-md md:rounded-2xl dark:bg-white/10 bg-black/10 flex items-center justify-center mb-1 bg-primary-start/10 text-primary-start group-hover:scale-110 transition-transform">
                  <item.icon className="w-3 h-3 md:w-6 md:h-6" />
                </div>
                <h4 className="text-[10px] md:text-xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-2 leading-tight">
                    {item.title}
                  </h4>
                <p className="dark:text-slate-400 text-slate-600 text-[8px] md:text-sm leading-tight md:leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="py-2 md:py-16 dark:bg-white/5 bg-black/5 px-2 md:px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-4 md:mb-5">
            <h3 className="text-md md:text-xl font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-1 md:mb-4">
                Training <span className="gradient-text">Curriculum</span>
              </h3>
            <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-[9px] md:text-sm">
              Master every aspect of the commercial cultivation ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-1.5 md:gap-5">
            {curriculum.map((item, i) => (
              <div
                key={i}
                className="glass p-2 md:p-3 rounded-lg md:rounded-2xl border dark:border-white/5 border-black/5 flex flex-col md:flex-row gap-1.5 md:gap-4 items-start hover:dark:bg-white/5 hover:bg-black/5 transition-colors"
              >
                <div className="w-4 h-4 md:w-10 md:h-10 shrink-0 rounded-full dark:bg-white/10 bg-black/10 flex items-center justify-center font-black dark:text-white text-slate-900 opacity-50 text-[8px] md:text-sm mb-0 md:mb-0">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="dark:text-slate-400 text-slate-600 text-[8px] md:text-sm leading-tight md:leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-2 md:py-24">
        <div className="max-w-7xl mx-auto px-2 md:px-4 text-center">
          <div className="badge mx-auto mb-1 md:mb-6 text-[8px] md:text-sm">
            Commercial Farming Essentials
          </div>
          <h3 className="text-md md:text-sm font-bold dark:text-white text-slate-900 mb-1 md:mb-6 uppercase tracking-tight">
            Need High-Yield Commercial{" "}
            <span className="gradient-text">Mushroom Seed?</span>
          </h3>
          <p className="dark:text-slate-400 text-slate-600 mb-3 md:mb-6 max-w-lg mx-auto text-[9px] md:text-sm leading-normal">
            High-quality lab-grown F1 hybrid spawn for Button, Oyster, and Milky mushrooms. Bulk delivery across India & global export.
          </p>
          <Link href="/spawn-seed"
            className="btn-primary px-4 md:px-6 py-2 md:py-2 rounded-lg md:rounded-xl text-[10px] md:text-sm inline-flex items-center gap-1.5 md:gap-3"
          >
            Explore Organic Spawn & Seeds{" "}
            <Sprout size={12} className="md:w-5 md:h-5" />
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-2 md:py-24">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-md md:text-xl font-bold dark:text-white text-slate-900 uppercase tracking-tight">
              Why Choose <span className="gradient-text">Our Training?</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-6">
            {[
              {
                title: "Expert Trainers",
                desc: "Learn from industry pioneers with years of commercial success in India and abroad.",
                icon: Award,
              },
              {
                title: "Practical Knowledge",
                desc: "No fluff, only commercial standard operating procedures that work globally.",
                icon: BookOpen,
              },
              {
                title: "Business Guidance",
                desc: "Expert tips on global marketing, B2B scaling, and ROI management.",
                icon: TrendingUp,
              },
              {
                title: "Training Support",
                desc: "Lifetime technical guidance for button and oyster mushroom setup.",
                icon: ShieldCheck,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass p-2 md:p-3 rounded-lg md:rounded-3xl border dark:border-white/5 border-black/5 text-center group hover:dark:bg-white/5 bg-black/5 transition-all"
              >
                <div className="w-6 h-6 md:w-16 md:h-16 rounded-md md:rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-1.5 md:mb-6 text-primary-start group-hover:scale-110 transition-transform">
                  <item.icon className="w-3 h-3 md:w-7 md:h-7" />
                </div>
                <h4 className="dark:text-white text-slate-900 font-bold text-[10px] md:text-sm mb-0.5 md:mb-3 leading-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-[8px] md:text-sm leading-tight md:leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-2 md:py-24 pt-0 md:pt-0">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="text-center mb-3 md:mb-5">
            <h3 className="text-md md:text-xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-4 uppercase tracking-tight">
              Experience our Commercial{" "}
              <span className="gradient-text">Ecosystem</span>
            </h3>
          </div>
          <div className="grid grid-cols-5 gap-1 md:gap-4 overflow-hidden">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-md md:rounded-2xl overflow-hidden glass border dark:border-white/10 border-black/10"
              >
                <img loading="lazy"
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                 width="800" height="600" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="py-2 md:py-24 dark:bg-white/5 bg-black/5 px-2 md:px-4">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h3 className="text-sm md:text-sm font-bold dark:text-white text-slate-900 mb-2 md:mb-5 border-l-2 md:border-l-4 border-primary-start pl-2 md:pl-6 uppercase tracking-tight">
            Start Your Commercial{" "}
            <span className="gradient-text">Mushroom Farming Journey</span> in
            India & Globally
          </h3>
          <div className="dark:text-slate-400 text-slate-600 space-y-2 md:space-y-6 leading-tight md:leading-relaxed text-[9px] md:text-sm">
            <p>
              Looking for the best{" "}
              <span className="dark:text-white text-slate-900 font-bold">
                mushroom farming training in India
              </span>
              ? At Organic Mushrooms Farm, we provide the most comprehensive{" "}
              <span className="dark:text-white text-slate-900 font-bold">
                button mushroom training course
              </span>{" "}
              designed specifically for the Indian climate and international
              global market standards. Our modules cover everything from raw
              substrate preparation to precision climate control.
            </p>
            <p>
              Our{" "}
              <span className="dark:text-white text-slate-900 font-bold">
                online mushroom farming training
              </span>{" "}
              is perfect for those who want to learn at their own pace. We
              comprehensively cover technical aspects of high-yield milky
              mushroom and oyster mushroom growing in detailed multi-page
              formats as well, ensuring you have a diverse commercial portfolio.
            </p>
            <p>
              If you're wondering{" "}
              <span className="dark:text-white text-slate-900 font-bold">
                how to start mushroom farming business
              </span>{" "}
              in USA, Australia, or India, our training is the ultimate first
              step. We provide the blueprint for building an indoor commercial
              mushroom plant that yields high-quality produce consistently. From
              students learning farming basics to established entrepreneurs
              scaling their units across Pan India, our curriculum caters to
              all.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-2 md:py-24 px-2 md:px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4 md:mb-5">
            <h3 className="text-md md:text-sm font-bold dark:text-white text-slate-900 mb-1 md:mb-4 uppercase tracking-tight">
              Common Commercial Farming{" "}
              <span className="gradient-text">Queries</span>
            </h3>
          </div>
          <div className="space-y-1.5 md:space-y-4">
            {faqs.map((faq, i) => (
              <Collapsible key={i} title={faq.q}>
                <p className="dark:text-slate-400 text-slate-600 leading-tight md:leading-relaxed text-[9px] md:text-sm">
                  {faq.a}
                </p>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MushroomTraining;
