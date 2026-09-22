import { NextResponse } from "next/server";
import {
  getAllPushSubscribers,
  recordPushSent,
  getSubscriberCount
} from "@/lib/notificationStore";
import { generateDailyAiNotification } from "@/lib/aiNotificationGenerator";

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

    const subscribers = getAllPushSubscribers();
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

    // Process actual subscribers queue with AI generation tailored to state
    const dispatchResults: Array<{
      subscriberId: string;
      state: string;
      slot: string;
      title: string;
      body: string;
      url: string;
      generatedBy: string;
      dispatchedAt: string;
    }> = [];

    // State cache to avoid re-generating the same AI message multiple times in one cron run
    const stateCache: Record<string, any> = {};

    for (const sub of subscribers) {
      const state = sub.state || "Madhya Pradesh";
      const lang = sub.language || "hi";
      const cacheKey = `${state}_${lang}_${activeSlot}`;

      if (!stateCache[cacheKey]) {
        stateCache[cacheKey] = await generateDailyAiNotification(activeSlot, state, lang as "hi" | "en");
      }

      const message = stateCache[cacheKey];
      const trackingId = `${activeSlot}_${new Date().toISOString().slice(0, 10)}_${message.url.replace(/\//g, "-")}`;
      recordPushSent(sub.id, trackingId);

      dispatchResults.push({
        subscriberId: sub.id,
        state: sub.state,
        slot: activeSlot,
        title: message.title,
        body: message.body,
        url: message.url,
        generatedBy: message.generatedBy,
        dispatchedAt: new Date().toISOString()
      });
    }

    return NextResponse.json({
      success: true,
      currentSlot: activeSlot,
      processedSubscribers: dispatchResults.length,
      sampleDispatches: dispatchResults.slice(0, 5),
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
