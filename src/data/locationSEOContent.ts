import { SEOKeyword } from './seoKeywordsData';
import { MANUAL_PAGE_OVERRIDES } from './customPages';

export interface SEOManualContent {
  title: string;
  metaDesc: string;
  keywords: string;
  h1: string;
  h2s: string[];
  h3s: string[];
  h4s: string[];
  articleHtml: string;
}

// Map key cities to State to provide highly targeted region/state-specific SEO tags
export function getStateOfLocation(locationName: string): string {
  const loc = locationName.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-');
  
  // Hindi speaking north/central states
  const upCities = ['lucknow', 'kanpur', 'ghaziabad', 'agra', 'varanasi', 'meerut', 'allahabad', 'bareilly', 'aligarh', 'moradabad', 'saharanpur', 'gorakhpur', 'noida', 'firozabad', 'loni', 'jhansi', 'muzaffarnagar', 'mathura', 'rampur', 'shahjahanpur', 'hapur', 'etawah', 'mirzapur', 'bulandshahr', 'jaunpur', 'hathras', 'banda', 'pilibhit', 'barabanki', 'gonda', 'bijnor', 'basti', 'ballia', 'ghazipur', 'kannauj'];
  const biharCities = ['patna', 'gaya', 'bhagalpur', 'muzaffarpur', 'purnia', 'darbhanga', 'bihar-sharif', 'arrah', 'begusarai', 'katihar', 'munger', 'chhapra', 'danapur', 'bettiah', 'saharsa', 'sasaram', 'hajipur', 'dehri', 'siwan', 'motihari', 'nawada', 'buxar', 'kishanganj', 'sitamarhi', 'samastipur', 'vaishali', 'sheohar', 'madhepura'];
  const maharashtraCities = ['mumbai', 'pune', 'nagpur', 'nashik', 'aurangabad', 'solapur', 'amravati', 'kolhapur', 'nanded', 'sangli', 'malegaon', 'jalgaon', 'akola', 'latur', 'dhule', 'ahmednagar', 'chandrapur', 'parbhani', 'ichalkaranji', 'jalna', 'panvel', 'navi-mumbai', 'thane', 'kalyan', 'shirdi', 'satara'];
  const karnatakaCities = ['bengaluru', 'hubli', 'dharwad', 'mysuru', 'kalaburagi', 'mangaluru', 'davanagere', 'belagavi', 'ballari', 'vijayapura', 'shivamogga', 'tumakuru', 'raichur', 'bidar', 'udupi', 'hassan', 'hospet', 'gadag', 'mandya', 'kolar', 'mysore'];
  const rajasthanCities = ['jaipur', 'jodhpur', 'kota', 'bikaner', 'ajmer', 'bhilwara', 'alwar', 'bharatpur', 'sikar', 'pali', 'tonk', 'udaipur'];
  const haryanaCities = ['faridabad', 'gurugram', 'rohtak', 'hisar', 'panipat', 'ambala', 'yamunanagar', 'sonipat', 'panchkula', 'bhiwani', 'sirsa', 'bahadurgarh', 'jind', 'karnal', 'rewari', 'palwal', 'narnaul'];
  const delhiCities = ['new-delhi', 'dwarka', 'rohini', 'janakpuri', 'laxmi-nagar', 'shahdara', 'pitampura', 'saket', 'delhi'];
  const wbCities = ['kolkata', 'asansol', 'siliguri', 'durgapur', 'bardhaman', 'malda', 'baharampur', 'kharagpur', 'darjeeling', 'howrah'];
  const mpCities = ['indore', 'bhopal', 'jabalpur', 'gwalior', 'ujjain', 'sagar', 'dewas', 'satna', 'ratlam', 'rewa', 'burhanpur', 'khandwa', 'chhindwara', 'singrauli', 'gwalior'];
  const uttarakhandCities = ['dehradun', 'haridwar', 'roorkee', 'haldwani', 'rudrapur', 'kashipur', 'rishikesh', 'pithoragarh', 'solan'];

  if (upCities.includes(loc)) return 'Uttar Pradesh';
  if (biharCities.includes(loc)) return 'Bihar';
  if (maharashtraCities.includes(loc)) return 'Maharashtra';
  if (karnatakaCities.includes(loc)) return 'Karnataka';
  if (rajasthanCities.includes(loc)) return 'Rajasthan';
  if (haryanaCities.includes(loc)) return 'Haryana';
  if (delhiCities.includes(loc)) return 'Delhi';
  if (wbCities.includes(loc)) return 'West Bengal';
  if (mpCities.includes(loc)) return 'Madhya Pradesh';
  if (uttarakhandCities.includes(loc)) return 'Uttarakhand';

  // State checks directly
  const statesLower = ['andhra-pradesh', 'arunachal-pradesh', 'assam', 'bihar', 'chhattisgarh', 'goa', 'gujarat', 'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka', 'kerala', 'madhya-pradesh', 'maharashtra', 'manipur', 'meghalaya', 'mizoram', 'nagaland', 'odisha', 'punjab', 'rajasthan', 'sikkim', 'tamil-nadu', 'telangana', 'tripura', 'uttar-pradesh', 'uttarakhand', 'west-bengal', 'delhi'];
  for (const st of statesLower) {
    if (loc === st) {
      return st.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  }

  // default fallback state representation
  return 'India';
}

export function generateLocationSEOArticle(locationName: string, pageType: string, keywordInfo?: SEOKeyword): SEOManualContent {
  const state = getStateOfLocation(locationName);
  
  // Format location to title case
  const formattedLoc = locationName
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Standardize keyword text
  const kwText = keywordInfo ? keywordInfo.keyword : (pageType + " mushroom");
  const kwTitleCase = kwText
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const isHindiState = ['Uttar Pradesh', 'Bihar', 'Delhi', 'Haryana', 'Rajasthan', 'Madhya Pradesh', 'Uttarakhand'].includes(state);

  // Generate highly targetized long-tail keywords for search engine bots
  const keywordsList = [
    `${kwText} in ${formattedLoc}`,
    `${kwText} center near me`,
    `mushroom cultivation in ${formattedLoc}`,
    `best ${kwText} ${state}`,
    `how to grow mushrooms in ${formattedLoc}`,
    `do khane yogya mushroom in hindi`,
    `mushroom farming training by government ${formattedLoc}`,
    `mushroom spawn supply ${formattedLoc}`,
    `button mushroom price list today in ${formattedLoc}`
  ].join(', ');

  // Initialize unified data structures
  let content: SEOManualContent = {
    title: "",
    metaDesc: "",
    keywords: keywordsList,
    h1: "",
    h2s: [],
    h3s: [],
    h4s: [],
    articleHtml: ""
  };

  const category = keywordInfo ? keywordInfo.category : "Farming";

  // Dynamic titles and meta descriptions using exact keywords and locales completely avoiding duplication
  if (category === "Training Center" || category === "Training & Courses") {
    content.title = `${kwTitleCase} in ${formattedLoc} | Official Organic Academy ${state}`;
    content.metaDesc = `Learn professional mushroom farming with our expert ${kwText} in ${formattedLoc}, ${state}. Get verified offline workshops, free spawn materials, government subsidy guidance list and 100% lab handholding.`;
    content.h1 = `Premier Certified ${kwTitleCase} Servicing ${formattedLoc}`;
    
    content.h2s = [
      `Mushroom Farming Training By Government Support & Grants in ${formattedLoc}`,
      `Certified ${kwTitleCase} Learning Structures`,
      `State-of-the-Art Incubators and Cultivation Classrooms`
    ];
    
    content.h3s = [
      `5 Standard Stages of Fruiting Taught in ${formattedLoc} Batches`,
      `Compost Formulation: Utilizing Local Raw Materials for Commercial Yield`,
      `How to Get Government Assistance & Bank Loans in ${state}`
    ];

    content.h4s = [
      `Do khane yogya mushroom ke naam bataiye? (What are two premium edible varieties?)`,
      `Is prior experience or a botanical degree required to enroll in ${formattedLoc}?`,
      `What is the total duration of practical workshops at the academy?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Welcome to the leading hub for <strong>${kwText} in ${formattedLoc}</strong>. Designed to empower local farmers, agricultural entrepreneurs, and home cultivators across ${state}, our technical curriculum bridges pure biology with high-yielding commercial business solutions.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          Under the centralized support of the <strong>National Horticulture Board (NHB)</strong> and regional state schemes in ${state}, starting a commercial mushroom project remains highly supported. Technical workshops in ${formattedLoc} assist you in securing certificates necessary to acquire commercial subsidies (up to 40% to 50% technical grants) for building cold-rooms and pasteurized composting pits.
        </p>

        <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6">${content.h3s[0]}</h3>
        <p>
          Our modular courses break down the biological structure of mushroom cultivation into five rigorous, hands-on steps:
        </p>
        <ol class="list-decimal pl-6 space-y-2 dark:text-slate-300 text-slate-600">
          <li><strong>Substrate Selection & Sterilization:</strong> Preparing organic inputs like sterilized rice straw, coco-peat, or wheat bran to remove wild mold spores.</li>
          <li><strong>Spawning (Seed Mixing):</strong> Proper hygienic methods of distributing laboratory-grade F1 hybrid spawn inside growth bags.</li>
          <li><strong>Dark Incubation (Spawn Run):</strong> Maintaining dark atmosphere blocks at 22°C - 24°C till pure white mycelium spreads naturally.</li>
          <li><strong>Soil Casing:</strong> Adding pasteurized peat-soil to anchor water moisture (specifically for white button strains).</li>
          <li><strong>Fruiting & Temperature Drop:</strong> Introducing oxygen cycles and temperature drops to trigger high quality pinning blocks in ${formattedLoc}.</li>
        </ol>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="italic dark:text-slate-300 text-slate-600">
          <strong>उत्तर:</strong> व्यवसायिक रूप से खेती और खाने के लिए सबसे लोकप्रिय दो मशरूम हैं - <strong>सफेद बटन मशरूम (White Button Mushroom)</strong> और <strong>ओईस्टर मशरूम (Oyster / ढींगरी मशरूम)</strong>। इन दोनों को आप आसानी से ${formattedLoc} के घरेलू या व्यवसायिक सेटअप में उगा सकते हैं।
        </p>

        <p>
          Take your first step today by connecting with our expert instructors. We offer full remote call assistance and structured manuals directly tailored to the atmospheric climate profile of ${formattedLoc}!
        </p>
      </div>
    `;

  } else if (category === "Government & Free Training") {
    content.title = `Free ${kwTitleCase} in ${formattedLoc} | Govt Subsidy schemes`;
    content.metaDesc = `Enroll in ${kwText} in ${formattedLoc}, ${state}. Free online classes, government vocational certification directories, application procedures for small scale farmers and women self-help organizations.`;
    content.h1 = `Official Govt Subsidy & Free ${kwTitleCase} Guide for ${formattedLoc}`;
    content.h2s = [
      `How to Apply for Free Government Mushroom Training in ${state}`,
      `Understanding RKVY & ATMA Free Training Subsidies in ${formattedLoc}`,
      `Obtaining Certificate Guidelines for Commercial Agriculture Loans`
    ];
    content.h3s = [
      `F1 Spawn Seeds Distribution Program near ${formattedLoc}`,
      `Substrate and Compost preparation methods under government directives`,
      `Post-Harvesting processing: Drying, Canning, and Packaging`
    ];
    content.h4s = [
      `Mushroom ki kheti ki government help kaise milti hai?`,
      `Can women self-help groups (SHGs) get special grants for cultivation in ${formattedLoc}?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Unlocking state-sponsored progress has never been easier. Our specialized guide for <strong>${kwText} in ${formattedLoc}</strong> serves to help rural and urban micro-cultivators register under subsidized training centers and horticulture campuses in ${state}.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          The agricultural department under the <strong>ATMA (Agricultural Technology Management Agency)</strong> and KVK (Krishi Vigyan Kendra) regularly deploys free learning calendars for starting button and oyster crop chambers. By joining these cohorts, participants in ${formattedLoc} are eligible to receive high-yield F1 hybrid seed blocks absolutely free of cost or at highly reduced pilot prices.
        </p>

        <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6">${content.h3s[1]}</h3>
        <p>
          Learn how to formulate crop bags without automated machinery. By converting agricultural waste like paddy straw, cane bagasse, and dried leaves into localized nutrition blocks, you can successfully launch an eco-friendly farming setup at negligible cost in ${formattedLoc}.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="dark:text-slate-300 text-slate-600">
          <strong>सहायता विवरण:</strong> सरकारी अनुदान के लिए कृषि विभाग (Horticulture Department) में आवेदन जमा करके, या नाबार्ड (NABARD) अनुमोदित प्रोजेक्ट दस्तावेज बनाकर बैंक से 35% से 50% तक सब्सिडी प्राप्त की जा सकती है। हमारे ट्रेनर ${formattedLoc} में इसके लिए कम्पलीट दस्तावेज़ीकरण गाइड प्रदान करते हैं।
        </p>
      </div>
    `;

  } else if (category === "How To Grow") {
    content.title = `${kwTitleCase} at Home | Professional Guide ${formattedLoc}`;
    content.metaDesc = `Learn complete secrets on ${kwText} in ${formattedLoc}, ${state} climate. Multi-tier vertical shelf layouts, moisture sprayers, temperature adjustment rules, and F1 grain inoculation protocols.`;
    content.h1 = `Step-by-Step Tutorial on ${kwTitleCase} inside ${formattedLoc}`;
    content.h2s = [
      `How to Grow Highest Quality Mushrooms indoors in ${formattedLoc}`,
      `Setting Up a Low-Cost Climate Growth Room in ${state}`,
      `Sterilizing alternative substrates: Wood dust, corn husks, and dried banana leaves`
    ];
    content.h3s = [
      `Humidity and Carbon Dioxide (CO2) Controls for Pinhead Development`,
      `How to monitor pH levels and watering frequencies safely`,
      `Oyster vs Button mushroom days to completely grow and harvest`
    ];
    content.h4s = [
      `Mushroom grow ke liye kitna temperature hona chahiye?`,
      `Can I grow mushrooms indoors without utilizing formal compost bags?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Mastering the biological arts of cultivation allows you to turn small dark spaces into highly active food baskets. If you want to know <strong>${kwText} in ${formattedLoc}</strong>, this comprehensive tutorial simplifies indoor organic cultivation systems without requiring massive infrastructure.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          The secret to getting bountiful flushes lies in micro-climate precision management in<sup>${state}</sup>:
        </p>
        <ul class="list-disc pl-6 space-y-1 dark:text-slate-300 text-slate-600">
          <li><strong>Temperature Drop:</strong> Maintaining temperature around 20°C - 24°C for initial thread growth, dropping to 15°C - 18°C to force pinheads to pop.</li>
          <li><strong>Humidity Levels:</strong> Misting water arrays twice daily to preserve relative humidity strictly between 85% and 90%.</li>
          <li><strong>Air Exchange:</strong> Installing simple 4-inch exhaust pipelines to flush out CO2, encouraging thick sturdy caps instead of long stringy stems in ${formattedLoc}.</li>
        </ul>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="dark:text-slate-300 text-slate-600">
          <strong>तापमान दिशानिर्देश:</strong> सामान्यतः बटन मशरूम के लिए 14°C-18°C और ओईस्टर मशरूम के लिए 20°C-28°C का तापमान सर्वश्रेष्ठ माना जाता है। गर्मियों के मौसम में ${formattedLoc} में मिल्की मशरूम लगाना ज्यादा आसान होता है जिसके लिए 30°C-35°C तापमान की आवश्यकता होती है।
        </p>
      </div>
    `;

  } else if (category === "Types & Prices") {
    content.title = `${kwTitleCase} Today in ${formattedLoc} | Current Wholesale Price List`;
    content.metaDesc = `Check updated market data on ${kwText} in ${formattedLoc}, ${state}. Detailed fresh button price list, supreme oyster price per kg, nutrient benefits, and wholesale mandis contacts.`;
    content.h1 = `${kwTitleCase}: Updated Rates, Strains & Benefits in ${formattedLoc}`;
    content.h2s = [
      `Latest Button and Oyster Mushroom Wholesale Prices in ${formattedLoc}`,
      `Commercial Subtypes Grown in ${state}: Milky, Shiitake, and Cordyceps`,
      `Antioxidant & Medicinal Value: Why Mushrooms support immune systems`
    ];
    content.h3s = [
      `Mandi rate analysis: Commercial demands in local retail sectors`,
      `Do khane yogya mushroom and how to tell edible ones of wild strains`,
      `Why white button mushrooms remain the highest consumed variety`
    ];
    content.h4s = [
      `Sabse mahanga mushroom kaun sa hota hai or why is it so costly?`,
      `Is it scientifically verified that mushrooms help in breathing or lung infection recovery?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Staying updated with daily pricing is critical for commercial growers and retail traders. Here, we supply direct data charts regarding <strong>${kwText} in ${formattedLoc}</strong> to evaluate project viability and weekly earnings.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          Typically, the fresh mandi prices for premium Grade-A white button mushrooms in ${formattedLoc} hover between <strong>₹140 to ₹220 per kilogram</strong> in wholesale markets, retailing for ₹240+ inside modern superstores. Dehydrated Oyster slices are marketed extensively to pharmaceutical channels for ₹600 to ₹1000 per kg depending on color, fiber density, and testing certificates.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="dark:text-slate-300 text-slate-600">
          <strong>दुनिया का सबसे महंगा मशरूम:</strong> जंगली <strong>गुच्छी मशरूम (Gucchi / Morel)</strong> भारत की सबसे महंगी प्रजाति है, जिसका दाम बाज़ार में लगभग ₹25,000 से ₹30,000 प्रति किलोग्राम तक जाता है। यह मुख्यतः हिमाचल और कश्मीर के हिमालयी वनों में पाई जाती है। इसके अलावा <strong>कीड़ा जड़ी (Cordyceps)</strong> की कीमत भी लाखों में होती है।
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[1]}</h4>
        <p>
          Yes, organic mushrooms are extremely rich in <strong>Polysaccharides, beta-glucans, Selenium, and Vitamin D</strong>. These compounds naturally boost white blood cells, strengthening immune systems against respiratory congestion and common viral fevers in ${formattedLoc}.
        </p>
      </div>
    `;

  } else if (category === "Business & Farming") {
    content.title = `Mushroom Farming Business in ${formattedLoc} | Setup Cost & Profit`;
    content.metaDesc = `Detailed agro-tech business project file for starting ${kwText} in ${formattedLoc}, ${state} climate. Cost per acre evaluation, crop setup schedules, and assured contract buyback options.`;
    content.h1 = `Launch Your Own ${kwTitleCase} Venture in ${formattedLoc}`;
    content.h2s = [
      `Project Cost of Commercial Organic Mushroom Farming in ${state}`,
      `Margin and Return on Investment (ROI) Analysis inside ${formattedLoc}`,
      `How many days required to grow button and oyster varieties`
    ];
    content.h3s = [
      `Selecting optimum building materials: Bamboo sheds vs Insulated PUF panels`,
      `Integrating Daikin split cooling systems & Digital steam nozzles`,
      `How much yield can you expect out of 1 kg first-generation hybrid spawn seed`
    ];
    content.h4s = [
      `Mushroom farming setup start karne me kitna kharcha aata hai?`,
      `What are the major risk factors like green mold and how to cure them?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Agriculture is shifting towards vertical automated space management. A highly robust commercial plan for <strong>${kwText} in ${formattedLoc}</strong> lets you harvest premium crops inside localized weather cabins, bypassing volatile environmental disruptions in ${state}.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          Setting up a semi-automated 1500 sq ft unit costs around ₹1.5 Lakhs to ₹3 Lakhs, which covers insulating foil sheets, horizontal rack pipelines, air-flow exhaust grids, and dynamic foggers. This space comfortably stores up to 1000 bags. With proper F1 high-yield spawn seeds, a complete batch matures in just <strong>25 days</strong> post spawn run, producing regular streams of profit in ${formattedLoc}.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="dark:text-slate-300 text-slate-600">
          <strong>निवेश विवरण:</strong> एक छोटे कमरे से शुरुआत करने के लिए मात्र ₹15,000 की आवश्यकता होती है। बड़े पैमाने पर व्यवसायिक शेड के सेटअप के लिए ₹2 लाख से ₹5 लाख तक का खर्च आता है, जिसे मात्र 2 से 3 अच्छे क्रॉप साइकिल (Crop Cycles) में पूरी तरह से वसूल किया जा सकता है।
        </p>
      </div>
    `;

  } else if (category === "Spawn & Products") {
    content.title = `${kwTitleCase} Supplier in ${formattedLoc} | F1 Grain Seeds`;
    content.metaDesc = `Secure pure lab-tested ${kwText} in ${formattedLoc}, ${state}. High-yield, first-generation sorghum and wheat hybrid spawn grains for Oyster, Button & Milky strains with cold supply distribution.`;
    content.h1 = `Premium Certified ${kwTitleCase} for ${formattedLoc} Farms`;
    content.h2s = [
      `Why F1 Grain Spawn is Essential to Secure Bumper Harvests`,
      `Advanced Spawn Production laboratories based in ${state}`,
      `How to preserve spawn seeds using cold thermals up to 30 days`
    ];
    content.h3s = [
      `White Button and Milky strain seed variations adapted for ${formattedLoc} weather`,
      `How to make organic mushroom seeds at home without contamination`,
      `Sourcing liquid mycelium and agar plates for custom cultivation`
    ];
    content.h4s = [
      `1 Kg seeds (spawn) lagane se kitna mushroom utpadan hota hai?`,
      `Do you deliver spawn safety tubes directly to rural villages of ${formattedLoc}?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          The absolute cornerstone of premium agriculture is pure-grade seed breeding. Sourcing certified master-spawn is vital. Our advanced distribution grid supplies certified <strong>${kwText} in ${formattedLoc}</strong> directly to your home address, ensuring high-vigour germination with zero failure rates.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          Our hybrid grains are nurtured on certified boiled sorghum (jowar) and premium wheat seeds, enriched with mineral gypsum to prevent clumping. One kilogram of this laboratory seed block is capable of successfully colonizing up to 10 compost standard substrate blocks, yielding <strong>10 kg to 15 kg of harvestable mushrooms</strong> under standard grow parameters inside ${formattedLoc}.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="dark:text-slate-300 text-slate-600">
          <strong>उत्पादन क्षमता:</strong> 1 किलो प्रथम पीढ़ी (F1 Generation) के हाइब्रिड बीज से लगभग 10 से 12 किलोग्राम ओईस्टर मशरूम या 15 किलोग्राम तक बटन मशरूम प्राप्त किए जा सकते हैं, बशर्ते हवा में नमी और कम्पोस्ट का तापमान अनुशंसित रूप से स्थिर रखा गया हो।
        </p>
      </div>
    `;

  } else {
    // category === "Purchase & Delivery" or Fallback
    content.title = `Buy ${kwTitleCase} Online in ${formattedLoc} | Fresh farm Delivery`;
    content.metaDesc = `Purchase certified fresh fields organic ${kwText} in ${formattedLoc}, ${state}. Daily early-morning commercial deliveries to restaurants, families, hotels and bulk dry containers storage exporter.`;
    content.h1 = `Organic ${kwTitleCase} Delivered Direct to Your Door in ${formattedLoc}`;
    content.h2s = [
      `Fresh Morning Harvests from Our Local Farms in ${formattedLoc}`,
      `Premium Packaging Standards to keep Nutrients Locked`,
      `Wholesale Supply contracts for culinary brands in ${state}`
    ];
    content.h3s = [
      `Superfoods high-protein diets delivered in ${formattedLoc}`,
      `How we deliver fresh oyster kits near me safely within 12 hours`,
      `Unlocking dry mushrooms export lines from regional farms`
    ];
    content.h4s = [
      `How can I order organic button mushrooms online in ${formattedLoc}?`,
      `Is the delivery completely sanitised, packed and cooled during transit?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Experience pristine organic nutrition. We are delighted to announce rapid digital dispatch routes for ordering premium <strong>${kwText} in ${formattedLoc}</strong>. Harvested at early dawn under sanitized standards, our crops reach superstores and consumer plates loaded with raw natural proteins and minerals.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          We strictly avoid synthetic growth boosters, utilizing only organic substrates like clean wheat straw and biological water systems. This produces crisp white buttons and aromatic deep oysters with exceptional shelf-life directly inside ${formattedLoc}, ${state}. Order in bulk or subscription boxes today!
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p>
          To purchase, simple contact our local delivery desk of ${formattedLoc} via WhatsApp or order directly through the online organic cart portal. We guarantee dispatch within 12 hours from harvest!
        </p>
      </div>
    `;
  }

  // Check for manual overrides based on location slug and keyword slug
  const locSlug = locationName.toLowerCase().trim().replace(/_/g, '-').replace(/\s+/g, '-');
  const kwSlug = keywordInfo ? keywordInfo.url.replace(/^\/+|\/+$/g, '').toLowerCase() : '';
  const specificKey = `${locSlug}_${kwSlug}`;
  const generalKey = locSlug;

  const override = MANUAL_PAGE_OVERRIDES[specificKey] || MANUAL_PAGE_OVERRIDES[generalKey];
  if (override) {
    return {
      title: override.title || content.title,
      metaDesc: override.metaDesc || content.metaDesc,
      keywords: override.keywords || content.keywords,
      h1: override.h1 || content.h1,
      h2s: override.h2s || content.h2s,
      h3s: override.h3s || content.h3s,
      h4s: override.h4s || content.h4s,
      articleHtml: override.articleHtml || content.articleHtml
    };
  }

  return content;
}
