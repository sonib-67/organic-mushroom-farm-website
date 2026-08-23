import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function RawMaterialPage() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO title="Raw Material & Grain Handling | Organic Mushrooms Farm" description="Detailed equipment list for Raw Material & Grain Handling." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Raw Material & Grain Handling
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Raw Material & Grain Handling.
        </p>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Equipment & Working Process</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80">
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Equipment</th>
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grain Cleaner</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes dust, husk and foreign matter from grain before spawn production</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grain Grader</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Separates grain by size to ensure uniform spawn colonization</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grain Sieving Machine</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Screens grain to remove broken pieces and impurities</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grain Washer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Washes grain thoroughly to remove surface contamination before cooking</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grain Dryer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Reduces grain moisture to the correct level before sterilization</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grain Storage Bin</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stores cleaned grain safely, protected from moisture and pests</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grain Silo</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Holds bulk grain for large-scale, continuous spawn production</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grain Hopper</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Feeds grain into processing machines at a controlled, steady rate</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Raw Material Hopper</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Feeds raw substrate materials into mixing or shredding lines</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Belt Conveyor</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Transports raw material or grain between processing stations</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Screw Conveyor</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Moves bulk material horizontally/vertically through enclosed tubing</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Material Transfer Trolley</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Manually moves raw material batches between departments</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pallets</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Supports bulk storage and safe forklift/trolley handling of materials</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
