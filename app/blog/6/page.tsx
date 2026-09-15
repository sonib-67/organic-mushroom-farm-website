import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, User } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Vitamin D Deficiency? Eat Button Mushrooms | Organic Mushrooms Farm",
  description:
    "Discover how sun-exposed button mushrooms can naturally boost your Vitamin D levels. Learn about ergosterol and plant-based immune system support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/blog/6",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Vitamin D Deficiency? Eat Button Mushrooms | Organic Mushrooms Farm",
    description:
      "Discover how sun-exposed button mushrooms can naturally boost your Vitamin D levels. Learn about ergosterol and plant-based immune system support.",
    url: "https://organicmushroomsfarm.com/blog/6",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Vitamin D Deficiency? Eat Button Mushrooms | Organic Mushrooms Farm",
    description:
      "Discover how sun-exposed button mushrooms can naturally boost your Vitamin D levels. Learn about ergosterol and plant-based immune system support.",
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
      "@id": "https://organicmushroomsfarm.com/blog/6#article",
      url: "https://organicmushroomsfarm.com/blog/6",
      headline: "Vitamin D Deficiency? Eat Button Mushrooms",
      description: "Discover how sun-exposed button mushrooms can naturally boost your Vitamin D levels. Learn about ergosterol and plant-based immune system support.",
      datePublished: "2027-03-12T00:00:00+00:00",
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
      "@id": "https://organicmushroomsfarm.com/blog/6#breadcrumb",
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
          name: "Vitamin D Deficiency? Eat Button Mushrooms",
        },
      ],
    },
  ],
};

export default function BlogPost6() {
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
              Vitamin D Deficiency? Eat Button Mushrooms
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
            Health & Wellness
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            Vitamin D Deficiency? Eat Button Mushrooms
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <Calendar size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              March 12, 2027
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <User size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              Organic Mushrooms Farm Team
            </span>
          </div>

          <div className="space-y-6 text-[11px] md:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <p>
              Vitamin D deficiency is a global health issue, but <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">button mushrooms</Link> might hold a simple, natural solution.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              The Magic of Sun-Exposed Mushrooms
            </h2>
            <p>
              Like humans, mushrooms can produce Vitamin D when exposed to ultraviolet (UV) light.
            </p>

            <ul className="list-disc pl-5 space-y-4 marker:text-emerald-600 dark:marker:text-emerald-400 marker:font-bold">
              <li>
                <strong className="text-slate-900 dark:text-white">Ergosterol:</strong> Mushrooms contain a compound called ergosterol. When this compound is exposed to UV light (even natural sunlight after harvesting), it converts into Vitamin D2.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">How to Maximize It:</strong> You can naturally boost the Vitamin D content of store-bought button mushrooms by simply slicing them and leaving them in direct sunlight for 15-30 minutes before cooking.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Health Benefits:</strong> Adequate Vitamin D is crucial for bone health, immune system support, and mood regulation, reinforcing the <Link href="/blog/organic-mushrooms-health-benefits-nutrition-cultivation-uses" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">myriad health benefits</Link> that fungi provide.
              </li>
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-900 dark:text-emerald-100 font-semibold italic text-[11px] md:text-xs text-center">
              Adding sun-exposed button mushrooms to your diet is an easy, <Link href="/blog/5" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">plant-based</Link> way to boost your Vitamin D levels naturally.
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
