import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, BookOpen, Calendar, CheckCircle2, Phone, ArrowRight, User } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What is Mushroom Spawn? Complete Beginner Guide (2026–27) | Organic Mushrooms Farm",
  description:
    "Learn what mushroom spawn is, the types of spawn, how to use it, and where to buy quality mushroom seeds in India. Complete beginner guide 2026-2027.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/articles/what-is-mushroom-spawn-beginner-guide-india",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "What is Mushroom Spawn? Complete Beginner Guide (2026–27)",
    description:
      "Learn what mushroom spawn is, the types of spawn, how to use it, and where to buy quality mushroom seeds in India. Complete beginner guide 2026-2027.",
    url: "https://organicmushroomsfarm.com/articles/what-is-mushroom-spawn-beginner-guide-india",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "What is Mushroom Spawn? Complete Beginner Guide (2026–27)",
    description:
      "Learn what mushroom spawn is, the types of spawn, how to use it, and where to buy quality mushroom seeds in India. Complete beginner guide 2026-2027.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://organicmushroomsfarm.com/#organization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://organicmushroomsfarm.com/#website",
      url: "https://organicmushroomsfarm.com",
      name: "Organic Mushroom Farm",
      publisher: {
        "@id": "https://organicmushroomsfarm.com/#organization",
      },
    },
    {
      "@type": "Article",
      "@id": "https://organicmushroomsfarm.com/articles/what-is-mushroom-spawn-beginner-guide-india#article",
      url: "https://organicmushroomsfarm.com/articles/what-is-mushroom-spawn-beginner-guide-india",
      headline: "What is Mushroom Spawn? Complete Beginner Guide (2026–27)",
      description: "Learn what mushroom spawn is, the types of spawn, how to use it, and where to buy quality mushroom seeds in India.",
      datePublished: "2026-05-09T00:00:00+00:00",
      author: {
        "@type": "Organization",
        name: "Organic Mushrooms Farm Team"
      },
      publisher: {
        "@id": "https://organicmushroomsfarm.com/#organization"
      },
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/articles/what-is-mushroom-spawn-beginner-guide-india#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://organicmushroomsfarm.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Articles",
          item: "https://organicmushroomsfarm.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What is Mushroom Spawn? Complete Beginner Guide (2026–27)",
        },
      ],
    },
  ],
};

export default function ArticleMushroomSpawn() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide flex-wrap">
            <li>
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li>
              <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Articles
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200 truncate font-semibold">
              What is Mushroom Spawn?
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-[11px] font-bold transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
          </Link>
        </div>

        {/* Article Container (Glassmorphism) */}
        <article className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
            <BookOpen size={12} />
            Beginner Guide
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            Mushroom Spawn Explained | Beginner's Guide to Growing in India
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <Calendar size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              May 09, 2026
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <User size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              Organic Mushrooms Farm Team
            </span>
          </div>

          <div className="space-y-6 text-[11px] md:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <p className="text-[12px] md:text-[13px] font-semibold italic text-slate-800 dark:text-slate-200">
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Mushroom Seeds</Link> | Mushroom Cultivation Guide India | Organic Mushrooms Farm<br/>
              organicmushroomsfarm.com | Call / WhatsApp: 9203544140<br/>
              Serving Pan India + UAE + UK + USA + Canada + Nepal + Bangladesh
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-3 border-l-4 border-emerald-500 pl-3">
              Introduction — The Foundation of Mushroom Farming
            </h2>
            <p>
              If you want to start mushroom farming — whether you are in Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow, Patna, Ranchi, Bhopal, Indore, Jabalpur, Nagpur, Raipur, Surat, Vadodara, Chandigarh, Dehradun, Guwahati, Bhubaneswar, or anywhere else across India — the first thing you must understand is <strong>MUSHROOM SPAWN</strong>.
            </p>
            <p>
              Just like seeds are essential for a crop, <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">mushroom spawn</Link> is the essential starter material for mushroom cultivation. Many beginners search for 'mushroom seeds' online — but technically, mushrooms do not grow from seeds. What they are actually looking for is <strong>spawn</strong>: a substrate colonized with mushroom mycelium that acts as the 'seed' of the mushroom world.
            </p>
            
            <p className="mt-4 font-bold text-slate-800 dark:text-slate-200">This complete guide covers everything you need to know:</p>
            <ul className="list-disc pl-5 space-y-1 marker:text-emerald-500">
              <li>What mushroom spawn is and how it works</li>
              <li>The 4 main types of spawn — grain, sawdust, liquid, and plug</li>
              <li>How to identify high-quality spawn</li>
              <li>Step-by-step spawning process with table</li>
              <li>Profit calculation table by mushroom variety</li>
              <li>Where to buy quality spawn across India and globally</li>
            </ul>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-3 border-l-4 border-emerald-500 pl-3">
              What is Mushroom Spawn? | Mushroom Seeds Explained
            </h2>
            <p>
              Mushroom spawn is a biological starter material in which mushroom mycelium (the root-like network of fungal threads) has already been cultivated on a carrier substrate such as grain, sawdust, or straw. When you introduce spawn into a fresh substrate, the mycelium spreads, colonizes the material, and eventually produces mushroom fruiting bodies.
            </p>
            <p>
              Think of spawn as the 'seed + germinated seedling' of mushrooms — it gives your crop a head start and dramatically increases your success rate compared to starting from spores.
            </p>
            <p>
              Spawn is the critical input for every mushroom variety grown commercially across India and the world — Oyster (Pleurotus ostreatus), Button (Agaricus bisporus), Milky (Calocybe indica), Shiitake (Lentinula edodes), Reishi (Ganoderma lucidum), and more.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-3 border-l-4 border-emerald-500 pl-3">
              4 Types of Mushroom Spawn | Which One Should You Use?
            </h2>
            <p>Choosing the right type of spawn is critical to your success. Here is a breakdown of all four types along with their best use cases:</p>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-black/10 dark:border-white/10 bg-white/30 dark:bg-black/20 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-100/50 dark:bg-slate-800/50">
                    <th className="p-3 border-b border-black/10 dark:border-white/10 font-bold uppercase tracking-widest text-[10px] text-emerald-700 dark:text-emerald-400">Spawn Type</th>
                    <th className="p-3 border-b border-black/10 dark:border-white/10 font-bold uppercase tracking-widest text-[10px] text-emerald-700 dark:text-emerald-400">Description</th>
                    <th className="p-3 border-b border-black/10 dark:border-white/10 font-bold uppercase tracking-widest text-[10px] text-emerald-700 dark:text-emerald-400">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-[10.5px]">
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-slate-900 dark:text-white">Grain Spawn</td>
                    <td className="p-3 border-b border-black/10 dark:border-white/10">Mycelium grown on wheat/sorghum/corn grains — fast colonization</td>
                    <td className="p-3 border-b border-black/10 dark:border-white/10">Oyster, Button, Milky Mushroom</td>
                  </tr>
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-slate-900 dark:text-white">Sawdust Spawn</td>
                    <td className="p-3 border-b border-black/10 dark:border-white/10">Mycelium colonized on hardwood sawdust</td>
                    <td className="p-3 border-b border-black/10 dark:border-white/10">Shiitake, Reishi, Maitake</td>
                  </tr>
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-slate-900 dark:text-white">Liquid Spawn</td>
                    <td className="p-3 border-b border-black/10 dark:border-white/10">Mycelium suspended in liquid nutrient solution — fastest spread</td>
                    <td className="p-3 border-b border-black/10 dark:border-white/10">Commercial farms, large-scale production</td>
                  </tr>
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3 font-bold text-slate-900 dark:text-white">Plug Spawn</td>
                    <td className="p-3">Wooden dowels colonized with mycelium</td>
                    <td className="p-3">Log cultivation (Shiitake, Oyster)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[13px] md:text-[14px] font-bold text-slate-900 dark:text-white mt-8 mb-2">Grain Spawn — Most Popular for Beginners</h3>
            <p>
              Grain spawn is produced by colonizing sterilized grains (wheat, sorghum/jowar, corn, rye) with mushroom mycelium. Each grain is coated in mycelium, creating thousands of colonization points when mixed into substrate. This makes colonization fast, even, and efficient.
            </p>
            <p>
              Grain spawn is the go-to choice for <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Oyster mushroom cultivation</Link>, Button mushroom farming, and Milky mushroom production. It is widely used across India.
            </p>
            <ul className="list-disc pl-5 space-y-1 marker:text-emerald-500">
              <li>Fastest colonization of all spawn types</li>
              <li>Easiest to use — simply mix into pasteurized substrate</li>
              <li>Best for beginners starting mushroom farming from scratch</li>
              <li>Available Pan India — order online from Organic Mushrooms Farm</li>
            </ul>

            <h3 className="text-[13px] md:text-[14px] font-bold text-slate-900 dark:text-white mt-8 mb-2">Sawdust Spawn — Best for Wood-Loving Varieties</h3>
            <p>
              Sawdust spawn uses colonized hardwood sawdust (oak, teak, beech) as the carrier. It is specifically designed for wood-decomposing species like Shiitake and Reishi — mushrooms that naturally grow on dead or dying trees.
            </p>
            <p>
              This type of spawn is gaining popularity in India, especially among farmers targeting premium export markets in UAE, Saudi Arabia, UK, USA, and Canada.
            </p>

            <h3 className="text-[13px] md:text-[14px] font-bold text-slate-900 dark:text-white mt-8 mb-2">Liquid Spawn & Plug Spawn</h3>
            <p>
              <strong>Liquid spawn</strong> contains mushroom mycelium suspended in a sterile liquid nutrient solution. It offers the fastest colonization speed and is ideal for large-scale commercial mushroom farms. <strong>Plug spawn</strong> consists of small wooden dowels (pegs) colonized with mycelium, hammered into fresh-cut hardwood logs (traditional for Shiitake).
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 border-l-4 border-emerald-500 pl-3">
              How to Identify High-Quality Mushroom Spawn
            </h2>
            <p>
              The quality of your spawn directly determines the quality and quantity of your harvest. Poor spawn leads to contamination, crop failure, and wasted investment.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 my-6 text-[10px] md:text-[10.5px]">
              <div className="bg-emerald-500/5 p-5 rounded-2xl border border-emerald-500/20">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 text-[11px] md:text-[12px]">Signs of Good Quality Spawn:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" /> Fully white or off-white mycelium throughout the bag</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" /> Clean earthy or mushroomy smell — no sour odor</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" /> Mycelium firmly coats every grain</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" /> No visible condensation or excess moisture</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" /> Properly sealed, undamaged packaging</li>
                </ul>
              </div>
              <div className="bg-red-500/5 p-5 rounded-2xl border border-red-500/20">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 text-[11px] md:text-[12px]">Signs of Poor-Quality Spawn:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold shrink-0">×</span> Green patches — Trichoderma mold (the most common contaminant)</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold shrink-0">×</span> Black, orange, or pink discoloration — bacterial contamination</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold shrink-0">×</span> Sour or fermented smell — substrate has gone anaerobic</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold shrink-0">×</span> Dry, shriveled, or hard grains — spawn is too old</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold shrink-0">×</span> Watery liquid pooling at the bottom — mycelium breakdown</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl my-6">
              <p className="m-0 text-[10px] md:text-[11px] italic">
                <strong>Pro Tip:</strong> Always source spawn from a certified lab or trusted supplier. Organic Mushrooms Farm (Jabalpur, Madhya Pradesh) supplies high-quality, lab-certified grain spawn, sawdust spawn, and more — with Pan India delivery. Call <strong>9203544140</strong>.
              </p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 border-l-4 border-emerald-500 pl-3">
              How to Use Mushroom Spawn | Step-by-Step Cultivation
            </h2>
            <p>
              The following process applies to grain spawn for Oyster mushroom cultivation — the most beginner-friendly and profitable mushroom to grow in India.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-black/10 dark:border-white/10 bg-white/30 dark:bg-black/20 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-100/50 dark:bg-slate-800/50">
                    <th className="p-3 border-b border-black/10 dark:border-white/10 w-12 text-center font-bold text-emerald-700 dark:text-emerald-400">Step</th>
                    <th className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-emerald-700 dark:text-emerald-400">Action</th>
                    <th className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-emerald-700 dark:text-emerald-400">Key Tip</th>
                  </tr>
                </thead>
                <tbody className="text-[10.5px]">
                  {[
                    ["1", "Prepare substrate (paddy/wheat straw or sawdust)", "Pasteurize at 80-90°C for 1-2 hours"],
                    ["2", "Cool substrate to room temperature", "Must reach 28-30°C before spawning"],
                    ["3", "Mix spawn into substrate in sterile conditions", "Use 2-3% spawn rate by weight"],
                    ["4", "Pack into polybags and seal", "No air gaps — compact well"],
                    ["5", "Incubation period — keep in dark at 25-28°C", "15-20 days for full mycelium run"],
                    ["6", "Open bags, maintain 80-90% humidity", "Mushroom pins appear in 5-7 days"],
                    ["7", "Harvest before caps fully open", "Cut at base with clean knife"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                      <td className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-center text-slate-900 dark:text-white">{row[0]}</td>
                      <td className="p-3 border-b border-black/10 dark:border-white/10">{row[1]}</td>
                      <td className="p-3 border-b border-black/10 dark:border-white/10 italic text-slate-500">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 border-l-4 border-emerald-500 pl-3">
              Mushroom Spawn Profit Calculator | How Much Can You Earn?
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-black/10 dark:border-white/10 bg-white/30 dark:bg-black/20 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-100/50 dark:bg-slate-800/50">
                    <th className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-emerald-700 dark:text-emerald-400">Variety</th>
                    <th className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-emerald-700 dark:text-emerald-400">Spawn Cost (per kg)</th>
                    <th className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-emerald-700 dark:text-emerald-400">Yield (per kg spawn)</th>
                    <th className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-emerald-700 dark:text-emerald-400">Estimated Profit</th>
                  </tr>
                </thead>
                <tbody className="text-[10.5px]">
                  {[
                    ["Oyster Mushroom", "Rs. 150–200", "4–6 kg", "Rs. 600–1,200"],
                    ["Button Mushroom", "Rs. 200–300", "3–5 kg", "Rs. 500–1,000"],
                    ["Milky Mushroom", "Rs. 200–250", "5–8 kg", "Rs. 800–1,500"],
                    ["Shiitake Mushroom", "Rs. 300–400", "2–4 kg", "Rs. 1,000–2,000"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                      <td className="p-3 border-b border-black/10 dark:border-white/10 font-bold text-slate-900 dark:text-white">{row[0]}</td>
                      <td className="p-3 border-b border-black/10 dark:border-white/10">{row[1]}</td>
                      <td className="p-3 border-b border-black/10 dark:border-white/10">{row[2]}</td>
                      <td className="p-3 border-b border-black/10 dark:border-white/10 text-emerald-600 dark:text-emerald-400 font-bold">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 border-l-4 border-emerald-500 pl-3">
              Where to Buy Mushroom Spawn in India
            </h2>
            <p>
              Organic Mushrooms Farm, based in Jabalpur, Madhya Pradesh, is a trusted spawn supplier serving customers across all Indian states and internationally. We deliver quality spawn to:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6 text-[10px] md:text-[10.5px]">
              <div className="bg-white/30 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">North & Central India</h4>
                <p>Delhi, Lucknow, Agra, Varanasi, Dehradun, Shimla, Chandigarh, Jabalpur, Bhopal, Indore, Raipur, Bilaspur.</p>
              </div>
              <div className="bg-white/30 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">West & South India</h4>
                <p>Mumbai, Pune, Nagpur, Ahmedabad, Surat, Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore.</p>
              </div>
              <div className="bg-white/30 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5 sm:col-span-2">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">East & Northeast India</h4>
                <p>Kolkata, Bhubaneswar, Guwahati, Patna, Ranchi, Imphal, Shillong, Agartala.</p>
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 border-l-4 border-emerald-500 pl-3">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4 text-[10.5px] md:text-[11px]">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Q1: What is the difference between mushroom spawn and mushroom seeds?</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Mushrooms do not technically have seeds. Spawn is a pre-colonized material (grains/sawdust) that acts like seeds.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Q2: How many mushrooms can I get from 1 kg of spawn?</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">With Oyster mushroom grain spawn, you can typically expect 4-6 kg of mushrooms per 1 kg of spawn across 3-4 harvests.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Q3: Can I make spawn at home?</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Yes, but it requires a fully sterile lab environment. For beginners, buying ready-made quality spawn is strongly recommended to avoid contamination.</p>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-emerald-600 text-center shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-black text-white mb-3">Ready to Start Mushroom Farming?</h3>
                <p className="text-emerald-50 mb-6 text-[11px] md:text-xs">
                  Get high-quality, lab-certified mushroom spawn delivered anywhere in India. Contact our experts today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:+919203544140" className="inline-flex px-6 py-3 bg-white text-emerald-800 hover:bg-emerald-50 font-bold rounded-full transition-colors items-center gap-2 text-xs">
                    <Phone size={14} /> Call Now: 9203544140
                  </a>
                  <Link href="/spawn-seeds" className="inline-flex px-6 py-3 bg-emerald-700 text-white hover:bg-emerald-800 font-bold rounded-full transition-colors items-center gap-2 text-xs border border-emerald-500">
                    Order Spawn Online <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2 justify-center">
              {["mushroom spawn", "mushroom seeds", "oyster mushroom spawn", "buy mushroom spawn online", "mushroom farming india"].map(tag => (
                <span key={tag} className="text-[9px] px-3 py-1 rounded-full bg-white/30 dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-400 uppercase font-bold tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}
