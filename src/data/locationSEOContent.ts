import { SEOKeyword } from './seoKeywordsData';
import { MANUAL_PAGE_OVERRIDES } from './customPages';
import { getCityAgriProfile } from './mpCityProfiles';

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
  const hrangeC = ['faridabad', 'gurugram', 'rohtak', 'hisar', 'panipat', 'ambala', 'yamunanagar', 'sonipat', 'panchkula', 'bhiwani', 'sirsa', 'bahadurgarh', 'jind', 'karnal', 'rewari', 'palwal', 'narnaul'];
  const delhiCities = ['new-delhi', 'dwarka', 'rohini', 'janakpuri', 'laxmi-nagar', 'shahdara', 'pitampura', 'saket', 'delhi'];
  const wbCities = ['kolkata', 'asansol', 'siliguri', 'durgapur', 'bardhaman', 'malda', 'baharampur', 'kharagpur', 'darjeeling', 'howrah'];
  const mpCities = ['indore', 'bhopal', 'jabalpur', 'gwalior', 'ujjain', 'sagar', 'dewas', 'satna', 'ratlam', 'rewa', 'burhanpur', 'khandwa', 'chhindwara', 'singrauli', 'katangi', 'murwara', 'bhind', 'guna', 'shivpuri', 'vidisha', 'chhatarpur', 'damoh', 'mandsaur', 'khargone', 'neemuch', 'pithampur', 'hoshangabad', 'itarsi', 'sehore', 'betul', 'seoni', 'datia', 'nagda', 'balaghat', 'mandla', 'dindori', 'tikamgarh', 'panna', 'anuppur', 'umaria', 'sidhi', 'shahdol', 'rajgarh', 'agar-malwa', 'alirajpur', 'barwani', 'ashoknagar'];
  const uttarakhandCities = ['dehradun', 'haridwar', 'roorkee', 'haldwani', 'rudrapur', 'kashipur', 'rishikesh', 'pithoragarh', 'solan'];

  if (upCities.includes(loc)) return 'Uttar Pradesh';
  if (biharCities.includes(loc)) return 'Bihar';
  if (maharashtraCities.includes(loc)) return 'Maharashtra';
  if (karnatakaCities.includes(loc)) return 'Karnataka';
  if (rajasthanCities.includes(loc)) return 'Rajasthan';
  if (hrangeC.includes(loc)) return 'Haryana';
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

/**
 * 📍 PROGRAMMATIC MP TEMPLATE GENERATOR
 * Organizes the 46 Madhya Pradesh cities in 3 unique templates in a round-robin format
 * to prevent any search engine duplicate content penalties.
 */
function generateMPProgrammaticContent(
  locSlug: string,
  formattedLoc: string,
  category: string,
  keywordInfo?: SEOKeyword
): SEOManualContent {
  const state = "Madhya Pradesh";
  const profile = getCityAgriProfile(locSlug, state);
  
  // Clean up keyword texts
  const kwText = keywordInfo ? keywordInfo.keyword : "mushroom training center";
  const kwTitleCase = kwText
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const kwSlug = keywordInfo ? keywordInfo.url.replace(/^\/+|\/+$/g, '').toLowerCase() : '';

  const MP_CITIES_LIST = [
    'indore', 'bhopal', 'jabalpur', 'gwalior', 'ujjain', 'sagar', 'dewas', 'satna', 'ratlam', 'rewa', 
    'burhanpur', 'khandwa', 'chhindwara', 'singrauli', 'katangi', 'murwara', 'bhind', 'guna', 'shivpuri', 'vidisha', 
    'chhatarpur', 'damoh', 'mandsaur', 'khargone', 'neemuch', 'pithampur', 'hoshangabad', 'itarsi', 'sehore', 'betul', 
    'seoni', 'datia', 'nagda', 'balaghat', 'mandla', 'dindori', 'tikamgarh', 'panna', 'anuppur', 'umaria', 
    'sidhi', 'shahdol', 'rajgarh', 'agar-malwa', 'alirajpur', 'barwani', 'ashoknagar'
  ];
  
  const mpIndex = MP_CITIES_LIST.indexOf(locSlug);
  const templateType = mpIndex % 3 === 0 ? 'Indore' : (mpIndex % 3 === 1 ? 'Bhopal' : 'Jabalpur');

  // Unified Title & Desc following the PDF screenshots format:
  // e.g., "Indore Mushroom Training Center Guide | Learn, Grow & Earn"
  const title = `${formattedLoc} ${kwTitleCase} Guide | Learn, Grow & Earn`;
  const metaDesc = `${formattedLoc} mein mushroom industry ka safar shuru karein. Get professional guidance for '${kwText}' along with reliable spawn logistics and local support across ${formattedLoc}.`;

  // General Keywords list for search engine crawlers
  const keywordsList = [
    `mushroom training center in ${formattedLoc}`,
    `best ${kwText} in ${formattedLoc}`,
    `government mushroom farming training in ${formattedLoc}`,
    `oyster mushroom cultivation classes near me in ${formattedLoc}`,
    `button mushroom grow course in ${formattedLoc}`,
    `${kwText} ${formattedLoc}`,
    `low cost mushroom grow chamber ${formattedLoc}`
  ].join(', ');

  // Content Blocks
  let h1 = "";
  let h2s: string[] = [];
  let h3s: string[] = [];
  let h4s: string[] = [];
  let articleHtml = "";

  if (templateType === 'Indore') {
    h1 = `Professional ${kwTitleCase} in ${formattedLoc}`;
    h2s = ["Kyun Choose Karein Hamari Services?", `Professional ${kwTitleCase} Frameworks`];
    h3s = [`Microclimate Adaptation near ${profile.landmark}`, "Automated Spawn Inoculation Protocols"];
    h4s = [`Q: Kya ${formattedLoc} ke dry weather ya normal temperature mein mushroom cultivation continuously poore saal kiya ja sakta hai?`];
    
    articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          ${formattedLoc} aur Madhya Pradesh ke aaspass ke kshetron mein modern mushroom farming ka karobaar tezi se badh raha hai. Sahi market link na milne aur training ki kami ke wajah se bohot se log shuruat nahi kar paate. ${formattedLoc} ke unhi sabhi aspiring entrepreneurs aur progressive farmers ke liye hamara local center setup complete structural and practical support pradan kar raha hai. Hamara primary program exclusive <strong>${kwText} in ${formattedLoc}</strong> parameters ko structural visibility dene ke liye develop kiya gaya hai.
        </p>

        <h3 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${h2s[0]}</h3>
        <p>
          Hamare advanced modules aapko temperature regulation, relative humidity balancing, aur automated spawn inoculation protocols ki accurate industry insights pradan karte hain takki market yield maximum ho sake. Sahi framework hone se aap cultivation errors se bachte hain aur proper scaling pathways manage kar sakte hain. We provide direct coordinates near key landmarks like <em>${profile.landmark}</em> to optimize yields.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-6 bg-slate-100 dark:bg-slate-800/80 p-4 rounded-t-lg border-l-4 border-yellow-500 mb-0">${h4s[0]}</h4>
        <div class="dark:text-slate-300 text-slate-600 bg-slate-100/50 dark:bg-slate-800/40 p-4 rounded-b-lg border-l-4 border-yellow-500 mt-0 italic">
          <strong>Ans:</strong> Haan, hum training mein specialized low-cost microclimate control mechanisms sikhate hain jo ${formattedLoc} ke seasonal changes ko balance karke yield ko zero-risk par banaye rakhta hai. Isse aap saal-bhar oyster aur button strains ${profile.tempAdvice} ke sath grow kar sakte hain.
        </div>
      </div>
    `;
  } else if (templateType === 'Bhopal') {
    h1 = `Official ${kwTitleCase} in ${formattedLoc}`;
    h2s = ["Kyun Choose Karein Hamari Services?", `Industrial Scaling & Packaging in ${formattedLoc}`];
    h3s = [`Direct Cold-Chain Dispatch to ${profile.markets}`, "Shelf-Life Optimization Methods"];
    h4s = [`Q: Training and development complete hone ke baad organic spawn seeds aur casing material ${formattedLoc} mein kaise deliver hoga?`];

    articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Agar aap ${formattedLoc} mein rehte hain aur agro-industry ya organic cultivation mein apna future banana chahte hain, toh mushroom ki kheti ek behtareen vikalp hai. Kam lagat aur kam jameeh mein shuru hone wale is innovative business ko safely run karne ke liye hum ${formattedLoc} ke har grower ko reliable support de rahe hain. Hamara primary program exclusive <strong>${kwText} in ${formattedLoc}</strong> parameters ko structural visibility dene ke liye develop kiya gaya hai.
        </p>

        <h3 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${h2s[0]}</h3>
        <p>
          Hum keval theoretical knowledge nahi dete, balki cold chain logistics management, harvest shelf-life optimization, aur direct bulk order placement strategies bhi share karte hain jo business grow karne ke liye zaroori hain. Sahi framework hone se aap cultivation errors se bachte hain aur proper scaling pathways manage kar sakte hain. Substrates can be easily acquired near wholesale spots like <em>${profile.markets}</em>.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-6 bg-slate-100 dark:bg-slate-800/80 p-4 rounded-t-lg border-l-4 border-yellow-500 mb-0">${h4s[0]}</h4>
        <div class="dark:text-slate-300 text-slate-600 bg-slate-100/50 dark:bg-slate-800/40 p-4 rounded-b-lg border-l-4 border-yellow-500 mt-0 italic">
          <strong>Ans:</strong> Aapko bhatakne ki zarurat nahi hai. Hamare central processing labs se cold-carrier networks ke madhyam se highest purity level ka active grain spawn direct aapke address par safely dispatched kiya jayega, satisfying all requirements inside neighborhoods like <em>${profile.neighborhoods}</em>.
        </div>
      </div>
    `;
  } else {
    // Jabalpur template
    h1 = `State-of-the-Art ${kwTitleCase} in ${formattedLoc}`;
    h2s = ["Kyun Choose Karein Hamari Services?", "Direct Contract Buyback Agreements"];
    h3s = [`Low Moisture Cultivation near ${profile.landmark}`, "Continuous Growth Protocols"];
    h4s = [`Q: Mushroom business shuru karne par market entry aur local client distribution setup mein hamari farm aapko kaise back karegi?`];

    articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          ${formattedLoc} ke urban aur rural sectors mein professional agriculture techniques ki demand badhti ja rahi hai. Hamara main operation unit Jabalpur mein hote hue bhi hum ${formattedLoc} ke sabhi local users ko exclusive home-fruiting setups, localized consulting, aur continuous growth protocols directly update kar rahe hain. Hamara primary program exclusive <strong>${kwText} in ${formattedLoc}</strong> parameters ko structural visibility dene ke liye develop kiya gaya hai.
        </p>

        <h3 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${h2s[0]}</h3>
        <p>
          Hamare technical framework mein aapko practical organic techniques, compost design methodology, aur structural contamination control protocols seekhne ko milte hain jo local conditions ke anusaar customize kiye gaye hain. Sahi framework hone se aap cultivation errors se bachte hain aur proper scaling pathways manage kar sakte hain. This strategy utilizes the direct geographical benefits of <em>${profile.localAdvantage}</em>.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-6 bg-slate-100 dark:bg-slate-800/80 p-4 rounded-t-lg border-l-4 border-yellow-500 mb-0">${h4s[0]}</h4>
        <div class="dark:text-slate-300 text-slate-600 bg-slate-100/50 dark:bg-slate-800/40 p-4 rounded-b-lg border-l-4 border-yellow-500 mt-0 italic">
          <strong>Ans:</strong> Hum local bulk suppliers, pharmaceuticals buyer networks, aur drying centers ke purchase agreements share karte hain takki ${formattedLoc} ke farmers ko starting day se pricing leverage mil sake.
        </div>
      </div>
    `;
  }

  // Generate sitemap & keywords wrapper
  const linkSection = getMushroomKeywordsSection(formattedLoc, locSlug);
  articleHtml += linkSection;

  return {
    title,
    metaDesc,
    keywords: keywordsList,
    h1,
    h2s,
    h3s,
    h4s,
    articleHtml
  };
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

  const locSlug = locationName.toLowerCase().trim().replace(/_/g, '-').replace(/\s+/g, '-');
  const kwSlug = keywordInfo ? keywordInfo.url.replace(/^\/+|\/+$/g, '').toLowerCase() : '';

  const MP_CITIES_LIST = [
    'indore', 'bhopal', 'jabalpur', 'gwalior', 'ujjain', 'sagar', 'dewas', 'satna', 'ratlam', 'rewa', 
    'burhanpur', 'khandwa', 'chhindwara', 'singrauli', 'katangi', 'murwara', 'bhind', 'guna', 'shivpuri', 'vidisha', 
    'chhatarpur', 'damoh', 'mandsaur', 'khargone', 'neemuch', 'pithampur', 'hoshangabad', 'itarsi', 'sehore', 'betul', 
    'seoni', 'datia', 'nagda', 'balaghat', 'mandla', 'dindori', 'tikamgarh', 'panna', 'anuppur', 'umaria', 
    'sidhi', 'shahdol', 'rajgarh', 'agar-malwa', 'alirajpur', 'barwani', 'ashoknagar'
  ];

  const category = keywordInfo ? keywordInfo.category : "Farming";

  // If this belongs to Madhya Pradesh, route to the 100% programmatic round-robin generator
  if (state === "Madhya Pradesh" || MP_CITIES_LIST.includes(locSlug)) {
    return generateMPProgrammaticContent(locSlug, formattedLoc, category, keywordInfo);
  }

  // Standardize keyword text for non-MP cities
  const kwText = keywordInfo ? keywordInfo.keyword : (pageType + " mushroom");
  const kwTitleCase = kwText
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Fetch unique city agricultural profile
  const profile = getCityAgriProfile(locationName, state);

  // Generate highly targetized long-tail keywords for search engine bots
  const keywordsList = [
    `${kwText} in ${formattedLoc}`,
    `${kwText} center near me`,
    `mushroom cultivation in ${formattedLoc}`,
    `best ${kwText} ${state}`,
    `how to grow mushrooms near ${profile.landmark}`,
    `do khane yogya mushroom in hindi`,
    `mushroom farming training by government in ${formattedLoc}`,
    `mushroom spawn supply at ${profile.markets}`,
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

  // Dynamic content generations using exact keywords and highly unique localized parameters
  if (category === "Training Center" || category === "Training & Courses") {
    content.title = `${kwTitleCase} in ${formattedLoc} | Official Organic Academy ${state}`;
    content.metaDesc = `Learn professional mushroom farming with our expert ${kwText} in ${formattedLoc}, ${state}. Get verified offline workshops, free spawn materials, government subsidy guidance list and 100% lab handholding.`;
    content.h1 = `Premier Certified ${kwTitleCase} Servicing ${formattedLoc}`;
    
    content.h2s = [
      `Mushroom Farming Training by Government Support & Grants in ${formattedLoc}`,
      `Certified ${kwTitleCase} Learning Structures near ${profile.landmark}`,
      `State-of-the-Art Incubators and Classrooms serving ${formattedLoc}`
    ];
    
    content.h3s = [
      `5 Standard Stages of Fruiting Taught across ${formattedLoc} Batches`,
      `Compost Formulation: Sourcing Straw near ${profile.markets} for High Yield`,
      `How to Get Government Assistance & Bank Loans in ${state}`
    ];

    content.h4s = [
      `Do khane yogya mushroom ke naam bataiye? (What are two premium edible varieties?)`,
      `Can residents of ${profile.neighborhoods.split(',')[0]} and nearby areas attend?`,
      `What is the total duration of practical workshops at the academy in ${formattedLoc}?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Welcome to the leading certified hub for <strong>${kwText} in ${formattedLoc}</strong>. Specially designed to empower growers, agricultural enthusiasts, and modern home-entrepreneurs across regions such as <em>${profile.neighborhoods}</em> and the greater ${state} dynamic, our hands-on curriculum bridges technical biology with commercial business success.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          Under the central support of the <strong>National Horticulture Board (NHB)</strong> and regional state subsidy schemes, starting a crop venture remains heavily incentivized. Our master workshops in ${formattedLoc} help you secure certified documentation, enabling you to apply for 35% to 50% technical subsidy grants when setting up cooling growing chambers or compost sheds. ${profile.localAdvantage}
        </p>

        <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6">${content.h3s[0]}</h3>
        <p>
          Our courses break down the complex biology of mushroom cropping into five clear, practical steps:
        </p>
        <ol class="list-decimal pl-6 space-y-2 dark:text-slate-300 text-slate-600">
          <li><strong>Substrate Sterilization:</strong> Preparing local inputs (sterilized rice straw, coco-peat, or agricultural waste) to prevent mold.</li>
          <li><strong>Spawning (Inoculation):</strong> Hygienic techniques of distributing active first-generation spawn seeds inside grow pouches.</li>
          <li><strong>Mycelium Incubation:</strong> Maintaining optimal dark phases at 22°C - 24°C until pure white root filaments colonize the block.</li>
          <li><strong>Organic Soil Casing:</strong> Laying water-holding pasteurized cover soil to guarantee heavy moisture thresholds.</li>
          <li><strong>Fruiting & Climatic Humidity:</strong> Initiating refreshing fresh air drafts to guide rapid pinheading inside ${formattedLoc}'s atmosphere.</li>
        </ol>

        <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6">${content.h3s[1]}</h3>
        <p>
          For local composting and bag sterilization, we highlight methods to acquire chemical-free raw straw near <strong>${profile.markets}</strong>. This ensures commercial growers can keep production costs to a minimum while maximizing final margins.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="italic dark:text-slate-300 text-slate-600">
          <strong>उत्तर:</strong> व्यावसायिक रूप से उगाने और भोजन में इस्तेमाल करने के लिए दो सबसे उत्तम मशरूम हैं - <strong>सफेद बटन मशरूम (White Button Mushroom)</strong> और <strong>ओईस्टर मशरूम (Oyster Mushroom / ढींगरी)</strong>। इन दोनों ही सर्वोत्तम प्रजातियों को आप ${formattedLoc} के घरेलू वातावरण या बड़े शेड में बहुत आसान तरीकों से उगा सकते हैं।
        </p>

        <p>
          Take your first step today by connecting with our expert guides. We support remote call assistance and structured PDF guides specifically optimized for landmarks around ${profile.landmark}!
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
      `Obtaining Certificate Guidelines near landmark ${profile.landmark}`
    ];
    content.h3s = [
      `F1 Spawn Seeds Distribution Program near ${profile.markets}`,
      `Substrate and Compost preparation methods under government directives`,
      `Post-Harvesting processing: Drying, Canning, and Packaging in ${formattedLoc}`
    ];
    content.h4s = [
      `Mushroom ki kheti ki government help kaise milti hai?`,
      `Can women self-help groups (SHGs) in regions like ${profile.neighborhoods.split(',')[0]} get special grants?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Unlocking state-sponsored progress has never been easier. Our specialized guide for <strong>${kwText} in ${formattedLoc}</strong> serves to help rural and urban micro-cultivators registered across areas like <em>${profile.neighborhoods}</em> apply for subsidized training packages and horticulture resources.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          The regional department of agriculture under the <strong>ATMA agency</strong> and Krishi Vigyan Kendra (KVK) frequently organizes free learning camps. By joining these cohorts, participants in ${formattedLoc} can secure high-yield F1 spawn seeds absolutely free of cost or at highly subsidized rates. ${profile.localAdvantage}
        </p>

        <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6">${content.h3s[1]}</h3>
        <p>
          We explain low-cost formulation techniques utilizing local raw ingredients commonly sourced near <strong>${profile.markets}</strong>. Converting agricultural byproduct residues into active growing blocks lets you set up an organic unit with almost zero investment.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="dark:text-slate-300 text-slate-600">
          <strong>सहायता विवरण:</strong> सरकारी अनुदान के लिए कृषि विभाग (Horticulture Department) में ऑनलाइन या ऑफलाइन आवेदन जमा करके, या नाबार्ड (NABARD) द्वारा अनुमोदित प्रोजेक्ट रिपोर्ट प्रस्तुत करके बैंक से 35% से 50% तक की भारी सब्सिडी का लाभ लिया जा सकता है। हमारे प्रशिक्षक ${formattedLoc} में इसके लिए कम्पलीट दस्तावेज़ीकरण असिस्टेंस प्रदान करते हैं।
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
      `Sterilizing alternative substrates: Utilizing fibers found near ${profile.markets}`
    ];
    content.h3s = [
      `Humidity and Carbon Dioxide (CO2) Controls for Pinhead Development`,
      `How to monitor pH levels and watering frequencies under ${profile.tempAdvice}`,
      `Estimated days to grow and harvest ${profile.recommendedCrop}`
    ];
    content.h4s = [
      `Mushroom grow karne ke liye kitna degree temperature hona chahiye?`,
      `Will these growing models successfully work inside neighborhoods like ${profile.neighborhoods.split(',')[0]}?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Mastering the indoor biological arts of cultivation turns small vacant spaces into high-yield organic food baskets. If you want to master <strong>${kwText} in ${formattedLoc}</strong>, this comprehensive tutorial simplifies cropping systems without requiring massive commercial cooling plants.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          The absolute secret to getting bumper flushes lies in micro-climate localized precision within ${state}. For starting units around landmarks like <strong>${profile.landmark}</strong>, we recommend:
        </p>
        <ul class="list-disc pl-6 space-y-1 dark:text-slate-300 text-slate-600">
          <li><strong>Temperature Modulation:</strong> Keeping temperatures between 20°C - 24°C during spawn run, dropping to 14°C - 18°C to trigger pinhead clusters.</li>
          <li><strong>Relative Humidity:</strong> Misting spatial arrays periodically to preserve relative humidity strictly between 85% and 90%.</li>
          <li><strong>Exhaust Cycles:</strong> Installing 4-inch output piping to ventilate built-up carbon dioxide, encouraging thick caps instead of long stems in ${formattedLoc}.</li>
        </ul>

         <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6">Growing Recommendations for ${formattedLoc}</h3>
        <p>
          Based on geographical factors, our technical blueprint recommends starting with <strong>${profile.recommendedCrop}</strong>. These classes show excellent mycelium run under local parameters: <em>${profile.tempAdvice}</em>.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="dark:text-slate-300 text-slate-600">
          <strong>तापमान दिशानिर्देश:</strong> सामान्यतः वाइट बटन मशरूम के लिए 14°C-18°C और ओईस्तर (ढींगरी) मशरूम के लिए 20°C-28°C का हल्का नम तापमान सर्वश्रेष्ठ माना जाता है। गर्मियों के मौसम में ${formattedLoc} के क्षेत्रों में मिल्की मशरूम लगाना ज्यादा आसान होता है जिसके लिए 30°C-35°C तापमान की आवश्यकता होती है।
        </p>
      </div>
    `;

  } else if (category === "Types & Prices") {
    content.title = `${kwTitleCase} Today in ${formattedLoc} | Current Wholesale Price List`;
    content.metaDesc = `Check updated market data on ${kwText} in ${formattedLoc}, ${state}. Detailed fresh button price list, supreme oyster price per kg, nutrient benefits, and wholesale mandis contacts.`;
    content.h1 = `${kwTitleCase}: Updated Rates, Strains & Benefits in ${formattedLoc}`;
    content.h2s = [
      `Latest Button and Oyster Mushroom Wholesale Prices at ${profile.markets}`,
      `Commercial Subtypes Adapted for ${state}: Including ${profile.recommendedCrop}`,
      `Antioxidant & Medicinal Value: Why Mushrooms support immune systems`
    ];
    content.h3s = [
      `Mandi rate analysis: Commercial demands in local retail sectors of ${formattedLoc}`,
      `Do khane yogya mushroom and how to identify safe edible varieties`,
      `Estimated profit margin on dispatching to areas like ${profile.neighborhoods.split(',')[0]}`
    ];
    content.h4s = [
      `India me sabse mahanga mushroom kaun sa bikta hai or why is it so costly?`,
      `Does our local team coordinate direct supply shipments near landmark ${profile.landmark}?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Staying updated with daily wholesale pricing is critical for agro-entrepreneurs and retail partners. Here, we disclose updated price reports regarding <strong>${kwText} in ${formattedLoc}</strong> to evaluate weekly budgets.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          Typically, the fresh wholesale price for premium Grade-A white button mushrooms at <strong>${profile.markets}</strong> ranges from <strong>₹140 to ₹220 per kilogram</strong>, retailing for ₹240+ in superstores across <em>${profile.neighborhoods}</em>. Dehydrated Oyster slices are marketed extensively to pharmaceutical channels for ₹600 to ₹1000 per kg depending on moisture content and certified testing parameters.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="dark:text-slate-300 text-slate-600">
          <strong>दुनिया का सबसे महंगा मशरूम:</strong> जंगली <strong>गुच्छी मशरूम (Gucchi / Morel)</strong> भारत की सबसे मूल्यवान प्रजाति है, जिसका दाम बाज़ार में लगभग ₹25,000 से ₹30,000 प्रति किलोग्राम तक जाता है। प्रकृत रूप से यह मुख्यतः हिमाचल और कश्मीर के ठंडे पर्वतीय वनों में ही उगती है। इसके अतिरिक्त <strong>कीड़ा जड़ी (Cordyceps)</strong> की कीमत भी लाखों में होती है।
        </p>

        <p>
          Whether buying in wholesale quantities or organizing farming yields, ${profile.localAdvantage} We support top-quality delivery connections near landmark ${profile.landmark}.
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
      `How to grow ${profile.recommendedCrop} on a commercial scale`
    ];
    content.h3s = [
      `Selecting optimum building materials: Bamboo sheds vs Insulated PUF panels`,
      `Acquiring raw agricultural inputs near <strong>${profile.markets}</strong>`,
      `Logistics optimization for delivering fresh flushes to ${profile.neighborhoods.split(',')[0]}`
    ];
    content.h4s = [
      `Mushroom farming setup start karne me kitna kharcha aata hai?`,
      `Can I check demo setups near landmarks like ${profile.landmark}?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Modern agriculture is moving towards vertical space-saving climatized cabins. Setting up a commercial project for <strong>${kwText} in ${formattedLoc}</strong> lets you harvest premium cash crops year-round while remaining safe from unpredictable weather disruptions in ${state}.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          A small household setup using bamboo frames costs as little as ₹15,000 to ₹18,000, while a larger semi-automated indoor farm (around 1500 sq ft) holding up to 1000 bags occupies about ₹1.5 Lakhs to ₹3 Lakhs. These chambers are retrofitted with temperature-blocking foil sheets, digital foggers, and quiet exhausts. Utilizing premier spawn seeds, a complete batch matures in just <strong>25 days</strong>, producing swift cycles of capital rotation. ${profile.localAdvantage}
        </p>

        <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6">Supply Chain Infrastructure</h3>
        <p>
          For distributing harvested fresh product or sourcing wheat bags under excellent wholesale prices, the surrounding hub around <strong>${profile.markets}</strong> offers top-tier connectivity. Local growers in <em>${profile.neighborhoods}</em> can tap directly into active customer lines.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p class="dark:text-slate-300 text-slate-600">
          <strong>निवेश विवरण:</strong> एक छोटे कमरे से शुरुआत करने के लिए मात्र ₹15,000 की आवश्यकता होती है। बड़े पैमाने पर व्यावसायिक शेड के प्रोजेक्ट के लिए ₹2 लाख से ₹5 लाख तक का खर्च आता है, जिसे मात्र 2 से 3 अच्छे क्रॉप साइकिल (Crop Cycles) में पूरी तरह से वसूल किया जा सकता है।
        </p>
      </div>
    `;

  } else if (category === "Spawn & Products") {
    content.title = `${kwTitleCase} Supplier in ${formattedLoc} | F1 Grain Seeds`;
    content.metaDesc = `Secure pure lab-tested ${kwText} in ${formattedLoc}, ${state}. High-yield, first-generation sorghum and wheat hybrid spawn grains for Oyster, Button & Milky strains with cold supply distribution.`;
    content.h1 = `Premium Certified ${kwTitleCase} for ${formattedLoc} Farms`;
    content.h2s = [
      `Why F1 Grain Spawn is Essential to Secure Bumper Harvests`,
      `Our Advanced Spawn Distribution serving ${state} regional growers`,
      `How to preserve spawn seeds using cold thermals near ${profile.landmark}`
    ];
    content.h3s = [
      `White Button and Milky strain seed variations adapted for ${formattedLoc} weather`,
      `Sourcing high-vigor hybrid bags to supply wholesale markets like ${profile.markets}`,
      `Direct dispatch routes to neighborhoods like ${profile.neighborhoods.split(',')[0]}`
    ];
    content.h4s = [
      `1 Kg seeds (spawn) lagane se kitna mushroom utpadan hota hai?`,
      `Do you deliver spawn safepacks directly to growers inside ${formattedLoc}?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          The absolute foundation of premium agriculture is professional seed breeding. Sourcing top-grade certified spawn is crucial. Our advanced supply grid ships certified <strong>${kwText} in ${formattedLoc}</strong> directly to your address, ensuring high-vigour germination with zero contamination rates.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          Our hybrid grains are cultured on boiled sorghum and premium wheat seeds, enriched with mineral calcium gypsum to prevent sticky clumping. Just 1 kg of this pure laboratory spawn block is capable of inoculating up to 10 standard compost substrate blocks, turning into <strong>10 kg to 15 kg of delicious, fresh organic mushrooms</strong> under baseline grow parameters. ${profile.localAdvantage}
        </p>

        <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6">Sourcing & Delivery Guidelines</h3>
        <p>
          Whether you are based within the heart of <em>${profile.neighborhoods}</em> or running commercial sheds near <strong>${profile.landmark}</strong>, we organize speedy shipping in specially insulated thermal containers to lock in mycelium freshness.
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
      `Premium Packaging Standards to keep Nutrients Locked during transit`,
      `Wholesale Supply contracts for culinary brands near landmark ${profile.landmark}`
    ];
    content.h3s = [
      `Superfoods high-protein diets delivered in ${formattedLoc}`,
      `Rapid doorbell delivery covering areas like ${profile.neighborhoods.split(',')[0]} and adjacent lanes`,
      `Sending fresh yield packages directly to wholesale hubs like ${profile.markets}`
    ];
    content.h4s = [
      `How can I order organic button mushrooms online in ${formattedLoc}?`,
      `Is the organic delivery completely sanitized and kept cold during transit?`
    ];

    content.articleHtml = `
      <div class="prose max-w-none dark:prose-invert prose-slate mt-8 space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          Experience pristine organic nutrition. We are proud to run rapid home-delivery channels for ordering fresh, chemical-free <strong>${kwText} in ${formattedLoc}</strong>. Harvested at early dawn under sanitized standards, our crops reach kitchens, hotels, and grocery carts completely fresh.
        </p>

        <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-6">${content.h2s[0]}</h2>
        <p>
          Our growers completely avoid synthetic growth hormones, relying on pure, natural wheat compost and filtered water misting. This produces crisp buttons and aromatic oyster flushes with high shelf lives across <em>${profile.neighborhoods}</em>. ${profile.localAdvantage}
        </p>

        <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6">Order Dispatch Channels</h3>
        <p>
          We coordinate rapid dispatch pipelines extending to neighborhoods near <strong>${profile.landmark}</strong>. Bulk supply loads are also routed through wholesale corridors like <strong>${profile.markets}</strong> for immediate distribution.
        </p>

        <h4 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mt-4">${content.h4s[0]}</h4>
        <p>
          To purchase, simply connect with our digital dispatch desk of ${formattedLoc} via WhatsApp or place an order via our online organic catalog. We ensure dispatch within 12 hours from harvest to secure flawless freshness!
        </p>
      </div>
    `;
  }

  // Check for manual overrides based on location slug and keyword slug
  const specificKey = `${locSlug}_${kwSlug}`;
  const generalKey = locSlug;

  const override = MANUAL_PAGE_OVERRIDES[specificKey] || MANUAL_PAGE_OVERRIDES[generalKey];
  if (override) {
    return {
      title: override.title || content.title,
      metaDesc: override.metaDesc || content.metaDesc,
      keywords: override.keywords || content.keywords,
      h1: override.h1 || content.h1,
      h2s: override.h2s && override.h2s.length > 0 ? override.h2s : content.h2s,
      h3s: override.h3s && override.h3s.length > 0 ? override.h3s : content.h3s,
      h4s: override.h4s && override.h4s.length > 0 ? override.h4s : content.h4s,
      articleHtml: override.articleHtml || content.articleHtml
    };
  }

  return content;
}

/**
 * Helper to dynamically render all the requested 100+ keywords inside is unique page context
 * to satisfy search crawlers and provide interlinked internal sitemaps.
 */
function getMushroomKeywordsSection(cityName: string, citySlug: string): string {
  const keywords = [
    `mushroom training center in [CITY]`,
    `mushroom farming training in [CITY]`,
    `mushroom cultivation training in [CITY]`,
    `mushroom farming course in [CITY]`,
    `mushroom cultivation course in [CITY]`,
    `mushroom training institute in [CITY]`,
    `mushroom farming classes in [CITY]`,
    `mushroom cultivation classes in [CITY]`,
    `mushroom farming workshop in [CITY]`,
    `mushroom cultivation workshop in [CITY]`,
    `best mushroom training center in [CITY]`,
    `top mushroom training center in [CITY]`,
    `professional mushroom training in [CITY]`,
    `certified mushroom training in [CITY]`,
    `advanced mushroom farming training in [CITY]`,
    `mushroom training center near [CITY]`,
    `mushroom farming training near [CITY]`,
    `mushroom cultivation training near [CITY]`,
    `mushroom course near [CITY]`,
    `mushroom workshop near [CITY]`,
    `oyster mushroom training in [CITY]`,
    `oyster mushroom farming training in [CITY]`,
    `oyster mushroom cultivation training in [CITY]`,
    `oyster mushroom course in [CITY]`,
    `oyster mushroom workshop in [CITY]`,
    `oyster mushroom farming business in [CITY]`,
    `oyster mushroom growing course in [CITY]`,
    `oyster mushroom cultivation classes in [CITY]`,
    `button mushroom training in [CITY]`,
    `button mushroom farming training in [CITY]`,
    `button mushroom cultivation training in [CITY]`,
    `button mushroom course in [CITY]`,
    `button mushroom workshop in [CITY]`,
    `button mushroom farming business in [CITY]`,
    `button mushroom cultivation classes in [CITY]`,
    `milky mushroom training in [CITY]`,
    `milky mushroom farming training in [CITY]`,
    `milky mushroom cultivation course in [CITY]`,
    `mushroom farming business in [CITY]`,
    `mushroom cultivation business in [CITY]`,
    `commercial mushroom farming in [CITY]`,
    `mushroom farming startup in [CITY]`,
    `mushroom farming project in [CITY]`,
    `mushroom farming consultancy in [CITY]`,
    `mushroom cultivation consultancy in [CITY]`,
    `mushroom farming expert in [CITY]`,
    `mushroom spawn training in [CITY]`,
    `mushroom spawn production training in [CITY]`,
    `mushroom seed production training in [CITY]`,
    `mushroom laboratory training in [CITY]`,
    `government mushroom training center in [CITY]`,
    `free mushroom training center in [CITY]`,
    `government mushroom farming training in [CITY]`,
    `agriculture mushroom training in [CITY]`,
    `mushroom cultivation subsidy training in [CITY]`,
    `mushroom farming certification in [CITY]`,
    `mushroom cultivation certificate course in [CITY]`,
    `certified mushroom farming course in [CITY]`,
    `learn mushroom farming in [CITY]`,
    `how to grow mushroom in [CITY]`,
    `mushroom farming for beginners in [CITY]`,
    `mushroom cultivation guide in [CITY]`,
    `mushroom farming techniques in [CITY]`,
    `mushroom cultivation methods in [CITY]`,
    `mushroom farming support in [CITY]`,
    `mushroom marketing support in [CITY]`,
    `mushroom farm setup in [CITY]`,
    `mushroom project consultancy in [CITY]`,
    `mushroom business guidance in [CITY]`,
    `mushroom farming training and certification in [CITY]`,
    `mushroom cultivation training and certification in [CITY]`,
    `mushroom farming business opportunity in [CITY]`,
    `mushroom cultivation business opportunity in [CITY]`,
    `mushroom farming institute near me in [CITY]`,
    `mushroom cultivation center in [CITY]`,
    `mushroom growing course in [CITY]`,
    `mushroom grower training in [CITY]`,
    `mushroom production training in [CITY]`,
    `mushroom farming academy in [CITY]`,
    `mushroom cultivation academy in [CITY]`,
    `mushroom farming seminar in [CITY]`,
    `mushroom cultivation seminar in [CITY]`,
    `mushroom farming webinar in [CITY]`,
    `mushroom cultivation webinar in [CITY]`,
    `mushroom farming masterclass in [CITY]`,
    `mushroom cultivation masterclass in [CITY]`,
    `mushroom farming event in [CITY]`,
    `mushroom cultivation event in [CITY]`
  ];

  const formattedKeywords = keywords.map(kw => kw.replace(/\[CITY\]/g, cityName));

  return `
    <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
      <!-- 🔗 INTERNAL LINKING MAP (SEO CRAWL MATRIX) -->
      <div class="p-5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl mb-8">
        <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4 text-center uppercase tracking-wide">
          🔗 Live Mushroom Portal Index for ${cityName} (Sitemap Matrix)
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <a href="/${citySlug}/mushroom-training-center" class="p-3 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors flex items-center gap-1 font-semibold">
            🎒 Training Center
          </a>
          <a href="/${citySlug}/government-mushroom-farming-training-by-government" class="p-3 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors flex items-center gap-1 font-semibold">
            🏛️ Government Training
          </a>
          <a href="/${citySlug}/stages-of-mushroom-growth" class="p-3 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors flex items-center gap-1 font-semibold">
            📊 Stages of Growth
          </a>
          <a href="/${citySlug}/how-to-grow-mushroom-at-home" class="p-3 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors flex items-center gap-1 font-semibold">
            🏡 Grow at Home Guide
          </a>
          <a href="/${citySlug}/oyster-mushroom-price" class="p-3 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors flex items-center gap-1 font-semibold">
            💰 Strains & Mandi Prices
          </a>
          <a href="/${citySlug}/mushroom-farm-setup" class="p-3 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors flex items-center gap-1 font-semibold">
            🏭 Commercial Setup
          </a>
          <a href="/${citySlug}/mushroom-spawn-supplier" class="p-3 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors flex items-center gap-1 font-semibold">
            🌱 Spawn Supplier
          </a>
          <a href="/${citySlug}/buy-fresh-mushroom-online" class="p-3 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors flex items-center gap-1 font-semibold">
            🛒 Buy Fresh Online
          </a>
        </div>
      </div>

      <!-- 🔍 ACCORDION KEYWORD BLOCK FOR Bot CRAWLING & HIGH-RANKING -->
      <details class="group border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
        <summary class="flex justify-between items-center p-4 font-bold text-slate-700 dark:text-slate-200 cursor-pointer select-none bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
          <span>🔍 Learn more about local coverage targets and syllabus directories in ${cityName}</span>
          <span class="transition-transform group-open:rotate-180 text-xs">▼</span>
        </summary>
        <div class="p-6 space-y-4 text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950/40">
          <p>We provide localized modules satisfying complete training and commercial setups across Madhya Pradesh. Our curriculum covers all aspects of modern mushroom cultivation for students, entrepreneurs, and hobbyists searching for the following local keywords in <strong>${cityName}</strong>:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border-t border-slate-200 dark:border-slate-800 pt-4 mt-4 font-mono text-[11px] leading-tight text-left">
            ${formattedKeywords.map(kw => `<div class="p-1 px-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center gap-1 text-slate-500 dark:text-slate-400">• ${kw}</div>`).join('')}
          </div>
        </div>
      </details>
    </div>
  `;
}
