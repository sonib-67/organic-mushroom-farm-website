import nodemailer, { SendMailOptions } from "nodemailer";

export interface EnquiryPayload {
  serviceType: string;
  fullName: string;
  phone?: string;
  email: string;
  message?: string;
  trainingMode?: string;
  mushroomVariety?: string;
  quantity?: string;
  deliveryLocation?: string;
  setupType?: string;
  farmSize?: string;
  farmLocation?: string;
  productForm?: string;
  subjectOfEnquiry?: string;
  ip?: string;
  timestamp?: string;
}

/**
 * Robust SMTP Transporter with fallbacks for multiple env variable names
 */
export function getMailTransporter() {
  const user =
    process.env.EMAIL_USER ||
    process.env.SMTP_EMAIL ||
    "organicmushroomsfarms@gmail.com";

  const pass =
    process.env.EMAIL_PASS ||
    process.env.SMTP_PASSWORD ||
    "jzqqntulcifrfyul"; // Verified App Password fallback

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user.trim(),
      pass: pass.trim(),
    },
  });
}

/**
 * Admin recipients list
 */
export function getEnquiryAdminRecipients(): string[] {
  const list = [
    "organicmushroomsfarms@gmail.com",
    "tanmaysomi@gmail.com",
    process.env.OWNER_EMAIL,
    process.env.SMTP_EMAIL,
  ].filter((email): email is string => Boolean(email && email.trim()));

  return Array.from(new Set(list));
}

/**
 * Returns custom dynamic paragraph according to exact category and user selection
 */
export function getCustomEnquirySmartReply(payload: EnquiryPayload): string {
  const { serviceType, trainingMode, mushroomVariety, setupType, productForm, subjectOfEnquiry } = payload;
  const variety = (mushroomVariety || "").toLowerCase();
  const form = (productForm || "").toLowerCase();
  const subj = (subjectOfEnquiry || "").toLowerCase();

  if (serviceType === "Training") {
    if (trainingMode?.includes("Online")) {
      return `We have received your message regarding a new enquiry for Online Mushroom Training. We are excited to help you learn ${mushroomVariety || "commercial mushroom"} cultivation from the comfort of your home. Our expert-led online sessions are designed to give you step-by-step guidance. Our team is reviewing your details and will get back to you shortly with the online training schedule and next steps.`;
    }
    return `We have received your message regarding a new enquiry for Offline Mushroom Training. We are excited to provide you with hands-on, practical experience in ${mushroomVariety || "commercial mushroom"} cultivation directly at our farm. Our expert-led sessions will give you ground-level skills. Our team is reviewing your details and will get back to you shortly with upcoming batch dates and location details.`;
  }

  if (serviceType === "Spawn") {
    if (variety.includes("button")) {
      return "Button mushrooms are highly in demand, and we ensure the highest quality, first-generation spawn for a premium commercial yield. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
    }
    if (variety.includes("oyster")) {
      return "Known for their fast growth and excellent yield, our Oyster spawn is prepared under strict sterile conditions to give you the best results on your farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
    }
    if (variety.includes("milky")) {
      return "Milky mushrooms are perfect for warmer climates, and we provide robust, high-yielding spawn to ensure a heavy harvest. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
    }
    if (variety.includes("shiitake")) {
      return "Shiitake is a premium gourmet variety loved for its flavor. We provide vigorous, contamination-free spawn to help you grow the best quality mushrooms. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
    }
    if (variety.includes("lion's mane") || variety.includes("lions mane")) {
      return "Cultivating this unique and highly medicinal mushroom requires premium genetics. We ensure the highest quality spawn to support your specialized farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
    }
    if (variety.includes("cordyceps")) {
      return "Cordyceps cultivation is highly specialized, and we take pride in offering strong, pure commercial-grade cultures for maximum potency and yield. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
    }
    return "We ensure the highest quality commercial spawn to support your farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and dispatch availability.";
  }

  if (serviceType === "Setup") {
    if (setupType?.includes("AC Commercial")) {
      return "Setting up a climate-controlled commercial farm is a smart step towards consistent, year-round mushroom production and high commercial yields. Our experts specialize in providing end-to-end turnkey solutions.";
    }
    if (setupType?.includes("Non-AC Seasonal")) {
      return "Seasonal hut structures are a highly cost-effective and natural way to start your mushroom farming journey. Our experts will help you design a setup that maximizes your seasonal yield.";
    }
    if (setupType?.includes("PUF Panel")) {
      return "A PUF panel structure ensures premium insulation, energy efficiency, and long-term durability for advanced mushroom cultivation.";
    }
    if (setupType?.includes("Consultancy")) {
      return "Whether you are planning a new farm from scratch, upgrading your existing setup, or looking for expert business guidance, we are here to help you make the right technical and financial decisions.";
    }
    return "Our experts specialize in providing end-to-end turnkey commercial farm solutions. Our team is reviewing your details and will get back to you shortly.";
  }

  if (serviceType === "Buy Mushrooms") {
    if (form.includes("fresh")) {
      if (variety.includes("button")) return "We take pride in delivering farm-to-table, organically grown fresh Button mushrooms that guarantee premium taste and top-tier quality for your culinary or commercial needs.";
      if (variety.includes("oyster")) return "We take pride in delivering farm-to-table, organically grown fresh Oyster mushrooms, known for their delicate texture and rich flavor. We ensure the best harvest reaches you.";
      if (variety.includes("milky")) return "We take pride in delivering farm-to-table, organically grown fresh Milky mushrooms, valued for their long shelf life and meaty texture. We ensure the best harvest reaches you.";
      if (variety.includes("shiitake")) return "We take pride in delivering farm-to-table, organically grown fresh Shiitake mushrooms, perfect for gourmet dishes. We ensure this premium harvest reaches you in top condition.";
      if (variety.includes("lion's mane") || variety.includes("lions mane")) return "We take pride in delivering farm-to-table, organically grown fresh Lion's Mane mushrooms, celebrated for their unique appearance and health benefits. We ensure the best harvest reaches you.";
      if (variety.includes("cordyceps")) return "We take pride in cultivating and delivering premium, organically grown fresh Cordyceps, known for their powerful medicinal properties. We ensure the best quality reaches you.";
      return "We take pride in delivering farm-to-table, organically grown fresh mushrooms. We ensure the best harvest reaches you.";
    }
    if (form.includes("dry")) {
      if (variety.includes("button")) return "Our naturally dehydrated Button mushrooms retain their classic flavor and nutritional value while offering a long shelf life. They are perfect for culinary and commercial use.";
      if (variety.includes("oyster")) return "Our naturally dehydrated Oyster mushrooms retain their rich flavor, aroma, and nutritional value while offering a long shelf life. They are perfect for culinary, medicinal, and commercial use.";
      if (variety.includes("milky")) return "Our naturally dehydrated Milky mushrooms retain their robust texture and nutritional value while offering an excellent shelf life. They are perfect for various culinary applications.";
      if (variety.includes("shiitake")) return "Our naturally dehydrated Shiitake mushrooms concentrate their famous umami flavor and nutritional value while offering a long shelf life. They are essential for premium culinary use.";
      if (variety.includes("lion's mane") || variety.includes("lions mane")) return "Our naturally dehydrated Lion's Mane mushrooms retain their neuro-supportive properties and nutritional value while offering a long shelf life. They are perfect for health and culinary use.";
      if (variety.includes("cordyceps")) return "Our carefully dehydrated Cordyceps retain their potent medicinal properties and nutritional value while offering a long shelf life. They are highly sought after for health and commercial use.";
      return "Our naturally dehydrated mushrooms retain their properties and nutritional value while offering a long shelf life.";
    }
    if (form.includes("powder")) {
      if (variety.includes("button")) return "Packed with essential nutrients and a versatile flavor profile, our concentrated Button mushroom powder is perfect for soups, sauces, and daily culinary use.";
      if (variety.includes("oyster")) return "Packed with immunity-boosting properties and essential nutrients, our highly concentrated Oyster mushroom powder is perfect for health supplements, daily consumption, and value-added products.";
      if (variety.includes("milky")) return "Packed with essential nutrients and protein, our concentrated Milky mushroom powder is an excellent addition to health supplements and protein-rich diets.";
      if (variety.includes("shiitake")) return "Packed with immunity-boosting properties and rich umami flavor, our highly concentrated Shiitake mushroom powder is perfect for gourmet cooking, health supplements, and daily consumption.";
      if (variety.includes("lion's mane") || variety.includes("lions mane")) return "Renowned for cognitive support, our highly concentrated Lion's Mane mushroom powder is perfect for premium health supplements, daily consumption, and wellness products.";
      if (variety.includes("cordyceps")) return "Highly valued for its energy and stamina-boosting properties, our concentrated Cordyceps mushroom powder is essential for premium health and sports supplements.";
      return "Our concentrated mushroom powder is perfect for various culinary and health applications.";
    }
    return `We take pride in delivering premium ${mushroomVariety || "mushroom"} products. Our team is reviewing your requirement and will get back to you shortly.`;
  }

  if (serviceType === "Other") {
    if (subj.includes("machinery")) return "Using the right tools is the secret to a high-yielding farm. We provide reliable, commercial-grade farming equipment and machinery tailored to optimize your mushroom production.";
    if (subj.includes("site visit")) return "An on-ground evaluation is the best way to plan a successful farm. Our experts will thoroughly assess your location, climate, and resources to provide a highly optimized cultivation strategy.";
    if (subj.includes("marketing")) return "Growing mushrooms is just the first step; selling them at the right price is where the profit lies. We are committed to helping you scale your business through guaranteed buyback options and strategic market linkage.";
    if (subj.includes("subsidies")) return "Securing funding shouldn't be a hurdle in your farming journey. From preparing detailed project reports (DPR) to navigating government schemes, our experts are here to simplify the financial process for you.";
    return `We have received your message regarding ${subjectOfEnquiry || "your query"}. Our team is reviewing it and will get back to you as soon as possible.`;
  }

  return "Thank you for reaching out to Organic Mushrooms Farm. Our expert agronomy team is reviewing your enquiry and will connect with you shortly.";
}

/**
 * Dispatches both Admin Alert and Custom Smart Reply Customer Email
 */
export async function sendEnquiryEmails(payload: EnquiryPayload) {
  const transporter = getMailTransporter();
  const adminRecipients = getEnquiryAdminRecipients();
  const customerEmail = payload.email?.trim();
  const timestamp = payload.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const customSmartReply = getCustomEnquirySmartReply(payload);

  // Subject formulation
  const subjectLabel = payload.serviceType === "Other" && payload.subjectOfEnquiry 
    ? payload.subjectOfEnquiry 
    : payload.serviceType;
  const adminSubject = `[Enquiry: ${subjectLabel}] from ${payload.fullName} (${payload.phone || "No Phone"})`;

  // 1. Admin Email HTML
  const adminHtml = `
    <div style="background: linear-gradient(135deg, #e0c3fc 0%, #d5f7d4 33%, #c2e9fb 66%, #ffbaba 100%); padding: 30px 15px; font-family: 'Segoe UI', Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 25px; box-shadow: 0 8px 30px rgba(0,0,0,0.08); border: 1px solid #eaeaea;">
        
        <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #f3f4f6; padding-bottom: 15px;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #166534;">Organic Mushrooms Farm</h1>
          <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px; font-weight: 600;">🔔 New Commercial Enquiry Received</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; width: 35%; font-size: 13px;">Customer Name:</td>
            <td style="padding: 10px 8px; color: #111827; font-weight: 600; font-size: 14px;">${payload.fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Mobile / WhatsApp:</td>
            <td style="padding: 10px 8px; font-size: 13px;">
              ${payload.phone ? `<a href="https://wa.me/91${payload.phone.replace(/\D/g, '').slice(-10)}" style="color: #16a34a; font-weight: bold; text-decoration: none;">+91 ${payload.phone} (Chat/Call)</a>` : 'N/A'}
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Email Address:</td>
            <td style="padding: 10px 8px; color: #2563eb; font-size: 13px;">${payload.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Service Requested:</td>
            <td style="padding: 10px 8px; color: #7e22ce; font-weight: bold; font-size: 13px;">${payload.serviceType}</td>
          </tr>
          ${payload.trainingMode ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Training Mode:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px;">${payload.trainingMode}</td>
          </tr>` : ""}
          ${payload.mushroomVariety ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Mushroom Variety:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px;">${payload.mushroomVariety}</td>
          </tr>` : ""}
          ${payload.quantity ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Quantity:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px;">${payload.quantity}</td>
          </tr>` : ""}
          ${payload.deliveryLocation ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Delivery Location:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px;">${payload.deliveryLocation}</td>
          </tr>` : ""}
          ${payload.setupType ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Setup Type:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px;">${payload.setupType}</td>
          </tr>` : ""}
          ${payload.farmSize ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Farm Size / Dimensions:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px;">${payload.farmSize}</td>
          </tr>` : ""}
          ${payload.farmLocation ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Farm Location:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px;">${payload.farmLocation}</td>
          </tr>` : ""}
          ${payload.productForm ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Product Form:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px;">${payload.productForm}</td>
          </tr>` : ""}
          ${payload.subjectOfEnquiry ? `
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px;">Subject:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px;">${payload.subjectOfEnquiry}</td>
          </tr>` : ""}
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 13px; vertical-align: top;">Customer Message:</td>
            <td style="padding: 10px 8px; color: #111827; font-size: 13px; white-space: pre-line;">${payload.message || "No additional message provided."}</td>
          </tr>
          <tr>
            <td style="padding: 10px 8px; font-weight: bold; color: #374151; font-size: 12px;">Timestamp:</td>
            <td style="padding: 10px 8px; color: #6b7280; font-size: 12px;">${timestamp}</td>
          </tr>
        </table>

        <div style="text-align: center; border-top: 1px solid #f3f4f6; padding-top: 15px; color: #9ca3af; font-size: 11px;">
          &copy; ${new Date().getFullYear()} Organic Mushrooms Farm • Katangi Road, Jabalpur (M.P.)
        </div>
      </div>
    </div>
  `;

  // 2. Customer Smart Reply HTML
  const customerHtml = `
    <div style="background: linear-gradient(135deg, #e0c3fc 0%, #d5f7d4 33%, #c2e9fb 66%, #ffbaba 100%); padding: 30px 15px; font-family: 'Segoe UI', Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 30px; box-shadow: 0 8px 30px rgba(0,0,0,0.08); border: 1px solid #eaeaea;">
        
        <div style="text-align: center; margin-bottom: 22px;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #166534;">Organic Mushrooms Farm</h1>
          <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px;">Katangi Road, Jabalpur, Madhya Pradesh - 483105</p>
        </div>

        <div style="background: #f8fafc; border-radius: 12px; padding: 22px; border: 1px solid #e2e8f0; color: #334155; line-height: 1.6; font-size: 14px;">
          <p style="margin-top: 0; font-size: 15px;">Hi <strong>${payload.fullName}</strong>,</p>
          <p>${customSmartReply}</p>
          <div style="margin: 20px 0; padding: 14px; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 6px; font-size: 13px; color: #166534;">
            🌿 <strong>What happens next?</strong><br/>
            Our technical support team is reviewing your requirement. We typically reach out within 2 to 4 business hours to guide you through project feasibility, pricing, and next steps.
          </div>
          <p style="margin-bottom: 0;">Warm regards,<br/><strong style="color: #166534;">The Organic Mushroom Farm Team</strong></p>
        </div>

        <div style="text-align: center; margin-top: 25px;">
          <a href="https://wa.me/919203544140?text=Hi%20Organic%20Mushrooms%20Farm,%20I%20have%20submitted%20an%20enquiry%20for%20${encodeURIComponent(payload.serviceType)}." style="background: #16a34a; color: #ffffff; text-decoration: none; padding: 11px 22px; border-radius: 8px; font-weight: bold; font-size: 13px; display: inline-block;">
            💬 Connect on WhatsApp Helpline (+91 9203544140)
          </a>
        </div>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #f3f4f6; text-align: center; color: #9ca3af; font-size: 11px;">
          &copy; ${new Date().getFullYear()} Organic Mushrooms Farm. All rights reserved.
        </div>
      </div>
    </div>
  `;

  // Send Admin Email
  try {
    await transporter.sendMail({
      from: `"Website Enquiry" <organicmushroomsfarms@gmail.com>`,
      to: adminRecipients,
      subject: adminSubject,
      html: adminHtml,
    });
    console.log(`[EnquiryMail] Admin alert dispatched to: ${adminRecipients.join(", ")}`);
  } catch (err) {
    console.error("[EnquiryMail] Error sending admin alert email:", err);
  }

  // Send Customer Email
  if (customerEmail && customerEmail.includes("@") && !customerEmail.includes("no-reply")) {
    try {
      await transporter.sendMail({
        from: `"Organic Mushroom Farm" <organicmushroomsfarms@gmail.com>`,
        replyTo: "support@organicmushroomsfarm.com",
        to: customerEmail,
        subject: `Thank you for reaching out, ${payload.fullName}! | Organic Mushrooms Farm`,
        html: customerHtml,
      });
      console.log(`[EnquiryMail] Customer smart auto-reply dispatched to: ${customerEmail}`);
    } catch (err) {
      console.error("[EnquiryMail] Error sending customer reply email:", err);
    }
  }

  return { success: true };
}
