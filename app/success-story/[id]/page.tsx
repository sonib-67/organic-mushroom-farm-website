import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Factory,
  Timer,
  TrendingUp,
  Cpu,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Building2,
  Calendar
} from "lucide-react";

export const dynamic = "force-static";

interface StoryData {
  id: string;
  name: string;
  role: string;
  location: string;
  capacity: string;
  space: string;
  roi: string;
  timeframe: string;
  investment: string;
  summary: string;
  equipment: string[];
  contextNarrative: React.ReactNode;
}

const STORIES_DATA: Record<string, StoryData> = {
  "rajesh-kumar": {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    role: "Local Farmer & Agripreneur",
    location: "Jabalpur, Madhya Pradesh",
    capacity: "500 Bags (Milky Mushroom)",
    space: "20ft x 15ft Shed",
    roi: "200% (First Cycle Return)",
    timeframe: "15 Days Training + 45 Days Cultivation",
    investment: "₹25,000 - ₹30,000",
    summary:
      "A traditional wheat farmer from Madhya Pradesh who pivoted to Milky mushrooms during the harsh summer months. After attending our 15-day intensive training, Rajesh setup a small 500 bag unit that doubled his seasonal income in just one cycle.",
    equipment: [
      "Substrate Pasteurization Drum",
      "Hygrometer & Digital Thermometer",
      "Manual Foggers & Humidifying Nozzles",
      "Heavy-Duty Exhaust Fans",
      "Multi-Tier Bamboo Racks",
    ],
    contextNarrative: (
      <>
        Rajesh was looking for a high-yield summer crop when wheat prices fluctuated. By participating in our{" "}
        <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          intensive mushroom training program
        </Link>
        , he discovered the resilient biology of Calocybe indica (Milky Mushroom). Using lab-tested{" "}
        <Link href="/spawn-seed" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          first-generation milky spawn
        </Link>{" "}
        and standardizing on{" "}
        <Link href="/sops" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          scientific pasteurization SOPs
        </Link>
        , he eliminated weed molds completely. For prospective growers with sheds or open farmland, our{" "}
        <Link href="/model-details" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          turnkey farm models
        </Link>{" "}
        and{" "}
        <Link href="/book-consultant" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          on-site consultation booking
        </Link>{" "}
        provide the same blueprint Rajesh utilized to double his seasonal revenue.
      </>
    ),
  },
  "sneha-sharma": {
    id: "sneha-sharma",
    name: "Sneha Sharma",
    role: "Student Agripreneur & D2C Founder",
    location: "Delhi NCR",
    capacity: "250 Bags (Lion's Mane & Oyster)",
    space: "12ft x 10ft Balcony / Room",
    roi: "350% (High-value retail)",
    timeframe: "7 Days Training + 90 Days Cultivation",
    investment: "₹40,000 - ₹50,000 (With basic climate control)",
    summary:
      "A college student who utilized her apartment's balcony and vertical space to grow high-value medicinal mushrooms like Lion's Mane. She now runs a successful D2C supplement brand while continuing her studies.",
    equipment: [
      "Ultrasonic Humidifier",
      "Pre-fabricated Grow Tent",
      "Digital Temperature Controller",
      "HEPA Filter Setup",
      "Metal Wire Racks",
    ],
    contextNarrative: (
      <>
        Sneha turned urban apartment limitations into an asset by focusing on high-margin medicinal varieties. Learning through our{" "}
        <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          practical cultivation workshops
        </Link>{" "}
        and studying our{" "}
        <Link href="/articles/medicinal-mushrooms-income-guide-usa" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          medicinal mushroom income guide
        </Link>
        , she produced fresh Lion's Mane and dried extracts. She verified environmental parameters using our{" "}
        <Link href="/mushroom-farm-climate-tracker" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          live climate tracker
        </Link>{" "}
        and continues to scale her D2C brand across metros.
      </>
    ),
  },
  "amit-singhal": {
    id: "amit-singhal",
    name: "Amit Singhal",
    role: "B2B Industrialist & Commercial Grower",
    location: "Indore, Madhya Pradesh",
    capacity: "5 Tons (White Button Mushroom)",
    space: "3 Grow Rooms (40ft x 15ft each)",
    roi: "Break-even in 14 Months",
    timeframe: "3 Months Setup + Continuous Cycle",
    investment: "₹35,00,000+",
    summary:
      "An ex-corporate professional who setup a fully climate-controlled 5-ton capacity Button mushroom unit. After our technical consultancy and market linkage support, he now supplies premium produce to top-tier hotel chains across North India.",
    equipment: [
      "Industrial Chiller Unit (10 Ton)",
      "Automated Climate Control System (PLC)",
      "CO2 Sensors & Exhaust automation",
      "Phase 2 Compost Pasteurization Tunnel",
      "Industrial Humidifier",
    ],
    contextNarrative: (
      <>
        Amit required strict commercial-grade precision for white button mushroom cultivation. Through our{" "}
        <Link href="/compost-unit" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          compost unit pasteurization systems
        </Link>{" "}
        and detailed{" "}
        <Link href="/compost-unit-specs" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          tunnel specifications
        </Link>
        , his farm maintains optimal air circulation and CO2 expulsion year-round. Growers seeking to mirror this commercial scale can schedule an{" "}
        <Link href="/on-site-consultation" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          on-site technical consultation
        </Link>{" "}
        or review{" "}
        <Link href="/subsidy" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
          government subsidy guidance
        </Link>{" "}
        for capital expenditure.
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(STORIES_DATA).map((id) => ({ id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const story = STORIES_DATA[id] || STORIES_DATA["rajesh-kumar"];

  return {
    title: `Project Specs: ${story.name} | Organic Mushrooms Farm`,
    description: `Detailed project specifications, equipment used, and ROI for ${story.name}'s mushroom farming setup.`,
    alternates: {
      canonical: `https://organicmushroomsfarm.com/success-story/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Project Specs: ${story.name} | Organic Mushrooms Farm`,
      description: `Detailed project specifications, equipment used, and ROI for ${story.name}'s mushroom farming setup.`,
      url: `https://organicmushroomsfarm.com/success-story/${id}`,
      siteName: "Organic Mushroom Farm",
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `Project Specs: ${story.name} | Organic Mushrooms Farm`,
      description: `Detailed project specifications, equipment used, and ROI for ${story.name}'s mushroom farming setup.`,
    },
  };
}

export default async function SuccessStoryDetailPage({ params }: PageProps) {
  const { id } = await params;
  const specData = STORIES_DATA[id];

  if (!specData) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://organicmushroomsfarm.com/#organization",
        name: "Organic Mushroom Farm",
        url: "https://organicmushroomsfarm.com",
        logo: "https://organicmushroomsfarm.com/icon.png",
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
        "@id": `https://organicmushroomsfarm.com/success-story/${id}#webpage`,
        url: `https://organicmushroomsfarm.com/success-story/${id}`,
        name: `Project Specs: ${specData.name} | Organic Mushrooms Farm`,
        description: `Detailed project specifications, equipment used, and ROI for ${specData.name}'s mushroom farming setup.`,
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://organicmushroomsfarm.com/success-story/${id}#breadcrumb`,
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
            name: "Success Stories",
            item: "https://organicmushroomsfarm.com/success-stories",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: specData.name,
            item: `https://organicmushroomsfarm.com/success-story/${id}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 relative z-20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Subtle ambient light gradient glows (Transparent, no opaque black blocks) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[12%] right-[8%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[15%] left-[8%] w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      <article className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        {/* Navigation back */}
        <nav aria-label="Breadcrumb navigation" className="mb-2">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors uppercase tracking-widest"
          >
            <ArrowLeft size={13} /> Back to Success Stories
          </Link>
        </nav>

        {/* Glass Card Container (No black boxes, transparent glassmorphic aesthetic) */}
        <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-sm space-y-8 relative overflow-hidden">
          
          {/* Subtle watermark illustration */}
          <div className="absolute top-4 right-4 p-4 dark:text-white/[0.03] text-black/[0.03] pointer-events-none">
            <Factory size={130} />
          </div>

          {/* Header Section */}
          <header className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-500/20">
              <Sparkles size={11} /> Verified Project Specifications
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              {specData.name}'s <span className="text-emerald-600 dark:text-emerald-400">Setup</span>
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
              <span className="flex items-center gap-1">
                <Building2 size={12} className="text-emerald-500" /> {specData.role}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-500" /> {specData.location}
              </span>
            </div>

            <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed max-w-2xl pt-1">
              {specData.summary}
            </p>
          </header>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Key Metric Cards (Transparent, clean spacing) */}
          <section aria-label="Scale and Financial Breakdown" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Capacity & Space Card */}
            <div className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-4 md:p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Factory size={16} />
                <h2 className="font-extrabold text-[12px] text-slate-900 dark:text-white uppercase tracking-wider">
                  Capacity & Scale
                </h2>
              </div>
              <div className="space-y-2 text-[10px]">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[9px]">
                    Production Capacity
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white text-[11px]">
                    {specData.capacity}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[9px]">
                    Space Required
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white text-[11px]">
                    {specData.space}
                  </p>
                </div>
              </div>
            </div>

            {/* Financials & ROI Card */}
            <div className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-4 md:p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <TrendingUp size={16} />
                <h2 className="font-extrabold text-[12px] text-slate-900 dark:text-white uppercase tracking-wider">
                  Financials & ROI
                </h2>
              </div>
              <div className="space-y-2 text-[10px]">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[9px]">
                    Estimated Investment
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white text-[11px]">
                    {specData.investment}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[9px]">
                    Expected ROI
                  </p>
                  <p className="font-black text-emerald-600 dark:text-emerald-400 text-[11px]">
                    {specData.roi}
                  </p>
                </div>
              </div>
            </div>

          </section>

          {/* Equipment & Infrastructure */}
          <section aria-label="Equipment and Machinery" className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-4 md:p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Cpu size={16} />
              <h2 className="font-extrabold text-[12px] text-slate-900 dark:text-white uppercase tracking-wider">
                Equipment & Infrastructure Deployed
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-700 dark:text-slate-300">
              {specData.equipment.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Timeline & Execution */}
          <section aria-label="Project Timeline" className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-4 md:p-5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Timer size={16} />
              <h2 className="font-extrabold text-[12px] text-slate-900 dark:text-white uppercase tracking-wider">
                Setup & Harvest Timeline
              </h2>
            </div>
            <p className="font-bold text-slate-900 dark:text-white text-[11px]">
              {specData.timeframe}
            </p>
          </section>

          {/* Context Narrative & Internal Links */}
          <section aria-label="Technical Context & Guidance" className="space-y-2 pt-2">
            <h2 className="font-extrabold text-[12px] text-slate-900 dark:text-white">
              Behind the Numbers: Scientific Cultivation & Growth
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed">
              {specData.contextNarrative}
            </p>
          </section>

          {/* Action CTA */}
          <footer className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-bold text-slate-900 dark:text-white text-[11px]">
                Want to build a similar high-yield project?
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-[10px]">
                Our agronomists provide turnkey engineering, spawn supply, and market linkage.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://wa.me/919203544140?text=Hi%2C%20I%20saw%20the%20success%20story%20of%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-extrabold px-4 py-2.5 rounded-xl shadow-xs hover:scale-[1.02] transition-transform"
              >
                <PhoneCall size={12} /> Build a Similar Project <ArrowRight size={12} />
              </a>
              <Link
                href="/success-stories"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-3 py-2.5 rounded-xl transition-colors"
              >
                All Stories
              </Link>
            </div>
          </footer>

        </div>
      </article>
    </main>
  );
}
