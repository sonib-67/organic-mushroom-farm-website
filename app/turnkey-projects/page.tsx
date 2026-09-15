import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Layers,
  Sprout,
  Home,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  PhoneCall
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Commercial Turnkey Mushroom Farm Setup India | Complete Setup Service",
  description:
    "Build your industrial mushroom unit with our commercial turnkey solutions. Expert project setups for button mushroom farming in Jabalpur, across India, USA, and Australia.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/turnkey-projects",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Commercial Turnkey Mushroom Farm Setup India | Complete Setup Service",
    description:
      "Build your industrial mushroom unit with our commercial turnkey solutions. Expert project setups for button mushroom farming in Jabalpur, across India, USA, and Australia.",
    url: "https://organicmushroomsfarm.com/turnkey-projects",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Commercial Turnkey Mushroom Farm Setup India | Complete Setup Service",
    description:
      "Build your industrial mushroom unit with our commercial turnkey solutions. Expert project setups for button mushroom farming in Jabalpur, across India, USA, and Australia.",
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
      logo: "https://organicmushroomsfarm.com/icon.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9203544140",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
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
      "@id": "https://organicmushroomsfarm.com/turnkey-projects#webpage",
      url: "https://organicmushroomsfarm.com/turnkey-projects",
      name: "Commercial Turnkey Mushroom Farm Setup India | Complete Setup Service",
      description:
        "Build your industrial mushroom unit with our commercial turnkey solutions. Expert project setups for button mushroom farming in Jabalpur, across India, USA, and Australia.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/turnkey-projects#breadcrumb",
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
          name: "Turnkey Projects",
          item: "https://organicmushroomsfarm.com/turnkey-projects",
        },
      ],
    },
  ],
};

const mushroomSetups = [
  {
    type: "Button Mushroom Setup (Agaricus bisporus)",
    description:
      "Our state-of-the-art commercial high-yield climate controlled units. Tailored for industrial scale, utilizing dense 80-100mm PUF panel walls, fully automated air handling units (AHU), and sophisticated chiller plants to maintain a constant 14-18°C temperature with automated composting support.",
    cost: "₹15 Lakhs - ₹1.5 Crore",
    keySpecs: [
      "Double tier MS/GI growing racks",
      "100mm Insulated PUF panel cold room doors",
      "High-pressure fogging humification",
      "Expert market and packing linkage",
    ],
    badge: "High Yield & Popular",
    icon: Layers,
  },
  {
    type: "Oyster Mushroom Setup (Pleurotus ostreatus)",
    description:
      "Elegant, cost-friendly, and perfect for highly rapid cultivation cycles. Features a low-overhead vertical structure utilizing suspension rope/hanging bags or modular compact steel frames. Highly productive with natural ventilation systems or basic air-cooling units for quick regional crops.",
    cost: "₹2 Lakhs - ₹10 Lakhs",
    keySpecs: [
      "Foliage suspended grow chambers",
      "Evaporative humidifier grids",
      "Optimal light diffusion layouts",
      "Extremely quick 28-day harvest cycles",
    ],
    badge: "Fast ROI",
    icon: Sprout,
  },
  {
    type: "Milky Mushroom Setup (Calocybe indica)",
    description:
      "Specially engineered for tropical and high-temperature regions. Uses durable agricultural row polyhouses, custom soil casing beds, and regional crop patterns. High temperature tolerance up to 35°C makes it extremely budget-friendly in power consumption and solar cooling designs.",
    cost: "₹3 Lakhs - ₹12 Lakhs",
    keySpecs: [
      "Naturally insulated crop polyhouse",
      "Sand-and-soil base casing parameters",
      "High solar ambient light design",
      "Long shelf-life post-harvest structure",
    ],
    badge: "Heat Tolerant",
    icon: Home,
  },
  {
    type: "Shiitake Mushroom Setup (Lentinula edodes)",
    description:
      "Advanced premium setup including autoclave sterilization chambers, specialized substrate bagging, and sterile laboratory inoculation rooms. High-yield production on sawdust blocks under precision photoperiod lighting (LED) and localized fine-mist water supply.",
    cost: "₹8 Lakhs - ₹35 Lakhs",
    keySpecs: [
      "High-pressure thermal autoclave unit",
      "HEPA filtered sterile inoculation booth",
      "Programmable humidity/irrigation controls",
      "Premium luxury market segment placement",
    ],
    badge: "Premium Margin",
    icon: ShieldCheck,
  },
  {
    type: "Enoki & Exotic Specialty Setup",
    description:
      "Precision-grade vertical bottle farming. Employs advanced smart environmental control units, sophisticated automated bottle-filling machinery, automated harvest cutting tools, and ultra-cooling sterilization setups. Intended for local luxury restaurants and worldwide commercial export channels.",
    cost: "₹25 Lakhs - ₹1.2 Crore",
    keySpecs: [
      "Sophisticated bottle culture mechanics",
      "Ultra-pure clean room air filters",
      "Dynamic temperature shock incubation",
      "Automated robot packing compatibility",
    ],
    badge: "Ultra Tech",
    icon: Zap,
  },
];

export default function TurnkeyProjectsPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 relative z-20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Subtle ambient light gradient glows (Transparent, no opaque blocks) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[12%] right-[10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      <header className="max-w-4xl mx-auto px-4 relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-extrabold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-emerald-500/20 mb-4">
          <Home size={12} /> Commercial Turnkey Solutions
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
          Commercial Farm <span className="text-emerald-600 dark:text-emerald-400">Infrastructure</span>
        </h1>

        <p className="dark:text-slate-300 text-slate-700 text-[11px] md:text-[12px] font-medium max-w-2xl mx-auto leading-relaxed">
          Ready-to-harvest mushroom units designed for high-yield precision and global export. We build turnkey commercial farms tailored for maximum efficiency. Explore our specialized setups below and read how our past clients achieved success in our <Link href="/success-stories" className="text-emerald-600 font-bold hover:underline">success stories</Link>. If you require a deep-dive, consider our <Link href="/on-site-consultation" className="text-emerald-600 font-bold hover:underline">on-site consultation</Link> or understand our <Link href="/subsidy" className="text-emerald-600 font-bold hover:underline">government subsidy assistance</Link>.
        </p>
      </header>

      {/* Farming Models Section */}
      <section aria-label="Commercial Farming Models" className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-3 tracking-tight">
            All Types of <span className="text-emerald-600 dark:text-emerald-400">Mushroom Farm Setup</span>
          </h2>
          <p className="dark:text-slate-300 text-slate-700 text-[11px] md:text-[12px] max-w-3xl mx-auto">
            Our high-yield custom layouts focus on extreme climate automation, PUF panel cold rooms, and dynamic humification systems to guarantee max return on your commercial investment. Read more about <Link href="/mushroom-types" className="text-emerald-600 font-bold hover:underline">all mushroom types</Link>.
          </p>
        </div>

        <div className="space-y-6">
          {mushroomSetups.map((setup, i) => (
            <article
              key={i}
              className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-5 md:p-8 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-sm hover:border-emerald-500/30 transition-colors flex flex-col lg:flex-row gap-6 items-center group"
            >
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-[1.5rem] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                <setup.icon size={28} />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-extrabold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-md">
                    {setup.badge}
                  </span>
                  <h3 className="text-sm md:text-base font-black text-slate-900 dark:text-white tracking-tight">
                    {setup.type}
                  </h3>
                </div>
                
                <p className="text-[11px] dark:text-slate-300 text-slate-700 leading-relaxed">
                  {setup.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {setup.keySpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-1.5 text-[10px] text-slate-600 dark:text-slate-400 font-semibold">
                      <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA Container */}
              <div className="w-full lg:w-auto shrink-0 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl p-4 text-center space-y-3 lg:min-w-[200px]">
                <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Setup Investment Cost
                </div>
                <div className="text-sm md:text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                  {setup.cost}
                </div>
                <a
                  href={`https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20setting%20up%20a%20${encodeURIComponent(setup.type)}.%20Please%20share%20quotation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-extrabold px-4 py-2.5 rounded-xl shadow-xs transition-colors uppercase tracking-wider"
                >
                  Get Quotation <ArrowRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Inquiry Form Call To Action */}
      <section className="max-w-4xl mx-auto px-4 mt-12 text-center relative z-10" aria-label="Turnkey Plant Setup Inquiry">
        <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-sm space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2">
            Instant Quotation & Project Planning
          </div>
          
          <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white">
            Turnkey Plant Setup Inquiry
          </h2>
          
          <p className="dark:text-slate-300 text-slate-700 text-[11px] max-w-xl mx-auto leading-relaxed">
            For large scale and commercial setups, please provide your exact needs. Our tech specialists will outline custom layouts, calculate full machinery costs, and provide a comprehensive project brief. Need to know more about equipment? See our <Link href="/equipment" className="text-emerald-600 font-bold hover:underline">equipment list</Link> first.
          </p>

          <div className="pt-3">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-extrabold px-6 py-2.5 rounded-xl shadow-sm hover:scale-[1.02] transition-transform uppercase tracking-wider"
            >
              <PhoneCall size={13} /> Submit Enquiry Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
