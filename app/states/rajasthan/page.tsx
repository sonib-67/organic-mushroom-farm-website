import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming in Rajasthan | Cities",
  description:
    "Find mushroom farming training, commercial setups, and resources across cities in Rajasthan.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/rajasthan",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Rajasthan | Cities",
    description:
      "Find mushroom farming training, commercial setups, and resources across cities in Rajasthan.",
    url: "https://organicmushroomsfarm.com/states/rajasthan",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Rajasthan | Cities",
    description:
      "Find mushroom farming training, commercial setups, and resources across cities in Rajasthan.",
  },
};

export default function RajasthanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/states/rajasthan#webpage",
        url: "https://organicmushroomsfarm.com/states/rajasthan",
        name: "Mushroom Farming in Rajasthan | Cities",
        description:
          "Find mushroom farming training, commercial setups, and resources across cities in Rajasthan.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://organicmushroomsfarm.com/#website",
          url: "https://organicmushroomsfarm.com",
          name: "Organic Mushrooms Farm",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://organicmushroomsfarm.com/states/rajasthan#breadcrumb",
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
            name: "States",
            item: "https://organicmushroomsfarm.com/states",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Rajasthan",
            item: "https://organicmushroomsfarm.com/states/rajasthan",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-6 sm:pt-8 pb-16 min-h-screen bg-transparent relative z-10 font-sans">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
          >
            <Link
              href="/"
              className="hover:text-[#7C3AED] dark:hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            <Link
              href="/states"
              className="hover:text-[#7C3AED] dark:hover:text-purple-400 transition-colors"
            >
              States
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white">
              Rajasthan
            </span>
          </nav>

          {/* Page Header */}
          <header className="mb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2.5">
              <MapPin className="text-[#7C3AED] dark:text-purple-400 shrink-0" size={32} />
              <span>Rajasthan Cities</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Select a city in Rajasthan to find local mushroom farming training centers, consultants, and spawn suppliers.
            </p>
          </header>

          {/* Cities Grid Section */}
          <section
            aria-label="Rajasthan City Hubs"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {/* Jaipur Card */}
            <Link
              href="/cities/rajasthan/jaipur"
              className="group glass p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 dark:hover:border-purple-500/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#7C3AED] dark:group-hover:text-purple-400 transition-colors">
                Jaipur
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Mushroom training, cultivation resources, and commercial setups in Jaipur.
              </p>
              <div className="text-[#7C3AED] dark:text-purple-400 font-semibold text-xs sm:text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                <span>View Resources</span>
                <ChevronRight size={16} />
              </div>
            </Link>

            {/* Bikaner Card */}
            <Link
              href="/cities/rajasthan/bikaner"
              className="group glass p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 dark:hover:border-purple-500/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#7C3AED] dark:group-hover:text-purple-400 transition-colors">
                Bikaner
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium leading-relaxed">
                બીકાનેરમાં મશરૂમ ફાર્મ સેટઅપ, સ્પોન સપ્લાય, ઓનલાઇન-ઓફલાઇન ટ્રેનિંગ અને કન્સલ્ટન્સી (રાજસ્થાની બ્લોગ) / बीकानेर में मशरूम फार्म सेटअप, स्पॉन सप्लाई, ऑनलाइन-ऑफलाइन ट्रेनिंग और कंसल्टेंसी (राजस्थानी ब्लॉग)।
              </p>
              <div className="text-[#7C3AED] dark:text-purple-400 font-semibold text-xs sm:text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                <span>View Resources</span>
                <ChevronRight size={16} />
              </div>
            </Link>

            {/* Udaipur Card */}
            <Link
              href="/cities/rajasthan/udaipur"
              className="group glass p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 dark:hover:border-purple-500/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#7C3AED] dark:group-hover:text-purple-400 transition-colors">
                Udaipur
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium leading-relaxed">
                उदयपुर में मशरूम फार्मिंग और सेटअप गाइड - होटल और टूरिज्म बिजनेस के लिए विशेष गाइड।
              </p>
              <div className="text-[#7C3AED] dark:text-purple-400 font-semibold text-xs sm:text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                <span>View Resources</span>
                <ChevronRight size={16} />
              </div>
            </Link>
          </section>

          {/* Contextual Information & Natural Internal Linking */}
          <section className="glass rounded-2xl p-6 sm:p-8 border border-black/5 dark:border-white/5">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Mushroom Farming in Rajasthan&apos;s Hospitality &amp; Urban Hubs
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
              Rajasthan&apos;s booming tourism, 5-star heritage hotels, and luxury catering industry across Jaipur, Udaipur, Jodhpur, and Bikaner generate year-round demand for fresh culinary mushrooms. Climate-controlled indoor farming makes it possible to maintain steady 16–22°C temperatures regardless of arid desert extremes.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Growers across Rajasthan can enroll in our hands-on{" "}
              <Link
                href="/training"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Training Programs
              </Link>
              , purchase high-vigor{" "}
              <Link
                href="/spawn-seeds"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Spawn (Seeds)
              </Link>
              , or consult our engineering team for insulated climate-controlled{" "}
              <Link
                href="/turnkey-projects"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Turnkey Farm Setups
              </Link>{" "}
              across all Indian{" "}
              <Link
                href="/states"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                States
              </Link>
              .
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
