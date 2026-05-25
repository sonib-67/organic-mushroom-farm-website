import express from 'express';
import cors from 'cors';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API Key is safe here.
const key_id = "rzp_live_Ssg7Eepps3J0ch";
const key_secret = "97qz8ls18Y1M4Vzuj1TCX9Ss"; // In a real app this should be in process.env

// ... previous code ...

// JSON API Endpoint requested by the user
app.post('/api/checkout-payload', (req, res) => {
  const { name, mobile, email, productType } = req.body;

  let amount = 0;
  let purpose = "";

  if (productType === "training") {
    amount = 29900;
    purpose = "Mushroom Farming Masterclass Training";
  } else if (productType === "consultation") {
    amount = 5900;
    purpose = "Expert 1-on-1 Business Consultation Slot";
  } else {
    return res.status(400).json({ error: "Invalid productType" });
  }

  // Generate exact payload structure
  const payload = {
    key_id: key_id,
    amount: amount,
    currency: "INR",
    name: "Organic Mushroom Farm",
    description: purpose,
    prefill: {
      name: name || "",
      email: email || "",
      contact: mobile || ""
    },
    notes: {
      product: purpose
    },
    theme: {
      color: "#25D366"
    }
  };

  res.json(payload);
});

// ------------- Webhook Controller Logic -------------

const getStandardAmount = (productType: string) => {
  if (productType === 'training') return 'INR 299';
  if (productType === 'consultant') return 'INR 59';
  return 'TBD';
};

const templates: Record<string, Record<string, { subject: string, html: string, sms_text: string }>> = {
  training: {
    done: {
      subject: "Order Confirmed: Commercial Mushroom Training Enrollment Successful",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;"><h2>Dear [Customer Name],</h2><p>Your enrollment in the Commercial Mushroom Training Program has been successfully confirmed. Your digital learning dashboard is now fully activated and accessible.</p><table style="width:100%; border-collapse:collapse; margin:20px 0;"><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Order ID:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Order ID]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Amount Paid:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Amount]</td></tr></table><p style="background:#FFF3CD; padding:12px; border-radius:4px; color:#664D03;"><b>Important Notice:</b> Live stream instruction sessions air strictly from 4:00 PM to 5:30 PM IST daily. Video interface controls remain locked during this window to ensure comprehensive module completion.</p><p>Sincerely,<br>Organic Mushroom Farm Administration</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555; line-height: 1.5;"><b>Support Contact:</b><br>Email: support@mushroomtraining.online<br>Phone: 9203544140</p><p style="font-size:11px; color:#777777; margin-top:15px;">This is an automated operational transmission from Organic Mushroom Farm. For direct inquiries, write to our support email listed above. Please do not reply directly to no-reply@mushroomtraining.online.</p></div></div>',
      sms_text: 'Confirmed: [Customer Name], your enrollment in Organic Mushroom Farm Training is complete. Order ID: [Order ID]. Support: 9203544140.'
    },
    pending: {
      subject: "Action Required: Complete Your Training Registration",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #FFF3CD;"><h2>Dear [Customer Name],</h2><p>Your registration for the Commercial Mushroom Training Program has been initiated, but payment is currently pending confirmation. Please complete the transaction to secure your seat.</p><p>Order ID: [Order ID]<br>Amount Due: [Amount]</p><p>Sincerely,<br>Organic Mushroom Farm Team</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Support:</b> support@mushroomtraining.online | 9203544140</p></div></div>',
      sms_text: 'Pending: [Customer Name], your payment for the training seat is outstanding. Complete your transaction for Order ID: [Order ID]. Support: 9203544140.'
    },
    failed: {
      subject: "Transaction Unsuccessful: Training Enrollment Failed",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;"><h2>Dear [Customer Name],</h2><p>We regret to inform you that your payment for the training program registration could not be processed successfully. Any funds deducted prematurely will be reverted by your bank within 3-5 business days. Please attempt the registration process again via our portal.</p><p>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Operations</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Assistance:</b> support@mushroomtraining.online | 9203544140</p></div></div>',
      sms_text: 'Failed: Training transaction for Order ID [Order ID] was unsuccessful. For help, contact 9203544140. Organic Mushroom Farm.'
    }
  },
  consultant: {
    done: {
      subject: "Confirmation: Consultation Session Booked",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;"><h2>Dear [Customer Name],</h2><p>Your 1-on-1 consultation session has been officially scheduled and locked in our calendar. An officer from our team will contact you shortly to coordinate scheduling parameters.</p><table style="width:100%; border-collapse:collapse; margin:20px 0;"><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Client Name:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Customer Name]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Registered Email:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Customer Email]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Registered Phone:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Customer Phone]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Order ID:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Order ID]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Transaction Value:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Amount]</td></tr></table><p>Sincerely,<br>Organic Mushroom Farm Advisory Division</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555; line-height: 1.5;"><b>Support Contact:</b><br>Email: support@mushroomtraining.online<br>Phone: 9203544140</p><p style="font-size:11px; color:#777777; margin-top:15px;">This is an automated operational transmission from Organic Mushroom Farm. For direct inquiries, write to our support email listed above. Please do not reply directly to no-reply@mushroomtraining.online.</p></div></div>',
      sms_text: 'Session Booked: [Customer Name], your advisory slot is confirmed under Order ID: [Order ID]. Coordinator helpline: 9203544140. Organic Mushroom Farm.'
    },
    pending: {
      subject: "Pending: Complete Your Consultation Booking",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #FFF3CD;"><h2>Dear [Customer Name],</h2><p>A request for an advisory session has been recorded, but the processing fee transaction remains incomplete. Kindly settle the outstanding balance to confirm your calendar slot.</p><p>Client Details:<br>Name: [Customer Name]<br>Email: [Customer Email]<br>Phone: [Customer Phone]<br>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Advisory Division</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Support:</b> support@mushroomtraining.online | 9203544140</p></div></div>',
      sms_text: 'Action Required: Payment pending for your consultation booking. Order ID: [Order ID]. Helpline: 9203544140. Organic Mushroom Farm.'
    },
    failed: {
      subject: "Booking Failed: Consultation Transaction Declined",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;"><h2>Dear [Customer Name],</h2><p>The transaction to secure your consulting session failed due to a payment gateway communication issue. Your credentials remain stored, but the reservation has been released. Kindly review your payment authorization and retry.</p><p>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Client Services</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Assistance:</b> support@mushroomtraining.online | 9203544140</p></div></div>',
      sms_text: 'Notice: Consultation booking failed due to a decline on Order ID [Order ID]. Contact support at 9203544140 for help. Organic Mushroom Farm.'
    }
  },
  spawn: {
    done: {
      subject: "Order Verified: Spawn Material Dispatched",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;"><h2>Dear [Customer Name],</h2><p>Your requisition for mushroom spawn has been authenticated. The logistics unit has initiated packaging protocols under controlled temperature parameters.</p><p>Batch Profile: [Product Type]<br>Order ID: [Order ID]<br>Invoice Total: [Amount]</p><p>Consignment tracking information will follow via email as soon as the logistics partner processes the cargo.</p><p>Sincerely,<br>Organic Mushroom Farm Laboratories</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555; line-height: 1.5;"><b>Support Contact:</b><br>Email: support@mushroomtraining.online<br>Phone: 9203544140</p><p style="font-size:11px; color:#777777; margin-top:15px;">This is an automated operational transmission from Organic Mushroom Farm. For direct inquiries, write to our support email listed above. Please do not reply directly to no-reply@mushroomtraining.online.</p></div></div>',
      sms_text: 'Dispatch Alert: [Customer Name], spawn batch under Order ID [Order ID] is in processing. Delivery Support: 9203544140. Organic Mushroom Farm.'
    },
    pending: {
      subject: "Awaiting Fulfillment: Spawn Invoice Pending Settlement",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #FFF3CD;"><h2>Dear [Customer Name],</h2><p>To authorize release of your spawn cultures from our inventory lines, please authorize settlement for the generated invoice below.</p><p>Order Reference: [Order ID]<br>Settle Balance: [Amount]</p><p>Sincerely,<br>Organic Mushroom Farm Inventory Management</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Support:</b> support@mushroomtraining.online | 9203544140</p></div></div>',
      sms_text: 'Requisition Pending: Spawn consignment [Order ID] requires settlement. Details or support: 9203544140. Organic Mushroom Farm.'
    },
    failed: {
      subject: "Order Voided: Spawn Acquisition Unsuccessful",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;"><h2>Dear [Customer Name],</h2><p>Your checkout transaction for spawn assets was terminated due to insufficient bank clearing confirmations. Your stock reservations have been cancelled to allow laboratory allocation to active order flows.</p><p>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Fulfillment Control</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Assistance:</b> support@mushroomtraining.online | 9203544140</p></div></div>',
      sms_text: 'Requisition Voided: Spawn transaction failed for Order ID [Order ID]. Stock released. Support: 9203544140. Organic Mushroom Farm.'
    }
  },
  mushroom: {
    done: {
      subject: "Order Confirmed: Organic Produce Allocation Secured",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;"><h2>Dear [Customer Name],</h2><p>Your order for organic culinary mushroom produce has been recorded. Our harvesting unit has pulled allocations from the production blocks to prepare them for immediate courier pick-up.</p><p>Tracking Registry: [Order ID]<br>Statement Amount: [Amount]</p><p>Sincerely,<br>Organic Mushroom Farm Supply Chain</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555; line-height: 1.5;"><b>Support Contact:</b><br>Email: support@mushroomtraining.online<br>Phone: 9203544140</p><p style="font-size:11px; color:#777777; margin-top:15px;">This is an automated operational transmission from Organic Mushroom Farm. For direct inquiries, write to our support email listed above. Please do not reply directly to no-reply@mushroomtraining.online.</p></div></div>',
      sms_text: 'Shipment Confirmed: [Customer Name], produce consignment under Order ID [Order ID] is verified. Tracking support: 9203544140. Organic Mushroom Farm.'
    },
    pending: {
      subject: "Allocation Held: Produce Invoice Awaiting Verification",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #FFF3CD;"><h2>Dear [Customer Name],</h2><p>Your fresh mushroom inventory selections are currently held in storage. Please process payment for the open invoice to enable processing and secure packaging.</p><p>Order Tracking Reference: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Logistics Division</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Support:</b> support@mushroomtraining.online | 9203544140</p></div></div>',
      sms_text: 'Allocation Held: Settle transaction for fresh crop selections under Order ID [Order ID]. For inquiries: 9203544140. Organic Mushroom Farm.'
    },
    failed: {
      subject: "Transaction Refused: Produce Allocation Cancelled",
      html: '<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;"><h2>Dear [Customer Name],</h2><p>Your organic fresh/dry crop purchase failed due to payment server connection losses. The designated agricultural inventory allocation has been returned to the open market.</p><p>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Commercial Control</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Assistance:</b> support@mushroomtraining.online | 9203544140</p></div></div>',
      sms_text: 'Order Released: Payment processing failed for crop allocation [Order ID]. Help desk: 9203544140. Organic Mushroom Farm.'
    }
  }
};

const getTemplateCategory = (productType: string) => {
  if (productType.startsWith("spawn_")) return "spawn";
  if (productType === "dry_mushroom" || productType === "fresh_mushroom") return "mushroom";
  return productType;
};

// Tool 1: execute_supabase_upsert
async function execute_supabase_upsert(data: any) {
  const supabaseUrl = process.env.SUPABASE_URL || "https://mock-supabase.co";
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "mock_key";
  
  if (supabaseUrl === "https://mock-supabase.co") {
      return { status: "mocked_success", message: "Supabase upsert mocked. Set proper env vars.", data };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  
  try {
    const { data: result, error } = await supabase
      .from('orders')
      .upsert({
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        customer_phone: data.customer_phone,
        razorpay_order_id: data.razorpay_order_id,
        razorpay_payment_id: data.razorpay_payment_id,
        product_type: data.product_type,
        payment_status: data.payment_status,
        updated_at: new Date().toISOString()
      }, { onConflict: 'razorpay_order_id' });

    if (error) throw error;
    return { status: "success", result };
  } catch (error: any) {
    return { status: "error", error: error.message };
  }
}

// Tool 2: execute_smtp_email_dispatch
async function execute_smtp_email_dispatch(to_email: string, subject: string, html_body: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: parseInt(process.env.SMTP_PORT || "465", 10),
    secure: true, // Use SSL/TLS
    auth: {
      user: process.env.SMTP_USER || "training@mushroomtraining.online",
      pass: process.env.SMTP_PASS || "Sonib491@"
    }
  });

  try {
    const info = await transporter.sendMail({
      from: '"Organic Mushroom Farm" <training@mushroomtraining.online>',
      replyTo: "no-reply@mushroomtraining.online",
      to: to_email,
      subject: subject,
      html: html_body
    });
    return { status: "success", messageId: info.messageId };
  } catch (error: any) {
    return { status: "error", error: error.message };
  }
}

// Webhook Route
app.post('/api/webhook', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.WEBHOOK_SECRET || "organic_secret_123"}`) {
    return res.status(401).json({ error: "Unauthorized: Invalid webhook secret" });
  }

  const transactions = req.body.transactions;
  if (!transactions || !Array.isArray(transactions)) {
    return res.status(400).json({ error: "Invalid payload: 'transactions' array expected" });
  }

  const execution_logic: any[] = [];

  for (const txn of transactions) {
    const {
      customer_name, customer_email, customer_phone,
      razorpay_order_id, razorpay_payment_id,
      product_type, payment_status
    } = txn;

    // 1. Supabase Upsert
    const supabaseResult = await execute_supabase_upsert(txn);

    // 2. Map Templates & Construct Email
    const category = getTemplateCategory(product_type);
    let emailResult: any = { status: "skipped", message: "No template found" };

    if (templates[category] && templates[category][payment_status]) {
      const tmpl = templates[category][payment_status];
      const amount = getStandardAmount(product_type);

      const htmlBody = tmpl.html
        .replace(/\[Customer Name\]/g, customer_name || 'Valued Customer')
        .replace(/\[Customer Email\]/g, customer_email || '')
        .replace(/\[Customer Phone\]/g, customer_phone || '')
        .replace(/\[Order ID\]/g, razorpay_order_id || '')
        .replace(/\[Amount\]/g, amount)
        .replace(/\[Product Type\]/g, product_type);

      const subject = tmpl.subject;

      emailResult = await execute_smtp_email_dispatch(customer_email, subject, htmlBody);
    }

    execution_logic.push({
      transaction_id: razorpay_order_id,
      supabase_upsert: supabaseResult,
      smtp_dispatch: emailResult
    });
  }

  // Mandatory constraints: Output MUST be a single, valid JSON object mapping execution logic
  // Responding directly as JSON
  res.json({
    execution_logic
  });
});


async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
