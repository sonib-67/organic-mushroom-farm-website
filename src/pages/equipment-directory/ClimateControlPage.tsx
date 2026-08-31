import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ClimateControlPage() {
  return (
    <div className="font-sans bg-transparent dark:bg-transparent min-h-screen">
      <SEO title="Climate Control | Organic Mushrooms Farm" description="Detailed equipment list for Climate Control." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Climate Control
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Climate Control.
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
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Dehumidifier</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes excess moisture from growing room air</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Heating System/Hot-Air Heater</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Raises room temperature during cold weather for optimal growth</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Humidity Controller</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Automatically maintains target humidity levels in growing rooms</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Temperature Controller/Thermostat</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Regulates room temperature within the ideal growth range</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Cooling Coil</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Removes heat from circulating air to cool the growing room</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Heating Coil</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Adds heat to circulating air to warm the growing room</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Remote Climate Monitoring System</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Lets operators check room conditions remotely via app/software</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Environmental Data Logger</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Records temperature, humidity and CO2 data over time for analysis</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Automatic Alarm System</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Alerts staff when climate parameters go outside safe limits</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Stage-Based Climate Controller</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Automatically adjusts climate settings for each growth stage (spawning, pinning, fruiting)</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Room Differential Pressure Sensor</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Monitors pressure difference between rooms to control airflow direction</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Airflow Sensor</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Measures air velocity to ensure correct ventilation rates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
