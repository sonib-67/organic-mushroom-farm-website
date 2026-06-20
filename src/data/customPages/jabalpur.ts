import { SEOManualContent } from '../locationSEOContent';

// 1. The 93 Kept SEO Slugs for Jabalpur (According to the PDF Added List)
export const ALLOWED_JABALPUR_SLUGS = [
  "mushroom-training-center",
  "government-mushroom-training-center",
  "mushroom-training-center-near-me",
  "mushroom-farming-training-center",
  "best-mushroom-training-center",
  "mushroom-cultivation-training-center",
  "mushroom-cultivation-and-training-center",
  "mushroom-development-and-training-center",
  "mushroom-farm-learning-center",
  "mushroom-training-center-mp",
  "mushroom-training-center-bihar",
  "mushroom-training-center-karnataka",
  "mushroom-training-center-maharashtra",
  "mushroom-training-center-nagpur",
  "mushroom-training-center-kolkata",
  "mushroom-training-center-mumbai",
  "mushroom-training-center-hyderabad",
  "mushroom-farming-training-by-government",
  "government-mushroom-training-center-near-me",
  "mushroom-farming-training-government-online",
  "mushroom-farming-training-up-government",
  "mushroom-farming-training-bihar-government",
  "mushroom-farming-training-karnataka-government",
  "mushroom-farming-subsidy",
  "mushroom-farming-training",
  "mushroom-farming-training-offline",
  "mushroom-farming-training-near-me",
  "mushroom-farming-training-online",
  "mushroom-cultivation-training-near-me",
  "mushroom-growing-training-courses",
  "mushroom-course-near-me",
  "mushroom-cultivation-training-fees",
  "oyster-mushroom-training-center",
  "button-mushroom-training-center",
  "mushroom-workshop",
  "king-oyster-mushroom-class",
  "how-to-grow-mushroom",
  "how-to-grow-mushroom-at-home",
  "how-to-grow-mushroom-for-business",
  "how-to-grow-mushroom-commercially",
  "how-to-grow-oyster-mushroom",
  "how-to-grow-button-mushroom",
  "how-to-grow-white-button-mushroom",
  "how-to-grow-shiitake-mushroom",
  "how-to-grow-lions-mane-mushroom",
  "how-to-grow-king-oyster-mushroom",
  "how-to-grow-reishi-mushroom",
  "how-to-grow-gucchi-mushroom",
  "how-to-grow-mushroom-plastic-bottles",
  "how-to-grow-mushroom-on-logs",
  "how-to-grow-mushroom-indoors",
  "how-to-grow-mushroom-spawn-at-home",
  "stages-of-mushroom-growth",
  "7-steps-mushroom-cultivation",
  "how-long-mushroom-take-to-grow",
  "types-of-mushroom-in-india",
  "khane-wale-mushroom-ke-naam",
  "mushroom-kya-hai",
  "mushroom-kitne-prakar-ke-hote-hain",
  "oyster-mushroom-in-hindi",
  "sabse-mahanga-mushroom",
  "most-expensive-mushroom-india",
  "mushroom-price-list-india",
  "button-mushroom-price",
  "oyster-mushroom-price",
  "mushroom-market-in-india",
  "mushroom-health-benefits",
  "mushroom-farming-in-india",
  "how-to-start-mushroom-farming",
  "how-to-start-mushroom-farming-at-home",
  "mushroom-farming-profit-per-acre",
  "mushroom-farming-cost-and-profit",
  "mushroom-farming-requirements",
  "mushroom-yield-per-kg-seeds",
  "mushroom-ki-kheti",
  "mushroom-ki-kheti-kaise-karen",
  "mushroom-farm-setup",
  "how-to-build-mushroom-grow-room",
  "indoor-oyster-mushroom-farm",
  "mushroom-spawn-supplier",
  "oyster-mushroom-spawn",
  "button-mushroom-spawn",
  "mushroom-spawn-at-home",
  "mushroom-liquid-culture",
  "mushroom-growing-kit",
  "mushroom-grow-bags",
  "oyster-mushroom-kit",
  "buy-fresh-mushroom-online",
  "buy-dry-mushroom-online",
  "oyster-mushroom-where-to-buy",
  "button-mushroom-near-me",
  "fresh-mushroom-delivery",
  "mushroom-farming"
];

// Helper to format slugs into visual titles with Jabalpur context
function getSlugHeading(slug: string): string {
  const parts = slug.split('-');
  const capitalized = parts.map(w => {
    if (w === 'mp') return 'Madhya Pradesh';
    if (w === 'up') return 'Uttar Pradesh';
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');

  // Special visual adjustments
  if (slug === 'mushroom-farming') return 'Commercial Mushroom Farming in Jabalpur';
  if (slug === 'mushroom-kya-hai') return 'मशरूम क्या है और इसकी खेती कैसे करें | Mushroom Kya Hai';
  if (slug === 'mushroom-ki-kheti') return 'मशरूम की खेती कैसे शुरू करें | Mushroom Ki Kheti India';
  if (slug === 'sabse-mahanga-mushroom') return 'भारत और दुनिया का सबसे महंगा मशरूम (Gucchi Morel)';
  
  return `${capitalized} in Jabalpur`;
}

// 2. Specialized Overrides for Key Pages (Setup, Medicinal Mushrooms, Hindi Local Blogs)
const SPECIAL_JABALPUR_BLOGS: Record<string, Partial<SEOManualContent>> = {
  // A. Specialized custom blog for Jabalpur Mushroom Farm Setup (No Duplicates, Highly Specific!)
  "mushroom-farm-setup": {
    title: "Mushroom Farm Setup Guide in Jabalpur | Climate-Controlled Design",
    metaDesc: "Step-by-step setup blueprints, humidity ventilation layouts, and cost estimation for setting up a commercial mushroom grow room in Jabalpur, MP.",
    h1: "Commercial Mushroom Farm Room Setup in Jabalpur, MP",
    articleHtml: `
      <div class="prose max-w-none dark:prose-invert">
        <p class="lead">Setting up a cost-effective, high-yield mushroom cultivation unit in Jabalpur requires matching industrial farming blueprints to Madhya Pradesh's unique weather cycle. Since temperatures fluctuate from hot dry summers (38°C to 44°C) to chilly wet winters (8°C to 12°C), climate control is the single biggest factor for year-round cropping.</p>
        
        <div class="p-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-l-4 border-primary-start my-6">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-0 mb-2">🔑 Key Pillars of a Successful Technical Setup in Jabalpur:</h3>
          <ol class="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li><strong>Thermal Room Insulation:</strong> Use premium expanded polystyrene sheets (EPS) or double-layer polyurethane foam (PUF) insulation. This keeps the extreme outdoor temperature of Jabalpur from affecting your indoor beds.</li>
            <li><strong>Optimized HVAC & Humidifiers:</strong> Install automatic air-handling ducts with heavy-duty commercial desert coolers or misting nozzles. Button mushrooms require a cool 15-20°C with 85-90% humidity during cropping.</li>
            <li><strong>Cross-Ventilation and CO2 Management:</strong> Mushrooms release carbon dioxide during spawn run and pinning. Set up axial exhaust fans on the lower level to flush out stale air while sucking fresh oxygen from top vents.</li>
          </ol>
        </div>

        <h2 class="text-xl font-bold mt-6 mb-3">🛠️ Cost & Infrastructure Blueprints (Indore-Jabalpur Highway Hub Specs)</h2>
        <p>A basic 1,000 sq ft room can house vertical metallic bamboo racks with over 800 - 1,200 grow bags. Total initial capital expenditure covers rack fabrication, brick-cement wall plastering, automatic commercial steam boilers for substrate sterilization, and specialized climate sensors. Utilizing cheap agricultural raw materials from neighboring villages of Katangi and Patan drastically reduces ongoing monthly operational costs.</p>

        <h3 class="text-lg font-bold mt-6 mb-2">Our Support for Jabalpur Setups</h3>
        <p>We supply premium laboratory-tested F1 spawn, custom steel cropping frame mockups, automatic humidity controllers, and formal layout certifications recognized for Horticulture schemes and NABARD government subsidies.</p>
      </div>
    `,
    faqs: [
      { q: "What is the best room size to start a small commercial farm in Jabalpur?", a: "A space of 15 x 20 feet is sufficient to house round and vertical cropping beds with up to 500 bags, making it an ideal startup layout." },
      { q: "Is a continuous cooling system necessary inside cropping rooms?", a: "For seasonal crops (like winter Button mushrooms or summer Milky mushrooms), natural ventilation works, but for year-round commercial output, semi-automated cooler-mist systems are highly advised." },
      { q: "Can we apply for a government subsidy for setup in Madhya Pradesh?", a: "Yes! The MP Horticulture Department offers attractive capital subsidies (typically 40% to 50%) under NHB and MIDH schemes for composite mushroom culture setups." }
    ]
  },

  // B. Specialized Medical & Local Mushrooms Blog of Jabalpur (Immunity, medicinal properties, etc.)
  "how-to-grow-reishi-mushroom": {
    title: "How to Grow Reishi Mushroom in Jabalpur | Pure Medicinal Quality",
    metaDesc: "Guide to high-value medicinal Ganoderma Lucidum (Reishi) cultivation. Learn substrate formulation, sterilization, and therapeutic triterpenses output in Jabalpur.",
    h1: "Medicinal Reishi (Ganoderma) Cultivation in Jabalpur",
    articleHtml: `
      <div class="prose max-w-none dark:prose-invert">
        <p class="lead">Medicinal mushrooms are experiencing huge demand in India due to their health, immunity, and holistic wellness properties. Reishi (Ganoderma lucidum), known as the 'Mushroom of Immortality,' is highly regarded in clinical environments for its rich profile of bioactive beta-glucans and therapeutic triterpenes.</p>

        <h2>🩺 The Health & Medical Value of Reishi (Ganoderma)</h2>
        <p>Reishi is not a culinary mushroom; its woody, bitter fruiting bodies are dried and ground into extract powder, bio-active teas, or capsule supplements. Clinical benefits include immunological enhancement, chronic stress relief, blood circulation support, and robust anti-inflammatory responses. Sourcing wild Ganoderma from the teak and Shorea-robusta (Sal) forest zones of central India forms a great genetic library for producing robust F1 species.</p>

        <h2>📋 How we successfully grow Reishi on Sawdust in Jabalpur:</h2>
        <ul>
          <li><strong>Substrate Mix:</strong> Hardwood sawdust (pre-sourced from local sawmills around Jabalpur) blended with 20% wheat bran and calcium carbonate.</li>
          <li><strong>High-Pressure Sterilization:</strong> Autoclaving grow bags at 121°C for 2 hours to completely kill competitive fungal mold spores.</li>
          <li><strong>Incubation parameters:</strong> Maintain a dark, ambient room at 24-28°C until mycelium fully colonizes the sawdust.</li>
          <li><strong>Fruiting phase:</strong> Introduce 85% humidity, fresh oxygen exchange, and indirect led light to trigger the classic red-zoned shiny antler growth.</li>
        </ul>
      </div>
    `,
    faqs: [
      { q: "What is the market price of dried Reishi mushroom in India?", a: "Premium grade organic air-dried Reishi sells in local pharmaceutical, Ayurvedic, and wellness networks for ₹4,000 to ₹8,000 per kilogram." },
      { q: "Is Ganoderma naturally found in Madhya Pradesh?", a: "Yes, wild strains of Ganoderma are often discovered growing naturally on decaying deciduous hardwood logs in forest areas surrounding Mandla and Jabalpur." },
      { q: "What is the total grow cycle for Reishi?", a: "It takes about 90 to 120 days from inoculation to final mature harvest, much longer than standard edible varieties but offering much higher commercial margins." }
    ]
  },

  "how-to-grow-gucchi-mushroom": {
    title: "How to Grow Gucchi Mushroom in Jabalpur | Morel Cultivation Status",
    metaDesc: "Discover the facts about Gucchi (Morchella esculenta) morel mushroom. Learn about its native forest habitat, high market valuation, and laboratory research updates.",
    h1: "Gucchi (Morel) Mushroom: Native Harvesting & Growing Facts",
    articleHtml: `
      <div class="prose max-w-none dark:prose-invert">
        <p class="lead">Gucchi (Morchella species, commonly known as yellow and black Morels) is legendary for its savory, earthy flavor, delicate honeycomb structure, and astonishing market price. It is historically crowned as the most expensive wild mushroom in the world due to its rare wild availability and challenging artificial cultivation.</p>

        <h2>🌲 Wild Sourcing and Natural Habitat</h2>
        <p>In India, wild Gucchi morels grow naturally on moist forest soils in high-altitude Himalayan ranges including Jammu & Kashmir and Himachal Pradesh during early spring snow-melt. Cultivating Gucchi in central plains like Madhya Pradesh requires simulating complex soil microbiota, precise cold temperatures, and mycelial sclerotium trigger phases. We guide passionate growers on state-of-the-art laboratory protocols, soil compositions, and research milestones.</p>
        
        <h2>🔬 Active Medical & Bioactive Research</h2>
        <p>Gucchi is packed with natural antioxidants, amino acids, vitamin D3, and bioactive polysaccharides that reduce lipid peroxidation, enhance physical stamina, and boost immune cell division. It is heavily used in high-end culinary restaurants, luxury hotel catering, and global health research hubs.</p>
      </div>
    `,
    faqs: [
      { q: "Why is Gucchi mushroom so expensive?", a: "Because it is difficult to cultivate artificially on a mass scale and must be entirely wild-harvested. Dried wild Gucchi commands ₹25,000 to ₹40,500 per kilogram." },
      { q: "Can we cultivate morels at home in Jabalpur?", a: "Large-scale artificial morel cultivation is currently in the experimental research phase. Cultivators are exploring winter indoor setups with customized soil-beds to stimulate the sclerotia cycle." },
      { q: "What do wild Gucchi morels smell and taste like?", a: "They have a deeply complex smoky, nutty, and savory aroma, making them a premium addition to gourmet wood-fired cuisines." }
    ]
  },

  "how-to-grow-lions-mane-mushroom": {
    title: "How to Grow Lion's Mane in Jabalpur | Premium Nootropic Guide",
    metaDesc: "Learn how to cultivate Hericium erinaceus (Lion's Mane) in Jabalpur. Detailed instructions on sterilized sawdust block spawn propagation and medical benefits.",
    h1: "Nootropic Lion's Mane (Hericium) Cultivation in Jabalpur",
    articleHtml: `
      <div class="prose max-w-none dark:prose-invert">
        <p class="lead">Lion's Mane (Hericium erinaceus) is a spectacular pom-pom shaped white mushroom known for its icicle-like cascading spine look and rich gourmet taste that mimics premium seafood. Beyond its culinary uses, it is globally celebrated as a highly potent natural brain supplement or 'nootropic.'</p>

        <h2>🧠 Neurofeedback benefits & Medical Significance</h2>
        <p>Chemically, Lion's Mane has two unique active families of substances: <strong>hericenones</strong> and <strong>erinacines</strong>. These compounds stimulate the production of Nerve Growth Factor (NGF) in the human brain, which is responsible for the growth, maintenance, and myelin-sheath protection of critical neural paths. Regular ingestion helps combat brain fog, increases daily mental focus, supports memory networks, and is widely researched for neurodegenerative conditions like Alzheimer's and mild cellular cognitive decline.</p>

        <h2>🏠 Easy Indoor Growing Blueprint:</h2>
        <p>To cultivate pure white Lion's Mane in the Jabalpur region, we use hardwood oak or soy hull substrate blocks kept strictly between 16-20°C with continuous fine misting. The variety is highly oxygen-sensitive; sufficient fresh air intake is key to preventing thin antler-like mutations and encouraging thick dense snowy pom-pom globes.</p>
      </div>
    `,
    faqs: [
      { q: "How long does Lion's Mane take to grow to harvest?", a: "Once the block is fully colonized, blocks fruit in just 10 to 14 days, yielding a beautiful medicinal harvest." },
      { q: "What does Lion's Mane mushroom taste like?", a: "When properly sautéed in pure organic butter, it has an exquisite, tender flavor very similar to crab, lobster, or fresh prawns." },
      { q: "Is spawn for Hericium available in Madhya Pradesh?", a: "Yes! High-purity master tube slants and grain spawn bags are cultivated right in our lab to support Jabalpur growers." }
    ]
  },

  "mushroom-health-benefits": {
    title: "Mushroom Health Benefits | Clinical Nutrition & Immune Value",
    metaDesc: "Read about the clinical, medicinal, and nutritional science of organic mushrooms. Discover vitamins, mineral profiles, and cellular benefits for Indian diets.",
    h1: "Medical & Nutritional Science of Organic Mushrooms",
    articleHtml: `
      <div class="prose max-w-none dark:prose-invert">
        <p class="lead">Mushrooms are nutritional blockbusters that bridge the gap between vegetable values and animal protein profiles. Incorporating fresh organic Button, Oyster, and Shiitake varieties in regular diets offers massive systemic physiological benefits.</p>

        <h2>🥗 Key Nutritional Power-Points:</h2>
        <ul>
          <li><strong>High-Quality Plant Protein:</strong> Contains nearly 20-30% dry-weight protein rich in essential amino acids, making them perfect for clean vegetarian and vegan diets.</li>
          <li><strong>Natural Vitamin D2/D3 Gateway:</strong> Mushrooms are one of the very few natural non-animal sources that can synthesize active Vitamin D when exposed to ultraviolet sunrays.</li>
          <li><strong>Therapeutic Polysaccharides:</strong> Beta-glucans inside fungal cell walls trigger human macrophages, natural killer (NK) cells, and cytokine networks to actively fight viral strains and localized cellular anomalies.</li>
          <li><strong>Weight & Cardiac Management:</strong> Naturally low in simple calories, free of bad cholesterol, and packed with fibers like chitin and beta-glucan that support fat metabolism and digestive health.</li>
        </ul>
      </div>
    `,
    faqs: [
      { q: "Are mushrooms safe for individuals with diabetic symptoms?", a: "Yes! Mushrooms have a highly favorable low-glycemic index (GI) and contain natural dietary fiber that supports stable insulin responses." },
      { q: "Do cooking methods impact the active vitamins in mushrooms?", a: "Gentle steaming or grilling in healthy oil maintains most active antioxidants, proteins, and minerals without breaking cell structures." },
      { q: "Which mushroom variety has the highest antioxidant values?", a: "Oyster and Shiitake mushrooms boast high levels of ergothioneine and selenium, which actively prevent oxidative cell damage." }
    ]
  }
};

// 3. Dynamic Compiler to generate all 93 kept Jabalpur Pages cleanly and quickly
export function compileJabalpurCustomPage(slug: string): Partial<SEOManualContent> | null {
  const normSlug = slug.toLowerCase().replace(/^\/+|\/+$/g, '').trim();

  // If we have a fully custom specialized blog matching this exact slug, use it!
  if (SPECIAL_JABALPUR_BLOGS[normSlug]) {
    const raw = SPECIAL_JABALPUR_BLOGS[normSlug];
    return {
      title: raw.title,
      metaDesc: raw.metaDesc,
      h1: raw.h1,
      articleHtml: raw.articleHtml,
      faqs: raw.faqs,
      keywords: `jabalpur ${normSlug}, mushroom farming jabalpur, mushroom spawn jabalpur, mushroom training jabalpur, organic mushroom jabalpur`
    };
  }

  // Double check if slug is inside the allowed kept list
  if (!ALLOWED_JABALPUR_SLUGS.includes(normSlug)) {
    return null;
  }

  // Otherwise, compile a completely distinct, visual, clean layout for this slug programmatically
  const heading = getSlugHeading(normSlug);
  const isHindi = normSlug.includes('kheti') || normSlug.includes('hindi') || normSlug.includes('prakar') || normSlug.includes('naam') || normSlug.includes('hai');
  
  const title = `${heading} | Certified Farming Hub & Spawn Portal`;
  const metaDesc = `Comprehensive resources on ${normSlug.replace(/-/g, ' ')} in Jabalpur, Madhya Pradesh. Find certified training schedules, hybrid lab seeds, and setup subsidy guidance.`;

  // Dynamic Content Generation based on category keywords
  let p1 = `Welcome to our specialized location portal for ${heading}. In Jabalpur, Madhya Pradesh, local commercial growers, organic growers, and agricultural startups are capitalizing on the explosive organic food adaptation in central India.`;
  let p2 = `Our premium central lab provides direct and easy access to certified hybrid F1 mushroom spawn (seeds), intensive hands-on workshop programs, and end-to-end greenhouse construction projects specifically optimized for Jabalpur's climatic profile.`;
  
  if (isHindi) {
    p1 = `जबलपुर (मध्य प्रदेश) में आपका स्वागत है। हमारा मशरूम सेंटर जबलपुर और आसपास के क्षेत्रों के किसानों, युवाओं और गृहणियों को घर बैठे आधुनिक मशरूम फार्मिंग, उच्च गुणवत्ता वाले F1 स्पॉन (मशरूम बीज) और पूरी सहायता प्रदान करने के लिए प्रतिबद्ध है।`;
    p2 = `यदि आप जबलपुर में खुद की मशरूम यूनिट खोलना चाहते हैं, तो हमारे पास सभी श्रेणियों (बटन, ओएस्टर और मिल्की) के लिए प्रशिक्षित वैज्ञानिक विधियाँ, खाद (कंपोस्ट) तकनीक और सरकारी सब्सिडी सर्टिफिकेट का सपोर्ट उपलब्ध है।`;
  }

  const h2Title1 = isHindi ? `जबलपुर में मशरूम उत्पादन के प्रमुख लाभ और दिशा-निर्देश` : `Key Strategic Milestones for ${heading} in Jabalpur`;
  const h2Title2 = isHindi ? `अक्सर पूछे जाने वाले सवाल (FAQs)` : `Essential Project Parameters & Yield Metrics`;

  let sectionText = `
    <p>${p1}</p>
    <p>${p2}</p>
    
    <h2>${h2Title1}</h2>
    <p>To succeed at any scale inside Jabalpur, cultivators must balance humidity controls, sterile compost creation, and cold storage chains. We utilize high-yield farming beds, advanced laboratory culture techniques, and modern composting techniques to maximize harvest rotation times (often 21 to 25 days post block spawning).</p>
    
    <div class="my-6 p-6 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
      <h3 class="text-base font-bold text-slate-800 dark:text-white mt-0 mb-3">${isHindi ? "🎯 जबलपुर फार्मिंग के प्रमुख स्तंभ:" : "🏆 Core Highlights of Our Jabalpur Organic Program:"}</h3>
      <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm">
        <li><strong>${isHindi ? "ताज़ा F1 ग्रेड मशरूम बीज:" : "Superior F1 Hybrid Spawn Seed Supply:"}</strong> ${isHindi ? "हमारे लैब से सीधे तैयार किया गया रोग-प्रतिरोधी ओएस्टर, बटन और मिल्की मशरूम स्पॉन।" : "High-density disease-resistant blocks dispatched directly across Jabalpur region."}</li>
        <li><strong>${isHindi ? "तकनीकी प्रशिक्षण और सर्टिफिकेट:" : "Government Verified Certificate Guidance:"}</strong> ${isHindi ? "मशरूम रूम सेटअप, तापमान नियंत्रण और बीमारी से बचाव की व्यवहारिक ट्रेनिंग गाइड।" : "Hands-on structural optimization including humidity parameters (18-24°C) mapping."}</li>
        <li><strong>${isHindi ? "मार्केट बायबैक असिस्टेंस:" : "Local Mandi & Marketing Network linkage:"}</strong> ${isHindi ? "स्थानीय जबलपुर मंडियों, सुपरमार्केट और निर्यात फर्मों से सीधा संपर्क।" : "Connecting small scale home growers directly with local wholesale distribution."}</li>
      </ul>
    </div>
  `;

  // Compiling specific block segments depending on content type (Training, Spawn, How-To, setup, etc.)
  if (normSlug.includes('training') || normSlug.includes('course') || normSlug.includes('class') || normSlug.includes('workshop')) {
    sectionText += `
      <h2>${isHindi ? "ट्रेनिंग कोर्स संरचना जानकारी" : "Certified Training Schedules & Practical Syllabus"}</h2>
      <p>Our Jabalpur programs are strictly structural and practical. We run small, high-attention batches that take developers through absolute step-by-step compost pasteurization, spawn inoculations, precise bag staking, pinhead preservation mapping, and hygienic dehydration of extra yields for secure storage.</p>
    `;
  } else if (normSlug.includes('spawn') || normSlug.includes('seed') || normSlug.includes('kit') || normSlug.includes('bag')) {
    sectionText += `
      <h2>${isHindi ? "उन्नत मशरूम स्पॉन की उपलब्धता" : "High-Viability F1 Spawn Ordering & Preservation Specs"}</h2>
      <p>Using premium lab spawn guarantees high biological efficiency (up to 100-120% yield on dry substrate weight). Our F1 master grain spawn is checked for bacterial contamination, has thick white mycelial growth, and is shipped in air-permeable bags to prevent overheating during transport across Madhya Pradesh.</p>
    `;
  } else if (normSlug.includes('grow') || normSlug.includes('kheti') || normSlug.includes('setup') || normSlug.includes('room')) {
    sectionText += `
      <h2>${isHindi ? "मशरूम की खेती कैसे करें और उत्पादन लागत" : "Room Optimization & Yield Forecast Parameters"}</h2>
      <p>A cost-effective unit utilizes agricultural residue (wheat/paddy straw) easily pre-sourced around neighboring agricultural zones. With adequate room thermal layers (using eco-friendly insulating sheets) and moisture controls (fine custom mist pads), growers can easily cultivate up to three flushes from a single seed block.</p>
    `;
  }

  const finalHtml = `
    <div class="prose max-w-none dark:prose-invert">
      ${sectionText}
    </div>
  `;

  const dynamicFAQs = [
    {
      q: isHindi ? `जबलपुर में ${heading} शुरू करने के लिए प्रथम कदम क्या है?` : `How do I start with ${heading} inside Jabalpur?`,
      a: isHindi ? `सबसे पहले, उच्च गुणवत्ता वाले प्रामाणिक F1 बीजों (स्पॉन) का चुनाव करें और अपनी क्रॉपिंग यूनिट में तापमान-नमी को सही रूप से व्यवस्थित करना सीखें।` : `First, formulate a sterile straw or compost substrate layout, secure certified laboratory seed spawn, and design a properly insulated indoor cultivation room.`
    },
    {
      q: isHindi ? `क्या जबलपुर के वातावरण में सालभर मशरूम उगाया जा सकता है?` : `Can we grow edible fresh mushrooms year-round in Jabalpur?`,
      a: isHindi ? `हाँ! सर्दियों में बटन और गर्मियों/बरसात में ओएस्टर और मिल्की मशरूम उगाकर आप जबलपुर में सालभर चक्रानुसार फसल उत्पादन प्राप्त कर सकते हैं।` : `Yes! By rotating seasonal button mushrooms in winter with heat-tolerant oyster or milky mushrooms in summer dry phases, year-round harvest is easily achievable.`
    },
    {
      q: isHindi ? `क्या आप जबलपुर में क्रॉपिंग इंफ्रास्ट्रक्चर के लिए सहायता प्रदान करते हैं?` : `Do you provide commercial buyback or setup guidance in Jabalpur, MP?`,
      a: isHindi ? `हाँ! हम सभी आकार के फार्म्स के निर्माण, नमी नियंत्रण उपकरणों और जबलपुर के स्थानीय थोक विक्रेताओं के साथ संपर्क के लिए सहायता प्रदान करते हैं।` : `Yes! We provide complete technical blueprints for room design, humidity controllers supply, and link high-yield networks with commercial mandi buyers.`
    }
  ];

  return {
    title,
    metaDesc,
    keywords: `jabalpur ${normSlug}, mushroom farming jabalpur, mushroom spawn jabalpur, mushroom training jabalpur, organic mushroom jabalpur`,
    h1: heading,
    articleHtml: finalHtml,
    faqs: dynamicFAQs
  };
}

// 4. Fully Exported Registry Map combining statically declared and dynamically generated overrides for Jabalpur
export const JABALPUR_MANUAL_OVERRIDES: Record<string, Partial<SEOManualContent>> = ALLOWED_JABALPUR_SLUGS.reduce((acc, slug) => {
  const specificKey = `jabalpur_${slug}`;
  const compiled = compileJabalpurCustomPage(slug);
  if (compiled) {
    acc[specificKey] = compiled;
  }
  return acc;
}, {} as Record<string, Partial<SEOManualContent>>);
