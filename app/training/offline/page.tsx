import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Users, Calendar, Clock, ChevronRight, Phone, Mail, CheckCircle2, Sparkles } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Get Hands-On: Why Offline Mushroom Farming Training is the Ultimate Game-Changer",
  description:
    "Learn why physical, offline mushroom farming training is the smartest first investment for your agri-business. Experience a live commercial setup.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/training/offline",
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
    title: "Get Hands-On: Why Offline Mushroom Farming Training is the Ultimate Game-Changer",
    description:
      "Learn why physical, offline mushroom farming training is the smartest first investment for your agri-business. Experience a live commercial setup.",
    url: "https://organicmushroomsfarm.com/training/offline",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Mushroom Training",
  },
  twitter: {
    card: "summary",
    title: "Get Hands-On: Why Offline Mushroom Farming Training is the Ultimate Game-Changer",
    description:
      "Learn why physical, offline mushroom farming training is the smartest first investment for your agri-business. Experience a live commercial setup.",
  },
};

export default function OfflineMushroomTrainingPage() {
  const pageUrl = "https://organicmushroomsfarm.com/training/offline";
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
        name: "Get Hands-On: Why Offline Mushroom Farming Training is the Ultimate Game-Changer",
        description:
          "Learn why physical, offline mushroom farming training is the smartest first investment for your agri-business. Experience a live commercial setup.",
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
            name: "Training",
            item: "https://organicmushroomsfarm.com/training",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Offline Training",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Course",
        "@id": `${pageUrl}#course`,
        name: "Hands-On Practical Mushroom Farm Apprenticeship Workshop",
        description:
          "Intensive on-farm physical training covering substrate preparation, pasteurization tunnels, climate-controlled growing rooms, spawn inoculation, and harvesting.",
        provider: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        educationalCredentialAwarded: "Practical Mushroom Cultivator Certificate",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "onsite",
          location: {
            "@type": "Place",
            name: "Organic Mushroom Farm Central Research Unit",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Katangi Road",
              addressLocality: "Jabalpur",
              addressRegion: "Madhya Pradesh",
              postalCode: "483105",
              addressCountry: "IN",
            },
          },
        },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "Get Hands-On: Why Offline Mushroom Farming Training is the Ultimate Game-Changer",
        description:
          "Learn why physical, offline mushroom farming training is the smartest first investment for your agri-business. Experience a live commercial setup.",
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
      id="offline-mushroom-training-page"
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
          <li>
            <Link href="/training" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Training
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none">
            Offline Training
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
              <Users className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Training &amp; Education
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Get Hands-On: Why Offline Mushroom Farming Training is the{" "}
            <span className="gradient-text">Ultimate Game-Changer</span>
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Our structured{" "}
            <Link href="/training/online" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              online courses
            </Link>{" "}
            are incredible for learning the biological theory and scientific parameters of agriculture from the comfort of your home. But let&apos;s be honest—farming is fundamentally a tactile, hands-on enterprise.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            If you are someone who learns best by doing, or if you plan to commit substantial capital into building a commercial-scale production facility, nothing builds unshakeable operational confidence faster than physical, offline mushroom farming training. Stepping foot onto a functional commercial farm and working alongside master cultivators bridges the gap between reading blueprints and executing a high-margin agri-business.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              1. 100% Practical, Real-World Experience
            </h2>
            <p className="mb-2">
              Reading about substrate pasteurization or spawn inoculation is one thing—doing it with your own hands under commercial supervision is completely different:
            </p>

            <div className="space-y-2 pl-1 mb-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Mastering Substrate Moisture by Touch:</strong>
                  {" "}Learn the classic tactile squeeze-test to verify optimal 65% moisture content in wheat and paddy straw before bag filling.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Aseptic Spawn Mixing &amp; Bagging:</strong>
                  {" "}Handle certified pure-culture{" "}
                  <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    mushroom spawn (seeds)
                  </Link>{" "}
                  correctly, mastering exact seeding ratios (2-2.5%) and bag compaction techniques that prevent anaerobic dead zones.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Spotting Early Contamination Live:</strong>
                  {" "}See early-stage Trichoderma (green mold), cobweb mold, and bacterial blotch firsthand in research chambers so you can eliminate vectors before they endanger your crops.
                </div>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 italic">
              Make your learning mistakes on our trial beds—not on your own commercial farm where minor errors can cost lakhs of rupees.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              2. Experience a Live Commercial Setup
            </h2>
            <p className="mb-2">
              A large-scale commercial operation cannot be fully grasped through phone screens alone. Offline apprenticeships immerse you inside active, high-density cultivation chambers:
            </p>
            <p className="mb-2">
              Walk through insulated PUF panel rooms, inspect high-efficiency micro-fogging arrays, experience fresh air ventilation blowers in action, and examine commercial{" "}
              <Link href="/project-specs" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                pasteurization tunnels and compost yard specifications
              </Link>
              . Observing real temperature drops, relative humidity meters, and airflow currents firsthand gives you the intuition needed to construct your own facility without engineering blunders.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              3. Face-to-Face Mentorship &amp; Grower Networking
            </h2>
            <p className="mb-2">
              Have specific questions about local subsidies, land suitability, or market linkages in your home district? In-person workshops allow you to sit down one-on-one with senior agricultural consultants to review your personalized business blueprints.
            </p>
            <p>
              Furthermore, you will connect with fellow agri-entrepreneurs, progressive farmers, and investors from across India. This network frequently forms regional grower clusters that pool bulk raw materials (straw, bags, spawn) and negotiate higher wholesale rates with vegetable mandi traders and hotel procurement managers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              4. Build Your Confidence Before You Build Your Farm
            </h2>
            <p className="mb-2">
              Don&apos;t just read about the booming mushroom industry—live it. Whether you are aiming to cultivate fast-growing{" "}
              <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Oyster Mushrooms
              </Link>
              , heat-tolerant{" "}
              <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Milky Mushrooms
              </Link>
              , or industrial high-tech{" "}
              <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                White Button Mushrooms
              </Link>
              , an on-farm practical apprenticeship ensures you return home fully equipped to execute with confidence.
            </p>
            <p>
              Explore our comprehensive{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                training hub and upcoming workshop dates
              </Link>{" "}
              or plan your initial setup budget using our{" "}
              <Link href="/mushroomfarmingcalculators" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                mushroom project ROI calculator
              </Link>
              .
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready for Hands-On Offline Training?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Book your seat for our next physical workshop at our Jabalpur central farm or request an on-site commercial farm setup consultation with{" "}
              <strong className="text-slate-900 dark:text-white">Organic Mushrooms Farm</strong>.
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
                <Mail className="w-3.5 h-3.5" /> Book Offline Visit
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
