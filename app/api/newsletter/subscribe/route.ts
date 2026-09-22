import { NextResponse } from "next/server";
import {
  addNewsletterSubscriber,
  getAllActiveNewsletterSubscribers
} from "@/lib/newsletterStore";
import {
  sendWelcomeEmailToSubscriber,
  sendAdminNewSubscriberAlert
} from "@/lib/emailSender";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, state, source } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const host = req.headers.get("host") || "organicmushroomsfarm.com";
    const protocol = host.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    const { subscriber, isNew } = await addNewsletterSubscriber({
      email: email.trim(),
      name: name?.trim(),
      state: state || "India",
      source: source || "Website Stay Updated Form"
    });

    const allSubscribers = await getAllActiveNewsletterSubscribers();

    // 1. Send beautiful Welcome Confirmation email to the subscriber
    // 2. Send instant alert with attached CSV backup to admin (organicmushroomsfarms@gmail.com)
    // Await both dispatches so serverless/Node environment completes transmission before closing
    await Promise.allSettled([
      sendWelcomeEmailToSubscriber(subscriber.email, baseUrl),
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
      isNew,
      subscriber: {
        email: subscriber.email,
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


