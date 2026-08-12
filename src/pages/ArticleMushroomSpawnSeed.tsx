import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const ArticleMushroomSpawnSeed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <SEO 
        title="The Secret to Bountiful Organic Mushrooms: Right Spawn"
        description="Learn why quality mushroom spawn is the foundation of a successful harvest. Fast colonization, maximum yields, and where to buy the best organic spawn."
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm text-primary-start font-bold uppercase tracking-widest mb-6">
            <Sprout size={18} />
            <span>Spawn & Seeds</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
            The Secret to Bountiful Organic Mushrooms: <span className="gradient-text">It All Starts with the Right Spawn</span>
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
            If you are stepping into the rewarding world of organic mushroom farming, there is one crucial element you simply cannot compromise on: <strong>Mushroom Spawn</strong>.
          </p>
          <p>
            Often referred to as the "seed" of the mushroom, spawn is the absolute foundation of your crop. Whether you are a weekend hobbyist or scaling up a commercial farm, your harvest will only ever be as good as the material you start with.
          </p>
          <p>
            Here is everything you need to know about setting your farm up for success!
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            What Exactly is Mushroom Spawn?
          </h2>
          <p>
            Unlike plants, mushrooms don't grow from traditional seeds. Instead, they grow from spores, which are then cultivated into mycelium (the root-like system of a fungus).
          </p>
          <p>
            Spawn is simply a carrier—usually sterilized grain, sawdust, or wooden plugs—that has been fully colonized by this mycelium. When you introduce this spawn to your growing medium (substrate), it explodes into life, eventually fruiting into the delicious organic mushrooms you love.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Why Quality Spawn is a Game-Changer
          </h2>
          <p>
            Sourcing your mushroom seed from a reliable, organic provider isn't just an option; it's a necessity. Here is why premium spawn makes all the difference:
          </p>
          <ul className="space-y-4 my-6">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Faster Colonization:</strong>
                Vigorous, healthy mycelium spreads rapidly through your substrate, beating out competing molds and bacteria before they can take hold.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Maximum Yields:</strong>
                Top-tier spawn carries superior genetics, translating to more frequent "flushes" and significantly larger mushrooms.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Guaranteed Consistency:</strong>
                High-quality spawn ensures you get the exact strain you paid for, behaving predictably in your grow room every single time.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Tips for Choosing the Right "Seed"
          </h2>
          <p>When browsing for spawn, always look for:</p>
          <ul className="space-y-4 my-6">
            <li className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-primary-start shrink-0 mt-2"></div>
              <div>
                <strong className="dark:text-white text-slate-900">Freshness:</strong> The mycelium should look bright white and healthy.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-primary-start shrink-0 mt-2"></div>
              <div>
                <strong className="dark:text-white text-slate-900">Purity:</strong> Avoid bags with green, pink, or black patches, as this indicates contamination.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-primary-start shrink-0 mt-2"></div>
              <div>
                <strong className="dark:text-white text-slate-900">Organic Origins:</strong> To grow truly organic mushrooms, your starting culture must also be cultivated in clean, chemical-free environments.
              </div>
            </li>
          </ul>

          <div className="glass p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 text-center mt-12 bg-primary-start/5">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Ready to Grow?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              The journey to harvesting perfect, chemical-free mushrooms begins with a single, high-quality bag of spawn. Don't leave your yield to chance! Start your organic farming journey today with premium, fully-colonized mushroom spawn at <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm</strong>. Happy growing! 🍄
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:9203544140" className="btn-primary px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Phone size={18} /> Call / WhatsApp
              </a>
              <Link to="/contact" className="btn-outline px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Mail size={18} /> Contact Us Online
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};

export default ArticleMushroomSpawnSeed;
