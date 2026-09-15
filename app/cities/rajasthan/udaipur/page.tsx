import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
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
  title: "Mushroom Farming in Udaipur: A Royal Opportunity | Organic Mushroom Farm",
  description:
    "Discover why Udaipur is the perfect place to start your mushroom cultivation journey, from the Aravalli climate advantage to a massive hospitality market.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/rajasthan/udaipur",
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
    title: "Mushroom Farming in Udaipur: A Royal Opportunity in the City of Lakes 🏰",
    description:
      "Discover why Udaipur is the perfect place to start your mushroom cultivation journey, from the Aravalli climate advantage to a massive hospitality market.",
    url: "https://organicmushroomsfarm.com/cities/rajasthan/udaipur",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Regional Farming Guide",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Udaipur: A Royal Opportunity in the City of Lakes 🏰",
    description:
      "Discover why Udaipur is the perfect place to start your mushroom cultivation journey, from the Aravalli climate advantage to a massive hospitality market.",
  },
};

export default function UdaipurMushroomFarmingPage() {
  const pageUrl = "https://organicmushroomsfarm.com/cities/rajasthan/udaipur";
  const publishedDate = "2026-08-12T08:00:00+05:30";
  const modifiedDate = "2026-08-12T08:00:00+05:30";

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
        name: "Mushroom Farming in Udaipur: A Royal Opportunity | Organic Mushroom Farm",
        description:
          "Discover why Udaipur is the perfect place to start your mushroom cultivation journey, from the Aravalli climate advantage to a massive hospitality market.",
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
            name: "Rajasthan",
            item: "https://organicmushroomsfarm.com/cities",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Udaipur Mushroom Farming",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "Mushroom Farming in Udaipur: A Royal Opportunity in the City of Lakes",
        description:
          "Discover why Udaipur is the perfect place to start your mushroom cultivation journey, from the Aravalli climate advantage to a massive hospitality market.",
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
      id="udaipur-mushroom-farming-article-page"
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
            <Link href="/cities" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Rajasthan
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none">
            Udaipur Farm Guide
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
              <MapPin className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Regional Guide
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 4 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Mushroom Farming in Udaipur: <span className="gradient-text">A Royal Opportunity</span> in the City of Lakes 🏰
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Udaipur is globally renowned for its heritage palaces, luxury resorts, and vibrant tourism industry. But beyond its stunning lakes and majestic architecture, a new kind of business is quietly transforming the local economy: commercial mushroom farming.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            For agri-entrepreneurs and forward-thinking farmers in the Mewar region, cultivating organic mushrooms is emerging as one of the most profitable, space-saving, and climate-smart investments today. If you are based in Udaipur, here is why this is the perfect place to start your mushroom cultivation journey.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Store className="w-4 h-4 text-emerald-500" /> 1. The Aravalli Climate Advantage
            </h2>
            <p className="mb-2">
              Rajasthan is famous for its extreme desert heat, but Udaipur sits comfortably in the Aravalli belt. Because of its elevation, the region enjoys a much cooler and slightly more humid climate than western Rajasthan.
            </p>
            <p className="mb-2">
              What does this mean for farmers? Lower infrastructure costs! You can successfully grow premium{" "}
              <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Button mushrooms
              </Link>{" "}
              in the cool winter months (November to February) with a very light chiller load, and easily cultivate{" "}
              <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Oyster mushrooms
              </Link>{" "}
              during the warmer months using basic, cheap evaporative cooling.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-500" /> 2. A Massive, Ready-Made Hospitality Market
            </h2>
            <p className="mb-2">
              Udaipur&apos;s booming tourism industry is the biggest advantage for local mushroom growers. The city is packed with 5-star heritage hotels, luxury destination-wedding resorts, and high-end cafes.
            </p>
            <p className="mb-2">
              These premium hospitality businesses require a constant, daily supply of fresh, high-quality mushrooms for their Continental and luxury Indian menus. By setting up a farm locally, you eliminate expensive transport costs from other states and become a direct, high-margin supplier to the city&apos;s top chefs.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-emerald-500" /> 3. Water-Saving & Space-Efficient
            </h2>
            <p className="mb-2">
              Water conservation is a critical priority in Rajasthan. Unlike traditional open-field crops that require thousands of liters of water for soil absorption, mushroom farming is incredibly water-efficient. It is an indoor, vertical cultivation process where water is primarily used just to maintain humidity in the air.
            </p>
            <p className="mb-2">
              You can generate massive commercial yields inside a standard{" "}
              <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                insulated room
              </Link>{" "}
              without straining the local water supply.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-emerald-500" /> 4. Meeting the Local Health Demand
            </h2>
            <p className="mb-2">
              Alongside tourists, Udaipur has a large, health-conscious vegetarian population. With the rising demand for high-protein, plant-based diets, mushrooms are no longer just a luxury ingredient—they are a dietary staple. Locally grown, organic Oyster and{" "}
              <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Milky mushrooms
              </Link>{" "}
              are rapidly gaining popularity as healthy, zero-cholesterol meat substitutes in everyday meals.
            </p>
          </section>

          {/* Section 5 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Launch Your Farm in the City of Lakes
            </h2>
            <p className="mb-2">
              You don&apos;t need acres of land to build an agricultural empire in Udaipur. With a scientifically designed indoor setup, vertical racks, and basic agricultural waste (like wheat straw), you can generate fast, year-round returns.
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to start your farm in Udaipur?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Get the{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                expert training
              </Link>
              , premium{" "}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                spawn
              </Link>
              , and complete setup blueprints you need to succeed from <strong className="text-slate-900 dark:text-white">Organic Mushrooms Farm</strong> today.
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
