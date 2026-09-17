"use client";
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import { FloatingWidgetsLayer } from '@/components/FloatingWidgetsLayer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { FloatingBottomMenu } from '@/components/FloatingBottomMenu';

export function ConditionalWidgets() {
  const pathname = usePathname();
  // Hide on checkout pages
  const isCheckoutPage = pathname?.includes('/training-checkout') || pathname?.includes('/checkout') || pathname?.includes('/training/success') || pathname?.includes('/training/cancel');

  if (isCheckoutPage) {
    return null;
  }

  return (
    <>
      {/* Global Footer */}
      <Footer />

      {/* ================= FLOATING STACK LAYER ================= */}
      <FloatingWidgetsLayer />

      {/* Right Side: WhatsApp Floating Action */}
      <WhatsAppWidget />

      {/* Bottom Mobile Scrollable Dock */}
      <FloatingBottomMenu />
    </>
  );
}
