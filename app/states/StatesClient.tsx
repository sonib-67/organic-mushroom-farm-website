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
      {/* Background Effects (No black boxes, pure glassmorphism) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50 dark:bg-black/90 transition-colors duration-500">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[3000ms]" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[4000ms]" />
      </div>

      <article className="max-w-6xl mx-auto px-4 relative z-10 space-y-6 pb-24">
        
        {/* Header */}
        <header className="text-center space-y-3 mb-8 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[2rem] p-6 shadow-sm">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white/60 dark:bg-white/10 border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-1">
            <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span className="text-[9px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Pan India Coverage</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight flex items-center justify-center gap-2">
            Mushroom Farming Resources <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">by State</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 font-medium leading-relaxed">
            Choose your state below to find <Link href="/training" className="text-blue-600 font-bold hover:underline">mushroom farming training</Link>, <Link href="/spawn-seed" className="text-blue-600 font-bold hover:underline">spawn suppliers</Link>, courses, and setup guides available in your area. For a complete list of all city-level guides, visit our <Link href="/site-directory" className="text-blue-600 font-bold hover:underline">Site Directory</Link>.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto mt-4 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search your state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/80 dark:bg-black/40 border dark:border-white/10 border-black/10 rounded-xl text-[11px] text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </header>

        {/* States Grid */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence>
            {filteredStates.map((state, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                key={state.slug}
              >
                <Link
                  href={`/states/${state.slug}`}
                  className="group block h-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[1.2rem] p-4 shadow-sm hover:border-blue-500/40 hover:bg-white/60 dark:hover:bg-white/10 transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Map className="w-3.5 h-3.5" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-[12px] md:text-[13px] font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {state.name}
                  </h2>
                  <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2">
                    {state.desc}
                  </p>
                  <div className="mt-auto text-[9px] font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 opacity-80 group-hover:opacity-100">
                    View Cities <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

        {filteredStates.length === 0 && (
          <div className="text-center py-12 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[1.5rem]">
            <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-3 opacity-50" />
            <p className="text-[11px] md:text-[12px] text-slate-500 dark:text-slate-400 font-medium">No states found matching "{searchQuery}"</p>
            <button onClick={() => setSearchQuery('')} className="mt-3 text-[10px] text-blue-600 font-bold hover:underline">Clear search</button>
          </div>
        )}
      </article>
    </>
  );
}
