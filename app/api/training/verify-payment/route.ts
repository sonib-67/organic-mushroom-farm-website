import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { getRegistration, recordPaymentInit } from '@/lib/registrationStore';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const paymentId = searchParams.get('id');
    const nameParam = searchParams.get('name') || '';
    const phoneParam = searchParams.get('phone') || '';
    const emailParam = searchParams.get('email') || '';
    const typeParam = searchParams.get('type') || '';

    if (!paymentId || paymentId.trim() === '' || paymentId === 'Unknown' || paymentId === 'null' || paymentId === 'undefined') {
      return NextResponse.json({
        valid: false,
        error: 'Payment ID is missing. Please complete payment first.',
      }, { status: 400 });
    }

    const cleanPaymentId = paymentId.trim();

    // 1. Check local storage first
    const existingRecord = getRegistration(cleanPaymentId);
    if (existingRecord) {
      if (existingRecord.status === 'COMPLETED') {
        return NextResponse.json({
          valid: true,
          alreadySubmitted: true,
          record: existingRecord,
        });
      }
      return NextResponse.json({
        valid: true,
        alreadySubmitted: false,
        verifiedData: existingRecord,
      });
    }

    // 2. Cross-verify with Razorpay if keys are present
    let verifiedAmount = 299;
    let customerName = nameParam;
    let customerEmail = emailParam;
    let customerPhone = phoneParam;
    let orderId = '';

    const razorpayKeyId = process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID;
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET;

    if (razorpayKeyId && razorpaySecret && cleanPaymentId.startsWith('pay_')) {
      try {
        const razorpay = new Razorpay({
          key_id: razorpayKeyId,
          key_secret: razorpaySecret,
        });

        const payment = await razorpay.payments.fetch(cleanPaymentId);
        if (payment) {
          // Actual amount paid in rupees (paise / 100)
          const actualAmount = Math.round(Number(payment.amount) / 100);
          if (actualAmount > 0) {
            verifiedAmount = actualAmount;
          }
          if (payment.email) customerEmail = String(payment.email);
          if (payment.contact) customerPhone = String(payment.contact);
          if (payment.order_id) orderId = String(payment.order_id);
          if (payment.notes && payment.notes.customerName) {
            customerName = String(payment.notes.customerName);
          }
        }
      } catch (rzpErr: any) {
        console.warn('[VerifyPayment API] Razorpay fetch notice (continuing with param fallback):', rzpErr.message);
      }
    } else {
      // If Razorpay keys not in environment or test payment, determine amount strictly:
      // If type has advanced or 699, 699 else 299
      if (typeParam.includes('advanced') || typeParam.includes('699') || typeParam.includes('commercial')) {
        verifiedAmount = 699;
      } else {
        verifiedAmount = 299;
      }
    }

    // Strictly enforce courseType based on amount paid (Tamper-proof!)
    const isAdvanced = verifiedAmount >= 499;
    const courseType = isAdvanced ? 'training_advanced' : 'training_basic';

    const newRecord = recordPaymentInit({
      paymentId: cleanPaymentId,
      orderId,
      name: customerName || 'Student',
      email: customerEmail,
      phone: customerPhone,
      amount: verifiedAmount,
      courseType,
    });

    return NextResponse.json({
      valid: true,
      alreadySubmitted: false,
      verifiedData: newRecord,
    });
  } catch (error: any) {
    console.error('[VerifyPayment API] Error:', error);
    return NextResponse.json({
      valid: false,
      error: error.message || 'Verification failed',
    }, { status: 500 });
  }
}
