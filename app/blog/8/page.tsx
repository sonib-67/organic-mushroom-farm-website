import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, User } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Selling Harvest in Local Mandis: A Practical Guide | Organic Mushrooms Farm",
  description:
    "A practical guide for new mushroom farmers on how to successfully sell their first harvest in local vegetable markets (Mandis). Learn about timing, packaging, and grading.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/blog/8",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Selling Harvest in Local Mandis: A Practical Guide | Organic Mushrooms Farm",
    description:
      "A practical guide for new mushroom farmers on how to successfully sell their first harvest in local vegetable markets (Mandis). Learn about timing, packaging, and grading.",
    url: "https://organicmushroomsfarm.com/blog/8",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Selling Harvest in Local Mandis: A Practical Guide | Organic Mushrooms Farm",
    description:
      "A practical guide for new mushroom farmers on how to successfully sell their first harvest in local vegetable markets (Mandis). Learn about timing, packaging, and grading.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://organicmushroomsfarm.com/#organization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
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
      "@type": "Article",
      "@id": "https://organicmushroomsfarm.com/blog/8#article",
      url: "https://organicmushroomsfarm.com/blog/8",
      headline: "Selling Harvest in Local Mandis: A Practical Guide",
      description: "A practical guide for new mushroom farmers on how to successfully sell their first harvest in local vegetable markets (Mandis).",
      datePublished: "2027-02-28T00:00:00+00:00",
      author: {
        "@type": "Organization",
        name: "Organic Mushrooms Farm Team"
      },
      publisher: {
        "@id": "https://organicmushroomsfarm.com/#organization"
      },
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/blog/8#breadcrumb",
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
          name: "Blog",
          item: "https://organicmushroomsfarm.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Selling Harvest in Local Mandis: A Practical Guide",
        },
      ],
    },
  ],
};

export default function BlogPost8() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[10.5px] md:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide flex-wrap">
            <li>
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li>
              <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200 truncate font-semibold">
              Selling Harvest in Local Mandis: A Practical Guide
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-[11px] font-bold transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
          </Link>
        </div>

        {/* Article Container (Glassmorphism) */}
        <article className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-sm relative overflow-hidden">
          <div className="inline-block px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
            Business Trends
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            Selling Harvest in Local Mandis: A Practical Guide
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <Calendar size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              Feb 28, 2027
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <User size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              Organic Mushrooms Farm Team
            </span>
          </div>

          <div className="space-y-6 text-[11px] md:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <p>
              For new <Link href="/blog/commercial-mushroom-farming-india" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">mushroom farmers</Link>, selling the first harvest can be daunting. The local vegetable market (Mandi) is usually the first stop.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Tips for Success at the Mandi
            </h2>

            <ol className="list-decimal pl-5 space-y-4 marker:text-emerald-600 dark:marker:text-emerald-400 marker:font-bold">
              <li>
                <strong className="text-slate-900 dark:text-white">Timing is Everything:</strong> Mandis operate early in the morning. Aim to arrive between 4 AM and 5 AM. Freshness dictates the price, so harvest your <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">mushrooms</Link> late at night or very early in the morning.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Packaging:</strong> Presentation matters. Pack your mushrooms in clean, ventilated punnets (200g - 250g) and then in larger, sturdy crates to prevent crushing.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Build Relationships:</strong> Don&apos;t just sell to the first buyer. Talk to multiple Arhtiyas (commission agents) and retailers. Build trust by consistently providing clean, graded, and <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">high-quality produce</Link>.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Know the Market Rate:</strong> Prices fluctuate daily based on supply. Stay informed about the current wholesale rates in your city before negotiating.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Grading:</strong> Always separate your harvest into A, B, and C grades. Sell the premium A-grade at a higher price, and the lower grades to local eateries or for processing.
              </li>
            </ol>

            <div className="mt-8 p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-900 dark:text-emerald-100 font-semibold italic text-[11px] md:text-xs text-center">
              Mastering the Mandi is just the first step. Once you scale up, explore direct B2B sales and our <Link href="/blog/mushroom-farming-business-plan-india" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">advanced commercial business plans</Link>.
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
