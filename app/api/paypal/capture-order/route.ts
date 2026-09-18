import { NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";
import client from "@/lib/paypal";
import { sendTrainingEmailService } from "@/lib/trainingMailService";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      orderID,
      email,
      name,
      phone,
    } = body;

    // Validate PayPal Order ID
    if (!orderID || typeof orderID !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing PayPal order ID" },
        { status: 400 }
      );
    }

    // Capture PayPal order
    const request = new paypal.orders.OrdersCaptureRequest(orderID);

    request.requestBody({});

    const response = await client.execute(request);

    const order = response.result;

    // Payment must be completed
    if (order?.status !== "COMPLETED") {
      console.error("PayPal payment not completed:", order);

      return NextResponse.json(
        {
          success: false,
          error: "Payment was not completed",
          status: order?.status,
        },
        { status: 400 }
      );
    }

    // Get actual amount from PayPal response
    const purchaseUnit = order?.purchase_units?.[0];

    const capturedAmount =
      purchaseUnit?.payments?.captures?.[0]?.amount?.value ||
      purchaseUnit?.amount?.value ||
      "0";

    const capturedCurrency =
      purchaseUnit?.payments?.captures?.[0]?.amount?.currency_code ||
      purchaseUnit?.amount?.currency_code ||
      "USD";

    const captureId =
      purchaseUnit?.payments?.captures?.[0]?.id || order?.id;

    console.log("PayPal Payment Completed:", {
      orderID,
      captureId,
      amount: capturedAmount,
      currency: capturedCurrency,
      email,
    });

    // Email is secondary.
    // If email service fails, DO NOT mark the PayPal payment as failed.
    try {
      await sendTrainingEmailService({
        type: "SUCCESS",
        customerEmail: email,
        customerName: name,
        customerPhone: phone,
        amount: capturedAmount,
        currency: capturedCurrency,
        paymentId: captureId,
        orderId: orderID,
      });
    } catch (emailError) {
      console.error(
        "Payment successful but training email failed:",
        emailError
      );
    }

    // IMPORTANT: Payment is successful
    return NextResponse.json({
      success: true,
      paymentStatus: "COMPLETED",
      orderId: orderID,
      paymentId: captureId,
      amount: capturedAmount,
      currency: capturedCurrency,
    });
  } catch (error: any) {
    console.error("PayPal Order capture failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to capture PayPal order",
        details:
          process.env.NODE_ENV === "development"
            ? error?.message
            : undefined,
      },
      { status: 500 }
    );
  }
}