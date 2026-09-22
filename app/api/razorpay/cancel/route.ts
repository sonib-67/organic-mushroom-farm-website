import { NextResponse } from 'next/server';
import { sendTrainingEmailService } from '@/lib/trainingMailService';
import { syncTrainingToGoogleSheet } from '@/lib/googleSheetSync';

export async function POST(req: Request) {
  try {
    const { amount, currency, email, name, phone, orderId, planName } = await req.json();

    const priceStr = amount ? (typeof amount === 'number' ? `₹${amount}` : String(amount)) : "₹299";
    const planType = (priceStr.includes('699') || (planName && planName.toLowerCase().includes('advance'))) ? '699' : '299';

    // Sync to Google Sheet (299_Payment_Cancel or 699_Payment_Cancel)
    syncTrainingToGoogleSheet({
      action: 'training_lead',
      type: 'training',
      planType,
      status: 'CANCELLED',
      name: name || 'Lead',
      email: email || '',
      phone: phone || '',
      price: priceStr,
      trainingName: planName || (planType === '699' ? 'Advanced Commercial Training' : 'Basic Mushroom Farming Training'),
      orderId: orderId || '',
      errorMsg: 'User closed payment window / dropped checkout',
    }).catch(e => console.warn('[CancelRoute] Google sheet sync warning:', e));

    // Send Payment Cancelled Email explicitly when user closes the modal (Admin + Customer)
    await sendTrainingEmailService({
      type: 'CANCELLED',
      customerEmail: email,
      customerName: name,
      customerPhone: phone,
      amount: amount ? amount.toString() : "299",
      currency: currency || "INR",
      orderId: orderId,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Cancel email failed:', error);
    return NextResponse.json(
      { error: 'Failed to send cancel notification' },
      { status: 500 }
    );
  }
}
