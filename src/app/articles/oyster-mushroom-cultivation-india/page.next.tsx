'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';

import { Sprout, Phone, Mail, CheckCircle2 } from 'lucide-react';
import SEO from '@/src/components/SEO';

const ArticleOysterCultivation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <SEO 
        title="Oyster Mushroom Cultivation in India: Low-Cost, High-Profit Agri-Business"
        description="Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers."
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm text-primary-start font-bold uppercase tracking-widest mb-6">
            <Sprout size={18} />
            <span>Cultivation Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
            Oyster Mushroom Cultivation in India: <span className="gradient-text">The Ultimate Low-Cost, High-Profit Agri-Business</span> 🍄
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
            If you are looking to step into the world of modern agriculture but don't have acres of land or a massive budget, you are in the right place. Across India, rural farmers, urban youth, and agri-startups are turning to <Link href="/services/oyster-mushroom" className="text-primary-start hover:underline font-semibold">Oyster Mushroom cultivation</Link> as a highly lucrative and scalable business model.
          </p>
          <p>
            Also known locally as Dhingri, oyster mushrooms are incredibly resilient and beginner-friendly. Here is why growing them is one of the smartest agricultural investments you can make today.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            1. Zero Need for Expensive Land
          </h2>
          <p>
            Unlike traditional farming, you do not need fertile soil or acres of open space. Oyster mushrooms are grown completely indoors. A small, clean 100 to 200 square foot room with proper humidity control is more than enough to start a highly productive setup. This makes it the ultimate business for urban entrepreneurs and small-scale farmers alike. Looking to scale? A <Link href="/services/turnkey-setup" className="text-primary-start hover:underline font-semibold">turnkey commercial setup</Link> can maximize your vertical space.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            2. Grown on Agricultural Waste
          </h2>
          <p>
            One of the biggest advantages of oyster mushroom farming is how incredibly cheap the production cost is. In India, agricultural by-products like wheat straw, paddy straw, and sugarcane bagasse are available abundantly and at throwaway prices. Instead of this waste being discarded, you can use it as a nutrient-rich organic substrate to grow a high-value crop.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            3. Lightning-Fast Cash Flow
          </h2>
          <p>
            Traditional crops make you wait months for a harvest. Oyster mushrooms completely change the game. With the right room temperature and quality <Link href="/spawn-seeds" className="text-primary-start hover:underline font-semibold">organic spawn</Link>, these mushrooms grow rapidly and can be harvested in just 30 to 45 days. This incredibly short crop cycle ensures continuous production and a fast, reliable cash flow for your business.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            4. Massive Market Demand
          </h2>
          <p>
            Packed with protein, fiber, and essential vitamins, oyster mushrooms are a nutritional powerhouse. With a booming shift towards plant-based diets and health-conscious eating across Indian cities and semi-urban areas, the demand for fresh, chemical-free organic mushrooms is skyrocketing.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Master the Art of Cultivation
          </h2>
          <p>
            While they are one of the easiest varieties to grow, you still need a proper step-by-step approach. Knowing how to pasteurize your substrate, maintain 85–90% relative humidity, and protect your bags from contamination is the key to massive commercial yields.
          </p>

          <div className="glass p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 text-center mt-12 bg-primary-start/5">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Ready to master oyster mushroom cultivation?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Join our <Link href="/training/online" className="text-primary-start hover:underline font-semibold">expert training courses</Link> and get high-quality <Link href="/spawn-seeds" className="text-primary-start hover:underline font-semibold">spawn</Link> to start your highly profitable agricultural business today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:9203544140" className="btn-primary px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Phone size={18} /> Call / WhatsApp
              </a>
              <Link href="/contact" className="btn-outline px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Mail size={18} /> Book a Consultation
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};

export default ArticleOysterCultivation;
