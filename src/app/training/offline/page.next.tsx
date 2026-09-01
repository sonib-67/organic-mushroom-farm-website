'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';

import { Users, Phone, Mail, CheckCircle2 } from 'lucide-react';
import SEO from '@/src/components/SEO';

const ArticleOfflineTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <SEO 
        title="Get Hands-On: Why Offline Mushroom Farming Training is the Ultimate Game-Changer"
        description="Learn why physical, offline mushroom farming training is the smartest first investment for your agri-business. Experience a live commercial setup."
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm text-primary-start font-bold uppercase tracking-widest mb-6">
            <Users size={18} />
            <span>Training & Education</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
            Get Hands-On: Why <span className="gradient-text">Offline Mushroom Farming Training</span> is the Ultimate Game-Changer 🌾
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
            <Link href="/training/online" className="text-primary-start hover:underline font-semibold">Online courses</Link> are incredible for learning the theory and science of agriculture from the comfort of your home. But let's be honest—farming is fundamentally a hands-on business.
          </p>
          <p>
            If you are someone who learns best by doing, or if you are planning to invest serious capital into a commercial-scale setup, nothing builds confidence faster than physical, offline mushroom farming training.
          </p>
          <p>
            Stepping foot onto a real farm and learning directly from industry experts bridges the gap between reading about a business and actually knowing how to run it. Here is why attending a practical workshop is the smartest first investment for your agri-business.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            1. 100% Practical, Real-World Experience
          </h2>
          <p>
            Reading about how to pasteurize straw or mix <Link href="/spawn-seeds" className="text-primary-start hover:underline font-semibold">spawn</Link> is one thing; actually doing it with your own hands is completely different.
          </p>
          <p>
            In a physical training workshop, you get to feel the correct moisture level in the substrate, practice the exact technique of inoculating bags, and learn how to identify early signs of green mold with your own eyes. You get to make your beginner mistakes in a training environment, rather than on your own farm where it costs you money.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            2. Experience a Live Commercial Setup
          </h2>
          <p>
            You cannot fully understand industrial farming infrastructure through a mobile screen. Offline training puts you directly inside a working, high-yield commercial farm.
          </p>
          <p>
            You get to walk through the climate-controlled rooms, feel the exact temperature and humidity required for explosive growth, and see heavy-duty HVAC systems, humidifiers, and Phase-II <Link href="/compost-unit" className="text-primary-start hover:underline font-semibold">compost tunnels</Link> operating in real time. This firsthand exposure is absolutely critical before you design your own project specs.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            3. Face-to-Face Mentorship & Networking
          </h2>
          <p>
            Have a highly specific question about building a farm in your local city? Want to discuss the ROI of a <Link href="/services/turnkey-setup" className="text-primary-start hover:underline font-semibold">turnkey setup</Link>? A live workshop gives you direct, one-on-one access to agri-tech experts who can evaluate your specific business plan.
          </p>
          <p>
            Plus, you will meet dozens of other aspiring farmers and investors. Building this network can be incredibly valuable for future partnerships, raw material sourcing, and regional marketing.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Build Your Confidence Before You Build Your Farm
          </h2>
          <p>
            Don't just read about the mushroom revolution—experience it! Whether you want to master <Link href="/services/oyster-mushroom" className="text-primary-start hover:underline font-semibold">Oyster</Link>, <Link href="/services/milky-mushroom" className="text-primary-start hover:underline font-semibold">Milky</Link>, or technical <Link href="/services/button-mushroom" className="text-primary-start hover:underline font-semibold">Button mushroom</Link> cultivation, hands-on training ensures you step into your business with absolute practical certainty.
          </p>

          <div className="glass p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 text-center mt-12 bg-primary-start/5">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Ready for Hands-On Training?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Join our upcoming <Link href="/training" className="text-primary-start hover:underline font-semibold">offline training workshops</Link> to get practical experience on a live commercial farm by <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:9203544140" className="btn-primary px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Phone size={18} /> Call / WhatsApp
              </a>
              <Link href="/contact" className="btn-outline px-8 py-3 rounded-full flex items-center justify-center gap-2">
                <Mail size={18} /> Book a Consultation
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};

export default ArticleOfflineTraining;
