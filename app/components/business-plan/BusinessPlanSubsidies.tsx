'use client';

import React from 'react';
import {
  Landmark,
  FileSpreadsheet,
  CheckCircle2,
  Percent,
  Award,
  ArrowRight,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const BusinessPlanSubsidies: React.FC = () => {
  const { openConsultationModal } = useAppModals();

  const schemes = [
    {
      name: 'National Horticulture Board (NHB Scheme)',
      subsidy: '40% – 50% Capital Subsidy',
      maxCap: 'Up to ₹20 Lakhs – ₹50 Lakhs depending on scale',
      eligibility: 'Individuals, Farmers, Agri-Entrepreneurs, FPOs, Cooperatives',
      coverage:
        'Covers civil construction of climate-controlled growing rooms, compost units, air-handling chillers, and spawn labs.',
      highlight: 'Top Central Scheme for Commercial Units',
    },
    {
      name: 'NABARD & Agriculture Infrastructure Fund (AIF)',
      subsidy: '3% Interest Subvention on Loans',
      maxCap: 'Credit facilities up to ₹2 Crores',
      eligibility: 'Agri-startups, SHGs, JLGs, and Private Farm Enterprises',
      coverage:
        'Low-interest institutional bank loans with moratorium periods for building post-harvest infrastructure, cold rooms, and packhouses.',
      highlight: 'Cheapest Institutional Bank Credit',
    },
    {
      name: 'PMFME Scheme (Ministry of Food Processing - MoFPI)',
      subsidy: '35% Credit-Linked Capital Subsidy',
      maxCap: 'Max ₹10 Lakhs per micro-enterprise unit',
      eligibility: 'Micro food processors, self-help groups, and individual farmers',
      coverage:
        'Focuses on machinery for mushroom drying, packaging, pickle processing, powder making, and value addition.',
      highlight: 'Best for Value-Added Processing',
    },
    {
      name: 'State Horticulture Mission (MIDH Schemes)',
      subsidy: '25% – 50% of Unit Cost',
      maxCap: 'State-specific slabs (₹5 Lakhs to ₹12 Lakhs)',
      eligibility: 'Local state resident farmers (MP, UP, Bihar, Maharashtra, Rajasthan, etc.)',
      coverage:
        'Subsidized spawn purchase, plastic trays, bamboo racking, and shade-net polyhouse cultivation.',
      highlight: 'State Level Fast Processing',
    },
  ];

  return (
    <section id="subsidies" className="py-16 md:py-24 border-t dark:border-white/10 border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-4">
            <Landmark size={13} /> Government Financial Assistance
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4">
            Government Subsidies & Bank Loan Schemes in India
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Both Central and State Governments in India actively support mushroom cultivation through capital subsidies,
            interest subvention, and collateral-free loan schemes.
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {schemes.map((s, idx) => (
            <div
              key={idx}
              className="glass p-6 sm:p-8 rounded-3xl border dark:border-white/10 border-black/10 flex flex-col justify-between hover:border-purple-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    {s.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">{s.name}</h3>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-extrabold text-lg mb-4">
                  <Percent size={18} />
                  <span>{s.subsidy}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {s.coverage}
                </p>
              </div>

              <div className="pt-4 border-t dark:border-white/5 border-black/5 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Ceiling Cap:</span>
                  <span className="font-bold dark:text-slate-200 text-slate-800">{s.maxCap}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Eligibility:</span>
                  <span className="font-medium dark:text-slate-300 text-slate-700 truncate max-w-[65%] text-right">
                    {s.eligibility}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DPR Consultation Box */}
        <div className="glass p-8 sm:p-10 rounded-3xl border dark:border-white/10 border-black/10 bg-gradient-to-r from-purple-500/5 via-emerald-500/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-500 mb-2">
              <FileSpreadsheet size={16} /> Bankable Project Report Assistance
            </div>
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 mb-2">
              Need a Bank-Ready Detailed Project Report (DPR)?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We prepare complete technical and financial project reports covering Bill of Quantities (BOQ),
              civil layouts, cash flow statements, DSCR ratios, and sensitivity analysis compliant with NHB & NABARD bank standards.
            </p>
          </div>

          <button
            onClick={() =>
              openConsultationModal({
                category: 'DPR & Subsidy Guidance',
                message: 'I want to prepare a bankable DPR for my mushroom farm to apply for a bank loan and subsidy.',
              })
            }
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <span>Request Bankable DPR Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
