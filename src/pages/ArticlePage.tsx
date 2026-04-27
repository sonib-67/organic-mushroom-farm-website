import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import SEO from '../components/SEO';
import ReactMarkdown from 'react-markdown';

const dummyArticles: Record<string, any> = {
  "1": {
    title: "How to Start Mushroom Farming at Home",
    date: "April 15, 2026",
    category: "Educational",
    content: `
Mushroom farming is a highly lucrative and satisfying endeavor, and the best part is that you can start right from your home, even with limited space. Here are the steps to growing your first batch.

### 1. Choose Your Preferred Mushroom
For beginners, Oyster mushrooms are the easiest variant to grow. They are highly resilient to fluctuations in temperature and colonize the substrate aggressively, which prevents contamination.

### 2. Prepare the Substrate
Mushrooms grow on a medium known as "substrate." Popular choices include wheat straw, paddy straw, and sawdust. You must sterilize or pasteurize this material using hot water or steam to eliminate mold spores and bacteria before planting your spawn.

### 3. Inoculation
Mix your high-quality spawn (seeds) into the cooled substrate and pack it into polybags. Ensure small air holes are made for gas exchange. 

### 4. Incubation & Fruiting
Place the bags in a dark, warm space (~24-26°C) for 15-20 days until the mycelium colonizes the entire bag, turning it white. After this, move the bags to a slightly cooler environment with fresh air and indirect light, maintaining high humidity. Pins will appear in a few days, growing into full mushrooms soon after.

Start small, maintain cleanliness, and gradually scale up your home operation.
    `
  },
  "2": {
    title: "Top 5 Mistakes New Mushroom Farmers Make",
    date: "April 10, 2026",
    category: "Educational",
    content: `
Many aspirational agripreneurs jump into mushroom farming without proper research. Avoid these 5 common mistakes that lead to early crop failure.

### 1. Inadequate Sterilization
Contamination is the \#1 enemy of mycelium. Failing to properly pasteurize the substrate or using unsterilized tools during inoculation will lead to green mold (Trichoderma) overriding your mushrooms.

### 2. Poor Climate Control
Mushrooms require specific temperature and humidity parameters depending on their growth stage. Relying solely on natural weather instead of setting up basic humidifiers and exhaust fans is a recipe for disaster.

### 3. Buying Cheap Spawn
Your entire crop depends on the genetics of the seed. Purchasing low-quality, old, or weak spawn will result in slow colonization and miserable yields. Always buy fresh, lab-grade first-generation spawn.

### 4. Over-Watering
While mushrooms need high humidity (80-90%), directly spraying water onto pinning mushrooms or keeping the substrate soggy can lead to bacterial blotch and rot.

### 5. Lack of Ventilation
Growing mushrooms emit high levels of Carbon Dioxide (CO2). Without proper fresh air exchange, mushrooms develop long, spindly stems and small caps, rendering them unsellable in commercial markets.
    `
  },
  "default": {
    title: "Fungi and Agriculture: A Modern Perspective",
    date: "January 1, 2026",
    category: "General",
    content: `
Mushroom farming is rapidly evolving in India. Technological advancements in climate control, paired with a growing awareness of the medicinal benefits of fungi, are pushing the boundaries of traditional agriculture. 

As we look toward the future, integrating IoT devices for humidity and temperature management, leveraging social media for D2C sales, and exploring premium exotic strains will be the key differentiators for the next generation of successful mushroom farmers.
    `
  }
};

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = (id && dummyArticles[id]) ? dummyArticles[id] : dummyArticles["default"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title={`${article.title} | Blog`} 
        description={article.content.substring(0, 150) + "..."} 
      />

      <section className="section-padding pt-0 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-14 rounded-[3rem] border border-white/5"
        >
          <div className="badge mb-6">{article.category}</div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-12 border-b border-white/10 pb-8">
            <span className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <Calendar size={16} /> {article.date}
            </span>
            <span className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <User size={16} /> Organic Mushroom Farm Team
            </span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ArticlePage;
