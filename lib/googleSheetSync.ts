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
 * Saves training lead, payment initiation, completed payment or dropped checkout to Google Sheets.
 * Directs automatically to dedicated tabs (299_Payment_Done, 299_Pending_Leads, 699_Payment_Done, 699_Pending_Leads, etc.)
 */
export async function syncTrainingToGoogleSheet(data: TrainingSyncPayload): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return false;

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(12000),
    });
    return res.ok;
  } catch (err) {
    console.warn("[GoogleSheetSync] Training sync warning (non-fatal):", err);
    return false;
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
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    var istDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    
    // 1. NEWSLETTER SUBSCRIBERS
    if (data.type === "newsletter") {
      var nSheet = sheet.getSheetByName("Newsletter_Subscribers");
      if (!nSheet) {
        nSheet = sheet.insertSheet("Newsletter_Subscribers");
        nSheet.appendRow(["Subscribed Date (IST)", "Email Address", "State", "Source", "Status", "Verified Date (IST)"]);
        nSheet.getRange("A1:F1").setFontWeight("bold").setBackground("#2e7d32").setFontColor("#ffffff");
      }
      
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
      var pSheet = sheet.getSheetByName("Push_Subscribers");
      if (!pSheet) {
        pSheet = sheet.insertSheet("Push_Subscribers");
        pSheet.appendRow(["Subscribed Date (IST)", "Subscriber ID", "State", "Language", "Endpoint", "p256dh", "auth", "Device Fingerprint"]);
        pSheet.getRange("A1:H1").setFontWeight("bold").setBackground("#1565c0").setFontColor("#ffffff");
      }
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
    
    // 3. TRAINING REGISTRATIONS & LEADS (299, 699, Offline, USA)
    if (data.type === "training" || data.action === "training_lead" || data.action === "training_payment") {
      var planStr = ((data.planType || "") + " " + (data.trainingName || "") + " " + (data.price || "")).toLowerCase();
      var isUSA = data.planType === "usa" || data.currency === "USD" || planStr.indexOf("$") !== -1 || planStr.indexOf("usa") !== -1;
      var isOffline = data.planType === "offline" || planStr.indexOf("offline") !== -1;
      var is699 = data.planType === "699" || planStr.indexOf("699") !== -1 || planStr.indexOf("advanced") !== -1;
      var is299 = data.planType === "299" || planStr.indexOf("299") !== -1 || planStr.indexOf("basic") !== -1;
      
      var isSuccess = data.status === "PAID" || data.status === "DONE" || data.status === "SUCCESS";
      
      var tabName = "299_Pending_Leads";
      var headerColor = "#d97706";
      
      if (isUSA) {
        tabName = "USA_Global_Training";
        headerColor = "#1e40af";
      } else if (isOffline) {
        tabName = isSuccess ? "Offline_Payment_Done" : "Offline_Pending_Leads";
        headerColor = isSuccess ? "#047857" : "#ea580c";
      } else if (is699) {
        tabName = isSuccess ? "699_Payment_Done" : "699_Pending_Leads";
        headerColor = isSuccess ? "#7c3aed" : "#dc2626";
      } else {
        tabName = isSuccess ? "299_Payment_Done" : "299_Pending_Leads";
        headerColor = isSuccess ? "#15803d" : "#d97706";
      }
      
      var tSheet = sheet.getSheetByName(tabName);
      if (!tSheet) {
        tSheet = sheet.insertSheet(tabName);
        if (tabName === "USA_Global_Training") {
          tSheet.appendRow(["Date & Time (IST)", "Student Name", "Email Address", "Phone / WhatsApp", "Plan Enrolled", "Amount ($ USD)", "Payment Status", "PayPal / Order ID", "Location (Country/State)"]);
          tSheet.getRange("A1:I1").setFontWeight("bold").setBackground(headerColor).setFontColor("#ffffff");
        } else if (isSuccess) {
          tSheet.appendRow(["Date & Time (IST)", "Student Name", "Mobile Number", "Email Address", "Course Name", "Amount Paid", "Razorpay Payment ID", "Order ID", "City & State", "Experience & Goal", "Registration Details"]);
          tSheet.getRange("A1:K1").setFontWeight("bold").setBackground(headerColor).setFontColor("#ffffff");
        } else {
          tSheet.appendRow(["Date & Time (IST)", "Lead Name", "Mobile Number", "Email Address", "Course Selected", "Fee Amount", "Status (Lead/Cancelled)", "Order ID", "Notes / Drop Reason"]);
          tSheet.getRange("A1:I1").setFontWeight("bold").setBackground(headerColor).setFontColor("#ffffff");
        }
      }
      
      if (tabName === "USA_Global_Training") {
        tSheet.appendRow([
          istDate,
          data.name || "",
          data.email || "",
          data.phone || "",
          data.trainingName || data.planName || (data.price ? "USA Training (" + data.price + ")" : "USA Training"),
          data.price || data.amount || "$39 / $97",
          data.status || "COMPLETED",
          data.paymentId || data.orderID || data.orderId || "",
          (data.city ? data.city + ", " : "") + (data.state || data.country || "USA / Global")
        ]);
      } else if (isSuccess) {
        var extraDetails = "";
        if (data.planSpace || data.investment) {
          extraDetails = "Space: " + (data.planSpace || "-") + " | Inv: " + (data.investment || "-");
        }
        tSheet.appendRow([
          istDate,
          data.name || "",
          data.phone || "",
          data.email || "",
          data.trainingName || (is699 ? "Advanced Commercial Cultivation" : "Basic Mushroom Farming"),
          data.price || (is699 ? "₹699" : "₹299"),
          data.paymentId || "",
          data.orderId || "",
          (data.city ? data.city + ", " : "") + (data.state || ""),
          (data.experience ? "Exp: " + data.experience + " | " : "") + (data.goal || ""),
          extraDetails
        ]);
      } else {
        tSheet.appendRow([
          istDate,
          data.name || "",
          data.phone || "",
          data.email || "",
          data.trainingName || (is699 ? "Advanced Commercial Cultivation (₹699)" : "Basic Mushroom Farming (₹299)"),
          data.price || (is699 ? "₹699" : "₹299"),
          data.status || "INITIATED",
          data.orderId || "",
          data.errorMsg || (data.status === "CANCELLED" ? "User cancelled payment window" : "Checkout Initiated / Drop-off")
        ]);
      }
      
      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: tabName, message: "Saved to " + tabName }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "ignored", message: "Unknown event type" }))
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
