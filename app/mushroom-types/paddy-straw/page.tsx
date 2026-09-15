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
  Zap,
  Phone,
  ShieldCheck,
  Coins,
  SunMedium,
  Timer,
  Wheat,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Paddy Straw Mushroom (Volvariella volvacea) | Cultivation & Price | Organic Mushrooms Farm",
  description:
    "Exhaustive cultivation guide for Paddy Straw Mushroom (Volvariella volvacea). Learn 10-day fast bed construction, bundle parameters, heat incubation, and harvesting tips.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-types/paddy-straw",
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
    title: "Paddy Straw Mushroom (Volvariella volvacea) | Cultivation & Price | Organic Mushrooms Farm",
    description:
      "Exhaustive cultivation guide for Paddy Straw Mushroom (Volvariella volvacea). Learn 10-day fast bed construction, bundle parameters, heat incubation, and harvesting tips.",
    url: "https://organicmushroomsfarm.com/mushroom-types/paddy-straw",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Paddy Straw Mushroom (Volvariella volvacea) | Cultivation & Price | Organic Mushrooms Farm",
    description:
      "Exhaustive cultivation guide for Paddy Straw Mushroom (Volvariella volvacea). Learn 10-day fast bed construction, bundle parameters, heat incubation, and harvesting tips.",
  },
};

export default function PaddyStrawMushroomPage() {
  const pageUrl = "https://organicmushroomsfarm.com/mushroom-types/paddy-straw";

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
        name: "Paddy Straw Mushroom (Volvariella volvacea) | Cultivation & Price | Organic Mushrooms Farm",
        description:
          "Exhaustive cultivation guide for Paddy Straw Mushroom (Volvariella volvacea). Learn 10-day fast bed construction, bundle parameters, heat incubation, and harvesting tips.",
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
            name: "Paddy Straw Mushroom",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: "Paddy Straw Mushroom (Volvariella volvacea)",
        description:
          "Fastest growing warm-climate commercial mushroom cultivated on bundled paddy straw and cotton waste beds with a 10–14 day turnaround cycle.",
        image:
          "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
        brand: {
          "@type": "Brand",
          name: "Organic Mushrooms Farm",
        },
        category: "Tropical Fresh Agricultural Mushroom Crops & Spawn",
        offers: {
          "@type": "Offer",
          url: pageUrl,
          priceCurrency: "INR",
          price: "120",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Scientific Name",
            value: "Volvariella volvacea",
          },
          {
            "@type": "PropertyValue",
            name: "Hindi Name",
            value: "धान का पुआल मशरूम (Paddy Straw Mushroom)",
          },
          {
            "@type": "PropertyValue",
            name: "Optimal Cropping Temperature",
            value: "30°C - 38°C (Extreme Thermophilic / Summer Heat)",
          },
          {
            "@type": "PropertyValue",
            name: "Required Humidity Level",
            value: "85% - 90% RH",
          },
          {
            "@type": "PropertyValue",
            name: "Production Substrate",
            value: "Bundled Paddy Straw, Cotton Waste, Waste Paper, Sugarcane Bagasse",
          },
          {
            "@type": "PropertyValue",
            name: "Casing Layer",
            value: "Not Required",
          },
          {
            "@type": "PropertyValue",
            name: "Incubation Duration",
            value: "7 - 9 Days (Incredibly Fast)",
          },
          {
            "@type": "PropertyValue",
            name: "Cropping Phase",
            value: "10 - 15 Days (Egg Stage Harvest)",
          },
          {
            "@type": "PropertyValue",
            name: "Fresh Commercial Wholesale Rate",
            value: "₹100 - ₹150 per Kg",
          },
          {
            "@type": "PropertyValue",
            name: "Production Cost",
            value: "₹30 - ₹45 per Kg",
          },
          {
            "@type": "PropertyValue",
            name: "Profit Margin",
            value: "65% - 100%",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        name: "How to Cultivate Paddy Straw Mushroom on Bundled Rice Straw Beds",
        description:
          "5-step commercial protocol for cultivating Volvariella volvacea on soaked paddy straw bundles with rapid heat accumulation, high humidity, and egg-stage harvesting.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Paddy Straw Bundling & Soaking",
            text: "Sort clean, dry, golden paddy straw free of molds. Tie into uniform bundles weighing 1 to 1.5 kg each (approx 75–80 cm long). Submerge bundles completely in fresh water tanks for 12 to 18 hours to achieve thorough moisture saturation.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Bed Construction & Layered Spawning",
            text: "Erect an elevated bamboo or wooden bed platform 15–20 cm above ground. Arrange bundles in criss-cross rows (4 to 5 layers). Hand-spawn along bundle edges 5–8 cm inward, dusting with roasted gram flour (besan) or red-gram dal powder as a nitrogen booster.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Tarpaulin Incubation & Heat Accumulation",
            text: "Cover the stacked bed snugly with clean black or transparent polyethylene sheets for 7 to 8 days. Trapped biological heat raises the core bed temperature to 35°C–38°C, accelerating rapid white mycelium colonization.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Air Ventilation & Moisture Management",
            text: "On day 8, remove the covering sheets. Provide clean cross-ventilation and maintain ambient humidity at 85%–90% using fine mist sprayers twice daily without waterlogging the bed cores.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Egg-Stage Harvesting",
            text: "Tiny button pinheads appear on day 9–10. Harvest delicately at the early 'egg/button stage' when the protective volval veil remains fully intact for maximum market value, firm texture, and extended shelf life.",
          },
        ],
      },
    ],
  };

  const otherVarieties = [
    {
      slug: "white-button",
      name: "White Button",
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
      icon: SunMedium,
      color: "text-amber-500",
    },
    {
      slug: "cordyceps",
      name: "Cordyceps Militaris",
      scientific: "Cordyceps militaris",
      icon: Zap,
      color: "text-amber-500",
    },
  ];

  return (
    <main
      id="paddy-straw-mushroom-page"
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
            Paddy Straw Mushroom
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
            Fastest Crop (10–14 Days)
          </span>
        </div>

        {/* Hero Section */}
        <section
          aria-labelledby="paddy-straw-hero"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="grid lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  Scientific: Volvariella volvacea
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Difficulty: Easy / Tropical
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                  धान का पुआल मशरूम (Paddy Straw)
                </span>
              </div>

              <h1
                id="paddy-straw-hero"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase leading-tight"
              >
                Paddy Straw Mushroom
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                High-yielding, fast-growing tropical mushroom cultivated on bundled paddy straw and cotton waste beds. Famous for its lightning-quick 10 to 14-day turnaround and zero chiller electricity demand.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Wholesale Price
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    ₹100 - ₹150 / kg
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Production Cost
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-600 dark:text-slate-400">
                    ₹30 - ₹45 / kg
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Harvest Cycle
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                    10 - 14 Days
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
                    alt="Commercial paddy straw mushroom bed cultivation using bundled rice straw in tropical climate sheds"
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
                    High-Viability Thermophilic Spawn
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Dispatched Fresh
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20pure%20grain%20spawn%20for%20Paddy%20Straw%20Mushroom%20(Volvariella%20volvacea).%20Please%20send%20pricing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <Wheat className="w-3.5 h-3.5" />
                    <span>Order Paddy Straw Spawn</span>
                  </a>

                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Paddy%20Straw%20Mushroom%20farming%20setup%20and%20straw%20bedding."
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
                  Variety Overview &amp; Agro-Climatic Advantage
                </h2>
              </div>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Paddy Straw Mushroom (<em>Volvariella volvacea</em>) is a warm-loving classic cultivated widely across Southeast Asia and coastal Indian states including Odisha, West Bengal, Assam, Andhra Pradesh, and Kerala. Unlike winter-reliant varieties like{" "}
                <Link
                  href="/mushroom-types/white-button"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  White Button Mushrooms
                </Link>{" "}
                or sawdust-bag species like{" "}
                <Link
                  href="/mushroom-types/shiitake"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Shiitake Mushrooms
                </Link>{" "}
                and{" "}
                <Link
                  href="/mushroom-types/reishi"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Reishi Mushrooms
                </Link>
                , Paddy Straw thrives in high summer and monsoon heat (30°C–38°C) without requiring expensive AC chillers or insulated panel chambers.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Its most exceptional trait is its micro-growth speed: from spawning to full first-flush harvest takes merely 10 to 14 days, offering rapid capital turnover for rice cultivators while turning crop residue and stubble directly into high-protein cash yields. Farmers can secure pure thermophilic{" "}
                <Link
                  href="/spawn-seed"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Paddy Straw grain spawn
                </Link>
                , master raised bamboo bed techniques through our certified{" "}
                <Link
                  href="/training"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  mushroom training workshops
                </Link>
                , or evaluate turnkey shed structures in our{" "}
                <Link
                  href="/model-details"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  commercial setup blueprints
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
                    Optimal Agronomic Parameters
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
                    30°C - 38°C (Extreme Thermophilic)
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Requires warmth; easily sustained under tarpaulin cover in hot monsoons.
                  </p>
                </div>

                {/* Humidity */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-500 text-[10px] font-bold uppercase tracking-wider">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Humidity (RH)</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    85% - 90% RH
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Maintained through fine water misting over thatch-shaded bed sheds.
                  </p>
                </div>

                {/* Substrate */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Substrate Medium</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white line-clamp-1">
                    Bundled Paddy Straw / Cotton
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Clean, fresh rice straw tied in 1–1.5 kg bundles or cotton ginning waste.
                  </p>
                </div>

                {/* Incubation */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-500 text-[10px] font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Incubation Period</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    7 - 9 Days (Incredibly Fast)
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Trapped biological heat sparks aggressive mycelium spread within a week.
                  </p>
                </div>

                {/* Cropping */}
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
                  <div className="flex items-center gap-1.5 text-pink-500 text-[10px] font-bold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Harvest Cycle</span>
                  </div>
                  <div className="text-[12px] font-bold text-slate-900 dark:text-white">
                    10 - 15 Days
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Pinheads form on day 9; harvest in smooth egg shape before veil bursts.
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
                    Pins directly from bundle edges; zero casing soil or peat moss needed.
                  </p>
                </div>
              </div>
            </section>

            {/* Commercial Highlights & Key Features */}
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
                  Commercial Advantages &amp; Key Highlights
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <Timer className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Fastest Micro-Growth Cycle
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Yields its full first flush in just 10 to 14 days, enabling growers to run up to 20 continuous cropping cycles per year.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <Wheat className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Eco-Friendly Agricultural Stubble Use
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Converts surplus paddy straw directly into nutritious food, providing farmers with lucrative alternate income while curbing stubble burning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <SunMedium className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      Zero Chiller Power Demands
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Naturally thrives in ambient 32°C–38°C temperatures under thatched sheds, slashing power bills to virtually zero compared to cold-room crops.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <Coins className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[11.5px] font-bold text-slate-900 dark:text-white block">
                      High Umami &amp; Coastal Market Value
                    </strong>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Prized for its succulent, egg-shaped button cap and delicate aroma, commanding premium wholesale rates of ₹100–₹150/kg across Eastern mandis.
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
                    Step-by-Step Straw Bed Cultivation Protocol
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
                      Paddy Straw Bundling &amp; Water Soaking
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Select clean, dry, golden yellow rice straw free from decay and mold. Cut straw into uniform lengths (approx 75–80 cm) and bind tightly into 1 to 1.5 kg bundles. Submerge bundles flat in clean water tanks for 12 to 18 hours to absorb 70% moisture saturation.
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
                      Raised Bed Construction &amp; Layered Spawning
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Construct an elevated wooden or bamboo platform 15–20 cm above ground for drainage. Lay 4 bundles side-by-side, then place 4 bundles crosswise in successive layers (4 to 5 layers total). Sprinkle active grain spawn 5–8 cm inward along all four perimeter edges, dusting with roasted gram flour (besan) or red-gram powder to supply nitrogen.
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
                      Tarpaulin Heat Incubation
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Cover the entire bed snugly with clean black or transparent polyethylene sheeting for 7 to 8 days. Biological fermentation will rapidly elevate internal bed core temperatures to 35°C–38°C, fueling supercharged mycelial colonization without artificial heaters.
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
                      Aeration &amp; Fine Moisture Management
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      On day 8, gently remove the tarpaulin sheets. Provide fresh air ventilation and spray a light water mist twice daily to maintain ambient relative humidity at 85%–90%, ensuring the straw bundles stay moist while avoiding stagnant bottom pools.
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
                      Egg-Stage Picking &amp; Packaging
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Pinhead clusters pop along bundle seams by day 9–10. Harvest at the "egg stage" when the outer volva sheath is taut and intact before the cap opens into an umbrella. This ensures peak culinary umami, maximum weight density, and optimal transport resilience.
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
                  Supply Dynamics, Mandi Demand &amp; State Subsidies
                </h2>
              </div>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Paddy Straw Mushroom enjoys an unquenchable consumer base across <strong>Bhubaneswar, Cuttack, Kolkata, Guwahati, Siliguri, and Cochin</strong>, where morning mandi landings sell out within hours. Because of its tender egg-stage freshness, localized farm clusters capture premium prices with zero cold-storage transit costs.
              </p>

              <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
                Smallholders and commercial entrepreneurs can leverage government subsidies under the Mission for Integrated Development of Horticulture (MIDH) and Rashtriya Krishi Vikas Yojana (RKVY) providing 40% to 50% capital assistance on thatched growing sheds and straw shredders. Explore our regional agricultural blueprints in the{" "}
                <Link
                  href="/cities/odisha/bhubaneswar"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Bhubaneswar mushroom farming hub
                </Link>{" "}
                or discover heat-tolerant summer strategies for{" "}
                <Link
                  href="/mushroom-types/milky-mushroom"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Milky Mushrooms
                </Link>{" "}
                and high-yield low-cost{" "}
                <Link
                  href="/mushroom-types/oyster"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Oyster Mushroom setups
                </Link>
                .
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
                    Paddy straw bundling &amp; soaking specs
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    High-vigour thermophilic grain spawn
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    10-day harvest &amp; egg-stage picking tips
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20Paddy%20Straw%20Mushroom%20farming%20setup%20and%20straw%20bedding."
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
                  Planning to set up commercial Paddy Straw Mushroom beds? Get bed layout blueprints, seasonal schedules, and spawn requirement estimates.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-2 text-center">
                <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  Ready to launch a rapid-cycle mushroom farm?
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
                  <span>Practical Farmer Training</span>
                </div>
                <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Learn bundle tying, bed layering, spawn placement, tarpaulin heat control &amp; mandi harvesting.
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
                  className="group p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] hover:border-emerald-500/40 hover:bg-emerald-500/[0.04] transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <IconComp className={`w-4 h-4 ${v.color}`} />
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {v.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">
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
