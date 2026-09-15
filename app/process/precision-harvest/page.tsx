import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Sprout,
  CheckCircle2,
  AlertTriangle,
  PackageCheck,
  IndianRupee,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Ruler,
  Hand,
  Scissors,
  Repeat,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Harvesting Techniques India | Post-Harvest Management",
  description:
    "Learn precision mushroom harvesting techniques. Grading, picking, and post-harvest care for premium button mushrooms.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/process/precision-harvest",
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
    title: "Mushroom Harvesting Techniques India | Post-Harvest Management",
    description:
      "Learn precision mushroom harvesting techniques. Grading, picking, and post-harvest care for premium button mushrooms.",
    url: "https://organicmushroomsfarm.com/process/precision-harvest",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Harvesting Techniques India | Post-Harvest Management",
    description:
      "Learn precision mushroom harvesting techniques. Grading, picking, and post-harvest care for premium button mushrooms.",
  },
};

export default function PrecisionHarvestProcessPage() {
  const pageUrl = "https://organicmushroomsfarm.com/process/precision-harvest";

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
        name: "Mushroom Harvesting Techniques India | Post-Harvest Management",
        description:
          "Learn precision mushroom harvesting techniques. Grading, picking, and post-harvest care for premium button mushrooms.",
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
            name: "Precision Harvesting",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Size Identification",
      content: "Picking when the veil is still intact and diameter is 35-45mm.",
      icon: Ruler,
    },
    {
      title: "Hand-Twist Technique",
      content: "Removing mushrooms without disturbing the casing soil.",
      icon: Hand,
    },
    {
      title: "Stump Cleaning",
      content: "Removing leftover stems to prevent disease (dry bubble).",
      icon: Scissors,
    },
    {
      title: "Cycle Management",
      content: "Timed flushes (1st, 2nd, 3rd) for consistent supply.",
      icon: Repeat,
    },
  ];

  const materials = [
    "Picking Knives",
    "Cleaning Brushes",
    "Grading Baskets",
    "Headlamps",
  ];

  const commonMistakes = [
    "Waiting too long (open veils) which drops the price by 40%.",
    "Damaging the pinheads of the next flush during picking.",
    "Storing harvested mushrooms at room temperature.",
  ];

  return (
    <main
      id="precision-harvest-process-page"
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
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
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
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
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
            Precision Harvesting
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20 mb-2.5">
            <Sprout className="w-3.5 h-3.5 text-purple-500" />
            <span>Precision Harvesting</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Precision Mushroom <span className="gradient-text text-purple-600 dark:text-purple-400">Harvesting</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-purple-700 dark:text-purple-400 mb-2">
            Techniques for Premium Quality and Maximum Rushes
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Harvesting is an art. Timing determines the shelf life and market value of your mushrooms.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="harvest-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-1">
              Harvesting Protocol
            </div>
            <h2
              id="harvest-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Picking Flow</span>
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
                      <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
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
            aria-labelledby="harvest-materials-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3
                id="harvest-materials-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Tools &amp; Equipment
              </h3>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {materials.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cost Estimation */}
          <section
            aria-labelledby="harvest-pricing-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="harvest-pricing-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Labor Estimation
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                Labor based; usually ₹5-₹10 per kg
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Skilled labor is crucial to ensure veils remain intact and stems are cleanly trimmed without bruising.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Tying harvest payments to graded A-quality output dramatically improves picking standards.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="harvest-pitfalls-heading"
          className="rounded-2xl p-4 border border-rose-500/30 bg-rose-500/[0.03] dark:bg-rose-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="harvest-pitfalls-heading"
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
          aria-labelledby="harvest-strategy-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="harvest-strategy-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Securing Maximum <span className="gradient-text">Yield and Shelf Life</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Mushroom harvesting requires precise timing. Picking a mushroom with an open veil can immediately drop its wholesale{" "}
            <Link
              href="/services/marketing-support"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              market value
            </Link>{" "}
            by nearly 40%. The standard target is a tight, closed cap measuring 35-45mm in diameter. Pickers must be trained in the &quot;hand-twist&quot; technique to gently remove the fruiting body without disturbing the underlying{" "}
            <Link
              href="/process/raw-material"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              casing soil
            </Link>{" "}
            or damaging the surrounding microscopic pinheads meant for the next flush.
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Post-harvest hygiene is equally critical. Leaving fleshy stumps on the bed invites secondary diseases like dry bubble, which can ruin subsequent cycles. Once graded, the produce must never be left at room temperature; it should immediately enter the{" "}
            <Link
              href="/process/cold-chain"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              cold chain
            </Link>{" "}
            to arrest weight loss and browning. If you are struggling with harvest grading or labor training at your farm, our experts based in{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>{" "}
            can conduct on-site SOP implementations. Feel free to request a consultation through our direct{" "}
            <Link
              href="/contact"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              contact
            </Link>{" "}
            channels.
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="harvest-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-purple-500/30 bg-purple-500/[0.04] dark:bg-purple-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="harvest-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Train Your Harvesting Workforce
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Get SOP manuals and grading charts to maximize your A-grade button mushroom output.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-purple-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-purple-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20looking%20for%20Harvesting%20SOPs%20and%20Labor%20Training%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm bg-purple-600 hover:bg-purple-700 text-white border-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss Training</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get Manuals</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
