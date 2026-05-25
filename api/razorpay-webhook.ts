import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { sendEmail, notifyAdmin } from '../server/email';

export const config = {
  api: {
    bodyParser: false,
  },
};

const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "Sonib491@";
const SUPABASE_URL = process.env.SUPABASE_URL || "https://placeholder-url.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-key";
const META_PIXEL_ID = process.env.META_PIXEL_ID || "925374987123460";
const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN || "";

async function getRawBody(req: VercelRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve(body);
    });
    req.on('error', (err) => {
      reject(err);
    });
  });
}

const hashMetaUserData = (str: string) => {
    if (!str) return "";
    return crypto.createHash('sha256').update(str.trim().toLowerCase()).digest('hex');
};

async function sendMetaCAPIEvent(eventName: string, paymentData: any, notes: any) {
    if (!META_CAPI_TOKEN) {
        console.warn("No META_CAPI_TOKEN provided. Skipping CAPI event.");
        return;
    }

    const customerEmail = paymentData.email || notes.customerEmail || "";
    const customerPhone = paymentData.contact || notes.customerPhone || "";
    const clientIp = notes.clientIp || "";
    const userAgent = notes.userAgent || "";
    const amount = paymentData.amount / 100;
    
    const payload = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                action_source: "website",
                user_data: {
                    client_ip_address: clientIp,
                    client_user_agent: userAgent,
                    em: customerEmail ? [hashMetaUserData(customerEmail)] : undefined,
                    ph: customerPhone ? [hashMetaUserData(customerPhone.replace(/\D/g, ''))] : undefined,
                },
                custom_data: {
                    currency: "INR",
                    value: amount,
                    content_name: notes.productType || "unknown_product",
                    order_id: paymentData.order_id || paymentData.id
                }
            }
        ]
    };

    try {
        const response = await fetch(`https://graph.facebook.com/v18.0/${META_PIXEL_ID}/events`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...payload, access_token: META_CAPI_TOKEN })
        });
        const result = await response.json();
        console.log(`[Meta CAPI] ${eventName} sent:`, result);
    } catch (e) {
        console.error(`[Meta CAPI] Error sending ${eventName}:`, e);
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const rawBody = await getRawBody(req);
    const signature = req.headers['x-razorpay-signature'] as string;

    if (!signature) {
      return res.status(400).send('Signature missing');
    }

    const expectedSignature = crypto
      .createHmac('sha256', WEBHOOK_SECRET)
      .update(rawBody)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error("Invalid signature");
      return res.status(400).send('Invalid signature');
    }

    const event = JSON.parse(rawBody);
    const payment = event.payload.payment.entity;
    
    const notes = payment.notes || {};
    const productType = notes.productType || "unknown";
    const customerName = notes.customerName || payment.email;
    const customerEmail = payment.email || notes.customerEmail;
    const customerPhone = payment.contact || notes.customerPhone;
    
    const amountStr = "INR " + (payment.amount / 100).toString();

    const placeholders = {
      customerName,
      customerEmail,
      customerPhone,
      orderId: payment.order_id || payment.id,
      amount: amountStr
    };

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
        // Log webhook payload
        await supabase.from('analytics_events').insert([{
            event_name: `webhook_${event.event}`,
            event_data: { payload: event.payload, account_id: event.account_id },
            session_id: payment.id,
            url: '/api/razorpay-webhook',
            user_agent: req.headers['user-agent'] || '',
            client_ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0],
            created_at: new Date().toISOString()
        }]);

        // Prevent duplicate processing
        if (event.event === 'payment.captured' || event.event === 'payment.failed') {
            const { data: existingPayment } = await supabase
                .from('payments')
                .select('id, payment_status')
                .eq('payment_id', payment.id)
                .single();
            
            if (existingPayment) {
                if (existingPayment.payment_status === 'success' || existingPayment.payment_status === event.event.split('.')[1]) {
                    console.log(`Duplicate webhook or already processed: ${payment.id}`);
                    return res.status(200).send('Already processed');
                }
            }
        }
    }

    if (event.event === 'payment.captured') {
        // Send Purchase to Meta CAPI
        await sendMetaCAPIEvent('Purchase', payment, notes);

        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            const { data: customer } = await supabase.from('customers').select('*').eq('email', customerEmail).single();
            if (!customer) {
                await supabase.from('customers').insert([{ name: customerName, email: customerEmail, phone: customerPhone }]);
            }
            
            await supabase.from('payments').upsert([{
                payment_id: payment.id,
                order_id: payment.order_id || '',
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                payment_status: 'success',
                amount: payment.amount,
            }], { onConflict: 'payment_id' });

            if (productType === "consultation") {
                await supabase.from('consultant_bookings').insert([{
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    preferred_date: notes.preferredDate || "",
                    status: 'success',
                    order_id: payment.order_id
                }]);
            } else if (productType === "training") {
                await supabase.from('training_orders').insert([{
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    status: 'success',
                    order_id: payment.order_id
                }]);
            }
        }

        await sendEmail(customerEmail, productType, 'done', placeholders);
        await notifyAdmin(`New Payment Collected: ${productType}`, `Order ${payment.order_id || payment.id} was paid successfully for ${amountStr}`);

    } else if (event.event === 'payment.failed') {
        // Send PaymentFailed to Meta CAPI
        await sendMetaCAPIEvent('PaymentFailed', payment, notes);

        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            await supabase.from('payments').upsert([{
                payment_id: payment.id,
                order_id: payment.order_id || '',
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                payment_status: 'failed',
                amount: payment.amount,
                notes: payment.error_description ? { error: payment.error_description } : {}
            }], { onConflict: 'payment_id' });
        }
        await sendEmail(customerEmail, productType, 'failed', placeholders);
    }
    
    // Additional logic for pending could be mapped if needed via orders webhooks

    return res.status(200).send('OK');
  } catch (error) {
    console.error("Webhook processing error:", error);
    return res.status(500).send('Internal Server Error');
  }
}
