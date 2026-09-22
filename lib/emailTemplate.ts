import { DigestContent } from "./geminiDigestGenerator";

export function renderRedditStyleDigestHtml(
  content: DigestContent,
  recipientEmail: string,
  baseUrl: string = "https://organicmushroomsfarm.com"
): string {
  const unsubUrl = `${baseUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(recipientEmail)}`;
  const blogUrl = `${baseUrl}/blog`;
  const mandiUrl = `${baseUrl}/mushroom-price-today`;
  const trainingUrl = `${baseUrl}/training`;

  return `
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.subject}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0e1113;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #d7dadc;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #0e1113;
      padding: 24px 0;
    }
    .main-table {
      max-width: 600px;
      margin: 0 auto;
      background-color: #1a1a1b;
      border-radius: 12px;
      border: 1px solid #343536;
      overflow: hidden;
    }
    .header {
      background-color: #152219;
      border-bottom: 2px solid #2e7d32;
      padding: 18px 24px;
    }
    .header-tag {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #81c784;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .header-title {
      font-size: 18px;
      font-weight: 800;
      color: #ffffff;
      margin: 0;
    }
    .card {
      padding: 24px;
      border-bottom: 1px solid #272729;
    }
    .badge {
      display: inline-block;
      background-color: #272729;
      color: #ff585b;
      border: 1px solid #343536;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 10px;
      margin-bottom: 12px;
    }
    .badge-green {
      color: #4caf50;
      border-color: #2e7d32;
      background-color: #132415;
    }
    .badge-blue {
      color: #64b5f6;
      border-color: #1565c0;
      background-color: #101c2b;
    }
    .headline {
      font-size: 20px;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.35;
      margin: 0 0 10px 0;
    }
    .subheadline {
      font-size: 14px;
      color: #a8aaab;
      line-height: 1.5;
      margin: 0 0 16px 0;
    }
    .bullet-box {
      background-color: #121213;
      border-left: 3px solid #4caf50;
      border-radius: 4px;
      padding: 14px 16px;
      margin-bottom: 18px;
    }
    .bullet-item {
      font-size: 14px;
      line-height: 1.6;
      color: #d7dadc;
      margin-bottom: 8px;
    }
    .bullet-item:last-child {
      margin-bottom: 0;
    }
    .action-box {
      background-color: #1f271f;
      border: 1px dashed #4caf50;
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 20px;
    }
    .action-title {
      font-size: 13px;
      font-weight: 700;
      color: #81c784;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .action-text {
      font-size: 14px;
      color: #ffffff;
      line-height: 1.5;
      margin: 0;
    }
    .btn-reddit {
      display: inline-block;
      background-color: #2e7d32;
      color: #ffffff !important;
      text-decoration: none;
      font-weight: 700;
      font-size: 14px;
      padding: 11px 20px;
      border-radius: 9999px;
      text-align: center;
    }
    .mandi-box {
      background-color: #121815;
      border: 1px solid #1e3a24;
      border-radius: 8px;
      padding: 16px;
      margin-top: 8px;
    }
    .rate-highlight {
      font-size: 22px;
      font-weight: 800;
      color: #69f0ae;
      margin: 4px 0 8px 0;
    }
    .protip-box {
      background: linear-gradient(135deg, #1b261e 0%, #151b17 100%);
      border: 1px solid #ffd54f;
      border-radius: 8px;
      padding: 16px;
      margin: 20px 24px;
    }
    .footer {
      background-color: #121213;
      padding: 24px;
      text-align: center;
      font-size: 12px;
      color: #818384;
      line-height: 1.6;
    }
    .footer a {
      color: #81c784;
      text-decoration: underline;
    }
    @media only screen and (max-width: 620px) {
      .main-table { width: 100% !important; border-radius: 0 !important; }
      .card { padding: 18px !important; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <table class="main-table" cellpadding="0" cellspacing="0" width="100%">
      
      <!-- Reddit-style Subreddit Header -->
      <tr>
        <td class="header">
          <div class="header-tag">🍄 r/OrganicMushroomsFarm • 2-Day Digest</div>
          <h1 class="header-title">Organic Mushrooms Farm • किसान समाचार</h1>
          <div style="font-size: 12px; color: #a5d6a7; margin-top: 4px;">ताज़ा अपडेट • ${content.generatedDate}</div>
        </td>
      </tr>

      <!-- Main Feature Post (Reddit Post Card Style) -->
      <tr>
        <td class="card">
          <div class="badge">${content.categoryTag}</div>
          <h2 class="headline">${content.topicTitle}</h2>
          <p class="subheadline">${content.tagline}</p>

          <div class="bullet-box">
            ${content.keyTakeaways
              .map((pt) => `<div class="bullet-item">• ${pt}</div>`)
              .join("")}
          </div>

          <div class="action-box">
            <div class="action-title">🎯 आज ही अपने फार्म में यह करें:</div>
            <p class="action-text">${content.practicalAction}</p>
          </div>

          <a href="${blogUrl}" class="btn-reddit" target="_blank">
            वेबसाइट पर पूरा आर्टिकल पढ़ें ➔
          </a>
        </td>
      </tr>

      <!-- Mandi Bhav Card -->
      <tr>
        <td class="card">
          <div class="badge badge-green">💰 मंडी भाव व बाज़ार अपडेट</div>
          <h3 style="font-size: 17px; color: #ffffff; margin: 0 0 6px 0;">${content.mandiUpdate.mandiName}</h3>
          
          <div class="mandi-box">
            <div style="font-size: 12px; color: #a8aaab; text-transform: uppercase;">आज का थोक रेट</div>
            <div class="rate-highlight">${content.mandiUpdate.ratePerKg}</div>
            <div style="font-size: 12px; color: #81c784; margin-bottom: 6px;">
              बाज़ार रुझान: <strong>${content.mandiUpdate.trend}</strong>
            </div>
            <p style="font-size: 13px; color: #d7dadc; margin: 0; line-height: 1.5;">
              💡 <em>सलाह:</em> ${content.mandiUpdate.marketAdvice}
            </p>
          </div>

          <div style="margin-top: 14px;">
            <a href="${mandiUrl}" style="color: #69f0ae; font-size: 13px; font-weight: 700; text-decoration: none;" target="_blank">
              📊 भारत की सभी मंडियों के ताज़ा रेट्स देखें ➔
            </a>
          </div>
        </td>
      </tr>

      <!-- Training & Workshop Alert -->
      <tr>
        <td class="card">
          <div class="badge badge-blue">🎓 ट्रेनिंग व वर्कशॉप अपडेट</div>
          <h3 style="font-size: 17px; color: #ffffff; margin: 0 0 6px 0;">${content.trainingAlert.batchTitle}</h3>
          <p style="font-size: 13px; color: #a8aaab; margin: 0 0 10px 0;">
            📅 ${content.trainingAlert.date} | 📍 ${content.trainingAlert.mode}
          </p>
          <p style="font-size: 14px; color: #d7dadc; line-height: 1.5; margin: 0 0 16px 0;">
            ${content.trainingAlert.highlight}
          </p>
          <a href="${trainingUrl}" class="btn-reddit" style="background-color: #1976d2;" target="_blank">
            ${content.trainingAlert.ctaText}
          </a>
        </td>
      </tr>

      <!-- Pro-Tip Box -->
      <tr>
        <td>
          <div class="protip-box">
            <div style="font-size: 13px; font-weight: 800; color: #ffd54f; margin-bottom: 6px;">
              ⚡ अनुभवी किसान प्रो-टिप (Pro-Tip)
            </div>
            <div style="font-size: 14px; color: #ffffff; line-height: 1.5;">
              "${content.bonusProTip}"
            </div>
          </div>
        </td>
      </tr>

      <!-- Reddit-style Compact Footer -->
      <tr>
        <td class="footer">
          <p style="margin: 0 0 10px 0; color: #d7dadc; font-weight: 600;">
            Organic Mushrooms Farm • भारत का सबसे भरोसेमंद मशरूम एग्री-टेक मंच
          </p>
          <p style="margin: 0 0 12px 0;">
            आप यह ईमेल इसलिए प्राप्त कर रहे हैं क्योंकि आपने <a href="${baseUrl}" target="_blank">Organic Mushrooms Farm</a> पर 2-डे फार्मिंग डाइजेस्ट के लिए सब्सक्राइब किया था।
          </p>
          <p style="margin: 0 0 8px 0;">
            <a href="${blogUrl}" target="_blank">आर्टिकल्स पढ़ें</a> • 
            <a href="${mandiUrl}" target="_blank">मंडी भाव</a> • 
            <a href="${trainingUrl}" target="_blank">ट्रेनिंग शेड्यूल</a> • 
            <a href="${unsubUrl}" style="color: #ef5350;">अनसब्सक्राइब करें (Unsubscribe)</a>
          </p>
          <p style="margin: 12px 0 0 0; font-size: 11px; color: #5a5c5d;">
            © 2026 Organic Mushrooms Farm. Gram Post, Madhya Pradesh, India. All rights reserved.
          </p>
        </td>
      </tr>

    </table>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Beautiful welcome confirmation email sent to the new subscriber
 */
export function renderWelcomeEmailHtml(
  recipientEmail: string,
  baseUrl: string = "https://organicmushroomsfarm.com"
): string {
  const unsubUrl = `${baseUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(recipientEmail)}`;
  const blogUrl = `${baseUrl}/blog`;
  const mandiUrl = `${baseUrl}/mushroom-price-today`;
  const trainingUrl = `${baseUrl}/training`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Organic Mushrooms Farm</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0e1113;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #d7dadc;
    }
    .wrapper {
      width: 100%;
      background-color: #0e1113;
      padding: 24px 0;
    }
    .main-table {
      max-width: 600px;
      margin: 0 auto;
      background-color: #1a1a1b;
      border-radius: 12px;
      border: 1px solid #343536;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #152219 0%, #0d1a10 100%);
      border-bottom: 2px solid #2e7d32;
      padding: 28px 24px;
      text-align: center;
    }
    .card {
      padding: 28px 24px;
    }
    .badge {
      display: inline-block;
      background-color: #132415;
      color: #4caf50;
      border: 1px solid #2e7d32;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 700;
      padding: 5px 12px;
      margin-bottom: 14px;
    }
    .headline {
      font-size: 22px;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.35;
      margin: 0 0 12px 0;
    }
    .feature-item {
      background-color: #121213;
      border-left: 3px solid #4caf50;
      border-radius: 6px;
      padding: 12px 16px;
      margin-bottom: 12px;
    }
    .feature-title {
      font-size: 14px;
      font-weight: 700;
      color: #81c784;
      margin-bottom: 4px;
    }
    .feature-desc {
      font-size: 13px;
      color: #a8aaab;
      line-height: 1.5;
      margin: 0;
    }
    .btn {
      display: inline-block;
      background-color: #2e7d32;
      color: #ffffff !important;
      text-decoration: none;
      font-weight: 700;
      font-size: 14px;
      padding: 12px 24px;
      border-radius: 9999px;
      margin: 6px 4px 6px 0;
      text-align: center;
    }
    .btn-secondary {
      background-color: #272729;
      border: 1px solid #343536;
      color: #81c784 !important;
    }
    .footer {
      background-color: #121213;
      padding: 24px;
      text-align: center;
      font-size: 12px;
      color: #818384;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <table class="main-table" cellpadding="0" cellspacing="0" width="100%">
      
      <!-- Welcome Header -->
      <tr>
        <td class="header">
          <div style="font-size: 36px; margin-bottom: 8px;">🍄</div>
          <h1 style="font-size: 24px; font-weight: 800; color: #ffffff; margin: 0 0 6px 0;">
            Welcome to Organic Mushrooms Farm
          </h1>
          <div style="font-size: 13px; color: #a5d6a7;">
            India's Leading Mushroom Cultivation & Training Authority
          </div>
        </td>
      </tr>

      <!-- Body Content -->
      <tr>
        <td class="card">
          <div class="badge">✅ Subscription Active</div>
          <h2 class="headline">You're All Set to Master Mushroom Cultivation!</h2>
          <p style="font-size: 14px; color: #d7dadc; line-height: 1.6; margin: 0 0 20px 0;">
            Thank you for subscribing! Every 48 hours (at 2:00 PM IST), you will receive our exclusive <strong>2-Day Farmers' Digest</strong> directly in your inbox. No fluff, no duplicates—only 100% practical, high-yield insights.
          </p>

          <h3 style="font-size: 15px; color: #ffffff; font-weight: 700; margin: 0 0 12px 0;">
            What you will receive every 2 days:
          </h3>

          <div class="feature-item">
            <div class="feature-title">💡 Climate & Humidity Hacks (देसी जुगाड़)</div>
            <p class="feature-desc">Low-cost cooling, moisture preservation, and ventilation tips for Button, Oyster & Milky mushrooms.</p>
          </div>

          <div class="feature-item">
            <div class="feature-title">🛡️ Disease & Mold Prevention (रोग नियंत्रण)</div>
            <p class="feature-desc">Proven remedies against Green Mold (Trichoderma), yellow mold, and pests using organic and biological methods.</p>
          </div>

          <div class="feature-item">
            <div class="feature-title">💰 Live Mandi Rates & B2B Sales (थोक भाव व बिक्री)</div>
            <p class="feature-desc">Fresh wholesale price trends across Azadpur, Bhopal, Indore, Lucknow mandis & direct hotel supply secrets.</p>
          </div>

          <div class="feature-item">
            <div class="feature-title">🎓 Hands-On Training & Subsidy Alerts (ट्रेनिंग व सब्सिडी)</div>
            <p class="feature-desc">Upcoming practical on-farm training batches, National Horticulture Board (NHB) subsidies, and bank project DPRs.</p>
          </div>

          <!-- Action Buttons -->
          <div style="margin-top: 24px;">
            <a href="${blogUrl}" class="btn" target="_blank">
              Read Latest Farming Guides ➔
            </a>
            <a href="${mandiUrl}" class="btn btn-secondary" target="_blank">
              Check Today's Mandi Rates
            </a>
          </div>

          <!-- Farm Helpline Box -->
          <div style="margin-top: 24px; padding: 16px; background-color: #162019; border: 1px solid #1e3a24; border-radius: 8px;">
            <div style="font-size: 13px; font-weight: 700; color: #81c784; margin-bottom: 4px;">
              📞 Direct Farm WhatsApp & Helpline
            </div>
            <div style="font-size: 13px; color: #ffffff;">
              Need commercial spawn, farm setup, or training consultation? Call or WhatsApp us at <strong>+91 93014 47348</strong>.
            </div>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td class="footer">
          <p style="margin: 0 0 8px 0; color: #d7dadc; font-weight: 600;">
            Organic Mushrooms Farm • Jabalpur & Damoh, Madhya Pradesh, India
          </p>
          <p style="margin: 0 0 10px 0;">
            You received this email because you subscribed on <a href="${baseUrl}" style="color: #81c784;" target="_blank">organicmushroomsfarm.com</a>.
          </p>
          <p style="margin: 0;">
            <a href="${unsubUrl}" style="color: #ef5350; text-decoration: underline;">Unsubscribe from digest</a>
          </p>
        </td>
      </tr>

    </table>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Instant notification email sent to the Admin (organicmushroomsfarms@gmail.com)
 * when someone subscribes, with attached latest subscriber CSV list.
 */
export function renderAdminSubscriberAlertHtml(
  data: {
    email: string;
    subscribedAt: string;
    state?: string;
    source?: string;
    totalSubscribers: number;
  },
  baseUrl: string = "https://organicmushroomsfarm.com"
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Subscriber Alert</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f8; color: #333333; margin: 0; padding: 20px; }
    .card { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 10px; border: 1px solid #e1e4e8; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background-color: #2e7d32; color: #ffffff; padding: 20px 24px; }
    .body { padding: 24px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 20px; }
    .table td { padding: 10px 12px; border-bottom: 1px solid #edf2f7; font-size: 14px; }
    .table td:first-child { font-weight: 700; color: #4a5568; width: 38%; }
    .badge { display: inline-block; background-color: #e8f5e9; color: #2e7d32; font-weight: 700; padding: 4px 10px; border-radius: 20px; font-size: 12px; }
    .footer { background-color: #fafbfc; border-top: 1px solid #e1e4e8; padding: 16px 24px; font-size: 12px; color: #718096; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2 style="margin: 0; font-size: 20px;">🎉 New Subscriber Alert!</h2>
      <div style="font-size: 13px; opacity: 0.9; margin-top: 4px;">Organic Mushrooms Farm • 2-Day Digest</div>
    </div>
    <div class="body">
      <p style="font-size: 14px; line-height: 1.5; margin: 0 0 16px 0;">
        A new user has just subscribed to the 2-Day Farming Digest on your website:
      </p>

      <table class="table">
        <tr>
          <td>Subscriber Email:</td>
          <td><strong style="color: #2e7d32; font-size: 15px;">${data.email}</strong></td>
        </tr>
        <tr>
          <td>Subscribed At (IST):</td>
          <td>${data.subscribedAt}</td>
        </tr>
        <tr>
          <td>State / Region:</td>
          <td>${data.state || "All India"}</td>
        </tr>
        <tr>
          <td>Source:</td>
          <td><span class="badge">${data.source || "Website Footer"}</span></td>
        </tr>
        <tr>
          <td>Total Active Subscribers:</td>
          <td><strong>${data.totalSubscribers}</strong></td>
        </tr>
      </table>

      <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 16px; font-size: 13px; color: #166534; line-height: 1.5;">
        📎 <strong>Attached File:</strong> The updated <code>subscribers_backup.csv</code> file containing all active subscribers has been attached to this email for your offline backup and records.
      </div>
    </div>
    <div class="footer">
      Automated alert generated by Organic Mushrooms Farm Platform • <a href="${baseUrl}" style="color: #2e7d32;">organicmushroomsfarm.com</a>
    </div>
  </div>
</body>
</html>
  `.trim();
}

