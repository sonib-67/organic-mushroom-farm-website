import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Thermometer, 
  Droplets, 
  Inbox, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  Sprout, 
  Zap, 
  Cpu, 
  TrendingUp, 
  PhoneCall, 
  ChevronRight,
  Gem,
  Flame,
  Leaf,
  Activity,
  Phone
} from 'lucide-react';
import { mushroomDetails, MushroomInfo } from '../../../src/data/mushroomDetailData';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

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
      description: 'The requested mushroom variety details could not be found.',
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
          url: info.image || 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
          width: 800,
          height: 600,
          alt: `${info.name} - Cultivation Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: info.seoTitle,
      description: info.seoDescription,
      images: [info.image || 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const getVarietyIcon = (slug: string) => {
  switch (slug) {
    case 'white-button': return Gem;
    case 'oyster': return Flame;
    case 'milky-mushroom': return Leaf;
    case 'shiitake': return Sparkles;
    case 'lions-mane': return Cpu;
    case 'reishi': return Activity;
    case 'cordyceps': return Zap;
    case 'paddy-straw': return Sprout;
    default: return Sprout;
  }
};

export default async function MushroomTypeDetailPage({ params }: Props) {
  const { slug } = await params;
  const info: MushroomInfo | undefined = mushroomDetails[slug];

  if (!info) {
    notFound();
  }

  const VarietyIcon = getVarietyIcon(slug);

  // Structured Data Schema markup
  const mushroomSchema = {
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
      price: info.productionCost.includes('₹') ? info.productionCost.replace(/[^0-9]/g, '') : '100',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Scientific Name',
        value: info.scientific,
      },
      {
        '@type': 'PropertyValue',
        name: 'Optimal Cropping Temperature',
        value: info.parameters.temperature,
      },
      {
        '@type': 'PropertyValue',
        name: 'Required Humidity Level',
        value: info.parameters.humidity,
      },
      {
        '@type': 'PropertyValue',
        name: 'Production Substrate',
        value: info.parameters.substrate,
      },
    ],
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
        name: 'Mushroom Types',
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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mushroomSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
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
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-semibold">
                    Scientific: {info.scientific}
                  </span>
                  <span className="text-xs uppercase tracking-widest bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-full font-semibold">
                    Level: {info.difficulty}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {info.name}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
                  {info.tagline}
                </p>

                {/* Quick Economics Metrics */}
                <div className="grid grid-cols-3 gap-4 max-w-xl bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
                  <div className="text-center md:text-left">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Market Price</div>
                    <div className="text-sm md:text-base font-extrabold text-white">{info.marketPrice}</div>
                  </div>
                  <div className="text-center md:text-left border-l border-slate-800 pl-4">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Production Cost</div>
                    <div className="text-sm md:text-base font-extrabold text-slate-300">{info.productionCost}</div>
                  </div>
                  <div className="text-center md:text-left border-l border-slate-800 pl-4">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Profit Range</div>
                    <div className="text-sm md:text-base font-extrabold text-emerald-400">{info.profitMargin}</div>
                  </div>
                </div>
              </div>

              {/* Spawn Buy Card */}
              <div className="lg:col-span-4 shrink-0 mt-8 lg:mt-0">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[260px]">
                  <div className="space-y-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <VarietyIcon size={32} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">{info.name}</h2>
                      <p className="text-xs font-mono text-emerald-400 italic">{info.scientific}</p>
                    </div>
                    <div className="flex justify-center gap-2 flex-wrap text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">Lab Grade Spawn</span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">Yield Optimized</span>
                    </div>
                  </div>

                  <div className="pt-6 w-full text-center">
                    <a 
                      href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20premium%20spawn%20for%20${encodeURIComponent(info.name)}.%20Please%20send%20details.`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest block text-center shadow-lg transition-all"
                    >
                      Order Spawn (Seed)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Grid Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (8 cols): Specifications & Guides */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                  <BookOpen size={22} className="text-emerald-400" /> Variety Overview
                </h2>
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                  {info.overview}
                </p>
              </div>

              {/* Farming Technical Parameters Grid */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                  <Cpu size={22} className="text-emerald-400" /> Optimal Farming Parameters
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Thermometer size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Temperature</h3>
                      <p className="text-sm font-bold text-white">{info.parameters.temperature}</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Droplets size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Humidity (RH)</h3>
                      <p className="text-sm font-bold text-white">{info.parameters.humidity}</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Substrate</h3>
                      <p className="text-sm font-bold text-white">{info.parameters.substrate}</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Incubation</h3>
                      <p className="text-sm font-bold text-white">{info.parameters.incubation}</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Cropping Phase</h3>
                      <p className="text-sm font-bold text-white">{info.parameters.cropping}</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                      <Inbox size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Casing Layer</h3>
                      <p className="text-sm font-bold text-white">{info.parameters.casing}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Key Advantages */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                  <Sparkles size={22} className="text-emerald-400" /> Market Advantages
                </h2>
                <div className="grid gap-3">
                  {info.keyFeatures.map((feat, fIdx) => {
                    const parts = feat.split(':');
                    return (
                      <div key={fIdx} className="flex gap-3 bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50">
                        <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          {parts.length > 1 ? (
                            <>
                              <strong className="text-white text-sm block mb-0.5">{parts[0]}</strong>
                              <p className="text-xs sm:text-sm text-slate-300">{parts[1]}</p>
                            </>
                          ) : (
                            <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step-by-Step Farming Protocol */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                  <Layers size={22} className="text-emerald-400" /> Step-by-Step Farming Protocol
                </h2>

                <div className="relative border-l-2 border-slate-800 pl-6 ml-4 space-y-6">
                  {info.farmingSteps.map((step, sIdx) => (
                    <div key={sIdx} className="relative group">
                      <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 text-xs font-bold">
                        {sIdx + 1}
                      </div>
                      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                        <h3 className="text-base font-bold text-white">{step.Title}</h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.Desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supply Dynamics & Subsidies */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight">Supply Dynamics & Subsidies</h3>
                <div 
                  className="text-sm text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: info.marketDemandHtml }}
                />
              </div>

            </div>

            {/* Right Sidebar Column (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Quick WhatsApp Consultation Card */}
              <div className="border border-slate-800 p-6 sm:p-8 rounded-3xl bg-slate-900/90 shadow-xl space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <PhoneCall size={22} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">Got Questions?</h3>
                  <p className="text-xs text-slate-400 mt-1">Speak directly with our mushroom farming experts.</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span className="text-xs font-medium text-slate-200">Custom project profiling</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span className="text-xs font-medium text-slate-200">Subsidy documentation assistance</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span className="text-xs font-medium text-slate-200">Wholesale pricing options</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <a 
                    href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20${encodeURIComponent(info.name)}%20farming%20setup.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 text-center transition-colors shadow-lg"
                  >
                    Direct WhatsApp Consult <ArrowRight size={14} />
                  </a>
                  <a
                    href="tel:+919203544140"
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 text-center transition-colors border border-slate-700"
                  >
                    <Phone size={14} /> Call: +91 9203544140
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* Cross-Link Other Varieties Section */}
        <section className="mt-20 pt-16 border-t border-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Explore Other Commercial Varieties</h2>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">High Yield Mushroom Profiles</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.values(mushroomDetails)
              .filter((item) => item.slug !== info.slug)
              .map((m) => {
                const ItemIcon = getVarietyIcon(m.slug);
                return (
                  <Link 
                    key={m.slug} 
                    href={`/mushroom-types/${m.slug}`}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all group block text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto group-hover:scale-110 transition-transform">
                      <ItemIcon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors uppercase">{m.name}</h3>
                      <p className="text-[10px] text-slate-400 italic mt-0.5">{m.scientific}</p>
                    </div>
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
