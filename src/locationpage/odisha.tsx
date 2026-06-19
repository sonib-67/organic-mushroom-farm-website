import React from 'react';
import { MapPin, Sprout, TrendingUp, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateLocationSEOArticle } from '../data/locationSEOContent';

export default function OdishaPage() {
  const stateName = "Odisha";
  const slug = "odisha";
  
  const seoData = generateLocationSEOArticle(slug, "Business & Farming");

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.metaDesc}
        keywords={seoData.keywords}
      />
      
      <div className="min-h-screen pt-32 pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs md:text-sm dark:text-slate-500 text-slate-400 mb-6 font-semibold">
            <Link to="/" className="hover:text-primary-start transition-colors">Home</Link>
            <span>/</span>
            <Link to="/sitemap" className="hover:text-primary-start transition-colors">Sitemap</Link>
            <span>/</span>
            <span className="dark:text-slate-300 text-slate-700 font-medium">{stateName}</span>
          </div>

          {/* Hero Section */}
          <div className="text-center py-16 md:py-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-black/5 dark:text-slate-300 text-slate-700 text-xs font-semibold mb-6 border dark:border-white/10 border-black/10">
              <MapPin size={14} className="text-primary-start animate-pulse" />
              <span>State Hub: {stateName}, India</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold dark:text-white text-slate-900 leading-tight mb-6 tracking-tighter">
              {seoData.h1}
            </h1>
            <p className="text-lg md:text-xl dark:text-slate-400 text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
              {seoData.metaDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919203544140" className="btn-primary px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary-start/20">
                <MessageCircle size={18} /> Connect on WhatsApp
              </a>
              <a href="tel:9203544140" className="px-8 py-3 rounded-full border dark:border-white/25 border-black/25 dark:text-white text-slate-900 font-bold hover:dark:bg-white/5 hover:bg-black/5 transition-colors flex items-center gap-2">
                <Phone size={18} /> Call Advisor
              </a>
            </div>
          </div>

          {/* Bento Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col justify-between group hover:border-primary-start/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary-start/10 flex items-center justify-center mb-6 text-primary-start">
                  <Sprout size={22} />
                </div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Climate Customization</h3>
                <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed font-semibold">
                  Cropping templates and compost cooling channels are strategically designed for {stateName}'s seasonal thermal profiles to optimize electricity bills.
                </p>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col justify-between group hover:border-accent/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                  <TrendingUp size={22} />
                </div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">High Profit Yields</h3>
                <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed font-semibold">
                  By utilizing sterile handling, F1 mother spawns, and standardized casing parameters, we achieve 25-30% biological efficiency with fast turnarounds.
                </p>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col justify-between group hover:border-green-500/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-green-500">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Buyback Channel</h3>
                <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed font-semibold">
                  Access legally bound buyback linkage contracts and direct logical transport routes linking your harvest to local distributors in {stateName}.
                </p>
              </div>
            </div>
          </div>

          {/* Deep Content Section */}
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 mb-16">
            <div 
              className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: seoData.articleHtml }}
            />
          </div>

          {/* Unique FAQs Accordion */}
          {seoData.faqs && seoData.faqs.length > 0 && (
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 mb-16">
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-3 tracking-tight">Frequently Asked Questions</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-start to-accent rounded-full mb-8"></div>
              <div className="space-y-4">
                {seoData.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="font-bold dark:text-white text-slate-900 text-base mb-2">Q: {faq.q}</h4>
                    <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Training and Support Highlight */}
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 text-center">
            <h3 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-2">Certified Training & Consultation</h3>
            <p className="dark:text-slate-400 text-slate-500 text-sm mb-6 max-w-xl mx-auto font-medium">
              Get hands-on practical guides, government subsidy documentation templates, and certification to start your venture in {stateName} successfully.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact" className="btn-primary px-6 py-2.5 rounded-full text-xs font-bold">
                Request Free Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
