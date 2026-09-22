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
 * Saves contact/enquiry form submissions to Google Sheets under Website_Enquiries tab.
 */
export async function syncEnquiryToGoogleSheet(data: EnquirySyncPayload): Promise<boolean> {
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
    console.warn("[GoogleSheetSync] Enquiry sync warning (non-fatal):", err);
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
/**
 * ORGANIC MUSHROOM FARM - Google Sheet Webhook Sync Engine
 * Handles:
 * 1. Website Enquiries (Website_Enquiries)
 * 2. 299 Training (299_Payment_Done, 299_Payment_Initiated, 299_Payment_Cancel)
 * 3. 699 Training (699_Payment_Done, 699_Payment_Initiated, 699_Payment_Cancel)
 * 4. Offline Training (Offline_Payment_Done, Offline_Payment_Initiated, Offline_Payment_Cancel)
 * 5. USA / Global Training (USA_Global_Training)
 * 6. Newsletter Subscribers (Newsletter_Subscribers)
 * 7. Web Push Notification Subscribers (Push_Subscribers)
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
 * ONE-CLICK SETUP FUNCTION
 * Select 'setupAllSheets' in the Apps Script toolbar above and click 'Run' (▶).
 * It will instantly create all sheets with beautiful colored headers right away!
 */
function setupAllSheets() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  
  var tabs = [
    {
      name: "Website_Enquiries",
      color: "#0f766e",
      headers: ["Date & Time (IST)", "Full Name", "Phone / WhatsApp", "Email Address", "Service / Enquiry Type", "Subject of Enquiry", "Mushroom Variety", "Quantity / Farm Size", "Delivery / Farm Location", "Training Mode / Setup Type", "Product Form", "Message"]
    },
    {
      name: "299_Payment_Done",
      color: "#16a34a",
      headers: ["Date & Time (IST)", "Student Name", "Mobile Number", "Email Address", "Course Name", "Amount Paid", "Razorpay Payment ID", "Order ID", "City & State", "Experience & Goal", "Registration Details"]
    },
    {
      name: "299_Payment_Initiated",
      color: "#d97706",
      headers: ["Date & Time (IST)", "Lead Name", "Mobile Number", "Email Address", "Course Selected", "Fee Amount", "Status", "Order ID", "Notes"]
    },
    {
      name: "299_Payment_Cancel",
      color: "#dc2626",
      headers: ["Date & Time (IST)", "Lead Name", "Mobile Number", "Email Address", "Course Selected", "Fee Amount", "Status (Cancelled/Failed)", "Order ID", "Drop Reason / Error Message"]
    },
    {
      name: "699_Payment_Done",
      color: "#7c3aed",
      headers: ["Date & Time (IST)", "Student Name", "Mobile Number", "Email Address", "Course Name", "Amount Paid", "Razorpay Payment ID", "Order ID", "City & State", "Experience & Goal", "Registration Details"]
    },
    {
      name: "699_Payment_Initiated",
      color: "#4f46e5",
      headers: ["Date & Time (IST)", "Lead Name", "Mobile Number", "Email Address", "Course Selected", "Fee Amount", "Status", "Order ID", "Notes"]
    },
    {
      name: "699_Payment_Cancel",
      color: "#e11d48",
      headers: ["Date & Time (IST)", "Lead Name", "Mobile Number", "Email Address", "Course Selected", "Fee Amount", "Status (Cancelled/Failed)", "Order ID", "Drop Reason / Error Message"]
    },
    {
      name: "Newsletter_Subscribers",
      color: "#2e7d32",
      headers: ["Subscribed Date (IST)", "Email Address", "State", "Source", "Status", "Verified Date (IST)"]
    },
    {
      name: "Push_Subscribers",
      color: "#1565c0",
      headers: ["Subscribed Date (IST)", "Subscriber ID", "State", "Language", "Endpoint", "p256dh", "auth", "Device Fingerprint"]
    },
    {
      name: "Offline_Payment_Done",
      color: "#047857",
      headers: ["Date & Time (IST)", "Student Name", "Mobile Number", "Email Address", "Course Name", "Amount Paid", "Razorpay Payment ID", "Order ID", "City & State", "Experience & Goal", "Registration Details"]
    },
    {
      name: "USA_Global_Training",
      color: "#1e40af",
      headers: ["Date & Time (IST)", "Student Name", "Email Address", "Phone / WhatsApp", "Plan Enrolled", "Amount ($ USD)", "Payment Status", "PayPal / Order ID", "Location (Country/State)"]
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
    
    // 3. WEBSITE ENQUIRIES (All enquiry forms)
    if (data.type === "enquiry" || data.action === "website_enquiry") {
      var eSheet = getOrCreateSheet(
        sheet,
        "Website_Enquiries",
        ["Date & Time (IST)", "Full Name", "Phone / WhatsApp", "Email Address", "Service / Enquiry Type", "Subject of Enquiry", "Mushroom Variety", "Quantity / Farm Size", "Delivery / Farm Location", "Training Mode / Setup Type", "Product Form", "Message"],
        "#0f766e"
      );
      
      var qtyOrSize = data.quantity || data.farmSize || "";
      var locStr = data.deliveryLocation || data.farmLocation || "";
      var modeOrSetup = data.trainingMode || data.setupType || "";
      
      eSheet.appendRow([
        istDate,
        data.fullName || "",
        data.phone || "",
        data.email || "",
        data.serviceType || "General Enquiry",
        data.subjectOfEnquiry || "",
        data.mushroomVariety || "",
        qtyOrSize,
        locStr,
        modeOrSetup,
        data.productForm || "",
        data.message || ""
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: "Website_Enquiries", message: "Enquiry saved to Website_Enquiries" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 4. TRAINING REGISTRATIONS & LEADS (299, 699, Offline, USA)
    if (data.type === "training" || data.action === "training_lead" || data.action === "training_payment") {
      var planStr = ((data.planType || "") + " " + (data.trainingName || "") + " " + (data.price || "")).toLowerCase();
      var isUSA = data.planType === "usa" || data.currency === "USD" || planStr.indexOf("$") !== -1 || planStr.indexOf("usa") !== -1;
      var isOffline = data.planType === "offline" || planStr.indexOf("offline") !== -1;
      var is699 = data.planType === "699" || planStr.indexOf("699") !== -1 || planStr.indexOf("advanced") !== -1 || planStr.indexOf("commercial") !== -1;
      
      var isSuccess = data.status === "PAID" || data.status === "DONE" || data.status === "SUCCESS";
      var isCancel = data.status === "CANCELLED" || data.status === "FAILED";
      
      var tabName = "299_Payment_Initiated";
      var headerColor = "#d97706";
      
      if (isUSA) {
        tabName = "USA_Global_Training";
        headerColor = "#1e40af";
      } else if (isOffline) {
        if (isSuccess) {
          tabName = "Offline_Payment_Done";
          headerColor = "#047857";
        } else if (isCancel) {
          tabName = "Offline_Payment_Cancel";
          headerColor = "#ea580c";
        } else {
          tabName = "Offline_Payment_Initiated";
          headerColor = "#b45309";
        }
      } else if (is699) {
        if (isSuccess) {
          tabName = "699_Payment_Done";
          headerColor = "#7c3aed";
        } else if (isCancel) {
          tabName = "699_Payment_Cancel";
          headerColor = "#e11d48";
        } else {
          tabName = "699_Payment_Initiated";
          headerColor = "#4f46e5";
        }
      } else {
        // 299 Basic Training
        if (isSuccess) {
          tabName = "299_Payment_Done";
          headerColor = "#16a34a";
        } else if (isCancel) {
          tabName = "299_Payment_Cancel";
          headerColor = "#dc2626";
        } else {
          tabName = "299_Payment_Initiated";
          headerColor = "#d97706";
        }
      }
      
      var headers = [];
      if (tabName === "USA_Global_Training") {
        headers = ["Date & Time (IST)", "Student Name", "Email Address", "Phone / WhatsApp", "Plan Enrolled", "Amount ($ USD)", "Payment Status", "PayPal / Order ID", "Location (Country/State)"];
      } else if (isSuccess) {
        headers = ["Date & Time (IST)", "Student Name", "Mobile Number", "Email Address", "Course Name", "Amount Paid", "Razorpay Payment ID", "Order ID", "City & State", "Experience & Goal", "Registration Details"];
      } else {
        headers = ["Date & Time (IST)", "Lead Name", "Mobile Number", "Email Address", "Course Selected", "Fee Amount", "Status", "Order ID", isCancel ? "Drop Reason / Error Message" : "Notes"];
      }
      
      var tSheet = getOrCreateSheet(sheet, tabName, headers, headerColor);
      
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
          data.status || (isCancel ? "CANCELLED" : "INITIATED"),
          data.orderId || "",
          data.errorMsg || (isCancel ? "User closed payment window / dropped checkout" : "Checkout Initiated")
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
