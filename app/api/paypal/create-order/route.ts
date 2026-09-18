import { NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";
import client from "@/lib/paypal";
import { sendTrainingEmailService } from "@/lib/trainingMailService";

// Server-side trusted PayPal pricing
const PAYPAL_PLANS: Record<
  string,
  {
    price: number;
    name: string;
  }
> = {
  "39": {
    price: 39,
    name: "Basic Mushroom Farming Training",
  },

  "97": {
    price: 97,
    name: "Advanced Mushroom Farming Training",
  },

  "basic": {
    price: 39,
    name: "Basic Mushroom Farming Training",
  },

  "basic-us": {
    price: 39,
    name: "Basic Mushroom Farming Training",
  },

  "advanced": {
    price: 97,
    name: "Advanced Mushroom Farming Training",
  },

  "advanced-us": {
    price: 97,
    name: "Advanced Mushroom Farming Training",
  },
};

function resolvePlan(planIdentifier?: string | null) {
  if (!planIdentifier) {
    return null;
  }

  const id = planIdentifier.toLowerCase().trim();

  return PAYPAL_PLANS[id] || null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      planId,
      productId,
      courseId,
      type,
      planName,
      email,
      name,
      phone,
    } = body;

    // Find requested plan
    const requestedPlan =
      planId ||
      productId ||
      courseId ||
      type ||
      planName;

    const resolvedPlan = resolvePlan(requestedPlan);

    // Reject anything other than $39 / $97 plans
    if (!resolvedPlan) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid PayPal plan. Only $39 and $97 plans are available.",
        },
        { status: 400 }
      );
    }

    // IMPORTANT:
    // Price comes ONLY from server-side pricing.
    // Never trust amount sent from frontend.
    const trustedAmount = resolvedPlan.price;

    // Create PayPal order
    const request = new paypal.orders.OrdersCreateRequest();

    request.prefer("return=representation");

    request.requestBody({
      intent: "CAPTURE",

      purchase_units: [
        {
          description: resolvedPlan.name,

          amount: {
            currency_code: "USD",
            value: trustedAmount.toFixed(2),
          },
        },
      ],
    });

    const response = await client.execute(request);

    const orderId = response.result?.id;

    if (!orderId) {
      console.error(
        "PayPal did not return an order ID:",
        response.result
      );

      return NextResponse.json(
        {
          success: false,
          error: "PayPal order creation failed",
        },
        { status: 500 }
      );
    }

    console.log("PayPal order created:", {
      orderId,
      plan: resolvedPlan.name,
      amount: trustedAmount,
      currency: "USD",
      email,
    });

    // Send initiated email.
    // Email failure should NOT break PayPal order creation.
    try {
      await sendTrainingEmailService({
        type: "INITIATED",
        customerEmail: email,
        customerName: name,
        customerPhone: phone,
        amount: trustedAmount.toString(),
        currency: "USD",
        planTitle: resolvedPlan.name,
        orderId,
      });
    } catch (emailError) {
      console.error(
        "PayPal order created but initiated email failed:",
        emailError
      );
    }

    return NextResponse.json({
      success: true,
      id: orderId,
      orderId,
      amount: trustedAmount,
      currency: "USD",
      planName: resolvedPlan.name,
    });
  } catch (error: any) {
    console.error("PayPal Order creation failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create PayPal order",
        details:
          process.env.NODE_ENV === "development"
            ? error?.message
            : undefined,
      },
      { status: 500 }
    );
  }
}