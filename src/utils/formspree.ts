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
  // Function intentionally left blank to remove Formspree integration
  // as per user request.
  return Promise.resolve();
}
