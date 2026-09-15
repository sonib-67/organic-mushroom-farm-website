import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Equipment & Setup Solutions | Organic Mushrooms Farm",
  description:
    "Discover top-quality mushroom farming equipment, from climate control and humidification to sterilization and cold storage. We provide complete farm setup solutions, turnkey projects, and advanced tools.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/equipment",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming Equipment & Setup Solutions | Organic Mushrooms Farm",
    description:
      "Discover top-quality mushroom farming equipment, from climate control and humidification to sterilization and cold storage.",
    url: "https://organicmushroomsfarm.com/equipment",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Equipment & Setup Solutions | Organic Mushrooms Farm",
    description:
      "Discover top-quality mushroom farming equipment, from climate control and humidification to sterilization and cold storage.",
  },
};

const equipmentCategories = [
  {
    title: "Farm Infrastructure & Insulation",
    desc: "Build durable, energy-efficient mushroom growing rooms with PUF insulation panels and structural materials for optimal climate retention.",
    link: "/equipment/infrastructure-and-insulation",
  },
  {
    title: "Mushroom Growing & Cultivation",
    desc: "High-quality aluminum racks, shelving, and growing beds designed to maximize crop yield and optimize space in your commercial farm.",
    link: "/equipment/growing-racks-and-shelving",
  },
  {
    title: "Temperature & Climate Control",
    desc: "Maintain the perfect growing environment with advanced HVAC systems, chillers, and heaters for precision temperature management.",
  },
  {
    title: "Humidification & Fogging",
    desc: "Ensure ideal moisture levels for button and oyster mushrooms with high-pressure fogging systems and ultrasonic humidifiers.",
  },
  {
    title: "Ventilation & Air Management",
    desc: "Promote healthy crop cycles with industrial exhaust fans, blowers, and CO2 management systems for proper air circulation.",
  },
  {
    title: "Air Filtration & Clean-Air Systems",
    desc: "Prevent contamination with HEPA filters and clean-air solutions, essential for spawn running rooms and tissue culture labs.",
  },
  {
    title: "Water & Irrigation Systems",
    desc: "Efficient watering solutions including RO plants, micro-sprayers, and drip systems for consistent substrate hydration.",
  },
  {
    title: "Lighting Systems",
    desc: "Energy-efficient LED lighting setups tailored for specific mushroom growth stages and safe, comfortable harvesting.",
  },
  {
    title: "Power & Backup Systems",
    desc: "Uninterrupted power supply solutions including heavy-duty generators and inverters to safeguard your climate-controlled farm operations.",
  },
  {
    title: "Electrical & Automation",
    desc: "Smart control panels and automated timers to seamlessly manage climate, watering, and lighting with minimal manual effort.",
  },
  {
    title: "Sterilization & Hygiene",
    desc: "Industrial autoclaves, boilers, and sanitization chemicals to maintain a disease-free, 100% sterile farming environment.",
  },
  {
    title: "Pest & Disease Control",
    desc: "Safe, organic, and highly effective pest management solutions including insect traps, UV sanitizers, and bio-pesticides.",
  },
  {
    title: "Testing & Monitoring Instruments",
    desc: "Accurate sensors and digital meters for real-time monitoring of temperature, humidity, CO2 levels, and compost pH.",
  },
  {
    title: "Lab & Tissue Culture Setup",
    desc: "Complete laboratory equipment including Laminar Air Flow cabinets and incubators for high-quality, commercial spawn production.",
  },
  {
    title: "Substrate/Compost Preparation",
    desc: "Heavy-duty compost turners, mixers, and bunkers designed for fast, efficient, and large-scale substrate processing.",
  },
  {
    title: "Consumables & Raw Materials",
    desc: "Premium quality casing soil, nutritional supplements, and essential raw materials required for healthy mushroom cultivation.",
  },
  {
    title: "Spawn & Inoculation",
    desc: "High-yielding, disease-free mushroom spawn (seeds) and precision inoculation tools for faster mycelium colonization.",
  },
  {
    title: "Harvesting & Processing",
    desc: "Ergonomic picking trolleys, specialized cutting tools, and processing tables to streamline your daily mushroom harvesting.",
  },
  {
    title: "Grading & Quality Control",
    desc: "Accurate weighing scales and sorting machinery to ensure uniform sizing and premium, market-ready mushrooms.",
  },
  {
    title: "Drying & Value-Added Processing",
    desc: "Industrial dehydrators and processing machines for creating profitable mushroom powder, pickles, and dried varieties.",
  },
  {
    title: "Material Handling & Logistics",
    desc: "Pallet trucks, conveyors, and trolleys for smooth and safe movement of heavy compost, spawn, and harvested crops.",
  },
  {
    title: "Cold Storage & Refrigeration",
    desc: "Advanced cold room setups and insulated doors to extend the shelf life and preserve the freshness of your harvested mushrooms.",
  },
  {
    title: "Packaging",
    desc: "Food-grade punnets, breathable wrapping films, and vacuum sealing machines for attractive, retail-ready mushroom packaging.",
  },
  {
    title: "Safety & Worker Gear",
    desc: "Protective clothing, masks, gloves, and footwear to ensure complete hygiene and maximum safety for your farm staff.",
  },
  {
    title: "Waste Management & Disposal",
    desc: "Eco-friendly solutions and machinery for recycling spent mushroom substrate (SMS) into valuable organic fertilizer.",
  },
  {
    title: "Farm Management Software",
    desc: "Smart digital tools and applications to track daily yield, manage inventory, and monitor your farm's climate remotely.",
  },
  {
    title: "Research, Training & Demonstration",
    desc: "Educational cultivation kits and mini-setups perfect for agricultural institutes, online workshops, and beginner training.",
  },
  {
    title: "Mushroom Farm Accessories & Tools",
    desc: "Essential daily-use tools including portable hygrometers, spray bottles, and measuring equipment for everyday operations.",
  },
  {
    title: "Maintenance & Service Equipment",
    desc: "High-quality spare parts, toolkits, and servicing equipment to keep your farm machinery running smoothly without downtime.",
  },
  {
    title: "Complete Farm Setup",
    desc: "End-to-end turnkey solutions including structural planning, machinery supply, and installation for establishing a profitable commercial mushroom farm.",
  },
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
      "@id": "https://organicmushroomsfarm.com/equipment#webpage",
      url: "https://organicmushroomsfarm.com/equipment",
      name: "Mushroom Farming Equipment & Setup Solutions | Organic Mushrooms Farm",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/equipment#breadcrumb",
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
        },
      ],
    },
  ],
};

export default function EquipmentPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[10.5px] md:text-[11.5px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
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
            <li
              aria-current="page"
              className="text-slate-800 dark:text-slate-200 truncate"
            >
              Equipment
            </li>
          </ol>
        </nav>

        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight mb-3">
            Mushroom Farming Equipment
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium max-w-3xl mb-6 leading-relaxed">
            Discover top-quality equipment for your commercial mushroom farm. Select a category below to explore our advanced solutions designed to maximize your yield and profitability.
          </p>

          <section className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs rounded-[2rem] border border-black/5 dark:border-white/5 p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-sm mb-8 md:mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 dark:from-emerald-500/5 dark:to-emerald-400/0 pointer-events-none" />
            <div className="text-center md:text-left relative z-10">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Mushroom Equipment Guide
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-[10.5px] sm:text-[11.5px] max-w-2xl leading-relaxed">
                A complete equipment list covering everything used in mushroom cultivation — from a beginner's home setup to a fully automated commercial mushroom production plant.
              </p>
            </div>
            <Link
              href="/equipment/complete-list"
              className="relative z-10 whitespace-nowrap px-6 py-2.5 bg-emerald-600 text-white text-[11px] sm:text-xs font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm w-full md:w-auto text-center"
            >
              View Complete List
            </Link>
          </section>
        </div>

        <section className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 p-5 md:p-8 relative overflow-hidden">
          <header className="mb-6 border-b border-black/5 dark:border-white/5 pb-4">
            <h2 className="text-base sm:text-lg font-bold dark:text-white text-slate-900">
              Equipment Details & Categories
            </h2>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {equipmentCategories.map((cat, idx) => {
              const Wrapper = cat.link ? Link : "div";
              return (
                <Wrapper
                  key={idx}
                  href={cat.link || "#"}
                  className={`flex flex-col p-4 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] transition-all group ${
                    cat.link ? "hover:border-emerald-500/40 hover:bg-emerald-500/[0.04] cursor-pointer" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      {cat.title}
                    </h3>
                    {cat.link && (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0" />
                    )}
                  </div>
                  <p className="text-[10px] sm:text-[10.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </Wrapper>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
