import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Globe,
  MapPin,
  ArrowRight,
  Sparkles,
  BookOpen,
  Phone,
  Building2,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming USA Guide | Organic Mushroom Farm",
  description:
    "Comprehensive guide to mushroom farming in the USA. Learn about indoor farming, climate control, and state-by-state strategies.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-farming-usa-guide",
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
    title: "Mushroom Farming USA Guide | Organic Mushroom Farm",
    description:
      "Comprehensive guide to mushroom farming in the USA. Learn about indoor farming, climate control, and state-by-state strategies.",
    url: "https://organicmushroomsfarm.com/mushroom-farming-usa-guide",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming USA Guide | Organic Mushroom Farm",
    description:
      "Comprehensive guide to mushroom farming in the USA. Learn about indoor farming, climate control, and state-by-state strategies.",
  },
};

export default function MushroomFarmingUsaGuidePage() {
  const pageUrl = "https://organicmushroomsfarm.com/mushroom-farming-usa-guide";

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
          areaServed: ["US", "IN"],
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
        name: "Mushroom Farming USA Guide | Organic Mushroom Farm",
        description:
          "Comprehensive guide to mushroom farming in the USA. Learn about indoor farming, climate control, and state-by-state strategies.",
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
            name: "USA Guide",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main
      id="usa-guide-page"
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Mushroom Farming USA Guide
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <Globe className="w-3.5 h-3.5 text-emerald-500" />
            <span>North American Expansion</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Mushroom Farming <span className="gradient-text text-emerald-600 dark:text-emerald-400">USA Guide</span>
          </h1>

          <p className="text-xs sm:text-[13px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to the ultimate resource for commercial and boutique mushroom cultivation in the United States. Whether you are scaling an urban indoor setup or launching a commercial farm, mastering regional microclimates and premium culinary demand across North America is crucial.
          </p>
        </header>

        {/* Overview Information Note */}
        <section
          aria-labelledby="usa-overview-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="usa-overview-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
            >
              State-by-State Strategic Insights
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Below you will find our state-specific guides to help you start your profitable mushroom farming business. Discover precision indoor farming setups, climate control automation, and local distributor linkages tailored to US markets. You can also explore our specialized{" "}
            <Link
              href="/usatraining"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              USA Training Masterclass
            </Link>{" "}
            and rigorous{" "}
            <Link
              href="/sops"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              production SOPs
            </Link>{" "}
            for high-yield indoor harvests.
          </p>
        </section>

        {/* Regional Farming Guides Cards */}
        <section
          aria-labelledby="regional-guides-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <h2
                id="regional-guides-heading"
                className="text-[14px] font-bold text-slate-900 dark:text-white"
              >
                Regional Farming Guides
              </h2>
            </div>
            <span className="text-[10.5px] font-semibold text-slate-500">
              Verified Case Studies
            </span>
          </div>

          <div className="space-y-3">
            {/* Guide 1: California */}
            <article className="p-3.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] transition-all hover:border-emerald-500/40">
              <Link
                href="/how-to-start-indoor-mushroom-farm-california"
                className="group block space-y-1.5 no-underline"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[13.5px] font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors leading-snug">
                    How to Start a Profitable Indoor Mushroom Farm in California
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0" />
                </div>
                <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                  California is the heart of the organic food and farm-to-table movement in the USA. Learn how to master indoor climate control and bypass California&apos;s unpredictable heatwaves and dry spells with closed-loop HVAC systems.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[10px] text-slate-500">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Read Complete California Plan</span>
                  <span>•</span>
                  <span>Indoor Growing Systems</span>
                </div>
              </Link>
            </article>

            {/* Guide 2: San Diego */}
            <article className="p-3.5 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] transition-all hover:border-emerald-500/40">
              <Link
                href="/mushroom-farming-san-diego"
                className="group block space-y-1.5 no-underline"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[13.5px] font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors leading-snug">
                    San Diego Indoor Mushroom Farming: A Practical Guide to Building Your Own Farm
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0" />
                </div>
                <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                  Learn how to set up a low-cost, high-yield indoor mushroom grow room tailored to Southern California&apos;s unique coastal and desert boundary climates.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[10px] text-slate-500">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Read San Diego Setup Guide</span>
                  <span>•</span>
                  <span>Urban Ag &amp; Local Restaurants</span>
                </div>
              </Link>
            </article>
          </div>
        </section>

        {/* Section: USA Masterclass & Turnkey Setup Consultation CTA (No Black Box) */}
        <section
          aria-labelledby="usa-consultation-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h3
              id="usa-consultation-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              Looking to Setup an Indoor Commercial Farm in the USA?
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              Join our certified online courses, evaluate{" "}
              <Link
                href="/mushroom-types"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                high-margin mushroom varieties
              </Link>
              , or consult directly with our agricultural engineering desk for turn-key HVAC and grow-room designs.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/usatraining"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>USA Masterclass</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Mushroom%20Farming%20in%20the%20USA."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Advice</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
