import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sprout, TrendingUp, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import SEO from './SEO';
import FAQSection from './FAQSection';
import SchemaSection from './SchemaSection';
import InternalLinks from './InternalLinks';
import CTASection from './CTASection';
import { ResolvedSEOPage } from '../utils/locationHelpers';
import { buildBreadcrumbSchema, buildFAQSchema } from '../seo/schema';

interface LocationTemplateProps {
  pageConfig: ResolvedSEOPage;
  locationName: string;
  stateName: string;
}

export default function LocationTemplate({ pageConfig, locationName, stateName }: LocationTemplateProps) {
  const {
    title,
    metaDescription,
    h1,
    h2s,
    content,
    faqs,
    schema,
    internalLinks,
    breadcrumbs,
    ctaText,
    ctaUrl
  } = pageConfig;

  // Compile standard schemas
  const schemasPayload = [
    schema,
    buildFAQSchema(faqs),
    buildBreadcrumbSchema(breadcrumbs)
  ];

  return (
    <>
      <SEO 
        title={title}
        description={metaDescription}
        keywords={`${locationName} mushroom, mushroom cultivation ${stateName}`}
        url={window.location.pathname}
      />
      
      <SchemaSection schemas={schemasPayload} />

      <div className="pt-24 pb-12 overflow-hidden relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs md:text-sm dark:text-slate-500 text-slate-400 mb-8" aria-label="Breadcrumb">
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-slate-600">/</span>}
                {idx < breadcrumbs.length - 1 ? (
                  <Link to={bc.url} className="hover:text-primary-start transition-colors font-medium">
                    {bc.label}
                  </Link>
                ) : (
                  <span className="dark:text-slate-300 text-slate-700 font-semibold truncate">
                    {bc.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Hero Section */}
          <div className="text-center py-12 md:py-20 max-w-4xl mx-auto" id="hero-panel">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-black/5 dark:text-slate-300 text-slate-700 text-xs font-semibold mb-6 border dark:border-white/10 border-black/10">
              <MapPin size={14} className="text-primary-start animate-bounce" />
              <span>Cultivation Zone: {locationName}, {stateName}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white text-slate-900 leading-tight mb-6 tracking-tight">
              <span className="gradient-text">{h1}</span>
            </h1>
            
            <p className="text-base md:text-xl dark:text-slate-400 text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Ready-to-deploy farming designs, certified organic F1 spawn grains seed supply, and lifelong support customized for {locationName}'s climatic factors.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://wa.me/919203544140?text=Hello,%20I%20am%20interested%20in%20launching%20a%20mushroom%20unit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <MessageCircle size={18} /> <span>Get Instant Assistance</span>
              </a>
              <a 
                href="tel:+919203544140" 
                className="px-8 py-3.5 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-slate-900 font-bold hover:dark:bg-white/5 hover:bg-black/5 transition-colors flex items-center gap-2"
              >
                <Phone size={18} /> <span>Call Advisor</span>
              </a>
            </div>
          </div>

          {/* Core Feature Bento Elements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" id="features-panel">
            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 relative group hover:border-primary-start/20 transition-all">
              <Sprout className="text-primary-start mb-4" size={32} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Technically Tailored</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm">Our substrate parameters, temperature cooling plans, and cropping schedules are optimized specifically for {locationName}'s weather.</p>
            </div>
            
            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 relative group hover:border-accent/20 transition-all">
              <TrendingUp className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Maximized Output</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm">We teach advanced organic farming procedures ensuring up to three intensive button or oyster flushes.</p>
            </div>
            
            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 relative group hover:border-green-500/20 transition-all">
              <ShieldCheck className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Buyback Safeguards</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm">Linking rural and urban growers with local food businesses, commercial mandis, and bulk dehydrating centers.</p>
            </div>
          </div>

          {/* Core Descriptive Editorial Content */}
          <section className="glass p-10 md:p-16 rounded-[3rem] border dark:border-white/5 border-black/5 mb-16" id="editorial-body">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight">
              {h2s[0]}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-start to-accent rounded-full mb-8"></div>
            
            <p className="dark:text-slate-350 text-slate-750 text-base md:text-lg leading-relaxed mb-6">
              {content}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t dark:border-white/5 border-black/5">
              <div>
                <h3 className="font-bold dark:text-white text-slate-900 text-lg mb-3">{h2s[1]}</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                  Start secure with laboratory certified spawn delivered in breathable micro-filter packages directly over your district block. Perfect sorghum-based germination safeguards yield rotation ratios.
                </p>
              </div>
              <div>
                <h3 className="font-bold dark:text-white text-slate-900 text-lg mb-3">{h2s[2]}</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                  From preparing raw compost substrates to monitoring pinning cycles inside insulated chambers, we keep you held through the initial 60 days to lock in positive margins.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive FAQs Accordion */}
          <FAQSection faqs={faqs} locationName={locationName} />

          {/* Dynamic Link Crawling Directory Portal */}
          <InternalLinks links={internalLinks} title={`Agricultural Networks near ${locationName}`} />

          {/* Interactive Converts optimized Call to Action */}
          <CTASection 
            heading={ctaText} 
            sub={`Book a private specialized remote call or farm visit with Organic Mushroom Farm technicians to construct your high-efficiency setup today.`} 
            ctaText={ctaText} 
            ctaUrl={ctaUrl} 
          />

        </div>
      </div>
    </>
  );
}
