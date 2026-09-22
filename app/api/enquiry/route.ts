import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmails, EnquiryPayload } from "@/lib/enquiryMailService";
import { syncEnquiryToGoogleSheet } from "@/lib/googleSheetSync";

// In-memory store for rate limiting
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 2 * 60 * 60 * 1000; // 2 hours
const MAX_REQUESTS = 5;

// Regex for spam detection
const hasUrl = (text: string) =>
  /https?:\/\/|www\.|[a-zA-Z0-9-]+\.(com|org|net|info|biz|ru|in|co|uk)\b/i.test(text);
const hasCyrillic = (text: string) => /[\u0400-\u04FF]/.test(text);

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown-ip";

    // 1. Rate Limiting Check
    const now = Date.now();
    const userRateData = ipRequestCounts.get(ip);

    if (userRateData) {
      if (now > userRateData.resetTime) {
        ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      } else if (userRateData.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: "Too many requests. You have reached the limit. Please try again after some time or WhatsApp us directly at +91 9203544140." },
          { status: 429 }
        );
      } else {
        userRateData.count += 1;
        ipRequestCounts.set(ip, userRateData);
      }
    } else {
      ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    const data = await req.json();
    const {
      serviceType,
      fullName,
      phone,
      email,
      message,
      hp_website,
      load_time,
      trainingMode,
      mushroomVariety,
      quantity,
      deliveryLocation,
      setupType,
      farmSize,
      farmLocation,
      productForm,
      subjectOfEnquiry,
      securityAnswer,
      num1,
      num2,
    } = data;

    // 2. Honeypot Check (Hidden Bot Trap)
    if (hp_website) {
      console.log(`[Enquiry] Bot blocked via honeypot. IP: ${ip}`);
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    }

    // 3. Fast Submission Check
    const loadTimeNumber = Number(load_time);
    if (loadTimeNumber && now - loadTimeNumber < 2500) {
      console.log(`[Enquiry] Fast submission detected. IP: ${ip}`);
    }

    // 4. Essential Validation
    const expectedAnswer = String(Number(num1) + Number(num2));
    if (!fullName || !email || !serviceType || (securityAnswer && securityAnswer.trim() !== expectedAnswer)) {
      return NextResponse.json(
        { error: "Please verify your details and correct security question answer." },
        { status: 400 }
      );
    }

    // 5. Spam Content Filter
    const textToCheck = `${fullName} ${message || ""} ${subjectOfEnquiry || ""}`;
    if (hasUrl(textToCheck) || hasCyrillic(textToCheck)) {
      console.log(`[Enquiry] Bot blocked via spam content. IP: ${ip}`);
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    }

    const payload: EnquiryPayload = {
      serviceType,
      fullName: fullName.trim(),
      phone: phone ? phone.trim() : "",
      email: email.trim(),
      message: message ? message.trim() : "",
      trainingMode,
      mushroomVariety,
      quantity,
      deliveryLocation,
      setupType,
      farmSize,
      farmLocation,
      productForm,
      subjectOfEnquiry,
      ip,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    // Dispatch emails (Admin + Customer custom smart reply) AND sync to Google Sheet Website_Enquiries tab
    await Promise.allSettled([
      sendEnquiryEmails(payload),
      syncEnquiryToGoogleSheet({
        action: "website_enquiry",
        type: "enquiry",
        serviceType: payload.serviceType,
        fullName: payload.fullName,
        phone: payload.phone,
        email: payload.email,
        message: payload.message,
        subjectOfEnquiry: payload.subjectOfEnquiry,
        trainingMode: payload.trainingMode,
        mushroomVariety: payload.mushroomVariety,
        quantity: payload.quantity,
        deliveryLocation: payload.deliveryLocation,
        setupType: payload.setupType,
        farmSize: payload.farmSize,
        farmLocation: payload.farmLocation,
        productForm: payload.productForm,
        ip: payload.ip,
        timestamp: payload.timestamp,
      }),
    ]);

    return NextResponse.json(
      { message: "Enquiry submitted successfully! Confirmation email has been dispatched." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Enquiry API Error]:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please try again or WhatsApp us at +91 9203544140." },
      { status: 500 }
    );
  }
}
