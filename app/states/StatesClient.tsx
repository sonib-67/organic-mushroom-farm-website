"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Map, MapPin, Search, ArrowRight, ChevronRight, X } from "lucide-react";

const statesList = [
  { slug: "madhya-pradesh", name: "Madhya Pradesh", desc: "Explore resources in Jabalpur, Indore, Bhopal and other cities in Madhya Pradesh." },
  { slug: "maharashtra", name: "Maharashtra", desc: "Explore resources in Mumbai, Pune, Nagpur and other cities in Maharashtra." },
  { slug: "uttar-pradesh", name: "Uttar Pradesh", desc: "Explore resources in Lucknow, Kanpur, Agra and other cities in Uttar Pradesh." },
  { slug: "bihar", name: "Bihar", desc: "Explore resources in Patna, Gaya and other cities in Bihar." },
  { slug: "rajasthan", name: "Rajasthan", desc: "Explore resources in Jaipur, Udaipur, Bikaner and other cities in Rajasthan." },
  { slug: "gujarat", name: "Gujarat", desc: "Explore resources in Ahmedabad, Surat, Rajkot and other cities in Gujarat." },
  { slug: "karnataka", name: "Karnataka", desc: "Explore resources in Bangalore, Mysore and other cities in Karnataka." },
  { slug: "tamil-nadu", name: "Tamil Nadu", desc: "Explore resources in Chennai, Coimbatore and other cities in Tamil Nadu." },
  { slug: "telangana", name: "Telangana", desc: "Explore resources in Hyderabad and other cities in Telangana." },
  { slug: "andhra-pradesh", name: "Andhra Pradesh", desc: "Explore resources in Visakhapatnam, Vijayawada and other cities." },
  { slug: "kerala", name: "Kerala", desc: "Explore resources in Kochi, Thiruvananthapuram and other cities in Kerala." },
  { slug: "west-bengal", name: "West Bengal", desc: "Explore resources in Kolkata, Siliguri and other cities in West Bengal." },
  { slug: "odisha", name: "Odisha", desc: "Explore resources in Bhubaneswar, Cuttack and other cities in Odisha." },
  { slug: "chhattisgarh", name: "Chhattisgarh", desc: "Explore resources in Raipur, Bhilai and other cities in Chhattisgarh." },
  { slug: "jharkhand", name: "Jharkhand", desc: "Explore resources in Ranchi, Jamshedpur and other cities in Jharkhand." },
  { slug: "punjab", name: "Punjab", desc: "Explore resources in Ludhiana, Amritsar and other cities in Punjab." },
  { slug: "haryana", name: "Haryana", desc: "Explore resources in Faridabad, Gurugram and other cities in Haryana." },
  { slug: "uttarakhand", name: "Uttarakhand", desc: "Explore resources in Dehradun, Haridwar and other cities in Uttarakhand." },
  { slug: "assam", name: "Assam", desc: "Explore resources in Guwahati and other cities in Assam." },
  { slug: "delhi", name: "Delhi", desc: "Explore resources in New Delhi, NCR and surrounding regions." },
  { slug: "chandigarh", name: "Chandigarh", desc: "Explore resources in Chandigarh, Mohali, Panchkula (Tricity)." }
].sort((a, b) => a.name.localeCompare(b.name));

export default function StatesClient() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStates = statesList.filter(state => 
    state.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <>
      {/* Background Ambient Glows (Non-interfering with global canvas) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[5%] left-[10%] w-[450px] h-[450px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      </div>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 pt-2 pb-24">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-2 pb-1">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold">
              States
            </li>
          </ol>
        </nav>
        
        {/* Header */}
        <header className="text-center space-y-4 mb-8 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 shadow-sm mx-auto mb-1">
            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Pan India Coverage</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight flex flex-wrap items-center justify-center gap-2">
            <span>Mushroom Farming Resources</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">by State</span>
          </h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Choose your state below to find <Link href="/training" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">mushroom farming training</Link>, <Link href="/spawn-seed" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">spawn suppliers</Link>, courses, and turnkey setup guides available in your area. For a complete list of all city-level guides, visit our <Link href="/site-directory" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Site Directory</Link>.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto mt-4 relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input 
              type="text" 
              placeholder="Search your state (e.g. Maharashtra, MP, Punjab)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700 rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white" aria-label="Clear search">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </header>

        {/* States Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredStates.map((state, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                key={state.slug}
                className="h-full"
              >
                <Link
                  href={`/states/${state.slug}`}
                  className="group flex flex-col h-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-blue-500/60 dark:hover:border-blue-500/60 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Map className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {state.name}
                  </h2>
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {state.desc}
                  </p>
                  <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-between group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <span>View Centers & Cities</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

        {filteredStates.length === 0 && (
          <div className="text-center py-12 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-3 opacity-60" />
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">No states found matching "{searchQuery}"</p>
            <button onClick={() => setSearchQuery('')} className="mt-3 px-4 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors">Clear search</button>
          </div>
        )}
      </article>
    </>
  );
}
