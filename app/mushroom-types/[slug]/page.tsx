import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  Thermometer, 
  Droplets, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Sprout, 
  Zap, 
  TrendingUp, 
  HelpCircle, 
  Phone, 
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  Award,
  DollarSign
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';
import { mushroomDetails, MushroomInfo } from '../../../src/data/mushroomDetailData';

export async function generateStaticParams() {
  return Object.keys(mushroomDetails).map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const info = mushroomDetails[slug];

  if (!info) {
    return {
      title: 'Mushroom Variety Not Found | Organic Mushrooms Farm',
      description: 'The requested mushroom variety setup details could not be found.',
    };
  }

  const canonicalUrl = `https://mushroomsfarm.in/mushroom-types/${slug}`;

  return {
    title: info.seoTitle,
    description: info.seoDescription,
    keywords: info.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: info.seoTitle,
      description: info.seoDescription,
      url: canonicalUrl,
      type: 'article',
      siteName: 'Organic Mushrooms Farm India',
      images: [
        {
          url: info.bannerImage || info.image,
          width: 1200,
          height: 630,
          alt: `${info.name} Cultivation Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: info.seoTitle,
      description: info.seoDescription,
      images: [info.bannerImage || info.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function MushroomDetailPage({ params }: Props) {
  const { slug } = await params;
  const info: MushroomInfo | undefined = mushroomDetails[slug];

  if (!info) {
    notFound();
  }

  // Structured Data Schema for Google Rich Results
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: info.name,
    image: info.image,
    description: info.seoDescription,
    brand: {
      '@type': 'Brand',
      name: 'Organic Mushrooms Farm',
    },
    category: 'Agricultural Setup & Spawns',
    offers: {
      '@type': 'Offer',
      url: `https://mushroomsfarm.in/mushroom-types/${slug}`,
      priceCurrency: 'INR',
      price: info.productionCost.includes('₹') ? info.productionCost.replace(/[^0-9]/g, '') || '100' : '100',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
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
        name: 'Mushroom Varieties',
        item: 'https://mushroomsfarm.in/mushroom-types',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: info.name,
        item: `https://mushroomsfarm.in/mushroom-types/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <Link href="/mushroom-types" className="hover:text-emerald-400 transition-colors">Varieties</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-emerald-400 font-medium truncate">{info.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden mb-16 border-b border-slate-800/80 pb-16">
          <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent -z-10 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sprout size={15} />
                  <span>Commercial Species Profile</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
                  {info.name}
                </h1>
                <p className="text-sm font-mono text-emerald-400/90 italic mb-4">
                  Scientific Name: {info.scientific} {info.hindiName ? `• ${info.hindiName}` : ''}
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                  {info.tagline}
                </p>

                {/* Key Metrics Quick Ribbon */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-xl">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Market Price</div>
                    <div className="text-sm sm:text-base font-bold text-emerald-400">{info.marketPrice}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Est. Cost</div>
                    <div className="text-sm sm:text-base font-bold text-slate-200">{info.productionCost}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Profit Margin</div>
                    <div className="text-sm sm:text-base font-bold text-teal-400">{info.profitMargin}</div>
                  </div>
                </div>
              </div>

              {/* Mushroom Image Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                  <img
                    src={info.bannerImage || info.image}
                    alt={info.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold text-slate-200 backdrop-blur-md">
                      Difficulty: {info.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-semibold text-emerald-300 backdrop-blur-md">
                      Casing: {info.parameters.casing}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Parameters & Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Columns: Overview, Steps, Market Demand */}
            <div className="lg:col-span-2 space-y-12">
              {/* Detailed Overview */}
              <section className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="text-emerald-400" size={22} /> Species Overview & Commercial Scope
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  {info.overview}
                </p>

                {/* Key Features */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Cultivation Advantages
                  </h3>
                  {info.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Step-by-Step Farming Protocols */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Layers className="text-emerald-400" size={24} /> Step-by-Step Cultivation Protocol
                  </h2>
                  <span className="text-xs text-slate-400 font-mono">{info.farmingSteps.length} Critical Phases</span>
                </div>
                <div className="space-y-4">
                  {info.farmingSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-colors relative overflow-hidden group"
                    >
                      <div className="absolute top-3 right-4 text-5xl font-black text-slate-800/40 select-none group-hover:text-emerald-500/10 transition-colors">
                        0{idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        {step.Title}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed relative z-10 pl-8">
                        {step.Desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Market Demand & Regional Insights */}
              <section className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/20">
                <h2 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-3">
                  <TrendingUp className="text-emerald-400" size={22} /> Market Demand & Buyer Linkages
                </h2>
                <div 
                  className="text-slate-300 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: info.marketDemandHtml }}
                />
              </section>

              {/* Cross-Variety Exploration */}
              <section className="pt-6 border-t border-slate-800">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Explore Other Commercial Species
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Object.values(mushroomDetails).map((m) => (
                    <Link
                      key={m.slug}
                      href={`/mushroom-types/${m.slug}`}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                        m.slug === slug
                          ? 'bg-emerald-500 text-white font-bold'
                          : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300'
                      }`}
                    >
                      {m.name}
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column Sidebar: Technical Specs & WhatsApp CTA */}
            <aside className="space-y-8">
              {/* Technical Climate Specs */}
              <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Thermometer className="text-emerald-400" size={20} /> Critical Growth Parameters
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-slate-400 text-xs uppercase font-medium flex items-center gap-1.5 mb-1">
                      <Thermometer size={14} className="text-amber-400" /> Temperature
                    </span>
                    <p className="font-semibold text-slate-200">{info.parameters.temperature}</p>
                  </div>

                  <div>
                    <span className="text-slate-400 text-xs uppercase font-medium flex items-center gap-1.5 mb-1">
                      <Droplets size={14} className="text-blue-400" /> Humidity
                    </span>
                    <p className="font-semibold text-slate-200">{info.parameters.humidity}</p>
                  </div>

                  <div>
                    <span className="text-slate-400 text-xs uppercase font-medium flex items-center gap-1.5 mb-1">
                      <Layers size={14} className="text-emerald-400" /> Substrate Composition
                    </span>
                    <p className="font-semibold text-slate-200">{info.parameters.substrate}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
                    <div>
                      <span className="text-slate-400 text-[11px] uppercase font-medium block mb-0.5">Incubation</span>
                      <p className="font-semibold text-slate-200 text-xs">{info.parameters.incubation}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[11px] uppercase font-medium block mb-0.5">Cropping</span>
                      <p className="font-semibold text-slate-200 text-xs">{info.parameters.cropping}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commercial Setup CTA */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-2">Want to Cultivate {info.name}?</h3>
                <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
                  Get premium certified hybrid spawn, substrate formulations, and technical farm handholding from our senior mycology consultants.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/919203544140?text=Hello%2C%20I%20am%20interested%20in%20setting%20up%20a%20${encodeURIComponent(info.name)}%20farm.%20Please%20guide%20me.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-slate-950 font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-md"
                  >
                    Consult on WhatsApp <ArrowRight size={16} />
                  </a>
                  <a
                    href="tel:+919203544140"
                    className="w-full bg-emerald-800/60 hover:bg-emerald-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-emerald-400/30"
                  >
                    <Phone size={14} /> Call: +91 9203544140
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
