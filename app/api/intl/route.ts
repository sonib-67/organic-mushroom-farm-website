import { NextRequest, NextResponse } from "next/server";
import { createIntlOrder, captureIntlOrder, failIntlOrder } from "./intlService";

export async function POST(req: NextRequest) {
  try {
    const action = req.nextUrl.searchParams.get("action");
    if (action === "create") {
      return await createIntlOrder(req);
    } else if (action === "capture") {
      return await captureIntlOrder(req);
    } else if (action === "fail") {
      return await failIntlOrder(req);
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("API /api/intl error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
