import { Resend } from 'resend';

// Always instantiate with process.env.RESEND_API_KEY
// Fallback only for local development robustness if necessary
const resend = new Resend(process.env.RESEND_API_KEY || "");

export const SENDER_EMAIL = "training@mushroomtraining.online";

export const emailTemplates = {
  training: {
    done: {
      subject: "Order Confirmed: Commercial Mushroom Training Enrollment Successful",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;"><h2>Dear [Customer Name],</h2><p>Your enrollment in the Commercial Mushroom Training Program has been successfully confirmed. Your digital learning dashboard is now fully activated and accessible.</p><table style="width:100%; border-collapse:collapse; margin:20px 0;"><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Order ID:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Order ID]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Amount Paid:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Amount]</td></tr></table><p style="background:#FFF3CD; padding:12px; border-radius:4px; color:#664D03;"><b>Important Notice:</b> Live stream instruction sessions air strictly from 4:00 PM to 5:30 PM IST daily. Video interface controls remain locked during this window to ensure comprehensive module completion.</p><p>Sincerely,<br>Organic Mushroom Farm Administration</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555; line-height: 1.5;"><b>Support Contact:</b><br>Email: support@mushroomtraining.online<br>Phone: 9203544140</p><p style="font-size:11px; color:#777777; margin-top:15px;">This is an automated operational transmission from Organic Mushroom Farm. For direct inquiries, write to our support email listed above. Please do not reply directly to no-reply@mushroomtraining.online.</p></div></div>`
    },
    pending: {
      subject: "Action Required: Complete Your Training Registration",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #FFF3CD;"><h2>Dear [Customer Name],</h2><p>Your registration for the Commercial Mushroom Training Program has been initiated, but payment is currently pending confirmation. Please complete the transaction to secure your seat.</p><p>Order ID: [Order ID]<br>Amount Due: [Amount]</p><p>Sincerely,<br>Organic Mushroom Farm Team</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Support:</b> support@mushroomtraining.online | 9203544140</p></div></div>`
    },
    failed: {
      subject: "Transaction Unsuccessful: Training Enrollment Failed",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;"><h2>Dear [Customer Name],</h2><p>We regret to inform you that your payment for the training program registration could not be processed successfully. Any funds deducted prematurely will be reverted by your bank within 3-5 business days. Please attempt the registration process again via our portal.</p><p>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Operations</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Assistance:</b> support@mushroomtraining.online | 9203544140</p></div></div>`
    }
  },
  consultant: {
    done: {
      subject: "Confirmation: Consultation Session Booked",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;"><h2>Dear [Customer Name],</h2><p>Your 1-on-1 consultation session has been officially scheduled and locked in our calendar. An officer from our team will contact you shortly to coordinate scheduling parameters.</p><table style="width:100%; border-collapse:collapse; margin:20px 0;"><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Client Name:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Customer Name]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Registered Email:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Customer Email]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Registered Phone:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Customer Phone]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Order ID:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Order ID]</td></tr><tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Transaction Value:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">[Amount]</td></tr></table><p>Sincerely,<br>Organic Mushroom Farm Advisory Division</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555; line-height: 1.5;"><b>Support Contact:</b><br>Email: support@mushroomtraining.online<br>Phone: 9203544140</p><p style="font-size:11px; color:#777777; margin-top:15px;">This is an automated operational transmission from Organic Mushroom Farm. For direct inquiries, write to our support email listed above. Please do not reply directly to no-reply@mushroomtraining.online.</p></div></div>`
    },
    pending: {
      subject: "Pending: Complete Your Consultation Booking",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #FFF3CD;"><h2>Dear [Customer Name],</h2><p>A request for an advisory session has been recorded, but the processing fee transaction remains incomplete. Kindly settle the outstanding balance to confirm your calendar slot.</p><p>Client Details:<br>Name: [Customer Name]<br>Email: [Customer Email]<br>Phone: [Customer Phone]<br>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Advisory Division</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Support:</b> support@mushroomtraining.online | 9203544140</p></div></div>`
    },
    failed: {
      subject: "Booking Failed: Consultation Transaction Declined",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;"><h2>Dear [Customer Name],</h2><p>The transaction to secure your consulting session failed due to a payment gateway communication issue. Your credentials remain stored, but the reservation has been released. Kindly review your payment authorization and retry.</p><p>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Client Services</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Assistance:</b> support@mushroomtraining.online | 9203544140</p></div></div>`
    }
  },
  spawn: {
    done: {
      subject: "Order Verified: Spawn Material Dispatched",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;"><h2>Dear [Customer Name],</h2><p>Your requisition for mushroom spawn has been authenticated. The logistics unit has initiated packaging protocols under controlled temperature parameters.</p><p>Order ID: [Order ID]<br>Invoice Total: [Amount]</p><p>Consignment tracking information will follow via email as soon as the logistics partner processes the cargo.</p><p>Sincerely,<br>Organic Mushroom Farm Laboratories</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555; line-height: 1.5;"><b>Support Contact:</b><br>Email: support@mushroomtraining.online<br>Phone: 9203544140</p><p style="font-size:11px; color:#777777; margin-top:15px;">This is an automated operational transmission from Organic Mushroom Farm. For direct inquiries, write to our support email listed above. Please do not reply directly to no-reply@mushroomtraining.online.</p></div></div>`
    },
    pending: {
      subject: "Awaiting Fulfillment: Spawn Invoice Pending Settlement",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #FFF3CD;"><h2>Dear [Customer Name],</h2><p>To authorize release of your spawn cultures from our inventory lines, please authorize settlement for the generated invoice below.</p><p>Order Reference: [Order ID]<br>Settle Balance: [Amount]</p><p>Sincerely,<br>Organic Mushroom Farm Inventory Management</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Support:</b> support@mushroomtraining.online | 9203544140</p></div></div>`
    },
    failed: {
      subject: "Order Voided: Spawn Acquisition Unsuccessful",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;"><h2>Dear [Customer Name],</h2><p>Your checkout transaction for spawn assets was terminated due to insufficient bank clearing confirmations. Your stock reservations have been cancelled to allow laboratory allocation to active order flows.</p><p>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Fulfillment Control</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Assistance:</b> support@mushroomtraining.online | 9203544140</p></div></div>`
    }
  },
  produce: {
    done: {
      subject: "Order Confirmed: Organic Produce Allocation Secured",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;"><h2>Dear [Customer Name],</h2><p>Your order for organic culinary mushroom produce has been recorded. Our harvesting unit has pulled allocations from the production blocks to prepare them for immediate courier pick-up.</p><p>Tracking Registry: [Order ID]<br>Statement Amount: [Amount]</p><p>Sincerely,<br>Organic Mushroom Farm Supply Chain</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555; line-height: 1.5;"><b>Support Contact:</b><br>Email: support@mushroomtraining.online<br>Phone: 9203544140</p><p style="font-size:11px; color:#777777; margin-top:15px;">This is an automated operational transmission from Organic Mushroom Farm. For direct inquiries, write to our support email listed above. Please do not reply directly to no-reply@mushroomtraining.online.</p></div></div>`
    },
    pending: {
      subject: "Allocation Held: Produce Invoice Awaiting Verification",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #FFF3CD;"><h2>Dear [Customer Name],</h2><p>Your fresh mushroom inventory selections are currently held in storage. Please process payment for the open invoice to enable processing and secure packaging.</p><p>Order Tracking Reference: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Logistics Division</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Support:</b> support@mushroomtraining.online | 9203544140</p></div></div>`
    },
    failed: {
      subject: "Transaction Refused: Produce Allocation Cancelled",
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;"><div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;"><h2>Dear [Customer Name],</h2><p>Your organic fresh/dry crop purchase failed due to payment server connection losses. The designated agricultural inventory allocation has been returned to the open market.</p><p>Order ID: [Order ID]</p><p>Sincerely,<br>Organic Mushroom Farm Commercial Control</p><hr style="border:none; border-top:1px solid #EEEEEE; margin:20px 0;"><p style="font-size:12px; color:#555555;"><b>Assistance:</b> support@mushroomtraining.online | 9203544140</p></div></div>`
    }
  }
};

export async function sendEmail(
  to: string, 
  productType: string, 
  status: 'done' | 'pending' | 'failed', 
  placeholders: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    orderId: string;
    amount: string;
  }
) {
  let templateKey = productType;
  if (productType.includes('spawn')) templateKey = 'spawn';
  if (productType.includes('mushroom')) templateKey = 'produce';

  const template = emailTemplates[templateKey as keyof typeof emailTemplates]?.[status];

  if (!template) {
    console.warn("No email template found for", productType, status);
    return;
  }

  let htmlBody = template.html
    .replace(/\\[Customer Name\\]/g, placeholders.customerName)
    .replace(/\\[Customer Email\\]/g, placeholders.customerEmail)
    .replace(/\\[Customer Phone\\]/g, placeholders.customerPhone)
    .replace(/\\[Order ID\\]/g, placeholders.orderId)
    .replace(/\\[Amount\\]/g, placeholders.amount);

  try {
    const data = await resend.emails.send({
      from: `Organic Mushroom Farm <${SENDER_EMAIL}>`,
      to,
      subject: template.subject,
      html: htmlBody,
    });
    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

export async function notifyAdmin(subject: string, html: string) {
    try {
        await resend.emails.send({
            from: `Organic Mushroom Farm Alerts <${SENDER_EMAIL}>`,
            to: "training@mushroomtraining.online", // Admin email
            subject,
            html
        });
    } catch (e) {
        console.error("Failed to notify admin", e);
    }
}
