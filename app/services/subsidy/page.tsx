import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  PackageCheck,
  IndianRupee,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Search,
  FileText,
  Send,
  Banknote,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Government Subsidy for Mushroom Farming India | NHB & MIDH Support",
  description:
    "Get 40-50% subsidy for your mushroom farm setup. Full documentation support for NHB, MIDH, and State Agriculture schemes in India.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services/subsidy",
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
    title: "Government Subsidy for Mushroom Farming India | NHB & MIDH Support",
    description:
      "Get 40-50% subsidy for your mushroom farm setup. Full documentation support for NHB, MIDH, and State Agriculture schemes in India.",
    url: "https://organicmushroomsfarm.com/services/subsidy",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Government Subsidy for Mushroom Farming India | NHB & MIDH Support",
    description:
      "Get 40-50% subsidy for your mushroom farm setup. Full documentation support for NHB, MIDH, and State Agriculture schemes in India.",
  },
};

export default function SubsidyServicePage() {
  const pageUrl = "https://organicmushroomsfarm.com/services/subsidy";

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
        name: "Government Subsidy for Mushroom Farming India | NHB & MIDH Support",
        description:
          "Get 40-50% subsidy for your mushroom farm setup. Full documentation support for NHB, MIDH, and State Agriculture schemes in India.",
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
            name: "Subsidy Support",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Scheme Identification",
      content: "Finding the right NHB or State scheme for your project size.",
      icon: Search,
    },
    {
      title: "DPR Preparation",
      content: "Creating a bankable Detailed Project Report.",
      icon: FileText,
    },
    {
      title: "LOI Application",
      content: "Submitting the Letter of Intent to the agriculture department.",
      icon: Send,
    },
    {
      title: "Subsidy Claim",
      content: "Post-completion inspection and fund release support.",
      icon: Banknote,
    },
  ];

  const materials = [
    "Project DPR",
    "Land Documents",
    "Bank Appraisal Letter",
    "Registration Certificates",
  ];

  const commonMistakes = [
    "Starting construction before getting the LOI/Permission. (Critical)",
    "Inconsistent bills that don't match the project report.",
    "Poor coordination with local agriculture officers.",
  ];

  return (
    <main
      id="subsidy-service-page"
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
            Subsidy Support
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>Subsidy Support</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Mushroom Farming <span className="gradient-text">Government Subsidies</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
            Maximizing Your Investment with Strategic Grant Support
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The Indian government provides significant incentives (40% to 50%) for mushroom units. We handle the complex documentation to ensure your project qualifies.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="subsidy-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-1">
              Documentation Lifecycle
            </div>
            <h2
              id="subsidy-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Subsidy Processing</span>
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
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
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
            aria-labelledby="subsidy-documents-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3
                id="subsidy-documents-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Required Documentation
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
            aria-labelledby="subsidy-pricing-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="subsidy-pricing-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Consulting Fee
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                ₹10,000 - ₹50,000
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Service fee ranges depending on project scale, scheme complexity, and documentation requirements.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Fee structure covers DPR formulation, application tracking, and backend advisory up to final disbursement.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="subsidy-pitfalls-heading"
          className="rounded-2xl p-4 border border-rose-500/30 bg-rose-500/[0.03] dark:bg-rose-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="subsidy-pitfalls-heading"
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
          aria-labelledby="subsidy-strategy-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="subsidy-strategy-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Unlocking Growth with{" "}
            <span className="gradient-text">Central &amp; State Capital Assistance</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            For entrepreneurs looking to invest in large-scale climate-controlled facilities, government subsidies significantly de-risk the initial capital expenditure. Our specialized team helps you navigate the bureaucratic maze of the National Horticulture Board (NHB) and Mission for Integrated Development of Horticulture (MIDH). We ensure your{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial turnkey farm setup
            </Link>{" "}
            meets all regulatory specifications, right down to the thermal efficiency of PUF panels and equipment layout.
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Whether your focus is scaling high-value cultivation or setting up a captive compost facility, a robust Detailed Project Report (DPR) is mandatory. We provide end-to-end{" "}
            <Link
              href="/services/consultancy"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              consultancy support
            </Link>{" "}
            to draft your DPR, aligning it with local banking and subsidy norms. Operating from our central compliance desk in{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>
            , we track your LOI application directly through the agriculture portals. Ready to evaluate your project&apos;s eligibility? You can book a direct session with our experts via the{" "}
            <Link
              href="/book-consultant"
              className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
            >
              consultant booking page
            </Link>{" "}
            or reach out to our team directly through our{" "}
            <Link
              href="/contact"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              contact page
            </Link>.
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="subsidy-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-amber-500/30 bg-amber-500/[0.04] dark:bg-amber-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="subsidy-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Check Your Subsidy Eligibility Today
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Speak with our documentation experts to draft your DPR and initiate the NHB/MIDH LOI process.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-amber-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20looking%20for%20Mushroom%20Farming%20Subsidy%20and%20DPR%20support.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm bg-amber-600 hover:bg-amber-700 text-white border-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss Subsidy</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request DPR</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
