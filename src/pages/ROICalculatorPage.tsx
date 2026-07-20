import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Sprout, 
  IndianRupee, 
  TrendingUp, 
  PieChart, 
  ArrowRight,
  Info,
  Calendar,
  Building2,
  Package
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const MUSHROOM_DATA = {
  button: {
    name: 'Button Mushroom',
    desc: 'Commercial AC Setup (Year-round)',
    setupCostPerSqFt: 1500, // ₹
    yieldPerSqFtPerCycle: 4.5, // kg
    cyclesPerYear: 4,
    salePricePerKg: 140, // ₹
    productionCostPerKg: 85, // ₹
    icon: Package,
    color: 'from-blue-500 to-indigo-500'
  },
  oyster: {
    name: 'Oyster Mushroom',
    desc: 'Low-cost Structured Shed',
    setupCostPerSqFt: 300, // ₹
    yieldPerSqFtPerCycle: 2.0, // kg
    cyclesPerYear: 6,
    salePricePerKg: 120, // ₹
    productionCostPerKg: 50, // ₹
    icon: Sprout,
    color: 'from-green-500 to-emerald-500'
  },
  milky: {
    name: 'Milky Mushroom',
    desc: 'Polyhouse/Shed Setup',
    setupCostPerSqFt: 400, // ₹
    yieldPerSqFtPerCycle: 2.5, // kg
    cyclesPerYear: 5,
    salePricePerKg: 160, // ₹
    productionCostPerKg: 60, // ₹
    icon: Building2,
    color: 'from-yellow-400 to-orange-500'
  }
};

export default function ROICalculatorPage() {
  const [area, setArea] = useState<number>(1000);
  const [selectedVariety, setSelectedVariety] = useState<keyof typeof MUSHROOM_DATA>('button');

  const calc = useMemo(() => {
    const data = MUSHROOM_DATA[selectedVariety];
    const floorArea = isNaN(area) || area < 100 ? 100 : area;
    
    // Capital Expenditure
    const totalSetupCost = floorArea * data.setupCostPerSqFt;
    
    // Operational metrics
    const annualYield = floorArea * data.yieldPerSqFtPerCycle * data.cyclesPerYear;
    const monthlyYield = annualYield / 12;
    
    // Financials
    const annualRevenue = annualYield * data.salePricePerKg;
    const annualOpCost = annualYield * data.productionCostPerKg;
    const annualProfit = annualRevenue - annualOpCost;
    
    const monthlyRevenue = annualRevenue / 12;
    const monthlyProfit = annualProfit / 12;
    const monthlyOpCost = annualOpCost / 12;

    const profitMargin = (annualProfit / annualRevenue) * 100;
    const roiMonths = totalSetupCost / monthlyProfit;

    return {
      totalSetupCost,
      annualYield,
      monthlyYield,
      annualRevenue,
      annualProfit,
      monthlyRevenue,
      monthlyProfit,
      monthlyOpCost,
      profitMargin,
      roiMonths
    };
  }, [area, selectedVariety]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(val);
  };

  const webmcpSchema = {
    "@context": "https://webmcp.dev",
    "@type": "WebMCP",
    "tool": {
      "name": "mushroom_farm_roi_calculator",
      "description": "Calculate commercial Return on Investment (ROI), total setup investment, monthly yield, and est. profit based on floor area and variety.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "area": { "type": "number", "minimum": 100, "maximum": 100000, "description": "Total farm floor cultivation area in square feet (e.g. 1000)" },
          "selectedVariety": { "type": "string", "enum": ["button", "oyster", "milky"], "description": "Mushroom variety type" }
        },
        "required": ["area", "selectedVariety"]
      }
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#070707] bg-slate-50 pt-24 pb-12 px-4 relative z-10 selection:bg-primary-start/30 selection:text-slate-900 dark:selection:text-white">
      <SEO 
        title="Mushroom Farm ROI Calculator | Commercial Agribusiness Planner"
        description="Calculate mushroom farm startup costs, monthly operating expenses, production yield, and profit recovery timeline in India."
        schemas={[webmcpSchema]}
      />
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30rem] h-[30rem] bg-green-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] dark:opacity-[0.04]"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 mb-4">
            <Calculator className="w-4 h-4 text-primary-start" />
            <span className="text-xs font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Financial Planner</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase">
            Mushroom Farm <span className="gradient-text">ROI Calculator</span>
          </h1>
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Estimate your setup costs, monthly revenue, and profit margins. Customize your projection based on farm size and mushroom variety.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="dark:bg-[#0A0A0A]/80 bg-white/80 backdrop-blur-xl border dark:border-white/10 border-black/10 rounded-[2rem] p-6 lg:p-8 shadow-xl"
            >
              <form 
                className="space-y-8"
                onSubmit={(e) => e.preventDefault()}
                data-webmcp-tool="mushroom_farm_roi_calculator"
                data-webmcp-description="Calculate commercial Return on Investment (ROI), total setup investment, monthly yield, and est. profit based on floor area and variety."
                data-mcp-tool="mushroom_farm_roi_calculator"
                data-mcp-description="Calculate commercial Return on Investment (ROI), total setup investment, monthly yield, and est. profit based on floor area and variety."
              >
                {/* Hidden input for select variety to map WebMCP schema property */}
                <input 
                  type="hidden" 
                  name="selectedVariety" 
                  value={selectedVariety} 
                  data-webmcp-property="selectedVariety"
                  data-webmcp-description="Mushroom variety type (button, oyster, milky)"
                  data-mcp-property="selectedVariety"
                  data-mcp-description="Mushroom variety type (button, oyster, milky)"
                />
                
                {/* Inputs */}
                <div>
                  <label id="farm-area-label" htmlFor="farm-area-range-input" className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-3 block">
                    Farm Floor Area (Sq. Ft.)
                  </label>
                  <div className="relative">
                    <input 
                      id="farm-area-number-input"
                      type="number" 
                      min="100"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full text-2xl md:text-3xl font-black dark:bg-black/60 bg-slate-100/60 border dark:border-white/10 border-black/10 rounded-2xl py-4 pl-6 pr-16 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                      data-webmcp-property="area"
                      data-webmcp-description="Total farm floor cultivation area in square feet (minimum 100)"
                      data-mcp-property="area"
                      data-mcp-description="Total farm floor cultivation area in square feet (minimum 100)"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold dark:text-slate-500 text-slate-400">sq ft</span>
                  </div>
                  <input 
                    id="farm-area-range-input"
                    aria-labelledby="farm-area-label"
                    aria-label="Farm Floor Area Range Slider"
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="100"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full mt-6 accent-primary-start"
                  />
                  <div className="flex justify-between text-[11px] font-bold dark:text-slate-500 text-slate-400 mt-2 uppercase">
                    <span>100 sq ft</span>
                    <span>10,000+ sq ft</span>
                  </div>
                </div>

                {/* Variety Selection */}
                <div>
                  <label className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-3 block">
                    Mushroom Variety
                  </label>
                  <div className="grid gap-3">
                    {(Object.keys(MUSHROOM_DATA) as Array<keyof typeof MUSHROOM_DATA>).map((key) => {
                      const v = MUSHROOM_DATA[key];
                      const Icon = v.icon;
                      const isSelected = selectedVariety === key;
                      
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedVariety(key)}
                          className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group ${
                            isSelected 
                              ? 'dark:bg-white/10 bg-black/5 dark:border-white/20 border-black/20 ring-1 ring-primary-start' 
                              : 'dark:bg-black/40 bg-slate-50/50 dark:border-white/5 border-black/5 hover:dark:bg-white/5 hover:bg-black/5'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${v.color} shadow-lg shadow-black/10`}>
                            <Icon className="text-white w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-bold dark:text-white text-slate-900">{v.name}</div>
                            <div className="text-xs dark:text-slate-400 text-slate-500 mt-0.5">{v.desc}</div>
                          </div>
                          {isSelected && (
                            <div className="ml-auto w-4 h-4 rounded-full bg-primary-start animate-pulse" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Assumptions Box */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="dark:bg-[#0A0A0A]/80 bg-white/80 backdrop-blur-xl border dark:border-white/10 border-black/10 rounded-[2rem] p-6 shadow-xl"
            >
              <h3 className="text-xs font-bold dark:text-slate-300 text-slate-700 uppercase tracking-widest flex items-center gap-2 mb-4">
                <Info size={14} className="text-primary-start" /> Model Assumptions
              </h3>
              <ul className="space-y-3 text-xs dark:text-slate-400 text-slate-600">
                <li className="flex justify-between items-center border-b dark:border-white/5 border-black/5 pb-2">
                  <span>Sale Price (avg)</span>
                  <span className="font-bold dark:text-white text-slate-900">₹{MUSHROOM_DATA[selectedVariety].salePricePerKg}/kg</span>
                </li>
                <li className="flex justify-between items-center border-b dark:border-white/5 border-black/5 pb-2">
                  <span>Production Cost (avg)</span>
                  <span className="font-bold dark:text-white text-slate-900">₹{MUSHROOM_DATA[selectedVariety].productionCostPerKg}/kg</span>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span>Harvest Cycles</span>
                  <span className="font-bold dark:text-white text-slate-900">{MUSHROOM_DATA[selectedVariety].cyclesPerYear}/year</span>
                </li>
              </ul>
              <div className="mt-4 p-3 rounded-xl dark:bg-yellow-500/10 bg-yellow-500/20 border border-yellow-500/20 text-[10px] sm:text-[11px] text-yellow-600 dark:text-yellow-400 leading-relaxed">
                Estimation assumes standard multi-tier vertical rack utilization and optimal climate conditions. Real-world results may vary based on local operational efficiency.
              </div>
            </motion.div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={selectedVariety + area}
              className="relative p-[1px] rounded-[2.5rem] overflow-hidden shadow-2xl h-full flex flex-col group"
            >
              {/* Premium Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-green-500 opacity-30 group-hover:opacity-50 transition-opacity duration-700 ease-in-out"></div>
              
              <div className="relative dark:bg-[#0A0A0A]/95 bg-white backdrop-blur-2xl rounded-[2.5rem] p-6 lg:p-10 h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 opacity-80"></div>
                
                <div className="flex-1">
                  {/* Setup Cost Header */}
                  <div className="mb-10 text-center">
                    <div className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-2 mt-4">Estimated Total Investment</div>
                    <div className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-indigo-500 to-green-500 bg-clip-text text-transparent">
                      {formatCurrency(calc.totalSetupCost)}
                    </div>
                    <div className="text-xs font-semibold dark:text-slate-500 text-slate-400 mt-2">
                       (₹{MUSHROOM_DATA[selectedVariety].setupCostPerSqFt} per sq.ft setup cost)
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    
                    {/* Monthly Profit */}
                    <div className="dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-2xl p-5 hover:dark:bg-white/[0.05] hover:bg-black/[0.05] transition-colors relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-24 h-24 bg-green-500/10 rounded-full blur-[40px]"></div>
                      <div className="flex items-start gap-3 mb-2 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
                          <TrendingUp size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest">Est. Monthly Profit</div>
                          <div className="text-2xl font-black dark:text-white text-slate-900 mt-1">{formatCurrency(calc.monthlyProfit)}</div>
                        </div>
                      </div>
                    </div>

                    {/* Monthly Revenue */}
                    <div className="dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-2xl p-5 hover:dark:bg-white/[0.05] hover:bg-black/[0.05] transition-colors relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/10 rounded-full blur-[40px]"></div>
                      <div className="flex items-start gap-3 mb-2 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <IndianRupee size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest">Est. Monthly Revenue</div>
                          <div className="text-xl font-bold dark:text-slate-300 text-slate-700 mt-1">{formatCurrency(calc.monthlyRevenue)}</div>
                        </div>
                      </div>
                    </div>

                    {/* Monthly Op Cost */}
                    <div className="dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-2xl p-5 hover:dark:bg-white/[0.05] hover:bg-black/[0.05] transition-colors">
                      <div className="text-[10px] font-bold dark:text-slate-500 text-slate-400 uppercase tracking-widest mb-1">Monthly Op. Cost</div>
                      <div className="text-lg font-bold dark:text-white text-slate-900">{formatCurrency(calc.monthlyOpCost)}</div>
                    </div>

                    {/* Monthly Yield */}
                    <div className="dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-2xl p-5 hover:dark:bg-white/[0.05] hover:bg-black/[0.05] transition-colors">
                      <div className="text-[10px] font-bold dark:text-slate-500 text-slate-400 uppercase tracking-widest mb-1">Monthly Yield</div>
                      <div className="text-lg font-bold dark:text-white text-slate-900">{formatNumber(calc.monthlyYield)} kg <span className="text-sm font-medium dark:text-slate-500 text-slate-400">avg</span></div>
                    </div>

                  </div>
                  
                  {/* Performance Indicators */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-6 p-4 rounded-2xl dark:bg-black/50 bg-slate-100/50 border dark:border-white/5 border-black/5">
                    <div className="flex-1 flex items-center justify-center gap-3 border-b sm:border-b-0 sm:border-r border-black/10 dark:border-white/10 pb-4 sm:pb-0">
                      <PieChart className="text-indigo-400" size={24} />
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest dark:text-slate-400 text-slate-500 mb-0.5">Profit Margin</div>
                        <div className="text-lg font-black dark:text-white text-slate-900">{calc.profitMargin.toFixed(1)}%</div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-3">
                      <Calendar className="text-green-400" size={24} />
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest dark:text-slate-400 text-slate-500 mb-0.5">Capital Recovery</div>
                        <div className="text-lg font-black dark:text-white text-slate-900">{Math.ceil(calc.roiMonths)} Months</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-green-500 opacity-20 blur-xl"></div>
                    <Link 
                      to="/training-checkout"
                      className="relative w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] text-[15px] text-white font-black tracking-wide py-4 sm:py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 text-center uppercase"
                    >
                      Learn To Build This Farm - Start Training <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
