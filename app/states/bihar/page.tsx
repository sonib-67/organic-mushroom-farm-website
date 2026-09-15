import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming in Bihar | Cities",
  description:
    "Find mushroom farming training, commercial setups, and resources across cities in Bihar.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/bihar",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Bihar | Cities",
    description:
      "Find mushroom farming training, commercial setups, and resources across cities in Bihar.",
    url: "https://organicmushroomsfarm.com/states/bihar",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Bihar | Cities",
    description:
      "Find mushroom farming training, commercial setups, and resources across cities in Bihar.",
  },
};

export default function BiharPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/states/bihar#webpage",
        url: "https://organicmushroomsfarm.com/states/bihar",
        name: "Mushroom Farming in Bihar | Cities",
        description:
          "Find mushroom farming training, commercial setups, and resources across cities in Bihar.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://organicmushroomsfarm.com/#website",
          url: "https://organicmushroomsfarm.com",
          name: "Organic Mushrooms Farm",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://organicmushroomsfarm.com/states/bihar#breadcrumb",
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
            name: "Bihar",
            item: "https://organicmushroomsfarm.com/states/bihar",
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
              Bihar
            </span>
          </nav>

          {/* Page Header */}
          <header className="mb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2.5">
              <MapPin className="text-[#7C3AED] dark:text-purple-400 shrink-0" size={32} />
              <span>Bihar Cities</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Select a city in Bihar to find local mushroom farming training centers, consultants, and spawn suppliers.
            </p>
          </header>

          {/* Cities Grid Section */}
          <section
            aria-label="Bihar City Hubs"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {/* Patna Card */}
            <Link
              href="/cities/bihar/patna"
              className="group glass p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 dark:hover:border-purple-500/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#7C3AED] dark:group-hover:text-purple-400 transition-colors">
                Patna
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Mushroom training, cultivation resources, and commercial setups in Patna.
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
              Commercial Mushroom Production Leadership in Bihar
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
              Bihar has established itself as one of the largest producers of button and oyster mushrooms in India. With strong agricultural infrastructure, cheap availability of wheat and paddy straw, and progressive farmer producer organizations (FPOs), starting a mushroom enterprise yields exceptional return on investment.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              For local city guidelines, explore our specialized hub for{" "}
              <Link
                href="/cities/bihar/patna"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Farming in Patna
              </Link>
              . You can participate in our comprehensive{" "}
              <Link
                href="/training"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Training Programs
              </Link>
              , order tested{" "}
              <Link
                href="/spawn-seeds"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Spawn (Seeds)
              </Link>
              , and get guidance on government subsidies and{" "}
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
