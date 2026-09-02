'use client';

import React from 'react';
import Link from 'next/link';
import { Sprout, Phone, Mail } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

export const OysterMushroomCultivationIndiaContent: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-emerald-500 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Oyster Mushroom Cultivation India
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-6">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 text-sm text-emerald-500 font-bold uppercase tracking-widest mb-6">
              <Sprout size={18} />
              <span>Cultivation Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-6 leading-tight tracking-tight">
              Oyster Mushroom Cultivation in India: <span className="gradient-text font-black">The Ultimate Low-Cost, High-Profit Agri-Business</span> 🍄
            </h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
            <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
              If you are looking to step into the world of modern agriculture but don't have acres of land or a massive budget, you are in the right place. Across India, rural farmers, urban youth, and agri-startups are turning to <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">Oyster Mushroom cultivation</Link> as a highly lucrative and scalable business model.
            </p>
            <p>
              Also known locally as Dhingri, oyster mushrooms are incredibly resilient and beginner-friendly. Here is why growing them is one of the smartest agricultural investments you can make today.
            </p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              1. Zero Need for Expensive Land
            </h2>
            <p>
              Unlike traditional farming, you do not need fertile soil or acres of open space. Oyster mushrooms are grown completely indoors. A small, clean 100 to 200 square foot room with proper humidity control is more than enough to start a highly productive setup. This makes it the ultimate business for urban entrepreneurs and small-scale farmers alike. Looking to scale? A <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">turnkey commercial setup</Link> can maximize your vertical space.
            </p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              2. Grown on Agricultural Waste
            </h2>
            <p>
              One of the biggest advantages of oyster mushroom farming is how incredibly cheap the production cost is. In India, agricultural by-products like wheat straw, paddy straw, and sugarcane bagasse are available abundantly and at throwaway prices. Instead of this waste being discarded, you can use it as a nutrient-rich organic substrate to grow a high-value crop.
            </p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              3. Lightning-Fast Cash Flow
            </h2>
            <p>
              Traditional crops make you wait months for a harvest. Oyster mushrooms completely change the game. With the right room temperature and quality <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">organic spawn</Link>, these mushrooms grow rapidly and can be harvested in just 30 to 45 days. This incredibly short crop cycle ensures continuous production and a fast, reliable cash flow for your business.
            </p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              4. Massive Market Demand
            </h2>
            <p>
              Packed with protein, fiber, and essential vitamins, oyster mushrooms are a nutritional powerhouse. With a booming shift towards plant-based diets and health-conscious eating across Indian cities and semi-urban areas, the demand for fresh, chemical-free organic mushrooms is skyrocketing.
            </p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              Master the Art of Cultivation
            </h2>
            <p>
              While they are one of the easiest varieties to grow, you still need a proper step-by-step approach. Knowing how to pasteurize your substrate, maintain 85–90% relative humidity, and protect your bags from contamination is the key to massive commercial yields.
            </p>

            <div className="p-8 md:p-10 rounded-[2rem] border dark:border-emerald-500/20 border-emerald-500/20 text-center mt-12 bg-emerald-500/5">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 mb-4">Ready to master oyster mushroom cultivation?</h2>
              <p className="dark:text-slate-300 text-slate-700 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Join our <Link href="/training/online" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">expert training courses</Link> and get high-quality <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">spawn</Link> to start your highly profitable agricultural business today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg w-full sm:w-auto">
                  <Phone size={18} /> Call / WhatsApp
                </a>
                <Link href="/contact" className="px-8 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-full sm:w-auto">
                  <Mail size={18} /> Book a Consultation
                </Link>
              </div>
            </div>

          </div>
        </article>
      </main>

      <Footer />
      <AIChatWidget />
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <HomeModals />
    </div>
  );
};
