import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, ClipboardList, TrendingUp, Landmark, MapPin, ArrowRight, CheckCircle2, Banknote, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SubsidyPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Mushroom Farming Subsidy India 2026 | Government Schemes, Loans & Benefits" 
        description="Get complete details on mushroom farming subsidy in India . Check MIDH, NHB, NABARD, MUDRA loan, eligibility, subsidy amount, and how to apply." 
      />

      {/* Intro Section */}
      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6 bg-primary-start/10 text-primary-start">Financial Grants</div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Mushroom Farming <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-start to-accent">Subsidy in India</span>
            <br/><span className="text-2xl md:text-4xl font-semibold opacity-90 mt-4 block">Government Schemes, Loans & Benefits</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
            Mushroom farming in India is rapidly growing as a profitable agri-business, and the Government of India actively supports it through multiple subsidy schemes, loans, and financial assistance programs. Whether you want to know <strong>how to start mushroom farming in India</strong> as a beginner farmer, startup, or commercial entrepreneur, you can get up to 50% <strong>government subsidy for mushroom farming</strong> and low-interest loans to start or expand your mushroom farming business.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
            This page provides complete details of the <strong><Link to="/states" className="text-inherit hover:text-inherit">mushroom farming subsidy India 2026</Link></strong> schemes, including eligibility, benefits, <strong>mushroom farming project subsidy</strong> amount, and how to apply. If you need a comprehensive <strong>mushroom farming business plan India</strong>, subsidies will heavily reduce your capital requirements.
          </p>
        </motion.div>
      </section>

      {/* Schemes Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20 space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Top Government Mushroom Farming Subsidy Schemes in India</h2>
          <p className="text-slate-500">Explore the best <strong>horticulture subsidy India</strong> programs to fund your <strong>agri business subsidy India</strong> goals.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* MIDH */}
          <div className="glass p-8 rounded-3xl group hover:border-primary-start/50 transition-all shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-primary-start flex items-center gap-3">
              <Landmark size={24} /> MIDH – Mission for Integrated Development of Horticulture
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">The MIDH scheme is the most popular <strong>mushroom cultivation subsidy scheme</strong> in India.</p>
            <ul className="space-y-3 mb-6 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Subsidy:</strong> 50% of total project cost</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Maximum Subsidy:</strong> ₹10 lakh</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Project Cost Limit:</strong> ₹20 lakh</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Who Can Apply:</strong> Farmers, entrepreneurs, FPOs, agri startups</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Best For:</strong> Small to medium mushroom farming units</li>
            </ul>
            <div className="bg-primary-start/5 p-4 rounded-xl mb-4 text-sm">
              <p className="font-bold mb-2">Benefits:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                <li>Reduces initial investment cost significantly</li>
                <li>Supports infrastructure like growing rooms, compost units</li>
                <li>Encourages scientific mushroom cultivation</li>
              </ul>
            </div>
            <p className="text-sm"><strong>How to Apply:</strong> Apply through your State Horticulture Department or district agriculture office.</p>
          </div>

          {/* NHB */}
          <div className="glass p-8 rounded-3xl group hover:border-primary-start/50 transition-all shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-primary-start flex items-center gap-3">
              <Building2 size={24} /> NHB – National Horticulture Board Scheme
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">The NHB scheme supports large-scale commercial mushroom farming, perfect for a robust <strong>button mushroom subsidy India</strong> project.</p>
            <ul className="space-y-3 mb-6 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Subsidy:</strong> 40% of project cost</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Who Can Apply:</strong> Private companies, entrepreneurs, agribusiness owners</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Focus:</strong> Commercial and export-oriented mushroom farming</li>
            </ul>
            <div className="bg-primary-start/5 p-4 rounded-xl mb-4 text-sm">
              <p className="font-bold mb-2">Benefits:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                <li>Ideal for high-investment mushroom farms</li>
                <li>Covers cold storage, processing units, and infrastructure</li>
              </ul>
            </div>
            <p className="text-sm"><strong>How to Apply:</strong> Apply through the official NHB portal or via bank-linked project approval.</p>
          </div>

          {/* HMHNH */}
          <div className="glass p-8 rounded-3xl group hover:border-primary-start/50 transition-all shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-primary-start flex items-center gap-3">
              <TrendingUp size={24} /> HMHNH Scheme (North East &amp; Himalayan)
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Higher subsidy for farmers in special regions.</p>
            <ul className="space-y-3 mb-6 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Subsidy:</strong> 50%</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Maximum Amount:</strong> ₹37.50 lakh</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Who Can Apply:</strong> Farmers in NE &amp; Himalayan states</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Best For:</strong> Integrated mushroom farming units</li>
            </ul>
             <div className="bg-primary-start/5 p-4 rounded-xl text-sm">
              <p className="font-bold mb-2">Benefits:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                <li>Higher financial support</li>
                <li>Encourages rural and hill-area farming</li>
              </ul>
            </div>
          </div>

          {/* NABARD */}
          <div className="glass p-8 rounded-3xl group hover:border-primary-start/50 transition-all shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-primary-start flex items-center gap-3">
              <Banknote size={24} /> NABARD Mushroom Farming Scheme
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">NABARD provides robust financial assistance through their <strong>mushroom farming loan India</strong> options.</p>
            <ul className="space-y-3 mb-6 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Type:</strong> Loan-based support</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Loan Amount:</strong> Based on project size</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Repayment Period:</strong> Up to 7 years</li>
            </ul>
             <div className="bg-primary-start/5 p-4 rounded-xl mb-4 text-sm">
              <p className="font-bold mb-2">Benefits:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                <li>Easy financing for mushroom farming projects</li>
                <li>Supports small to large scale businesses</li>
                <li>Linked with subsidy schemes like MIDH</li>
              </ul>
            </div>
            <p className="text-sm"><strong>How to Apply:</strong> Apply through NABARD-supported banks with a detailed project report.</p>
          </div>

           {/* MUDRA */}
           <div className="glass p-8 rounded-3xl group hover:border-primary-start/50 transition-all shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-primary-start flex items-center gap-3">
              <Banknote size={24} /> MUDRA Loan
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Pradhan Mantri Mudra Yojana - Best scheme for small or <strong>oyster mushroom farming subsidy India</strong> startups.</p>
            <ul className="space-y-3 mb-6 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Shishu:</strong> Up to ₹50,000</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Kishor:</strong> Up to ₹5 lakh</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Tarun:</strong> Up to ₹10 lakh</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Collateral:</strong> Not required</li>
            </ul>
             <div className="bg-primary-start/5 p-4 rounded-xl mb-4 text-sm">
              <p className="font-bold mb-2">Benefits:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                <li>Easy loan approval &amp; Ideal for beginners</li>
                <li>No security required</li>
              </ul>
            </div>
            <p className="text-sm"><strong>How to Apply:</strong> Apply through any bank, NBFC, or online Mudra portal.</p>
          </div>

          {/* PM Kisan Sampada / Bihar / Extras */}
          <div className="glass p-8 rounded-3xl space-y-8 shadow-xl">
            <div>
               <h3 className="text-xl font-bold mb-3 text-primary-start">PM Kisan Sampada Yojana</h3>
               <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Supports mushroom processing and value addition. Focuses on food processing units including mushroom drying, packaging, and cold storage to help increase profit through processing and support export-oriented business.</p>
            </div>
            <div>
               <h3 className="text-xl font-bold mb-3 text-primary-start">Bihar State MIDH Mushroom Subsidy</h3>
               <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Special state-level support offering <strong>50% subsidy</strong> (maximum ₹1 lakh per unit on a project cost up to ₹2 lakh). Promotes local mushroom production and is easy for small farmers to access.</p>
            </div>
            <div>
               <h3 className="text-xl font-bold mb-3 text-primary-start">Extra Subsidy for Women / SC / ST</h3>
               <p className="text-sm text-slate-700 dark:text-slate-300">An additional <strong>10% subsidy</strong> is available under MIDH and NHB schemes to encourage inclusive farming and provide higher financial support.</p>
            </div>
          </div>

          {/* Agriculture Infrastructure Fund & State */}
           <div className="glass p-8 rounded-3xl md:col-span-2 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-start">Agriculture Infrastructure Fund (AIF)</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Supports infrastructure development.</p>
                <ul className="space-y-2 mb-4 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Interest Subsidy:</strong> 3% on loans</li>
                  <li className="flex gap-2"><CheckCircle2 size={18} className="text-accent shrink-0"/> <strong>Use:</strong> Cold storage, mushroom growing units</li>
                </ul>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong>Benefits:</strong> Reduces loan burden and provides long-term financing support.</p>
              </div>
              <div>
                 <h3 className="text-2xl font-bold mb-4 text-primary-start"><MapPin className="inline mr-2"/> State Government Schemes</h3>
                 <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm">Many states provide additional subsidies. Farmers should contact their State Horticulture Department for region-specific schemes:</p>
                 <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                   <li>• Madhya Pradesh</li>
                   <li>• Uttar Pradesh</li>
                   <li>• Maharashtra</li>
                   <li>• Rajasthan</li>
                   <li>• Karnataka</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">FAQ – Mushroom Farming Subsidy India</h2>
        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-primary-start mb-2">What is the subsidy for mushroom farming in India?</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Farmers can get 40% to 50% subsidy under schemes like MIDH and NHB.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-primary-start mb-2">How to apply for mushroom farming subsidy?</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">You can apply through the State Horticulture Department or banks linked with NABARD.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-primary-start mb-2">Which scheme is best for mushroom farming?</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">MIDH is best for small farmers, while NHB is suitable for large commercial units.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-primary-start mb-2">Can I get a loan without collateral?</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Yes, under the MUDRA loan scheme, no collateral is required.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-primary-start mb-2">Is mushroom farming profitable in India?</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Yes, mushroom farming is a high-profit, low-investment agri business with strong market demand.</p>
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="section-padding px-4">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-primary-start to-accent p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Need Help with Your DPR?</h3>
            <p className="mb-8 max-w-2xl mx-auto relative z-10 opacity-90">
                A perfect Project Report is the key to getting your subsidy approved. Our experts draft bankable DPRs that meet NHB and MIDH standards.
            </p>
            <a href="tel:+919203544140" className="btn-primary bg-white text-black hover:text-white px-12 py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 mx-auto w-fit hover:scale-105 transition-all shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]">
                Call Now <ArrowRight size={18} />
            </a>
        </div>
      </section>
    </div>
  );
};

export default SubsidyPage;
