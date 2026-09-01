'use client';
import React from 'react';
import SEO from '@/src/components/SEO';
import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

export default function HarvestPostHarvestPage() {
  return (
    <div className="font-sans bg-transparent dark:bg-transparent min-h-screen">
      <SEO title="Harvest & Post-Harvest — Additional | Organic Mushrooms Farm" description="Detailed equipment list for Harvest & Post-Harvest — Additional." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link href="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Harvest & Post-Harvest — Additional
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for Harvest & Post-Harvest — Additional.
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
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Harvesting Knives</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Cuts mushrooms cleanly from the growing bed during harvest</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Harvesting Scissors</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Trims mushroom stems precisely during picking</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Food-Grade Harvest Crates</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Collects and transports harvested mushrooms hygienically</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Stainless-Steel Work Tables</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Provides a hygienic surface for sorting, trimming and packing</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Sorting Tables</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Used by workers to sort mushrooms by size/quality after harvest</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Collection Bins</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Gathers sorted mushrooms before weighing and packing</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Pre-Cooling Chamber</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Rapidly cools harvested mushrooms to extend shelf life</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Dispatch Staging Area</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Holds finished packed products ready for outbound delivery</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Check-Weigher</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Automatically verifies pack weight for accuracy and compliance</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Packaging Conveyor</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Moves packs through the packaging line automatically</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Labeling Machine</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Applies product labels automatically on packed mushrooms</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Batch Coding Machine</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Prints batch numbers on packs for traceability</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Date Coding Machine</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Prints manufacturing/expiry dates on packaging</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Barcode Printer</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Prints barcodes for inventory and retail tracking</td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">Barcode Scanner</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">Scans barcodes for stock management and dispatch accuracy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
