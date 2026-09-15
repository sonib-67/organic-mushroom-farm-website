import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Layers,
  ShieldCheck,
  Thermometer,
  Wind,
  ArrowRight,
  CheckCircle2,
  Settings,
  Factory,
  Phone,
  Mail,
  AlertTriangle,
  Flame,
  Gauge,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Compost Unit Specs | Phase-I & Phase-II Details",
  description:
    "Technical specifications for 2000-Bag and 3000-Bag compost units including Phase-I and Phase-II durations, bunker dimensions, and pasteurization machinery.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/compost-unit-specs",
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
    title: "Compost Unit Specs | Phase-I & Phase-II Details",
    description:
      "Technical specifications for 2000-Bag and 3000-Bag compost units including Phase-I and Phase-II durations, bunker dimensions, and pasteurization machinery.",
    url: "https://organicmushroomsfarm.com/compost-unit-specs",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Compost Unit Specs | Phase-I & Phase-II Details",
    description:
      "Technical specifications for 2000-Bag and 3000-Bag compost units including Phase-I and Phase-II durations, bunker dimensions, and pasteurization machinery.",
  },
};

export default function CompostUnitSpecsPage() {
  const pageUrl = "https://organicmushroomsfarm.com/compost-unit-specs";

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
        name: "Compost Unit Specs | Phase-I & Phase-II Details",
        description:
          "Technical specifications for 2000-Bag and 3000-Bag compost units including Phase-I and Phase-II durations, bunker dimensions, and pasteurization machinery.",
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
            name: "Compost Unit Specs",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main
      id="compost-unit-specs-page"
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Compost Unit Specs
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <Settings className="w-3.5 h-3.5 text-emerald-500" />
            <span>Compost Preparation &amp; Infrastructure</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Compost <span className="gradient-text text-emerald-600 dark:text-emerald-400">Unit Specs</span>
          </h1>

          <p className="text-xs sm:text-[13px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Engineered systems for optimized Phase-I &amp; Phase-II cycles. Precise substrate physics for commercial high-yielding harvests.
          </p>
        </header>

        {/* Section 1: Detailed Specifications Grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {/* Bunker Dimensions */}
          <section
            aria-labelledby="specs-infra-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h2
                    id="specs-infra-heading"
                    className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight"
                  >
                    Bunker Dimensions
                  </h2>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    Spatial configuration for aeration.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-[12px] text-slate-700 dark:text-slate-300">
                <li className="flex items-center justify-between border-b border-slate-200/40 dark:border-white/5 pb-1.5">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    2000-Bag Unit (20T):
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">14 x 30 ft System</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    3000-Bag Unit (30T):
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">14 x 40 ft System</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Cycle Timelines */}
          <section
            aria-labelledby="specs-timeline-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h2
                    id="specs-timeline-heading"
                    className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight"
                  >
                    Cycle Timelines
                  </h2>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    Strict 15-day composting workflow.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-[12px] text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-1.5 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Phase-I:</strong> 8 days (Conditioning &amp; pre-wet, 75°C-80°C)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Phase-II:</strong> 7 days (Pasteurization &amp; conditioning)</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Section 2: Required Machinery Config */}
        <section
          aria-labelledby="specs-machinery-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 shrink-0">
              <Thermometer className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="specs-machinery-heading"
                className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                Required Machinery Config
              </h2>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Industrial-grade equipment included in the turnkey cost.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 pt-0.5">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-fuchsia-500" /> Centrifugal Blowers
              </h3>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                High-capacity grided floor aeration system ensuring proper O2 penetration during Phase-II pasteurization phase.
              </p>
            </div>
            
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-fuchsia-500" /> Precision Thermosensors
              </h3>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                Automated multipoint probing sensors linking directly to climate panels to monitor 57-60°C peak-heating thresholds.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Substrate Science & Phase Breakdown */}
        <section
          aria-labelledby="specs-science-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2">
            <Factory className="w-4 h-4 text-emerald-500" />
            <h2
              id="specs-science-heading"
              className="text-[13px] font-bold text-slate-900 dark:text-white"
            >
              The Science of a Commercial Compost Unit
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Unlike{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Oyster mushrooms
            </Link>{" "}
            that easily colonize raw straw,{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Button mushrooms
            </Link>{" "}
            (<em>Agaricus bisporus</em>) are secondary decomposers. This means raw agricultural ingredients (such as wheat straw, poultry manure, gypsum, and urea) must be enzymatically broken down by specialized thermophilic actinomycetes and microorganisms before the mycelium can feed on it.
          </p>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02]">
              <span className="text-[11.5px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 mb-1">
                <Flame className="w-3 h-3" /> Phase-I (Bunker Aeration)
              </span>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                Raw ingredients are mixed, wetted, and stacked in aerated bunkers. Microorganisms cook the substrate up to 75°C to 80°C, breaking down complex carbohydrates into readily absorbable nutrition.
              </p>
            </div>

            <div className="p-2.5 rounded-xl border border-blue-500/20 bg-blue-500/[0.02]">
              <span className="text-[11.5px] font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-1">
                <ShieldCheck className="w-3 h-3" /> Phase-II (Tunnel Pasteurization)
              </span>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                Conducted in sealed, insulated tunnels with centrifugal fans and steam injection. Pasteurization eliminates harmful competitor molds and clearing ammonia that would otherwise kill your{" "}
                <Link
                  href="/spawn-seed"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  mushroom spawn
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: In-Text Natural Internal Linking (No external list) */}
        <section
          aria-labelledby="specs-engineering-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2"
        >
          <h3
            id="specs-engineering-heading"
            className="text-[12.5px] font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Engineering Foundation for Farm Success
          </h3>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            A poorly designed compost unit is the number one reason commercial button mushroom farms suffer crop failures. If your Phase-II tunnel conditioning is compromised, your bags fall victim to aggressive competitor fungi such as Trichoderma (green mold) or Mycogone perniciosa (wet bubble). By implementing our scientifically engineered compost yard layouts with precision-controlled aerated bunkers and pasteurization tunnels, you ensure that every single batch of substrate produced is sterile, nutrient-dense, and primed for heavy flushes.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Whether you need custom blueprints for an existing farm shed or are planning a comprehensive{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              turnkey setup
            </Link>{" "}
            near our central{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>{" "}
            facility, our agro-engineering team provides complete civil drawings, ducting schematics, and equipment lists. Contact us through our{" "}
            <Link
              href="/contact"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              consultation portal
            </Link>{" "}
            to start engineering your custom unit.
          </p>
        </section>

        {/* Section 5: Direct CTA Section (No Black Box) */}
        <section
          aria-labelledby="specs-consult-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h3
              id="specs-consult-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              Start Building Your Compost Unit
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-lg">
              Skip the trial-and-error. Deploy proven infrastructure designed for large-scale commercial mushroom farming success.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20know%20more%20about%20Compost%20Unit%20Specs%20and%20Tunnel%20Blueprints."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
