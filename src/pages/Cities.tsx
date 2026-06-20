import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Search, ChevronRight, Lock, BookOpen, Clock, Heart, Award, ArrowRight, ArrowLeft, Filter } from 'lucide-react';
import SEO from '../components/SEO';
import { JABALPUR_BLOGS, ALL_BASELINE_METADATA_ITEMS, getJabalpurBlogByPath } from '../data/jabalpurBlogsData';
import { INDORE_BLOGS_METADATA, getIndoreBlogByPath } from '../data/indoreBlogsData';

const ALL_STATES = [
  { name: "Andaman and Nicobar Islands", active: false },
  { name: "Andhra Pradesh", active: false },
  { name: "Arunachal Pradesh", active: false },
  { name: "Assam", active: false },
  { name: "Bihar", active: false },
  { name: "Chandigarh", active: false },
  { name: "Chhattisgarh", active: false },
  { name: "Dadra and Nagar Haveli and Daman and Diu", active: false },
  { name: "Delhi", active: false },
  { name: "Goa", active: false },
  { name: "Gujarat", active: false },
  { name: "Haryana", active: false },
  { name: "Himachal Pradesh", active: false },
  { name: "Jammu and Kashmir", active: false },
  { name: "Jharkhand", active: false },
  { name: "Karnataka", active: false },
  { name: "Kerala", active: false },
  { name: "Ladakh", active: false },
  { name: "Lakshadweep", active: false },
  { name: "Madhya Pradesh", active: true },
  { name: "Maharashtra", active: false },
  { name: "Manipur", active: false },
  { name: "Meghalaya", active: false },
  { name: "Mizoram", active: false },
  { name: "Nagaland", active: false },
  { name: "Odisha", active: false },
  { name: "Puducherry", active: false },
  { name: "Punjab", active: false },
  { name: "Rajasthan", active: false },
  { name: "Sikkim", active: false },
  { name: "Tamil Nadu", active: false },
  { name: "Telangana", active: false },
  { name: "Tripura", active: false },
  { name: "Uttar Pradesh", active: false },
  { name: "Uttarakhand", active: false },
  { name: "West Bengal", active: false }
];

const MP_CITIES = [
  { name: "Jabalpur", active: true },
  { name: "Indore", active: true },
  { name: "Bhopal", active: false },
  { name: "Gwalior", active: false },
  { name: "Ujjain", active: false },
  { name: "Sagar", active: false },
  { name: "Dewas", active: false },
  { name: "Satna", active: false },
  { name: "Ratlam", active: false },
  { name: "Rewa", active: false },
  { name: "Chhindwara", active: false },
  { name: "Singrauli", active: false },
  { name: "Burhanpur", active: false },
  { name: "Khandwa", active: false },
  { name: "Bhind", active: false },
  { name: "Guna", active: false },
  { name: "Shivpuri", active: false },
  { name: "Vidisha", active: false },
  { name: "Chhatarpur", active: false },
  { name: "Damoh", active: false }
];

export default function CitiesPage() {
  const { state, city } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const isIndore = state?.toLowerCase() === 'madhya-pradesh' && city?.toLowerCase() === 'indore';
  const isJabalpur = state?.toLowerCase() === 'madhya-pradesh' && city?.toLowerCase() === 'jabalpur';

  // Gather all items based on current city
  const allItems = isIndore
    ? INDORE_BLOGS_METADATA.map(meta => getIndoreBlogByPath(meta.path)!).filter(Boolean)
    : (isJabalpur
        ? [
            ...JABALPUR_BLOGS,
            ...ALL_BASELINE_METADATA_ITEMS.map(meta => getJabalpurBlogByPath(meta.path)!).filter(Boolean)
          ]
        : []);

  // Unique categories for filtering
  const categories = ['All', ...Array.from(new Set(allItems.map(item => item.category)))];

  // Filtered blogs
  const filteredBlogs = allItems.filter(blog => {
    const matchesSearch = blog.keyword.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.intro.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 1. Render Blogs Directory Route: /cities/madhya-pradesh/:city
  if (isJabalpur || isIndore) {
    const activeCityName = isIndore ? 'Indore' : 'Jabalpur';
    return (
      <div className="min-h-screen pt-32 pb-24">
        <SEO 
          title={`Mushroom Farming ${activeCityName} - complete ${allItems.length} Guides`} 
          description={`Access the ultimate SEO handbook for Mushroom Farming in ${activeCityName}. Detailed step-by-step training, subsidy guidance, price checklists, and F1 spawn suppliers.`} 
          keywords={`Mushroom farming ${activeCityName}, mushroom training MP, ${activeCityName} button mushroom cultivation guides`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs md:text-sm dark:text-slate-500 text-slate-400 mb-8 font-semibold">
            <Link to="/" className="hover:text-primary-start transition-colors">Home</Link>
            <span>/</span>
            <Link to="/cities" className="hover:text-primary-start transition-colors">Cities</Link>
            <span>/</span>
            <Link to="/cities/madhya-pradesh" className="hover:text-primary-start transition-colors">Madhya Pradesh</Link>
            <span>/</span>
            <span className="dark:text-slate-300 text-slate-700 font-medium">{activeCityName}</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Mushroom Farming in <span className="gradient-text">{activeCityName}</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
              Explore {allItems.length} premium scientific guides, operational checklists, and resource maps built for agro-developers and indoor cultivation startups in {activeCityName}.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass p-6 rounded-[2rem] border border-white/5 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 dark:text-slate-500 text-slate-400">
                <Search size={18} />
              </span>
              <input 
                type="text"
                placeholder={`Search ${activeCityName.toLowerCase()} guides...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full dark:bg-slate-900 bg-white/80 border dark:border-white/10 border-slate-200 rounded-2xl py-3 pl-12 pr-4 dark:text-white text-slate-900 dark:placeholder-slate-500 placeholder-slate-400 focus:outline-none focus:border-primary-start transition-all text-sm"
              />
            </div>

            {/* Category Selector */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide py-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    selectedCategory === cat 
                      ? 'gradient-bg text-white border-transparent' 
                      : 'dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 dark:border-white/5 border-slate-200 hover:dark:bg-white/10 hover:bg-slate-200 hover:text-slate-900 hover:dark:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Directory Count Title */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">
              Showing {filteredBlogs.length} of {allItems.length} Unique Pages
            </div>
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, idx) => (
                <Link 
                  key={blog.id} 
                  to={`/locations/${activeCityName.toLowerCase()}/${blog.path}`}
                  className="glass p-6 rounded-3xl border border-white/5 hover:border-primary-start/40 flex flex-col justify-between group transition-all duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary-start dark:bg-primary-start/10 bg-black/10 px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">#{blog.id}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3 tracking-snug group-hover:text-primary-start transition-colors line-clamp-2">
                      {blog.h1}
                    </h3>
                    <p className="text-slate-400 text-[13px] leading-relaxed line-clamp-3 mb-6 font-semibold">
                      {blog.intro}
                    </p>
                  </div>
                  <div className="flex items-center text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white pt-4 border-t border-white/5 group-hover:gap-1 transition-all">
                    Read Handbook <ArrowRight size={14} className="ml-1 text-primary-start group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="glass p-12 text-center rounded-[2rem] border border-white/5">
              <p className="text-slate-400 font-bold mb-2">No matching {activeCityName} handbooks found</p>
              <p className="text-slate-600 text-xs">Try searching a different keyword or matching category.</p>
            </div>
          )}

          {/* Bottom callout */}
          <div className="gradient-bg p-8 md:p-12 rounded-[2.5rem] mt-16 text-white text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Want to Start Your Composting Unit or Training?</h3>
            <p className="text-white/80 text-sm max-w-xl mx-auto mb-8 font-semibold">
              Explore professional certified turnkey indoor agriculture project blueprints, support guarantees, and subsidised mushroom spawn seeds inside India.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 rounded-full bg-white text-slate-900 font-black text-xs hover:scale-105 transition-transform uppercase tracking-wider">
                Speak directly with Our Specialists
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Render Madhya Pradesh Cities Page: /cities/madhya-pradesh
  if (state?.toLowerCase() === 'madhya-pradesh') {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <SEO 
          title="Mushroom Farming Cities in Madhya Pradesh" 
          description="Find specialized mushroom farming support, training facilities, and logistics centers across the cities of Madhya Pradesh, India." 
          keywords="Mushroom farming Bhopal, Jabalpur oyster spawn, Indore composting setup"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs md:text-sm dark:text-slate-500 text-slate-400 mb-8 font-semibold">
            <Link to="/" className="hover:text-primary-start transition-colors">Home</Link>
            <span>/</span>
            <Link to="/cities" className="hover:text-primary-start transition-colors">Cities</Link>
            <span>/</span>
            <span className="dark:text-slate-300 text-slate-700 font-medium">Madhya Pradesh</span>
          </div>

          <div className="mb-12">
            <div className="badge mb-4">State Territory Directory</div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Cities in <span className="gradient-text">Madhya Pradesh</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Find customized mushroom cultivation support network and composting resources across MP cities. Under active roll-out, select your target territory below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MP_CITIES.map(city => (
              <div key={city.name}>
                {city.active ? (
                  <Link 
                    to={`/cities/madhya-pradesh/${city.name.toLowerCase()}`}
                    className="glass p-6 rounded-3xl border border-white/10 hover:border-primary-start/40 flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-primary-start/15 flex items-center justify-center text-primary-start">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{city.name}</h4>
                        <span className="text-[10px] text-primary-start font-black uppercase tracking-wider block">
                          {city.name === 'Indore' ? '151 Active Guides' : '93 Active Guides'}
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                  </Link>
                ) : (
                  <div className="glass p-6 rounded-3xl border border-white/5 opacity-50 flex items-center justify-between cursor-not-allowed">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500">
                        <Lock size={16} />
                      </div>
                      <div>
                        <h4 className="text-slate-400 font-bold text-lg">{city.name}</h4>
                        <span className="text-[11px] text-slate-600 block">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3. Render Baseline States View Page: /cities
  return (
    <div className="min-h-screen pt-32 pb-24">
      <SEO 
        title="Mushroom Farming in India - Cities & Territories Locator" 
        description="Select your state to explore localized mushroom training centers, spawn distribution centers, and commercial composting facilities." 
        keywords="Mushroom farming India, state wise training center MP up bihar"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="badge mb-4">National Agro Locator</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Select Your State to <span className="gradient-text">Begin</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Mushroom growing success depends heavily on regional sub-tropical weather. Choose your state below to access local composting templates and spawn distribution networks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ALL_STATES.map(stateItem => (
            <div key={stateItem.name}>
              {stateItem.active ? (
                <Link 
                  to={`/cities/${stateItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="glass p-5 rounded-2xl border border-white/10 hover:border-primary-start/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary-start/15 flex items-center justify-center text-primary-start font-black text-xs">
                      MP
                    </div>
                    <span className="text-white font-bold text-sm">{stateItem.name}</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                </Link>
              ) : (
                <div className="glass p-5 rounded-2xl border border-white/5 opacity-40 flex items-center justify-between cursor-not-allowed">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-slate-500">
                      <Lock size={12} />
                    </div>
                    <span className="text-slate-500 font-bold text-sm truncate max-w-[150px]">{stateItem.name}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
