import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
      trainingName = "1-Day Button Mushroom Training",
      trainingDate,
      trainingMode,
      trainingTime = "10:00 AM – 4:00 PM IST",
      confirmed,
    } = data;

    if (!fullName || !phone || !email || !city || !state || !confirmed) {
      return NextResponse.json(
        { error: "Please fill in all required fields marked with *." },
        { status: 400 }
      );
    }

    const regId = `OMF-BTN-${Math.floor(100000 + Math.random() * 900000)}`;
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // Optional email dispatch if SMTP credentials exist
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.hostinger.com",
          port: Number(process.env.SMTP_PORT) || 465,
          secure: true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const mailOptions = {
          from: `"Organic Mushroom Farm" <${process.env.SMTP_USER}>`,
          to: `${process.env.SMTP_USER}, ${email}`,
          subject: `Registration Confirmed [${regId}] - ${trainingName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
              <div style="background: linear-gradient(135deg, #7c3aed, #0284c7, #059669); padding: 24px; border-radius: 12px 12px 0 0; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 22px;">🍄 Organic Mushroom Farm</h1>
                <p style="margin: 6px 0 0; opacity: 0.9;">New Training Registration Slip</p>
                <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 6px 14px; border-radius: 20px; font-weight: bold; margin-top: 10px;">
                  Reg ID: ${regId}
                </div>
              </div>

              <div style="padding: 24px; background: #ffffff; border: 1px solid #e2e8f0; border-top: none;">
                <h3 style="color: #4f46e5; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px;">1. Customer Details</h3>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>WhatsApp / Phone:</strong> ${phone}</p>
                <p><strong>Email Address:</strong> ${email}</p>
                <p><strong>Location:</strong> ${city}, ${district ? `${district}, ` : ""}${state} - ${pincode || "N/A"}</p>
                <p><strong>Full Address:</strong> ${fullAddress || "N/A"}</p>

                <h3 style="color: #4f46e5; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px; margin-top: 20px;">2. Mushroom Farming Details</h3>
                <p><strong>Currently Farming:</strong> ${currentlyFarming || "N/A"}</p>
                <p><strong>Mushroom Interested:</strong> ${mushroomInterested || "N/A"}</p>
                <p><strong>Experience:</strong> ${experience || "N/A"}</p>
                <p><strong>Existing Setup:</strong> ${hasSetup || "N/A"}</p>
                <p><strong>Planned Investment:</strong> ${investment || "N/A"}</p>

                <h3 style="color: #4f46e5; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px; margin-top: 20px;">3. Training Information</h3>
                <p><strong>Training Program:</strong> ${trainingName}</p>
                <p><strong>Batch Date:</strong> ${trainingDate || "Upcoming Batch"}</p>
                <p><strong>Training Mode:</strong> ${trainingMode || "Online"}</p>
                <p><strong>Training Time:</strong> ${trainingTime}</p>
                <p><strong>Reason for Attending:</strong> ${reason || "N/A"}</p>
                <p><strong>What you want to learn:</strong> ${learningGoals || "N/A"}</p>
                <p><strong>Source:</strong> ${hearAboutUs || "N/A"}</p>
                <p><strong>Submitted At:</strong> ${submissionTime}</p>
              </div>

              <div style="background: #f8fafc; padding: 16px; text-align: center; border-radius: 0 0 12px 12px; font-size: 12px; color: #64748b; border: 1px solid #e2e8f0; border-top: none;">
                For queries or support, contact: +91 91791 26868 | support@organicmushroomfarm.com
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (mailError) {
        console.error("Mail send error (non-fatal):", mailError);
      }
    }

    return NextResponse.json({
      success: true,
      registrationId: regId,
      submittedAt: submissionTime,
      data: {
        fullName,
        phone,
        email,
        city,
        state,
        trainingName,
        trainingDate,
        trainingMode,
      },
    });
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
