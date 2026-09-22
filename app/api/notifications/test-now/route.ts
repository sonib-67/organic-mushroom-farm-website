import { NextResponse } from "next/server";
import { executeDailyNotificationDispatch } from "@/lib/serverScheduler";
import { generateDailyAiNotification } from "@/lib/aiNotificationGenerator";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const slot = (url.searchParams.get("slot") as "10am" | "5pm") || "10am";
    const state = url.searchParams.get("state") || "Madhya Pradesh";
    const bypassCooldown = url.searchParams.get("bypassCooldown") === "true";

    const previewMessage = await generateDailyAiNotification(slot, state, "hi");
    const dispatchReport = await executeDailyNotificationDispatch(slot, bypassCooldown);

    return NextResponse.json({
      success: true,
      message: `Instant test dispatched for ${slot} slot!`,
      slot,
      antiFatigueEngineActive: !bypassCooldown,
      previewMessage,
      dispatchReport
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to trigger instant test" },
      { status: 500 }
    );
  }
}
