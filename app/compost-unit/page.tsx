import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Factory,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  Flame,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "The Heart of Button Mushroom Farming: Science of a Compost Unit",
  description:
    "Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/compost-unit",
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
      "The Heart of Button Mushroom Farming: The Science of a Commercial Compost Unit 🏭",
    description:
      "Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.",
    url: "https://organicmushroomsfarm.com/compost-unit",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Farm Infrastructure",
  },
  twitter: {
    card: "summary",
    title:
      "The Heart of Button Mushroom Farming: The Science of a Commercial Compost Unit 🏭",
    description:
      "Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.",
  },
};

export default function CompostUnitArticlePage() {
  const pageUrl = "https://organicmushroomsfarm.com/compost-unit";
  const publishedDate = "2026-08-12T08:00:00+05:30";
  const modifiedDate = "2026-08-12T08:00:00+05:30";

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
        name: "The Heart of Button Mushroom Farming: Science of a Compost Unit",
        description:
          "Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.",
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
            name: "Compost Unit",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "The Heart of Button Mushroom Farming: The Science of a Commercial Compost Unit",
        description:
          "Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.",
        datePublished: publishedDate,
        dateModified: modifiedDate,
        mainEntityOfPage: {
          "@id": `${pageUrl}#webpage`,
        },
        author: {
          "@type": "Organization",
          name: "Organic Mushroom Farm Editorial Team",
        },
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
    ],
  };

  return (
    <main
      id="compost-unit-article-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none">
            Compost Unit
          </li>
        </ol>
      </nav>

      {/* Main Article Container - Compact Editorial Flow Without Artificial Card Boxes */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <header className="mb-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <Factory className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Farm Infrastructure
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            The Heart of Button Mushroom Farming: <span className="gradient-text">The Science of a Commercial Compost Unit</span> 🏭
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Unlike{" "}
            <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              Oyster
            </Link>{" "}
            or other wood-loving varieties that fruit happily on simple pasteurized straw,{" "}
            <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              Button mushrooms (Agaricus bisporus)
            </Link>{" "}
            are secondary decomposers. They cannot break down raw agricultural waste directly. They require a bio-chemically degraded, selectively fermented, and completely pasteurized substrate to grow: commercial compost.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            If your growing rooms are the lungs of a button mushroom farm, the compost yard and pasteurization tunnel are its heart and digestive system. Here is why understanding and investing in proper compost infrastructure is the single most critical step for your agri-business.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-emerald-500" /> Farming&apos;s Most Complex Recipe
            </h2>
            <p className="mb-2">
              Preparing commercial-grade button mushroom compost is pure science. It requires balancing carbon, nitrogen, moisture, and aeration across two distinct phases:
            </p>
            <div className="space-y-2 mt-2 mb-2 pl-2">
              <div className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Phase-I (Outdoor/Bunker Composting):</strong> Raw wheat straw, chicken manure, gypsum, and urea are carefully wetted, mixed, and stacked into aerated bunkers. Aerobic thermophilic bacteria naturally ignite the pile, driving internal temperatures up to 75°C to 80°C to break down raw cellulose.
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Phase-II (Tunnel Pasteurization &amp; Conditioning):</strong> The compost is transferred into an airtight, insulated bulk chamber. Centrifugal blowers force high-volume air through slotted floors, pasteurizing the substrate at 58°C–60°C to eliminate harmful nematodes, molds, and pests, followed by conditioning at 48°C–52°C to clear toxic ammonia gas so your{" "}
                  <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    high-yield mushroom spawn
                  </Link>{" "}
                  can thrive.
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-emerald-500" /> Why You Cannot Cut Corners
            </h2>
            <p className="mb-2">
              Substandard compost is the number one cause of button mushroom farm failures. If Phase-II pasteurization is incomplete, your beds will rapidly succumb to green mold (Trichoderma), wet bubble disease, or competing weed fungi like ink caps.
            </p>
            <p className="mb-2">
              If the carbon-to-nitrogen ratio is poorly calibrated during Phase-I, your yield per bag or square foot will drop drastically, turning what should be a 100% profitable commercial operation into an expensive liability.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Master the Foundation of Your Farm
            </h2>
            <p className="mb-2">
              Whether you plan to purchase prepared Phase-II/Phase-III compost from a central facility or build your own dedicated on-site bunkers, understanding the bio-chemical parameters of substrate preparation is non-negotiable.
            </p>
            <p className="mb-2">
              From concrete grading and leachate recycling systems to automated boiler steam lines, our{" "}
              <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                turnkey commercial setups
              </Link>{" "}
              and practical{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                training courses
              </Link>{" "}
              give you the exact blueprints to produce contaminant-free, ultra-rich compost consistently.
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Build Your Infrastructure Right
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Design a world-class Phase-II/III compost unit or upgrade your existing yard with engineering consultation from Organic Mushrooms Farm.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="tel:9203544140"
                className="btn-primary w-full sm:w-auto px-5 py-2 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Call / WhatsApp
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-xs border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Book a Consultation
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
