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
  CloudSun,
  Wheat,
  Hotel,
  Layers,
  Store,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Farming in Mysuru: A Royal Opportunity | Organic Mushroom Farm",
  description:
    "Discover why Mysuru is uniquely positioned to become a major hub for highly profitable commercial mushroom farming in Karnataka. Learn about climate & local demand.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/karnataka/mysuru",
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
    title: "Mushroom Farming in Mysuru: A Royal Opportunity in Karnataka 🍄",
    description:
      "Discover why Mysuru is uniquely positioned to become a major hub for highly profitable commercial mushroom farming in Karnataka. Learn about climate & local demand.",
    url: "https://organicmushroomsfarm.com/cities/karnataka/mysuru",
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
    title: "Mushroom Farming in Mysuru: A Royal Opportunity in Karnataka 🍄",
    description:
      "Discover why Mysuru is uniquely positioned to become a major hub for highly profitable commercial mushroom farming in Karnataka. Learn about climate & local demand.",
  },
};

export default function MysuruMushroomFarmingPage() {
  const pageUrl = "https://organicmushroomsfarm.com/cities/karnataka/mysuru";
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
        name: "Mushroom Farming in Mysuru: A Royal Opportunity | Organic Mushroom Farm",
        description:
          "Discover why Mysuru is uniquely positioned to become a major hub for highly profitable commercial mushroom farming in Karnataka. Learn about climate & local demand.",
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
            name: "Karnataka",
            item: "https://organicmushroomsfarm.com/cities/karnataka",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Mysuru",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Mushroom Farming in Mysuru: Harnessing Heritage, Climate & Demand in Karnataka",
        description:
          "Discover why Mysuru is uniquely positioned to become a major hub for highly profitable commercial mushroom farming in Karnataka. Learn about climate & local demand.",
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
      id="mysuru-mushroom-farming-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2"
      >
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
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
            <span className="text-slate-500 dark:text-slate-400">
              Karnataka
            </span>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none"
          >
            Mysuru
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
              <MapPin className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />{" "}
              Regional Guide
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Mushroom Farming in Mysuru:{" "}
            <span className="gradient-text">
              Harnessing Heritage, Climate & Demand in Karnataka
            </span>{" "}
            👑
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Mysuru is known worldwide for its palaces, silk, and vibrant
            tourism. But beyond its royal heritage, the city is rapidly emerging
            as a highly lucrative hub for modern, sustainable
            agriculture—specifically, commercial organic mushroom farming. Let
            us explore why Mysuru holds such incredible potential.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <CloudSun className="w-4 h-4 text-emerald-500" /> The Pleasant
              Year-Round Climate
            </h2>
            <p className="mb-2">
              Temperature control is one of the biggest expenses in commercial
              mushroom cultivation. Fortunately, Mysuru enjoys a naturally
              moderate and pleasant climate for most of the year. This moderate
              weather drastically reduces the electricity costs associated with
              cooling your farm. During the mild winters and monsoons, growing
              delicate strains becomes effortless, and even during the warmer
              months, the heat is easily managed.
            </p>
            <p>
              This climate makes it ideal for cultivating high-demand varieties.
              You can seamlessly rotate between premium{" "}
              <Link
                href="/services/button-mushroom"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                Button mushrooms
              </Link>{" "}
              in cooler months, highly forgiving{" "}
              <Link
                href="/services/oyster-mushroom"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                Oyster mushrooms
              </Link>{" "}
              year-round, and switch to{" "}
              <Link
                href="/services/milky-mushroom"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                Milky mushrooms
              </Link>{" "}
              during the peak summer heat.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Wheat className="w-4 h-4 text-emerald-500" /> Surrounded by a
              Rich Agricultural Belt
            </h2>
            <p className="mb-2">
              Mushroom farming requires a steady supply of substrate (the base
              material mushrooms grow on). Mysuru is strategically located near
              Mandya and other rich agricultural belts, producing vast
              quantities of paddy straw and sugarcane bagasse every harvest
              season.
            </p>
            <p>
              Instead of being burned or discarded, this low-cost agricultural
              waste can be converted into high-value organic mushrooms right on
              your farm, ensuring your raw material costs remain incredibly low.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Hotel className="w-4 h-4 text-emerald-500" /> A Booming
              Hospitality & Culinary Market
            </h2>
            <p className="mb-2">
              The biggest question for any agricultural startup is buyer demand.
              In Mysuru, the market is built right into the city:
            </p>
            <ul className="space-y-2 mt-2 mb-2 pl-2">
              <li className="flex gap-2 items-start">
                <CheckCircle2
                  className="text-emerald-500 shrink-0 mt-0.5"
                  size={16}
                />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Local Tourism & Hotels:
                  </strong>{" "}
                  Thousands of tourists visit Mysuru every week. The city’s
                  heritage hotels, luxury resorts, and popular restaurants
                  require a constant daily supply of fresh mushrooms for
                  continental and gourmet Indian dishes.
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2
                  className="text-emerald-500 shrink-0 mt-0.5"
                  size={16}
                />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Proximity to Bengaluru:
                  </strong>{" "}
                  Mysuru’s seamless expressway connectivity to Bengaluru opens
                  the door to a massive metropolitan market of millions of
                  health-conscious consumers, organic grocery chains, and food
                  processing startups just a couple of hours away.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-500" /> Maximum Profit
              with Minimum Land
            </h2>
            <p className="mb-2">
              Land around Mysuru is valuable. The beauty of mushroom farming is
              that it does not require acres of traditional farmland. Because it
              is an indoor, vertical cultivation process, you can stack mushroom
              bags on multi-tiered racks.
            </p>
            <p>
              By opting for a professional{" "}
              <Link
                href="/services/turnkey-setup"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                turnkey setup in insulated rooms
              </Link>{" "}
              , a small plot of land or an empty building can produce metric
              tons of fresh produce every month, maximizing your return on
              investment per square foot.
            </p>
          </section>

          {/* Section 5 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Store className="w-4 h-4 text-emerald-500" /> Build Your
              Agricultural Empire in Mysuru
            </h2>
            <p className="mb-2">
              The economic opportunity for organic mushroom farming in Mysuru is
              clear. However, turning a passion into a reliable, high-yield
              commercial business requires the right{" "}
              <Link
                href="/training"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                technical knowledge and training
              </Link>{" "}
              — from proper substrate pasteurization to selecting lab-certified{" "}
              <Link
                href="/spawn-seeds"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                premium spawn (seeds)
              </Link>{" "}
              and preventing contamination.
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to start
              your farm in Mysuru?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Connect with our experts today for professional training,
              high-quality spawn, or a complete commercial farm setup in
              Karnataka.
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
