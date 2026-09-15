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
  HeartPulse,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Reishi Mushroom (Ganoderma lucidum) | Benefits, Cultivation & Uses | Organic Mushrooms Farm",
  description:
    "Exhaustive details on Reishi Mushroom (Ganoderma lucidum) commercial cultivation. Find optimal temperature, sawdust sterilization methods, and dry supply prices.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-types/reishi",
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
    title: "Reishi Mushroom (Ganoderma lucidum) | Benefits, Cultivation & Uses | Organic Mushrooms Farm",
    description:
      "Exhaustive details on Reishi Mushroom (Ganoderma lucidum) commercial cultivation. Find optimal temperature, sawdust sterilization methods, and dry supply prices.",
    url: "https://organicmushroomsfarm.com/mushroom-types/reishi",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Reishi Mushroom (Ganoderma lucidum) | Benefits, Cultivation & Uses | Organic Mushrooms Farm",
    description:
      "Exhaustive details on Reishi Mushroom (Ganoderma lucidum) commercial cultivation. Find optimal temperature, sawdust sterilization methods, and dry supply prices.",
  },
};

export default function ReishiMushroomPage() {
  const pageUrl = "https://organicmushroomsfarm.com/mushroom-types/reishi";

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
        name: "Reishi Mushroom (Ganoderma lucidum) | Benefits, Cultivation & Uses | Organic Mushrooms Farm",
        description:
          "Exhaustive details on Reishi Mushroom (Ganoderma lucidum) commercial cultivation. Find optimal temperature, sawdust sterilization methods, and dry supply prices.",
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
            name: "Reishi Mushroom",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: "Reishi Mushroom (Ganoderma lucidum)",
        description:
          "The 'Mushroom of Immortality' is a world-renowned botanical medicinal superstar, cultivated on sterilized hardwood sawdust for triterpenes and immune-boosting extracts.",
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
            value: "Ganoderma lucidum",
          },
          {
            "@type": "PropertyValue",
            name: "Hindi Name",
            value: "ऋषि मशरूम / गेनोडर्मा (Reishi / Ganoderma)",
          },
          {
            "@type": "PropertyValue",
            name: "Optimal Cropping Temperature",
            value: "24°C - 30°C (Warm Loving)",
          },
          {
            "@type": "PropertyValue",
            name: "Required Humidity Level",
            value: "85% - 95% RH",
          },
          {
            "@type": "PropertyValue",
            name: "Production Substrate",
            value: "Broadleaf hardwood sawdust supplemented with grain bran",
          },
          {
            "@type": "PropertyValue",
            name: "Casing Layer",
            value: "Not Required",
          },
          {
            "@type": "PropertyValue",
            name: "Incubation Duration",
            value: "25 - 35 Days",
          },
          {
            "@type": "PropertyValue",
            name: "Cropping Phase",
            value: "60 - 90 Days",
          },
          {
            "@type": "PropertyValue",
            name: "Dry Market Value",
            value: "₹1,000 - ₹2,500 per Kg (Dry)",
          },
          {
            "@type": "PropertyValue",
            name: "Production Cost",
            value: "₹300 - ₹400 per Kg (Dry)",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        name: "How to Grow Reishi Mushroom (Ganoderma lucidum) Step-by-Step",
        description:
          "5-stage commercial growing protocol for Reishi mushrooms covering broadleaf sawdust supplementation, autoclave bag sterilization, sterile room colonization, antler vs conk formation, and solar dehydration.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Substrate & Supplementation Mixing",
            text: "Prepare sawdust from broadleaf deciduous trees. Add 15% wheat/rice bran, 1% sucrose, and 1.5% calcium carbonate. Adjust moisture to 63% for optimal mycelial growth.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Thermal Bag Autoclavation",
            text: "Pack inside durable polypropylene filter bags. Autoclave under high pressure steam at 121°C for 3 hours to completely eradicate competitive mold spores.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Inoculation & Room Colonization",
            text: "Inoculate blocks with clean grain spawn inside a sterile HEPA laminar airflow station. Store spawned blocks in dark incubation rooms at 25°C–28°C for 25–35 days.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Antler or Conk Formation Setup",
            text: "For antler-shaped growth, maintain high CO2 (>2,000 ppm). For flat kidney-shaped conks, introduce fresh air ventilation (CO2 < 1,000 ppm) with 85%–95% humidity and gentle lighting.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Harvesting & Solar Dehydration",
            text: "Harvest when the white/yellow outer margins turn dark red-brown with a lacquered gloss. Dry the woody conks in professional solar tunnel dryers until rigid and moisture drops below 10%. Store in vacuum bags.",
          },
        ],
      },
    ],
  };

  const otherVarieties = [
    {
      slug: "lions-mane",
      name: "Lion's Mane",
      scientific: "Hericium erinaceus",
      icon: Sparkles,
      color: "text-purple-400",
    },
    {
      slug: "shiitake",
      name: "Shiitake Mushroom",
      scientific: "Lentinula edodes",
      icon: Flame,
      color: "text-amber-500",
    },
    {
      slug: "cordyceps",
      name: "Cordyceps Militaris",
      scientific: "Cordyceps militaris",
      icon: Zap,
      color: "text-amber-500",
    },
    {
      slug: "white-button",
      name: "White Button",
      scientific: "Agaricus bisporus",
      icon: Flame,
      color: "text-amber-500",
    },
  ];

  return (
    <main
      id="reishi-mushroom-page"
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
            Reishi Mushroom
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
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20">
            High Profit Margin (200% - 500%)
          </span>
        </div>

        {/* Hero Section */}
        <section
          aria-labelledby="reishi-hero"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="grid lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20">
                  Scientific: Ganoderma lucidum
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  Level: Specialized / Hard
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                  ऋषि मशरूम / गेनोडर्मा
                </span>
              </div>

              <h1
                id="reishi-hero"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase leading-tight"
              >
                Reishi Mushroom (Ganoderma)
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                The &apos;Mushroom of Immortality&apos; is a world-renowned botanical medicinal superstar, cultivated on sterilized hardwood sawdust for triterpenes and immune-boosting extracts.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Dry Market Rate
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    ₹1,000 - ₹2,500 / kg
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Production Cost
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-600 dark:text-slate-400">
                    ₹300 - ₹400 / kg (Dry)
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Profit Margin
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                    200% - 500%
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
                    alt="Commercial Reishi mushroom (Ganoderma lucidum) cultivation in climate-controlled indoor farm unit"
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
                    Bioactive Strain Grade A
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Hardwood Sawdust Ready
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20premium%20spawn%20for%20Reishi%20Mushroom%20(Ganoderma).%20Please%20send%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <Gem className="w-3.5 h-3.5" />
                    <span>Buy Spawn (Seed)</span>
                  </a>

                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Reishi%20Mushroom%20farming%20setup."
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
                Reishi (<em>Ganoderma lucidum</em>), locally revered in traditional wellness setups as the &apos;King of Herbs&apos;, is a woody polypore fungus globally celebrated for its potent therapeutic, adaptogenic, and immune-modulating properties. Unlike perishable table varieties like{" "}
                <Link
                  href="/mushroom-types/white-button"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  White Button Mushrooms
                </Link>{" "}
                or rapid-cycling{" "}
                <Link
                  href="/mushroom-types/oyster"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Oyster Mushrooms
                </Link>
                , Reishi is grown specifically for pharmaceutical extraction, wellness teas, dietary capsules, and anti-aging syrups.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Cultivating Reishi requires broadleaf hardwood sawdust supplemented with grain bran and a warm incubation environment (24°C–30°C), which seamlessly aligns with tropical and sub-tropical conditions across Indian states without excessive cooling overheads. Because harvested conks dry into hard, shelf-stable wooden brackets, growers do not face perishable cold-chain stress. You can secure laboratory-tested{" "}
                <Link
                  href="/spawn-seed"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  pure culture Reishi mushroom spawn
                </Link>
                , master sawdust sterilization and antler versus conk ventilation techniques in our{" "}
                <Link
                  href="/training"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  expert cultivation training workshop
                </Link>
                , or study climate infrastructure via our{" "}
                <Link
                  href="/model-details"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  commercial setup models
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
                    24°C - 30°C (Warm Loving)
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Natural tropical affinity reduces air conditioning energy costs.
                  </p>
                </div>

                {/* Humidity */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-500 text-[10px] font-bold uppercase tracking-wider">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Humidity (RH)</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    85% - 95% RH
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    High ultrasonic misting supports glossy kidney conk growth.
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
                    Broadleaf hardwood sawdust + 15% wheat/rice bran + 1.5% CaCO3.
                  </p>
                </div>

                {/* Incubation */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-500 text-[10px] font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Incubation Period</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    25 - 35 Days
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Dense white mycelium binds sawdust block into rigid brick.
                  </p>
                </div>

                {/* Cropping */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-pink-500 text-[10px] font-bold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Cropping Phase</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    60 - 90 Days
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Extended fruiting cycle yielding dense, lacquered medicinal conks.
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
                    Fruiting emerges directly from top collar or sliced bag face.
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
                  <HeartPulse className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Vast Pharmaceutical &amp; Nutraceutical Market
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Extensively processed into premium health powders, herbal tea blends, adaptogenic capsules, and anti-aging syrups.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      High Warmth &amp; Heat Adaptability
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Thrives in high humidity and warm temperatures (24°C–30°C), making summer cultivation highly feasible without expensive chillers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Exceptional Post-Harvest Shelf Life
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dries until fully hard and woody, allowing storage for 2 to 3 years without spoilage, unlike delicate culinary mushrooms like{" "}
                      <Link
                        href="/mushroom-types/lions-mane"
                        className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                      >
                        Lion&apos;s Mane
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Stable Price Index &amp; High Returns
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dry conks fetch steady contracts of ₹1,000 to ₹2,500/kg from wellness brands, delivering margins between 200% and 500%.
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
                    Step-by-Step Reishi Farming Protocol
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
                      Substrate &amp; Supplementation Mixing
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Prepare clean hardwood sawdust from broadleaf deciduous trees (oak, eucalyptus, or rubber wood). Supplement with 15% wheat or rice bran, 1% sucrose, and 1.5% calcium carbonate (gypsum). Hydrate carefully to an exact 63% moisture level.
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
                      Thermal Bag Autoclavation
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Pack 1.5 kg to 2 kg of supplemented substrate into autoclavable polypropylene filter patch bags. Sterilize in a pressure autoclave or steam chamber at 121°C (15 psi) for 3 full hours to eliminate stubborn competitor spores and wild trichoderma.
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
                      Inoculation &amp; Room Colonization
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      After bags cool below 25°C in a sterile cleanroom, inoculate with 2%–3% pure grain spawn under a HEPA laminar airflow station. Seal tightly and store in dark incubation rooms maintained at 25°C–28°C for 25 to 35 days until dense white mycelium fully binds the sawdust.
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
                      Antler or Conk Formation Setup
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      For branched antler-shaped growth, keep CO2 high (&gt;2,000 ppm) with minimal venting. For traditional flat kidney conks, introduce fresh air ventilation (CO2 under 1,000 ppm), diffused lighting (500–1,000 lux), and maintain 85%–95% RH.
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
                      Harvesting &amp; Solar Dehydration
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Harvest once the white growing margin turns a deep, varnished reddish-brown. Dehydrate the woody brackets in commercial solar tunnel dryers or food-grade dehydrators at 55°C until completely rigid and moisture is below 10%. Pack into vacuum-sealed pouches.
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
                Ganoderma lucidum enjoys continuous purchase interest from <strong>ayurvedic brands, wellness supplement startups, and premium export agencies</strong> in Southeast Asia, the United States, and Europe. Unlike perishable crops, dried Reishi brackets allow smallholder growers to accumulate stock over time and negotiate bulk trade prices without panic selling. Commercial setups are eligible for National Horticulture Board (NHB) and state horticulture subsidies covering 40% to 50% of infrastructure costs for autoclaves, fruiting units, and solar dryers.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Explore local cultivation climate feasibilities through our{" "}
                <Link
                  href="/cities/karnataka/bangalore"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Bangalore mushroom market guide
                </Link>{" "}
                or evaluate customized operational setups via our{" "}
                <Link
                  href="/model-details"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  commercial farm models
                </Link>{" "}
                to project capital investment, bag batch yields, and net profits.
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
                    Hardwood sawdust &amp; bran formula guidelines
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Conk vs Antler CO2 control &amp; ventilation
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    High triterpene medicinal strain spawn supply
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Reishi%20Mushroom%20farming%20setup."
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
                  Interested in establishing a commercial Reishi mushroom laboratory or greenhouse setup? Get in touch for custom blueprints and feasibility analyses.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-2 text-center">
                <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  Ready to launch a high-yield Reishi project?
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
                  <span>Medicinal Mushroom Workshop</span>
                </div>
                <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Learn substrate enrichment, sterile inoculation, fruiting chamber CO2 management &amp; solar drying.
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

        {/* Explore Other Commercial Varieties */}
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
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className={`w-4 h-4 ${v.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {v.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 italic">
                      {v.scientific}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
