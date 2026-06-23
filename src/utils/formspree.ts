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
    const response = await fetch('https://formsubmit.co/ajax/df116a35555567e9addd5cf3304c3af1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `Payment ${payload.status}: ${payload.productType} (${payload.amount})`,
        customerName: payload.name,
        customerPhone: payload.phone,
        customerEmail: payload.email || 'N/A',
        preferredDate: payload.preferredDate || 'N/A',
        productType: payload.productType,
        amount: payload.amount,
        status: payload.status,
        paymentId: payload.paymentId || 'N/A',
        orderId: payload.orderId || 'N/A',
        timestamp: new Date().toLocaleString()
      })
    });
    if (!response.ok) {
      console.warn('[FormSubmit] Response not OK:', await response.text());
    }
  } catch (err) {
    console.error('[FormSubmit] Error sending notification:', err);
  }
}
