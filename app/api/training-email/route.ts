import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, data, pdfBase64 } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'gamingbuddyzone@gmail.com';

    // 1. INITIATED (Admin Only)
    if (action === 'INITIATED') {
      const mailOptions = {
        from: `"Organic Mushroom Farm" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: `[Initiated] Training Payment - ${data.name}`,
        html: `
          <h2>Payment Initiated</h2>
          <p><strong>Training Type:</strong> ${data.trainingName} (₹${data.price})</p>
          <hr />
          <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Email:</strong> ${data.email}</li>
          </ul>
          <p>User is currently on the payment gateway.</p>
        `,
      };
      if (process.env.SMTP_USER) await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true });
    }

    // 2. CANCELLED / FAILED (Admin + Customer)
    if (action === 'CANCELLED' || action === 'FAILED') {
      // Admin Mail
      const adminMailOptions = {
        from: `"Organic Mushroom Farm" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: `[${action}] Training Payment - ${data.name}`,
        html: `
          <h2>Payment ${action}</h2>
          <p><strong>Training Type:</strong> ${data.trainingName} (₹${data.price})</p>
          <hr />
          <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Email:</strong> ${data.email}</li>
          </ul>
          <p>The user did not complete the payment.</p>
        `,
      };
      
      // Customer Mail
      const customerMailOptions = {
        from: `"Organic Mushroom Farm" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: `Incomplete Payment - Organic Mushroom Farm`,
        html: `
          <h3>Hello ${data.name},</h3>
          <p>We noticed you tried to enroll in the <strong>${data.trainingName}</strong> but the payment was not completed.</p>
          <p>If you faced any issues during checkout or need help, please let us know by replying to this email or contacting our support on WhatsApp at +91 9203544140.</p>
          <br/>
          <p>Regards,<br/>Organic Mushroom Farm Team</p>
        `,
      };

      if (process.env.SMTP_USER) {
        await transporter.sendMail(adminMailOptions);
        if (data.email) await transporter.sendMail(customerMailOptions);
      }
      return NextResponse.json({ success: true });
    }

    // 3. DONE (Registration Complete) (Admin + Customer + PDF)
    if (action === 'DONE') {
      // Admin Mail (Detailed Registration Form)
      const adminMailOptions = {
        from: `"Organic Mushroom Farm" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: `[SUCCESS] New Training Registration - ${data.name}`,
        html: `
          <h2>New Training Registration Received</h2>
          <p><strong>Training Type:</strong> ${data.trainingName} (₹${data.price})</p>
          <p><strong>Payment ID:</strong> ${data.paymentId}</p>
          <hr />
          <h3>1. Personal Details</h3>
          <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Email:</strong> ${data.email}</li>
          </ul>
          <h3>2. Location Details</h3>
          <ul>
            <li><strong>State:</strong> ${data.state}</li>
            <li><strong>City:</strong> ${data.city}</li>
          </ul>
          <h3>3. Experience</h3>
          <p>${data.experience}</p>
          <h3>4. Mushroom Interest</h3>
          <p>${data.interest?.join(', ')}</p>
          <h3>5. Farming Goal</h3>
          <p>${data.goal}</p>
          <h3>6. Farming Plan</h3>
          <ul>
            <li><strong>Start Time:</strong> ${data.planTime}</li>
            <li><strong>Space Availability:</strong> ${data.planSpace}</li>
          </ul>
          <h3>7. Investment Planning</h3>
          <p>${data.investment}</p>
          <h3>8. Support Required</h3>
          <p>${data.support?.join(', ')}</p>
          <h3>9. Heard About Us</h3>
          <p>${data.source}</p>
          <h3>10. WhatsApp Updates</h3>
          <p>${data.whatsappUpdate}</p>
        `,
      };

      // Customer Mail with PDF Attachment
      let attachments: any[] = [];
      if (pdfBase64) {
        // Strip the data:application/pdf;filename=generated.pdf;base64, part if present
        const base64Data = pdfBase64.split('base64,')[1] || pdfBase64;
        attachments = [{
          filename: `Invoice_${data.name.replace(/\s+/g, '_')}_${data.paymentId}.pdf`,
          content: base64Data,
          encoding: 'base64'
        }];
      }

      const customerMailOptions = {
        from: `"Organic Mushroom Farm" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: `Registration Successful & Invoice - Organic Mushroom Farm`,
        html: `
          <h3>Hello ${data.name},</h3>
          <p>Thank you for registering for the <strong>${data.trainingName}</strong> (₹${data.price}).</p>
          <p>Your payment (ID: ${data.paymentId}) was successful. We have attached your invoice PDF with this email for your records.</p>
          <p>Our team will share the training schedule, joining instructions, and other important updates with you through WhatsApp and/or email shortly.</p>
          <br/>
          <p>Regards,<br/>Organic Mushroom Farm Team</p>
        `,
        attachments
      };

      if (process.env.SMTP_USER) {
        await transporter.sendMail(adminMailOptions);
        if (data.email) await transporter.sendMail(customerMailOptions);
      }
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('Training Email API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
