import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function SafetyAdditionalPage() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO title="Safety (Additional) | Organic Mushrooms Farm" description="Detailed equipment list for Safety (Additional)." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Safety (Additional)
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Safety (Additional).
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
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Emergency Eye-Wash Station</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Flushes eyes immediately in case of chemical exposure</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Safety Shower</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Rinses off chemical spills from the body in an emergency</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Electrical Insulation Mat</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Protects workers from electric shock near control panels</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Lockout/Tagout Kit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Safely isolates machinery during maintenance to prevent accidental start-up</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Gas Detector</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Detects hazardous gas leaks (ammonia, CO2, etc.) in real time</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Smoke Detector</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Detects smoke early to prevent fire hazards</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Emergency Exit Lights</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Guides workers to exits safely during power failure</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Emergency Alarm/Siren</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Alerts entire facility during an emergency situation</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Fire Hose/Hydrant System</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides immediate water supply to fight fires</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Chemical Spill Kit</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Contains and cleans up chemical spills safely</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Chemical Storage Cabinet</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stores hazardous chemicals securely and safely</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">PPE Storage Cabinet</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Organizes and protects PPE gear for easy access</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
