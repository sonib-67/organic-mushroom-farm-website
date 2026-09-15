import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Layers,
  CheckCircle2,
  AlertTriangle,
  PackageCheck,
  IndianRupee,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Droplets,
  Box,
  RotateCcw,
  Thermometer,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Button Mushroom Compost Preparation Guide | Phase I & II",
  description:
    "Step-by-step button mushroom compost preparation. Learn Phase I fermentation and Phase II pasteurization for commercial farming.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/process/compost-preparation",
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
    title: "Button Mushroom Compost Preparation Guide | Phase I & II",
    description:
      "Step-by-step button mushroom compost preparation. Learn Phase I fermentation and Phase II pasteurization for commercial farming.",
    url: "https://organicmushroomsfarm.com/process/compost-preparation",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Button Mushroom Compost Preparation Guide | Phase I & II",
    description:
      "Step-by-step button mushroom compost preparation. Learn Phase I fermentation and Phase II pasteurization for commercial farming.",
  },
};

export default function CompostPreparationProcessPage() {
  const pageUrl = "https://organicmushroomsfarm.com/process/compost-preparation";

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
        name: "Button Mushroom Compost Preparation Guide | Phase I & II",
        description:
          "Step-by-step button mushroom compost preparation. Learn Phase I fermentation and Phase II pasteurization for commercial farming.",
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
            name: "Process",
            item: "https://organicmushroomsfarm.com/process",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Compost Preparation",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Pre-wetting",
      content: "Soaking straw for 48 hours to ensure deep moisture absorption.",
      icon: Droplets,
    },
    {
      title: "Main Stack",
      content: "Creating stacks with supplements for aerobic fermentation.",
      icon: Box,
    },
    {
      title: "Turning Schedule",
      content: "Regular turning (Day 0, 4, 8, etc.) to ensure uniform heat.",
      icon: RotateCcw,
    },
    {
      title: "Tunnel Loading",
      content: "Moving to the Phase-II tunnel for peak heat and oxygenation.",
      icon: Thermometer,
    },
  ];

  const materials = [
    "Bunker/Floor",
    "Front-end Loader",
    "Turning Machine",
    "Temperature Probes",
  ];

  const commonMistakes = [
    "Anaerobic pockets in the stack creating foul odor.",
    "Temperature drop below 50°C during Phase-II.",
    "Inconsistent turning leading to un-fermented straw.",
  ];

  return (
    <main
      id="compost-preparation-process-page"
      className="min-h-screen bg-transparent pt-20 sm:pt-24 pb-12 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-2">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/process/compost-preparation"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Process
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Compost Preparation
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-2.5">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>Compost Preparation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Scientific Compost <span className="gradient-text">Preparation</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-amber-700 dark:text-amber-400 mb-2">
            Converting Waste into Nutrient-Rich Gold
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Composting is a chemical process that breaks down lignin and cellulose into forms the mushroom mycelium can consume.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="compost-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-1">
              Phase I &amp; II Protocol
            </div>
            <h2
              id="compost-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Fermentation Flow</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-3.5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-black gradient-text">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {s.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Materials & Cost Estimation (Side-by-Side Compact) */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Required Assets & Materials */}
          <section
            aria-labelledby="compost-materials-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3
                id="compost-materials-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Required Machinery
              </h3>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {materials.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cost Estimation */}
          <section
            aria-labelledby="compost-pricing-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="compost-pricing-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Production Cost
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                ₹6,000 - ₹8,000 per ton
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Cost of production varies based on mechanization, Phase-II energy consumption, and raw material logistics.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Efficient tunnel usage and scheduled turning significantly optimize per-ton expenditure.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="compost-pitfalls-heading"
          className="rounded-2xl p-4 border border-rose-500/30 bg-rose-500/[0.03] dark:bg-rose-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="compost-pitfalls-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Critical Pitfalls to Avoid
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-xs text-slate-700 dark:text-slate-300">
            {commonMistakes.map((m, i) => (
              <div
                key={i}
                className="rounded-xl p-2.5 border border-rose-500/20 bg-white/40 dark:bg-white/[0.02] flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span className="leading-snug">{m}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: In-Text Natural Internal Linking (No External List) */}
        <section
          aria-labelledby="compost-strategy-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="compost-strategy-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Mastering Phase I &amp; Phase II <span className="gradient-text">Pasteurization</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            After successfully sourcing high-nitrogen inputs via proper{" "}
            <Link
              href="/process/raw-material"
              className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
            >
              raw material selection
            </Link>
            , the real biochemical engineering begins. The Phase I outdoor fermentation focuses on aerobic breakdown utilizing a strict turning schedule. A common cause of foul odor is the creation of anaerobic pockets inside the main stack, which harms future mycelial growth. As experts in commercial{" "}
            <Link
              href="/services/compost-production"
              className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
            >
              compost production
            </Link>
            , we implement mechanized front-end loaders and turning machines to maintain optimal oxygenation and uniform heat distribution across the bunker floors.
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Once Phase I breaks down the tough lignin, the mass is moved to specialized Phase-II pasteurization tunnels. Here, precisely calibrated temperature probes ensure the heat never drops below 50°C during the conditioning phase, effectively eradicating competing pathogens and nematodes before the substrate is moved into the{" "}
            <Link
              href="/process/production-room"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              production room
            </Link>
            . Whether you are building an on-farm composting yard or sourcing ready-to-fruit bags directly from our{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
            >
              Jabalpur facility
            </Link>
            , precision is key. For bulk Phase-II compost inquiries or machinery setup guidance, connect directly via our{" "}
            <Link
              href="/contact"
              className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
            >
              contact portal
            </Link>.
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="compost-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-amber-500/30 bg-amber-500/[0.04] dark:bg-amber-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="compost-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Need Phase II Pasteurized Compost?
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Order premium spawned compost blocks or consult our team for setting up your own Phase I &amp; II facility.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-amber-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20inquire%20about%20Phase-II%20Mushroom%20Compost%20supply%20or%20facility%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm bg-amber-600 hover:bg-amber-700 text-white border-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss Compost</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Bulk Order</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
