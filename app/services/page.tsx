import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Sparkles,
  Sprout,
  Layers,
  Info,
  TrendingUp,
  Zap,
  ShieldCheck,
  ShoppingCart,
  Home,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "End-to-End Mushroom Farming Services | From Training to Turnkey Projects",
  description:
    "Explore our end-to-end commercial mushroom farming services: organic hybrid spawn supply, industrial compost production, and technical turnkey consultancy in India & Worldwide.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services",
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
    title: "End-to-End Mushroom Farming Services | From Training to Turnkey Projects",
    description:
      "Explore our end-to-end commercial mushroom farming services: organic hybrid spawn supply, industrial compost production, and technical turnkey consultancy in India & Worldwide.",
    url: "https://organicmushroomsfarm.com/services",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "End-to-End Mushroom Farming Services | From Training to Turnkey Projects",
    description:
      "Explore our end-to-end commercial mushroom farming services: organic hybrid spawn supply, industrial compost production, and technical turnkey consultancy in India & Worldwide.",
  },
};

export default function ServicesPage() {
  const pageUrl = "https://organicmushroomsfarm.com/services";

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
        name: "End-to-End Mushroom Farming Services | From Training to Turnkey Projects",
        description:
          "Explore our end-to-end commercial mushroom farming services: organic hybrid spawn supply, industrial compost production, and technical turnkey consultancy in India & Worldwide.",
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
            name: "Services",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      label: "Raw Material",
      desc: "Straw, manure & gypsum testing",
      icon: ShoppingCart,
      href: "/services/turnkey-setup",
    },
    {
      label: "Compost Prep",
      desc: "Phase-II tunnel pasteurization",
      icon: Layers,
      href: "/compost-unit",
    },
    {
      label: "Production Room",
      desc: "AC insulated commercial grow rooms",
      icon: Home,
      href: "/services/turnkey-setup",
    },
    {
      label: "Precision Harvest",
      desc: "Grade-A picking & clean cutting",
      icon: Sprout,
      href: "/services/button-mushroom",
    },
    {
      label: "Cold Chain",
      desc: "2-4°C rapid pre-cooling",
      icon: Zap,
      href: "/services/button-mushroom",
    },
    {
      label: "Market Linkage",
      desc: "B2B mandi & food processing buyers",
      icon: TrendingUp,
      href: "/services/oyster-mushroom",
    },
  ];

  const services = [
    {
      id: "spawn-supply",
      title: "Organic Hybrid Spawn Supply",
      desc: "Top-tier genetics for maximum yield and disease resistance across Button, Oyster, and Milky mushroom varieties.",
      icon: Sprout,
      link: "/spawn-seeds",
      linkText: "Order Spawn",
    },
    {
      id: "compost-production",
      title: "Industrial Compost Production",
      desc: "Standardized Phase II & Phase III pasteurized compost formulated for commercial success and zero weed-mold contamination.",
      icon: Layers,
      link: "/compost-unit",
      linkText: "View Units",
    },
    {
      id: "consultancy",
      title: "Technical Setup Consultancy",
      desc: "Expert guidance from climate control engineering to DPR preparation and disease management tailored to your local geography.",
      icon: Info,
      link: "/book-consultant",
      linkText: "Book Advisory",
    },
    {
      id: "marketing-support",
      title: "Global Marketing Support",
      desc: "Connecting commercial growers with verified B2B buyers, institutional wholesalers, and lucrative export channels.",
      icon: TrendingUp,
      link: "/services/turnkey-setup",
      linkText: "Setup Linkage",
    },
    {
      id: "cold-chain",
      title: "Cold Chain Logistics",
      desc: "Ensuring post-harvest freshness from farm to market with specialized rapid pre-cooling and insulated temperature logs.",
      icon: Zap,
      link: "/services/button-mushroom",
      linkText: "Cold Storage SOP",
    },
    {
      id: "subsidy",
      title: "Subsidy Guidance",
      desc: "Legal and documentation support for 40% to 50% National Horticulture Board (NHB) and MIDH government schemes.",
      icon: ShieldCheck,
      link: "/contact",
      linkText: "Check Eligibility",
    },
  ];

  return (
    <main
      id="services-overview-page"
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
            Services
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        {/* Hero Section */}
        <header className="text-center pt-2 pb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            <span>Expert Setup Solutions</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Our Comprehensive{" "}
            <span className="gradient-text">Commercial Services</span>
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tailored commercial infrastructure and support systems for the modern
            mushroom farmer globally.
          </p>
        </header>

        {/* Section 1: Commercial Operation Model (Ecosystem Flow) */}
        <section aria-labelledby="ecosystem-flow-heading" className="space-y-3">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 mb-1.5">
              Commercial Operation Model
            </div>
            <h2
              id="ecosystem-flow-heading"
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Complete Commercial Farming{" "}
              <span className="gradient-text">Ecosystem Flow &amp; Setup</span>
            </h2>
          </div>

          {/* 6 Step Interactive Horizontal / Grid Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={i}
                  href={s.href}
                  className="rounded-2xl p-3 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col items-center text-center group hover:border-emerald-500/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight mb-0.5">
                    {s.label}
                  </span>
                  <span className="text-[10px] sm:text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug">
                    {s.desc}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Section 2: 6 Core Commercial Services Grid */}
        <section aria-labelledby="core-services-heading" className="space-y-3">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-1.5">
              Turnkey Capabilities
            </div>
            <h2
              id="core-services-heading"
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Professional Services for{" "}
              <span className="gradient-text">Growers &amp; Investors</span>
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 mt-0.5">
              End-to-end commercial solutions covering every phase of your mushroom cultivation lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-3.5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2.5 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      Standard SOP
                    </span>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors uppercase tracking-wider"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: In-Text Natural Internal Linking (No Separate External List) */}
        <section
          aria-labelledby="commercial-specs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="commercial-specs-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Pioneering Commercial{" "}
            <span className="gradient-text">Mushroom Farming Services Across India</span> &amp;{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Jabalpur
            </Link>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Establishing a profitable commercial mushroom facility requires a coordinated approach that bridges agronomy, civil construction, and market linkages. At Organic Mushrooms Farm, our full-stack services are engineered around high-precision{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial turnkey farm setup
            </Link>
            , enabling investors to build 2,000 to 3,500 bag capacity climate-controlled grow rooms. We supply laboratory-verified{" "}
            <Link
              href="/spawn-seeds"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              organic mushroom spawn
            </Link>{" "}
            and standardized Phase-II substrate via our{" "}
            <Link
              href="/compost-unit"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial compost production units
            </Link>
            .
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Whether your goal is to master high-value{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              button mushroom farming
            </Link>
            , low-capital{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              oyster mushroom cultivation
            </Link>
            , or heat-tolerant{" "}
            <Link
              href="/services/milky-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              milky mushroom production
            </Link>
            , we back your venture with hands-on{" "}
            <Link
              href="/training"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              commercial mushroom training programs
            </Link>{" "}
            and personalized{" "}
            <Link
              href="/book-consultant"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              technical advisory consultations
            </Link>
            . Visit our demonstration facility on Katangi Road, Jabalpur, to inspect operational chambers and begin your commercial agro-business journey.
          </p>
        </section>

        {/* Section 4: Direct Fast Action & Turnkey Consultation Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="turnkey-consultation-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="turnkey-consultation-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Need a Custom Commercial Turnkey Quotation?
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Speak directly with our project engineers for shed layout, machinery sizing, and subsidy feasibility.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20your%20commercial%20mushroom%20services.%20Please%20provide%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Advisory</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Page</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
