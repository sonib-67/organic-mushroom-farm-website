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
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Flame,
  ThermometerSnowflake,
  Wind,
  ShieldCheck,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Industrial Mushroom Compost Production India | Phase II & III",
  description:
    "Specialized industrial compost production for button mushroom farming. Standardized Phase II pasteurized compost for high yields in India.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services/compost-production",
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
    title: "Industrial Mushroom Compost Production India | Phase II & III",
    description:
      "Specialized industrial compost production for button mushroom farming. Standardized Phase II pasteurized compost for high yields in India.",
    url: "https://organicmushroomsfarm.com/services/compost-production",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Industrial Mushroom Compost Production India | Phase II & III",
    description:
      "Specialized industrial compost production for button mushroom farming. Standardized Phase II pasteurized compost for high yields in India.",
  },
};

export default function CompostProductionServicePage() {
  const pageUrl = "https://organicmushroomsfarm.com/services/compost-production";

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
        name: "Industrial Mushroom Compost Production India | Phase II & III",
        description:
          "Specialized industrial compost production for button mushroom farming. Standardized Phase II pasteurized compost for high yields in India.",
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
            item: "https://organicmushroomsfarm.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Compost Production",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Raw Material Mixing",
      content:
        "Balanced C:N ratio using wheat straw, poultry manure, and gypsum.",
      icon: Layers,
    },
    {
      title: "Phase-I Fermentation",
      content:
        "Outdoor composting (windrow or bunker) for initial breakdown.",
      icon: Wind,
    },
    {
      title: "Phase-II Pasteurization",
      content:
        "Controlled heating in tunnels at 60°C to kill pathogens.",
      icon: Flame,
    },
    {
      title: "Conditioning",
      content:
        "Gradual cooling to 25°C before spawning.",
      icon: ThermometerSnowflake,
    },
  ];

  const materials = [
    "Wheat/Paddy Straw",
    "Chicken Manure",
    "Gypsum",
    "Urea/DAP",
    "Bunker Infrastructure",
  ];

  const commonMistakes = [
    "Incomplete pasteurization leaving ammonia traces.",
    "Imbalanced C:N ratio leading to low temperature rise.",
    "Poor moisture control (too wet or too dry).",
  ];

  return (
    <main
      id="compost-production-service-page"
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
              href="/services"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Services
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Compost Production
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 mb-2.5">
            <Layers className="w-3.5 h-3.5 text-purple-500" />
            <span>Compost Production</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Industrial Mushroom Compost{" "}
            <span className="gradient-text">Production</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
            Standardized Phase II &amp; Phase III Substrate Preparation
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We help you set up industrial composting units or provide standardized
            pasteurized compost that eliminates competitors like weed molds and
            pathogens.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="compost-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-1">
              Industrial Protocol
            </div>
            <h2
              id="compost-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Substrate Evolution</span>
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
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
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
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3
                id="compost-materials-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Required Assets &amp; Materials
              </h3>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {materials.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cost Estimation */}
          <section
            aria-labelledby="compost-cost-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="compost-cost-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Cost Estimation
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                ₹5 - ₹8 / kg
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                ₹5 - ₹8 per kg of prepared compost for large scale production under standard raw material rates.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Estimates are indicative and vary based on market conditions, seasonal straw rates, and production scale.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="compost-pitfalls-heading"
          className="rounded-2xl p-4 border border-amber-500/30 bg-amber-500/[0.03] dark:bg-amber-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="compost-pitfalls-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Common Pitfalls to Avoid
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-xs text-slate-700 dark:text-slate-300">
            {commonMistakes.map((m, i) => (
              <div
                key={i}
                className="rounded-xl p-2.5 border border-amber-500/20 bg-white/40 dark:bg-white/[0.02] flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span className="leading-snug">{m}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: In-Text Natural Internal Linking (No External List) */}
        <section
          aria-labelledby="substrate-engineering-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="substrate-engineering-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Engineering Pathogen-Free Substrates for{" "}
            <span className="gradient-text">Button Mushroom Facilities</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Nutritious compost is the primary biological engine behind commercial{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              button mushroom farming
            </Link>
            . Incomplete fermentation or unconditioned ammonia gas inhibits mycelium run and invites harmful competitor molds. Our specialized{" "}
            <Link
              href="/compost-unit"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              commercial compost unit tunnels
            </Link>{" "}
            (2,000 and 3,000 bag capacities) guarantee precise 58°C to 60°C pasteurization, conditioned aeration, and balanced moisture control.
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Inoculate your compost with high-purity genetics from our{" "}
            <Link
              href="/services/spawn-supply"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              hybrid spawn supply catalogue
            </Link>{" "}
            or design complete production sheds using our{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial turnkey farm setup
            </Link>
            . Learn professional Phase-I and Phase-II management hands-on at our Katangi Road,{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>{" "}
            farm facility through our practical{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              mushroom training courses
            </Link>
            .
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="compost-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="compost-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Start Your Commercial Compost Unit Project
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              We provide turnkey bunker tunnel layouts, aeration grids, and operator training across India.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Industrial%20Compost%20Production%20Services.%20Please%20provide%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Consult an Expert</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Page</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
