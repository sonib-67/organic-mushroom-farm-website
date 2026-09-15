import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming in Jharkhand | Training & Spawn Supply",
  description:
    "Find mushroom farming training, spawn suppliers, and cultivation resources in Jharkhand.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/jharkhand",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Jharkhand | Training & Spawn Supply",
    description:
      "Find mushroom farming training, spawn suppliers, and cultivation resources in Jharkhand.",
    url: "https://organicmushroomsfarm.com/states/jharkhand",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Jharkhand | Training & Spawn Supply",
    description:
      "Find mushroom farming training, spawn suppliers, and cultivation resources in Jharkhand.",
  },
};

export default function JharkhandPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/states/jharkhand#webpage",
        url: "https://organicmushroomsfarm.com/states/jharkhand",
        name: "Mushroom Farming in Jharkhand | Training & Spawn Supply",
        description:
          "Find mushroom farming training, spawn suppliers, and cultivation resources in Jharkhand.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://organicmushroomsfarm.com/#website",
          url: "https://organicmushroomsfarm.com",
          name: "Organic Mushrooms Farm",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://organicmushroomsfarm.com/states/jharkhand#breadcrumb",
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
            name: "Jharkhand",
            item: "https://organicmushroomsfarm.com/states/jharkhand",
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
              Jharkhand
            </span>
          </nav>

          {/* Page Header */}
          <header className="mb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2.5">
              <MapPin className="text-[#7C3AED] dark:text-purple-400 shrink-0" size={32} />
              <span>Mushroom Farming in Jharkhand</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Select a city below to explore local mushroom farming resources, training programs, and spawn availability in Jharkhand.
            </p>
          </header>

          {/* Cities Grid Section */}
          <section
            aria-label="Jharkhand City Hubs"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {/* Ranchi Card */}
            <Link
              href="/cities/jharkhand/ranchi"
              className="group glass p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 dark:hover:border-purple-500/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#7C3AED] dark:group-hover:text-purple-400 transition-colors">
                Ranchi
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Mushroom training, agritech business opportunities, and cultivation resources in Ranchi.
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
              Mushroom Cultivation Prospects in Jharkhand
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
              With Jharkhand&apos;s favorable hilly elevations, moderate year-round weather, and rich forested terrain, cultivating Oyster and Button mushrooms provides substantial rural and peri-urban employment. Self-help groups (SHGs) and local agri-startups in Ranchi, Jamshedpur, and Dhanbad are rapidly adopting commercial indoor units.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Check out localized opportunities through our guide on{" "}
              <Link
                href="/cities/jharkhand/ranchi"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Farming in Ranchi
              </Link>
              . Aspiring cultivators can register for hands-on{" "}
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
              , or consult our agronomy team for commercial{" "}
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
