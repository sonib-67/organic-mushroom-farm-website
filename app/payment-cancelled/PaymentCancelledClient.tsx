'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { sendClientPaymentNotification } from '@/lib/clientPaymentNotification';
import { AlertCircle, RefreshCw, ArrowLeft, HeadphonesIcon, HelpCircle, Check, Gift, Clock, Sparkles } from 'lucide-react';

export default function PaymentCancelledClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const amountParam = searchParams?.get('amount') || '59';
  const productName = searchParams?.get('productName') || '1-on-1 Consultation';
  const productType = searchParams?.get('productType') || 'consultant';
  const fromPage = searchParams?.get('from') || '/book-consultant';
  const name = searchParams?.get('name') || '';
  const phone = searchParams?.get('phone') || '';
  const email = searchParams?.get('email') || '';
  const date = searchParams?.get('date') || '';

  useEffect(() => {
    if (name && email && email !== 'N/A') {
      sendClientPaymentNotification({
        name,
        phone,
        email,
        productType: productName,
        amount: amountParam.startsWith('₹') ? amountParam : `₹${amountParam}`,
        status: 'CANCELLED',
      });
    }
  }, [name, phone, email, productName, amountParam]);

  const isSiteVisit = productType === 'on_site' || fromPage.includes('on-site');
  const isConsultation = !isSiteVisit && (productType === 'consultant' || fromPage.includes('consultant'));
  const isWorkshop = productType === 'workshop' || fromPage.includes('workshop');
  const isAdvancedTraining = productType === 'training_advanced';

  const handleRetry = () => {
    if (fromPage) {
      router.push(fromPage);
    } else if (isSiteVisit) {
      router.push('/on-site-consultation');
    } else {
      router.push('/book-consultant');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto py-8 sm:py-12 px-4">
      <Link
        href={fromPage || (isSiteVisit ? '/on-site-consultation' : '/')}
        className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-4"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to {isSiteVisit ? 'Farm Visit page' : isConsultation ? 'Consultation page' : isWorkshop ? 'Workshop page' : 'Home'}
      </Link>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl text-left relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500" />

        {isSiteVisit ? (
          <div>
            <div className="text-center pb-3">
              <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-950/70 text-red-500 flex items-center justify-center mx-auto mb-3 shadow-md ring-1 ring-red-500/20">
                <AlertCircle className="w-8 h-8" />
              </div>

              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Booking Incomplete!
              </h1>

              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-[11px] font-bold text-red-600 dark:text-red-400 mt-2 mb-3">
                <Clock className="w-3 h-3 animate-pulse" /> ₹500 Farm Visit Slot Not Reserved
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
                {name ? `Hi ${name}, ` : ''}Your payment for the <strong>On-Site Farm Visit Consultation</strong> at Katangi, Jabalpur was cancelled or aborted. No money was deducted from your bank account.
              </p>
            </div>

            {/* Benefit highlights box */}
            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4 my-4 space-y-2 text-xs">
              <h2 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-emerald-500" /> What You Experience in This Farm Visit:
              </h2>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 pl-1">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Live Commercial Plant Tour:</strong> Walk through operational growing rooms & climate setups.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Compost Tunnel Engineering:</strong> Real-world inspection of 2000-bag pasteurization units.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Face-to-Face Founder Consultation:</strong> Clear all doubts regarding DPR, NHB subsidy & market tie-ups.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Contamination & Hygiene Protocols:</strong> Learn air-handling and sterilization firsthand.</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleRetry}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" /> Try Again & Reserve Visit (₹500)
              </button>

              <Link
                href="/on-site-consultation"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Review Visit Details
              </Link>
            </div>
          </div>
        ) : isConsultation ? (
          <div>
            <div className="text-center pb-3">
              <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-950/70 text-red-500 flex items-center justify-center mx-auto mb-3 shadow-md ring-1 ring-red-500/20">
                <AlertCircle className="w-8 h-8" />
              </div>

              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Booking Incomplete!
              </h1>

              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-[11px] font-bold text-red-600 dark:text-red-400 mt-2 mb-3">
                <Clock className="w-3 h-3 animate-pulse" /> ₹59 Consultation Slot Not Reserved
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
                {name ? `Hi ${name}, ` : ''}Your payment for the <strong>1-on-1 Business Call Consultancy</strong> was cancelled or aborted. No money was deducted from your bank account.
              </p>
            </div>

            {/* Benefit highlights box */}
            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4 my-4 space-y-2 text-xs">
              <h2 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-blue-500" /> What You Get in This ₹59 Call:
              </h2>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 pl-1">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Custom Project Blueprint:</strong> Tailored plan for your exact space and budget.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Subsidy & DPR Guidance:</strong> Step-by-step help with NHB & MIDH 40% subsidies.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Contamination Protocols:</strong> Avoid loss from green mold & climate swings.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Direct Founder Callback:</strong> Unfiltered expert answers to all your questions.</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleRetry}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-blue-500/25 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" /> Try Again & Reserve Slot (₹59)
              </button>

              <Link
                href="/book-consultant"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Review Consultation Details
              </Link>
            </div>
          </div>
        ) : isWorkshop ? (
          <div>
            <div className="text-center pb-3">
              <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-500 flex items-center justify-center mx-auto mb-3 shadow-md">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Workshop Registration Incomplete
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Your registration for the Live Mushroom Farming Workshop (₹199) was not completed.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <button
                onClick={handleRetry}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" /> Complete Registration (₹199)
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center pb-3">
              <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-950/70 text-red-500 flex items-center justify-center mx-auto mb-3 shadow-md">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Payment Cancelled
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Your transaction was cancelled. No amount was deducted.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <button
                onClick={handleRetry}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" /> Retry Payment
              </button>
            </div>
          </div>
        )}

        {/* Support Section */}
        <div className="pt-4 mt-5 border-t border-slate-200 dark:border-slate-800 text-center">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500" /> Need Help or Have Questions?
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
            If you face any issues during online payment, our support team is available on WhatsApp.
          </p>
          <a
            href="https://wa.me/919203544140?text=Hi%20Organic%20Mushroom%20Farm,%20I%20faced%20an%20issue%20during%20consultation%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors"
          >
            <HeadphonesIcon className="w-3.5 h-3.5" /> Chat with Helpline on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
