import { NextResponse } from "next/server";
import {
  getAllActiveNewsletterSubscribers,
  recordDigestSent,
  hasTwoDaysPassedSinceLastDigest,
  getDigestHistory
} from "@/lib/newsletterStore";
import { generateUniqueDigestContent } from "@/lib/geminiDigestGenerator";
import {
  sendBatchDigestEmails,
  sendSingleDigestEmail
} from "@/lib/emailSender";
import {
  renderRedditStyleDigestHtml,
  renderWelcomeEmailHtml,
  renderAdminSubscriberAlertHtml
} from "@/lib/emailTemplate";

async function handleDigestDispatch(req: Request) {
  try {
    const url = new URL(req.url);
    const host = req.headers.get("host") || "organicmushroomsfarm.com";
    const protocol = host.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    // Security check if CRON_SECRET is set
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret) {
      const authHeader = req.headers.get("authorization");
      const bearerToken = authHeader?.replace("Bearer ", "");
      const tokenParam = url.searchParams.get("token") || url.searchParams.get("key");
      if (bearerToken !== cronSecret && tokenParam !== cronSecret) {
        return NextResponse.json(
          { success: false, error: "Unauthorized. Invalid CRON_SECRET." },
          { status: 401 }
        );
      }
    }

    const previewWelcome = url.searchParams.get("welcome") === "true";
    const previewAdmin = url.searchParams.get("adminAlert") === "true";

    if (previewWelcome) {
      const welcomeHtml = renderWelcomeEmailHtml("kisan.farmer@gmail.com", baseUrl);
      return new Response(welcomeHtml, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    if (previewAdmin) {
      const adminHtml = renderAdminSubscriberAlertHtml(
        {
          email: "kisan.farmer@gmail.com",
          subscribedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          state: "Madhya Pradesh",
          source: "Website Stay Updated Form",
          totalSubscribers: 12
        },
        baseUrl
      );
      return new Response(adminHtml, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    const previewOnly = url.searchParams.get("preview") === "true";
    const previewHtml = url.searchParams.get("html") === "true";
    const force = url.searchParams.get("force") === "true";
    const testEmail = url.searchParams.get("testEmail");

    // 1. Check 2-day cooldown unless forced or test
    const cooldown = hasTwoDaysPassedSinceLastDigest();
    if (!cooldown.eligible && !force && !previewOnly && !testEmail) {
      return NextResponse.json({
        success: true,
        dispatched: false,
        reason: "2-Day Cooldown Active",
        message: `पिछला डाइजेस्ट ${cooldown.hoursSinceLast} घंटे पहले भेजा गया था। डाइजेस्ट हर 48 घंटे में एक बार 2:00 PM पर भेजा जाता है। (Force dispatch ke liye ?force=true lagayein).`,
        lastSentAt: cooldown.lastSentAt,
        hoursSinceLast: cooldown.hoursSinceLast
      });
    }

    // 2. Generate 100% Unique Gemini Content with Anti-Duplication
    const content = await generateUniqueDigestContent();

    // If user wants raw HTML preview in browser
    if (previewHtml) {
      const sampleHtml = renderRedditStyleDigestHtml(
        content,
        "farmer.preview@example.com",
        baseUrl
      );
      return new Response(sampleHtml, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // If user wants JSON preview
    if (previewOnly && !testEmail) {
      const subscribers = await getAllActiveNewsletterSubscribers();
      const history = getDigestHistory();
      return NextResponse.json({
        success: true,
        previewMode: true,
        activeSubscribersCount: subscribers.length,
        antiDuplicationHistoryCount: history.length,
        generatedDigest: content
      });
    }

    // If sending a test email to a specific admin address
    if (testEmail) {
      const sendRes = await sendSingleDigestEmail(testEmail.trim(), content, baseUrl);
      return NextResponse.json({
        success: sendRes.success,
        testTarget: testEmail,
        result: sendRes,
        generatedDigest: content
      });
    }

    // 3. Batch Dispatch to all active subscribers
    const subscribers = await getAllActiveNewsletterSubscribers();

    if (subscribers.length === 0) {
      // Record sending so cooldown tracks, even if list is empty
      await recordDigestSent({
        topicTitle: content.topicTitle,
        category: content.categoryTag,
        recipientCount: 0
      });

      return NextResponse.json({
        success: true,
        dispatched: true,
        message: "No active subscribers found in list. Content generated and recorded in history.",
        digestGenerated: content
      });
    }

    const results = await sendBatchDigestEmails(subscribers, content, baseUrl);
    const successCount = results.filter((r) => r.success).length;

    // 4. Save to Anti-Duplication History
    await recordDigestSent({
      topicTitle: content.topicTitle,
      category: content.categoryTag,
      recipientCount: successCount
    });

    return NextResponse.json({
      success: true,
      dispatched: true,
      totalSubscribers: subscribers.length,
      sentCount: successCount,
      topic: content.topicTitle,
      category: content.categoryTag,
      generatedDate: content.generatedDate,
      resultsSummary: results.slice(0, 10)
    });
  } catch (err: any) {
    console.error("[SendDigestAPI] Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to dispatch digest" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  return handleDigestDispatch(req);
}

export async function POST(req: Request) {
  return handleDigestDispatch(req);
}
