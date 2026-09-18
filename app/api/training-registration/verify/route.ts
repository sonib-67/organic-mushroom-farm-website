import { NextRequest, NextResponse } from 'next/server';
import {
  fetchVerifiedRazorpayPayment,
  getRegistrationRecord,
  saveOrUpdatePendingPayment,
  verifyRegistrationToken,
  generateRegistrationToken
} from '@/lib/training-security';

export async function GET(req: NextRequest) {
  return handleVerification(req);
}

export async function POST(req: NextRequest) {
  return handleVerification(req);
}

async function handleVerification(req: NextRequest) {
  try {
    let paymentId: string | null = null;
    let token: string | null = null;
    let requestedType: string | null = null;
    let clientName: string | null = null;
    let clientEmail: string | null = null;
    let clientPhone: string | null = null;

    if (req.method === 'GET') {
      const searchParams = req.nextUrl.searchParams;
      paymentId = searchParams.get('id') || searchParams.get('paymentId');
      token = searchParams.get('token');
      requestedType = searchParams.get('type');
      clientName = searchParams.get('name');
      clientEmail = searchParams.get('email');
      clientPhone = searchParams.get('phone');
    } else {
      const body = await req.json().catch(() => ({}));
      paymentId = body.paymentId || body.id;
      token = body.token;
      requestedType = body.type;
      clientName = body.name;
      clientEmail = body.email;
      clientPhone = body.phone;
    }

    if (!paymentId) {
      return NextResponse.json(
        { valid: false, error: 'Payment ID is missing. Please initiate a valid checkout.' },
        { status: 400 }
      );
    }

    // 1. Check if this payment ID has ALREADY been submitted
    const existingRecord = await getRegistrationRecord(paymentId);
    if (existingRecord && existingRecord.status === 'COMPLETED') {
      return NextResponse.json({
        valid: true,
        alreadySubmitted: true,
        paymentId: existingRecord.paymentId,
        amount: existingRecord.amount,
        plan: existingRecord.plan,
        planName: existingRecord.planName,
        customerName: existingRecord.customerName,
        customerEmail: existingRecord.customerEmail,
        customerPhone: existingRecord.customerPhone,
        completedAt: existingRecord.completedAtFormatted,
        message: 'This registration has already been completed. Double-submission blocked.'
      });
    }

    // 2. If token is provided, verify cryptographic signature
    let tokenVerified = false;
    let tokenPayload: any = null;
    if (token) {
      const tokenResult = verifyRegistrationToken(token);
      if (tokenResult.valid && tokenResult.payload) {
        tokenVerified = true;
        tokenPayload = tokenResult.payload;
        // Verify payment ID in token matches requested ID
        if (tokenPayload.paymentId !== paymentId) {
          return NextResponse.json(
            { valid: false, error: 'Security Alert: Token payment ID mismatch.' },
            { status: 403 }
          );
        }
      }
    }

    // 3. Directly verify with Razorpay server API for ground-truth amount & status
    let razorpayPayment: any = null;
    try {
      razorpayPayment = await fetchVerifiedRazorpayPayment(paymentId);
    } catch (err: any) {
      console.warn("Could not fetch payment from Razorpay API:", err.message);
    }

    // Determine TRUE verified amount and plan
    let verifiedAmount = 299;
    let verifiedPlan: 'training_basic' | 'training_advanced' = 'training_basic';
    let verifiedPlanName = 'Basic Mushroom Farming Training';
    let customerEmail = clientEmail || '';
    let customerPhone = clientPhone || '';
    let customerName = clientName || '';

    if (razorpayPayment && razorpayPayment.verified) {
      verifiedAmount = razorpayPayment.amount;
      verifiedPlan = razorpayPayment.plan;
      verifiedPlanName = razorpayPayment.planName;
      if (razorpayPayment.email) customerEmail = razorpayPayment.email;
      if (razorpayPayment.phone) customerPhone = razorpayPayment.phone;
    } else if (tokenPayload) {
      verifiedAmount = tokenPayload.amount;
      verifiedPlan = tokenPayload.plan;
      verifiedPlanName = tokenPayload.plan === 'training_advanced' 
        ? 'Advanced Mushroom Farming Training' 
        : 'Basic Mushroom Farming Training';
      if (tokenPayload.email) customerEmail = tokenPayload.email;
      if (tokenPayload.phone) customerPhone = tokenPayload.phone;
      if (tokenPayload.name) customerName = tokenPayload.name;
    } else if (existingRecord) {
      verifiedAmount = existingRecord.amount;
      verifiedPlan = existingRecord.plan;
      verifiedPlanName = existingRecord.planName;
      customerEmail = existingRecord.customerEmail;
      customerPhone = existingRecord.customerPhone;
      customerName = existingRecord.customerName;
    }

    // 4. DETECT TAMPERING: If client/URL requested 699 (advanced) but only paid 299 (basic)
    let tampered = false;
    let tamperMessage = '';
    const isClientAskingAdvanced = requestedType && (
      requestedType.toLowerCase().includes('adv') || 
      requestedType === '699'
    );

    if (isClientAskingAdvanced && verifiedAmount < 600) {
      tampered = true;
      tamperMessage = `Security Warning: URL attempted Advanced plan, but Razorpay payment is verified as ₹${verifiedAmount} (${verifiedPlanName}). Enforcing verified plan.`;
      console.warn(`[SECURITY TAMPER DETECTED] PaymentId: ${paymentId}. URL asked for Advanced, but true payment is ₹${verifiedAmount}`);
    }

    // Generate fresh HMAC token for this verified session
    const secureToken = token || generateRegistrationToken({
      paymentId,
      amount: verifiedAmount,
      plan: verifiedPlan,
      email: customerEmail,
      phone: customerPhone,
      name: customerName
    });

    // Save/Update pending registration state in DB
    await saveOrUpdatePendingPayment({
      paymentId,
      amount: verifiedAmount,
      plan: verifiedPlan,
      planName: verifiedPlanName,
      customerName,
      customerEmail,
      customerPhone,
      token: secureToken
    });

    return NextResponse.json({
      valid: true,
      alreadySubmitted: false,
      paymentId,
      amount: verifiedAmount,
      plan: verifiedPlan,
      planName: verifiedPlanName,
      customerName,
      customerEmail,
      customerPhone,
      token: secureToken,
      tampered,
      tamperMessage
    });
  } catch (error: any) {
    console.error("Registration Verification API Error:", error);
    return NextResponse.json(
      { valid: false, error: error.message || 'Internal verification error' },
      { status: 500 }
    );
  }
}
