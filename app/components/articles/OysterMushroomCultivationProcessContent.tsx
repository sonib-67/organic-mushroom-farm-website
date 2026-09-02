'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, MapPin, CheckCircle2, TrendingUp, Phone, Sprout, ShoppingCart } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { HomeModals } from '../modals/HomeModals';

export const OysterMushroomCultivationProcessContent: React.FC = () => {
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
              Oyster Mushroom Cultivation Process
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-6">
          <div className="mb-8 md:mb-12 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-widest mb-6">
              Complete Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-6 leading-tight tracking-tight">
              Oyster Mushroom Cultivation <br className="hidden md:block" />
              <span className="gradient-text font-black">Complete Guide for India</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg md:text-xl leading-relaxed mb-6">
              Mushroom Farming Training | Mushroom Spawn/Seed Supply | Bulk & Retail Mushroom | Pan India Delivery
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-widest mb-10">
              By Organic Mushrooms Farm, Jabalpur | Call: 919203544140
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-12">
            
            <section>
              <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-3">
                <TrendingUp className="text-emerald-500" /> India Ka Sabse Profitable Mushroom Business
              </h2>
              <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed mb-4">
                Oyster Mushroom Cultivation (Dhingri Mushroom ki Kheti) aaj India ka sabse fast-growing agribusiness ban chuka hai. Chahe aap Madhya Pradesh ke Jabalpur mein ho, Maharashtra ke Pune mein, Uttar Pradesh ke Lucknow mein, ya Kerala ke Kochi mein – har jagah oyster mushroom ki demand tez ho rahi hai. Yeh article especially un logo ke liye likha gaya hai jo mushroom farming training lena chahte hain, mushroom spawn/seed kharidna chahte hain, ya fresh aur dry mushroom bulk ya retail mein supply karwana chahte hain.
              </p>
              <p className="text-sm dark:text-slate-400 text-slate-500 italic border-l-4 border-slate-300 dark:border-slate-700 pl-4">
                Agar aap Google par search karte hain: oyster mushroom cultivation in India, mushroom spawn near me, mushroom farming training Jabalpur, mushroom seed price India, mushroom bulk supplier – toh yeh guide bilkul aapke liye hai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-3">
                <Sprout className="text-emerald-500" /> Oyster Mushroom Kya Hota Hai? – Introduction & Market Demand
              </h2>
              <p className="mb-4">
                Oyster mushroom (scientific name: <em>Pleurotus ostreatus</em>) ek edible fungus hai jise <strong>Dhingri Mushroom</strong> bhi kaha jata hai. Yeh India ke har region mein ugaya ja sakta hai – North India, South India, East India, West India, aur Central India – sabhi jagah yeh successfully grow hota hai.
              </p>
              <p>
                Indian mushroom market 2025 mein 2000 crore rupees se zyada ho gayi hai aur 2030 tak yeh billion-dollar industry ban sakti hai. Oyster mushroom ki demand restaurants, hotels, supermarkets, export markets (Gulf, Europe, USA) sab jagah barhti ja rahi hai.
              </p>
            </section>

            <section className="bg-slate-100 dark:bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 mt-0 border-none">Oyster Mushroom Cultivation Kyu Karein? – Top Reasons</h2>
              <p className="dark:text-slate-300 text-slate-700 mb-2 font-semibold">India ke Har State Mein Kyu Popular Hai Dhingri Mushroom Farming</p>
              <p className="text-sm dark:text-slate-400 text-slate-500 mb-6">Oyster mushroom cultivation India ke har state mein safely kiya ja raha hai.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Kam jagah chahiye – 6x8 ft ka room bhi kafi hai",
                  "Low investment – Rs. 5,000 se shuru ho sakta hai",
                  "Fast return – 25-30 din mein pehli harvest",
                  "High profit – 150% se zyada margin possible hai",
                  "Koi pesticide/fertilizer nahi chahiye – 100% organic",
                  "Government subsidy milti hai – NHB, MIDH",
                  "Women, students, senior citizens sab kar sakte hain",
                  "Fresh + Dry mushroom dono form mein sell kar sakte ho"
                ].map((reason, i) => (
                  <div key={i} className="flex gap-3 text-sm md:text-base dark:text-slate-300 text-slate-700 items-start">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4 mb-6">Oyster Mushroom Profit Table – Cost vs Income Analysis</h2>
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[600px] text-sm md:text-base">
                  <thead className="bg-emerald-500/10 border-b border-emerald-500/20">
                    <tr>
                      <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Scale</th>
                      <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Investment (Rs.)</th>
                      <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Monthly Profit (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-slate-700/50 border-slate-200">
                      <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Small (Home – 50 bags)</td>
                      <td className="py-4 px-6 dark:text-slate-400 text-slate-600">3,000 – 5,000</td>
                      <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">4,000 – 8,000</td>
                    </tr>
                    <tr className="border-b dark:border-slate-700/50 border-slate-200">
                      <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Medium (100-200 bags)</td>
                      <td className="py-4 px-6 dark:text-slate-400 text-slate-600">8,000 – 15,000</td>
                      <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">12,000 – 25,000</td>
                    </tr>
                    <tr className="border-b dark:border-slate-700/50 border-slate-200">
                      <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Commercial (500+ bags)</td>
                      <td className="py-4 px-6 dark:text-slate-400 text-slate-600">30,000 – 60,000</td>
                      <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">40,000 – 80,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Large Farm (1000+ bags)</td>
                      <td className="py-4 px-6 dark:text-slate-400 text-slate-600">1,00,000+</td>
                      <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">1,20,000 – 2,00,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4 mb-6">Oyster Mushroom Ke Liye Kya Chahiye? – Materials & Setup</h2>
              
              <div className="space-y-8">
                <div className="pl-4 border-l-2 border-emerald-400 dark:border-emerald-500/50">
                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2 mt-0">Mushroom Spawn (Seed) – Sabse Zaroori Cheez</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm mb-3">Mushroom spawn ko mushroom ka seed kaha jata hai. Yeh mushroom cultivation ka base hai. Acha spawn = achhi yield. Kharab spawn = waste of time and money. Organic Mushrooms Farm, Jabalpur se aap high-quality oyster mushroom spawn/seed Pan India delivery ke saath khareed sakte hain.</p>
                  <ul className="list-disc pl-5 text-sm md:text-base dark:text-slate-300 text-slate-700 space-y-1">
                    <li><strong>Spawn Type:</strong> Grain-based (wheat straw), sawdust, liquid spawn</li>
                    <li><strong>Purity:</strong> Contamination-free, lab-tested mycelium</li>
                    <li><strong>Varieties:</strong> White Oyster, Pink Oyster, Grey Oyster, Yellow Oyster</li>
                    <li><strong>Shelf life:</strong> 15-30 din refrigeration mein</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-emerald-400 dark:border-emerald-500/50">
                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2 mt-0">Substrate (Growing Medium)</h3>
                  <ul className="list-disc pl-5 text-sm md:text-base dark:text-slate-300 text-slate-700 space-y-1">
                    <li><strong>Paddy straw (dhan ki padi):</strong> sabse common, UP, Bihar, Punjab mein easily available</li>
                    <li><strong>Wheat straw:</strong> Madhya Pradesh, Rajasthan, Haryana mein popular</li>
                    <li><strong>Sugarcane bagasse:</strong> Maharashtra, Gujarat, Karnataka mein use hota hai</li>
                    <li><strong>Sawdust:</strong> timber-rich states mein (Assam, Odisha, Chhattisgarh)</li>
                    <li><strong>Cotton waste:</strong> Gujarat, Maharashtra mein available</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-emerald-400 dark:border-emerald-500/50">
                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2 mt-0">Equipment & Setup</h3>
                  <ul className="list-disc pl-5 text-sm md:text-base dark:text-slate-300 text-slate-700 space-y-1">
                    <li>Polypropylene (PP) bags – mushroom grow bags</li>
                    <li>Pressure cooker ya drum sterilizer</li>
                    <li>Humidity controller / water sprayer</li>
                    <li>Thermometer & hygrometer</li>
                    <li>Ventilated room ya poly house</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-slate-100 dark:bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-8 mt-0 border-none">Oyster Mushroom Cultivation – Step by Step Process</h2>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                {[
                  { title: "Step 1 – Substrate Preparation", desc: "Sabse pehle paddy straw ya wheat straw ko 2-3 inch ke tukdo mein kaat lo. Phir ise 12-16 ghante paani mein soak karo. Baad mein hot water treatment (75-80°C par 1-2 ghante) ya chemical treatment (2% lime + calcium carbonate solution 8-12 ghante) karke sterilize karo." },
                  { title: "Step 2 – Spawning (Beej Bharna)", desc: "Jab substrate thanda ho jaye (room temperature 25-28°C), tab mushroom spawn mix karo. Spawn rate: 2-3% of wet substrate weight. Clean environment mein kaam karo – gloves, mask use karo. Polypropylene bags mein layer-by-layer substrate aur spawn bharo." },
                  { title: "Step 3 – Incubation", desc: "Bags ko dark, clean room mein rakh do. Temperature: 25-28°C. Humidity: 70-80%. Time: 15-20 din. Is phase mein white mycelium puri bag mein phail jayega. Koi pani nahi chahiye is phase mein." },
                  { title: "Step 4 – Fruiting", desc: "Jab bag puri tarah white ho jaye, bags ko fruiting room mein shift karo ya holes zyada karo. Fresh air circulation dena shuru karo. Humidity: 80-90%. Temperature: 20-28°C. Pani spray karo 2-3 baar daily. 5-7 din mein pinning shuru hogi." },
                  { title: "Step 5 – Harvesting (Katai)", desc: "Jab mushroom caps puri tarah khul jayein lekin still tight hon – harvest ka time hai. Twist karke ya scissors se cut karo. Ek bag se 3 flushes milti hain – 7-14 din ke antar par. Total yield per kg dry substrate: 700-1200 gram mushroom." }
                ].map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-100 dark:border-slate-900 bg-emerald-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm md:text-base shadow-sm">
                      <h4 className="font-bold dark:text-white text-slate-900 mb-2">{step.title}</h4>
                      <p className="dark:text-slate-400 text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-3 mb-6">
                <MapPin className="text-emerald-500" /> Oyster Mushroom Cultivation India Ke Har City Mein
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                  <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 mt-0">Central India – MP & CG</h3>
                  <p className="text-sm dark:text-slate-300 text-slate-700">Jabalpur, Bhopal, Indore, Raipur, Bilaspur. Oct to Mar ideal. Spawn supply from Organic Mushrooms Farm Jabalpur poore region mein available hai.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                  <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 mt-0">North India – UP, Bihar, Del, Raj</h3>
                  <p className="text-sm dark:text-slate-300 text-slate-700">Lucknow, Patna, Jaipur, Delhi NCR, Chandigarh. Courier delivery in 3-5 days. Great demand all season around safe setups.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                  <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 mt-0">South & West India</h3>
                  <p className="text-sm dark:text-slate-300 text-slate-700">Bangalore, Chennai, Hyderabad, Mumbai, Pune, Ahmedabad. Ideal humidity, urban consumers driving huge demand.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                  <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 mt-0">East India & Export</h3>
                  <p className="text-sm dark:text-slate-300 text-slate-700">Kolkata, Bhubaneswar, Guwahati. Traditional consumption is high here. Export to Dubai, UK, USA also rising fast.</p>
                </div>
              </div>
            </section>

            <section className="p-8 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/20 text-center md:text-left">
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 flex items-center justify-center md:justify-start gap-3 mt-0 border-none">
                <BookOpen className="text-emerald-500" /> Mushroom Farming Training
              </h2>
              <p className="dark:text-slate-300 text-slate-700 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                Organic Mushrooms Farm Jabalpur mein practical training programs available hain. Yeh training specifically design ki gayi hai India ke farmers, housewives, students, unemployed youth aur entrepreneurs ke liye.
              </p>
              <ul className="list-disc text-left pl-5 text-sm md:text-base dark:text-slate-300 text-slate-700 space-y-2 font-medium mb-8 max-w-2xl mx-auto md:mx-0">
                <li><strong>Training Mode:</strong> Online + Offline (Jabalpur center ya aapke city mein on-site)</li>
                <li><strong>Duration:</strong> 1 din basic training / 3-5 din complete commercial training</li>
                <li><strong>Topics:</strong> Spawn making, substrate prep, contamination control, marketing</li>
                <li><strong>Certificate:</strong> Training completion certificate provided</li>
              </ul>
              <div className="flex justify-center md:justify-start">
                <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg w-full sm:w-auto">
                  <Phone size={18} /> Book Training: 9203544140
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-6 border-l-4 border-emerald-500 pl-4">Mushroom Spawn/Seed Supply & Bulk Mushroom</h2>
              <p className="text-sm md:text-base dark:text-slate-400 text-slate-600 mb-4">High-Quality Oyster Mushroom Spawn – Pan India Delivery. Pure culture, high-yield varieties available.</p>
              
              <div className="overflow-x-auto w-full mb-8">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="py-3 px-4 font-bold dark:text-white text-slate-900">Spawn Type</th>
                      <th className="py-3 px-4 font-bold dark:text-white text-slate-900">Pack Size</th>
                      <th className="py-3 px-4 font-bold dark:text-white text-slate-900">Variety</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-slate-700/50 border-slate-200">
                      <td className="py-3 px-4 dark:text-slate-300 text-slate-700">Grain Spawn</td>
                      <td className="py-3 px-4 dark:text-slate-300 text-slate-700">500g / 1kg / 5kg</td>
                      <td className="py-3 px-4 dark:text-slate-300 text-slate-700">White, Pink, Grey Oyster</td>
                    </tr>
                    <tr className="border-b dark:border-slate-700/50 border-slate-200">
                      <td className="py-3 px-4 dark:text-slate-300 text-slate-700">Sawdust Spawn</td>
                      <td className="py-3 px-4 dark:text-slate-300 text-slate-700">1kg / 5kg</td>
                      <td className="py-3 px-4 dark:text-slate-300 text-slate-700">White, Yellow Oyster</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-200 dark:border-slate-700/50">
                <div>
                  <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2 mt-0">Bulk Fresh & Dry Mushroom Order</h3>
                  <p className="text-sm dark:text-slate-400 text-slate-600 max-w-xl">Restaurants, Hotels, Retailers, Exporters ke liye Bulk Fresh Oyster (₹50-80/kg bulk) aur Dry Oyster (₹400-700/kg) available hai.</p>
                </div>
                <Link href="/" className="px-6 py-3 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors whitespace-nowrap shrink-0">
                  <ShoppingCart size={18} /> Visit Shop
                </Link>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-6 border-l-4 border-emerald-500 pl-4">FAQ – Mushroom Farming ke Baare Mein Aksar Pooche Jaane Wale Sawaal</h2>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 mt-0">Q1. Oyster mushroom farming mein kitna kharcha aata hai?</h4>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">Small scale: Rs. 3,000-5,000. Commercial: Rs. 50,000-1,00,000+. Organic Mushrooms Farm se kit, training aur guidance sab milti hai.</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 mt-0">Q2. Mushroom spawn kahan se kharidein?</h4>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">Organic Mushrooms Farm Jabalpur se Pan India delivery available hai. WhatsApp: 919203544140</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 mt-0">Q3. Kya oyster mushroom ghar par uga sakte hain?</h4>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">Bilkul! 6x8 ft ka clean room chahiye. Kitchen, terrace, garage kahi bhi shuru kar sakte ho.</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 mt-0">Q4. Jabalpur mein mushroom ki price kya hai?</h4>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">Retail: Rs. 100-150/kg. Bulk: Rs. 50-80/kg. Dry: Rs. 500-700/kg. Export quality dry: Rs. 800-1200/kg.</p>
                </div>
              </div>
            </section>

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
