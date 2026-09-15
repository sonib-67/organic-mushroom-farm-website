import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Karnataka Mushroom Farming Training & Commercial Setup Resources",
  description:
    "Find the best mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Karnataka including Bangalore, Mysuru, and Mangalore.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/karnataka",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Karnataka Mushroom Farming Training & Commercial Setup Resources",
    description:
      "Find the best mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Karnataka including Bangalore, Mysuru, and Mangalore.",
    url: "https://organicmushroomsfarm.com/states/karnataka",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Karnataka Mushroom Farming Training & Commercial Setup Resources",
    description:
      "Find the best mushroom farming training, commercial setups, spawn suppliers, and expert advice across cities in Karnataka including Bangalore, Mysuru, and Mangalore.",
  },
};

export default function KarnatakaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://organicmushroomsfarm.com/#organization",
        name: "Organic Mushrooms Farm",
        url: "https://organicmushroomsfarm.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://organicmushroomsfarm.com/icon.png",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://organicmushroomsfarm.com/#website",
        url: "https://organicmushroomsfarm.com/",
        name: "Organic Mushrooms Farm",
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/states/karnataka#webpage",
        url: "https://organicmushroomsfarm.com/states/karnataka",
        name: "Karnataka Mushroom Farming Training & Resources",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        description:
          "Find mushroom farming training, commercial setups, and resources across cities in Karnataka.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://organicmushroomsfarm.com/",
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
            name: "Karnataka",
            item: "https://organicmushroomsfarm.com/states/karnataka",
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
      <main className="pt-24 pb-16 min-h-screen bg-transparent relative overflow-hidden">
        {/* Animated gradient or background visual element without covering the app's global background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-6 flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
            <ChevronRight size={10} />
            <Link href="/states" className="hover:text-brand-blue transition-colors">
              States
            </Link>
            <ChevronRight size={10} />
            <span className="font-semibold text-slate-900 dark:text-white">
              Karnataka
            </span>
          </nav>

          <header className="mb-8">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="text-brand-blue" size={24} />
              Karnataka Mushroom Resources
            </h1>
          </header>

          <section className="glass bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Karnataka is an excellent region for commercial mushroom farming due to its favorable climate, tech-savvy agricultural sector, and high demand in urban centers. We offer extensive resources and support to help you establish highly profitable organic mushroom farms, including both low-cost setups for small entrepreneurs and fully automated commercial units.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              For individuals and businesses in the tech capital, you can explore premium mushroom training, cultivation resources, and modern commercial setups in{" "}
              <Link href="/cities/karnataka/bangalore" className="text-brand-blue font-semibold hover:underline">Bangalore</Link>. 
              If you are operating in the cultural capital of the state, we provide expert guidance on mushroom farming, professional training, reliable spawn supply, and turnkey mushroom farm setups in{" "}
              <Link href="/cities/karnataka/mysuru" className="text-brand-blue font-semibold hover:underline">Mysuru</Link>.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Coastal regions also present unique opportunities for specialized cultivation. You can get specialized mushroom farming support, training, spawn supply, and complete mushroom farm setups in{" "}
              <Link href="/mushroom-farming-mangalore-karnataka" className="text-brand-blue font-semibold hover:underline">Mangalore</Link>, 
              where we also offer resources accessible in local Tulu and Kannada languages to ensure better community integration and understanding.
            </p>

            <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              Whether you are planning to grow Oyster, White Button, Milky, or exotic varieties like Shiitake and Cordyceps, our state-wide network in Karnataka ensures you have access to the best quality seeds (spawn), advanced climate control machinery, reliable market linkages, and continuous agronomic support.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
