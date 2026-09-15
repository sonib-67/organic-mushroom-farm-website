import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  PackageCheck,
  IndianRupee,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  LineChart,
  Store,
  Building2,
  Globe2,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Market Linkage India | Business Sales Strategies",
  description:
    "Expert market linkage strategies for mushroom farmers. Connect with mandi buyers, retailers, and exporters across India.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/process/market-linkage",
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
    title: "Mushroom Market Linkage India | Business Sales Strategies",
    description:
      "Expert market linkage strategies for mushroom farmers. Connect with mandi buyers, retailers, and exporters across India.",
    url: "https://organicmushroomsfarm.com/process/market-linkage",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Market Linkage India | Business Sales Strategies",
    description:
      "Expert market linkage strategies for mushroom farmers. Connect with mandi buyers, retailers, and exporters across India.",
  },
};

export default function MarketLinkageProcessPage() {
  const pageUrl = "https://organicmushroomsfarm.com/process/market-linkage";

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
        name: "Mushroom Market Linkage India | Business Sales Strategies",
        description:
          "Expert market linkage strategies for mushroom farmers. Connect with mandi buyers, retailers, and exporters across India.",
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
            name: "Process",
            item: "https://organicmushroomsfarm.com/process",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Market Linkage",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Price Analysis",
      content: "Daily monitoring of Mandi prices via apps and networks.",
      icon: LineChart,
    },
    {
      title: "Direct Retail",
      content: "Supplying to local supermarkets and high-end restaurants.",
      icon: Store,
    },
    {
      title: "Institutional Tie-ups",
      content: "Contracts with hotels and frozen food processors.",
      icon: Building2,
    },
    {
      title: "Digital Presence",
      content: "Listing on B2B platforms like Indiamart and our internal exchange.",
      icon: Globe2,
    },
  ];

  const materials = [
    "Sales Brochures",
    "B2B Accounts",
    "Logistics Contracts",
    "Invoicing Software",
  ];

  const commonMistakes = [
    "Over-relying on a single buyer.",
    "Inconsistent quality leading to rejection at retail counters.",
    "Lack of proper invoicing and credit management.",
  ];

  return (
    <main
      id="market-linkage-process-page"
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
              className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/process/compost-preparation"
              className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
            >
              Process
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Market Linkage
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400 border border-fuchsia-500/20 mb-2.5">
            <TrendingUp className="w-3.5 h-3.5 text-fuchsia-500" />
            <span>Sales &amp; Distribution</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Industrial Market <span className="gradient-text text-fuchsia-600 dark:text-fuchsia-400">Linkage Strategies</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-fuchsia-700 dark:text-fuchsia-400 mb-2">
            Converting Fresh Produce into Sustainable Revenue Streams
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sustainable profit comes from diverse sales channels—Mandi, Direct-to-Consumer, and Institutional sales.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="market-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-fuchsia-700 dark:text-fuchsia-400 bg-fuchsia-500/10 border border-fuchsia-500/20 mb-1">
              Sales Architecture
            </div>
            <h2
              id="market-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Revenue Generation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-3.5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-black gradient-text">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {s.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Materials & Cost Estimation (Side-by-Side Compact) */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Required Assets & Materials */}
          <section
            aria-labelledby="market-materials-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3
                id="market-materials-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Marketing Arsenal
              </h3>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {materials.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-500 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cost Estimation */}
          <section
            aria-labelledby="market-pricing-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="market-pricing-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Budget Allocation
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                2-5% of total revenue
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Suggested marketing budget to maintain steady buyer influx and premium B2B platform placements.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Strategic digital spending on B2B listings secures long-term institutional buyers.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="market-pitfalls-heading"
          className="rounded-2xl p-4 border border-rose-500/30 bg-rose-500/[0.03] dark:bg-rose-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="market-pitfalls-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Critical Pitfalls to Avoid
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-xs text-slate-700 dark:text-slate-300">
            {commonMistakes.map((m, i) => (
              <div
                key={i}
                className="rounded-xl p-2.5 border border-rose-500/20 bg-white/40 dark:bg-white/[0.02] flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span className="leading-snug">{m}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: In-Text Natural Internal Linking (No External List) */}
        <section
          aria-labelledby="market-strategy-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="market-strategy-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Diversifying <span className="gradient-text">Sales Channels</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Growing mushrooms is only half the business; selling them efficiently before spoilage occurs is where real profitability lies. Relying on a single wholesale buyer is one of the most dangerous mistakes a cultivator can make. To protect margins, farms must establish a robust{" "}
            <Link
              href="/services/marketing-support"
              className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold hover:underline"
            >
              marketing support
            </Link>{" "}
            network. This begins by maintaining the integrity of the produce through an unbroken{" "}
            <Link
              href="/process/cold-chain"
              className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold hover:underline"
            >
              cold chain
            </Link>
            , allowing farmers to bypass local middlemen and supply directly to premium supermarkets, hotel chains, and institutional buyers who demand consistent quality.
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            In today&apos;s commercial landscape, establishing a digital presence is equally mandatory. Leveraging B2B platforms such as IndiaMart, TradeIndia, and our specialized internal mushroom exchange guarantees a continuous pipeline of inquiries for both fresh harvest and value-added dried products. If you have recently established a{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold hover:underline"
            >
              turnkey setup
            </Link>{" "}
            near our{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>{" "}
            base but are struggling with inventory liquidation, our business development team can help connect you with verified regional buyers. Connect with our sales advisory team via the{" "}
            <Link
              href="/contact"
              className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold hover:underline"
            >
              contact portal
            </Link>{" "}
            to initiate your market linkage program.
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="market-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-fuchsia-500/30 bg-fuchsia-500/[0.04] dark:bg-fuchsia-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="market-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Connect with Verified Buyers
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Get access to our nationwide B2B network of institutional buyers, supermarkets, and processors.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-fuchsia-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-fuchsia-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20looking%20for%20Market%20Linkage%20and%20Buyer%20Connections%20for%20my%20mushroom%20farm."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Find Buyers</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>List Farm</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
