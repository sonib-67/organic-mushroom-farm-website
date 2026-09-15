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
  Mountain,
  CloudRain,
  Tractor,
  TrendingUp,
  Store,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Why Siliguri is the Ultimate Hub for Mushroom Farming in West Bengal",
  description:
    "Discover why Siliguri is the perfect location for your mushroom farm, offering a high-profit, low-space business model with an unparalleled strategic advantage.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/west-bengal/siliguri",
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
      "Why Siliguri is the Ultimate Hub for Mushroom Farming in West Bengal 🌿",
    description:
      "Discover why Siliguri is the perfect location for your mushroom farm, offering a high-profit, low-space business model with an unparalleled strategic advantage.",
    url: "https://organicmushroomsfarm.com/cities/west-bengal/siliguri",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Regional Guide",
  },
  twitter: {
    card: "summary",
    title:
      "Why Siliguri is the Ultimate Hub for Mushroom Farming in West Bengal 🌿",
    description:
      "Discover why Siliguri is the perfect location for your mushroom farm, offering a high-profit, low-space business model with an unparalleled strategic advantage.",
  },
};

export default function SiliguriMushroomFarmingPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/cities/west-bengal/siliguri";
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
          availableLanguage: ["en", "hi", "bn"],
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
        name: "Why Siliguri is the Ultimate Hub for Mushroom Farming in West Bengal",
        description:
          "Discover why Siliguri is the perfect location for your mushroom farm, offering a high-profit, low-space business model with an unparalleled strategic advantage.",
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
            name: "Cities",
            item: "https://organicmushroomsfarm.com/cities",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "West Bengal",
            item: "https://organicmushroomsfarm.com/cities/west-bengal",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Siliguri",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Why Siliguri is the Ultimate Strategic Hub for Commercial Mushroom Farming in West Bengal",
        description:
          "Discover why Siliguri is the perfect location for your mushroom farm, offering a high-profit, low-space business model with an unparalleled strategic advantage.",
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
      id="siliguri-mushroom-farming-page"
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
            <span className="text-slate-500 dark:text-slate-400">Cities</span>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <span className="text-slate-500 dark:text-slate-400">West Bengal</span>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none">
            Siliguri
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
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Why Siliguri is the Ultimate Strategic Hub for <span className="gradient-text">Commercial Mushroom Farming in West Bengal</span> 🌿
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Siliguri is famously known as the Gateway to Northeast India. Bustling with trade, tourism, and rapid urbanization, it is the crucial link connecting West Bengal to Darjeeling, Sikkim, Bhutan, and Nepal. But beyond its booming logistics and tea industries, Siliguri is sitting on a massive, untapped goldmine: commercial organic mushroom farming.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            For agri-entrepreneurs, local farmers, and startup founders in North Bengal, cultivating organic mushrooms offers a high-profit, low-space business model with an unparalleled strategic advantage. Let us explore why Siliguri is the perfect location for your mushroom farm.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Mountain className="w-4 h-4 text-emerald-500" /> The Gateway to Premium Tourist Markets
            </h2>
            <p className="mb-2">
              Location is everything in business, and Siliguri has the best placement imaginable. It acts as the primary supply chain hub for the massive tourism industries in Darjeeling, Kalimpong, and Gangtok.
            </p>
            <p>
              The luxury resorts, heritage tea estate bungalows, and high-end cafes in these hill stations require a massive, daily supply of fresh{" "}
              <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Button mushrooms
              </Link>{" "}
              and{" "}
              <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Oyster mushrooms
              </Link>. By setting up your farm in Siliguri, you can easily dominate this premium hospitality market, supplying fresh produce faster and cheaper than competitors shipping from other states.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <CloudRain className="w-4 h-4 text-emerald-500" /> The Perfect Sub-Himalayan Climate
            </h2>
            <p className="mb-2">
              Sitting right at the foothills of the Himalayas, Siliguri enjoys a unique humid subtropical climate. Mushrooms absolutely love high humidity! The natural moisture in the air means you will spend significantly less electricity running artificial foggers and humidifiers compared to farmers in drier regions of India.
            </p>
            <p>
              During the pleasant winters, the temperatures drop to the ideal range for cultivating highly profitable premium strains. And during the warmer, rainy summers, the climate is absolutely perfect for massive yields of forgiving strains and summer-special{" "}
              <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Milky mushrooms
              </Link>.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Tractor className="w-4 h-4 text-emerald-500" /> Unlimited &amp; Dirt-Cheap Raw Materials
            </h2>
            <p className="mb-2">
              Mushroom farming is highly profitable because it converts waste into food. In and around the Siliguri and Jalpaiguri belt, agricultural waste—particularly paddy straw—is abundant and practically free.
            </p>
            <p>
              Because you are surrounded by rural farming belts just outside the city limits, sourcing substrate in bulk is effortless. This keeps your day-to-day production costs incredibly low, directly maximizing your profit margins with every harvest.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-500" /> A Fast-Growing Local Urban Demand
            </h2>
            <p className="mb-2">
              You don&apos;t even have to look at the hill stations to find your buyers. Siliguri itself is a rapidly expanding metropolis. With a rising number of health-conscious consumers, gyms, and modern supermarkets, the local demand for protein-rich, chemical-free organic mushrooms is skyrocketing.
            </p>
            <p>
              Mushrooms are quickly shifting from a niche luxury item to an everyday dietary staple across North Bengal households.
            </p>
          </section>

          {/* Section 5 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Store className="w-4 h-4 text-emerald-500" /> Start Your High-Yield Farm in North Bengal
            </h2>
            <p className="mb-2">
              The market gap in Siliguri is huge, and the first movers will capture the biggest profits. However, building a commercial agri-business requires precise{" "}
              <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                infrastructure planning
              </Link>, high-quality lab-certified{" "}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                organic spawn
              </Link>, and expert disease management to ensure consistent yields.
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to launch your farm in Siliguri?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Connect with our experts today for professional training, high-quality spawn, or a complete commercial farm setup in West Bengal.
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
