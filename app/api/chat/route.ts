import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

const SYSTEM_PROMPT = `
You are the official AI Assistant for Organic Mushroom Farm.

BUSINESS INFORMATION
--------------------
Business Name: Organic Mushroom Farm
Owner: Tanish Soni
Address: Jabalpur, Madhya Pradesh, India
Contact / WhatsApp: +91 9203544140

The business provides mushroom farming education, spawn, consultancy,
commercial farm setup and related mushroom farming support.

MAIN SERVICES
-------------
1. Mushroom Farming Training (Online & Offline)
2. Oyster Mushroom Training
3. Button Mushroom Training
4. Milky Mushroom Training
5. Mushroom Spawn (High-yield F1 Lab Grade)
6. Mushroom Farm Setup & Turnkey Projects
7. Commercial Mushroom Farm Consultancy
8. Business Planning & ROI Guidance
9. Marketing Support & Buyback Guidance
10. Spawn Laboratory Guidance

MUSHROOMS COVERED
-----------------
- Oyster Mushroom (Dhingri)
- Button Mushroom
- Milky Mushroom
- Shiitake Mushroom
- Reishi / Ganoderma
- Lion's Mane
- Cordyceps

TRAINING & PRICING
------------------
- Live Masterclass Training (India): ₹199 (Basic) / ₹499 (Advanced with 1-Year Support & Certification)
- International Online Training: $39 (Basic) / $97 (Advanced)
- For custom farm setup or lab guidance, invite the user to connect on WhatsApp (+91 9203544140).

IMPORTANT BUSINESS RULES
------------------------
- Provide direct, helpful, practical step-by-step guidance on mushroom cultivation.
- Answer in the same language as the user (Hindi, Hinglish, or English).
- If asked about contact or WhatsApp, provide +91 9203544140.
- If asked about location, state Jabalpur, Madhya Pradesh, India.
- If asked about owner, state Tanish Soni.
`;

// Helper fallback for domain responses if API key is not yet set or during network failovers
function generateFallbackResponse(userMessage: string): string {
  const query = userMessage.toLowerCase();

  if (query.includes("spawn") || query.includes("seed") || query.includes("beej") || query.includes("spwan")) {
    return `**🍄 High-Yield F1 Mushroom Spawn Supply:**\n\nHum provide karte hain premium lab-tested F1 spawn:\n- **Oyster Mushroom Spawn** (₹90 - ₹120 / kg)\n- **Button Mushroom Spawn** (₹110 - ₹140 / kg)\n- **Milky Mushroom Spawn** (₹100 - ₹130 / kg)\n- **Medicinal Spawn** (Shiitake, Reishi, Lion's Mane)\n\n📍 **Order / Booking:** Pan-India delivery available. Booking ke liye WhatsApp karein: **+91 9203544140** ya website par order place karein.`;
  }

  if (query.includes("training") || query.includes("course") || query.includes("class") || query.includes("sikhna") || query.includes("fee") || query.includes("price") || query.includes("cost")) {
    return `**🎓 Organic Mushroom Farm Training Programs:**\n\n1. **Basic Online Training (₹199 / $39 USD):**\n   - Oyster & Button basics, substrate preparation, sterilization, climate control, harvesting.\n\n2. **Advanced Commercial Masterclass (₹499 / $97 USD):**\n   - A-to-Z Commercial Farm Setup, Disease & Pest Management, Climate Automation, Marketing & 1-Year Handholding Support.\n\n👉 Aap website ke **"Live Training"** / **"Enroll Now"** button se register kar sakte hain ya direct WhatsApp (**+91 9203544140**) par contact kar sakte hain!`;
  }

  if (query.includes("setup") || query.includes("cost") || query.includes("investment") || query.includes("farm") || query.includes("shed") || query.includes("kheti")) {
    return `**🏗️ Mushroom Farm Setup & Investment Guide:**\n\n- **Small / Home Scale (10x10 ft room):** ₹10,000 - ₹25,000 investment. Monthly earning ~₹15,000 - ₹25,000.\n- **Semi-Commercial Unit (500-1000 bags):** ₹50,000 - ₹1.5 Lakh.\n- **Commercial Climate Controlled Farm (AC Button Mushroom):** ₹5 Lakh - ₹25 Lakh+ depending on capacity.\n\nHum complete **Turnkey Project & Consultancy** provide karte hain (Racks, Foggers, Temperature Control, Substrate Machinery). Detailed project plan ke liye WhatsApp par connect karein: **+91 9203544140**.`;
  }

  if (query.includes("temp") || query.includes("humidity") || query.includes("moisture") || query.includes("climate") || query.includes("tapman")) {
    return `**🌡️ Ideal Climate Conditions for Mushroom Cultivation:**\n\n- **Oyster Mushroom:** Temp 20°C - 28°C | Humidity 80% - 90% (Easy to grow in normal room)\n- **Button Mushroom:** Spawn run 22°C - 25°C, Fruiting 14°C - 18°C | Humidity 85% - 90%\n- **Milky Mushroom:** Temp 28°C - 35°C | Humidity 80% - 85% (Ideal for summer season)\n\nVentilation (Fresh Air Exchange) aur indirect light fruiting time par zaroori hoti hai.`;
  }

  if (query.includes("contact") || query.includes("number") || query.includes("phone") || query.includes("whatsapp") || query.includes("address") || query.includes("location") || query.includes("kaha")) {
    return `**📍 Contact & Location Details:**\n\n- **Business Name:** Organic Mushroom Farm\n- **Owner:** Tanish Soni\n- **Location:** Jabalpur, Madhya Pradesh, India\n- **WhatsApp / Call:** **+91 9203544140**\n- **Email:** organicmushroomsfarms@gmail.com\n\nAap kisi bhi waqt training, spawn order ya farm setup guidance ke liye contact kar sakte hain!`;
  }

  return `**Namaste! Welcome to Organic Mushroom Farm.** 🍄\n\nMain aapki help kar sakta hoon:\n- 🌾 **High-Yield F1 Spawn Supply** (Oyster, Button, Milky, Shiitake)\n- 🎓 **Live Training Masterclasses** (Basic ₹199 / Advanced ₹499)\n- 🏗️ **Commercial Farm Setup & Turnkey Projects**\n- 🌡️ **Temperature, Humidity & Substrate SOPs**\n\nAap apna sawal poochhein ya direct hamare head consultant se WhatsApp par baat karein: **+91 9203544140** (Jabalpur, MP).`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message =
      typeof body?.message === "string"
        ? body.message.trim()
        : "";

    const history = Array.isArray(body?.history)
      ? body.history
      : [];

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const ai = getGeminiClient();

    // If Gemini client is available, call gemini-3.8-flash
    if (ai) {
      try {
        const recentHistory = history.slice(-10);

        const conversation = recentHistory
          .map((msg: any) => {
            const role = msg?.role === "assistant" ? "Assistant" : "User";
            const text =
              typeof msg?.text === "string" ? msg.text.slice(0, 3000) : "";
            return `${role}: ${text}`;
          })
          .join("\n");

        const fullPrompt = `
${SYSTEM_PROMPT}

CONVERSATION HISTORY
--------------------
${conversation || "No previous conversation."}

CURRENT USER MESSAGE
--------------------
User: ${message}

Assistant:
`;

        const responseStream = await ai.models.generateContentStream({
          model: "gemini-3.8-flash",
          contents: fullPrompt,
          config: {
            maxOutputTokens: 800,
          },
        });

        const encoder = new TextEncoder();

        const readableStream = new ReadableStream({
          async start(controller) {
            try {
              let hasEmitted = false;
              for await (const chunk of responseStream) {
                const text = chunk.text || "";
                if (text) {
                  hasEmitted = true;
                  controller.enqueue(encoder.encode(text));
                }
              }

              if (!hasEmitted) {
                const fallback = generateFallbackResponse(message);
                controller.enqueue(encoder.encode(fallback));
              }

              controller.close();
            } catch (error) {
              console.error("Gemini streaming error inside readableStream:", error);
              const fallback = generateFallbackResponse(message);
              controller.enqueue(encoder.encode(fallback));
              controller.close();
            }
          },
        });

        return new Response(readableStream, {
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "X-Content-Type-Options": "nosniff",
          },
        });
      } catch (geminiError) {
        console.warn("Gemini generation failed, using intelligent fallback response:", geminiError);
      }
    }

    // Fallback streaming response if Gemini is unreachable or key not present
    const fallbackText = generateFallbackResponse(message);
    const encoder = new TextEncoder();

    const fallbackStream = new ReadableStream({
      async start(controller) {
        const words = fallbackText.split(" ");
        for (let i = 0; i < words.length; i += 3) {
          const chunk = words.slice(i, i + 3).join(" ") + (i + 3 < words.length ? " " : "");
          controller.enqueue(encoder.encode(chunk));
          await new Promise((resolve) => setTimeout(resolve, 20));
        }
        controller.close();
      },
    });

    return new Response(fallbackStream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error: any) {
    console.error("Chat route critical error:", error);

    const fallbackText = generateFallbackResponse("help");
    return new Response(fallbackText, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}