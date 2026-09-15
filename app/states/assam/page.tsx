import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming in Assam | Cities",
  description:
    "Find mushroom farming training, spawn supply, commercial setups, and expert consultancy across Assam, starting with Guwahati.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/assam",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Assam | Cities",
    description:
      "Find mushroom farming training, spawn supply, commercial setups, and expert consultancy across Assam, starting with Guwahati.",
    url: "https://organicmushroomsfarm.com/states/assam",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Assam | Cities",
    description:
      "Find mushroom farming training, spawn supply, commercial setups, and expert consultancy across Assam, starting with Guwahati.",
  },
};

export default function AssamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/states/assam#webpage",
        url: "https://organicmushroomsfarm.com/states/assam",
        name: "Mushroom Farming in Assam | Cities",
        description:
          "Find mushroom farming training, spawn supply, commercial setups, and expert consultancy across Assam, starting with Guwahati.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://organicmushroomsfarm.com/#website",
          url: "https://organicmushroomsfarm.com",
          name: "Organic Mushrooms Farm",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://organicmushroomsfarm.com/states/assam#breadcrumb",
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
            name: "Assam",
            item: "https://organicmushroomsfarm.com/states/assam",
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
              Assam
            </span>
          </nav>

          {/* Page Header */}
          <header className="mb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2.5">
              <MapPin className="text-[#7C3AED] dark:text-purple-400 shrink-0" size={32} />
              <span>Assam Cities</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Select a city in Assam to find local mushroom farming training centers, consultants, spawn suppliers, and complete farm setup services.
            </p>
          </header>

          {/* Cities Grid Section */}
          <section
            aria-label="Assam City Hubs"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {/* Guwahati Card */}
            <Link
              href="/mushroom-farming-guwahati-assam"
              className="group glass p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 dark:hover:border-purple-500/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#7C3AED] dark:group-hover:text-purple-400 transition-colors">
                Guwahati
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Mushroom training (online &amp; offline), premium spawn supply, high-yielding farm setup, and consultancy services in Guwahati, Assam.
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
              Mushroom Cultivation Potential in Assam &amp; Northeast India
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
              Assam&apos;s natural climate offers high ambient humidity and prolonged moderate seasons, creating optimal conditions for Oyster mushroom (<em>Pleurotus ostreatus</em>) and tropical Milky mushroom cultivation with minimal artificial conditioning expenses.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              For comprehensive regional setup guidance, check out our specialized resource on{" "}
              <Link
                href="/mushroom-farming-guwahati-assam"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Farming in Guwahati, Assam
              </Link>
              . Aspiring commercial growers can enroll in our online and offline{" "}
              <Link
                href="/training"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Training Programs
              </Link>
              , order premium{" "}
              <Link
                href="/spawn-seeds"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Spawn (Seeds)
              </Link>
              , or request turnkey farm installations via our{" "}
              <Link
                href="/turnkey-projects"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Commercial Farm Setup
              </Link>{" "}
              consultants across all Indian{" "}
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
