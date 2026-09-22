import { NextResponse } from "next/server";
import { generateDailyAiNotification } from "@/lib/aiNotificationGenerator";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const state = url.searchParams.get("state") || "Madhya Pradesh";
    const lang = url.searchParams.get("lang") || "hi";

    // Auto-detect current slot based on Indian Standard Time (UTC + 5:30)
    const nowUtc = new Date();
    const istDate = new Date(nowUtc.getTime() + 5.5 * 60 * 60 * 1000);
    const istHour = istDate.getUTCHours();

    const paramSlot = url.searchParams.get("slot") as "10am" | "5pm" | null;
    const slot: "10am" | "5pm" = paramSlot || (istHour < 14 ? "10am" : "5pm");

    const message = await generateDailyAiNotification(slot, state, lang);

    return NextResponse.json({
      success: true,
      slot,
      state,
      language: lang,
      message,
      istHour,
      timestamp: Date.now()
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to generate daily content" },
      { status: 500 }
    );
  }
}
