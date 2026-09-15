import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming in Uttarakhand | Cities",
  description:
    "Find mushroom farming training, commercial setups, and resources across cities in Uttarakhand.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/uttarakhand",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming in Uttarakhand | Cities",
    description:
      "Find mushroom farming training, commercial setups, and resources across cities in Uttarakhand.",
    url: "https://organicmushroomsfarm.com/states/uttarakhand",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming in Uttarakhand | Cities",
    description:
      "Find mushroom farming training, commercial setups, and resources across cities in Uttarakhand.",
  },
};

export default function UttarakhandPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/states/uttarakhand#webpage",
        url: "https://organicmushroomsfarm.com/states/uttarakhand",
        name: "Mushroom Farming in Uttarakhand | Cities",
        description:
          "Find mushroom farming training, commercial setups, and resources across cities in Uttarakhand.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://organicmushroomsfarm.com/#website",
          url: "https://organicmushroomsfarm.com",
          name: "Organic Mushrooms Farm",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://organicmushroomsfarm.com/states/uttarakhand#breadcrumb",
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
            name: "Uttarakhand",
            item: "https://organicmushroomsfarm.com/states/uttarakhand",
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
              Uttarakhand
            </span>
          </nav>

          {/* Page Header */}
          <header className="mb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2.5">
              <MapPin className="text-[#7C3AED] dark:text-purple-400 shrink-0" size={32} />
              <span>Uttarakhand Cities</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Select a city in Uttarakhand to find local mushroom farming training centers, consultants, and spawn suppliers.
            </p>
          </header>

          {/* Cities Grid Section */}
          <section
            aria-label="Uttarakhand City Hubs"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {/* Dehradun Card */}
            <Link
              href="/mushroom-farming-dehradun-uttarakhand"
              className="group glass p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-[#7C3AED]/30 dark:hover:border-purple-500/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#7C3AED] dark:group-hover:text-purple-400 transition-colors">
                Dehradun
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Mushroom training, cultivation resources, and commercial setups in Dehradun, Uttarakhand.
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
              Naturally Cool Himalayan Climate for Low-Cost Mushroom Cultivation
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
              Uttarakhand&apos;s cool sub-Himalayan climate throughout Dehradun, Haridwar, Nainital, and Almora provides an idyllic natural environment for high-yield Button mushroom crops with minimal cooling electricity costs. Specialty medicinal varieties like Shiitake and Cordyceps militaris also thrive exceptionally in the high-altitude terrain.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Explore city-level opportunities in our dedicated guide for{" "}
              <Link
                href="/mushroom-farming-dehradun-uttarakhand"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Farming in Dehradun
              </Link>
              . You can also sign up for practical{" "}
              <Link
                href="/training"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Training Programs
              </Link>
              , order certified pure-strain{" "}
              <Link
                href="/spawn-seeds"
                className="text-[#7C3AED] dark:text-purple-400 font-semibold hover:underline"
              >
                Mushroom Spawn (Seeds)
              </Link>
              , or consult our engineering team for semi-commercial or industrial{" "}
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
