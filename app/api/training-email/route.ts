import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { action, data, pdfBase64 } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gamingbuddyzone@gmail.com',
        pass: 'ymuuvryfuvgndjod'
      }
    });

    let adminSubject = '';
    let adminHtml = '';
    let sendToCustomer = false;
    let customerSubject = '';
    let customerHtml = '';

    if (action === 'PAYMENT_DONE') {
      adminSubject = `🟢 Payment Successful: ${data.name} (${data.trainingName})`;
      adminHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #0f172a;">
          <div style="background: #22c55e; padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Payment Successful</h2>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0; font-size: 14px;">User paid successfully and is now filling registration form.</p>
          </div>
          <div style="padding: 24px; color: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: left;">
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; width: 40%;">Name</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.name}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Phone</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.phone}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Email</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.email}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Training</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.trainingName}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Amount</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.price}</td></tr>
            </table>
          </div>
        </div>
      `;
      sendToCustomer = false;
    }

    if (action === 'INITIATED') {
      adminSubject = `🟡 Payment Initiated: ${data.name} (${data.trainingName})`;
      adminHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #0f172a;">
          <div style="background: #f59e0b; padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Payment Initiated</h2>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0; font-size: 14px;">User clicked Pay Now.</p>
          </div>
          <div style="padding: 24px; color: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: left;">
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; width: 40%;">Name</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.name}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Phone</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.phone}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Email</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.email}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Training</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.trainingName}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Amount</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.price}</td></tr>
            </table>
          </div>
        </div>
      `;
      sendToCustomer = false;
    }

    if (action === 'CANCELLED' || action === 'FAILED') {
      const isFailed = action === 'FAILED';
      adminSubject = `${isFailed ? '🔴' : '🟡'} Payment ${isFailed ? 'Failed' : 'Cancelled'}: ${data.name} (${data.trainingName})`;
      adminHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #0f172a;">
          <div style="background: ${isFailed ? '#ef4444' : '#eab308'}; padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Payment ${isFailed ? 'Failed' : 'Cancelled'}</h2>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0; font-size: 14px;">User did not complete the transaction.</p>
          </div>
          <div style="padding: 24px; color: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: left;">
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; width: 40%;">Name</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.name}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Phone</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.phone}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Email</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.email}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Training</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.trainingName}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Amount</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.price}</td></tr>
            </table>
          </div>
        </div>
      `;
      sendToCustomer = false;
    }

    if (action === 'DONE') {
      adminSubject = `🟢 Registration Completed: ${data.name} (${data.trainingName})`;
      
      let formFieldsHtml = '';
      const skipKeys = ['trainingName', 'price', 'paymentId', 'name', 'phone', 'email'];
      
      for (const [key, value] of Object.entries(data)) {
        if (!skipKeys.includes(key)) {
          let displayValue = Array.isArray(value) ? value.join(', ') : value;
          let displayKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
          formFieldsHtml += `
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">${displayKey}</td>
              <td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${displayValue || 'N/A'}</td>
            </tr>
          `;
        }
      }

      adminHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #0f172a;">
          <div style="background: #22c55e; padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Registration Completed</h2>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0; font-size: 14px;">User successfully paid and submitted the registration form.</p>
          </div>
          <div style="padding: 24px; color: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: left;">
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; width: 40%;">Name</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.name}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Phone</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.phone}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Email</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.email}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Training</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.trainingName}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Amount</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.price}</td></tr>
              <tr><td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8;">Payment ID</td><td style="padding: 12px; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f8fafc;">${data.paymentId || 'N/A'}</td></tr>
              ${formFieldsHtml}
            </table>
          </div>
        </div>
      `;
      
      sendToCustomer = true;
      customerSubject = `Welcome to ${data.trainingName} - Registration Confirmed`;
      customerHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #0f172a;">
          <div style="background: #22c55e; padding: 30px 20px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 24px;">Welcome Aboard!</h2>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 16px;">Your registration is confirmed.</p>
          </div>
          <div style="padding: 30px; color: #f8fafc;">
            <p style="margin-top: 0; font-size: 16px; line-height: 1.6;">Hi <strong>${data.name}</strong>,</p>
            <p style="font-size: 16px; line-height: 1.6;">Thank you for registering for the <strong>${data.trainingName}</strong>. We have successfully received your payment of ${data.price}.</p>
            <p style="font-size: 16px; line-height: 1.6;">Our team will contact you shortly via WhatsApp (${data.phone}) with the training schedule, access links, and further instructions.</p>
            
            <div style="background: #1e293b; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #22c55e; font-size: 16px;">What's Next?</h3>
              <ul style="margin-bottom: 0; padding-left: 20px; color: #cbd5e1; font-size: 15px; line-height: 1.6;">
                <li>You will be added to our WhatsApp support group.</li>
                <li>Training materials and PDF notes will be shared.</li>
                <li>Please find your invoice attached to this email.</li>
              </ul>
            </div>
            
            <p style="font-size: 15px; color: #94a3b8; margin-bottom: 0;">Best regards,<br><strong>Organic Mushrooms Farm Team</strong></p>
          </div>
        </div>
      `;
    }

    if (adminHtml && adminSubject) {
      const mailOptionsAdmin = {
        from: '"Organic Mushrooms" <gamingbuddyzone@gmail.com>',
        to: 'gamingbuddyzone@gmail.com',
        subject: adminSubject,
        html: adminHtml,
        attachments: [] as any[]
      };
      
      if (action === 'DONE' && pdfBase64) {
         const base64Data = pdfBase64.replace(/^data:application\/pdf;base64,/, "");
         mailOptionsAdmin.attachments = [{
           filename: `Invoice_${data.name.replace(/\s+/g, '_')}_${data.paymentId || 'N/A'}.pdf`,
           content: Buffer.from(base64Data, 'base64'),
           contentType: 'application/pdf'
         }];
      }

      await transporter.sendMail(mailOptionsAdmin);
    }

    if (sendToCustomer && customerHtml && customerSubject && data.email) {
      const mailOptionsCustomer = {
        from: '"Organic Mushrooms" <gamingbuddyzone@gmail.com>',
        to: data.email,
        subject: customerSubject,
        html: customerHtml,
        attachments: [] as any[]
      };
      
      if (pdfBase64) {
         const base64Data = pdfBase64.replace(/^data:application\/pdf;base64,/, "");
         mailOptionsCustomer.attachments = [{
           filename: `Invoice_${data.name.replace(/\s+/g, '_')}_${data.paymentId || 'N/A'}.pdf`,
           content: Buffer.from(base64Data, 'base64'),
           contentType: 'application/pdf'
         }];
      }

      await transporter.sendMail(mailOptionsCustomer);
    }

    return NextResponse.json({ success: true, message: 'Email logic processed' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
