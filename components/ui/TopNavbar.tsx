'use client';

import React from 'react';
import Link from 'next/link';
import { 
  RotateCw, 
  Eye, 
  Layers, 
  Sparkles, 
  Compass, 
  Home, 
  Sliders, 
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { useFarmStore } from '../../store/useFarmStore';

export function TopNavbar() {
  const isXRayMode = useFarmStore((state) => state.isXRayMode);
  const toggleXRay = useFarmStore((state) => state.toggleXRay);
  const autoRotate = useFarmStore((state) => state.autoRotate);
  const toggleAutoRotate = useFarmStore((state) => state.toggleAutoRotate);
  const triggerResetCamera = useFarmStore((state) => state.triggerResetCamera);
  const sidebarOpen = useFarmStore((state) => state.sidebarOpen);
  const toggleSidebar = useFarmStore((state) => state.toggleSidebar);

  return (
    <header className="fixed top-3 left-3 right-3 z-40 flex items-center justify-between gap-3 pointer-events-none">
      {/* Left: Branding & Department Toggle */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <Link
          href="/"
          className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 shadow-xl backdrop-blur-md transition-colors"
          title="Return to Farm Homepage"
        >
          <Home className="w-4 h-4 text-blue-400" />
        </Link>

        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md text-white">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <h1 className="text-xs sm:text-sm font-bold tracking-tight leading-none flex items-center gap-1.5">
              <span>Commercial Mushroom Farm 3D Viewer</span>
              <span className="hidden md:inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Interactive Dutch Plant
              </span>
            </h1>
          </div>
        </div>

        {/* Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className={`px-3 py-2 rounded-xl border text-xs font-semibold backdrop-blur-md shadow-xl transition-all flex items-center gap-1.5 ${
            sidebarOpen
              ? 'bg-blue-600/20 border-blue-500/50 text-blue-300'
              : 'bg-slate-900/90 border-slate-700 text-white hover:bg-slate-800'
          }`}
          title="Toggle 14 Machinery Categories"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">14 Departments</span>
        </button>
      </div>

      {/* Right: Controls (Rotate 360°, Reset Camera, X-Ray Toggle, Turnkey Consultation) */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Rotate 360° Toggle */}
        <button
          onClick={toggleAutoRotate}
          className={`px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-xl transition-all flex items-center gap-1.5 ${
            autoRotate
              ? 'bg-blue-600 border-blue-400 text-white shadow-blue-500/20'
              : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
          title="Toggle 360° Continuous Auto Rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
          <span className="hidden md:inline">Rotate 360°</span>
        </button>

        {/* Reset View Button */}
        <button
          onClick={triggerResetCamera}
          className="px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 backdrop-blur-md shadow-xl transition-all flex items-center gap-1.5 text-xs font-semibold"
          title="Reset Camera to Overhead Isometric View"
        >
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Reset View</span>
        </button>

        {/* X-Ray View Toggle Switch */}
        <button
          onClick={toggleXRay}
          className={`px-3.5 py-2 rounded-xl border backdrop-blur-md shadow-xl transition-all flex items-center gap-2 text-xs font-bold ${
            isXRayMode
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 border-emerald-400 text-white shadow-emerald-500/30 ring-2 ring-emerald-400/50'
              : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
          title="Toggle X-Ray Mode: Turn Walls and Roof Transparent to view Internal Equipment"
        >
          <Eye className={`w-3.5 h-3.5 ${isXRayMode ? 'text-emerald-200' : 'text-slate-400'}`} />
          <div className="flex items-center gap-1.5">
            <span>X-Ray View</span>
            <span
              className={`w-2 h-2 rounded-full ${
                isXRayMode ? 'bg-emerald-200 animate-ping' : 'bg-slate-600'
              }`}
            />
          </div>
        </button>

        {/* Book Turnkey Farm Setup Consultation */}
        <a
          href="/book-consultant"
          className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 text-xs font-extrabold shadow-xl transition-all hover:scale-105"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Consult Farm Engineer</span>
        </a>
      </div>
    </header>
  );
}
