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
  Sun,
  Coins,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Milky Mushroom Guide | Benefits, Cultivation & Growing Techniques | Organic Mushrooms Farm",
  description:
    "Complete Milky Mushroom (Calocybe indica) cultivation method. Read about summer farming parameters, wheat straw pasteurization, casing soil recipe, and spawn seeding.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-types/milky-mushroom",
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
    title: "Milky Mushroom Guide | Benefits, Cultivation & Growing Techniques | Organic Mushrooms Farm",
    description:
      "Complete Milky Mushroom (Calocybe indica) cultivation method. Read about summer farming parameters, wheat straw pasteurization, casing soil recipe, and spawn seeding.",
    url: "https://organicmushroomsfarm.com/mushroom-types/milky-mushroom",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Milky Mushroom Guide | Benefits, Cultivation & Growing Techniques | Organic Mushrooms Farm",
    description:
      "Complete Milky Mushroom (Calocybe indica) cultivation method. Read about summer farming parameters, wheat straw pasteurization, casing soil recipe, and spawn seeding.",
  },
};

export default function MilkyMushroomPage() {
  const pageUrl = "https://organicmushroomsfarm.com/mushroom-types/milky-mushroom";

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
        name: "Milky Mushroom Guide | Benefits, Cultivation & Growing Techniques | Organic Mushrooms Farm",
        description:
          "Complete Milky Mushroom (Calocybe indica) cultivation method. Read about summer farming parameters, wheat straw pasteurization, casing soil recipe, and spawn seeding.",
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
            name: "Milky Mushroom",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: "Milky Mushroom (Calocybe indica)",
        description:
          "The perfect summer cropping variety with an exceptionally long fresh shelf-life. High temperature tolerance (25°C - 35°C), low infrastructure electricity cost, and high biological efficiency.",
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
          price: "55",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Scientific Name",
            value: "Calocybe indica",
          },
          {
            "@type": "PropertyValue",
            name: "Hindi Name",
            value: "दूधिया मशरूम (Milky Mushroom)",
          },
          {
            "@type": "PropertyValue",
            name: "Optimal Cropping Temperature",
            value: "25°C - 35°C (Ideal for Indian Summers)",
          },
          {
            "@type": "PropertyValue",
            name: "Required Humidity Level",
            value: "80% - 85% RH",
          },
          {
            "@type": "PropertyValue",
            name: "Production Substrate",
            value: "Chopped Paddy Straw or Wheat Straw",
          },
          {
            "@type": "PropertyValue",
            name: "Casing Layer",
            value: "Required (2-3 cm steam-pasteurized casing soil)",
          },
          {
            "@type": "PropertyValue",
            name: "Incubation Duration",
            value: "20 - 25 Days",
          },
          {
            "@type": "PropertyValue",
            name: "Cropping Phase",
            value: "25 - 30 Days",
          },
          {
            "@type": "PropertyValue",
            name: "Shelf Life",
            value: "3-5 days ambient, up to 15 days refrigerated",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        name: "How to Grow Milky Mushrooms (Calocybe indica) Commercially in Summer",
        description:
          "5-step commercial growing protocol for Milky mushrooms covering straw sterilization, bag spawning, incubation, casing soil application, and harvest.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Substrate Pre-treatment & Sterilization",
            text: "Chop fresh wheat/paddy straw into 2-4 cm bits. Soak in warm water with carbendazim and formalin (chemical sterilization) or expose to hot boiling water sterilization for 3 hours.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Bagging & Grain Inoculation",
            text: "Spawn the sterilized straw in layers inside high-gauge transparent PP bags (3-4 layers of grain spawn). Pack firmly to optimize mycelium colonisation.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Spawn Run Chamber Configuration",
            text: "Place inoculated bags in dark, warm incubation rooms at 25-30°C. Within 20-25 days, thick white cottony mycelium wraps the entire straw block.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Casing Layer Application",
            text: "Cut bags horizontally into halves. Apply a 2-3 cm thick steam-pasteurized casing soil (sandy loam mixed with calcium carbonate/gypsum). Water adequately.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Cropping & Light Trigger",
            text: "Move casing blocks to cropping units with 80% humidity, clean fresh air, and light diffusion (approx 200-500 lux). White button-shaped pins emerge in 8-12 days.",
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
      slug: "shiitake",
      name: "Shiitake Mushroom",
      scientific: "Lentinula edodes",
      icon: Sparkles,
      color: "text-purple-400",
    },
    {
      slug: "cordyceps",
      name: "Cordyceps Militaris",
      scientific: "Cordyceps militaris",
      icon: Zap,
      color: "text-amber-400",
    },
  ];

  return (
    <main
      id="milky-mushroom-page"
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
            Milky Mushroom
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
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            Summer Cropping Specialist
          </span>
        </div>

        {/* Hero Section */}
        <section
          aria-labelledby="milky-mushroom-hero"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="grid lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Scientific: Calocybe indica
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  Level: Intermediate (Medium)
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20">
                  दूधिया मशरूम
                </span>
              </div>

              <h1
                id="milky-mushroom-hero"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase leading-tight"
              >
                Milky Mushroom
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                The perfect summer cropping variety with an exceptionally long fresh shelf-life. Flourishes naturally in warm Indian tropical climates (25°C–35°C) without expensive chiller air-conditioning, producing heavy solid white stems and pristine yields.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Market Price
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    ₹120 - ₹180 / kg
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Production Cost
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-600 dark:text-slate-400">
                    ₹50 - ₹65 / kg
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Profit Margin
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                    50% - 65%
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
                    alt="Fresh commercial Milky mushroom (Calocybe indica) cultivation on wheat straw beds"
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
                    Biological Spawn Grade A
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Heat Adapted
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20premium%20spawn%20for%20Milky%20Mushroom.%20Please%20send%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <Gem className="w-3.5 h-3.5" />
                    <span>Buy Spawn (Seed)</span>
                  </a>

                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Milky%20Mushroom%20farming%20setup."
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
                  Variety Overview & Summer Commercial Potential
                </h2>
              </div>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Milky Mushroom (<em>Calocybe indica</em>) is an attractive, robust white mushroom native to tropical India. Unlike{" "}
                <Link
                  href="/mushroom-types/white-button"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  White Button Mushrooms
                </Link>{" "}
                which demand energy-intensive sub-zero chiller setups, Milky mushrooms grow phenomenally in hot summer, tropical plains without heavy AC support. It is highly valued for its thick solid stems, attractive clean white appearance, and superb shelf life of 3–5 days at room temperature (and up to 15 days under refrigeration). It is exceptionally popular for small to mid-scale commercial growers in central and southern India.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Growers can acquire practical substrate techniques through our{" "}
                <Link
                  href="/training"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  summer mushroom farming training
                </Link>
                , order pure first-generation{" "}
                <Link
                  href="/spawn-seed"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Milky mushroom spawn & seeds
                </Link>
                , and set up economical shed infrastructure via our{" "}
                <Link
                  href="/model-details"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  low-cost commercial farm blueprints
                </Link>
                . Milky mushroom serves as the ideal counter-seasonal crop to balance farm cash flow during summer heatwaves.
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
                    25°C - 35°C (Summer Peak)
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Flourishes during hot Indian summer months.
                  </p>
                </div>

                {/* Humidity */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-500 text-[10px] font-bold uppercase tracking-wider">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Humidity (RH)</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    80% - 85% RH
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Maintained through floor wetting or mist nozzles.
                  </p>
                </div>

                {/* Substrate */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Substrate Material</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white line-clamp-1">
                    Chopped Paddy / Wheat Straw
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Readily available agri-residue pasteurized at 2-4 cm.
                  </p>
                </div>

                {/* Incubation */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-500 text-[10px] font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Incubation Period</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    20 - 25 Days
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Spawn run in dark, warm incubation rooms.
                  </p>
                </div>

                {/* Cropping */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-pink-500 text-[10px] font-bold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Cropping Cycle</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    25 - 30 Days
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Pins appear within 8-12 days of casing.
                  </p>
                </div>

                {/* Casing */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-rose-500 text-[10px] font-bold uppercase tracking-wider">
                    <Inbox className="w-3.5 h-3.5" />
                    <span>Casing Soil Layer</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    Required (2-3 cm)
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Pasteurized sandy loam soil with calcium carbonate.
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
                  Commercial Market Advantages & Highlights
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Exceptional Heat Tolerance
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Requires zero expensive AC equipment, performing brilliantly between 28°C and 35°C ambient temperatures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Minimal Operating Electricity Cost
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Negligible electricity overheads since energy-intensive heating or chilling compressors are not needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Superior Fresh Shelf Stability
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dense firm tissue resists moisture loss, lasting 3–5 days at room temperature and 15 days in cold storage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      High Biological Efficiency
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Yields up to 100% of dry substrate weight under standard commercial parameters and good casing management.
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
                    Step-by-Step Milky Mushroom Farming Protocol
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
                      Substrate Pre-treatment & Sterilization
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Chop fresh wheat or paddy straw into 2–4 cm bits. Soak in warm water with carbendazim and formalin for chemical sterilization, or subject to boiling water steam pasteurization for 2.5–3 hours. Drain until 65% moisture remains.
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
                      Bagging & Grain Inoculation
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Spawn the sterilized straw in alternating layers inside high-gauge transparent PP bags (3–4 layers of grain spawn at 4%–5% wet weight). Compress firmly and tie bag mouths to promote rapid mycelial colonization.
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
                      Spawn Run Chamber Configuration
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Place inoculated bags in dark, warm incubation rooms at 25°C–30°C. Within 20–25 days, thick white cottony mycelium wraps the entire straw block into a compact, solid white structure.
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
                      Casing Layer Application
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Cut bags horizontally into halves. Apply a 2–3 cm thick steam-pasteurized casing soil layer (sandy loam soil mixed with calcium carbonate or gypsum). Mist with clean water to activate vegetative pinheads.
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
                      Cropping & Light Trigger
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Move cased blocks to cropping chambers with 80%–85% humidity, fresh air ventilation, and diffused light (200–500 lux). White button-shaped pins emerge in 8–12 days and develop into robust marketable mushrooms.
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
                  Supply Dynamics, Market Demand & Summer Opportunity
                </h2>
              </div>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Milky mushroom is an extraordinarily profitable option for growers in <strong>Madhya Pradesh, Uttar Pradesh, Bihar, Maharashtra, Rajasthan, Tamil Nadu, and West Bengal</strong> during dry summer spells when button mushroom production slows down. Because of its snow-white appearance and fleshy texture, it commands premium wholesale rates as an all-natural summer alternative.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Check regional summer growing models in our{" "}
                <Link
                  href="/locations/pune"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Maharashtra farming center
                </Link>{" "}
                or compare ROI projections against{" "}
                <Link
                  href="/mushroom-types/oyster"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Oyster Mushroom setups
                </Link>{" "}
                to diversify your commercial mushroom harvest.
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
                    Summer greenhouse setup guidance
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Casing soil composition advisory
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Wholesale spawn supply contracts
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Milky%20Mushroom%20farming%20setup."
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
                  Interested in setting up a commercial Milky mushroom unit? Submit your requirements for a customized business blueprint.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-2 text-center">
                <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  Need certified spawn or summer shed project consulting?
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
                  <span>Summer Farming Workshop</span>
                </div>
                <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Learn summer mushroom techniques starting at ₹299.
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
