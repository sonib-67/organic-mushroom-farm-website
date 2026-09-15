import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Farm Infrastructure & Growing Room Equipment | Organic Mushrooms Farm",
  description:
    "Detailed equipment list for Farm Infrastructure & Growing Room, covering insulation, clean rooms, racking systems, and more for commercial mushroom farming.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/equipment/complete-list/infrastructure",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Farm Infrastructure & Growing Room Equipment | Organic Mushrooms Farm",
    description:
      "Detailed equipment list for Farm Infrastructure & Growing Room, covering insulation, clean rooms, and racking systems.",
    url: "https://organicmushroomsfarm.com/equipment/complete-list/infrastructure",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Farm Infrastructure & Growing Room Equipment | Organic Mushrooms Farm",
    description:
      "Detailed equipment list for Farm Infrastructure & Growing Room, covering insulation, clean rooms, and racking systems.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://organicmushroomsfarm.com/#organization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
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
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/infrastructure#webpage",
      url: "https://organicmushroomsfarm.com/equipment/complete-list/infrastructure",
      name: "Farm Infrastructure & Growing Room Equipment | Organic Mushrooms Farm",
      description: "Detailed equipment list for Farm Infrastructure & Growing Room, covering insulation, clean rooms, racking systems, and more for commercial mushroom farming.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/infrastructure#breadcrumb",
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
          name: "Equipment",
          item: "https://organicmushroomsfarm.com/equipment",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Complete List",
          item: "https://organicmushroomsfarm.com/equipment/complete-list",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Infrastructure",
        },
      ],
    },
  ],
};

const infrastructureData = [
  {
    category: "Equipment & Working Process",
    items: [
      { name: "PUF/PPGL Insulated Wall & Ceiling Panels", use: "Insulates growing rooms to maintain stable temperature and reduce energy loss" },
      { name: "Insulated/Airlock Doors", use: "Seals room entry points to stop temperature/humidity leakage and contamination" },
      { name: "Air Shower", use: "Blasts filtered air on workers before room entry to remove surface contaminants" },
      { name: "Air Curtain", use: "Creates an air barrier at doorways to block dust, insects and outside air" },
      { name: "Hygienic Washable Flooring", use: "Provides a smooth, non-porous surface that can be fully washed and disinfected" },
      { name: "Floor Drainage Channels", use: "Channels wash-water and spillage out of growing rooms to keep floors dry" },
      { name: "Multi-Tier Growing Racks", use: "Stacks growing beds/bags vertically to maximize production per square foot" },
      { name: "Movable Racking System", use: "Allows racks to be relocated for flexible room layout and easy cleaning" },
      { name: "Rack Trolley", use: "Moves loaded racks/trays between rooms without manual lifting" },
      { name: "Hanging/Rope Support System", use: "Suspends grow bags vertically to save floor space and improve airflow" },
      { name: "Clean Room", use: "Provides a sterile, filtered-air zone for spawning and sensitive operations" },
      { name: "Service Corridor", use: "Connects growing rooms for staff and material movement without cross-contamination" },
      { name: "Raw Material Storage Racks", use: "Stores incoming raw materials in an organized, elevated, pest-free manner" },
      { name: "Finished Product Storage Racks", use: "Holds packed mushroom products safely before dispatch" },
      { name: "Dispatch Staging Area", use: "Temporary holding zone where packed orders are staged before loading for delivery" },
    ]
  }
];

export default function InfrastructureDirectoryPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[10.5px] md:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide flex-wrap">
            <li>
              <Link
                href="/"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">
              /
            </li>
            <li>
              <Link
                href="/equipment"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Equipment
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">
              /
            </li>
            <li>
              <Link
                href="/equipment/complete-list"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Complete List
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">
              /
            </li>
            <li
              aria-current="page"
              className="text-slate-800 dark:text-slate-200 truncate"
            >
              Infrastructure
            </li>
          </ol>
        </nav>

        <div className="mb-8 md:mb-12">
          <Link
            href="/equipment/complete-list"
            className="text-emerald-600 dark:text-emerald-400 hover:underline mb-4 inline-flex items-center gap-1 text-[11px] font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Complete List
          </Link>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">
            FARM INFRASTRUCTURE & GROWING ROOM
          </h1>
          <p className="text-[11px] sm:text-[11.5px] text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Specialized directory detailing all necessary equipment and materials for Farm Infrastructure & Growing Room construction, insulation, and layout.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {infrastructureData.map((section, idx) => (
            <section
              key={idx}
              className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs rounded-[1.5rem] shadow-sm border border-black/5 dark:border-white/5 overflow-hidden"
            >
              <header className="bg-emerald-500/5 dark:bg-slate-700/20 px-4 py-3 md:px-6 md:py-4 border-b border-black/5 dark:border-white/5">
                <h2 className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-100">
                  {section.category}
                </h2>
              </header>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-transparent dark:bg-transparent">
                      <th className="px-4 py-3 text-[10.5px] md:text-[11px] font-bold text-slate-500 dark:text-slate-400 border-b border-black/5 dark:border-white/5 w-1/3 uppercase tracking-wider">
                        Equipment
                      </th>
                      <th className="px-4 py-3 text-[10.5px] md:text-[11px] font-bold text-slate-500 dark:text-slate-400 border-b border-black/5 dark:border-white/5 w-2/3 uppercase tracking-wider">
                        Working Process / Use
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5 dark:divide-white/5">
                    {section.items.map((item, itemIdx) => (
                      <tr
                        key={itemIdx}
                        className="hover:bg-emerald-500/[0.02] dark:hover:bg-emerald-500/[0.02] transition-colors"
                      >
                        <td className="px-4 py-3 md:px-6 md:py-3.5 text-[11px] md:text-xs font-bold text-slate-800 dark:text-slate-200 align-top">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 md:px-6 md:py-3.5 text-[10.5px] md:text-[11px] text-slate-600 dark:text-slate-400 align-top leading-relaxed">
                          {item.use}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
