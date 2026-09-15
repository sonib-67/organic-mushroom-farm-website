import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Zap,
  CheckCircle2,
  AlertTriangle,
  PackageCheck,
  IndianRupee,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ThermometerSnowflake,
  Wind,
  Truck,
  Store,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Cold Chain & Storage Solutions India | Freshness Assured",
  description:
    "Professional cold chain solutions for mushroom shelf-life extension. Specialized cold storage and refrigerated transport for Pan India delivery.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services/cold-chain",
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
    title: "Mushroom Cold Chain & Storage Solutions India | Freshness Assured",
    description:
      "Professional cold chain solutions for mushroom shelf-life extension. Specialized cold storage and refrigerated transport for Pan India delivery.",
    url: "https://organicmushroomsfarm.com/services/cold-chain",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Cold Chain & Storage Solutions India | Freshness Assured",
    description:
      "Professional cold chain solutions for mushroom shelf-life extension. Specialized cold storage and refrigerated transport for Pan India delivery.",
  },
};

export default function ColdChainServicePage() {
  const pageUrl = "https://organicmushroomsfarm.com/services/cold-chain";

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
        name: "Mushroom Cold Chain & Storage Solutions India | Freshness Assured",
        description:
          "Professional cold chain solutions for mushroom shelf-life extension. Specialized cold storage and refrigerated transport for Pan India delivery.",
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
            name: "Cold Chain",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Pre-cooling",
      content:
        "Rapid cooling of harvested mushrooms to 4°C within 2 hours.",
      icon: Wind,
    },
    {
      title: "Cold Storage",
      content: "Maintaining 2-4°C with 90% humidity in the farm unit.",
      icon: ThermometerSnowflake,
    },
    {
      title: "Insulated Transport",
      content: "Moving goods in refrigerated or PUF insulated vehicles.",
      icon: Truck,
    },
    {
      title: "Retail Cooling",
      content: "Ensuring retailers use cold displays for shelf life.",
      icon: Store,
    },
  ];

  const materials = [
    "Cold Room Panels",
    "Semi-Hermetic Compressors",
    "Insulated Crates",
    "Digital Temp Logs",
  ];

  const commonMistakes = [
    "Delaying pre-cooling leading to browning (oxidation).",
    "Fluctuating temperatures during transport.",
    "Poor air circulation in the cold room.",
  ];

  return (
    <main
      id="cold-chain-service-page"
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
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
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
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
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
            Cold Chain
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-2.5">
            <Zap className="w-3.5 h-3.5 text-cyan-500" />
            <span>Cold Chain</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Precision Cold Chain <span className="gradient-text">for Mushrooms</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-300 mb-2">
            Preserving Freshness from Harvest to Consumer
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Mushrooms are 90% water and highly perishable. Our cold chain solutions ensure your harvest reaches the market with zero quality loss.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="cold-chain-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-1">
              Logistics Protocol
            </div>
            <h2
              id="cold-chain-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Preservation Flow</span>
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
            aria-labelledby="cold-chain-materials-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3
                id="cold-chain-materials-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Required Infrastructure
              </h3>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {materials.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cost Estimation */}
          <section
            aria-labelledby="cold-chain-pricing-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="cold-chain-pricing-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Setup Cost Estimation
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                ₹3 Lakhs - ₹5 Lakhs
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                ₹3 - ₹5 Lakhs for a small on-farm cold room setup equipped with precision climate controls.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Estimates are indicative and vary based on PUF panel thickness, compressor brand, and total storage capacity required.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="cold-chain-pitfalls-heading"
          className="rounded-2xl p-4 border border-amber-500/30 bg-amber-500/[0.03] dark:bg-amber-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="cold-chain-pitfalls-heading"
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
          aria-labelledby="cold-chain-strategy-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="cold-chain-strategy-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Maximizing Shelf Life Through{" "}
            <span className="gradient-text">Integrated Temperature Control</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Because mushrooms consist of 90% water, post-harvest respiration leads to rapid deterioration and browning if not immediately cooled. Whether you are scaling up{" "}
            <Link
              href="/services/button-mushroom"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              button mushroom farming
            </Link>{" "}
            or dealing with delicate{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              oyster mushroom varieties
            </Link>
            , an unbroken cold chain is non-negotiable for preserving grade-A quality. We engineer precision cold rooms as part of our{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              commercial turnkey farm setup
            </Link>{" "}
            to drop core temperatures to 4°C within two hours of harvesting.
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            A robust cold chain directly enhances your leverage in B2B negotiations. By utilizing insulated transport and temperature logs, you can guarantee freshness to distant markets, which perfectly complements our{" "}
            <Link
              href="/services/marketing-support"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              marketing and sales support
            </Link>{" "}
            programs. Operating out of logistics hubs like{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>
            , we help farms deploy semi-hermetic compressors and PUF panels that maintain 90% humidity alongside strict chilling. To design a custom storage layout for your yield, schedule a technical consultation via our{" "}
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              contact page
            </Link>
            .
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="cold-chain-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-cyan-500/30 bg-cyan-500/[0.04] dark:bg-cyan-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="cold-chain-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Upgrade Your Cold Storage Infrastructure
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Consult our engineers to design a high-efficiency pre-cooling unit tailored to your daily harvest capacity.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20looking%20to%20set%20up%20a%20Mushroom%20Cold%20Storage.%20Please%20provide%20technical%20guidance%20and%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss Cold Setup</span>
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
