const fs = require('fs');

const testimonialsCode = `"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <div className="badge mx-auto mb-4">Farmer Testimonials</div>
          <h2 className="mb-4 uppercase">
            Real Commercial <span className="gradient-text">Voices</span>
          </h2>
          <p>Join 5000+ commercial farmers trained by our expert team.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              name: "Rahul S.",
              location: "Bhopal",
              text: "Turnkey setup changed my perspective. Outstanding support even after 2 years.",
              avatar: "RS",
            },
            {
              name: "Deepak M.",
              location: "Indore",
              text: "Professional SOPs. Yield exceeded expectations by 20% due to climate design.",
              avatar: "DM",
            },
            {
              name: "Suresh K.",
              location: "Sagar",
              text: "Honest ROI analysis. No hidden costs, just pure business growth.",
              avatar: "SK",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              
              className="glass p-3 rounded-3xl border dark:border-white/5 border-black/5 flex flex-col h-full"
            >
              <Quote
                size={20}
                className="text-primary-start mb-4 opacity-40"
              />
              <p className="dark:text-slate-300 text-slate-700 text-[13px] italic mb-6 leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center font-bold dark:text-white text-slate-900 text-[10px] shadow-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="dark:text-white text-slate-900 font-bold text-[12px] tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
`;
fs.writeFileSync('app/components/home/Testimonials.tsx', testimonialsCode);

const marketplaceCode = `"use client";
import React from 'react';
import NextLink from 'next/link';
import { ArrowRight } from 'lucide-react';

const Marketplace = () => {
  return (
    <section id="market" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="badge mx-auto mb-4">Global Market Linkage</div>
        <h2 className="mb-4 uppercase tracking-tight">
          Global{" "}
          <span className="gradient-text">Mushroom B2B Marketplace</span>
        </h2>
        <p className="max-w-xl mx-auto mb-5 font-medium">
          Connect directly with verified commercial buyers and sellers
          worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
          {[
            {
              type: "Seller",
              title: "Mushroom Spawn (Seed)",
              desc: "Lab-grade organic F1 hybrid spawn.",
              price: "Bulk Order",
              linkType: "page",
              to: "/spawn-seed",
            },
            {
              type: "Seller",
              title: "Fresh Organic Mushrooms",
              desc: "A-grade commercial button mushrooms.",
              price: "Live Market Rate",
              linkType: "external",
              to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Fresh%20Mushrooms",
            },
            {
              type: "Seller",
              title: "Dry Mushrooms Export",
              desc: "Long shelf life, premium export quality.",
              price: "Wholesale Only",
              linkType: "external",
              to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Dry%20Mushrooms",
            },
          ].map((ad, i) => {
            if (ad.linkType === "page") {
              return (
                <NextLink
                  key={i}
                  href={ad.to}
                  className="glass p-3 rounded-2xl border dark:border-white/5 border-black/5 relative group cursor-pointer block"
                >
                  <div
                    className={\`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400\`}
                  >
                    {ad.type}
                  </div>
                  <h3 className="dark:text-white text-slate-900 mb-1 mt-4 tracking-tight">
                    {ad.title}
                  </h3>
                  <div className="text-[12px] text-slate-500 mb-6">
                    {ad.desc}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="dark:text-white text-slate-900 font-bold text-sm dark:bg-white/5 bg-black/5 px-3 py-2 rounded-xl">
                      {ad.price}
                    </span>
                    <span className="w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 dark:text-slate-400 text-slate-600 flex items-center justify-center group-hover:bg-primary-start group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </NextLink>
              );
            }
            return (
              <a
                key={i}
                href={ad.to}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-2xl border dark:border-white/5 border-black/5 relative group cursor-pointer block"
              >
                <div
                  className={\`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400\`}
                >
                  {ad.type}
                </div>
                <h3 className="dark:text-white text-slate-900 mb-1 mt-4 tracking-tight">
                  {ad.title}
                </h3>
                <div className="text-[12px] text-slate-500 mb-6">
                  {ad.desc}
                </div>
                <div className="flex items-center justify-between">
                  <span className="dark:text-white text-slate-900 font-bold text-sm dark:bg-white/5 bg-black/5 px-3 py-2 rounded-xl">
                    {ad.price}
                  </span>
                  <span className="w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 dark:text-slate-400 text-slate-600 flex items-center justify-center group-hover:bg-primary-start group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
`;
fs.writeFileSync('app/components/home/Marketplace.tsx', marketplaceCode);

const resourcesCode = `"use client";
import React, { useState } from 'react';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, ChevronUp, ChevronDown, Play } from 'lucide-react';
import Image from 'next/image';

const Collapsible: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass border dark:border-white/5 border-black/5 mb-3 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 text-left font-bold text-sm dark:text-white text-slate-900"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-3 pt-0 text-[13px] dark:text-slate-400 text-slate-600 border-t dark:border-white/5 border-black/5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResourcesSection = () => {
  return (
    <section id="resources" className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-start">
          <div>
            <div className="badge mb-6 mx-auto lg:mx-0">
              Documentation & Resources
            </div>
            <h2 className="mb-6 uppercase text-center lg:text-left">
              <NextLink href="/cities" className="hover:text-current transition-colors">
                Commercial Production{" "}
                <span className="gradient-text">SOPs & Guides</span>
              </NextLink>
            </h2>
            <p className="mb-6 text-center lg:text-left">
              Standard operating procedures used by commercial mushroom
              specialists nationwide and internationally.
            </p>
            <div className="md:hidden">
              {[
                {
                  title: "Tunnel Ops",
                  content:
                    "Details for Phase-II Pasteurization Tunnel operations and parameters.",
                  id: "tunnel-ops",
                },
                {
                  title: "Spawning",
                  content:
                    "Comprehensive checklist for spawning and incubation stages.",
                  id: "spawning",
                },
                {
                  title: "Casing",
                  content:
                    "Material preparation guide for optimal casing layer.",
                  id: "casing",
                },
                {
                  title: "Hygiene",
                  content:
                    "Disease control protocols and farm hygiene standards.",
                  id: "hygiene",
                },
              ].map((sop, i) => (
                <Collapsible key={i} title={sop.title}>
                  {sop.content}
                  <NextLink
                    href={\`/sops#\${sop.id}\`}
                    className="flex items-center gap-2 text-primary-start font-bold mt-3"
                  >
                    Get Details <ArrowRight size={14} />
                  </NextLink>
                </Collapsible>
              ))}
            </div>
            <div className="hidden md:block space-y-4">
              {[
                {
                  name: "Phase-II Commercial Pasteurization Tunnel Ops",
                  id: "tunnel-ops",
                },
                { name: "Spawning & Incubation Checklist", id: "spawning" },
                { name: "Casing Material Preparation Guide", id: "casing" },
                {
                  name: "Disease Control & Commercial Farm Hygiene Protocols",
                  id: "hygiene",
                },
              ].map((sop) => (
                <NextLink
                  href={\`/sops#\${sop.id}\`}
                  key={sop.name}
                  className="flex items-center gap-4 p-3 glass rounded-2xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen size={18} className="text-primary-start" />
                  </div>
                  <span className="text-sm font-bold dark:text-slate-300 text-slate-700">
                    {sop.name}
                  </span>
                  <ArrowRight
                    className="ml-auto text-slate-700 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </NextLink>
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 gradient-bg opacity-10 blur-[80px] rounded-full"></div>
            <div className="relative glass p-3 md:p-10 rounded-[2.5rem] border dark:border-white/10 border-black/10">
              <div className="flex items-center gap-4 mb-5 justify-center lg:justify-start">
                <BookOpen className="text-primary-start" size={24} />
                <h3 className="dark:text-white text-slate-900 tracking-tight text-xl">
                  Commercial Knowledge Hub
                </h3>
              </div>
              <div className="space-y-6">
                <NextLink
                  href="/articles/mushroom-farming-beginner-guide-india-2026-2027"
                  className="p-3 md:p-3 rounded-3xl bg-primary-start/10 border border-primary-start/20 block group hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] text-primary-start font-black uppercase tracking-widest">
                      Ultimate Guide 2026-2027
                    </span>
                    <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-500 text-[8px] font-black uppercase">
                      Article
                    </div>
                  </div>
                  <h4 className="dark:text-white text-slate-900 font-bold text-sm mb-2">
                      Mushroom Farming Beginner Guide India 2026-2027
                    </h4>
                  <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">
                    Complete guide on how to start mushroom farming (mushroom
                    ki kheti) from scratch for beginners.
                  </p>
                </NextLink>
                <div className="p-3 md:p-3 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">
                      Featured
                    </span>
                    <div className="px-2 py-0.5 rounded bg-red-500/20 text-red-500 text-[8px] font-black uppercase">
                      Video
                    </div>
                  </div>
                  <a
                    href="https://youtube.com/shorts/wxLiU3nNZmM?si=6VmH86DPYKoQ72P6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-video rounded-2xl overflow-hidden mb-4 group cursor-pointer inline-block w-full"
                  >
                    <Image
                      src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg"
                      alt="Mushroom Farming Training Video - Commercial Cultivation SOPs India"
                      className="w-full h-full object-cover opacity-60"
                      width={1080}
                      height={1080}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-2xl">
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>
                  </a>
                  <h4 className="dark:text-white text-slate-900 font-bold text-[13px] tracking-tight">
                    Commercial Composting Flow Explained
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
`;
fs.writeFileSync('app/components/home/ResourcesSection.tsx', resourcesCode);

const comparisonTableCode = `import React from 'react';

const ComparisonTable = () => {
  const data = [
    { feature: "Commercial Insulation", us: "80-100mm PUF", others: "40-50mm" },
    {
      feature: "Commercial AC Systems",
      us: "Daikin Industrial",
      others: "Split ACs",
    },
    { feature: "Commercial Racking", us: "MS / GI", others: "Bamboo" },
    { feature: "Global Support", us: "Lifetime Video", others: "1 Year" },
    {
      feature: "Government Subsidy",
      us: "Full Document Support",
      others: "No Support",
    },
  ];
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 md:mb-6">
          <div className="badge mx-auto mb-4">Commercial Setup Comparison</div>
          <h2 className="mb-4 uppercase tracking-tight">
            The Commercial <span className="gradient-text">Organic Edge</span>
          </h2>
          <p className="max-w-xl mx-auto">
            Why we are the preferred commercial partner nationwide and globally.
          </p>
        </div>
        <div className="glass border dark:border-white/10 border-black/10 overflow-hidden relative shadow-2xl rounded-[2.5rem]">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="dark:bg-white/5 bg-black/5 border-b dark:border-white/10 border-black/10">
                  <th className="px-4 md:px-5 py-4 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    Features
                  </th>
                  <th className="px-4 md:px-5 py-4 text-[9px] font-black dark:text-white text-slate-900 uppercase tracking-widest gradient-bg">
                    Organic
                  </th>
                  <th className="px-4 md:px-5 py-4 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="px-4 md:px-5 py-5 text-[11px] font-bold dark:text-slate-400 text-slate-600">
                      {row.feature}
                    </td>
                    <td className="px-4 md:px-5 py-5 text-[12px] font-bold dark:text-white text-slate-900 tracking-tight">
                      {row.us}
                    </td>
                    <td className="px-4 md:px-5 py-5 text-[12px] font-medium text-slate-500">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
`;
fs.writeFileSync('app/components/home/ComparisonTable.tsx', comparisonTableCode);
