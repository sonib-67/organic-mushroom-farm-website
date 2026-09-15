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
  Brain,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lion's Mane Mushroom (Hericium erinaceus) | Brain Health & Cultivation | Organic Mushrooms Farm",
  description:
    "Unlock the secrets of Lion's Mane (Hericium erinaceus) mushroom cultivation. Discover Masters Mix sawdust recipe, incubation room guidelines, and harvest cycles.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-types/lions-mane",
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
    title: "Lion's Mane Mushroom (Hericium erinaceus) | Brain Health & Cultivation | Organic Mushrooms Farm",
    description:
      "Unlock the secrets of Lion's Mane (Hericium erinaceus) mushroom cultivation. Discover Masters Mix sawdust recipe, incubation room guidelines, and harvest cycles.",
    url: "https://organicmushroomsfarm.com/mushroom-types/lions-mane",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Lion's Mane Mushroom (Hericium erinaceus) | Brain Health & Cultivation | Organic Mushrooms Farm",
    description:
      "Unlock the secrets of Lion's Mane (Hericium erinaceus) mushroom cultivation. Discover Masters Mix sawdust recipe, incubation room guidelines, and harvest cycles.",
  },
};

export default function LionsManeMushroomPage() {
  const pageUrl = "https://organicmushroomsfarm.com/mushroom-types/lions-mane";

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
        name: "Lion's Mane Mushroom (Hericium erinaceus) | Brain Health & Cultivation | Organic Mushrooms Farm",
        description:
          "Unlock the secrets of Lion's Mane (Hericium erinaceus) mushroom cultivation. Discover Masters Mix sawdust recipe, incubation room guidelines, and harvest cycles.",
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
            name: "Lion's Mane Mushroom",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: "Lion's Mane Mushroom (Hericium erinaceus)",
        description:
          "The world's premium brain-health fungus, prized by health enthusiasts, gourmet culinary chefs, and nootropic supplement formulators with high commercial yield.",
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
          price: "150",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Scientific Name",
            value: "Hericium erinaceus",
          },
          {
            "@type": "PropertyValue",
            name: "Hindi Name",
            value: "लायंस मेन मशरूम / हेरीसियम (Lion's Mane)",
          },
          {
            "@type": "PropertyValue",
            name: "Optimal Cropping Temperature",
            value: "16°C - 24°C (Highly Adaptable)",
          },
          {
            "@type": "PropertyValue",
            name: "Required Humidity Level",
            value: "85% - 95% RH",
          },
          {
            "@type": "PropertyValue",
            name: "Production Substrate",
            value: "Hardwood Sawdust supplemented with soy hulls (Masters Mix 50:50)",
          },
          {
            "@type": "PropertyValue",
            name: "Casing Layer",
            value: "Not Required (Slit fruiting through microporous filter bags)",
          },
          {
            "@type": "PropertyValue",
            name: "Incubation Duration",
            value: "16 - 20 Days (Dark incubation at 20°C - 22°C)",
          },
          {
            "@type": "PropertyValue",
            name: "Cropping Phase",
            value: "14 - 18 Days (Multiple spine flushes)",
          },
          {
            "@type": "PropertyValue",
            name: "Dry Market Value",
            value: "₹3,000 - ₹6,000 / kg (Dehydrated Nootropic Grade)",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        name: "How to Grow Lion's Mane Mushroom (Hericium erinaceus) Step-by-Step",
        description:
          "5-stage commercial growing protocol for Lion's Mane mushrooms covering Masters Mix formulation, bag autoclave sterilization, sterile inoculation, dark incubation, and slit fruiting with icicle spine development.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Masters Mix Substrate Formulation",
            text: "Mix hardwood sawdust with organic soybean hulls in an exact 50:50 dry weight ratio with 60% to 65% water content. This balanced carbon-to-nitrogen ratio produces massive biological efficiency.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Bag Autoclavation & Sterilization",
            text: "Pack substrate firmly into gusseted polypropylene filter patch bags (0.2 micron). Sterilize inside a pressurized steam autoclave at 121°C (15 psi) for 2.5 to 3 hours to eradicate competing trichoderma and mold spores.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Spawning on Laminar Airflow Bench",
            text: "Allow bags to cool below 25°C in a sterile clean room. Under HEPA-filtered laminar airflow benches, inoculate with 2%–3% pure culture Lion's Mane grain or liquid spawn, heat-sealing immediately.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Dark Incubation Period",
            text: "Store inoculated blocks in clean, dark incubation rooms maintained at 20°C–22°C. Within 16–20 days, fine wispy white mycelium completely colonizes the enriched wood substrate.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Slit Fruiting (X-Cuts) & Spines Formation",
            text: "Move colonized blocks to fruiting chambers. Make small X-shaped slits on the face of the bag. Maintain 85%–95% ultrasonic mist and keep CO2 below 1,000 ppm to stimulate lush shaggy icicle teeth. Harvest in 14–18 days.",
          },
        ],
      },
    ],
  };

  const otherVarieties = [
    {
      slug: "shiitake",
      name: "Shiitake Mushroom",
      scientific: "Lentinula edodes",
      icon: Sparkles,
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
      slug: "white-button",
      name: "White Button Mushroom",
      scientific: "Agaricus bisporus",
      icon: Flame,
      color: "text-amber-500",
    },
    {
      slug: "reishi",
      name: "Reishi Mushroom",
      scientific: "Ganoderma lucidum",
      icon: Gem,
      color: "text-red-400",
    },
  ];

  return (
    <main
      id="lions-mane-mushroom-page"
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
            Lion&apos;s Mane
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
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
            High Profit Margin (150% - 300%)
          </span>
        </div>

        {/* Hero Section */}
        <section
          aria-labelledby="lions-mane-hero"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="grid lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                  Scientific: Hericium erinaceus
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Level: Intermediate / Medium
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                  लायंस मेन मशरूम
                </span>
              </div>

              <h1
                id="lions-mane-hero"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase leading-tight"
              >
                Lion&apos;s Mane Mushroom
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                The world&apos;s premium brain-health fungus, prized by health enthusiasts, gourmet culinary chefs, and nootropic supplement formulators with exceptional market returns.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Fresh Market Rate
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    ₹400 - ₹800 / kg
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Dry Nootropic Rate
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-600 dark:text-slate-400">
                    ₹3,000 - ₹6,000 / kg
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Profit Margin
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                    150% - 300%
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
                    alt="Commercial Lion's Mane mushroom (Hericium erinaceus) cultivation on sterilized Masters Mix sawdust substrate blocks"
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
                    Masters Mix Ready
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20premium%20spawn%20for%20Lion's%20Mane%20Mushroom.%20Please%20send%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <Gem className="w-3.5 h-3.5" />
                    <span>Buy Spawn (Seed)</span>
                  </a>

                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Lion's%20Mane%20Mushroom%20farming%20setup."
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
                Lion&apos;s Mane (<em>Hericium erinaceus</em>) is a spectacular white, shaggy icicle mushroom resembling the flowing mane of a lion or sea coral. It is hailed worldwide as an elite superfood for its neuroprotective bioactive elements, specifically containing hericenones and erinacines that stimulate Nerve Growth Factor (NGF) synthesis in the human brain. Unlike traditional agro-waste crops like{" "}
                <Link
                  href="/mushroom-types/oyster"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Oyster Mushrooms
                </Link>{" "}
                or compost-intensive varieties like{" "}
                <Link
                  href="/mushroom-types/white-button"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  White Button Mushrooms
                </Link>
                , Lion&apos;s Mane grows with high efficiency on sterilized hardwood sawdust supplemented with organic soybean hulls—widely known among commercial mushroom growers as the <strong>Masters Mix</strong> formulation.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                In culinary gastronomy, Lion&apos;s Mane possesses a delicate, sweet flavor that closely mimics fresh lobster or jumbo crab meat, making it an extraordinary favorite in upscale plant-based and gourmet dining restaurants. In the pharmaceutical and wellness sectors, dehydrated Lion&apos;s Mane commands premium pricing of ₹3,000 to ₹6,000 per kilogram as nootropic coffee blends and cognitive supplements. Growers can source laboratory-certified pure culture{" "}
                <Link
                  href="/spawn-seed"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Lion&apos;s Mane mushroom spawn &amp; grain seeds
                </Link>
                , study environmental humidity and low-CO2 ventilation control in our{" "}
                <Link
                  href="/training"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  practical commercial training workshop
                </Link>
                , or evaluate customized climate-controlled growing units via our{" "}
                <Link
                  href="/model-details"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  commercial farm models
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
                    16°C - 24°C (Adaptable)
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Incubation: 20°C–22°C; Fruiting: 16°C–24°C.
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
                    Fine ultrasonic misting prevents spines drying out.
                  </p>
                </div>

                {/* Substrate */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Substrate Material</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white line-clamp-1">
                    Masters Mix (50:50)
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    50% Hardwood sawdust + 50% Soy hulls at 65% moisture.
                  </p>
                </div>

                {/* Incubation */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-500 text-[10px] font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Incubation Period</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    16 - 20 Days (Fast)
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Rapid fine white mycelium colonization in dark.
                  </p>
                </div>

                {/* Cropping */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-pink-500 text-[10px] font-bold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Cropping Phase</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    14 - 18 Days
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Yields 2–3 dense white spine-covered flushes.
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
                    Fruiting emerges directly from X-cut bag slits.
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
                  <Brain className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Outstanding Cognitive Health Support
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Clinically documented to support Nerve Growth Factor (NGF) synthesis, memory retention, and mental clarity, fueling an enormous wellness market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      High Commercial Market Value
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Fresh yields command high pricing of ₹400–₹800/kg in metropolitan farmers markets, organic grocery stores, and five-star kitchens.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Fast Inoculation to Harvest Cycle
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Fully colonized and ready to harvest in as little as 3 to 4 weeks from spawning, delivering faster capital turnover than{" "}
                      <Link
                        href="/mushroom-types/shiitake"
                        className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                      >
                        Shiitake
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Elite Vegan Seafood Substitute
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dense meaty texture replicates crab cakes and butter-poached lobster bites, creating viral demand in metropolitan culinary hotspots.
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
                    Step-by-Step Lion&apos;s Mane Farming Protocol
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
                      Masters Mix Substrate Formulation
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Mix 50% broadleaf hardwood sawdust (oak, rubber, beech) with 50% pelleted organic soybean hulls by dry weight. Hydrate thoroughly to 60%–65% moisture. This Masters Mix formulation delivers supreme nutritional density for maximum biological efficiency.
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
                      Bag Packing &amp; Autoclave Sterilization
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Pack 2.5 kg to 3 kg of formulated substrate into high-grade polypropylene filter patch bags (0.2 micron gas exchange filter). Sterilize in a pressure autoclave or atmospheric steam retort at 121°C (15 psi) for 2.5 to 3 hours to guarantee complete mold spore eradication.
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
                      Spawning on Laminar Airflow Bench
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Cool the bags inside an ISO-classified cleanroom. Under a HEPA-filtered horizontal laminar airflow bench, introduce 2%–3% pure grain or liquid culture Lion&apos;s Mane spawn. Seal the bag tops tightly using an impulse sealer and shake gently to disperse grain inoculum evenly.
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
                      Dark Incubation Period (16 - 20 Days)
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Store blocks in a clean, dark incubation room maintained at 20°C–22°C with good air circulation. Within 16 to 20 days, the fine, wispy white mycelium will completely colonize the substrate. Lion&apos;s Mane mycelium is naturally thin and faint compared to oyster mushrooms.
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
                      Slit Fruiting (X-Cuts) &amp; Spine Development
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Transfer blocks into the fruiting chamber. Make 2 to 3 small X-shaped slits (1 to 2 inches) on the bag sides. Maintain 85%–95% RH and ensure generous fresh air exchange (CO2 kept strictly under 800–1,000 ppm) to prevent cauliflower-like growth and promote luxuriant icicle spines. Harvest in 14–18 days.
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
                Lion&apos;s Mane represents a premier high-growth agri-tech sector. In urban wellness markets such as <strong>Bengaluru, Mumbai, Delhi-NCR, Hyderabad, and Pune</strong>, dehydrated Lion&apos;s Mane powder is formulated into high-margin nootropic brain supplements, functional mushroom coffees, and neuro-protective wellness tinctures. Commercial setups are eligible for National Horticulture Board (NHB) and Mission for Integrated Development of Horticulture (MIDH) subsidies offering 40% to 50% capital support for precision autoclaves and clean-room setups.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Review setup feasibility for your region through our{" "}
                <Link
                  href="/cities/karnataka/bangalore"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Bangalore mushroom market guide
                </Link>{" "}
                or explore our interactive{" "}
                <Link
                  href="/model-details"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  commercial farming models
                </Link>{" "}
                to project capital investment, substrate batch sizing, and recurring net profits.
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
                    Masters Mix ratio &amp; sterilization parameters
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Fruiting chamber CO2 &amp; spine humidity automation
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Pure culture high-fruiting spawn supply
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Lion's%20Mane%20Mushroom%20farming%20setup."
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
                  Interested in setting up a pilot or commercial Lion&apos;s Mane cultivation chamber? Submit your requirements for a customized business blueprint.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-2 text-center">
                <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  Ready to launch an exotic Lion&apos;s Mane setup?
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
                  Master Masters Mix sawdust formulation, sterile inoculation &amp; humidity management.
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
