import { NextResponse } from "next/server";

export async function GET() {
  const adsContent = "google.com, pub-8976157136173429, DIRECT, f08c47fec0942fa0\n";
  return new NextResponse(adsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
