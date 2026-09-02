import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { message, history, timezone } = await req.json();
    if (!message) {
      return NextResponse.json({ error: 'Message required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is not configured on the server.' }, { status: 500 });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const isIndia = timezone && timezone.toLowerCase().includes('asia/calcutta');
    const currency = isIndia ? 'INR' : 'USD';
    const basicPrice = isIndia ? '₹299' : '$39';
    const advancedPrice = isIndia ? '₹699' : '$97';
    const paymentLink = isIndia
      ? 'https://rzp.io/l/your-razorpay-link (Please visit the Training section on our website to pay securely via Razorpay)'
      : 'https://stripe.com/pay-link (Please visit the Training section on our website to pay securely via Stripe)';

    const SYSTEM_PROMPT = `You are a helpful, friendly, and highly capable AI assistant representing "Organic Mushroom Farm".

While your primary expertise is in Mushroom Farming (Oyster, Button, Cordyceps, Milky, etc.) and you represent our business, YOU HAVE FULL FREEDOM to answer ANY general questions the user asks, just like a standard AI assistant (like Gemini). Be helpful, chatty, and conversational on any topic they bring up.

IMPORTANT: You MUST respond with PLAIN TEXT only. NEVER output your response wrapped in JSON format (e.g. no {"text": "..."}). Do not use markdown code blocks for your conversational replies. Just output the raw conversational text.

BUSINESS KNOWLEDGE BASE (Use this if asked about us):
- Business Name: Organic Mushroom Farm (or Organic Mushrooms Farm)
- Founder / Lead Engineer: Tanish Soni (Agri-Tech Expert)
- Location & Address: Katangi Road, Jabalpur, Madhya Pradesh, India
- Phone / WhatsApp: +91 9203544140
- Email: organicmushroomsfarms@gmail.com
- Core Services: Expert Mushroom Farming Training & Setup, Spawn (Seeds) delivery including F1 Disease-Resistant Spawn, Turnkey Setup, Compost Bags, and Fresh Mushrooms.
- The user is detected to be in ${isIndia ? 'India' : 'an International Location'}. Always quote prices in ${currency}.
- Basic Cultivation Training: ${basicPrice} (Oyster & Button home setup).
- Advanced Commercial Training: ${advancedPrice} (Farm layout, HVAC, high-yield, sales).
- Payment link / Next steps: If the user asks to pay for training, give them this direction: ${paymentLink}

LEAD GENERATION / BOOKING CONSULTANT:
- If a user wants to "Book a consultant" or "Join training", tell them to please email us at organicmushroomsfarms@gmail.com or call our expert at +91 9203544140.
- Keep responses short, polite, and helpful.`;

    const contents: any[] = [];
    contents.push({ role: 'user', parts: [{ text: SYSTEM_PROMPT }] });
    contents.push({ role: 'model', parts: [{ text: 'Understood. I am ready.' }] });

    for (const msg of history || []) {
      let cleanText = msg.text;
      while (cleanText.trim().startsWith('{') && cleanText.trim().endsWith('}')) {
        try {
          const parsed = JSON.parse(cleanText);
          if (parsed.text) {
            cleanText = parsed.text;
          } else {
            break;
          }
        } catch {
          break;
        }
      }

      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: cleanText }],
      });
    }

    contents.push({ role: 'user', parts: [{ text: message }] });

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3.7-flash',
      contents: contents,
      config: {
        temperature: 0.4,
      },
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            if (chunk.text) {
              controller.enqueue(encoder.encode(chunk.text));
            }
          }
          controller.close();
        } catch (streamErr) {
          controller.error(streamErr);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error: any) {
    console.error('Gemini API Error in Next.js API route:', error?.message || error);
    if (error?.message && error.message.includes('429')) {
      return NextResponse.json(
        { error: 'I am receiving too many messages right now. Please wait 30 seconds and try again.' },
        { status: 429 }
      );
    }
    return NextResponse.json({ error: 'Failed to connect to AI' }, { status: 500 });
  }
}
