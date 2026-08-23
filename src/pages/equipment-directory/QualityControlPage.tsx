import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function QualityControlPage() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO title="Quality Control & Monitoring | Organic Mushrooms Farm" description="Detailed equipment list for Quality Control & Monitoring." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Quality Control & Monitoring
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Quality Control & Monitoring.
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
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Temperature Data Logger</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Continuously records temperature trends for quality audits</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Humidity Data Logger</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Continuously records humidity trends for quality audits</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">CO₂ Data Logger</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Tracks carbon dioxide levels for growth optimization</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Ammonia Detector</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Detects harmful ammonia buildup in compost/growing areas</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Air Quality Monitor</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Monitors overall air quality inside production areas</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Infrared Thermometer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Takes quick, contactless surface temperature readings</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Compost Moisture Meter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Confirms compost moisture stays within the ideal range</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Quality Testing Kit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Verifies water safety and purity for process use</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">EC Meter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Checks electrical conductivity for nutrient/salt monitoring</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">TDS Meter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Measures dissolved solids for water quality checks</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Calibration Equipment</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Keeps sensors and meters accurate over time</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Batch/Production Tracking System</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Records and traces production batches for quality control</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
