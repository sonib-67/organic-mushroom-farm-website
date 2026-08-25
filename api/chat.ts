import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `You are a helpful, expert AI assistant for "Organic Mushroom Farm". Your job is to answer user queries based on the website's context.
Core Information about Organic Mushroom Farm:
- We provide Expert Mushroom Farming Training & Setup.
- We have specialized programs for India (INR) and USA & Global (USD).
- Basic Cultivation Training: $39 (USA/Global) / ₹299 (India). Ideal for Beginners & Hobbyists. Covers Oyster & Button home setup, substrate boiling, basic sterilization, and simple climate control.
- Advanced Commercial Training: $97 (USA/Global) / ₹699 (India). Ideal for Entrepreneurs & Commercial Growers. Covers everything in Basic plus advanced guides, farm layout, HVAC setup, high-yield varieties, pest management, sales strategies, and community access.
- We also offer Spawn (Seed), Setup (Turnkey solutions), Compost Bags, and Fresh Mushrooms (Market).
- Contact: Users can Book a Consultant via the website.

Guidelines:
- Be polite, extremely concise, and highly encouraging.
- Answer questions directly related to mushroom farming, our training programs, and pricing.
- Keep responses short (1-2 sentences maximum) for ultra-fast chat speed.
- If asked about something not provided, politely clarify what we offer.
- Please refer users to Book a Consultant for specific inquiries.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { message, history } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    let fullPrompt = `System: ${SYSTEM_PROMPT}\n\n`;
    for (const msg of history || []) {
      fullPrompt += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.text}\n`;
    }
    fullPrompt += `User: ${message}\nAssistant:`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: fullPrompt,
      config: {
        maxOutputTokens: 800, // Limits the output length to ensure extremely fast generation
        temperature: 0.5, // Keeps responses focused and less creative, slightly faster
      }
    });

    return res.status(200).json({
      text: response.text,
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: 'An error occurred while communicating with the AI.' });
  }
}
