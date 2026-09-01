'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';

import { Sprout, Phone, Mail, CheckCircle2 } from 'lucide-react';
import SEO from '@/src/components/SEO';

const ArticleSpawnSeeds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <SEO 
        title="The Foundation of Every Great Harvest: Premium Organic Mushroom Spawn"
        description="Discover why premium organic mushroom spawn is non-negotiable for successful farming. Learn about genetics, contamination, and high-yield seeds."
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm text-primary-start font-bold uppercase tracking-widest mb-6">
            <Sprout size={18} />
            <span>Mushroom Spawn</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
            The Foundation of Every Great Harvest: <span className="gradient-text">Premium Organic Mushroom Spawn</span>
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
            Every successful mushroom farm, whether a small backyard hobby or a large-scale commercial setup, starts with one critical decision: the quality of your "seed." In the world of fungi, this seed is known as <strong>mushroom spawn</strong>, and it absolutely dictates the success, yield, and health of your entire crop.
          </p>
          <p>
            Using weak or contaminated spawn is the fastest way to lose time, money, and effort in organic mushroom farming. Here is why starting with premium, lab-quality spawn is non-negotiable for serious growers.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Genetics Make All the Difference
          </h2>
          <p>
            Just like traditional agriculture, the genetic vigor of your starting material matters. High-quality, fully colonized spawn ensures rapid mycelium growth. When your spawn is strong, it aggressively overtakes your substrate (like straw or compost), beating out competing molds and bacteria before they even have a chance to grow. This translates directly to faster fruiting and a much heavier harvest.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            What Defines Top-Tier Mushroom Seeds?
          </h2>
          <p>
            When sourcing your spawn, you cannot compromise on quality. A premium product guarantees:
          </p>
          
          <ul className="space-y-4 my-6">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Zero Contamination:</strong>
                Cultivated in highly sterile, lab-grade environments so you only grow the exact mushroom strain you paid for.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Strain Variety:</strong>
                Access to commercial-grade genetics for high-demand crops, whether you are growing Button, Oyster, or heat-loving Milky mushrooms.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">100% Organic Origins:</strong>
                The perfect, chemical-free foundation required to sell your final harvest at a premium price to health-conscious consumers.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Secure Your Yield From Day One
          </h2>
          <p>
            You wouldn't build a house on a weak foundation, so don't build your agricultural business on subpar spawn. Whether you are a beginner looking for your first bag of Oyster seeds or a commercial farm ordering in bulk, your harvest is only as good as the material you start with.
          </p>

          <div className="glass p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 text-center mt-12 bg-primary-start/5">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Ready to start with the best?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Get premium, lab-tested, and 100% organic mushroom spawn from <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm</strong> today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:9203544140" className="btn-primary px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Phone size={18} /> Call / WhatsApp
              </a>
              <Link href="/contact" className="btn-outline px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Mail size={18} /> Contact Us Online
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};

export default ArticleSpawnSeeds;
