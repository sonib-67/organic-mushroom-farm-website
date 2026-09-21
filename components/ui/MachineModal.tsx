'use client';

import React from 'react';
import { 
  X, 
  Cpu, 
  Zap, 
  Gauge, 
  CheckCircle2, 
  Download, 
  PhoneCall, 
  Building2, 
  FileText 
} from 'lucide-react';
import { useFarmStore } from '../../store/useFarmStore';

export function MachineModal() {
  const selectedMachine = useFarmStore((state) => state.selectedMachine);
  const isDetailModalOpen = useFarmStore((state) => state.isDetailModalOpen);
  const setIsDetailModalOpen = useFarmStore((state) => state.setIsDetailModalOpen);
  const setSelectedMachine = useFarmStore((state) => state.setSelectedMachine);

  if (!isDetailModalOpen || !selectedMachine) return null;

  const handleClose = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl max-h-[90vh] rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                {selectedMachine.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                Model: {selectedMachine.model}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
              {selectedMachine.name}
            </h3>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close machine details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
          {/* Capacity & Power Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Rated Capacity</p>
                <p className="text-sm font-bold text-white">{selectedMachine.capacity}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Power Requirement</p>
                <p className="text-sm font-bold text-white">{selectedMachine.power}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Engineering Overview</h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-2xl border border-slate-800/80">
              {selectedMachine.description}
            </p>
          </div>

          {/* Key Features Checklist */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Key Features & Commercial Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedMachine.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          {selectedMachine.specs && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Technical Specifications</h4>
              <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/60">
                <table className="w-full text-xs text-left">
                  <tbody>
                    {Object.entries(selectedMachine.specs).map(([key, val], idx) => (
                      <tr 
                        key={key} 
                        className={`border-b border-slate-800/80 ${idx % 2 === 0 ? 'bg-slate-900/40' : 'bg-transparent'}`}
                      >
                        <td className="p-3 font-semibold text-slate-400 w-1/3">{key}</td>
                        <td className="p-3 font-medium text-white">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Available as part of our Turnkey Commercial Farm packages.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Close
            </button>

            <a
              href="/book-consultant"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/30 flex items-center gap-1.5 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get Quotation & CAD Layout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
