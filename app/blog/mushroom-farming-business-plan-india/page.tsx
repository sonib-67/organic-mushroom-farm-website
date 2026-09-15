import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Sprout, Phone, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Starting a Profitable Mushroom Farming Business in India: Where to Begin?",
  description:
    "Learn how to start a profitable mushroom farming business in India with practical guidance on infrastructure, budgeting, raw materials, cultivation and marketing.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/blog/mushroom-farming-business-plan-india",
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
      "Starting a Profitable Mushroom Farming Business in India: Where to Begin?",
    description:
      "Learn how to start a profitable mushroom farming business in India with practical guidance on infrastructure, budgeting, raw materials, cultivation and marketing.",
    url: "https://organicmushroomsfarm.com/blog/mushroom-farming-business-plan-india",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Starting a Profitable Mushroom Farming Business in India: Where to Begin?",
    description:
      "Learn how to start a profitable mushroom farming business in India with practical guidance on infrastructure, budgeting, raw materials, cultivation and marketing.",
  },
};

export default function MushroomFarmingBusinessPlanIndiaPage() {
  const articleUrl =
    "https://organicmushroomsfarm.com/blog/mushroom-farming-business-plan-india";
  const publishedAt = "2026-03-01T08:00:00+05:30";
  const updatedAt = "2026-03-01T08:00:00+05:30";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline:
      "Starting a Profitable Mushroom Farming Business in India: Where to Begin?",
    description:
      "Learn how to start a profitable mushroom farming business in India with practical guidance on infrastructure, budgeting, raw materials, cultivation and marketing.",
    url: articleUrl,
    datePublished: publishedAt,
    dateModified: updatedAt,
    publisher: {
      "@type": "Organization",
      "@id": "https://organicmushroomsfarm.com/#organization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
    },
    author: {
      "@type": "Organization",
      "@id": "https://organicmushroomsfarm.com/#organization",
      name: "Organic Mushroom Farm",
    },
    articleSection: "Mushroom Farming",
    keywords: [
      "mushroom farming business plan",
      "mushroom farming business in India",
      "mushroom farming",
      "mushroom business",
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${articleUrl}#webpage`,
    url: articleUrl,
    name: "Mushroom Farming Business Plan in India: Where to Begin?",
    description:
      "Learn how to start a profitable mushroom farming business in India with practical guidance on infrastructure, budgeting, raw materials, cultivation and marketing.",
    isPartOf: {
      "@id": "https://organicmushroomsfarm.com/#website",
    },
    mainEntity: {
      "@id": `${articleUrl}#article`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${articleUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://organicmushroomsfarm.com/",
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
        name: "Mushroom Farming Business Plan in India",
        item: articleUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16 relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema,
            webPageSchema,
            breadcrumbSchema,
          ]).replace(/</g, "\\u003c"),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="hover:underline hover:text-emerald-500 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li>
              <Link href="/blog" className="hover:underline hover:text-emerald-500 transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200 font-medium">
              Mushroom Farming Business Plan in India
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
            <Sprout size={14} />
            <span>Business Plan</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
            Starting a Profitable Mushroom Farming Business in India:{" "}
            <span className="text-emerald-600 dark:text-emerald-400">Where to Begin?</span>
          </h1>
        </div>

        {/* Compact Content Section (Minimal scroll) */}
        <div className="text-slate-600 dark:text-slate-300 text-sm md:text-[15px] leading-relaxed space-y-4">
          <p className="text-base font-medium text-slate-800 dark:text-slate-200">
            Agriculture is changing, and one of the most exciting opportunities in India right now doesn&apos;t require acres of expensive land. Mushroom farming is rapidly becoming a top choice for modern entrepreneurs, agri-startups, and traditional farmers alike.
          </p>

          <p>
            With a massive shift toward healthy eating and plant-based diets across the country, the demand for fresh, organic mushrooms is skyrocketing. But why is it such a smart business move?
          </p>

          {/* Section 1 */}
          <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2 border-l-4 border-emerald-500 pl-3">
            Maximum Profit in Minimum Space
          </h2>

          <p>
            Unlike traditional crops, mushroom cultivation happens indoors. By utilizing vertical farming techniques (growing on racks in dark rooms), you can produce massive yields in a fraction of the space. Whether you are growing Oyster, Milky, or Button mushrooms, the growth cycles are incredibly fast. This means you get a much quicker return on your investment compared to standard seasonal farming.
          </p>

          {/* Section 2 */}
          <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2 border-l-4 border-emerald-500 pl-3">
            The Secret to Success: A Solid Blueprint
          </h2>

          <p>
            While the potential is huge, jumping in without a strategy is the biggest mistake new growers make. To build a scalable and sustainable agri-business, you need a clear, well-researched mushroom farming business plan tailored for the Indian market.
          </p>

          <p>
            A proper roadmap helps you navigate the most crucial steps:
          </p>

          {/* Checklist items - compact */}
          <ul className="space-y-3 my-4">
            <li className="flex items-start gap-2.5 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">
                  Infrastructure &amp; Budgeting:
                </strong>
                <span className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  Knowing exactly what to spend on temperature-controlled sheds, humidity systems, and shelving.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">
                  Raw Materials:
                </strong>
                <span className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  Sourcing high-quality organic spawn (mushroom seeds) and the right agricultural waste (like wheat or paddy straw) for your substrate.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">
                  Marketing Strategy:
                </strong>
                <span className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  Deciding whether your highest profit margins will come from local mandis, retail supermarkets, or direct-to-restaurant sales.
                </span>
              </div>
            </li>
          </ul>

          <p className="font-medium text-slate-800 dark:text-slate-200 text-sm md:text-base pt-1">
            Success in this industry is about blending good agricultural practices with smart business execution.
          </p>

          {/* Compact CTA Section */}
          <div className="p-6 md:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20 text-center mt-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Ready to start your mushroom agribusiness?
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">
              Get expert guidance, professional training, and high-quality spawn from{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">Organic Mushrooms Farm</strong>{" "}
              to launch your profitable farm today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/919203544140"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs md:text-sm py-2.5 px-5 rounded-xl inline-flex items-center gap-2 transition-colors shadow-sm"
              >
                <Phone size={16} /> Call / WhatsApp
              </a>
              <Link
                href="/contact"
                className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs md:text-sm py-2.5 px-5 rounded-xl inline-flex items-center gap-2 transition-colors border border-slate-300 dark:border-slate-700"
              >
                <Mail size={16} /> Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
