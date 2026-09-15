import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Growing Racks & Shelving | Organic Mushroom Farm",
  description:
    "Maximize your mushroom crop yield with high-quality, rust-proof aluminum growing racks and shelving designed for commercial organic mushroom farms.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/equipment/growing-racks-and-shelving",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Growing Racks & Shelving | Organic Mushroom Farm",
    description:
      "Maximize your mushroom crop yield with high-quality, rust-proof aluminum growing racks and shelving designed for commercial organic mushroom farms.",
    url: "https://organicmushroomsfarm.com/equipment/growing-racks-and-shelving",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Growing Racks & Shelving | Organic Mushroom Farm",
    description:
      "Maximize your mushroom crop yield with high-quality, rust-proof aluminum growing racks and shelving designed for commercial organic mushroom farms.",
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
      "@id": "https://organicmushroomsfarm.com/equipment/growing-racks-and-shelving#webpage",
      url: "https://organicmushroomsfarm.com/equipment/growing-racks-and-shelving",
      name: "Mushroom Growing Racks & Shelving | Organic Mushroom Farm",
      description: "Maximize your mushroom crop yield with high-quality, rust-proof aluminum growing racks and shelving designed for commercial organic mushroom farms.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/equipment/growing-racks-and-shelving#breadcrumb",
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
          name: "Growing Racks & Shelving",
        },
      ],
    },
  ],
};

export default function GrowingRacksShelvingPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 relative">
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
              Growing Racks & Shelving
            </li>
          </ol>
        </nav>

        <div className="mb-8 md:mb-12">
          <Link
            href="/equipment"
            className="text-emerald-600 dark:text-emerald-400 hover:underline mb-4 inline-block text-[11px] font-semibold"
          >
            &larr; Back to Equipment
          </Link>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-black dark:text-white text-slate-900 tracking-tight mb-6 leading-tight">
            Maximizing Crop Yield:{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Mushroom Growing Racks & Shelving
            </span>
          </h1>
          <p className="text-[11px] sm:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mb-4">
            In commercial mushroom cultivation, your floor space is your most valuable asset. But true profitability doesn't come from just expanding your floor plan—it comes from growing vertically. Upgrading your farm with high-quality aluminum racks, durable shelving, and properly structured growing beds is the secret to maximizing crop yield while minimizing your physical footprint.
          </p>
          <p className="text-[11px] sm:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
            Whether you are scaling an{" "}
            <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">
              organic mushroom farm
            </Link>{" "}
            or building a state-of-the-art facility for{" "}
            <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">
              button mushrooms
            </Link>
            , the right structural support system can make or break your harvest.
          </p>
        </div>

        <section className="mb-8 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden">
          <h2 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Why High-Quality Aluminum Racks are a Game Changer
          </h2>
          <p className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            When building out a commercial mushroom farm, standard steel or wood shelving simply won't survive. Mushroom growing rooms are high-humidity environments (often running at 80-90% humidity), which is a recipe for rust and rot. Aluminum is the industry standard for several critical reasons:
          </p>
          <ul className="space-y-4 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300">
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">100% Rust-Proof & Corrosion Resistant:</strong> Aluminum shelving withstands constant moisture, daily watering, and the high humidity necessary for healthy mycelium growth.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Superior Sanitation:</strong> Disease control is everything in mushroom cultivation. Aluminum racks are non-porous and incredibly easy to sanitize, preventing mold, bacteria, or cross-contamination between flushes.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Lightweight yet Heavy-Duty:</strong> Compost, casing soil, and mature mushrooms are incredibly heavy. Premium aluminum beds offer exceptional load-bearing capacity without putting structural strain on your facility.
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden">
          <h2 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Designing Growing Beds to Maximize Crop Yield
          </h2>
          <p className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            A well-designed growing bed directly impacts your bottom line. It's not just about stacking trays; it's about creating the perfect micro-environment for every single mushroom.
          </p>
          <ul className="space-y-4 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300">
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Optimized Vertical Spacing:</strong> The distance between your tiers is crucial. Too close, and you restrict airflow, leading to high CO2 pockets and deformed caps. Too far apart, and you waste valuable vertical space. A standard 5-to-6 tier aluminum rack system is ideal for button mushroom cultivation.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Seamless Airflow & Ventilation:</strong> Commercial growing racks are designed with open grids or perforated shelving. This allows your carefully managed climate-controlled air to circulate evenly through the beds, ensuring consistent growth across the entire room.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Ergonomic Harvesting Angles:</strong> High-quality growing beds are designed with the farmworker in mind. Proper bed depth and height reduce fatigue during picking, speeding up the harvest and lowering labor costs.
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden">
          <h2 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            How to Optimize Space in Your Commercial Farm
          </h2>
          <p className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Space optimization isn't just about packing in as many racks as possible. It's about workflow and efficiency.
          </p>
          <ul className="space-y-4 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300">
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Aisle Width Matters:</strong> Leave enough room between your shelving rows for harvesting carts, scissor lifts, and easy movement of compost bags. A cramped room leads to accidents and damaged crops.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Modular Shelving Systems:</strong> Invest in adjustable racks. As your farm scales or you experiment with different{" "}
                <Link href="/mushroom-types" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">
                  mushroom varieties
                </Link>
                , modular shelving allows you to change tier heights without buying new equipment.
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden">
          <h2 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Essential Accessories for Your Cultivation Setup
          </h2>
          <p className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            To get the most out of your aluminum racks, you will want to integrate these essential accessories into your workflow:
          </p>
          <ul className="space-y-2 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>Heavy-duty perforated growing trays.</li>
            <li>Nylon picking nets for easy bed clearing.</li>
            <li>Clip-on LED grow lights for specific phototropic varieties.</li>
          </ul>
        </section>

        <div className="bg-emerald-500/10 dark:bg-emerald-500/10 border-l-4 border-emerald-500 p-6 rounded-r-[2rem] rounded-bl-sm">
          <p className="text-[11px] text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">Pro Tip:</span> Don't cut corners on your framing. Investing in premium aluminum shelving ensures a hygienic environment, better airflow, and a layout that practically guarantees a high-yield harvest flush after flush. <Link href="/contact" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">Consult with our experts</Link> to design your farm layout perfectly.
          </p>
        </div>
      </article>
    </main>
  );
}
