import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Flame,
  Sparkles,
  Leaf,
  Gem,
  ArrowRight,
  CheckCircle2,
  Phone,
  Layers,
  ShoppingBag,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Types Guide | Edible, Medicinal & Commercial Varieties | Organic Mushroom Farm",
  description:
    "Discover all types of commercial mushroom setups in India – Button, Milky, Oyster, Shiitake, Reishi, Cordyceps. Read complete growing variables, spawn guidance, and project costs.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-types",
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
    title: "Mushroom Types Guide | Edible, Medicinal & Commercial Varieties | Organic Mushroom Farm",
    description:
      "Discover all types of commercial mushroom setups in India – Button, Milky, Oyster, Shiitake, Reishi, Cordyceps. Read complete growing variables, spawn guidance, and project costs.",
    url: "https://organicmushroomsfarm.com/mushroom-types",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Types Guide | Edible, Medicinal & Commercial Varieties | Organic Mushroom Farm",
    description:
      "Discover all types of commercial mushroom setups in India – Button, Milky, Oyster, Shiitake, Reishi, Cordyceps. Read complete growing variables, spawn guidance, and project costs.",
  },
};

interface MushroomItem {
  id: string;
  name: string;
  scientificName: string;
  desc: string;
  setupCost: string;
  yieldRate: string;
  difficulty: string;
  link: string;
  internalPath: string;
}

interface CategoryGroup {
  id: string;
  label: string;
  icon: typeof Flame;
  badgeClass: string;
  items: MushroomItem[];
}

const mushroomCategories: CategoryGroup[] = [
  {
    id: "popular",
    label: "Most Popular Commercial",
    icon: Flame,
    badgeClass: "text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
    items: [
      {
        id: "white-button",
        name: "White Button Mushroom",
        scientificName: "Agaricus bisporus",
        desc: "The most widely sold and consumed variety across India. Requires conditioned composting tunnels and automated 14-18°C temperature control.",
        setupCost: "₹15 Lakhs - ₹1.5 Crore",
        yieldRate: "High (20-25 kg / 100 kg compost)",
        difficulty: "Commercial Scale",
        link: "/mushroom-types/white-button",
        internalPath: "/mushroom-types/white-button",
      },
      {
        id: "oyster",
        name: "Oyster Mushroom",
        scientificName: "Pleurotus ostreatus",
        desc: "Fastest ROI variety. Thrives on sterilized wheat or paddy straw with low infrastructure costs and wide ambient tolerance (20-30°C).",
        setupCost: "₹2 Lakhs - ₹10 Lakhs",
        yieldRate: "Very High (80-100% of dry substrate weight)",
        difficulty: "Beginner Friendly",
        link: "/mushroom-types/oyster",
        internalPath: "/mushroom-types/oyster",
      },
      {
        id: "milky-mushroom",
        name: "Milky Mushroom",
        scientificName: "Calocybe indica",
        desc: "Ideal for tropical and subtropical Indian summers (30-38°C). Produces large, robust white stems with 10-15 days of natural shelf life.",
        setupCost: "₹3 Lakhs - ₹12 Lakhs",
        yieldRate: "Moderate to High (14-18 days cycle)",
        difficulty: "Intermediate",
        link: "/mushroom-types/milky-mushroom",
        internalPath: "/mushroom-types/milky-mushroom",
      },
    ],
  },
  {
    id: "exotic",
    label: "Premium & Exotic Gourmet",
    icon: Sparkles,
    badgeClass: "text-purple-700 dark:text-purple-400 bg-purple-500/10 border-purple-500/20",
    items: [
      {
        id: "shiitake",
        name: "Shiitake Mushroom",
        scientificName: "Lentinula edodes",
        desc: "World's second most popular mushroom. Prized in five-star culinary kitchens and organic retail stores for its rich umami taste.",
        setupCost: "₹8 Lakhs - ₹35 Lakhs",
        yieldRate: "High Market Value (Wood log / Sawdust block)",
        difficulty: "Advanced Control",
        link: "/mushroom-types/shiitake",
        internalPath: "/mushroom-types/shiitake",
      },
      {
        id: "lions-mane",
        name: "Lion's Mane",
        scientificName: "Hericium erinaceus",
        desc: "Resembles sea coral or lion mane. Commands high demand as a gourmet delicacy (crab-like texture) and functional brain-health supplement.",
        setupCost: "₹6 Lakhs - ₹20 Lakhs",
        yieldRate: "Premium Niche (₹1,200+/kg)",
        difficulty: "Intermediate",
        link: "/mushroom-types/lions-mane",
        internalPath: "/mushroom-types/lions-mane",
      },
    ],
  },
  {
    id: "medicinal",
    label: "Therapeutic & Medicinal Fungi",
    icon: Leaf,
    badgeClass: "text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    items: [
      {
        id: "reishi",
        name: "Reishi (Ganoderma)",
        scientificName: "Ganoderma lucidum",
        desc: "Known as the 'Mushroom of Immortality'. Cultivated on sterilized sawdust bags for its bioactive triterpenes and beta-glucan extraction.",
        setupCost: "Specialized Lab Unit",
        yieldRate: "Nutraceutical Extract Grade",
        difficulty: "Specialized",
        link: "/mushroom-types/reishi",
        internalPath: "/mushroom-types/reishi",
      },
      {
        id: "cordyceps",
        name: "Cordyceps Militaris",
        scientificName: "Cordyceps militaris",
        desc: "Ultra high-value fungi cultivated in sterile cleanroom laboratories on liquid or grain media, providing active cordycepin for wellness supplements.",
        setupCost: "₹15,000 - ₹30,000 / Kg",
        yieldRate: "Ultra-High Market Return",
        difficulty: "Cleanroom Lab",
        link: "/mushroom-types/cordyceps",
        internalPath: "/mushroom-types/cordyceps",
      },
    ],
  },
  {
    id: "regional",
    label: "Regional & Economical",
    icon: Gem,
    badgeClass: "text-blue-700 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
    items: [
      {
        id: "paddy-straw",
        name: "Paddy Straw Mushroom",
        scientificName: "Volvariella volvacea",
        desc: "Widely grown across Odisha, West Bengal, and southern coastal belts. Features an ultra-fast 10-14 day harvest cycle on rice straw beds.",
        setupCost: "₹2 Lakhs - ₹5 Lakhs",
        yieldRate: "Ultra-Fast (10-12 days cycle)",
        difficulty: "Beginner",
        link: "/mushroom-types/paddy-straw",
        internalPath: "/mushroom-types/paddy-straw",
      },
    ],
  },
];

export default function MushroomTypesPage() {
  const pageUrl = "https://organicmushroomsfarm.com/mushroom-types";

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
        name: "Mushroom Types Guide | Edible, Medicinal & Commercial Varieties | Organic Mushroom Farm",
        description:
          "Discover all types of commercial mushroom setups in India – Button, Milky, Oyster, Shiitake, Reishi, Cordyceps. Read complete growing variables, spawn guidance, and project costs.",
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
            name: "Mushroom Types",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main
      id="mushroom-types-page"
      className="min-h-screen bg-transparent pt-20 sm:pt-24 pb-12 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 pb-2">
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Mushroom Types
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <Layers className="w-3.5 h-3.5 text-emerald-500" />
            <span>Complete Fungi Catalog</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Commercial <span className="gradient-text text-emerald-600 dark:text-emerald-400">Mushroom Varieties</span>
          </h1>

          <p className="text-xs sm:text-[13px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Exploring the diverse, profitable world of edible, exotic, and medicinal mushrooms customized for Indian regional climates and global markets. Review our{" "}
            <Link
              href="/sops"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              production SOPs
            </Link>{" "}
            and{" "}
            <Link
              href="/business-plan"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial business plans
            </Link>{" "}
            to start your farm.
          </p>
        </header>

        {/* Categories and Mushroom Cards */}
        {mushroomCategories.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <section
              key={cat.id}
              id={`cat-${cat.id}`}
              aria-labelledby={`heading-${cat.id}`}
              className="space-y-2.5"
            >
              {/* Category Header Badge */}
              <div className="flex items-center gap-2 pt-1 border-b border-slate-200/50 dark:border-white/10 pb-1.5">
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${cat.badgeClass}`}
                >
                  <CatIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl p-3.5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5 transition-all hover:border-emerald-500/40"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-1.5">
                        <div>
                          <h2 className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                            {item.name}
                          </h2>
                          <p className="text-[10.5px] italic text-slate-500 dark:text-slate-400">
                            {item.scientificName}
                          </p>
                        </div>
                        <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-slate-300 shrink-0">
                          {item.difficulty}
                        </span>
                      </div>

                      <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {item.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 border-t border-slate-200/40 dark:border-white/5">
                      <div className="flex items-center justify-between text-[10.5px]">
                        <span className="text-slate-500 font-medium">Capex / Setup:</span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {item.setupCost}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[10.5px]">
                        <span className="text-slate-500 font-medium">Yield Profile:</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400 truncate max-w-[150px] text-right">
                          {item.yieldRate}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1">
                        <Link
                          href={item.internalPath}
                          className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                        >
                          <span>Explore Specs</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>

                        <a
                          href={`https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20pure%20commercial%20spawn%20seeds%20for%20${encodeURIComponent(
                            item.name
                          )}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg text-[10.5px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1 shrink-0"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Order Spawn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Section: Bottom Consultation & Spawn Supply CTA (No Black Box) */}
        <section
          aria-labelledby="mushroom-varieties-cta"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h3
              id="mushroom-varieties-cta"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Ready to Choose Your Mushroom Variety?
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              We supply laboratory-tested pure mother culture{" "}
              <Link
                href="/spawn-seed"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                mushroom spawn seeds
              </Link>{" "}
              with zero contamination guarantee and comprehensive{" "}
              <Link
                href="/services/turnkey-setup"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                turnkey growing facility engineering
              </Link>.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/spawn-seed"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Spawn Supply</span>
            </Link>
            <Link
              href="/services/turnkey-setup"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Turnkey Quotes</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
