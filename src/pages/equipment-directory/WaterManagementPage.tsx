import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function WaterManagementPage() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO title="Water Management | Organic Mushrooms Farm" description="Detailed equipment list for Water Management." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Water Management
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Water Management.
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
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Storage Tank</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stores water reserves for farm-wide daily use</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Pump</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Moves water from source/storage to point of use</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pressure Pump</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Boosts water pressure for spraying and cleaning systems</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">RO Plant</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes dissolved impurities to produce clean process water</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">UV Water Sterilizer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Uses UV light to kill bacteria/pathogens in water</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Softener</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes hardness minerals to protect equipment and improve water quality</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Filtration Unit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Filters out sediments and particles from water supply</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Chiller</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Cools water used for spraying or process cooling</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Automatic Dosing Pump</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Injects precise chemical/nutrient doses into water lines</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Pressure Controller</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Maintains consistent pressure across the water distribution system</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Flow Meter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Measures water usage/flow rate for monitoring and control</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">TDS Meter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Checks total dissolved solids in water for quality control</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">EC Meter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Measures water's electrical conductivity to assess nutrient/salt content</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Quality Testing Kit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Field-tests water for pH, chlorine and contamination levels</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Spray Nozzles</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Distributes fine water mist evenly for humidity/casing watering</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Misting Pipeline</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Carries water to spray nozzles across the growing room</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Drainage Channels</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes excess water and runoff from growing/processing areas</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Effluent Collection Tank</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Collects wastewater before treatment or disposal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
