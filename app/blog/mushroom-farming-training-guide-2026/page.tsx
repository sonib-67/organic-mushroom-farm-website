import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  ChevronRight,
  Sparkles,
  User,
  Share2,
} from "lucide-react";
import { BlogContent } from "./BlogContent";

export const dynamic = "force-static";

const articleUrl =
  "https://organicmushroomsfarm.com/blog/mushroom-farming-training-guide-2026";

const ogImage =
  "https://res.cloudinary.com/dnw4fpk2y/image/upload/ar_1.91,c_fill,w_1200,q_auto,f_auto/mushroom-farming-training-guide-2026_qnxsup.png";

const heroImage =
  "https://res.cloudinary.com/dnw4fpk2y/image/upload/w_1280,c_limit,q_auto,f_auto/mushroom-farming-training-guide-2026_qnxsup.png";

export const metadata: Metadata = {
  title: "Mushroom Farming Training Guide 2026 | Button Mushroom, Spawn & Marketing",
  description:
    "Learn mushroom farming in 2026 with practical guidance on Button mushroom cultivation, spawn preparation, compost, casing, farm setup and mushroom marketing.",
  keywords: [
    "mushroom farming training",
    "mushroom cultivation training",
    "button mushroom farming",
    "button mushroom cultivation",
    "mushroom spawn preparation",
    "mushroom compost preparation",
    "organic mushroom farming",
    "mushroom farm setup",
    "mushroom business",
    "mushroom marketing",
    "mushroom farming in India",
    "online mushroom training",
  ],
  alternates: {
    canonical: articleUrl,
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
    type: "article",
    locale: "en_IN",
    url: articleUrl,
    title: "Mushroom Farming Training Guide 2026 | Button Mushroom, Spawn & Marketing",
    description:
      "A practical guide to mushroom farming covering Button mushroom cultivation, spawn preparation, compost, casing, farm setup and marketing.",
    siteName: "Organic Mushroom Farm",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Mushroom Farming Training Guide 2026 covering Button mushroom cultivation, spawn preparation, compost and marketing",
      },
    ],
    publishedTime: "2026-09-19T00:00:00+05:30",
    modifiedTime: "2026-09-19T00:00:00+05:30",
    section: "Mushroom Farming",
    tags: [
      "Mushroom Farming",
      "Button Mushroom",
      "Mushroom Training",
      "Spawn Preparation",
      "Organic Farming",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushroom Farming Training Guide 2026 | Button Mushroom, Spawn & Marketing",
    description:
      "Learn Button mushroom cultivation, spawn preparation, compost, farm setup and mushroom marketing.",
    images: [
      {
        url: ogImage,
        alt: "Mushroom Farming Training Guide 2026",
      },
    ],
  },
};

export default function MushroomFarmingTrainingGuide2026Page() {
  const publishedDate = "2026-09-19";
  const modifiedDate = "2026-09-19";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline:
          "Mushroom Farming Training Guide 2026: Button Mushroom, Spawn, Compost & Marketing",
        description:
          "Learn mushroom farming in 2026 with practical guidance on Button mushroom cultivation, spawn preparation, compost, casing, farm setup and mushroom marketing.",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        image: [
          "https://res.cloudinary.com/dnw4fpk2y/image/upload/ar_16:9,w_1280,c_fill,q_auto,f_auto/mushroom-farming-training-guide-2026_qnxsup.png",
          "https://res.cloudinary.com/dnw4fpk2y/image/upload/ar_4:3,w_1200,c_fill,q_auto,f_auto/mushroom-farming-training-guide-2026_qnxsup.png",
          "https://res.cloudinary.com/dnw4fpk2y/image/upload/ar_1:1,w_1000,c_fill,q_auto,f_auto/mushroom-farming-training-guide-2026_qnxsup.png",
          heroImage,
        ],
        author: {
          "@type": "Organization",
          name: "Organic Mushroom Farm",
          url: "https://organicmushroomsfarm.com/",
        },
        publisher: {
          "@type": "Organization",
          name: "Organic Mushroom Farm",
          url: "https://organicmushroomsfarm.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://organicmushroomsfarm.com/images/logo.png",
          },
        },
        datePublished: publishedDate,
        dateModified: modifiedDate,
        articleSection: "Mushroom Farming",
        keywords: [
          "mushroom farming training",
          "mushroom cultivation training",
          "button mushroom farming",
          "button mushroom cultivation",
          "mushroom spawn preparation",
          "mushroom compost preparation",
          "organic mushroom farming",
          "mushroom farm setup",
          "mushroom marketing",
        ],
        inLanguage: "en-IN",
      },
      {
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
            name: "Mushroom Farming Training Guide 2026",
            item: articleUrl,
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://organicmushroomsfarm.com/#organization",
        name: "Organic Mushroom Farm",
        url: "https://organicmushroomsfarm.com/",
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "How much space and investment is required for a mushroom farm?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The required space and investment depend on the mushroom variety, production capacity, climate-control requirements and equipment. Oyster mushroom production can start on a smaller scale, while commercial Button mushroom production generally requires insulated growing rooms and climate-control infrastructure.",
            },
          },
          {
            "@type": "Question",
            name: "How can mushroom spawn contamination be prevented?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Good hygiene, properly sterilized or pasteurized materials, clean working areas, sanitized equipment and appropriate environmental conditions are important for reducing contamination during mushroom spawn preparation and cultivation.",
            },
          },
          {
            "@type": "Question",
            name: "How can mushroom farmers market their mushrooms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mushroom farmers can sell through local retailers, hotels, restaurants, supermarkets, direct customers, WhatsApp marketing, online channels and other B2B or local distribution partnerships.",
            },
          },
          {
            "@type": "Question",
            name: "Which mushroom is suitable for beginners: Oyster, Milky or Button?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The suitable mushroom depends on climate, available infrastructure, investment capacity and the farmer's target market. Oyster and Milky mushrooms can be suitable for lower-investment production in appropriate conditions, while Button mushroom cultivation generally requires more controlled environmental conditions.",
            },
          },
          {
            "@type": "Question",
            name: "Is online mushroom farming training useful?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Online training can be useful when it provides structured lessons, practical cultivation guidance, troubleshooting, demonstrations, learning material and opportunities to ask questions. Practical experience and local growing conditions should also be considered.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main
      id="mushroom-farming-training-guide-2026-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
    >
      {/* Schema.org Structured Data */}
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
          <li>
            <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none"
          >
            Mushroom Farming Training Guide 2026
          </li>
        </ol>
      </nav>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <header className="mb-6">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              Agritech &amp; Training
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> September 19, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 6 min read
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <User className="w-3 h-3" /> Organic Mushroom Farm Editorial
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
            Mushroom Farming Training Guide : <span className="text-emerald-600 dark:text-emerald-400">Button Mushroom, Spawn, Compost &amp; Marketing</span>
          </h1>

          {/* Featured Image optimized for Google Discover and Rich Results */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 my-5 bg-slate-100 dark:bg-slate-900">
            <Image
              src={heroImage}
              alt="Mushroom farming training guide 2026 covering button mushroom cultivation, spawn preparation, compost and marketing"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </header>

        {/* Content Body */}
        <BlogContent />
      </article>
    </main>
  );
}
