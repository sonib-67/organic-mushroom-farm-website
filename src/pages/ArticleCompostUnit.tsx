import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Factory, Phone, Mail, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const ArticleCompostUnit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <SEO 
        title="The Heart of Button Mushroom Farming: Science of a Compost Unit"
        description="Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business."
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm text-primary-start font-bold uppercase tracking-widest mb-6">
            <Factory size={18} />
            <span>Farm Infrastructure</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
            The Heart of Button Mushroom Farming: <span className="gradient-text">The Science of a Commercial Compost Unit</span> 🏭
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
            If you are planning to enter the highly lucrative Button Mushroom market, there is one undeniable truth you must accept early on: <Link to="/services/button-mushroom" className="text-primary-start hover:underline font-semibold">Button mushrooms</Link> do not grow on plain soil, and they certainly do not grow on raw agricultural waste.
          </p>
          <p>
            They require a highly specific, bio-chemically degraded, and nutrient-dense food source. The secret behind every massive, high-yielding commercial harvest isn't just the climate-controlled rooms—it is the quality of the substrate produced in a Mushroom Compost Unit.
          </p>
          <p>
            Here is why understanding and investing in proper compost infrastructure is the most critical step for your agri-business.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Farming's Most Complex Recipe
          </h2>
          <p>
            Unlike <Link to="/services/oyster-mushroom" className="text-primary-start hover:underline font-semibold">Oyster mushrooms</Link> that easily colonize raw straw, Button mushrooms (<em>Agaricus bisporus</em>) are secondary decomposers. This means the raw materials (like wheat straw, chicken manure, gypsum, and urea) must be broken down by other microorganisms first before the mushroom mycelium can feed on it.
          </p>
          <p>
            This transformation happens inside a dedicated compost yard and requires absolute precision across two distinct phases:
          </p>
          
          <ul className="space-y-6 my-8">
            <li className="flex gap-4 items-start bg-transparent dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={24} />
              <div>
                <strong className="text-xl dark:text-white text-slate-900 block mb-2">Phase-I (Outdoor/Bunker Composting):</strong>
                Raw ingredients are mixed, wetted, and aerated in large windrows or aerated bunkers. Microorganisms break down the raw materials, generating intense heat (up to 75°C to 80°C) which naturally cooks the compost and builds essential nutrients.
              </div>
            </li>
            <li className="flex gap-4 items-start bg-transparent dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={24} />
              <div>
                <strong className="text-xl dark:text-white text-slate-900 block mb-2">Phase-II (Pasteurization & Conditioning):</strong>
                This is where the magic happens. The compost is moved into sealed, insulated tunnels equipped with massive centrifugal blowers and steam. Here, the compost is pasteurized to kill off harmful nematodes, competitor molds, and insects, while clearing out toxic ammonia gases that would otherwise kill your <Link to="/spawn-seeds" className="text-primary-start hover:underline font-semibold">mushroom spawn</Link>.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Why You Cannot Cut Corners
          </h2>
          <p>
            A poorly designed compost unit is the number one reason commercial button mushroom farms fail. If your Phase-II pasteurization is flawed, your bags will fall victim to devastating diseases like green mold or wet bubble. If your Phase-I mixing is incorrect, your mushrooms simply won't have the nutrients they need to fruit heavily, leading to weak, unprofitable yields.
          </p>
          <p>
            Having a scientifically engineered compost yard with proper concrete grading, aerated bunkers, and precision-controlled pasteurization tunnels ensures that every single batch of substrate you produce is hygienic, nutrient-packed, and ready for explosive growth.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Master the Foundation of Your Farm
          </h2>
          <p>
            Whether you are looking to set up your own commercial composting infrastructure or want to understand the exact technical machinery required for Phase-I and Phase-II processes, getting it right from day one is non-negotiable.
          </p>

          <div className="glass p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 text-center mt-12 bg-primary-start/5">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Build Your Infrastructure Right</h2>
            <p className="dark:text-slate-300 text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Skip the expensive mistakes. Get precise blueprints and <Link to="/services/turnkey-setup" className="text-primary-start hover:underline font-semibold">turnkey commercial setups</Link> from <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm</strong> today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:9203544140" className="btn-primary px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Phone size={18} /> Call / WhatsApp
              </a>
              <Link to="/contact" className="btn-outline px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Mail size={18} /> Book a Consultation
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};

export default ArticleCompostUnit;
