import { NextResponse } from "next/server";
import { checkAndSendPendingRemindersAndCleanup } from "@/lib/pendingRegistrationManager";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const stats = await checkAndSendPendingRemindersAndCleanup();
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      stats,
    });
  } catch (error: any) {
    console.error("[Cron Registration Reminder Error]:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed execution" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  return GET(req);
}
