import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Thermometer,
  Wind,
  Layers,
  ShieldCheck,
  BookOpen,
  Phone,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "How to Start a Profitable Indoor Mushroom Farm in California (Complete Guide) | Organic Mushroom Farm",
  description:
    "Learn how to start a profitable indoor mushroom farm in California. Discover climate control, best varieties, and expert training to succeed in the USA.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/how-to-start-indoor-mushroom-farm-california",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "How to Start a Profitable Indoor Mushroom Farm in California (Complete Guide) | Organic Mushroom Farm",
    description:
      "Learn how to start a profitable indoor mushroom farm in California. Discover climate control, best varieties, and expert training to succeed in the USA.",
    url: "https://organicmushroomsfarm.com/how-to-start-indoor-mushroom-farm-california",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title:
      "How to Start a Profitable Indoor Mushroom Farm in California (Complete Guide) | Organic Mushroom Farm",
    description:
      "Learn how to start a profitable indoor mushroom farm in California. Discover climate control, best varieties, and expert training to succeed in the USA.",
  },
};

export default function HowToStartIndoorMushroomFarmCaliforniaPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/how-to-start-indoor-mushroom-farm-california";

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
          areaServed: ["US", "IN"],
          availableLanguage: ["en", "hi"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Katangi Road",
          addressLocality: "Jabalpur",
          addressRegion: "Madhya Pradesh",
          postalCode: "483105",
          addressCountry: "IN",
        },
        sameAs: ["https://wa.me/919203544140"],
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
        name: "How to Start a Profitable Indoor Mushroom Farm in California (Complete Guide) | Organic Mushroom Farm",
        description:
          "Learn how to start a profitable indoor mushroom farm in California. Discover climate control, best varieties, and expert training to succeed in the USA.",
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
            name: "USA Guide",
            item: "https://organicmushroomsfarm.com/mushroom-farming-usa-guide",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "California Indoor Farm",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main
      id="california-guide-page"
      className="min-h-screen bg-transparent pt-20 sm:pt-24 pb-12 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-2">
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
            <Link
              href="/mushroom-farming-usa-guide"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              USA Guide
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            California Guide
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>California Commercial Agribusiness</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            How to Start a Profitable Indoor Mushroom Farm in{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              California
            </span>
          </h1>

          <p className="text-xs sm:text-[13px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive commercial playbook covering climate control automation, high-yield substrate pasteurization, and local chef supply chains across California.
          </p>
        </header>

        {/* Executive Summary Card */}
        <section
          aria-labelledby="summary-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="summary-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
            >
              The California Organic Opportunity
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            California is the heart of the organic food and farm-to-table movement in the USA. With a massive demand for fresh, locally sourced produce at farmer&apos;s markets, grocery stores, and high-end restaurants, starting a profitable organic mushroom farm has become one of the most lucrative agricultural business models today.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            However, growing mushrooms in California comes with a unique challenge: the climate. Whether you are in sunny Southern California, the dry Central Valley, or the breezy Bay Area, mushrooms require highly specific conditions to thrive—primarily high humidity and stable temperatures.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            The secret to mastering mushroom cultivation in California is shifting away from traditional outdoor farming and embracing indoor climate-controlled setups. In this guide, we break down exactly how you can build a highly profitable indoor farm from your home or a commercial warehouse, supported by our comprehensive{" "}
            <Link
              href="/mushroom-farming-usa-guide"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              USA farming roadmap
            </Link>{" "}
            and regional{" "}
            <Link
              href="/mushroom-farming-san-diego"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              San Diego case studies
            </Link>.
          </p>
        </section>

        {/* Featured Image 1 */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02]">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
            alt="Climate-controlled indoor mushroom grow room with fresh oyster mushrooms growing on substrate blocks."
            width={1200}
            height={600}
            className="w-full h-auto object-cover max-h-[360px]"
            referrerPolicy="no-referrer"
            priority
          />
        </div>

        {/* Section 1: Why Indoor Farming */}
        <section
          id="why-indoor"
          aria-labelledby="why-indoor-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="why-indoor-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. Why Indoor Mushroom Farming is the Best Model for California
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Mushrooms do not need sunlight to grow; they need a carefully managed environment. By setting up an indoor grow room, you completely bypass California&apos;s unpredictable heatwaves and dry spells.
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Year-Round Harvest:</strong> An indoor setup allows you to harvest premium varieties like{" "}
                <Link
                  href="/services/button-mushroom"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Button
                </Link>
                ,{" "}
                <Link
                  href="/services/oyster-mushroom"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Oyster
                </Link>
                , and Shiitake mushrooms 365 days a year.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Low Space Requirement:</strong> You don&apos;t need acres of expensive California real estate. A spare bedroom, insulated garage, or a custom grow tent can yield hundreds of pounds of mushrooms monthly using vertical racking systems.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Water Efficiency:</strong> Indoor mushroom farming uses significantly less water compared to traditional crops, making it highly sustainable for drought-prone regions.
              </span>
            </li>
          </ul>
        </section>

        {/* Featured Image 2 */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02]">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp"
            alt="Modern indoor mushroom farm with vertical growing racks, ventilation, cooling and humidity-control systems."
            width={1200}
            height={600}
            className="w-full h-auto object-cover max-h-[360px]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        {/* Section 2: Climate Control */}
        <section
          id="climate-control"
          aria-labelledby="climate-control-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Thermometer className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="climate-control-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. Mastering Indoor Climate Control (The Golden Rule)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Mushrooms breathe oxygen and require humidity levels between 80% to 95% to fruit successfully. California&apos;s natural humidity often drops below 40%, which will quickly dry out your mushroom pins.
          </p>

          <p className="text-[11.5px] font-semibold text-slate-800 dark:text-slate-200">
            To combat this, your indoor setup must include:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Ultrasonic Humidifiers or Foggers:</strong> These maintain the necessary moisture in the air without soaking your mushroom bags. Connect them to a digital humidistat for automated control.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>HVAC / Mini-Split AC Units:</strong> Crucial for maintaining optimal fruiting temperatures (typically between 60°F - 75°F for most commercial varieties).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Wind className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Fresh Air Exchange (FAE):</strong> Since mushrooms exhale CO2, you must install automated exhaust fans (preferably with HEPA filters) to pull in fresh oxygen and push out heavy carbon dioxide. Review our{" "}
                <Link
                  href="/sops"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  production SOPs
                </Link>{" "}
                for exact FAE cycles.
              </span>
            </li>
          </ul>
        </section>

        {/* Featured Image 3 */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02]">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/oystermushroomgrowingroom_av76zb.webp"
            alt="Fresh mushrooms cultivated year-round using controlled temperature, humidity and fresh-air exchange"
            width={1200}
            height={600}
            className="w-full h-auto object-cover max-h-[360px]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        {/* Section 3: Best Varieties */}
        <section
          id="varieties"
          aria-labelledby="varieties-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="varieties-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. Best Mushroom Varieties to Grow in California
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Selecting the right variety is critical for a fast return on your investment. Review our comprehensive{" "}
            <Link
              href="/mushroom-types"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial mushroom varieties guide
            </Link>{" "}
            for complete yield profiles.
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Oyster Mushrooms:</strong> Highly recommended for beginners. They grow aggressively, colonize fast, and are forgiving of minor temperature shifts. They also fetch a premium price at local farmer&apos;s markets.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Button Mushrooms:</strong> The most widely consumed mushroom in the US. They require a bit more precision with compost-based substrate but guarantee a steady, massive market demand.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Milky Mushrooms:</strong> If you live in a hotter region like San Diego or Los Angeles and want to save on cooling costs during the summer, high-temperature varieties like the{" "}
                <Link
                  href="/services/milky-mushroom"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Milky Mushroom
                </Link>{" "}
                are an excellent, high-yield alternative.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4: Substrate Sterilization */}
        <section
          id="sterilization"
          aria-labelledby="sterilization-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="sterilization-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              4. Proper Substrate Sterilization
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Sourcing substrate (the material mushrooms grow on) is easy in California. Hardwood sawdust, agricultural straw, and soybean hulls are widely available.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            However, the key to preventing green mold and contamination is proper sterilization. Always pasteurize your substrate using a steam barrel or pressure cooker before introducing your certified{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              mushroom spawn seeds
            </Link>. A clean room protocol ensures your yields remain healthy and profitable.
          </p>
        </section>

        {/* Section 5: Commercial Blueprint & USA Training CTA (No Black Box) */}
        <section
          aria-labelledby="commercial-training-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs space-y-3"
        >
          <div className="space-y-1">
            <h3
              id="commercial-training-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Ready to Turn Your Setup into a Commercial Business?
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Building the room is just the first step. To truly succeed, scale, and avoid costly beginner mistakes, you need a proven commercial blueprint. If you are serious about entering the booming US organic market, our training program provides everything you need:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Basic Cultivation Training ($39)</span>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Perfect for beginners and hobbyists looking to master home and small-scale grow tent setups.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Advanced Commercial Training ($97)</span>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Designed for entrepreneurs. Learn HVAC automation, disease management, shed engineering, and restaurant sales pipelines.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Link
              href="/usatraining"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Join USA Training ($39 / $97)</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Indoor%20Mushroom%20Farming%20in%20California."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
