import { SEOManualContent } from './locationSEOContent';
import { getMhCityData } from './maharashtraCitiesData';
import { shuffleSeedWise } from './locationSEOContent';

const marathiWords = [
  "लागवड", "प्रशिक्षण", "शेतकरी", "उत्पादन", "बाजारपेठ", "आधुनिक", "फायदा",
  "कृषी", "माहिती", "व्यवसाय", "संधी", "हवामान", "अल्पभूधारक", "महिला", "तंत्रज्ञान",
  "खर्च", "सबसिडी", "शासकीय", "मार्गदर्शन", "उद्योग", "रोजगार"
];

const hindiWords = [
  "खेती", "प्रशिक्षण", "मशरूम", "व्यवसाय", "किसान", "कमाई", "मार्केट", "ट्रेनिंग",
  "प्रॉफिट", "अनुदान", "फसल", "तकनीक", "फायदेमंद", "उत्पादन"
];

function generateUniqueId(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function generateMaharashtraPage(locationName: string, keywordInfo: any, formattedLoc: string, state: string): SEOManualContent | null {
  if (state !== 'Maharashtra') return null;

  const locSlug = locationName.toLowerCase().trim().replace(/_/g, '-').replace(/\s+/g, '-');
  const kwSlug = keywordInfo ? keywordInfo.url.replace(/^\/+|\/+$/g, '').toLowerCase() : '';
  const kwText = keywordInfo ? keywordInfo.keyword : '';
  const category = keywordInfo ? keywordInfo.category : 'General';
  
  const seed = `${locSlug}-${kwSlug}`;
  const id = generateUniqueId(seed);
  
  const cityData = getMhCityData(locSlug);
  
  // Choose random elements based on seed
  const sAreas = shuffleSeedWise(cityData.areas, seed, 1).slice(0, 2);
  const sMarkets = shuffleSeedWise(cityData.markets, seed, 2).slice(0, 2);
  const sAgri = shuffleSeedWise(cityData.agri, seed, 3).slice(0, 2);
  const sNearby = shuffleSeedWise(cityData.nearby, seed, 4).slice(0, 2);
  const sMidc = shuffleSeedWise(cityData.midc, seed, 5)[0] || 'Local MIDC';

  let h1 = "";
  let metaDesc = "";
  let title = "";
  let articleHtml = "";
  
  // Categorical logic for different keyword intents (Search Intent)
  if (category.toLowerCase().includes('training') | category.toLowerCase().includes('course')) {
    title = `${formattedLoc} Mushroom Training | Practical Farm Course in ${sAreas[0]}`;
    metaDesc = `Learn commercial mushroom farming in ${formattedLoc}. Offline/Online training, practical guidance in ${sAreas[0]}, using ${sAgri[0]} substrate. High ROI business for Maharashtra farmers.`;
    h1 = `Professional Mushroom Training Center in ${formattedLoc}, Maharashtra`;
    
    articleHtml = `
      <div class="prose max-w-none dark:prose-invert">
        <p><strong>${formattedLoc} मधील आधुनिक मशरूम प्रशिक्षण:</strong> मशरूम शेती हा आता फक्त एक पारंपारिक व्यवसाय राहिलेला नाही. In recent years, mushroom cultivation has transformed into a highly profitable enterprise. ${formattedLoc} परिसरातील ${sAreas[0]} आणि ${sAreas[1]} भागातील तरुण आणि शेतकरी याकडे एक उत्तम बिझनेस मॉडेल म्हणून पाहत आहेत.</p>
        
        <h2>Why start Mushroom Farming in ${formattedLoc}?</h2>
        <p>येथील \${cityData.climate} हवामान मशरूम वाढीसाठी अत्यंत अनुकूल आहे. We teach you how to maintain optimal temperature and humidity using low-cost technology. ${sNearby[0]} आणि ${sNearby[1]} मधील बरेच शेतकरी आता <a href="/mushroom-spawn-supplier-near-me" class="text-primary-start hover:underline">${sAgri[0]} आणि ${sAgri[1]} चा वापर करून Oyster आणि Button mushroom चे उत्तम उत्पादन</a> घेत आहेत.</p>
        
        <p>अगर आप <a href="/mushroom-farming-business-plan" class="text-primary-start hover:underline">${formattedLoc} में एक सफल मशरूम फार्म</a> शुरू करना चाहते हैं, तो हमारी प्रैक्टिकल ट्रेनिंग आपके लिए सबसे सही कदम है।</p>
        
        <h3>Training Syllabus (प्रशिक्षण अभ्यासक्रम)</h3>
        <ul>
          <li><strong>Spawn Processing:</strong> उत्कृष्ट दर्जाचे स्पॉन (बियाणे) कसे ओळखावे.</li>
          <li><strong>Substrate Preparation:</strong> Using local agricultural waste like ${sAgri[0]} and sterilizing it.</li>
          <li><strong>Climate Control:</strong> ${formattedLoc} च्या बदलत्या तापमानात (temp control) मशरूम बेड कसे सांभाळावे.</li>
          <li><strong>Marketing & Sales:</strong> Direct supply to ${sMarkets[0]} and ${sMarkets[1]} for maximum profit.</li>
        </ul>
        
        <div class="p-4 mt-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-primary-start">
          <p><strong>Batch Updates:</strong> नवीन बॅच लवकरच ${sAreas[0]} जवळ किंवा ऑनलाइन सुरु होत आहे. Government subsidy and Krishi Vigyan Kendra (KVK) guidelines are included. For nearby areas, check our <a href="/${sNearby[0].toLowerCase().replace(/\s+/g, '-')}/mushroom-training-center" class="text-primary-start hover:underline">${sNearby[0]} training schedule</a>.</p>
        </div>
      </div>
    `;
  } 
  else if (category.toLowerCase().includes('spawn') | category.toLowerCase().includes('seed')) {
    title = `Buy Best Mushroom Spawn in ${formattedLoc} | F1 Seeds Supply`;
    metaDesc = `Premium quality Oyster & Button Mushroom spawn supplier in ${formattedLoc}. Fast delivery to ${sNearby[0]} and ${sNearby[1]}. Lab tested F1 seeds.`;
    h1 = `High Yielding Mushroom Spawn & Seeds Supplier in ${formattedLoc}`;
    
    articleHtml = `
      <div class="prose max-w-none dark:prose-invert">
        <p><strong>${formattedLoc} मध्ये मशरूम स्पॉनचा पुरवठा:</strong> मशरूम उत्पादनात सर्वात महत्त्वाची गोष्ट म्हणजे दर्जेदार बियाणे (Mushroom Spawn). ${formattedLoc} मधील ${sAreas[0]} आणि ${sMidc} परिसरातील मशरूम उत्पादकांना आम्ही सर्वोत्तम F1 generation spawn पुरवतो.</p>
        
        <h2>Premium Quality Seeds for ${formattedLoc} Climate</h2>
        <p>Our lab-tested spawns are specially acclimatized to perform best in the \${cityData.climate} conditions. चाहे वह ऑयस्टर मशरूम हो, मिल्की हो या बटन मशरूम, <a href="/mushroom-training-center" class="text-primary-start hover:underline">सही बीजों का चुनाव ही आपकी फसल की सफलता</a> तय करता है।</p>
        
        <h3>Available Spawn Types in ${formattedLoc}:</h3>
        <ul>
          <li><strong>Oyster Mushroom Spawn:</strong> Fast colonization on ${sAgri[0]}. ${formattedLoc} च्या हवामानात (climate) वेगाने वाढणारे.</li>
          <li><strong>Button Mushroom Spawn:</strong> Perfect for temperature-controlled units in ${sAreas[1]}.</li>
          <li><strong>Milky Mushroom:</strong> Summer special variety, highly demanded in ${sMarkets[0]}.</li>
        </ul>
        
        <p>We ensure fast and safe delivery to <a href="/${sNearby[0].toLowerCase().replace(/\s+/g, '-')}/buy-mushroom-spawn" class="text-primary-start hover:underline">${sNearby[0]}</a>, ${sNearby[1]} and surrounding agricultural zones of ${formattedLoc}. योग्य स्पॉन मिळवण्यासाठी आणि ताजे बियाणे बुक करण्यासाठी आमच्याशी संपर्क साधा.</p>
      </div>
    `;
  }
  else if (category.toLowerCase().includes('business') | category.toLowerCase().includes('plan')) {
    title = `Mushroom Farming Business Plan in ${formattedLoc} | High ROI`;
    metaDesc = `Start a profitable mushroom business in ${formattedLoc}, Maharashtra. Learn project costs, ROI, subsidies, and marketing at ${sMarkets[0]}.`;
    h1 = `Commercial Mushroom Farming Business Model in ${formattedLoc}`;
    
    articleHtml = `
      <div class="prose max-w-none dark:prose-invert">
        <p><strong>${formattedLoc} मधील मशरूम व्यवसाय संधी:</strong> आजच्या काळात कमी जागेत आणि कमी खर्चात (low investment) जास्त नफा मिळवून देणारा हा एक उत्तम व्यवसाय आहे. ${formattedLoc} जवळील ${sAreas[0]} आणि ${sAreas[1]} भागांमध्ये याची मागणी झपाट्याने वाढत आहे.</p>
        
        <h2>Project Cost & ROI for ${formattedLoc}</h2>
        <p>The initial setup cost depends on your target market. If you are planning to supply to ${sMarkets[0]} or wholesale buyers in ${sMidc}, a commercial setup is recommended. यहां मशरूम की भारी डिमांड है, खासकर होटल्स और <a href="/mushroom-spawn-supplier" class="text-primary-start hover:underline">सुपरमार्केट्स में</a>।</p>
        
        <h3>Market Demand in ${formattedLoc}</h3>
        <ul>
          <li><strong>Local Sales:</strong> Selling fresh oyster and button mushrooms at ${sMarkets[1]}.</li>
          <li><strong>Wholesale:</strong> Bulk supply to APMC markets and surrounding cities like <a href="/${sNearby[0].toLowerCase().replace(/\s+/g, '-')}/mushroom-farming-business-plan" class="text-primary-start hover:underline">${sNearby[0]}</a>.</li>
          <li><strong>Value Addition:</strong> मशरूम पावडर, लोणचे (Pickles), आणि सुकवलेले मशरूम (Dry mushrooms) बनवून विक्री.</li>
        </ul>
        
        <p>Maharashtra state government and NABARD provide excellent subsidies for agro-processing units. We guide you from shed construction in ${sAreas[1]} to final harvest sales. <a href="/mushroom-training-center" class="text-primary-start hover:underline">${formattedLoc} मधील शेतकरी आणि उद्योजकांसाठी</a> हा व्यवसाय आर्थिक उन्नतीचा नवा मार्ग ठरत आहे.</p>
      </div>
    `;
  }
  else {
    // General / Catch-all Content
    title = `${kwText} in ${formattedLoc}, Maharashtra | Complete Guide`;
    metaDesc = `Expert information on ${kwText} in ${formattedLoc}. Local techniques using ${sAgri[0]}, market insights at ${sMarkets[0]}, and farming strategies.`;
    h1 = `${kwText} in ${formattedLoc}: Agricultural Insights`;
    
    articleHtml = `
      <div class="prose max-w-none dark:prose-invert">
        <p><strong>${formattedLoc} आणि मशरूम शेती (Mushroom Farming):</strong> ${kwText} च्या संदर्भात ${formattedLoc} शहर आणि आजूबाजूचा परिसर (जसे की ${sAreas[0]}) खूप वेगाने प्रगती करत आहे. \${cityData.climate} वातावरणामुळे आणि ${sAgri[0]} सारख्या कृषी-अवशेषांच्या उपलब्धतेमुळे (availability of agro-waste), येथे <a href="/mushroom-farming-business-plan" class="text-primary-start hover:underline">मशरूम लागवड अत्यंत फायदेशीर</a> ठरत आहे.</p>
        
        <h2>Why ${kwText} is trending in ${formattedLoc}?</h2>
        <p>The demand for protein-rich, organic food is rising in urban and semi-urban pockets of ${formattedLoc}. People in ${sAreas[1]} and <a href="/${sNearby[0].toLowerCase().replace(/\s+/g, '-')}/${kwSlug}" class="text-primary-start hover:underline">${sNearby[0]}</a> are actively looking for fresh produce. अगर हम ${formattedLoc} के लोकल मार्केट्स जैसे ${sMarkets[0]} की बात करें, तो वहां ताज़े मशरूम की बहुत अधिक मांग है।</p>
        
        <h3>Key Agricultural Factors:</h3>
        <ul>
          <li><strong>Raw Material:</strong> ${formattedLoc} मध्ये ${sAgri[1]} आणि ${sAgri[0]} सहज उपलब्ध असल्याने उत्पादन खर्च (production cost) कमी होतो.</li>
          <li><strong>Local Markets:</strong> ${sMarkets[1]} सारख्या स्थानिक बाजारपेठांमध्ये थेट विक्री (direct selling) शक्य आहे.</li>
          <li><strong>Industrial Support:</strong> The presence of agro-processing units near ${sMidc} supports value addition.</li>
        </ul>
        
        <p>Whether you are a beginner or an experienced grower in ${formattedLoc}, understanding the local dynamics is crucial. <a href="/mushroom-training-center" class="text-primary-start hover:underline">योग्य मार्गदर्शन आणि अद्ययावत तंत्रज्ञानाचा</a> वापर करून तुम्ही यशस्वी होऊ शकता.</p>
      </div>
    `;
  }

  if (locSlug === 'mumbai') {
    articleHtml += `
      <div class="mt-16 pt-16 border-t dark:border-white/10 border-black/10 prose max-w-none dark:prose-invert">
        <h2>Mumbai Mushroom Farming Training | मुंबई मशरूम शेती प्रशिक्षण केंद्र – Complete Guide to Mushroom Farm Setup, Online Training & Mushroom Business</h2>
        <p><strong>Start a Profitable Mushroom Farming Business in Mumbai | मुंबईमध्ये मशरूम शेती व्यवसाय कसा सुरू करावा?</strong></p>
        <p>मुंबई, नवी मुंबई, ठाणे, मीरा रोड, वाशी, पनवेल, कल्याण, डोंबिवली आणि आसपासच्या भागांमध्ये ताज्या, सेंद्रिय आणि औषधी मशरूमची मागणी वेगाने वाढत आहे. हॉटेल्स, रेस्टॉरंट्स, सुपरमार्केट्स आणि हेल्थ-फूड स्टोअर्समध्ये मशरूमचा वापर वाढल्यामुळे हा व्यवसाय नवीन उद्योजकांसाठी मोठी संधी बनला आहे.</p>
        <p>If you want to start a mushroom farming business in Mumbai, proper training, quality mushroom spawn, farm planning and marketing strategy are the keys to success.</p>

        <h3>Why Mushroom Farming is a Growing Business in Mumbai?</h3>
        <p>Mumbai is one of India’s largest food markets. Every day thousands of kilograms of fresh mushrooms are supplied to restaurants, hotels, supermarkets and online grocery stores.</p>
        <p>Because of increasing awareness about healthy food, demand is growing for:</p>
        <ul>
          <li>Oyster Mushroom</li>
          <li>Button Mushroom</li>
          <li>Milky Mushroom</li>
          <li>Shiitake Mushroom</li>
          <li>Lion’s Mane Mushroom</li>
          <li>Reishi Mushroom</li>
          <li>Turkey Tail Mushroom</li>
        </ul>
        <p>Medicinal mushrooms are also becoming popular among health-conscious consumers.</p>

        <h3>Mushroom Farm Setup</h3>
        <p>Professional mushroom farm setup includes:</p>
        <ul>
          <li>Growing Room Design</li>
          <li>Humidity Management</li>
          <li>Temperature Control</li>
          <li>Ventilation System</li>
          <li>Clean Production Area</li>
          <li>Quality Mushroom Spawn</li>
          <li>Packaging Area</li>
          <li>Storage Facility</li>
        </ul>
        <p>Whether you want a small home-based farm or a commercial mushroom production unit, proper planning helps reduce production risks.</p>

        <h3>Online Mushroom Training</h3>
        <p>घरबसल्या संपूर्ण मशरूम शेती शिकण्यासाठी ऑनलाइन प्रशिक्षण उपलब्ध आहे.</p>
        <p>Training includes:</p>
        <ul>
          <li>Mushroom Biology</li>
          <li>Compost & Substrate Preparation</li>
          <li>Spawn Running</li>
          <li>Bed Preparation</li>
          <li>Disease Management</li>
          <li>Harvesting</li>
          <li>Packaging</li>
          <li>Marketing</li>
          <li>Business Planning</li>
        </ul>
        <p>Students from Mumbai, Navi Mumbai, Thane, Panvel, Kalyan, Dombivli and nearby villages can join online training.</p>

        <h3>Offline Practical Mushroom Training</h3>
        <p>Offline practical sessions focus on:</p>
        <ul>
          <li>Live Demonstration</li>
          <li>Mushroom Production</li>
          <li>Spawn Handling</li>
          <li>Farm Management</li>
          <li>Harvesting Techniques</li>
          <li>Commercial Production</li>
        </ul>

        <h3>Mushroom Spawn Sale</h3>
        <p>High-quality spawn is available for:</p>
        <ul>
          <li>Oyster Mushroom</li>
          <li>Button Mushroom</li>
          <li>Milky Mushroom</li>
        </ul>
        <p>Healthy spawn plays an important role in obtaining better yield and quality production.</p>

        <h3>Fresh Mushroom Business</h3>
        <p>Fresh mushrooms can be supplied to:</p>
        <ul>
          <li>Hotels</li>
          <li>Restaurants</li>
          <li>Cafés</li>
          <li>Supermarkets</li>
          <li>Organic Stores</li>
          <li>Vegetable Markets</li>
        </ul>
        <p>Mumbai offers one of the largest consumer markets for fresh mushrooms.</p>

        <h3>Dry Mushroom Business</h3>
        <p>Dry mushrooms have several advantages:</p>
        <ul>
          <li>Long Shelf Life</li>
          <li>Easy Transportation</li>
          <li>Better Storage</li>
          <li>Value Addition</li>
          <li>National Shipping Opportunities</li>
        </ul>
        <p>Many mushroom entrepreneurs earn additional income by selling dried mushrooms and mushroom powder.</p>

        <h3>Mushroom Consultancy</h3>
        <p>Professional consultancy may help with:</p>
        <ul>
          <li>Farm Planning</li>
          <li>Production Management</li>
          <li>Expansion Planning</li>
          <li>Business Development</li>
          <li>Technical Support</li>
        </ul>

        <h3>Turnkey Mushroom Projects</h3>
        <p>Complete project support can include:</p>
        <ul>
          <li>Commercial Farm Planning</li>
          <li>Equipment Guidance</li>
          <li>Production Unit Design</li>
          <li>Infrastructure Planning</li>
        </ul>

        <h3>Mushroom Business Plan & ROI</h3>
        <p>Before investing, entrepreneurs should evaluate:</p>
        <ul>
          <li>Initial Investment</li>
          <li>Production Capacity</li>
          <li>Operating Costs</li>
          <li>Local Market Demand</li>
          <li>Expected Returns</li>
        </ul>
        <p>A proper business plan helps improve long-term profitability.</p>

        <h3>Government Subsidy</h3>
        <p>Eligible farmers and entrepreneurs may benefit from relevant agriculture and entrepreneurship schemes, depending on current government programs and eligibility.</p>

        <h3>Mushroom Marketing Support</h3>
        <p>Marketing guidance may include:</p>
        <ul>
          <li>Local Market Development</li>
          <li>Restaurant Supply</li>
          <li>Retail Distribution</li>
          <li>Online Sales</li>
          <li>Branding</li>
          <li>Customer Acquisition</li>
        </ul>

        <h3>Mumbai Areas Covered</h3>
        <ul>
          <li>Andheri</li>
          <li>Borivali</li>
          <li>Kandivali</li>
          <li>Goregaon</li>
          <li>Malad</li>
          <li>Powai</li>
          <li>Ghatkopar</li>
          <li>Chembur</li>
          <li>Navi Mumbai</li>
          <li>Vashi</li>
          <li>Nerul</li>
          <li>Panvel</li>
          <li>Thane</li>
          <li>Mira Road</li>
        </ul>

        <h3>Nearby Locations</h3>
        <ul>
          <li>Karjat</li>
          <li>Badlapur</li>
          <li>Ambernath</li>
          <li>Bhiwandi</li>
          <li>Vasai</li>
          <li>Virar</li>
        </ul>

        <h3>Conclusion</h3>
        <p>मुंबई आणि आसपासच्या भागांमध्ये मशरूम शेती हा वेगाने वाढणारा व्यवसाय आहे. योग्य प्रशिक्षण, दर्जेदार स्पॉन, व्यवस्थित फार्म सेटअप, मार्केटिंग आणि तांत्रिक मार्गदर्शन यांच्या मदतीने नवीन उद्योजक तसेच शेतकरी यशस्वी व्यवसाय उभारू शकतात.</p>
        <p>Whether your goal is mushroom farm setup, online training, offline practical learning, spawn production, fresh mushroom sales, dry mushroom processing or consultancy, building a knowledge-driven business is the first step toward long-term success.</p>
      </div>
    `;
  }

  const h2s = [
    `Local Opportunities in ${formattedLoc}`,
    `Market Scope at ${sMarkets[0]}`,
    `Farming Subsidies in Maharashtra`,
    `Training & Setup Guidance`,
    `Success Stories from ${sNearby[0]}`
  ];
  
  const h3s = [
    `Benefits for ${formattedLoc} Farmers`,
    `Sourcing Materials near ${sAreas[0]}`,
    `Climate Control Strategies`
  ];

  const faqs = [
    {
      q: `What is the scope of mushroom farming in ${formattedLoc}?`,
      a: `The scope is massive. With markets like ${sMarkets[0]} and high demand in ${sAreas[0]}, growing mushrooms locally provides a high ROI.`
    },
    {
      q: `Can I get training near ${sAreas[1]}, ${formattedLoc}?`,
      a: `Yes, practical offline and online training sessions are regularly conducted covering the specific \${cityData.climate} climate challenges of ${formattedLoc}.`
    },
    {
      q: `What is the best mushroom variety to grow in ${formattedLoc}?`,
      a: `Oyster and Milky mushrooms are excellent for the natural climate. Button mushrooms require AC setups but yield high profits in ${sMarkets[1]}.`
    }
  ];

  const finalContent: SEOManualContent = {
    title,
    metaDesc,
    keywords: `${kwText} ${formattedLoc}, mushroom farming ${formattedLoc}, mushroom training Maharashtra, buy mushroom spawn in ${formattedLoc}, ${sMarkets[0]} mushroom price`,
    h1,
    h2s,
    h3s,
    h4s: faqs.map(f => f.q),
    articleHtml,
    faqs
  };

  return finalContent;
}
