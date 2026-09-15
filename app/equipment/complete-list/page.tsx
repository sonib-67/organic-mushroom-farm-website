import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowRight, Settings, Wrench, Shield, Factory, Wind, 
  Droplet, Sun, Beaker, Recycle, Zap, Thermometer, 
  ShieldAlert, Archive, Activity, Leaf, Microscope, Layers 
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Equipment Directory | Organic Mushrooms Farm",
  description:
    "Complete directory for mushroom farming equipment, machinery, safety material, lab tools, and climate control systems.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/equipment/complete-list",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming Equipment Directory | Organic Mushrooms Farm",
    description:
      "Complete directory for mushroom farming equipment, machinery, safety material, lab tools, and climate control systems.",
    url: "https://organicmushroomsfarm.com/equipment/complete-list",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Equipment Directory | Organic Mushrooms Farm",
    description:
      "Complete directory for mushroom farming equipment, machinery, safety material, lab tools, and climate control systems.",
  },
};

const mainCategories = [
  { 
    title: "Machinery", 
    icon: <Settings className="w-5 h-5" />, 
    route: "/equipment/complete-list/machinery", 
    desc: "Heavy machinery and processing units" 
  },
  { 
    title: "Equipment", 
    icon: <Wrench className="w-5 h-5" />, 
    route: "/equipment/complete-list/equipment", 
    desc: "General tools and daily farm equipment" 
  },
  { 
    title: "Safety Material", 
    icon: <Shield className="w-5 h-5" />, 
    route: "/equipment/complete-list/safety", 
    desc: "PPE and biosecurity materials" 
  }
];

const subCategories = [
  { title: "Farm Infrastructure", icon: <Factory className="w-4 h-4" />, route: "/equipment/complete-list/infrastructure" },
  { title: "Raw Material Handling", icon: <Layers className="w-4 h-4" />, route: "/equipment/complete-list/raw-material" },
  { title: "Substrate Preparation", icon: <Leaf className="w-4 h-4" />, route: "/equipment/complete-list/substrate-preparation" },
  { title: "Compost Unit", icon: <Recycle className="w-4 h-4" />, route: "/equipment/complete-list/compost-unit" },
  { title: "Spawn Production", icon: <Beaker className="w-4 h-4" />, route: "/equipment/complete-list/spawn-production" },
  { title: "Laboratory", icon: <Microscope className="w-4 h-4" />, route: "/equipment/complete-list/laboratory" },
  { title: "Climate Control", icon: <Thermometer className="w-4 h-4" />, route: "/equipment/complete-list/climate-control" },
  { title: "Ventilation", icon: <Wind className="w-4 h-4" />, route: "/equipment/complete-list/ventilation" },
  { title: "Water Management", icon: <Droplet className="w-4 h-4" />, route: "/equipment/complete-list/water-management" },
  { title: "Harvest & Post-Harvest", icon: <Archive className="w-4 h-4" />, route: "/equipment/complete-list/harvest-post-harvest" },
  { title: "Cold Chain", icon: <Sun className="w-4 h-4" />, route: "/equipment/complete-list/cold-chain" },
  { title: "Processing", icon: <Settings className="w-4 h-4" />, route: "/equipment/complete-list/processing" },
  { title: "Material Handling", icon: <Layers className="w-4 h-4" />, route: "/equipment/complete-list/material-handling" },
  { title: "Electrical & Power", icon: <Zap className="w-4 h-4" />, route: "/equipment/complete-list/electrical-power" },
  { title: "Cleaning & Biosecurity", icon: <ShieldAlert className="w-4 h-4" />, route: "/equipment/complete-list/cleaning-biosecurity" },
  { title: "Quality Control", icon: <Activity className="w-4 h-4" />, route: "/equipment/complete-list/quality-control" },
  { title: "Safety Equipment", icon: <Shield className="w-4 h-4" />, route: "/equipment/complete-list/safety-additional" },
  { title: "Waste Management", icon: <Recycle className="w-4 h-4" />, route: "/equipment/complete-list/waste-management" }
];

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
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list#webpage",
      url: "https://organicmushroomsfarm.com/equipment/complete-list",
      name: "Mushroom Farming Equipment Directory | Organic Mushrooms Farm",
      description: "Complete directory for mushroom farming equipment, machinery, safety material, lab tools, and climate control systems.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/equipment/complete-list#breadcrumb",
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
        },
      ],
    },
  ],
};

export default function EquipmentCompleteListPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[10.5px] md:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
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
            <li
              aria-current="page"
              className="text-slate-800 dark:text-slate-200 truncate"
            >
              Complete List
            </li>
          </ol>
        </nav>

        {/* Header section */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3 md:mb-4">
            Equipment & Machinery
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive directory of commercial mushroom farming equipment categorized by scale and process requirements.
          </p>
        </div>

        {/* 3 Main Scale-wise Boxes */}
        <section aria-labelledby="main-categories-heading" className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          <h2 id="main-categories-heading" className="sr-only">Main Equipment Categories</h2>
          {mainCategories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.route}
              className="group bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs rounded-[1.5rem] p-4 md:p-6 shadow-sm hover:shadow-md border border-black/5 dark:border-white/5 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center sm:items-start sm:text-left hover:border-emerald-500/30 hover:bg-emerald-500/[0.02]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-[100px] -mr-10 -mt-10 transition-transform group-hover:scale-110 hidden sm:block pointer-events-none" />
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/50 dark:bg-slate-800/50 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-3 md:mb-4 shrink-0 shadow-sm border border-black/5 dark:border-white/5">
                {cat.icon}
              </div>
              <h3 className="text-sm md:text-lg font-bold text-slate-900 dark:text-white mb-1 md:mb-2 leading-tight">
                {cat.title}
              </h3>
              <p className="text-[10.5px] sm:text-[11px] text-slate-600 dark:text-slate-400 mb-3 md:mb-4 hidden sm:block leading-relaxed">
                {cat.desc}
              </p>
              <div className="hidden sm:flex items-center text-emerald-600 dark:text-emerald-400 font-semibold text-[11px] sm:text-xs group-hover:gap-1.5 transition-all mt-auto">
                View Full List <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </Link>
          ))}
        </section>

        {/* 18 Specific Process-wise Grid */}
        <section aria-labelledby="process-categories-heading">
          <header className="mb-4 md:mb-6 border-b border-black/5 dark:border-white/5 pb-4 text-center sm:text-left">
            <h2 id="process-categories-heading" className="text-sm sm:text-lg md:text-2xl font-bold text-slate-900 dark:text-white mb-1 md:mb-2">
              Process-Specific Directories
            </h2>
            <p className="text-[10.5px] sm:text-[11px] md:text-xs text-slate-600 dark:text-slate-400">
              Browse detailed equipment lists by department or operational process.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4">
            {subCategories.map((sub, idx) => (
              <Link
                key={idx}
                href={sub.route}
                className="group flex flex-row items-center bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md border border-black/5 dark:border-white/5 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/[0.02]"
              >
                <div className="text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mr-2.5 md:mr-3 shrink-0 flex items-center justify-center">
                  {sub.icon}
                </div>
                <h3 className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight flex-1">
                  {sub.title}
                </h3>
                <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 ml-1 opacity-40 md:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-slate-400 dark:text-slate-500" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
