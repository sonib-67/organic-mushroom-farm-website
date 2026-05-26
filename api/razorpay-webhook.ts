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
    
    // Fallbacks for non-payment event objects
    const payment = event.payload.payment?.entity || {};
    const orderEntity = event.payload.order?.entity || {};
    const refund = event.payload.refund?.entity || {};

    const orderId = payment.order_id || orderEntity.id || refund.order_id || '';
    const paymentId = payment.id || refund.payment_id || '';

    const notes = payment.notes || orderEntity.notes || refund.notes || {};
    const productType = notes.productType || "unknown";
    const customerName = notes.customerName || payment.email || "Customer";
    const customerEmail = payment.email || notes.customerEmail || "orders@mushroomtraining.online";
    const customerPhone = payment.contact || notes.customerPhone || "";
    
    const rawValAmount = payment.amount || orderEntity.amount || refund.amount || 0;
    const amountStr = "INR " + (rawValAmount / 100).toString();

    const placeholders = {
      customerName,
      customerEmail,
      customerPhone,
      orderId: orderId || paymentId,
      amount: amountStr
    };

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
        // Log webhook payload
        await supabase.from('analytics_events').insert([{
            event_name: `webhook_${event.event}`,
            event_data: { payload: event.payload, account_id: event.account_id },
            session_id: paymentId || orderId,
            url: '/api/razorpay-webhook',
            user_agent: req.headers['user-agent'] || '',
            client_ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0],
            created_at: new Date().toISOString()
        }]);

        // Prevent duplicate processing
        if (paymentId && (event.event === 'payment.captured' || event.event === 'payment.failed')) {
            const { data: existingPayment } = await supabase
                .from('payments')
                .select('id, payment_status')
                .eq('payment_id', paymentId)
                .single();
            
            if (existingPayment) {
                if (existingPayment.payment_status === 'success' || existingPayment.payment_status === event.event.split('.')[1]) {
                    console.log(`Duplicate webhook or already processed: ${paymentId}`);
                    return res.status(200).send('Already processed');
                }
            }
        }
    }

    if (event.event === 'payment.captured' || event.event === 'order.paid') {
        // Send Purchase to Meta CAPI
        if (paymentId) {
            await sendMetaCAPIEvent('Purchase', payment, notes);
        }

        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            const { data: customer } = await supabase.from('customers').select('*').eq('email', customerEmail).single();
            if (!customer) {
                await supabase.from('customers').insert([{ name: customerName, email: customerEmail, phone: customerPhone }]);
            }
            
            if (paymentId) {
                await supabase.from('payments').upsert([{
                    payment_id: paymentId,
                    order_id: orderId,
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    payment_status: 'success',
                    amount: rawValAmount,
                }], { onConflict: 'payment_id' });
            }

            // Sync the e-commerce orders table as requested
            if (orderId) {
                await supabase.from('orders')
                    .update({ status: 'paid', updated_at: new Date().toISOString() })
                    .eq('razorpay_order_id', orderId);
            }

            if (productType === "consultation") {
                await supabase.from('consultant_bookings').insert([{
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    preferred_date: notes.preferredDate || "",
                    status: 'success',
                    order_id: orderId
                }]);
            } else if (productType === "training") {
                await supabase.from('training_orders').insert([{
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    status: 'success',
                    order_id: orderId
                }]);
            }
        }

        await sendEmail(customerEmail, productType, 'done', placeholders);
        await notifyAdmin(`New Payment Collected: ${productType}`, `Order ${orderId || paymentId} was paid successfully for ${amountStr}`);

    } else if (event.event === 'payment.failed') {
        // Send PaymentFailed to Meta CAPI
        if (paymentId) {
            await sendMetaCAPIEvent('PaymentFailed', payment, notes);
        }

        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            await supabase.from('payments').upsert([{
                payment_id: paymentId,
                order_id: orderId,
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                payment_status: 'failed',
                amount: rawValAmount,
                notes: payment.error_description ? { error: payment.error_description } : {}
            }], { onConflict: 'payment_id' });

            if (orderId) {
                await supabase.from('orders')
                    .update({ status: 'failed', updated_at: new Date().toISOString() })
                    .eq('razorpay_order_id', orderId);
            }
        }
        await sendEmail(customerEmail, productType, 'failed', placeholders);

    } else if (event.event === 'refund.created' || event.event === 'refund.processed') {
        // Handle Refund Events
        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            if (orderId) {
                await supabase.from('orders')
                    .update({ status: 'refunded', updated_at: new Date().toISOString() })
                    .eq('razorpay_order_id', orderId);
            }
            if (paymentId) {
                await supabase.from('payments')
                    .update({ payment_status: 'refunded' })
                    .eq('payment_id', paymentId);
            }

            // Record into a refunds log
            await supabase.from('refunds').insert([{
                refund_id: refund.id,
                payment_id: paymentId,
                order_id: orderId,
                amount: rawValAmount,
                status: refund.status || 'processed',
                created_at: new Date().toISOString()
            }]);
        }
        
        // Notify Customer of Refund
        await sendEmail(customerEmail, productType, 'refunded', placeholders);
        // Notify Admin of Refund
        await notifyAdmin(`Payment Refunded: ${amountStr}`, `A refund of ${amountStr} has been successfully initiated for ${customerName} (Order: ${orderId})`);
    }
    
    return res.status(200).send('OK');
  } catch (error) {
    console.error("Webhook processing error:", error);
    return res.status(500).send('Internal Server Error');
  }
}
