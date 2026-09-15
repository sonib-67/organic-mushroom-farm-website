import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farm Infrastructure & Insulation | Organic Mushroom Farm",
  description:
    "Discover why proper infrastructure and PUF insulation panels are essential for a commercial organic mushroom farm. Maximize yield and reduce energy costs.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/equipment/infrastructure-and-insulation",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farm Infrastructure & Insulation | Organic Mushroom Farm",
    description:
      "Discover why proper infrastructure and PUF insulation panels are essential for a commercial organic mushroom farm. Maximize yield and reduce energy costs.",
    url: "https://organicmushroomsfarm.com/equipment/infrastructure-and-insulation",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farm Infrastructure & Insulation | Organic Mushroom Farm",
    description:
      "Discover why proper infrastructure and PUF insulation panels are essential for a commercial organic mushroom farm. Maximize yield and reduce energy costs.",
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
      "@id": "https://organicmushroomsfarm.com/equipment/infrastructure-and-insulation#webpage",
      url: "https://organicmushroomsfarm.com/equipment/infrastructure-and-insulation",
      name: "Mushroom Farm Infrastructure & Insulation | Organic Mushroom Farm",
      description: "Discover why proper infrastructure and PUF insulation panels are essential for a commercial organic mushroom farm. Maximize yield and reduce energy costs.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/equipment/infrastructure-and-insulation#breadcrumb",
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
          name: "Infrastructure & Insulation",
        },
      ],
    },
  ],
};

export default function InfrastructureInsulationPage() {
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
              Infrastructure & Insulation
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
            Mushroom Farm{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Infrastructure & Insulation
            </span>
          </h1>
          <p className="text-[11px] sm:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
            Mushroom cultivation is a delicate science where precise climate control is everything. Whether you are setting up a{" "}
            <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">
              commercial organic mushroom farm
            </Link>{" "}
            or building an experimental growing room, having the right infrastructure is non-negotiable. Proper insulation ensures that your temperature and humidity remain stable, reducing energy costs and maximizing your crop yield.
          </p>
        </div>

        <section className="mb-8 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden">
          <h2 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Why Premium PUF Insulation Panels are Essential
          </h2>
          <p className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Polyurethane Foam (PUF) panels are the gold standard for mushroom growing rooms. They offer superior thermal resistance, ensuring your HVAC and cooling systems don't have to overwork to maintain the perfect environment.
          </p>
          <ul className="space-y-4 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300">
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Maximum Energy Efficiency:</strong> High-density PUF panels lock in the cold air, drastically lowering electricity bills for commercial setups.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Complete Moisture Resistance:</strong> Mushroom rooms require 80% to 90% humidity. PUF panels prevent wall condensation and structural mold damage.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Long-lasting Durability:</strong> Unlike basic thermocol, structural PUF panels provide a robust, cleanable framework that lasts for years.
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden">
          <h2 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Key Components of a Complete Growing Room
          </h2>
          <p className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Building durable, energy-efficient mushroom growing rooms requires more than just four walls. Integrating the right structural materials is vital for a seamless setup, especially if you plan to demonstrate professional techniques in{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
            >
              online training courses
            </Link>{" "}
            or scale your operations.
          </p>
          <ul className="space-y-4 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300">
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Heavy-Duty Vapor Barriers:</strong> Essential to prevent moisture from seeping into the structural joints and compromising insulation.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Epoxy Coated Floors:</strong> Easy to sanitize, preventing bacterial buildup and contamination between flushes.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Sealed Insulated Doors:</strong> Equipped with heavy-duty rubber gaskets to maintain optimal climate retention and prevent air leaks.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Controlled Exhaust & Intake:</strong> Strategically placed fresh air vents for proper CO2 management, especially crucial for button mushrooms.
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden">
          <h2 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Setting Up for Optimal Climate Retention
          </h2>
          <p className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            To get the absolute best results from your harvest, your farm infrastructure must perfectly support your climate control systems.
          </p>
          <ul className="space-y-4 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300">
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Seal Every Gap:</strong> Even a millimeter-wide leak can disrupt your carefully managed humidity levels. Use high-grade silicone sealants on every joint.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Select the Right Panel Thickness:</strong> Choose 60mm to 100mm PUF panels depending on your local climate's extreme temperatures.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold shrink-0 text-xs">✓</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Smart Sensor Placement:</strong> Position your temperature and CO2 sensors away from direct airflow to ensure accurate environmental readings.
              </div>
            </li>
          </ul>
        </section>

        <div className="bg-emerald-500/10 dark:bg-emerald-500/10 border-l-4 border-emerald-500 p-6 rounded-r-[2rem] rounded-bl-sm">
          <p className="text-[11px] text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">Pro Tip:</span> Invest in farm infrastructure from day one. It pays off by creating the perfect, stable microclimate, ensuring consistent and high-quality flushes year-round. <Link href="/contact" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">Consult with our experts</Link> to get started.
          </p>
        </div>
      </article>
    </main>
  );
}
