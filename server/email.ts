import { Resend } from 'resend';

// Always instantiate with process.env.RESEND_API_KEY
// Fallback only for preview/development robustness if allowed by user
const resend = new Resend(process.env.RESEND_API_KEY || "re_UYoZ2eK9_Kdmx5ZDRThH4p52V5m5fs3X8");

const FROM_EMAIL = 'no-reply@mushroomtraining.online';

// --- PRODUCT: training ---
export async function sendTrainingDoneMail(name: string, email: string, orderId: string, amount: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Order Confirmed: Commercial Mushroom Training',
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;">
<div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;">
<h2>Dear ${name},</h2>
<p>Your enrollment in the Commercial Mushroom Training Program has been successfully confirmed. Your digital learning dashboard is now fully activated.</p>
<table style="width:100%; border-collapse:collapse; margin:20px 0;">
<tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Order ID:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">${orderId}</td></tr>
<tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Amount Paid:</b></td><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;">INR ${amount}</td></tr>
</table>
<p style="background:#FFF3CD; padding:12px; border-radius:4px; color:#664D03;"><b>Important:</b> Live sessions: 4:00 PM to 5:30 PM IST daily.</p>
<p>Sincerely,<br>Organic Mushroom Farm Administration</p>
<hr style="border:none; border-top:1px solid #EEEEEE;">
<p style="font-size:12px; color:#555555;">Support: support@mushroomtraining.online | 9203544140</p>
</div></div>`,
    });
  } catch (error) {
    console.error('Error sending training done email:', error);
  }
}

export async function sendTrainingFailedMail(name: string, email: string, orderId: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Transaction Unsuccessful: Training Enrollment Failed',
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;">
<div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;">
<h2>Dear ${name},</h2>
<p>Your payment for training could not be processed. Any funds deducted will be reverted within 3-5 business days. Please retry.</p>
<p>Order ID: ${orderId}</p>
<p>Sincerely,<br>Organic Mushroom Farm Operations</p>
<hr style="border:none; border-top:1px solid #EEEEEE;">
<p style="font-size:12px; color:#555555;">Support: support@mushroomtraining.online | 9203544140</p>
</div></div>`,
    });
  } catch (error) {
    console.error('Error sending training failed email:', error);
  }
}

// --- PRODUCT: consultant ---
export async function sendConsultantDoneMail(name: string, email: string, orderId: string, amount: string, phone: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Confirmation: Consultation Session Booked',
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;">
<div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;">
<h2>Dear ${name},</h2>
<p>Your 1-on-1 consultation has been confirmed. Our team will contact you shortly.</p>
<table style="width:100%; border-collapse:collapse; margin:20px 0;">
<tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Order ID:</b></td><td>${orderId}</td></tr>
<tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Phone:</b></td><td>${phone}</td></tr>
<tr><td style="padding:8px 0; border-bottom:1px solid #EEEEEE;"><b>Amount:</b></td><td>INR ${amount}</td></tr>
</table>
<p>Sincerely,<br>Organic Mushroom Farm Advisory</p>
<hr style="border:none; border-top:1px solid #EEEEEE;">
<p style="font-size:12px; color:#555555;">Support: support@mushroomtraining.online | 9203544140</p>
</div></div>`,
    });
  } catch (error) {
    console.error('Error sending consultant done email:', error);
  }
}

export async function sendConsultantFailedMail(name: string, email: string, orderId: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Booking Failed: Consultation Transaction Declined',
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;">
<div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;">
<h2>Dear ${name},</h2>
<p>Your consultation booking failed. Reservation released. Please review your payment and retry.</p>
<p>Order ID: ${orderId}</p>
<p>Sincerely,<br>Organic Mushroom Farm Client Services</p>
<hr style="border:none; border-top:1px solid #EEEEEE;">
<p style="font-size:12px; color:#555555;">Support: support@mushroomtraining.online | 9203544140</p>
</div></div>`,
    });
  } catch (error) {
    console.error('Error sending consultant failed email:', error);
  }
}

// --- PRODUCT: spawn ---
export async function sendSpawnDoneMail(name: string, email: string, orderId: string, amount: string, productType: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Order Verified: Spawn Material Dispatched',
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;">
<div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;">
<h2>Dear ${name},</h2>
<p>Your spawn order has been authenticated and packaging initiated under controlled temperature parameters.</p>
<p>Batch: ${productType}<br>Order ID: ${orderId}<br>Amount: INR ${amount}</p>
<p>Tracking info will follow via email.</p>
<p>Sincerely,<br>Organic Mushroom Farm Laboratories</p>
<hr style="border:none; border-top:1px solid #EEEEEE;">
<p style="font-size:12px; color:#555555;">Support: support@mushroomtraining.online | 9203544140</p>
</div></div>`,
    });
  } catch (error) {
    console.error('Error sending spawn done email:', error);
  }
}

export async function sendSpawnFailedMail(name: string, email: string, orderId: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Order Voided: Spawn Acquisition Unsuccessful',
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;">
<div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;">
<h2>Dear ${name},</h2>
<p>Your spawn order was terminated due to payment failure. Stock reservations cancelled. Please retry.</p>
<p>Order ID: ${orderId}</p>
<p>Sincerely,<br>Organic Mushroom Farm Fulfillment</p>
<hr style="border:none; border-top:1px solid #EEEEEE;">
<p style="font-size:12px; color:#555555;">Support: support@mushroomtraining.online | 9203544140</p>
</div></div>`,
    });
  } catch (error) {
    console.error('Error sending spawn failed email:', error);
  }
}

// --- PRODUCT: mushroom ---
export async function sendMushroomDoneMail(name: string, email: string, orderId: string, amount: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Order Confirmed: Organic Produce Allocation Secured',
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;">
<div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #0F5132;">
<h2>Dear ${name},</h2>
<p>Your organic mushroom order is confirmed. Harvesting unit has prepared your allocation for courier pickup.</p>
<p>Order ID: ${orderId}<br>Amount: INR ${amount}</p>
<p>Sincerely,<br>Organic Mushroom Farm Supply Chain</p>
<hr style="border:none; border-top:1px solid #EEEEEE;">
<p style="font-size:12px; color:#555555;">Support: support@mushroomtraining.online | 9203544140</p>
</div></div>`,
    });
  } catch (error) {
    console.error('Error sending mushroom done email:', error);
  }
}

export async function sendMushroomFailedMail(name: string, email: string, orderId: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Transaction Refused: Produce Allocation Cancelled',
      html: `<div style="font-family:sans-serif; background:#F9F9F9; padding:30px; color:#111111;">
<div style="background:#FFFFFF; padding:25px; border-radius:8px; border-left:4px solid #DC3545;">
<h2>Dear ${name},</h2>
<p>Your mushroom purchase failed due to payment issues. Inventory allocation returned. Please retry.</p>
<p>Order ID: ${orderId}</p>
<p>Sincerely,<br>Organic Mushroom Farm Commercial</p>
<hr style="border:none; border-top:1px solid #EEEEEE;">
<p style="font-size:12px; color:#555555;">Support: support@mushroomtraining.online | 9203544140</p>
</div></div>`,
    });
  } catch (error) {
    console.error('Error sending mushroom failed email:', error);
  }
}

// Keep generic mapper for webhook backwards compatibility
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
  const { customerName, orderId, amount, customerPhone } = placeholders;
  if (productType === 'training') {
    if (status === 'done') {
      await sendTrainingDoneMail(customerName, to, orderId, amount);
    } else {
      await sendTrainingFailedMail(customerName, to, orderId);
    }
  } else if (productType === 'consultation' || productType === 'consultant') {
    if (status === 'done') {
      await sendConsultantDoneMail(customerName, to, orderId, amount, customerPhone);
    } else {
      await sendConsultantFailedMail(customerName, to, orderId);
    }
  } else if (productType.includes('spawn')) {
    if (status === 'done') {
      await sendSpawnDoneMail(customerName, to, orderId, amount, productType);
    } else {
      await sendSpawnFailedMail(customerName, to, orderId);
    }
  } else if (productType.includes('mushroom')) {
    if (status === 'done') {
      await sendMushroomDoneMail(customerName, to, orderId, amount);
    } else {
      await sendMushroomFailedMail(customerName, to, orderId);
    }
  } else {
    console.warn("No specific email sender found for", productType, status);
  }
}

export async function notifyAdmin(subject: string, html: string) {
  try {
    await resend.emails.send({
      from: `Organic Mushroom Farm Alerts <${FROM_EMAIL}>`,
      to: "training@mushroomtraining.online", // Admin email
      subject,
      html
    });
  } catch (e) {
    console.error("Failed to notify admin", e);
  }
}
