/**
 * Google Sheet Sync Engine for Organic Mushrooms Farm
 * Provides free, lifetime cloud persistence for Vercel Serverless environment.
 * Syncs both Web Push subscribers and Newsletter email subscribers into your Google Sheet.
 */

export interface GoogleSheetSubscriberPayload {
  action: "save_subscriber" | "get_subscribers" | "newsletter_subscribe" | "newsletter_confirm" | string;
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
  status?: string;
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
      signal: AbortSignal.timeout(12000)
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
  status?: string;
  action?: string;
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
      action: data.action || (data.status === "ACTIVE" ? "newsletter_confirm" : "newsletter_subscribe"),
      type: "newsletter",
      email: data.email.toLowerCase().trim(),
      state: data.state || "India",
      source: data.source || "Website Footer Digest",
      status: data.status || "PENDING",
      subscribedAt: new Date().toISOString()
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(12000)
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

export interface TrainingSyncPayload {
  action?: "training_lead" | "training_payment";
  type: "training";
  planType?: "299" | "699" | "offline" | "usa" | "other" | string;
  status: "INITIATED" | "PAID" | "DONE" | "CANCELLED" | "FAILED" | "SUCCESS" | string;
  name: string;
  email: string;
  phone: string;
  price?: string | number;
  paymentId?: string;
  orderId?: string;
  trainingName?: string;
  city?: string;
  state?: string;
  experience?: string;
  interest?: string;
  goal?: string;
  planTime?: string;
  planSpace?: string;
  investment?: string;
  support?: string;
  source?: string;
  currency?: string;
  errorMsg?: string;
}

/**
 * Training / USA Training sync to Google Sheets (Disabled - website only uses Newsletter and Push in Google Sheets).
 */
export async function syncTrainingToGoogleSheet(_data: TrainingSyncPayload): Promise<boolean> {
  // Disabled as per request (only Newsletter and Push subscribers sync to Google Sheet)
  return false;
}

export interface EnquirySyncPayload {
  action?: "website_enquiry";
  type: "enquiry";
  serviceType: string;
  fullName: string;
  phone?: string;
  email: string;
  message?: string;
  subjectOfEnquiry?: string;
  trainingMode?: string;
  mushroomVariety?: string;
  quantity?: string;
  deliveryLocation?: string;
  setupType?: string;
  farmSize?: string;
  farmLocation?: string;
  productForm?: string;
  ip?: string;
  timestamp?: string;
}

/**
 * Enquiry form sync to Google Sheets (Disabled - enquiries are dispatched directly via email).
 */
export async function syncEnquiryToGoogleSheet(_data: EnquirySyncPayload): Promise<boolean> {
  // Disabled as per request (only Newsletter and Push subscribers sync to Google Sheet)
  return false;
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
    url.searchParams.set("type", "push");

    const res = await fetch(url.toString(), {
      method: "GET",
      signal: AbortSignal.timeout(15000)
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
    console.warn("[GoogleSheetSync] Could not fetch push subscribers from Google Sheet:", err);
  }
  return [];
}

/**
 * Fetches newsletter email subscribers from Google Sheets.
 */
export async function fetchNewsletterEmailsFromGoogleSheet(): Promise<Array<{ email: string; state?: string; subscribedAt?: string }>> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return [];

  try {
    const url = new URL(webhookUrl);
    url.searchParams.set("action", "get_subscribers");
    url.searchParams.set("type", "newsletter");

    const res = await fetch(url.toString(), {
      method: "GET",
      signal: AbortSignal.timeout(15000)
    });

    if (res.ok) {
      const json = await res.json();
      if (json.newsletters && Array.isArray(json.newsletters)) {
        return json.newsletters;
      }
      if (Array.isArray(json)) {
        return json;
      }
    }
  } catch (err) {
    console.warn("[GoogleSheetSync] Could not fetch newsletter emails from Google Sheet:", err);
  }
  return [];
}

/**
 * Official Copy-Paste Google Apps Script for the user.
 * They paste this into Google Sheet -> Extensions -> Apps Script -> Deploy as Web App.
 */
export const GOOGLE_APPS_SCRIPT_TEMPLATE = `
/**
 * ORGANIC MUSHROOM FARM - Google Sheet Webhook Sync Engine
 * Handles ONLY:
 * 1. Newsletter Subscribers (Newsletter_Subscribers)
 * 2. Web Push Notification Subscribers (Push_Subscribers)
 */

function getOrCreateSheet(sheet, name, headers, color) {
  var s = sheet.getSheetByName(name);
  if (!s) {
    s = sheet.insertSheet(name);
    s.appendRow(headers);
    var range = s.getRange(1, 1, 1, headers.length);
    range.setFontWeight("bold").setBackground(color).setFontColor("#ffffff");
    s.setFrozenRows(1);
  }
  return s;
}

/**
 * ⚡ 1-CLICK SETUP FUNCTION
 * Apps Script टूलबार में 'setupAllSheets' चुनें और 'Run' (▶) दबाएं।
 * यह केवल 2 जरूरी शीट्स तैयार रखेगा।
 */
function setupAllSheets() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  
  var tabs = [
    {
      name: "Newsletter_Subscribers",
      color: "#2e7d32",
      headers: ["Subscribed Date (IST)", "Email Address", "State", "Source", "Status", "Verified Date (IST)"]
    },
    {
      name: "Push_Subscribers",
      color: "#1565c0",
      headers: ["Subscribed Date (IST)", "Subscriber ID", "State", "Language", "Endpoint", "p256dh", "auth", "Device Fingerprint"]
    }
  ];

  for (var i = 0; i < tabs.length; i++) {
    getOrCreateSheet(sheet, tabs[i].name, tabs[i].headers, tabs[i].color);
  }
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    var istDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    
    // 1. NEWSLETTER SUBSCRIBERS
    if (data.type === "newsletter") {
      var nSheet = getOrCreateSheet(
        sheet,
        "Newsletter_Subscribers",
        ["Subscribed Date (IST)", "Email Address", "State", "Source", "Status", "Verified Date (IST)"],
        "#2e7d32"
      );
      
      // If confirming an existing subscriber, update their status to ACTIVE
      if (data.action === "newsletter_confirm") {
        var nData = nSheet.getDataRange().getValues();
        var emailLower = (data.email || "").toString().trim().toLowerCase();
        for (var k = 1; k < nData.length; k++) {
          if (nData[k][1] && nData[k][1].toString().trim().toLowerCase() === emailLower) {
            nSheet.getRange(k + 1, 5).setValue("ACTIVE");
            nSheet.getRange(k + 1, 6).setValue(istDate);
            return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Subscriber confirmed", row: k + 1 }))
              .setMimeType(ContentService.MimeType.JSON);
          }
        }
      }
      
      nSheet.appendRow([istDate, data.email, data.state || "All India", data.source || "Website", data.status || "PENDING", data.status === "ACTIVE" ? istDate : ""]);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: "Newsletter_Subscribers" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 2. PUSH NOTIFICATION SUBSCRIBERS
    if (data.type === "push_subscriber" || data.type === "push") {
      var pSheet = getOrCreateSheet(
        sheet,
        "Push_Subscribers",
        ["Subscribed Date (IST)", "Subscriber ID", "State", "Language", "Endpoint", "p256dh", "auth", "Device Fingerprint"],
        "#1565c0"
      );
      pSheet.appendRow([
        istDate,
        data.id || "",
        data.state || "Madhya Pradesh",
        data.language || "hi",
        data.endpoint || "",
        data.p256dh || "",
        data.auth || "",
        data.deviceFingerprint || ""
      ]);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: "Push_Subscribers" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Any other events are ignored
    return ContentService.createTextOutput(JSON.stringify({ status: "ignored", message: "Event ignored as per configuration" }))
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
    var newsletterSheet = sheet.getSheetByName("Newsletter_Subscribers");
    
    var subscribers = [];
    var newsletters = [];
    
    if (pushSheet) {
      var pRows = pushSheet.getDataRange().getValues();
      for (var i = 1; i < pRows.length; i++) {
        var r = pRows[i];
        if (r[4]) {
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
    
    if (newsletterSheet) {
      var nRows = newsletterSheet.getDataRange().getValues();
      for (var j = 1; j < nRows.length; j++) {
        var nr = nRows[j];
        if (nr[1] && nr[1].toString().indexOf("@") > 0) {
          newsletters.push({
            subscribedAt: nr[0],
            email: nr[1].toString().trim().toLowerCase(),
            state: nr[2] || "All India",
            source: nr[3] || "Website"
          });
        }
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      count: subscribers.length,
      subscribers: subscribers,
      newsletterCount: newsletters.length,
      newsletters: newsletters
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString(), subscribers: [], newsletters: [] }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`.trim();
