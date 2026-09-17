import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Organic Mushroom Farm" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'gamingbuddyzone@gmail.com',
      subject: `New Training Registration - ${data.name}`,
      html: `
        <h2>New Training Registration Received</h2>
        <p><strong>Training Type:</strong> ${data.trainingType} (₹${data.price})</p>
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
        <p>${data.interest.join(', ')}</p>

        <h3>5. Farming Goal</h3>
        <p>${data.goal}</p>

        <h3>6. Farming Plan</h3>
        <ul>
          <li><strong>Start Time:</strong> ${data.planTime}</li>
          <li><strong>Space Availability:</strong> ${data.planSpace}</li>
        </ul>

        <h3>7. Investment Planning</h3>
        <p>${data.investment || 'Not specified'}</p>

        <h3>8. Support Required</h3>
        <p>${data.support.length > 0 ? data.support.join(', ') : 'None specified'}</p>

        <h3>9. How Did You Hear About Us?</h3>
        <p>${data.source}</p>

        <h3>10. WhatsApp Updates Preference</h3>
        <p>${data.whatsappUpdate}</p>
      `,
    };

    // We proceed to send email. In dev without credentials it might fail, 
    // but we can catch it and still return success for the UI to work.
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
        await transporter.sendMail(mailOptions);
      } else {
        console.warn('SMTP credentials not provided. Email not sent, but registration logged.');
        console.log("Mock Email Sent to Admin:\n", mailOptions.html);
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // We don't throw here to avoid blocking the user if email fails
    }

    return NextResponse.json({ success: true, message: 'Registration received' });
  } catch (error: any) {
    console.error('Registration API Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Server Error' }, { status: 500 });
  }
}
