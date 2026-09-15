import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sprout,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  Building,
  Recycle,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Oyster Mushroom Cultivation in India: Low-Cost, High-Profit Agri-Business",
  description:
    "Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-india",
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
      "Oyster Mushroom Cultivation in India: The Ultimate Low-Cost, High-Profit Agri-Business 🍄",
    description:
      "Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers.",
    url: "https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-india",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Cultivation Guide",
  },
  twitter: {
    card: "summary",
    title:
      "Oyster Mushroom Cultivation in India: The Ultimate Low-Cost, High-Profit Agri-Business 🍄",
    description:
      "Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers.",
  },
};

export default function ArticleOysterCultivationPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-india";
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
        name: "Oyster Mushroom Cultivation in India: Low-Cost, High-Profit Agri-Business",
        description:
          "Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers.",
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
            name: "Articles",
            item: "https://organicmushroomsfarm.com/articles",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Oyster Cultivation India",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Oyster Mushroom Cultivation in India: The Ultimate Low-Cost, High-Profit Agri-Business",
        description:
          "Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers.",
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
      id="oyster-cultivation-article-page"
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
            <span className="text-slate-500 dark:text-slate-400">Articles</span>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none">
            Oyster Mushroom Cultivation
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
              <Sprout className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Cultivation Guide
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 4 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Oyster Mushroom Cultivation in India: <span className="gradient-text">The Ultimate Low-Cost, High-Profit Agri-Business</span> 🍄
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            If you are looking to step into the world of modern agriculture but don&apos;t have acres of land or a massive budget, you are in the right place. Across India, rural farmers, urban youth, and agri-startups are turning to{" "}
            <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              Oyster Mushroom cultivation
            </Link>{" "}
            as a highly lucrative and scalable business model.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Also known locally as Dhingri, oyster mushrooms are incredibly resilient and beginner-friendly. Here is why growing them is one of the smartest agricultural investments you can make today.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-emerald-500" /> 1. Zero Need for Expensive Land
            </h2>
            <p className="mb-2">
              Unlike traditional farming, you do not need fertile soil or acres of open space. Oyster mushrooms are grown completely indoors. A small, clean 100 to 200 square foot room with proper humidity control is more than enough to start a highly productive setup. This makes it the ultimate business for urban entrepreneurs and small-scale farmers alike. Looking to scale? A{" "}
              <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                turnkey commercial setup
              </Link>{" "}
              can maximize your vertical space.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Recycle className="w-4 h-4 text-emerald-500" /> 2. Grown on Agricultural Waste
            </h2>
            <p className="mb-2">
              One of the biggest advantages of oyster mushroom farming is how incredibly cheap the production cost is. In India, agricultural by-products like wheat straw, paddy straw, and sugarcane bagasse are available abundantly and at throwaway prices. Instead of this waste being discarded or burned, you can use it as a nutrient-rich organic substrate to grow a high-value crop.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-500" /> 3. Lightning-Fast Cash Flow
            </h2>
            <p className="mb-2">
              Traditional crops make you wait months for a harvest. Oyster mushrooms completely change the game. With the right room temperature and quality lab-certified{" "}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                organic spawn
              </Link>, these mushrooms grow rapidly and can be harvested in just 30 to 45 days. This incredibly short crop cycle ensures continuous production and a fast, reliable cash flow for your business.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-500" /> 4. Massive Market Demand
            </h2>
            <p className="mb-2">
              Packed with protein, fiber, and essential vitamins, oyster mushrooms are a nutritional powerhouse. With a booming shift towards plant-based diets and health-conscious eating across Indian cities and semi-urban areas, the demand for fresh, chemical-free organic mushrooms alongside premium{" "}
              <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Button mushrooms
              </Link>{" "}
              is skyrocketing.
            </p>
          </section>

          {/* Section 5 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-500" /> Master the Art of Cultivation
            </h2>
            <p className="mb-2">
              While they are one of the easiest varieties to grow, you still need a proper step-by-step approach. Knowing how to pasteurize your substrate, maintain 85–90% relative humidity, and protect your bags from green mold contamination is the key to massive commercial yields.
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to master oyster mushroom cultivation?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Join our{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                expert training courses
              </Link>{" "}
              and get high-quality spawn to start your highly profitable agricultural business today.
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
                <Mail className="w-3.5 h-3.5" /> Book a Consultation
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
