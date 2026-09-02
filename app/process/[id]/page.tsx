import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShoppingCart, 
  Layers, 
  Home, 
  Sprout, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  Calculator, 
  Briefcase, 
  ArrowRight, 
  Phone, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';
import { PROCESS_DATA } from '../../../src/data/processes';

export async function generateStaticParams() {
  return PROCESS_DATA.map((p) => ({
    id: p.id,
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
      title: 'Process Step Not Found | Organic Mushrooms Farm',
      description: 'The requested mushroom farming process step could not be found.',
    };
  }

  const canonicalUrl = `https://mushroomsfarm.in/process/${id}`;

  return {
    title: process.metaTitle || `${process.title} - Step-by-Step Cultivation Process | Organic Mushrooms Farm`,
    description: process.metaDescription || process.description || `Read our certified step-by-step master guide for ${process.title} in commercial mushroom cultivation.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: process.metaTitle || `${process.title} - Step-by-Step Cultivation Process`,
      description: process.metaDescription || process.description,
      url: canonicalUrl,
      type: 'article',
      siteName: 'Organic Mushrooms Farm India',
      images: [
        {
          url: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
          width: 1200,
          height: 630,
          alt: `${process.title} - Organic Mushrooms Farm`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: process.metaTitle || `${process.title} - Step-by-Step Cultivation Process`,
      description: process.metaDescription || process.description,
      images: ['https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProcessDetailPage({ params }: Props) {
  const { id } = await params;
  const process = PROCESS_DATA.find((p) => p.id === id);

  if (!process) {
    notFound();
  }

  const getProcessIcon = (processId: string) => {
    switch (processId) {
      case 'raw-material': return ShoppingCart;
      case 'compost-preparation': return Layers;
      case 'production-room': return Home;
      case 'precision-harvest': return Sprout;
      case 'cold-chain': return Zap;
      case 'market-linkage': return TrendingUp;
      default: return Layers;
    }
  };

  const IconComponent = getProcessIcon(process.id);

  // HowTo / Service Schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: process.h1 || process.title,
    description: process.description,
    step: process.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.content,
    })),
    url: `https://mushroomsfarm.in/process/${id}`,
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
        item: 'https://mushroomsfarm.in/process',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <Link href="/process" className="hover:text-emerald-400 transition-colors">Process</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-emerald-400 font-medium truncate">{process.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden mb-16 border-b border-slate-800/80 pb-16">
          <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent -z-10 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <IconComponent size={15} />
                <span>Commercial Production SOP</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                {process.h1 || process.title}
              </h1>
              {process.h2 && (
                <h2 className="text-lg sm:text-xl text-emerald-300/90 font-medium mb-6">
                  {process.h2}
                </h2>
              )}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {process.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Step-by-Step SOP & Mistakes */}
            <div className="lg:col-span-2 space-y-12">
              {/* Step-by-Step Workflow */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" size={24} /> Step-by-Step Execution Protocol
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">{process.steps.length} Key Stages</span>
                </div>
                <div className="space-y-4">
                  {process.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-colors relative overflow-hidden group"
                    >
                      <div className="absolute top-3 right-4 text-5xl font-black text-slate-800/40 select-none group-hover:text-emerald-500/10 transition-colors">
                        0{idx + 1}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        {step.title}
                      </h4>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed relative z-10 pl-8">
                        {step.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Pitfalls / Mistakes */}
              {process.commonMistakes && process.commonMistakes.length > 0 && (
                <section className="p-6 sm:p-8 rounded-2xl bg-rose-950/20 border border-rose-500/20">
                  <h3 className="text-xl font-bold text-rose-300 mb-6 flex items-center gap-3">
                    <AlertTriangle className="text-rose-400" size={22} /> Common Mistakes & Critical Pitfalls
                  </h3>
                  <ul className="space-y-4">
                    {process.commonMistakes.map((mistake, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-slate-300 text-sm sm:text-base">
                        <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Cross-Process Navigation */}
              <section className="pt-6 border-t border-slate-800">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Complete Production Cycle Stages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {PROCESS_DATA.map((p) => (
                    <Link
                      key={p.id}
                      href={`/process/${p.id}`}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        p.id === id
                          ? 'bg-emerald-500 text-white font-bold'
                          : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300'
                      }`}
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Materials, Costing & Consultation */}
            <aside className="space-y-8">
              {/* Required Materials */}
              {process.materials && process.materials.length > 0 && (
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                    <Briefcase className="text-emerald-400" size={18} /> Required Equipment & Materials
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {process.materials.map((m, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Cost & Budget Estimation */}
              {process.costEstimation && (
                <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2.5">
                    <Calculator className="text-emerald-400" size={18} /> Financial & Cost Benchmark
                  </h3>
                  <p className="text-emerald-300 font-bold text-base mb-2">
                    {process.costEstimation}
                  </p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                    *Pricing benchmark varies based on local raw material availability and farm scale.
                  </p>
                </div>
              )}

              {/* Consultation CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl">
                <h4 className="text-xl font-bold mb-2">Need Technical Guidance on {process.title}?</h4>
                <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
                  Our team provides complete SOP formulation, equipment selection, and on-site implementation mentorship across India.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/919203544140?text=Hello%2C%20I%20need%20guidance%20on%20${encodeURIComponent(process.title)}.%20Please%20help.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-slate-950 font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-md"
                  >
                    Discuss on WhatsApp <ArrowRight size={16} />
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
