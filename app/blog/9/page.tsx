import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, User } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Government Subsidies in MP: Step-by-Step Guide | Organic Mushrooms Farm",
  description:
    "Learn how to apply for government subsidies for mushroom farming in Madhya Pradesh. Step-by-step guide on MIDH, DPR preparation, and MP Horticulture portal.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/blog/9",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Government Subsidies in MP: Step-by-Step Guide | Organic Mushrooms Farm",
    description:
      "Learn how to apply for government subsidies for mushroom farming in Madhya Pradesh. Step-by-step guide on MIDH, DPR preparation, and MP Horticulture portal.",
    url: "https://organicmushroomsfarm.com/blog/9",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Government Subsidies in MP: Step-by-Step Guide | Organic Mushrooms Farm",
    description:
      "Learn how to apply for government subsidies for mushroom farming in Madhya Pradesh. Step-by-step guide on MIDH, DPR preparation, and MP Horticulture portal.",
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
      "@id": "https://organicmushroomsfarm.com/blog/9#article",
      url: "https://organicmushroomsfarm.com/blog/9",
      headline: "Government Subsidies in MP: Step-by-Step Guide",
      description: "Learn how to apply for government subsidies for mushroom farming in Madhya Pradesh. Step-by-step guide on MIDH, DPR preparation, and MP Horticulture portal.",
      datePublished: "2027-02-15T00:00:00+00:00",
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
      "@id": "https://organicmushroomsfarm.com/blog/9#breadcrumb",
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
          name: "Government Subsidies in MP: Step-by-Step Guide",
        },
      ],
    },
  ],
};

export default function BlogPost9() {
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
              Government Subsidies in MP: Step-by-Step Guide
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
            Government Subsidies in MP: Step-by-Step Guide
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <Calendar size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              Feb 15, 2027
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <User size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              Organic Mushrooms Farm Team
            </span>
          </div>

          <div className="space-y-6 text-[11px] md:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <p>
              Setting up a <Link href="/blog/commercial-mushroom-farming-india" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">commercial mushroom farm</Link> requires significant capital, but the government of Madhya Pradesh offers substantial subsidies to support farmers.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Navigating the MP Horticulture Portal
            </h2>

            <ol className="list-decimal pl-5 space-y-4 marker:text-emerald-600 dark:marker:text-emerald-400 marker:font-bold">
              <li>
                <strong className="text-slate-900 dark:text-white">Identify the Scheme:</strong> The MIDH (Mission for Integrated Development of Horticulture) and state-specific schemes often provide 40% to 50% subsidies on capital costs for <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">mushroom spawn making</Link> and compost units.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Prepare a DPR:</strong> You will need a Detailed Project Report (DPR). This should outline your technical layout, production capacity, financial projections, and bank loan details.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Apply Online:</strong> Register on the MP Horticulture web portal (MPFSTS). Upload your land documents (Khasra/Khatouni), Aadhaar card, bank details, and the DPR.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Letter of Intent (LOI):</strong> Do not start construction before receiving the LOI from the department. The district horticulture officer will inspect your site.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Execution and Claim:</strong> Complete the project according to the approved DPR. Maintain all GST bills. A final joint inspection will trigger the release of the subsidy directly to your loan account.
              </li>
            </ol>

            <div className="mt-8 p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-900 dark:text-emerald-100 font-semibold italic text-[11px] md:text-xs text-center">
              We provide complete assistance with project reports and technical consultancy for our <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">turnkey setup</Link> clients.
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
