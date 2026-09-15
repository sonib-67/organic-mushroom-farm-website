import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Zap,
  CheckCircle2,
  AlertTriangle,
  PackageCheck,
  IndianRupee,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ThermometerSnowflake,
  PackageSearch,
  ArrowDownUp,
  Truck,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Post-Harvest Cold Chain for Mushrooms | Preservation Guide",
  description:
    "Effective cold chain management for mushrooms. Pre-cooling and storage techniques to double the shelf-life of fresh produce.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/process/cold-chain",
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
    title: "Post-Harvest Cold Chain for Mushrooms | Preservation Guide",
    description:
      "Effective cold chain management for mushrooms. Pre-cooling and storage techniques to double the shelf-life of fresh produce.",
    url: "https://organicmushroomsfarm.com/process/cold-chain",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Post-Harvest Cold Chain for Mushrooms | Preservation Guide",
    description:
      "Effective cold chain management for mushrooms. Pre-cooling and storage techniques to double the shelf-life of fresh produce.",
  },
};

export default function ColdChainProcessPage() {
  const pageUrl = "https://organicmushroomsfarm.com/process/cold-chain";

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
        name: "Post-Harvest Cold Chain for Mushrooms | Preservation Guide",
        description:
          "Effective cold chain management for mushrooms. Pre-cooling and storage techniques to double the shelf-life of fresh produce.",
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
            name: "Cold Chain Management",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Immediate Cooling",
      content: "Pre-cooling to 4°C within 120 minutes of harvest.",
      icon: ThermometerSnowflake,
    },
    {
      title: "Cold Packaging",
      content: "Packing into moisture-resistant crates in a chilled environment.",
      icon: PackageSearch,
    },
    {
      title: "Storage Management",
      content: "FIFO (First-In, First-Out) inventory control in cold rooms.",
      icon: ArrowDownUp,
    },
    {
      title: "Transport Link",
      content: "Sealing the cargo in pre-cooled insulated vehicles.",
      icon: Truck,
    },
  ];

  const materials = [
    "Blast Chillers",
    "Cold Storage Unit",
    "Data Loggers",
    "Thermal Blankets",
  ];

  const commonMistakes = [
    "Opening cold room doors frequently causing condensation.",
    "Mixing fresh harvest with old stock (temperature shock).",
    "Over-packing causing crushing at the bottom of crates.",
  ];

  return (
    <main
      id="cold-chain-process-page"
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
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
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
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
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
            Cold Chain Management
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 mb-2.5">
            <Zap className="w-3.5 h-3.5 text-cyan-500" />
            <span>Cold Chain Preservation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Strategic Cold <span className="gradient-text text-cyan-600 dark:text-cyan-400">Chain Management</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-cyan-700 dark:text-cyan-400 mb-2">
            Maintaining High-Value Inventories post-Harvest
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Mushrooms start losing weight and color the moment they are picked. A solid cold chain is non-negotiable for commercial success.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="cold-chain-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-1">
              Temperature Protocol
            </div>
            <h2
              id="cold-chain-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Preservation Flow</span>
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
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
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
            aria-labelledby="cold-chain-materials-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3
                id="cold-chain-materials-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Required Equipment
              </h3>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {materials.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cost Estimation */}
          <section
            aria-labelledby="cold-chain-pricing-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="cold-chain-pricing-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Energy Expenditure
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                Approx ₹2,000 - ₹5,000 per month
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Energy costs for running small to medium commercial cold storage units continuously.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Proper insulation and minimizing door openings directly dictate monthly electricity efficiency.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="cold-chain-pitfalls-heading"
          className="rounded-2xl p-4 border border-rose-500/30 bg-rose-500/[0.03] dark:bg-rose-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="cold-chain-pitfalls-heading"
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
          aria-labelledby="cold-chain-strategy-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="cold-chain-strategy-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Preserving Quality Through <span className="gradient-text">Temperature Management</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            A mushroom consists of roughly 90% water. The moment you execute a{" "}
            <Link
              href="/process/precision-harvest"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              precision harvest
            </Link>
            , respiration continues at a rapid rate, leading to rapid moisture loss, weight degradation, and brown spotting. To halt this deterioration and maintain premium shelf appeal for retail buyers, a rigorous cold chain strategy is absolutely critical. Our standardized protocol requires that all fresh pickings are blast-chilled to 4°C within 120 minutes of leaving the{" "}
            <Link
              href="/process/production-room"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              production room
            </Link>.
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Once pre-cooled, mushrooms must be stored and graded in a chilled environment to prevent condensation shock. Employing a strict FIFO (First-In, First-Out) inventory system in your cold rooms prevents old stock from degrading. For entrepreneurs utilizing our{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              turnkey setup
            </Link>{" "}
            solutions, we integrate highly efficient insulated cold storage rooms into the structural blueprint. If you are operating near our{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>{" "}
            headquarters and require guidance on cold room retrofitting or insulated transport logistics, connect with our engineering experts via the{" "}
            <Link
              href="/contact"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              contact
            </Link>{" "}
            page.
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="cold-chain-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-cyan-500/30 bg-cyan-500/[0.04] dark:bg-cyan-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="cold-chain-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Setup Your Cold Storage Unit
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Get technical blueprints and equipment supplier details for energy-efficient mushroom cold rooms.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20need%20guidance%20on%20setting%20up%20a%20Cold%20Storage%20unit%20for%20fresh%20mushrooms."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm bg-cyan-600 hover:bg-cyan-700 text-white border-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss Setup</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get Quotes</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
