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
  Megaphone,
  Users,
  Award,
  Handshake,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Marketing Support India | B2B Market Linkage",
  description:
    "Connect with verified mushroom buyers and export channels. We provide marketing support for button mushroom farming business success in India.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services/marketing-support",
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
    title: "Mushroom Marketing Support India | B2B Market Linkage",
    description:
      "Connect with verified mushroom buyers and export channels. We provide marketing support for button mushroom farming business success in India.",
    url: "https://organicmushroomsfarm.com/services/marketing-support",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Marketing Support India | B2B Market Linkage",
    description:
      "Connect with verified mushroom buyers and export channels. We provide marketing support for button mushroom farming business success in India.",
  },
};

export default function MarketingSupportServicePage() {
  const pageUrl = "https://organicmushroomsfarm.com/services/marketing-support";

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
        name: "Mushroom Marketing Support India | B2B Market Linkage",
        description:
          "Connect with verified mushroom buyers and export channels. We provide marketing support for button mushroom farming business success in India.",
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
            item: "https://organicmushroomsfarm.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Marketing Support",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Branding",
      content: "Setting up basic packaging and branding for your local farm.",
      icon: Megaphone,
    },
    {
      title: "Buyer Networking",
      content: "Introducing your produce to verified Mandi wholesalers.",
      icon: Users,
    },
    {
      title: "Quality Grading",
      content: "Sorting mushrooms into A, B, and C grades for maximum pricing.",
      icon: Award,
    },
    {
      title: "Contract Farming",
      content: "Establishing fixed-price buyback or supply agreements.",
      icon: Handshake,
    },
  ];

  const materials = [
    "Packaging Crates",
    "Branded Pouches",
    "Grading Trays",
    "Digital Inventory Sheets",
  ];

  const commonMistakes = [
    "Focusing only on production and ignoring market tie-ups until harvest.",
    "Poor packaging leading to bruising and price drops.",
    "Lack of consistent supply which breaks retail trust.",
  ];

  return (
    <main
      id="marketing-support-service-page"
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
          <li>
            <Link
              href="/services"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Services
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Marketing Support
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 mb-2.5">
            <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
            <span>Marketing Support</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Mushroom Marketing &amp;{" "}
            <span className="gradient-text">Sales Support</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-purple-700 dark:text-purple-300 mb-2">
            Connecting Producers with National B2B Markets
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The biggest challenge in farming is sales. We help you connect with
            wholesalers, retailers, and food processing industries across India.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="marketing-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-500/10 border border-blue-500/20 mb-1">
              Sales Lifecycle
            </div>
            <h2
              id="marketing-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Market Penetration</span>
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
            aria-labelledby="marketing-materials-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3
                id="marketing-materials-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Required Assets &amp; Logistics
              </h3>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {materials.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cost Estimation */}
          <section
            aria-labelledby="marketing-pricing-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="marketing-pricing-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Cost Estimation
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                Included / Commission Based
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Included in turnkey packages or handled via performance-based commission on bulk institutional sales.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Contract structures vary based on harvest volume, delivery frequency, and regional mandi rates.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="marketing-pitfalls-heading"
          className="rounded-2xl p-4 border border-amber-500/30 bg-amber-500/[0.03] dark:bg-amber-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="marketing-pitfalls-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Common Pitfalls to Avoid
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-xs text-slate-700 dark:text-slate-300">
            {commonMistakes.map((m, i) => (
              <div
                key={i}
                className="rounded-xl p-2.5 border border-amber-500/20 bg-white/40 dark:bg-white/[0.02] flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span className="leading-snug">{m}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: In-Text Natural Internal Linking (No External List) */}
        <section
          aria-labelledby="marketing-strategy-specs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="marketing-strategy-specs-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Securing Supply Chains for{" "}
            <span className="gradient-text">Commercial Yields</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            High production volume without secure market linkages can lead to severe post-harvest losses. For growers managing large-scale{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              button mushroom farming
            </Link>{" "}
            or diverse{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              oyster mushroom
            </Link>{" "}
            crops, we facilitate direct introductions to verified Mandi wholesalers, hotel chains, and retail supermarkets. This marketing support is natively integrated into our comprehensive{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              commercial turnkey farm setups
            </Link>
            , ensuring that from day one, your harvest has a designated buyer.
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            We guide farmers in implementing strict A, B, and C quality grading protocols and branded packaging—factors that directly command premium mandi rates. By operating out of central hubs like{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>
            , we help orchestrate cold chain logistics to extend shelf life. Whether you are seeking immediate spot buyers or long-term contract farming agreements, our team acts as your dedicated B2B bridge. Need immediate sales assistance? Check our{" "}
            <Link
              href="/contact"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              contact page
            </Link>{" "}
            to schedule a buyer networking call.
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="marketing-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-blue-500/30 bg-blue-500/[0.04] dark:bg-blue-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="marketing-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Secure Your Sales Pipeline Today
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Speak with our B2B trade specialists to evaluate market demand and establish contract farming ties.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-blue-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20looking%20for%20Mushroom%20Marketing%20and%20Sales%20Support.%20Please%20help%20me%20connect%20with%20buyers."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm bg-blue-600 hover:bg-blue-700"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Connect with Buyers</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Team</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
