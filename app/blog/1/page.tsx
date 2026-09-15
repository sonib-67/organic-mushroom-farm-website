import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, User } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to Start Mushroom Farming at Home | Organic Mushrooms Farm",
  description:
    "A beginner's guide to growing your first batch of mushrooms in small spaces. Discover how to start highly lucrative mushroom farming at home.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/blog/1",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "How to Start Mushroom Farming at Home | Organic Mushrooms Farm",
    description:
      "A beginner's guide to growing your first batch of mushrooms in small spaces. Discover how to start highly lucrative mushroom farming at home.",
    url: "https://organicmushroomsfarm.com/blog/1",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "How to Start Mushroom Farming at Home | Organic Mushrooms Farm",
    description:
      "A beginner's guide to growing your first batch of mushrooms in small spaces. Discover how to start highly lucrative mushroom farming at home.",
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
      "@id": "https://organicmushroomsfarm.com/blog/1#article",
      url: "https://organicmushroomsfarm.com/blog/1",
      headline: "How to Start Mushroom Farming at Home",
      description: "A beginner's guide to growing your first batch of mushrooms in small spaces.",
      datePublished: "2026-04-15T00:00:00+00:00",
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
      "@id": "https://organicmushroomsfarm.com/blog/1#breadcrumb",
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
          name: "How to Start Mushroom Farming at Home",
        },
      ],
    },
  ],
};

export default function BlogPost1() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
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
              How to Start Mushroom Farming at Home
            </li>
          </ol>
        </nav>

        <div className="mb-6">
          <Link
            href="/blog"
            className="text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-[11px] font-bold transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
          </Link>
        </div>

        <article className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-sm relative overflow-hidden">
          <div className="inline-block px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
            Educational
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            How to Start Mushroom Farming at Home
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <Calendar size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              April 15, 2026
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <User size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              Organic Mushrooms Farm Team
            </span>
          </div>

          <div className="space-y-6 text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <p>
              Mushroom farming is a highly lucrative and satisfying endeavor, and the best part is that you can start right from your home, even with limited space. Whether you are looking for <Link href="/blog/mushroom-farming-training-online-offline-certificate" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">professional training</Link> or just want to try growing your first batch, here are the essential steps.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              1. Choose Your Preferred Mushroom
            </h2>
            <p>
              For beginners, <Link href="/articles/oyster-mushroom-cultivation-india" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Oyster mushrooms</Link> are the easiest variant to grow. They are highly resilient to fluctuations in temperature and colonize the substrate aggressively, which prevents contamination. Once you master oysters, you can move on to <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Button mushrooms</Link> or exotic varieties.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              2. Prepare the Substrate
            </h2>
            <p>
              Mushrooms grow on a medium known as "substrate." Popular choices include wheat straw, paddy straw, and sawdust. You must sterilize or pasteurize this material using hot water or steam to eliminate mold spores and bacteria before planting your <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">high-quality spawn</Link>.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              3. Inoculation
            </h2>
            <p>
              Mix your mushroom spawn (seeds) into the cooled substrate and pack it into polybags. Ensure small air holes are made for gas exchange. If you are setting up a <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">commercial farm</Link>, this process happens in a strictly sterile environment to ensure maximum yield.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              4. Incubation & Fruiting
            </h2>
            <p>
              Place the bags in a dark, warm space (~24-26°C) for 15-20 days until the mycelium colonizes the entire bag, turning it white. After this, move the bags to a slightly cooler environment with fresh air and indirect light, maintaining high humidity. Pins will appear in a few days, growing into full mushrooms soon after. Utilizing <Link href="/blog/smart-climate-control-automation-mushroom-growing" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">smart climate control</Link> can help automate these temperature shifts perfectly for larger setups.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-900 dark:text-emerald-100 font-semibold italic text-[11px] md:text-xs text-center">
              Start small, maintain cleanliness, and gradually scale up your home operation.
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
