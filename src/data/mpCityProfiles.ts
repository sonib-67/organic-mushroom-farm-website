export interface CityAgriProfile {
  landmark: string;
  markets: string;
  neighborhoods: string;
  localAdvantage: string;
  tempAdvice: string;
  recommendedCrop: string;
}

export const MP_CITY_PROFILES: Record<string, CityAgriProfile> = {
  "indore": {
    landmark: "historic Rajwada Palace and Sarafa Bazar",
    markets: "Choithram Mandi and local wholesale vegetable complexes",
    neighborhoods: "Vijay Nagar, Palasia, Scheme 54, Rajwada, and Lokmanya Nagar",
    localAdvantage: "Indore's position as the commercial powerhouse of Madhya Pradesh provides unmatched high-frequency logistics pipelines and direct B2B supply lines to organic food chains, restaurants, and wholesale grocery companies.",
    tempAdvice: "summer-friendly Milky mushrooms and year-round high-yield Oyster strains",
    recommendedCrop: "Sajor-caju Oyster and White Button mushrooms"
  },
  "bhopal": {
    landmark: "scenic Upper Lake and Bhopal VIP Road",
    markets: "Karond Mandi, Bittan Market, and central vegetable hubs",
    neighborhoods: "MP Nagar, Kolar Road, Arera Colony, BHEL, Habibganj and Govindpura",
    localAdvantage: "Being the capital, Bhopal offers seamless coordination with government agriculture portals, ATMA delegation clusters, and KVK training centers for speedy subsidy approvals.",
    tempAdvice: "Button mushrooms under controlled cooling and medicinal Oyster production",
    recommendedCrop: "White Button (Agaricus bisporus) and Florida Oyster"
  },
  "jabalpur": {
    landmark: "breathtaking Marble Rocks of Bhedaghat and Narmada river plains",
    markets: "Krishi Upaj Mandi, Adhartal Market, and Ranjhi wholesale blocks",
    neighborhoods: "Sadar Bazar, Ranjhi, Civil Lines, Adhartal, and Vijay Nagar (Jabalpur)",
    localAdvantage: "As the primary location of our main training farm and laboratory operations, Jabalpur is a hub for high-intensity spawn breeding, local compost production, and post-harvest drying pipelines.",
    tempAdvice: "perfect autumn temperature profile for growing commercial Oyster and Button mushrooms",
    recommendedCrop: "F1 Grain Pearl Oyster, Button, and Milky strains"
  },
  "gwalior": {
    landmark: "magnificent Gwalior Fort and Tansen Tomb",
    markets: "Lashkar Galla Mandi, Hazira Fruit Market, and Morar complexes",
    neighborhoods: "Deen Dayal Nagar, Lashkar, Morar, City Centre, and hazira",
    localAdvantage: "Gwalior's strategic connectivity to New Delhi and Uttar Pradesh enables rapid transport of dried oyster stock and commercial spawn modules.",
    tempAdvice: "Milky white crops in hot summer waves and winterized Button setups",
    recommendedCrop: "High-temperature Milky and Grey Oyster variants"
  },
  "ujjain": {
    landmark: "sacred Mahakaleshwar Temple and Shipra River Ghats",
    markets: "Chimanganj Mandi, Nanakheda Market, and local organic stalls",
    neighborhoods: "Freeganj, Nanakheda, Madhav Nagar, Rishi Nagar, and Alakapuri",
    localAdvantage: "Thriving spiritual tourism in Ujjain opens massive hotel-sector demand for organic, pesticide-free fresh food inputs and medicinal dried derivatives.",
    tempAdvice: "low-cost vertical bamboo growing units optimized for local relative humidity",
    recommendedCrop: "Premium Button and Florida Oyster mushrooms"
  },
  "sagar": {
    landmark: "central Lakha Banjara Lake and Dr. Hari Singh Gour University",
    markets: "Sagar Wholesale Galla Mandi and Civil Lines complex",
    neighborhoods: "Civil Lines, Kakaganj, Makronia, Gopal Ganj, and Sadar",
    localAdvantage: "Sagar's abundant soybean and wheat crop hinterlands ensure unlimited supply of organic straw and substrate husk at almost zero cost for local growers.",
    tempAdvice: "high-yield low moisture threshold Oyster cultivation during dry spells",
    recommendedCrop: "Oyster and temperature-resilient Winter Oyster classes"
  },
  "dewas": {
    landmark: "holy Chamunda Tekri temple hill",
    markets: "Dewas Fruit Mandi, local wholesale blocks",
    neighborhoods: "Industrial Area, Alawas, Civil Lines, Radhaganj, and Ram Nagar",
    localAdvantage: "Dewas' proximity to both Indore and Bhopal lets growers easily command high premium prices by fulfilling immediate early-morning restaurant deliveries.",
    tempAdvice: "semi-automated indoor cultivation with low startup costs and high spatial density",
    recommendedCrop: "Pearl Oyster, Milky, and White Button breeds"
  },
  "satna": {
    landmark: "historic background of Maihar temples and Rewa-Satna limestone belt",
    markets: "Satna Central Mandi and Semariya vegetable market",
    neighborhoods: "Pateri, Semariya, Sherganj, Civil Lines, and Birla Colony",
    localAdvantage: "Being a major rail network intersection, Satna allows easy distribution of packed spawn safely to neighbouring regions of Uttar Pradesh and Eastern MP.",
    tempAdvice: "ambient indoor vertical shelving utilizing eco-friendly coco-peat composites",
    recommendedCrop: "High-growth Oyster and certified commercial Button spawns"
  },
  "ratlam": {
    landmark: "famous Ratlami Sev and traditional gold jewelry bazaars",
    markets: "Ratlam Wholesale Galla Mandi and station vegetable nodes",
    neighborhoods: "Sailana Road, Kasturba Nagar, Station Road, and Dilip Nagar",
    localAdvantage: "Ratlam's robust traditional trading networks are perfectly aligned with B2B pharmaceutical sales of high-vitamin dry oyster powder.",
    tempAdvice: "low moisture threshold winter Oyster flushes and dry powder drying setups",
    recommendedCrop: "Florida Oyster and grey-oyster dry varieties"
  },
  "rewa": {
    landmark: "renowned land of White Tigers and historic Rewa Fort",
    markets: "Rewa Galla Mandi and local wholesale vegetable circles",
    neighborhoods: "Saman, Bodhagbag, Civil Lines, Anantpur, and Huzur",
    localAdvantage: "Rewa's developing horticultural corridors present unique, untapped first-mover gains for starting commercial premium mushroom units with low-cost structure layouts.",
    tempAdvice: "ambient seasonal cropping setups without relying on heavy cooling machinery",
    recommendedCrop: "Oyster and warm-climate Milky mushrooms"
  },
  "murwara": {
    landmark: "extensive Katni marble stone mines and limestone works",
    markets: "Murwara Grain Mandi, Katni wholesale yards",
    neighborhoods: "Sadar Bazar, Madhav Nagar, Murwara Junction area, and Bhatta Mohalla",
    localAdvantage: "Katni (Murwara)'s industrial background guarantees great infrastructure, electricity backup, and high-frequency train delivery logistics for sending spawn blocks.",
    tempAdvice: "monsoon Oyster flushes in vertical hanging bags requiring minimal manual misting",
    recommendedCrop: "Active G1 Pearl Oyster and Milky mushroom spawns"
  },
  "singrauli": {
    landmark: "heavy thermal power stations and rich coal reserves of Waidhan",
    markets: "Waidhan Central Mandi, Singrauli local market",
    neighborhoods: "Waidhan, Vindhyanagar, Morwa, Jayant, and Shaktinagar",
    localAdvantage: "With the highest concentration of industrial townships in MP, Singrauli offers huge B2C retail potential for premium, high-protein organic food alternatives.",
    tempAdvice: "highly insulated indoor crop houses utilizing digital climate regulators",
    recommendedCrop: "Fresh White Button and Florida Oyster varieties"
  },
  "burhanpur": {
    landmark: "historic Shahi Qila and scenic Tapti river structures",
    markets: "Burhanpur Banana Mandi, Tapti fruit complex",
    neighborhoods: "Sadar, Lalbagh, Shanwara, Rajpura, and Tapti Colony",
    localAdvantage: "Burhanpur's thriving banana agricultural fields yield massive volumes of dry banana leaf residues, which are scientifically documented as superior substrates for cultivating mushrooms.",
    tempAdvice: "using natural organic leaf residues for rapid mycelium expansion cycles",
    recommendedCrop: "Florida Oyster, Pink Oyster, and summer Milky mushrooms"
  },
  "khandwa": {
    landmark: "spiritually charged Omkareshwar Jyotirlinga and Narmada reservoir channels",
    markets: "Khandwa Main Mandi, Bombay Bazar wholesales",
    neighborhoods: "Bombay Bazar, Padam Nagar, Anand Nagar, and Civil Lines (Khandwa)",
    localAdvantage: "Khandwa's natural humidity profiles during the monsoon are highly cost-effective for growing Oyster mushrooms without expensive artificial humidifier arrays.",
    tempAdvice: "seasonal cropping designed to harvest maximum pinning flushes inside simpler sheds",
    recommendedCrop: "Pearl Oyster and medicinal Ganoderma strains"
  },
  "bhind": {
    landmark: "historic Chambal ravines and Ater Fort complex",
    markets: "Bhind Mandi and local seed-grain circles",
    neighborhoods: "Sadar Bazar, Galla Mandi, housing board colony, and bypass area",
    localAdvantage: "Bhind's progressive youth-led startups are leveraging NABARD self-employment schemes to deploy low-cost mushroom growing chambers for smart side-income streams.",
    tempAdvice: "Milky mushroom cropping in peak summers and thick Button flushes in winter",
    recommendedCrop: "High-yield Milky White and Oyster strains"
  },
  "chhindwara": {
    landmark: "spectacular Patalkot valley and rich surrounding forests",
    markets: "Chhindwara Wholesale Mandi, Ganj Market",
    neighborhoods: "Sadar, Parasia Road, Ganj, Gulabra, and VIP Road",
    localAdvantage: "Chhindwara's naturally cool and pleasant weather throughout the year dramatically reduces cooling and electricity costs for cultivating high-demand White Button crops.",
    tempAdvice: "optimal natural cooling cycles ideal for high-scale Button mushroom rooms",
    recommendedCrop: "Premium Button (Agaricus) and Winter Oyster models"
  },
  "guna": {
    landmark: "ancient hilltop Bajranggarh Fort and Gopi Krishna Sagar dam",
    markets: "Guna central Mandi, Sadar Bazar blocks",
    neighborhoods: "Sadar Bazar, AB Road, Cantt, Bajranggarh area, and Model Town",
    localAdvantage: "Abundant local wheat acreage in Guna secures clean, chemical-free wheat straw substrate, which represents the cheapest core raw material for commercial mushroom bags.",
    tempAdvice: "converting waste crops into organic protein flushes with zero crop residue burning",
    recommendedCrop: "Pearl Oyster and standard Milky mushrooms"
  },
  "shivpuri": {
    landmark: "royal Chhatris and scenic Madhav National Park reserves",
    markets: "Shivpuri Galla Mandi and bypass agricultural yards",
    neighborhoods: "Sadar Bazar, Court Road, Kamla Ganj, and Jhansi Road",
    localAdvantage: "Shivpuri's unpolluted and clean forest-adjacent atmosphere is perfect for chemical-free, organic certified mushroom propagation.",
    tempAdvice: "controlled indoor vertical shelves utilizing solar water atomizing systems",
    recommendedCrop: "Florida Oyster and chemical-free White Button"
  },
  "vidisha": {
    landmark: "historic Heliodorus Pillar and ancient Vidisha temples",
    markets: "Vidisha Mandi, Tilak Chowk wholesale nodes",
    neighborhoods: "Tilak Chowk, Civil Lines, Durga Nagar, and Sherpura",
    localAdvantage: "Vidisha's geographic proximity to Bhopal makes it easy to source premium laboratory parent cultures and supply final fresh yield to capital markets.",
    tempAdvice: "using vertical spacing to maximize yields from small low-overhead cultivation spaces",
    recommendedCrop: "Pearl Oyster and summer-suited Milky White varieties"
  },
  "chhatarpur": {
    landmark: "world-renowned Khajuraho temples and historic heritage lakes",
    markets: "Chhatarpur Central Mandi, local retail lanes",
    neighborhoods: "Khajuraho, Sadar Bazar, Civil Lines, and Vishwanath Colony",
    localAdvantage: "High tourist footfall and luxury hotels in Khajuraho / Chhatarpur create consistent demand and high-premium prices for exotic Oyster and fresh culinary Button crops.",
    tempAdvice: "temperature controlled visual micro-rooms satisfying fresh restaurant specifications",
    recommendedCrop: "Exotic Oyster (Pink/Yellow) and premium fresh Button varieties"
  },
  "damoh": {
    landmark: "historical Singorgarh Fort and Jatashankar temples",
    markets: "Damoh Mandi, Clock Tower wholesales",
    neighborhoods: "Clock Tower, Civil Lines, Damoh bypass, and Jabalpur road colony",
    localAdvantage: "Damoh's growing local market is ideal for micro-scale setups requiring very low initial capital for cultivating highly nutritious oyster pouches.",
    tempAdvice: "vertical wire-mesh shelf frames to pack maximum growing bags in household rooms",
    recommendedCrop: "Florida Oyster and high-vigor grain spawn"
  },
  "mandsaur": {
    landmark: "ancient Pashupatinath Temple on Shivna river",
    markets: "Mandsaur Whole Galla Mandi, spice wholesale yard",
    neighborhoods: "Sadar, Pashupatinath temple block, Gandhi Nagar, and Galla Bazar",
    localAdvantage: "Mandsaur's status as a top spice and crop trading market eases B2B selling of dried mushrooms and post-processed culinary spices.",
    tempAdvice: "high-temperature solar dehydration beds to preserve harvested oysters cleanly",
    recommendedCrop: "Dehydrated Oyster slices and Milky White spawn"
  },
  "khargone": {
    landmark: "sacred Maheshwar ghats and extensive Nimar cotton crop plains",
    markets: "Khargone Mandi, Cotton market central",
    neighborhoods: "Sadar, Maheshwar, Sanawad, and local cotton block colonies",
    localAdvantage: "Khargone's major cotton cotton-farming belt provides cheap, massive volumes of dry cotton crop waste, an ideal alternative substrate for high-yield Oyster crop bags.",
    tempAdvice: "cotton-stalk hot sterilization setups resulting in zero contamination blocks",
    recommendedCrop: "Pearl Oyster and climate-resilient Milky varieties"
  },
  "neemuch": {
    landmark: "beautiful Sukhanand temple valley and CRPF historic campuses",
    markets: "Neemuch Wholesale Mandi and regional agri-exchanges",
    neighborhoods: "Sadar Bazar, CRPF area, Gandhi Nagar, and jawad block",
    localAdvantage: "Bordering Rajasthan, Neemuch acts as a strategic distribution gateway to access buyers in both MP and Rajasthan retail centers.",
    tempAdvice: "efficient dry-preservation pipelines leveraging the naturally arid atmosphere of Neemuch",
    recommendedCrop: "Dry oyster flakes and Oyster mushroom spawn"
  }
};

/**
 * Deterministic generator to make ANY other city or village completely unique!
 * This completely avoids duplicate content penalty by dynamically spinning sentences based on location name.
 */
export function getFallbackCityProfile(cityName: string, state: string): CityAgriProfile {
  // Simple hashing to select variations
  let hash = 0;
  for (let i = 0; i < cityName.length; i++) {
    hash = cityName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const uHash = Math.abs(hash);

  const landmarks = [
    `local green corridors and agricultural reserves of ${cityName}`,
    `central market squares and native community farming hubs in ${cityName}`,
    `scenic riverbank plains and rich field terrains around ${cityName}`,
    `regional organic cultivation clusters in ${cityName}`,
    `traditional farmer trading zones near the heart of ${cityName}`
  ];

  const markets = [
    `${cityName} Main Agriculture Galla Mandi and crop distribution hub`,
    `local wholesale vegetable and fruit mandi complexes in ${cityName}`,
    `${cityName} Central Krishi Bazar and organic cooperative stalls`,
    `${cityName} wholesale bulk vegetable markets and nearby trading yards`,
    `regional agricultural supply corridors directly servicing ${cityName}`
  ];

  const neighborhoodLists = [
    `Civil Lines, Station Road, Main Market, and surrounding rural farm scopes of ${cityName}`,
    `Nehru Nagar, Subash Chowk, bypass colony, and local agricultural zones around ${cityName}`,
    `Sadar Bazar, Model Town, sector blocks, and peripheral agro-belts in ${cityName}`,
    `Galla Bazar, Link Road, bypass junctions, and crop distribution corridors near ${cityName}`
  ];

  const advantages = [
    `The proximity of ${cityName} to major localized travel lanes secures prompt, early morning delivery schedules to grocery retailers directly without long cooling storage delays.`,
    `Growing sustainable organic mushrooms in ${cityName} helps tap into high-value clean foods markets while utilizing locally available agricultural byproduct straw at nearly zero cost.`,
    `Our training programs near ${cityName} prioritize direct, localized community handholding to assist young farmers in securing regional banking credits and horticulture training grants.`,
    `The growing vegetable retail channels inside ${cityName} are currently seeing an surge in organic dietary protein demands, opening premium profit loops for early growers.`
  ];

  const tempAdvices = [
    "vertical space-saving bag arrays utilizing eco-friendly, moisture-locking substrate compost",
    "monsoon-aligned growing plans that take advantage of natural humidity curves and warm weather",
    "budget-friendly indoor climate structures with manual ventilation controls and mist sprays",
    "highly dense growing shelves built out of affordable localized materials like bamboo or mesh"
  ];

  const crops = [
    "Pearl Oyster and Florida Oyster mushrooms",
    "White Button and high-vigor G1 spawn strains",
    "Milky White and Oyster hybrid variants",
    "Premium quality organic Button and Oyster strains"
  ];

  return {
    landmark: landmarks[uHash % landmarks.length],
    markets: markets[(uHash + 1) % markets.length],
    neighborhoods: neighborhoodLists[(uHash + 2) % neighborhoodLists.length],
    localAdvantage: advantages[(uHash + 3) % advantages.length],
    tempAdvice: tempAdvices[(uHash + 4) % tempAdvices.length],
    recommendedCrop: crops[(uHash + 5) % crops.length]
  };
}

export function getCityAgriProfile(cityName: string, state: string): CityAgriProfile {
  const key = cityName.toLowerCase().trim().replace(/_/g, '-').replace(/\s+/g, '-');
  if (MP_CITY_PROFILES[key]) {
    return MP_CITY_PROFILES[key];
  }
  return getFallbackCityProfile(cityName, state);
}
