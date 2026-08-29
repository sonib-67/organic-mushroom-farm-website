import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';


function getUserMessageHtml(name: string, subject: string, service: string, trainingMode?: string, mushroomVariety?: string, setupType?: string, productForm?: string, otherSubject?: string) {
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
      // Offline
      if (varietyName.includes('All Varieties')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.<br/><br/>We are thrilled to see your interest in mastering All Major Mushroom Varieties. Our comprehensive offline training at the farm will give you the complete hands-on experience you need to start your own business.<br/><br/>Our team is reviewing your details and will get back to you shortly with upcoming batch dates, location details, and the next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.<br/><br/>We are excited to provide you with hands-on, practical experience in ${varietyName} cultivation directly at our farm. Our expert-led sessions will give you ground-level skills.<br/><br/>Our team is reviewing your details and will get back to you shortly with upcoming batch dates and location details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    }
  }

  if (service === 'SPAWN') {
    let varietyName = mushroomVariety || 'All Varieties Combined';
    
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

  if (service === 'SETUP') {
    if (setupType === 'AC Commercial Farm') {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for an AC Commercial Farm Setup (Button/Oyster).<br/><br/>Setting up a climate-controlled commercial farm is a smart step towards consistent, year-round mushroom production and high commercial yields. Our experts specialize in providing end-to-end turnkey solutions to make your project a success.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to discuss your commercial farm setup needs.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (setupType === 'Non-AC Seasonal Hut') {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for a Non-AC Seasonal Hut Structure.<br/><br/>Seasonal hut structures are a highly cost-effective and natural way to start your mushroom farming journey. Our experts will help you design a setup that maximizes your seasonal yield while keeping your investment optimized.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to discuss your farm setup needs.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (setupType === 'PUF Panel Setup') {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for a High-Tech PUF Panel Setup.<br/><br/>A PUF panel structure ensures premium insulation, energy efficiency, and long-term durability for advanced mushroom cultivation. Our turnkey solutions provide you with top-of-the-line infrastructure for a world-class farming experience.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to discuss your high-tech setup requirements.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (setupType === 'Consultancy Only') {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Farm Setup Consultancy.<br/><br/>Whether you are planning a new farm from scratch, upgrading your existing setup, or looking for expert business guidance, we are here to help you make the right technical and financial decisions.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to schedule your consultation.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Farm Setup.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to discuss your requirements.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    }
  }

  if (service === 'BUY MUSHROOM') {
    let varietyName = mushroomVariety || '';
    
    if (productForm === 'Fresh Mushroom') {
      if (varietyName.includes('Button')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Button Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Button mushrooms that guarantee premium taste and top-tier quality for your culinary or commercial needs.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Oyster')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Oyster Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Oyster mushrooms, known for their delicate texture and rich flavor. We ensure the best harvest reaches you.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Milky')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Milky Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Milky mushrooms, valued for their long shelf life and meaty texture. We ensure the best harvest reaches you.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Shiitake')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Shiitake Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Shiitake mushrooms, perfect for gourmet dishes. We ensure this premium harvest reaches you in top condition.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes("Lion's Mane")) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Lion's Mane Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Lion's Mane mushrooms, celebrated for their unique appearance and health benefits. We ensure the best harvest reaches you.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Cordyceps')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Cordyceps Mushrooms.<br/><br/>We take pride in cultivating and delivering premium, organically grown fresh Cordyceps, known for their powerful medicinal properties. We ensure the best quality reaches you.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else if (productForm === 'Dry Mushroom') {
      if (varietyName.includes('Button')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Button Mushrooms.<br/><br/>Our naturally dehydrated Button mushrooms retain their classic flavor and nutritional value while offering a long shelf life. They are perfect for culinary and commercial use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Oyster')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Oyster Mushrooms.<br/><br/>Our naturally dehydrated Oyster mushrooms retain their rich flavor, aroma, and nutritional value while offering a long shelf life. They are perfect for culinary, medicinal, and commercial use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Milky')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Milky Mushrooms.<br/><br/>Our naturally dehydrated Milky mushrooms retain their robust texture and nutritional value while offering an excellent shelf life. They are perfect for various culinary applications.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Shiitake')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Shiitake Mushrooms.<br/><br/>Our naturally dehydrated Shiitake mushrooms concentrate their famous umami flavor and nutritional value while offering a long shelf life. They are essential for premium culinary use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes("Lion's Mane")) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Lion's Mane Mushrooms.<br/><br/>Our carefully dehydrated Lion's Mane mushrooms retain their neuro-supportive properties and nutritional value while offering a long shelf life. They are perfect for health and culinary use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Cordyceps')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Cordyceps Mushrooms.<br/><br/>Our carefully dehydrated Cordyceps retain their potent medicinal properties and nutritional value while offering a long shelf life. They are highly sought after for health and commercial use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else if (productForm === 'Mushroom Powder') {
      if (varietyName.includes('Button')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our Button Mushroom Powder.<br/><br/>Packed with essential nutrients and a versatile flavor profile, our concentrated Button mushroom powder is perfect for soups, sauces, and daily culinary use.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Oyster')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our nutrient-rich Oyster Mushroom Powder.<br/><br/>Packed with immunity-boosting properties and essential nutrients, our highly concentrated Oyster mushroom powder is perfect for health supplements, daily consumption, and value-added products.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Milky')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our Milky Mushroom Powder.<br/><br/>Packed with essential nutrients and protein, our concentrated Milky mushroom powder is an excellent addition to health supplements and protein-rich diets.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Shiitake')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our premium Shiitake Mushroom Powder.<br/><br/>Packed with immunity-boosting properties and rich umami flavor, our highly concentrated Shiitake mushroom powder is perfect for gourmet cooking, health supplements, and daily consumption.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes("Lion's Mane")) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our specialized Lion's Mane Mushroom Powder.<br/><br/>Renowned for cognitive support, our highly concentrated Lion's Mane mushroom powder is perfect for premium health supplements, daily consumption, and wellness products.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else if (varietyName.includes('Cordyceps')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our potent Cordyceps Mushroom Powder.<br/><br/>Highly valued for its energy and stamina-boosting properties, our concentrated Cordyceps mushroom powder is essential for premium health and sports supplements.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    }
  }

  if (service === 'OTHER') {
    if (otherSubject === 'Machinery & Equipment') {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your enquiry regarding Machinery & Equipment.<br/><br/>Using the right tools is the secret to a high-yielding farm. We provide reliable, commercial-grade farming equipment and machinery tailored to optimize your mushroom production.<br/><br/>Our technical team is reviewing your request and will get back to you soon with customized solutions and pricing.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (otherSubject === 'Site Visit Consultation') {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your request for a Site Visit Consultation.<br/><br/>An on-ground evaluation is the best way to plan a successful farm. Our experts will thoroughly assess your location, climate, and resources to provide a highly optimized cultivation strategy.<br/><br/>Our team will contact you shortly to schedule the visit at your convenience.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (otherSubject === 'Marketing & Buyback Support') {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your enquiry regarding Marketing & Buyback Support.<br/><br/>Growing mushrooms is just the first step; selling them at the right price is where the profit lies. We are committed to helping you scale your business through guaranteed buyback options and strategic market linkage.<br/><br/>Our team is reviewing your farm capacity details and will connect with you soon to discuss our buyback policies.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (otherSubject === 'Subsidies & Bank Loans') {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your enquiry regarding Subsidies & Bank Loans.<br/><br/>Securing funding shouldn't be a hurdle in your farming journey. From preparing detailed project reports (DPR) to navigating government schemes, our experts are here to simplify the financial process for you.<br/><br/>Our team is reviewing your profile and will get back to you shortly to guide you through the next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    } else if (otherSubject === 'Other') {
      return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a General Query/Other Service.<br/><br/>Whether you need specialized farming advice, customized solutions, or just have a few questions about the mushroom industry, we are always here to support your journey.<br/><br/>Our team is reviewing your message and will get back to you as soon as possible with the right information.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
    }
  }

  // Default for other services
  return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding ${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { name, email, phone, subject, message, service, trainingMode, mushroomVariety, setupType, productForm, otherSubject, recaptchaToken } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    if (recaptchaToken) {
      const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || '6LecX54tAAAAAKzCBc7nPpscrIO6ANbmzQolTyWA';
      const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `secret=${recaptchaSecret}&response=${recaptchaToken}`
      });
      const verifyData = await verifyResponse.json();
      if (!verifyData.success) {
        console.error('reCAPTCHA verification failed:', verifyData);
        return res.status(400).json({ error: `reCAPTCHA verification failed: ${verifyData['error-codes']?.join(', ') || 'Unknown error'}` });
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
      to: "organicmushroomsfarms@gmail.com",
      subject: `New Enquiry: ${subject || "Website Contact Form"}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Service/Product:</strong> ${service || "N/A"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    const userMailOptions = {
      from: `"Organic Mushroom Farm" <${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>`,
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
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f6;
          margin: 0;
          padding: 20px;
        }
        .glass-container {
          max-width: 600px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(255, 167, 38, 0.15) 0%, rgba(156, 39, 176, 0.15) 50%, rgba(76, 175, 80, 0.15) 100%);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
        .header h1 {
          background: -webkit-linear-gradient(45deg, #FF9800, #9C27B0, #4CAF50);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
          margin-top: 0;
          font-size: 26px;
        }
        .content {
          color: #333;
          line-height: 1.6;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 15px;
          padding: 20px;
          box-shadow: inset 0 0 10px rgba(255,255,255,0.7), 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        .footer {
          text-align: center;
          font-size: 13px;
          color: #666;
          margin-top: 25px;
        }
        @media only screen and (max-width: 600px) {
          body { padding: 10px; }
          .glass-container { padding: 20px; }
        }
      </style>
      </head>
      <body>
        <div class="glass-container">
          <div class="header">
            <h1>Organic Mushroom Farm</h1>
          </div>
          <div class="content">
            ${getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety, setupType, productForm, otherSubject)}
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
    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({ error: error.message || "Failed to send message." });
  }
}
