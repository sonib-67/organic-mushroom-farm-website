import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Sun,
  Thermometer,
  Droplets,
  ShieldCheck,
  TrendingUp,
  PackageCheck,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  Layers,
  Utensils,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming",
  description:
    "Discover why Milky mushrooms (Calocybe indica) are the perfect summer crop. Learn about their heat tolerance, high yield, and incredible shelf life.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services/milky-mushroom",
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
    title: "Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming",
    description:
      "Discover why Milky mushrooms (Calocybe indica) are the perfect summer crop. Learn about their heat tolerance, high yield, and incredible shelf life.",
    url: "https://organicmushroomsfarm.com/services/milky-mushroom",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
        width: 1200,
        height: 675,
        alt: "Milky Mushroom Cultivation Area and Commercial Setup",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
        width: 1200,
        height: 675,
        alt: "Fresh Organic Mushroom Harvest",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png",
        width: 1200,
        height: 675,
        alt: "Commercial Mushroom Farmer Expert Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming",
    description:
      "Discover why Milky mushrooms (Calocybe indica) are the perfect summer crop. Learn about their heat tolerance, high yield, and incredible shelf life.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png",
    ],
  },
};

export default function MilkyMushroomServicePage() {
  const pageUrl = "https://organicmushroomsfarm.com/services/milky-mushroom";
  const publishedDate = "2026-03-05T08:00:00+05:30";
  const modifiedDate = "2026-03-05T08:00:00+05:30";

  const imagesList = [
    "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
    "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
    "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png",
  ];

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
          availableLanguage: ["en", "hi"],
        },
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
        name: "Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming",
        description:
          "Discover why Milky mushrooms (Calocybe indica) are the perfect summer crop. Learn about their heat tolerance, high yield, and incredible shelf life.",
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
            name: "Services",
            item: "https://organicmushroomsfarm.com/services/milky-mushroom",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Milky Mushroom Services",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Milky Mushroom Commercial Farming & Cultivation Services",
        serviceType: "Commercial Mushroom Cultivation & Spawn Supply",
        provider: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Professional guidance, lab-certified Calocybe indica spawn, summer climate parameters, casing soil preparation, and turnkey farm setup.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming",
        description:
          "Discover why Milky mushrooms (Calocybe indica) are the perfect summer crop. Learn about their heat tolerance, high yield, and incredible shelf life.",
        image: imagesList,
        datePublished: publishedDate,
        dateModified: modifiedDate,
        mainEntityOfPage: {
          "@id": `${pageUrl}#webpage`,
        },
        author: {
          "@type": "Organization",
          name: "Organic Mushroom Farm Agronomy Team",
        },
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
    ],
  };

  return (
    <main
      id="milky-mushroom-service-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
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
        className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-3"
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
            <span className="text-slate-600 dark:text-slate-300">Services</span>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none"
          >
            Milky Mushroom
          </li>
        </ol>
      </nav>

      {/* Main Content Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <header className="mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
              <Sun className="w-3 h-3 text-amber-600 dark:text-amber-400" /> Summer Crop Services
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> March 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Milky Mushrooms: The Ultimate Summer Crop for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">
              Profitable Farming
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
            When summer heat peaks and conventional crops struggle, <em>Calocybe indica</em> (Milky Mushroom) delivers maximum biological yield with near-zero cooling energy costs.
          </p>
        </header>

        {/* Featured Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-6 border border-slate-200 dark:border-slate-800">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
            alt="Milky Mushroom Cultivation Area and Commercial Setup"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Technical At-a-Glance Parameters Dashboard (Compact Layout) */}
        <section
          aria-label="Milky Mushroom Key Growing Parameters"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <Thermometer className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Ideal Temp</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">25°C – 35°C</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-950 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <Droplets className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Humidity</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">80% – 85% RH</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Substrate</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">Paddy / Wheat Straw</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Shelf Life</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">3–5 Days (Room Temp)</span>
            </div>
          </div>
        </section>

        {/* Intro Body Text */}
        <section className="space-y-3 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
          <p className="font-medium text-slate-900 dark:text-slate-100 text-sm sm:text-base">
            When the summer heat kicks in and most mushroom varieties struggle to survive, one resilient superstar takes the spotlight: the{" "}
            <strong className="text-emerald-700 dark:text-emerald-400">Milky Mushroom (<em>Calocybe indica</em>)</strong>. Native to India, this robust, pristine-white fungus is a complete game-changer for local growers and food enthusiasts alike.
          </p>
          <p>
            If you are looking to keep your organic mushroom farming business profitable year-round, Milky mushrooms are exactly what you need. Here is why this tropical variety is in such high commercial demand across Indian markets.
          </p>
        </section>

        {/* 3 Core Commercial Pillars (Compact Grids) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {/* Pillar 1: Summer Heat */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                  <Sun className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Thrives in the Summer Heat
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Unlike Button or Oyster mushrooms that require cooler, strictly climate-controlled rooms, Milky mushrooms love the heat. They flourish between <strong>30°C to 35°C</strong> with high humidity, making them the lowest-electricity crop for Indian summers.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Zero chiller/AC requirement
            </div>
          </div>

          {/* Pillar 2: Shelf Life & Texture */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <PackageCheck className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Long Shelf Life & Meaty Texture
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Thick, solid stems and caps prevent rapid dehydration. They retain firmness for 3–5 days at ambient room temperature and up to 15 days in refrigeration. Their meaty texture absorbs spices perfectly, making them a popular paneer/meat substitute.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Ideal for long-distance transport
            </div>
          </div>

          {/* Pillar 3: High Yield */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  High Yield & High Returns
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Substantial fruiting body weights translate to biological efficiencies of up to 100% on dry straw. With wholesale prices averaging ₹120–₹180/kg against ₹50–₹65/kg production cost, net profit margins reach 50% to 65%.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> High commercial margin
            </div>
          </div>
        </div>

        {/* Secondary Image: Harvesting */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-sm mb-6 border border-slate-200 dark:border-slate-800">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png"
            alt="Fresh Organic Mushroom Harvest"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Commercial Cultivation Workflow (Compact Step Guide) */}
        <section className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
              ✓
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Cultivation Protocol for Maximum Yield
            </h2>
          </div>

          <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                1. Substrate Sterilization:
              </strong>
              Paddy or wheat straw is chopped into 2–4 cm pieces and soaked in boiling water for 2–3 hours (or hot steam treated) to eliminate competing molds while maintaining 65% moisture.
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                2. Layer Spawning & Incubation:
              </strong>
              Straw is packed in high-gauge polypropylene bags with 3–4 layers of certified Calocybe indica grain spawn. Bags incubate in warm dark rooms (25°C–30°C) for 20–25 days until mycelium turns chalk-white.
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                3. Casing Layer Application (Crucial for Milky):
              </strong>
              Bags are cut into halves and covered with 2–3 cm of steam-pasteurized casing soil (coir pith, loam soil, and chalk at pH 7.8–8.2). Mushrooms pin and fruit within 10–14 days.
            </div>
          </div>
        </section>

        {/* Recommended Commercial Resources & Internal Linking */}
        <section
          aria-label="Related Commercial Mushroom Resources"
          className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800/90 border border-emerald-200/70 dark:border-slate-700 mb-6"
        >
          <div className="flex items-center gap-1.5 mb-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
            <Sparkles className="w-4 h-4" /> Commercial Mushroom Links & Services
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
            <Link
              href="/services/oyster-mushroom"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Oyster Mushroom Services
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Beginner Friendly <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/services/button-mushroom"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Button Mushroom Setup
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Commercial Units <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/spawn-seed"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Certified Milky Spawn Seed
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Direct Lab Supply <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/mushroomfarmingcalculators"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Mushroom ROI Calculator
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Estimate Profit <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/mushroom-farm-climate-tracker"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Live Climate Tracker
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Summer Monitoring <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/training"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Practical Training Workshop
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Hands-on Batches <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </section>

        {/* High Conversion CTA Section */}
        <section className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white dark:bg-slate-900 dark:border dark:border-slate-800 text-center">
          <h2 className="text-base sm:text-lg font-bold mb-1.5">
            Ready to Master Milky Mushroom Farming?
          </h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto mb-3 leading-relaxed">
            Get expert guidance, professional training, turnkey commercial setup, and certified high-yield Milky mushroom spawn from <strong className="text-emerald-400">Organic Mushrooms Farm</strong> today.
          </p>

          <div className="flex items-center justify-center flex-wrap gap-2.5">
            <a
              href="tel:9203544140"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call / WhatsApp (+91 9203544140)
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Contact Us Online
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
