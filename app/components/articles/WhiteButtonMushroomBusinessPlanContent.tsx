'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Factory, Phone, Mail, CheckCircle2, AlertCircle, Sprout, TrendingUp, HelpCircle } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

export const WhiteButtonMushroomBusinessPlanContent: React.FC = () => {
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
              Mushroom Farming Business Plan
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-6">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 text-sm text-emerald-500 font-bold uppercase tracking-widest mb-6">
              <TrendingUp size={18} />
              <span>Business Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-6 leading-tight tracking-tight">
              Mushroom Farming Business Plan India: <span className="gradient-text font-black">Cost, Profit & Startup Guide</span> 📈
            </h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
            <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
              Mushroom farming is rapidly emerging as one of the most profitable short-cycle agribusinesses in India. With high domestic demand, low land requirements, and excellent profit margins, it presents a massive opportunity. However, many beginners jump into <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">mushroom cultivation in India</Link> after watching viral YouTube success stories, only to find themselves struggling to make a profit.
            </p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              Why do most mushroom farmers earn less than expected?
            </h2>
            <p>
              The harsh reality is that a large percentage of new growers fail to reach their expected income because they focus only on production and completely ignore the business strategy. A successful mushroom farm is not just about growing crops—it requires meticulous planning, <Link href="/training/online" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">professional training</Link>, marketing, customer acquisition, cost management, and a long-term expansion model.
            </p>
            <p>
              Whether you are setting up in a metro city, a tier-1 urban area, or a rural village, having a solid Mushroom Farming Business Plan is the key to turning a small room into a highly profitable enterprise.
            </p>
            
            <div className="p-6 md:p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-center my-8">
              <p className="text-lg md:text-xl font-bold dark:text-white text-slate-900 m-0">Need expert guidance to start?</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300 mb-6">Call or WhatsApp us for professional training, farm setup, and consultancy.</p>
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-transform hover:scale-105 shadow-lg">
                <Phone size={18} /> 9203544140
              </a>
            </div>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              What Is a Mushroom Farming Business Plan?
            </h2>
            <p>A well-structured business plan acts as your roadmap to profitability. It helps entrepreneurs clearly define and understand:</p>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                { title: "Investment Requirements", desc: "Fixed infrastructure vs. running costs." },
                { title: "Production Goals", desc: "Daily or monthly yield targets based on farm size." },
                { title: "Customer Demand", desc: "Local market analysis and buyer identification." },
                { title: "Operating Costs", desc: "Substrate, spawn, electricity, water, and labor." },
                { title: "Revenue Sources", desc: "Fresh sales, dry mushrooms, and value-added products." },
                { title: "Expansion Opportunities", desc: "Scaling up to turnkey projects and consultancy." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm md:text-base dark:text-slate-300 text-slate-700 items-start p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-1">{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <p>Without this blueprint, growers often face inconsistent sales, crop contamination, and cash flow crises. Here is your step-by-step guide to building a profitable mushroom business.</p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              Step 1: Choose the Right Mushroom Variety
            </h2>
            <p>Different mushroom varieties target different markets and require specific climatic conditions. Choosing the right one is your first critical business decision.</p>
            
            <div className="overflow-x-auto w-full my-6">
              <table className="w-full text-left border-collapse min-w-[600px] text-sm md:text-base">
                <thead className="bg-emerald-500/10 border-b border-emerald-500/20">
                  <tr>
                    <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Variety</th>
                    <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Ideal Temp</th>
                    <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Market Demand</th>
                    <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Beginner Friendly?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-slate-700/50 border-slate-200">
                    <td className="py-4 px-6 font-semibold"><Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 hover:underline">Oyster</Link></td>
                    <td className="py-4 px-6 dark:text-slate-400 text-slate-600">20–30°C</td>
                    <td className="py-4 px-6 dark:text-slate-300 text-slate-700">High (Local & Health Markets)</td>
                    <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-bold">Highly Recommended</td>
                  </tr>
                  <tr className="border-b dark:border-slate-700/50 border-slate-200">
                    <td className="py-4 px-6 font-semibold"><Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 hover:underline">Milky</Link></td>
                    <td className="py-4 px-6 dark:text-slate-400 text-slate-600">25–35°C</td>
                    <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Good (Warmer Regions)</td>
                    <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-bold">Yes (Summer Crop)</td>
                  </tr>
                  <tr className="border-b dark:border-slate-700/50 border-slate-200">
                    <td className="py-4 px-6 font-semibold"><Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 hover:underline">Button</Link></td>
                    <td className="py-4 px-6 dark:text-slate-400 text-slate-600">15–18°C</td>
                    <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Very High (Supermarkets)</td>
                    <td className="py-4 px-6 text-orange-500 font-bold">Requires Climate Control</td>
                  </tr>
                  <tr className="border-b dark:border-slate-700/50 border-slate-200">
                    <td className="py-4 px-6 font-semibold dark:text-slate-200 text-slate-800">Shiitake</td>
                    <td className="py-4 px-6 dark:text-slate-400 text-slate-600">15–25°C</td>
                    <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Premium Market</td>
                    <td className="py-4 px-6 text-yellow-600 dark:text-yellow-500 font-bold">Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-2xl mb-8">
              <p className="text-sm md:text-base text-blue-800 dark:text-blue-200 m-0">
                <strong>Pro Tip:</strong> Most successful farmers in India start with Oyster Mushrooms to learn the ropes of humidity control and marketing before investing heavy capital into Button Mushroom climate control systems.
              </p>
            </div>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              Step 2: Plan Your Mushroom Farm Setup
            </h2>
            <p>You don't need acres of agricultural land to start. A successful <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">mushroom farm setup</Link> can begin in a 300–500 sq. ft. room, shed, or basement. Your infrastructure planning must include:</p>
            <ul className="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
              <li><strong>Production Capacity:</strong> Calculate how many bags your space can hold using vertical racks (bamboo or iron).</li>
              <li><strong>Ventilation:</strong> Proper exhaust systems to remove CO2, which is crucial for healthy cap formation.</li>
              <li><strong>Humidity Control:</strong> Foggers or manual sprayers to maintain 80–90% humidity.</li>
              <li><strong>Cleanliness & Storage:</strong> Separate areas for substrate preparation (dirty zone) and incubation/fruiting (clean zone).</li>
            </ul>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              Step 3: Invest in Professional Mushroom Training
            </h2>
            <p>Skipping professional training is the #1 reason new mushroom businesses fail. Mushroom cultivation is a science; one contaminated bag can ruin your entire batch.</p>
            
            <div className="grid sm:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <BookOpen className="text-emerald-500 mb-4" size={32} />
                <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2 mt-0"><Link href="/training/online" className="hover:text-emerald-500 transition-colors">Online Training</Link></h3>
                <p className="text-sm dark:text-slate-400 text-slate-600">Perfect for working professionals, students, and entrepreneurs. Learn the theory of cultivation, spawn management, and digital marketing.</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <Factory className="text-emerald-500 mb-4" size={32} />
                <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2 mt-0"><Link href="/training/offline" className="hover:text-emerald-500 transition-colors">Offline Training</Link></h3>
                <p className="text-sm dark:text-slate-400 text-slate-600">Get hands-on experience in substrate preparation, spawn inoculation, harvesting techniques, and daily farm operations.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              Step 4: Source High-Quality Mushroom Spawn
            </h2>
            <p><Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">Spawn</Link> is the "seed" of the mushroom. The quality of your Oyster, Milky, or Button mushroom spawn directly dictates your yield.</p>
            <ul className="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
              <li>Always buy first-generation, contamination-free spawn from certified commercial laboratories.</li>
              <li>Never compromise on spawn quality to save a few rupees—bad spawn equals zero yield.</li>
              <li>As your business scales, you can eventually explore setting up your own spawn production lab.</li>
            </ul>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              Step 5: Create Multiple Streams of Income
            </h2>
            <p>The most profitable mushroom businesses don't rely solely on selling fresh vegetables. They diversify their product offerings:</p>
            <ul className="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
              <li><strong>Fresh Mushroom Sales:</strong> Supplying daily to local restaurants, hotels, retail stores, and direct-to-consumer online platforms.</li>
              <li><strong>Dry Mushroom Sales:</strong> Sun-drying or dehydrating unsold inventory to sell as dried mushrooms or mushroom powder.</li>
              <li><strong>Value-Added Products:</strong> Pickles, papads, and nutritional supplements.</li>
              <li><strong>Spawn Sales:</strong> Producing and selling high-quality spawn to local farmers.</li>
            </ul>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4">
              Step 6: Build a Bulletproof Marketing System
            </h2>
            <p>Production alone does not guarantee profit. Your Mushroom Marketing Strategy is what actually brings in the cash.</p>
            <ul className="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
              <li><strong>Local Branding:</strong> Package your mushrooms neatly in punnets with your farm's logo and FSSAI details.</li>
              <li><strong>B2B Partnerships:</strong> Tie up with local caterers, organic food shops, and premium restaurants.</li>
              <li><strong>Social Media Presence:</strong> Use Instagram, Facebook, and WhatsApp groups to show your clean, organic growing process.</li>
            </ul>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-emerald-500 pl-4 text-rose-500">
              <AlertCircle className="inline-block mr-2 mb-1" size={28} /> Common Business Mistakes to Avoid
            </h2>
            <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 p-6 rounded-2xl mb-8">
              <ul className="list-disc pl-5 space-y-2 text-rose-900 dark:text-rose-200">
                <li>Expanding too quickly before mastering the first few crop cycles.</li>
                <li>Ignoring market research and growing a variety your local market doesn't eat.</li>
                <li>Buying poor-quality spawn from unverified sources.</li>
                <li>Skipping pasteurization (the biggest cause of green mold and crop failure).</li>
                <li>Focusing entirely on production while ignoring customer relationships and branding.</li>
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-[2rem] border dark:border-emerald-500/20 border-emerald-500/20 text-center mt-12 bg-emerald-500/5">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 mb-4">Ready to start your highly profitable journey?</h2>
              <p className="dark:text-slate-300 text-slate-700 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                For complete guidance on Business Plans, Online/Offline Training, Farm Setup, Spawn Purchasing, and Turnkey Projects, contact us immediately.
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
