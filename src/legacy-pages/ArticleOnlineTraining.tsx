import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Laptop, Phone, Mail, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const ArticleOnlineTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <SEO 
        title="Master Mushroom Farming from Anywhere: Join the Ultimate Online Training"
        description="Learn the exact techniques, scientific knowledge, and confidence to succeed in commercial mushroom farming from day one with our online training."
      />
      
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-sm text-primary-start font-bold uppercase tracking-widest mb-6">
            <Laptop size={18} />
            <span>Training & Education</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
            Master Mushroom Farming from Anywhere: <span className="gradient-text">Join the Ultimate Online Training</span>
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
          <p className="text-xl dark:text-slate-300 text-slate-700 font-medium">
            So, you have heard about the incredible profits in commercial mushroom cultivation, and you are ready to start your own agri-business. That is fantastic! But before you buy your first bag of substrate or build a costly shed, there is one crucial step you cannot skip: getting the right education.
          </p>
          <p>
            Mushroom farming is not like growing standard vegetables in an open field. It is a precise science that requires strict hygiene, climate control, and biological understanding. Relying on scattered, incomplete internet videos or trial-and-error is the fastest way to lose your investment to contamination and poor yields.
          </p>
          <p>
            The smartest way to start? A structured, expert-led online mushroom farming training program.
          </p>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Why Choose Online Cultivation Training?
          </h2>
          <p>
            Gone are the days when you had to travel across the country, spend money on accommodation, and attend crowded, rushed 2-day physical workshops just to learn the basics. With a comprehensive online course, you bring the farm directly to your screen.
          </p>
          <ul className="space-y-4 my-6">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Learn at Your Own Pace:</strong>
                Whether you are a full-time professional, a student, or a traditional farmer, you can access the lessons from your smartphone or laptop whenever you have free time.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Step-by-Step Curriculum:</strong>
                No confusing information gaps. You learn the entire process chronologically—from sterilizing your straw and inoculating <Link to="/spawn-seeds" className="text-primary-start hover:underline font-semibold">spawn</Link> to managing humidity and harvesting your first flush.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Highly Cost-Effective:</strong>
                Save thousands of rupees on travel and physical workshop fees while getting the same high-level expert insights, practical demonstrations, and troubleshooting guides.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            What You Will Actually Learn
          </h2>
          <p>
            A high-quality mushroom cultivation course doesn't just teach you how to grow fungi; it teaches you how to run a profitable business. You will master the critical skills needed for high-yield farming, including:
          </p>
          
          <ul className="space-y-4 my-6">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Crop Selection:</strong>
                Choosing the right high-demand variety (<Link to="/services/oyster-mushroom" className="text-primary-start hover:underline font-semibold">Oyster</Link>, <Link to="/services/milky-mushroom" className="text-primary-start hover:underline font-semibold">Milky</Link>, or <Link to="/services/button-mushroom" className="text-primary-start hover:underline font-semibold">Button</Link>) for your local climate and budget.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Disease Management:</strong>
                Identifying and preventing green mold, pests, and bacterial contamination before they ruin your crop.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Infrastructure Planning:</strong>
                Designing a low-cost, high-efficiency climate-controlled room that maximizes your vertical space.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={20} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-1">Business Strategy:</strong>
                Post-harvest management, packaging, and marketing strategies to sell your mushrooms at premium prices to restaurants and supermarkets.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
            Stop Guessing, Start Growing
          </h2>
          <p>
            Don't let a lack of experience hold you back from building a highly profitable, eco-friendly business. Equip yourself with the exact techniques, scientific knowledge, and confidence to succeed from day one, all from the comfort of your home.
          </p>

          <div className="glass p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 text-center mt-12 bg-primary-start/5">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Ready to master mushroom farming?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Join our comprehensive online training program at <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm</strong> and start your agricultural journey with confidence.
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

export default ArticleOnlineTraining;
