import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { MessageSquare, Calendar, Clock, ChevronRight, Phone, Mail, CheckCircle2, Sparkles } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Take the First Step Towards a Profitable Mushroom Farm Today!",
  description:
    "Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, and turnkey setup.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/contact-form",
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
    title: "Take the First Step Towards a Profitable Mushroom Farm Today! 🍄",
    description:
      "Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, and turnkey setup.",
    url: "https://organicmushroomsfarm.com/contact-form",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Agribusiness Consultation",
  },
  twitter: {
    card: "summary",
    title: "Take the First Step Towards a Profitable Mushroom Farm Today! 🍄",
    description:
      "Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, and turnkey setup.",
  },
};

export default function ArticleContactFormPage() {
  const pageUrl = "https://organicmushroomsfarm.com/contact-form";
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
        name: "Take the First Step Towards a Profitable Mushroom Farm Today!",
        description:
          "Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, and turnkey setup.",
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
            name: "Contact Form Consultation",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "Take the First Step Towards a Profitable Mushroom Farm Today!",
        description:
          "Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, and turnkey setup.",
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
      id="contact-form-consultation-article-page"
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
            Expert Consultation Guide
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
              <MessageSquare className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Expert Consultation
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 4 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Take the First Step Towards a{" "}
            <span className="gradient-text">Profitable Mushroom Farm Today!</span> 🍄
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Starting a commercial mushroom farming business is one of the most lucrative and rewarding decisions you can make in modern Indian agriculture. With minimal land requirements, vertical stacking, lightning-fast 25-day crop turnover, and booming dietary demand, the commercial opportunities are virtually limitless.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            However, commercial success does not happen by accident. Fungi cultivation is an exact biological discipline requiring strict hygiene, climate precision, and pure genetic spawn. Whether you are planning a modest 500-bag home setup or an industrial-scale 10,000-bag climate-controlled unit, our seasoned agri-tech specialists provide end-to-end guidance.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              Why Guess When You Can Consult the Experts?
            </h2>
            <p className="mb-2">
              The primary hurdle for aspiring growers is not just harvesting a single batch of mushrooms—it is producing consistent, contamination-free yields month after month at a profitable scale. Relying on random, fragmented social media clips frequently leads to catastrophic mold outbreaks, improper humidity, and substantial financial losses.
            </p>
            <p className="mb-2">
              When you connect directly with our technical consultation desk, you receive actionable, location-specific expertise:
            </p>

            <div className="space-y-2 pl-1 mb-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Customized Species Selection:</strong>
                  {" "}Identifying whether your local climate and seasonal temperature cycle favors{" "}
                  <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    Oyster Mushrooms
                  </Link>
                  , heat-loving{" "}
                  <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    Milky Mushrooms
                  </Link>
                  , or high-margin{" "}
                  <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    White Button Mushrooms
                  </Link>
                  .
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Capital Expenditure Optimization:</strong>
                  {" "}Designing insulated growing sheds, airflow systems, and vertical racks with minimal initial CapEx, avoiding unnecessary machinery costs.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Contamination Defense Protocols:</strong>
                  {" "}Implementing strict chemical sterilization and steam pasteurization SOPs to safeguard against aggressive green mold (Trichoderma) and bacterial blotch.
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              Everything You Need Under One Roof
            </h2>
            <p className="mb-2">
              We provide an integrated, full-stack ecosystem designed to support your enterprise from initial conception to commercial market off-take:
            </p>

            <div className="space-y-2 pl-1 mb-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Professional Cultivation Training:</strong>
                  {" "}Practical, hands-on masterclasses and flexible modules accessible through our{" "}
                  <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    national mushroom training programs
                  </Link>
                  .
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Pure-Culture Certified Spawn:</strong>
                  {" "}First-generation, high-vigor mycelium spawn delivered reliably via our{" "}
                  <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    laboratory spawn supply division
                  </Link>
                  .
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Turnkey Farm Infrastructure:</strong>
                  {" "}Customized commercial facility engineering, 2000-bag tunnels, and PUF panel chambers detailed in our{" "}
                  <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    turnkey commercial setup
                  </Link>{" "}
                  and{" "}
                  <Link href="/project-specs" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    project specifications
                  </Link>
                  .
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">ROI &amp; Market Distribution:</strong>
                  {" "}Forecast your exact investment, operating cash flow, and payback horizon using our{" "}
                  <Link href="/mushroomfarmingcalculators" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    commercial mushroom ROI calculator
                  </Link>{" "}
                  or explore regional city strategies across our{" "}
                  <Link href="/cities" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    all-India cities guide
                  </Link>
                  .
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              Let&apos;s Build Your Commercial Farm Together
            </h2>
            <p className="mb-2">
              Do not let uncertainty delay your entrepreneurial ambition. Whether you have questions regarding land suitability, government subsidy eligibility, or climate control machinery, our agronomy desk is ready to assist.
            </p>
            <p>
              Submit your project details via our direct{" "}
              <Link href="/contact" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                online consultation form
              </Link>{" "}
              or connect directly with our chief technical officer below.
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to Speak with an Agri-Tech Expert?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Schedule a one-on-one commercial feasibility call or request an itemized quotation for your farm project with{" "}
              <strong className="text-slate-900 dark:text-white">Organic Mushrooms Farm</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="tel:9203544140"
                className="btn-primary w-full sm:w-auto px-5 py-2 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Direct Call / WhatsApp (+91 9203544140)
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-xs border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Fill Consultation Form
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
