import { NextRequest, NextResponse } from "next/server";
import {
  getSessionsForDate,
  getSessionsForDates,
  getKolkataDateString,
  deleteSessionsUpToDate,
  VisitorSessionRecord,
} from "@/lib/visitorIntelligence";
import {
  getMailTransporter,
  getEnquiryAdminRecipients,
} from "@/lib/enquiryMailService";
import { getDigestHistory } from "@/lib/newsletterStore";

export const dynamic = "force-dynamic";

function formatSeconds(secs: number): string {
  if (secs < 60) return `${secs}s`;
  const mins = Math.floor(secs / 60);
  const remSecs = secs % 60;
  return `${mins}m ${remSecs}s`;
}

export async function GET(req: NextRequest) {
  return handleReportGeneration(req);
}

export async function POST(req: NextRequest) {
  return handleReportGeneration(req);
}

async function handleReportGeneration(req: NextRequest) {
  const startTime = Date.now();
  const searchParams = req.nextUrl.searchParams;
  const customDate = searchParams.get("date");
  const force = searchParams.get("force") === "true";

  // Current date in IST
  const todayIst = getKolkataDateString(0);
  const yesterdayIst = getKolkataDateString(-1);
  const reportDate = customDate || todayIst;

  try {
    // 🧠 ALTERNATING DAY INTELLIGENCE:
    // If Newsletter Digest ran today (within last 12 hours), SKIP today's report
    // so admin receives the combined 2-day report on the alternate day at 6:00 PM IST!
    if (!force && !customDate) {
      const digestHistory = getDigestHistory();
      if (digestHistory.length > 0) {
        const lastDigest = digestHistory[digestHistory.length - 1];
        const lastDigestTime = new Date(lastDigest.sentAt).getTime();
        const hoursSinceDigest = (Date.now() - lastDigestTime) / (1000 * 60 * 60);

        // If newsletter digest was sent today (less than 14 hours ago, e.g. at 2:00 PM today)
        if (hoursSinceDigest < 14) {
          console.log(`[VisitorReport] Newsletter digest was sent today (${Math.round(hoursSinceDigest)}h ago). Skipping today's 6:00 PM report. Combined 2-day report will dispatch tomorrow.`);
          return NextResponse.json({
            success: true,
            status: "skipped_alternating_day",
            reason: `Newsletter digest was dispatched today. 2-day combined report will trigger tomorrow at 6:00 PM IST.`,
            newsletterDigestSentAt: lastDigest.sentAt,
            hoursSinceDigest: Math.round(hoursSinceDigest * 10) / 10,
          });
        }
      }
    }

    // 1. Fetch visitor sessions for the 2-day window (yesterday + today)
    const targetDates = customDate ? [customDate] : [yesterdayIst, todayIst];
    const sessions = await getSessionsForDates(targetDates);
    const isTwoDayReport = targetDates.length > 1;

    // 2. Aggregate Metrics
    const totalVisitors = sessions.length;

    if (totalVisitors === 0) {
      console.log(`[VisitorReport] No visitors recorded for ${targetDates.join(", ")}`);
    }

    let totalDuration = 0;
    let totalPageviews = 0;
    const statesMap: Record<string, number> = {};
    const citiesMap: Record<string, number> = {};
    const countriesMap: Record<string, number> = {};
    const pagesMap: Record<string, number> = {};
    const deviceMap: Record<string, number> = { Mobile: 0, Desktop: 0, Tablet: 0 };
    const highIntentVisitors: VisitorSessionRecord[] = [];

    sessions.forEach((s) => {
      totalDuration += s.durationSeconds || 4;
      totalPageviews += s.pageviewsCount || 1;

      // State
      const st = s.state || "Unknown State";
      statesMap[st] = (statesMap[st] || 0) + 1;

      // City
      const ct = s.city && s.city !== "Unknown City" ? s.city : "Direct Traffic";
      citiesMap[ct] = (citiesMap[ct] || 0) + 1;

      // Country
      const co = s.country || "India";
      countriesMap[co] = (countriesMap[co] || 0) + 1;

      // Device
      const dev = s.device || "Mobile";
      deviceMap[dev] = (deviceMap[dev] || 0) + 1;

      // Pages
      if (Array.isArray(s.pages)) {
        s.pages.forEach((p) => {
          pagesMap[p] = (pagesMap[p] || 0) + 1;
        });
      } else if (s.initialPath) {
        pagesMap[s.initialPath] = (pagesMap[s.initialPath] || 0) + 1;
      }

      // High-Intent filter (> 90 seconds OR visited training/checkout/calculator/spawn)
      const hasHighIntentPage = (s.pages || []).some((p) =>
        /training|spawn|calculator|checkout|book|workshop/i.test(p)
      );
      if ((s.durationSeconds || 0) >= 90 || hasHighIntentPage) {
        highIntentVisitors.push(s);
      }
    });

    const avgDurationSeconds =
      totalVisitors > 0 ? Math.round(totalDuration / totalVisitors) : 0;

    // Sort Top Lists
    const sortedStates = Object.entries(statesMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    const sortedCities = Object.entries(citiesMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    const sortedPages = Object.entries(pagesMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    const mobilePercent =
      totalVisitors > 0 ? Math.round((deviceMap.Mobile / totalVisitors) * 100) : 0;
    const desktopPercent =
      totalVisitors > 0 ? Math.round((deviceMap.Desktop / totalVisitors) * 100) : 0;

    const dateHeading = isTwoDayReport
      ? `📅 2-Day Consolidated Report (${targetDates.join(" & ")})`
      : `Report Date: <strong>${reportDate}</strong> &bull; Generated at 6:00 PM IST`;

    const reportTitle = isTwoDayReport
      ? `📊 2-Day Visitor Intelligence Report`
      : `📊 Daily Visitor Intelligence Report`;

    // 3. Render HTML Email Template
    const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${reportTitle}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f17; color: #f1f5f9; margin: 0; padding: 24px 12px;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background-color: #131b2e; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5);">
    
    <!-- Header Banner -->
    <tr>
      <td style="padding: 28px 24px; background: linear-gradient(135deg, #064e3b 0%, #022c22 100%); border-bottom: 2px solid #10b981;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #a7f3d0; font-weight: 700;">Organic Mushrooms Farm</span>
              <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 6px 0 4px 0; line-height: 1.3;">
                ${reportTitle}
              </h1>
              <p style="color: #6ee7b7; font-size: 13px; margin: 0;">
                ${dateHeading}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Quick Stats Grid -->
    <tr>
      <td style="padding: 24px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="48%" style="background-color: #1e293b; padding: 16px; border-radius: 12px; border: 1px solid #334155; vertical-align: top;">
              <span style="font-size: 11px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">👥 Total Visitors</span>
              <div style="font-size: 28px; font-weight: 800; color: #34d399; margin-top: 4px;">
                ${totalVisitors}
              </div>
              <span style="font-size: 11px; color: #64748b;">Filtered (>3.5s genuine users)</span>
            </td>
            <td width="4%"></td>
            <td width="48%" style="background-color: #1e293b; padding: 16px; border-radius: 12px; border: 1px solid #334155; vertical-align: top;">
              <span style="font-size: 11px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">⏱️ Avg Time on Site</span>
              <div style="font-size: 28px; font-weight: 800; color: #38bdf8; margin-top: 4px;">
                ${formatSeconds(avgDurationSeconds)}
              </div>
              <span style="font-size: 11px; color: #64748b;">${totalPageviews} total pageviews</span>
            </td>
          </tr>
          <tr><td height="12"></td></tr>
          <tr>
            <td width="48%" style="background-color: #1e293b; padding: 16px; border-radius: 12px; border: 1px solid #334155; vertical-align: top;">
              <span style="font-size: 11px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">📱 Devices</span>
              <div style="font-size: 18px; font-weight: 700; color: #f1f5f9; margin-top: 6px;">
                Mobile: ${mobilePercent}% | PC: ${desktopPercent}%
              </div>
              <span style="font-size: 11px; color: #64748b;">${deviceMap.Mobile} Mobile, ${deviceMap.Desktop} Desktop</span>
            </td>
            <td width="4%"></td>
            <td width="48%" style="background-color: #1e293b; padding: 16px; border-radius: 12px; border: 1px solid #334155; vertical-align: top;">
              <span style="font-size: 11px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">🔥 High Intent Leads</span>
              <div style="font-size: 28px; font-weight: 800; color: #fbbf24; margin-top: 4px;">
                ${highIntentVisitors.length}
              </div>
              <span style="font-size: 11px; color: #64748b;">Viewed Training / Spawn / Cost</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Section: Geographical Breakdown -->
    <tr>
      <td style="padding: 0 24px 24px 24px;">
        <div style="background-color: #0f172a; padding: 18px; border-radius: 12px; border: 1px solid #1e293b;">
          <h3 style="margin: 0 0 14px 0; font-size: 15px; color: #10b981; font-weight: 700; display: flex; align-items: center;">
            📍 Top States & Regions (Where visitors came from)
          </h3>
          ${
            sortedStates.length > 0
              ? `
            <table width="100%" border="0" cellspacing="0" cellpadding="6">
              ${sortedStates
                .map(([st, cnt]) => {
                  const pct = totalVisitors > 0 ? Math.round((cnt / totalVisitors) * 100) : 0;
                  return `
                <tr>
                  <td style="font-size: 13px; color: #e2e8f0; font-weight: 600; width: 45%;">${st}</td>
                  <td style="width: 40%;">
                    <div style="background-color: #334155; height: 7px; border-radius: 4px; overflow: hidden;">
                      <div style="background: linear-gradient(90deg, #10b981, #059669); height: 7px; width: ${pct}%;"></div>
                    </div>
                  </td>
                  <td style="font-size: 12px; color: #34d399; font-weight: 700; text-align: right; width: 15%;">${cnt} (${pct}%)</td>
                </tr>
              `;
                })
                .join("")}
            </table>
          `
              : `<p style="font-size: 13px; color: #94a3b8; margin: 0;">No state records available for this window.</p>`
          }
        </div>
      </td>
    </tr>

    <!-- Section: Top Cities -->
    <tr>
      <td style="padding: 0 24px 24px 24px;">
        <div style="background-color: #0f172a; padding: 18px; border-radius: 12px; border: 1px solid #1e293b;">
          <h3 style="margin: 0 0 12px 0; font-size: 15px; color: #38bdf8; font-weight: 700;">
            🏙️ Top Cities Detected
          </h3>
          <div style="font-size: 13px; line-height: 1.8; color: #cbd5e1;">
            ${
              sortedCities.length > 0
                ? sortedCities
                    .map(([ct, cnt]) => `<span style="display: inline-block; background-color: #1e293b; border: 1px solid #334155; padding: 4px 10px; border-radius: 8px; margin: 0 4px 6px 0; font-weight: 500;"><strong>${ct}</strong> <span style="color: #38bdf8;">(${cnt})</span></span>`)
                    .join(" ")
                : `No specific cities detected.`
            }
          </div>
        </div>
      </td>
    </tr>

    <!-- Section: Top Pages Visited -->
    <tr>
      <td style="padding: 0 24px 24px 24px;">
        <div style="background-color: #0f172a; padding: 18px; border-radius: 12px; border: 1px solid #1e293b;">
          <h3 style="margin: 0 0 14px 0; font-size: 15px; color: #fbbf24; font-weight: 700;">
            📄 Most Visited Pages & Content
          </h3>
          <table width="100%" border="0" cellspacing="0" cellpadding="6">
            ${
              sortedPages.length > 0
                ? sortedPages
                    .map(([pg, count]) => `
                  <tr style="border-bottom: 1px solid #1e293b;">
                    <td style="font-size: 12px; color: #cbd5e1; font-family: monospace; word-break: break-all;">${pg}</td>
                    <td style="font-size: 12px; color: #fbbf24; font-weight: 700; text-align: right; width: 60px;">${count} hits</td>
                  </tr>
                `)
                    .join("")
                : `<tr><td style="font-size: 13px; color: #94a3b8;">No page hits logged today.</td></tr>`
            }
          </table>
        </div>
      </td>
    </tr>

    <!-- Section: High Intent Visitors Highlight -->
    ${
      highIntentVisitors.length > 0
        ? `
    <tr>
      <td style="padding: 0 24px 24px 24px;">
        <div style="background-color: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.3); padding: 18px; border-radius: 12px;">
          <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #f59e0b; font-weight: 700;">
            🌟 High-Intent Potential Students & Buyers (${highIntentVisitors.length})
          </h3>
          <ul style="margin: 0; padding-left: 20px; font-size: 12px; color: #fde68a; line-height: 1.6;">
            ${highIntentVisitors
              .slice(0, 5)
              .map(
                (v) =>
                  `<li><strong>${v.city}, ${v.state}</strong> &bull; ${formatSeconds(v.durationSeconds)} on site &bull; Explored: ${(v.pages || []).slice(0, 3).join(", ")}</li>`
              )
              .join("")}
          </ul>
        </div>
      </td>
    </tr>
    `
        : ""
    }

    <!-- Footer Note -->
    <tr>
      <td style="padding: 20px 24px; background-color: #0d1322; border-top: 1px solid #1e293b; text-align: center; font-size: 11px; color: #64748b;">
        <p style="margin: 0 0 4px 0;">Organic Mushrooms Farm Automated Analytics Engine &bull; Vercel Serverless + Firebase</p>
        <p style="margin: 0; color: #475569;">Storage Auto-Clean scheduled daily at 6:30 PM IST (30 mins after this report) to keep quota at 0 MB.</p>
      </td>
    </tr>

  </table>
</body>
</html>
    `;

    // 4. Send Email via Nodemailer
    const transporter = getMailTransporter();
    const recipients = getEnquiryAdminRecipients();
    const sender = process.env.SMTP_FROM || `"Organic Mushrooms Farm Analytics" <organicmushroomsfarms@gmail.com>`;

    const subject = isTwoDayReport
      ? `📊 2-Day Visitor Intelligence Report — ${targetDates.join(" & ")} (${totalVisitors} Visitors, ${highIntentVisitors.length} High-Intent)`
      : `📊 Daily Visitor Intelligence Report — ${reportDate} (${totalVisitors} Visitors, ${highIntentVisitors.length} High-Intent)`;

    const mailResult = await transporter.sendMail({
      from: sender,
      to: recipients,
      subject,
      html: htmlEmail,
      text: `Visitor Intelligence Report (${targetDates.join(" & ")})\nTotal Visitors: ${totalVisitors}\nAvg Duration: ${formatSeconds(avgDurationSeconds)}\nMobile: ${mobilePercent}%\nTop States: ${sortedStates.map(([s, c]) => `${s}: ${c}`).join(", ")}`,
    });

    console.log(`[VisitorReport] Successfully sent report for ${targetDates.join(" & ")} to ${recipients.join(", ")}. MessageId: ${mailResult.messageId}`);

    // 5. Clean up old records right after report delivery up to today's date
    let deletedRecords = 0;
    try {
      console.log(`[VisitorReport] Chaining automatic storage cleanup for date up to: ${todayIst}...`);
      deletedRecords = await deleteSessionsUpToDate(todayIst);
      console.log(`[VisitorReport] Successfully cleaned up ${deletedRecords} visitor records immediately after email delivery.`);
    } catch (cleanupErr) {
      console.error("[VisitorReport] Post-report cleanup error (non-fatal):", cleanupErr);
    }

    return NextResponse.json({
      success: true,
      reportDate: targetDates.join(" & "),
      isTwoDayReport,
      totalVisitors,
      highIntentCount: highIntentVisitors.length,
      avgDurationSeconds,
      recipients,
      cleanup: {
        executed: true,
        deletedRecords,
        status: "Storage reset to 0 MB",
      },
      executionMs: Date.now() - startTime,
    });
  } catch (err: any) {
    console.error("[VisitorReport] Failed to generate/send report:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
