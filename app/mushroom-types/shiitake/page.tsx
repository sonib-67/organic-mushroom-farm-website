import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  ArrowLeft,
  Thermometer,
  Droplets,
  Layers,
  Calendar,
  TrendingUp,
  Inbox,
  BookOpen,
  Cpu,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Gem,
  Flame,
  Leaf,
  Activity,
  Zap,
  Phone,
  ShieldCheck,
  Coins,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Shiitake Mushroom (Lentinula edodes) | Smart Farming Guide | Organic Mushrooms Farm",
  description:
    "Exotic Shiitake (Lentinula edodes) commercial setup guide. How to make formulation blocks, autoclave sterilization, laminar flow spawning, and colonization.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-types/shiitake",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Shiitake Mushroom (Lentinula edodes) | Smart Farming Guide | Organic Mushrooms Farm",
    description:
      "Exotic Shiitake (Lentinula edodes) commercial setup guide. How to make formulation blocks, autoclave sterilization, laminar flow spawning, and colonization.",
    url: "https://organicmushroomsfarm.com/mushroom-types/shiitake",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Shiitake Mushroom (Lentinula edodes) | Smart Farming Guide | Organic Mushrooms Farm",
    description:
      "Exotic Shiitake (Lentinula edodes) commercial setup guide. How to make formulation blocks, autoclave sterilization, laminar flow spawning, and colonization.",
  },
};

export default function ShiitakeMushroomPage() {
  const pageUrl = "https://organicmushroomsfarm.com/mushroom-types/shiitake";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://organicmushroomsfarm.com/#organization",
        name: "Organic Mushroom Farm",
        url: "https://organicmushroomsfarm.com",
        logo: {
          "@type": "ImageObject",
          url: "https://organicmushroomsfarm.com/images/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9203544140",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Katangi Road",
          addressLocality: "Jabalpur",
          addressRegion: "Madhya Pradesh",
          postalCode: "483105",
          addressCountry: "IN",
        },
        sameAs: ["https://wa.me/919203544140"],
      },
      {
        "@type": "WebSite",
        "@id": "https://organicmushroomsfarm.com/#website",
        url: "https://organicmushroomsfarm.com",
        name: "Organic Mushroom Farm",
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Shiitake Mushroom (Lentinula edodes) | Smart Farming Guide | Organic Mushrooms Farm",
        description:
          "Exotic Shiitake (Lentinula edodes) commercial setup guide. How to make formulation blocks, autoclave sterilization, laminar flow spawning, and colonization.",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://organicmushroomsfarm.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mushroom Types",
            item: "https://organicmushroomsfarm.com/mushroom-types",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Shiitake Mushroom",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: "Shiitake Mushroom (Lentinula edodes)",
        description:
          "The world's second most popular mushroom, offering massive market margins. Highly prized in fine dining, oriental gastronomy, and lentinan nutraceutical extraction with high wholesale rates.",
        image:
          "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
        brand: {
          "@type": "Brand",
          name: "Organic Mushrooms Farm",
        },
        category: "Agricultural Setup & Spawns",
        offers: {
          "@type": "Offer",
          url: pageUrl,
          priceCurrency: "INR",
          price: "180",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Scientific Name",
            value: "Lentinula edodes",
          },
          {
            "@type": "PropertyValue",
            name: "Hindi Name",
            value: "शीताके मशरूम (Shiitake Mushroom)",
          },
          {
            "@type": "PropertyValue",
            name: "Optimal Cropping Temperature",
            value: "14°C - 20°C (Inoculation), 12°C - 16°C (Fruiting)",
          },
          {
            "@type": "PropertyValue",
            name: "Required Humidity Level",
            value: "85% - 92% RH",
          },
          {
            "@type": "PropertyValue",
            name: "Production Substrate",
            value: "Hardwood Sawdust mixed with 20% Wheat/Rice Bran & 1% Gypsum",
          },
          {
            "@type": "PropertyValue",
            name: "Casing Layer",
            value: "Not Required (Grows from sawdust logs / blocks)",
          },
          {
            "@type": "PropertyValue",
            name: "Incubation Duration",
            value: "50 - 75 Days (Log Browning & Melanization)",
          },
          {
            "@type": "PropertyValue",
            name: "Cropping Phase",
            value: "40 - 50 Days (Multiple High-Value Flushes)",
          },
          {
            "@type": "PropertyValue",
            name: "Dry Market Value",
            value: "₹2,000 - ₹2,500 / kg (Dehydrated Gourmet Grade)",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        name: "How to Grow Shiitake Mushrooms (Lentinula edodes) Step-by-Step",
        description:
          "5-stage commercial growing protocol for Shiitake mushrooms covering hardwood formulation, autoclave sterilization, laminar flow spawning, sawdust log browning, and cold-shock pinning.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "High-grade Hardwood Substrate Formulation",
            text: "Formulate sawdust blocks using oak, maple, or rubber tree sawdust. Supplement with 20% wheat bran and 1% calcium sulfate (gypsum) for mineral nutrition and proper pH balance.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Autoclavation & Heat Sterilization",
            text: "Compress the substrate into special heat-resistant filter patch bags. Sterilize bags in a high-pressure thermal autoclave unit at 121°C for 3-4 hours to eliminate all competing spores.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Sterile Laminar Flow Inoculation",
            text: "Under HEPA-filtered laminar airflow benches, inject high-vitality Shiitake sawdust spawn into the cooled bags. Seal immediately to prevent spore bypass.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Sawdust Log Browning Phase",
            text: "Incubate blocks at 20-22°C for 60+ days. The logs will form popcorn-like white bumps first, and slowly oxidize into a tough brown bark (melanization).",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Cold Temperature Shock & Pinning",
            text: "Remove plastic bags entirely. Subject bare logs to a cold-water shock bath (10-12°C) for 12 hours. Place blocks on fruiting racks at 15°C to induce pins and harvest firm umbrella caps.",
          },
        ],
      },
    ],
  };

  const otherVarieties = [
    {
      slug: "white-button",
      name: "White Button Mushroom",
      scientific: "Agaricus bisporus",
      icon: Flame,
      color: "text-amber-500",
    },
    {
      slug: "oyster",
      name: "Oyster Mushroom",
      scientific: "Pleurotus ostreatus",
      icon: Leaf,
      color: "text-emerald-500",
    },
    {
      slug: "milky-mushroom",
      name: "Milky Mushroom",
      scientific: "Calocybe indica",
      icon: Sparkles,
      color: "text-blue-400",
    },
    {
      slug: "lions-mane",
      name: "Lion's Mane",
      scientific: "Hericium erinaceus",
      icon: Zap,
      color: "text-purple-400",
    },
  ];

  return (
    <main
      id="shiitake-mushroom-page"
      className="min-h-screen bg-transparent pt-20 sm:pt-24 pb-12 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-6xl mx-auto px-4 sm:px-6 pt-2 pb-2"
      >
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/mushroom-types"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Mushroom Types
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Shiitake Mushroom
          </li>
        </ol>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Back Link & Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/mushroom-types"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Varieties List</span>
          </Link>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
            High Profit Margin (100% - 250%)
          </span>
        </div>

        {/* Hero Section */}
        <section
          aria-labelledby="shiitake-mushroom-hero"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="grid lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  Scientific: Lentinula edodes
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                  Level: Advanced / Expert Control
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  शीताके मशरूम
                </span>
              </div>

              <h1
                id="shiitake-mushroom-hero"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase leading-tight"
              >
                Shiitake Mushroom
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                The world&apos;s second most popular mushroom, offering massive market margins. Prized in fine dining, oriental gastronomy, and lentinan nutraceutical extraction with high wholesale rates.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Market Price
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    ₹400 - ₹900 (Fresh)
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Dry Gourmet Rate
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-600 dark:text-slate-400">
                    ₹2,000 - ₹2,500 / kg
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Profit Margin
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                    100% - 250%
                  </div>
                </div>
              </div>
            </div>

            {/* Spec / Order Card with Image */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-white/30 dark:bg-white/[0.02] p-3 space-y-2.5">
                <div className="relative rounded-xl overflow-hidden aspect-video w-full bg-slate-100 dark:bg-white/[0.02]">
                  <Image
                    src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
                    alt="Commercial Shiitake mushroom (Lentinula edodes) growing on sterilized hardwood sawdust logs"
                    width={600}
                    height={338}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Pure Culture Strain Grade A
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Autoclaved Log Ready
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20premium%20spawn%20for%20Shiitake%20Mushroom.%20Please%20send%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <Gem className="w-3.5 h-3.5" />
                    <span>Buy Spawn (Seed)</span>
                  </a>

                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Shiitake%20Mushroom%20farming%20setup."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct WhatsApp Consult</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Detailed Specifications Left Column */}
          <div className="lg:col-span-8 space-y-4">
            {/* Variety Overview Card with In-Text Internal Links */}
            <article
              aria-labelledby="overview-heading"
              className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2"
            >
              <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
                <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
                <h2
                  id="overview-heading"
                  className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Variety Overview &amp; Commercial Potential
                </h2>
              </div>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Shiitake (<em>Lentinula edodes</em>) is a highly esteemed culinary and medicinal mushroom native to East Asia. Renowned for its rich earthy umami flavor and meaty texture, Shiitake is in high demand across fine dining, gourmet pizza parlors, oriental cuisines, and nutritional drug extraction industries. Unlike fast-turnaround crops like{" "}
                <Link
                  href="/mushroom-types/oyster"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Oyster Mushrooms
                </Link>{" "}
                or high-volume seasonal varieties like{" "}
                <Link
                  href="/mushroom-types/white-button"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  White Button Mushrooms
                </Link>
                , Shiitake cultivation requires specialized thermal autoclaved substrate blocks (sawdust logs) and sterile laminar flow inoculation.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                While Shiitake has a longer incubation phase (50 to 75 days for complete mycelial log browning and melanization), its premium wholesale pricing of ₹400 to ₹900 per fresh kilogram—and up to ₹2,500 per dried kilogram—makes it one of the most profitable exotic varieties. Aspiring growers can source laboratory-certified pure culture{" "}
                <Link
                  href="/spawn-seed"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Shiitake mushroom spawn &amp; sawdust seeds
                </Link>
                , learn substrate sterilization protocols through our{" "}
                <Link
                  href="/training"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  masterclass mushroom training program
                </Link>
                , and plan climate-controlled fruiting chambers using our{" "}
                <Link
                  href="/model-details"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  commercial exotic farm models
                </Link>
                .
              </p>
            </article>

            {/* Optimal Farming Technical Parameters Grid */}
            <section
              aria-labelledby="parameters-heading"
              className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
            >
              <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h2
                    id="parameters-heading"
                    className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                  >
                    Optimal Farming Technical Parameters
                  </h2>
                </div>
                <span className="text-[10.5px] text-slate-500 font-medium">
                  6 Variables
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {/* Temp */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
                    <Thermometer className="w-3.5 h-3.5" />
                    <span>Temperature</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    14°C - 20°C / 12°C - 16°C
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Inoculation: 14°C–20°C; Fruiting: 12°C–16°C.
                  </p>
                </div>

                {/* Humidity */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-500 text-[10px] font-bold uppercase tracking-wider">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Humidity (RH)</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    85% - 92% RH
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Controlled via ultrasonic humidity fogging units.
                  </p>
                </div>

                {/* Substrate */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Substrate Material</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white line-clamp-1">
                    Hardwood Sawdust + Bran
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Broadleaf wood (oak, rubber) + 20% wheat bran &amp; gypsum.
                  </p>
                </div>

                {/* Incubation */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-500 text-[10px] font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Incubation Period</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    50 - 75 Days (Long)
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Includes popcorn bump formation and bark browning.
                  </p>
                </div>

                {/* Cropping */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-pink-500 text-[10px] font-bold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Cropping Phase</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    40 - 50 Days
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Yields 3–4 productive flushes with cold shocks.
                  </p>
                </div>

                {/* Casing */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-teal-500 text-[10px] font-bold uppercase tracking-wider">
                    <Inbox className="w-3.5 h-3.5" />
                    <span>Casing Soil Layer</span>
                  </div>
                  <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400">
                    Not Required
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Fruiting emerges directly from exposed stripped logs.
                  </p>
                </div>
              </div>
            </section>

            {/* Market Advantages & Key Features */}
            <section
              aria-labelledby="features-heading"
              className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
            >
              <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
                <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                <h2
                  id="features-heading"
                  className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Commercial Market Advantages &amp; Highlights
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Lucrative Gourmet &amp; Fine Dining Markets
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Commands premium rates of ₹400–₹900/kg in luxury hotel kitchens, pan-Asian restaurants, and organic retail chains.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Medicinal &amp; Nutraceutical Demand
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Packed with beta-glucans and lentinan, a bio-active polysaccharide widely utilized in immune formulations and wellness extracts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Dry Export Viability (₹2,000 - ₹2,500/kg)
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dehydrated whole or sliced Shiitake retains flavor for years, facilitating profitable domestic and international shipments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Savory Umami &amp; Plant-Based Meat
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Rich in natural glutamates and dense fibrillar texture, serving as a high-value whole-food vegan meat substitute.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step-by-Step Farming Protocol (5 Steps) */}
            <section
              aria-labelledby="protocol-heading"
              className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
            >
              <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h2
                    id="protocol-heading"
                    className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                  >
                    Step-by-Step Shiitake Farming Protocol
                  </h2>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                  5 Stages
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Step 1 */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                      High-grade Hardwood Substrate Formulation
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Formulate sawdust blocks using aged broadleaf sawdust (oak, maple, or rubber tree). Supplement with 20% wheat or rice bran for nitrogen and 1% calcium sulfate (gypsum) to balance pH and porosity. Hydrate to 60% moisture.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                      Autoclavation &amp; Heat Sterilization
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Pack the blended substrate firmly into autoclavable polypropylene bags equipped with microporous filter patches (0.2 micron). Sterilize inside a high-pressure autoclave unit at 121°C (15 psi) for 3 to 4 hours to eradicate competitive fungi and bacteria.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                      Sterile Laminar Flow Inoculation
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Cool the bags completely inside an ISO Class 5 clean environment. Under HEPA-filtered horizontal laminar airflow benches, inoculate each bag with 2%–3% pure grain or sawdust Shiitake spawn, heat-sealing the bags immediately with an impulse sealer.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                      Sawdust Log Browning &amp; Melanization
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Incubate bags at 20°C–22°C for 50 to 75 days in the dark. The mycelium first turns completely white, forms bumpy popcorn-like primordia under the plastic, and gradually synthesizes melanin to form a protective brown bark-like skin.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                      Cold Temperature Shock &amp; Pinning Induction
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Peel off the plastic bag completely. Immerse bare sawdust logs in a cold-water shock bath (10°C–12°C) for 12 hours. Transfer to fruiting racks at 12°C–16°C with 85%–90% humidity and diffused lighting. Harvest firm umbrella caps in 5–7 days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Supply Dynamics & Subsidies */}
            <article
              aria-labelledby="market-demand-heading"
              className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2"
            >
              <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
                <Coins className="w-4 h-4 text-emerald-500 shrink-0" />
                <h2
                  id="market-demand-heading"
                  className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Supply Dynamics, Market Demand &amp; Subsidies
                </h2>
              </div>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Shiitake is heavily consumed across <strong>Delhi, Mumbai, Goa, Bangalore, and Pune</strong>. Cultivators with climate-controlled automated setups earn massive profits by supplying directly to luxury hotel kitchens, modern gourmet supermarkets, and export houses. Furthermore, government subsidies under NHB (National Horticulture Board) and MIDH offer capital assistance of 40% to 50% for setting up modern autoclaving and sterile growing chambers.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Check setup guidelines for your state in our{" "}
                <Link
                  href="/locations/pune"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Maharashtra farming center
                </Link>{" "}
                or explore our comprehensive{" "}
                <Link
                  href="/model-details"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  commercial setup comparison
                </Link>{" "}
                to calculate capital costs, sawdust log turnover, and monthly operating revenues.
              </p>
            </article>
          </div>

          {/* Setup Inquiry Side Column Right */}
          <aside
            aria-label="Consultation and Booking Sidebar"
            className="lg:col-span-4 space-y-4"
          >
            {/* Quick Consultation Quote Card */}
            <div className="rounded-2xl p-4 border border-emerald-500/30 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.02] backdrop-blur-xs space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-[13px] font-black uppercase text-slate-900 dark:text-white leading-tight">
                    Got Questions?
                  </h3>
                  <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium">
                    Speak with our Chief Technical Consultant
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Autoclave unit &amp; laminar flow chamber design
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Hardwood sawdust sourcing &amp; log browning SOPs
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    High-yield pure culture spawn supply
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Shiitake%20Mushroom%20farming%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 hover:dark:bg-slate-200 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Consult</span>
              </a>
            </div>

            {/* Variety Project Inquiry CTA */}
            <div className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3">
              <div className="space-y-1">
                <h3 className="text-xs sm:text-[13px] font-black uppercase text-slate-900 dark:text-white tracking-tight">
                  Variety Project Inquiry
                </h3>
                <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  Interested in setting up a pilot or commercial Shiitake cultivation unit? Submit your requirements for a customized business blueprint.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-2 text-center">
                <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  Ready to launch an exotic gourmet setup?
                </p>
                <Link
                  href="/enquiry"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                >
                  <span>Enquiry Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="pt-1 border-t border-slate-200/40 dark:border-white/5 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Advanced Mushroom Workshop</span>
                </div>
                <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Master sawdust formulation, autoclave sterilization &amp; cold shock techniques.
                </p>
                <Link
                  href="/training"
                  className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Training Modules</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Explore Other Premium Varieties */}
        <section
          aria-labelledby="other-varieties-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="text-center space-y-0.5">
            <h2
              id="other-varieties-heading"
              className="text-sm sm:text-base font-extrabold uppercase text-slate-900 dark:text-white tracking-tight"
            >
              Explore Other Commercial Varieties
            </h2>
            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium">
              Complementary commercial mushroom portfolios with high biological efficiency
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {otherVarieties.map((v) => {
              const IconComp = v.icon;
              return (
                <Link
                  key={v.slug}
                  href={`/mushroom-types/${v.slug}`}
                  className="p-3 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/30 dark:bg-white/[0.02] hover:border-emerald-500/40 hover:bg-white/60 dark:hover:bg-white/[0.04] transition-all text-center flex flex-col items-center justify-center space-y-2 group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-[11.5px] font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase leading-tight">
                      {v.name}
                    </h3>
                    <p className="text-[9.5px] italic text-slate-500 dark:text-slate-400 leading-tight">
                      {v.scientific}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 pt-0.5">
                    <span>View Guide</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
