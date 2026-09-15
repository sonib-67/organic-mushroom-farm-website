import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Info,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  IndianRupee,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Compass,
  FileText,
  Building,
  Activity,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Training Online & Offline | Professional Farm Setup",
  description:
    "Join our mushroom farming training online or offline. Get expert consultancy for complete mushroom setup, ROI analysis, and clinical production SOPs India-wide.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services/consultancy",
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
    title: "Mushroom Farming Training Online & Offline | Professional Farm Setup",
    description:
      "Join our mushroom farming training online or offline. Get expert consultancy for complete mushroom setup, ROI analysis, and clinical production SOPs India-wide.",
    url: "https://organicmushroomsfarm.com/services/consultancy",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Training Online & Offline | Professional Farm Setup",
    description:
      "Join our mushroom farming training online or offline. Get expert consultancy for complete mushroom setup, ROI analysis, and clinical production SOPs India-wide.",
  },
};

export default function ConsultancyServicePage() {
  const pageUrl = "https://organicmushroomsfarm.com/services/consultancy";

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
        name: "Mushroom Farming Training Online & Offline | Professional Farm Setup",
        description:
          "Join our mushroom farming training online or offline. Get expert consultancy for complete mushroom setup, ROI analysis, and clinical production SOPs India-wide.",
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
            name: "Consultancy",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const steps = [
    {
      title: "Site Inspection",
      content: "Evaluating land, water quality, and power availability.",
      icon: Compass,
    },
    {
      title: "Project Report",
      content: "Detailed DPR for bank loans and government subsidies.",
      icon: FileText,
    },
    {
      title: "Infrastructure Guidance",
      content: "Supervising the construction of grow rooms and insulation.",
      icon: Building,
    },
    {
      title: "Crop Management",
      content: "On-call and site-visit support during the first 3 cycles.",
      icon: Activity,
    },
  ];

  const materials = [
    "Technical Layouts",
    "DPR Templates",
    "Climate Control Specs",
    "ROI Sheets",
  ];

  const commonMistakes = [
    "Attempting setup without environmental data.",
    "Undersizing AC/Climate systems to save initial costs.",
    "Ignoring local market demand before choosing mushroom type.",
  ];

  return (
    <main
      id="consultancy-service-page"
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
            Consultancy
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-2.5">
            <Info className="w-3.5 h-3.5 text-emerald-500" />
            <span>Consultancy</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Technical Mushroom Farm{" "}
            <span className="gradient-text">Consultancy</span>
          </h1>

          <h2 className="text-sm sm:text-base font-semibold text-purple-700 dark:text-purple-300 mb-2">
            Bridging the Gap Between Concept and Commercial Success
          </h2>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Avoid costly errors with our expert consultancy. We provide layouts,
            climate control specs, and operational mentorship tailored to your
            location.
          </p>
        </header>

        {/* Section 1: 4-Step SOP Evolution */}
        <section aria-labelledby="consultancy-sop-heading" className="space-y-2.5">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 mb-1">
              Advisory Lifecycle
            </div>
            <h2
              id="consultancy-sop-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Step-by-Step <span className="gradient-text">Consultancy Evolution</span>
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
            aria-labelledby="consultancy-deliverables-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <h3
                id="consultancy-deliverables-heading"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
              >
                Required Assets &amp; Deliverables
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
            aria-labelledby="consultancy-pricing-heading"
            className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between space-y-2.5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <h3
                  id="consultancy-pricing-heading"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  Cost Estimation
                </h3>
              </div>

              <div className="text-base sm:text-lg font-black gradient-text mb-1">
                From ₹25,000 Onwards
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Starting from ₹25,000 for basic technical advisory to project-percentage based turnkey fees.
              </p>
            </div>

            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-200/50 dark:border-white/5">
              *Estimates are indicative and vary based on project scale, geographical location, and scope of site supervision.
            </p>
          </section>
        </div>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section
          aria-labelledby="consultancy-pitfalls-heading"
          className="rounded-2xl p-4 border border-amber-500/30 bg-amber-500/[0.03] dark:bg-amber-500/[0.02] backdrop-blur-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3
              id="consultancy-pitfalls-heading"
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
          aria-labelledby="consultancy-advisory-specs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="consultancy-advisory-specs-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Engineering Profitable Commercial Projects Through{" "}
            <span className="gradient-text">Expert Agronomy Mentorship</span>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Commercial mushroom cultivation is an environmental engineering science where micro-variations in temperature, carbon dioxide, and air velocity dictate profit margins. Our comprehensive{" "}
            <Link
              href="/book-consultant"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              commercial mushroom consultancy
            </Link>{" "}
            begins with regional climate auditing, ensuring your HVAC compressors and PUF panels are sized accurately for industrial{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              button mushroom farming
            </Link>{" "}
            or tropical{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              oyster mushroom production
            </Link>
            .
          </p>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            We provide verified bankable DPRs (Detailed Project Reports) to help you unlock 40% to 50% capital subsidies via NHB and MIDH schemes. Integrate your project with our complete{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              commercial turnkey farm setup
            </Link>
            , source high-purity cultures from our{" "}
            <Link
              href="/services/spawn-supply"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              organic spawn supply
            </Link>
            , or visit our demonstration chambers on Katangi Road,{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Jabalpur
            </Link>
            , by attending our practical{" "}
            <Link
              href="/training"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              mushroom training courses
            </Link>
            .
          </p>
        </section>

        {/* Section 5: Direct Fast Action Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="consultancy-inquiry-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="consultancy-inquiry-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Book an Agronomy &amp; Setup Consultation
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              We provide mushroom farming training and technical advisory across all states of India. Let&apos;s build your success story.
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
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Technical%20Mushroom%20Farm%20Consultancy.%20Please%20provide%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Consult an Expert</span>
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
