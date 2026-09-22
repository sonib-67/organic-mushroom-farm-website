/**
 * Google Sheet Sync Engine for Organic Mushrooms Farm
 * Provides free, lifetime cloud persistence for Vercel Serverless environment.
 * Syncs both Web Push subscribers and Newsletter email subscribers into your Google Sheet.
 */

export interface GoogleSheetSubscriberPayload {
  action: "save_subscriber" | "get_subscribers" | "newsletter_subscribe";
  type?: "push_subscriber" | "newsletter";
  id?: string;
  email?: string;
  endpoint?: string;
  p256dh?: string;
  auth?: string;
  state?: string;
  country?: string;
  language?: string;
  deviceFingerprint?: string;
  userAgent?: string;
  subscribedAt?: string;
  source?: string;
}

/**
 * Sends subscriber data to Google Sheets via Google Apps Script Webhook.
 * Non-blocking background execution with timeout.
 */
export async function syncPushSubscriberToGoogleSheet(sub: {
  id: string;
  endpoint?: string;
  keys?: { p256dh?: string; auth?: string };
  state: string;
  country: string;
  language: string;
  deviceFingerprint?: string;
  userAgent?: string;
  subscribedAt: string;
}): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    // If webhook is not configured yet, skip quietly
    return false;
  }

  try {
    const payload: GoogleSheetSubscriberPayload = {
      action: "save_subscriber",
      type: "push_subscriber",
      id: sub.id,
      endpoint: sub.endpoint,
      p256dh: sub.keys?.p256dh,
      auth: sub.keys?.auth,
      state: sub.state,
      country: sub.country,
      language: sub.language,
      deviceFingerprint: sub.deviceFingerprint,
      userAgent: sub.userAgent,
      subscribedAt: sub.subscribedAt,
      source: "OMF Web App"
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(6000)
    });

    return res.ok;
  } catch (err) {
    console.warn("[GoogleSheetSync] Push sync warning (non-fatal):", err);
    return false;
  }
}

/**
 * Saves a newsletter email subscriber to Google Sheets.
 */
export async function syncNewsletterEmailToGoogleSheet(data: {
  email: string;
  state?: string;
  name?: string;
  source?: string;
}): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return {
      success: true,
      error: "GOOGLE_SHEET_WEBHOOK_URL not configured yet, but email received."
    };
  }

  try {
    const payload: GoogleSheetSubscriberPayload = {
      action: "newsletter_subscribe",
      type: "newsletter",
      email: data.email.toLowerCase().trim(),
      state: data.state || "India",
      source: data.source || "Website Footer Digest",
      subscribedAt: new Date().toISOString()
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(6000)
    });

    if (!res.ok) {
      return { success: false, error: `Google Sheet responded with status ${res.status}` };
    }

    return { success: true };
  } catch (err: any) {
    console.warn("[GoogleSheetSync] Newsletter sync warning:", err);
    return { success: false, error: err.message || "Failed to reach Google Sheets" };
  }
}

/**
 * Fetches push subscribers from Google Sheets when Vercel serverless function starts up fresh.
 */
export async function fetchSubscribersFromGoogleSheet(): Promise<any[]> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return [];

  try {
    const url = new URL(webhookUrl);
    url.searchParams.set("action", "get_subscribers");

    const res = await fetch(url.toString(), {
      method: "GET",
      signal: AbortSignal.timeout(8000)
    });

    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json)) {
        return json;
      }
      if (json.subscribers && Array.isArray(json.subscribers)) {
        return json.subscribers;
      }
    }
  } catch (err) {
    console.warn("[GoogleSheetSync] Could not fetch subscribers from Google Sheet:", err);
  }
  return [];
}

/**
 * Official Copy-Paste Google Apps Script for the user.
 * They paste this into Google Sheet -> Extensions -> Apps Script -> Deploy as Web App.
 */
export const GOOGLE_APPS_SCRIPT_TEMPLATE = `
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    
    // Choose or create tab based on subscriber type
    var tabName = data.type === "newsletter" ? "Newsletter_Subscribers" : "Push_Subscribers";
    var targetSheet = sheet.getSheetByName(tabName);
    
    if (!targetSheet) {
      targetSheet = sheet.insertSheet(tabName);
      if (data.type === "newsletter") {
        targetSheet.appendRow(["Subscribed Date (IST)", "Email Address", "State", "Source"]);
        targetSheet.getRange("A1:D1").setFontWeight("bold").setBackground("#2e7d32").setFontColor("#ffffff");
      } else {
        targetSheet.appendRow(["Subscribed Date (IST)", "Subscriber ID", "State", "Language", "Endpoint", "p256dh", "auth", "Device Fingerprint"]);
        targetSheet.getRange("A1:H1").setFontWeight("bold").setBackground("#1565c0").setFontColor("#ffffff");
      }
    }
    
    var istDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    
    if (data.type === "newsletter") {
      targetSheet.appendRow([istDate, data.email, data.state || "All India", data.source || "Website"]);
    } else {
      targetSheet.appendRow([
        istDate,
        data.id || "",
        data.state || "Madhya Pradesh",
        data.language || "hi",
        data.endpoint || "",
        data.p256dh || "",
        data.auth || "",
        data.deviceFingerprint || ""
      ]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Saved to Google Sheet" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var pushSheet = sheet.getSheetByName("Push_Subscribers");
    var subscribers = [];
    
    if (pushSheet) {
      var rows = pushSheet.getDataRange().getValues();
      // Skip header row
      for (var i = 1; i < rows.length; i++) {
        var r = rows[i];
        if (r[4]) { // has endpoint
          subscribers.push({
            id: r[1],
            state: r[2] || "Madhya Pradesh",
            language: r[3] || "hi",
            endpoint: r[4],
            keys: { p256dh: r[5], auth: r[6] },
            subscribedAt: r[0],
            deviceFingerprint: r[7]
          });
        }
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", count: subscribers.length, subscribers: subscribers }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString(), subscribers: [] }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`.trim();
