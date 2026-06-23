import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Leaf, Flame, Sparkles, Gem, ArrowRight, CheckCircle2, ChevronRight, 
  HelpCircle, Sprout, Zap, Cpu, Activity, Search
} from 'lucide-react';
import SEO from '../components/SEO';

const mushroomCategories = [
  {
    title: "Most Popular Commercial",
    subtitle: "High-Volume Varieties (Widely Farmed in India & Worldwide)",
    icon: Flame,
    color: "text-orange-500",
    bg: "bg-orange-500/5",
    border: "border-orange-500/10",
    items: [
      { 
        slug: "white-button",
        name: "White Button Mushroom", 
        scientific: "Agaricus bisporus", 
        desc: "Most widely sold mushroom variety. Consistently high demand in domestic wholesale markets, hotels, and retail processing chains.", 
        cost: "₹15 Lakhs - ₹1.5 Crore Setup Cost",
        icon: Gem
      },
      { 
        slug: "oyster",
        name: "Oyster Mushroom", 
        scientific: "Pleurotus ostreatus", 
        desc: "Fastest ROI variety. Adapts beautifully to standard straw logs and requires near-zero high-tech automated temperature controls.", 
        cost: "₹2 Lakhs - ₹10 Lakhs Setup Cost",
        icon: Flame
      },
      { 
        slug: "milky-mushroom",
        name: "Milky Mushroom", 
        scientific: "Calocybe indica", 
        desc: "Perfect summer choice for hot Indian climates. Massive 5-15 day shelf life with outstanding robust transport durability.", 
        cost: "₹3 Lakhs - ₹12 Lakhs Setup Cost",
        icon: Leaf
      }
    ]
  },
  {
    title: "Premium & Exotic Gourmet",
    subtitle: "High Value Culinary Delicacies for Premium Hotels & Cuisines",
    icon: Sparkles,
    color: "text-purple-500",
    bg: "bg-purple-500/5",
    border: "border-purple-500/10",
    items: [
      { 
        slug: "shiitake",
        name: "Shiitake Mushroom", 
        scientific: "Lentinula edodes", 
        desc: "World's second most popular mushroom. Savory umami texture makes it a pristine choice for five-star dining & luxury vegan menus.", 
        cost: "₹8 Lakhs - ₹35 Lakhs Setup Cost",
        icon: Sparkles
      },
      { 
        slug: "lions-mane",
        name: "Lion’s Mane", 
        scientific: "Hericium erinaceus", 
        desc: "Delicate lobster-like gourmet flavor. Prided heavily by organic health stores for its outstanding neurotrophic brain boosting assets.", 
        cost: "₹6 Lakhs - ₹20 Lakhs Setup Cost",
        icon: Cpu
      }
    ]
  },
  {
    title: "Therapeutic & Medicinal",
    subtitle: "Immune-boosting Nootropic Fungi with Astounding Profit Margins",
    icon: Leaf,
    color: "text-green-500",
    bg: "bg-green-500/5",
    border: "border-green-500/10",
    items: [
      { 
        slug: "reishi",
        name: "Reishi (Ganoderma)", 
        scientific: "Ganoderma lucidum", 
        desc: "The ancient 'Mushroom of Immortality'. Heavily sought after by herbal wellness product manufacturers for therapeutic tea and powders.", 
        cost: "Premium Wellness Pricing Index",
        icon: Activity
      },
      { 
        slug: "cordyceps",
        name: "Cordyceps Militaris", 
        scientific: "Cordyceps militaris", 
        desc: "Lab-grade cordycepin booster. Demanded by athletic supplement brands worldwide, yielding exceptional long-term revenue.", 
        cost: "₹15,000 - ₹30,000 Dry Price/Kg",
        icon: Zap
      }
    ]
  },
  {
    title: "Regional & Economical",
    subtitle: "Rapid Harvesting Seasons Utilizing Native Straw Stocks",
    icon: Gem,
    color: "text-blue-400",
    bg: "bg-blue-400/5",
    border: "border-blue-400/10",
    items: [
      { 
        slug: "paddy-straw",
        name: "Paddy Straw Mushroom", 
        scientific: "Volvariella volvacea", 
        desc: "Extremely popular in Odisha, Bengal, and coastal zones. Features an outstanding 10-day crop turn cycle utilizing rice straws.", 
        cost: "₹2 Lakhs - ₹5 Lakhs Setup Cost",
        icon: Sprout
      }
    ]
  }
];

const MushroomTypesPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-transparent text-[var(--text-body)]">
      <SEO 
        title="Mushroom Types in India | Complete Commercial & Medicinal Fungi Setup Guide" 
        description="Discover all types of commercial mushroom setups in India – Button, Milky, Oyster, Shiitake, Reishi, Cordyceps. Read complete growing variables, spawn guidance, and project costs." 
      />

      {/* Header Banner */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.04),transparent_60%)]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6 relative z-10"
        >
          <div className="badge mx-auto mb-4">Complete Fungi Catalog</div>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight leading-none">
            Commercial <br />
            <span className="text-primary-start">Mushroom Varieties</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Exploring the diverse, profitable world of edible, exotic, and medicinal mushrooms customized for Indian regional climates and global markets. Select a model to read exhaustive setup guides.
          </p>
        </motion.div>
      </section>

      {/* Categories listing */}
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {mushroomCategories.map((category, idx) => (
          <section key={idx} className="space-y-10">
            
            {/* Category Header */}
            <div className={`inline-flex items-center gap-4 px-6 py-4 rounded-[2rem] ${category.bg} border ${category.border} ${category.color}`}>
              <category.icon size={24} />
              <div className="text-left">
                <h2 className="font-extrabold uppercase tracking-tight text-xl">{category.title}</h2>
                <p className="text-[10px] uppercase tracking-widest font-black opacity-70 mt-0.5">{category.subtitle}</p>
              </div>
            </div>

            {/* Varieties Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((m, i) => {
                const ItemIcon = m.icon;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -6 }}
                    className="glass group rounded-[2.5rem] border border-white/5 p-6 flex flex-col justify-between hover:border-emerald-500/20 transition-all text-left relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      {/* Geometric Icon Block replacing image completely */}
                      <div className="relative h-44 w-full rounded-[1.8rem] overflow-hidden bg-radial-to-br from-primary-start/15 via-transparent to-black/30 border border-white/5 flex flex-col items-center justify-center p-6 space-y-2">
                        <div className="w-16 h-16 rounded-full bg-primary-start/15 border border-primary-start/30 flex items-center justify-center text-primary-start shadow-[0_0_15px_rgba(124,58,237,0.15)] group-hover:scale-110 transition-transform duration-300">
                          <ItemIcon size={32} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center">
                          {m.scientific}
                        </span>
                        <div className="absolute top-3 right-3 badge scale-90">
                          {m.cost}
                        </div>
                      </div>

                      {/* Meta info */}
                      <div>
                        <h3 className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-primary-start transition-colors leading-tight">
                          {m.name}
                        </h3>
                        <p className="text-primary-start text-xs font-semibold italic opacity-85 mt-1">{m.scientific}</p>
                      </div>

                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
                        {m.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                      <Link 
                        to={`/mushroom-types/${m.slug}`}
                        className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-primary-start transition-colors group/link"
                      >
                        Exhaustive Guide <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      
                      <a 
                        href={`https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20high-quality%20spawn%20for%20${encodeURIComponent(m.name)}.%20Please%20share%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-black text-emerald-400 uppercase tracking-widest hover:underline"
                      >
                        Order Spawn
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Spawn call to action */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[3.5rem] border border-white/5 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.03),transparent_50%)]"></div>
          
          <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight relative z-10">Ready to choose your variety?</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base relative z-10 leading-relaxed font-semibold">
            We provide laboratory-tested pure premium mushroom spawn (spawn/seeds) to guarantee zero contamination and higher yields for all the commercial types listed above.
          </p>
          
          <div className="pt-4 flex flex-col md:flex-row justify-center gap-4 relative z-10">
            <Link 
              to="/spawn-seed" 
              className="gradient-bg px-10 py-4 rounded-xl text-white font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl block text-center"
            >
              Explore Spawn Supply
            </Link>
            <Link 
              to="/turnkey-projects" 
              className="btn bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-4 rounded-xl text-white font-black text-xs uppercase tracking-widest block text-center transition-all"
            >
              Get Turnkey Setup Quotes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MushroomTypesPage;

