import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Home,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Droplets,
  Leaf,
  Store,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to Grow Mushrooms at Home in India: 2026 Guide",
  description:
    "Learn how to cultivate mushrooms at home (ghar par mushroom kaise ugayein) with this beginner-friendly 2026 guide for zero-land organic farming.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026",
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
      "How to Grow Mushrooms at Home in India: The Ultimate 2026 Guide 🍄",
    description:
      "Learn how to cultivate mushrooms at home (ghar par mushroom kaise ugayein) with this beginner-friendly 2026 guide for zero-land organic farming.",
    url: "https://organicmushroomsfarm.com/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-06-10T08:00:00+05:30",
    modifiedTime: "2026-06-10T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Home Farming Guide",
  },
  twitter: {
    card: "summary",
    title:
      "How to Grow Mushrooms at Home in India: The Ultimate 2026 Guide 🍄",
    description:
      "Learn how to cultivate mushrooms at home (ghar par mushroom kaise ugayein) with this beginner-friendly 2026 guide for zero-land organic farming.",
  },
};

export default function HomeMushroomFarmingGuidePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026";
  const publishedDate = "2026-06-10T08:00:00+05:30";
  const modifiedDate = "2026-06-10T08:00:00+05:30";

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
        name: "How to Grow Mushrooms at Home in India: 2026 Guide",
        description:
          "Learn how to cultivate mushrooms at home (ghar par mushroom kaise ugayein) with this beginner-friendly 2026 guide for zero-land organic farming.",
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
            name: "Blog",
            item: "https://organicmushroomsfarm.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "How to Grow Mushrooms at Home",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "How to Grow Mushrooms at Home in India: The Ultimate 2026 Guide (Ghar Par Kaise Ugayein)",
        description:
          "Learn how to cultivate mushrooms at home (ghar par mushroom kaise ugayein) with this beginner-friendly 2026 guide for zero-land organic farming.",
        datePublished: publishedDate,
        dateModified: modifiedDate,
        mainEntityOfPage: {
          "@id": `${pageUrl}#webpage`,
        },
        author: {
          "@type": "Organization",
          name: "Organic Mushroom Farm Editorial Team",
        },
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
    ],
  };

  return (
    <main
      id="home-mushroom-farming-guide-article-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
    >
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
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none">
            Home Farming Guide
          </li>
        </ol>
      </nav>

      {/* Main Article Container - Compact Editorial Flow Without Artificial Card Boxes */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <header className="mb-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <Home className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Home Farming Guide
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> June 10, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            How to Grow Mushrooms at Home in India: <span className="gradient-text">The Ultimate 2026 Guide (Ghar Par Kaise Ugayein)</span> 🍄
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            In 2026, the trend of growing your own organic food is bigger than ever across India. But what if you don&apos;t have a garden, a rooftop, or even a balcony with good sunlight? Don&apos;t worry! You can still cultivate a highly nutritious, premium crop right inside your house.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Welcome to the incredibly rewarding world of home-based mushroom farming. Whether your goal is to feed your family 100% chemical-free food or you want to test the waters for a small side-income business, growing mushrooms at home (ghar par mushroom kaise ugayein) is the perfect starting point.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Store className="w-4 h-4 text-emerald-500" /> Why Cultivate Mushrooms at Home?
            </h2>
            <p className="mb-2">
              Traditional gardening takes months of patience, soil preparation, and daily sunlight. Mushroom cultivation completely flips the script:
            </p>
            <ul className="space-y-2 mt-2 mb-2 pl-2">
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Zero Land Required:</strong> You don&apos;t need soil. Mushrooms are grown vertically in small polythene bags. A single dark corner of a spare room or even a clean cupboard is enough to start.
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Lightning-Fast Harvests:</strong> Unlike vegetables that take seasons to grow, beginner-friendly varieties like{" "}
                  <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    Oyster mushrooms
                  </Link>{" "}
                  can go from &quot;seed&quot; to harvest in just 25 to 30 days!
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Practically Free Raw Materials:</strong> They grow on agricultural waste like wheat straw (gehu ka bhusa) or paddy straw, which costs next to nothing in India.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-500" /> The Best Varieties for Home Growers
            </h2>
            <p className="mb-2">
              If you are growing at home for the first time, skip the{" "}
              <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Button mushrooms
              </Link>{" "}
              (which require strict AC cooling and complex compost). Instead, focus on these two champions:
            </p>
            <ul className="space-y-2 mt-2 mb-2 pl-2">
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Oyster Mushrooms (Dhingri):</strong> The undisputed king for beginners. They are highly forgiving, grow beautifully at standard Indian room temperatures (20°C to 30°C), and need nothing more than simple water spraying.
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Milky Mushrooms:</strong> If you are starting your home project during the peak Indian summer,{" "}
                  <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    Milky mushrooms
                  </Link>{" "}
                  thrive in the heat (up to 35°C) and yield large, meaty white caps.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-emerald-500" /> What Do You Need to Get Started?
            </h2>
            <p className="mb-2">
              You don&apos;t need a high-tech lab to get your first harvest. The basic checklist includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-1 mb-2">
              <li>A clean, well-ventilated indoor space.</li>
              <li>Dry straw (substrate) that you will boil or treat to sterilize.</li>
              <li>
                Premium Organic{" "}
                <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                  Mushroom Spawn
                </Link>{" "}
                (the &quot;seeds&quot; that start the magic).
              </li>
              <li>Polythene bags and a regular water spray bottle.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-emerald-500" /> Your Step-by-Step Blueprint to Success
            </h2>
            <p className="mb-2">
              While it is beginner-friendly, mushroom farming is still a science. To avoid green mold or failure, you need to know exactly how to treat your straw, how to mix your spawn, and when to expose your bags to fresh air.
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to start growing at home?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Get our step-by-step{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                expert training
              </Link>{" "}
              and premium{" "}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                spawn
              </Link>{" "}
              to ensure your first home harvest is a massive success!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="tel:9203544140"
                className="btn-primary w-full sm:w-auto px-5 py-2 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Call / WhatsApp
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-xs border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Contact Us Online
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
