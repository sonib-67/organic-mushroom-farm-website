import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle2, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "7 Mushroom Farming Mistakes That Cause Crop Failure in India",
  description:
    "Why Do Many New Mushroom Farmers Fail Within the First Few Months? Learn the most common mistakes and how to avoid them.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/blog/7-mushroom-farming-mistakes-india",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "7 Mushroom Farming Mistakes That Cause Crop Failure in India",
    description:
      "Why Do Many New Mushroom Farmers Fail Within the First Few Months? Learn the most common mistakes and how to avoid them.",
    type: "article",
    url: "https://organicmushroomsfarm.com/blog/7-mushroom-farming-mistakes-india",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "7 Mushroom Farming Mistakes That Cause Crop Failure in India",
    description:
      "Why Do Many New Mushroom Farmers Fail Within the First Few Months? Learn the most common mistakes and how to avoid them.",
  },
};

export default function ArticleMushroomFarmingMistakesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://organicmushroomsfarm.com/blog/7-mushroom-farming-mistakes-india#article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://organicmushroomsfarm.com/blog/7-mushroom-farming-mistakes-india",
    },
    "headline": "7 Mushroom Farming Mistakes That Cause Crop Failure in India (And How to Avoid Them)",
    "description": "Why Do Many New Mushroom Farmers Fail Within the First Few Months? Learn the most common mistakes and how to avoid them.",
    "inLanguage": "en-IN",
    "datePublished": "2026-03-01T08:00:00+05:30",
    "dateModified": "2026-09-13T10:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Organic Mushroom Farm",
      "url": "https://organicmushroomsfarm.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Organic Mushroom Farm",
      "url": "https://organicmushroomsfarm.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://organicmushroomsfarm.com/logo.png",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://organicmushroomsfarm.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://organicmushroomsfarm.com/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "7 Mushroom Farming Mistakes That Cause Crop Failure in India",
        "item": "https://organicmushroomsfarm.com/blog/7-mushroom-farming-mistakes-india",
      },
    ],
  };

  return (
    <article className="min-h-screen pt-4 md:pt-8 pb-16 relative overflow-hidden text-slate-800 dark:text-slate-200">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Ambient Gradient Background - Exact match from React version without dark/black box artifacts */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-red-400/15 dark:bg-red-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
        <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-orange-400/15 dark:bg-orange-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 dark:text-slate-200 truncate">7 Mushroom Farming Mistakes</span>
        </nav>

        {/* Content Container - Compact & Polished */}
        <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm space-y-6">
          
          {/* Header Title */}
          <header className="text-center pb-4 border-b border-slate-200 dark:border-white/10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 mb-3">
              <AlertTriangle className="w-3.5 h-3.5" /> Practical Grower Advisory
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              7 Mushroom Farming Mistakes That Cause Crop Failure in India (And How to Avoid Them)
            </h1>
          </header>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Why Do Many New Mushroom Farmers Fail Within the First Few Months?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-3">
              Every year thousands of people start <Link href="/" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">mushroom farming</Link> after watching videos, reading blogs or hearing success stories. However, many beginners fail not because mushroom farming is difficult, but because they repeat a few common mistakes.
            </p>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Whether you are planning <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Mushroom Farm Setup</Link> in Bihar, Odisha, Maharashtra, Uttarakhand, Haryana, Chhattisgarh, Rajasthan, Himachal Pradesh, Punjab, Uttar Pradesh, Gujarat, Madhya Pradesh, or in metro markets like Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Indore, Lucknow, Patna, Kolkata, Chennai or any village in India, understanding these mistakes can save time, money and effort.
            </p>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              This guide explains the most common reasons behind mushroom crop failure and how successful growers avoid them.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Mistake #1 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mistake #1: Starting Without Proper Mushroom Training
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Many beginners purchase mushroom spawn and start cultivation without understanding:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li>Temperature Management</li>
              <li>Humidity Control</li>
              <li>Spawn Running</li>
              <li>Harvesting</li>
              <li>Disease Prevention</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              As a result, contamination and poor yields become common.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">Solution</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Before investing in production, learn through:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li><Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Online Mushroom Training</Link></li>
              <li><Link href="/workshop" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Offline Mushroom Training</Link></li>
              <li>Practical Demonstrations</li>
              <li><Link href="/services/consultancy" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Expert Guidance</Link></li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-3 font-medium italic">
              Knowledge often prevents expensive mistakes.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Mistake #2 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mistake #2: Buying Low Quality Mushroom Spawn
            </h2>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              <Link href="/services/spawn-supply" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Spawn</Link> is the foundation of mushroom production.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Low-quality spawn can lead to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li>Slow Growth</li>
              <li>Contamination</li>
              <li>Poor Production</li>
              <li>Crop Failure</li>
            </ul>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">Solution</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Always use reliable and healthy:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li><Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Oyster Mushroom Spawn</Link></li>
              <li><Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Button Mushroom Spawn</Link></li>
              <li><Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Milky Mushroom Spawn</Link></li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-3 font-medium italic">
              Quality spawn directly affects productivity.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Mistake #3 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mistake #3: Poor Farm Hygiene
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Many growers underestimate cleanliness.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Common issues include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li>Dirty Growing Rooms</li>
              <li>Unclean Water</li>
              <li>Improper Handling</li>
              <li>Contaminated Equipment</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              These conditions increase infection risks.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">Solution</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
              Maintain strict hygiene standards throughout production.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Mistake #4 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mistake #4: Ignoring Temperature and Humidity
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Different mushroom varieties require different environmental conditions.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Examples include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li><Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Oyster Mushroom</Link></li>
              <li><Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Milky Mushroom</Link></li>
              <li><Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Button Mushroom</Link></li>
              <li>Shiitake Mushroom</li>
              <li>Lion's Mane Mushroom</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              Improper environmental control can reduce production quality.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">Solution</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
              Monitor temperature and humidity regularly.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Mistake #5 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mistake #5: Focusing Only on Production
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Many growers produce mushrooms successfully but struggle to sell them.
            </p>
            <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2">Common Marketing Problems</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li>No Customer Network</li>
              <li>Weak Branding</li>
              <li>Poor Packaging</li>
              <li>Lack of Market Research</li>
            </ul>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">Solution</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
              Build marketing channels before production begins.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Mistake #6 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mistake #6: No Business Plan
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Some growers invest money without calculating:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li>Setup Cost</li>
              <li>Operating Expenses</li>
              <li>Market Demand</li>
              <li>Profit Potential</li>
            </ul>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">Solution</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
              Prepare a proper <Link href="/blog/mushroom-farming-business-plan-india" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Mushroom Business Plan</Link> and ROI estimate before investing.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Mistake #7 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mistake #7: Expanding Too Quickly
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              After initial success, some growers expand production aggressively without strengthening operations.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              This often creates:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li>Quality Problems</li>
              <li>Inventory Issues</li>
              <li>Marketing Challenges</li>
              <li>Financial Pressure</li>
            </ul>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">Solution</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
              Scale gradually while maintaining production quality.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Which Mushroom Types */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Which Mushroom Types Should Beginners Start With?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              For most new growers:
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-slate-50 dark:bg-white/5 p-3.5 rounded-xl border border-slate-200/60 dark:border-white/5">
                <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">Oyster Mushroom Farming</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">Usually considered beginner-friendly.</p>
              </div>
              <div className="bg-slate-50 dark:bg-white/5 p-3.5 rounded-xl border border-slate-200/60 dark:border-white/5">
                <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">Milky Mushroom Farming</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">Suitable for many warmer regions.</p>
              </div>
              <div className="bg-slate-50 dark:bg-white/5 p-3.5 rounded-xl border border-slate-200/60 dark:border-white/5">
                <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">Button Mushroom Farming</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">Popular in commercial markets.</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              After gaining experience, growers may explore:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li>Shiitake Mushroom</li>
              <li>Lion's Mane Mushroom</li>
              <li>Reishi Mushroom</li>
              <li>Turkey Tail Mushroom</li>
              <li>Cordyceps Mushroom</li>
            </ul>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Farm Setup Checklist */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mushroom Farm Setup Checklist
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Before starting:
            </p>
            <ul className="list-none space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li className="flex gap-2.5 items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> <span>Growing Room Ready</span></li>
              <li className="flex gap-2.5 items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> <span>Ventilation System Installed</span></li>
              <li className="flex gap-2.5 items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> <span>Humidity Management Planned</span></li>
              <li className="flex gap-2.5 items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> <span>Quality Spawn Available</span></li>
              <li className="flex gap-2.5 items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> <span>Training Completed</span></li>
              <li className="flex gap-2.5 items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> <span>Market Research Done</span></li>
              <li className="flex gap-2.5 items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> <span>Business Plan Prepared</span></li>
            </ul>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Fresh Mushroom Sale Opportunities */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Fresh Mushroom Sale Opportunities
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Fresh mushrooms can be sold through:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
              <li>Hotels</li>
              <li>Restaurants</li>
              <li>Supermarkets</li>
              <li>Organic Stores</li>
              <li>Vegetable Markets</li>
              <li>Direct Consumers</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Building local relationships often improves sales.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Dry Mushroom Sale Opportunities */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Dry Mushroom Sale Opportunities
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Many successful growers also sell:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
              <li>Dry Mushrooms</li>
              <li>Mushroom Powder</li>
              <li>Mushroom Soup Mixes</li>
              <li>Value-Added Products</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              These products offer better storage and transportation flexibility.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Mushroom Consultancy */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mushroom Consultancy Can Save Time and Money
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Professional <Link href="/services/consultancy" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Mushroom Consultancy</Link> can help with:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
              <li>Farm Planning</li>
              <li>Production Systems</li>
              <li>Market Development</li>
              <li>Expansion Strategy</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Expert guidance often helps growers avoid common mistakes.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Turnkey Projects */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Turnkey Mushroom Projects
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Commercial growers may require:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
              <li>Infrastructure Design</li>
              <li>Production Layout</li>
              <li>Equipment Recommendations</li>
              <li>Operational Support</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Turnkey projects</Link> help simplify implementation.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Subsidy Opportunities */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Government Subsidy Opportunities
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Depending on available schemes and eligibility requirements, some farmers and entrepreneurs may benefit from government-supported agriculture and self-employment programs such as NABARD, PMFME, state Agriculture Department schemes, and Women Entrepreneurship / FPO support.
            </p>
          </section>

          <hr className="border-t border-slate-200 dark:border-white/10 my-6" />

          {/* Marketing Support */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3">
              Mushroom Marketing Support
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              Long-term success often depends on:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3">
              <li>Branding</li>
              <li>Packaging</li>
              <li>Customer Acquisition</li>
              <li>Retail Partnerships</li>
              <li>Online Marketing</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Marketing should be treated as seriously as production.
            </p>
          </section>

          <hr className="border-t-2 border-slate-200 dark:border-white/10 my-8" />

          {/* Hotspots Across India */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 text-center">
              Mushroom Farming Hotspots Across India — Highest Production States
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Mushroom cultivation is no longer limited to a handful of pockets. Production data and market demand both show that opportunity now spans most of the country. Below is a state-wise look at where India's mushroom production is concentrated and where customer demand is strongest, so growers can plan farm setup, spawn supply and training based on their own region.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Bihar</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">India's leading mushroom-producing state, with major activity around Gaya, Bhojpur, Jamui and Katihar. Warm, humid conditions and strong government support make Bihar a natural hub for oyster and button mushroom cultivation.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Odisha</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">The second-largest producing state, known especially for oyster and straw mushrooms. Puri, Ganjam, Khorda and Dhenkanal are key growing belts with steady local market demand.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Maharashtra</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">A major producer and consumption market. Nashik, Ahmednagar, Thane, Pune and Mumbai combine strong farm activity with some of India's biggest urban buyers — hotels, restaurants and supermarkets.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Uttarakhand</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Garhwal and Dehradun regions benefit from cooler climates that suit button and shiitake mushroom farming, with growing interest in agro-tourism linked training.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Haryana</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Sonipat, Ambala and Hisar form one of North India's most established mushroom belts, supported by strong government subsidies for both general and SC category farmers.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Chhattisgarh</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Raipur, Dhamtari and Mahasamund are emerging production centres, with rising demand from nearby Madhya Pradesh and Odisha markets.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Rajasthan</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Growing steadily despite the dry climate, thanks to indoor and climate-controlled farming units around Jaipur, Jodhpur and Udaipur.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Himachal Pradesh</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Solan, Kullu, Shimla and Sirmour are historically significant — commercial mushroom farming in India itself began here, and white button mushroom cultivation remains strong.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Punjab</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Home to hundreds of established growers with high average annual output, and a well-organised network of spawn suppliers and buyers.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Uttar Pradesh</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">One of the fastest-growing states for new mushroom entrepreneurs, particularly for milky mushroom, which offers stronger margins than button mushroom for first-time growers.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Gujarat</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Steady production alongside strong urban demand in Ahmedabad, Surat and Vadodara, with growing interest in dried and value-added mushroom products.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Madhya Pradesh</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Our home state, with active farming and training activity around Katangi, Jabalpur, Indore, Bhopal and Pune-linked markets in neighbouring Maharashtra.</p>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">High-Demand Consumer Markets</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Alongside these production states, cities such as Delhi NCR, Bengaluru, Chennai, Kolkata, Hyderabad and Kochi may not always lead in farm output, but they represent some of India's strongest buyer markets — hotels, restaurants, supermarkets and health-conscious consumers driving consistent demand for fresh, dry and value-added mushroom products.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Whichever state or city you are farming or selling in, the fundamentals stay the same: proper training, quality spawn, hygienic production, a clear business plan and active marketing.
            </p>
          </section>

          {/* Final Call To Action Card */}
          <section className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-amber-500/10 p-6 sm:p-8 rounded-2xl border border-red-500/20 mt-8">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">Final Thoughts</h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3 font-medium">
              Most mushroom farming failures occur because of preventable mistakes rather than lack of opportunity.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Growers who focus on proper training, quality spawn, farm hygiene, business planning and marketing support are often better positioned for long-term success.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Whether your goal is <Link href="/services/turnkey-setup" className="font-semibold hover:underline text-emerald-600 dark:text-emerald-400">Mushroom Farm Setup</Link>, <Link href="/training" className="font-semibold hover:underline text-emerald-600 dark:text-emerald-400">Online Mushroom Training</Link>, <Link href="/workshop" className="font-semibold hover:underline text-emerald-600 dark:text-emerald-400">Offline Mushroom Training</Link>, <Link href="/services/spawn-supply" className="font-semibold hover:underline text-emerald-600 dark:text-emerald-400">Mushroom Spawn Sale</Link>, Fresh Mushroom Sale, Dry Mushroom Sale, <Link href="/services/consultancy" className="font-semibold hover:underline text-emerald-600 dark:text-emerald-400">Mushroom Consultancy</Link>, Turnkey Projects, <Link href="/blog/mushroom-farming-business-plan-india" className="font-semibold hover:underline text-emerald-600 dark:text-emerald-400">Business Plan & ROI</Link>, Government Subsidy or Mushroom Marketing Support — across Bihar, Odisha, Maharashtra, Uttarakhand, Haryana, Chhattisgarh, Rajasthan, Himachal Pradesh, Punjab, Uttar Pradesh, Gujarat, Madhya Pradesh, or any city or village in India — avoiding these common mistakes can significantly improve your chances of building a successful mushroom farming business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:+919203544140"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" /> Avoid Mistakes - Call Now
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold text-sm transition-all"
              >
                Contact Experts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
