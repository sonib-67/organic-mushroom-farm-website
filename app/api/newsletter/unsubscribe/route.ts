import { NextResponse } from "next/server";
import { unsubscribeEmail } from "@/lib/newsletterStore";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  if (!email || !email.includes("@")) {
    return new Response(
      `<html><body style="font-family: sans-serif; text-align: center; padding: 40px;"><h2>अमान्य ईमेल (Invalid Email)</h2><p>कृपया सही अनसब्सक्राइब लिंक का उपयोग करें।</p></body></html>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" }, status: 400 }
    );
  }

  await unsubscribeEmail(email);

  const html = `
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>अनसब्सक्राइब सफल • Organic Mushrooms Farm</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #0e1113;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
    }
    .box {
      max-width: 480px;
      background-color: #1a1a1b;
      border: 1px solid #343536;
      border-radius: 12px;
      padding: 32px;
      text-align: center;
    }
    .icon { font-size: 48px; margin-bottom: 16px; }
    h1 { font-size: 22px; margin-bottom: 12px; color: #81c784; }
    p { font-size: 15px; color: #d7dadc; line-height: 1.6; margin-bottom: 24px; }
    .btn {
      display: inline-block;
      background-color: #2e7d32;
      color: #ffffff;
      text-decoration: none;
      font-weight: 700;
      padding: 10px 24px;
      border-radius: 9999px;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="icon">✅</div>
    <h1>अनसब्सक्राइब सफल (Unsubscribed)</h1>
    <p>
      आपका ईमेल (<strong>${email}</strong>) Organic Mushrooms Farm के 2-डे ईमेल डाइजेस्ट से सफलतापूर्वक हटा दिया गया है। अब आपको कोई ईमेल नहीं भेजा जाएगा।
    </p>
    <a href="https://organicmushroomsfarm.com" class="btn">होमपेज पर वापस जाएं ➔</a>
  </div>
</body>
</html>
  `.trim();

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}
