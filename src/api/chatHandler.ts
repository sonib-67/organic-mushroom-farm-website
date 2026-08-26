import OpenAI from "openai";
import nodemailer from "nodemailer";

export const handleChat = async (req: any, res: any) => {
  try {
    const { message, history, timezone } = req.body;
    if (!message) return res.status(400).json({ error: "Message required" });

    const grokKey = process.env.GROK_API_KEY;
    if (!grokKey) {
      console.error("GROK_API_KEY is missing from environment variables.");
      return res.status(500).json({ error: "API Key configuration missing on server." });
    }
    
    const openai = new OpenAI({
      apiKey: grokKey,
      baseURL: "https://api.x.ai/v1",
    });
        
    const isIndia = timezone && timezone.toLowerCase().includes("asia/calcutta");
    const currency = isIndia ? "INR" : "USD";
    const basicPrice = isIndia ? "₹299" : "$39";
    const advancedPrice = isIndia ? "₹699" : "$97";
    const paymentLink = isIndia 
      ? "https://rzp.io/l/your-razorpay-link (Please visit the Training section on our website to pay securely via Razorpay)"
      : "https://stripe.com/pay-link (Please visit the Training section on our website to pay securely via Stripe)";

    const SYSTEM_PROMPT = `You are a helpful, friendly, and highly capable AI assistant representing "Organic Mushroom Farm".

While your primary expertise is in Mushroom Farming (Oyster, Button, Cordyceps, Milky, etc.) and you represent our business, YOU HAVE FULL FREEDOM to answer ANY general questions the user asks, just like a standard AI assistant (like Grok). Be helpful, chatty, and conversational on any topic they bring up.

IMPORTANT: You MUST respond with PLAIN TEXT only. NEVER output your response wrapped in JSON format (e.g. no {"text": "..."}). Do not use markdown code blocks for your conversational replies. Just output the raw conversational text.

BUSINESS KNOWLEDGE BASE (Use this if asked about us):
- Business Name: Organic Mushroom Farm (or Organic Mushrooms Farm)
- Founder / Lead Engineer: Tanish Soni (Agri-Tech Expert)
- Location & Address: Katangi Road, Jabalpur, Madhya Pradesh, India
- Phone / WhatsApp: +91 9203544140
- Email: organicmushroomsfarms@gmail.com
- Core Services: Expert Mushroom Farming Training & Setup, Spawn (Seeds) delivery including F1 Disease-Resistant Spawn, Turnkey Setup, Compost Bags, and Fresh Mushrooms.
- The user is detected to be in ${isIndia ? "India" : "an International Location"}. Always quote prices in ${currency}.
- Basic Cultivation Training: ${basicPrice} (Oyster & Button home setup).
- Advanced Commercial Training: ${advancedPrice} (Farm layout, HVAC, high-yield, sales).
- Payment link / Next steps: If the user asks to pay for training, give them this direction: ${paymentLink}

LEAD GENERATION / BOOKING CONSULTANT:
- If a user wants to "Book a consultant" or "Join training", tell them to please email us at organicmushroomsfarms@gmail.com or call our expert at +91 9203544140.
- Keep responses short, polite, and helpful.`;

    const messages = [];
    messages.push({ role: "system", content: SYSTEM_PROMPT });
    
    for (const msg of history || []) {
      messages.push({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.text
      });
    }
    messages.push({ role: "user", content: message });

    const responseStream = await openai.chat.completions.create({
      model: "grok-beta",
      messages: messages as any,
      stream: true,
      temperature: 0.4,
    });

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    for await (const chunk of responseStream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        res.write(content);
      }
    }
    res.end();
  } catch (error: any) {
    console.error("Grok API Error:", error.message, error.stack);
    if (!res.headersSent) {
      if (error.message && error.message.includes("429")) {
        return res.status(429).json({ error: "I am receiving too many messages right now. Please wait 30 seconds and try again." });
      }
      return res.status(500).json({ error: "Failed to connect to AI" });
    } else {
      res.write("\n[Connection error. Please try again later.]");
      res.end();
    }
  }
};
