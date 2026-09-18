"use client";

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import { FloatingWidgetsLayer } from '@/components/FloatingWidgetsLayer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { FloatingBottomMenu } from '@/components/FloatingBottomMenu';
import { useEffect, useState } from 'react';

export function ConditionalWidgets() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname();

  // Hide on checkout pages
  const isCheckoutPage = pathname?.includes('/training-checkout') || pathname?.includes('/checkout') || pathname?.includes('/training/success') || pathname?.includes('/training/cancel') || pathname?.includes('/training/register');
  
  if (isCheckoutPage) {
    return null;
  }

  // To prevent hydration mismatch, you could return null during SSR if it differs,
  // but here it's generally safe as long as we have the pathname on client.
  return (
    <>
      {/* Global Footer */}
      <Footer />
      {/* ================= FLOATING STACK LAYER ================= */}
      {mounted && (
        <>
          <FloatingWidgetsLayer />
          {/* Right Side: WhatsApp Floating Action */}
          <WhatsAppWidget />
          {/* Bottom Mobile Scrollable Dock */}
          <FloatingBottomMenu />
        </>
      )}
    </>
  );
}
