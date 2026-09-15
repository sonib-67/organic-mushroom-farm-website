import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Target,
  Layers,
  ShoppingCart,
  Zap,
  Clock,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Farming Model Details | High-Yield Infrastructure | Organic Mushroom Farm",
  description:
    "Detailed technical specifications, infrastructure requirements, and estimated yields for our recommended commercial mushroom farming models.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/model-details",
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
    title: "Farming Model Details | High-Yield Infrastructure",
    description:
      "Detailed technical specifications, infrastructure requirements, and estimated yields for our recommended commercial mushroom farming models.",
    url: "https://organicmushroomsfarm.com/model-details",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Farming Model Details | High-Yield Infrastructure",
    description:
      "Detailed technical specifications, infrastructure requirements, and estimated yields for our recommended commercial mushroom farming models.",
  },
};

export default function ModelDetailsPage() {
  const pageUrl = "https://organicmushroomsfarm.com/model-details";

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
        name: "Farming Model Details | High-Yield Infrastructure",
        description:
          "Detailed technical specifications, infrastructure requirements, and estimated yields for our recommended commercial mushroom farming models.",
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
            name: "Model Details",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main
      id="model-details-page"
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Farming Model Details
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 mb-2.5">
            <Target className="w-3.5 h-3.5 text-blue-500" />
            <span>Technical Specifications</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Farming <span className="gradient-text text-blue-600 dark:text-blue-400">Model Build</span>
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Engineered for high yield and complete climate precision.
          </p>
        </header>

        {/* Section 1: Detailed Specifications Grid */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Infrastructure */}
          <section
            aria-labelledby="model-infra-heading"
            className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-slate-200/50 dark:border-white/10 pb-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h2
                    id="model-infra-heading"
                    className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
                  >
                    Infrastructure Requirements
                  </h2>
                  <p className="text-[11.5px] text-slate-600 dark:text-slate-400">
                    Space, insulation, and rack designs.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-[12.5px] text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Insulated PUF Panels (80mm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Vertical Galvanized Racking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Epoxy coated seamless floors</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Yield */}
          <section
            aria-labelledby="model-yield-heading"
            className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-slate-200/50 dark:border-white/10 pb-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <h2
                    id="model-yield-heading"
                    className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
                  >
                    Estimated Yield
                  </h2>
                  <p className="text-[11.5px] text-slate-600 dark:text-slate-400">
                    Production output per cycle.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-[12.5px] text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Up to 20% Biological Efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>5 complete flush cycles per year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Premium A-grade cap size ratio</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Setup Time */}
          <section
            aria-labelledby="model-time-heading"
            className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-slate-200/50 dark:border-white/10 pb-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h2
                    id="model-time-heading"
                    className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
                  >
                    Setup Time
                  </h2>
                  <p className="text-[11.5px] text-slate-600 dark:text-slate-400">
                    Deployment &amp; installation timeline.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-[12.5px] text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                  <span>30-45 Days from foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                  <span>Structural commissioning (15 Days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                  <span>Machinery mapping &amp; calibration (7 Days)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Direct CTA */}
          <section
            aria-labelledby="model-consult-heading"
            className="rounded-2xl p-4 sm:p-5 border border-blue-500/30 bg-blue-500/[0.04] dark:bg-blue-500/[0.02] backdrop-blur-xs flex flex-col justify-center space-y-3"
          >
            <div>
              <h3
                id="model-consult-heading"
                className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight mb-1"
              >
                Ready for a detailed consultation?
              </h3>
              <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Our engineering team can customize this model to fit your specific available space and budget. Connect with us via our{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  contact
                </Link>{" "}
                team.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="btn-primary w-full py-2.5 rounded-xl text-xs font-bold inline-flex justify-center items-center gap-1.5 shadow-sm bg-blue-600 hover:bg-blue-700 text-white border-0 transition-colors"
            >
              Start Custom Project <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
