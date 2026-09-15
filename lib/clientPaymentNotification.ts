export interface ClientPaymentNotificationPayload {
  name: string;
  phone: string;
  email: string;
  preferredDate?: string;
  productType: string;
  amount: string;
  status: 'INITIATED' | 'DONE' | 'CANCELLED' | 'FAILED';
  orderId?: string;
  paymentId?: string;
}

/**
 * Robust client-side dispatcher for payment notifications.
 * Uses keepalive: true to prevent browser cancellation on page redirects (router.push).
 */
export async function sendClientPaymentNotification(payload: ClientPaymentNotificationPayload): Promise<boolean> {
  try {
    const jsonString = JSON.stringify(payload);

    // 1. Try standard fetch with keepalive: true (keeps connection alive across page navigation)
    if (typeof fetch !== 'undefined') {
      const res = await fetch('/api/payment-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: jsonString,
        keepalive: true,
      });
      return res.ok;
    }

    // 2. Fallback to navigator.sendBeacon if fetch is unavailable
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([jsonString], { type: 'application/json' });
      return navigator.sendBeacon('/api/payment-notification', blob);
    }
  } catch (err) {
    console.error('[sendClientPaymentNotification] Error dispatching notification:', err);
  }
  return false;
}
