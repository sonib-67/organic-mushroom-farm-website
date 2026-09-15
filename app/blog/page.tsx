import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { BLOG_POSTS } from "../../lib/blog-data";
import { BookOpen, Calendar, User, ArrowRight, Sparkles, Sprout, HeartPulse, TrendingUp } from "lucide-react";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Mushroom Farming Blog – Guides, Tips & Expert Insights",
  description:
    "Explore practical mushroom farming guides, cultivation techniques, mushroom growing tips, farm setup ideas, harvesting methods, business insights, and expert advice for beginners and commercial growers. Learn how to start, manage, and grow a successful mushroom farming business.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/blog",
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
    title: "Mushroom Farming Blog – Guides, Tips & Expert Insights",
    description:
      "Explore practical mushroom farming guides, cultivation techniques, mushroom growing tips, farm setup ideas, harvesting methods, business insights, and expert advice for beginners and commercial growers.",
    url: "https://organicmushroomsfarm.com/blog",
    siteName: "Organic Mushroom Farm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushroom Farming Blog – Guides, Tips & Expert Insights",
    description:
      "Explore practical mushroom farming guides, cultivation techniques, and expert insights for growers.",
  },
};

export default function BlogIndexPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://organicmushroomsfarm.com/blog#webpage",
        "url": "https://organicmushroomsfarm.com/blog",
        "name": "Mushroom Farming Blog – Guides, Tips & Expert Insights",
        "description":
          "Explore practical mushroom farming guides, cultivation techniques, mushroom growing tips, farm setup ideas, harvesting methods, business insights, and expert advice for beginners and commercial growers.",
        "isPartOf": {
          "@id": "https://organicmushroomsfarm.com/#website"
        },
        "breadcrumb": {
          "@id": "https://organicmushroomsfarm.com/blog#breadcrumb"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://organicmushroomsfarm.com/blog#itemlist",
        "name": "Mushroom Farming Blog Articles",
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "numberOfItems": BLOG_POSTS.length,
        "itemListElement": BLOG_POSTS.map((post, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": post.title,
          "url": `https://organicmushroomsfarm.com/blog/${post.slug}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://organicmushroomsfarm.com/blog#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://organicmushroomsfarm.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://organicmushroomsfarm.com/blog"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
          <ol className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
            <li>
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200 font-semibold">Blog</li>
          </ol>
        </nav>

        {/* Hero Header without heavy black boxes */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-emerald-500" />
            <span>Knowledge Hub & Cultivation Guides</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Mushroom Farming Blog – Guides, Tips & Expert Insights
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            Explore practical mushroom farming guides, cultivation techniques, mushroom growing tips, farm setup ideas, harvesting methods, business insights, and expert advice for beginners and commercial growers. Learn how to start, manage, and grow a successful mushroom farming business.
          </p>
        </div>

        {/* Interactive Client Blog Directory with compact cards and glass design */}
        <BlogListClient posts={BLOG_POSTS} />
      </div>
    </div>
  );
}
