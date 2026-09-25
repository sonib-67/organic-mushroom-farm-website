import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sprout,
  ShieldCheck,
  TrendingUp,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ChevronRight,
  BookOpen,
  DollarSign,
  Scale,
  Microscope,
  Wind,
  PhoneCall,
  MessageCircle,
  Building2,
  Check,
  HelpCircle,
  Wheat,
  Leaf,
  Layers,
  Thermometer,
} from "lucide-react";
import OrganicGlassFaq from "@/components/blog/OrganicGlassFaq";

export const dynamic = "error";
export const revalidate = false;

const PAGE_URL =
  "https://organicmushroomsfarm.com/blog/organic-mushroom-farming-training-india";

export const metadata: Metadata = {
  title: "The Guide to Mushroom Farming in India | Organic Mushroom Farm",
  description:
    "Learn how to start a profitable mushroom farm. Join Organic Mushroom Farm or hands-on, chemical-free mushroom cultivation training, natural composting, and business setups.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "The Guide to Mushroom Farming in India | Organic Mushroom Farm",
    description:
      "Learn how to start a profitable mushroom farm. Join Organic Mushroom Farm or hands-on, chemical-free mushroom cultivation training, natural composting, and business setups.",
    url: PAGE_URL,
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "The Guide to Mushroom Farming in India | Organic Mushroom Farm",
    description:
      "Learn how to start a profitable mushroom farm. Join Organic Mushroom Farm or hands-on, chemical-free mushroom cultivation training, natural composting, and business setups.",
  },
};

export default function OrganicMushroomFarmingGuidePage() {
  const publishedDate = "2026-09-24T08:30:00+05:30";
  const modifiedDate = "2026-09-24T08:30:00+05:30";

  const faqs = [
    {
      question:
        "Q1. How is organic mushroom farming different from normal mushroom farming?",
      answer:
        "Normal farming uses synthetic urea in compost and toxic chemicals like formalin and bavistin to prevent diseases. Organic mushroom farming relies on natural steam pasteurization, bio-pesticides (like neem and Trichoderma), and chemical-free organic matter, making the final product 100% safe and healthy.",
    },
    {
      question: "Q2. Can I grow organic mushrooms at home?",
      answer:
        "Absolutely! Oyster mushrooms are incredibly easy to grow at home using organic wheat or paddy straw without any chemicals. For commercial scale, Organic Mushroom Farm provides complete training on setting up climate-controlled rooms.",
    },
    {
      question: "Q3. Do you provide training for beginners?",
      answer:
        "Yes, our 7-day comprehensive training program at Organic Mushroom Farm is designed for absolute beginners as well as existing farmers who want to shift from chemical to organic farming.",
    },
    {
      question: "Q4. What is the cost of setting up an organic mushroom farm?",
      answer:
        "The cost depends on the scale (seasonal vs. climate-controlled). A basic seasonal organic setup can start from ₹50,000, while a commercial climate-controlled project can range from ₹15 Lakhs to ₹50 Lakhs. We help you design the best model for your budget.",
    },
    {
      question: "Q5. Do organic mushrooms sell at a higher price?",
      answer:
        "Yes. Due to high consumer awareness regarding health and immunity, organic mushrooms attract a premium price, often selling for 30% to 50% more than chemically grown mushrooms in supermarkets.",
    },
    {
      question: "Q6. Where can I get pure organic mushroom spawn (seeds)?",
      answer:
        "Right here! Organic Mushroom Farm produces high-vigour, 100% pure organic mushroom spawn in our sterile lab, available for pan-India delivery.",
    },
  ];

  const curriculumDays = [
    {
      day: "Day 1: Fundamentals",
      focus: "Introduction to Organic Fungi, Biology & Market Demand",
      practical:
        "Farm tour & recognizing high-yield organic strains (Button, Oyster, Shiitake).",
    },
    {
      day: "Day 2: Natural Composting",
      focus: "Phase-I Composting without synthetic Urea.",
      practical:
        "Mixing straw with organic nitrogen sources (Mustard cake, Chicken manure).",
    },
    {
      day: "Day 3: Pasteurization",
      focus: "Phase-II Natural Pasteurization & Conditioning.",
      practical:
        "Steam-based sterilization techniques. Checking ammonia levels naturally.",
    },
    {
      day: "Day 4: Spawning & Incubation",
      focus: "Selecting pure organic spawn & Spawning techniques.",
      practical:
        "Hands-on bag filling/bed making. Mastering climate control (Temperature/Humidity).",
    },
    {
      day: "Day 5: Organic Casing",
      focus: "Preparing chemical-free casing soil.",
      practical:
        "Using coir pith, natural peat, and bio-controls like Trichoderma.",
    },
    {
      day: "Day 6: Natural Pest Control",
      focus: "Identifying diseases without toxic sprays.",
      practical:
        "Using yellow sticky traps, neem extracts, and maintaining strict farm hygiene.",
    },
    {
      day: "Day 7: Business & Marketing",
      focus: "Selling organic mushrooms at premium rates.",
      practical:
        "Packaging, branding, cold chain logistics, and certificate distribution.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": PAGE_URL,
          url: PAGE_URL,
          name: "The Guide to Mushroom Farming in India | Organic Mushroom Farm",
          description:
            "Learn how to start a profitable mushroom farm. Join Organic Mushroom Farm or hands-on, chemical-free mushroom cultivation training, natural composting, and business setups.",
          breadcrumb: {
            "@id": `${PAGE_URL}#breadcrumb`,
          },
        },
        headline:
          "The Complete Guide to 100% Organic Mushroom Farming: Training, Process & Profit (2026 Updated)",
        description:
          "Comprehensive guide to chemical-free organic mushroom farming in India: training curriculum, natural composting, bio-fumigation, pure organic spawn, and commercial economics.",
        datePublished: publishedDate,
        dateModified: modifiedDate,
        inLanguage: "en-US",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": PAGE_URL,
        },
        author: {
          "@type": "Organization",
          name: "Organic Mushroom Farm",
          url: "https://organicmushroomsfarm.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Organic Mushroom Farm",
          url: "https://organicmushroomsfarm.com",
          logo: {
            "@type": "ImageObject",
            url: "https://organicmushroomsfarm.com/icon.png",
          },
        },
        keywords: [
          "organic button mushroom farming in India",
          "chemical-free mushroom cultivation process",
          "profitable organic oyster mushroom farming",
          "best private mushroom farming training",
          "how to start an organic mushroom farm",
          "organic mushroom compost preparation",
          "zero chemical mushroom farming guide 2026",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://organicmushroomsfarm.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://organicmushroomsfarm.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "The Guide to Mushroom Farming in India",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "Course",
        "@id": `${PAGE_URL}#course`,
        name: "Commercial Organic Mushroom Farm Training Masterclass",
        description:
          "7-Day intensive hands-on chemical-free organic mushroom farming masterclass in India. Covers natural composting, bio-fumigation, climate control, DPR bankable reports, and market links.",
        provider: {
          "@type": "Organization",
          name: "Organic Mushroom Farm",
          url: "https://organicmushroomsfarm.com",
        },
        educationalCredentialAwarded:
          "Certificate of Commercial Organic Mushroom Cultivation",
        timeRequired: "P7D",
        courseMode: "blended",
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "The Organic Mushroom Farm SOP: How We Grow Organic Mushrooms",
        description:
          "Standard operating procedure for zero-chemical mushroom cultivation utilizing high-temperature steam pasteurization, bio-fumigation, and pure F1 spawn.",
        step: [
          {
            "@type": "HowToStep",
            name: "Step 1: Organic Substrate Preparation",
            text: "High-temperature steam pasteurization method instead of chemical baths, killing harmful pathogens while preserving beneficial microbes.",
            url: `${PAGE_URL}#substrate-preparation`,
          },
          {
            "@type": "HowToStep",
            name: "Step 2: Bio-Fumigation for Disease Management",
            text: "Zero formalin or bavistin. Use neem oil and garlic extracts for sciarid flies, Trichoderma viride bio-fungicide in casing, and HEPA air filtration.",
            url: `${PAGE_URL}#bio-fumigation`,
          },
          {
            "@type": "HowToStep",
            name: "Step 3: Pure First-Generation (F1) Organic Spawn",
            text: "Inoculate substrate with sterile, laboratory-tested F1 organic mushroom spawn for rapid mycelial colonization and maximum flushes.",
            url: `${PAGE_URL}#pure-spawn`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question.replace(/^Q\d+\.\s*/, ""),
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <article className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient 3D Glass Light Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-amber-500/10 blur-[130px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[35%] -right-40 w-[600px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[70%] -left-40 w-[600px] h-[500px] bg-teal-500/10 blur-[140px] rounded-full"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        {/* Breadcrumb Navigation - 3D Glass */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/60 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-xs sm:text-sm text-zinc-600 dark:text-zinc-400"
        >
          <Link
            href="/"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <Link
            href="/blog"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-emerald-700 dark:text-emerald-400 font-medium truncate max-w-[200px] sm:max-w-xs">
            Organic Mushroom Farming Training
          </span>
        </nav>

        {/* Hero Section - 3D Glassmorphism Card */}
        <header className="relative rounded-3xl p-6 sm:p-10 border border-white/70 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Subtle reflection border highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 dark:via-emerald-400/40 to-transparent" />

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              2026 Updated Comprehensive Guide
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/15">
              <Clock className="w-3.5 h-3.5" />
              10 Min Read
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              <Sprout className="w-3.5 h-3.5" />
              100% Chemical-Free
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15] mb-6">
            The Complete Guide to 100% Organic Mushroom Farming: Training,
            Process &amp; Profit
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal mb-8">
            Are you looking to start a highly profitable, sustainable, and
            chemical-free agricultural business? Welcome to{" "}
            <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">
              Organic Mushroom Farm
            </strong>
            , India’s leading destination for 100% Organic Mushroom Farming.
          </p>

          {/* Quick Metrics 3D Glass Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <div className="p-3.5 rounded-2xl bg-white/50 dark:bg-zinc-800/40 border border-white/50 dark:border-white/5 backdrop-blur-md">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Purity Standard
              </p>
              <p className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">
                0% Chemicals
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/50 dark:bg-zinc-800/40 border border-white/50 dark:border-white/5 backdrop-blur-md">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Market Premium
              </p>
              <p className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">
                +30% to 40% ROI
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/50 dark:bg-zinc-800/40 border border-white/50 dark:border-white/5 backdrop-blur-md">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Masterclass
              </p>
              <p className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                7 Days Intensive
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/50 dark:bg-zinc-800/40 border border-white/50 dark:border-white/5 backdrop-blur-md">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Spawn Quality
              </p>
              <p className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                F1 Lab Tested
              </p>
            </div>
          </div>
        </header>

        {/* Section: Market Demand & Problem */}
        <section className="rounded-3xl p-6 sm:p-8 border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.25)] space-y-4">
          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            While the market is flooded with chemically grown mushrooms treated
            with formalin and synthetic fertilizers, the demand for
            pesticide-free, organic mushrooms is skyrocketing. Consumers, luxury
            hotels, and modern retail chains are willing to pay a premium for
            mushrooms grown naturally.
          </p>
          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            At <strong>Organic Mushroom Farm</strong>, we don&apos;t just grow
            the healthiest mushrooms; we empower you to do the same. Whether you
            want to learn commercial organic mushroom cultivation, set up a
            turnkey project, or buy the purest organic spawn, you are exactly in
            the right place.
          </p>
        </section>

        {/* Section: Why Choose Organic Mushroom Farming */}
        <section className="space-y-6">
          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              The Organic Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Why Choose Organic Mushroom Farming Over Conventional Methods?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              Most conventional farms rely heavily on harmful chemicals like
              Formaldehyde, Bavistin, and synthetic Urea to control pests and
              boost compost nitrogen. But at <strong>Organic Mushroom Farm</strong>,
              our philosophy is completely different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group rounded-2xl p-6 border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-emerald-500/40 transition duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Zero Chemical Residue
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                100% safe for human consumption, boosting immunity naturally
                without hazardous synthetic preservatives or chemical residues.
              </p>
            </div>

            <div className="group rounded-2xl p-6 border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-emerald-500/40 transition duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Premium Pricing (High ROI)
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Organic button and oyster mushrooms consistently sell at a
                30%–40% higher price margin in modern retail chains, organic
                stores, and D2C channels.
              </p>
            </div>

            <div className="group rounded-2xl p-6 border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-emerald-500/40 transition duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Wheat className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Eco-Friendly Substrates
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                We utilize agricultural waste (wheat straw, paddy straw) enriched
                with natural organic nitrogen supplements like neem cake and
                certified organic poultry manure.
              </p>
            </div>

            <div className="group rounded-2xl p-6 border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-emerald-500/40 transition duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Better Taste &amp; Shelf Life
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Naturally grown mushrooms have a firmer cell structure, rich
                earthy aroma, and stay fresh significantly longer in cold storage
                compared to chemically pumped flushes.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Exclusive Masterclass */}
        <section className="rounded-3xl p-6 sm:p-10 border border-white/70 dark:border-white/10 bg-gradient-to-br from-white/70 via-white/50 to-white/40 dark:from-zinc-900/80 dark:via-zinc-900/60 dark:to-zinc-900/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)] space-y-8">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
              <Award className="w-3.5 h-3.5" />
              Hands-On Practical Training
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">
              🎓 Exclusive Masterclass: The Best Organic Mushroom Farming
              Training in India
            </h2>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Skip the outdated, theoretical classroom lectures.{" "}
              <strong>Organic Mushroom Farm</strong> offers an exclusive,
              hands-on Commercial Organic Mushroom Farm Training Program directly
              at our state-of-the-art facility.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              We teach you the exact blueprint we use to produce tons of premium
              organic mushrooms every month.
            </p>
          </div>

          {/* What makes our training unique */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-500" />
              What Makes Our Training Unique?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-white/50 dark:border-white/5 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                    100% Chemical-Free Protocols
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    Learn bio-fumigation and natural steam pasteurization
                    instead of relying on toxic chemicals.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/50 dark:border-white/5 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                    Live Farm Experience
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    You won&apos;t just sit in a room; you will work in our live
                    climate-controlled growing chambers and composting yards.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/50 dark:border-white/5 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                    End-to-End Business Plan
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    From organic compost mixing and casing formulas to finding
                    high-paying corporate and mandi buyers.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/50 dark:border-white/5 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                    Custom DPR (Detailed Project Report)
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    We help you draft bankable DPR project reports for NHB /
                    NABARD organic farming subsidies and loan sanctions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: 7-Day Intensive Curriculum Table (3D Glass) */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Structured Learning Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
              📋 Our 7-Day Intensive Organic Curriculum
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              A comprehensive daily breakdown combining biological science,
              natural pest resistance, and hands-on commercial farm operations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/70 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="hidden md:grid md:grid-cols-12 gap-4 p-4 border-b border-white/60 dark:border-white/10 bg-emerald-500/10 text-emerald-900 dark:text-emerald-300 font-bold text-sm">
              <div className="col-span-3">Training Day</div>
              <div className="col-span-4">Core Focus Area (Organic Framework)</div>
              <div className="col-span-5">Practical Application</div>
            </div>

            <div className="divide-y divide-white/60 dark:divide-white/10">
              {curriculumDays.map((item, index) => (
                <div
                  key={index}
                  className="p-5 md:grid md:grid-cols-12 gap-4 hover:bg-white/40 dark:hover:bg-zinc-800/40 transition duration-200"
                >
                  <div className="col-span-3 font-semibold text-emerald-700 dark:text-emerald-400 mb-1 md:mb-0 flex items-center gap-2">
                    <span className="flex md:hidden h-6 w-6 rounded-full bg-emerald-500/20 text-xs items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    {item.day}
                  </div>
                  <div className="col-span-4 text-zinc-800 dark:text-zinc-200 font-medium text-sm sm:text-base mb-2 md:mb-0">
                    {item.focus}
                  </div>
                  <div className="col-span-5 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                    {item.practical}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: SOP (Standard Operating Procedures) */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Proprietary Scientific Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
              🛠️ The Organic Mushroom Farm SOP: How We Grow Organic Mushrooms
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              To achieve success in chemical-free mushroom cultivation, you need
              strict Standard Operating Procedures (SOPs). Here is a sneak peek
              into our proprietary organic process:
            </p>
          </div>

          <div className="space-y-4">
            <div
              id="substrate-preparation"
              className="rounded-2xl p-6 border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] space-y-2"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                  1
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Organic Substrate Preparation
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed pl-11">
                Instead of synthetic chemical baths, we use a specialized
                high-temperature steam pasteurization method. This kills bad
                bacteria while preserving beneficial microbes that help the
                mushroom mycelium thrive.
              </p>
            </div>

            <div
              id="bio-fumigation"
              className="rounded-2xl p-6 border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                  2
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Bio-Fumigation for Disease Management
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed pl-11">
                We completely ban Bavistin and Formalin on our farm. Instead, we
                deploy a multi-layered bio-sanitation strategy:
              </p>
              <ul className="pl-11 space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <span>
                    <strong>Neem Oil &amp; Garlic Extracts:</strong> Proven
                    natural organic repellents for sciarid and phorid flies.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <span>
                    <strong>Trichoderma Viride:</strong> A friendly
                    bio-fungicide that we mix with casing soil to prevent
                    harmful green mold naturally.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <span>
                    <strong>HEPA Filtration:</strong> Modern climate-controlled
                    growing rooms equipped with advanced positive-pressure air
                    filtration to keep foreign fungal spores and insect vectors
                    out.
                  </span>
                </li>
              </ul>
            </div>

            <div
              id="pure-spawn"
              className="rounded-2xl p-6 border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] space-y-2"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                  3
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Pure Organic Spawn
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed pl-11">
                The secret to a great harvest lies in the seed. We supply and
                utilize only first-generation (F1) organic mushroom spawn,
                ensuring vigorous mycelial run, uniform pinning, and heavy
                flushes across every harvest cycle.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Profitability & Yield: The Economics */}
        <section className="rounded-3xl p-6 sm:p-10 border border-white/70 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)] space-y-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Commercial Viability &amp; Financials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
              Profitability &amp; Yield: The Economics of Organic Mushrooms
            </h2>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Many beginners ask:{" "}
              <em>&ldquo;Is organic mushroom farming profitable in India?&rdquo;</em>{" "}
              The answer is a resounding <strong>YES</strong>.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              Because you eliminate the recurring expenditure of costly synthetic
              chemicals, and sell your certified harvest at premium organic
              rates, your net operational profit margin increases dramatically.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-950/20 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase text-rose-600 dark:text-rose-400 tracking-wide">
                Conventional Model
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mt-2">
                ₹120 – ₹150 <span className="text-sm font-normal">/ Kg</span>
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                Sold in traditional wholesale mandis where margins are squeezed
                by commission agents and chemical inputs raise production costs.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] font-bold text-white uppercase tracking-wider">
                Recommended
              </div>
              <span className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-300 tracking-wide">
                Organic Certified Model
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-2">
                ₹180 – ₹250 <span className="text-sm font-normal">/ Kg</span>
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-2">
                Direct distribution to organic retail chains, wellness cafes,
                D2C subscription boxes, and high-end culinary hospitality.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-white/60 dark:border-white/10 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md">
            <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              High-Value Target Markets for Your Produce:
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Organic grocery stores, direct-to-consumer WhatsApp communities,
              5-star hotel kitchens, farm-to-table restaurants, and
              health-conscious urban consumers who demand zero-chemical
              freshness.
            </p>
          </div>

          <div className="pt-2">
            <p className="text-base font-semibold text-emerald-700 dark:text-emerald-400">
              Let Organic Mushroom Farm help you design a highly profitable,
              climate-controlled organic farm from scratch!
            </p>
          </div>
        </section>

        {/* Section: Top Services Offered by Organic Mushroom Farm */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Comprehensive Farm Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Top Services Offered by Organic Mushroom Farm
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              We are not just a training center; we are your complete organic
              farming partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Turnkey Farm Setup
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We build highly efficient, climate-controlled organic mushroom
                farms (from 5-room seasonal setups to 50-room commercial automated
                plants).
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Organic Spawn Supply
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Pan-India prompt refrigerated dispatch of pure, 100%
                contamination-free organic mushroom spawn produced in sterile
                laminar-flow cleanrooms.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Consultancy &amp; Support
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Dedicated WhatsApp and telephonic agronomy troubleshooting
                support for our trained batch farmers throughout the cropping
                cycles.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Buy-Back Assistance
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We guide you on how to connect with top organic buyers, retail
                chains, and drying/powdering aggregators across your state.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Innovation Keywords Cloud */}
        <section className="p-6 rounded-2xl border border-white/60 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            We actively innovate in:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "organic button mushroom farming in India",
              "chemical-free mushroom cultivation process",
              "profitable organic oyster mushroom farming",
              "best private mushroom farming training",
              "how to start an organic mushroom farm",
              "organic mushroom compost preparation",
              "zero chemical mushroom farming guide 2026",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 backdrop-blur-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* Section: FAQs (3D Glass Accordion) */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
              ❓ Frequently Asked Questions (FAQs) - Organic Mushroom Farming
            </h2>
          </div>

          <OrganicGlassFaq faqs={faqs} />
        </section>

        {/* High-Converting CTA Box (3D Glass) */}
        <section className="relative rounded-3xl p-8 sm:p-12 border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-white/60 to-white/40 dark:from-emerald-950/40 dark:via-zinc-900/70 dark:to-zinc-900/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(16,185,129,0.1)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            Limited Batch Seats Available
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight">
            Start Your Organic Journey Today!
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Stop competing in the crowded, chemical-heavy market. Transition to
            the future of agriculture with{" "}
            <strong>Organic Mushroom Farm</strong>. Ready to get your hands dirty
            and grow pure gold?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="https://wa.me/917898862214?text=Hello!%20I%E2%80%99m%20exploring%20mushroom%20farming%20and%20would%20like%20to%20know%20more%20about%20your%20organic%20mushroom%20farming%20training,%20courses,%20and%20available%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-[0_10px_25px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Link>

            <Link
              href="/training"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-zinc-300 dark:border-white/20 bg-white/70 dark:bg-zinc-800/70 hover:bg-white dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-semibold text-base backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Training Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
