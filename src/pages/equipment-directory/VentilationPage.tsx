import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function VentilationPage() {
  return (
    <div className="font-sans bg-transparent dark:bg-transparent min-h-screen">
      <SEO title="Ventilation & Air Management | Organic Mushrooms Farm" description="Detailed equipment list for Ventilation & Air Management." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Ventilation & Air Management
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Ventilation & Air Management.
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
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Fresh-Air Blower</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Pushes outside fresh air into growing rooms for gas exchange</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Return-Air Duct</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Carries used room air back to the air handling unit</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Fresh-Air Duct</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Delivers filtered fresh air into growing rooms</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pre-Filter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Captures large dust particles before finer filtration</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">HEPA/Fine Air Filter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes fine particles and spores from incoming air</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Motorized Damper</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Automatically regulates airflow volume through ducts</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Airflow Sensor</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Detects air speed to maintain consistent ventilation</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Differential Pressure Sensor</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Tracks pressure changes across filters and rooms</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Positive-Pressure System</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Maintains clean-to-dirty airflow direction to prevent contamination</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Air Balancing/Duct Control System</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Balances airflow evenly across multiple rooms/zones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
