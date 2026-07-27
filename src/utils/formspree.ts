export interface FormspreePaymentPayload {
  name: string;
  phone: string;
  email?: string;
  preferredDate?: string;
  productType: string;
  amount: string; // e.g., "₹299", "₹199", "₹59", "₹500"
  status: 'INITIATED' | 'DONE' | 'FAILED' | 'CANCELLED';
  paymentId?: string;
  orderId?: string;
}

export async function sendPaymentNotificationToFormspree(payload: FormspreePaymentPayload) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        subject: `Payment ${payload.status}: ${payload.productType} (${payload.amount})`,
        name: payload.name || "Customer",
        phone: payload.phone,
        email: payload.email || 'no-reply@organicmushroomsfarm.com',
        service: payload.productType,
        message: `
Payment Status: ${payload.status}
Amount: ${payload.amount}
Payment ID: ${payload.paymentId || 'N/A'}
Order ID: ${payload.orderId || 'N/A'}
Preferred Date: ${payload.preferredDate || 'N/A'}
Timestamp: ${new Date().toLocaleString()}
        `
      })
    });
    if (!response.ok) {
      console.warn('[Formspree] Response not OK:', await response.text());
    }
  } catch (err) {
    console.error('[Formspree] Error sending notification:', err);
  }
}
