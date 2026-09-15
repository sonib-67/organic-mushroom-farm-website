import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sprout,
  ShieldCheck,
  Zap,
  Dna,
  CheckCircle2,
  ChevronRight,
  Calendar,
  Clock,
  Phone,
  Mail,
  Award,
  FlaskConical,
  Microscope,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "The Foundation of Every Great Harvest: Premium Organic Mushroom Spawn",
  description:
    "Discover why premium organic mushroom spawn is non-negotiable for successful farming. Learn about genetics, contamination, and high-yield seeds.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/spawn-seeds",
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
      "The Foundation of Every Great Harvest: Premium Organic Mushroom Spawn",
    description:
      "Discover why premium organic mushroom spawn is non-negotiable for successful farming. Learn about genetics, contamination, and high-yield seeds.",
    url: "https://organicmushroomsfarm.com/spawn-seeds",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
        width: 1200,
        height: 675,
        alt: "Commercial Mushroom Spawn Laboratory and Cultivation",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
        width: 1200,
        height: 675,
        alt: "Pure Culture Mushroom Spawn Production Facility",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png",
        width: 1200,
        height: 675,
        alt: "High-Yield Spawn Inoculated Mushroom Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Foundation of Every Great Harvest: Premium Organic Mushroom Spawn",
    description:
      "Discover why premium organic mushroom spawn is non-negotiable for successful farming. Learn about genetics, contamination, and high-yield seeds.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png",
    ],
  },
};

export default function SpawnSeedsPage() {
  const pageUrl = "https://organicmushroomsfarm.com/spawn-seeds";
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
        name: "The Foundation of Every Great Harvest: Premium Organic Mushroom Spawn",
        description:
          "Discover why premium organic mushroom spawn is non-negotiable for successful farming. Learn about genetics, contamination, and high-yield seeds.",
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
            name: "Mushroom Spawn Seeds",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: "Lab-Certified Pure Culture Organic Mushroom Spawn (Seeds)",
        image: imagesList,
        description:
          "High-yielding, contaminant-free commercial grain spawn for Button, Oyster, and Milky mushrooms. Produced in class-100 laminar airflow cleanrooms.",
        brand: {
          "@type": "Brand",
          name: "Organic Mushroom Farm",
        },
        offers: {
          "@type": "Offer",
          url: pageUrl,
          priceCurrency: "INR",
          price: "120",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@id": "https://organicmushroomsfarm.com/#organization",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "385",
        },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "The Foundation of Every Great Harvest: Premium Organic Mushroom Spawn",
        description:
          "Discover why premium organic mushroom spawn is non-negotiable for successful farming. Learn about genetics, contamination, and high-yield seeds.",
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
      id="spawn-seeds-article-page"
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
            <span className="text-slate-600 dark:text-slate-300">Supplies</span>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none"
          >
            Mushroom Spawn Seeds
          </li>
        </ol>
      </nav>

      {/* Main Content Article (Compact Layout, No On-Page Images as Requested) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <header className="mb-5">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <Sprout className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Mushroom Spawn & Genetics
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> March 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 4 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2.5">
            The Foundation of Every Great Harvest:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">
              Premium Organic Mushroom Spawn
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
            Every profitable commercial farm begins with rigorous genetics. High-vigor, contaminant-free mycelium ensures rapid colonization, dense flushes, and maximum bio-efficiency.
          </p>
        </header>

        {/* Technical Quality Badges Dashboard (Compact 4-Column Layout) */}
        <section
          aria-label="Mushroom Spawn Quality Metrics"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Colonization</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">12 – 15 Days Run</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Purity Standard</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">Zero Contaminants</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Dna className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Genetics</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">Pure Master/F1</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <Award className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Bio-Efficiency</span>
              <span className="font-bold text-slate-900 dark:text-white text-xs">Up to 100% Yield</span>
            </div>
          </div>
        </section>

        {/* Intro Body with embedded internal links naturally inside text */}
        <section className="space-y-3 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
          <p className="font-medium text-slate-900 dark:text-slate-100 text-sm sm:text-base">
            Every successful mushroom farm—whether it is a passionate backyard hobby or a multi-ton industrial facility—starts with one critical decision: the quality of your <strong className="text-emerald-700 dark:text-emerald-400">spawn (mushroom seed)</strong>.
          </p>
          <p>
            In the fungal kingdom, spawn is not a passive seed; it is a living, actively growing fungal mycelium culture established on sterilized cereal grains like wheat, sorghum, or millet. Sourcing vigorous, contaminant-free spawn is the single most important factor determining whether your bags produce heavy commercial flushes or collapse under green mold. Before inoculating your beds, smart growers evaluate their crop variety—choosing between market-dominating{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              White Button mushrooms
            </Link>
            , fast-growing{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial Oyster mushrooms
            </Link>
            , or resilient tropical{" "}
            <Link
              href="/services/milky-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              summer Milky varieties
            </Link>
            .
          </p>
        </section>

        {/* 3 Core Genetic & Technical Pillars in Compact 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {/* Pillar 1: Genetics */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Dna className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Genetics Make the Difference
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Just like premium livestock or certified hybrid seeds in traditional farming, fungal genetics dictate biological vigor. High-grade, fully colonized spawn rapidly colonizes the pasteurized substrate before competing competitor molds (Trichoderma) have a chance to take hold.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Faster run & dense primordia
            </div>
          </div>

          {/* Pillar 2: Lab Standards */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <FlaskConical className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Defining Top-Tier Seeds
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Non-negotiable quality relies on three factors: 100% sterile autoclave preparation under HEPA laminar hoods, commercial high-yield strain isolation, and pure organic grain substrates without chemical residues that could suppress vegetative growth.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Zero latent viral/mold spores
            </div>
          </div>

          {/* Pillar 3: Yield Security */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Secure Yield From Day One
                </h2>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                A skyscraper cannot stand on a crumbling foundation; similarly, an agri-enterprise cannot succeed with cheap, weakened subcultures. Investing in lab-tested spawn protects your investment across all heating, cooling, and substrate processing costs.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Safeguarded CapEx & OpEx
            </div>
          </div>
        </div>

        {/* Detailed Inoculation & Handling Best Practices with natural text links */}
        <section className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
              ✓
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Professional Spawn Handling & Farm Integration
            </h2>
          </div>

          <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                1. Inspecting Mycelial Health:
              </strong>
              High-vigor spawn should be bright chalk-white with a fresh, pleasant earthy mushroom fragrance. Reject bags with yellow exudate, dark bacterial blotches, or green dust.
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                2. Precise Spawning Rates & Substrate Temperature:
              </strong>
              Always ensure substrate cools down below 26°C before inoculation. For button mushrooms on compost, maintain 0.5%–0.7% spawning; for oyster on pasteurized straw, use 2%–3% wet weight. Calculate your exact substrate and bag numbers using our{" "}
              <Link
                href="/mushroomfarmingcalculators"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                free mushroom farming profit & yield calculator
              </Link>
              .
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-0.5">
                3. Infrastructure Synergy & Training:
              </strong>
              Top genetics achieve peak bio-efficiency only when paired with well-insulated growing rooms. Explore our engineered{" "}
              <Link
                href="/services/turnkey-setup"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                turnkey commercial mushroom farm setups
              </Link>{" "}
              or attend our hands-on{" "}
              <Link
                href="/training"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                commercial mushroom cultivation training program
              </Link>{" "}
              to master sterile lab maintenance and high-density cropping.
            </div>
          </div>
        </section>

        {/* Pan-India Cold Chain Dispatch Notice */}
        <section className="mb-6 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800/90 border border-emerald-200/70 dark:border-slate-700 text-xs leading-relaxed">
          <h2 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
            <Microscope className="w-4 h-4 text-emerald-600" /> Pan-India Express Cold-Chain Spawn Dispatch
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            We supply freshly cultured master spawn packs across all 28 states of India. Every batch is packaged with breathable microporous filter patch bags to maintain optimal gas exchange during transit and prevent overheating.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-emerald-700 dark:text-emerald-300 font-semibold">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Breathable Filter Bags
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Express Courier Dispatch
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Commercial Wholesale Rates
            </span>
          </div>
        </section>

        {/* High Conversion CTA Section */}
        <section className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white dark:bg-slate-900 dark:border dark:border-slate-800 text-center">
          <h2 className="text-base sm:text-lg font-bold mb-1.5">
            Ready to Start With the Best Fungal Genetics?
          </h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto mb-3 leading-relaxed">
            Don&apos;t risk your crop with sub-standard or contaminated seeds. Get premium, lab-tested, and 100% organic mushroom spawn delivered directly from{" "}
            <strong className="text-emerald-400">Organic Mushrooms Farm</strong> today.
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
              <Mail className="w-3.5 h-3.5" /> Order Spawn Online
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
