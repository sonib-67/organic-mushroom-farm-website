import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, mobile, email, productType, preferredDate } = body;

    let amount = 5900; // default ₹59
    let purpose = "Expert 1-on-1 Business Consultation Slot";

    if (productType === "training" || productType === "training_basic") {
      amount = 29900;
      purpose = "Basic Mushroom Cultivation Training";
    } else if (productType === "training_advanced") {
      amount = 69900;
      purpose = "Advanced Commercial Cultivation Training";
    } else if (productType === "workshop") {
      amount = 19900;
      purpose = "Organic Mushroom Farming Workshop";
    } else if (productType === "consultation") {
      amount = 5900;
      purpose = "Expert 1-on-1 Business Consultation Slot";
    } else if (productType === "site_visit_consultation") {
      amount = 50000;
      purpose = "On Site Visit Consultation Slot";
    } else if (typeof productType === "string" && productType.includes("spawn")) {
      amount = 99900;
      purpose = "Spawn Purchase";
    } else if (typeof productType === "string" && productType.includes("mushroom")) {
      amount = 49900;
      purpose = "Fresh / Dry Mushroom Purchase";
    }

    const keyId = process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID || 'rzp_live_default';
    const keySecret = process.env.RAZORPAY_KEY_SECRET || 'rzp_live_secret';

    let orderId = `order_${Date.now()}`;

    // Initialize Razorpay client securely if secret is available
    if (keySecret && keySecret !== 'rzp_live_secret') {
      try {
        const razorpay = new Razorpay({
          key_id: keyId,
          key_secret: keySecret,
        });

        const options = {
          amount: amount,
          currency: "INR",
          receipt: `rct_${Date.now()}`,
          notes: {
            productType: productType || "consultation",
            customerName: name || "",
            customerEmail: email || "",
            customerPhone: mobile || "",
            preferredDate: preferredDate || ""
          }
        };

        const order = await razorpay.orders.create(options);
        if (order && order.id) {
          orderId = order.id;
        }
      } catch (err) {
        console.warn("Razorpay API order creation warning, using fallback order ID:", err);
      }
    }

    return NextResponse.json({
      order_id: orderId,
      amount: amount,
      currency: "INR",
      key_id: keyId,
      name: "Organic Mushrooms Farm",
      description: purpose,
      prefill: {
        name: name || "",
        email: email || "",
        contact: mobile || ""
      },
      notes: {
        productType: productType || "consultation",
        customerName: name || "",
        customerEmail: email || "",
        customerPhone: mobile || "",
        preferredDate: preferredDate || ""
      },
      theme: { color: "#25D366" }
    });
  } catch (error: any) {
    console.error("Error in /api/start-session:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create order" },
      { status: 500 }
    );
  }
}
