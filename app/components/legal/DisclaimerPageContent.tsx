'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  BookOpen,
  Calculator,
  FileText,
  CheckCircle2,
  Factory,
  Scale,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Building,
  ArrowRight,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const DisclaimerPageInner: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Disclaimer & Transparency Policy
            </span>
          </nav>
        </div>

        {/* Header */}
        <header className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
              <ShieldAlert size={16} />
              <span>Legal & Operational Disclosure</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-4">
              Disclaimer & <span className="gradient-text font-black">Transparency Policy</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              We believe in complete honesty, scientific integrity, and ethical transparency with our nationwide community of mushroom growers, students, and commercial agro-entrepreneurs.
            </p>
          </motion.div>
        </header>

        {/* Content Sections */}
        <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto space-y-8">
          {/* Section 1: Transparency Commitment */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-4 flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
              <span>1. Our Commitment to Transparency</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Welcome to <strong>Organic Mushrooms Farm</strong> (a proud brand of <strong>Agrimotion Engineering Private Limited</strong>). We believe in complete honesty and transparency with our community of farmers and agro-entrepreneurs. We have built this platform (
              <Link href="/" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                https://organicmushroomsfarm.com
              </Link>
              ) to share our years of hands-on experience, scientific SOPs, and commercial strategies in mushroom cultivation. However, to set the right expectations and protect both you and us, please read this disclaimer carefully.
            </p>
          </motion.section>

          {/* Section 2: Educational & Informational Purpose */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-4 flex items-center gap-3">
              <BookOpen className="text-blue-500 shrink-0" size={24} />
              <span>2. Educational and Informational Purpose Only</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              All the content on this website—including our{' '}
              <Link href="/blog" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                blogs
              </Link>
              ,{' '}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                training videos
              </Link>
              , standard operating procedures (SOPs), and{' '}
              <Link href="/services" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                farm setup guides
              </Link>
              —is strictly for educational and informational purposes.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              While we strive to provide the most accurate, up-to-date, and scientifically backed data regarding Button, Oyster, Milky, and other mushroom varieties, agriculture is a constantly evolving field. We do not make any absolute guarantees that our methods will work flawlessly in every unique environment without proper adaptation and environmental control.
            </p>
          </motion.section>

          {/* Section 3: Earnings & Profitability Disclaimer */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-4 flex items-center gap-3">
              <Calculator className="text-amber-500 shrink-0" size={24} />
              <span>3. Earnings, ROI, and Business Profitability Disclaimer</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              We are incredibly passionate about the profitability of mushroom farming and provide financial models and calculators. Please understand that:
            </p>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong className="dark:text-white text-slate-900">Estimates, Not Guarantees:</strong> Any income figures, profit margins, or return on investment (ROI) calculations mentioned on our site are estimates of what is commercially possible. They are based on ideal industry standards and our past successful turnkey projects.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong className="dark:text-white text-slate-900">Your Results Will Vary:</strong> We cannot and do not guarantee that you will achieve identical financial results. Your actual profits depend on personal dedication, technical execution, investment capacity, local mandi demand, selling price fluctuations, and operational efficiency.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong className="dark:text-white text-slate-900">Commercial Risks:</strong> Commercial farming involves financial risk. You are solely responsible for your business decisions, and Organic Mushrooms Farm is not liable for financial losses your farm may incur due to operational missteps.
                </p>
              </li>
            </ul>
          </motion.section>

          {/* Section 4: Biological & Agricultural Variables */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-4 flex items-center gap-3">
              <Factory className="text-purple-500 shrink-0" size={24} />
              <span>4. Agricultural and Biological Variables (The Reality of Farming)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Mushroom cultivation is a delicate, living biological process. Even with our certified{' '}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                F1 hybrid lab spawn
              </Link>{' '}
              and climate-controlled setups, agricultural output is influenced by external variables, including:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                <strong className="block dark:text-white text-slate-900 mb-1">🌡️ Climate & Weather</strong>
                <p className="text-slate-600 dark:text-slate-400">
                  Sudden extreme temperature spikes, monsoon humidity saturation, or dry winter winds.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                <strong className="block dark:text-white text-slate-900 mb-1">🌾 Raw Material Quality</strong>
                <p className="text-slate-600 dark:text-slate-400">
                  Variations in local wheat/paddy straw moisture, water pH levels, and compost gypsum quality.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                <strong className="block dark:text-white text-slate-900 mb-1">🧼 Farm Hygiene & Sterilization</strong>
                <p className="text-slate-600 dark:text-slate-400">
                  Adherence to aseptic spawning and sanitation protocols to prevent green mold or wet bubble.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                <strong className="block dark:text-white text-slate-900 mb-1">⚡ Infrastructure Reliability</strong>
                <p className="text-slate-600 dark:text-slate-400">
                  Continuous electrical supply for cooling units, misting nozzles, and fresh air CO₂ flushing.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Subsidy & Legal Advice */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-4 flex items-center gap-3">
              <Scale className="text-yellow-500 shrink-0" size={24} />
              <span>5. Government Subsidy and Legal Advisory</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              We provide technical guidance and project formulations for government agricultural subsidies (such as NHB, NHM, MIDH, or NABARD schemes). However:
            </p>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <p className="text-slate-600 dark:text-slate-300">
                  We are agro-tech engineering consultants, not legal or financial institutions.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <p className="text-slate-600 dark:text-slate-300">
                  The final approval, disbursement, and timeline of any government subsidy or bank credit are strictly at the discretion of the respective government departments and financial institutions.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <p className="text-slate-600 dark:text-slate-300">
                  We recommend consulting with a certified financial advisor or legal counsel before signing binding major loan commitments.
                </p>
              </li>
            </ul>
          </motion.section>

          {/* Section 6: External Links */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-4 flex items-center gap-3">
              <ExternalLink className="text-indigo-500 shrink-0" size={24} />
              <span>6. External Links and Third-Party Resources</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide you with comprehensive industry insights, our website may reference third-party research portals, government portals, or academic publications. Please note that we do not have direct control over external domain content, and clicking third-party links is at your own discretion.
            </p>
          </motion.section>

          {/* Section 7: Company Identity & Contact */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white border border-slate-200 dark:border-white/10 shadow-xl"
          >
            <h2 className="text-xl sm:text-2xl font-black text-white mb-4 flex items-center gap-3">
              <FileText className="text-emerald-400 shrink-0" size={24} />
              <span>7. Corporate Identity & Official Contact</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              We are here to support your commercial mushroom farming journey ethically and transparently. If you have any questions regarding this policy or need clarification on our business agreements, please reach out to us:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block mb-1">
                  Operating Entity
                </span>
                <strong className="text-white text-sm block">Agrimotion Engineering Pvt. Ltd.</strong>
                <span className="text-slate-300 text-xs">(Organic Mushrooms Farm)</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block mb-1">
                  Headquarters
                </span>
                <p className="text-slate-300 text-xs">
                  Katangi Road, Jabalpur, Madhya Pradesh, India, 482002
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block mb-1">
                  Email Support
                </span>
                <a
                  href="mailto:support@mushroomtraining.online"
                  className="text-white font-semibold hover:text-emerald-300 transition-colors"
                >
                  support@mushroomtraining.online
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block mb-1">
                  WhatsApp & Phone Desk
                </span>
                <a
                  href="https://wa.me/919203544140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle size={14} className="text-[#25D366]" /> +91 9203544140
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Floating & Sticky Elements */}
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <AIChatWidget />
      <HomeModals />
      <Footer />
    </div>
  );
};

export const DisclaimerPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <DisclaimerPageInner />
    </ModalProvider>
  );
};
