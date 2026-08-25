import { GoogleGenAI } from "@google/genai";
console.log("Key:", process.env.GEMINI_API_KEY ? "EXISTS" : "MISSING");
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
ai.models.generateContent({
  model: "gemini-3.6-flash",
  contents: "Hello"
}).then(res => console.log(res.text)).catch(e => console.error("Error:", e));
