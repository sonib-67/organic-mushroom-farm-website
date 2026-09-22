import { NextResponse } from "next/server";
import { getAllPushSubscribers, getSubscriberCount } from "@/lib/notificationStore";
import { generateDailyAiNotification } from "@/lib/aiNotificationGenerator";
import { executeDailyNotificationDispatch } from "@/lib/serverScheduler";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const previewOnly = url.searchParams.get("preview") === "true";
    const testState = url.searchParams.get("state") || "Madhya Pradesh";

    // Auto-detect 10am vs 5pm slot based on Indian Standard Time (UTC + 5:30)
    const nowUtc = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(nowUtc.getTime() + istOffset);
    const istHour = istDate.getUTCHours();

    const paramSlot = url.searchParams.get("slot") as "10am" | "5pm" | null;
    const activeSlot: "10am" | "5pm" = paramSlot || (istHour < 14 ? "10am" : "5pm");

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

    // Execute actual Web Push dispatch to all subscribers
    const dispatchReport = await executeDailyNotificationDispatch(activeSlot);

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
