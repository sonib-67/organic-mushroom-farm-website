"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Search,
  CheckCircle2,
  ChevronRight,
  Globe2,
  PhoneCall,
  Sparkles
} from "lucide-react";

interface StateData {
  name: string;
  code: string;
  region: string;
  hubCity: string;
  climateSuitability: string;
  recommendedCrop: string;
}

const ALL_STATES: StateData[] = [
  { name: "Madhya Pradesh", code: "MP", region: "Central", hubCity: "Jabalpur / Indore / Bhopal", climateSuitability: "Year-Round (Button/Oyster)", recommendedCrop: "Button, Oyster & Milky" },
  { name: "Maharashtra", code: "MH", region: "West", hubCity: "Pune / Mumbai / Nagpur / Nashik", climateSuitability: "High Commercial Demand", recommendedCrop: "Button, Shiitake & Oyster" },
  { name: "Uttar Pradesh", code: "UP", region: "North", hubCity: "Lucknow / Kanpur / Varanasi / Noida", climateSuitability: "Winter Peak + Summer Milky", recommendedCrop: "White Button & Milky" },
  { name: "Bihar", code: "BR", region: "East", hubCity: "Patna / Gaya / Muzaffarpur", climateSuitability: "High Yield Season", recommendedCrop: "Button & Oyster" },
  { name: "Gujarat", code: "GJ", region: "West", hubCity: "Ahmedabad / Surat / Vadodara", climateSuitability: "Commercial Turnkey Demand", recommendedCrop: "Button & Milky" },
  { name: "Rajasthan", code: "RJ", region: "West", hubCity: "Jaipur / Jodhpur / Udaipur / Kota", climateSuitability: "Winter Button / Summer Milky", recommendedCrop: "Button & Milky" },
  { name: "Punjab", code: "PB", region: "North", hubCity: "Ludhiana / Amritsar / Jalandhar", climateSuitability: "Straw Substrate Hub", recommendedCrop: "White Button & Paddy Straw" },
  { name: "Haryana", code: "HR", region: "North", hubCity: "Gurugram / Faridabad / Sonipat", climateSuitability: "Mandi Proximity to NCR", recommendedCrop: "Button & Portobello" },
  { name: "Karnataka", code: "KA", region: "South", hubCity: "Bengaluru / Mysuru / Hubli", climateSuitability: "Temperate Year-Round", recommendedCrop: "Button, Oyster & Cordyceps" },
  { name: "Tamil Nadu", code: "TN", region: "South", hubCity: "Chennai / Coimbatore / Madurai", climateSuitability: "Tropical High Yield", recommendedCrop: "Milky, Oyster & Button" },
  { name: "Telangana", code: "TG", region: "South", hubCity: "Hyderabad / Warangal / Nizamabad", climateSuitability: "Urban Hotel & Export Hub", recommendedCrop: "Button, Oyster & Shiitake" },
  { name: "Andhra Pradesh", code: "AP", region: "South", hubCity: "Visakhapatnam / Vijayawada / Guntur", climateSuitability: "Coastal High Demand", recommendedCrop: "Milky & Oyster" },
  { name: "West Bengal", code: "WB", region: "East", hubCity: "Kolkata / Siliguri / Durgapur", climateSuitability: "Paddy Straw Abundance", recommendedCrop: "Paddy Straw & Button" },
  { name: "Odisha", code: "OD", region: "East", hubCity: "Bhubaneswar / Cuttack / Rourkela", climateSuitability: "High Paddy Straw Yield", recommendedCrop: "Paddy Straw & Milky" },
  { name: "Chhattisgarh", code: "CG", region: "Central", hubCity: "Raipur / Bilaspur / Durg", climateSuitability: "Central Hub Connectivity", recommendedCrop: "Button & Oyster" },
  { name: "Jharkhand", code: "JH", region: "East", hubCity: "Ranchi / Jamshedpur / Dhanbad", climateSuitability: "High Subsidy Allocation", recommendedCrop: "Button & Oyster" },
  { name: "Kerala", code: "KL", region: "South", hubCity: "Kochi / Thiruvananthapuram / Kozhikode", climateSuitability: "High Humidity & Rainfall", recommendedCrop: "Oyster & Milky" },
  { name: "Assam", code: "AS", region: "North-East", hubCity: "Guwahati / Dibrugarh / Silchar", climateSuitability: "Ideal Naturally Moist", recommendedCrop: "Oyster, Shiitake & Button" },
  { name: "Uttarakhand", code: "UK", region: "North", hubCity: "Dehradun / Haridwar / Haldwani", climateSuitability: "Natural Winter Chilling", recommendedCrop: "White Button & Gucchi" },
  { name: "Himachal Pradesh", code: "HP", region: "North", hubCity: "Shimla / Solan / Dharamshala", climateSuitability: "National Mushroom Capital", recommendedCrop: "Button & Shiitake" },
  { name: "Jammu & Kashmir", code: "JK", region: "North", hubCity: "Srinagar / Jammu / Anantnag", climateSuitability: "Temperate Natural Cold", recommendedCrop: "Button, Morchella (Gucchi)" },
  { name: "Delhi NCR", code: "DL", region: "North", hubCity: "New Delhi / Dwarka / Rohini", climateSuitability: "Largest Consumption Mandi", recommendedCrop: "High-Tech Button & Exotic" },
  { name: "Goa", code: "GA", region: "West", hubCity: "Panaji / Margao / Vasco", climateSuitability: "Tourism & Hotel Bulk Demand", recommendedCrop: "Button & Oyster" },
  { name: "Tripura", code: "TR", region: "North-East", hubCity: "Agartala / Udaipur", climateSuitability: "Sub-tropical Moist", recommendedCrop: "Oyster & Milky" },
  { name: "Meghalaya", code: "ML", region: "North-East", hubCity: "Shillong / Tura", climateSuitability: "Pine Substrate & High Rainfall", recommendedCrop: "Shiitake & Oyster" },
  { name: "Manipur", code: "MN", region: "North-East", hubCity: "Imphal / Churachandpur", climateSuitability: "Forest & Agri Biomass", recommendedCrop: "Oyster & Wood Ear" },
  { name: "Nagaland", code: "NL", region: "North-East", hubCity: "Kohima / Dimapur", climateSuitability: "Rich Bio-Forest Substrate", recommendedCrop: "Shiitake & Oyster" },
  { name: "Arunachal Pradesh", code: "AR", region: "North-East", hubCity: "Itanagar / Naharlagun", climateSuitability: "High Altitude Organic Hub", recommendedCrop: "Cordyceps & Shiitake" },
];

export const StatesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = ["All", "Central", "North", "South", "West", "East", "North-East"];

  const filteredStates = ALL_STATES.filter((st) => {
    const matchesSearch =
      st.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.hubCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.recommendedCrop.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "All" || st.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section id="states-directory" className="py-20 relative bg-slate-900/40 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe2 size={14} />
            <span>Pan-India Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Consultation in <span className="gradient-text">28 States & 8 UTs</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
            We supply high-yield refrigerated spawn, turnkey commercial setups, and NABARD / NHB subsidy DPRs tailored for your specific state climate and local mandi pricing.
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your state or city (e.g. Maharashtra, Indore, Patna, Bengaluru)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-950/80 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 shadow-md"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide py-1">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedRegion === region
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                    : "bg-white/5 dark:bg-slate-950/50 text-slate-400 hover:text-white border border-black/5 dark:border-white/5"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* States Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredStates.map((st) => (
            <motion.div
              key={st.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-white dark:bg-slate-950/80 border border-black/5 dark:border-white/10 hover:border-purple-500/40 transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">
                    {st.region} Region
                  </span>
                  <span className="text-xs font-bold text-slate-500">{st.code}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors">
                  {st.name}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                  {st.hubCity}
                </p>

                <div className="mt-3 pt-3 border-t border-black/5 dark:border-white/5 text-[11px] space-y-1 text-slate-600 dark:text-slate-300">
                  <div>
                    <span className="font-semibold text-slate-400">Optimal Crop: </span>
                    <span className="text-emerald-500 font-bold">{st.recommendedCrop}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400">Demand: </span>
                    <span>{st.climateSuitability}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5">
                <a
                  href={`https://wa.me/919203544140?text=Hi,%20I%20am%20from%20${encodeURIComponent(st.name)}%20and%20want%20commercial%20mushroom%20training%20and%20setup%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-purple-500/10 hover:bg-purple-600 text-purple-400 hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <span>Connect in {st.name}</span>
                  <ChevronRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;
