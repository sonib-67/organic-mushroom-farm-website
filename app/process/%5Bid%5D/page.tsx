import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Calculator, 
  Briefcase, 
  ArrowRight, 
  ChevronRight, 
  Phone,
  Layers,
  ShoppingCart,
  Home,
  Sprout,
  Zap,
  TrendingUp,
  Workflow
} from 'lucide-react';
import { PROCESS_DATA } from '../../../src/data/processes';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

export async function generateStaticParams() {
  return PROCESS_DATA.map((item) => ({
    id: item.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const process = PROCESS_DATA.find((p) => p.id === id);

  if (!process) {
    return {
      title: 'Process Guide Not Found | Organic Mushrooms Farm',
      description: 'The requested mushroom farming process guide could not be found.',
    };
  }

  const canonicalUrl = `https://mushroomsfarm.in/process/${id}`;

  return {
    title: `${process.metaTitle || process.title} | Organic Mushrooms Farm`,
    description: process.metaDescription || process.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${process.metaTitle || process.title} | Organic Mushrooms Farm`,
      description: process.metaDescription || process.description,
      url: canonicalUrl,
      type: 'article',
      siteName: 'Organic Mushrooms Farm India',
      images: [
        {
          url: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
          width: 1200,
          height: 630,
          alt: `${process.title} - Step by step commercial guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${process.metaTitle || process.title} | Organic Mushrooms Farm`,
      description: process.metaDescription || process.description,
      images: ['https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const getProcessIcon = (id: string) => {
  switch (id) {
    case 'raw-material': return ShoppingCart;
    case 'compost-preparation': return Layers;
    case 'production-room': return Home;
    case 'precision-harvest': return Sprout;
    case 'cold-chain': return Zap;
    case 'market-linkage': return TrendingUp;
    default: return Workflow;
  }
};

export default async function ProcessDetailPage({ params }: Props) {
  const { id } = await params;
  const process = PROCESS_DATA.find((p) => p.id === id);

  if (!process) {
    notFound();
  }

  const ProcessIcon = getProcessIcon(process.id);

  // HowTo Structured Data for Process
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: process.h1 || process.title,
    description: process.description,
    step: process.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.title,
      text: step.content,
    })),
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
        name: 'Processes',
        item: 'https://mushroomsfarm.in/#processes',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: process.title,
        item: `https://mushroomsfarm.in/process/${id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <Link href="/#processes" className="hover:text-emerald-400 transition-colors">Processes</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-emerald-400 font-medium truncate">{process.title}</span>
          </nav>
        </div>

        {/* Hero Header */}
        <section className="relative overflow-hidden mb-16 border-b border-slate-800/80 pb-16">
          <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent -z-10 blur-3xl pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-6">
              <ProcessIcon size={16} /> Phase Guide: {process.title}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {process.h1 || process.title}
            </h1>
            
            <h2 className="text-lg sm:text-xl text-emerald-400/90 font-medium mb-6">
              {process.h2}
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {process.description}
            </p>
          </div>
        </section>

        {/* Main 2-Column Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (8 cols): Step-by-Step Evolution & Pitfalls */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Steps Section */}
              <section className="space-y-6">
                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" /> Step-by-Step Protocol
                </h3>
                
                <div className="space-y-4">
                  {process.steps.map((step, i) => (
                    <div 
                      key={i} 
                      className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 relative overflow-hidden group hover:border-emerald-500/30 transition-all"
                    >
                      <div className="absolute top-2 right-4 text-6xl font-black text-slate-800/40 select-none pointer-events-none group-hover:text-emerald-500/10 transition-colors">
                        0{i + 1}
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2 relative z-10">{step.title}</h4>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed relative z-10">{step.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Pitfalls Section */}
              <section className="bg-red-950/20 p-8 rounded-3xl border border-red-900/40 space-y-4">
                <h3 className="text-xl font-bold text-red-400 flex items-center gap-3">
                  <AlertTriangle className="text-red-400" size={22} /> Common Mistakes & Critical Pitfalls to Avoid
                </h3>
                <ul className="space-y-3">
                  {process.commonMistakes.map((mistake, i) => (
                    <li key={i} className="flex gap-3 items-start text-slate-300 text-sm sm:text-base">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </section>

            </div>

            {/* Right Column (4 cols): Assets, Cost, CTA */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Required Assets / Materials */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                  <Briefcase className="text-emerald-400" size={20} /> Required Assets & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {process.materials.map((m, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cost Estimation */}
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                  <Calculator className="text-emerald-400" size={20} /> Cost Estimation
                </h3>
                <p className="text-emerald-300 font-bold text-base">{process.costEstimation}</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                  *Estimates are indicative and vary based on market conditions, raw materials, and operational scale.
                </p>
              </div>

              {/* Project CTA Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-br from-emerald-900/60 to-slate-900 border border-emerald-500/30 text-white shadow-2xl space-y-4">
                <h4 className="text-xl font-bold">Start Your Commercial Farm Today</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We provide mushroom farming turnkey setup, training, spawn supply, and buyback assistance across all states of India.
                </p>
                <div className="space-y-2.5 pt-2">
                  <a 
                    href="https://wa.me/919203544140" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    Consult an Expert <ArrowRight size={16} />
                  </a>
                  <a
                    href="tel:+919203544140"
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700"
                  >
                    <Phone size={14} /> Call: +91 9203544140
                  </a>
                </div>
              </div>

            </aside>

          </div>
        </div>

        {/* Cross-Link All Processes */}
        <section className="mt-20 pt-16 border-t border-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Commercial Mushroom Production Lifecycle</h2>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Step-by-step master phases</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROCESS_DATA.map((p, pIdx) => {
              const ItemIcon = getProcessIcon(p.id);
              const isActive = p.id === process.id;
              return (
                <Link
                  key={p.id}
                  href={`/process/${p.id}`}
                  className={`p-4 rounded-2xl border text-center transition-all block space-y-2 ${
                    isActive 
                      ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/30'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <ItemIcon size={18} />
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phase {pIdx + 1}</div>
                  <div className="text-xs font-bold text-white truncate">{p.title}</div>
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
