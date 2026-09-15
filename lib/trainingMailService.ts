import nodemailer from "nodemailer";

export interface TrainingMailPayload {
  type: "INITIATED" | "SUCCESS" | "CANCELLED" | "FAILED";
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  amount: string; // e.g. "299", "699", "39", "97"
  currency?: string; // "INR" or "USD"
  planTitle?: string; // "Basic Online Training (₹299)" or "Commercial Training (₹699)"
  paymentId?: string;
  orderId?: string;
}

/**
 * Robust SMTP Transporter with fallbacks for multiple env variable names
 */
export function getTrainingTransporter() {
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
export function getTrainingAdminRecipients(): string[] {
  const list = [
    "organicmushroomsfarms@gmail.com",
    "tanmaysomi@gmail.com",
    process.env.OWNER_EMAIL,
    process.env.SMTP_EMAIL,
  ].filter((email): email is string => Boolean(email && email.trim()));

  return Array.from(new Set(list));
}

/**
 * Identify Plan Name according to amount
 */
export function resolvePlanDetails(amount: string, currency: string = "INR") {
  const cleanAmt = String(amount).replace(/[^0-9.]/g, "");
  const num = parseFloat(cleanAmt);

  if (currency === "USD" || num === 39 || num === 97) {
    if (num === 39) {
      return {
        title: "Basic Cultivation Mushroom Training ($39)",
        tier: "Basic (Beginner)",
        highlights: "Oyster & Button home setup, substrate boiling & basic climate control.",
      };
    }
    return {
      title: "Advanced Commercial Mushroom Training ($97)",
      tier: "Advanced (Commercial)",
      highlights: "Farm layout, vertical racks, HVAC climate control, pest management & B2B sales strategy.",
    };
  }

  // INR plans (299 & 699)
  if (num === 299 || cleanAmt === "299") {
    return {
      title: "Basic Online Mushroom Training (₹299)",
      tier: "Basic Course (Beginner Friendly)",
      highlights: "Mushroom growth fundamentals, Oyster & Button home setup, substrate preparation & climate control basics.",
    };
  }

  if (num === 699 || cleanAmt === "699") {
    return {
      title: "Advanced Commercial Mushroom Training (₹699)",
      tier: "Advanced Commercial Masterclass",
      highlights: "Button, Oyster & Milky cultivation, AC & PUF panel farm setup, foggers/humidifiers, disease prevention, B2B wholesale marketing & completion certificate.",
    };
  }

  return {
    title: `Mushroom Farming Training (${currency} ${cleanAmt || amount})`,
    tier: "Professional Cultivation Program",
    highlights: "Step-by-step practical mushroom cultivation guidance, SOP blueprints, and expert farm support.",
  };
}

/**
 * Main function to dispatch Training Emails for INITIATED, CANCELLED, and SUCCESS
 */
export async function sendTrainingEmailService(payload: TrainingMailPayload) {
  const {
    type,
    customerEmail,
    customerName = "Mushroom Grower",
    customerPhone = "N/A",
    amount,
    currency = "INR",
    paymentId = "N/A",
    orderId = "N/A",
  } = payload;

  const transporter = getTrainingTransporter();
  const adminList = getTrainingAdminRecipients();
  const isCustEmailValid = customerEmail && customerEmail.includes("@") && !customerEmail.includes("no-reply");
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  
  const planInfo = resolvePlanDetails(amount, currency);
  const currencySymbol = currency === "USD" ? "$" : "₹";
  const displayAmount = `${currencySymbol}${String(amount).replace(/[^0-9.]/g, "")}`;

  console.log(`[TrainingMailService] Processing ${type} for ${planInfo.title} | Customer: ${customerName} (${customerEmail})`);

  // ==========================================
  // 1. PAYMENT INITIATED (Admin Alert Only)
  // ==========================================
  if (type === "INITIATED") {
    const adminInitHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 18px; border-radius: 10px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">⚡ Training Payment Initiated</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.95;">User opened checkout for ${planInfo.title}</p>
        </div>
        
        <div style="padding: 20px 0; font-size: 14px; color: #334155; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold; width: 140px;">Customer Name:</td><td style="font-weight: 600; color: #0f172a;">${customerName}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Email:</td><td style="color: #2563eb;">${customerEmail || "Not provided"}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Mobile / Phone:</td><td>${customerPhone || "N/A"}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Training Plan:</td><td><strong style="color: #7e22ce;">${planInfo.title}</strong></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Plan Tier:</td><td>${planInfo.tier}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Amount:</td><td><span style="font-size: 16px; font-weight: bold; color: #d97706;">${displayAmount}</span></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Order ID:</td><td><code>${orderId}</code></td></tr>
            <tr><td style="padding: 9px 0; font-weight: bold;">Time (IST):</td><td>${timestamp}</td></tr>
          </table>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 12px; color: #64748b; text-align: center;">
          Organic Mushrooms Farm • Real-time Training Checkout Tracker
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
        to: adminList,
        subject: `[Training Initiated] ${displayAmount} - ${planInfo.title} by ${customerName}`,
        html: adminInitHtml,
      });
      console.log(`[TrainingMailService] Admin initiated alert sent to: ${adminList.join(", ")}`);
    } catch (err) {
      console.error("[TrainingMailService] Error sending admin initiated mail:", err);
    }

    return { success: true };
  }

  // ==========================================
  // 2. PAYMENT CANCELLED / ABANDONED (Admin + Customer)
  // ==========================================
  if (type === "CANCELLED" || type === "FAILED") {
    // 2.1 Admin Email for CANCELLED
    const adminCancelHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #fecaca; border-radius: 16px; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #ef4444, #dc2626); padding: 18px; border-radius: 10px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">⚠️ Training Payment Incomplete / Cancelled</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.95;">User closed modal without finishing payment for ${planInfo.title}</p>
        </div>
        
        <div style="padding: 20px 0; font-size: 14px; color: #334155; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold; width: 140px;">Customer Name:</td><td style="font-weight: 600; color: #0f172a;">${customerName}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Email:</td><td style="color: #2563eb;">${customerEmail || "Not provided"}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Mobile / Phone:</td><td>${customerPhone || "N/A"}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Training Plan:</td><td><strong style="color: #dc2626;">${planInfo.title}</strong></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Amount:</td><td><span style="font-size: 16px; font-weight: bold; color: #dc2626;">${displayAmount}</span></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Order ID:</td><td><code>${orderId}</code></td></tr>
            <tr><td style="padding: 9px 0; font-weight: bold;">Time (IST):</td><td>${timestamp}</td></tr>
          </table>
        </div>

        <div style="background: #fef2f2; border: 1px solid #fee2e2; border-radius: 8px; padding: 12px; font-size: 13px; color: #991b1b;">
          💡 <strong>Suggested Action:</strong> You can follow up with <strong>${customerName}</strong> (${customerEmail}) to offer enrollment assistance or clarify course syllabus queries.
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
        to: adminList,
        subject: `[Training Cancelled] ${displayAmount} - ${planInfo.title} by ${customerName}`,
        html: adminCancelHtml,
      });
      console.log(`[TrainingMailService] Admin cancel alert sent to: ${adminList.join(", ")}`);
    } catch (err) {
      console.error("[TrainingMailService] Error sending admin cancel mail:", err);
    }

    // 2.2 Customer Email for CANCELLED
    if (isCustEmailValid) {
      const retryUrl = currency === "USD" 
        ? "https://organicmushroomsfarm.com/usatraining" 
        : "https://organicmushroomsfarm.com/training";

      const customerCancelHtml = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
          <div style="text-align: center; padding-bottom: 18px; border-bottom: 1px solid #f1f5f9;">
            <h1 style="color: #0f172a; font-size: 22px; margin: 0; font-weight: 800;">Organic Mushrooms Farm</h1>
            <p style="color: #64748b; font-size: 12px; margin: 4px 0 0 0;">Katangi Road, Jabalpur, Madhya Pradesh - 483105</p>
          </div>

          <div style="padding: 22px 0; font-size: 14px; color: #334155; line-height: 1.6;">
            <p style="font-size: 16px; font-weight: bold; color: #0f172a; margin-top: 0;">Hi ${customerName},</p>
            <p>We noticed that your enrollment payment for <strong>${planInfo.title}</strong> (${displayAmount}) was not completed or was cancelled.</p>
            
            <div style="background: #f8fafc; border-left: 4px solid #f59e0b; padding: 14px; border-radius: 6px; font-size: 13px; color: #475569; margin: 16px 0;">
              ℹ️ <strong>Please note:</strong> No amount was deducted from your account. If any balance was temporarily held by your bank, it will be refunded automatically within 24-48 hours.
            </div>
            
            <p>Here is what you will learn once you complete your enrollment:</p>
            <div style="background: #f0fdf4; border: 1px solid #dcfce7; border-radius: 8px; padding: 14px; font-size: 13px; color: #166534; margin-bottom: 18px;">
              🌿 <strong>${planInfo.tier} Highlights:</strong><br/>
              ${planInfo.highlights}
            </div>

            <div style="text-align: center; margin: 24px 0;">
              <a href="${retryUrl}" style="background: #16a34a; color: #ffffff; text-decoration: none; padding: 12px 26px; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                Complete Enrollment (${displayAmount})
              </a>
            </div>

            <p style="font-size: 13px; color: #64748b;">
              Need help or have questions about course timings? Feel free to connect directly with our training coordinators on WhatsApp: 
              <a href="https://wa.me/919203544140" style="color: #16a34a; font-weight: bold; text-decoration: none;">+91 9203544140</a>.
            </p>
          </div>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
            Organic Mushrooms Farm • Jabalpur (M.P.) • Helpline: +91 9203544140
          </div>
        </div>
      `;

      try {
        await transporter.sendMail({
          from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
          replyTo: "support@organicmushroomsfarm.com",
          to: customerEmail,
          subject: `Enrollment Incomplete - ${planInfo.title} | Organic Mushrooms Farm`,
          html: customerCancelHtml,
        });
        console.log(`[TrainingMailService] Customer cancel email sent to: ${customerEmail}`);
      } catch (err) {
        console.error("[TrainingMailService] Error sending customer cancel email:", err);
      }
    }

    return { success: true };
  }

  // ==========================================
  // 3. PAYMENT SUCCESS / DONE (Admin + Customer)
  // ==========================================
  if (type === "SUCCESS") {
    // 3.1 Admin Email for SUCCESS
    const adminSuccessHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #bbf7d0; border-radius: 16px; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #16a34a, #15803d); padding: 18px; border-radius: 10px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">🎉 New Confirmed Training Enrollment!</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.95;">Customer has successfully paid for ${planInfo.title}</p>
        </div>
        
        <div style="padding: 20px 0; font-size: 14px; color: #334155; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold; width: 140px;">Customer Name:</td><td style="font-weight: 700; color: #0f172a; font-size: 15px;">${customerName}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Email:</td><td style="color: #2563eb;">${customerEmail || "Not provided"}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Mobile / WhatsApp:</td><td>
              ${customerPhone && customerPhone !== "N/A" ? `<a href="https://wa.me/91${customerPhone.replace(/\D/g, '').slice(-10)}" style="color: #16a34a; font-weight: bold; text-decoration: none;">+91 ${customerPhone} (Chat on WhatsApp)</a>` : "N/A"}
            </td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Training Plan:</td><td><strong style="color: #16a34a; font-size: 15px;">${planInfo.title}</strong></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Plan Tier:</td><td>${planInfo.tier}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Amount Paid:</td><td><strong style="color: #15803d; font-size: 17px;">${displayAmount}</strong></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Payment ID:</td><td><code>${paymentId}</code></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 9px 0; font-weight: bold;">Order ID:</td><td><code>${orderId}</code></td></tr>
            <tr><td style="padding: 9px 0; font-weight: bold;">Time (IST):</td><td>${timestamp}</td></tr>
          </table>
        </div>

        <div style="background: #f0fdf4; border: 1px solid #dcfce7; border-radius: 8px; padding: 12px; font-size: 13px; color: #166534;">
          ✅ <strong>Next Step:</strong> Welcome email with syllabus and community onboarding has been dispatched to <strong>${customerEmail}</strong>.
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
        to: adminList,
        subject: `[CONFIRMED ENROLLMENT] ${displayAmount} - ${planInfo.title} by ${customerName}`,
        html: adminSuccessHtml,
      });
      console.log(`[TrainingMailService] Admin success alert sent to: ${adminList.join(", ")}`);
    } catch (err) {
      console.error("[TrainingMailService] Error sending admin success mail:", err);
    }

    // 3.2 Customer Email for SUCCESS
    if (isCustEmailValid) {
      const customerSuccessHtml = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 22px; border-radius: 10px; color: #ffffff; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Welcome to Mushroom Training!</h1>
            <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.95;">Congratulations, ${customerName}! Your enrollment is officially confirmed.</p>
          </div>

          <div style="padding: 22px 0; font-size: 14px; color: #334155; line-height: 1.6;">
            <p style="font-size: 15px; margin-top: 0;">We have received your enrollment fee of <strong>${displayAmount}</strong> for <strong>${planInfo.title}</strong>.</p>
            
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 16px 0;">
              <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">Enrollment Summary:</h3>
              <p style="margin: 4px 0;"><strong>Program:</strong> ${planInfo.title}</p>
              <p style="margin: 4px 0;"><strong>Tier:</strong> ${planInfo.tier}</p>
              <p style="margin: 4px 0;"><strong>Transaction ID:</strong> <code>${paymentId}</code></p>
              <p style="margin: 4px 0;"><strong>Amount Paid:</strong> ${displayAmount}</p>
              <p style="margin: 4px 0;"><strong>Access Format:</strong> Live Sessions + Digital SOP Blueprints + WhatsApp Grower Support Group</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 14px; border-radius: 6px; font-size: 13px; color: #166534; margin: 18px 0;">
              🌿 <strong>What to do next?</strong><br/>
              Our training coordinator will add your mobile/email to the private training batch group within 2 hours. You can also message our senior agronomist directly to get instant onboarding:
            </div>
            
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://wa.me/919203544140?text=Hi%20Organic%20Mushrooms%20Farm,%20I%20have%20enrolled%20in%20${encodeURIComponent(planInfo.title)}%20(Payment%20ID:%20${paymentId}).%20Please%20share%20my%20course%20access." style="background: #25d366; color: #ffffff; text-decoration: none; padding: 12px 26px; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                💬 Join Training WhatsApp Group (+91 9203544140)
              </a>
            </div>

            <p style="font-size: 13px; color: #64748b;">
              Direct Helpline: <strong>+91 9203544140</strong> | Katangi Road, Jabalpur, Madhya Pradesh - 483105.
            </p>
          </div>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
            Organic Mushrooms Farm • Certified Mushroom Training & Spawn Laboratory
          </div>
        </div>
      `;

      try {
        await transporter.sendMail({
          from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
          replyTo: "support@organicmushroomsfarm.com",
          to: customerEmail,
          subject: `Enrollment Confirmed - Welcome to ${planInfo.title}! | Organic Mushrooms Farm`,
          html: customerSuccessHtml,
        });
        console.log(`[TrainingMailService] Customer success email sent to: ${customerEmail}`);
      } catch (err) {
        console.error("[TrainingMailService] Error sending customer success email:", err);
      }
    }

    return { success: true };
  }

  return { success: true };
}
