import { NextRequest, NextResponse } from "next/server";
import {
  deleteSessionsUpToDate,
  getKolkataDateString,
} from "@/lib/visitorIntelligence";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  return handleCleanup(req);
}

export async function POST(req: NextRequest) {
  return handleCleanup(req);
}

async function handleCleanup(req: NextRequest) {
  const startTime = Date.now();
  const searchParams = req.nextUrl.searchParams;
  const customDate = searchParams.get("date");
  const targetDate = customDate || getKolkataDateString();

  try {
    console.log(`[CleanupTraffic] Starting daily storage reset up to date: ${targetDate}`);

    const deletedCount = await deleteSessionsUpToDate(targetDate);

    console.log(`[CleanupTraffic] Successfully deleted ${deletedCount} records. Database storage reset back to 0 MB.`);

    return NextResponse.json({
      success: true,
      cleanedUpToDate: targetDate,
      deletedRecords: deletedCount,
      storageStatus: "Reset to 0 MB (Free tier preserved)",
      executionMs: Date.now() - startTime,
    });
  } catch (err: any) {
    console.error("[CleanupTraffic] Cleanup error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Failed to reset storage" },
      { status: 500 }
    );
  }
}
