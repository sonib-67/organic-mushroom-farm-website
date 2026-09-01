
'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Menu, X, Phone, Mail, Instagram, Twitter, Linkedin, Facebook, Youtube, 
  Send, CheckCircle2, TrendingUp, Users, Sprout, ShieldCheck, Calculator, 
  BookOpen, Clock, ShoppingCart, Award, ArrowRight, ExternalLink, ChevronDown, 
  ChevronUp, MessageCircle, MapPin, Briefcase, Play, Download, Layers, Shield, 
  Zap, Info, Quote, Home, Waves, Calendar, Globe, Sparkles, ArrowLeft, Images
} from 'lucide-react';
import SEO from '@/src/components/SEO';
import MushroomSEOSections from '@/src/components/MushroomSEOSections';


const Hero = () => {
  const features = [
    { text: "Complete Turnkey Project Setup", link: "/articles/turnkey-mushroom-farm-setup-india" },
    { text: "Mushroom Farming Training Program" },
    { text: "Government Subsidy Documentation" },
    { text: "Technical Support India & Worldwide" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-12 md:pt-40 md:pb-24 overflow-hidden section-padding"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr,0.8fr] gap-5 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 1, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          
          className="text-center md:text-left"
        >
          <div className="text-[10px] md:text-sm font-bold text-green-700 dark:text-green-500 uppercase tracking-[0.2em] mb-4 md:mb-6">
            Button, Oyster, Milky, Shiitake & More | Setup, Training & Business
            Support
          </div>
          <h1 className="text-[1.5rem] md:text-sm lg:text-xl font-bold dark:text-white text-slate-900 leading-tight mb-4 md:mb-5 tracking-tighter">
            <span className="gradient-text">
              Expert Mushroom Farming Training & Setup
            </span>{" "}
            <br />– Complete Solutions for All Mushroom Types
          </h1>
          <p className="text-[0.8125rem] md:text-sm dark:text-slate-400 text-slate-600 mb-5 md:mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Complete commercial methodology, calculators, and turnkey solutions for profitable button, oyster, and milky mushroom farming across India and worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-3 gap-x-8 mb-6 dark:border-white/5 border-black/5 border-y py-2 md:py-2">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <CheckCircle2 size={16} className="text-primary-start" />
                {f.link ? (
                  <Link href={f.link} className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white tracking-tight hover:text-primary-start transition-colors">
                    {f.text}
                  </Link>
                ) : (
                  <span className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    {f.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mb-6 max-w-md mx-auto md:mx-0">
            <Link href="/training"
              className="group flex items-center justify-between p-3 rounded-2xl border border-purple-500/30 bg-linear-to-r from-purple-500/5 via-fuchsia-400/5 to-indigo-500/5 dark:from-purple-900/10 dark:via-fuchsia-900/10 dark:to-indigo-900/10 hover:from-purple-500/15 hover:via-fuchsia-400/15 hover:to-indigo-500/15 transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300">
                  <Award size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    Mushroom Cultivation Training
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                    Comprehensive online & offline certification programs
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
            </Link>

            <Link href="/turnkey-projects"
              className="group flex items-center justify-between p-3 rounded-2xl border border-emerald-500/30 bg-linear-to-r from-emerald-500/5 via-teal-400/5 to-cyan-500/5 dark:from-emerald-900/10 dark:via-teal-900/10 dark:to-cyan-900/10 hover:from-emerald-500/15 hover:via-teal-400/15 hover:to-cyan-500/15 transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                  <CheckCircle2 size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    Mushroom Farm Setup
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                    Turnkey commercial farm setup & consultancy
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 md:mb-5">
            <Link href="/enquiry"
              className="btn-primary w-full sm:w-auto px-6 min-h-[50px] rounded-xl text-sm shadow-2xl shadow-brand-blue/30 flex items-center justify-center font-bold bg-[#7b51f8] hover:bg-[#6841d8] text-white"
            >
              Enquiry Now
            </Link>
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto px-6 min-h-[50px] rounded-xl text-sm flex items-center justify-center font-medium"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:9203544140"
              className="btn-outline w-full sm:w-auto px-6 min-h-[50px] rounded-xl text-sm flex items-center justify-center font-medium"
            >
              Call Now: 9203544140
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-6 pt-4">
            <div>
              <div className="text-sm md:text-xl font-bold dark:text-white text-slate-900">
                1.5k+
              </div>
              <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">
                Active Commercial Units
              </div>
            </div>
            <div>
              <div className="text-sm md:text-xl font-bold dark:text-white text-slate-900">
                98.91%
              </div>
              <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">
                Success Rate Globally
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3D Visual Mock (Glass Card) */}
        <motion.div
          initial={{ opacity: 1, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          
          className="relative lg:block hidden"
        >
          <div className="absolute inset-0 gradient-bg opacity-20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative glass rounded-[2.5rem] p-3 border-white/20 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center">
                  <ShieldCheck className="text-accent" />
                </div>
                <div>
                  <div className="dark:text-white text-slate-900 font-bold">
                    Turnkey Setup Project
                  </div>
                  <div className="text-xs text-slate-500">
                    Quality Certified Infrastructure
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">
                Active
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: "Commercial Room Size",
                  value: "18 x 70 ft Standard",
                  icon: Layers,
                },
                {
                  label: "Annual High Yield",
                  value: "35,000+ kg",
                  icon: TrendingUp,
                },
                {
                  label: "Cooling Sys (India)",
                  value: "Daikin Industrial",
                  icon: Zap,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between dark:bg-white/5 bg-black/5 p-3 rounded-2xl border dark:border-white/5 border-black/5"
                >
                  <div className="flex items-center gap-3">
                    <stat.icon
                      className="dark:text-slate-400 text-slate-600"
                      size={18}
                    />
                    <span className="text-sm dark:text-slate-300 text-slate-700 font-medium">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-sm dark:text-white text-slate-900 font-bold">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-3 rounded-3xl bg-linear-to-br from-white/10 to-transparent border dark:border-white/10 border-black/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold dark:text-slate-300 text-slate-700">
                  Phase 1 Commercial Cycle
                </span>
                <span className="text-[10px] text-accent font-bold">
                  LIVE PROGRESS
                </span>
              </div>
              <div className="h-2 w-full dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full gradient-bg"
                ></motion.div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold uppercase">
                <span>Composting</span>
                <span>Pasteurization</span>
                <span>Cropping</span>
              </div>
            </div>
          </div>

          {/* Floating Small Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-3 rounded-2xl border-white/20 flex items-center gap-3 shadow-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={16} />
            </div>
            <div className="pr-4">
              <div className="text-[10px] dark:text-slate-400 text-slate-600 font-bold uppercase">
                Global ROI Verified
              </div>
              <div className="text-xs dark:text-white text-slate-900 font-bold">
                120% Yearly Avg
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const EcosystemFlow = () => {
  const steps = [
    {
      label: "Raw Material",
      icon: ShoppingCart,
      href: "/process/raw-material",
    },
    {
      label: "Compost Prep",
      icon: Layers,
      href: "/process/compost-preparation",
    },
    { label: "Production Room", icon: Home, href: "/process/production-room" },
    {
      label: "Precision Harvest",
      icon: Sprout,
      href: "/process/precision-harvest",
    },
    { label: "Cold Chain", icon: Zap, href: "/process/cold-chain" },
    {
      label: "Market Linkage",
      icon: TrendingUp,
      href: "/process/market-linkage",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5">
          <div className="badge mx-auto mb-4">Commercial Operation Model</div>
          <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
            Complete Commercial Farming{" "}
            <span className="gradient-text">Ecosystem Flow & Setup</span>
          </h2>
        </div>

        <div className="flex items-center gap-4 md:gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <Link href={s.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-4 min-w-[140px] md:min-w-[160px] snap-center shrink-0 cursor-pointer group"
                >
                  <div className="icon-box w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center transition-all">
                    <s.icon size={32} />
                  </div>
                  <span className="text-[11px] md:text-[14px] font-bold dark:text-slate-300 text-slate-700 text-center uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {s.label}
                  </span>
                </motion.div>
              </Link>
              {i < steps.length - 1 && (
                <div className="shrink-0 flex items-center justify-center mx-2 md:mx-4">
                  <ArrowRight
                    size={24}
                    className="text-slate-400 dark:text-white/80"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const chooseItems = [
    {
      title: "Cost Efficiency (15–25% Savings)",
      subtitle:
        "Direct manufacturing eliminates middlemen, ensuring 15–25% lower setup costs.",
      points: [
        "In-house PUF panel production",
        "Own rack fabrication unit",
        "Direct pricing advantage",
        "Strict quality control",
      ],
      icon: TrendingUp,
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Smart B2B Pricing",
      subtitle:
        "Wholesale pricing model for every mushroom farmer regardless of project size.",
      points: [
        "Wholesale pricing model",
        "Volume discounts",
        "Transparent breakdown",
        "No hidden costs",
      ],
      icon: Briefcase,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Nationwide & Global Execution",
      subtitle:
        "Delivery and execution across India & worldwide with expert setup teams.",
      points: [
        "Coverage across all states & UTs in India",
        "International project support",
        "Local installation teams",
        "End-to-end logistics",
      ],
      icon: MapPin,
      color: "from-blue-600/20 to-cyan-500/20",
    },
    {
      title: "Price Match Guarantee",
      subtitle:
        "Lowest cost guarantee without compromising on commercial project quality.",
      points: [
        "Guaranteed lowest pricing",
        "Market comparison support",
        "Extra discount on matching quotes",
        "No quality compromise",
      ],
      icon: ShieldCheck,
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Certified Quality",
      subtitle:
        "Built on international recognized standards for commercial mushroom cultivation.",
      points: [
        "Premium materials only",
        "Multi-level quality checks",
        "Standardized processes",
        "Long-term durability",
      ],
      icon: Award,
      color: "from-amber-400/20 to-orange-500/20",
    },
    {
      title: "Reliable Partnership",
      subtitle:
        "We help you build highly profitable commercial mushroom businesses.",
      points: [
        "Lifetime technical support",
        "Expert B2B consultation",
        "Proven project success",
        "Farmer-first approach",
      ],
      icon: Users,
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-start/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 360 View Video Section Added Before Title */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-6">
          <div className="badge mb-4">Virtual Tour</div>
          <h2 className="mb-4 uppercase tracking-tight">
            Commercial Mushroom Farm <span className="gradient-text">360° View</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-sm leading-relaxed mb-5">
            Explore our state-of-the-art commercial mushroom farm setup. Watch this 360-degree view video to understand the infrastructure and scientific approach we implement for high-yield turnkey projects.
          </p>
          <div className="rounded-3xl overflow-hidden shadow-2xl border dark:border-white/10 bg-black aspect-video relative">
            <video
              className="w-full h-full object-cover"
              controls
              preload="none"
              poster="/images/mushroom360viewimage.jpeg"
              title="Commercial Mushroom Farm 360 View Setup - Modern Infrastructure and Scientific Cultivation"
              aria-label="360 Degree Virtual Tour of Commercial Mushroom Farm Setup displaying modern infrastructure and high-yield turnkey project cultivation"
            >
              <source src="/video/mushroom360viewfarmsetup.mp4" type="video/mp4" />
              <track kind="captions" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* End of 360 View Section */}

        <div className="text-center mb-5 md:mb-20">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            className="badge mx-auto mb-4"
          >
            Mushroom Infrastructure Leaders
          </motion.div>
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            className="mb-4"
          >
            Why Choose{" "}
            <span className="gradient-text">
              <Link href="/states">
                Organic Mushrooms Farm for Your Project?
              </Link>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            className="max-w-2xl mx-auto"
          >
            India’s most trusted commercial mushroom farming infrastructure
            partner delivering unmatched value, transparency, and high-yield
            performance globally.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5">
          {chooseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass h-full card-padding rounded-2xl border dark:border-white/5 border-black/5 flex flex-col shadow-2xl relative overflow-hidden">
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${item.color} blur-[50px] pointer-events-none opacity-20`}
                ></div>

                <div className="w-8 h-8 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary-start" size={24} />
                </div>

                <h2 className="text-sm md:text-xl font-bold dark:text-white text-slate-900 mb-3">
                    {item.title}
                  </h2>

                <p className="mb-6 flex-1 italic text-slate-500">
                  {item.subtitle}
                </p>

                <ul className="space-y-2">
                  {item.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-[12px] md:text-xs font-semibold dark:text-slate-400 text-slate-600"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary-start"></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FarmingModels = () => {
  const [activeTab, setActiveTab] = useState<"fixed" | "custom">("fixed");
  const [customArea, setCustomArea] = useState<number>(1000);
  const [customBudget, setCustomBudget] = useState<number>(500000);

  const getRecommendedSetup = () => {
    if (customArea >= 5000 || customBudget >= 5000000) {
      return {
        title: "Industrial Turnkey Mushroom Unit",
        desc: "Fully automated climate control with Phase-II bunker integration for high commercial yield.",
      };
    }
    if (customArea >= 1500 || customBudget >= 1500000) {
      return {
        title: "Automated Climate Control Room",
        desc: "Ideal for year-round commercial button mushroom production with PUF panels.",
      };
    }
    return {
      title: "Small-Scale Mushroom Tray System",
      desc: "Cost-effective manual setup for seasonal farming and beginners.",
    };
  };

  const models = [
    {
      name: "Starter Package",
      size: "18 x 30 ft",
      investment: "₹2-12 Lakh",
      yield: "800-1000 kg/cycle",
      features: ["Small Scale", "Manual Ops", "Local Markets"],
      label: "Beginner Choice",
      recommended: false,
    },
    {
      name: "Standard Commercial Model",
      size: "18 x 70 ft",
      investment: "₹15-42 Lakh",
      yield: "3000-3500 kg/cycle",
      features: ["Automated Climate", "Export Ready", "High ROI"],
      label: "Most Popular",
      recommended: true,
    },
    {
      name: "Industrial Factory Unit",
      size: "Compost + 4 Rooms",
      investment: "₹1.5Cr - 2.5Cr",
      yield: "15,000+ kg/cycle",
      features: ["Full Ecosystem", "Full Automation", "Global B2B Supply"],
      label: "Business Pro",
      recommended: false,
    },
  ];

  return (
    <section id="farming-models" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 md:mb-6 gap-6 text-center lg:text-left items-center lg:items-end">
          <div className="max-w-xl">
            <div className="badge mb-4 mx-auto lg:mx-0">Investment Paths</div>
            <h2 className="mb-4">
              Commercial Farming <span className="gradient-text">Models</span>,
              Setup Cost & ROI
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Scientifically designed mushroom grow rooms optimized for Indian
              and diverse global climate conditions.
            </p>
          </div>
          <div className="glass p-1 rounded-xl flex gap-1 w-fit">
            <button
              onClick={() => setActiveTab("fixed")}
              className={`px-4 py-2 rounded-lg text-[12px] font-bold transition-all ${activeTab === "fixed" ? "dark:bg-white/10 bg-black/10 dark:text-white text-slate-900" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Fixed Models
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={`px-4 py-2 rounded-lg text-[12px] font-bold transition-all ${activeTab === "custom" ? "dark:bg-white/10 bg-black/10 dark:text-white text-slate-900" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Custom Build
            </button>
          </div>
        </div>

        {activeTab === "fixed" ? (
          <div className="grid lg:grid-cols-3 gap-6 md:gap-5">
            {models.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                
                className={`relative glass card-padding flex flex-col ${m.recommended ? "border-primary-mid/40 shadow-2xl lg:scale-105 z-10" : "dark:border-white/5 border-black/5"}`}
              >
                {m.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full btn-primary text-[9px] font-black uppercase tracking-widest dark:text-white text-slate-900 shadow-xl">
                    Recommended Model
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-primary-start text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                    {m.label}
                  </div>
                  <h3 className="dark:text-white text-slate-900 tracking-tight">
                    {m.name}
                  </h3>
                  <div className="mt-2 text-slate-500 text-[12px] font-medium">
                    {m.size} Space Required
                  </div>
                </div>

                <div className="space-y-3 mb-5 flex-1">
                  <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">
                      Investment Setup Cost
                    </div>
                    <div className="text-xl font-bold dark:text-white text-slate-900">
                      {m.investment}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">
                      Expected Yield
                    </div>
                    <div className="text-xl font-bold dark:text-white text-slate-900">
                      {m.yield}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-5">
                  {m.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 dark:text-slate-400 text-slate-600 text-[12px] md:text-sm"
                    >
                      <CheckCircle2 size={14} className="text-primary-start" />{" "}
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/model-details"
                  className={`w-full min-h-[44px] py-2 rounded-xl font-bold transition-all text-sm flex justify-center items-center ${m.recommended ? "btn-primary" : "btn-outline"}`}
                >
                  Get Details
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-3 md:p-12 rounded-[3rem] border dark:border-white/10 border-black/10"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-6">
                  Interactive Custom Mushroom Setup Builder
                </h3>
                <div className="space-y-8">
                  <div>
                    <label className="flex justify-between text-sm font-bold dark:text-slate-300 text-slate-700 mb-4">
                      <span>Available Area</span>
                      <span className="text-primary-start">
                        {customArea} sq. ft.
                      </span>
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={customArea}
                      onChange={(e) => setCustomArea(Number(e.target.value))}
                      className="w-full form-range"
                    />
                  </div>
                  <div>
                    <label className="flex justify-between text-sm font-bold dark:text-slate-300 text-slate-700 mb-4">
                      <span>Available Budget</span>
                      <span className="text-primary-start">
                        ₹{(customBudget / 100000).toFixed(1)} Lakhs
                      </span>
                    </label>
                    <input
                      type="range"
                      min="50000"
                      max="10000000"
                      step="50000"
                      value={customBudget}
                      onChange={(e) => setCustomBudget(Number(e.target.value))}
                      className="w-full form-range"
                    />
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-[2rem] dark:bg-white/5 bg-black/5 border border-primary-start/20 text-center flex flex-col items-center justify-center">
                <ShieldCheck size={48} className="text-primary-start mb-6" />
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">
                  Recommended Commercial Setup
                </div>
                <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-4 leading-tight">
                    {getRecommendedSetup().title}
                  </h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-5 max-w-sm">
                  {getRecommendedSetup().desc}
                </p>
                <Link href="/model-details"
                  className="btn-primary px-5 py-2 rounded-xl text-sm font-bold"
                >
                  View Detailed Specs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const MushroomComparison = () => {
  const mushrooms = [
    {
      name: "Button Mushroom",
      difficulty: "High Difficulty",
      speed: "Industrial",
      color: "bg-blue-500",
      text: "Premium market share, controlled environment commercial setup.",
    },
    {
      name: "Oyster Mushroom",
      difficulty: "Low–Medium",
      speed: "Easy Growth",
      color: "bg-green-500",
      text: "Low investment start, versatile substrate requirements. Ideal for beginners and detailed multi-page online training.",
    },
    {
      name: "Milky Mushroom",
      difficulty: "Seasonal",
      speed: "High Velocity",
      color: "bg-yellow-500",
      text: "Regional demand focus, high temperature preference perfect for Indian climate.",
    },
    {
      name: "Shiitake & Lion's Mane",
      difficulty: "Premium",
      speed: "Export Grade",
      color: "bg-amber-700",
      text: "High specialty value, intensive cycle management. Best for international markets like USA & Australia.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5">
          <div className="badge mx-auto mb-4">
            Top Searched Product Variants
          </div>
          <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
            <Link href="/blog" className="hover:text-current transition-colors">
              High-Yield Commercial Mushroom{" "}
              <span className="gradient-text">Genetics</span>
            </Link>
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block glass border dark:border-white/5 border-black/5 rounded-3xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="dark:bg-white/5 bg-black/5 border-b dark:border-white/10 border-black/10">
              <tr>
                <th className="px-5 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Mushroom Type
                </th>
                <th className="px-5 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Difficulty
                </th>
                <th className="px-5 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Complexity
                </th>
                <th className="px-5 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Market Segment
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mushrooms.map((m, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${m.color}`}></div>
                      <span className="font-bold dark:text-white text-slate-900 text-sm">
                        {m.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-[12px] dark:text-slate-400 text-slate-600 font-medium">
                    {m.difficulty}
                  </td>
                  <td className="px-5 py-5 text-[12px] dark:text-slate-400 text-slate-600 font-medium">
                    {m.speed}
                  </td>
                  <td className="px-5 py-5 text-[12px] text-slate-500 leading-relaxed font-medium">
                    {m.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Swipe Cards */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 snap-x scrollbar-hide">
          {mushrooms.map((m, i) => (
            <div
              key={i}
              className="min-w-[280px] snap-center glass border dark:border-white/10 border-black/10 p-3 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-4 h-4 rounded-full ${m.color} shadow-lg shadow-black/50`}
                ></div>
                <h3 className="dark:text-white text-slate-900 font-bold text-sm">
                  {m.name}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase mb-1">
                    Difficulty
                  </div>
                  <div className="text-[11px] font-bold dark:text-slate-300 text-slate-700">
                    {m.difficulty}
                  </div>
                </div>
                <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase mb-1">
                    Scale
                  </div>
                  <div className="text-[11px] font-bold dark:text-slate-300 text-slate-700">
                    {m.speed}
                  </div>
                </div>
              </div>
              <p className="text-[13px] dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [bags, setBags] = useState(2000);
  const [sellingPrice, setSellingPrice] = useState(120);
  const [operatingCost, setOperatingCost] = useState(40);

  const yieldPerBag = 1.5; // kg
  const estimatedInvestment = bags * 1200; // estimated investment formula

  const monthlyProfit = useMemo(() => {
    return (sellingPrice - operatingCost) * (bags * yieldPerBag);
  }, [sellingPrice, operatingCost, bags]);

  const paybackPeriod = useMemo(() => {
    const yearlyProfit = monthlyProfit * 5; // 5 cycles a year usually
    if (yearlyProfit <= 0) return 0;
    return (estimatedInvestment / yearlyProfit) * 12; // in months
  }, [monthlyProfit, estimatedInvestment]);

  const webmcpSchema = {
    "@context": "https://webmcp.dev",
    "@type": "WebMCP",
    tool: {
      name: "home_roi_estimator",
      description:
        "Estimate your mushroom farming profit, investment returns, and payback period on the home page.",
      inputSchema: {
        type: "object",
        properties: {
          bags: {
            type: "number",
            minimum: 500,
            maximum: 10000,
            description: "Number of spawn bags or cultivation beds",
          },
          sellingPrice: {
            type: "number",
            minimum: 80,
            maximum: 250,
            description: "Market selling price per kg in Indian Rupees (INR)",
          },
          operatingCost: {
            type: "number",
            minimum: 20,
            maximum: 80,
            description:
              "Labor and electricity operating expense per kg in Indian Rupees (INR)",
          },
        },
        required: ["bags", "sellingPrice", "operatingCost"],
      },
    },
  };

  return (
    <section id="roi-calculator" className="section-padding overflow-hidden">
      <script type="application/ld+json">{JSON.stringify(webmcpSchema)}</script>
      <div className="max-w-7xl mx-auto">
        <div
          className="glass card-padding border dark:border-white/10 border-black/10 relative"
          data-webmcp-tool="home_roi_estimator"
          data-webmcp-description="Estimate commercial mushroom farming profits based on spawn bags count, selling price, and operating expenses."
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-primary-start/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="badge mb-4 mx-auto lg:mx-0">Profit Analytics</div>
              <h2 className="mb-4">
                <Link href="/roi-calculator" className="hover:text-current transition-colors">
                  Personalized Mushroom Business{" "}
                  <span className="gradient-text">ROI Estimator</span>
                </Link>
              </h2>
              <p className="mb-5 max-w-lg mx-auto lg:mx-0">
                Estimate your mushroom farming profits based on real-time market
                averages.
              </p>

              <div className="space-y-8 text-left">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label
                      id="bags-label"
                      htmlFor="bags-range-input"
                      className="text-[9px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      Number of Bags/Beds
                    </label>
                    <span className="text-xl font-bold dark:text-white text-slate-900">
                      {bags}
                    </span>
                  </div>
                  <input
                    id="bags-range-input"
                    aria-labelledby="bags-label"
                    aria-label="Number of Bags or Beds"
                    data-webmcp-property="bags"
                    data-webmcp-description="Number of spawn bags or cultivation beds"
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={bags}
                    onChange={(e) => setBags(Number(e.target.value))}
                    className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label
                      id="price-label"
                      htmlFor="price-range-input"
                      className="text-[9px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      Market Selling Price (₹/kg)
                    </label>
                    <span className="text-xl font-bold dark:text-white text-slate-900">
                      ₹{sellingPrice}
                    </span>
                  </div>
                  <input
                    id="price-range-input"
                    aria-labelledby="price-label"
                    aria-label="Market Selling Price per Kilogram"
                    data-webmcp-property="sellingPrice"
                    data-webmcp-description="Market selling price per kg of mushrooms in Indian Rupees (INR)"
                    type="range"
                    min="80"
                    max="250"
                    step="5"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label
                      id="cost-label"
                      htmlFor="cost-range-input"
                      className="text-[9px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      Labor/Electricity Cost (₹/kg)
                    </label>
                    <span className="text-xl font-bold dark:text-white text-slate-900">
                      ₹{operatingCost}
                    </span>
                  </div>
                  <input
                    id="cost-range-input"
                    aria-labelledby="cost-label"
                    aria-label="Labor and Electricity Cost per Kilogram"
                    data-webmcp-property="operatingCost"
                    data-webmcp-description="Labor and electricity operating cost per kg in Indian Rupees (INR)"
                    type="range"
                    min="20"
                    max="80"
                    step="2"
                    value={operatingCost}
                    onChange={(e) => setOperatingCost(Number(e.target.value))}
                    className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="glass p-3 rounded-3xl border dark:border-white/10 border-black/10 text-center">
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">
                  Cycle Net Profit
                </div>
                <div
                  className={
                    monthlyProfit > 0
                      ? "text-sm font-black text-green-400"
                      : "text-sm font-black text-red-400"
                  }
                >
                  ₹{monthlyProfit.toLocaleString()}
                </div>
              </div>
              <div className="glass p-3 rounded-3xl border dark:border-white/10 border-black/10 text-center">
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">
                  Estimated Payback Period
                </div>
                <div className="text-sm font-black text-primary-start">
                  {paybackPeriod > 0
                    ? `${paybackPeriod.toFixed(1)} Months`
                    : "N/A"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CriticalParameters = () => {
  const params = [
    {
      label: "Production Temp",
      value: "14–18",
      unit: "°C",
      icon: Zap,
      color: "text-blue-400",
    },
    {
      label: "Air Humidity",
      value: "85–95",
      unit: "%",
      icon: Waves,
      color: "text-cyan-400",
    },
    {
      label: "CO₂ Level",
      value: "< 1000",
      unit: "ppm",
      icon: Info,
      color: "text-green-400",
    },
    {
      label: "Spawn Run Temp",
      value: "24–26",
      unit: "°C",
      icon: TrendingUp,
      color: "text-orange-400",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5">
          <div className="badge mx-auto mb-4">Precision Metrics</div>
          <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
            <Link href="/mushroom-types" className="hover:text-current transition-colors">
              Critical{" "}
              <span className="gradient-text">
                Parameters for High-Yield Production
              </span>
            </Link>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-[13px] md:text-sm">
            Scientific boundaries for consistent commercial yields in organic
            mushroom farming across India and USA.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {params.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ translateZ: 20 }}
              className="glass p-3 md:p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 text-center group"
            >
              <div className="w-8 h-8 rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:text-white transition-all">
                <p.icon size={22} className={p.color} />
              </div>
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">
                {p.label}
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <Counter value={p.value} />
                <span className="text-[14px] font-black text-slate-500">
                  {p.unit}
                </span>
              </div>
              <div className="mt-4 h-1 w-12 dark:bg-white/10 bg-black/10 rounded-full mx-auto overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  className={`h-full bg-linear-to-r ${i % 2 === 0 ? "from-primary-start to-primary-mid" : "from-accent to-brand-purple"}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductionSOP = () => {
  const steps = [
    {
      title: "Phase-I Composting",
      days: "8–10 Days",
      temp: "60–70°C",
      param: "C:N Ratio Control",
      icon: Layers,
    },
    {
      title: "Phase-II Pasteurization",
      days: "5–7 Days",
      temp: "57–60°C",
      param: "Ammonia Level < 10ppm",
      icon: Shield,
    },
    {
      title: "Filling & Spawning",
      days: "1–2 Days",
      temp: "25–28°C",
      param: "Sterile Handling",
      icon: Sprout,
    },
    {
      title: "Spawn Run",
      days: "14–16 Days",
      temp: "24–26°C",
      param: "90% Rel. Humidity",
      icon: Clock,
    },
    {
      title: "Casing Application",
      days: "1–2 Days",
      temp: "22–24°C",
      param: "Soil pH 7.5-8.0",
      icon: Layers,
    },
    {
      title: "Pinning Initiation",
      days: "7–10 Days",
      temp: "16–18°C",
      param: "CO2 Flush < 800ppm",
      icon: Zap,
    },
    {
      title: "Cropping",
      days: "25–30 Days",
      temp: "14–16°C",
      param: "Peak Harvest Quality",
      icon: ShoppingCart,
    },
  ];

  return (
    <section id="sop" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5 md:mb-20">
          <div className="badge mx-auto mb-4">60-Day Commercial Cycle</div>
          <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
            Commercial Mushroom Production Cycle{" "}
            <span className="gradient-text">SOPs</span>
          </h2>
          <p className="max-w-lg mx-auto text-[11px] md:text-sm dark:text-slate-400 text-slate-600">
            Standardized operational procedures for high-yield button and oyster mushroom cultivation globally.
          </p>
        </div>

        {/* Desktop View: Horizontal Scroll / Cards */}
        <div className="hidden md:flex gap-6 overflow-x-auto pb-12 snap-x scrollbar-hide">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              className="min-w-[300px] snap-center glass border dark:border-white/5 border-black/5 p-3 rounded-3xl relative group transition-all"
            >
              <div className="absolute top-0 right-0 p-3 font-black text-slate-800 text-sm -z-10 group-hover:text-primary-start/10 transition-colors">
                {i + 1}
              </div>
              <div className="w-8 h-8 rounded-2xl bg-primary-start/10 flex items-center justify-center mb-6 text-primary-start group-hover:bg-primary-start group-hover:text-white transition-all">
                <s.icon size={20} />
              </div>
              <h3 className="dark:text-white text-slate-900 font-bold text-sm mb-4">
                {s.title}
              </h3>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">
                    Duration
                  </span>
                  <span className="dark:text-white text-slate-900">
                    {s.days}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">
                    Temperature
                  </span>
                  <span className="text-accent">{s.temp}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">
                    Key Param
                  </span>
                  <span className="text-green-400">{s.param}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Accordion (Collapsible) */}
        <div className="md:hidden space-y-2">
          {steps.map((s, i) => (
            <Collapsible key={i} title={`${i + 1}. ${s.title}`}>
              <div className="grid grid-cols-2 gap-4 py-2">
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Duration
                  </div>
                  <div className="dark:text-white text-slate-900 font-bold">
                    {s.days}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Temp
                  </div>
                  <div className="text-accent font-bold">{s.temp}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Key Parameter
                  </div>
                  <div className="text-green-400 font-bold">{s.param}</div>
                </div>
              </div>
            </Collapsible>
          ))}
        </div>

        {/* Progress Timeline Indicator */}
        <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto px-4">
          {steps.map((_, i) => (
            <React.Fragment key={i}>
              <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-[10px] font-bold dark:text-white text-slate-900 shadow-lg">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px dark:bg-white/10 bg-black/10 mx-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  const data = [
    { feature: "Commercial Insulation", us: "80-100mm PUF", others: "40-50mm" },
    {
      feature: "Commercial AC Systems",
      us: "Daikin Industrial",
      others: "Split ACs",
    },
    { feature: "Commercial Racking", us: "MS / GI", others: "Bamboo" },
    { feature: "Global Support", us: "Lifetime Video", others: "1 Year" },
    {
      feature: "Government Subsidy",
      us: "Full Document Support",
      others: "No Support",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-6">
          <div className="badge mx-auto mb-4">Commercial Setup Comparison</div>
          <h2 className="mb-4 uppercase tracking-tight">
            The Commercial <span className="gradient-text">Organic Edge</span>
          </h2>
          <p className="max-w-xl mx-auto">
            Why we are the preferred commercial partner nationwide and globally.
          </p>
        </div>

        <div className="glass border dark:border-white/10 border-black/10 overflow-hidden relative shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="dark:bg-white/5 bg-black/5 border-b dark:border-white/10 border-black/10">
                  <th className="px-4 md:px-5 py-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    Features
                  </th>
                  <th className="px-4 md:px-5 py-2 text-[9px] font-black dark:text-white text-slate-900 uppercase tracking-widest gradient-bg">
                    Organic
                  </th>
                  <th className="px-4 md:px-5 py-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="px-4 md:px-5 py-5 text-[11px] font-bold dark:text-slate-400 text-slate-600">
                      {row.feature}
                    </td>
                    <td className="px-4 md:px-5 py-5 text-[12px] font-bold dark:text-white text-slate-900 tracking-tight">
                      {row.us}
                    </td>
                    <td className="px-4 md:px-5 py-5 text-[12px] font-medium text-slate-500">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mushroomType: "Button Mushroom",
    projectSize: "Medium Scale",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, error: "" });

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || "N/A",
            mushroomType: formData.mushroomType,
            projectSize: formData.projectSize,
            message: formData.message,
            _subject: `New Home Page Inquiry from ${formData.name} (${formData.mushroomType})`,
          }),
        },
      );

      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: "" });
        setFormData({
          name: "",
          phone: "",
          email: "",
          mushroomType: "Button Mushroom",
          projectSize: "Medium Scale",
          message: "",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || await response.text() || "Failed to send.";
        console.error("[FormSubmit] Server error:", errorMessage);
        setFormState({
          submitting: false,
          succeeded: false,
          error: errorMessage,
        });
      }
    } catch (err: any) {
      console.error("[FormSubmit] Submit error:", err);
      setFormState({
        submitting: false,
        succeeded: false,
        error: err.message || "An unexpected error occurred.",
      });
    }
  };

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="home-inquiry"
    >
      <div className="absolute inset-0 gradient-bg opacity-5 -z-10 blur-[120px]"></div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass p-3 md:p-12 lg:p-16 rounded-[3rem] border dark:border-white/10 border-black/10 relative overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-primary-start/10 blur-[80px] rounded-full group-hover:bg-primary-start/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-brand-purple/10 blur-[80px] rounded-full group-hover:bg-brand-purple/20 transition-all duration-700"></div>

          <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10">
            {/* Left Column: Context & Info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="badge">Direct Inquiry</div>
              <h2 className="text-xl md:text-xl font-bold dark:text-white text-slate-900 tracking-tight leading-tight">
                Start Your Commercial{" "}
                <span className="gradient-text">Mushroom Project</span> Today
              </h2>
              <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                Connect directly with India's most trusted commercial mushroom
                agriculture consultants. Submit your details to get a customized
                site feasibility evaluation & project setup design model layout
                matching your resource availability.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Free pre-feasibility site evaluation guidance",
                  "Direct commercial G1 spawn delivery options",
                  "Subsidy assistance (NHB, NABARD & State-wise)",
                  "Complete HVAC, compost unit & lab setups",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-start/10 flex items-center justify-center mt-0.5 shrink-0">
                      <CheckCircle2 size={14} className="text-primary-start" />
                    </div>
                    <span className="text-sm dark:text-slate-300 text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-700/20 pt-6 flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20starting%20mushroom%20farming.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto px-6 py-2 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-black"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919203544140"
                  className="btn-outline w-full sm:w-auto px-6 py-2 rounded-xl text-center text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2"
                >
                  Call +91 9203544140
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form / Success Screen */}
            <div className="lg:col-span-7">
              <div className="glass p-3 md:p-3 rounded-[2rem] border dark:border-white/5 border-black/5 dark:bg-slate-900/40 bg-white/40 backdrop-blur-xl">
                {formState.succeeded ? (
                  <motion.div
                    initial={{ opacity: 1, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4 space-y-6"
                  >
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto scale-110 border border-green-500/20">
                      <CheckCircle2 size={36} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold dark:text-white text-slate-900">
                          Inquiry Received!
                        </h3>
                      <p className="dark:text-slate-400 text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                        Thank you for your response. Our commercial farming
                        expert specialists will review your project scale and
                        contact you within 2 to 4 working hours.
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setFormState({
                          submitting: false,
                          succeeded: false,
                          error: "",
                        })
                      }
                      className="px-6 py-2.5 rounded-lg text-xs bg-primary-start/10 hover:bg-primary-start/20 text-primary-start transition-colors font-bold uppercase tracking-wider"
                    >
                      Send Another Query
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-6 text-center">
                    <h3 className="text-sm font-bold dark:text-white text-slate-900">
                      Send Instant Inquiry
                    </h3>
                    <p className="text-slate-500 text-sm font-semibold mb-6">
                      Have questions about Mushroom Farming, Spawn, or Turnkey Projects? 
                      Submit your detailed requirements via our dedicated enquiry form and our experts will get back to you!
                    </p>
                    <Link href="/enquiry"
                      className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all text-sm"
                    >
                      Enquiry Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatesSection = () => {
  const allStates = [
    "Madhya Pradesh",
    "Maharashtra",
    "Uttar Pradesh",
    "Bihar",
    "Delhi",
    "Rajasthan",
    "Gujarat",
    "Punjab",
    "Haryana",
    "Chhattisgarh",
    "Jharkhand",
    "West Bengal",
    "Uttarakhand",
    "Karnataka",
    "Tamil Nadu",
    "Telangana",
    "Andhra Pradesh",
    "Kerala",
    "Himachal Pradesh",
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="badge mx-auto mb-4">Global & National Service Area</div>
        <h2 className="mb-4 uppercase tracking-tight">
          Active Commercial Project{" "}
          <span className="gradient-text">
            Hubs Globally
          </span>
        </h2>
        <p className="max-w-3xl mx-auto mb-6 font-medium leading-relaxed dark:text-slate-400 text-slate-600">
          We provide commercial mushroom farming training and turnkey setup
          services across all states of India and key international markets,
          ensuring precision and high yield for every climate zone globally.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {allStates.map((state) => (
            <a
              key={state}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(state + " India")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 glass border dark:border-white/5 border-black/5 rounded-full text-[10px] font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-primary-start hover:bg-primary-start/20 transition-all"
            >
              {state}
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/pan-india-global-operations"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full gradient-bg font-extrabold text-sm text-white shadow-lg shadow-primary-start/20 hover:scale-105 transition-all"
          >
            <Globe size={16} className="animate-spin-slow" />
            <span>Pan India & Global Operations</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Visually Hidden SEO Content Container */}
        <div
          className="sr-only absolute w-1 h-1 p-0 -m-1 overflow-hidden clip-rect-0 border-0 pointer-events-none opacity-0"
          aria-hidden="true"
        >
          <p>
            Our expert teams provide <strong>mushroom training in India</strong>{" "}
            and <strong>mushroom farm setup India</strong> services in Madhya
            Pradesh, Maharashtra, Uttar Pradesh, Bihar, Delhi, Rajasthan,
            Gujarat, Punjab, Haryana, Chhattisgarh, Jharkhand, and other major
            regions. We are committed to building the most successful{" "}
            <strong>button mushroom farming business</strong> network globally.
          </p>
          <p>
            <strong>
              Serving Pan India Cities, Towns & Villages for Commercial Mushroom
              Setups:
            </strong>{" "}
            Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolkata,
            Surat, Pune, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal,
            Visakhapatnam, Pimpri-Chinchwad, Patna, Vadodara, Ghaziabad,
            Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan-Dombivli,
            Vasai-Virar, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Navi
            Mumbai, Allahabad, Howrah, Ranchi, Gwalior, Jabalpur, Coimbatore,
            Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Chandigarh,
            Solapur, Hubli-Dharwad, Bareilly, Moradabad, Mysore, Gurgaon,
            Aligarh, Jalandhar, Tiruchirappalli, Bhubaneswar, Salem,
            Mira-Bhayandar, Warangal, Thiruvananthapuram, Bhiwandi, Saharanpur,
            Guntur, Amravati, Bikaner, Noida, Jamshedpur, Bhilai, Cuttack,
            Firozabad, Kochi, Nellore, Bhavnagar, Dehradun, Durgapur, Asansol,
            Rourkela, Nanded, Kolhapur, Ajmer, Akola, Gulbarga, Jamnagar,
            Ujjain, Loni, Siliguri, Jhansi, Ulhasnagar, Jammu,
            Sangli-Miraj-Kupwad, Mangalore, Erode, Belgaum, Kurnool, Ambattur,
            Rajahmundry, Tirunelveli, Malegaon, Gaya, Udaipur, Kakinada,
            Davanagere, Kozhikode, Maheshtala, Rajpur Sonarpur, Bokaro, South
            Dumdum, Bellary, Patiala, Gopalpur, Agartala, Bhagalpur,
            Muzaffarnagar, Bhatpara, Panihati, Latur, Dhule, Rohtak, Korba,
            Bhilwara, Brahmapur, Muzaffarpur, Ahmednagar, Mathura, Kollam,
            Avadi, Kadapa, Rajahmundry, Bilaspur, Shahjahanpur, Satara, Bijapur,
            Rampur, Shivamogga, Chandrapur, Junagadh, Thrissur, Alwar,
            Bardhaman, Kulti, Nizamabad, Parbhani, Tumkur, Khammam,
            Uzhavarkarai, Bihar Sharif, Panipat, Darbhanga, Bally, Aizawl,
            Dewas, Ichalkaranji, Karnal, Bathinda, Jalna, Eluru, Barasat, Kirari
            Suleman Nagar, Purnia, Satna, Mau, Sonipat, Farrukhabad, Sagar,
            Rourkela, Durg, Imphal, Ratlam, Hapur, Arrah, Anantapur, Karimnagar,
            Etawah, Ambernath, North Dumdum, Bharatpur, Begusarai, New Delhi,
            Gandhidham, Baranagar, Tiruvottiyur, Pondicherry, Sikar,
            Thoothukudi, Rewa, Mirzapur, Raichur, Pali, Ramagundam, Silchar,
            Haridwar, Vijayanagaram, Tenali, Nagercoil, Sri Ganganagar, Karawal
            Nagar, Mango, Thanjavur, Bulandshahr, Uluberia, Katni, Sambhal,
            Singrauli, Nadiad, Secunderabad, Naihati, Yamunanagar, Bidhannagar,
            Pallavaram, Bidar, Munger, Panchkula, Burhanpur, Raurkela Industrial
            Township, Kharagpur, Dindigul, Gandhinagar, Hospet, Nangloi Jat,
            Malda, Ongole, Deoghar, Chapra, Haldia, Khandwa, Nandyal, Morena,
            Amroha, Anand, Bhind, Bhusawal, Orai, Bahraich, Vellore, Mehsana,
            Raiganj, Sirsa, Danapur, Serampore, Sultan Pur Majra, Guna, Jaunpur,
            Panvel, Shivpuri, Surendranagar Dudhrej, Unnao, Chinsurah,
            Alappuzha, Kottayam, Machilipatnam, Shimla, Adoni, Udupi, Katihar,
            Proddatur, Mahbubnagar, Saharsa, Dibrugarh, Jorhat, Hazaribagh,
            Hindupur, Nagaon, Sasaram, Hajipur, including all tier-2, tier-3
            cities, localized rural towns and villages across Madhya Pradesh,
            Uttar Pradesh, Maharashtra, Bihar, Rajasthan, Gujarat, Punjab,
            Haryana, and South India.
          </p>
          <p>
            <strong>
              Global Reach & International Mushroom Farming Consultancy:
            </strong>{" "}
            USA (United States of America), Australia, UK (United Kingdom),
            Canada, UAE (Dubai, Abu Dhabi), Saudi Arabia, South Africa, Kenya,
            Nigeria, Europe, Germany, France, Italy, Spain, Netherlands, New
            Zealand, Singapore, Malaysia, Philippines, Vietnam, Japan, South
            Korea, and emerging agricultural hubs worldwide. Supplying organic
            spawn, industrial setup consultancy, and B2B market linkage
            globally.
          </p>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => { 
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <SEO
        title="Organic Mushrooms Farm | Setup, Spawn & Training"
        description="Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP."
        schemas={[
          generateGlobalFAQSchema(),
          generateGlobalProductsSchema(),
          generateGlobalServiceSchema(),
        ]}
      />
      <Hero />
      <EcosystemFlow />
      <WhyChooseUs />
      <FarmingModels />
      <MushroomComparison />
      <ROICalculator />
      <CriticalParameters />
      <ProductionSOP />

      {/* Compost Units Section */}
      <section
        id="compost-units"
        className="section-padding relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <div className="badge mx-auto mb-4">Commercial Infrastructure</div>
            <h2 className="mb-4 uppercase">
              <Link href="/equipment" className="hover:text-current transition-colors">
                Standard Commercial{" "}
                <span className="gradient-text">Compost Units</span>
              </Link>
            </h2>
            <p className="max-w-xl mx-auto text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Complete Phase-I + Phase-II commercial infrastructure with 15-day cycles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-6">
            {[
              {
                name: "2000-Bag Commercial Unit (20T)",
                desc: "14x30 System",
                investment: "₹15-17 Lakh",
                stats: { bags: "2,000", cap: "20t", cycle: "15d" },
              },
              {
                name: "3000-Bag Industrial Unit (30T)",
                desc: "14x40 System",
                investment: "₹19-21 Lakh",
                stats: { bags: "3,000", cap: "30t", cycle: "15d" },
                recommended: true,
              },
            ].map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                
                className={`glass card-padding rounded-3xl border dark:border-white/5 border-black/5 relative ${comp.recommended ? "shadow-2xl shadow-brand-blue/10 border-primary-mid/30" : ""}`}
              >
                {comp.recommended && (
                  <div className="absolute top-4 right-5 badge text-[8px]">
                    Best Value
                  </div>
                )}
                <h3 className="dark:text-white text-slate-900 mb-2">
                  {comp.name}
                </h3>
                <div className="text-slate-500 mb-6 font-medium text-[13px]">
                  {comp.desc}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(comp.stats).map(([k, v]) => (
                    <div
                      key={k}
                      className="p-2 md:p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 text-center"
                    >
                      <div className="text-[8px] text-slate-500 font-bold uppercase mb-1">
                        {k}
                      </div>
                      <div className="text-sm md:text-sm font-bold dark:text-white text-slate-900">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 shadow shadow-brand-blue/10 ring-1 ring-white/10 ring-inset mb-6">
                  <span className="text-[11px] font-semibold dark:text-slate-400 text-slate-600">
                    Est. CapEx
                  </span>
                  <span className="text-sm font-bold dark:text-white text-slate-900">
                    {comp.investment}
                  </span>
                </div>

                <Link href="/compost-unit-specs"
                  className="btn-primary w-full py-2 rounded-xl text-[12px] font-bold min-h-[44px] flex items-center justify-center"
                >
                  Get Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <div className="badge mx-auto mb-4">Farmer Testimonials</div>
            <h2 className="mb-4 uppercase">
              Real Commercial <span className="gradient-text">Voices</span>
            </h2>
            <p>Join 5000+ commercial farmers trained by our expert team.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Rahul S.",
                location: "Bhopal",
                text: "Turnkey setup changed my perspective. Outstanding support even after 2 years.",
                avatar: "RS",
              },
              {
                name: "Deepak M.",
                location: "Indore",
                text: "Professional SOPs. Yield exceeded expectations by 20% due to climate design.",
                avatar: "DM",
              },
              {
                name: "Suresh K.",
                location: "Sagar",
                text: "Honest ROI analysis. No hidden costs, just pure business growth.",
                avatar: "SK",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                className="glass p-3 rounded-3xl border dark:border-white/5 border-black/5 flex flex-col h-full"
              >
                <Quote
                  size={20}
                  className="text-primary-start mb-4 opacity-40"
                />
                <p className="dark:text-slate-300 text-slate-700 text-[13px] italic mb-6 leading-relaxed flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center font-bold dark:text-white text-slate-900 text-[10px] shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="dark:text-white text-slate-900 font-bold text-[12px] tracking-tight">
                      {t.name}
                    </div>
                    <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">
                      {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section Placeholder */}
      <section id="market" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="badge mx-auto mb-4">Global Market Linkage</div>
          <h2 className="mb-4 uppercase tracking-tight">
            Global{" "}
            <span className="gradient-text">Mushroom B2B Marketplace</span>
          </h2>
          <p className="max-w-xl mx-auto mb-5 font-medium">
            Connect directly with verified commercial buyers and sellers
            worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
            {[
              {
                type: "Seller",
                title: "Mushroom Spawn (Seed)",
                desc: "Lab-grade organic F1 hybrid spawn.",
                price: "Bulk Order",
                linkType: "page",
                to: "/spawn-seed",
              },
              {
                type: "Seller",
                title: "Fresh Organic Mushrooms",
                desc: "A-grade commercial button mushrooms.",
                price: "Live Market Rate",
                linkType: "external",
                to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Fresh%20Mushrooms",
              },
              {
                type: "Seller",
                title: "Dry Mushrooms Export",
                desc: "Long shelf life, premium export quality.",
                price: "Wholesale Only",
                linkType: "external",
                to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Dry%20Mushrooms",
              },
            ].map((ad, i) => {
              const CardWrapper = ad.linkType === "page" ? Link : "a";
              return (
                <CardWrapper
                  key={i}
                  to={ad.linkType === "page" ? ad.to : undefined}
                  href={ad.linkType === "external" ? ad.to : undefined}
                  target={ad.linkType === "external" ? "_blank" : undefined}
                  rel={
                    ad.linkType === "external"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass p-3 rounded-2xl border dark:border-white/5 border-black/5 relative group cursor-pointer block"
                >
                  <div
                    className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400`}
                  >
                    {ad.type}
                  </div>
                  <h3 className="dark:text-white text-slate-900 mb-1 mt-4 tracking-tight">
                    {ad.title}
                  </h3>
                  <div className="text-[12px] text-slate-500 mb-6">
                    {ad.desc}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="dark:text-white text-slate-900 font-bold text-sm dark:bg-white/5 bg-black/5 px-3 py-2 rounded-xl">
                      {ad.price}
                    </span>
                    <span className="w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 dark:text-slate-400 text-slate-600 flex items-center justify-center group-hover:bg-primary-start group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources & SOPs Section */}
      <section id="resources" className="section-padding bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-start">
            <div>
              <div className="badge mb-6 mx-auto lg:mx-0">
                Documentation & Resources
              </div>
              <h2 className="mb-6 uppercase text-center lg:text-left">
                <Link href="/cities" className="hover:text-current transition-colors">
                  Commercial Production{" "}
                  <span className="gradient-text">SOPs & Guides</span>
                </Link>
              </h2>
              <p className="mb-6 text-center lg:text-left">
                Standard operating procedures used by commercial mushroom
                specialists nationwide and internationally.
              </p>

              <div className="md:hidden">
                {[
                  {
                    title: "Tunnel Ops",
                    content:
                      "Details for Phase-II Pasteurization Tunnel operations and parameters.",
                    id: "tunnel-ops",
                  },
                  {
                    title: "Spawning",
                    content:
                      "Comprehensive checklist for spawning and incubation stages.",
                    id: "spawning",
                  },
                  {
                    title: "Casing",
                    content:
                      "Material preparation guide for optimal casing layer.",
                    id: "casing",
                  },
                  {
                    title: "Hygiene",
                    content:
                      "Disease control protocols and farm hygiene standards.",
                    id: "hygiene",
                  },
                ].map((sop, i) => (
                  <Collapsible key={i} title={sop.title}>
                    {sop.content}
                    <Link href={`/sops#${sop.id}`}
                      className="flex items-center gap-2 text-primary-start font-bold mt-3"
                    >
                      Get Details <ArrowRight size={14} />
                    </Link>
                  </Collapsible>
                ))}
              </div>

              <div className="hidden md:block space-y-4">
                {[
                  {
                    name: "Phase-II Commercial Pasteurization Tunnel Ops",
                    id: "tunnel-ops",
                  },
                  { name: "Spawning & Incubation Checklist", id: "spawning" },
                  { name: "Casing Material Preparation Guide", id: "casing" },
                  {
                    name: "Disease Control & Commercial Farm Hygiene Protocols",
                    id: "hygiene",
                  },
                ].map((sop) => (
                  <Link href={`/sops#${sop.id}`}
                    key={sop.name}
                    className="flex items-center gap-4 p-3 glass rounded-2xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen size={18} className="text-primary-start" />
                    </div>
                    <span className="text-sm font-bold dark:text-slate-300 text-slate-700">
                      {sop.name}
                    </span>
                    <ArrowRight
                      className="ml-auto text-slate-700 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 blur-[80px] rounded-full"></div>
              <div className="relative glass p-3 md:p-10 rounded-[2.5rem] border dark:border-white/10 border-black/10">
                <div className="flex items-center gap-4 mb-5 justify-center lg:justify-start">
                  <BookOpen className="text-primary-start" size={24} />
                  <h3 className="dark:text-white text-slate-900 tracking-tight">
                    Commercial Knowledge Hub
                  </h3>
                </div>
                <div className="space-y-6">
                  <Link href="/articles/mushroom-farming-beginner-guide-india-2026-2027"
                    className="p-3 md:p-3 rounded-3xl bg-primary-start/10 border border-primary-start/20 block group hover:scale-[1.02] transition-transform"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-primary-start font-black uppercase tracking-widest">
                        Ultimate Guide 2026-2027
                      </span>
                      <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-500 text-[8px] font-black uppercase">
                        Article
                      </div>
                    </div>
                    <h4 className="dark:text-white text-slate-900 font-bold text-sm mb-2">
                        Mushroom Farming Beginner Guide India 2026-2027
                      </h4>
                    <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">
                      Complete guide on how to start mushroom farming (mushroom
                      ki kheti) from scratch for beginners.
                    </p>
                  </Link>

                  <div className="p-3 md:p-3 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">
                        Featured
                      </span>
                      <div className="px-2 py-0.5 rounded bg-red-500/20 text-red-500 text-[8px] font-black uppercase">
                        Video
                      </div>
                    </div>
                    <a
                      href="https://youtube.com/shorts/wxLiU3nNZmM?si=6VmH86DPYKoQ72P6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-video rounded-2xl overflow-hidden mb-4 group cursor-pointer inline-block w-full"
                    >
                      <img
                        loading="lazy"
                        src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg"
                        alt="Mushroom Farming Training Video - Commercial Cultivation SOPs India"
                        className="w-full h-full object-cover opacity-60"
                       width="1080" height="1080" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-2xl">
                          <Play size={20} fill="currentColor" />
                        </div>
                      </div>
                    </a>
                    <h4 className="dark:text-white text-slate-900 font-bold text-[13px] tracking-tight">
                      Commercial Composting Flow Explained
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MushroomSEOSections />
      <ComparisonTable />
      <StatesSection />
      <CTASection />
    </>
  );
};

export default HomePage;
