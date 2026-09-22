import { NextResponse } from "next/server";
import { savePushSubscriber, getSubscriberCount } from "@/lib/notificationStore";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const forwarded = req.headers.get("x-forwarded-for");
    const ipAddress = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "";

    const record = savePushSubscriber({
      id: body.id,
      endpoint: body.endpoint,
      keys: body.keys,
      state: body.state,
      country: body.country,
      language: body.language,
      ipAddress,
      deviceFingerprint: body.deviceFingerprint,
      userAgent: body.userAgent || req.headers.get("user-agent") || ""
    });

    return NextResponse.json({
      success: true,
      message: "Push subscription registered successfully",
      subscriberId: record.id,
      state: record.state
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to register subscription" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const stats = getSubscriberCount();
    return NextResponse.json({
      success: true,
      stats
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to retrieve stats" },
      { status: 500 }
    );
  }
}
