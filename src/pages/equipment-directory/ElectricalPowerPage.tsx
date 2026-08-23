import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ElectricalPowerPage() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO title="Electrical & Power | Organic Mushrooms Farm" description="Detailed equipment list for Electrical & Power." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Electrical & Power
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Electrical & Power.
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
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">DG Generator</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Supplies backup power during electricity outages</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Solar Power System</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Generates renewable power to reduce electricity costs</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">UPS</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides instant backup power for critical control systems</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Battery Backup</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stores power for short-duration outage protection</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Electrical Control Panel</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Centralizes control and monitoring of electrical circuits</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">MCC Panel</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Controls and protects motors used across the facility</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">VFD</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Adjusts motor speed to save energy and control equipment precisely</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Motor Starters</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Safely starts and stops electric motors</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Voltage Stabilizer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Protects equipment from voltage fluctuations</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Automatic Changeover</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Switches power source automatically during outages</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Energy Meter</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Tracks electricity consumption for cost monitoring</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Surge Protection</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Shields equipment from voltage spikes and surges</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Earthing System</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides electrical safety grounding across the facility</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Emergency Lighting</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Lights key areas automatically during power failure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
