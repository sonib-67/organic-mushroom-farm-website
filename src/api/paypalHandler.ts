export const createPayPalOrder = async (req: any, res: any) => {
  try {
    const { amount } = req.body;
    
    // Validate amount
    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_API_BASE } = process.env;
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

    const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_API_BASE } = process.env;
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
  
  if (webhookEvent?.event_type === "CHECKOUT.ORDER.APPROVED") {
    console.log("Payment approved via Webhook!");
  }
  
  res.status(200).send("Webhook Received");
};
