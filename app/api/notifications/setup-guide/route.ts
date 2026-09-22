import { NextResponse } from "next/server";
import { GOOGLE_APPS_SCRIPT_TEMPLATE } from "@/lib/googleSheetSync";
import { getSubscriberCount } from "@/lib/notificationStore";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const host = req.headers.get("host") || "organicmushroomsfarm.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const isGoogleSheetConfigured = Boolean(process.env.GOOGLE_SHEET_WEBHOOK_URL);
  const isVapidConfigured = Boolean(process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY);
  const isCronSecretConfigured = Boolean(process.env.CRON_SECRET);

  const stats = getSubscriberCount();

  return NextResponse.json({
    app: "Organic Mushrooms Farm - Notification & Vercel Automation Engine",
    status: "Operational",
    systemStats: {
      subscribersCount: stats.total,
      byState: stats.byState,
      googleSheetConfigured: isGoogleSheetConfigured,
      vapidConfigured: isVapidConfigured,
      cronSecretActive: isCronSecretConfigured
    },
    cronJobOrgSetup: {
      instructions: "cron-job.org par 2 free jobs create karein (10:00 AM aur 5:00 PM IST par):",
      job1_morning: {
        title: "OMF Morning Push Notification (10:00 AM IST)",
        url: `${baseUrl}/api/notifications/send-cron?slot=10am`,
        schedule: "Every day at 10:00 AM (Asia/Kolkata)",
        httpMethod: "GET"
      },
      job2_evening: {
        title: "OMF Evening Push Notification (5:00 PM IST)",
        url: `${baseUrl}/api/notifications/send-cron?slot=5pm`,
        schedule: "Every day at 5:00 PM (Asia/Kolkata)",
        httpMethod: "GET"
      }
    },
    googleAppsScriptInstructions: {
      step1: "Apne Google Drive me ek nayi Google Sheet banayein (naam: 'OMF Subscribers').",
      step2: "Google Sheet me upar menu me 'Extensions' -> 'Apps Script' par click karein.",
      step3: "Jo code open ho, use hata kar niche diya gaya 'codeToCopy' paste kar dein.",
      step4: "Upar 'Deploy' -> 'New deployment' -> type: 'Web app' choose karein.",
      step5: "Who has access me: 'Anyone' select karein aur Deploy dabayein.",
      step6: "Mili hui Web App URL ko copy karke Vercel Environment Variables me 'GOOGLE_SHEET_WEBHOOK_URL' ke naam se save kar dein.",
      codeToCopy: GOOGLE_APPS_SCRIPT_TEMPLATE
    }
  });
}
