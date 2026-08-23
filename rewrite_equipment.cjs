const fs = require('fs');

const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Helmet>
        <title>Mushroom Farming Equipment Directory | Organic Mushrooms Farm</title>
        <meta name="description" content="Complete directory for mushroom farming equipment, machinery, safety material, lab tools, and climate control systems." />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-24 mt-16">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-start/10 text-primary-start px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Master Directory
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Equipment & Machinery
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore our comprehensive directory of commercial mushroom farming equipment categorized by scale and process requirements.
          </p>
        </div>

        {/* 3 Main Scale-wise Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          {mainCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.route}
              className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-start/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700/50 text-primary-start rounded-xl flex items-center justify-center mb-6">
                {cat.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{cat.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{cat.desc}</p>
              <div className="flex items-center text-primary-start font-semibold text-sm group-hover:gap-2 transition-all">
                View Full List <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* 18 Specific Process-wise Grid */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Process-Specific Directories
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Browse detailed equipment lists by department or operational process.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subCategories.map((sub, idx) => (
              <Link 
                key={idx} 
                to={sub.route}
                className="group flex flex-col bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:border-primary-start/50"
              >
                <div className="text-slate-400 group-hover:text-primary-start transition-colors mb-4">
                  {sub.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary-start transition-colors leading-tight">
                  {sub.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/EquipmentCompleteListPage.tsx', content, 'utf8');
console.log("EquipmentCompleteListPage updated");
