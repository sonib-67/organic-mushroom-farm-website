import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  MapPin,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Sprout,
  CheckCircle2,
  TrendingUp,
  Package,
  Store,
  Layers,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Development and Training Center in Jabalpur | Organic Mushrooms Farm",
  description:
    "Advance your mushroom farming in Jabalpur. Troubleshooting, yield improvement, oyster & button varieties, and post-harvest handling for existing growers.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/jabalpur/mushroom-development-and-training-center",
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
      "Mushroom Development and Training Center in Jabalpur | Organic Mushrooms Farm",
    description:
      "Advance your mushroom farming in Jabalpur. Troubleshooting, yield improvement, oyster & button varieties, and post-harvest handling for existing growers.",
    url: "https://organicmushroomsfarm.com/locations/jabalpur/mushroom-development-and-training-center",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Development and Training Center in Jabalpur | Organic Mushrooms Farm",
    description:
      "Advance your mushroom farming in Jabalpur. Troubleshooting, yield improvement, oyster & button varieties, and post-harvest handling for existing growers.",
  },
};

const faqs = [
  {
    q: "Is this center only for beginners?",
    a: "No, we also work with existing growers who want to improve yield, try new varieties, or fix recurring problems in their setup.",
  },
  {
    q: "Can you help with post-harvest handling and storage?",
    a: "Yes, the program includes guidance on handling, packaging, and short-term storage to reduce spoilage before sale.",
  },
  {
    q: "Do you help connect growers to buyers?",
    a: "We share general guidance on local market channels, though direct buyer connections depend on the specific region and season.",
  },
];

export default function MushroomDevelopmentAndTrainingCenterJabalpurPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/jabalpur/mushroom-development-and-training-center";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Mushroom Development and Training Center in Jabalpur | Organic Mushrooms Farm",
        description:
          "Advanced mushroom development and training center in Jabalpur for existing growers looking to troubleshoot yield, try new varieties, and optimize post-harvest storage.",
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
            name: "States",
            item: "https://organicmushroomsfarm.com/states",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Madhya Pradesh",
            item: "https://organicmushroomsfarm.com/states/madhya-pradesh",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Jabalpur",
            item: "https://organicmushroomsfarm.com/locations/jabalpur",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Development and Training Center",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main
      id="mushroom-development-and-training-center-jabalpur"
      className="min-h-screen bg-transparent pt-20 sm:pt-24 pb-12 text-slate-800 dark:text-slate-200"
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
        className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-2"
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
            <Link
              href="/states"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              States
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/states/madhya-pradesh"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Madhya Pradesh
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/locations/jabalpur"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Jabalpur
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Development &amp; Training Center
          </li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Back Link to Jabalpur Resources Hub */}
        <div>
          <Link
            href="/locations/jabalpur"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Jabalpur Resources</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <header className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            <span>Advanced Grower Guidance &amp; Scaling Support</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Mushroom Development and Training Center, Jabalpur
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Helping existing growers scale operations, troubleshoot yield issues, and optimize post-harvest packaging for local markets in Madhya Pradesh.
          </p>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] w-full max-w-[460px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png"
              alt="Advanced mushroom development and training center in Jabalpur for existing growers"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-1.5 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Advanced yield optimization and post-harvest handling for commercial scales.
          </p>
        </div>

        {/* Core Content Section with Natural In-Text Links */}
        <article className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Scaling Operations &amp; Troubleshooting for Returning Farmers
            </h2>
          </div>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Beyond basic training, a development-focused center also helps growers improve and scale what they already do. Our mushroom development and training center in Jabalpur works with returning farmers who want to troubleshoot yield issues, explore new varieties like oyster alongside button mushrooms, or improve their post-harvest handling to reduce spoilage before sale. Using quality{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              certified spawn
            </Link>{" "}
            and data-driven climate control specific to{" "}
            <Link
              href="/states/madhya-pradesh"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Madhya Pradesh
            </Link>
            , we help farms maximize output. For growers looking to scale operations, integrating insights from our{" "}
            <Link
              href="/roi-calculator"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ROI and costing tools
            </Link>{" "}
            makes transitioning from a small room to a larger commercial shed much smoother.
          </p>

          <div className="pt-2 border-t border-slate-200/40 dark:border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                <span>Yield Optimization</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Fixing recurring contamination and optimizing substrate for heavier flushes.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <Package className="w-3.5 h-3.5 text-emerald-500" />
                <span>Post-Harvest Care</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Techniques for packaging, cooling, and short-term storage to prevent spoilage.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <Store className="w-3.5 h-3.5 text-emerald-500" />
                <span>Market Networking</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Guidance on local buyer channels, mandis, and retail supply strategies.
              </p>
            </div>
          </div>
        </article>

        {/* Frequently Asked Questions Section */}
        <section
          aria-labelledby="faq-section-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faq-section-heading"
              className="text-sm sm:text-base font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] space-y-1"
              >
                <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300 pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Navigation & Enrollment Card */}
        <section
          aria-label="Training Enrollment and Nearby Jabalpur Guides"
          className="rounded-2xl p-3.5 sm:p-4 border border-emerald-500/20 bg-emerald-500/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="space-y-0.5">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              Ready to take your current farm to the next level?
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              Explore advanced modules on our{" "}
              <Link
                href="/locations/jabalpur"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                Jabalpur Resources Hub
              </Link>{" "}
              or contact us for tailored consulting.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/training"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <span>View Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/locations/jabalpur"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
            >
              <span>All Guides</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
