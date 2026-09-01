'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';

import { Sprout, Phone, Mail, ArrowRight, CheckCircle2, FactoryIcon, BookOpen } from 'lucide-react';
import SEO from '@/src/components/SEO';

const ArticleOysterMushroom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <SEO 
        title="Why Oyster Mushrooms Are Taking the Culinary & Farming World by Storm"
        description="Discover the nutritional power and cultivation benefits of oyster mushrooms. Learn why they are a favorite for farmers and a delicious meat substitute."
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm text-primary-start font-bold uppercase tracking-widest mb-6">
            <Sprout size={18} />
            <span>Mushroom Services</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
            Why Oyster Mushrooms Are Taking the <span className="gradient-text">Culinary & Farming World by Storm</span>
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
            Have you ever wondered why oyster mushrooms are suddenly everywhere? From high-end restaurant menus to local farmers' markets, these beautiful, fan-shaped fungi are having a major moment. And honestly? They completely deserve the hype.
          </p>
          <p>
            Whether you are a food lover looking to upgrade your meals or an aspiring grower stepping into organic mushroom farming, oyster mushrooms are the perfect starting point.
          </p>
          <p>
            Here is why everyone is falling in love with them—and why you should too!
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            A Nutritional Powerhouse
          </h2>
          <p>
            Don't let their delicate appearance fool you. Oyster mushrooms are packed with serious health benefits. They are naturally low in calories but loaded with protein, fiber, antioxidants, and essential B vitamins. For vegans and vegetarians, their meaty texture makes them an incredible, natural meat substitute that absorbs flavors and spices beautifully.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            The Grower’s Favorite Fungus
          </h2>
          <p>
            If you have ever thought about mushroom cultivation, oyster mushrooms are your best friend. Why? Because they are famously forgiving and fast-growing.
          </p>
          <ul className="space-y-4 my-6">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Easy to Cultivate:</strong>
                They grow aggressively on a variety of organic substrates (like straw or sawdust), beating out contaminants easily.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Quick Harvest:</strong>
                Unlike other crops that take months, you can often see your first harvest of fresh oyster mushrooms in just a few weeks.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">High Yield:</strong>
                They produce abundantly, making them a highly profitable choice for commercial farming setups and a rewarding project for beginners.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Experience the Organic Difference
          </h2>
          <p>
            Not all mushrooms are created equal. To get the best flavor, highest nutritional value, and safest crop, starting with high-quality, chemical-free methods is crucial.
          </p>
          <p>
            Whether you are looking for premium organic oyster mushrooms for your kitchen, or need expert guidance, training, and supplies to start your own successful grow room, we have you covered.
          </p>

          <div className="glass p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 text-center mt-12 bg-primary-start/5">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Ready to explore the world of Oysters?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Discover top-tier cultivation resources and fresh produce at <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm - Oyster Mushroom Services</strong> today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:9203544140" className="btn-primary px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Phone size={18} /> Call / WhatsApp
              </a>
              <Link href="/contact" className="btn-outline px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Mail size={18} /> Contact Us Online
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};

export default ArticleOysterMushroom;
