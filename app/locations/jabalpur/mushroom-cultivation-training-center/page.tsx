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
  Microscope,
  ShieldAlert,
  Layers,
  ThermometerSnowflake,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Cultivation Training Center in Jabalpur | Organic Mushrooms Farm",
  description:
    "Technical mushroom cultivation training center in Jabalpur. Learn substrate preparation, spawn run, casing, pinning control, and contamination prevention.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/jabalpur/mushroom-cultivation-training-center",
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
      "Mushroom Cultivation Training Center in Jabalpur | Organic Mushrooms Farm",
    description:
      "Technical mushroom cultivation training center in Jabalpur. Learn substrate preparation, spawn run, casing, pinning control, and contamination prevention.",
    url: "https://organicmushroomsfarm.com/locations/jabalpur/mushroom-cultivation-training-center",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Cultivation Training Center in Jabalpur | Organic Mushrooms Farm",
    description:
      "Technical mushroom cultivation training center in Jabalpur. Learn substrate preparation, spawn run, casing, pinning control, and contamination prevention.",
  },
};

const faqs = [
  {
    q: "What stages of cultivation does the course cover?",
    a: "The course walks through substrate preparation, spawning, spawn run, casing, pinning, and harvesting in sequence.",
  },
  {
    q: "How do I know if my substrate is contaminated?",
    a: "Training includes visual identification of common contamination signs like green or black mold, which is covered directly during practical sessions.",
  },
  {
    q: "Is this course suitable for someone who already grows mushrooms casually?",
    a: "Yes, many participants already grow mushrooms in a small way and join to improve yield and reduce contamination losses.",
  },
];

export default function MushroomCultivationTrainingCenterJabalpurPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/jabalpur/mushroom-cultivation-training-center";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Mushroom Cultivation Training Center in Jabalpur | Organic Mushrooms Farm",
        description:
          "Practical technical training in mushroom cultivation in Jabalpur covering all growth stages, timing, and contamination prevention.",
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
            name: "Cultivation Training Center",
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
      id="mushroom-cultivation-training-center-jabalpur"
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
            Cultivation Training Center
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
            <Microscope className="w-3.5 h-3.5 text-emerald-500" />
            <span>Technical Cultivation Science • Pinning & Contamination Control</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Mushroom Cultivation Training Center in Jabalpur
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Master the biological timing, substrate nutrition, climate parameters, and early contamination prevention across Jabalpur and Madhya Pradesh.
          </p>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] w-full max-w-[460px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png"
              alt="Mushroom cultivation training center in Jabalpur hands-on pinning and harvest"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-1.5 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Technical inspection of casing mycelium colonization and pinhead induction in Jabalpur.
          </p>
        </div>

        {/* Core Content Section with Natural In-Text Links */}
        <article className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <Microscope className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Scientific Precision from Spawn Run to Harvesting
            </h2>
          </div>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Cultivation is the technical core of mushroom farming, and this is where most beginners struggle without proper guidance. Our mushroom cultivation training center in Jabalpur focuses specifically on the science and timing behind each stage — from spawn run to pinning to harvest. Participants learn to recognise common problems like contamination or poor pinning early, which is often the difference between a profitable batch and a wasted one. Using lab-tested{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              pure spawn
            </Link>{" "}
            and climate management suited for{" "}
            <Link
              href="/states/madhya-pradesh"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Madhya Pradesh
            </Link>
            , growers learn how to optimize bag yields. You can also review setup costs with our{" "}
            <Link
              href="/roi-calculator"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              yield and ROI calculator
            </Link>{" "}
            before scaling to a commercial facility.
          </p>

          <div className="pt-2 border-t border-slate-200/40 dark:border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                <span>6 Growth Stages</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Step-by-step mastery of substrate prep, spawning, casing, and flush flushes.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <ShieldAlert className="w-3.5 h-3.5 text-emerald-500" />
                <span>Contamination ID</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Visual spotting of trichoderma (green mold), cobweb, and bacterial blotch.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <ThermometerSnowflake className="w-3.5 h-3.5 text-emerald-500" />
                <span>Yield Maximization</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Precision fresh air exchange (CO2 control) and relative humidity management.
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
              Ready to master professional cultivation science?
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              Browse all 93 local guides on our{" "}
              <Link
                href="/locations/jabalpur"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                Jabalpur Resources Directory
              </Link>{" "}
              or reserve your cultivation seat.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/training"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Join Course</span>
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
