import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sprout,
  Thermometer,
  Droplets,
  TrendingUp,
  Layers,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Clock,
  Crown,
  ShieldCheck,
  Building2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Mastering Button Mushroom Farming: The King of the Commercial Market",
  description:
    "Learn why Button Mushroom (Agaricus bisporus) is the ultimate cash crop and what it takes to cultivate it successfully for the commercial market.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services/button-mushroom",
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
    title:
      "Mastering Button Mushroom Farming: The King of the Commercial Market",
    description:
      "Learn why Button Mushroom (Agaricus bisporus) is the ultimate cash crop and what it takes to cultivate it successfully for the commercial market.",
    url: "https://organicmushroomsfarm.com/services/button-mushroom",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
        width: 1200,
        height: 675,
        alt: "Fresh Organic Button Mushroom Commercial Harvest",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
        width: 1200,
        height: 675,
        alt: "Button Mushroom Growing Facility and Chambers",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png",
        width: 1200,
        height: 675,
        alt: "Commercial Button Mushroom Farmer Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mastering Button Mushroom Farming: The King of the Commercial Market",
    description:
      "Learn why Button Mushroom (Agaricus bisporus) is the ultimate cash crop and what it takes to cultivate it successfully for the commercial market.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png",
    ],
  },
};

export default function ButtonMushroomServicePage() {
  const pageUrl = "https://organicmushroomsfarm.com/services/button-mushroom";
  const publishedDate = "2026-03-05T08:00:00+05:30";
  const modifiedDate = "2026-03-05T08:00:00+05:30";

  const imagesList = [
    "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
    "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
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
        name: "Mastering Button Mushroom Farming: The King of the Commercial Market",
        description:
          "Learn why Button Mushroom (Agaricus bisporus) is the ultimate cash crop and what it takes to cultivate it successfully for the commercial market.",
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
            item: "https://organicmushroomsfarm.com/services/button-mushroom",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Button Mushroom Services",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Commercial Button Mushroom Cultivation & Consultancy Services",
        serviceType: "Commercial Mushroom Cultivation, Compost & Spawn Supply",
        provider: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Professional Agaricus bisporus consultancy, certified high-yield spawn supply, standardized compost guidelines, climate-controlled setup, and buyback marketing assistance.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Mastering Button Mushroom Farming: The King of the Commercial Market",
        description:
          "Learn why Button Mushroom (Agaricus bisporus) is the ultimate cash crop and what it takes to cultivate it successfully for the commercial market.",
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
      id="button-mushroom-service-page"
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
            Button Mushroom
          </li>
        </ol>
      </nav>

      {/* Main Content Article (Compact Layout, Zero On-Page Image as Requested) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <header className="mb-5">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
              <Crown className="w-3 h-3 text-amber-600 dark:text-amber-400" /> Commercial Crop Services
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> March 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2.5">
            Mastering Button Mushroom Farming:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">
              The King of the Commercial Market
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
            Accounting for 85%+ of domestic consumption, <em>Agaricus bisporus</em> is the cornerstone of industrial mushroom farming with guaranteed year-round wholesale off-take.
          </p>
        </header>

        {/* Technical At-a-Glance Parameters Dashboard (Compact Layout) */}
        <section
          aria-label="Button Mushroom Technical Growing Parameters"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <Thermometer className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Cropping Temp</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">14°C – 18°C</span>
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
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Substrate</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">Compost + Casing</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Market Share</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">85%+ Domestically</span>
            </div>
          </div>
        </section>

        {/* Intro Body with embedded internal links naturally inside text */}
        <section className="space-y-3 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
          <p className="font-medium text-slate-900 dark:text-slate-100 text-sm sm:text-base">
            Whenever you see fresh mushrooms in a supermarket, on a pizza, or at a fine-dining restaurant, chances are you are looking at the classic <strong className="text-emerald-700 dark:text-emerald-400">Button Mushroom (<em>Agaricus bisporus</em>)</strong>. As the most widely consumed mushroom in the world, it dominates global trade and over 85% of India&apos;s commercial production.
          </p>
          <p>
            For anyone entering commercial agribusiness, successfully cultivating button mushrooms is one of the most lucrative business moves you can make. While small growers often start with low-cost seasonal crops like{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              quick-turnaround Oyster mushrooms
            </Link>{" "}
            or heat-resistant{" "}
            <Link
              href="/services/milky-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              summer Milky varieties
            </Link>
            , button mushrooms remain the undisputed king of stable, large-scale commercial cash flow.
          </p>
        </section>

        {/* 3 Core Commercial Pillars in Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {/* Pillar 1: Market Demand */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Unmatched Market Demand
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Unlike seasonal crops or niche exotic varieties, the demand for white button mushrooms is massive and continuous throughout all 12 months. From local vegetable mandis to luxury hotel chains and industrial food canners, bulk buyers seek reliable, high-grade daily supply.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Zero struggle for bulk buyers
            </div>
          </div>

          {/* Pillar 2: Precision Cultivation */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  The Science of Cultivation
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Button mushrooms do not fruit on plain raw straw. They require nitrogen-rich, pasteurized Phase-II compost and a neutral casing soil layer (pH 7.8–8.2) to trigger primordial pinning under cool 14°C–18°C fruiting temperatures and strict $CO_2$ management.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> High technical barrier to entry
            </div>
          </div>

          {/* Pillar 3: Right Foundation */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Built on Right Foundation
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Commercial success relies on three critical pillars: scientifically prepared compost tunnels, automated climate control rooms, and high-vigor first-generation spawn. Cutting corners on insulation or hygiene results in devastating green mold losses.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Protected capital & 45%+ ROI
            </div>
          </div>
        </div>

        {/* Detailed Agronomy Breakdown with natural internal text links */}
        <section className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
              ✓
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Key Steps for Commercial Yield Optimization
            </h2>
          </div>

          <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                1. Standardized Phase-II Compost Preparation:
              </strong>
              Formulated with wheat straw, poultry manure, urea, and gypsum. Complete indoor pasteurization at 58°C–60°C eliminates pathogens, followed by conditioning at 48°C–52°C to produce ammonia-free, actinomycete-rich substrate.
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                2. Spawning with High-Vigor Seed:
              </strong>
              Compost is thoroughly inoculated with 0.5% to 0.7% lab-certified{" "}
              <Link
                href="/spawn-seed"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                pure culture button mushroom spawn
              </Link>{" "}
              under strict sanitized conditions and maintained at 22°C–25°C for 14–18 days until mycelium colonization is complete.
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                3. Precision Climate Automation & Harvesting:
              </strong>
              After applying pasteurized casing soil, room temperature is dropped to 14°C–18°C with fresh air venting to induce heavy pinning. To prevent costly trial-and-error mistakes, smart growers invest in an engineered{" "}
              <Link
                href="/services/turnkey-setup"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                turnkey commercial farm setup
              </Link>{" "}
              and calculate expected seasonal profits using our{" "}
              <Link
                href="/mushroomfarmingcalculators"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                mushroom farming ROI calculator
              </Link>
              .
            </div>
          </div>
        </section>

        {/* Practical Training & Consultancy Callout */}
        <section className="mb-6 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800/90 border border-emerald-200/70 dark:border-slate-700 text-xs leading-relaxed">
          <h2 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
            <Sprout className="w-4 h-4 text-emerald-600" /> Professional Agronomy & Business Support
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            Whether you are establishing a 2000-bag seasonal unit or an industrial multi-ton refrigerated facility, attend our comprehensive{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial mushroom farming workshops
            </Link>{" "}
            to master composting protocols, disease management, and government subsidy documentation.
          </p>
        </section>

        {/* High Conversion CTA Section */}
        <section className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white dark:bg-slate-900 dark:border dark:border-slate-800 text-center">
          <h2 className="text-base sm:text-lg font-bold mb-1.5">
            Ready to Grow Premium Button Mushrooms?
          </h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto mb-3 leading-relaxed">
            Don&apos;t let the technicalities hold you back from a highly profitable harvest. Whether you need top-tier spawn, high-yield compost, or expert farm management guidance,{" "}
            <strong className="text-emerald-400">Organic Mushrooms Farm</strong> has the resources to ensure your crop thrives.
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
