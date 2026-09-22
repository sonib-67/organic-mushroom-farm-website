import { NextResponse } from "next/server";
import { getOrGenerateVapidKeys } from "@/lib/webPushServer";

export async function GET() {
  try {
    const keys = getOrGenerateVapidKeys();
    return NextResponse.json({
      success: true,
      publicKey: keys.publicKey
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to load VAPID public key" },
      { status: 500 }
    );
  }
}
