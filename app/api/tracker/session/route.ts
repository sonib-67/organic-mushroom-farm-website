import { NextRequest, NextResponse } from "next/server";
import {
  saveVisitorSession,
  hashIp,
  INDIAN_STATES_MAP,
} from "@/lib/visitorIntelligence";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const rawIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const ipHash = hashIp(rawIp);

    // Vercel Geolocation Headers
    const rawCity = req.headers.get("x-vercel-ip-city") || "";
    const rawRegion = req.headers.get("x-vercel-ip-country-region") || "";
    const rawCountry = req.headers.get("x-vercel-ip-country") || "";

    // Safely decode URI encoded city names (e.g., "New%20Delhi" -> "New Delhi")
    let city = "Unknown City";
    if (rawCity) {
      try {
        city = decodeURIComponent(rawCity);
      } catch {
        city = rawCity;
      }
    }

    const stateCode = (rawRegion || "").toUpperCase();
    const countryCode = (rawCountry || "IN").toUpperCase();

    let state = INDIAN_STATES_MAP[stateCode] || stateCode || "Unknown State";
    let country = countryCode === "IN" ? "India" : countryCode;

    // Body parsing
    const body = await req.json().catch(() => ({}));
    const { action, sessionId, path, referrer, device, screen, durationSeconds } = body;

    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json({ ok: false, error: "Missing sessionId" }, { status: 400 });
    }

    // Save session
    await saveVisitorSession({
      action: action === "enter" || action === "pageview" || action === "leave" ? action : "pageview",
      sessionId,
      ipHash,
      city,
      state,
      stateCode,
      country,
      countryCode,
      device: device === "Tablet" || device === "Desktop" ? device : "Mobile",
      initialPath: path || "/",
      lastPath: path || "/",
      referrer: referrer || "Direct / Organic",
      durationSeconds: Number(durationSeconds) || 4,
      screen: screen || "unknown",
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.warn("[VisitorTracker API] Non-fatal tracking error:", err?.message);
    return NextResponse.json({ ok: false }, { status: 200 }); // Always 200 so browser never warns
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    service: "Organic Mushrooms Farm - Smart Visitor Intelligence",
  });
}
