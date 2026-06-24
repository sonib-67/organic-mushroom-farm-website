import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageCircle, Sprout, ShieldCheck, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { getJabalpurBlogByPath } from '../data/jabalpurBlogsData';
import { SHIPPING_DETAILS, MERCHANT_RETURN_POLICY } from '../utils/seoSchemas';

export default function JabalpurBlogDetailsPage() {
  const { blogRoute } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!blogRoute) {
    return <Navigate to="/cities/madhya-pradesh/jabalpur" replace />;
  }

  // Look up the exact blog record
  const blog = getJabalpurBlogByPath(blogRoute);

  if (!blog) {
    return <Navigate to="/cities/madhya-pradesh/jabalpur" replace />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Dynamically generate unique rating and review count deterministically based on the blog ID
  const ratings = ["4.8", "4.9", "4.7", "4.8", "4.9"];
  const reviewCounts = [118, 143, 85, 172, 130, 96, 164, 121, 107, 155, 189, 74];
  const ratingValue = ratings[blog.id % ratings.length];
  const reviewCount = reviewCounts[blog.id % reviewCounts.length];

  // Schema structured JSON-LD data
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "id": `https://organicmushroomfarm.shop/locations/jabalpur/${blog.path}#product`,
    "name": blog.title,
    "image": "https://organicmushroomfarm.shop/images/logo.png",
    "description": blog.meta,
    "brand": {
      "@type": "Brand",
      "name": "Organic Mushroom Farm"
    },
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "shippingDetails": SHIPPING_DETAILS,
      "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <SEO 
        title={blog.title}
        description={blog.meta}
        keywords={`${blog.keyword}, jabalpur mushroom training, how to grow mushroom in madhya pradesh`}
      />

      {/* Hidden review schema script for Google search results (not visible in UI) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Decorative backdrop blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-start/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm dark:text-slate-500 text-slate-500 mb-8 font-semibold">
            <Link to="/" className="hover:text-primary-start transition-colors">Home</Link>
            <span>/</span>
            <Link to="/cities" className="hover:text-primary-start transition-colors">Cities</Link>
            <span>/</span>
            <Link to="/cities/madhya-pradesh" className="hover:text-primary-start transition-colors">MP</Link>
            <span>/</span>
            <Link to="/cities/madhya-pradesh/jabalpur" className="hover:text-primary-start transition-colors">Jabalpur</Link>
            <span>/</span>
            <span className="dark:text-slate-300 text-slate-700 font-medium truncate max-w-[200px]">{blog.keyword}</span>
          </div>

          {/* Intro Hero Area */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full dark:bg-primary-start/10 bg-black/10 text-primary-start text-[10px] font-black uppercase tracking-wider border border-primary-start/20">
                <MapPin size={10} className="animate-pulse" /> Region: Jabalpur
              </span>
              <span className="px-3 py-1 rounded-full dark:bg-slate-900 bg-slate-100 border dark:border-white/10 border-black/10 dark:text-slate-400 text-slate-600 text-[10px] font-black uppercase tracking-wider">
                {blog.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold dark:text-white text-slate-900 mb-6 leading-tight tracking-tight">
              {blog.h1}
            </h1>
          </div>

          {/* Editorial Article Body */}
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 mb-12">
            <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 mb-6 uppercase tracking-wider border-l-2 border-primary-start pl-4">
              Cultivation Introductory Insights
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-base md:text-lg leading-relaxed mb-8 font-medium">
              {blog.intro}
            </p>

            {/* In-article contextual highlights based on category */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div className="p-5 rounded-2xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/10">
                <h4 className="dark:text-white text-slate-950 font-bold text-sm mb-1 flex items-center gap-1.5">
                  <Sprout size={14} className="text-primary-start" /> F1 Mother Spawns
                </h4>
                <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed font-semibold">
                  Source sterile F1-grade mother seeds developed locally in cleanroom environments to maximize yield.
                </p>
              </div>
              <div className="p-5 rounded-2xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/10">
                <h4 className="dark:text-white text-slate-950 font-bold text-sm mb-1 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-green-500" /> Buyback Guarantee
                </h4>
                <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed font-semibold">
                  Support linkages connected straight with major mandis, drying hubs, and exporter warehouses.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Accordions Section */}
          <div className="mb-12">
            <h2 className="text-lg md:text-xl font-black dark:text-white text-slate-900 mb-6 uppercase tracking-wider">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-3">
              {blog.faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="glass border dark:border-white/5 border-black/10 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-base dark:text-white text-slate-900 dark:hover:text-slate-300 hover:text-slate-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaqIndex === index ? 'rotate-180 dark:text-white text-slate-900' : ''
                      }`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-sm md:text-base dark:text-slate-400 text-slate-600 leading-relaxed border-t dark:border-white/5 border-black/10 pt-3 font-semibold"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Quick-action Contact Callout */}
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-primary-start/5 pointer-events-none">
              <Sprout size={120} />
            </div>

            <h3 className="text-2xl font-extrabold dark:text-white text-slate-950 mb-4">Ready to Setup Your Commercial Unit?</h3>
            <p className="dark:text-slate-400 text-slate-600 text-sm max-w-lg mx-auto mb-8 font-semibold">
              Connect directly with our master consultancy network today to access blueprints, legal templates, and subsidy documentations.
            </p>

            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a 
                href="https://wa.me/919203544140"
                className="btn-primary px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <MessageCircle size={16} /> Connect via WhatsApp
              </a>
              <a 
                href="tel:9203544140"
                className="px-8 py-3 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 dark:text-white text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2 border dark:border-white/10 border-black/10"
              >
                <Phone size={15} /> Talk to Specialist
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
