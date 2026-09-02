import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function getUserMessageHtml(name: string, subject?: string, service?: string, trainingMode?: string, mushroomVariety?: string) {
  if (service === 'TRAINING') {
    const isOnline = trainingMode && trainingMode.toLowerCase().includes('online');
    let varietyName = mushroomVariety || 'All Varieties Combined';
    if (varietyName !== 'All Varieties Combined' && !varietyName.includes('All Varieties') && !varietyName.toLowerCase().includes('mushroom')) {
      varietyName += ' Mushroom';
    }

    if (isOnline) {
      if (varietyName.includes('All Varieties')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Online Mushroom Training.<br/><br/>We are thrilled to see your interest in mastering All Major Mushroom Varieties from the comfort of your home. Our comprehensive online program will cover everything you need to succeed.<br/><br/>Our team is reviewing your details and will get back to you shortly with the complete syllabus, schedule, and next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Online Mushroom Training.<br/><br/>We are excited to help you learn ${varietyName} cultivation from the comfort of your home. Our expert-led online sessions are designed to give you step-by-step guidance.<br/><br/>Our team is reviewing your details and will get back to you shortly with the online training schedule and next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else {
      if (varietyName.includes('All Varieties')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.<br/><br/>We are thrilled to see your interest in mastering All Major Mushroom Varieties. Our comprehensive offline training at the farm will give you the complete hands-on experience you need to start your own business.<br/><br/>Our team is reviewing your details and will get back to you shortly with upcoming batch dates, location details, and the next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.<br/><br/>We are excited to provide you with hands-on, practical experience in ${varietyName} cultivation directly at our farm. Our expert-led sessions will give you ground-level skills.<br/><br/>Our team is reviewing your details and will get back to you shortly with upcoming batch dates and location details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    }
  }

  if (service === 'SPAWN') {
    const varietyName = mushroomVariety || 'All Varieties Combined';

    if (varietyName.includes('Button')) {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Button Mushroom Spawn (Seed).<br/><br/>Button mushrooms are highly in demand, and we ensure the highest quality, first-generation spawn for a premium commercial yield. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (varietyName.includes('Oyster')) {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Oyster Mushroom Spawn (Seed).<br/><br/>Known for their fast growth and excellent yield, our Oyster spawn is prepared under strict sterile conditions to give you the best results on your farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (varietyName.includes('Milky')) {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Milky Mushroom Spawn (Seed).<br/><br/>Milky mushrooms are perfect for warmer climates, and we provide robust, high-yielding spawn to ensure a heavy harvest. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (varietyName.includes('Shiitake')) {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Shiitake Mushroom Spawn (Seed).<br/><br/>Shiitake is a premium gourmet variety loved for its flavor. We provide vigorous, contamination-free spawn to help you grow the best quality mushrooms. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (varietyName.includes("Lion's Mane")) {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Lion's Mane Mushroom Spawn (Seed).<br/><br/>Cultivating this unique and highly medicinal mushroom requires premium genetics. We ensure the highest quality spawn to support your specialized farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (varietyName.includes('Cordyceps')) {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Cordyceps Mushroom Spawn (Culture/Seed).<br/><br/>Cordyceps cultivation is highly specialized, and we take pride in offering strong, pure commercial-grade cultures for maximum potency and yield. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Multiple Varieties of Mushroom Spawn (Seed).<br/><br/>Whether you are setting up a diverse farm or experimenting, we ensure the highest quality spawn across all varieties for the best overall yield. Our team is reviewing your bulk requirements and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    }
  }

  return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding ${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, location, subject, message, service, trainingMode, mushroomVariety } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER || 'organicmushroomsfarms@gmail.com';
    const emailPass = process.env.EMAIL_PASS || 'jzqqntulcifrfyul';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: 'organicmushroomsfarms@gmail.com',
      subject: `New Enquiry: ${subject || 'Website Contact Form'} - ${name}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Location:</strong> ${location || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Service/Product:</strong> ${service || 'N/A'}</p>
        <h3>Enquiry Details:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const userMailOptions = {
      from: `"Organic Mushroom Farm" <${emailUser}>`,
      replyTo: 'no-reply@organicmushroomsfarm.com',
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        *, *::before, *::after {
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f6;
          margin: 0;
          padding: 10px;
        }
        .glass-container {
          max-width: 600px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(255, 167, 38, 0.15) 0%, rgba(156, 39, 176, 0.15) 50%, rgba(76, 175, 80, 0.15) 100%);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          word-break: break-word;
        }
        .header h1 {
          background: -webkit-linear-gradient(45deg, #FF9800, #9C27B0, #4CAF50);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
          margin-top: 0;
          font-size: 24px;
        }
        .content {
          color: #333;
          line-height: 1.6;
          font-size: 15px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 15px;
          padding: 15px;
          box-shadow: inset 0 0 10px rgba(255,255,255,0.7), 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(255, 255, 255, 0.8);
          word-break: break-word;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #666;
          margin-top: 20px;
        }
        @media only screen and (max-width: 600px) {
          body { padding: 5px; }
          .glass-container { padding: 15px; }
          .content { padding: 15px; }
        }
      </style>
      </head>
      <body>
        <div class="glass-container">
          <div class="header">
            <h1>Organic Mushroom Farm</h1>
          </div>
          <div class="content">
            ${getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety)}
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Organic Mushroom Farm. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error('Contact API / Nodemailer error:', error);
    return NextResponse.json({ error: error?.message || 'Failed to send message.' }, { status: 500 });
  }
}
