import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Calendar, Clock, ChevronRight, Phone, Mail, CheckCircle2, Sparkles } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming in Thiruvananthapuram: The New Cash Crop of Kerala's Capital",
  description:
    "Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram",
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
    title: "Mushroom Farming in Thiruvananthapuram: The New Cash Crop of Kerala's Capital",
    description:
      "Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.",
    url: "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Regional Agriculture",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Thiruvananthapuram: The New Cash Crop of Kerala's Capital",
    description:
      "Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.",
  },
};

export default function ThiruvananthapuramGuidePage() {
  const pageUrl = "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram";
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
          availableLanguage: ["en", "hi", "ml"],
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
        name: "Mushroom Farming in Thiruvananthapuram: The New Cash Crop of Kerala's Capital",
        description:
          "Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.",
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
            name: "Cities",
            item: "https://organicmushroomsfarm.com/cities",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Kerala",
            item: "https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Thiruvananthapuram",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "Mushroom Farming in Thiruvananthapuram: The New Cash Crop of Kerala's Capital",
        description:
          "Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.",
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
      id="thiruvananthapuram-mushroom-guide-page"
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
            <Link href="/cities" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Cities
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[220px] sm:max-w-none">
            Thiruvananthapuram, Kerala
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
              <MapPin className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Regional Guide • Kerala
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Mushroom Farming in Thiruvananthapuram:{" "}
            <span className="gradient-text">The New Cash Crop of Kerala&apos;s Capital</span>
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Thiruvananthapuram (Trivandrum) is celebrated for its pristine coastline, grand heritage temples, and expanding IT corridor. But alongside the bustling tech campuses of Technopark and the world-renowned wellness tourism of Kovalam and Varkala, a quiet agricultural revolution is taking place across southern Kerala.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            For forward-thinking entrepreneurs, students, and progressive farmers in southern Kerala, commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model. If you are looking to start a lucrative agri-business in the capital city, here is why Thiruvananthapuram offers the ideal environment for a mushroom startup.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              1. Nature&apos;s Superpower: The Tropical Climate
            </h2>
            <p className="mb-2">
              In most parts of northern and central India, commercial mushroom farmers spend heavily on high-pressure misting systems and air humidifiers to maintain fruiting chamber humidity. In Kerala, nature does the heavy lifting for free.
            </p>
            <p className="mb-2">
              Thiruvananthapuram enjoys naturally high relative atmospheric humidity (75%–85%) throughout most of the year. This tropical microclimate provides the exact moisture conditions needed for rapid vegetative mycelium colonization and abundant pinhead formation. By choosing resilient species like{" "}
              <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Oyster Mushrooms (Pleurotus ostreatus)
              </Link>{" "}
              and tropical{" "}
              <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Milky Mushrooms (Calocybe indica)
              </Link>
              , local growers achieve commercial harvests with rock-bottom power consumption.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              2. A Premium, Health-Conscious Urban Market
            </h2>
            <p className="mb-2">
              The presence of Technopark—one of India&apos;s largest IT parks—combined with high literacy and affluent residential clusters creates an insatiable market for clean, organic produce:
            </p>

            <div className="space-y-2 pl-1 mb-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Tech Professionals &amp; Modern Retail:</strong>
                  {" "}Working IT professionals actively purchase fresh organic mushrooms for their low-calorie, zero-cholesterol, and protein-rich dietary value from urban supermarkets and direct farm-to-table delivery apps.
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Ayurvedic Resorts &amp; Coastal Tourism:</strong>
                  {" "}Luxury wellness centers across Kovalam and Varkala regularly procure premium, chemical-free fresh mushrooms to cater to international health tourists, providing growers with long-term B2B supply contracts at premium margins.
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              3. Abundant, Low-Cost Agricultural By-Products
            </h2>
            <p className="mb-2">
              Mushroom substrate preparation relies on agricultural residues. Thiruvananthapuram and adjoining districts have immediate access to cost-effective raw materials:
            </p>
            <p className="mb-2">
              Paddy straw from local river valleys, dried coconut leaf shreds, and rubber-wood sawdust from regional sawmills are readily available at nominal prices. Converting these abundant local by-products into high-value edible mushrooms slashes operating expenditure (OpEx), directly multiplying your net profit margins.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              4. High Yields in Dense Urban Footprints
            </h2>
            <p className="mb-2">
              With high land costs and dense settlements across Kerala, conventional farming on acres of open soil is out of reach for most urban residents. Indoor vertical mushroom farming completely solves this limitation.
            </p>
            <p className="mb-2">
              Using multi-tier rack structures, an unused 500 sq ft terrace shed, backyard godown, or spare ground-floor room can accommodate over 400–600 bags, yielding 250–350 kg of fresh mushrooms monthly. You can evaluate commercial returns using our{" "}
              <Link href="/mushroomfarmingcalculators" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                commercial mushroom ROI calculator
              </Link>
              , or review detailed farm layouts in our{" "}
              <Link href="/project-specs" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                project engineering specifications
              </Link>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              Start Your Agri-Business in God&apos;s Own Country
            </h2>
            <p className="mb-2">
              The local demand in Thiruvananthapuram significantly outpaces current domestic production, with vast quantities still imported from neighboring states. However, high natural humidity also increases the risk of contamination (such as green mold) if hygiene is neglected.
            </p>
            <p className="mb-2">
              Achieving consistent commercial success requires high-vigor, certified{" "}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                laboratory mushroom spawn
              </Link>{" "}
              and structured practical training. Discover our comprehensive curriculum at our{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                mushroom training programs
              </Link>{" "}
              or browse other regional models on our{" "}
              <Link href="/cities" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                all-India cities guide
              </Link>
              .
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to Grow in Thiruvananthapuram?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Start your commercial mushroom cultivation journey in Kerala. Get pure spawn, scientific SOPs, and complete turnkey setups from{" "}
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
