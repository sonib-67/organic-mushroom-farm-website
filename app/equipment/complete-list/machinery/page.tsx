import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farm Machinery & Equipment Directory | Organic Mushrooms Farm",
  description:
    "Comprehensive directory covering all scale-wise requirements for mushroom farming machinery, including composting, substrate prep, and climate control.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/equipment/complete-list/machinery",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farm Machinery & Equipment Directory | Organic Mushrooms Farm",
    description:
      "Comprehensive directory covering all scale-wise requirements for mushroom farming machinery.",
    url: "https://organicmushroomsfarm.com/equipment/complete-list/machinery",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farm Machinery & Equipment Directory | Organic Mushrooms Farm",
    description:
      "Comprehensive directory covering all scale-wise requirements for mushroom farming machinery.",
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
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/machinery#webpage",
      url: "https://organicmushroomsfarm.com/equipment/complete-list/machinery",
      name: "Mushroom Farm Machinery & Equipment Directory | Organic Mushrooms Farm",
      description: "Comprehensive directory covering all scale-wise requirements for mushroom farming machinery.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/machinery#breadcrumb",
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
          name: "Machinery",
        },
      ],
    },
  ],
};

const machineryData = [
  {
    category: "Medium-Scale / Small Commercial",
    items: [
      { name: "Autoclave / Retort Sterilizer", use: "Sterilizes bulk grain spawn and substrate bags" },
      { name: "Straw Chopper / Shredder Machine", use: "Cuts straw into uniform small pieces for substrate prep" },
      { name: "Compost Mixer (drum/tumbler type)", use: "Mixes compost ingredients uniformly" },
      { name: "Semi-Automatic Bag Filling Machine", use: "Fills substrate into bags faster and more uniformly" },
      { name: "Basic Packaging Machine", use: "Packs mushrooms for local market sale" },
      { name: "Spawn Shaker Machine", use: "Breaks up colonized grain spawn for even distribution" },
      { name: "Bag Vacuum/Sealing Machine", use: "Removes air and seals bags for freshness" },
    ]
  },
  {
    category: "Composting Unit (Industrial)",
    items: [
      { name: "Compost Turning Machine", use: "Mixes and aerates compost ingredients repeatedly" },
      { name: "Bunker/Tunnel Filling Machine", use: "Automatically fills compost into bunkers or tunnels" },
      { name: "Compost Air Handling Unit (AHU)", use: "Controls temperature and airflow inside tunnels" },
      { name: "Front Loader / Bobcat", use: "Moves raw material and finished compost around the yard" },
    ]
  },
  {
    category: "Spawn Production Unit",
    items: [
      { name: "Grain Spawn Cooker/Boiler", use: "Cooks grain (wheat, rye, millet) for spawn preparation" },
      { name: "Industrial Autoclave", use: "Sterilizes large batches of grain spawn" },
      { name: "Automatic Inoculation Machine", use: "Inoculates sterilized grain with mother culture at scale" },
      { name: "Bottle Filling Line", use: "Automatically fills, sterilizes & inoculates bottles (enoki, shimeji, etc.)" },
    ]
  },
  {
    category: "Substrate Prep & Bag Filling (Commercial)",
    items: [
      { name: "Industrial Substrate Mixer", use: "Mixes large volumes of substrate ingredients uniformly" },
      { name: "Automatic Bag Filling & Sealing Machine", use: "High-speed bagging for bulk production" },
      { name: "Casing Soil Spreader Machine", use: "Spreads casing soil evenly over spawned beds/trays" },
      { name: "Steam Boiler (industrial)", use: "Supplies steam for large-scale sterilization/pasteurization" },
      { name: "Bag Breaking & Recycling Machine", use: "Removes spent substrate from bags after harvest" },
    ]
  },
  {
    category: "Climate Control & Growing Rooms",
    items: [
      { name: "Industrial Air Conditioning System", use: "Precisely controls growing room temperature" },
      { name: "Chiller Unit", use: "Cools growing rooms during warm seasons" },
    ]
  },
  {
    category: "Harvesting, Grading & Packaging",
    items: [
      { name: "Conveyor Belt System", use: "Transports harvested mushrooms for processing" },
      { name: "Grading & Sorting Machine", use: "Sorts mushrooms by size and quality" },
      { name: "Automatic Weighing & Packaging (MAP) Machine", use: "Packs mushrooms in bulk with extended shelf life" },
      { name: "Refrigerated Transport Van", use: "Delivers fresh mushrooms to market without spoilage" },
    ]
  },
  {
    category: "Drying, Processing & Value Addition",
    items: [
      { name: "Mushroom Dryer / Dehydrator", use: "Dries mushrooms for long shelf life and export" },
      { name: "Mushroom Powder Grinding Machine", use: "Converts dried mushrooms into powder for supplements/food" },
      { name: "Canning Machine", use: "Preserves mushrooms in cans for long-term storage" },
      { name: "Freeze Dryer", use: "Preserves mushrooms while retaining texture, flavor & nutrients" },
    ]
  },
  {
    category: "Beginner / Home-Scale",
    items: [
      { name: "Heat Sealer (Impulse Sealer)", use: "Seals grow bags and spawn bags" },
    ]
  },
  {
    category: "Lab & Culture Equipment",
    items: [
      { name: "Autoclave (lab grade)", use: "Sterilizes agar media, tools, and liquid culture jars" },
    ]
  }
];

export default function MachineryDirectoryPage() {
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
              Machinery
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
            MACHINERY DIRECTORY
          </h1>
          <p className="text-[11px] sm:text-[11.5px] text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Comprehensive directory covering all scale-wise requirements for commercial mushroom farming machinery. Browse through our detailed lists to equip your farm with the best tools.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {machineryData.map((section, idx) => (
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
                        Machinery/Equipment
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
