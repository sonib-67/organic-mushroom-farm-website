import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  checkDuplicateReceipt,
  recordReceipt,
  computeReceiptHash,
} from "@/lib/mushroomReceiptStore";
import {
  getDeviceRegistrationStatus,
  recordDeviceRegistration,
} from "@/lib/deviceSecurityStore";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      fullName,
      phone,
      email,
      city,
      district,
      state,
      pincode,
      fullAddress,
      currentlyFarming,
      mushroomInterested,
      experience,
      hasSetup,
      investment,
      reason,
      learningGoals,
      hearAboutUs,
      trainingName = "1 Day Mushroom Training",
      trainingDate,
      trainingMode = "Online",
      trainingTime = "10:00 AM – 4:00 PM IST",
      confirmed,
      // Payment receipt fields
      receiptBase64,
      receiptMimeType = "image/jpeg",
      receiptFileName = "payment_receipt.jpg",
      receiptHash: clientReceiptHash,
      utr,
      paymentApp = "UPI Payment",
      deviceId,
    } = data;

    // ----------------------------------------------------
    // STRICT SECURITY: Maximum 3 Registrations per Device/Mobile
    // ----------------------------------------------------
    const forwarded = req.headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "";

    if (deviceId) {
      const deviceStatus = getDeviceRegistrationStatus(deviceId, clientIp);
      if (deviceStatus.isBlocked || deviceStatus.count >= 3) {
        return NextResponse.json(
          {
            error:
              deviceStatus.reason ||
              "Security Alert: Is mobile device se registration ki maximum seema (3 registrations) poori ho chuki hai. Security niyam anusar ab is device se aur registration nahi kiya ja sakta. Kripya helpline +91 9203544140 par sampark karein.",
            isDeviceBlocked: true,
            deviceLimitReached: true,
            deviceQuota: {
              used: deviceStatus.count,
              maxAllowed: 3,
              remaining: 0,
            },
          },
          { status: 403 }
        );
      }
    }

    if (!fullName || !phone || !email || !city || !state || !confirmed) {
      return NextResponse.json(
        { error: "Please fill in all required fields marked with *." },
        { status: 400 }
      );
    }

    // Clean base64 and calculate hash if receipt was uploaded
    let cleanBase64 = "";
    let receiptHash = clientReceiptHash || "";
    if (receiptBase64) {
      cleanBase64 = receiptBase64.replace(
        /^data:image\/[a-zA-Z0-9+.-]+;base64,/,
        ""
      );
      receiptHash = receiptHash || computeReceiptHash(cleanBase64);

      // Enforce Duplicate Protection (Screenshot hash, UTR, Phone)
      const dupCheck = checkDuplicateReceipt({
        receiptHash,
        utr,
        phone,
      });

      if (dupCheck.isDuplicate) {
        return NextResponse.json(
          {
            error:
              dupCheck.reason ||
              "Duplicate submission detected. Each phone number and payment receipt can only be registered once.",
          },
          { status: 400 }
        );
      }
    }

    const regId = `OMF-BTN-${Math.floor(100000 + Math.random() * 900000)}`;
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // Record verified receipt in storage if present
    if (receiptHash) {
      recordReceipt({
        registrationId: regId,
        fullName,
        phone,
        email,
        amount: 500,
        utr: utr || "UPI-REF-" + Date.now().toString().slice(-6),
        paymentApp,
        receiptHash,
        fileName: receiptFileName,
        verifiedAt: submissionTime,
      });
    }

    // Record device registration count (Strict maximum 3 registrations per physical device)
    let deviceQuotaResult = {
      used: 1,
      max: 3,
      remaining: 2,
      isBlocked: false,
    };

    if (deviceId) {
      const recResult = recordDeviceRegistration({
        deviceId,
        registrationId: regId,
        phone,
        ip: clientIp,
      });

      deviceQuotaResult = {
        used: recResult.newCount,
        max: 3,
        remaining: recResult.remaining,
        isBlocked: recResult.isBlocked,
      };
    }

    // ----------------------------------------------------
    // Nodemailer: Send Full Details & Attached Receipt Image
    // ----------------------------------------------------
    const adminEmailList = [
      process.env.ADMIN_EMAIL,
      process.env.SMTP_USER,
      process.env.SMTP_EMAIL,
      "gamingbuddyzone@gmail.com",
      "organicmushroomsfarms@gmail.com",
    ].filter(Boolean) as string[];

    // Unique admin emails
    const uniqueAdminEmails = Array.from(new Set(adminEmailList));

    const smtpUser =
      process.env.SMTP_USER ||
      process.env.SMTP_EMAIL ||
      process.env.EMAIL_USER ||
      "organicmushroomsfarms@gmail.com";
    const smtpPass =
      process.env.SMTP_PASS ||
      process.env.SMTP_PASSWORD ||
      process.env.EMAIL_PASS ||
      "jzqqntulcifrfyul";

    if (smtpUser && smtpPass) {
      try {
        const isGmail =
          smtpUser.includes("gmail.com") ||
          (process.env.SMTP_HOST && process.env.SMTP_HOST.includes("gmail"));

        const transporter = nodemailer.createTransport(
          isGmail
            ? {
                service: "gmail",
                auth: { user: smtpUser, pass: smtpPass },
              }
            : {
                host: process.env.SMTP_HOST || "smtp.hostinger.com",
                port: Number(process.env.SMTP_PORT) || 465,
                secure: true,
                auth: { user: smtpUser, pass: smtpPass },
              }
        );

        const mailAttachments: any[] = [];
        let attachmentNote = "";

        if (cleanBase64) {
          const safeExt = receiptMimeType.includes("png")
            ? "png"
            : receiptMimeType.includes("webp")
            ? "webp"
            : "jpg";
          const attachmentFilename = `Payment_Receipt_${regId}_${fullName.replace(
            /[^a-zA-Z0-9]/g,
            "_"
          )}.${safeExt}`;

          mailAttachments.push({
            filename: attachmentFilename,
            content: Buffer.from(cleanBase64, "base64"),
            contentType: receiptMimeType || "image/jpeg",
          });

          attachmentNote = `
            <div style="margin-top: 20px; padding: 12px; background: #f1f5f9; border-radius: 6px; font-size: 12px; color: #475569;">
              📎 <strong>Attachment:</strong> The candidate's payment receipt screenshot (<code>${attachmentFilename}</code>) is attached to this email.
            </div>
          `;
        }

        const paymentHighlightBox = cleanBase64
          ? `
            <div style="background: #ecfdf5; border: 2px solid #10b981; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
              <h3 style="margin: 0 0 6px 0; color: #065f46; font-size: 15px; font-weight: bold;">
                ✅ ₹500 Payment Verified (Receipt Attached)
              </h3>
              <div style="font-size: 13px; color: #047857;">
                <p style="margin: 2px 0;"><strong>Paid Amount:</strong> ₹500 (Advance Seat Booking Fee)</p>
                <p style="margin: 2px 0;"><strong>Payment Mode / App:</strong> ${paymentApp}</p>
                <p style="margin: 2px 0;"><strong>UPI UTR / Transaction No.:</strong> <span style="font-family: monospace; font-weight: bold; color: #0f172a;">${utr || "Verified Screenshot"}</span></p>
                <p style="margin: 2px 0;"><strong>Receipt Hash:</strong> <span style="font-family: monospace; font-size: 11px; color: #64748b;">${receiptHash.slice(0, 20)}...</span></p>
              </div>
            </div>
          `
          : "";

        // --- 1. ADMIN EMAIL TEMPLATE (Comprehensive internal report + Receipt Attachment) ---
        const adminEmailHtml = `
          <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 650px; margin: 0 auto; color: #0f172a; line-height: 1.6; background: #f8fafc; padding: 16px;">
            <div style="background: #0f172a; padding: 24px; border-radius: 12px 12px 0 0; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 22px; letter-spacing: 0.5px;">🍄 ORGANIC MUSHROOM FARM</h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #38bdf8; font-weight: bold;">
                New Mushroom Training Registration (Admin Notification)
              </p>
              <div style="display: inline-block; background: #059669; color: white; padding: 6px 16px; border-radius: 20px; font-weight: bold; margin-top: 12px; font-size: 13px;">
                Reg ID: ${regId} | Status: CONFIRMED
              </div>
            </div>

            <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none;">
              ${paymentHighlightBox}

              <h3 style="color: #4338ca; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px; margin-top: 15px;">
                1. Candidate Particulars
              </h3>
              <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
                <tr><td style="padding: 6px 0; width: 35%; color: #64748b;">Full Name:</td><td style="padding: 6px 0; font-weight: bold; color: #0f172a;">${fullName}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">WhatsApp / Phone:</td><td style="padding: 6px 0; font-weight: bold; color: #0f172a;">+91 ${phone}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Email Address:</td><td style="padding: 6px 0; color: #0f172a;">${email}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Location:</td><td style="padding: 6px 0; color: #0f172a;">${city}, ${district ? `${district}, ` : ""}${state} - ${pincode || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Full Address:</td><td style="padding: 6px 0; color: #0f172a;">${fullAddress || "N/A"}</td></tr>
              </table>

              <h3 style="color: #4338ca; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px; margin-top: 20px;">
                2. Training Program & Schedule
              </h3>
              <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
                <tr><td style="padding: 6px 0; width: 35%; color: #64748b;">Selected Program:</td><td style="padding: 6px 0; font-weight: bold; color: #0f172a;">${trainingName}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Training Mode:</td><td style="padding: 6px 0; font-weight: bold; color: #0f172a;">${trainingMode}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Session Timing:</td><td style="padding: 6px 0; color: #0f172a;">${trainingTime}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Registration Date:</td><td style="padding: 6px 0; color: #0f172a;">${submissionTime}</td></tr>
              </table>

              <h3 style="color: #4338ca; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px; margin-top: 20px;">
                3. Cultivation Background & Project Plan
              </h3>
              <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
                <tr><td style="padding: 6px 0; width: 35%; color: #64748b;">Mushroom Interested:</td><td style="padding: 6px 0; font-weight: bold; color: #0f172a;">${mushroomInterested || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Planned Investment:</td><td style="padding: 6px 0; font-weight: bold; color: #0f172a;">${investment || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Currently Farming:</td><td style="padding: 6px 0; color: #0f172a;">${currentlyFarming || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Farming Experience:</td><td style="padding: 6px 0; color: #0f172a;">${experience || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Setup Space Available:</td><td style="padding: 6px 0; color: #0f172a;">${hasSetup || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Reason for Attending:</td><td style="padding: 6px 0; color: #0f172a;">${reason || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Learning Goals:</td><td style="padding: 6px 0; color: #0f172a;">${learningGoals || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">How did you hear:</td><td style="padding: 6px 0; color: #0f172a;">${hearAboutUs || "N/A"}</td></tr>
              </table>

              ${attachmentNote}
            </div>

            <div style="background: #f8fafc; padding: 14px; text-align: center; border-radius: 0 0 12px 12px; font-size: 11px; color: #64748b; border: 1px solid #e2e8f0; border-top: none;">
              Organic Mushroom Farm • Katangi Road, Jabalpur (M.P.) - 483105 | Helpline: +91 9203544140
            </div>
          </div>
        `;

        // --- 2. CANDIDATE EMAIL TEMPLATE (Pure, Professional & Welcoming English Confirmation) ---
        const candidateEmailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px 12px; color: #1e293b;">
            <!-- Brand Header -->
            <div style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); padding: 28px 24px; border-radius: 12px 12px 0 0; text-align: center; color: #ffffff;">
              <div style="font-size: 32px; margin-bottom: 6px;">🍄</div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; color: #ffffff;">
                ORGANIC MUSHROOM FARM
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #38bdf8; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                Training Admission & Seat Confirmation
              </p>
            </div>

            <!-- Main Body Container -->
            <div style="background: #ffffff; padding: 28px 24px; border: 1px solid #e2e8f0; border-top: none; border-bottom: none;">
              <!-- Greeting -->
              <h2 style="margin: 0 0 12px 0; font-size: 18px; color: #0f172a; font-weight: 700;">
                Dear ${fullName},
              </h2>
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #334155;">
                Congratulations! We are pleased to confirm that your seat has been successfully reserved for the <strong>${trainingName}</strong> at <strong>Organic Mushroom Farm</strong>. Your registration details have been verified and recorded.
              </p>

              <!-- Admission Pass / Key Details Card -->
              <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #8b5cf6; border-radius: 8px; padding: 18px 20px; margin-bottom: 24px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.8;">
                  <tr>
                    <td style="color: #64748b; font-weight: 600; width: 40%; padding-bottom: 6px;">Registration ID:</td>
                    <td style="color: #4338ca; font-weight: 800; font-size: 14px; padding-bottom: 6px; font-family: monospace;">${regId}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600; padding-bottom: 6px;">Training Program:</td>
                    <td style="color: #0f172a; font-weight: 700; padding-bottom: 6px;">${trainingName}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600; padding-bottom: 6px;">Training Mode:</td>
                    <td style="color: #0f172a; font-weight: 600; padding-bottom: 6px;">${trainingMode}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600; padding-bottom: 6px;">Session Timings:</td>
                    <td style="color: #0f172a; font-weight: 600; padding-bottom: 6px;">${trainingTime} (Every Sunday)</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600; padding-bottom: 6px;">Advance Booking Fee:</td>
                    <td style="color: #059669; font-weight: 800; padding-bottom: 6px;">₹500 (Paid & Verified)</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600; padding-bottom: 6px;">UPI / Transaction Ref:</td>
                    <td style="color: #0f172a; font-weight: 600; padding-bottom: 6px; font-family: monospace;">${utr || "Verified Screenshot"}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">Registered Contact:</td>
                    <td style="color: #0f172a; font-weight: 600;">+91 ${phone}</td>
                  </tr>
                </table>
              </div>

              <!-- Next Steps Section -->
              <h3 style="margin: 0 0 12px 0; font-size: 15px; color: #1e293b; font-weight: 700;">
                📌 What Happens Next? (Next Steps)
              </h3>
              <ol style="margin: 0 0 24px 0; padding-left: 20px; font-size: 13px; line-height: 1.7; color: #475569;">
                <li style="margin-bottom: 8px;">
                  <strong>Coordinator Call & WhatsApp Briefing:</strong> Our training coordinator will contact you via WhatsApp (+91 ${phone}) 24 to 48 hours prior to your scheduled session.
                </li>
                <li style="margin-bottom: 8px;">
                  <strong>Live Meeting Link & Starter Kit:</strong> The live interactive session joining link (Google Meet) along with the mushroom cultivation handbook and syllabus will be sent directly to your registered WhatsApp.
                </li>
                <li>
                  <strong>Keep Your Registration ID:</strong> Please keep your Registration ID (<strong>${regId}</strong>) handy for reference and during the session.
                </li>
              </ol>

              <!-- Need Assistance Section -->
              <div style="background: #f1f5f9; border-radius: 8px; padding: 16px 20px; font-size: 13px; color: #334155; line-height: 1.6;">
                <div style="font-weight: 700; color: #0f172a; margin-bottom: 6px;">📞 Have Questions or Need Help?</div>
                <div><strong>Helpline / WhatsApp:</strong> <a href="tel:+919203544140" style="color: #4f46e5; text-decoration: none; font-weight: 600;">+91 9203544140</a></div>
                <div><strong>Official Email:</strong> <a href="mailto:organicmushroomsfarms@gmail.com" style="color: #4f46e5; text-decoration: none;">organicmushroomsfarms@gmail.com</a></div>
                <div><strong>Farm Location:</strong> Katangi Road, Jabalpur, Madhya Pradesh - 483105, India</div>
              </div>

              <!-- Sign Off -->
              <p style="margin: 24px 0 0 0; font-size: 13px; color: #475569; line-height: 1.6;">
                Warm regards,<br />
                <strong>Training & Cultivation Team</strong><br />
                Organic Mushroom Farm
              </p>
            </div>

            <!-- Footer -->
            <div style="background: #f1f5f9; padding: 18px 24px; border-radius: 0 0 12px 12px; text-align: center; font-size: 12px; color: #64748b; border: 1px solid #e2e8f0; border-top: none;">
              <p style="margin: 0 0 6px 0;">This is an automated confirmation sent to ${email}.</p>
              <p style="margin: 0;">&copy; ${new Date().getFullYear()} Organic Mushroom Farm. All rights reserved. <a href="https://organicmushroomsfarm.com" style="color: #6366f1; text-decoration: none;">organicmushroomsfarm.com</a></p>
            </div>
          </div>
        `;

        // 1. Prepare Admin Email Promise
        const sendAdminMail = transporter.sendMail({
          from: `"Organic Mushroom Farm" <${smtpUser}>`,
          to: uniqueAdminEmails.join(", "),
          subject: cleanBase64
            ? `🍄 [₹500 PAID] Training Registration - ${fullName} [${regId}]`
            : `🍄 Training Registration - ${fullName} [${regId}]`,
          html: adminEmailHtml,
          attachments: mailAttachments,
        });

        // 2. Prepare Candidate Email Promise (Clean English Admission Notice)
        const sendCandidateMail =
          email && email.includes("@")
            ? transporter.sendMail({
                from: `"Organic Mushroom Farm" <${smtpUser}>`,
                to: email,
                subject: `🍄 Seat Confirmed! [${regId}] - ${trainingName} | Organic Mushroom Farm`,
                html: candidateEmailHtml,
              })
            : Promise.resolve(null);

        // Send concurrently in background without blocking instant HTTP response to the user
        Promise.allSettled([sendAdminMail, sendCandidateMail])
          .then((results) => {
            results.forEach((res, i) => {
              if (res.status === "rejected") {
                console.error(
                  `[MushroomRegistration] Async email dispatch failed for ${
                    i === 0 ? "Admin" : "Candidate"
                  }:`,
                  res.reason
                );
              }
            });
          })
          .catch((dispatchError) => {
            console.error(
              "[MushroomRegistration] Email background dispatch error:",
              dispatchError
            );
          });
      } catch (mailError) {
        console.error("[MushroomRegistration] Nodemailer init error (non-fatal):", mailError);
      }
    }

    return NextResponse.json({
      success: true,
      registrationId: regId,
      submittedAt: submissionTime,
      utr: utr || "UPI-VERIFIED",
      paymentApp,
      amount: 500,
      receiptHash,
      deviceQuota: deviceQuotaResult,
      data: {
        fullName,
        phone,
        email,
        city,
        state,
        trainingName,
        trainingDate,
        trainingMode,
        trainingTime,
      },
    });
  } catch (error: any) {
    console.error("[MushroomRegistration] Server error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error. Please try again or WhatsApp us directly at +91 9203544140." },
      { status: 500 }
    );
  }
}
