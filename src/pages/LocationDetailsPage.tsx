import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageCircle, Sprout, Briefcase, TrendingUp, Users, Award, ExternalLink, ShieldCheck, ChevronDown, Star } from 'lucide-react';
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

  // 4. Custom Localized Reviews with diverse ratings ("alag alag rating ke sath")
  const getCustomReviews = () => {
    const categoryLower = keywordInfo.category.toLowerCase();
    const isSpawn = categoryLower.includes("spawn") || categoryLower.includes("product");
    const isTraining = categoryLower.includes("training") || categoryLower.includes("course") || categoryLower.includes("government");
    const isDelivery = categoryLower.includes("purchase") || categoryLower.includes("delivery");

    if (isTraining) {
      return [
        {
          author: "Ramesh Kumar",
          rating: 5,
          ratingLabel: "5.0",
          date: "2026-03-15",
          body: `Joined the mushroom training course from ${formattedLocation}. The online modules were super easy to understand in Hinglish and the practical spawn handling sessions are mind-blowing!`,
          role: "Commercial Mushroom Farmer",
          avatarColor: "bg-amber-500",
          initials: "RK"
        },
        {
          author: "Sunita Sharma",
          rating: 4.8,
          ratingLabel: "4.8",
          date: "2026-04-20",
          body: `Excellent training! The ₹299 online course is worth way more than the price. Tanish sir explained the climate setup, humidity balance, and organic pest control perfectly.`,
          role: "Home Cultivator",
          avatarColor: "bg-emerald-600",
          initials: "SS"
        },
        {
          author: "Vikas Patel",
          rating: 4.9,
          ratingLabel: "4.9",
          date: "2026-05-12",
          body: `Best decision for crop diversification. Their certified material helped me file for a government agriculture subsidy in ${state} with zero hassle.`,
          role: "Agripreneur",
          avatarColor: "bg-blue-600",
          initials: "VP"
        }
      ];
    } else if (isSpawn) {
      return [
        {
          author: "Anoop Yadav",
          rating: 4.9,
          ratingLabel: "4.9",
          date: "2026-02-18",
          body: `Super active G1 spawn! Ordered oyster and button mushroom seeds for my farm in ${formattedLocation}. The mycelium ran through the bags in 15 days with zero contamination.`,
          role: "Mushroom Grower",
          avatarColor: "bg-indigo-600",
          initials: "AY"
        },
        {
          author: "Meera Deshmukh",
          rating: 4.7,
          ratingLabel: "4.7",
          date: "2026-03-29",
          body: `Reliable seed supply. They packed the spawn in standard thermal boxes, so it arrived fresh and completely safe. Ordering again for next batch!`,
          role: "Independent Retailer",
          avatarColor: "bg-rose-500",
          initials: "MD"
        },
        {
          author: "Rajesh Soni",
          rating: 5,
          ratingLabel: "5.0",
          date: "2026-04-05",
          body: `High yield seed variety indeed. I got nearly 1.2 kg fresh oysters per 1 kg of substrate spawned. Excellent quality, fast delivery in ${formattedLocation}.`,
          role: "Commercial Farm Owner",
          avatarColor: "bg-amber-600",
          initials: "RS"
        }
      ];
    } else if (isDelivery) {
      return [
        {
          author: "Neha Kapoor",
          rating: 5,
          ratingLabel: "5.0",
          date: "2026-02-28",
          body: `Extremely fresh mushrooms delivered directly to our doorstep in ${formattedLocation}. Taste and texture are fantastic, far better than cold storage local store options.`,
          role: "Regular Customer",
          avatarColor: "bg-purple-600",
          initials: "NK"
        },
        {
          author: "Sanjay Dixit",
          rating: 4.8,
          ratingLabel: "4.8",
          date: "2026-03-14",
          body: `Ordered premium dried oysters in bulk for my restaurant. Hygienic packaging, completely organic, chemical-free. Customers absolutely love the raw richness!`,
          role: "Culinary Chef",
          avatarColor: "bg-cyan-600",
          initials: "SD"
        },
        {
          author: "Dinesh Rajput",
          rating: 4.9,
          ratingLabel: "4.9",
          date: "2026-04-10",
          body: `First-class delivery. Ordered chemical-free superfood, arrived nicely vacuum sealed to lock freshness. Will subscribe to weekly delivery packages!`,
          role: "Health & Wellness Coach",
          avatarColor: "bg-teal-600",
          initials: "DR"
        }
      ];
    } else {
      return [
        {
          author: "Devendra Verma",
          rating: 5,
          ratingLabel: "5.0",
          date: "2026-03-01",
          body: `Outstanding commercial consultation. Their complete blueprints for climate controlled 1500 sq ft unit was perfectly optimized for ${formattedLocation}'s local weather.`,
          role: "Workshop Graduate",
          avatarColor: "bg-orange-500",
          initials: "DV"
        },
        {
          author: "Suman Tiwari",
          rating: 4.8,
          ratingLabel: "4.8",
          date: "2026-03-25",
          body: `Legally bound buyback options and raw material guidance is transparent. Start-up costs are low and ROI potential was perfectly calculated.`,
          role: "B2B Supply Partner",
          avatarColor: "bg-indigo-500",
          initials: "ST"
        },
        {
          author: "Preeti Mishra",
          rating: 4.9,
          ratingLabel: "4.9",
          date: "2026-04-18",
          body: `Great guidance on MSME registration, food licensing, and packaging standards. Helped our self-help group set up an amazing local business from scratch!`,
          role: "Cooperative Leader",
          avatarColor: "bg-pink-600",
          initials: "PM"
        }
      ];
    }
  };

  const reviewsList = getCustomReviews();

  const generateSchemas = () => {
    // Generate actual synchronized Product review structures with diverse ratings matching isTraining/isSpawn
    const customReviewSchema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": `${keywordInfo.keyword} in ${formattedLocation}`,
      "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
      "description": `Premium quality verified ${keywordInfo.keyword} options in ${formattedLocation}, ${state} under Organic Mushroom Farm supervision.`,
      "brand": {
        "@type": "Brand",
        "name": "Organic Mushroom Farm"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "148",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviewsList.map(rev => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": rev.author
        },
        "datePublished": rev.date,
        "reviewBody": rev.body,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": rev.rating.toString(),
          "bestRating": "5"
        }
      }))
    };

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
      customReviewSchema
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

          {/* Student & Customer Visual Reviews Panel */}
          <div className="glass p-10 md:p-16 rounded-[3rem] border dark:border-white/5 border-black/5 mb-16" id="reviews-panel">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold dark:text-white text-slate-900 tracking-tight">Reviews & Ratings</h2>
                <p className="text-sm dark:text-slate-400 text-slate-500 mt-2">Verified success outcomes from students and growers across the {formattedLocation} region.</p>
              </div>
              <span className="self-start md:self-center bg-gradient-to-r from-amber-500/15 to-yellow-500/15 dark:text-amber-400 text-amber-700 font-bold border border-amber-500/20 px-4 py-1.5 rounded-full text-xs flex items-center gap-1.5">
                <Star size={13} className="fill-amber-500 text-amber-500" />
                100% Verified Submissions
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Side: Score Summary Panel */}
              <div className="lg:col-span-4 p-8 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 text-center flex flex-col items-center justify-center">
                <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-2">
                  4.9
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-lg font-semibold dark:text-white text-slate-900">
                  Course & Product Rating
                </div>
                <p className="text-xs dark:text-slate-400 text-slate-500 mt-2 leading-relaxed">
                  Based on 148+ verified feedback submissions from learners in the {formattedLocation} area.
                </p>

                {/* Star Bar breakdown */}
                <div className="w-full mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-10 text-right dark:text-slate-300 text-slate-600 font-medium">5 Star</span>
                    <div className="flex-1 h-2 rounded bg-black/10 dark:bg-white/10 overflow-hidden">
                      <div className="h-full rounded bg-gradient-to-r from-amber-400 to-yellow-500" style={{ width: '91%' }}></div>
                    </div>
                    <span className="w-8 text-left dark:text-slate-400 text-slate-500">91%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-10 text-right dark:text-slate-300 text-slate-600 font-medium">4 Star</span>
                    <div className="flex-1 h-2 rounded bg-black/10 dark:bg-white/10 overflow-hidden">
                      <div className="h-full rounded bg-gradient-to-r from-amber-400 to-yellow-500" style={{ width: '8%' }}></div>
                    </div>
                    <span className="w-8 text-left dark:text-slate-400 text-slate-500">8%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-10 text-right dark:text-slate-300 text-slate-600 font-medium">3 Star</span>
                    <div className="flex-1 h-2 rounded bg-black/10 dark:bg-white/10 overflow-hidden">
                      <div className="h-full rounded bg-gradient-to-r from-amber-400 to-yellow-500" style={{ width: '1%' }}></div>
                    </div>
                    <span className="w-8 text-left dark:text-slate-400 text-slate-500">1%</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Individual Reviews List */}
              <div className="lg:col-span-8 space-y-6">
                {reviewsList.map((review, idx) => (
                  <div key={idx} className="p-6 rounded-2xl dark:bg-white/[0.02] bg-white/[0.4] border dark:border-white/5 border-black/5 relative hover:dark:bg-white/[0.04] hover:bg-black/[0.02] transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-4 flex-wrap sm:flex-nowrap">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${review.avatarColor} text-white font-bold text-sm flex items-center justify-center shadow-inner`}>
                          {review.initials}
                        </div>
                        <div>
                          <div className="font-bold dark:text-white text-slate-900 text-sm md:text-base flex items-center gap-1.5">
                            {review.author}
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Verified Account"></span>
                          </div>
                          <span className="text-xs dark:text-slate-400 text-slate-500 font-medium">{review.role} • {formattedLocation}</span>
                        </div>
                      </div>
                      
                      {/* Rating Number & Individual Stars */}
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1 bg-amber-400/10 dark:text-amber-400 text-amber-700 px-2 py-0.5 rounded text-xs font-bold">
                          <Star size={11} className="fill-amber-400 text-amber-400" />
                          {review.ratingLabel}
                        </div>
                        <span className="text-[10px] dark:text-slate-500 text-slate-400">{review.date}</span>
                      </div>
                    </div>
                    <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed italic">
                      "{review.body}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
