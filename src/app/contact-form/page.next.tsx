'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';

import { MessageSquare, Phone, Mail, CheckCircle2 } from 'lucide-react';
import SEO from '@/src/components/SEO';

const ArticleContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <SEO 
        title="Take the First Step Towards a Profitable Mushroom Farm Today! 🍄"
        description="Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, and turnkey setup."
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm text-primary-start font-bold uppercase tracking-widest mb-6">
            <MessageSquare size={18} />
            <span>Expert Consultation</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
            Take the First Step Towards a Profitable <span className="gradient-text">Mushroom Farm Today!</span> 🍄
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
            Starting a commercial mushroom farming business is one of the most rewarding and lucrative agricultural ventures you can choose. But whether you are a passionate beginner, a traditional farmer looking to diversify, or an investor planning a massive commercial setup, having the right <Link href="/contact" className="text-primary-start hover:underline font-semibold">expert guidance</Link> is the secret to guaranteed success.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Why Guess When You Can Consult the Experts?
          </h2>
          <p>
            Mushroom cultivation is a precise science. Building a high-yield farm involves critical decisions—from selecting the right climate-friendly variety and planning your vertical infrastructure, to sourcing premium, contamination-free <Link href="/spawn-seeds" className="text-primary-start hover:underline font-semibold">spawn</Link>. A single miscalculation in your setup can lead to crop failure. That is exactly why our team of agri-tech specialists is here to eliminate the trial-and-error phase for you.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Everything You Need Under One Roof
          </h2>
          <p>
            No matter where you are in your cultivation journey, our dedicated support team is ready to provide customized, scalable solutions. Get in touch with us for:
          </p>
          
          <ul className="space-y-4 my-6">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1"><Link href="/training/online" className="text-primary-start hover:underline">Expert Cultivation Training</Link>:</strong>
                Learn the exact scientific methods through our professional online or offline farming courses.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1"><Link href="/spawn-seeds" className="text-primary-start hover:underline">Premium Spawn & Supplies</Link>:</strong>
                Secure bulk orders for lab-certified, high-yield organic mushroom seeds.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1"><Link href="/services/turnkey-setup" className="text-primary-start hover:underline">Turnkey Farm Setup</Link>:</strong>
                Let our experts handle your end-to-end commercial infrastructure, from HVAC climate control to insulated sheds.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1"><Link href="/contact" className="text-primary-start hover:underline">General Consultancy</Link>:</strong>
                Get personalized advice on business plans, government subsidies, disease management, and marketing strategies.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Let’s Build Your Dream Farm Together
          </h2>
          <p>
            Don't let your agricultural startup remain just an idea. A quick conversation with our experts can give you the exact roadmap, resources, and confidence you need to launch a highly profitable, eco-friendly business.
          </p>

          <div className="glass p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 text-center mt-12 bg-primary-start/5">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Ready to take the first step?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Contact <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm</strong> today and let our specialists guide you to agricultural success.
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

export default ArticleContactForm;
