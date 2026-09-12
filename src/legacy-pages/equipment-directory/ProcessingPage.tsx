import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ProcessingPage() {
  return (
    <div className="font-sans bg-transparent dark:bg-transparent min-h-screen">
      <SEO title="Processing | Organic Mushrooms Farm" description="Detailed equipment list for Processing." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Processing
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Processing.
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
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Mushroom Washing Unit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Cleans harvested mushrooms before processing</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Mushroom Slicing Machine</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Cuts mushrooms into uniform slices for drying/processing</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Blanching Unit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Briefly heat-treats mushrooms to stop enzyme activity before drying/freezing</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Steam Blancher</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Uses steam to blanch mushrooms quickly and evenly</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pulverizer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Grinds dried mushrooms into fine powder</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Solar Dryer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Uses solar heat to dry mushrooms economically</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Hot-Air Dryer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Uses controlled hot air to dry mushrooms uniformly</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Vacuum Packing Machine</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes air from packs to extend shelf life</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Stainless-Steel Processing Tables</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides a hygienic work surface for mushroom processing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
