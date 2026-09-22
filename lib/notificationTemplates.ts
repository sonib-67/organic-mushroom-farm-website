// Unique, Non-Duplicate Notification Templates for Organic Mushroom Farm
// Each template includes unique copy, emoji, category, and direct landing page link.

export interface NotificationTemplate {
  id: string;
  category: "training" | "profit" | "tips" | "subsidy" | "market";
  titleHi: string;
  bodyHi: string;
  titleEn: string;
  bodyEn: string;
  url: string;
  tag: string;
}

export const NOTIFICATION_TEMPLATES: NotificationTemplate[] = [
  {
    id: "trn_batch_alert_1",
    category: "training",
    titleHi: "🍄 {state}: नई मशरूम ट्रेनिंग बैच की सीटें खुली!",
    bodyHi: "घर बैठे सीखें बटन और ऑयस्टर मशरूम उत्पादन। लाइव प्रैक्टिकल क्लास और सरकारी सर्टिफिकेट। अभी बुक करें!",
    titleEn: "🍄 {state}: New Mushroom Training Batch Open!",
    bodyEn: "Learn commercial Button & Oyster mushroom production with live practical training and certification. Reserve now!",
    url: "/mushroomtrainingregistrationform",
    tag: "omf-training-batch"
  },
  {
    id: "prf_button_margin_2",
    category: "profit",
    titleHi: "💰 1 कमरा = ₹30,000/माह? जानें प्रॉफिट का सच!",
    bodyHi: "10x15 फीट के कमरे से कितना बटन मशरूम निकलता है और खर्च कितना आता है? पूरा हिसाब कैलकुलेटर पर देखें।",
    titleEn: "💰 1 Room = ₹30,000/Month? Know the Real Profit!",
    bodyEn: "How much Button Mushroom can you harvest from a 10x15 room? Check production cost & profit calculator.",
    url: "/roi-calculator",
    tag: "omf-profit-calc"
  },
  {
    id: "tip_humidity_hack_3",
    category: "tips",
    titleHi: "💧 बिना AC और कूलर के 85% नमी (Humidity) का देसी जुगाड़",
    bodyHi: "गर्मियों और बदलते मौसम में मशरूम पिन्हेड्स को सूखने से कैसे बचाएं? जानिए 3 आसान तरीके...",
    titleEn: "💧 Simple Desi Hack to Maintain 85% Humidity Without AC",
    bodyEn: "How to protect mushroom pinheads from drying out in shifting weather? Read 3 proven grower techniques...",
    url: "/services/compost-production",
    tag: "omf-humidity-tip"
  },
  {
    id: "sub_nabard_scheme_4",
    category: "subsidy",
    titleHi: "🏛️ मशरूम यूनिट पर 40% से 50% सरकारी सब्सिडी कैसे पाएं?",
    bodyHi: "NABARD और उद्यानिकी विभाग से मशरूम प्रोजेक्ट पर सब्सिडी और लोन का पूरा प्रोसेस समझें।",
    titleEn: "🏛️ How to Get 40-50% Govt Subsidy on Mushroom Farm?",
    bodyEn: "Complete guide on NABARD and Horticulture dept subsidies and bank loans for commercial mushroom setup.",
    url: "/business-plan",
    tag: "omf-subsidy-guide"
  },
  {
    id: "mkt_wholesale_rate_5",
    category: "market",
    titleHi: "📈 {state} मंडी में मशरूम का आज का थोक भाव!",
    bodyHi: "बटन मशरूम ₹120-180/kg और ड्राई ऑयस्टर ₹400-600/kg। जानें अपने नजदीकी थोक रेट्स और डायरेक्ट खरीदार...",
    titleEn: "📈 Mushroom Wholesale Mandi Rates for {state}!",
    bodyEn: "Current wholesale prices and bulk buyer connections for Button and Oyster mushrooms in your region.",
    url: "/mushroom-price-today",
    tag: "omf-mandi-rates"
  },
  {
    id: "trn_seat_fast_6",
    category: "training",
    titleHi: "⏳ सीट अलर्ट: सिर्फ 7 सीटें शेष रह गई हैं!",
    bodyHi: "आगामी प्रैक्टिकल ट्रेनिंग के लिए रजिस्ट्रेशन जल्द बंद हो रहे हैं। ₹500 में अपनी सीट तुरंत सुरक्षित करें।",
    titleEn: "⏳ Limited Seats Alert: Only 7 Spots Left!",
    bodyEn: "Registrations closing soon for the upcoming practical training batch. Book your seat now with ₹500 advance.",
    url: "/mushroomtrainingregistrationform",
    tag: "omf-seat-alert"
  },
  {
    id: "tip_casing_soil_7",
    category: "tips",
    titleHi: "🌱 केसिंग सॉइल (Casing Soil) तैयार करने का 100% सही तरीका",
    bodyHi: "कोकोपीट और गोबर खाद का सही अनुपात और फॉर्मेलिन से स्टेरलाइजेशन कैसे करें ताकि फफूंद न लगे?",
    titleEn: "🌱 Step-by-Step SOP: Preparing Contamination-Free Casing Soil",
    bodyEn: "Learn the exact ratio of cocopeat, aged FYM, and chemical/steam sterilization to eliminate green mold.",
    url: "/training",
    tag: "omf-casing-sop"
  },
  {
    id: "prf_oyster_easy_8",
    category: "profit",
    titleHi: "🌾 गेहूं के भूसे से ऑयस्टर मशरूम: कम लागत में तगड़ा मुनाफा",
    bodyHi: "बिना किसी बड़े इन्फ्रास्ट्रक्चर के 25 दिनों में पहली फसल कैसे काटें? शुरुआती किसानों के लिए बेस्ट वैरायटी।",
    titleEn: "🌾 Oyster Mushroom on Wheat Straw: Low Cost, High Returns",
    bodyEn: "First harvest in just 25 days with minimal infrastructure. The best mushroom variety for beginners.",
    url: "/mushroom-types",
    tag: "omf-oyster-guide"
  },
  {
    id: "trn_spawn_quality_9",
    category: "tips",
    titleHi: "🔬 नकली और कमजोर स्पॉन (बीज) पहचानने के 4 आसान लक्षण",
    bodyHi: "सफेद मायसेलियम vs काला/पीला धब्बा: गलत बीज से होने वाले 80% नुकसान से खुद को ऐसे बचाएं।",
    titleEn: "🔬 4 Warning Signs of Expired or Contaminated Spawn Seeds",
    bodyEn: "Pure white mycelium vs bacterial blotches: Protect 80% of your crop failure with this simple seed checklist.",
    url: "/services/spawn-supply",
    tag: "omf-spawn-guide"
  },
  {
    id: "sub_project_report_10",
    category: "subsidy",
    titleHi: "📄 बैंक लोन के लिए मशरूम प्रोजेक्ट रिपोर्ट (DPR) कैसे बनाएं?",
    bodyHi: "बैंक मैनेजर को क्या-क्या डॉक्यूमेंट्स चाहिए? 5 लाख और 10 लाख के प्रोजेक्ट का बना-बनाया फॉर्मेट देखें।",
    titleEn: "📄 How to Prepare a Bankable Mushroom Project Report (DPR)",
    bodyEn: "Complete documentation checklist for bank loan approvals under PMEGP & Mudra schemes.",
    url: "/business-plan",
    tag: "omf-dpr-format"
  },
  {
    id: "tip_fly_pest_11",
    category: "tips",
    titleHi: "🦟 मशरूम की मक्खी (Sciarid Fly) को भगाने का ऑर्गेनिक स्प्रे",
    bodyHi: "फसल पर बिना केमिकल डाले मक्खियों और कीड़ों से पूरी सुरक्षा कैसे करें? जैविक फार्मूला...",
    titleEn: "🦟 Organic Bio-Spray to Eliminate Sciarid & Phorid Flies",
    bodyEn: "Safe, non-toxic organic methods to protect growing beds from deadly flies and larva damage.",
    url: "/equipment",
    tag: "omf-pest-control"
  },
  {
    id: "mkt_dry_powder_12",
    category: "market",
    titleHi: "🍵 मशरूम पाउडर और पापड़: वैल्यू एडेड प्रोडक्ट्स से 3X कमाई",
    bodyHi: "कच्चा मशरूम न बिके तो फेंके नहीं! ड्रायर और पाउडर पैकिंग से 1 साल तक सुरक्षित रखकर महंगे में बेचें।",
    titleEn: "🍵 Mushroom Powder & Value Addition: 3X Higher Income",
    bodyEn: "Never face distress sales! Learn dehydration, powdering, and packaged product marketing.",
    url: "/equipment",
    tag: "omf-value-add"
  }
];

export function getNextUniqueTemplate(
  alreadySentIds: string[] = [],
  userState = "Madhya Pradesh",
  userLang = "hi"
): { title: string; body: string; url: string; tag: string; templateId: string } {
  // Find templates that have not been sent to this user yet
  let candidates = NOTIFICATION_TEMPLATES.filter((t) => !alreadySentIds.includes(t.id));

  // If all templates were already sent, reset pool but avoid the immediate last one
  if (candidates.length === 0) {
    const lastSent = alreadySentIds[alreadySentIds.length - 1];
    candidates = NOTIFICATION_TEMPLATES.filter((t) => t.id !== lastSent);
  }

  // Pick the best candidate (first available)
  const template = candidates[0] || NOTIFICATION_TEMPLATES[0];

  const stateDisplayName = userState || "भारत";
  const isHindi = userLang === "hi" || !userLang;

  const rawTitle = isHindi ? template.titleHi : template.titleEn;
  const rawBody = isHindi ? template.bodyHi : template.bodyEn;

  const title = rawTitle.replace(/\{state\}/g, stateDisplayName);
  const body = rawBody.replace(/\{state\}/g, stateDisplayName);

  return {
    templateId: template.id,
    title,
    body,
    url: template.url,
    tag: template.tag
  };
}
