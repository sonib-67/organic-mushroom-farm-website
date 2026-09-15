import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Home,
  CheckCircle2,
  AlertTriangle,
  PackageCheck,
  IndianRupee,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  PanelTop,
  AlignVerticalSpaceAround,
  Wind,
  Droplets,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Grow Room Design & Climate Control India",
  description:
    "Advanced mushroom production room setup. Climate control, racking, and insulation standards for year-round farming in India.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/process/production-room",
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
    title: "Mushroom Grow Room Design & Climate Control India",
    description:
      "Advanced mushroom production room setup. Climate control, racking, and insulation standards for year-round farming in India.",
    url: "https://organicmushroomsfarm.com/process/production-room",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Grow Room Design & Climate Control India",
    description:
      "Advanced mushroom production room setup. Climate control, racking, and insulation standards for year-round farming in India.",
  },
};

export default function ProductionRoomProcessPage() {
  const pageUrl = "https://organicmushroomsfarm.com/process/production-room";

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
        name: "Mushroom Grow Room Design & Climate Control India",
        description:
          "Advanced mushroom production room setup. Climate control, racking, and insulation standards for year-round farming in India.",
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
            name: "Production Room Setup",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Insulation",
      content: "PUF panels or high-grade thermo-insulation for temp stability.",
      icon: PanelTop,
    },
    {
      title: "Racking",
      content: "Vertical racking (5-7 tiers) to maximize square footage.",
      icon: AlignVerticalSpaceAround,
    },
    {
      title: "Air Handling",
      content: "AHUs with HEPA filters to maintain CO2 below 1000ppm.",
      icon: Wind,
    },
    {
      title: "Drainage",
      content: "Sloped floors for easy cleaning and pathogen control.",
      icon: Droplets,
    },
  ];

  const materials = [
    "PUF Panels",
    "GI Racks",
    "AHU Units",
    "Ducting",
    "LED Grow Lights",
  ];

  const commonMistakes = [
    "Leaky insulation causing high electricity bills.",
    "Poor air distribution creating 'hot spots' in racks.",
    "Inadequate light control for workers during harvest.",
  ];

  return (
    <main
      id="production-room-process-page"
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
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
            Production Room Setup
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 mb-2.5">
            <Home className="w-3.5 h-3.5 text-blue-500" />
            <span>Production Room Setup</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Industrial Growing <span className="gradient-text text-blue-600 dark:text-blue-400">Environment Control</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-400 mb-2">
            Creating the Perfect Micro-Climate for Year-Round Harvest
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The production room (Grow Room) is a high-tech environment where CO2, Humidity, and Temperature are strictly regulated.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="production-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-1">
              Infrastructure Blueprint
            </div>
            <h2
              id="production-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Facility Setup</span>
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
                      <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
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
            aria-labelledby="production-materials-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3
                id="production-materials-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Core Infrastructure Components
              </h3>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {materials.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cost Estimation */}
          <section
            aria-labelledby="production-pricing-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="production-pricing-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Capital Expenditure (CapEx)
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                ₹5 - ₹8 Lakhs per 2000 sq ft
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Cost represents standard room setup equipped with PUF insulation, AHUs, and vertical racking.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Investing in high-quality PUF panels drastically reduces long-term operational electricity bills.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="production-pitfalls-heading"
          className="rounded-2xl p-4 border border-rose-500/30 bg-rose-500/[0.03] dark:bg-rose-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="production-pitfalls-heading"
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
          aria-labelledby="production-strategy-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="production-strategy-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Engineering the <span className="gradient-text">Perfect Biological Environment</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            The core difference between a seasonal farmer and a year-round industrial supplier is the precision of their growing environment. A well-designed production room allows cultivators to control critical metrics like temperature, humidity, and CO2, regardless of external weather conditions. This is the foundation of any successful{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              commercial turnkey farm setup
            </Link>
            . Following successful{" "}
            <Link
              href="/process/compost-preparation"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              compost preparation
            </Link>
            , the conditioned substrate requires a highly sterile and regulated space to transition from spawning into full fruiting.
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Insulation is your primary defense against energy loss; hence, high-grade PUF panels are mandatory. Inside, vertical GI racking maximizes spatial efficiency, while Air Handling Units (AHUs) with HEPA filters constantly flush out excess CO2 (keeping it strictly below 1000ppm during the pinning phase). For entrepreneurs planning a facility, we offer expert architectural and climate-control design directly from our{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>{" "}
            headquarters. To get a precise blueprint and equipment estimation for your space, reach out to our engineering team via the{" "}
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              contact portal
            </Link>.
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="production-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-blue-500/30 bg-blue-500/[0.04] dark:bg-blue-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="production-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Design Your High-Tech Grow Room
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Consult our engineers for AHU load calculations, panel insulation, and racking designs.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-blue-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20looking%20for%20engineering%20consultation%20on%20setting%20up%20a%20climate-controlled%20Mushroom%20Grow%20Room."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm bg-blue-600 hover:bg-blue-700 text-white border-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss Layout</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
