import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function SafetyDirectoryPage() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO title="SAFETY MATERIAL | Organic Mushrooms Farm" description="Detailed list of safety material for commercial mushroom farming." />
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          SAFETY MATERIAL
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Comprehensive directory covering all scale-wise requirements for safety material.
        </p>
        <div className="space-y-8 md:space-y-12">

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">General Farm Safety</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">PPE Kits (gloves, masks, gowns)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Protects workers and maintains hygiene during handling</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Hairnets & Shoe Covers</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Prevents contamination from workers entering growing rooms</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Foot Bath / Disinfection Entry Point</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Prevents contamination from entering growing areas</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Fire Extinguisher</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Handles fire emergencies near boilers/electrical units</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">First Aid Kit</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Handles minor injuries during farm operations</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Safety Goggles</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Protects eyes while operating machinery or handling chemicals</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Rubber/Heat-Resistant Gloves</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Protects hands while handling boilers, steam & hot equipment</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Ear Protection (ear plugs/muffs)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Protects workers' hearing near loud machinery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Disinfection & Contamination Control</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Isopropyl Alcohol / Disinfectant Spray</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Cleans surfaces and tools to prevent contamination</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Bleach / Sanitizing Solution</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Sanitizes growing rooms, trays, and equipment between crop cycles</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Hand Sanitizer Stations</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Reduces contamination risk during inoculation and handling</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Fumigation Equipment</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Sterilizes growing rooms/tunnels before new crop cycles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Industrial/Boiler Safety</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pressure Release Valve (for boilers/autoclaves)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Prevents pressure build-up accidents</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Steam Leak Detector</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Detects steam leaks near boiler and pasteurization units</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Warning Signage (hot surface, high voltage, biohazard)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Alerts workers to hazard zones on the farm</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Emergency Shut-off Switch</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stops machinery instantly in case of emergency</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Waste & Environmental Safety</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Effluent / Spent Compost Handling System</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Manages safe disposal or recycling of used compost</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Biohazard Waste Bags</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Safely disposes of contaminated substrate/cultures</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
