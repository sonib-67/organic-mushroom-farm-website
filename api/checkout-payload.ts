import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { name, mobile, email, productType } = req.body;

    let amount = 0;
    let purpose = "";

    if (productType === "training") {
      amount = 29900;
      purpose = "Mushroom Farming Masterclass Training";
    } else if (productType === "consultation") {
      amount = 5900;
      purpose = "Expert 1-on-1 Business Consultation Slot";
    } else {
      return res.status(400).json({ error: "Invalid productType" });
    }

    // In Vercel, access process.env.RAZORPAY_KEY_ID or fallback to hardcoded
    const key_id = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_Ssg7Eepps3J0ch";

    const payload = {
      key_id: key_id,
      amount: amount,
      currency: "INR",
      name: "Organic Mushroom Farm",
      description: purpose,
      prefill: {
        name: name || "",
        email: email || "",
        contact: mobile || ""
      },
      notes: {
        product: purpose
      },
      theme: {
        color: "#25D366"
      }
    };

    res.status(200).json(payload);
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
