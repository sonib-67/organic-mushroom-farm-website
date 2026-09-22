import { NextResponse } from "next/server";
import {
  ensureSubscribersLoaded,
  getSubscriberCount
} from "@/lib/notificationStore";
import { generateDailyAiNotification } from "@/lib/aiNotificationGenerator";
import { executeDailyNotificationDispatch } from "@/lib/serverScheduler";

async function handleCronRequest(req: Request) {
  try {
    const url = new URL(req.url);

    // Optional Security Token check if CRON_SECRET is configured
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret) {
      const authHeader = req.headers.get("authorization");
      const tokenParam = url.searchParams.get("token") || url.searchParams.get("key");
      const bearerToken = authHeader?.replace("Bearer ", "");
      if (bearerToken !== cronSecret && tokenParam !== cronSecret) {
        return NextResponse.json(
          { success: false, error: "Unauthorized. Invalid CRON_SECRET token." },
          { status: 401 }
        );
      }
    }

    const previewOnly = url.searchParams.get("preview") === "true";
    const bypassCooldown = url.searchParams.get("bypassCooldown") === "true";
    const testState = url.searchParams.get("state") || "Madhya Pradesh";

    // Auto-detect 10am vs 5pm slot based on Indian Standard Time (UTC + 5:30)
    const nowUtc = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(nowUtc.getTime() + istOffset);
    const istHour = istDate.getUTCHours();

    const paramSlot = url.searchParams.get("slot") as "10am" | "5pm" | null;
    const activeSlot: "10am" | "5pm" = paramSlot || (istHour < 14 ? "10am" : "5pm");

    // Ensure subscribers are loaded (including Google Sheets sync fallback)
    await ensureSubscribersLoaded();
    const stats = getSubscriberCount();

    // Generate AI notification sample previews for 10am & 5pm
    const preview10am = await generateDailyAiNotification("10am", testState, "hi");
    const preview5pm = await generateDailyAiNotification("5pm", testState, "hi");
    const previewEn = await generateDailyAiNotification("10am", "Tamil Nadu", "en");

    if (previewOnly) {
      return NextResponse.json({
        success: true,
        currentIstHour: istHour,
        detectedSlot: activeSlot,
        subscribersCount: stats.total,
        previewSamples: {
          morning10am: preview10am,
          evening5pm: preview5pm,
          englishRegion: previewEn
        }
      });
    }

    // Execute actual Web Push dispatch to all subscribers with Anti-Fatigue Engine
    const dispatchReport = await executeDailyNotificationDispatch(activeSlot, bypassCooldown);

    return NextResponse.json({
      success: true,
      currentSlot: activeSlot,
      date: dispatchReport.date,
      processedSubscribers: dispatchReport.totalSubscribers,
      sampleDispatches: dispatchReport.results.slice(0, 10),
      previewSamples: {
        morning10am: preview10am,
        evening5pm: preview5pm
      }
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process notifications" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  return handleCronRequest(req);
}

export async function POST(req: Request) {
  return handleCronRequest(req);
}

