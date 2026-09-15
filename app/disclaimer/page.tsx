import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldAlert,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  CheckCircle2,
  BookOpen,
  Calculator,
  Factory,
  Scale,
  ExternalLink,
  FileText,
  Sparkles,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Disclaimer & Transparency Policy | Organic Mushrooms Farm",
  description:
    "Read our Disclaimer & Transparency Policy. We believe in complete honesty and transparency with our community of farmers and agro-entrepreneurs.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/disclaimer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Disclaimer & Transparency Policy | Organic Mushrooms Farm",
    description:
      "Read our Disclaimer & Transparency Policy. We believe in complete honesty and transparency with our community of farmers and agro-entrepreneurs.",
    url: "https://organicmushroomsfarm.com/disclaimer",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Corporate Transparency",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer & Transparency Policy | Organic Mushrooms Farm",
    description:
      "Read our Disclaimer & Transparency Policy. We believe in complete honesty and transparency with our community of farmers and agro-entrepreneurs.",
  },
};

export default function DisclaimerPage() {
  const pageUrl = "https://organicmushroomsfarm.com/disclaimer";
  const publishedDate = "2026-08-12T08:00:00+05:30";
  const modifiedDate = "2026-08-12T08:00:00+05:30";

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
        name: "Disclaimer & Transparency Policy | Organic Mushrooms Farm",
        description:
          "Read our Disclaimer & Transparency Policy. We believe in complete honesty and transparency with our community of farmers and agro-entrepreneurs.",
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
            name: "Disclaimer & Transparency Policy",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "Disclaimer & Transparency Policy | Organic Mushrooms Farm",
        description:
          "Read our Disclaimer & Transparency Policy. We believe in complete honesty and transparency with our community of farmers and agro-entrepreneurs.",
        datePublished: publishedDate,
        dateModified: modifiedDate,
        mainEntityOfPage: {
          "@id": `${pageUrl}#webpage`,
        },
        author: {
          "@type": "Organization",
          name: "Organic Mushroom Farm Editorial Team",
        },
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
    ],
  };

  return (
    <main
      id="disclaimer-policy-article-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[240px] sm:max-w-none">
            Disclaimer Policy
          </li>
        </ol>
      </nav>

      {/* Main Article Container - Compact Editorial Flow Without Artificial Card Boxes */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <header className="mb-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <ShieldAlert className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Transparency &amp; Compliance
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Disclaimer &amp; <span className="gradient-text">Transparency Policy</span>
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            We believe in complete honesty and transparency with our community of farmers, agri-tech partners, and prospective agro-entrepreneurs across India.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 1. Our Commitment to Transparency
            </h2>
            <p className="mb-2">
              Welcome to Organic Mushrooms Farm (a proud brand of Aerotech Engineering Private Limited). We believe in complete honesty and transparency with our nationwide grower network. We have established this digital knowledge platform to share our years of hands-on cultivation experience, scientific standard operating procedures (SOPs), and commercial strategies in mushroom cultivation. However, to set accurate expectations and protect both you and our enterprise, please review this policy thoroughly.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-500" /> 2. Educational and Informational Purpose Only
            </h2>
            <p className="mb-2">
              All the content published across this website—including our technical articles, masterclass modules under our{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                mushroom training programs
              </Link>
              , pasteurization protocols, and{" "}
              <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                commercial farm setup guides
              </Link>
              —is strictly formulated for educational, technical, and informational guidance.
            </p>
            <p className="mb-2">
              While we consistently provide scientifically verified data regarding{" "}
              <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                White Button Mushrooms
              </Link>
              ,{" "}
              <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Oyster Mushrooms
              </Link>
              , and{" "}
              <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Milky Mushrooms
              </Link>
              , commercial agriculture remains a dynamic biological field. We do not make absolute guarantees that every technique will yield identical results without adapting to specific micro-climates, raw materials, and facility conditions.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-emerald-500" /> 3. Earnings, ROI, and Business Profitability Disclaimer
            </h2>
            <p className="mb-2">
              We provide dynamic planning instruments such as our{" "}
              <Link href="/mushroomfarmingcalculators" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                commercial mushroom ROI calculator
              </Link>
              . When interpreting these financial projections, please understand:
            </p>

            <div className="space-y-2 pl-1 mb-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Estimates, Not Guarantees:</strong>
                  {" "}Any revenue projections, operational margins, or return on capital expenditures (CapEx) are estimates based on standard commercial best practices and historical data from our turnkey facilities.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Individual Variance:</strong>
                  {" "}Actual operational profits depend entirely on daily operational rigor, local market wholesale rates, hygiene management, substrate procurement costs, and managerial diligence across your specific region.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Enterprise Risk:</strong>
                  {" "}Like all commercial agricultural businesses, farming carries inherent financial risks. Organic Mushrooms Farm and Aerotech Engineering Private Limited cannot be held liable for commercial losses resulting from market volatility or operational deficiencies.
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Factory className="w-4 h-4 text-emerald-500" /> 4. Agricultural and Biological Variables (The Reality of Farming)
            </h2>
            <p className="mb-2">
              Mushroom cultivation is a delicate, living biological process. Even when utilizing pure-culture, lab-certified{" "}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                F1 hybrid mushroom spawn
              </Link>{" "}
              and engineered climate chambers detailed in our{" "}
              <Link href="/project-specs" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                farm project specifications
              </Link>
              , crop yields remain vulnerable to external variables:
            </p>

            <div className="space-y-2 pl-1 mb-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Seasonal &amp; Ambient Fluctuations:</strong>
                  {" "}Rapid heat spikes, unseasonal dry spells, or extreme relative humidity drops.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Substrate Quality:</strong>
                  {" "}Variations in wheat straw or paddy straw nitrogen content, water salinity, and agricultural gypsum purity.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Biological Hygiene:</strong>
                  {" "}Aseptic spawning discipline is imperative. Lapses in sanitation can invite competitive molds like green mold (Trichoderma harzianum) or Mycogone perniciosa (wet bubble).
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Facility Management:</strong>
                  {" "}Grid power outages impacting refrigeration compressors or inadequate fresh air CO2 flushing during pinning flushes.
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-emerald-500" /> 5. Government Subsidy and Legal Disclaimer
            </h2>
            <p className="mb-2">
              We offer technical guidance and feasibility reports regarding national schemes such as the National Horticulture Board (NHB) or state-level MIDH subsidies across diverse territories outlined in our{" "}
              <Link href="/cities" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                pan-India cities directory
              </Link>
              . However:
            </p>

            <div className="space-y-2 pl-1 mb-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  We operate strictly as agri-engineering consultants and technical facilitators, not certified chartered accountants or legal advisors.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  Official subsidy sanctions, institutional bank loans, and disbursement timelines are strictly under the sole jurisdiction of government committees and lending financial bodies.
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <ExternalLink className="w-4 h-4 text-emerald-500" /> 6. External Links and Third-Party Resources
            </h2>
            <p className="mb-2">
              To enrich your technical understanding, this platform may provide links to institutional university research, vendor equipment portals, or government portals. We do not exercise editorial or security governance over external websites and bear no liability for content on third-party domains.
            </p>
          </section>

          {/* Section 7 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-500" /> 7. Let&apos;s Connect
            </h2>
            <p className="mb-2">
              If you have any questions regarding this Transparency &amp; Compliance Policy, or wish to clarify any technical specifications before initiating your project, reach out directly through our{" "}
              <Link href="/contact" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                online consultation desk
              </Link>
              :
            </p>

            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pl-1 mb-4">
              <div>
                <strong className="text-slate-900 dark:text-white">Company:</strong> Aerotech Engineering Private Limited (Organic Mushrooms Farm)
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Email:</strong>{" "}
                <a href="mailto:support@mushroomtraining.online" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  support@mushroomtraining.online
                </a>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Phone / WhatsApp:</strong>{" "}
                <a href="tel:+919203544140" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  +91 9203544140
                </a>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Headquarters:</strong> Katangi Road, Jabalpur, Madhya Pradesh, India - 483105
              </div>
            </div>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Build a Verified, Profitable Farm Today
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Partner with experienced commercial growers for scientific SOPs, pure-culture spawn, and precision turnkey infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="tel:9203544140"
                className="btn-primary w-full sm:w-auto px-5 py-2 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Call / WhatsApp (+91 9203544140)
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-xs border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Submit Enquiry
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
