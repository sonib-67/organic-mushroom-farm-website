import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

/**
 * Escape user input before inserting it into HTML.
 */
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Convert text to safe HTML with line breaks.
 */
function textToHtml(value: unknown): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br>");
}

/**
 * User confirmation email content.
 */
function getUserMessageHtml(
  name: string,
  subject: string,
  service: string,
  trainingMode?: string,
  mushroomVariety?: string,
  setupType?: string,
  productForm?: string,
  otherSubject?: string
): string {
  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);

  if (service === "TRAINING") {
    const isOnline =
      trainingMode &&
      trainingMode.toLowerCase().includes("online");

    let varietyName = mushroomVariety || "All Varieties Combined";

    if (
      varietyName !== "All Varieties Combined" &&
      !varietyName.includes("All Varieties") &&
      !varietyName.toLowerCase().includes("mushroom")
    ) {
      varietyName += " Mushroom";
    }

    const safeVariety = escapeHtml(varietyName);

    if (isOnline) {
      if (varietyName.includes("All Varieties")) {
        return `
          Hi ${safeName},<br/><br/>

          Thank you for reaching out to us! We have received your message regarding a new enquiry for <strong>Online Mushroom Training</strong>.<br/><br/>

          We are thrilled to see your interest in mastering All Major Mushroom Varieties from the comfort of your home. Our comprehensive online program will cover everything you need to succeed.<br/><br/>

          Our team is reviewing your details and will get back to you shortly with the complete syllabus, schedule, and next steps.<br/><br/>

          Warm regards,<br/>
          <strong>The Organic Mushroom Farm Team</strong>
        `;
      }

      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your message regarding a new enquiry for <strong>Online Mushroom Training</strong>.<br/><br/>

        We are excited to help you learn ${safeVariety} cultivation from the comfort of your home. Our expert-led online sessions are designed to give you step-by-step guidance.<br/><br/>

        Our team is reviewing your details and will get back to you shortly with the online training schedule and next steps.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (varietyName.includes("All Varieties")) {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your message regarding a new enquiry for <strong>Offline Mushroom Training</strong>.<br/><br/>

        We are thrilled to see your interest in mastering All Major Mushroom Varieties. Our comprehensive offline training at the farm will give you the complete hands-on experience you need to start your own business.<br/><br/>

        Our team is reviewing your details and will get back to you shortly with upcoming batch dates, location details, and the next steps.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    return `
      Hi ${safeName},<br/><br/>

      Thank you for reaching out to us! We have received your message regarding a new enquiry for <strong>Offline Mushroom Training</strong>.<br/><br/>

      We are excited to provide you with hands-on, practical experience in ${safeVariety} cultivation directly at our farm. Our expert-led sessions will give you ground-level skills.<br/><br/>

      Our team is reviewing your details and will get back to you shortly with upcoming batch dates and location details.<br/><br/>

      Warm regards,<br/>
      <strong>The Organic Mushroom Farm Team</strong>
    `;
  }

  if (service === "SPAWN") {
    const varietyName = mushroomVariety || "Multiple Varieties";
    const safeVariety = escapeHtml(varietyName);

    if (varietyName.includes("Button")) {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for <strong>Button Mushroom Spawn (Seed)</strong>.<br/><br/>

        Button mushrooms are highly in demand, and we provide quality spawn suitable for commercial cultivation. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (varietyName.includes("Oyster")) {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for <strong>Oyster Mushroom Spawn (Seed)</strong>.<br/><br/>

        Oyster mushrooms are known for their fast growth and excellent yield. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (varietyName.includes("Milky")) {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for <strong>Milky Mushroom Spawn (Seed)</strong>.<br/><br/>

        Milky mushrooms are suitable for warmer growing conditions. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (varietyName.includes("Shiitake")) {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for <strong>Shiitake Mushroom Spawn (Seed)</strong>.<br/><br/>

        Shiitake is a premium gourmet mushroom variety. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (varietyName.includes("Lion's Mane")) {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for <strong>Lion's Mane Mushroom Spawn (Seed)</strong>.<br/><br/>

        Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (varietyName.includes("Cordyceps")) {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for <strong>Cordyceps Mushroom Spawn (Culture/Seed)</strong>.<br/><br/>

        Cordyceps cultivation is specialized. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    return `
      Hi ${safeName},<br/><br/>

      Thank you for reaching out to us! We have received your enquiry for <strong>${safeVariety} Mushroom Spawn</strong>.<br/><br/>

      Our team is reviewing your requirements and will get back to you as soon as possible with pricing and availability.<br/><br/>

      Warm regards,<br/>
      <strong>The Organic Mushroom Farm Team</strong>
    `;
  }

  if (service === "SETUP") {
    if (setupType === "AC Commercial Farm") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for an <strong>AC Commercial Farm Setup</strong>.<br/><br/>

        Setting up a climate-controlled commercial farm can support consistent, year-round mushroom production. Our experts provide end-to-end turnkey solutions based on your requirements.<br/><br/>

        Our team is reviewing your request and will get back to you as soon as possible to discuss your commercial farm setup needs.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (setupType === "Non-AC Seasonal Hut") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for a <strong>Non-AC Seasonal Hut Structure</strong>.<br/><br/>

        Seasonal structures can be a cost-effective way to start mushroom cultivation. Our experts will help you plan a suitable setup based on your requirements.<br/><br/>

        Our team is reviewing your request and will get back to you as soon as possible.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (setupType === "PUF Panel Setup") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for a <strong>High-Tech PUF Panel Setup</strong>.<br/><br/>

        PUF panel structures provide insulation and can be used for controlled mushroom cultivation environments. Our turnkey team will review your project requirements.<br/><br/>

        We will get back to you as soon as possible to discuss your setup requirements.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (setupType === "Consultancy Only") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for <strong>Farm Setup Consultancy</strong>.<br/><br/>

        Whether you are planning a new farm, upgrading an existing setup, or seeking technical guidance, our team is here to help.<br/><br/>

        Our team will get back to you shortly to schedule your consultation.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    return `
      Hi ${safeName},<br/><br/>

      Thank you for reaching out to us! We have received your enquiry regarding <strong>Farm Setup</strong>.<br/><br/>

      Our team is reviewing your request and will get back to you as soon as possible.<br/><br/>

      Warm regards,<br/>
      <strong>The Organic Mushroom Farm Team</strong>
    `;
  }

  if (service === "BUY MUSHROOM") {
    const varietyName = mushroomVariety || "Mushrooms";
    const safeVariety = escapeHtml(varietyName);

    let formName = productForm || "Mushroom Products";

    if (formName === "Fresh Mushroom") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your order enquiry for <strong>Fresh ${safeVariety}</strong>.<br/><br/>

        Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (formName === "Dry Mushroom") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your order enquiry for <strong>Dry ${safeVariety}</strong>.<br/><br/>

        Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (formName === "Mushroom Powder") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry for <strong>${safeVariety} Mushroom Powder</strong>.<br/><br/>

        Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    return `
      Hi ${safeName},<br/><br/>

      Thank you for reaching out to us! We have received your enquiry regarding <strong>${safeVariety}</strong>.<br/><br/>

      Our team is reviewing your requirements and will get back to you shortly.<br/><br/>

      Warm regards,<br/>
      <strong>The Organic Mushroom Farm Team</strong>
    `;
  }

  if (service === "OTHER") {
    if (otherSubject === "Machinery & Equipment") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry regarding <strong>Machinery & Equipment</strong>.<br/><br/>

        Our technical team is reviewing your request and will get back to you soon with suitable solutions and pricing.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (otherSubject === "Site Visit Consultation") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your request for a <strong>Site Visit Consultation</strong>.<br/><br/>

        Our experts will review your requirements and contact you shortly to discuss the visit and next steps.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (otherSubject === "Marketing & Buyback Support") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry regarding <strong>Marketing & Buyback Support</strong>.<br/><br/>

        Our team will review your farm capacity details and contact you soon to discuss the available support and policies.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (otherSubject === "Subsidies & Bank Loans") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your enquiry regarding <strong>Subsidies & Bank Loans</strong>.<br/><br/>

        Our team will review your requirements and get back to you shortly with guidance on the next steps.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }

    if (otherSubject === "Other") {
      return `
        Hi ${safeName},<br/><br/>

        Thank you for reaching out to us! We have received your <strong>General Query</strong>.<br/><br/>

        Our team is reviewing your message and will get back to you as soon as possible with the right information.<br/><br/>

        Warm regards,<br/>
        <strong>The Organic Mushroom Farm Team</strong>
      `;
    }
  }

  return `
    Hi ${safeName},<br/><br/>

    Thank you for reaching out to us! We have received your message regarding <strong>${safeSubject || "your enquiry"}</strong>.<br/><br/>

    Our team is reviewing it and will get back to you as soon as possible.<br/><br/>

    Warm regards,<br/>
    <strong>The Organic Mushroom Farm Team</strong>
  `;
}


/**
 * Main Vercel API handler.
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only POST allowed
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
      service,
      trainingMode,
      mushroomVariety,
      setupType,
      productForm,
      otherSubject,
      recaptchaToken,
    } = req.body || {};

    // ----------------------------------------------------
    // 1. Required form validation
    // ----------------------------------------------------

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    // ----------------------------------------------------
    // 2. Validate reCAPTCHA token
    // ----------------------------------------------------

    if (
      !recaptchaToken ||
      typeof recaptchaToken !== "string" ||
      recaptchaToken.trim().length === 0
    ) {
      return res.status(400).json({
        error: "Please complete the reCAPTCHA verification.",
      });
    }

    // ----------------------------------------------------
    // 3. Get reCAPTCHA secret from Vercel Environment
    // ----------------------------------------------------

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

    if (!recaptchaSecret) {
      console.error("RECAPTCHA_SECRET_KEY is missing.");
      return res.status(500).json({
        error: "reCAPTCHA configuration is missing on the server.",
      });
    }

    // ----------------------------------------------------
    // 4. Verify reCAPTCHA with Google
    // ----------------------------------------------------

    const verifyResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: recaptchaToken,
        }).toString(),
      }
    );

    if (!verifyResponse.ok) {
      console.error(
        "Google reCAPTCHA HTTP error:",
        verifyResponse.status
      );

      return res.status(400).json({
        error: "Unable to verify reCAPTCHA. Please try again.",
      });
    }

    const verifyData = await verifyResponse.json();

    console.log("reCAPTCHA verification:", {
      success: verifyData.success,
      score: verifyData.score,
      action: verifyData.action,
      hostname: verifyData.hostname,
      errorCodes: verifyData["error-codes"],
    });

    if (!verifyData.success) {
      console.error(
        "reCAPTCHA verification failed:",
        verifyData["error-codes"]
      );

      return res.status(400).json({
        error: "reCAPTCHA verification failed. Please try again.",
        details: verifyData["error-codes"] || [],
      });
    }

    // ----------------------------------------------------
    // 5. If using reCAPTCHA v3, validate score
    // ----------------------------------------------------

    if (
      typeof verifyData.score === "number" &&
      verifyData.score < 0.5
    ) {
      console.warn("reCAPTCHA score too low:", verifyData.score);

      return res.status(400).json({
        error: "reCAPTCHA verification failed. Please try again.",
      });
    }

    // ----------------------------------------------------
    // 6. Email environment variables
    // ----------------------------------------------------

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("EMAIL_USER or EMAIL_PASS is missing.");

      return res.status(500).json({
        error: "Email service configuration is missing.",
      });
    }

    // ----------------------------------------------------
    // 7. Create Gmail transporter
    // ----------------------------------------------------

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // ----------------------------------------------------
    // 8. Safe values for admin email
    // ----------------------------------------------------

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "N/A");
    const safeSubject = escapeHtml(subject || "N/A");
    const safeService = escapeHtml(service || "N/A");

    const safeTrainingMode = escapeHtml(trainingMode || "N/A");
    const safeMushroomVariety = escapeHtml(
      mushroomVariety || "N/A"
    );
    const safeSetupType = escapeHtml(setupType || "N/A"
