import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Thermometer,
  Droplets,
  Wind,
  Moon,
  Sprout,
  Layers,
  Sparkles,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Button Mushroom Farming: From Spawn Preparation to Farm Setup",
  description:
    "Learn the complete process of organic button mushroom farming, from grain spawn preparation to advanced indoor climate control and harvesting.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/blog/button-mushroom-farming-guide",
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
    title: "Button Mushroom Farming: From Spawn Preparation to Farm Setup",
    description:
      "Learn the complete process of organic button mushroom farming, from grain spawn preparation to advanced indoor climate control and harvesting.",
    url: "https://organicmushroomsfarm.com/blog/button-mushroom-farming-guide",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
        width: 1200,
        height: 675,
        alt: "Organic Button Mushroom Farm Setup",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
        width: 1200,
        height: 675,
        alt: "Harvesting fresh button mushrooms",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png",
        width: 1200,
        height: 675,
        alt: "Successful organic mushroom farmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Button Mushroom Farming: From Spawn Preparation to Farm Setup",
    description:
      "Learn the complete process of organic button mushroom farming, from grain spawn preparation to advanced indoor climate control and harvesting.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png",
    ],
  },
};

export default function ButtonMushroomFarmingGuidePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/blog/button-mushroom-farming-guide";
  const publishedDate = "2026-03-05T08:00:00+05:30";
  const modifiedDate = "2026-03-05T08:00:00+05:30";

  const imagesList = [
    "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
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
        name: "Button Mushroom Farming: From Spawn Preparation to Farm Setup",
        description:
          "Learn the complete process of organic button mushroom farming, from grain spawn preparation to advanced indoor climate control and harvesting.",
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
            name: "Blog",
            item: "https://organicmushroomsfarm.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Button Mushroom Farming Guide",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline:
          "Button Mushroom Farming: From Spawn Preparation to Farm Setup",
        description:
          "Learn the complete process of organic button mushroom farming, from grain spawn preparation to advanced indoor climate control and harvesting.",
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
      id="button-mushroom-guide-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumbs Navigation */}
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
            <Link
              href="/blog"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Blog
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none"
          >
            Button Mushroom Farming Guide
          </li>
        </ol>
      </nav>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <header className="mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <Sprout className="w-3 h-3" /> Commercial Cultivation
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> March 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 6 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Button Mushroom Farming: From Spawn Preparation to Farm Setup
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
            Master the step-by-step commercial protocol for <em>Agaricus bisporus</em>:
            sterile grain spawn preparation, aerobic composting, precision indoor climate control, casing soil management, and high-yield flush harvesting.
          </p>
        </header>

        {/* Hero Image 1 */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-6 border border-slate-200 dark:border-slate-800">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png"
            alt="Organic Button Mushroom Farm Setup"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Quick Parameters At-a-Glance (Compact Technical Dashboard) */}
        <section
          aria-label="Key Growing Parameters"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Thermometer className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Spawn Run</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">23°C – 25°C</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Thermometer className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Fruiting</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">15°C – 18°C</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-950 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <Droplets className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Humidity</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">85% – 90% RH</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Yield Flushes</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">3 – 4 Flushes</span>
            </div>
          </div>
        </section>

        {/* Introductory Overview */}
        <section className="space-y-3 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
          <p>
            The demand for fresh, organically grown produce is surging, and button mushrooms (<em>Agaricus bisporus</em>) are at the forefront of this agricultural shift. Known for their dense nutritional profile and culinary versatility, button mushrooms offer a highly profitable opportunity for modern growers. Whether you are building a boutique local farm or scaling a commercial operation, mastering the controlled indoor environment is the key to consistent, high-yield harvests.
          </p>
          <p>
            Here is the essential blueprint for establishing a successful organic button mushroom farm, starting from the microscopic level of spawn preparation up to full-scale climate management.
          </p>
        </section>

        {/* Phase 1: Mastering Spawn Preparation */}
        <section className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
              1
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Phase 1: Mastering Spawn Preparation
            </h2>
          </div>
          <p className="text-xs sm:text-[13.5px] text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
            Spawn is the foundational &ldquo;seed&rdquo; of your mushroom crop. High-quality, vigorous spawn dictates the health of your entire growing cycle. Preparing your own spawn ensures organic integrity and significantly reduces long-term operational costs.
          </p>
          <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 dark:text-white">Grain Selection:</strong> Wheat, sorghum, or rye grains are the standard carriers. They must be thoroughly washed and boiled until they are soft but still intact.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 dark:text-white">Sterilization:</strong> The boiled grains are mixed with calcium carbonate (chalk) and calcium sulfate (gypsum) to prevent clumping and adjust the pH. The mixture is packed into glass bottles or specialized spawn bags and sterilized in an autoclave at 121°C (15 psi) for 1.5 to 2 hours.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 dark:text-white">Inoculation and Incubation:</strong> Once cooled, the sterile grains are inoculated with a pure button mushroom culture in a sterile environment (using a laminar flow hood). The bags are then incubated in a dark room at 24°C to 26°C. Within 15 to 20 days, the white mycelium will completely colonize the grain, creating your active spawn.
              </div>
            </li>
          </ul>
        </section>

        {/* Image 2: Harvesting fresh button mushrooms */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-sm mb-6 border border-slate-200 dark:border-slate-800">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png"
            alt="Harvesting fresh button mushrooms"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Phase 2: Organic Compost Formulation */}
        <section className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
              2
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Phase 2: Organic Compost Formulation
            </h2>
          </div>
          <p className="text-xs sm:text-[13.5px] text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
            Button mushrooms do not grow in standard soil; they require a highly specific, nutrient-dense compost prepared through strict fermentation.
          </p>
          <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 dark:text-white">The Mix:</strong> A standard organic compost recipe includes wheat straw, horse manure, poultry manure, organic urea, gypsum, and wheat bran.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 dark:text-white">The Composting Process:</strong> The ingredients are wetted and arranged in long stacks. Over 25 to 30 days, the piles are mechanically turned at regular intervals. This aerobic fermentation breaks down complex carbohydrates and kills off competitive molds and harmful nematodes.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 dark:text-white">Pasteurization:</strong> For professional indoor setups, the compost undergoes a final steam pasteurization phase in a closed tunnel at 59°C to 60°C to ensure a perfectly clean growing medium.
              </div>
            </li>
          </ul>
        </section>

        {/* Phase 3: Indoor Farm Setup & Climate Control */}
        <section className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
              3
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Phase 3: Indoor Farm Setup & Climate Control
            </h2>
          </div>
          <p className="text-xs sm:text-[13.5px] text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
            Button mushrooms are highly sensitive to their environment. A successful indoor farm relies on precise climate control systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 font-semibold text-xs text-slate-900 dark:text-white mb-1">
                <Layers className="w-3.5 h-3.5 text-emerald-600" /> Infrastructure
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-snug">
                Insulated growing rooms with vertical metal or PVC shelving racks to maximize floor-to-ceiling space.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 font-semibold text-xs text-slate-900 dark:text-white mb-1">
                <Wind className="w-3.5 h-3.5 text-blue-600" /> Temp & Humidity
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-snug">
                <strong>Spawn Run:</strong> 23°C–25°C, 85–90% RH.<br />
                <strong>Fruiting:</strong> 15°C–18°C with fresh air (CO2 ventilation) to trigger pinhead formation.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 font-semibold text-xs text-slate-900 dark:text-white mb-1">
                <Moon className="w-3.5 h-3.5 text-amber-500" /> Lighting
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-snug">
                Button mushrooms do not require light. Rooms can remain dark, significantly reducing energy costs.
              </p>
            </div>
          </div>
        </section>

        {/* Image 3: Successful organic mushroom farmer */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-sm mb-6 border border-slate-200 dark:border-slate-800">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png"
            alt="Successful organic mushroom farmer"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Phase 4: Casing and Harvesting */}
        <section className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
              4
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Phase 4: Casing and Harvesting
            </h2>
          </div>
          <div className="space-y-2 text-xs sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Once the mycelium has fully colonized the compost, it is covered with a 1.5 to 2-inch layer of &ldquo;casing soil&rdquo; (a sterilized mixture of peat moss, coir, and chalk). Casing holds moisture and provides the microclimate necessary for the mushrooms to form &ldquo;pins.&rdquo;
            </p>
            <p>
              Within 15 to 20 days after casing, the first flush of white button mushrooms will be ready to harvest. With a well-maintained climate, a single batch of compost can yield three to four successive flushes.
            </p>
          </div>
        </section>

        {/* High-Value Internal Links & Next Steps Grid */}
        <section
          aria-label="Related Mushroom Resources"
          className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800/90 border border-emerald-200/70 dark:border-slate-700 mb-6"
        >
          <div className="flex items-center gap-1.5 mb-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
            <Sparkles className="w-4 h-4" /> Recommended Commercial Resources
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
            <Link
              href="/blog/button-mushroom-vs-oyster-mushroom"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Button vs Oyster Mushroom
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Read Comparison <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/services/button-mushroom"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Commercial Setup Services
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Turnkey Project <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/spawn-seed"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Button Mushroom Spawn (Seed)
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Lab Certified Spawn <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
                Calculate Profit <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
                Real-time Monitor <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/training"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                Mushroom Training Workshop
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                Enroll Today <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </section>

        {/* Compact CTA Box */}
        <section className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white dark:bg-slate-900 dark:border dark:border-slate-800 text-center">
          <h2 className="text-base sm:text-lg font-bold mb-1.5">
            Planning a Commercial Button Mushroom Farm?
          </h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto mb-3 leading-relaxed">
            Get comprehensive commercial consultation, climate-controlled setup guidance, government subsidy assistance, and certified lab spawn supply.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-2.5">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors"
            >
              Request Commercial Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
            >
              Contact Agronomy Team
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
