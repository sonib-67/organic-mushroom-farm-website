import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function EquipmentDirectoryPage() {
  return (
    <div className="font-sans bg-transparent dark:bg-transparent min-h-screen">
      <SEO title="EQUIPMENT | Organic Mushrooms Farm" description="Detailed list of equipment for commercial mushroom farming." />
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          EQUIPMENT
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Comprehensive directory covering all scale-wise requirements for equipment.
        </p>
        <div className="space-y-8 md:space-y-12">

          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Medium-Scale / Small Commercial</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pasteurization Drum / Tank</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Pasteurizes substrate using hot water or steam</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Humidifier (ultrasonic fogger)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Maintains stable humidity in the grow/fruiting room</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Exhaust Fan / Ventilation System</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Exchanges fresh air and controls CO2 levels</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Small AC / Cooling Unit</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Regulates temperature in the fruiting room</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Walk-in Inoculation Chamber</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Enables clean bulk spawning of larger batches</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Small Cold Storage Room</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Keeps harvested mushrooms fresh before sale</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Weighing Scale</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Weighs mushrooms before packaging</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Composting Unit (Industrial)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Compost Pre-Wetting Area</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Soaks raw straw/materials as the first step of composting</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Bunker Rooms (with aeration blowers)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides controlled aeration for Phase-I composting</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Compost Tunnel (Phase II/III)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Pasteurizes and conditions compost under controlled climate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Spawn Production Unit</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Spawn Tank</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stores and grows liquid culture/spawn in bulk</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Incubation Room/Racks</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides ideal conditions for spawn colonization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Substrate Prep & Bag Filling (Commercial)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grow Bags / Substrate Bags (bulk)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Holds substrate for colonization at commercial scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Climate Control & Growing Rooms</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Automated Climate Control Computer</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Manages temperature, humidity & CO2 together automatically</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Ventilation Ducts & Air Distribution System</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Distributes fresh air evenly across growing rooms</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Water Pasteurization & Spray System</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Treats spray water to prevent water-borne infections</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Insulated Panel Growing Rooms</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Maintains stable internal climate year-round</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">CO2 Sensor & Controller</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Monitors and regulates carbon dioxide levels for healthy fruiting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Harvesting, Grading & Packaging</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Harvesting Trolley/Trays</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Collects mushrooms during harvest</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Cold Storage / Cold Room (large)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stores bulk harvest at low temperature for freshness</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Drying, Processing & Value Addition</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pickling/Processing Unit</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Prepares mushroom pickles and other value-added products</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Beginner / Home-Scale</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pressure Cooker</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Sterilizes grain spawn and small batches of substrate</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Still Air Box (SAB)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Low-cost sterile workspace for culture transfers and inoculation</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Spray Bottle / Hand Mister</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Manual misting to maintain humidity in small grow spaces</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Digital Thermometer & Hygrometer</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Monitors temperature and humidity in the grow area</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Grow Bags / Spawn Bags (with filter patch)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Holds substrate for colonization and fruiting</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Injection Port + Syringes</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Used to inoculate bags with liquid culture or spores</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Mini Grow Tent / Fruiting Chamber</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides a controlled humid space for fruiting at small scale</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">LED Grow Light</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides low-intensity light needed for mushroom pinning</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Shelving Rack (wood/plastic)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Organizes bags, trays, and jars in limited space</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Digital Timer</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Automates misting or lighting cycles</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Mixing Tub / Bucket</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Used to hand-mix substrate ingredients</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Alcohol Lamp / Torch</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Sterilizes small tools like scalpels and needles during transfers</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Micropore Tape / Filter Patches</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Allows gas exchange while keeping contaminants out of jars/bags</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-slate-800/20 glass rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Lab & Culture Equipment (Genetics/Strain Work)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">

                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Laminar Flow Hood</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides HEPA-filtered sterile airflow for clean lab work</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Microscope (with mechanical stage)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Identifies contaminants and studies spore/mycelium characteristics</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Magnetic Stirrer</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Mixes liquid culture nutrient solutions evenly</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Agar Petri Dishes & Media</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Used for culture isolation, cloning, and strain maintenance</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Culture Slants / Test Tubes</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Stores and preserves mushroom genetics long-term</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Scalpel & Surgical Blades</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Used for precise agar work and tissue cloning</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Centrifuge Tubes</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Used for liquid culture prep and sample storage</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Incubator (lab type)</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Maintains ideal temperature for culture and spawn colonization</td>
                  </tr>
                  <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Refrigerator / Culture Storage Fridge</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Preserves master cultures and slants</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
