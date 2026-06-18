import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Search, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { MP_CITIES, CATEGORIES } from '../data/mpCitiesData';

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = useMemo(() => {
    return MP_CITIES.filter(city => 
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Madhya Pradesh Cities SEO Directory | Organic Mushroom Farm"
        description="Browse the complete directory of Madhya Pradesh local municipal & district urban centers. Explore specialized SEO pages and cultivation guidelines for 46 cities across MP."
        keywords="mushroom training directory, MP cities mushroom farming, mushroom setup Madhya Pradesh, organic spawn distributor directories"
      />

      <section className="section-padding text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="badge mx-auto mb-6">Agri-tech SEO Engine</div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight uppercase">
            Madhya Pradesh <span className="gradient-text">Cities Directory</span>
          </h1>
          <p className="text-slate-400 text-[14px] md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Programmatic structural content blocks mapped across 46 Local Municipal & District Urban Centers with tailored local copywriting and keyword positioning.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mb-16">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search MP City..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary-start transition-all text-sm font-medium"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCities.map((city, idx) => (
            <motion.div 
              key={city.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.015 }}
              className="glass p-6 md:p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-start/10 text-primary-start flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{city.name}</h3>
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-0.5">MP Municipal Center (Group {city.group})</div>
                  </div>
                </div>

                <div className="space-y-2 border-t border-white/5 pt-4">
                  {CATEGORIES.map(category => (
                    <Link 
                      key={category.slug}
                      to={`/${city.slug}/${category.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-[12px] font-bold text-slate-400 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FileText size={14} className="text-slate-500 group-hover:text-primary-start shrink-0" />
                        <span className="truncate">{category.name}</span>
                      </div>
                      <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 font-bold">No cities found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
