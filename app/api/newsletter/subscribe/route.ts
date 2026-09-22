import { NextResponse } from "next/server";
import { syncNewsletterEmailToGoogleSheet } from "@/lib/googleSheetSync";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, state, source } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "कृपया मान्य ईमेल दर्ज करें (Please enter a valid email address)." },
        { status: 400 }
      );
    }

    const result = await syncNewsletterEmailToGoogleSheet({
      email: email.trim(),
      name: name?.trim(),
      state: state || "India",
      source: source || "OMF Website Newsletter"
    });

    return NextResponse.json({
      success: true,
      message: "बधाई! आप Organic Mushrooms Farm ईमेल डाइजेस्ट से सफलतापूर्वक जुड़ गए हैं।",
      syncedToGoogleSheet: result.success
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process subscription" },
      { status: 500 }
    );
  }
}
