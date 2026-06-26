export interface MumbaiBlog {
  id: number;
  keyword: string;
  path: string;
  category: string;
  title: string;
  meta: string;
  h1: string;
  intro: string;
  faqs: { q: string; a: string }[];
  links: string[];
  area: string;
}

export const MUMBAI_BLOGS_METADATA: MumbaiBlog[] = [
  {
    id: 1,
    path: "mumbai-mushroom-training",
    keyword: "mushroom training mumbai",
    category: "Training Centers",
    title: "Mushroom Training Center in Mumbai | Complete Guide",
    meta: "Mumbai mushroom training center details. Complete guide for mushroom farming setup, online training, and offline sessions.",
    h1: "Mumbai Mushroom Farming Training | मुंबई मशरूम शेती प्रशिक्षण केंद्र",
    intro:
      "मुंबई, नवी मुंबई, ठाणे, मीरा रोड, वाशी, पनवेल, कल्याण, डोंबिवली आणि आसपासच्या भागांमध्ये ताज्या, सेंद्रिय आणि औषधी मशरूमची मागणी वेगाने वाढत आहे. हॉटेल्स, रेस्टॉरंट्स, सुपरमार्केट्स आणि हेल्थ-फूड स्टोअर्समध्ये मशरूमचा वापर वाढल्यामुळे हा व्यवसाय नवीन उद्योजकांसाठी मोठी संधी बनला आहे. If you want to start a mushroom farming business in Mumbai, proper training, quality mushroom spawn, farm planning and marketing strategy are the keys to success.",
    faqs: [
      {
        q: "Why is mushroom farming growing in Mumbai?",
        a: "Mumbai is one of India's largest food markets with high demand from restaurants, hotels, and health-conscious consumers.",
      },
      {
        q: "What is included in the online training?",
        a: "Training includes Mushroom Biology, Compost & Substrate Preparation, Spawn Running, Bed Preparation, Disease Management, Harvesting, Packaging, Marketing, and Business Planning.",
      },
      {
        q: "Where can I get practical training?",
        a: "We offer offline practical sessions that focus on live demonstration, spawn handling, and farm management.",
      },
      {
        q: "Do you supply mushroom spawn in Mumbai?",
        a: "Yes, we provide high-quality F1 generation spawn for oyster, button, milky, and exotic mushrooms.",
      },
    ],
    links: [],
    area: "Mumbai",
  },
];

export const getMumbaiBlogByPath = (path: string): MumbaiBlog | undefined => {
  const cleanPath = path
    .toLowerCase()
    .replace(/^\/+|\/+$/g, "")
    .replace(/^locations\/mumbai\//, "");

  const metaItem = MUMBAI_BLOGS_METADATA.find((b) => b.path === cleanPath);
  if (!metaItem) return undefined;

  return metaItem;
};
