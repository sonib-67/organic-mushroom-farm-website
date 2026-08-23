import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LaboratoryPage() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO title="Laboratory | Organic Mushrooms Farm" description="Detailed equipment list for Laboratory." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Laboratory
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Laboratory.
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
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Hot Air Oven</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Dry-sterilizes glassware and heat-stable lab tools</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">BOD Incubator</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Maintains precise temperature for culture growth studies</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Precision/Sensitive Balance</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Weighs lab ingredients and samples with high accuracy</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">pH Meter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Measures acidity/alkalinity of culture media and water</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Deep Freezer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stores culture stocks and samples at sub-zero temperatures long-term</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Distilled Water Unit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Produces pure water for media preparation and lab use</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">RO Water Purifier</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Filters water to remove minerals/contaminants for lab and process use</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Laboratory Refrigerator</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stores media, reagents and cultures at controlled cool temperature</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Media Preparation Vessel</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Used to prepare and sterilize agar/nutrient media in bulk</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Culture Storage Cabinet</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Organizes and protects stored culture slants and stocks</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Glassware Washing Station</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Cleans lab glassware thoroughly before sterilization</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">UV Sterilization Unit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Uses UV light to disinfect surfaces and reduce airborne contamination</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Clean-Room HEPA Filtration</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Filters incoming air to remove contaminants from the lab environment</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Positive-Pressure System</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Keeps clean room air pressure higher than outside to prevent contaminant entry</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Laboratory Gas Stove/Burner</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides open flame for flame-sterilizing tools during transfers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
