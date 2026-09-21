'use client';

import React, { useState } from 'react';
import { 
  Tractor, 
  FlaskConical, 
  Wheat, 
  PackagePlus, 
  Warehouse, 
  Settings2, 
  Snowflake, 
  Boxes, 
  Flame, 
  Cpu, 
  Truck, 
  ShieldCheck, 
  Gauge, 
  Layers,
  ChevronDown,
  ChevronRight,
  Search,
  X,
  Zap,
  Info,
  ChevronLeft,
  Sliders
} from 'lucide-react';
import { FARM_EQUIPMENT_DATA, EquipmentCategory, FarmMachine } from '../../data/farmEquipment';
import { useFarmStore } from '../../store/useFarmStore';

// Map icon string to Lucide component
const iconMap: Record<string, React.ReactNode> = {
  Tractor: <Tractor className="w-4 h-4 text-amber-500" />,
  FlaskConical: <FlaskConical className="w-4 h-4 text-purple-500" />,
  Wheat: <Wheat className="w-4 h-4 text-emerald-500" />,
  PackagePlus: <PackagePlus className="w-4 h-4 text-blue-500" />,
  Warehouse: <Warehouse className="w-4 h-4 text-cyan-500" />,
  Settings2: <Settings2 className="w-4 h-4 text-indigo-500" />,
  Snowflake: <Snowflake className="w-4 h-4 text-teal-400" />,
  Boxes: <Boxes className="w-4 h-4 text-orange-400" />,
  Flame: <Flame className="w-4 h-4 text-red-500" />,
  Cpu: <Cpu className="w-4 h-4 text-violet-400" />,
  Truck: <Truck className="w-4 h-4 text-yellow-500" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-green-400" />,
  Gauge: <Gauge className="w-4 h-4 text-rose-500" />,
  Layers: <Layers className="w-4 h-4 text-blue-400" />,
};

// Target camera positions for categories
const categoryPositions: Record<string, [number, number, number]> = {
  'compost-preparation': [-16, 2, 18],
  'spawn-laboratory': [12, 3, -8],
  'substrate-preparation': [0, 2, -7],
  'bag-filling-production': [0, 2, -7],
  'commercial-growing-room': [-12, 3, 7],
  'button-mushroom-specialized': [-12, 3, -7],
  'cold-chain': [6, 3, 7],
  'mushroom-packaging': [0, 2, -7],
  'dry-mushroom-processing': [4, 2, -5],
  'electrical-automation': [0, 2, 0],
  'material-handling': [8, 1, 0],
  'hygiene-sanitation': [12, 2, -8],
  'boiler-steam-system': [16, 3, 7],
  'turnkey-commercial-farm': [0, 5, 0],
};

export function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategory, setOpenCategory] = useState<string | null>('commercial-growing-room');

  const selectedCategory = useFarmStore((state) => state.selectedCategory);
  const setSelectedCategory = useFarmStore((state) => state.setSelectedCategory);
  const selectedMachine = useFarmStore((state) => state.selectedMachine);
  const setSelectedMachine = useFarmStore((state) => state.setSelectedMachine);
  const setCameraTarget = useFarmStore((state) => state.setCameraTarget);
  const sidebarOpen = useFarmStore((state) => state.sidebarOpen);
  const toggleSidebar = useFarmStore((state) => state.toggleSidebar);

  // Filter categories and machinery based on search
  const filteredCategories = FARM_EQUIPMENT_DATA.map((cat) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return cat;

    const matchesCat = cat.name.toLowerCase().includes(q) || cat.subtitle.toLowerCase().includes(q);
    const matchedMachinery = cat.machinery.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.model.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q)
    );

    if (matchesCat || matchedMachinery.length > 0) {
      return {
        ...cat,
        machinery: matchedMachinery.length > 0 ? matchedMachinery : cat.machinery,
      };
    }
    return null;
  }).filter(Boolean) as EquipmentCategory[];

  const handleCategoryToggle = (slug: string) => {
    const nextState = openCategory === slug ? null : slug;
    setOpenCategory(nextState);
    setSelectedCategory(slug);

    const pos = categoryPositions[slug];
    if (pos) {
      setCameraTarget(pos);
    }
  };

  const handleMachineSelect = (machine: FarmMachine, catSlug: string) => {
    setSelectedMachine(machine);
    setSelectedCategory(catSlug);

    const pos = categoryPositions[catSlug];
    if (pos) {
      setCameraTarget(pos);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button when Closed */}
      {!sidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed left-4 top-20 z-40 p-3 rounded-2xl bg-slate-900/90 text-white border border-slate-700 shadow-xl backdrop-blur-md hover:bg-slate-800 transition-all flex items-center gap-2"
          aria-label="Open Farm Machinery Menu"
        >
          <Sliders className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold">Equipment Menu (14 Depts)</span>
        </button>
      )}

      {/* Main Sidebar Container */}
      <aside
        className={`fixed top-16 bottom-4 left-4 z-30 w-80 sm:w-96 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-slate-800 shadow-2xl flex flex-col transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-[110%] opacity-0 pointer-events-none'
        }`}
      >
        {/* Header with Search & Collapse */}
        <div className="p-4 border-b border-slate-800/80 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Warehouse className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white tracking-wide">Farm Departments</h2>
                <p className="text-[11px] text-slate-400">14 Commercial Machinery Units</p>
              </div>
            </div>

            <button
              onClick={toggleSidebar}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Collapse Sidebar"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search machinery, models, specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Accordion List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar">
          {filteredCategories.map((category) => {
            const isOpen = openCategory === category.slug;
            const isCategoryActive = selectedCategory === category.slug;

            return (
              <div
                key={category.slug}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-blue-500/50 shadow-md'
                    : isCategoryActive
                    ? 'bg-slate-900/60 border-slate-700'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleCategoryToggle(category.slug)}
                  className="w-full p-3 flex items-start gap-2.5 text-left cursor-pointer transition-colors"
                >
                  <div className="mt-0.5 p-1.5 rounded-lg bg-slate-800 border border-slate-700/60 shrink-0">
                    {iconMap[category.iconName] || <Layers className="w-4 h-4 text-blue-400" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-white truncate">{category.name}</span>
                      {isOpen ? (
                        <ChevronDown className="w-4 h-4 text-blue-400 shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">{category.subtitle}</p>
                  </div>
                </button>

                {/* Machinery Sub-Items */}
                {isOpen && (
                  <div className="px-3 pb-3 pt-1 border-t border-slate-800/80 space-y-1.5 bg-slate-950/40">
                    {category.machinery.map((machine) => {
                      const isSelected = selectedMachine?.id === machine.id;

                      return (
                        <button
                          key={machine.id}
                          onClick={() => handleMachineSelect(machine, category.slug)}
                          className={`w-full text-left p-2 rounded-lg text-[11px] transition-all flex items-start justify-between gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600 text-white font-semibold shadow-sm'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="truncate font-medium">{machine.name}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span
                                className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                                  isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-800 text-slate-400'
                                }`}
                              >
                                {machine.model}
                              </span>
                              <span className={`text-[9px] truncate ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                                {machine.capacity}
                              </span>
                            </div>
                          </div>

                          <Info className={`w-3.5 h-3.5 shrink-0 mt-1 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-xs">
              No equipment found matching "{searchQuery}".
            </div>
          )}
        </div>

        {/* Footer Quick Action */}
        <div className="p-3 border-t border-slate-800 bg-slate-900/60 rounded-b-2xl flex items-center justify-between text-[11px]">
          <span className="text-slate-400">Click any machine to inspect specs</span>
          <a
            href="/book-consultant"
            className="text-blue-400 hover:text-blue-300 font-bold hover:underline"
          >
            Turnkey Quote →
          </a>
        </div>
      </aside>
    </>
  );
}
