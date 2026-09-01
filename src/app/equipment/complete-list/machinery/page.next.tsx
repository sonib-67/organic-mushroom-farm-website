'use client';
import React from 'react';
import SEO from '@/src/components/SEO';
import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

export default function MachineryDirectoryPage() {
  return (
    <div className="font-sans bg-transparent dark:bg-transparent min-h-screen">
      <SEO title="MACHINERY | Organic Mushrooms Farm" description="Detailed list of machinery for commercial mushroom farming." />
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link href="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          MACHINERY
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Comprehensive directory covering all scale-wise requirements for machinery.
        </p>
        <div className="space-y-8 md:space-y-12">

          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Medium-Scale / Small Commercial</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Autoclave / Retort Sterilizer</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Sterilizes bulk grain spawn and substrate bags</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Straw Chopper / Shredder Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Cuts straw into uniform small pieces for substrate prep</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Compost Mixer (drum/tumbler type)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Mixes compost ingredients uniformly</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Semi-Automatic Bag Filling Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Fills substrate into bags faster and more uniformly</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Basic Packaging Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Packs mushrooms for local market sale</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Spawn Shaker Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Breaks up colonized grain spawn for even distribution</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Bag Vacuum/Sealing Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes air and seals bags for freshness</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Composting Unit (Industrial)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Compost Turning Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Mixes and aerates compost ingredients repeatedly</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Bunker/Tunnel Filling Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Automatically fills compost into bunkers or tunnels</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Compost Air Handling Unit (AHU)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Controls temperature and airflow inside tunnels</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Front Loader / Bobcat</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Moves raw material and finished compost around the yard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Spawn Production Unit</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grain Spawn Cooker/Boiler</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Cooks grain (wheat, rye, millet) for spawn preparation</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Industrial Autoclave</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Sterilizes large batches of grain spawn</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Automatic Inoculation Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Inoculates sterilized grain with mother culture at scale</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Bottle Filling Line</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Automatically fills, sterilizes & inoculates bottles (enoki, shimeji, etc.)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Substrate Prep & Bag Filling (Commercial)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Industrial Substrate Mixer</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Mixes large volumes of substrate ingredients uniformly</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Automatic Bag Filling & Sealing Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">High-speed bagging for bulk production</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Casing Soil Spreader Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Spreads casing soil evenly over spawned beds/trays</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Steam Boiler (industrial)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Supplies steam for large-scale sterilization/pasteurization</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Bag Breaking & Recycling Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes spent substrate from bags after harvest</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Climate Control & Growing Rooms</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Industrial Air Conditioning System</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Precisely controls growing room temperature</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Chiller Unit</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Cools growing rooms during warm seasons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Harvesting, Grading & Packaging</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Conveyor Belt System</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Transports harvested mushrooms for processing</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grading & Sorting Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Sorts mushrooms by size and quality</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Automatic Weighing & Packaging (MAP) Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Packs mushrooms in bulk with extended shelf life</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Refrigerated Transport Van</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Delivers fresh mushrooms to market without spoilage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Drying, Processing & Value Addition</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Mushroom Dryer / Dehydrator</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Dries mushrooms for long shelf life and export</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Mushroom Powder Grinding Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Converts dried mushrooms into powder for supplements/food</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Canning Machine</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Preserves mushrooms in cans for long-term storage</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Freeze Dryer</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Preserves mushrooms while retaining texture, flavor & nutrients</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Beginner / Home-Scale</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Heat Sealer (Impulse Sealer)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Seals grow bags and spawn bags</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Lab & Culture Equipment</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Autoclave (lab grade)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Sterilizes agar media, tools, and liquid culture jars</td>
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
