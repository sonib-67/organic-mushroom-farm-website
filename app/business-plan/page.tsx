import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Target,
  Eye,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Users,
  BadgeCheck,
  Rocket,
  Phone,
  Mail,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Business Plan India | Organic Mushrooms Farm",
  description:
    "Explore our detailed mission, market strategy, and operational roadmap to becoming India's leading organic fungi hub. Learn about our hub-and-spoke farming model.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/business-plan",
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
    title: "Mushroom Farming Business Plan India | Organic Mushrooms Farm",
    description:
      "Explore our detailed mission, market strategy, and operational roadmap to becoming India's leading organic fungi hub. Learn about our hub-and-spoke farming model.",
    url: "https://organicmushroomsfarm.com/business-plan",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Business Plan India | Organic Mushrooms Farm",
    description:
      "Explore our detailed mission, market strategy, and operational roadmap to becoming India's leading organic fungi hub. Learn about our hub-and-spoke farming model.",
  },
};

export default function BusinessPlanPage() {
  const pageUrl = "https://organicmushroomsfarm.com/business-plan";

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
        name: "Mushroom Farming Business Plan India | Organic Mushrooms Farm",
        description:
          "Explore our detailed mission, market strategy, and operational roadmap to becoming India's leading organic fungi hub. Learn about our hub-and-spoke farming model.",
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
            name: "Business Plan",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main
      id="business-plan-page"
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
            Business Plan
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <Rocket className="w-3.5 h-3.5 text-emerald-500" />
            <span>Strategic Roadmap</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Join the <span className="gradient-text text-emerald-600 dark:text-emerald-400">Fungi Revolution</span>
          </h1>

          <p className="text-xs sm:text-[13px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-3">
            Building a sustainable, tech-driven, and highly profitable ecosystem for organic mushroom cultivation in India.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="px-5 py-2.5 rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs">
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">1000+</div>
              <div className="text-[9.5px] uppercase tracking-wider text-slate-500 font-bold">
                Students Trained
              </div>
            </div>
            <div className="px-5 py-2.5 rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs">
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">5+ Tons</div>
              <div className="text-[9.5px] uppercase tracking-wider text-slate-500 font-bold">
                Annual Production
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Overview & Vision */}
        <div className="grid md:grid-cols-2 gap-3">
          <section
            aria-labelledby="overview-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2"
          >
            <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <h2
                id="overview-heading"
                className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                Business Overview
              </h2>
            </div>
            <p className="text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              Organic Mushrooms Farm stands at the intersection of agriculture and technology. As a premium producer, lab-grade{" "}
              <Link
                href="/spawn-seed"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                spawn supplier
              </Link>
              , and educational hub, we are democratizing the high-value mushroom farming industry in India.
            </p>
          </section>

          <section
            aria-labelledby="vision-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2"
          >
            <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <Eye className="w-4 h-4" />
              </div>
              <h2
                id="vision-heading"
                className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                The Vision
              </h2>
            </div>
            <p className="text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300 italic">
              &ldquo;To become the leading provider of organic fungi and sustainable farming education in India, empowering 10,000+ agripreneurs by 2030.&rdquo;
            </p>
          </section>
        </div>

        {/* Section 2: Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-3">
          <section
            aria-labelledby="problem-heading"
            className="rounded-2xl p-4 border border-red-500/20 bg-red-500/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold border-b border-red-500/10 pb-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <h2 id="problem-heading" className="text-[13px]">
                The Problem
              </h2>
            </div>
            <ul className="space-y-2 text-[11.5px] text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>Shortage of lab-grade, high-yield mushroom spawn (seeds) in local markets.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>Heavy reliance on chemical pesticides in conventional mushroom farming.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>Lack of professional, end-to-end technical training for new farmers.</span>
              </li>
            </ul>
          </section>

          <section
            aria-labelledby="solution-heading"
            className="rounded-2xl p-4 border border-emerald-500/20 bg-emerald-500/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold border-b border-emerald-500/10 pb-2">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <h2 id="solution-heading" className="text-[13px]">
                Our Solution
              </h2>
            </div>
            <ul className="space-y-2 text-[11.5px] text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-500 font-bold">•</span>
                <span>100% Organic substrate preparation using zero chemical intervention.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Laboratory-verified spawn production with stabilized hybrid genetics.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Comprehensive mentorship from facility setup to guaranteed buy-back.</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Section 3: Market Analysis & Strategy */}
        <section
          aria-labelledby="market-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="text-center pb-1">
            <h2
              id="market-heading"
              className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight"
            >
              Market Analysis &amp; Strategy
            </h2>
            <p className="text-[11px] text-slate-500">
              Expanding consumer awareness and booming functional mushroom demand.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <TrendingUp className="text-emerald-500 w-5 h-5 mb-1" />
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                Market Opportunity
              </h3>
              <p className="text-[10.5px] leading-relaxed text-slate-600 dark:text-slate-400">
                Rising demand for vegan protein and medicinal fungi in the post-pandemic wellness market. CAGR of 15% in India.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <Users className="text-blue-500 w-5 h-5 mb-1" />
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                Target Segments
              </h3>
              <p className="text-[10.5px] leading-relaxed text-slate-600 dark:text-slate-400">
                B2B (Hotels &amp; Pharma), B2C (Health-conscious households), and B2G (Government training programs).
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <BadgeCheck className="text-purple-500 w-5 h-5 mb-1" />
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                Competitive Edge
              </h3>
              <p className="text-[10.5px] leading-relaxed text-slate-600 dark:text-slate-400">
                Our 100% organic substrate and post-training lifetime support create an unmatched entry barrier for competitors.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Operational & Technical Plan */}
        <section
          aria-labelledby="operations-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="border-b border-slate-200/50 dark:border-white/10 pb-2">
            <h2
              id="operations-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Operational &amp; Technical Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div className="space-y-2.5">
              <div className="flex gap-2.5">
                <div className="w-6 h-6 rounded-full border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                    Cultivation Process
                  </h3>
                  <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                    High-level{" "}
                    <Link
                      href="/sops"
                      className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                    >
                      production SOPs
                    </Link>{" "}
                    covering everything from sterile inoculation to automated climate control management.
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5">
                <div className="w-6 h-6 rounded-full border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 text-xs font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                    Facility Infrastructure
                  </h3>
                  <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                    Smart grow-rooms equipped with ultrasonic humidifiers, CO2 controllers, and HEPA filters in our turnkey{" "}
                    <Link
                      href="/services/turnkey-setup"
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      commercial setups
                    </Link>.
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5">
                <div className="w-6 h-6 rounded-full border border-purple-500/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 text-xs font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                    Scaling Roadmap
                  </h3>
                  <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                    A systematic month-over-month production scaling model designed for maximum ROI in minimal space.
                  </p>
                </div>
              </div>
            </div>

            {/* Management & Leadership Card */}
            <div className="p-3.5 rounded-xl border border-slate-200/50 dark:border-white/10 bg-white/30 dark:bg-white/[0.02] space-y-2">
              <h3 className="text-[12.5px] font-bold text-slate-900 dark:text-white">
                Management &amp; Leadership
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Led by an <span className="font-bold text-slate-900 dark:text-white">MBA Agripreneur</span> with extensive expertise in bio-technology and supply chain management.
              </p>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[11px]">
                  <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                  <span>Sustainability Driven</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[11px]">
                  <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                  <span>Transparent Operations</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[11px]">
                  <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                  <span>Farmer Empowerment through{" "}
                    <Link
                      href="/training"
                      className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                    >
                      certified training
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Direct Consultation CTA (No Black Box) */}
        <section
          aria-labelledby="business-consult-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h3
              id="business-consult-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              Ready to Launch Your Mushroom Farm?
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-lg">
              Download our project feasibility report, review CapEx/OpEx models, or speak directly with our commercial consulting desk.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20Mushroom%20Farming%20Business%20Plan."
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
              <span>Contact Us</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
