import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Wrench, Shield, Factory, Wind, Droplet, Sun, Beaker, Recycle, Zap, Thermometer, ShieldAlert, Archive, Activity, Leaf, Microscope, Fan, Layers } from 'lucide-react';

const mainCategories = [
  { title: "Machinery", icon: <Settings className="w-6 h-6" />, route: "/equipment/complete-list/machinery", desc: "Heavy machinery and processing units" },
  { title: "Equipment", icon: <Wrench className="w-6 h-6" />, route: "/equipment/complete-list/equipment", desc: "General tools and daily farm equipment" },
  { title: "Safety Material", icon: <Shield className="w-6 h-6" />, route: "/equipment/complete-list/safety", desc: "PPE and biosecurity materials" }
];

const subCategories = [
  { title: "Farm Infrastructure", icon: <Factory className="w-5 h-5" />, route: "/equipment/complete-list/infrastructure" },
  { title: "Raw Material Handling", icon: <Layers className="w-5 h-5" />, route: "/equipment/complete-list/raw-material" },
  { title: "Substrate Preparation", icon: <Leaf className="w-5 h-5" />, route: "/equipment/complete-list/substrate-preparation" },
  { title: "Compost Unit", icon: <Recycle className="w-5 h-5" />, route: "/equipment/complete-list/compost-unit" },
  { title: "Spawn Production", icon: <Beaker className="w-5 h-5" />, route: "/equipment/complete-list/spawn-production" },
  { title: "Laboratory", icon: <Microscope className="w-5 h-5" />, route: "/equipment/complete-list/laboratory" },
  { title: "Climate Control", icon: <Thermometer className="w-5 h-5" />, route: "/equipment/complete-list/climate-control" },
  { title: "Ventilation", icon: <Wind className="w-5 h-5" />, route: "/equipment/complete-list/ventilation" },
  { title: "Water Management", icon: <Droplet className="w-5 h-5" />, route: "/equipment/complete-list/water-management" },
  { title: "Harvest & Post-Harvest", icon: <Archive className="w-5 h-5" />, route: "/equipment/complete-list/harvest-post-harvest" },
  { title: "Cold Chain", icon: <Sun className="w-5 h-5" />, route: "/equipment/complete-list/cold-chain" },
  { title: "Processing", icon: <Settings className="w-5 h-5" />, route: "/equipment/complete-list/processing" },
  { title: "Material Handling", icon: <Layers className="w-5 h-5" />, route: "/equipment/complete-list/material-handling" },
  { title: "Electrical & Power", icon: <Zap className="w-5 h-5" />, route: "/equipment/complete-list/electrical-power" },
  { title: "Cleaning & Biosecurity", icon: <ShieldAlert className="w-5 h-5" />, route: "/equipment/complete-list/cleaning-biosecurity" },
  { title: "Quality Control", icon: <Activity className="w-5 h-5" />, route: "/equipment/complete-list/quality-control" },
  { title: "Safety Equipment", icon: <Shield className="w-5 h-5" />, route: "/equipment/complete-list/safety-additional" },
  { title: "Waste Management", icon: <Recycle className="w-5 h-5" />, route: "/equipment/complete-list/waste-management" }
];

// the previous arrays are preserved for reference if needed, but not rendered directly in this index page.
// we will export the smart directory view.

export default function EquipmentCompleteListPage() {
  return (
    <div className="font-sans bg-transparent dark:bg-transparent min-h-screen">
      <SEO 
        title="Mushroom Farming Equipment Directory | Organic Mushrooms Farm"
        description="Complete directory for mushroom farming equipment, machinery, safety material, lab tools, and climate control systems."
      />

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 mt-16">
        
        {/* Header section */}
        <div className="text-center mb-6 md:mb-10">
          
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 md:mb-6">
            Equipment & Machinery
          </h1>
          <p className="text-sm md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore our comprehensive directory of commercial mushroom farming equipment categorized by scale and process requirements.
          </p>
        </div>

        {/* 3 Main Scale-wise Boxes */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-12">
          {mainCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.route}
              className="group bg-white/20 dark:bg-slate-800/20 glass rounded-lg md:rounded-xl p-3 md:p-6 shadow-sm hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-start/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 hidden md:block" />
              <div className="w-8 h-8 md:w-12 md:h-12 bg-slate-100 dark:bg-slate-700/50 text-primary-start rounded-md md:rounded-xl flex items-center justify-center mb-2 md:mb-4 shrink-0">
                <div className="scale-75 md:scale-100 flex items-center justify-center">{cat.icon}</div>
              </div>
              <h2 className="text-[11px] md:text-2xl font-bold text-slate-900 dark:text-white mb-0 md:mb-2 leading-tight">{cat.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 hidden md:block">{cat.desc}</p>
              <div className="hidden md:flex items-center text-primary-start font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                View Full List <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* 18 Specific Process-wise Grid */}
        <div>
          <div className="mb-4 md:mb-8">
            <h2 className="text-lg md:text-3xl font-bold text-slate-900 dark:text-white mb-1 md:mb-2">
              Process-Specific Directories
            </h2>
            <p className="text-xs md:text-base text-slate-600 dark:text-slate-400">
              Browse detailed equipment lists by department or operational process.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {subCategories.map((sub, idx) => (
              <Link 
                key={idx} 
                to={sub.route}
                className="group flex flex-row items-center bg-white/20 dark:bg-slate-800/20 glass rounded-lg p-2.5 md:p-4 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:border-primary-start/50"
              >
                <div className="text-slate-400 group-hover:text-primary-start transition-colors mr-2.5 md:mr-3 shrink-0 flex items-center justify-center">
                  <div className="scale-[0.8] md:scale-100 flex items-center justify-center">{sub.icon}</div>
                </div>
                <h3 className="text-xs md:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary-start transition-colors leading-tight flex-1">
                  {sub.title}
                </h3>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 opacity-30 md:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
