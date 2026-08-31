import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CleaningBiosecurityPage() {
  return (
    <div className="font-sans bg-transparent dark:bg-transparent min-h-screen">
      <SEO title="Cleaning & Biosecurity | Organic Mushrooms Farm" description="Detailed equipment list for Cleaning & Biosecurity." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Cleaning & Biosecurity
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Cleaning & Biosecurity.
        </p>
        
        <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Equipment & Working Process</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-transparent dark:bg-slate-800/80">
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Equipment</th>
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">High-Pressure Washer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Deep-cleans floors, racks and equipment with high-pressure water</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Foam Cleaning Machine</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Applies cleaning foam to surfaces for effective sanitation</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Floor Scrubber</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Mechanically scrubs and cleans large floor areas</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Steam Cleaner</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Uses high-temperature steam to sanitize surfaces without chemicals</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Shoe Sanitizing Station</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Disinfects footwear before entry into growing areas</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Hand-Wash Station</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides hygienic hand-washing before entering clean zones</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">UV Sterilization Unit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Disinfects surfaces and air using UV-C light</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Insect-Proof Screens</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Blocks insects from entering growing rooms through vents/windows</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pest Monitoring Traps</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Tracks pest activity for early intervention</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Insect Light Trap</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Attracts and captures flying insects using light</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
