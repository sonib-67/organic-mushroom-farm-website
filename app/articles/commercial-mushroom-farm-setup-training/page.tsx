import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Building,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  Sprout,
  HelpCircle,
  ArrowLeft,
  CheckCircle2,
  Info,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Commercial Mushroom Farm Setup & Training: A Complete Guide",
  description:
    "Learn how to start a commercial mushroom farm. Detailed guide on AC & non-AC setup, oyster, milky, shiitake cultivation, and mushroom training.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/articles/commercial-mushroom-farm-setup-training",
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
      "Commercial Mushroom Farm Setup & Training: A Complete Guide to All Varieties 🍄",
    description:
      "Learn how to start a commercial mushroom farm. Detailed guide on AC & non-AC setup, oyster, milky, shiitake cultivation, and mushroom training.",
    url: "https://organicmushroomsfarm.com/articles/commercial-mushroom-farm-setup-training",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-07-29T08:00:00+05:30",
    modifiedTime: "2026-07-29T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Commercial Farm Setup",
  },
  twitter: {
    card: "summary",
    title:
      "Commercial Mushroom Farm Setup & Training: A Complete Guide to All Varieties 🍄",
    description:
      "Learn how to start a commercial mushroom farm. Detailed guide on AC & non-AC setup, oyster, milky, shiitake cultivation, and mushroom training.",
  },
};

export default function ArticleCommercialSetupTrainingPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/articles/commercial-mushroom-farm-setup-training";
  const publishedDate = "2026-07-29T08:00:00+05:30";
  const modifiedDate = "2026-07-29T08:00:00+05:30";

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
        name: "Commercial Mushroom Farm Setup & Training: A Complete Guide",
        description:
          "Learn how to start a commercial mushroom farm. Detailed guide on AC & non-AC setup, oyster, milky, shiitake cultivation, and mushroom training.",
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
            item: "https://organicmushroomsfarm.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Commercial Setup & Training",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Commercial Mushroom Farm Setup & Training: A Complete Guide to All Varieties",
        description:
          "Learn how to start a commercial mushroom farm. Detailed guide on AC & non-AC setup, oyster, milky, shiitake cultivation, and mushroom training.",
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
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the minimum space required for a commercial mushroom farm setup?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can start a small-scale oyster or milky mushroom unit in a 10x10 ft spare room. Commercial operations generally require at least 1,000 to 2,000 sq. ft. for a continuous harvest cycle.",
            },
          },
          {
            "@type": "Question",
            name: "Can I grow mushrooms without an air conditioner?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Seasonal varieties like Oyster (winter/monsoon) and Milky/Paddy Straw (summer) can be grown naturally in ambient climate conditions without AC units.",
            },
          },
          {
            "@type": "Question",
            name: "How do I prevent contamination in my growing room?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Maintain strict sanitation protocols: disinfect footwear before entry, spray 70% isopropyl alcohol on hands/tools, ensure proper air filtration, and remove any contaminated bags immediately.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main
      id="commercial-setup-training-article-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2"
      >
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
              href="/blog"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Blog
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none"
          >
            Commercial Setup &amp; Training
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
              <Building className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Farm Setup &amp; Training
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> July 29, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 8 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Commercial Mushroom Farm Setup &amp; Training: <span className="gradient-text">A Complete Guide to All Varieties</span> 🍄
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Starting a commercial mushroom venture requires more than just passion; it demands technical know-how, precise climate control, and practical training. Whether you want to set up an{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              AC room mushroom farming setup
            </Link>{" "}
            or a budget-friendly non-AC mushroom farming unit, understanding the mechanics of cultivation and selecting the right variety can make or break your profit margins.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            This detailed handbook covers everything from how to start a commercial mushroom farm to choosing the{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              best mushroom training institute
            </Link>{" "}
            and mastering the cultivation of premium species.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-emerald-500" /> Step-by-Step Commercial Mushroom Farm Setup
            </h2>
            <p className="mb-2">
              Building an efficient growing facility involves controlling temperature, relative humidity, light, and fresh air exchange (CO2 levels). Here is how a standard{" "}
              <Link
                href="/services/turnkey-setup"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                commercial mushroom farming
              </Link>{" "}
              unit is structured:
            </p>

            <div className="space-y-2 mt-2 mb-2 pl-2">
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">1. Growing Chamber Construction:</strong>
                <ul className="list-disc list-inside space-y-1 mt-1 pl-1">
                  <li><strong className="text-slate-900 dark:text-white">Insulation:</strong> Use PUF panels or bamboo structures with double-layer dark polythene sheets to maintain ambient temperatures.</li>
                  <li><strong className="text-slate-900 dark:text-white">Climate Control:</strong> For year-round production of delicate species, an AC room mushroom farming setup is ideal. For seasonal growers, shade nets and thatched huts provide cost-effective insulation.</li>
                  <li><strong className="text-slate-900 dark:text-white">Racking System:</strong> Vertical GI pipe or bamboo racks maximize vertical space, increasing yield per square foot.</li>
                </ul>
              </div>

              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">2. Substrate Preparation &amp; Sterilization Area:</strong>
                <p className="mt-0.5 mb-1">Substrates vary depending on the variety—wheat straw, paddy straw, sawdust, or sugarcane bagasse.</p>
                <ul className="list-disc list-inside space-y-1 pl-1">
                  <li><strong className="text-slate-900 dark:text-white">Steam Sterilization Chamber:</strong> Kills unwanted bacteria and competitor molds.</li>
                  <li><strong className="text-slate-900 dark:text-white">Autoclave &amp; Laminar Flow Hood:</strong> Crucial for pure culture work and{" "}
                    <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                      paddy straw mushroom spawn making
                    </Link>{" "}
                    or lab-scale inoculation.
                  </li>
                </ul>
              </div>

              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">3. Incubation and Fruiting Rooms:</strong>
                <ul className="list-disc list-inside space-y-1 mt-1 pl-1">
                  <li><strong className="text-slate-900 dark:text-white">Dark Room (Incubation):</strong> Maintained at higher CO2 levels and complete darkness for fast mycelium run.</li>
                  <li><strong className="text-slate-900 dark:text-white">Fruiting Chamber:</strong> Equipped with high-pressure foggers or humidifiers (85%–95% RH) and fresh air intake fans.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Sprout className="w-4 h-4 text-emerald-500" /> Exploring Profitable Mushroom Varieties to Cultivate
            </h2>
            <p className="mb-2">
              Diversifying your crop ensures steady revenue throughout the year. Here is a breakdown of the most popular and lucrative mushroom varieties:
            </p>

            <div className="space-y-2 mt-2 mb-2 pl-2">
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">
                  1.{" "}
                  <Link
                    href="/services/oyster-mushroom"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Oyster Mushroom (Pleurotus Ostreatus)
                  </Link>
                  :
                </strong>
                Difficulty: Beginner-friendly | Substrate: Wheat straw, paddy straw, or cotton waste | Why Grow It: Fast growth cycle (21–25 days) and high biological efficiency.{" "}
                <Link
                  href="/services/oyster-mushroom"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Oyster mushroom cultivation
                </Link>{" "}
                requires minimal infrastructure and yields high returns.
              </div>

              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">
                  2.{" "}
                  <Link
                    href="/services/milky-mushroom"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Milky Mushroom (Calocybe Indica)
                  </Link>
                  :
                </strong>
                Difficulty: Intermediate | Substrate: Sterilized paddy straw with casing layer | Why Grow It: Thrives in hot tropical climates (30°C–38°C) with a remarkably long shelf life, making{" "}
                <Link
                  href="/services/milky-mushroom"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  milky mushroom farming
                </Link>{" "}
                perfect for summer production.
              </div>

              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">
                  3. Shiitake Mushroom (Lentinula Edodes):
                </strong>
                Difficulty: Advanced | Substrate: Hardwood sawdust blocks supplemented with wheat bran | Why Grow It: High market value and medicinal properties. Mastering shiitake mushroom cultivation at home or in controlled blocks opens doors to gourmet restaurants and export markets.
              </div>

              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">
                  4. Reishi / Ganoderma (Ganoderma Lucidum):
                </strong>
                Difficulty: Advanced (Medicinal) | Substrate: Hardwood sawdust bags | Why Grow It: Highly prized in nutraceuticals and herbal teas. The ganoderma reishi mushroom farming process requires strict sterility and extended incubation times.
              </div>

              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">
                  5. Paddy Straw Mushroom (Volvariella Volvacea):
                </strong>
                Difficulty: Intermediate | Substrate: Fresh paddy straw bundles | Why Grow It: Extremely rapid cropping cycle (harvestable in 10–12 days from spawning) suitable for high-temperature regions.
              </div>

              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">
                  6. King Oyster &amp; Enoki Mushrooms:
                </strong>
                Difficulty: Expert | Substrate: Specialized sawdust formulations in bottles/bags | Why Grow It: Exotic varieties command high retail prices in supermarkets and fine-dining establishments due to their meaty texture and unique appearance.
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-emerald-500" /> Why Professional Mushroom Cultivation Training Matters
            </h2>
            <p className="mb-2">
              Many setup failures stem from improper sterilization or poor spawn quality. Enrolling in a comprehensive{" "}
              <Link
                href="/training"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                mushroom cultivation training
              </Link>{" "}
              program helps you avoid costly beginner mistakes.
            </p>
            <p className="mb-1">A practical training course covers:</p>
            <ol className="space-y-1.5 mt-1 mb-2 pl-2 list-decimal list-inside">
              <li><strong className="text-slate-900 dark:text-white">Pure Spawn Culture Production:</strong> Learning how to clone tissue and prepare grain spawn using a laminar flow hood.</li>
              <li><strong className="text-slate-900 dark:text-white">Substrate Chemistry:</strong> Balancing C:N ratios and moisture content.</li>
              <li><strong className="text-slate-900 dark:text-white">Disease Management:</strong> Identifying early contamination and controlling green mold without harmful chemicals.</li>
              <li><strong className="text-slate-900 dark:text-white">Harvesting &amp; Post-Harvest Processing:</strong> Dehydration, vacuum packaging, and value-added product creation.</li>
            </ol>
            <p>
              When evaluating options, search for certified institutes or practical farm-based programs that offer hands-on laboratory experience rather than theoretical lectures alone.
            </p>
          </section>

          {/* Section 4: Equipment & Cost Breakdown */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Essential Equipment &amp; Cost Breakdown
            </h2>
            <p className="mb-2">
              Calculating the{" "}
              <Link
                href="/articles/white-button-mushroom-business-plan"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                cost of mushroom farm setup in india
              </Link>{" "}
              depends on scale and automation level:
            </p>

            <div className="overflow-x-auto my-2">
              <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-lg">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                  <tr>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Equipment / Facility</th>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Small-Scale / Seasonal</th>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Medium-Scale Commercial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="p-2 font-medium">Structure</td>
                    <td className="p-2">Bamboo / Thatched Hut</td>
                    <td className="p-2">PUF Panel / Civil AC Rooms</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Climate Control</td>
                    <td className="p-2">Desert Coolers &amp; Sprinklers</td>
                    <td className="p-2">Industrial Chillers &amp; AHUs</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Sterilization</td>
                    <td className="p-2">Hot Water Drum / Boiler</td>
                    <td className="p-2">Commercial Steam Autoclave</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Humidity System</td>
                    <td className="p-2">Manual Spraying / Nozzles</td>
                    <td className="p-2">Ultrasonic Foggers / Controllers</td>
                  </tr>
                  <tr className="bg-emerald-50/50 dark:bg-emerald-950/20">
                    <td className="p-2 font-bold text-emerald-700 dark:text-emerald-300">Estimated Initial Cost</td>
                    <td className="p-2 font-semibold">₹50,000 – ₹1,50,000</td>
                    <td className="p-2 font-semibold text-emerald-600 dark:text-emerald-400">₹5,00,000 – ₹15,00,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: FAQs */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-emerald-500" /> Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-2.5 mt-2 mb-2 pl-2">
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">
                  Q1: What is the minimum space required for a commercial mushroom farm setup?
                </strong>
                You can start a small-scale oyster or milky mushroom unit in a 10x10 ft spare room. Commercial operations generally require at least 1,000 to 2,000 sq. ft. for a continuous harvest cycle.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">
                  Q2: Can I grow mushrooms without an air conditioner?
                </strong>
                Yes. Seasonal varieties like Oyster (winter/monsoon) and Milky/Paddy Straw (summer) can be grown naturally in ambient climate conditions without AC units.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">
                  Q3: How do I prevent contamination in my growing room?
                </strong>
                Maintain strict sanitation protocols: disinfect footwear before entry, spray 70% isopropyl alcohol on hands/tools, ensure proper air filtration, and remove any contaminated bags immediately.
              </div>
            </div>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to Launch Your Commercial Farm?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Consult with our agricultural engineers for turnkey EPC sheds, climate-controlled AC chambers, commercial spawn supply, and training.
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

          {/* Back link */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
