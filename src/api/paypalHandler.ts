import nodemailer from "nodemailer";

export const createPayPalOrder = async (req: any, res: any) => {
  try {
    const { amount } = req.body;
    
    // Validate amount
    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "BAA9F1mTzMfsLuGY3cUMK_5-Q4cAq5DMmAbRenFGQs7AtoUEMY27wT_xYSvxh2sbUU8_wZRleyx7M4qMjg";
    const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "ED-9zp54Zlm8uSN7ylvtiM7V1Cr8us3eq4fsJHV_8cjuTo-uD4NT2md7CN3eS0nBXbivmep5IgIW5-mW";
    const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE || "https://api-m.paypal.com";

    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET || !PAYPAL_API_BASE) {
       console.error("PayPal environment variables are missing");
       return res.status(500).json({ error: "Server PayPal configuration missing" });
    }

    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
    
    // Generate Access Token
    const tokenResponse = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Create Order
    const url = `${PAYPAL_API_BASE}/v2/checkout/orders`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount.toString(),
            },
          },
        ],
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
};

export const capturePayPalOrder = async (req: any, res: any) => {
  try {
    const { orderID } = req.body;
    
    if (!orderID) {
      return res.status(400).json({ error: "orderID is required" });
    }

    const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "BAA9F1mTzMfsLuGY3cUMK_5-Q4cAq5DMmAbRenFGQs7AtoUEMY27wT_xYSvxh2sbUU8_wZRleyx7M4qMjg";
    const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "ED-9zp54Zlm8uSN7ylvtiM7V1Cr8us3eq4fsJHV_8cjuTo-uD4NT2md7CN3eS0nBXbivmep5IgIW5-mW";
    const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE || "https://api-m.paypal.com";
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
    
    // Generate Access Token
    const tokenResponse = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Capture Order
    const url = `${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to capture order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
};

export const handlePayPalWebhook = async (req: any, res: any) => {
  const webhookEvent = req.body;
  console.log("PayPal Webhook Received:", webhookEvent?.event_type);
  
  if (webhookEvent?.event_type === "CHECKOUT.ORDER.APPROVED" || webhookEvent?.event_type === "PAYMENT.CAPTURE.COMPLETED") {
    console.log("Payment approved via Webhook!");
    
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
          pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
        },
      });

      const resource = webhookEvent.resource;
      const amount = resource?.amount?.value || "Unknown";
      const currency = resource?.amount?.currency_code || "USD";
      const payerEmail = resource?.payer?.email_address || "Unknown";
      const payerName = resource?.payer?.name?.given_name || "Someone";

      const mailOptions = {
        from: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        to: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        subject: `New PayPal Payment Received! (${amount} ${currency})`,
        html: `
          <h2>New PayPal Training Payment</h2>
          <p><strong>Customer Name:</strong> ${payerName}</p>
          <p><strong>Customer Email (PayPal):</strong> ${payerEmail}</p>
          <p><strong>Amount:</strong> ${amount} ${currency}</p>
          <p><strong>Transaction ID:</strong> ${resource?.id || "N/A"}</p>
          <p>Please check your PayPal dashboard for full details.</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Admin email notification sent for PayPal payment.");
    } catch (err) {
      console.error("Failed to send PayPal webhook email:", err);
    }
  }
  
  res.status(200).send("Webhook Received");
};
