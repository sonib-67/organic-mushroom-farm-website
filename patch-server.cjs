const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const regex = /app\.post\("\/api\/chat"[\s\S]*?\}\);/g;

const replacement = `app.post("/api/chat", express.json(), async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) return res.status(400).json({ error: "Message required" });

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const SYSTEM_PROMPT = \`You are a helpful, expert AI assistant for "Organic Mushroom Farm". 
Your job is to answer user queries based on the website context.
- We provide Expert Mushroom Farming Training & Setup.
- Specialized programs for India (INR) and USA & Global (USD).
- Basic Cultivation Training: $39 / ₹299 (Oyster & Button home setup).
- Advanced Commercial Training: $97 / ₹699 (Farm layout, HVAC, high-yield, sales).
- We offer Spawn, Turnkey Setup, Compost Bags, Fresh Mushrooms.
- Keep responses short (1-2 sentences), polite, and directly address mushroom farming for ultra-fast chat speed.
- Please refer users to Book a Consultant for specific inquiries.\`;

    let fullPrompt = "System: " + SYSTEM_PROMPT + "\\n\\n";
    for (const msg of history || []) {
      fullPrompt += (msg.role === "user" ? "User: " : "Assistant: ") + msg.text + "\\n";
    }
    fullPrompt += "User: " + message + "\\nAssistant:";

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: fullPrompt,
      config: {
        maxOutputTokens: 150,
        temperature: 0.5,
      }
    });

    return res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error.message, error.stack, process.env.GEMINI_API_KEY ? "KEY EXISTS" : "KEY MISSING");
    return res.status(500).json({ error: "Failed to connect to AI" });
  }
});`;

code = code.replace(regex, replacement);
fs.writeFileSync('server.ts', code);
