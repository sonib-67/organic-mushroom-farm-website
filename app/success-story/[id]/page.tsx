import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Factory, 
  Timer, 
  TrendingUp, 
  Cpu, 
  Star, 
  MapPin, 
  Quote, 
  Phone,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

export interface SuccessStorySpec {
  id: string;
  name: string;
  location: string;
  tagline: string;
  capacity: string;
  space: string;
  roi: string;
  timeframe: string;
  investment: string;
  achievement: string;
  story: string;
  equipment: string[];
}

export const SUCCESS_STORIES: Record<string, SuccessStorySpec> = {
  'rajesh-kumar': {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    location: 'Jabalpur, MP',
    tagline: 'The Local Farmer Pivot',
    capacity: '500 Bags (Milky Mushroom)',
    space: '20ft x 15ft Shed',
    roi: '200% (First Cycle)',
    timeframe: '15 Days Training + 45 Days Cultivation',
    investment: '₹25,000 - ₹30,000',
    achievement: '2x Increase in Seasonal Income',
    story: 'A traditional wheat farmer from Madhya Pradesh who pivoted to Milky mushrooms during the harsh summer months. After attending our 15-day intensive training, Rajesh setup a small 500 bag unit that doubled his seasonal income in just one cycle.',
    equipment: [
      'Substrate Pasteurization Drum',
      'Hygrometer & Thermometer',
      'Manual Foggers',
      'Exhaust Fans',
      'Bamboo Racks',
    ],
  },
  'sneha-sharma': {
    id: 'sneha-sharma',
    name: 'Sneha Sharma',
    location: 'Delhi NCR',
    tagline: 'The Student Agripreneur',
    capacity: "250 Bags (Lion's Mane & Oyster)",
    space: '12ft x 10ft Balcony / Room',
    roi: '350% (High-value retail)',
    timeframe: '7 Days Training + 90 Days Cultivation',
    investment: '₹40,000 - ₹50,000 (With basic climate control)',
    achievement: "Founded 'BrainFungi' D2C Brand",
    story: "A college student who utilized her apartment's balcony and vertical space to grow high-value medicinal mushrooms like Lion's Mane. She now runs a successful D2C supplement brand while continuing her studies.",
    equipment: [
      'Ultrasonic Humidifier',
      'Pre-fabricated Grow Tent',
      'Digital Temperature Controller',
      'HEPA Filter Setup',
      'Metal Wire Racks',
    ],
  },
  'amit-singhal': {
    id: 'amit-singhal',
    name: 'Amit Singhal',
    location: 'Indore, MP',
    tagline: 'The B2B Industrialist',
    capacity: '5 Tons (White Button Mushroom)',
    space: '3 Grow Rooms (40ft x 15ft each)',
    roi: 'Break-even in 14 Months',
    timeframe: '3 Months Setup + Continuous Cycle',
    investment: '₹35,00,000+',
    achievement: '5-Ton Industrial Unit Setup',
    story: 'An ex-corporate professional who setup a fully climate-controlled 5-ton capacity Button mushroom unit. After our technical consultancy and market linkage support, he now supplies premium produce to top-tier hotel chains across North India.',
    equipment: [
      'Industrial Chiller Unit (10 Ton)',
      'Automated Climate Control System (PLC)',
      'CO2 Sensors & Exhaust automation',
      'Phase 2 Compost Pasteurization Tunnel',
      'Industrial Humidifier',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(SUCCESS_STORIES).map((id) => ({
    id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const spec = SUCCESS_STORIES[id];

  if (!spec) {
    return {
      title: 'Success Story Not Found | Organic Mushrooms Farm',
      description: 'The requested mushroom farming success story could not be found.',
    };
  }

  const canonicalUrl = `https://mushroomsfarm.in/success-story/${id}`;

  return {
    title: `Project Specs: ${spec.name} | Organic Mushrooms Farm`,
    description: `Detailed project specifications, infrastructure, equipment, and ROI for ${spec.name}'s mushroom farming setup in ${spec.location}.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Project Specs: ${spec.name} - Commercial Mushroom Farming Case Study`,
      description: `Detailed project specifications, equipment used, and ROI for ${spec.name}'s mushroom farming setup.`,
      url: canonicalUrl,
      type: 'article',
      siteName: 'Organic Mushrooms Farm India',
      images: [
        {
          url: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
          width: 1200,
          height: 630,
          alt: `${spec.name} Mushroom Farm Setup`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Project Specs: ${spec.name} | Organic Mushrooms Farm`,
      description: `Detailed project specifications, equipment used, and ROI for ${spec.name}'s mushroom farming setup.`,
      images: ['https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SuccessStoryDetailPage({ params }: Props) {
  const { id } = await params;
  const spec = SUCCESS_STORIES[id];

  if (!spec) {
    notFound();
  }

  // Article / Case Study JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Project Specs: ${spec.name}'s Mushroom Farming Setup`,
    description: spec.story,
    author: {
      '@type': 'Organization',
      name: 'Organic Mushrooms Farm',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Organic Mushrooms Farm',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mushroomsfarm.in/success-story/${id}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mushroomsfarm.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Success Stories',
        item: 'https://mushroomsfarm.in/success-stories',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: spec.name,
        item: `https://mushroomsfarm.in/success-story/${id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <Link href="/success-stories" className="hover:text-emerald-400 transition-colors">Success Stories</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-emerald-400 font-medium truncate">{spec.name}</span>
          </nav>
        </div>

        {/* Header Action & Meta */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
          <Link 
            href="/success-stories" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to All Stories
          </Link>
        </div>

        {/* Main Spec Card Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-12 text-slate-800/20 pointer-events-none select-none hidden md:block">
              <Factory size={160} />
            </div>

            <div className="relative z-10">
              {/* Badge & Headline */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
                  Full Project Specs
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">
                  <MapPin size={12} className="text-emerald-400" /> {spec.location}
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold">
                  <Star size={12} fill="currentColor" /> Verified Grower
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
                {spec.name}'s <span className="text-emerald-400">Commercial Setup</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl">
                A comprehensive technical breakdown of the infrastructure, setup investment, and financial returns for this commercial mushroom operation.
              </p>

              {/* Story Quote Callout */}
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 mb-10 relative">
                <Quote className="text-emerald-500/20 absolute top-4 right-4" size={36} />
                <p className="text-slate-300 italic text-sm sm:text-base leading-relaxed relative z-10">
                  "{spec.story}"
                </p>
                <div className="mt-4 flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={16} /> Key Achievement: {spec.achievement}
                </div>
              </div>

              {/* 2-Column Metrics */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {/* Capacity & Space */}
                <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <Factory size={22} />
                    <h3 className="font-bold text-white text-lg">Capacity & Space</h3>
                  </div>
                  <div className="space-y-3 pt-1">
                    <div>
                      <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Production Capacity</p>
                      <p className="text-white font-bold text-base mt-0.5">{spec.capacity}</p>
                    </div>
                    <div className="border-t border-slate-800 pt-3">
                      <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Area / Space Used</p>
                      <p className="text-white font-bold text-base mt-0.5">{spec.space}</p>
                    </div>
                  </div>
                </div>

                {/* Financials & Returns */}
                <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <TrendingUp size={22} />
                    <h3 className="font-bold text-white text-lg">Financials & Returns</h3>
                  </div>
                  <div className="space-y-3 pt-1">
                    <div>
                      <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Estimated Investment</p>
                      <p className="text-white font-bold text-base mt-0.5">{spec.investment}</p>
                    </div>
                    <div className="border-t border-slate-800 pt-3">
                      <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Documented ROI</p>
                      <p className="text-emerald-400 font-bold text-base mt-0.5">{spec.roi}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment & Infrastructure */}
              <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 mb-8 space-y-4">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <Cpu size={22} />
                  <h3 className="font-bold text-white text-lg">Equipment & Infrastructure Installed</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3 pt-1">
                  {spec.equipment.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-slate-300 text-sm font-medium">
                      <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 mb-12">
                <div className="flex items-center gap-2.5 text-emerald-400 mb-2">
                  <Timer size={22} />
                  <h3 className="font-bold text-white text-lg">Execution Timeline</h3>
                </div>
                <p className="text-white font-bold text-base">{spec.timeframe}</p>
              </div>
              
              {/* Call to Action Bar */}
              <div className="text-center pt-4 border-t border-slate-800 space-y-4">
                <h3 className="text-xl font-bold text-white">Want to Build a Similar Commercial Mushroom Project?</h3>
                <p className="text-slate-400 text-sm max-w-lg mx-auto">
                  Get in touch with our technical consultants to prepare your DPR, select the optimal variety, and apply for government subsidies.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <a 
                    href="https://wa.me/919203544140" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-lg"
                  >
                    Build a Similar Project <ArrowRight size={16} />
                  </a>
                  <a
                    href="tel:+919203544140"
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-4 rounded-xl text-xs font-semibold inline-flex items-center gap-2 transition-colors border border-slate-700"
                  >
                    <Phone size={14} /> Call: +91 9203544140
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Cross-Link All Other Case Studies */}
        <section className="mt-16 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white">Explore Other Grower Case Studies</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {Object.values(SUCCESS_STORIES).map((s) => {
              const isActive = s.id === spec.id;
              return (
                <Link
                  key={s.id}
                  href={`/success-story/${s.id}`}
                  className={`p-5 rounded-2xl border text-center transition-all block space-y-1.5 ${
                    isActive 
                      ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/30'
                  }`}
                >
                  <div className="text-xs font-bold text-white truncate">{s.name}</div>
                  <div className="text-[11px] text-slate-400">{s.location}</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">{s.achievement}</div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
