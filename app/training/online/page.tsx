import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Laptop, Calendar, Clock, ChevronRight, Phone, Mail, CheckCircle2, Sparkles } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Master Mushroom Farming from Anywhere: Join the Ultimate Online Training",
  description:
    "Learn the precise science of mushroom farming from the comfort of your home with a structured, expert-led online cultivation program.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/training/online",
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
    title: "Master Mushroom Farming from Anywhere: Join the Ultimate Online Training",
    description:
      "Learn the precise science of mushroom farming from the comfort of your home with a structured, expert-led online cultivation program.",
    url: "https://organicmushroomsfarm.com/training/online",
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
    title: "Master Mushroom Farming from Anywhere: Join the Ultimate Online Training",
    description:
      "Learn the precise science of mushroom farming from the comfort of your home with a structured, expert-led online cultivation program.",
  },
};

export default function OnlineMushroomTrainingPage() {
  const pageUrl = "https://organicmushroomsfarm.com/training/online";
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
        name: "Master Mushroom Farming from Anywhere: Join the Ultimate Online Training",
        description:
          "Learn the precise science of mushroom farming from the comfort of your home with a structured, expert-led online cultivation program.",
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
            name: "Online Training",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Course",
        "@id": `${pageUrl}#course`,
        name: "Commercial Mushroom Cultivation Online Certification Course",
        description:
          "Comprehensive online training covering Oyster, Button, and Milky mushroom cultivation techniques, substrate pasteurization, spawn management, and commercial marketing.",
        provider: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        educationalCredentialAwarded: "Certificate of Completion",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT10H",
        },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "Master Mushroom Farming from Anywhere: Join the Ultimate Online Training",
        description:
          "Learn the precise science of mushroom farming from the comfort of your home with a structured, expert-led online cultivation program.",
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
      id="online-mushroom-training-page"
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
            Online Training
          </li>
        </ol>
      </nav>

      {/* Main Article Container - Compact Editorial Flow Without Artificial Card Boxes */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <header className="mb-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping inline-block" />
              <Laptop className="w-3 h-3 text-blue-600 dark:text-blue-400" /> Training &amp; Education
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Master Mushroom Farming from Anywhere:{" "}
            <span className="gradient-text">Join the Ultimate Online Training</span>
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            So, you have heard about the incredible profits in commercial mushroom cultivation, and you are ready to start your own agri-business. That is fantastic! But before you buy your first bag of substrate or build a costly shed, there is one crucial step you cannot skip: getting the right education.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Mushroom farming is not like growing standard vegetables in an open field. It is a precise biological science that requires strict hygiene, microclimate management, and biological understanding. Relying on scattered internet videos or costly trial-and-error is the fastest way to lose your initial investment to contamination, green mold, and poor yields.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              Why Choose Online Cultivation Training?
            </h2>
            <p className="mb-2">
              Historically, learning to grow mushrooms meant traveling hundreds of miles to attend rushed 2-day physical workshops, spending heavily on hotel accommodation and travel logistics. Today, our structured digital cultivation hub brings the master commercial farm directly to your screen:
            </p>

            <div className="space-y-2 pl-1 mb-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Learn at Your Own Pace:</strong>
                  {" "}Whether you are a full-time working professional, an ambitious college student, or a busy progressive farmer, you can absorb curriculum modules whenever your schedule allows, reviewing complex sterilization processes as many times as needed.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Step-by-Step Practical Curriculum:</strong>
                  {" "}From substrate hydration and chemical or steam pasteurization to aseptic spawn mixing, dark incubation, and pinhead initiation, every milestone is covered chronologically with practical video demonstrations.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Exceptional Cost Efficiency:</strong>
                  {" "}Save thousands in travel expenses while gaining direct access to verified commercial blueprints, pest prevention protocols, and interactive lifetime mentorship support.
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              What You Will Actually Master
            </h2>
            <p className="mb-2">
              A high-yielding mushroom farm requires much more than simply inoculating straw bags. Our comprehensive online syllabus transforms passionate enthusiasts into commercial growers:
            </p>

            <div className="space-y-2 pl-1 mb-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Optimal Variety Selection:</strong>
                  {" "}Understand the distinct temperature and humidity windows for high-margin{" "}
                  <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    Oyster Mushrooms
                  </Link>
                  , heat-loving{" "}
                  <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    Milky Mushrooms
                  </Link>
                  , and industrial-scale{" "}
                  <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    White Button Mushrooms
                  </Link>
                  .
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Contamination &amp; Pest Defense:</strong>
                  {" "}Learn how to identify and neutralize green mold (Trichoderma), sciarid flies, phorid gnats, and bacterial blotch before they impact your biological efficiency.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Facility Layout &amp; Climate Control:</strong>
                  {" "}Design budget-friendly vertical rack arrays and ventilation ducting using our detailed{" "}
                  <Link href="/project-specs" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    commercial project specifications
                  </Link>
                  .
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Harvesting &amp; Market Distribution:</strong>
                  {" "}Master post-harvest grading, moisture barrier packaging, and local B2B sales strategies to maximize wholesale and retail profitability.
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              Stop Guessing, Start Growing
            </h2>
            <p className="mb-2">
              Do not let a lack of experience hold you back from entering one of the fastest-growing agricultural sectors in India. By learning the precise science, acquiring certified pure-culture{" "}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                lab spawn seeds
              </Link>
              , and calculating your returns on our{" "}
              <Link href="/mushroomfarmingcalculators" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                commercial ROI calculator
              </Link>
              , you can launch your farm with complete confidence.
            </p>
            <p>
              Join thousands of successful growers across India who have transformed their idle spaces into thriving mushroom enterprises through our dedicated{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                mushroom training courses
              </Link>
              .
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to Master Mushroom Farming?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Enroll in our ₹299 or ₹699 structured online certification courses or get in touch for custom commercial setup mentorship from{" "}
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
                <Mail className="w-3.5 h-3.5" /> Contact Us Online
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
