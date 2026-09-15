import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FileText,
  Thermometer,
  Layers,
  CheckCircle2,
  ChevronRight,
  Calendar,
  Clock,
  Phone,
  Mail,
  Building2,
  Cpu,
  ShieldCheck,
  Zap,
  Gauge,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "The Blueprint of a High-Yield Mushroom Farm: Why Technical Project Specs Matter",
  description:
    "Discover why precision engineering and technical project specifications are the secret to a highly profitable, industrial-scale mushroom farming business.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/project-specs",
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
      "The Blueprint of a High-Yield Mushroom Farm: Why Technical Project Specs Matter",
    description:
      "Discover why precision engineering and technical project specifications are the secret to a highly profitable, industrial-scale mushroom farming business.",
    url: "https://organicmushroomsfarm.com/project-specs",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title:
      "The Blueprint of a High-Yield Mushroom Farm: Why Technical Project Specs Matter",
    description:
      "Discover why precision engineering and technical project specifications are the secret to a highly profitable, industrial-scale mushroom farming business.",
  },
};

export default function ProjectSpecsPage() {
  const pageUrl = "https://organicmushroomsfarm.com/project-specs";
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
        name: "The Blueprint of a High-Yield Mushroom Farm: Why Technical Project Specs Matter",
        description:
          "Discover why precision engineering and technical project specifications are the secret to a highly profitable, industrial-scale mushroom farming business.",
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
            name: "Specifications",
            item: pageUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Project Specifications",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Commercial Mushroom Farm Technical Project Specifications & Engineering Consultancy",
        serviceType: "Industrial Agri-Engineering, Cleanroom Blueprints & HVAC Architecture",
        provider: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Engineering project specifications, PUF panel calculations, positive-pressure HVAC designs, composting tunnels, and 3D architectural blueprints for commercial mushroom cultivation.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "The Blueprint of a High-Yield Mushroom Farm: Why Technical Project Specs Matter",
        description:
          "Discover why precision engineering and technical project specifications are the secret to a highly profitable, industrial-scale mushroom farming business.",
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
      id="project-specs-article-page"
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
            <span className="text-slate-600 dark:text-slate-300">Engineering</span>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none"
          >
            Project Specifications
          </li>
        </ol>
      </nav>

      {/* Main Content Article (Compact Layout, Zero On-Page Images as Requested) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <header className="mb-5">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
              <FileText className="w-3 h-3 text-blue-600 dark:text-blue-400" /> Farm Infrastructure & Engineering
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> March 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2.5">
            The Blueprint of a High-Yield Mushroom Farm:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600">
              Why Technical Project Specs Matter
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
            Commercial mushroom farming is an industrial bio-manufacturing process. Precision blueprints, thermal calculations, and automated climate specs determine the difference between bumper yields and total crop failure.
          </p>
        </header>

        {/* Technical Specification Badges Dashboard (Compact 4-Column Layout) */}
        <section
          aria-label="Engineering Baseline Specifications"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Insulation</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">80mm PUF Panels</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Racking System</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">5-Tier GI Frames</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-950 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <Wind className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Air Handling</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">Positive Pressure AHU</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Gauge className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Pasteurization</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">Phase-II Bulk Tunnel</span>
            </div>
          </div>
        </section>

        {/* Intro Body with embedded internal links naturally inside text */}
        <section className="space-y-3 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
          <p className="font-medium text-slate-900 dark:text-slate-100 text-sm sm:text-base">
            When aspiring growers think about starting a commercial mushroom farm, they often imagine a simple dark shed and a couple of domestic air conditioners. But when your goal is industrial-scale production, year-round harvest cycles, and an unmatched biological efficiency of 95%+, guessing your setup is a recipe for financial disaster.
          </p>
          <p>
            Cultivating high-demand crops like temperature-sensitive{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial Button mushrooms
            </Link>{" "}
            or fast-growing{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              fresh Oyster mushrooms
            </Link>{" "}
            requires absolute microclimate mastery. A single dead air zone in a growing room can stunt pinning, cause leggy stems, or invite devastating bacterial blotch. That is why the foundation of a high-yield enterprise is decided on blueprints long before the first batch of{" "}
            <Link
              href="/spawn-seeds"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              certified pure culture spawn seed
            </Link>{" "}
            arrives at your facility.
          </p>
        </section>

        {/* 3 Core Engineering Pillars in Compact 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {/* Pillar 1: Thermal Envelope */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Thermometer className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Insulation & Climate Control
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                A purpose-built farm relies on 80mm high-density PUF panels (R-value ~40) to eliminate thermal bridging. Paired with custom AHU chillers, ultrasonic humidifiers, and automated dampers, it locks in exact 14°C–18°C temperatures regardless of summer heat waves.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Zero heat loss & low power bills
            </div>
          </div>

          {/* Pillar 2: Spatial Optimization */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Spatial Optimization
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Standard growing chambers (such as 18x70 ft dimensions) utilize 4 to 5 vertical tiers of hot-dip galvanized racking. This engineering layout triples usable bed area while preserving 1-meter service aisles for rapid picking, inspection, and air duct laminar circulation.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> 3x yield per square meter
            </div>
          </div>

          {/* Pillar 3: Compost Tunnel Engineering */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <Cpu className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Compost Unit Engineering
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Bulk pasteurization tunnels engineered with aerated spigot floors and high-static pressure blowers maintain 58°C–60°C peak kill temperatures. This eliminates nematodes and wild fungi, followed by precision conditioning at 48°C–52°C to eliminate ammonia.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> 100% sterile substrate guarantee
            </div>
          </div>
        </div>

        {/* Detailed Risk Mitigation & ROI Protection with natural internal text links */}
        <section className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
              ✓
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Eliminating Expensive Infrastructure Mistakes
            </h2>
          </div>

          <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                1. Eliminating Thermal Leaks & High Power Bills:
              </strong>
              Ordinary brick or tin sheds leak conditioned air rapidly, driving power consumption to unsustainable levels. Precision project specs mandate tight vapor barriers, food-grade epoxy floors, and interlocking cam-lock PUF joints to safeguard operational profitability.
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                2. Sizing HVAC & Air Filtration for Fungal Respiration:
              </strong>
              Unlike green plants, mushrooms consume oxygen and exhale heavy amounts of carbon dioxide. Our air distribution designs provide 4 to 6 room volume changes per hour with positive room pressure to block outdoor spore entry. For warm-weather species like{" "}
              <Link
                href="/services/milky-mushroom"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                tropical Milky mushrooms
              </Link>
              , ventilation specs focus on high air exchange at 28°C–35°C.
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                3. End-to-End Turnkey Blueprints & Financial Modeling:
              </strong>
              Before pouring concrete, validate your capital expenditure and monthly running costs using our interactive{" "}
              <Link
                href="/mushroomfarmingcalculators"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                mushroom farming ROI & project cost calculator
              </Link>
              . To execute construction without contractor headaches, explore our comprehensive{" "}
              <Link
                href="/services/turnkey-setup"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                turnkey commercial farm EPC execution
              </Link>{" "}
              and join our practical{" "}
              <Link
                href="/training"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                commercial farm management workshops
              </Link>
              .
            </div>
          </div>
        </section>

        {/* Engineering Audit Callout */}
        <section className="mb-6 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800/90 border border-blue-200/70 dark:border-slate-700 text-xs leading-relaxed">
          <h2 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" /> Bankable Detailed Project Reports (DPR) & Subsidies
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            Our architectural blueprints and project specifications comply with National Horticulture Board (NHB) and NABARD credit-linked subsidy guidelines (33% to 50% capital subsidies). Every specification includes equipment electrical load schedules, civil bill of quantities, and certified environmental compliance.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-blue-700 dark:text-blue-300 font-semibold">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> NHB Compliant DPR
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Electrical Load Schedules
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Civil BOQ Drawings
            </span>
          </div>
        </section>

        {/* High Conversion CTA Section */}
        <section className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white dark:bg-slate-900 dark:border dark:border-slate-800 text-center">
          <h2 className="text-base sm:text-lg font-bold mb-1.5">
            Need Expert Project Specifications & Blueprints?
          </h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto mb-3 leading-relaxed">
            Eliminate costly trial-and-error mistakes. Get precision engineering blueprints, thermal load calculations, and turnkey execution from{" "}
            <strong className="text-emerald-400">Organic Mushrooms Farm</strong> to launch your commercial facility on the right foundation.
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
              <Mail className="w-3.5 h-3.5" /> Request Project Blueprints
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
