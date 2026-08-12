import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const ArticleMushroomBusinessPlanIndia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <SEO 
        title="Starting a Profitable Mushroom Farming Business in India: Where to Begin?"
        description="Discover why mushroom farming is a top business opportunity in India. Learn about space utilization, fast growth cycles, and how to build a scalable business plan."
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm text-primary-start font-bold uppercase tracking-widest mb-6">
            <Sprout size={18} />
            <span>Business Plan</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
            Starting a Profitable Mushroom Farming Business in India: <span className="gradient-text">Where to Begin?</span>
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
            Agriculture is changing, and one of the most exciting opportunities in India right now doesn't require acres of expensive land. Mushroom farming is rapidly becoming a top choice for modern entrepreneurs, agri-startups, and traditional farmers alike.
          </p>
          <p>
            With a massive shift toward healthy eating and plant-based diets across the country, the demand for fresh, organic mushrooms is skyrocketing. But why is it such a smart business move?
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Maximum Profit in Minimum Space
          </h2>
          <p>
            Unlike traditional crops, mushroom cultivation happens indoors. By utilizing vertical farming techniques (growing on racks in dark rooms), you can produce massive yields in a fraction of the space. Whether you are growing Oyster, Milky, or Button mushrooms, the growth cycles are incredibly fast. This means you get a much quicker return on your investment compared to standard seasonal farming.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            The Secret to Success: A Solid Blueprint
          </h2>
          <p>
            While the potential is huge, jumping in without a strategy is the biggest mistake new growers make. To build a scalable and sustainable agri-business, you need a clear, well-researched mushroom farming business plan tailored for the Indian market.
          </p>
          <p>
            A proper roadmap helps you navigate the most crucial steps:
          </p>
          
          <ul className="space-y-4 my-6">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Infrastructure & Budgeting:</strong>
                Knowing exactly what to spend on temperature-controlled sheds, humidity systems, and shelving.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Raw Materials:</strong>
                Sourcing high-quality organic spawn (mushroom seeds) and the right agricultural waste (like wheat or paddy straw) for your substrate.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Marketing Strategy:</strong>
                Deciding whether your highest profit margins will come from local mandis, retail supermarkets, or direct-to-restaurant sales.
              </div>
            </li>
          </ul>
          
          <p className="font-medium text-lg mt-6">
            Success in this industry is about blending good agricultural practices with smart business execution.
          </p>

          <div className="glass p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 text-center mt-12 bg-primary-start/5">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Ready to start your mushroom agribusiness?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Get expert guidance, professional training, and high-quality spawn from <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm</strong> to launch your profitable farm today.
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

export default ArticleMushroomBusinessPlanIndia;
