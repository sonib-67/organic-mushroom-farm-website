"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sprout,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Award,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Leaf,
  Layers,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  Droplets,
  Wind,
  FlaskConical,
  Building2,
  Package,
  HelpCircle,
  FileSpreadsheet,
  Check,
  Zap,
  Target
} from "lucide-react";

export default function OrganicTrainingGuideClient() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const curriculum = [
    {
      day: 1,
      title: "Day 1: Fundamentals",
      focus: "Introduction to Organic Fungi, Biology & Market Demand",
      practical: "Farm tour & recognizing high-yield organic strains (Button, Oyster, Shiitake).",
      details:
        "Understand mushroom mycelial biology, life cycles, and current Indian market dynamics. Learn why chemical-free mushrooms command unmatched market demand.",
      icon: Sprout,
    },
    {
      day: 2,
      title: "Day 2: Natural Composting",
      focus: "Phase-I Composting without synthetic Urea",
      practical: "Mixing straw with organic nitrogen sources (Mustard cake, Chicken manure).",
      details:
        "Formulate raw substrate using 100% natural nitrogen alternatives, wheat/paddy straw, and calibrate moisture without adding chemical conditioners.",
      icon: Layers,
    },
    {
      day: 3,
      title: "Day 3: Pasteurization",
      focus: "Phase-II Natural Pasteurization & Conditioning",
      practical: "Steam-based sterilization techniques. Checking ammonia levels naturally.",
      details:
        "Master high-temperature natural boiler steam pasteurization (58°C - 60°C) and ammonia clearance conditioning at 48°C - 52°C with zero chemical fumigants.",
      icon: Wind,
    },
    {
      day: 4,
      title: "Day 4: Spawning & Incubation",
      focus: "Selecting pure organic spawn & Spawning techniques",
      practical: "Hands-on bag filling/bed making. Mastering climate control (Temperature/Humidity).",
      details:
        "Calibrate 0.5%-0.7% spawning rates, inoculate compost beds or polybags under sterile conditions, and dial in 23°C - 25°C incubation temperatures.",
      icon: Droplets,
    },
    {
      day: 5,
      title: "Day 5: Organic Casing",
      focus: "Preparing chemical-free casing soil",
      practical: "Using coir pith, natural peat, and bio-controls like Trichoderma.",
      details:
        "Produce neutral pH (7.4-7.8) casing soil using organic coir pith, decomposed bark, and beneficial Trichoderma viride bio-fungicide for green mold immunity.",
      icon: FlaskConical,
    },
    {
      day: 6,
      title: "Day 6: Natural Pest Control",
      focus: "Identifying diseases without toxic sprays",
      practical: "Using yellow sticky traps, neem extracts, and maintaining strict farm hygiene.",
      details:
        "Deploy IPM (Integrated Pest Management) protocols: bio-fumigation with cold-pressed neem oil, garlic extracts, yellow sticky traps, and HEPA air filtration.",
      icon: ShieldCheck,
    },
    {
      day: 7,
      title: "Day 7: Business & Marketing",
      focus: "Selling organic mushrooms at premium rates",
      practical: "Packaging, branding, cold chain logistics, and certificate distribution.",
      details:
        "Master brand positioning, direct B2B supply to star hotels/organic marts, packaging in biodegradable vented boxes, DPR subsidy applications, and receive your graduation certification.",
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      q: "Q1. How is organic mushroom farming different from normal mushroom farming?",
      a: "Normal farming uses synthetic urea in compost and toxic chemicals like formalin and bavistin to prevent diseases. Organic mushroom farming relies on natural steam pasteurization, bio-pesticides (like neem and Trichoderma), and chemical-free organic matter, making the final product 100% safe, residue-free, and healthy.",
    },
    {
      q: "Q2. Can I grow organic mushrooms at home?",
      a: "Absolutely! Oyster mushrooms are incredibly easy to grow at home using organic wheat or paddy straw without any chemicals. For commercial scale, Organic Mushroom Farm provides complete training on setting up climate-controlled rooms.",
    },
    {
      q: "Q3. Do you provide training for beginners?",
      a: "Yes, our 7-day comprehensive training program at Organic Mushroom Farm is designed for absolute beginners with zero prior farming background, as well as existing farmers who want to shift from conventional chemical to 100% organic farming.",
    },
    {
      q: "Q4. What is the cost of setting up an organic mushroom farm?",
      a: "The cost depends on the scale (seasonal vs. climate-controlled). A basic seasonal organic setup can start from ₹50,000, while a commercial climate-controlled project can range from ₹15 Lakhs to ₹50 Lakhs. We help you design the best bankable model for your budget with subsidy guidance.",
    },
    {
      q: "Q5. Do organic mushrooms sell at a higher price?",
      a: "Yes! Due to high consumer awareness regarding health, clean eating, and immunity, certified organic mushrooms attract a significant premium, consistently selling for 30% to 50% more (₹180 - ₹250/kg) compared to chemically grown conventional mushrooms (₹120 - ₹150/kg) in retail and gourmet supermarkets.",
    },
    {
      q: "Q6. Where can I get pure organic mushroom spawn (seeds)?",
      a: "Right here! Organic Mushroom Farm produces high-vigour, 100% pure organic mushroom spawn (F1 strain) in our certified sterile laboratory, available for pan-India courier delivery with contamination-free assurance.",
    },
  ];

  const tags = [
    "organic button mushroom farming in India",
    "chemical-free mushroom cultivation process",
    "profitable organic oyster mushroom farming",
    "best private mushroom farming training",
    "how to start an organic mushroom farm",
    "organic mushroom compost preparation",
    "zero chemical mushroom farming guide 2026",
    "button mushroom training India",
    "mushroom farming subsidy guidance",
    "organic spawn supplier India",
  ];

  return (
    <div className="relative text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* 3D Ambient Glowing Mesh Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[8%] left-[15%] w-[450px] h-[450px] bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-[130px] mix-blend-screen" />
        <div className="absolute top-[35%] right-[10%] w-[500px] h-[500px] bg-teal-500/15 dark:bg-teal-500/15 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[8%] w-[480px] h-[480px] bg-purple-500/15 dark:bg-purple-500/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 flex-wrap pt-2"
        >
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
          <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
          <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[260px] sm:max-w-md">
            The Guide to Mushroom Farming in India
          </span>
        </nav>

        {/* Hero Header Section - 3D Glass Card */}
        <header className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-emerald-950/5 dark:shadow-black/50">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-purple-500" />

          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> 2026 Updated Blueprint
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Chemical-Free
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              <Clock className="w-3.5 h-3.5" /> 10 Min Read
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              <Calendar className="w-3.5 h-3.5" /> Verified by Organic Mushroom Farm
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.18] mb-6">
            The Complete Guide to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-200">
              100% Organic Mushroom Farming
            </span>
            : Training, Process &amp; Profit
          </h1>

          {/* Subheading / Lead Paragraph */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal border-l-4 border-emerald-500 pl-4 bg-emerald-500/5 dark:bg-white/[0.02] py-3 rounded-r-2xl">
            Are you looking to start a highly profitable, sustainable, and chemical-free agricultural business? Welcome to{" "}
            <strong className="text-emerald-700 dark:text-emerald-400 font-bold">Organic Mushroom Farm</strong>, India’s leading destination for 100% Organic Mushroom Farming.
          </p>

          {/* Quick CTA Pill row */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/training"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Join Practical Training</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919203544140?text=Hello%20Organic%20Mushroom%20Farm,%20I%20want%20to%20learn%20organic%20mushroom%20farming"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white/10 hover:bg-emerald-50 dark:hover:bg-white/15 text-slate-800 dark:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-white/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Us: +91 9203544140</span>
            </a>
          </div>
        </header>

        {/* Intro Body Article Section - 3D Glass Card */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            While the commercial market is flooded with chemically grown mushrooms treated with formalin, toxic fumigants, and synthetic fertilizers, the demand for <strong>pesticide-free, certified organic mushrooms is skyrocketing</strong> across India and international markets. Consumers, luxury 5-star hotels, organic supermarket chains, and modern health-conscious families are actively seeking and willing to pay a premium for mushrooms cultivated purely naturally.
          </p>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            At <strong>Organic Mushroom Farm</strong>, we don&apos;t just grow the healthiest mushrooms; we empower you to do the same. Whether your goal is to learn commercial organic mushroom cultivation, set up a turnkey climate-controlled facility, or procure the purest laboratory-tested organic spawn, you are exactly in the right place.
          </p>
        </section>

        {/* Section 1: Why Choose Organic Over Conventional */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Leaf className="w-4 h-4" /> Sustainable Agriculture
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Why Choose Organic Mushroom Farming Over Conventional Methods?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Most conventional mushroom farms rely heavily on hazardous chemicals like <em>Formaldehyde</em>, <em>Bavistin (Carbendazim)</em>, and synthetic Urea to control pests and boost compost nitrogen. But at <strong>Organic Mushroom Farm</strong>, our philosophy and production protocols are radically clean.
            </p>
          </div>

          {/* 4 The Organic Advantages Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl backdrop-blur-md bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/40 transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                1. Zero Chemical Residue
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                100% safe for human consumption, completely free from chemical carcinogenic residue, boosting natural immunity and gut wellness.
              </p>
            </div>

            <div className="p-5 rounded-2xl backdrop-blur-md bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/40 transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                2. Premium Pricing (High ROI)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Organic button and oyster mushrooms sell at a 30% to 40% higher price margin in the open market, ensuring superior profits per square foot.
              </p>
            </div>

            <div className="p-5 rounded-2xl backdrop-blur-md bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/40 transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                3. Eco-Friendly Substrates
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We utilize agricultural crop waste (wheat straw, paddy straw) enriched with natural bio-supplements like cold-pressed neem cake and organic poultry manure.
              </p>
            </div>

            <div className="p-5 rounded-2xl backdrop-blur-md bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/40 transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                4. Better Taste &amp; Longer Shelf Life
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Naturally grown mushrooms have a noticeably firmer cap texture, authentic earthy aroma, superior culinary moisture retention, and stay fresh days longer.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Exclusive Masterclass Training */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Award className="w-4 h-4" /> Premier Agricultural Masterclass
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              🎓 Exclusive Masterclass: The Best Organic Mushroom Farming Training in India
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Skip the outdated, theoretical classroom lectures. <strong>Organic Mushroom Farm</strong> offers an exclusive, hands-on Commercial Organic Mushroom Farm Training Program directly at our state-of-the-art facility. We teach you the exact blueprint we use to produce tons of premium organic mushrooms every month.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-white/[0.02] border border-emerald-500/20 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                100% Chemical-Free Protocols
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Learn bio-fumigation and natural steam pasteurization instead of using toxic chemicals.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-teal-500/5 dark:bg-white/[0.02] border border-teal-500/20 space-y-2">
              <Building2 className="w-5 h-5 text-teal-500" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Live Farm Experience
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                You won&apos;t just sit in a room; you will work directly inside our live climate-controlled growing rooms.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-white/[0.02] border border-amber-500/20 space-y-2">
              <FileSpreadsheet className="w-5 h-5 text-amber-500" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                End-to-End Business Plan
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                From compost mixing and bagging to finding verified high-paying organic buyers in your state.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/5 dark:bg-white/[0.02] border border-purple-500/20 space-y-2">
              <Zap className="w-5 h-5 text-purple-500" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Custom DPR Subsidy Report
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                We help you formulate bankable Detailed Project Reports for NABARD and NHB organic subsidies.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 7-Day Curriculum Table / Interactive Component */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Calendar className="w-4 h-4" /> Structured Hands-on Syllabus
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              📋 Our 7-Day Intensive Organic Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              A comprehensive daily breakdown blending scientific principles with deep commercial farm floor practice.
            </p>
          </div>

          {/* Interactive Day Tabs for Mobile & Desktop */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {curriculum.map((item) => (
              <button
                key={item.day}
                onClick={() => setActiveDay(item.day)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeDay === item.day
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
                }`}
              >
                <span>Day {item.day}</span>
              </button>
            ))}
          </div>

          {/* Active Day Detail Highlight Card */}
          {(() => {
            const current = curriculum.find((c) => c.day === activeDay) || curriculum[0];
            const IconComponent = current.icon;
            return (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-purple-500/10 border border-emerald-500/30 space-y-3 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                      Active Spotlight
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      {current.title}: {current.focus}
                    </h3>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold mb-1">
                      Practical Application:
                    </strong>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {current.practical}
                    </p>
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold mb-1">
                      Key Competency:
                    </strong>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {current.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Full Structured Curriculum Table for Readers & Search Engines */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-white/10 mt-6">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold">
                  <th className="py-3 px-4 w-[22%]">Training Day</th>
                  <th className="py-3 px-4 w-[38%]">Core Focus Area (Organic Framework)</th>
                  <th className="py-3 px-4 w-[40%]">Practical Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                {curriculum.map((row) => (
                  <tr
                    key={row.day}
                    onClick={() => setActiveDay(row.day)}
                    className={`cursor-pointer transition-colors ${
                      activeDay === row.day
                        ? "bg-emerald-500/10 dark:bg-emerald-500/15"
                        : "hover:bg-slate-50 dark:hover:bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {row.title}
                    </td>
                    <td className="py-3.5 px-4 font-medium">{row.focus}</td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">{row.practical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Organic Mushroom Farm SOP */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> Proprietary Protocol
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              🛠️ The Organic Mushroom Farm SOP: How We Grow Organic Mushrooms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To achieve commercial success in chemical-free mushroom cultivation, you need strict Standard Operating Procedures (SOPs). Here is an inside look into our proprietary organic cultivation process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                01
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Organic Substrate Preparation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Instead of synthetic chemical baths (formalin dips), we use a specialized high-temperature steam pasteurization method. This thermal conditioning completely kills pathogens and wild spores while preserving beneficial thermophilic actinomycetes and microflora that help mushroom mycelium thrive.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500/15 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-sm">
                02
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Bio-Fumigation for Disease Management
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We completely ban Bavistin and Formalin on our farm. Instead, we use:
              </p>
              <ul className="text-[11px] text-slate-600 dark:text-slate-300 space-y-1.5 pl-3 list-disc">
                <li><strong>Neem Oil &amp; Garlic Extracts:</strong> Natural organic repellents for phorid and sciarid flies.</li>
                <li><strong>Trichoderma Viride:</strong> Friendly bio-fungicide mixed with casing soil to prevent harmful green mold naturally.</li>
                <li><strong>HEPA Filtration:</strong> Modern climate-controlled rooms with positive air pressure to block spores and pests mechanically.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold text-sm">
                03
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Pure Organic Spawn
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The secret to a record harvest lies in the seed vigour. We supply and utilize only first-generation (F1) organic mushroom spawn multiplied in our clean laminar airflow bio-lab, ensuring rapid colonization, zero bacterial lag, and dense recurring flushes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Profitability & Yield Economics */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="w-4 h-4" /> High Return On Investment
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Profitability &amp; Yield: The Economics of Organic Mushrooms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Many aspiring growers ask: <em>&ldquo;Is organic mushroom farming profitable in India?&rdquo;</em> The answer is a resounding <strong>YES</strong>. Because you eliminate recurring expenditures on expensive synthetic fungicides and sell your clean produce at verified organic premium rates, your net profit margin expands substantially.
            </p>
          </div>

          {/* Pricing Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-6 rounded-2xl bg-slate-100/80 dark:bg-white/[0.02] border border-slate-300/80 dark:border-white/10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Conventional Market Rates
              </span>
              <div className="text-2xl sm:text-3xl font-black text-slate-700 dark:text-slate-300">
                ₹120 &ndash; ₹150 <span className="text-xs font-medium">/ Kg</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Subject to mandi volatility, chemical pesticide residue testing rejections, and seasonal oversupply price crashes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-emerald-500/5 border border-emerald-500/40 space-y-2 relative overflow-hidden">
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider">
                +40% Premium
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                Organic Certified Button Mushroom Price
              </span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-300">
                ₹180 &ndash; ₹250 <span className="text-xs font-medium">/ Kg</span>
              </div>
              <p className="text-xs text-emerald-900/90 dark:text-emerald-200/90 leading-relaxed">
                Reliable contracts with zero chemical residue guarantee, command high loyalty, and maintain stable year-round rates.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-white/[0.02] border border-emerald-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <strong className="block text-slate-900 dark:text-white font-bold">
              Target High-Margin Organic Markets:
            </strong>
            <p className="leading-relaxed">
              Organic grocery supermarkets (Nature&apos;s Basket, Organic India, BigBasket Organic), direct-to-consumer farm-gate WhatsApp subscription groups, 5-star hotel banquet kitchens, fitness clubs, and health-conscious urban gated communities.
            </p>
            <p className="font-semibold text-emerald-700 dark:text-emerald-400 pt-1">
              Let Organic Mushroom Farm help you design a highly profitable, climate-controlled organic farm from scratch!
            </p>
          </div>
        </section>

        {/* Section 6: Top Services Offered by Organic Mushroom Farm */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Building2 className="w-4 h-4" /> Comprehensive Farm Solutions
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Top Services Offered by Organic Mushroom Farm
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              We are not just a training center; we are your full-lifecycle organic farming partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/40 transition-all space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Turnkey Farm Setup
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We engineer and construct highly efficient, climate-controlled organic mushroom farms (from 5-room starter facilities to 50-room commercial automated industrial plants) with PUF panel insulation, precision chillers, and ultrasonic humidifiers.
              </p>
              <Link href="/turnkey-projects" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline pt-1">
                View Turnkey Projects <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/40 transition-all space-y-2">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Organic Spawn Supply
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Pan-India rapid courier delivery of pure, 100% contamination-free organic mushroom seeds (Button, Oyster, Milky, Shiitake) cultured on organic wheat grains.
              </p>
              <Link href="/spawn-seeds" className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline pt-1">
                Order Organic Spawn <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/40 transition-all space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Consultancy &amp; Lifetime Support
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Lifetime direct WhatsApp desk and video consultation support for all our trained farmers to troubleshoot room temperature, humidity, pest diagnosis, and harvest timing.
              </p>
              <Link href="/support" className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline pt-1">
                Farmer Support Desk <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/40 transition-all space-y-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Buy-Back Assistance
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We guide you on how to connect with top verified organic wholesale buyers, local hypermarkets, and dehydrator processing plants in your region to ensure 100% off-take of your produce.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-300 hover:underline pt-1">
                Connect with Buyers <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7: Innovation Keywords Cloud */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 shadow-xl space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            We actively innovate and lead nationwide in:
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-emerald-500/40 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* Section 8: Frequently Asked Questions (FAQs) Accordion */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <HelpCircle className="w-4 h-4" /> Got Questions?
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              ❓ Frequently Asked Questions (FAQs) &ndash; Organic Mushroom Farming
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Clear answers to the most common questions about costs, spawn, commercial viability, and cultivation.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl backdrop-blur-md bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none gap-4"
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 9: Call to Action Footer Card */}
        <section className="relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-8 sm:p-12 shadow-2xl space-y-6 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/20 text-white backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" /> Next Batch Starting Soon
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Start Your Organic Journey Today!
            </h2>
            <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
              Stop competing in the crowded, chemical-heavy commodity market. Transition to the high-value future of clean agriculture with{" "}
              <strong>Organic Mushroom Farm</strong>. Ready to get your hands dirty and grow pure gold?
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/training"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs sm:text-sm shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <span>Enroll in 7-Day Training</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919203544140?text=Hello%20Organic%20Mushroom%20Farm,%20I%20want%20to%20enroll%20in%20the%20Organic%20Mushroom%20Farming%20Training."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm border border-emerald-400/40 backdrop-blur-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
