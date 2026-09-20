import { NextRequest, NextResponse } from "next/server";
import { getDeviceRegistrationStatus } from "@/lib/deviceSecurityStore";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const deviceId = searchParams.get("deviceId") || "";

    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "";

    const status = getDeviceRegistrationStatus(deviceId, ip);

    return NextResponse.json({
      success: true,
      ...status,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const deviceId = body?.deviceId || "";

    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "";

    const status = getDeviceRegistrationStatus(deviceId, ip);

    return NextResponse.json({
      success: true,
      ...status,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
