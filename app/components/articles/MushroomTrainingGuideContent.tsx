'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Sprout, Building, Info, Heart, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { HomeModals } from '../modals/HomeModals';

export const MushroomTrainingGuideContent: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-emerald-400/10 dark:bg-emerald-600/10 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-teal-400/10 dark:bg-teal-600/10 rounded-full blur-[100px] md:blur-[140px]" />
        </div>

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
              Mushroom Farming Training Guide
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-6 prose prose-lg dark:prose-invert text-slate-700 dark:text-slate-300">
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-6 border border-emerald-500/20">
              <Sprout size={16} />
              Training & Certification
            </div>
            <h1 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-6 leading-tight tracking-tight">
              Mushroom Farming Training Guide | Learn Online in English
            </h1>
          </div>

          <div className="space-y-6 text-slate-600 dark:text-slate-400">
            <p className="text-xl dark:text-slate-300 text-slate-700 font-medium mb-6">
              A few years ago, mushrooms were mostly seen as an "exotic vegetable" that showed up on restaurant menus. That's changed fast. At the ICAR-Directorate of Mushroom Research (DMR) in Solan, Himachal Pradesh — India's only institute dedicated entirely to mushroom research — training seats fill up so quickly that farmers often have to book months in advance. One trainee from Maharashtra went from earning just ₹10,000 a month to running a mushroom business with a turnover of ₹75 crore.
            </p>
            <p>
              If you've been searching for "<Link href="/training" className="text-emerald-600 dark:text-emerald-400 hover:underline">mushroom cultivation training</Link>" or wondering how to start a mushroom farming business, this guide walks you through everything: where to get trained, which mushroom varieties are worth learning, how much training costs, government support available, and how the profit actually works.
            </p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-emerald-500 pl-4">
              Why Mushroom Farming Is Growing So Fast
            </h2>
            <p>Three things set mushroom cultivation apart from traditional farming, and they explain why so many people — from small farmers to city-based entrepreneurs — are getting into it.</p>
            <ul className="list-disc pl-5 space-y-3">
                <li><strong>Low space requirement:</strong> Unlike wheat or rice, mushroom farming doesn't need acres of land. A small room, shed, or even a spare corner of a house is enough to start.</li>
                <li><strong>Low weather dependency:</strong> Once you control temperature and humidity, mushrooms can be grown almost year-round, regardless of the season outside.</li>
                <li><strong>Rising demand:</strong> As more people shift toward protein-rich, low-fat, plant-based food, mushrooms have become one of the fastest-growing categories in both local markets and export.</li>
            </ul>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-blue-500 pl-4">
              What Does Mushroom Cultivation Training Actually Teach You?
            </h2>
            <p>A common misconception is that growing mushrooms is as simple as planting seeds and watering them. In reality, mushroom farming has several technical details that make or break a crop — and that's exactly what a good training program covers:</p>
            <ul className="list-disc pl-5 space-y-3">
                <li><strong>Spawn identification:</strong> recognizing genuine, high-quality <Link href="/spawn-seed" className="text-emerald-600 dark:text-emerald-400 hover:underline">mushroom spawn</Link> and choosing the right strain.</li>
                <li><strong>Substrate and compost preparation:</strong> using straw, wheat bran, or sawdust in the correct ratio.</li>
                <li><strong>Spawning and casing techniques.</strong></li>
                <li><strong>Climate management:</strong> managing temperature, humidity, and ventilation — mushroom crops are extremely sensitive to these three factors.</li>
                <li><strong>Pest and disease identification:</strong> and organic ways to control them.</li>
                <li><strong>Harvesting timing:</strong> and post-harvest handling.</li>
                <li><strong>Marketing and sales strategy:</strong> where to sell, who to sell to, and how to price your produce.</li>
            </ul>
            <p>According to scientists at ICAR-DMR Solan, spawn is essentially the living mycelium of mushrooms grown on a nutrient carrier like sterilized wheat or sorghum grain — and it forms the foundation of the entire crop.</p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-purple-500 pl-4">
              Popular Mushroom Varieties Covered in Training Programs
            </h2>
            <p>Most mushroom cultivation courses, whether in India or elsewhere, focus on a handful of commercially proven varieties:</p>
            <ol className="list-decimal pl-5 space-y-3">
                <li><strong>Button Mushroom:</strong> the most widely sold variety worldwide, best suited to cooler, climate-controlled rooms.</li>
                <li><strong>Oyster Mushroom:</strong> the easiest and most beginner-friendly variety, requiring lower upfront investment.</li>
                <li><strong>Milky Mushroom:</strong> well suited to warmer, humid regions.</li>
                <li><strong>Shiitake Mushroom:</strong> a premium variety that commands higher prices, often grown in hill regions.</li>
                <li><strong>Lion's Mane and Enoki:</strong> gourmet and medicinal mushrooms with a growing niche market.</li>
            </ol>
            <p>If you're just starting out, most trainers recommend beginning with oyster mushroom cultivation since it needs the least investment and is the fastest to learn.</p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-amber-500 pl-4">
              Where to Get Mushroom Farming Training
            </h2>
            
            <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">1. ICAR-Directorate of Mushroom Research (DMR), Solan</h3>
            <p>This is India's premier institute for mushroom research and training, drawing farmers from states like Uttar Pradesh, Bihar, and Odisha. DMR regularly publishes a training calendar on its official website listing offline training programs, and applications are open only to Indian citizens with valid ID proof. Because demand is high and seats are limited, early registration is important.</p>

            <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">2. Krishi Vigyan Kendras (KVKs)</h3>
            <p>Nearly every district in India has a KVK that periodically runs short, low-cost (or free) mushroom cultivation training programs — a good option if you want hands-on, locally taught instruction.</p>

            <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">3. State Agricultural Universities</h3>
            <p>Many state agricultural universities run certificate courses in mushroom production as part of their horticulture or plant pathology departments.</p>

            <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">4. Private Mushroom Farms and Training Institutes</h3>
            <p>A growing number of experienced mushroom farmers now run their own training centers, offering practical, farm-based learning along with spawn supply and buyback support — useful if you want mentorship beyond the classroom.</p>

            <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">5. International Mushroom Growing Courses</h3>
            <p>Outside India, several institutes and farms — from Spain to Kenya to Thailand — run short cultivation workshops covering spawn production, substrate handling, and both indoor and outdoor growing techniques, for anyone looking at mushroom farming as a global gourmet business.</p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-indigo-500 pl-4">
              How Long Does Training Take, and What Does It Cost?
            </h2>
            <p>Most basic mushroom cultivation courses run anywhere from a few days to about two to three weeks, while advanced or spawn-production-focused training can run longer. Fees vary widely depending on the institute, whether it's government-run or private, and whether food and accommodation are included. Since fees and schedules change often, it's best to check directly with the training center's official website or helpline before enrolling.</p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-rose-500 pl-4">
              Government Support for Mushroom Farming
            </h2>
            <p>Several government schemes support mushroom cultivation as part of horticulture development, including:</p>
            <ul className="list-disc pl-5 space-y-3">
                <li>National Horticulture Mission</li>
                <li>Rashtriya Krishi Vikas Yojana (RKVY)</li>
                <li>State-level horticulture department subsidies</li>
            </ul>
            <p>These schemes can offer <Link href="/subsidy" className="text-emerald-600 dark:text-emerald-400 hover:underline">subsidies</Link> on unit costs for things like spawn labs, compost units, and cold storage. Since subsidy percentages and eligibility criteria differ by state and change from year to year, it's worth contacting your district horticulture or agriculture department for the latest, accurate details before applying.</p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-emerald-500 pl-4">
              How Profitable Is Mushroom Farming?
            </h2>
            <p>The economics of mushroom farming look different from traditional crops. Even small-scale growers producing around 100–200 kg per batch can often recover their initial investment within three to four months. As farmers gain experience, many increase their margins by:</p>
            <ul className="list-disc pl-5 space-y-3">
                <li>Processing mushrooms into dried mushroom or mushroom powder for higher-value sales.</li>
                <li>Producing and selling their own spawn to other growers.</li>
                <li>Partnering directly with hotels, restaurants, and supermarkets.</li>
                <li>Selling through a mix of local mandis and online platforms.</li>
            </ul>
            <p>The real profit in mushroom farming usually isn't just in growing the crop — it's in marketing and value addition, which is exactly what a solid training program teaches alongside the cultivation basics.</p>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-yellow-500 pl-4">
              <CheckCircle2 className="text-yellow-500 shrink-0" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4 not-prose">
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2">Can I start mushroom farming without any training?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Technically yes, but without proper knowledge, the risk of crop failure and financial loss is significantly higher. <Link href="/training" className="text-emerald-600 dark:text-emerald-400 hover:underline">Training</Link> helps you avoid the common beginner mistakes that cause most first attempts to fail.</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2">How much space do I need for mushroom cultivation?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">A small setup — even a 10x10 foot room or shed — is enough to start on a small scale.</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2">Can mushrooms be grown at home?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Yes. Oyster mushrooms, in particular, can be grown easily in a spare room, balcony, or small shed with minimal equipment.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-4">Final Thoughts</h2>
            <p>Mushroom farming isn't just a side income opportunity — it's a genuinely scalable, low-space, low-capital business model. With the right training, some patience, and a clear marketing plan, it can become a long-term, sustainable source of income. Before you begin, reach out to your nearest KVK or a recognized institute like ICAR-DMR Solan to start with accurate, hands-on guidance rather than guesswork.</p>

            <p className="text-sm italic mt-8 border-t dark:border-slate-700 border-slate-200 pt-6">Note: Training fees, subsidy rates, and application procedures change from time to time. Always check the official website of the relevant government institute before making a final decision.</p>
          </div>

          <div className="pt-8 mt-12 mb-8 border-t dark:border-slate-800 border-slate-200 not-prose">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-medium"
            >
              <ArrowRight className="rotate-180" size={20} />
              Back to Blog
            </Link>
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
