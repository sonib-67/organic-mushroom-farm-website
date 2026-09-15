import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farm Equipment Directory | Organic Mushrooms Farm",
  description:
    "Comprehensive directory covering all scale-wise requirements for mushroom farming equipment, including general tools, lab equipment, and daily farm necessities.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/equipment/complete-list/equipment",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farm Equipment Directory | Organic Mushrooms Farm",
    description:
      "Comprehensive directory covering all scale-wise requirements for mushroom farming equipment.",
    url: "https://organicmushroomsfarm.com/equipment/complete-list/equipment",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farm Equipment Directory | Organic Mushrooms Farm",
    description:
      "Comprehensive directory covering all scale-wise requirements for mushroom farming equipment.",
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
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/equipment#webpage",
      url: "https://organicmushroomsfarm.com/equipment/complete-list/equipment",
      name: "Mushroom Farm Equipment Directory | Organic Mushrooms Farm",
      description: "Comprehensive directory covering all scale-wise requirements for mushroom farming equipment.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list/equipment#breadcrumb",
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
          name: "Equipment",
        },
      ],
    },
  ],
};

const equipmentData = [
  {
    category: "Medium-Scale / Small Commercial",
    items: [
      { name: "Pasteurization Drum / Tank", use: "Pasteurizes substrate using hot water or steam" },
      { name: "Humidifier (ultrasonic fogger)", use: "Maintains stable humidity in the grow/fruiting room" },
      { name: "Exhaust Fan / Ventilation System", use: "Exchanges fresh air and controls CO2 levels" },
      { name: "Small AC / Cooling Unit", use: "Regulates temperature in the fruiting room" },
      { name: "Walk-in Inoculation Chamber", use: "Enables clean bulk spawning of larger batches" },
      { name: "Small Cold Storage Room", use: "Keeps harvested mushrooms fresh before sale" },
      { name: "Weighing Scale", use: "Weighs mushrooms before packaging" },
    ]
  },
  {
    category: "Composting Unit (Industrial)",
    items: [
      { name: "Compost Pre-Wetting Area", use: "Soaks raw straw/materials as the first step of composting" },
      { name: "Bunker Rooms (with aeration blowers)", use: "Provides controlled aeration for Phase-I composting" },
      { name: "Compost Tunnel (Phase II/III)", use: "Pasteurizes and conditions compost under controlled climate" },
    ]
  },
  {
    category: "Spawn Production Unit",
    items: [
      { name: "Spawn Tank", use: "Stores and grows liquid culture/spawn in bulk" },
      { name: "Incubation Room/Racks", use: "Provides ideal conditions for spawn colonization" },
    ]
  },
  {
    category: "Substrate Prep & Bag Filling (Commercial)",
    items: [
      { name: "Grow Bags / Substrate Bags (bulk)", use: "Holds substrate for colonization at commercial scale" },
    ]
  },
  {
    category: "Climate Control & Growing Rooms",
    items: [
      { name: "Automated Climate Control Computer", use: "Manages temperature, humidity & CO2 together automatically" },
      { name: "Ventilation Ducts & Air Distribution System", use: "Distributes fresh air evenly across growing rooms" },
      { name: "Water Pasteurization & Spray System", use: "Treats spray water to prevent water-borne infections" },
      { name: "Insulated Panel Growing Rooms", use: "Maintains stable internal climate year-round" },
      { name: "CO2 Sensor & Controller", use: "Monitors and regulates carbon dioxide levels for healthy fruiting" },
    ]
  },
  {
    category: "Harvesting, Grading & Packaging",
    items: [
      { name: "Harvesting Trolley/Trays", use: "Collects mushrooms during harvest" },
      { name: "Cold Storage / Cold Room (large)", use: "Stores bulk harvest at low temperature for freshness" },
    ]
  },
  {
    category: "Drying, Processing & Value Addition",
    items: [
      { name: "Pickling/Processing Unit", use: "Prepares mushroom pickles and other value-added products" },
    ]
  },
  {
    category: "Beginner / Home-Scale",
    items: [
      { name: "Pressure Cooker", use: "Sterilizes grain spawn and small batches of substrate" },
      { name: "Still Air Box (SAB)", use: "Low-cost sterile workspace for culture transfers and inoculation" },
      { name: "Spray Bottle / Hand Mister", use: "Manual misting to maintain humidity in small grow spaces" },
      { name: "Digital Thermometer & Hygrometer", use: "Monitors temperature and humidity in the grow area" },
      { name: "Grow Bags / Spawn Bags (with filter patch)", use: "Holds substrate for colonization and fruiting" },
      { name: "Injection Port + Syringes", use: "Used to inoculate bags with liquid culture or spores" },
      { name: "Mini Grow Tent / Fruiting Chamber", use: "Provides a controlled humid space for fruiting at small scale" },
      { name: "LED Grow Light", use: "Provides low-intensity light needed for mushroom pinning" },
      { name: "Shelving Rack (wood/plastic)", use: "Organizes bags, trays, and jars in limited space" },
      { name: "Digital Timer", use: "Automates misting or lighting cycles" },
      { name: "Mixing Tub / Bucket", use: "Used to hand-mix substrate ingredients" },
      { name: "Alcohol Lamp / Torch", use: "Sterilizes small tools like scalpels and needles during transfers" },
      { name: "Micropore Tape / Filter Patches", use: "Allows gas exchange while keeping contaminants out of jars/bags" },
    ]
  },
  {
    category: "Lab & Culture Equipment (Genetics/Strain Work)",
    items: [
      { name: "Laminar Flow Hood", use: "Provides HEPA-filtered sterile airflow for clean lab work" },
      { name: "Microscope (with mechanical stage)", use: "Identifies contaminants and studies spore/mycelium characteristics" },
      { name: "Magnetic Stirrer", use: "Mixes liquid culture nutrient solutions evenly" },
      { name: "Agar Petri Dishes & Media", use: "Used for culture isolation, cloning, and strain maintenance" },
      { name: "Culture Slants / Test Tubes", use: "Stores and preserves mushroom genetics long-term" },
      { name: "Scalpel & Surgical Blades", use: "Used for precise agar work and tissue cloning" },
      { name: "Centrifuge Tubes", use: "Used for liquid culture prep and sample storage" },
      { name: "Incubator (lab type)", use: "Maintains ideal temperature for culture and spawn colonization" },
      { name: "Refrigerator / Culture Storage Fridge", use: "Preserves master cultures and slants" },
    ]
  }
];

export default function EquipmentDirectoryPage() {
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
              Equipment
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
            EQUIPMENT DIRECTORY
          </h1>
          <p className="text-[11px] sm:text-[11.5px] text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Comprehensive directory covering all scale-wise requirements for general mushroom farming equipment, beginner setups, and specialized lab instruments.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {equipmentData.map((section, idx) => (
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
