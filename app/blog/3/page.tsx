import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, User } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to Prepare the Perfect Substrate | Organic Mushrooms Farm",
  description:
    "Master the art of pasteurization and moisture levels for high-yield mushroom harvests. Learn how to prepare wheat straw, paddy straw, and sawdust substrates.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/blog/3",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "How to Prepare the Perfect Substrate | Organic Mushrooms Farm",
    description:
      "Master the art of pasteurization and moisture levels for high-yield mushroom harvests. Learn how to prepare wheat straw, paddy straw, and sawdust substrates.",
    url: "https://organicmushroomsfarm.com/blog/3",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "How to Prepare the Perfect Substrate | Organic Mushrooms Farm",
    description:
      "Master the art of pasteurization and moisture levels for high-yield mushroom harvests. Learn how to prepare wheat straw, paddy straw, and sawdust substrates.",
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
      "@id": "https://organicmushroomsfarm.com/blog/3#article",
      url: "https://organicmushroomsfarm.com/blog/3",
      headline: "How to Prepare the Perfect Substrate",
      description: "Master the art of pasteurization and moisture levels for high-yield mushroom harvests. Learn how to prepare wheat straw, paddy straw, and sawdust substrates.",
      datePublished: "2027-04-02T00:00:00+00:00",
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
      "@id": "https://organicmushroomsfarm.com/blog/3#breadcrumb",
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
          name: "How to Prepare the Perfect Substrate",
        },
      ],
    },
  ],
};

export default function BlogPost3() {
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
              How to Prepare the Perfect Substrate
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
            Educational
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            How to Prepare the Perfect Substrate
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <Calendar size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              April 02, 2027
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <User size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              Organic Mushrooms Farm Team
            </span>
          </div>

          <div className="space-y-6 text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <p>
              Master the art of pasteurization and moisture levels for <Link href="/blog/mushroom-farming-business-plan-india" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">high-yield harvests</Link>.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              The Importance of Substrate Preparation
            </h2>
            <p>
              A good substrate is the foundation of your <Link href="/blog/commercial-mushroom-farming-india" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">mushroom farm</Link>. The most common substrates include wheat straw, paddy straw, and sawdust. Here&apos;s a quick overview of how to prepare it:
            </p>

            <ol className="list-decimal pl-5 space-y-4 marker:text-emerald-600 dark:marker:text-emerald-400 marker:font-bold">
              <li>
                <strong className="text-slate-900 dark:text-white">Chopping:</strong> Chop the straw into small 2-3 inch pieces to maximize surface area.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Wetting:</strong> Soak the straw in water until it reaches around 65-70% moisture. It should feel like a damp sponge.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Pasteurization:</strong> You can either use the hot water method (steeping at 65-75°C for 1-2 hours) or chemical pasteurization using Bavistin and Formalin to kill competing molds and pests.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Cooling and Spawning:</strong> Once cooled to room temperature, mix your <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">high-quality mushroom spawn</Link> thoroughly and bag it.
              </li>
            </ol>

            <div className="mt-8 p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-900 dark:text-emerald-100 font-semibold italic text-[11px] md:text-xs text-center">
              Getting this process right ensures a rapid mycelial run and prevents <Link href="/blog/2" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">green mold (Trichoderma) contamination</Link>.
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
