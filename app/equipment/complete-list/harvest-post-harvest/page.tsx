import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Harvest & Post-Harvest Equipment | Organic Mushrooms Farm",
  description:
    "Detailed equipment list for Harvest & Post-Harvest, covering harvesting knives, pre-cooling chambers, packaging conveyors, and labeling machines.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/equipment/complete-list/harvest-post-harvest",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Harvest & Post-Harvest Equipment | Organic Mushrooms Farm",
    description:
      "Detailed equipment list for Harvest & Post-Harvest, covering harvesting knives, pre-cooling chambers, and packaging conveyors.",
    url: "https://organicmushroomsfarm.com/equipment/complete-list/harvest-post-harvest",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Harvest & Post-Harvest Equipment | Organic Mushrooms Farm",
    description:
      "Detailed equipment list for Harvest & Post-Harvest, covering harvesting knives, pre-cooling chambers, and packaging conveyors.",
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
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/harvest-post-harvest#webpage",
      url: "https://organicmushroomsfarm.com/equipment/complete-list/harvest-post-harvest",
      name: "Harvest & Post-Harvest Equipment | Organic Mushrooms Farm",
      description: "Detailed equipment list for Harvest & Post-Harvest, covering harvesting knives, pre-cooling chambers, packaging conveyors, and labeling machines.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/harvest-post-harvest#breadcrumb",
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
          name: "Harvest & Post-Harvest",
        },
      ],
    },
  ],
};

const harvestData = [
  {
    category: "Equipment & Working Process",
    items: [
      { name: "Harvesting Knives", use: "Cuts mushrooms cleanly from the growing bed during harvest" },
      { name: "Harvesting Scissors", use: "Trims mushroom stems precisely during picking" },
      { name: "Food-Grade Harvest Crates", use: "Collects and transports harvested mushrooms hygienically" },
      { name: "Stainless-Steel Work Tables", use: "Provides a hygienic surface for sorting, trimming and packing" },
      { name: "Sorting Tables", use: "Used by workers to sort mushrooms by size/quality after harvest" },
      { name: "Collection Bins", use: "Gathers sorted mushrooms before weighing and packing" },
      { name: "Pre-Cooling Chamber", use: "Rapidly cools harvested mushrooms to extend shelf life" },
      { name: "Dispatch Staging Area", use: "Holds finished packed products ready for outbound delivery" },
      { name: "Check-Weigher", use: "Automatically verifies pack weight for accuracy and compliance" },
      { name: "Packaging Conveyor", use: "Moves packs through the packaging line automatically" },
      { name: "Labeling Machine", use: "Applies product labels automatically on packed mushrooms" },
      { name: "Batch Coding Machine", use: "Prints batch numbers on packs for traceability" },
      { name: "Date Coding Machine", use: "Prints manufacturing/expiry dates on packaging" },
      { name: "Barcode Printer", use: "Prints barcodes for inventory and retail tracking" },
      { name: "Barcode Scanner", use: "Scans barcodes for stock management and dispatch accuracy" },
    ]
  }
];

export default function HarvestPostHarvestDirectoryPage() {
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
              Harvest & Post-Harvest
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
            HARVEST & POST-HARVEST
          </h1>
          <p className="text-[11px] sm:text-[11.5px] text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Specialized directory detailing all necessary equipment and materials for Harvest & Post-Harvest, including cutting tools, sorting tables, cooling chambers, and packaging machinery.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {harvestData.map((section, idx) => (
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
