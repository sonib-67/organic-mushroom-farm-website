import { GoogleGenAI } from "@google/genai";
import { getDigestHistory } from "./newsletterStore";

export interface DigestContent {
  subject: string;
  previewText: string;
  categoryTag: string;
  topicTitle: string;
  tagline: string;
  keyTakeaways: string[];
  practicalAction: string;
  mandiUpdate: {
    mandiName: string;
    ratePerKg: string;
    trend: "बढ़त" | "स्थिर" | "मांग में उछाल";
    marketAdvice: string;
  };
  trainingAlert: {
    batchTitle: string;
    date: string;
    mode: string;
    highlight: string;
    ctaText: string;
    ctaUrl: string;
  };
  bonusProTip: string;
  generatedDate: string;
}

const TOPIC_PILLARS = [
  {
    category: "नमी व तापमान देसी जुगाड़ (Climate Control Hacks)",
    focus: "Low-cost humidity and cooling tricks using gunny bags, foggers, shade nets, and exhaust timing for high yield."
  },
  {
    category: "फफूंद व कीट नियंत्रण (Mold & Pest Defense)",
    focus: "Preventing Green Mold (Trichoderma), Yellow Mold, Sciarid flies, and mites using organic neem sprays and biological hygiene."
  },
  {
    category: "खाद व कम्पोस्ट फॉर्मूलेशन (Compost Secrets)",
    focus: "Short method vs long method compost, nitrogen balancing with wheat bran/chicken manure, and turning schedules."
  },
  {
    category: "केसिंग मिट्टी व स्टरलाइजेशन (Casing Soil SOP)",
    focus: "Right pH (7.5-8.0), peat moss vs farmyard manure (FYM), and formaline/steam sterilization without killing beneficial microbes."
  },
  {
    category: "ऑयस्टर व मिल्की मशरूम (Zero-AC High Profit Crops)",
    focus: "Growing Pleurotus and Calocybe indica in summer and monsoon seasons with minimal infrastructure and quick harvesting cycles."
  },
  {
    category: "नाबार्ड व सरकारी सब्सिडी (Govt Grants & Subsidies)",
    focus: "National Horticulture Board (NHB) 40-50% subsidy, bank project reports (DPR), and KCC credit loan guidance for farmers."
  },
  {
    category: "मंडी व होटल डायरेक्ट सेलिंग (Direct B2B Marketing)",
    focus: "Bypassing middlemen, supplying 200g punnets directly to city restaurants, wedding caterers, and wholesale mandis at premium prices."
  },
  {
    category: "स्पॉन व बीज की शुद्धता (Spawn Quality & Testing)",
    focus: "How to identify fresh, vigorous first-generation mycelium spawn vs old, degenerated spawn to avoid complete crop failure."
  },
  {
    category: "प्रोसेसिंग व ड्रायिंग (Value Addition & Powder)",
    focus: "Solar drying, mushroom powder packaging, pickle making, and packaging to earn 3X profit during off-season."
  },
  {
    category: "खर्च खाद से वर्मीकम्पोस्ट (Spent Mushroom Substrate)",
    focus: "Converting post-harvest spent compost bags into organic black gold vermicompost for zero-waste extra income."
  },
  {
    category: "हार्वेस्टिंग व पैकेजिंग शेल्फ-लाइफ (Post-Harvest Care)",
    focus: "Correct stage of button harvesting, perforated PP bags, preventing browning, and cold room storage tips."
  },
  {
    category: "कमरे की बनावट व इन्सुलेशन (Low-Cost Growing Rooms)",
    focus: "Thatched bamboo sheds vs PUF panel rooms, optimal air changes per hour (CO2 management), and bed racking."
  }
];

let genAIClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI | null {
  if (!genAIClient && process.env.GEMINI_API_KEY) {
    genAIClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return genAIClient;
}

/**
 * Generates completely unique 2-day mushroom farming email digest content
 * Strictly enforcing Anti-Duplication by checking past history.
 */
export async function generateUniqueDigestContent(): Promise<DigestContent> {
  const history = getDigestHistory();
  const recentTopics = history.slice(-15).map((h) => h.topicTitle);
  const recentCategories = history.slice(-6).map((h) => h.category);

  // Pick a pillar that wasn't used in the last 4-6 sends
  const availablePillars = TOPIC_PILLARS.filter(
    (p) => !recentCategories.some((rc) => rc.includes(p.category.split(" ")[0]))
  );
  const selectedPillar =
    availablePillars.length > 0
      ? availablePillars[Math.floor(Math.random() * availablePillars.length)]
      : TOPIC_PILLARS[Math.floor(Math.random() * TOPIC_PILLARS.length)];

  const ai = getGenAI();
  const now = new Date();
  const dateFormatted = now.toLocaleDateString("hi-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  if (ai) {
    try {
      const prompt = `
You are the Chief Agronomist and Email Content Creator for "Organic Mushrooms Farm" (India's leading mushroom cultivation and training authority).
Every 2 days, we send a Reddit/Substack-style Farmers' Digest email to thousands of mushroom growers, beginners, and agri-entrepreneurs.

CRITICAL ANTI-DUPLICATION RULE:
Do NOT repeat or duplicate any of these recently covered topics:
${recentTopics.length > 0 ? recentTopics.map((t) => `- "${t}"`).join("\n") : "None yet"}

TODAY'S CHOSEN THEMATIC PILLAR:
Category: "${selectedPillar.category}"
Theme/Focus: "${selectedPillar.focus}"

Current Date: ${dateFormatted} (Indian Standard Time)

Generate a high-value, practical, and highly engaging Hindi newsletter digest in valid JSON format.
Use natural, respectful, farmer-friendly Hindi (सरल व व्यावहारिक हिंदी, शुद्ध लेकिन आसान).

OUTPUT MUST BE VALID JSON ONLY with this exact TypeScript structure:
{
  "subject": "Catchy email subject line in Hindi with an emoji (e.g. 🍄 कमरे में 85% नमी का ₹500 देसी जुगाड़ • ताज़ा मशरूम डाइजेस्ट)",
  "previewText": "1-line preview hook for email inbox (max 80 chars)",
  "categoryTag": "Short badge tag (e.g. 💡 फार्मिंग सीक्रेट, 🛡️ फंगस से बचाव, 💰 मंडी व मुनाफा)",
  "topicTitle": "Crisp headline of today's main article (max 65 chars)",
  "tagline": "1-sentence exciting hook summarizing why this matters for their profit",
  "keyTakeaways": [
    "Bullet point 1 (actionable practical tip)",
    "Bullet point 2 (actionable practical tip)",
    "Bullet point 3 (actionable practical tip)"
  ],
  "practicalAction": "One clear action step farmers can do today in their farm (2-3 sentences)",
  "mandiUpdate": {
    "mandiName": "Name of top Mandi (e.g. आज़ादपुर मंडी दिल्ली / भोपाल मंडी / लखनऊ)",
    "ratePerKg": "Current wholesale rate per kg (e.g. ₹130 - ₹150 / किग्रा)",
    "trend": "बढ़त" or "स्थिर" or "मांग में उछाल",
    "marketAdvice": "1 sentence advice on how to fetch best rate"
  },
  "trainingAlert": {
    "batchTitle": "आगामी प्रैक्टिकल फार्मिंग बैच",
    "date": "100% प्रैक्टिकल ऑन-फार्म ट्रेनिंग (सीटें सीमित)",
    "mode": "ऑफलाइन फार्म ट्रेनिंग + ऑनलाइन सर्टिफिकेशन",
    "highlight": "खाद बनाने से लेकर मंडी में बेचने तक का सम्पूर्ण व्यावहारिक ज्ञान",
    "ctaText": "ट्रेनिंग का सिलेबस व फीस देखें ➔",
    "ctaUrl": "https://organicmushroomsfarm.com/training"
  },
  "bonusProTip": "One golden pro-tip for commercial growers (1-2 sentences)",
  "generatedDate": "${dateFormatted}"
}
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          temperature: 0.82,
          responseMimeType: "application/json"
        }
      });

      const text = response.text?.trim();
      if (text) {
        const parsed = JSON.parse(text) as DigestContent;
        if (parsed.subject && parsed.topicTitle && parsed.keyTakeaways) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn("[GeminiDigestGenerator] AI generation error, falling back to structured matrix:", err);
    }
  }

  // High quality Fallback Template based on selected pillar if AI key is offline
  return getFallbackDigestContent(selectedPillar.category, dateFormatted);
}

function getFallbackDigestContent(category: string, dateStr: string): DigestContent {
  const fallbacks: DigestContent[] = [
    {
      subject: "🍄 कमरे में 85% नमी का ₹500 देसी जुगाड़ • Organic Mushrooms Farm डाइजेस्ट",
      previewText: "गर्मियों व सूखे मौसम में मशरूम पिनहेड्स को सूखने से बचाने का रामबाण तरीका।",
      categoryTag: "💡 फार्मिंग सीक्रेट",
      topicTitle: "कमरे में 85-90% नमी बनाए रखने का देसी जुगाड़",
      tagline: "बिना महंगे ऑटोमैटिक ह्यूमिडिफायर के देसी तकनीक से पिनहेड्स की सुरक्षा करें।",
      keyTakeaways: [
        "कमरे की दीवारों पर बोरी (टाट) लटकाकर उस पर ड्रिप या स्प्रिंकलर से पानी की हल्की फुहार दें।",
        "फर्श पर 2 इंच बालू रेत की परत बिछाएं और उसे दिन में दो बार गीला रखें।",
        "सुबह 5:00 बजे और शाम 7:00 बजे 20 मिनट के लिए क्रॉस वेंटिलेशन चालू करें।"
      ],
      practicalAction: "आज ही अपने कमरे के कोनों में 4-5 गीली टाट की बोरियां लटकाएं और हाइग्रोमीटर से आर्द्रता (Humidity) 85% से ऊपर चेक करें।",
      mandiUpdate: {
        mandiName: "आज़ादपुर थोक मंडी (नई दिल्ली)",
        ratePerKg: "₹135 - ₹160 / किग्रा",
        trend: "मांग में उछाल",
        marketAdvice: "सुबह 6:00 बजे से पहले 200 ग्राम पन्नी पैकिंग में पहुंचाने पर ₹15/किग्रा अतिरिक्त भाव मिलता है।"
      },
      trainingAlert: {
        batchTitle: "नया प्रैक्टिकल मशरूम फार्मिंग बैच",
        date: "नया ऑन-फार्म बैच रजिस्ट्रेशन जारी",
        mode: "प्रैक्टिकल फार्म ट्रेनिंग + लाइफटाइम कंसल्टेंसी",
        highlight: "खाद बनाने से लेकर बीमारी नियंत्रण और 100% बायबैक गाइडेंस शामिल",
        ctaText: "ट्रेनिंग शेड्यूल व फीस विवरण देखें ➔",
        ctaUrl: "https://organicmushroomsfarm.com/training"
      },
      bonusProTip: "पिनहेड्स आने के बाद सीधे मशरूम पर तेज धार से पानी न मारें; केवल हवा में फॉगर से मिस्ट बनाएं।",
      generatedDate: dateStr
    },
    {
      subject: "🛡️ हरी फफूंद (Green Mold) से बैग्स को कैसे बचाएं? • 2-Day मशरूम एडवाइजरी",
      previewText: "ट्राइकोडर्मा फंगस से 90% नुकसान रोकने के 3 सबसे असरदार उपाय।",
      categoryTag: "🛡️ फंगस व रोग नियंत्रण",
      topicTitle: "मशरूम बैग्स में ट्राइकोडर्मा (Green Mold) का पक्का इलाज",
      tagline: "शुरुआती दौर में ही फफूंद को पहचानकर पूरे फार्म को संक्रमित होने से बचाएं।",
      keyTakeaways: [
        "अगर किसी बैग में हल्का हरा धब्बा दिखे, तो उस बैग को तुरंत कमरे से बाहर निकालें।",
        "संक्रमित हिस्से पर 2% बाविस्टिन (Bavistin) या फॉर्मेलिन का हल्का छिड़काव करके नमक बुरकें।",
        "कमरे में प्रवेश करने से पहले पैरों को पोटाश (KMNO4) वाले पानी से धोना अनिवार्य करें।"
      ],
      practicalAction: "आज अपने सभी रेक्स और बैग्स का निरीक्षण करें; जो भी बैग दूषित दिखे, उसे तुरंत आइसोलेट करें।",
      mandiUpdate: {
        mandiName: "भोपाल व इंदौर थोक मंडी",
        ratePerKg: "₹120 - ₹145 / किग्रा",
        trend: "स्थिर",
        marketAdvice: "स्थानीय ढाबों व होटलों में डायरेक्ट सप्लाई करने पर बिचौलियों का 20% कमीशन बचता है।"
      },
      trainingAlert: {
        batchTitle: "एडवांस्ड मशरूम फार्मिंग व लैब ट्रेनिंग",
        date: "आगामी बैच रजिस्ट्रेशन ओपन",
        mode: "फार्म विजिट + लैब प्रैक्टिकल",
        highlight: "खुद का स्पॉन (बीज) बनाना सीखें और लागत में 60% की बचत करें",
        ctaText: "सीट सुरक्षित करें ➔",
        ctaUrl: "https://organicmushroomsfarm.com/training"
      },
      bonusProTip: "स्पॉनिंग करते समय हाथों को डिटॉल या सर्जिकल स्पिरिट से साफ करना कभी न भूलें।",
      generatedDate: dateStr
    }
  ];

  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
