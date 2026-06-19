import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageCircle, Sprout, Briefcase, TrendingUp, Users, Award, ExternalLink, ShieldCheck, ChevronDown } from 'lucide-react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateReviewSchema } from '../utils/seoSchemas';
import { generateLocationSEOArticle, getStateOfLocation } from '../data/locationSEOContent';
import { parseSEOPathname } from '../utils/seoPathParser';
import { SEO_KEYWORDS } from '../data/seoKeywordsData';
import { ALL_LOCATIONS } from '../data/locationsData';

export default function LocationDetailsPage() {
  const { pathname } = useLocation();
  const [crawlMenuExpanded, setCrawlMenuExpanded] = useState(false);

  // 1. Dynamic SEO URL and Location Parsing
  const parsed = parseSEOPathname(pathname);
  if (!parsed) {
    // If not matching any known pattern, we can fallback safely or do legacy checks
    // Let's check if there is a known location in path
    const pathParts = pathname.toLowerCase().split('-');
    const baseType = pathParts[0].replace('/', '');
    let matchedLoc = 'india';
    
    for (const loc of ALL_LOCATIONS) {
      if (pathname.toLowerCase().includes(loc)) {
        matchedLoc = loc;
        break;
      }
    }

    // fallback mapping
    const fallbackKwd = SEO_KEYWORDS.find(k => k.id === 1) || SEO_KEYWORDS[0];
    return <Navigate to={`/${matchedLoc}${fallbackKwd.url}`} replace />;
  }

  const { locationSlug, keywordInfo } = parsed;
  const state = getStateOfLocation(locationSlug);

  const formattedLocation = locationSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // 2. Generate Highly Targeted and Contextually Unique Content to completely avoid duplicate penalty
  const seoData = generateLocationSEOArticle(locationSlug, keywordInfo.category.toLowerCase(), keywordInfo);

  // 3. Dynamic CTAs and Titles based on category
  const getCategoryDetails = () => {
    switch (keywordInfo.category) {
      case "Training Center":
      case "Training & Courses":
      case "Government & Free Training":
        return {
          heroHeading: `${keywordInfo.keyword} in ${formattedLocation}`,
          heroSub: `Master certified organic mushroom cultivation in ${formattedLocation}, ${state} with direct government subsidy help and premium hybrid spawn supply.`,
          cta: "Join Training Cohort"
        };
      case "How To Grow":
        return {
          heroHeading: `${keywordInfo.keyword} easily in ${formattedLocation}`,
          heroSub: `Step-by-step guidance on setting up cost-effective indoor cropping structures specifically optimized for ${formattedLocation}'s local atmosphere.`,
          cta: "Get Growing Guide"
        };
      case "Types & Prices":
        return {
          heroHeading: `${keywordInfo.keyword} inside ${formattedLocation}`,
          heroSub: `Check today's real wholesale Mandis price, read consumer benefits, and access direct supply channels in ${formattedLocation}, ${state}.`,
          cta: "Get Price List"
        };
      case "Spawn & Products":
        return {
          heroHeading: `${keywordInfo.keyword} for ${formattedLocation}`,
          heroSub: `Secure premium laboratory-bred F1 generation grain spawn seeds of White Button, Oyster, and Milky mushrooms delivered directly to your doorstep.`,
          cta: "Order Premium Seeds"
        };
      case "Purchase & Delivery":
        return {
          heroHeading: `${keywordInfo.keyword} in ${formattedLocation}`,
          heroSub: `Buy freshly harvested clinical-grade organic mushrooms online with rapid temperature-controlled home delivery in ${formattedLocation}.`,
          cta: "Order Fresh Mushroom"
        };
      case "Business & Farming":
      default:
        return {
          heroHeading: `${keywordInfo.keyword} inside ${formattedLocation}`,
          heroSub: `Commercial greenhouse design blueprints, expert agro-consultancy, and legally bound buy-back guarantees for growers in ${formattedLocation}.`,
          cta: "Secure Business Plan"
        };
    }
  };

  const ctaDetails = getCategoryDetails();

  const faqs = [
    {
      q: `What is the scope of ${keywordInfo.keyword} in ${formattedLocation}?`,
      a: `Unprecedented healthy food adaptation has created massive demand for ${keywordInfo.keyword} directly serving markets of ${formattedLocation} and greater ${state}. It offers high margin returns compared to field grains.`
    },
    {
      q: `Do you provide verified setup manuals near ${formattedLocation}?`,
      a: `Yes! We provide turnkey automated cooling setups, premium F1 seed supply, and professional online/offline training certifications customized for families and commercial developers across ${formattedLocation}.`
    },
    {
      q: `How long does it take to start earning from mushroom cultivation in ${formattedLocation}?`,
      a: `Typically, crops like Oyster Mushrooms mature within just 21 to 25 days post block spawning, enabling high rotation of investment funds inside ${formattedLocation}.`
    }
  ];

  const generateSchemas = () => {
    return [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      generateReviewSchema(formattedLocation)
    ];
  };

  // Generate 20 incredibly smart hidden crawl links to other keywords in this location
  // and popular surrounding cities to boost Google visibility and instant indexation
  const generateCrawlLinks = () => {
    const defaultCities = ['mumbai', 'pune', 'lucknow', 'patna', 'delhi', 'new-delhi', 'jaipur', 'bengaluru', 'kanpur', 'gaya', 'guwahati', 'dehradun', 'solan', 'haridwar', 'gorakhpur', 'meerut', 'hyderabad', 'ranchi', 'noida', 'gurugram'];
    
    // Choose other random keywords for current location
    const relativeKeywords = SEO_KEYWORDS
      .filter(k => k.id !== keywordInfo.id)
      .slice(0, 15);

    // Filter cities to only other names
    const destinationCities = defaultCities
      .filter(c => c !== locationSlug)
      .slice(0, 10);

    return {
      relativeKeywords: relativeKeywords.map(k => ({
        url: `/${locationSlug}${k.url}`,
        label: `${k.keyword} - ${formattedLocation}`
      })),
      popularCities: destinationCities.map(c => ({
        url: `/${c}${keywordInfo.url}`,
        label: `${keywordInfo.keyword} in ${c.toUpperCase()}`
      }))
    };
  };

  const crawlLinks = generateCrawlLinks();

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.metaDesc}
        keywords={seoData.keywords}
        url={pathname}
        schemas={generateSchemas()}
      />
      
      <div className="pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs md:text-sm dark:text-slate-500 text-slate-400 mb-6">
            <Link to="/" className="hover:text-primary-start transition-colors">Home</Link>
            <span>/</span>
            <Link to="/locations" className="hover:text-primary-start transition-colors">Locations</Link>
            <span>/</span>
            <span className="dark:text-slate-300 text-slate-700 font-medium truncate">{formattedLocation}</span>
          </div>

          {/* Hero Section */}
          <div className="text-center py-16 md:py-24 max-w-4xl mx-auto" id="hero-panel">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-black/5 dark:text-slate-300 text-slate-700 text-xs font-semibold mb-6 border dark:border-white/10 border-black/10">
              <MapPin size={14} className="text-primary-start animate-pulse" />
              <span>Verified Region: {formattedLocation}, {state}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white text-slate-900 leading-tight mb-6 tracking-tighter">
              <span className="gradient-text">{ctaDetails.heroHeading}</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-slate-400 text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              {ctaDetails.heroSub}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919203544140" className="btn-primary px-8 py-3 rounded-full font-bold flex items-center gap-2">
                <MessageCircle size={18} /> {ctaDetails.cta} via WhatsApp
              </a>
              <a href="tel:9203544140" className="px-8 py-3 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-slate-900 font-bold hover:dark:bg-white/5 hover:bg-black/5 transition-colors flex items-center gap-2">
                <Phone size={18} /> Call Advisor
              </a>
            </div>
          </div>

          {/* Core Feature Bento Elements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" id="features-panel">
            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5">
              <Sprout className="text-primary-start mb-4" size={32} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Regional Tailoring</h3>
              <p className="dark:text-slate-400 text-slate-600">Our cropping manuals, compost plans, and scheduling are carefully mapped to the climate profile of {formattedLocation}.</p>
            </div>
            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5">
              <TrendingUp className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Maximized Harvests</h3>
              <p className="dark:text-slate-400 text-slate-600">Succeed rapidly with automated temperature mapping systems, ensuring up to 3 flushes per block inside {formattedLocation}.</p>
            </div>
            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5">
              <ShieldCheck className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Buyback Assistance</h3>
              <p className="dark:text-slate-400 text-slate-600">Connecting local growers with wholesale markets, grocery channels, and drying facilities for immediate ROI.</p>
            </div>
          </div>

          {/* Language Wise Deep Learning Article Portal */}
          <div className="glass p-10 md:p-16 rounded-[3rem] border dark:border-white/5 border-black/5 mb-16" id="editorial-body">
            <h1 className="text-2xl md:text-4xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight">
              {seoData.h1}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-start to-accent rounded-full mb-8"></div>
            
            <div dangerouslySetInnerHTML={{ __html: seoData.articleHtml }} />
          </div>

          {/* Highly Structured FAQs Accordion */}
          <div className="glass p-10 md:p-16 rounded-[3rem] border dark:border-white/5 border-black/5 mb-24" id="faq-accordions">
            <h2 className="text-2xl md:text-4xl font-bold dark:text-white text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                  <h4 className="font-bold dark:text-white text-slate-900 mb-2">{faq.q}</h4>
                  <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hidden Link Index / Crawler Portal (Search Engine Optimization Catalyst) */}
          {/* Collapsible accordion visually integrated so that users can read regions, while bots trace internal links instantly to map 80,000 keyword combinations */}
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 mb-16" id="crawl-portal">
            <button 
              onClick={() => setCrawlMenuExpanded(!crawlMenuExpanded)}
              className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-start"
              aria-expanded={crawlMenuExpanded}
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900">National Organic Agriculture Directory Links</h3>
                <p className="text-xs dark:text-slate-400 text-slate-500 mt-1">Explore all related services and other state-wise networks in India.</p>
              </div>
              <ChevronDown 
                size={20} 
                className={`dark:text-slate-400 text-slate-650 transform transition-transform duration-350 ${crawlMenuExpanded ? 'rotate-180' : ''}`} 
              />
            </button>

            <AnimatePresence initial={false}>
              {crawlMenuExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 border-t dark:border-white/5 border-black/5 mt-6 grid md:grid-cols-2 gap-8">
                    
                    {/* Related Services Links for current location */}
                    <div>
                      <h4 className="text-sm font-bold dark:text-slate-300 text-slate-800 mb-4 uppercase tracking-wider">
                        Mushroom options in {formattedLocation}:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {crawlLinks.relativeKeywords.map((link, j) => (
                          <Link 
                            key={j} 
                            to={link.url}
                            className="text-xs dark:text-slate-400 text-slate-600 hover:text-primary-start dark:hover:text-white transition-colors"
                          >
                            • {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Surrounding Major Markets for current keyword */}
                    <div>
                      <h4 className="text-sm font-bold dark:text-slate-300 text-slate-800 mb-4 uppercase tracking-wider">
                        Other Regional Markets:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {crawlLinks.popularCities.map((link, k) => (
                          <Link 
                            key={k} 
                            to={link.url}
                            className="text-xs dark:text-slate-400 text-slate-600 hover:text-accent dark:hover:text-white transition-colors"
                          >
                            • {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </>
  );
}
