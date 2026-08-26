import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";

// Reusable Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
    pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
  },
});

// Helper to generate Invoice PDF in memory
const generateInvoice = (data: any): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      const buffers: Buffer[] = [];
      doc.on("data", buffers.push.bind(buffers));
      doc.on("end", () => resolve(Buffer.concat(buffers)));
      doc.on("error", reject);

      // Invoice Design
      doc.fontSize(24).text("Organic Mushroom Farm", { align: "center" });
      doc.fontSize(10).text("Katangi Road, Jabalpur, MP, India", { align: "center" });
      doc.text("Email: organicmushroomsfarms@gmail.com", { align: "center" });
      
      doc.moveDown(2);
      doc.fontSize(20).text("OFFICIAL INVOICE", { align: "center", underline: true });
      doc.moveDown(1.5);

      doc.fontSize(12).text(`Date: ${new Date().toLocaleDateString()}`);
      doc.text(`Transaction ID: ${data.orderID || "N/A"}`);
      doc.moveDown();

      doc.fontSize(14).text("Billed To:", { underline: true });
      doc.fontSize(12).text(`Name: ${data.name}`);
      doc.text(`Email: ${data.email}`);
      doc.text(`Phone: ${data.phone}`);
      doc.moveDown();

      doc.fontSize(14).text("Order Details:", { underline: true });
      doc.fontSize(12).text(`Description: ${data.planName}`);
      doc.text(`Amount Paid: $${data.amount} USD`);
      doc.text(`Status: PAID`);
      
      doc.moveDown(3);
      doc.fontSize(10).text("Thank you for choosing Organic Mushroom Farm Training!", { align: "center" });
      doc.text("This is an electronically generated invoice.", { align: "center" });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
};

const getPayPalAccessToken = async () => {
  const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "BAA9F1mTzMfsLuGY3cUMK_5-Q4cAq5DMmAbRenFGQs7AtoUEMY27wT_xYSvxh2sbUU8_wZRleyx7M4qMjg";
  const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "ED-9zp54Zlm8uSN7ylvtiM7V1Cr8us3eq4fsJHV_8cjuTo-uD4NT2md7CN3eS0nBXbivmep5IgIW5-mW";
  const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE || "https://api-m.paypal.com";
  
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: { Authorization: `Basic ${auth}` },
  });
  const data = await response.json();
  return { accessToken: data.access_token, apiBase: PAYPAL_API_BASE };
};

// 1. Create Order & Send "Initiated" Mail
export const createIntlOrder = async (req: any, res: any) => {
  try {
    const { amount, name, email, phone, planName } = req.body;
    
    if (!amount || !name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { accessToken, apiBase } = await getPayPalAccessToken();

    const response = await fetch(`${apiBase}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{ amount: { currency_code: "USD", value: amount.toString() } }],
      }),
    });

    const data = await response.json();

    // Send "Initiated" Email to Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
      to: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
      subject: `Payment INITIATED: ${name} (${planName})`,
      html: `
        <h3>New International Payment Initiated (PayPal)</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Plan:</strong> ${planName}</p>
        <p><strong>Amount:</strong> $${amount} USD</p>
        <p><em>Status: Waiting for user to complete PayPal checkout...</em></p>
      `
    }).catch(console.error);

    res.json(data);
  } catch (error) {
    console.error("Create Intl Order Error:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

// 2. Capture Order & Send "Success" Mails + PDF
export const captureIntlOrder = async (req: any, res: any) => {
  try {
    const { orderID, amount, name, email, phone, planName } = req.body;

    if (!orderID) return res.status(400).json({ error: "orderID required" });

    const { accessToken, apiBase } = await getPayPalAccessToken();

    const response = await fetch(`${apiBase}/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (data.status === "COMPLETED") {
      // Generate PDF
      const pdfBuffer = await generateInvoice({ orderID, amount, name, email, phone, planName });

      // Send "Done" Email to Admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        to: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        subject: `Payment SUCCESS: ${name} ($${amount})`,
        html: `
          <h3 style="color: green;">International Payment Successful!</h3>
          <p><strong>Transaction ID:</strong> ${orderID}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Plan:</strong> ${planName}</p>
          <p><strong>Amount:</strong> $${amount} USD</p>
          <p>The PDF invoice has been generated and sent to the user.</p>
        `
      }).catch(console.error);

      // Send "Done" Email to User with PDF
      await transporter.sendMail({
        from: `"Organic Mushroom Farm" <${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>`,
        to: email,
        subject: `Payment Successful - Welcome to Organic Mushroom Farm Training!`,
        html: `
          <h3>Welcome, ${name}!</h3>
          <p>Your payment of $${amount} for <strong>${planName}</strong> was successful.</p>
          <p>Your transaction ID is: <strong>${orderID}</strong></p>
          <p>Please find your official invoice attached to this email as a PDF.</p>
          <p>We will contact you shortly with the next steps for your training.</p>
          <br/>
          <p>Best Regards,</p>
          <p>Organic Mushroom Farm Team</p>
        `,
        attachments: [
          {
            filename: `Invoice_${orderID}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf'
          }
        ]
      }).catch(console.error);
    }

    res.json(data);
  } catch (error) {
    console.error("Capture Intl Order Error:", error);
    res.status(500).json({ error: "Failed to capture order" });
  }
};

// 3. Failed/Cancelled Order Notification
export const failIntlOrder = async (req: any, res: any) => {
  try {
    const { name, email, phone, planName, errorMsg } = req.body;
    
    // Notify Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
      to: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
      subject: `Payment FAILED/CANCELLED: ${name}`,
      html: `
        <h3 style="color: red;">International Payment Failed</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Plan:</strong> ${planName}</p>
        <p><strong>Reason/Error:</strong> ${errorMsg || "User cancelled or card declined"}</p>
      `
    }).catch(console.error);

    // Notify User
    if (email) {
      await transporter.sendMail({
        from: `"Organic Mushroom Farm" <${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>`,
        to: email,
        subject: `Payment Attempt Failed - Organic Mushroom Farm`,
        html: `
          <p>Hi ${name},</p>
          <p>We noticed your recent payment attempt for <strong>${planName}</strong> was not completed or failed.</p>
          <p>If you faced any technical issues, please let us know or try again.</p>
          <p>Best Regards,<br/>Organic Mushroom Farm Team</p>
        `
      }).catch(console.error);
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Fail Intl Order Error:", error);
    res.status(500).json({ error: "Failed to process fail notification" });
  }
};
