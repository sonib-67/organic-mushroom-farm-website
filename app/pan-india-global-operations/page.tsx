import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Globe, Building, Sprout, ShieldCheck, Users } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Pan India & Global Operations | Organic Mushrooms Farm",
  description:
    "Explore our operational network. From state-of-the-art regional consulting units across Indian provinces to custom industrial consulting for international mushroom growers.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/pan-india-global-operations",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pan India & Global Operations | Organic Mushrooms Farm",
    description:
      "Explore our operational network. From state-of-the-art regional consulting units across Indian provinces to custom industrial consulting for international growers.",
    url: "https://organicmushroomsfarm.com/pan-india-global-operations",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pan India & Global Operations | Organic Mushrooms Farm",
    description:
      "Explore our operational network. From state-of-the-art regional consulting units across Indian provinces to custom industrial consulting for international growers.",
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
      "@id": "https://organicmushroomsfarm.com/pan-india-global-operations#webpage",
      url: "https://organicmushroomsfarm.com/pan-india-global-operations",
      name: "Pan India & Global Operations | Organic Mushrooms Farm",
      description: "Explore our operational network. From state-of-the-art regional consulting units across Indian provinces to custom industrial consulting for international mushroom growers.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/pan-india-global-operations#breadcrumb",
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
          name: "Operations",
        },
      ],
    },
  ],
};

const domesticLocations = [
  "Madhya Pradesh", "Maharashtra", "Uttar Pradesh", "Bihar", 
  "Rajasthan", "Gujarat", "Karnataka", "Tamil Nadu", "Kerala"
];

const globalLocations = [
  "USA", "Australia", "Europe", "UAE (Dubai)", "UK", "Canada", "Singapore"
];

export default function OperationsPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-[10.5px] md:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide flex-wrap">
            <li>
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200 truncate font-semibold">
              Operations
            </li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs text-slate-700 dark:text-slate-300 text-[10.5px] font-bold mb-6 border border-black/10 dark:border-white/10">
            <Globe size={14} className="text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span>Pan India & Global Presence</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
            Our Operational <span className="text-emerald-600 dark:text-emerald-400">Network & Reach</span>
          </h1>
          <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            From state-of-the-art regional consulting units across Indian provinces to custom industrial consulting for international growers in the USA, Australia, and Europe.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Domestic Network */}
          <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 relative overflow-hidden flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                <Building size={20} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Domestic Operations (Pan-India)</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full mb-6"></div>
              
              <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 font-medium mb-6 leading-relaxed">
                Our teams provide <strong>mushroom training in India</strong> and <strong>farm setup services</strong> across major regions including Madhya Pradesh, Maharashtra, Uttar Pradesh, and Bihar. We aim to build a strong network of successful mushroom farms.
              </p>
              
              <div className="p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 mt-auto">
                <h4 className="text-[10.5px] font-black text-slate-500 uppercase tracking-widest mb-4">Serving Pan India Cities:</h4>
                <div className="flex flex-wrap gap-2">
                  {domesticLocations.map((loc, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-[10.5px] font-semibold text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full cursor-default">
                      {loc}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 text-[10.5px] font-medium text-slate-500 dark:text-slate-400 rounded-full italic">
                    + Many More...
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: International Operations */}
          <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 relative overflow-hidden flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                <Globe size={20} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Global Reach & Consultancy</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mb-6"></div>
              
              <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 font-medium mb-6 leading-relaxed">
                We offer professional consultancy services worldwide. Our standard procedures, high-yield methods, and climate control setups work effectively in any country.
              </p>
              
              <div className="p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 mt-auto">
                <h4 className="text-[10.5px] font-black text-slate-500 uppercase tracking-widest mb-4">Global Reach & International Consultancy:</h4>
                <div className="flex flex-wrap gap-2">
                  {globalLocations.map((loc, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-[10.5px] font-semibold text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full cursor-default">
                      {loc}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 text-[10.5px] font-medium text-slate-500 dark:text-slate-400 rounded-full italic">
                    + Other Hubs Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 rounded-3xl border border-black/5 dark:border-white/5 text-center shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Sprout size={18} />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Organic F1 Spawn</h4>
            <p className="text-[10.5px] md:text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Supplying high-efficiency F1 mother spawn seeds to extreme climates across domestic and global zones.
            </p>
          </div>
          <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 rounded-3xl border border-black/5 dark:border-white/5 text-center shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={18} />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Turnkey Setups</h4>
            <p className="text-[10.5px] md:text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              SOP-driven climate controls custom-engineered for region-specific seasonal temperature and humidity profiles.
            </p>
          </div>
          <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 rounded-3xl border border-black/5 dark:border-white/5 text-center shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Users size={18} />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Linkage & Training</h4>
            <p className="text-[10.5px] md:text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Direct market mapping connections to distributors and high-standard scientific agricultural program consulting.
            </p>
          </div>
        </div>

        {/* Call To Action */}
        <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-8 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5 text-center shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Start Your Commercial Farm?</h3>
          <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto font-medium">
            Contact our specialist agri-tech consultancy team for custom global setup quotes or verified spawn order logistics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://wa.me/919203544140" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-bold text-[11px] flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
            >
              WhatsApp Support
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 px-8 py-3 rounded-full font-bold text-[11px] text-slate-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Request Project Quote
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
