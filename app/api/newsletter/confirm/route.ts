import { NextRequest, NextResponse } from "next/server";
import {
  confirmNewsletterSubscription,
  getAllActiveNewsletterSubscribers
} from "@/lib/newsletterStore";
import {
  sendWelcomeEmailToSubscriber,
  sendAdminNewSubscriberAlert
} from "@/lib/emailSender";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email")?.trim() || "";
  const token = url.searchParams.get("token")?.trim() || "";

  const host = req.headers.get("host") || "organicmushroomsfarm.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  if (!email || !token) {
    return NextResponse.redirect(
      new URL(`/newsletter/confirm?status=invalid&error=${encodeURIComponent("Missing email or verification token")}`, baseUrl)
    );
  }

  const result = await confirmNewsletterSubscription(email, token);

  if (!result.success) {
    return NextResponse.redirect(
      new URL(
        `/newsletter/confirm?status=invalid&error=${encodeURIComponent(
          result.error || "Invalid or expired confirmation link"
        )}`,
        baseUrl
      )
    );
  }

  // If newly activated, send welcome email and alert admin with CSV backup
  if (!result.alreadyActive && result.subscriber) {
    try {
      const allSubscribers = await getAllActiveNewsletterSubscribers();
      await Promise.allSettled([
        sendWelcomeEmailToSubscriber(result.subscriber.email, baseUrl, {
          language: result.subscriber.language,
          city: result.subscriber.city,
          state: result.subscriber.state
        }),
        sendAdminNewSubscriberAlert(
          {
            newSubscriber: result.subscriber,
            allSubscribers
          },
          baseUrl
        )
      ]);
    } catch (mailErr) {
      console.error("[NewsletterConfirm] Error dispatching welcome/admin mail:", mailErr);
    }
  }

  const statusParam = result.alreadyActive ? "already_active" : "success";
  return NextResponse.redirect(
    new URL(`/newsletter/confirm?status=${statusParam}&email=${encodeURIComponent(email)}`, baseUrl)
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, token } = body;

    const host = req.headers.get("host") || "organicmushroomsfarm.com";
    const protocol = host.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    if (!email || !token) {
      return NextResponse.json(
        { success: false, error: "Missing email or verification token" },
        { status: 400 }
      );
    }

    const result = await confirmNewsletterSubscription(email, token);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Invalid or expired verification link" },
        { status: 400 }
      );
    }

    if (!result.alreadyActive && result.subscriber) {
      try {
        const allSubscribers = await getAllActiveNewsletterSubscribers();
        await Promise.allSettled([
          sendWelcomeEmailToSubscriber(result.subscriber.email, baseUrl, {
            language: result.subscriber.language,
            city: result.subscriber.city,
            state: result.subscriber.state
          }),
          sendAdminNewSubscriberAlert(
            {
              newSubscriber: result.subscriber,
              allSubscribers
            },
            baseUrl
          )
        ]);
      } catch (mailErr) {
        console.error("[NewsletterConfirm] Error dispatching welcome/admin mail:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      alreadyActive: result.alreadyActive,
      message: result.alreadyActive
        ? "Your subscription is already active and verified!"
        : "Subscription successfully confirmed! Welcome to Organic Mushrooms Farm 2-Day Digest."
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to confirm subscription" },
      { status: 500 }
    );
  }
}
