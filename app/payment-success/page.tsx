import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import PaymentSuccessClient from './PaymentSuccessClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Payment Successful | Organic Mushroom Farm',
  description: 'Your payment was completed successfully. Your booking is confirmed and official invoice has been dispatched.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 flex items-center justify-center">
      <Suspense
        fallback={
          <div className="text-center py-20 text-slate-500 dark:text-slate-400 text-xs">
            Loading confirmation details...
          </div>
        }
      >
        <PaymentSuccessClient />
      </Suspense>
    </main>
  );
}
