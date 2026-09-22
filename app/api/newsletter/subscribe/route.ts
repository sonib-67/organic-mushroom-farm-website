import { NextResponse } from "next/server";
import {
  addNewsletterSubscriber,
  getAllActiveNewsletterSubscribers
} from "@/lib/newsletterStore";
import {
  sendWelcomeEmailToSubscriber,
  sendAdminNewSubscriberAlert
} from "@/lib/emailSender";
import { detectSubscriberLocation } from "@/lib/geoDetector";

// 1. IP Rate Limiting Store
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window
const MAX_REQUESTS_PER_IP = 4; // Max 4 subscriptions per IP per hour

// 2. Known Disposable / Temporary Email Domains & Bot Generators
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "throwawaymail.com",
  "yopmail.com",
  "sharklasers.com",
  "dispostable.com",
  "getairmail.com",
  "trashmail.com",
  "temp-mail.org",
  "fakeinbox.com",
  "mohmal.com",
  "crazymailing.com",
  "mytemp.email",
  "generator.email",
  "tempail.com",
  "fakemailgenerator.com",
  "emailondeck.com",
  "burnermail.io",
  "nada.ltd",
  "inboxkitten.com",
  "disposablemail.com",
  "tempinbox.com",
  "trashmail.net",
  "mailcatch.com",
  "maildrop.cc",
  "harakirimail.com",
  "mytempmail.com",
  "sharklasers.org",
  "guerrillamailblock.com",
  "guerrillamail.net",
  "spam4.me",
  "grr.la",
  "pokemail.net"
]);

// Email regex to ensure strict valid RFC-like format
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown-ip";

    const now = Date.now();

    // --- Shield 1: IP Rate Limiting ---
    const userRateData = ipRequestCounts.get(ip);
    if (userRateData) {
      if (now > userRateData.resetTime) {
        ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      } else if (userRateData.count >= MAX_REQUESTS_PER_IP) {
        console.warn(`[Newsletter Security] Rate limit exceeded for IP: ${ip}`);
        return NextResponse.json(
          {
            success: false,
            error: "Too many requests from this device. Please wait a while before subscribing again or contact us on WhatsApp."
          },
          { status: 429 }
        );
      } else {
        userRateData.count += 1;
        ipRequestCounts.set(ip, userRateData);
      }
    } else {
      ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    // Clean up old IP rate-limit entries if cache gets too big
    if (ipRequestCounts.size > 500) {
      for (const [k, v] of ipRequestCounts.entries()) {
        if (now > v.resetTime) {
          ipRequestCounts.delete(k);
        }
      }
    }

    const body = await req.json();
    const { email, name, state, source, hp_website, load_time } = body;

    // --- Shield 2: Honeypot Trap (Hidden to humans, filled by bots) ---
    if (hp_website) {
      console.warn(`[Newsletter Security] Bot blocked via honeypot trap. IP: ${ip}`);
      // Silently return success to bot without persisting or sending any emails
      return NextResponse.json({
        success: true,
        message: "Thank you for subscribing! You'll receive our latest updates directly in your inbox."
      });
    }

    // --- Shield 3: Fast Submission Check (Headless bot filter) ---
    const loadTimeNumber = Number(load_time);
    if (loadTimeNumber && now - loadTimeNumber < 1000) {
      console.warn(`[Newsletter Security] Headless bot blocked via fast submission (${now - loadTimeNumber}ms). IP: ${ip}`);
      return NextResponse.json({
        success: true,
        message: "Thank you for subscribing! You'll receive our latest updates directly in your inbox."
      });
    }

    // --- Shield 4: Strict Email Validation ---
    if (
      !email ||
      typeof email !== "string" ||
      email.length < 5 ||
      email.length > 100 ||
      !EMAIL_REGEX.test(email.trim()) ||
      email.includes("<") ||
      email.includes(">")
    ) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // --- Shield 5: Disposable / Temporary Email Blocker ---
    const cleanEmail = email.trim().toLowerCase();
    const domain = cleanEmail.split("@")[1];
    if (domain && DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
      return NextResponse.json(
        {
          success: false,
          error: "Temporary or disposable email addresses are not supported. Please use a permanent email address."
        },
        { status: 400 }
      );
    }

    const host = req.headers.get("host") || "organicmushroomsfarm.com";
    const protocol = host.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    // Smart IP Geolocation & Language Detection
    const geoInfo = await detectSubscriberLocation(req);

    // --- Shield 6: Store & Deduplication ---
    const { subscriber, isNew } = await addNewsletterSubscriber({
      email: cleanEmail,
      name: name?.trim(),
      city: geoInfo.city,
      state: state?.trim() || geoInfo.state,
      country: geoInfo.country,
      language: geoInfo.language,
      source: source || "Website Stay Updated Form"
    });

    // If user was ALREADY subscribed, don't spam them or admin with duplicate alerts
    if (!isNew) {
      return NextResponse.json({
        success: true,
        isNew: false,
        message: "You are already subscribed! You will continue to receive our 2-day updates.",
        subscriber: {
          email: subscriber.email,
          city: subscriber.city,
          state: subscriber.state,
          language: subscriber.language,
          subscribedAt: subscriber.subscribedAt
        }
      });
    }

    const allSubscribers = await getAllActiveNewsletterSubscribers();

    // 1. Send beautiful Welcome Confirmation email to the subscriber (in their regional language)
    // 2. Send instant alert with attached CSV backup to admin (organicmushroomsfarms@gmail.com)
    // Await both dispatches so serverless/Node environment completes transmission before closing
    await Promise.allSettled([
      sendWelcomeEmailToSubscriber(subscriber.email, baseUrl, {
        language: subscriber.language || geoInfo.language,
        city: subscriber.city,
        state: subscriber.state
      }),
      sendAdminNewSubscriberAlert(
        {
          newSubscriber: subscriber,
          allSubscribers
        },
        baseUrl
      )
    ]);

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing! You'll receive our latest updates directly in your inbox.",
      isNew: true,
      subscriber: {
        email: subscriber.email,
        city: subscriber.city,
        state: subscriber.state,
        language: subscriber.language,
        subscribedAt: subscriber.subscribedAt
      }
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process subscription" },
      { status: 500 }
    );
  }
}



