import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import PaymentCancelledClient from './PaymentCancelledClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Payment Cancelled | Organic Mushroom Farm',
  description: 'Your booking process was cancelled. You can easily retry or reach out to our team.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentCancelledPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 flex items-center justify-center">
      <Suspense
        fallback={
          <div className="text-center py-20 text-slate-500 dark:text-slate-400 text-xs">
            Loading...
          </div>
        }
      >
        <PaymentCancelledClient />
      </Suspense>
    </main>
  );
}
