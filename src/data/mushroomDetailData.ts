export interface MushroomInfo {
  slug: string;
  name: string;
  scientific: string;
  hindiName: string;
  tagline: string;
  image: string;
  bgGradient: string;
  bannerImage: string;
  marketPrice: string;
  productionCost: string;
  profitMargin: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  parameters: {
    temperature: string;
    humidity: string;
    substrate: string;
    incubation: string;
    cropping: string;
    casing: "Required" | "Not Required" | "Optional";
  };
  overview: string;
  keyFeatures: string[];
  farmingSteps: { Title: string; Desc: string }[];
  marketDemandHtml: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const mushroomDetails: Record<string, MushroomInfo> = {
  "white-button": {
    slug: "white-button",
    name: "White Button Mushroom",
    scientific: "Agaricus bisporus",
    hindiName: "Contact Us (Button Mushroom)",
    tagline: "India's highest selling indoor commercial variety with 85%+ market share.",
    image: "https://images.unsplash.com/photo-1594315520265-6677f54c9354?auto=format&fit=crop&q=80&w=400",
    bannerImage: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1200",
    bgGradient: "from-amber-600/20 to-zinc-900/40",
    marketPrice: "₹140 - ₹220 per Kg",
    productionCost: "₹75 - ₹90 per Kg",
    profitMargin: "45% - 60%",
    difficulty: "Hard",
    parameters: {
      temperature: "14°C - 18°C (Cropping), 22°C - 25°C (Spawn Run)",
      humidity: "85% - 90% RH",
      substrate: "Pasteurized Wheat/Paddy Straw Compost (Synthetic/Natural)",
      incubation: "14 - 18 Days",
      cropping: "35 - 45 Days",
      casing: "Required"
    },
    overview: "White Button Mushroom is the absolute king of commercial mushroom farming in India, USA, and Europe. It is grown in high-tech, climate-controlled environmental setups utilizing PUF insulated panels and automated chiller/air handler units (AHUs). Cultivating button mushrooms requires strict compost formulation using pasteurized wheat straw or compost with nitrogen boosters. For optimal yield, adding a casing layer of pasteurized peat moss, coco peat, or well-rotted cow manure is critical. It offers highly stable year-round market demand from local wholesale markets, high-end hotels, supermarkets, and food processors.",
    keyFeatures: [
      "Maximum Commercial Viability: Accounts for major sales volume in modern food sectors.",
      "Fixed Pricing Contracts: Highly preferred by wholesale canning units and food processing industries.",
      "Year-round Controlled Cultivation: Grows flawlessly throughout the year inside modern climate insulated plants (AC setups).",
      "Excellent Culinary Versatility: Extensively used in domestic Indian curries, pizzas, soups, and processed snacks."
    ],
    farmingSteps: [
      {
        Title: "Compost Formulation & Phase-II Pasteurization",
        Desc: "Prepare compost using dry wheat straw, wheat bran, chicken manure, urea, and gypsum. Complete a clean Phase-II steam sterilization at 60°C to eliminate weeds, molds, and harmful pests."
      },
      {
        Title: "Spawning (Inoculation)",
        Desc: "Mix premium sterilization-certified active grain spawn with the cooled compost at a 0.5% - 0.8% ratio. Store spawn-run bags or trays in dark rooms maintained at a tight 23-25°C."
      },
      {
        Title: "Casing Soil Application",
        Desc: "Once mycelium covers the compost fully (approx 15 days), apply a 3-4 cm pasteurized casing soil layer (coco peat mixed with gypsum) to provide water retention and activate pinning."
      },
      {
        Title: "Pinning & Climate Regulation",
        Desc: "Reduce room air temperature sharply to 14-16°C and increase fresh air ventilation (CO2 regulation < 1000 ppm) to trigger uniform pinning. Maintain high ambient humidity."
      },
      {
        Title: "Harvesting & Flushing Cycles",
        Desc: "Harvest tight, white buttons before the veil breaks. Harvest is carried out in 3 clear flushes over a 30 to 45 days cropping phase. Keep picked buttons cold post-harvest."
      }
    ],
    marketDemandHtml: "Button mushroom has a stable <strong>premium pricing structure</strong> throughout India. Major hubs like Delhi NCR, Bangalore, Pune, Mumbai, Jabalpur, Lucknow, and Kolkata face continuous supply deficits. This setup is highly profitable when combined with government subsidy allocations (often 30% - 50% for commercial units).",
    seoTitle: "Commercial Button Mushroom Farming Guide & Setup Cost India",
    seoDescription: "Step-by-step Button Mushroom (Agaricus bisporus) farming guide in India. Learn composting parameters, casing requirements, spawn selection, and temperature control variables for high-yield units.",
    keywords: ["Button mushroom farming", "Agaricus bisporus cultivation", "Mushroom spawn suppliers", "climate controlled mushroom setup", "button mushroom compost preparation", "mushroom training India"]
  },
  "milky-mushroom": {
    slug: "milky-mushroom",
    name: "Milky Mushroom",
    scientific: "Calocybe indica",
    hindiName: "Contact Us (Milky Mushroom)",
    tagline: "The perfect summer cropping variety with an exceptionally long fresh shelf-life.",
    image: "https://images.unsplash.com/photo-1588636142475-a32433ef7e9b?auto=format&fit=crop&q=80&w=400",
    bannerImage: "https://images.unsplash.com/photo-1508747703725-719ae2c73ee8?auto=format&fit=crop&q=80&w=1200",
    bgGradient: "from-emerald-600/20 to-zinc-900/40",
    marketPrice: "₹120 - ₹180 per Kg",
    productionCost: "₹50 - ₹65 per Kg",
    profitMargin: "50% - 65%",
    difficulty: "Medium",
    parameters: {
      temperature: "25°C - 35°C (Ideal for Indian Summers)",
      humidity: "80% - 85% RH",
      substrate: "Chopped Paddy Straw or Wheat Straw",
      incubation: "20 - 25 Days",
      cropping: "25 - 30 Days",
      casing: "Required"
    },
    overview: "Milky Mushroom (Calocybe indica) is a beautiful, robust white mushroom native to tropical India. Unlike Button mushrooms which demand expensive sub-zero chiller setups, Milky mushrooms grow phenomenally in hot summer, tropical plains without heavy AC support. It is highly valued for its thick solid stems, attractive clean white appearance, and superb shelf life of 3-5 days at room temperature (and up to 15 days in refrigeration). Highly popular for small to mid-scale commercial growers in central and southern India.",
    keyFeatures: [
      "Excellent Heat Tolerance: Requires no heavy cooling equipment, performing brilliantly between 28°C and 35°C.",
      "Minimal Operating Cost: Extremely low electricity budget since heating/cooling costs are drastically minimized.",
      "High Shelf Stability: High density tissue reduces dehydration, making it highly suitable for long-distance transport.",
      "High Biological Efficiency: Yields up to 100% of dry substrate weight under standard commercial parameters."
    ],
    farmingSteps: [
      {
        Title: "Substrate Pre-treatment & Sterilization",
        Desc: "Chop fresh wheat/paddy straw into 2-4 cm bits. Soak in warm water with carbendazim and formalin (chemical sterilization) or expose to hot boiling water sterilization for 3 hours."
      },
      {
        Title: "Bagging & Grain Inoculation",
        Desc: "Spawn the sterilized straw in layers inside high-gauge transparent PP bags (3-4 layers of grain spawn). Pack firmly to optimize mycelium colonisation."
      },
      {
        Title: "Spawn Run Chamber Configuration",
        Desc: "Place inoculated bags in dark, warm incubation rooms at 25-30°C. Within 20-25 days, thick white cottony mycelium wraps the entire straw block."
      },
      {
        Title: "Casing Layer Application",
        Desc: "Cut bags horizontally into halves. Apply a 2-3 cm thick steam-pasteurized casing soil (sandy loam mixed with calcium carbonate/gypsum). Water adequately."
      },
      {
        Title: "Cropping & Light Trigger",
        Desc: "Move casing blocks to cropping units with 80% humidity, clean fresh air, and light diffusion (approx 200-500 lux). White button-shaped pins emerge in 8-12 days."
      }
    ],
    marketDemandHtml: "Milky mushroom is a highly profitable option for farmers in <strong>Madhya Pradesh, Uttar Pradesh, Bihar, Maharashtra, Tamil Nadu, and West Bengal</strong> during dry summer spells. It is extensively sold in wholesale markets as a summer substitute for button mushrooms.",
    seoTitle: "Milky Mushroom Farming in India | Low Cost Summer Cultivation",
    seoDescription: "Complete Milky Mushroom (Calocybe indica) cultivation method. Read about summer farming parameters, wheat straw pasteurization, casing soil recipe, and spawn seeding.",
    keywords: ["Milky mushroom farming", "Calocybe indica spawn", "summer mushroom cultivation", "casing soil recipe", "mushroom spawn price India", "low cost mushroom setup"]
  },
  "oyster": {
    slug: "oyster",
    name: "Oyster Mushroom",
    scientific: "Pleurotus ostreatus",
    hindiName: "Contact Us (Oyster Mushroom)",
    tagline: "The fastest growing variety requiring the absolute lowest initial setup capital.",
    image: "https://images.unsplash.com/photo-1620067675713-fbce88022b7c?auto=format&fit=crop&q=80&w=400",
    bannerImage: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=1200",
    bgGradient: "from-blue-600/20 to-zinc-900/40",
    marketPrice: "₹120 - ₹200 (Fresh), ₹500 - ₹900 (Dry) per Kg",
    productionCost: "₹40 - ₹50 per Kg",
    profitMargin: "60% - 120%",
    difficulty: "Easy",
    parameters: {
      temperature: "18°C - 28°C (Highly Adaptable)",
      humidity: "80% - 90% RH",
      substrate: "Wheat Straw, Paddy Straw, Cotton Waste, Sawdust",
      incubation: "12 - 15 Days",
      cropping: "15 - 20 Days",
      casing: "Not Required"
    },
    overview: "Oyster Mushroom is acclaimed worldwide as the easiest, fastest, and most adaptable mushroom variety for beginners and commercial projects. It is rich in proteins, fibres, vitamins, and minerals. Oyster mushrooms do not require complex casing soil phases. Additionally, dry oyster mushrooms have massive industrial application in medicinal powders, protein supplements, pickles, and soups. Highly flexible and resilient, oysters can grow on almost any agricultural waste material.",
    keyFeatures: [
      "Ultra-Fast Production Cycles: Ready to harvest in just 25 days from inoculation, ensuring incredibly rapid cash flows.",
      "Extremely Low Investment Barriers: Perfect for rural home-based setups or start-ups requiring minimum infra costs.",
      "Outstanding Dehydration Traits: Can be dried under structural solar dryers and stored for up to 1 year without spoilage.",
      "Diverse Color Variants: Available in attractive profiles including White, Grey, Pink, Golden Yellow, and Blue Oysters."
    ],
    farmingSteps: [
      {
        Title: "Straw Preparation & Moistening",
        Desc: "Soak clean agricultural straw (wheat/rice) in water for 12-16 hours. Drain excess water until moisture is around 65% (test by squeezing; no free water dropping)."
      },
      {
        Title: "Sterilization / Chemical Sanitation",
        Desc: "Boil straw in water for 1-2 hours or sanitize chemically inside a solution of formaldehye and carbendazim fungicide to destroy wild spores."
      },
      {
        Title: "Seeding & Layer Inoculation",
        Desc: "Perform spawning in a sanitized, draft-free room. Mix spawn at a rate of 2% by dry weight of straw. Fill inside perforated PP bags and pack firmly."
      },
      {
        Title: "Infected bag incubation",
        Desc: "Keep spawned bags on racks in a dark room at 24-28°C. Ensure no direct light. The straw block turns completely white with mycelium within 15 days."
      },
      {
        Title: "Fruiting & Harvesting",
        Desc: "Slightly cut the plastic film to expose nodes. Spray a gentle water mist twice daily to maintain high air humidity. Pinheads emerge and mature in 3 days. Pick manually in clusters."
      }
    ],
    marketDemandHtml: "Dry oyster mushrooms command excellent <strong>export margins</strong> in Japan, USA, and Europe. Fresh oysters are heavily supplied to high-end Chinese restaurants, star hotels, and organic food chain outlets across modern Indian metros.",
    seoTitle: "Oyster Mushroom Farming Guide | Dhingri Mushroom Training",
    seoDescription: "Step-by-step Oyster Mushroom (Pleurotus) cultivation process. Learn agricultural waste pasteurization, spawn rates, drying techniques, and commercial yield parameters.",
    keywords: ["Oyster mushroom cultivation", "Dhingri mushroom training", "Pleurotus ostreatus guide", "buy oyster spawn seed", "dry mushroom business India"]
  },
  "shiitake": {
    slug: "shiitake",
    name: "Shiitake Mushroom",
    scientific: "Lentinula edodes",
    hindiName: "शीताके मशरूम (Shiitake Mushroom)",
    tagline: "The world's second most popular mushroom, offering massive market margins.",
    image: "https://images.unsplash.com/photo-1601628033621-0a68d76a75f1?auto=format&fit=crop&q=80&w=400",
    bannerImage: "https://images.unsplash.com/photo-1511113593219-5d666d9b4b0a?auto=format&fit=crop&q=80&w=1200",
    bgGradient: "from-amber-800/20 to-zinc-900/40",
    marketPrice: "₹400 - ₹900 per Kg",
    productionCost: "₹180 - ₹250 per Kg",
    profitMargin: "100% - 250%",
    difficulty: "Expert",
    parameters: {
      temperature: "14°C - 20°C (Inoculation), 12°C - 16°C (Fruiting)",
      humidity: "85% - 92% RH",
      substrate: "Hardwood Sawdust mixed with Rice/Wheat Bran",
      incubation: "50 - 75 Days (Long)",
      cropping: "40 - 50 Days",
      casing: "Not Required"
    },
    overview: "Shiitake (Lentinula edodes) is a highly esteemed culinary and medicinal mushroom native to East Asia. It is widely demanded in fine dining, gourmet pizza parlors, oriental cuisines, and nutritional drug extraction industries. Growing Shiitake is synthetically complex, requiring specialized autoclaved substrate bags (called sawdust logs) and a highly sterile environment. While it has a much longer incubation period (up to 70 days for browning), its exceptionally high wholesale price makes it an elite choice for commercial entrepreneurs.",
    keyFeatures: [
      "Extremely Lucrative Gourmet Segments: Sells at premium rates in modern organic markets and star rating restaurants.",
      "Medicinal & Health Demand: High content of lentinan makes it a famous antioxidant and immune system promoter.",
      "Dry Export Viability: Easily processed into gourmet dried Shiitake chops which sell at up to ₹2500/kg globally.",
      "Excellent Texture and Umami: Rich, savory, meaty texture has made it an incredibly popular vegan meat substitute."
    ],
    farmingSteps: [
      {
        Title: "High-grade Hardwood Substrate formulation",
        Desc: "Formulate sawdust blocks using oak, maple, or rubber tree sawdust. Supplement with 20% wheat bran and 1% calcium sulfate (gypsum) for mineral nutrition."
      },
      {
        Title: "Autoclavation & Heat Sterilization",
        Desc: "Compress the substrate into special heat-resistant filter patch bags. Sterilize bags in a high-pressure thermal autoclave unit at 121°C for 3-4 hours."
      },
      {
        Title: "Sterile Laminar Flow Inoculation",
        Desc: "Under HEPA-filtered laminar airflow benches, inject high-vitality Shiitake sawdust spawn into the cooled bags. Seal immediately to prevent spore bypass."
      },
      {
        Title: "Sawdust Log Browning Phase",
        Desc: "Incubate blocks at 20-22°C for 60+ days. The logs will form popcorn-like white bumps first, and slowly oxidize into a tough brown bark (melanization)."
      },
      {
        Title: "Cold Temperature Shock & Pinning",
        Desc: "Remove plastic bags entirely. Subject bare logs to a cold-water shock bath (10-12°C) for 12 hours. Place blocks on fruiting racks at 15°C to induce pins."
      }
    ],
    marketDemandHtml: "Shiitake is heavily consumed in <strong>Delhi, Mumbai, Goa, Bangalore, and Pune</strong>. Cultivators with automated setups earn massive profits by distributing directly to retail chains, and hotels.",
    seoTitle: "Shiitake Mushroom Farming Price and Wood Sawdust Log Setup Cost",
    seoDescription: "Exotic Shiitake (Lentinula edodes) commercial setup guide. How to make formulation blocks, autoclave sterilization, laminar flow spawning, and colonization.",
    keywords: ["Shiitake mushroom farming", "sawdust log formulation", "autoclave mushroom unit", "HEPA laminar flow inoculation", "premium food setup India"]
  },
  "lions-mane": {
    slug: "lions-mane",
    name: "Lion's Mane",
    scientific: "Hericium erinaceus",
    hindiName: "लायंस मेन मशरूम / हेरीसियम (Lion's Mane)",
    tagline: "The world's premium brain-health fungus, prized by health enthusiasts.",
    image: "https://images.unsplash.com/photo-1628154109438-e6b360706859?auto=format&fit=crop&q=80&w=400",
    bannerImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    bgGradient: "from-purple-600/20 to-zinc-900/40",
    marketPrice: "₹400 - ₹800 (Fresh), ₹3000 - ₹6000 (Dry) per Kg",
    productionCost: "₹150 - ₹220 per Kg",
    profitMargin: "150% - 300%",
    difficulty: "Medium",
    parameters: {
      temperature: "16°C - 24°C (Highly Adaptable)",
      humidity: "85% - 95% RH",
      substrate: "Hardwood Sawdust supplemented with soy hulls (Masters Mix)",
      incubation: "16 - 20 Days",
      cropping: "14 - 18 Days",
      casing: "Not Required"
    },
    overview: "Lion's Mane (Hericium erinaceus) is a spectacular white, shaggy mushroom resembling a lion's head. It is hailed as an elite superfood for its neuroprotective elements, containing hericenones and erinacines that stimulate Nerve Growth Factor (NGF). Lion's Mane has a delicate, sweet flavor highly mimicking lobster or crab meat. Prized by culinary gourmet chefs and pharmaceutical drug developers, this mushroom setup is extremely high-yielding and can be cultivated easily using sterilized sawdust-based blocks.",
    keyFeatures: [
      "Outstanding Cognitive Health Support: Clinically proven to enhance memory, concentration, and focus, creating a giant supplement market.",
      "High Commercial Value: Fresh yield commands astronomical pricing in local gourmet vegetable markets.",
      "Fast Inoculation to Harvest: Ready to fruit in as little as 3 weeks from spawning on sterilized sawdust.",
      "Elite Vegan Crab Meat Substitute: Extremely popular in upscale metropolitan plant-based vegan restaurants."
    ],
    farmingSteps: [
      {
        Title: "Masters Mix Substrate Formulation",
        Desc: "Mix hardwood sawdust with organic soy hulls in a 50:50 ratio with 65% water content. This is known as the highly productive Masters Mix."
      },
      {
        Title: "Bag Sterilization",
        Desc: "Pack formulation in gusseted filter patch autoclave bags. Sterilize in atmospheric steam or pressure autoclaves to guarantee mold prevention."
      },
      {
        Title: "Spawning on Laminar Airflow bench",
        Desc: "Introduce pristine liquid or grain spawn inside a sterile laminar chamber. Seal bags tightly and shake lightly to disperse the grain."
      },
      {
        Title: "Incubation (Darkness)",
        Desc: "Store blocks in a clean, dark area at 20-22°C. Within 18 days, fine, wispy white mycelium will completely colonize the wood sawdust."
      },
      {
        Title: "Sリット Fruiting (X-Cuts)",
        Desc: "Move blocks to cropping. Make small X-shaped slits on the face of the bag. Maintain misty 90% humidity and low CO2 levels. Shaggy spines emerge within 10 days."
      }
    ],
    marketDemandHtml: "Lion's Mane represents a high-growth sector. It is dried and grounded into <strong>nootropic supplements</strong> and herbal coffee blends, pulling huge margins from health-conscious consumers in urban centers.",
    seoTitle: "Lion's Mane Mushroom Farming India | Nootropic Culinary Cultivation",
    seoDescription: "Unlock the secrets of Lion's Mane (Hericium erinaceus) mushroom cultivation. Discover Masters Mix sawdust recipe, incubation room guidelines, and harvest cycles.",
    keywords: ["Lions mane mushroom", "Hericium erinaceus setup", "masters mix substrate recipe", "nootropic food farming", "medicinal mushroom price India"]
  },
  "reishi": {
    slug: "reishi",
    name: "Reishi Mushroom",
    scientific: "Ganoderma lucidum",
    hindiName: "ऋषि मशरूम / गेनोडर्मा (Reishi / Ganoderma)",
    tagline: "The 'Mushroom of Immortality' is a world-renowned botanical medicinal superstar.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
    bgGradient: "from-red-900/20 to-zinc-900/40",
    marketPrice: "₹1000 - ₹2500 per Kg (Dry)",
    productionCost: "₹300 - ₹400 per Kg (Dry)",
    profitMargin: "200% - 500%",
    difficulty: "Hard",
    parameters: {
      temperature: "24°C - 30°C (Warm Loving)",
      humidity: "85% - 95% RH",
      substrate: "Broadleaf hardwood sawdust supplemented with grain bran",
      incubation: "25 - 35 Days",
      cropping: "60 - 90 Days",
      casing: "Not Required"
    },
    overview: "Reishi (Ganoderma lucidum), locally referred to in alternative medicine setups, is a woody polypore mushroom that is highly valued for therapeutic, anti-inflammatory, and immune boosting purposes rather than direct culinary consumption. Famously called the 'King of Herbs' in Chinese medicine, it is dry-harvested and treated using specialized boiling or extraction techniques. Growing Reishi requires broadleaf hardwood sawdust and a warm room setup (25-28°C), which perfectly fits natural conditions across many Indian states without high climate energy costs.",
    keyFeatures: [
      "Vast Pharmaceutical Market: Extensively processed into premium health powders, tea mixtures, capsules, and anti-aging syrups.",
      "High Heat Adaptability: Thrives in high humidity and warm temperatures, making summer greenhouse farming very viable.",
      "Exceptional Post-Harvest Stability: Can be dried until fully hard and woody, which allows storage for years without damage.",
      "High Pricing Constants: Stable pricing index compared to fresh perishable crops due to standard wellness contracts."
    ],
    farmingSteps: [
      {
        Title: "Substrate & Supplementation Mixing",
        Desc: "Prepare sawdust from broadleaf deciduous trees. Add 15% wheat/rice bran, 1% sucrose, and 1.5% calcium carbonate. Adjust moisture to 63%."
      },
      {
        Title: "Thermal Bag Autoclavation",
        Desc: "Pack inside durable polypropylene bags. Autoclave under high pressure steam for 3 hours to completely eradicate mold spores."
      },
      {
        Title: "Inoculation & Room Colonization",
        Desc: "Inoculate blocks with clean grain spawn inside a sterile laminar station. Store spawned blocks in dark rooms at 25-28°C for 30 days."
      },
      {
        Title: "Antler or Conk Formation Setup",
        Desc: "For antler-shaped growth, maintain high CO2. For flat kidney-shaped conks, introduce fresh air ventilation (CO2 < 1000 ppm) and light."
      },
      {
        Title: "Harvesting & Solar Dehydration",
        Desc: "Harvest when the white/yellow outer margins turn dark red-brown. Dry the conks in professional solar tunnel dryers until rigid. Store in clean vacuum bags."
      }
    ],
    marketDemandHtml: "Ganoderma lucidum enjoys continuous purchase interest from <strong>ayurvedic brands, wellness supplements startups, and premium export agencies</strong> in Southeast Asia and Europe.",
    seoTitle: "Ganoderma Lucidum Reishi Mushroom Farming Setup Price India",
    seoDescription: "Exhaustive details on Reishi Mushroom (Ganoderma lucidum) commercial cultivation. Find optimal temperature, sawdust sterilization methods, and dry supply prices.",
    keywords: ["Reishi mushroom farming", "Ganoderma lucidum spawn", "medicinal mushroom cultivation", "dry reishi cost India", "ayurvedic extract mushroom setup"]
  },
  "cordyceps": {
    slug: "cordyceps",
    name: "Cordyceps Militaris",
    scientific: "Cordyceps militaris",
    hindiName: "कॉर्डिसेप्स मशरूम (Cordyceps Militaris)",
    tagline: "The gold standard of medicinal fungi, fetching astronomical market pricing.",
    image: "https://images.unsplash.com/photo-1635338148386-8d59fe18804a?auto=format&fit=crop&q=80&w=400",
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    bgGradient: "from-yellow-600/20 to-zinc-900/40",
    marketPrice: "₹15,000 - ₹30,000 per Kg (Dry Commercial)",
    productionCost: "₹4,000 - ₹6,000 per Kg",
    profitMargin: "300% - 500%",
    difficulty: "Expert",
    parameters: {
      temperature: "18°C - 22°C (Highly Controlled Room Required)",
      humidity: "75% - 85% RH",
      substrate: "Liquid Nutrient Medium on Brown Rice/Millets base",
      incubation: "12 - 15 Days (Darkness)",
      cropping: "45 - 55 Days (Light Induction)",
      casing: "Not Required"
    },
    overview: "Cordyceps Militaris is the ultimate premium product in current medical agriculture. Grown entirely in sterile state-of-the-art laboratory environments inside glass/polypropylene jars, it does not require standard wood or straw compost. Instead, it utilizes liquid nutrient broth supplemented with vitamins and trace elements laid atop a substrate of brown rice or millets. Consistently demanded by sport nutrition houses, anti-fatigue capsule brands, and longevity supplement channels globally, Cordyceps represents the absolute highest profit margin in modern agri-tech.",
    keyFeatures: [
      "Astronomical Market Value: Market retail rates range from ₹50,000 to ₹1.5 Lakhs per kg for pure certified strands.",
      "Pure Lab-Grade In-Door Setup: Completely free of conventional farm dirt or outdoor pollution, grown inside clean rooms.",
      "Massive Bio-Active Cordycepin levels: High levels of Adenosine and Cordycepin make it an extremely high-growth product.",
      "Complete Climate Autonomy: Completely unaffected by weather variables since growth rooms utilize absolute light/temp automation."
    ],
    farmingSteps: [
      {
        Title: "Liquid Culturing (Inoculum Prep)",
        Desc: "Grow deep mycelial broths in specialized shaker flasks using glucose, peptone, yeast extract, and sterile liquid media formats."
      },
      {
        Title: "Substrate Jar Autoclavation",
        Desc: "Fill broad-mouth autoclavable glass or PP jars with brown rice (or millet grain) mixed with nutrient liquid. Steam at 121°C inside autoclaves."
      },
      {
        Title: "Liquid Inoculation under Clean Hoods",
        Desc: "Using a high-efficiency laminar workspace and air pumps, inject 5-10 ml of active liquid culture broth inside cooled grain jars. Seal sterilizing caps immediately."
      },
      {
        Title: "Dark Incubation Period",
        Desc: "Store jars in dark clean storage maintained at 20-22°C. The orange-hued mycelium fully binds and digests the rice within 12-14 days."
      },
      {
        Title: "Cold-Shock & LED Photoperiod Exposure",
        Desc: "Shift jars to cropping racks equipped with specialized LED strip lights (producing 500-1000 lux). Drop room temperature to 18°C. Bright orange fruit bodies shoot up from the rice bed. Harvest in 50 days."
      }
    ],
    marketDemandHtml: "Cordyceps represents an <strong>elite investment sector</strong>. Setup projects typically include fully integrated sterilization setups, clean HEPA filters, air shower chambers, and testing kits to maintain pharmaceutical-grade export standard products.",
    seoTitle: "Cordyceps Militaris Lab Setup Cost and Cultivation Training India",
    seoDescription: "Pristine Cordyceps Militaris laboratory cultivation method on brown rice. Learn liquid spawn formulation specs, LED light photoperiod layout, and dry market rates.",
    keywords: ["Cordyceps militaris lab setup", "liquid spawn preparation", "cordycepin extraction price", "premium lab mushroom cost", "mushroom clean room technology"]
  },
  "paddy-straw": {
    slug: "paddy-straw",
    name: "Paddy Straw Mushroom",
    scientific: "Volvariella volvacea",
    hindiName: "धान का पुआल मशरूम (Paddy Straw)",
    tagline: "Highly popular in South-East Asia and Eastern Indian zones, growing incredibly fast.",
    image: "https://images.unsplash.com/photo-1610450943039-50c19ec8074d?auto=format&fit=crop&q=80&w=400",
    bannerImage: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=1200",
    bgGradient: "from-amber-700/20 to-zinc-900/40",
    marketPrice: "₹100 - ₹150 per Kg",
    productionCost: "₹30 - ₹45 per Kg",
    profitMargin: "65% - 100%",
    difficulty: "Easy",
    parameters: {
      temperature: "30°C - 38°C (Extreme Thermophilic / Hot Temperature)",
      humidity: "85% - 90% RH",
      substrate: "Bundled Paddy Straw / Cotton waste / Waste paper",
      incubation: "7 - 9 Days (Incredibly Fast)",
      cropping: "10 - 15 Days",
      casing: "Not Required"
    },
    overview: "Paddy Straw Mushroom (Volvariella volvacea) is a warm-loving classic cultivated widely in Asian tropical belts. In India, it is highly popular in coastal states like Odisha, West Bengal, Assam, Andhra Pradesh, and Kerala. Extremely unique for its ultra-fast spawning to harvesting timeline (complete cropping occurs within 10-15 days), it works beautifully on bundled rice straw beds. Highly nutritious with a savory egg-shaped dome, this variety handles tropical monsoon heat easily with near-zero power budgets.",
    keyFeatures: [
      "Fastest Micro-Growth Cycle: Ready for cropping in under 10 days, making it the fastest harvest in the entire kingdom.",
      "Eco-Friendly Paddy Utilization: Provides an exceptional alternate income stream for rice farmers, reducing stubble burning.",
      "Zero Cooling Requirements: Thrives in high summer monsoon heat up to 38°C. Perfect for rural agricultural environments.",
      "Excellent Culinary Taste: Possesses a delicious, delicate egg-like umami flavor highly revered in coastal dishes."
    ],
    farmingSteps: [
      {
        Title: "Paddy Straw Bundling",
        Desc: "Sort clean, golden paddy straw. Tie into tight uniform bundles weighing 1-1.5 Kg each. Soak flat bundles in pure water for 12 hours."
      },
      {
        Title: "Bed Construction & Layout",
        Desc: "Place bundles in cross-layered rows on elevated bamboo frames. Sprinkle grain spawn and red-gram dal powder (as nitrogen supplement) between layers."
      },
      {
        Title: "Clean Tarpaulin Cover Incubation",
        Desc: "Cover the biological bed completely with clean, dark plastic tarpaulins for 7-8 days to accumulate heat (core bed temp should rise to 35-38°C)."
      },
      {
        Title: "Air Ventilation & Moisture",
        Desc: "Remove sheets gently after mycelium growth. Maintain high misty humidity with water sprayers twice daily while offering clean ventilation."
      },
      {
        Title: "Egg-Stage Picking",
        Desc: "Tiny button heads appear on day 9-10. Harvest at the early 'egg stage' before the umbrella-like veil ruptures for maximum market price."
      }
    ],
    marketDemandHtml: "Paddy straw mushroom has a massive consumer base in <strong>Bhubaneswar, Cuttack, Kolkata, Guwahati, and Cochin</strong>, where fresh daily landings are grabbed within hours at wholesale mandis.",
    seoTitle: "Paddy Straw Mushroom Cultivation in Odisha and West Bengal",
    seoDescription: "Exhaustive review of Paddy Straw (Volvariella volvacea) agricultural setup. Learn fast bed construction, bundle parameters, temperature heat preservation, and harvesting tips.",
    keywords: ["Paddy straw mushroom", "Volvariella volvacea spawn", "paddy straw bed cultivation", "Odisha mushroom farming", "fast-growing crop setup"]
  }
};
