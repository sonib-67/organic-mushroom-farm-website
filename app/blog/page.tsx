import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { BLOG_POSTS } from "../../lib/blog-data";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Mushroom Farming Blog | Guides, Tips & Farming Insights",
  description:
    "Explore mushroom farming guides, cultivation tips, growing methods, farm management, mushroom business insights, harvesting and practical information for growers.",
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
    title: "Mushroom Farming Blog | Guides, Tips & Farming Insights",
    description:
      "Read mushroom farming guides, cultivation tips, growing methods, farm management and practical insights for growers.",
    url: "https://organicmushroomsfarm.com/blog",
    siteName: "Organic Mushroom Farm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushroom Farming Blog | Guides, Tips & Farming Insights",
    description:
      "Explore mushroom farming guides, cultivation tips and practical growing information.",
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
        "name": "Mushroom Farming Blog",
        "description":
          "Mushroom farming guides, cultivation tips, growing methods, farm management and practical mushroom farming insights.",
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
    <div className="min-h-screen pt-24 md:pt-28 pb-12 relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
            <li>
              <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200">Blog</li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest mb-3">
            <BookOpen size={16} />
            <span>Learning Center</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 leading-tight tracking-tight">
            Mushroom Farming Blog
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Explore guides, tips, and insights to master commercial and home-based mushroom cultivation.
          </p>
        </div>

        <div className="grid gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
