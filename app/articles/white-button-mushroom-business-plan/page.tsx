import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  TrendingUp,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  Sprout,
  Target,
  BarChart3,
  Layers,
  Award,
  AlertTriangle,
  Lightbulb,
  Building,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Business Plan India | Cost, Profit & Startup Guide",
  description:
    "Start a profitable white button mushroom business. Explore comprehensive EPC setup costs, infrastructure needs, marketing tips, and complete ROI estimates.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/articles/white-button-mushroom-business-plan",
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
    title:
      "Mushroom Farming Business Plan India: Cost, Profit & Complete Startup Roadmap 🍄",
    description:
      "Start a profitable white button mushroom business. Explore comprehensive EPC setup costs, infrastructure needs, marketing tips, and complete ROI estimates.",
    url: "https://organicmushroomsfarm.com/articles/white-button-mushroom-business-plan",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Business Plan Guide",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Farming Business Plan India: Cost, Profit & Complete Startup Roadmap 🍄",
    description:
      "Start a profitable white button mushroom business. Explore comprehensive EPC setup costs, infrastructure needs, marketing tips, and complete ROI estimates.",
  },
};

export default function ArticleWhiteButtonBusinessPlanPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/articles/white-button-mushroom-business-plan";
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
        name: "Mushroom Farming Business Plan India | Cost, Profit & Startup Guide",
        description:
          "Start a profitable white button mushroom business. Explore comprehensive EPC setup costs, infrastructure needs, marketing tips, and complete ROI estimates.",
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
            name: "Articles",
            item: "https://organicmushroomsfarm.com/articles",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Business Plan India",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Mushroom Farming Business Plan India: Cost, Profit & Startup Guide",
        description:
          "Start a profitable white button mushroom business. Explore comprehensive EPC setup costs, infrastructure needs, marketing tips, and complete ROI estimates.",
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
      id="business-plan-article-page"
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
            <span className="text-slate-500 dark:text-slate-400">Articles</span>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none">
            Business Plan Guide
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
              <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Business Plan Guide
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 8 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Mushroom Farming Business Plan India: <span className="gradient-text">Cost, Profit &amp; Complete Startup Guide</span> 🍄
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            A comprehensive, step-by-step roadmap to building a highly profitable commercial mushroom enterprise in India.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Mushroom cultivation in India is experiencing exponential growth, transitioning from traditional cottage farming into high-yielding commercial agribusiness. With surging demand for fresh, organic protein and medicinal fungi across metropolitan hubs, establishing an indoor mushroom farm offers high return on investment (ROI), rapid crop rotation cycles, and year-round revenue potential.
          </p>
          <p>
            Yet, why do many aspiring mushroom growers fail to hit their financial projections? The answer almost always lies in the lack of a structured business plan. Commercial mushroom farming is 50% biological cultivation and 50% strategic supply chain execution.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              What Is a Mushroom Farming Business Plan?
            </h2>
            <p className="mb-2">
              A mushroom farming business plan is your operational and financial blueprint. It outlines capital requirements (CapEx), operating expenses (OpEx), targeted species, production cycles, disease management protocols, distribution channels, and realistic revenue horizons.
            </p>
          </section>

          {/* Section 2: Species Comparison Table */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Step 1: Choose the Right Mushroom Variety
            </h2>
            <p className="mb-2">
              Before pouring capital into construction, select the species that matches your local climate, budget, and market access:
            </p>
            <div className="overflow-x-auto my-2">
              <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-lg">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                  <tr>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Mushroom Variety</th>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Ideal Temp</th>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Market Demand</th>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Suitability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="p-2 font-medium">
                      <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                        Oyster Mushroom (ढींगरी)
                      </Link>
                    </td>
                    <td className="p-2">20°C - 30°C</td>
                    <td className="p-2">High (Fresh &amp; Dry)</td>
                    <td className="p-2 text-emerald-600 dark:text-emerald-400 font-semibold">Beginner &amp; Low Budget</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">
                      <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                        Milky Mushroom (दूधिया)
                      </Link>
                    </td>
                    <td className="p-2">25°C - 35°C</td>
                    <td className="p-2">Good (Summer Crop)</td>
                    <td className="p-2">Tropical Climates</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">
                      <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                        White Button Mushroom
                      </Link>
                    </td>
                    <td className="p-2">15°C - 18°C</td>
                    <td className="p-2">Massive (Retail &amp; Horeca)</td>
                    <td className="p-2 font-semibold">Commercial HVAC Setup</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Shiitake &amp; Lion&apos;s Mane</td>
                    <td className="p-2">18°C - 24°C</td>
                    <td className="p-2">Premium Gourmet</td>
                    <td className="p-2">Specialty Growers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              * Pro Tip: Beginners should begin with Oyster cultivation to master sterilization and environmental controls before investing heavily into automated HVAC Button setups.
            </p>
          </section>

          {/* Section 3: Farm Setup */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Step 2: Plan Your Mushroom Farm Setup &amp; Facility Layout
            </h2>
            <div className="space-y-2 mt-2 mb-2 pl-2">
              <div className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Vertical Rack Systems:</strong> Utilize vertical space with multi-tier galvanized iron (GI) or bamboo racks to multiply growing square footage by 4x to 5x.
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Air Ventilation &amp; CO2 Scrubbing:</strong> Mushrooms exhale CO2 and require fresh O2 during pinning. Maintain high-volume fresh air exchange fans.
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Microclimate Controls:</strong> Ultrasonic humidifiers maintaining 85–90% relative humidity (RH) without waterlogging delicate caps.
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Training & Spawn Quality */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Step 3 &amp; 4: Professional Training &amp; High-Quality Spawn
            </h2>
            <p className="mb-2">
              Do not rely on trial-and-error YouTube videos when launching a commercial setup. Enrolling in comprehensive{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                practical mushroom training courses
              </Link>{" "}
              covers substrate sterilization biochemistry, casing layer preparation, and pest control protocols.
            </p>
            <p className="mb-2">
              Similarly, spawn is the genetic backbone of your harvest. Always source certified first-generation{" "}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                lab-tested mushroom spawn
              </Link>{" "}
              free from green mold contamination to safeguard your production capacity.
            </p>
          </section>

          {/* Section 5: Multiple Streams of Income */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Step 5: Create Multiple Streams of Income
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 my-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">Fresh Retail Sales:</strong> Daily supply to local vegetable mandis, high-end groceries, and apartment clusters.</div>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">Sun-Dried Mushrooms:</strong> Dehydrated Oyster mushrooms selling for ₹600–₹1,000/kg with 6+ months shelf life.</div>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">Value-Added Products:</strong> Mushroom pickles, protein soup powders, papad, and health supplements.</div>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">B2B Institutional Orders:</strong> Long-term recurring contracts with banquet halls, restaurants, and hotels.</div>
              </div>
            </div>
          </section>

          {/* Section 6: Turnkey Setup & Consultancy */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Step 6 &amp; 7: Marketing Systems &amp; Turnkey Consultancy
            </h2>
            <p className="mb-2">
              Register with FSSAI, brand your packaging professionally, and implement B2B advance booking. If you are setting up large-scale commercial button mushroom facilities or automated compost pasteurization units, hiring professional EPC consultants for a{" "}
              <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                turnkey commercial farm setup
              </Link>{" "}
              saves lakhs in structural design mistakes and ensures compliance with NHB and PMFME government subsidies (20% to 50% project aid).
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Need a Customized Business Plan &amp; Project Report?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Connect with our agricultural engineers for complete bankable DPRs, government subsidy assistance, spawn supply, and turnkey execution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="tel:9203544140"
                className="btn-primary w-full sm:w-auto px-5 py-2 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Call / WhatsApp: +91 9203544140
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-xs border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Book Consultation
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
