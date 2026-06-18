import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, ArrowRight, Search, 
  Sprout, Award, Briefcase, Building, BookOpen, 
  HelpCircle, Image, List, Shield, Info, Phone 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Import locations from central locationsData file
import { STATES, CITIES, VILLAGES } from '../data/locationsData';


interface LocationItem {
  rawName: string;
  formattedName: string;
  slug: string;
  type: 'State' | 'City' | 'Village';
}

export default function SitemapPage() {
  const [activeTab, setActiveTab] = useState<'main' | 'locations'>('main');
  const [searchQuery, setSearchQuery] = useState('');
  const [locFilter, setLocFilter] = useState<'all' | 'State' | 'City' | 'Village'>('all');

  // Convert raw location names to formatted ones
  const allLocations: LocationItem[] = useMemo(() => {
    const list: LocationItem[] = [];
    
    STATES.forEach(name => {
      list.push({
        rawName: name,
        formattedName: name.replace(/_/g, ' '),
        slug: name.toLowerCase().replace(/_/g, '-'),
        type: 'State'
      });
    });

    CITIES.forEach(name => {
      list.push({
        rawName: name,
        formattedName: name.replace(/_/g, ' '),
        slug: name.toLowerCase().replace(/_/g, '-'),
        type: 'City'
      });
    });

    VILLAGES.forEach(name => {
      list.push({
        rawName: name,
        formattedName: name.replace(/_/g, ' '),
        slug: name.toLowerCase().replace(/_/g, '-'),
        type: 'Village'
      });
    });

    return list.sort((a, b) => a.formattedName.localeCompare(b.formattedName));
  }, []);

  // Filtered locations
  const filteredLocations = useMemo(() => {
    return allLocations.filter(loc => {
      const matchesSearch = loc.formattedName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = locFilter === 'all' || loc.type === locFilter;
      return matchesSearch && matchesFilter;
    });
  }, [allLocations, searchQuery, locFilter]);

  const mainHubs = [
    { name: "Home / Welcome", path: "/", desc: "Main landing gateway and entry point." },
    { name: "About Us", path: "/about", desc: "Our history, founders, mission, and philosophy." },
    { name: "Our Services Hub", path: "/services", desc: "Comprehensive mushroom business opportunities." },
    { name: "Mushroom Spawn (Seeds)", path: "/spawn-seed", desc: "High quality, laboratory-clean spawn seeds." },
    { name: "Mushroom Equipment", path: "/equipment", desc: "Industrial and organic level grow equipments." },
    { name: "Turnkey Farm Setup", path: "/turnkey-projects", desc: "Full planning, setup, and commissioning." },
    { name: "Government Subsidy", path: "/subsidy", desc: "Government grants, subsidies, and model guidelines." },
    { name: "Training & Courses", path: "/training", desc: "Aesthetic online/offline certified training sessions." },
    { name: "Business Plan Model", path: "/business-plan", desc: "Commercial business estimation guides." },
    { name: "Mushroom Varieties Guide", path: "/mushroom-types", desc: "Interactive listing of button, oyster, milky varieties." },
    { name: "Contact & Headquarters", path: "/contact", desc: "Addresses, interactive map and enquiry portals." }
  ];

  const subServicesAndSOPs = [
    { name: "Compost Production Setup", path: "/services/compost-production", desc: "Pasteurized compost manufacturing techniques." },
    { name: "Technical Consultancy", path: "/services/consultancy", desc: "Professional agronomist phone and on-site support." },
    { name: "Marketing Support & Buy-Back", path: "/services/marketing-support", desc: "End-to-end harvest marketing assistance." },
    { name: "Cold-Chain Logistics", path: "/services/cold-chain", desc: "Refrigerated transit for fresh spawn/harvests." },
    { name: "Model Specifications", path: "/model-details", desc: "Operational details of commercial setups." },
    { name: "Compost Unit Specifications", path: "/compost-unit-specs", desc: "Air-handling unit and infrastructure detailer." },
    { name: "Standard SOPs (Tunnel/Bunker Ops)", path: "/sops#tunnel-ops", desc: "Step-by-step Standard Operating Procedures guide." },
    { name: "Agriculture Expertise", path: "/expertise-details", desc: "Key academic and market insights on growth." },
    { name: "Mushroom Price Today", path: "/mushroom-price-today", desc: "Real-time pricing for major Indian wholesale markets." },
    { name: "ROI Profit Calculator", path: "/roi-calculator", desc: "Calculate your profits, investments, and paybacks." },
    { name: "Mushroom General Franchise", path: "/mushroom-franchise", desc: "Own an Organic franchise model representation." },
    { name: "Careers Index", path: "/careers", desc: "Join our fast-growing agro-business framework." },
    { name: "Photo Gallery", path: "/gallery", desc: "Visual peek into our farms, labs, and workshops." },
    { name: "Success Stories", path: "/success-stories", desc: "Real life stories of successful farmers we've trained." },
    { name: "Frequently Asked Questions", path: "/faq", desc: "A collection of questions solved for beginner farmers." },
    { name: "Customer Support Page", path: "/support", desc: "Submit tickets and get quick resolution support." }
  ];

  const educationalArticles = [
    { name: "Farming Beginner Guide India (2026)", path: "/articles/mushroom-farming-beginner-guide-india-2026-2027", desc: "Step-by-step guide for Indian beginner agripreneurs." },
    { name: "Oyster Mushroom Cultivation India", path: "/articles/oyster-mushroom-cultivation-india", desc: "Complete practical guide for high-yield Oyster setups." },
    { name: "What is Mushroom Spawn (Beginner Guide)", path: "/articles/what-is-mushroom-spawn-beginner-guide-india", desc: "Understanding mushroom mycelium and grain spawn." },
    { name: "Mushroom Business Plan Hindi", path: "/articles/mushroom-farming-business-plan-hindi-2026", desc: "Highly detailed business plan written in Hindi language." },
    { name: "Mushroom Farming Training course Hindi", path: "/articles/mushroom-farming-training-hindi-india", desc: "Indian central region training course information." },
    { name: "Farming Training Certificate", path: "/articles/mushroom-farming-training-online-offline-certificate", desc: "Syllabus and layout of certified online/offline workshops." },
    { name: "Ghar Par Mushroom Farming Manual", path: "/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026", desc: "Detailed home cultivation, bag preparation strategy." }
  ];

  const dynamicBlogPosts = Array.from({ length: 10 }, (_, i) => ({
    name: `Official Research Article #${i + 1}`,
    path: `/blog/${i + 1}`,
    desc: `Detailed industrial insights, seasonal updates, and updates on volume #${i + 1}.`
  }));

  const systemPolicies = [
    { name: "Terms of Service", path: "/terms", desc: "Rules and terms guiding farm partnerships." },
    { name: "Privacy Policy", path: "/privacy", desc: "Data protection and absolute client privacy logs." },
    { name: "Refund & Cancellation", path: "/refund-policy", desc: "Transparent policy on ticket / spawn refunds." },
    { name: "Shipping Directory", path: "/shipping-policy", desc: "Cold chain shipping guidelines and pin-codes." }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <SEO 
        title="Site Directory & HTML Sitemap | Organic Mushroom Farm" 
        description="Explore the complete site map directory of Organic Mushroom Farm. High-contrast index of core articles, local services, and 110+ pan-India location pathways." 
        keywords="site map organic mushroom farm, html sitemap, directory list mushroom training, mushroom farming list states"
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge mx-auto mb-4">Complete Directory</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
            HTML Site <span className="gradient-text">Directory</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            A comprehensive, fully indexable site map index. Find main hub panels, expert articles, policies, and localized pages in one organized place.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-white/5 max-w-md mx-auto mb-12 gap-2 bg-white/5 p-1.5 rounded-full">
          <button 
            onClick={() => setActiveTab('main')}
            className={`flex-1 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all ${activeTab === 'main' ? 'bg-primary-start text-white shadow-lg shadow-primary-start/20' : 'text-slate-400 hover:text-white'}`}
          >
            Core Pages & Blogs
          </button>
          <button 
            onClick={() => setActiveTab('locations')}
            className={`flex-1 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all ${activeTab === 'locations' ? 'bg-primary-start text-white shadow-lg shadow-primary-start/20' : 'text-slate-400 hover:text-white'}`}
          >
            Location Directory ({allLocations.length})
          </button>
        </div>

        {/* Core Pages Tab */}
        <div className={`space-y-16 ${activeTab === 'main' ? 'block' : 'hidden'}`}>
            
            {/* Core pages */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">Main Hub & Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainHubs.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-primary-start text-xs font-bold uppercase tracking-wider mt-4">
                      Explore Page <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sub Services, Calcs & Details */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">Specifications & Calculators</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subServicesAndSOPs.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-primary-start text-xs font-bold uppercase tracking-wider mt-4">
                      Explore Page <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Scientific Guides / Articles */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">Step-by-Step Educational Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {educationalArticles.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-primary-start text-xs font-bold uppercase tracking-wider mt-4">
                      Read Article <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Scientific Blogs */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">Official Research Blogs</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dynamicBlogPosts.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-primary-start text-xs font-bold uppercase tracking-wider mt-4">
                      Read Post <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Policy files */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">System Policies & Legal Directories</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {systemPolicies.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-slate-500 text-xs font-bold uppercase tracking-wider mt-4">
                      Standard Terms <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        {/* Location Directory Tab */}
        <div className={activeTab === 'locations' ? 'block' : 'hidden'}>
          <div>
            {/* Search and control box */}
            <div className="glass p-6 rounded-3xl border border-white/5 mb-8 flex flex-col md:flex-row items-center gap-4 justify-between">
              <div className="relative w-full md:max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search over 110 regions (Delhi, Patna, Bhopal...)"
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-start/50 transition-colors"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {(['all', 'State', 'City', 'Village'] as const).map(f => (
                  <button 
                    key={f}
                    onClick={() => setLocFilter(f)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${locFilter === f ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}
                  >
                    {f === 'all' ? 'All Locations' : f + 's'}
                  </button>
                ))}
              </div>
            </div>

            {/* Locations grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLocations.map((loc, index) => (
                <div key={index} className="glass p-6 rounded-3xl border border-white/5">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                    <span className="flex items-center gap-2 text-white font-bold">
                      <MapPin size={16} className="text-primary-start" />
                      {loc.formattedName}
                    </span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#25D366]/80 bg-white/5 px-2.5 py-1 rounded-full">
                      {loc.type}
                    </span>
                  </div>

                  {/* 12 fully dynamic links that bot/users can hit */}
                  <div className="space-y-4">
                    {/* Core Hub Matrix */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Core Hub Matrix</div>
                      
                      <Link 
                        to={`/mushroom-farming-${loc.slug}`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <Sprout size={14} className="text-primary-start" />
                          Mushroom Farming Details
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/mushroom-training-${loc.slug}`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <BookOpen size={14} className="text-primary-start" />
                          Cultivation Training Course
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/mushroom-franchise-${loc.slug}`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <Building size={14} className="text-primary-start" />
                          Franchise Opportunities
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/careers-${loc.slug}`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <Briefcase size={14} className="text-primary-start" />
                          Farming Jobs / Careers
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>
                    </div>

                    {/* Targeted SEO Portals */}
                    <div className="space-y-2 pt-3 border-t border-white/5">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Targeted SEO Portals</div>
                      
                      <Link 
                        to={`/${loc.slug}/mushroom-training-center`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white /5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <BookOpen size={14} className="text-[#25D366]" />
                          🎒 Training Center
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/${loc.slug}/government-mushroom-farming-training-by-government`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <Award size={14} className="text-[#25D366]" />
                          🏛️ Government Support
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/${loc.slug}/stages-of-mushroom-growth`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <List size={14} className="text-[#25D366]" />
                          📊 Stages of Growth
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/${loc.slug}/how-to-grow-mushroom-at-home`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <HelpCircle size={14} className="text-[#25D366]" />
                          🏡 Grow at Home Guide
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/${loc.slug}/oyster-mushroom-price`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <Info size={14} className="text-[#25D366]" />
                          💰 Mandi Prices
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/${loc.slug}/mushroom-farm-setup`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <Building size={14} className="text-[#25D366]" />
                          🏭 Commercial Setup
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/${loc.slug}/mushroom-spawn-supplier`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <Sprout size={14} className="text-[#25D366]" />
                          🌱 Spawn Supplier
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>

                      <Link 
                        to={`/${loc.slug}/buy-fresh-mushroom-online`} 
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                          <Info size={14} className="text-[#25D366]" />
                          🛒 Buy Fresh Online
                        </span>
                        <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredLocations.length === 0 && (
              <div className="text-center py-20 text-slate-500 text-sm">
                No locations match your search query. Try another city or state!
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
