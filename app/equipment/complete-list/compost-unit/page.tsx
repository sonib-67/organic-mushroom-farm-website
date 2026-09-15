import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Compost Unit Equipment & Machinery | Organic Mushrooms Farm",
  description:
    "Detailed directory of equipment for the Compost Unit, covering aeration blowers, tunnel winches, conveyors, and pasteurization chambers.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/equipment/complete-list/compost-unit",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Compost Unit Equipment & Machinery | Organic Mushrooms Farm",
    description:
      "Detailed directory of equipment for the Compost Unit, covering aeration blowers, tunnel winches, conveyors, and pasteurization chambers.",
    url: "https://organicmushroomsfarm.com/equipment/complete-list/compost-unit",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compost Unit Equipment & Machinery | Organic Mushrooms Farm",
    description:
      "Detailed directory of equipment for the Compost Unit, covering aeration blowers, tunnel winches, conveyors, and pasteurization chambers.",
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
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/compost-unit#webpage",
      url: "https://organicmushroomsfarm.com/equipment/complete-list/compost-unit",
      name: "Compost Unit Equipment & Machinery | Organic Mushrooms Farm",
      description: "Detailed directory of equipment for the Compost Unit, covering aeration blowers, tunnel winches, conveyors, and pasteurization chambers.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/compost-unit#breadcrumb",
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
          name: "Compost Unit",
        },
      ],
    },
  ],
};

const compostUnitData = [
  {
    category: "Equipment & Working Process",
    items: [
      { name: "Compost Feeding Hopper", use: "Feeds raw compost material into mixers or conveyors at a steady rate" },
      { name: "Compost Transfer Conveyor", use: "Moves compost between turning, filling and tunnel stages" },
      { name: "Compost Elevator", use: "Lifts compost vertically into bunkers, tunnels or filling machines" },
      { name: "Aeration Blower", use: "Pumps controlled air into compost piles/tunnels for oxygen supply" },
      { name: "Aeration Pipes", use: "Distributes forced air evenly through the compost mass" },
      { name: "Air Diffusers/Spigots", use: "Releases air uniformly from pipes into the compost bed" },
      { name: "Aeration Ducting", use: "Channels air from blowers to aeration pipes across the tunnel/bunker" },
      { name: "Tunnel Winch", use: "Mechanically pulls filling equipment or covers across the tunnel" },
      { name: "Tunnel Filling Cassette", use: "Loads and levels compost evenly inside the tunnel" },
      { name: "Compost Temperature Probe System", use: "Continuously monitors internal compost temperature during composting" },
      { name: "Compost Moisture Meter", use: "Checks compost moisture levels to keep conditions ideal for pasteurization" },
      { name: "Filtered Fresh-Air Intake", use: "Draws outside air through filters into the tunnel/bunker system" },
      { name: "Recirculation Air System", use: "Reuses conditioned air inside the tunnel to save energy and maintain climate" },
      { name: "Motorized Air Dampers", use: "Automatically adjusts airflow direction and volume in ducting" },
      { name: "Casing Soil Mixer", use: "Blends casing soil ingredients into a uniform mixture" },
      { name: "Casing Soil Pasteurization Chamber", use: "Heat-treats casing soil to kill pests/pathogens before use" },
      { name: "Casing Soil Storage Hopper", use: "Stores prepared casing soil ready for spreading on beds" },
    ]
  }
];

export default function CompostUnitDirectoryPage() {
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
              Compost Unit
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
            COMPOST UNIT
          </h1>
          <p className="text-[11px] sm:text-[11.5px] text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Specialized directory detailing all necessary equipment and materials for the Compost Unit, including aeration, tunnels, mixing, and pasteurization machinery.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {compostUnitData.map((section, idx) => (
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
