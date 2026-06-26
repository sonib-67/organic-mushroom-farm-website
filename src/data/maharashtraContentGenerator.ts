import { SEOManualContent } from './locationSEOContent';
import { getMhCityData } from './maharashtraCitiesData';
import { shuffleSeedWise } from './locationSEOContent';

const marathiIntroTemplates = [
  "__LOC__ मध्ये आधुनिक तंत्रज्ञानाचा वापर करून अनेक शेतकरी आता __KW__ कडे यशस्वीरीत्या वळत आहेत.",
  "आजकाल __LOC__ आणि विशेषतः __AREA1__ परिसरात __KW__ मुळे एक उत्तम व्यावसायिक संधी निर्माण झाली आहे.",
  "जर तुम्ही __LOC__ मधील तरुण उद्योजक असाल, तर __KW__ हा कमी खर्चात जास्त नफा देणारा एक उत्तम पर्याय आहे.",
  "__LOC__ च्या भौगोलिक आणि हवामान परिस्थितीचा विचार करता, येथे __KW__ साठी खूप पोषक वातावरण आहे.",
  "__LOC__ शहर आणि ग्रामीण भागात __KW__ च्या वाढत्या मागणीमुळे या क्षेत्रातील गुंतवणुकीत मोठी वाढ झाली आहे.",
  "अनेक प्रगतिशील शेतकरी __LOC__ मध्ये __KW__ चे व्यावसायिक उत्पादन घेऊन आपला आर्थिक स्तर उंचावत आहेत.",
  "सध्याच्या काळात __KW__ हा __LOC__ मधील लोकांसाठी एक अत्यंत आश्वासक आणि फायदेशीर मार्ग बनला आहे.",
  "__LOC__ च्या आसपासच्या __AREA1__ सारख्या ठिकाणी __KW__ बद्दल जागरूकता आणि प्रशिक्षण शिबिरे वाढत आहेत."
];

const marathiBodyTemplates = [
  "__AREA1__ आणि __AREA2__ भागातील शेतकरी __AGRI1__ आणि __AGRI2__ चा उत्तम प्रकारे पुनर्वापर करून आपले उत्पन्न दुप्पट करत आहेत.",
  "विशेष म्हणजे, __LOC__ मधील __MARKET1__ सारख्या मोठ्या बाजारपेठांमध्ये याची मागणी प्रचंड वाढली आहे.",
  "__MARKET1__ आणि __MARKET2__ मध्ये मिळणारा चांगला भाव लक्षात घेता, अनेक लोक याकडे पूर्णवेळ व्यवसाय म्हणून पाहत आहेत.",
  "__NEARBY1__ आणि __NEARBY2__ मधून येणाऱ्या व्यापाऱ्यांमुळे इथल्या मालाला स्थानिक पातळीवरच मोठी बाजारपेठ उपलब्ध होते.",
  "येथील स्थानिक शेतकरी __AGRI1__ सारख्या कच्च्या मालाचा उपयोग करून __MARKET1__ मध्ये थेट विक्री करत आहेत.",
  "__LOC__ मधील __AREA2__ परिसरातील उत्पादक आता आधुनिक पद्धतीचा अवलंब करून __MARKET2__ मध्ये दर्जेदार पुरवठा करत आहेत.",
  "विशेषतः __MARKET1__ च्या माध्यमातून __NEARBY1__ पर्यंत उत्पादने पोहचवणे आता अधिक सोपे आणि परवडणारे झाले आहे.",
  "__AREA1__ च्या आसपास उपलब्ध असलेल्या __AGRI2__ मुळे हा प्रकल्प उभारणीचा खर्च खूपच आटोक्यात राहतो."
];

const marathiBenefitTemplates = [
  "यामुळे केवळ आर्थिक फायदाच होत नाही, तर __LOC__ च्या ग्रामीण तसेच शहरी भागात रोजगार निर्मितीही होत आहे.",
  "शासनाच्या विविध अनुदानांचा फायदा घेऊन तुम्ही __AREA1__ मध्ये आपला स्वतःचा सेटअप अगदी सहजपणे उभा करू शकता.",
  "अगदी कमी जागेत आणि कमी भांडवलात सुरुवात करूनही तुम्ही __MARKET1__ मध्ये थेट विक्री करू शकता, हे याचे मोठे वैशिष्ट्य आहे.",
  "__AGRI1__ सारख्या कृषी अवशेषांचा वापर केल्याने उत्पादन खर्च मोठ्या प्रमाणावर कमी होतो आणि निव्वळ नफा वाढतो.",
  "या व्यवसायामुळे __LOC__ मधील महिला आणि तरुणांना घरबसल्या एक हक्काचे उत्पन्नाचे साधन मिळाले आहे.",
  "शाश्वत आणि सेंद्रिय पद्धतीचा अवलंब केल्यामुळे __MARKET2__ मधील ग्राहक या उत्पादनांना विशेष पसंती देत आहेत.",
  "__NEARBY1__ सारख्या शहरांशी जोडल्या गेलेल्या संपर्क व्यवस्थेमुळे वाहतूक खर्च वाचतो आणि नफ्याचे प्रमाण अधिक राहते.",
  "__AREA2__ मधील यशस्वी उदाहरणे पाहता, __LOC__ मधील नवउद्योजकांसाठी हा एक आदर्श आणि सुरक्षित व्यवसाय ठरत आहे."
];

const hindiTemplates = [
  "__LOC__ के किसानों और युवाओं के लिए __KW__ एक बहुत ही बेहतरीन और मुनाफेदार बिजनेस मॉडल बनकर उभरा है।",
  "अगर हम __LOC__ और खासकर __AREA1__ के मार्केट की बात करें, तो वहां इस क्षेत्र में बहुत तेजी से विकास हो रहा है।",
  "__MARKET1__ में बढ़ती डिमांड को देखते हुए, __LOC__ में कम इन्वेस्टमेंट के साथ इस व्यवसाय को शुरू करना बहुत ही फायदे का सौदा है।",
  "स्थानीय किसान __AGRI1__ का उपयोग करके और __MARKET2__ जैसे बाजारों में अपनी उपज बेचकर बहुत अच्छा मुनाफा कमा रहे हैं।",
  "__NEARBY1__ और __NEARBY2__ के व्यापारी भी अब सीधे __LOC__ से माल खरीदना पसंद कर रहे हैं, जिससे किसानों को सीधा फायदा मिल रहा है।",
  "__LOC__ के अनुकूल मौसम और __AGRI2__ की आसान उपलब्धता ने __KW__ को यहां एक सफल उद्यम बना दिया है।",
  "हाल ही के वर्षों में, __AREA2__ के कई लोगों ने अपनी नौकरी छोड़कर __KW__ को अपना मुख्य पेशा बना लिया है।",
  "__MARKET1__ में सही दाम और थोक खरीदारों की मौजूदगी से __LOC__ में इसका भविष्य काफी उज्जवल दिखाई देता है।"
];

const englishTemplates = [
  "The demand for __KW__ in __LOC__ has seen exponential growth, driven by changing consumer preferences and market dynamics.",
  "Entrepreneurs in __LOC__, particularly around __AREA1__, are leveraging modern techniques to maximize their ROI in this sector.",
  "With strategic access to __MARKET1__ and local availability of raw materials like __AGRI1__, the setup cost is significantly minimized.",
  "By adopting advanced methodologies, growers in __LOC__ are not only meeting local demands in __MARKET2__ but also supplying to nearby regions like __NEARBY1__.",
  "Government subsidies and local support systems in __LOC__ have made it easier than ever to scale operations and establish a sustainable business.",
  "The unique climate of __LOC__ provides an excellent natural environment for expanding the scope of __KW__ effectively.",
  "Innovative solutions utilizing __AGRI2__ are empowering the farming community in __AREA2__ to achieve higher profit margins.",
  "Connecting local producers from __LOC__ directly to major commercial hubs like __MARKET1__ has streamlined the entire supply chain."
];

function replaceVars(text: string, vars: any) {
  return text
    .replace(/__LOC__/g, vars.loc)
    .replace(/__KW__/g, vars.kw)
    .replace(/__AREA1__/g, vars.area1)
    .replace(/__AREA2__/g, vars.area2)
    .replace(/__MARKET1__/g, vars.market1)
    .replace(/__MARKET2__/g, vars.market2)
    .replace(/__AGRI1__/g, vars.agri1)
    .replace(/__AGRI2__/g, vars.agri2)
    .replace(/__NEARBY1__/g, vars.nearby1)
    .replace(/__NEARBY2__/g, vars.nearby2);
}

export function generateMaharashtraPage(locationName: string, keywordInfo: any, formattedLoc: string, state: string): SEOManualContent | null {
  if (state !== 'Maharashtra') return null;

  const locSlug = locationName.toLowerCase().trim().replace(/_/g, '-').replace(/\s+/g, '-');
  const kwSlug = keywordInfo ? keywordInfo.url.replace(/^\/+|\/+$/g, '').toLowerCase() : '';
  const kwText = keywordInfo ? keywordInfo.keyword : '';
  
  const seed = `${locSlug}-${kwSlug}`;
  const cityData = getMhCityData(locSlug);
  
  const sAreas = shuffleSeedWise(cityData.areas, seed, 1);
  const sMarkets = shuffleSeedWise(cityData.markets, seed, 2);
  const sAgri = shuffleSeedWise(cityData.agri, seed, 3);
  const sNearby = shuffleSeedWise(cityData.nearby, seed, 4);

  const vars = {
    loc: formattedLoc,
    kw: kwText,
    area1: sAreas[0] || 'City Area',
    area2: sAreas[1] || 'Suburbs',
    market1: sMarkets[0] || 'Local Market',
    market2: sMarkets[1] || 'City Market',
    agri1: sAgri[0] || 'Local Farm Waste',
    agri2: sAgri[1] || 'Agri Residue',
    nearby1: sNearby[0] || 'Nearby City',
    nearby2: sNearby[1] || 'Neighboring District'
  };

  const pMar1 = replaceVars(shuffleSeedWise(marathiIntroTemplates, seed, 10)[0], vars);
  const pMar2 = replaceVars(shuffleSeedWise(marathiBodyTemplates, seed, 11)[0], vars);
  const pMar3 = replaceVars(shuffleSeedWise(marathiBenefitTemplates, seed, 12)[0], vars);
  const pEng = replaceVars(shuffleSeedWise(englishTemplates, seed, 13)[0], vars);
  const pHin = replaceVars(shuffleSeedWise(hindiTemplates, seed, 14)[0], vars);

  const articleHtml = `
    <div class="prose max-w-none dark:prose-invert">
      <p><strong>${formattedLoc} मधील ${kwText}:</strong> ${pMar1}</p>
      
      <h2>${formattedLoc} मधील बाजारपेठ आणि संधी</h2>
      <p>${pMar2}</p>
      
      <h3>Key Market Insights in ${formattedLoc}</h3>
      <p>${pEng}</p>
      
      <h3>व्यावसायिक दृष्टीकोन आणि आर्थिक फायदे</h3>
      <p>${pMar3}</p>
      
      <h3>${formattedLoc} में व्यापार के अवसर</h3>
      <p>${pHin}</p>
      
      <div class="p-4 mt-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-primary-start">
        <p><strong>Update:</strong> Find more information about ${kwText} in <a href="/${vars.nearby1.toLowerCase().replace(/\s+/g, '-')}/${kwSlug}" class="text-primary-start hover:underline">${vars.nearby1}</a> or visit our main center near ${vars.area1}.</p>
      </div>
    </div>
  `;

  const titleTemplates = [
    `${kwText} in ${formattedLoc} | Expert Guide & Local Info`,
    `${formattedLoc} ${kwText} | Top Business Opportunities`,
    `Complete Guide to ${kwText} in ${formattedLoc}, Maharashtra`,
    `Best ${kwText} Tips and Strategy in ${formattedLoc}`,
    `${kwText} - Local Insights for ${formattedLoc}`
  ];
  const title = replaceVars(shuffleSeedWise(titleTemplates, seed, 15)[0], vars);

  const descTemplates = [
    `Learn about ${kwText} in ${formattedLoc}. Detailed guide covering ${vars.area1}, market insights at ${vars.market1}, and high ROI techniques.`,
    `Discover the best opportunities for ${kwText} in ${formattedLoc}. Local expertise, market access in ${vars.market1}, and proven methods.`,
    `Explore ${kwText} possibilities in ${formattedLoc}. Get information on local resources like ${vars.agri1} and market demand.`,
    `Your trusted resource for ${kwText} in ${formattedLoc}. Enhance your knowledge with insights on ${vars.market1} and ${vars.nearby1}.`
  ];
  const metaDesc = replaceVars(shuffleSeedWise(descTemplates, seed, 16)[0], vars);

  const h1Templates = [
    `${kwText} in ${formattedLoc}, Maharashtra`,
    `A Comprehensive Guide to ${kwText} in ${formattedLoc}`,
    `${formattedLoc} Market Focus: ${kwText}`,
    `Understanding ${kwText} in the ${formattedLoc} Region`
  ];
  const h1 = replaceVars(shuffleSeedWise(h1Templates, seed, 17)[0], vars);

  const faqs = [
    {
      q: `What is the scope of ${kwText} in ${formattedLoc}?`,
      a: `The demand is rising significantly, especially in areas like ${vars.area1} and near ${vars.market1}. It offers a great opportunity for locals.`
    },
    {
      q: `How can I start with ${kwText} around ${vars.area1}?`,
      a: `You can begin by understanding the local climate, utilizing resources like ${vars.agri1}, and targeting markets such as ${vars.market1}.`
    },
    {
      q: `Is ${kwText} profitable in the ${formattedLoc} region?`,
      a: `Yes, with the right strategy and access to nearby cities like ${vars.nearby1}, the return on investment can be very high.`
    }
  ];

  const finalContent: SEOManualContent = {
    title,
    metaDesc,
    keywords: `${kwText} ${formattedLoc}, ${formattedLoc} business, ${vars.area1} ${kwText}, ${vars.market1} demand`,
    h1,
    h2s: [`Opportunities in ${formattedLoc}`, `Market Demand at ${vars.market1}`],
    h3s: [`Insights for ${vars.area1}`, `Local Strategies`, `व्यावसायिक दृष्टीकोन आणि आर्थिक फायदे`],
    h4s: faqs.map(f => f.q),
    articleHtml,
    faqs
  };

  return finalContent;
}
