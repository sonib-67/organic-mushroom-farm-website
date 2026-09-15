import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Zap,
  Wind,
  ShieldAlert,
  Cpu,
  ShieldCheck,
  Maximize,
  Calendar,
  Clock,
  Timer,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Commercial Turnkey Mushroom Farm Setup & Consultation | Organic Mushroom Farm",
  description:
    "End-to-end commercial turnkey mushroom farm setup, automated climate control, growing rooms, compost units, and guaranteed yield project consultation.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services/turnkey-setup",
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
      "Commercial Turnkey Mushroom Farm Setup & Consultation | Organic Mushroom Farm",
    description:
      "End-to-end commercial turnkey mushroom farm setup, automated climate control, growing rooms, compost units, and guaranteed yield project consultation.",
    url: "https://organicmushroomsfarm.com/services/turnkey-setup",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Commercial Turnkey Mushroom Farm Setup & Consultation | Organic Mushroom Farm",
    description:
      "End-to-end commercial turnkey mushroom farm setup, automated climate control, growing rooms, compost units, and guaranteed yield project consultation.",
  },
};

export default function TurnkeySetupServicePage() {
  const pageUrl = "https://organicmushroomsfarm.com/services/turnkey-setup";
  const publishedDate = "2026-03-05T08:00:00+05:30";
  const modifiedDate = "2026-03-05T08:00:00+05:30";

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
        name: "Why Smart Investors Choose Turnkey Setups Over DIY Commercial Mushroom Farms",
        description:
          "Discover why a Turnkey Commercial Mushroom Farm Setup is the smartest strategy to protect your capital and guarantee high yields.",
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
            item: "https://organicmushroomsfarm.com/services/turnkey-setup",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Turnkey Farm Setup",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Turnkey Commercial Mushroom Farm Setup & EPC Solutions",
        serviceType: "Commercial Mushroom Infrastructure Engineering",
        provider: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "End-to-end commercial mushroom farm construction, climate automation, sterile cleanroom engineering, and vertical racking integration across India.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Why Smart Investors Choose Turnkey Setups Over DIY Commercial Mushroom Farms",
        description:
          "Discover why a Turnkey Commercial Mushroom Farm Setup is the smartest strategy to protect your capital and guarantee high yields.",
        datePublished: publishedDate,
        dateModified: modifiedDate,
        mainEntityOfPage: {
          "@id": `${pageUrl}#webpage`,
        },
        author: {
          "@type": "Organization",
          name: "Organic Mushroom Farm Engineering Team",
        },
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
    ],
  };

  return (
    <main
      id="turnkey-setup-service-page"
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
            Turnkey Setup
          </li>
        </ol>
      </nav>

      {/* Main Content Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <header className="mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <Building2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />{" "}
              Farm Infrastructure
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> March 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 6 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Why Smart Investors Choose Turnkey Setups Over{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">
              DIY Commercial Mushroom Farms 🏗️
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
            Bypass project delays, thermal losses, and contamination outbreaks with professional EPC turnkey engineering designed specifically for precision fungi biology.
          </p>
        </header>

        {/* Featured Hero Image (Descriptive filename, dimensions, proper alt) */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-6 border border-slate-200 dark:border-slate-800">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png"
            alt="Turnkey Commercial Mushroom Farm Setup and Climate Controlled Infrastructure"
            width={1200}
            height={630}
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover w-full h-full"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* At-a-Glance Executive Metrics (Compact Layout) */}
        <section
          aria-label="Turnkey vs DIY Setup Comparison Metrics"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Timer className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Time-to-Market</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">60–90 Days</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Power Efficiency</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">Up to 35% Lower Bills</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Contamination</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">&lt; 2% Cleanroom Loss</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Vertical Space</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">3x Yield Per Sq.Ft</span>
            </div>
          </div>
        </section>

        {/* Intro Body Text with embedded natural internal links */}
        <section className="space-y-3 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
          <p className="font-medium text-slate-900 dark:text-slate-100 text-sm sm:text-base">
            The commercial mushroom industry is booming, attracting a new wave of investors, traditional farmers, and agri-startups across India. The promise of high profit margins and fast crop turnarounds is undeniably tempting. However, behind every glowing success story lies a critical reality: commercial mushroom farming is an engineering game.
          </p>
          <p>
            Too many aspiring growers fall into the &ldquo;DIY trap&rdquo;&mdash;attempting to assemble insulated rooms, custom HVAC systems, and humidifiers through separate local contractors. Unfortunately, this trial-and-error approach often leads to costly project delays, structural flaws, and devastating contamination outbreaks that can ruin high-value crops like{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              climate-controlled Button mushrooms
            </Link>{" "}
            or seasonal{" "}
            <Link
              href="/services/milky-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              summer Milky crops
            </Link>
            .
          </p>
          <p>
            If you are planning an industrial-scale investment, here is why a professional turnkey commercial mushroom farm setup is the smartest strategy to protect your capital, optimize your{" "}
            <Link
              href="/mushroomfarmingcalculators"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              operational CapEx and OpEx ROI
            </Link>
            , and guarantee high commercial yields.
          </p>
        </section>

        {/* Section 1: The Hidden Dangers of a DIY Setup */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2.5 border-l-4 border-amber-500 pl-3">
            The Hidden Dangers of a DIY Setup
          </h2>
          <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 mb-3.5">
            Growing mushrooms at a commercial level isn&apos;t like building a standard warehouse. You are creating a delicate micro-environment that must strictly regulate temperature, relative humidity, air turnover (CFM), and carbon dioxide (CO₂) levels 24 hours a day, 365 days a year. Before investing capital, review our practical{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              hands-on commercial mushroom training
            </Link>{" "}
            to see the exact environmental balance required.
          </p>

          <p className="text-xs font-semibold text-slate-900 dark:text-slate-200 mb-2">
            Common critical mistakes observed in self-built DIY facilities include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Danger 1 */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    Thermal Leaks
                  </h3>
                </div>
                <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Using improper panel insulation, non-hermetic doors, or poor sealing forces AC compressors to work twice as hard, skyrocketing your monthly electricity bills and reducing refrigeration lifespan.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> Heavy recurring power loss
              </div>
            </div>

            {/* Danger 2 */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Wind className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    Airflow Bottlenecks
                  </h3>
                </div>
                <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Poorly calculated ventilation systems cause stagnant air pockets and high CO₂ build-ups, leading to long, leggy stems, underdeveloped pins, and unmarketable Grade-C mushroom caps.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> Stunted pinning & cap deformities
              </div>
            </div>

            {/* Danger 3 */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-lg bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                    <ShieldAlert className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    Contamination Hotspots
                  </h3>
                </div>
                <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Non-hygienic porous flooring or unsealed joints harbor green mold (<em>Trichoderma</em>) and competitive bacteria that breed uncontrollably, destroying entire batches even when seeded with certified{" "}
                  <Link
                    href="/spawn-seed"
                    className="text-emerald-600 dark:text-emerald-400 underline"
                  >
                    pure culture mushroom spawn
                  </Link>
                  .
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-red-600 dark:text-red-400 font-medium">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> Devastating crop contamination
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What Makes a Turnkey Setup Different? */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2.5 border-l-4 border-emerald-500 pl-3">
            What Makes a Turnkey Setup Different?
          </h2>
          <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 mb-3.5">
            A turnkey approach replaces guesswork with industrial precision. Instead of managing dozens of uncoordinated vendors and struggling with installation technicalities, you receive an end-to-end, plug-and-play facility designed specifically for fungi biology. Whether you are cultivating low-capital{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial Oyster mushrooms
            </Link>{" "}
            or advanced multi-tier Button units, turnkey engineering ensures consistent results.
          </p>

          <p className="text-xs font-semibold text-slate-900 dark:text-slate-200 mb-2">
            A commercial-grade turnkey setup integrates three core engineering pillars:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Solution 1 */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Cpu className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    Climate Automation
                  </h3>
                </div>
                <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Integrated smart HVAC systems paired with digital sensors automatically regulate humidity, fresh air intake, and temperature stages between spawn running and fruiting, keeping conditions synchronized with our{" "}
                  <Link
                    href="/mushroom-farm-climate-tracker"
                    className="text-emerald-600 dark:text-emerald-400 underline"
                  >
                    live climate tracking protocols
                  </Link>
                  .
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Automated sensor microclimate
              </div>
            </div>

            {/* Solution 2 */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    Sterile Cleanroom Engineering
                  </h3>
                </div>
                <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  High-density PUF insulation panels, seamless food-grade hygienic coved flooring, and positive-pressure HEPA air filtration eliminate corners where mold spores hide, keeping contamination rates strictly below 2%.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Zero-mold cleanroom standard
              </div>
            </div>

            {/* Solution 3 */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Maximize className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    Maximum Space Optimization
                  </h3>
                </div>
                <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Custom engineered heavy-duty multi-tier vertical racking maximizes every cubic meter of facility space, multiplying harvest volumes per square foot by 3x compared to horizontal shelf systems.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> 300% higher vertical biomass
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Faster Time-to-Market = Faster ROI */}
        <section className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <TrendingUp className="w-3.5 h-3.5" />
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Faster Time-to-Market = Faster ROI
            </h2>
          </div>
          <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 mb-2.5">
            In commercial agriculture, time is money. A DIY build can easily burn 8 to 12 months of troubleshooting before producing its first successful flush. A turnkey setup compresses your timeline dramatically, getting your entire infrastructure operational in 60 to 90 days.
          </p>
          <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            By eliminating initial crop losses, structural rebuilds, and operational downtime, the investment in a turnkey project pays for itself through consistent, high-grade commercial harvests right from day one. You can model your project payback period using our detailed{" "}
            <Link
              href="/mushroomfarmingcalculators"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial mushroom financial calculators
            </Link>{" "}
            or speak directly with our engineering team for localized project drawings.
          </p>
        </section>

        {/* High Conversion CTA Section */}
        <section className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white dark:bg-slate-900 dark:border dark:border-slate-800 text-center">
          <h2 className="text-base sm:text-lg font-bold mb-1.5">
            Ready to Build Your Commercial Farm?
          </h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto mb-3 leading-relaxed">
            Skip the guesswork and ensure maximum yields with a professional Turnkey Farm Setup by{" "}
            <strong className="text-emerald-400">Organic Mushrooms Farm</strong>.
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
              <Mail className="w-3.5 h-3.5" /> Book a Consultation
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
