'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNavbar } from '../../components/ui/TopNavbar';
import { MachineModal } from '../../components/ui/MachineModal';
import { MousePointer, Eye, RotateCw, ZoomIn, HelpCircle } from 'lucide-react';
import { useFarmStore } from '../../store/useFarmStore';

// Dynamically import FarmScene with SSR disabled to prevent WebGL canvas issues on server
const FarmScene = dynamic(
  () => import('../../components/3d/FarmScene').then((mod) => mod.FarmScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-white gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <div className="text-center space-y-1">
          <p className="text-base font-bold tracking-wide">Loading 3D Commercial Farm Scene...</p>
          <p className="text-xs text-slate-400">Initializing WebGL Canvas & Hardware Acceleration</p>
        </div>
      </div>
    ),
  }
);

export default function CommercialFarmSetupPage() {
  const isXRayMode = useFarmStore((state) => state.isXRayMode);

  return (
    <div className="relative w-full h-[calc(100vh-84px)] md:h-[calc(100vh-96px)] overflow-hidden bg-slate-950 select-none">
      {/* 1. Top Navbar Overlay */}
      <TopNavbar />

      {/* 2. Left Accordion Sidebar with 14 Departments */}
      <Sidebar />

      {/* 3. 3D WebGL Canvas Layer */}
      <div className="w-full h-full">
        <FarmScene />
      </div>

      {/* 4. Bottom Right 3D Controls Helper & X-Ray Status */}
      <div className="fixed bottom-4 right-4 z-20 pointer-events-none hidden sm:flex flex-col items-end gap-2">
        {isXRayMode && (
          <div className="pointer-events-auto px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-2 animate-bounce">
            <Eye className="w-4 h-4" />
            <span>X-Ray Active: Facility Walls & Roof Transparent</span>
          </div>
        )}

        <div className="pointer-events-auto px-4 py-2.5 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-800 shadow-xl text-slate-300 text-[11px] flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MousePointer className="w-3.5 h-3.5 text-blue-400" />
            <span>Orbit: Left Click + Drag</span>
          </div>
          <div className="w-px h-3 bg-slate-700" />
          <div className="flex items-center gap-1.5">
            <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pan: Right Click / 2-Fingers</span>
          </div>
          <div className="w-px h-3 bg-slate-700" />
          <div className="flex items-center gap-1.5">
            <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
            <span>Zoom: Scroll</span>
          </div>
        </div>
      </div>

      {/* 5. Detailed Machinery Specification Modal */}
      <MachineModal />
    </div>
  );
}
