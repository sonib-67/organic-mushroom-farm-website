'use client';

import React from 'react';
import Link from 'next/link';
import { Leaf, Sprout, Building, Info, Heart, ArrowRight } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { HomeModals } from '../modals/HomeModals';

export const OrganicMushroomFarmGuideContent: React.FC = () => {
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
              Organic Mushroom Farm Guide
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-6 prose prose-lg dark:prose-invert text-slate-700 dark:text-slate-300">
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-6 border border-emerald-500/20">
              <Leaf size={16} />
              Complete Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-6 leading-tight tracking-tight">
              Organic Mushroom Farm: Everything You Need to Know
            </h1>
          </div>

          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium mb-6">
            Are you looking to dive into the world of sustainable agriculture, or simply trying to find the freshest produce from an organic mushroom farm? Whether you are an aspiring agri-entrepreneur or a health-conscious consumer, mushroom cultivation has rapidly become one of the most profitable and eco-friendly farming practices in India.
          </p>

          <p className="mb-10">
            From understanding the intricate types of mushroom cultivation in India to navigating complex <Link href="/training/online" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">mushroom government schemes</Link>, this comprehensive guide covers everything you need to know about the fascinating world of fungi.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-rose-500 pl-4">
            <Heart className="text-rose-500 shrink-0" />
            Why Choose Organic Mushrooms? The Superfood Revolution
          </h2>
          <p>
            Before we get into the soil and spawn, it's essential to understand why mushrooms are taking the culinary and health worlds by storm.
          </p>

          <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">Mushroom vs Meat Protein</h3>
          <p>
            A common debate among fitness enthusiasts and vegans is mushroom vs meat protein. While meat is traditionally high in protein, organic mushrooms offer a clean, cholesterol-free alternative. They contain all essential amino acids, making them a highly bioavailable protein source. Plus, they are packed with fiber and antioxidants that meat completely lacks.
          </p>

          <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">A Natural Source of Sunshine</h3>
          <p>
            Did you know that mushrooms are one of the very few non-animal sources of Vitamin D? If you've ever researched button mushrooms vitamin d content, you'll be thrilled to know that exposing these little wonders to sunlight naturally boosts their Vitamin D2 levels, making them essential for bone health and immunity.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-emerald-500 pl-4">
            <Sprout className="text-emerald-500 shrink-0" />
            Types of Mushroom Cultivation in India
          </h2>
          <p>
            The Indian climate allows for a diverse range of crops. While Oyster and Milky mushrooms are fantastic for tropical regions, let's explore some of the most sought-after varieties:
          </p>

          <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">White Button Mushroom Cultivation</h3>
          <p>
            Accounting for the majority of the market, white button mushroom cultivation is highly profitable. But exactly where do button mushrooms grow? They thrive in controlled, cool environments (ideally 15°C to 18°C) with high humidity. For those wondering how to grow button mushrooms, the process involves preparing a specialized nutrient-rich compost, spawning, and casing.
          </p>

          <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">Exotic and High-Value Varieties</h3>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>Lion's Mane Mushroom Cultivation in India:</strong> Known for its neuroprotective properties, Lion's Mane is gaining massive traction among biohackers and health food stores.
            </li>
            <li>
              <strong>Morel Mushroom Farming in India:</strong> Locally known as Gucchi, these are incredibly rare and expensive. Many enthusiasts search for how to grow gucchi mushroom at home, but it requires highly specific, cool climate conditions, usually found in the Himalayan regions.
            </li>
          </ul>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-blue-500 pl-4">
            <Building className="text-blue-500 shrink-0" />
            Setting Up Your Farm: From Seeds to Harvest
          </h2>
          <p>
            If you are ready to transition from searching for "mushroom farms near me" to actually building one, the first step is sourcing quality spawn. Finding reliable <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">button mushroom seeds near me</Link> (or spawn) is crucial for a healthy crop.
          </p>
          <p>
            Whether you are looking into large-scale organic mushroom farming or a small backyard setup, temperature control, proper ventilation, and maintaining strict hygiene to prevent contamination are your golden rules.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-emerald-500 pl-4">
            Unlocking Financial Support: Mushroom Farming Loan and Subsidy
          </h2>
          <p>
            One of the biggest hurdles for new farmers is capital. Fortunately, there is massive backing for agriculture right now. If you are looking to scale, understanding the <Link href="/training" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">subsidy for mushroom farming</Link> is your most powerful tool.
          </p>

          <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">Government Schemes and Financial Aid</h3>
          <p>
            Various state and central initiatives are designed to promote horticulture. Here are the key avenues to explore:
          </p>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>NHB Subsidy for Mushroom Farming:</strong> The National Horticulture Board offers substantial financial assistance for commercial horticulture projects, covering a significant percentage of the project cost.
            </li>
            <li>
              <strong>State-Specific Support:</strong> Subsidies vary by location. For instance, the mushroom farming subsidy in Madhya Pradesh and the mushroom farming subsidy in Odisha offer tailored financial aid to local farmers to build climate-controlled sheds and purchase equipment.
            </li>
            <li>
              <strong>Horticulture Mushroom Subsidy:</strong> Many district agriculture offices provide specific grants for marginalized farmers or women entrepreneurs under overarching horticulture missions.
            </li>
            <li>
              <strong>Mushroom Plant Subsidy:</strong> If you are setting up a spawn lab or processing unit, additional grants are often available to offset machinery costs.
            </li>
          </ul>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-2xl my-8">
            <p className="text-sm md:text-base text-emerald-800 dark:text-emerald-200 m-0">
              <strong>Pro Tip for MP Residents:</strong> If you are exploring <Link href="/cities/madhya-pradesh/jabalpur" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">mushroom farming in Indore or Jabalpur</Link>, connect with your local Krishi Vigyan Kendra (KVK) to get the most up-to-date regional scheme forms.
            </p>
          </div>

          <h3 className="text-xl font-semibold dark:text-white text-slate-900 mt-8 mb-4">Education and Skill Development</h3>
          <p>
            No amount of capital can replace proper knowledge. Before investing heavily, it is highly recommended to undergo formal training. Searching for <Link href="/training/offline" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">mushroom farming training by government bangalore, Pune</Link>, or your nearest agricultural university will connect you with expert scientists who teach the latest pasteurization and harvesting techniques.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-yellow-500 pl-4">
            <Info className="text-yellow-500 shrink-0" />
            Frequently Asked Questions (FAQs)
          </h2>
          
          <div className="space-y-4 not-prose">
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2">1. Is an organic mushroom farm profitable?</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Yes, extremely. With low land requirements and high market demand for organic produce, the return on investment (ROI) is generally seen within the first few crop cycles.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2">2. Where can I find button mushroom seeds near me?</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">You can purchase high-quality spawn directly from certified agricultural universities, local KVKs, or established commercial organic mushroom farms in your region.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2">3. How do I apply for a mushroom government scheme?</h3>
              <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Visit the official National Horticulture Board (NHB) website or your state's Department of Agriculture portal. You will need a detailed project report (DPR) to apply for a mushroom farming loan and subsidy.</p>
            </div>
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
