import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Flame, Sparkles, Gem, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const mushroomCategories = [
  {
    title: "Most Popular",
    subtitle: "Commercial Varieties (Widely Farmed in India)",
    icon: Flame,
    color: "text-orange-500",
    bg: "bg-orange-500/5",
    border: "border-orange-500/10",
    items: [
      { name: "White Button Mushroom", scientific: "Agaricus bisporus", desc: "Sabse zyada bikne wala mushroom. High demand in hotels & households.", image: "https://images.unsplash.com/photo-1594315520265-6677f54c9354?auto=format&fit=crop&q=80&w=400" },
      { name: "Milky Mushroom", scientific: "Calocybe indica", desc: "Garmiyon ke liye best. Robust shelf life and heat resistant.", image: "https://images.unsplash.com/photo-1588636142475-a32433ef7e9b?auto=format&fit=crop&q=80&w=400" },
      { name: "Paddy Straw Mushroom", scientific: "Volvariella volvacea", desc: "Rice straw par ugne wala, popular in Odisha and coastal regions.", image: "https://images.unsplash.com/photo-1610450943039-50c19ec8074d?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    title: "Premium & Medicinal",
    subtitle: "High Value Health Boosters",
    icon: Sparkles,
    color: "text-purple-500",
    bg: "bg-purple-500/5",
    border: "border-purple-500/10",
    items: [
      { name: "Lion’s Mane", scientific: "Hericium erinaceus", desc: "Brain health and memory boosting. High exotic market value.", image: "https://images.unsplash.com/photo-1628154109438-e6b360706859?auto=format&fit=crop&q=80&w=400" },
      { name: "Shiitake Mushroom", scientific: "Lentinula edodes", desc: "Rich in immunity and savory umami taste. Preferred for luxury dining.", image: "https://images.unsplash.com/photo-1601628033621-0a68d76a75f1?auto=format&fit=crop&q=80&w=400" },
      { name: "Reishi Mushroom", scientific: "Ganoderma lucidum", desc: "The 'Mushroom of Immortality'. Used for stress and immunity.", image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400" },
      { name: "Cordyceps Militaris", scientific: "Cordyceps", desc: "Energy boosting fungi. Often sold as expensive powder or dry form.", image: "https://images.unsplash.com/photo-1635338148386-8d59fe18804a?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    title: "Gourmet & Exotic",
    subtitle: "Preferred for Fine Dining & Hotels",
    icon: Leaf,
    color: "text-green-500",
    bg: "bg-green-500/5",
    border: "border-green-500/10",
    items: [
      { name: "Enoki Mushroom", scientific: "Flammulina velutipes", desc: "Thin, long stalks used predominantly in soups and salads.", image: "https://images.unsplash.com/photo-1616429532824-780c7d41334c?auto=format&fit=crop&q=80&w=400" },
      { name: "Shimeji (Beech)", scientific: "Hypsizygus tessellatus", desc: "Grows in clusters, nutty flavor with firm texture.", image: "https://images.unsplash.com/photo-1541604940562-b13c7d6118f6?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    title: "Wild & Rare",
    subtitle: "Expensive & Seasonally Collected",
    icon: Gem,
    color: "text-blue-400",
    bg: "bg-blue-400/5",
    border: "border-blue-400/10",
    items: [
      { name: "Morel Mushroom (Guchhi)", scientific: "Morchella", desc: "Extremely rare and expensive. Found in the Himalayas.", image: "https://images.unsplash.com/photo-1620067675713-fbce88022b7c?auto=format&fit=crop&q=80&w=400" },
      { name: "Black Truffle", scientific: "Tuber melanosporum", desc: "Culinary gold. Grown in specialized orchards.", image: "https://images.unsplash.com/photo-1594968973184-9140fa307f7f?auto=format&fit=crop&q=80&w=400" }
    ]
  }
];

const MushroomTypesPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Mushroom Types in India | Commercial & Medicinal Fungi" 
        description="Discover the wide variety of mushrooms grown in India – from commercial Button and Milky mushrooms to medicinal Lion's Mane and rare Black Truffles." 
      />

      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6">Varieties Portfolio</div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            The <span className="gradient-text">Fungi Kingdom</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Exploring the diverse world of edible and medicinal mushrooms adaptable to Indian climates.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {mushroomCategories.map((category, idx) => (
          <section key={idx}>
            <div className={`inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-2xl ${category.bg} border ${category.border} ${category.color}`}>
              <category.icon size={20} />
              <div className="text-left">
                <h2 className="font-black uppercase tracking-tighter text-xl">{category.title}</h2>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">{category.subtitle}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((m, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass group rounded-[2.5rem] border border-white/5 bg-white/2 p-8"
                >
                  <div className="mb-6">
                    <h4 className="text-white font-bold text-xl uppercase tracking-tighter mb-1">{m.name}</h4>
                    <p className="text-primary-start text-xs font-bold italic opacity-80">{m.scientific}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {m.desc}
                    </p>
                    <a href="https://wa.me/919203544140" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-primary-start transition-colors">
                      Inquire Seeds <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[3.5rem] border border-white/5 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to choose your variety?</h3>
            <p className="text-slate-400 mb-8">We provide high-quality lab-grown spawn (seeds) for all the commercial varieties mentioned above.</p>
            <a href="/services/spawn-supply" className="gradient-bg px-10 py-4 rounded-2xl text-white font-bold inline-block hover:scale-105 transition-transform shadow-xl">
                Explore Spawn Supply
            </a>
        </div>
      </section>
    </div>
  );
};

export default MushroomTypesPage;
