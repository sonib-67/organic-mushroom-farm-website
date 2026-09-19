import { NextResponse } from "next/server";

export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://organicmushroomsfarm.com/sitemap-main.xml
`;
  return new NextResponse(robots, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
