import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  BookOpen,
  Thermometer,
  ShieldCheck,
  Droplets,
  Wind,
  ArrowRight,
  CheckCircle2,
  FileText,
  Phone,
  Mail,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Production SOPs | Standard Operating Procedures | Organic Mushroom Farm",
  description:
    "Access comprehensive standard operating procedures (SOPs) for commercial mushroom farming, including tunnel operations, spawning, casing, and hygiene management.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/sops",
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
    title: "Production SOPs | Standard Operating Procedures",
    description:
      "Access comprehensive standard operating procedures (SOPs) for commercial mushroom farming, including tunnel operations, spawning, casing, and hygiene management.",
    url: "https://organicmushroomsfarm.com/sops",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Production SOPs | Standard Operating Procedures",
    description:
      "Access comprehensive standard operating procedures (SOPs) for commercial mushroom farming, including tunnel operations, spawning, casing, and hygiene management.",
  },
};

export default function SopsPage() {
  const pageUrl = "https://organicmushroomsfarm.com/sops";

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
        name: "Production SOPs | Standard Operating Procedures",
        description:
          "Access comprehensive standard operating procedures (SOPs) for commercial mushroom farming, including tunnel operations, spawning, casing, and hygiene management.",
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
            name: "Production SOPs",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main
      id="sops-page"
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
            Production SOPs
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <FileText className="w-3.5 h-3.5 text-emerald-500" />
            <span>Technical Manual</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Production <span className="gradient-text text-emerald-600 dark:text-emerald-400">SOPs</span>
          </h1>

          <p className="text-xs sm:text-[13px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Standardized protocols for high-yield button mushroom output. Built for strict climate execution and maximum biological efficiency.
          </p>
        </header>

        {/* Quick Anchor Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 py-1">
          <a
            href="#tunnel-ops"
            className="px-2.5 py-1 rounded-lg text-[11px] font-bold border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] hover:bg-emerald-500/10 hover:text-emerald-600 transition-colors inline-flex items-center gap-1"
          >
            <Thermometer className="w-3 h-3 text-emerald-500" />
            <span>Tunnel Ops</span>
          </a>
          <a
            href="#spawning"
            className="px-2.5 py-1 rounded-lg text-[11px] font-bold border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] hover:bg-emerald-500/10 hover:text-emerald-600 transition-colors inline-flex items-center gap-1"
          >
            <Wind className="w-3 h-3 text-blue-500" />
            <span>Spawning</span>
          </a>
          <a
            href="#casing"
            className="px-2.5 py-1 rounded-lg text-[11px] font-bold border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] hover:bg-emerald-500/10 hover:text-emerald-600 transition-colors inline-flex items-center gap-1"
          >
            <Droplets className="w-3 h-3 text-cyan-500" />
            <span>Casing</span>
          </a>
          <a
            href="#hygiene"
            className="px-2.5 py-1 rounded-lg text-[11px] font-bold border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] hover:bg-emerald-500/10 hover:text-emerald-600 transition-colors inline-flex items-center gap-1"
          >
            <ShieldCheck className="w-3 h-3 text-purple-500" />
            <span>Hygiene</span>
          </a>
        </div>

        {/* Section 1: Tunnel Ops */}
        <section
          id="tunnel-ops"
          aria-labelledby="tunnel-ops-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Thermometer className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="tunnel-ops-heading"
                className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                Tunnel Ops
              </h2>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Phase-II pasteurization protocols &amp; thermal balance.
              </p>
            </div>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Phase-II Pasteurization Tunnel operations require strict temperature and oxygen management to eliminate ammonia and pathogens. To review bunker sizing and airflow details, check our{" "}
            <Link
              href="/compost-unit-specs"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              compost unit specs
            </Link>.
          </p>

          <ul className="space-y-2 text-[12px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ramp-Up:</strong> Gradually increase temperature to 57°C over 12 hours.</span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Pasteurization:</strong> Maintain strictly between 57°C to 60°C for 6 to 8 hours. Do not exceed 61°C (kills beneficial thermophilic fungi).</span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Conditioning:</strong> Lower to 48-52°C and hold for 4 to 6 days to clear ammonia (target &lt; 10ppm).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Cooldown:</strong> Rapidly cool compost to 24-25°C before spawning.</span>
            </li>
          </ul>
        </section>

        {/* Section 2: Spawning */}
        <section
          id="spawning"
          aria-labelledby="spawning-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Wind className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="spawning-heading"
                className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                Spawning
              </h2>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Aseptic grain inoculation and mycelium run setup.
              </p>
            </div>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Proper inoculation requires absolute sterile conditions to prevent green mold (Trichoderma). Always source lab-tested{" "}
            <Link
              href="/spawn-seed"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              mushroom spawn
            </Link>{" "}
            for predictable spawn runs in commercial{" "}
            <Link
              href="/services/button-mushroom"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              button mushroom
            </Link>{" "}
            facilities.
          </p>

          <ul className="space-y-2 text-[12px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span><strong>Sterile Handling:</strong> Workers must use IPA (Isopropyl Alcohol 70%) on hands and tools. Masks and fresh aprons are strictly mandatory.</span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span><strong>Grain-to-Compost Ratio:</strong> Use 0.5% to 0.7% spawn by weight of wet compost (e.g., 50-70g spawn per 10kg compost).</span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span><strong>Mixing:</strong> Ensure uniform distribution of grain. Top dress lightly to accelerate surface colonization.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span><strong>Incubation:</strong> Maintain room temperature at 24°C with high relative humidity (90%+) and high CO2.</span>
            </li>
          </ul>
        </section>

        {/* Section 3: Casing */}
        <section
          id="casing"
          aria-labelledby="casing-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <Droplets className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="casing-heading"
                className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                Casing
              </h2>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Moisture reservoir and pinning induction layer.
              </p>
            </div>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            The casing layer provides water storage and induces pinning. Poor casing leads to stroma formation. In a high-tech{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              turnkey setup
            </Link>
            , proper moisture buffering guarantees uniform pinhead clusters across all growing shelves.
          </p>

          <ul className="space-y-2 text-[12px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
              <span><strong>Material:</strong> Coir pith + Farm Yard Manure (2-year old) + Chalk powder.</span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
              <span><strong>pH Balance:</strong> Adjust strictly to 7.5pH using Calcium Carbonate (chalk mitti).</span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
              <span><strong>Formalin Treatment:</strong> Treat raw materials with 2-4% Formalin solution. Cover tightly with a tarpaulin for 48 hours to pasteurize.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
              <span><strong>Off-gassing:</strong> Uncover and rake repeatedly for 24-48 hours until all traces of formaldehyde smell are gone before application.</span>
            </li>
          </ul>
        </section>

        {/* Section 4: Hygiene */}
        <section
          id="hygiene"
          aria-labelledby="hygiene-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="hygiene-heading"
                className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                Hygiene
              </h2>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Biosecurity, fly barriers, and contamination prevention.
              </p>
            </div>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Biological contamination is the primary cause of crop failure. Zero-tolerance hygiene must be enforced. If you encounter unknown pests or molds, reach out directly to our{" "}
            <Link
              href="/contact"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              technical team
            </Link>{" "}
            for diagnostic support.
          </p>

          <ul className="space-y-2 text-[12px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
              <span><strong>Footbath Protocols:</strong> Install 2% Formalin or Bleach footbaths at every entrance. Replenish daily.</span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
              <span><strong>Fly-Net Specifications:</strong> Install 40-mesh nylon screens on all vents, exhausts, and doors to prevent Sciarid and Phorid fly entry.</span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
              <span><strong>Waste Disposal:</strong> Spent compost and infected bags must be immediately sealed in plastic and moved at least 500 meters from the growing area.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
              <span><strong>Sanitization:</strong> Spray 0.5% Bleach solution on floors and corridors twice daily.</span>
            </li>
          </ul>
        </section>

        {/* Section 5: Consultation & Support CTA (No Black Box) */}
        <section
          aria-labelledby="sops-consult-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h3
              id="sops-consult-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              Need On-Site SOP Implementation?
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-lg">
              Our master growers train your workforce on tunnel pasteurization, spawning hygiene, and climate monitoring for uninterrupted commercial flushes.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20need%20commercial%20mushroom%20production%20SOP%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp SOP Team</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Consultation</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
