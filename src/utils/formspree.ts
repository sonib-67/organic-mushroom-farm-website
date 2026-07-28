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
  // Payment email notifications via nodemailer have been removed as per request.
  console.log('[Payment] Notification skipped for:', payload.status);
}
