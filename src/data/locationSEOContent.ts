import { SEOKeyword } from './seoKeywordsData';
import { MANUAL_PAGE_OVERRIDES } from './customPages';
import { STATES, CITIES, VILLAGES } from './locationsData';

export interface SEOManualContent {
  title: string;
  metaDesc: string;
  keywords: string;
  h1: string;
  h2s: string[];
  h3s: string[];
  h4s: string[];
  articleHtml: string;
  faqs?: { q: string; a: string }[];
}

// 1. Precise City/Village to State Dynamic Mapping Hub
export function getStateOfLocation(locationName: string): string {
  const loc = locationName.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-').trim();

  // If the slug matches a state directly
  for (const st of STATES) {
    const stSlug = st.toLowerCase().replace(/_/g, '-');
    if (loc === stSlug) {
      return st.replace(/_/g, ' ');
    }
  }

  // Exact village mappings to their respective states
  const villageToState: Record<string, string> = {
    'lepakshi': 'Andhra Pradesh',
    'majuli': 'Assam',
    'bodh-gaya': 'Bihar',
    'chitrakote': 'Chhattisgarh',
    'aldona': 'Goa',
    'gir-forest': 'Gujarat',
    'kurukshetra': 'Haryana',
    'malana': 'Himachal Pradesh',
    'hampi': 'Karnataka',
    'kumarakom': 'Kerala',
    'khajuraho': 'Madhya Pradesh',
    'shani-shingnapur': 'Maharashtra',
    'loktak-lake': 'Manipur',
    'mawlynnong': 'Meghalaya',
    'dzukou': 'Nagaland',
    'konark': 'Odisha',
    'anandpur-sahib': 'Punjab',
    'sambhar-lake': 'Rajasthan',
    'yuksom': 'Sikkim',
    'mahabalipuram': 'Tamil Nadu',
    'ramappa': 'Telangana',
    'neermahal': 'Tripura',
    'patan': 'Gujarat',
    'vrindavan': 'Uttar Pradesh',
    'shantiniketan': 'West Bengal'
  };

  if (villageToState[loc]) return villageToState[loc];

  // Map every single target city in India to its correct state context
  const apCities = ["visakhapatnam", "vijayawada", "guntur", "nellore", "kurnool", "kakinada", "rajahmundry", "kadapa", "tirupati", "anantapur", "vizianagaram", "eluru", "ongole", "nandyal", "machilipatnam", "adoni", "tenali", "chittoor", "hindupur", "proddatur", "bhimavaram", "madanapalle", "guntakal", "dharmavaram", "gudivada", "narasaraopet", "tadipatri", "mangalagiri", "chilakaluripet", "srikakulam", "rajam", "palasa", "bobbili", "tadepalligudem", "amalapuram", "bapatla", "narasapuram", "ponnur", "jangareddygudem", "palakol", "tanuku", "nidadavole", "pithapuram", "samalkot"];
  const arCities = ["itanagar", "naharlagun", "pasighat", "namsai", "bomdila", "ziro", "tezu", "along", "tawang", "roing", "khonsa", "seppa", "daporijo", "anini", "yingkiong"];
  const asCities = ["guwahati", "silchar", "dibrugarh", "jorhat", "nagaon", "tinsukia", "tezpur", "bongaigaon", "dhubri", "north-lakhimpur", "sivasagar", "goalpara", "barpeta", "karimganj", "hailakandi", "haflong", "diphu", "golaghat", "nalbari", "mangaldoi", "kokrajhar", "dhemaji", "morigaon", "sibsagar", "mariani"];
  const bhCities = ["patna", "gaya", "bhagalpur", "muzaffarpur", "purnia", "darbhanga", "bihar-sharif", "arrah", "begusarai", "katihar", "munger", "chhapra", "danapur", "bettiah", "saharsa", "sasaram", "hajipur", "dehri", "siwan", "motihari", "nawada", "bagaha", "buxar", "kishanganj", "sitamarhi", "jamalpur", "jehanabad", "aurangabad", "lakhisarai", "sheikhpura", "supaul", "araria", "gopalganj", "madhubani", "samastipur", "vaishali", "sheohar", "madhepura"];
  const cgCities = ["raipur", "bhilai", "bilaspur", "korba", "durg", "rajnandgaon", "jagdalpur", "raigarh", "ambikapur", "dhamtari", "chirmiri", "kanker", "kondagaon", "mahasamund", "bemetara", "gariaband", "baloda-bazar", "mungeli", "kabirdham", "balrampur", "narayanpur", "sukma", "bijapur", "dantewada", "jashpur"];
  const goaCities = ["panaji", "margao", "vasco-da-gama", "mapusa", "ponda", "bicholim", "curchorem", "sanquelim", "canacona", "pernem", "sanguem", "quepem"];
  const gujCities = ["ahmedabad", "surat", "vadodara", "rajkot", "bhavnagar", "jamnagar", "junagadh", "gandhinagar", "anand", "navsari", "morbi", "mehsana", "surendranagar", "bharuch", "porbandar", "gondal", "veraval", "botad", "amreli", "ankleshwar", "valsad", "dahod", "godhra", "palanpur", "gandhidham", "deesa", "idar", "nadiad", "khambhat", "unjha", "vapi", "mandvi", "dwarka", "somnath", "keshod", "dhoraji", "jetpur", "wankaner"];
  const harCities = ["faridabad", "gurugram", "rohtak", "hisar", "panipat", "ambala", "yamunanagar", "sonipat", "panchkula", "bhiwani", "sirsa", "bahadurgarh", "jind", "thanesar", "kaithal", "karnal", "rewari", "palwal", "narnaul", "mahendragarh", "fatehabad", "gohana", "tohana", "pinjore", "jhajjar", "nuh", "charkhi-dadri", "hansi", "ratia", "dabwali"];
  const hpCities = ["shimla", "dharamshala", "solan", "mandi", "palampur", "baddi", "nahan", "kullu", "hamirpur", "una", "chamba", "bilaspur", "sundarnagar", "manali", "parwanoo", "rohru", "rampur", "nurpur", "jogindernagar", "dalhousie"];
  const jhCities = ["ranchi", "jamshedpur", "dhanbad", "bokaro", "deoghar", "phusro", "hazaribagh", "giridih", "ramgarh", "medininagar", "chirkunda", "chaibasa", "daltonganj", "sahibganj", "adityapur", "chas", "jugsalai", "mihijam", "dumka", "jamtara", "pakur", "godda", "gumla", "simdega", "lohardaga", "khunti", "seraikela"];
  const karCities = ["bengaluru", "hubli", "dharwad", "mysuru", "kalaburagi", "mangaluru", "davanagere", "belagavi", "ballari", "vijayapura", "shivamogga", "tumakuru", "raichur", "bidar", "udupi", "hassan", "hospet", "gadag", "chitradurga", "mandya", "bagalkot", "chikkamagaluru", "robertsonpet", "bhadravati", "davangere", "ramanagara", "chikkaballapur", "kolar", "gangavati", "gokak", "yadgir", "koppal", "haveri", "chamarajanagar", "kodagu"];
  const klCities = ["thiruvananthapuram", "kochi", "kozhikode", "kollam", "thrissur", "alappuzha", "palakkad", "malappuram", "kannur", "kasaragod", "kottayam", "idukki", "pathanamthitta", "wayanad", "ernakulam", "manjeri", "kayamkulam", "thalassery", "vatakara", "ponnani", "tirur", "koyilandy", "payyannur", "perinthalmannna", "ottappalam", "shoranur", "chalakudy", "muvattupuzha", "kunnamkulam", "irinjalakuda", "kodungallur", "thodupuzha"];
  const mpCities = ["bhopal", "jabalpur", "gwalior", "ujjain", "sagar", "dewas", "satna", "ratlam", "rewa", "murwara", "singrauli", "burhanpur", "khandwa", "bhind", "chhindwara", "guna", "shivpuri", "vidisha", "chhatarpur", "damoh", "mandsaur", "khargone", "neemuch", "pithampur", "hoshangabad", "itarsi", "sehore", "betul", "seoni", "datia", "nagda", "balaghat", "mandla", "dindori", "tikamgarh", "panna", "anuppur", "umaria", "sidhi", "shahdol", "rajgarh", "agar-malwa", "alirajpur", "barwani", "ashoknagar", "katangi"];
  const mhCities = ["mumbai", "pune", "nagpur", "nashik", "aurangabad", "solapur", "amravati", "kolhapur", "nanded", "sangli", "malegaon", "jalgaon", "akola", "latur", "dhule", "ahmednagar", "chandrapur", "parbhani", "ichalkaranji", "jalna", "ambarnath", "bhiwandi", "panvel", "navi-mumbai", "thane", "kalyan", "ulhasnagar", "mira-bhayandar", "vasai-virar", "ratnagiri", "sindhudurg", "satara", "osmanabad", "beed", "hingoli", "buldhana", "washim", "yavatmal", "wardha", "gadchiroli", "gondia", "bhandara", "nandurbar", "shirdi"];
  const mnCities = ["imphal", "thoubal", "bishnupur", "churachandpur", "ukhrul", "senapati", "tamenglong", "chandel", "jiribam", "kakching"];
  const megCities = ["shillong", "tura", "nongpoh", "jowai", "baghmara", "resubelpara", "nongstoin", "mairang", "williamnagar"];
  const mizCities = ["aizawl", "lunglei", "saiha", "champhai", "serchhip", "kolasib", "lawngtlai", "mamit", "saitual"];
  const nagCities = ["kohima", "dimapur", "mokokchung", "tuensang", "wokha", "zunheboto", "phek", "mon", "kiphire", "longleng", "peren"];
  const odCities = ["bhubaneswar", "cuttack", "rourkela", "brahmapur", "sambalpur", "puri", "balasore", "bhadrak", "baripada", "jharsuguda", "bargarh", "paradip", "jeypore", "sundargarh", "phulbani", "keonjhar", "jagatsinghpur", "kendrapara", "jajpur", "dhenkanal", "titlagarh", "rayagada", "bolangir", "nabarangapur", "koraput", "malkangiri", "nuapada", "sonepur", "nayagarh", "gajapati", "kandhamal"];
  const pbCities = ["ludhiana", "amritsar", "jalandhar", "patiala", "bathinda", "mohali", "hoshiarpur", "batala", "pathankot", "moga", "abohar", "malerkotla", "khanna", "phagwara", "muktsar", "barnala", "rajpura", "firozpur", "kapurthala", "sangrur", "faridkot", "mansa", "tarn-taran", "rupnagar", "nawanshahr", "fatehgarh-sahib", "gurdaspur"];
  const rjCities = ["jaipur", "jodhpur", "kota", "bikaner", "ajmer", "bhilwara", "alwar", "bharatpur", "sikar", "pali", "sri-ganganagar", "tonk", "hanumangarh", "kishangarh", "baran", "dhaulpur", "banswara", "sirohi", "sawai-madhopur", "chittorgarh", "nagaur", "jhalawar", "barmer", "jalore", "jhunjhunu", "bundi", "rajsamand", "dausa", "karauli", "dholpur", "pratapgarh"];
  const skCities = ["gangtok", "namchi", "gyalshing", "mangan", "rangpo", "singtam", "jorethang"];
  const tnCities = ["chennai", "coimbatore", "madurai", "tiruchirappalli", "salem", "tirunelveli", "tiruppur", "vellore", "erode", "thoothukkudi", "dindigul", "thanjavur", "ranipet", "sivakasi", "karur", "udhagamandalam", "hosur", "nagercoil", "kanchipuram", "kumarapalayam", "karaikkudi", "neyveli", "cuddalore", "kumbakonam", "tiruvannamalai", "pollachi", "rajapalayam", "pudukkottai", "nagapattinam", "virudhunagar", "namakkal", "maraimalai-nagar", "tiruvottiyur", "villupuram", "ariyalur", "krishnagiri", "dharmapuri", "tiruvarur", "nilgiris", "tenkasi", "chengalpattu", "kallakurichi"];
  const tsCities = ["hyderabad", "warangal", "nizamabad", "khammam", "karimnagar", "ramagundam", "mahabubnagar", "nalgonda", "adilabad", "suryapet", "miryalaguda", "siddipet", "jagtial", "mancherial", "nirmal", "kamareddy", "sangareddy", "vikarabad", "wanaparthy", "nagarkurnool", "bhongir", "yadadri", "medchal", "gadwal", "jogulamba"];
  const trCities = ["agartala", "dharmanagar", "udaipur", "kailasahar", "belonia", "khowai", "bishramganj", "ambassa", "kumarghat", "sonamura"];
  const upCities = ["lucknow", "kanpur", "ghaziabad", "agra", "varanasi", "meerut", "allahabad", "bareilly", "aligarh", "moradabad", "saharanpur", "gorakhpur", "noida", "firozabad", "loni", "jhansi", "muzaffarnagar", "mathura", "rampur", "shahjahanpur", "farrukhabad", "mau", "hapur", "etawah", "mirzapur", "bulandshahr", "sambhal", "amroha", "hardoi", "fatehpur", "raebareli", "orai", "sitapur", "bahraich", "modinagar", "unnao", "jaunpur", "lakhimpur", "hathras", "banda", "pilibhit", "barabanki", "khurja", "gonda", "mainpuri", "lalitpur", "etah", "deoria", "sultanpur", "azamgarh", "bijnor", "auraiya", "basti", "ballia", "chandausi", "akpur", "faizabad", "ghazipur", "kannauj", "shikohabad", "tanda", "najibabad", "shahabad", "tilhar", "ujhani", "zamania", "chhibramau", "nagina", "shamli", "kasganj"];
  const utCities = ["dehradun", "haridwar", "roorkee", "haldwani", "rudrapur", "kashipur", "rishikesh", "kotdwar", "ramnagar", "pithoragarh", "almora", "nainital", "mussoorie", "bageshwar", "chamoli", "champawat", "pauri", "tehri", "uttarkashi", "rudraprayag"];
  const wbCities = ["kolkata", "asansol", "siliguri", "durgapur", "bardhaman", "malda", "baharampur", "habra", "kharagpur", "shantipur", "dankuni", "dhulian", "ranaghat", "haldia", "raiganj", "krishnanagar", "nabadwip", "medinipur", "jalpaiguri", "balurghat", "basirhat", "bankura", "chakdaha", "darjeeling", "alipurduar", "purulia", "murshidabad", "jangipur", "suri", "arambagh", "tamluk", "contai", "bishnupur", "cooch-behar", "kalimpong", "gangarampur"];
  const dlCities = ["new-delhi", "dwarka", "rohini", "janakpuri", "laxmi-nagar", "shahdara", "pitampura", "saket", "vasant-kunj", "narela", "bijwasan", "mehrauli", "najafgarh", "karol-bagh", "connaught-place", "chandni-chowk", "delhi"];
  const jkCities = ["srinagar", "jammu", "anantnag", "sopore", "baramulla", "kathua", "udhampur", "punch", "rajouri", "ganderbal", "pulwama", "shopian", "kulgam", "bandipora", "kupwara", "leh", "kargil"];
  const ldCities = ["diskit", "padum", "drass", "zanskar"];
  const chCities = ["manimajra", "dhanas", "burail", "mauli-jagran", "maloya", "chandigarh"];
  const pdCities = ["puducherry", "karaikal", "mahe", "yanam", "ozhukarai"];
  const anCities = ["port-blair", "diglipur", "rangat", "havelock", "car-nicobar", "campbell-bay"];
  const ddCities = ["silvassa", "daman", "diu", "naroli", "amli", "khanvel"];
  const lkCities = ["kavaratti", "agatti", "amini", "andrott", "minicoy", "kiltan"];

  if (apCities.includes(loc)) return 'Andhra Pradesh';
  if (arCities.includes(loc)) return 'Arunachal Pradesh';
  if (asCities.includes(loc)) return 'Assam';
  if (bhCities.includes(loc)) return 'Bihar';
  if (cgCities.includes(loc)) return 'Chhattisgarh';
  if (goaCities.includes(loc)) return 'Goa';
  if (gujCities.includes(loc)) return 'Gujarat';
  if (harCities.includes(loc)) return 'Haryana';
  if (hpCities.includes(loc)) return 'Himachal Pradesh';
  if (jhCities.includes(loc)) return 'Jharkhand';
  if (karCities.includes(loc)) return 'Karnataka';
  if (klCities.includes(loc)) return 'Kerala';
  if (mpCities.includes(loc)) return 'Madhya Pradesh';
  if (mhCities.includes(loc)) return 'Maharashtra';
  if (mnCities.includes(loc)) return 'Manipur';
  if (megCities.includes(loc)) return 'Meghalaya';
  if (mizCities.includes(loc)) return 'Mizoram';
  if (nagCities.includes(loc)) return 'Nagaland';
  if (odCities.includes(loc)) return 'Odisha';
  if (pbCities.includes(loc)) return 'Punjab';
  if (rjCities.includes(loc)) return 'Rajasthan';
  if (skCities.includes(loc)) return 'Sikkim';
  if (tnCities.includes(loc)) return 'Tamil Nadu';
  if (tsCities.includes(loc)) return 'Telangana';
  if (trCities.includes(loc)) return 'Tripura';
  if (upCities.includes(loc)) return 'Uttar Pradesh';
  if (utCities.includes(loc)) return 'Uttarakhand';
  if (wbCities.includes(loc)) return 'West Bengal';
  if (dlCities.includes(loc)) return 'Delhi';
  if (jkCities.includes(loc)) return 'Jammu and Kashmir';
  if (ldCities.includes(loc)) return 'Ladakh';
  if (chCities.includes(loc)) return 'Chandigarh';
  if (pdCities.includes(loc)) return 'Puducherry';
  if (anCities.includes(loc)) return 'Andaman and Nicobar Islands';
  if (ddCities.includes(loc)) return 'Dadra and Nagar Haveli and Daman and Diu';
  if (lkCities.includes(loc)) return 'Lakshadweep';

  return 'India';
}

// 2. High-Performance Deterministic PRNG Seeder (Consistency & Infinite Multi-Layer Variations)
export function seededChoice<T>(pool: T[], seedStr: string, stepIndex: number): T {
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = (hash << 5) - hash + seedStr.charCodeAt(i);
    hash |= 0;
  }
  const x = Math.sin(hash + stepIndex * 153.27) * 9876.54;
  const index = Math.floor((x - Math.floor(x)) * pool.length);
  return pool[index];
}

export function shuffleSeedWise<T>(array: T[], seedStr: string, stepIndex: number): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    let hash = 0;
    for (let k = 0; k < seedStr.length; k++) {
      hash = (hash << 5) - hash + seedStr.charCodeAt(k);
      hash |= 0;
    }
    const x = Math.sin(hash + stepIndex * i + 84.14) * 5432.12;
    const j = Math.floor((x - Math.floor(x)) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getNearbyLocations(currentLoc: string, stateName: string): string[] {
  const currentClean = currentLoc.toLowerCase().trim().replace(/_/g, '-').replace(/\s+/g, '-');
  const matches: string[] = [];
  for (const city of CITIES) {
    const citySlug = city.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-');
    if (citySlug !== currentClean && getStateOfLocation(citySlug) === stateName) {
      matches.push(city.replace(/_/g, ' '));
      if (matches.length >= 3) break;
    }
  }
  if (matches.length < 3) {
    for (const v of VILLAGES) {
      const vSlug = v.toLowerCase().replace(/_/g, '-');
      if (vSlug !== currentClean && getStateOfLocation(vSlug) === stateName) {
        matches.push(v.replace(/_/g, ' ') + " Village");
        if (matches.length >= 3) break;
      }
    }
  }
  while (matches.length < 3) {
    matches.push("adjacent agricultural villages");
    matches.push("neighboring production hubs");
    matches.push("surrounding farm sectors");
  }
  return matches.slice(0, 3);
}

// 3. Complete Regional Language, Crops, Consumption, and Wholesale Markets database for absolute anti-similarity
export interface StateRegionalInfo {
  language: string;
  isHindi: boolean;
  terms: string[];
  phrases: string[];
  cropResiduе: string;
  agroSpecs: string;
  localWholesaleHub: string;
  foodTrend: string;
}

const REGIONAL_CONTEXTS: Record<string, StateRegionalInfo> = {
  'Madhya Pradesh': {
    language: 'Hindi',
    isHindi: true,
    terms: ['मशरूम उत्पादन तकनीक', 'एमपी कल्टीवेशन हब', 'खाद्य मशरूम की खेती'],
    phrases: ['मध्य प्रदेश के सोयाबीन और गेहूं फसल अवशेषों का उत्तम रीसाइक्लिंग उपयोग', 'भोपाल एवं इंदौर की सबसे बड़ी फल-सब्जी थोक मंडियों की बढ़ती मांग', 'नाबार्ड और राष्ट्रीय बागवानी बोर्ड से सब्सिडी अनुदान योजनाएं'],
    cropResiduе: 'soybean husk and clean wheat straw residue',
    agroSpecs: 'moderate dry central thermal profiles with seasonal monsoonic humidity shifts',
    localWholesaleHub: 'Indore Karond APMC Mandi and Bhopal central transit yards',
    foodTrend: 'increasing organic high-protein superfood adaptation in central Indian cuisines'
  },
  'Uttar Pradesh': {
    language: 'Hindi',
    isHindi: true,
    terms: ['यूपी मशरूम ट्रेनिंग', 'बटन व ओईस्टर मशरूम बिज़नेस', 'ताजा मशरूम बीज स्पॉन'],
    phrases: ['उत्तर प्रदेश के तराई क्षेत्रों और मैदानी गांवों में गेहूं के भूसे की भरपूर उपलब्धता', 'वाराणसी, कानपुर, लखनऊ व नोएडा गाज़ियाबाद जैसे बड़े शहरों के रेस्टोरेंट तथा मैरिज हॉल की भारी खपत', 'यूपी कृषि विभाग द्वारा दी जा रही 40 प्रतिशत तक की विशेष अनुदान सहायता योजनाएं'],
    cropResiduе: 'premium gehun ka bhoosa (wheat straw) and dry sugarcane bagasse',
    agroSpecs: 'broad sub-tropical agricultural plains with hot summers and humid winters',
    localWholesaleHub: 'Lucknow Naveen Galla APMC Mandi and Kanpur vegetable transit complexes',
    foodTrend: 'bulk catering for traditional events, premium hotels, and organic dietary habits'
  },
  'Bihar': {
    language: 'Hindi',
    isHindi: true,
    terms: ['बिहार मशरूम कल्टीवेशन', 'बिहारी एग्रो फार्म स्कीम', 'ढींगरी मशरूम उत्पादन व ट्रेनिंग'],
    phrases: ['बिहार में धान के पुआल का अत्यधिक मात्रा में कृषि वेस्ट मैनेजमेंट उपयोग', 'पटना, मुज़फ़्फ़रपुर व गया के फुटकर सब्जी मंडियों और मेगा सुपरस्टोर्स की निरंतर मांग', 'महिला स्वयं सहायता समूहों के लिए जीविका मिशन के अंतर्गत मुफ्त मशरूम प्रशिक्षण'],
    cropResiduе: 'boiled paddy and rice straw bundles',
    agroSpecs: 'alluvial flood plains offering excellent moist ventilation and cool temperature pockets',
    localWholesaleHub: 'Patna Bazar Samiti APMC and Muzaffarpur wholesale yards',
    foodTrend: 'high local preference for affordable fresh oyster mushroom curries and dehydrated powder health mixes'
  },
  'Rajasthan': {
    language: 'Hindi',
    isHindi: true,
    terms: ['राजस्थान मशरूम फार्मिंग स्कोप', 'रेगिस्तानी क्लाइमेट कल्टीवेशन', 'मशरुम शेड टेम्परेचर控制'],
    phrases: ['राजस्थान के शुष्क वातावरण में तापमान को डिजिटल फागर्स और कूलर द्वारा नियंत्रित करना', 'जयपुर मुहाना मंडी, जोधपुर और उदयपुर जैसे प्रमुख पर्यटन शहरों में मशरूम की होटल मांग', 'कम पानी और ऊर्ध्वाधर रैक प्रणाली की मदद से बंजर भूमि में भी असीमित कमाई'],
    cropResiduе: 'mustard husks and pearl millet straw options',
    agroSpecs: 'arid desert hot thermal envelopes requiring specialized indoor thermal insulation',
    localWholesaleHub: 'Jaipur Muhana APMC Mandi and Jodhpur wholesale grain exchanges',
    foodTrend: 'luxurious culinary hotels catering to international travelers and local premium venues'
  },
  'Chhattisgarh': {
    language: 'Hindi',
    isHindi: true,
    terms: ['छत्तीसगढ़ मशरूम कल्टीवेशन सेंटर', 'धान का कटोरा कृषि बिज़नेस', 'मिल्की व बटन मशरूम'],
    phrases: ['छत्तीसगढ़ में धान के प्रचुर फसल अवशेषों का मूल्यवान मशरूम खाद में रूपांतरण', 'रायपुर, बिलासपुर तथा दुर्ग-भिलाई के बढ़ते शहरी सुपरमार्केट्स की ताज़ा मशरूम मांग', 'महिला सशक्तिकरण परिषदों के सहयोग से ग्रामीण क्षेत्रों में कुटीर उद्योग की शानदार शुरुआत'],
    cropResiduе: 'rich paddy straw waste and local forestry biological litters',
    agroSpecs: 'sub-humid central plateau climate with humid rainfall segments supporting easy spawn run',
    localWholesaleHub: 'Raipur Shastri APMC Market and Bilaspur wholesale vegetable platforms',
    foodTrend: 'locally grown organic food movements, high demand for dried oyster powder'
  },
  'Haryana': {
    language: 'Hindi',
    isHindi: true,
    terms: ['हरियाणा मशरूम कल्टीवेशन ट्रेनिंग', 'सोनीपत बटन मशरूम हब', 'मिल्की कल्टीवेशन गाइड'],
    phrases: ['राष्ट्रीय स्तर पर दिल्ली एनसीआर की निकटता का सीधा भौगोलिक फ़ायदा', 'सोनीपत और रोहतक के उन्नत एग्रो-फार्मों द्वारा स्थापित शीतकालीन बटन मशरूम की बड़ी कड़ियां', 'हरियाणा बागवानी विभाग द्वारा एग्रो-इन्फ्रास्ट्रक्चर के लिए दी जाने वाली आसान बैंक गारंटी सब्सिडी'],
    cropResiduе: 'mechanized wheat straw and composted paddy biomass',
    agroSpecs: 'semi-arid high-yield industrial agricultural terrain with extreme seasonal variations',
    localWholesaleHub: 'Gurugram subji APMC mandi and Sonipat dynamic central trade posts',
    foodTrend: 'massive daily transit of fresh button packets directly to Delhi-NCR food courts and hotels'
  },
  'Punjab': {
    language: 'Punjabi/English',
    isHindi: false,
    terms: ['Punjab Mushroom Kheti', 'ਪੰਜਾਬ ਮਸ਼ਰੂਮ ਕਾਸ਼ਤ (Mushroom Cultivation)', 'PAU Certified Spawn Seed Supply'],
    phrases: ['ਪੰਜਾਬ ਦੇ ਖੇਤਾਂ ਵਿੱਚ ਪਰਾਲੀ ਫਸਲ ਰਹਿੰਦ-ਖੂੰਹਦ ਦਾ ਪ੍ਰਦੂਸ਼ਣ-ਮੁਕਤ ਉਪਯੋਗ', 'PAU Ludhiana dynamic research guides combined with premium commercial automation', 'Ludhiana, Amritsar, and Mohali wholesale mandis offering top bulk rate realizations'],
    cropResiduе: 'sterilized wheat straw and highly pasteurized paddy stubble compost',
    agroSpecs: 'fertile irrigated agricultural belt with excellent winter cold optimal for natural button cropping',
    localWholesaleHub: 'Ludhiana main vegetable APMC mandi and Amritsar bulk trade centers',
    foodTrend: 'modern culinary integrations, high volume processing, and frozen packaging channels'
  },
  'Gujarat': {
    language: 'Gujarati/English',
    isHindi: false,
    terms: ['Gujarat Mushroom Farming', 'મશરૂમની વૈજ્ઞાનિક ખેતી', 'Organic Mushroom Price per Kg Gujarat'],
    phrases: ['ગુજરાતના પ્રગતિશીલ ખેડૂતો માટે ઓછી જમીનમાં મલ્ટી-ટાયર વર્ટિકલ ફાર્મિંગ પદ્ધતિ', 'Ahmedabad, Surat, and Vadodara modern catering segments generating continuous bulk contracts', 'નવીન કૃષિ સાહસિક યોજનાઓ હેઠળ તાપમાન નિયંત્રિત કોલ્ડ રૂમ सેટઅપ માટે લોન સહાય'],
    cropResiduе: 'cotton seed hulls, peanut shells and dried sugarcane bagasse',
    agroSpecs: 'semi-arid coastal boundaries requiring double-wall thermal insulation grow rooms',
    localWholesaleHub: 'Ahmedabad APMC Market and Surat bulk organic food courts',
    foodTrend: '100% vegetarian culinary innovations, high-nutrition dietary supplements, and salads'
  },
  'Maharashtra': {
    language: 'Marathi/English',
    isHindi: false,
    terms: ['Maharashtra Mushroom Sheti', 'मशरूम लागवड आणि प्रशिक्षण मुंबई', 'Premium F1 Spawn Delivery Pune'],
    phrases: ['महाराष्ट्रातील वाढत्या बाजारपेठेमध्ये बटन आणि ऑयस्टर मशरूमची बारमाही विक्री संधी', 'Pune, Mumbai and Nagpur corporate food delivery networks demanding reliable cold chain supply', 'कृषी औद्योगिक कॉर्पोरेशन अंतर्गत शीतगृह संगोपन प्रकल्पांसाठी कर्ज पुरवठा'],
    cropResiduе: 'dry soybean stalks, sugarcane bagasse, and cotton stalk fiber',
    agroSpecs: 'tropical Deccan plateau region with moderate temperatures and heavy western monsoon moisture',
    localWholesaleHub: 'Vashi Navi Mumbai APMC and Pune Gultekdi wholesale market complexes',
    foodTrend: 'high-end restaurant cuisines, urban organic diet clinics, and dehydrated medicinal powder export lines'
  },
  'Goa': {
    language: 'Konkani/English',
    isHindi: false,
    terms: ['Goa Mushroom Cultivation', 'Konkani Mushroom Food Industry', 'Fresh Button Mushroom Supplier Margao'],
    phrases: ['Goa beach resort restaurant demand driving massive daily imports of fresh mushrooms', 'Utilising local coconut husks, coir pith, and cashew processing dry residues for organic growth', 'Tourism-driven organic agro-tourism cottage business plans in North and South Goa districts'],
    cropResiduе: 'coconut coir pith, paddy dry straw and wild seasonal foliage',
    agroSpecs: 'coastal warm-humid tropical margins requiring automated climate-control grow boxes',
    localWholesaleHub: 'Panaji municipal APMC market stalls and Margao subji transit yards',
    foodTrend: 'high-end continental, Italian, and Goan seafood-mushroom fusion cuisines'
  },
  'Karnataka': {
    language: 'Kannada/English',
    isHindi: false,
    terms: ['Karnataka Mushroom Besaya', 'ಅಣಬೆ ಬೇಸಾಯ ತರಬೇತಿ ಬೆಂಗಳೂರು', 'Button Mushroom Price Bengaluru Mandi'],
    phrases: ['ಬೆಂಗಳೂರು ಮತ್ತು ಮೈಸೂರಿನ ಕಾಸ್ಮೋಪಾಲಿಟನ್ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಜೈವಿಕ ಅಣಬೆಗಳಿಗೆ ಸತತ ಏರಿಕೆ ದರ', 'Sourcing local premium compost materials like sugarcane trash, paddy straw and coffee husk waste', 'ರಾಜ್ಯ ತೋಟಗಾರಿಕೆ ಇಲಾಖೆ ವತಿಯಿಂದ ಸಿಗುವ ಅಣಬೆ ಕೃಷಿ ಉತ್ತೇಜನ ಯೋಜನೆಗಳು'],
    cropResiduе: 'coffee husk residues, coconut coir fiber and pure sugarcane dry trash',
    agroSpecs: 'sub-humid tropical central uplands featuring optimal high elevation cooling corridors',
    localWholesaleHub: 'Yeshwanthpur Bengaluru APMC and Mysore wholesale vegetable centers',
    foodTrend: 'ultra-modern health cafes, weight-management diet plans, and high food-delivery app orders'
  },
  'Kerala': {
    language: 'Malayalam/English',
    isHindi: false,
    terms: ['Kerala Koon Krishi', 'കൂൺ കൃഷി കോഴ്സ് കേരളം', 'Oyster Mushroom Spawn Dealer Ernakulam'],
    phrases: ['കേരളത്തിലെ വീട്ടുപരിസരങ്ങളിൽ കുറഞ്ഞ ചിലവിൽ പരീക്ഷിച്ച് വിജയിക്കാവുന്ന കൂൺ കൃഷി പാഠങ്ങൾ', 'Extreme tourist hotel segments in Kochi, Munnar, and Kovalam requiring direct farm delivery daily', 'State horticulture missions providing solid support to women-led local micro agrarian units'],
    cropResiduе: 'paddy straw mixed with organic sawdust, wood shavings and coconut waste',
    agroSpecs: 'highly wet-humid tropical maritime climate ideal for natural warm oyster varieties',
    localWholesaleHub: 'Ernakulam APMC Market Road and Thiruvananthapuram local wholesale centers',
    foodTrend: 'traditional healthy vegetarian culinary items, high adaptation of anti-inflammatory superfoods'
  },
  'Tamil Nadu': {
    language: 'Tamil/English',
    isHindi: false,
    terms: ['Tamil Nadu Kaalan Valarppu', 'காளான் வளர்ப்பு பயிற்சி சென்னை', 'Pure F1 Mushroom Seeds Coimbatore'],
    phrases: ['காளான் வளர்ப்பு தொழில்நுட்பம்', 'Chennai, Coimbatore and Madurai urban organic vegetable markets creating daily demand contracts', 'Horticulture grants for constructing advanced grow rooms inside rural agricultural districts'],
    cropResiduе: 'sterilized paddy straw, sugar industry bagasse and dry coconut leaves',
    agroSpecs: 'semi-arid to humid tropical climate with warm drafts requiring active cooling pads',
    localWholesaleHub: 'Chennai Koyambedu APMC and Coimbatore MGR wholesale market platforms',
    foodTrend: 'authentic South Indian kaalan street foods, multi-tier corporate buffet supplies'
  },
  'Telangana': {
    language: 'Telugu/English',
    isHindi: false,
    terms: ['Telangana Mushroom Kheti', 'పుట్టగొడుగుల పెంపకం హైదరాబాద్', 'Hyderabad Wholesale Mushroom Mandi Rate'],
    phrases: ['తెలంగాణలోని పట్టణ మరియు గ్రామీణ స్వయం ఉపాధి కోర్సులు', 'Hyderabad technology hubs demanding premium chemical-free white organic mushrooms daily', 'State horticultural assistance programs helping small farms build cost-effective bamboo grow rooms'],
    cropResiduе: 'paddy straw, groundnut shells, and bagasse fibers',
    agroSpecs: 'semi-arid hot dry tropical plateau requiring micro-misting and humidity controls',
    localWholesaleHub: 'Bowenpally Hyderabad APMC and Warangal district trade junctions',
    foodTrend: 'gourmet cooking, modern dining restaurants, and health-conscious food subscription kits'
  },
  'West Bengal': {
    language: 'Bengali/English',
    isHindi: false,
    terms: ['West Bengal Mushroom Chash', 'মাশরুম চাষ প্রশিক্ষণ কোলকাতা', 'Oyster spawn seed delivery West Bengal'],
    phrases: ['পশ্চিমবঙ্গে খড় বা ধানের বিচালি ব্যবহার করে স্বল্প খরচে বৈজ্ঞানিক মাশরুম চাষ পদ্ধতি', 'Kolkata, Durgapur, and Siliguri fast food and catering networks sourcing organic button packs', 'Direct training workshops supported by local block level Krishi Sahayak departments'],
    cropResiduе: 'fertile paddy straw (dhaner bishali) and sugarcane dry residue particles',
    agroSpecs: 'tropical wet-humid gangetic plains perfectly accommodating fast natural spawn runs',
    localWholesaleHub: 'Kolkata Sealdah Koley APMC Market and Siliguri wholesale yard complexes',
    foodTrend: 'extensive domestic cooking, street-food snack stalls, and healthy protein-fortified diets'
  },
  'Odisha': {
    language: 'Odia/English',
    isHindi: false,
    terms: ['Odisha Chatu Chasa', 'ଛତୁ ଚାଷ ପ୍ରଶିକ୍ଷଣ ଭୁବନେଶ୍ୱର', 'Subsidized spawn seeds Odisha mandis'],
    phrases: ['ଓଡିଶାରେ ସ୍ୱଳ୍ପ ମୂଲଦନରେ ଆରମ୍ଭ କରନ୍ତୁ ଲାଭଦାୟକ ପାଳ ଛତୁ ଚାଷ', 'Bhubaneswar, Cuttack, and Rourkela wholesale vegetable hubs requiring fresh early morning harvests', 'Direct support and grants under State Agriculture Policy (Pragati) for modern farming models'],
    cropResiduе: 'boiled paddy straw, wheat straw and dry coco-chips',
    agroSpecs: 'coastal humid plains under summer heat cycles favoring milky and straw varieties',
    localWholesaleHub: 'Ainthapali Sambalpur APMC and Bhubaneswar Unit-I wholesale bazaar',
    foodTrend: 'daily household curries, traditional festive preparations, and dry conservation exports'
  },
  'Delhi': {
    language: 'Hindi',
    isHindi: true,
    terms: ['दिल्ली मशरूम बिज़नेस', 'दिल्ली सब्जी मंडी रेट', 'मशरूम स्पॉन सप्लायर दिल्ली'],
    phrases: ['आज़ादपुर फल और सब्जी मंडी में मशरूम की बेजोड़ थोक बिक्री', 'दिल्ली-एनसीआर के आधुनिक सुपरस्टोर्स और होटल चेन्स में ताज़े बटन मशरूम की भारी मांग', 'इनडोर वर्टिकल रैक शेल्फ कल्टीवेशन की मदद से कम भूमि में भी अत्यधिक जैविक पैदावार'],
    cropResiduе: 'premium grain straws, sterile organic coco-coir blocks',
    agroSpecs: 'extreme sub-tropical semi-arid conditions requiring highly controlled indoor HVAC grids',
    localWholesaleHub: 'Delhi Azadpur APMC Mandi and Ghazipur trade storage facilities',
    foodTrend: 'premium continental cuisines, high-income health enthusiast groups, and rapid home delivery orders'
  },
  'Uttarakhand': {
    language: 'Hindi',
    isHindi: true,
    terms: ['उत्तराखंड गुच्छी मशरूम स्कोप', 'देहरादून बटन मशरूम फार्म', 'पहाड़ी क्लाइमेट कल्टीवेशन गाइड'],
    phrases: ['उत्तराखंड के पहाड़ी और ठंडे जलवायु में कम बिजली खर्च में बटन मशरूम का सर्वश्रेष्ठ प्राकृतिक उत्पादन', 'ऋषिकेश, हरिद्वार व देहरादून के धार्मिक तथा वेलनेस आश्रमों में शाकाहारी जैविक प्रोटीन की निरंतर मांग', 'जंगली गुच्छी मशरूम के संकलन और प्रसंस्करण के पहाड़ी क्लस्टर्स में बड़े आर्थिक अवसर'],
    cropResiduе: 'mountain forest organic litter and localized wheat straws',
    agroSpecs: 'temperate mountain valley climates perfect for low-cost year-round natural button cropping',
    localWholesaleHub: 'Dehradun Niranjanpur APMC Mandi and Haldwani localized transport corridors',
    foodTrend: 'high-altitude organic wellness diets, medicinal mushroom extracts, and premium luxury retreats'
  },
  'Jammu and Kashmir': {
    language: 'English/Urdu',
    isHindi: false,
    terms: ['Kashmir Gucchi Mushroom', 'Commercial Button farming Srinagar', 'Premium cold weather spawn J&K'],
    phrases: ['Himalayan cool valleys providing unmatched natural temperate climates for year-round white button cultivation', 'High-value wild Gucchi collection and export linking to national high-premium networks', 'Government support through regional Kashmir and Jammu division agricultural development directorates'],
    cropResiduе: 'temperate forest understory mulch and domestic barley straw',
    agroSpecs: 'sub-temperate mountain environment with cool crisp air supporting high quality pinning processes',
    localWholesaleHub: 'Srinagar Narwal APMC Mandi and Jammu transit commercial exchanges',
    foodTrend: 'high-prestige traditional Kashmiri wazwan dishes, luxury tea dry mixes, and medicinal health extracts'
  }
};

export const DEFAULT_REGIONAL_CONTEXT: StateRegionalInfo = {
  language: 'English',
  isHindi: false,
  terms: ['Mushroom Farming India', 'Commercial Agro Business Plan', 'Certified Mushroom Spawn Seed'],
  phrases: ['Nurturing high-income agricultural assets using modern bio-composting techniques', 'Connecting local rural villages with central urban vegetable mandis of India', 'Horticulture board credit-linked loan and subsidy infrastructure policies'],
  cropResiduе: 'agriculture residue, sterilized wheat straw and clean paddy straws',
  agroSpecs: 'seasonal climate variations with tropical monsoons, requiring standard indoor humidity control',
  localWholesaleHub: 'regional state APMC markets and metropolitan vegetable mandis',
  foodTrend: 'growing shift toward healthy vegan protein-rich organic ingredients and lifestyle diets'
};

export function getRegionalContextForState(state: string): StateRegionalInfo {
  const existing = REGIONAL_CONTEXTS[state];
  if (existing) return existing;

  const isSouthOrEast = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana", "West Bengal", "Odisha", "Assam"].includes(state);
  const isHindi = !isSouthOrEast && !["Punjab", "Goa", "Jammu and Kashmir", "Ladakh", "Tripura", "Nagaland", "Manipur", "Meghalaya", "Mizoram", "Arunachal Pradesh"].includes(state);

  let language = "English";
  let terms = ["Mushroom Cultivation", "Commercial Spawn Business", "Indoor Farm Setup"];
  if (isHindi) {
    language = "Hindi";
    terms = ["मशरूम उत्पादन तकनीक", "कल्टीवेशन बिज़नेस", "ताजा मशरूम बीज स्पॉन"];
  } else if (state === "Tamil Nadu") {
    language = "Tamil";
    terms = ["Kaalan Valarppu", "Mushroom Training Center", "F1 Spawn Seeds"];
  } else if (state === "Karnataka") {
    language = "Kannada";
    terms = ["Mushroom Besaya", "Mushroom Spawn Price", "Oyster Mushroom Class"];
  } else if (state === "Kerala") {
    language = "Malayalam";
    terms = ["Koon Krishi", "Oyster Mushroom Spawn", "Mushroom Training"];
  } else if (state === "West Bengal") {
    language = "Bengali";
    terms = ["Mushroom Chash", "Oyster spawn seeds", "Mushroom Training Bengal"];
  } else if (state === "Punjab") {
    language = "Punjabi";
    terms = ["Mushroom Kheti", "Mushroom Spawn Seeds", "PAU Approved Cultivation"];
  }

  const cropResiduе = isSouthOrEast ? "sterilized paddy straw and boiled rice husk residues" : "dry wheat straw (bhoosa) and sugarcane dry residue";
  const agroSpecs = isSouthOrEast ? "humid tropical climates with high seasonal maritime air currents" : "sub-tropical monsoon cycles requiring active cooling mist grids";
  const localWholesaleHub = `${state} central APMC grain and fresh vegetable market terminal`;
  const foodTrend = `fast-paced transformation toward healthy high-protein dietary choices and organic vegan menus`;

  return {
    language,
    isHindi,
    terms,
    phrases: [
      `Sourcing high-quality raw materials is very easy due to extensive regional farming crops.`,
      `Getting direct grants and horticulture department subsidies of up to 40% under state agricultural policies.`,
      `Farming indoors guarantees steady year-round income regardless of outdoor weather cycles.`
    ],
    cropResiduе,
    agroSpecs,
    localWholesaleHub,
    foodTrend
  };
}

// 4. Generate Highly Localized, Region-Aware, E-E-A-T rich Article Content
export function generateLocationSEOArticle(locationName: string, pageType: string, keywordInfo?: SEOKeyword): SEOManualContent {
  const state = getStateOfLocation(locationName);
  const reg = getRegionalContextForState(state);
  
  // Format location name beautifully
  const formattedLoc = locationName
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const kwText = keywordInfo ? keywordInfo.keyword : "mushroom farming";
  const kwTitle = kwText.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Unique key derived from location and keyword to seed the generator
  const seedKey = `${locationName.toLowerCase()}_${kwText.toLowerCase()}`;
  const nearbyList = getNearbyLocations(locationName, state);

  // ========================================================
  // 📍 1. META TITLE COMBINATORIAL MATRIX (0% SIMILARITY)
  // ========================================================
  const titlePart1 = [
    `Start ${kwTitle} in ${formattedLoc}`,
    `Profitable ${kwTitle} inside ${formattedLoc}`,
    `How to Start ${kwTitle} - ${formattedLoc}`,
    `Certified ${kwTitle} in ${formattedLoc}`,
    `${kwTitle} ${formattedLoc} Setup & Cost`
  ];
  const titlePart2 = [
    ` | Spawn Price, Course & Training ${state}`,
    ` | Buy Certified F1 Seeds & Buyback in ${state}`,
    ` | Govt Subsidy, Price & Training Guide`,
    ` | Commercial Indoor Setup & Mandi Rates`,
    ` | 100% Organic F1 Spawn & Business Course`
  ];
  const pageTitle = `${seededChoice(titlePart1, seedKey, 111)}${seededChoice(titlePart2, seedKey, 222)}`;

  // ========================================================
  // 📍 2. META DESCRIPTION COMBINATORIAL MATRIX (0% SIMILARITY)
  // ========================================================
  const descPart1 = [
    `Launch high-yielding, profitable commercial ${kwText} in ${formattedLoc}, ${state}.`,
    `Looking to master organic ${kwText} in ${formattedLoc}?`,
    `Start your modern protected agrarian business in ${formattedLoc} (${state}).`,
    `Get complete, step-by-step guidance for professional ${kwText} around ${formattedLoc}.`
  ];
  const descPart2 = [
    ` Get certified practical training, first-generation (F1) mother spawn seed deliveries, and direct buyback contact sheets.`,
    ` We provide lab-tested sterile mushroom spawn, climate-controlled warehouse maps, and direct trade links at ${reg.localWholesaleHub}.`,
    ` Utilize cheap regional ${reg.cropResiduе} to achieve up to 50% profit margins with NABARD bank loans and government subsidies.`,
    ` Learn vertical indoor rack farming under expert guides with native ${reg.language} consulting and daily mandi rates.`
  ];
  const descPart3 = [
    ` Call +91-9203544140 today!`,
    ` Book a free consultation!`,
    ` Settle your agribusiness future now!`,
    ` Start your pilot room setup within ₹10,000!`
  ];
  const pageMetaDesc = `${seededChoice(descPart1, seedKey, 333)}${seededChoice(descPart2, seedKey, 444)}${seededChoice(descPart3, seedKey, 555)}`;

  // ========================================================
  // 📍 3. H1 COMBINATORIAL MATRIX (0% SIMILARITY)
  // ========================================================
  const h1Templates = [
    `Commercial ${kwTitle} & Indoor Setup in ${formattedLoc}`,
    `Certified ${kwTitle} Training, F1 Spawn & Buyback in ${formattedLoc}`,
    `Profitable ${kwTitle} Solutions & Farm Business in ${formattedLoc}`,
    `Start Advanced Indoor ${kwTitle} - ${formattedLoc} (${state})`,
    `Step-by-Step ${kwTitle} Course & Agribusiness in ${formattedLoc}`
  ];
  const pageH1 = seededChoice(h1Templates, seedKey, 666);

  // ========================================================
  // 📍 4. H2 & H3 COMBINATORIAL MATRIX (0% SIMILARITY)
  // ========================================================
  const h2Topic1 = [
    `I. Strategic Potential of ${kwTitle} inside ${formattedLoc}`,
    `I. Commercial Scope and Agribusiness Feasibility in ${formattedLoc}`,
    `I. Why ${kwTitle} is Highly Profitable in ${formattedLoc} Today`
  ];
  const h2Topic2 = [
    `II. Climate Controls & Temperature Profiles for ${formattedLoc}`,
    `II. Grow Room Climate Blueprint and Environmental Controls in ${formattedLoc}`,
    `II. Balancing Heat, Air Flow, and Humidity in ${formattedLoc} Facilities`
  ];
  const h2Topic3 = [
    `III. Sourcing Lab-Grade F1 Spawn Seeds & Regional Substrates`,
    `III. Sourcing High-Yield Mushroom Seeds and Straw in ${state}`,
    `III. Pure Mother Spawn and Biological Crop Inoculation Requirements`
  ];
  const h2Topic4 = [
    `IV. Local Agriculture Ecosystem & Institutional Support near ${formattedLoc}`,
    `IV. Regional Farming Communities and Krishi Vigyan Kendra Support`,
    `IV. Connecting with Progressive Growers and Agricultural Extension Officers`
  ];
  const h2Topic5 = [
    `V. Market Demands, Mandi Wholesale Rates & Financial Subsidies`,
    `V. Sells Outlets, Today's Wholesale Price and NABARD Funding Channels`,
    `V. Government Grants, Project Report Layouts and Buyback Options`
  ];

  const pageH2s = [
    seededChoice(h2Topic1, seedKey, 11),
    seededChoice(h2Topic2, seedKey, 22),
    seededChoice(h2Topic3, seedKey, 33),
    seededChoice(h2Topic4, seedKey, 44),
    seededChoice(h2Topic5, seedKey, 55)
  ];

  const h3Topic1 = [
    `Choosing the Perfect Substrate: Sourcing local ${reg.cropResiduе}`,
    `Maximizing Yield Efficiencies: Water Misting & Carbon Dioxide Flush Rules`,
    `Edible Mushroom Varieties: Button vs Oyster vs Milky under ${formattedLoc} Seasonal Ranges`,
    `Obtaining verified Krishi Vigyan Kendra certificates in ${state}`,
    `Combating Contaminants: How to identify and avoid green mold and wild spores`,
    `Packaging and cooling: Sending early morning harvests to local markets`,
    `Understanding compound growth margins: 1000 bags profit estimation sheets`
  ];
  const pageH3s = shuffleSeedWise(h3Topic1, seedKey, 5).slice(0, 4);

  // ========================================================
  // 📍 5. DYNAMIC SENTENCE COMBINATORIAL ENGINE (0% SIMILARITY)
  // ========================================================

  // Paragraph 1: Intro
  const p1S1 = [
    `The progressive agricultural framework of <strong>${formattedLoc}</strong>, nestled within ${state}, is experiencing an impressive, high-growth shift toward advanced protected cultivation practices.`,
    `Agrarian innovators based around the <strong>${formattedLoc}</strong> sector are actively redesigning traditional crop cycles by focusing on vertical indoor superfoods.`,
    `In the bustling vegetable markets of <strong>${formattedLoc}</strong>, the rising demand for premium, organically grown fresh products has unlocked an incredible niche for local cultivators.`,
    `Farming communities across <strong>${formattedLoc}</strong> are rapidly adopting space-optimized, climate-independent cropping methods to maximize land productivity.`
  ];
  const p1S2 = [
    ` Introducing indoor <strong>${kwText} in ${formattedLoc}</strong> represents a strategic breakthrough for families and entrepreneurs seeking a stable, continuous revenue stream.`,
    ` Embarking on a certified <strong>${kwText} project inside ${formattedLoc}</strong> offers an unparalleled opportunity to transform empty rooms and warehouses into cash-yielding assets.`,
    ` By utilizing high-yield biological techniques, <strong>${kwText} around ${formattedLoc}</strong> has emerged as the single highest-paying agribusiness per square foot.`,
    ` Establishing a modern, bio-secured <strong>${kwText} farm in ${formattedLoc}</strong> enables growers to capture the booming local demand with absolute minimal water consumption.`
  ];
  const p1S3 = [
    ` Local growers often consult in ${reg.language} regarding the specialized terminology of <em>"${reg.terms[0]}"</em> and regional setup norms.`,
    ` Our standard technical advisory provides complete guides translated into ${reg.language} explaining key concepts like <em>"${reg.terms[1]}"</em> and pathogen control.`,
    ` To support regional farmers, we offer complete classroom instruction focusing on the scientific parameters of <em>"${reg.terms[2]}"</em> in local ${reg.language} dialects.`,
    ` For absolute clarity, our local experts communicate directly in the native ${reg.language} tongue to detail the exact practices of <em>"${reg.terms[0]}"</em>.`
  ];
  const paragraph1 = `${seededChoice(p1S1, seedKey, 1100)}${seededChoice(p1S2, seedKey, 1200)}${seededChoice(p1S3, seedKey, 1300)}`;

  // Paragraph 2: Climate & Insulation
  const p2S1 = [
    `An in-depth meteorological assessment reveals that <strong>${formattedLoc}</strong> is characterized by ${reg.agroSpecs}.`,
    `Cultivators must carefully adapt their cropping schedules to synchronize with the regional climatic cycles of <strong>${formattedLoc}</strong>, which features ${reg.agroSpecs}.`,
    `The thermal and environmental parameters of <strong>${formattedLoc}</strong> correspond to ${reg.agroSpecs}, necessitating specialized ventilation controls.`,
    `Operating a commercial grow facility in the heart of <strong>${formattedLoc}</strong> requires managing the local atmospheric envelope, defined by ${reg.agroSpecs}.`
  ];
  const p2S2 = [
    ` Specifically, while the refreshing winter months provide optimal natural pinning cooling, hot summer temperature spikes demand active indoor insulation.`,
    ` This means that seasonal temperature shifts—ranging from cold natural winter troughs to hot summer dry spells—require careful ambient monitoring.`,
    ` During high-temperature summer seasons, maintaining the room below 24°C is vital, whereas winters offer free natural temperature cooling.`,
    ` Ambient humidity during monsoonal showers simplifies watering, but dry summer heatwaves require proper evaporative cooling setups.`
  ];
  const p2S3 = [
    ` To counter these fluctuations, we recommend layering grow walls with double-insulated bubble sheets, thick thermocol panels, and installing digital temperature sensors.`,
    ` Growers can comfortably stabilize the room climate by utilizing low-cost bamboo frame sheds lined with wet gunny bags and automated micro-fogger nozzles.`,
    ` Implementing an automated HVAC grid with high-efficiency exhaust fans ensures proper air-handling and clears stagnant carbon dioxide.`,
    ` Simple manual techniques like spraying brick-lined floors with water and using multi-speed air circulators can maintain the perfect 85% relative humidity.`
  ];
  const paragraph2 = `${seededChoice(p2S1, seedKey, 2100)}${seededChoice(p2S2, seedKey, 2200)}${seededChoice(p2S3, seedKey, 2300)}`;

  // Paragraph 3: Substrate & Sourcing
  const p3S1 = [
    `Sourcing high-quality raw materials is exceptionally straightforward, as the agrarian landscape of ${state} yields tons of dry <strong>${reg.cropResiduе}</strong>.`,
    `For maximum economic viability, farmers are encouraged to utilize locally harvested, cheap resources like <strong>${reg.cropResiduе}</strong> as the primary growing medium.`,
    `The abundant availability of organic agricultural remnants, specifically <strong>${reg.cropResiduе}</strong>, makes substrate procurement highly affordable around this region.`,
    `Using localized, clean farm waste such as <strong>${reg.cropResiduе}</strong> allows growers to recycle discarded biomass into highly premium food crops.`
  ];
  const p3S2 = [
    ` This raw substrate must undergo a rigorous, clean sterilization process—either hot steam pasteurization or biological sanitization—to eliminate wild spores.`,
    ` To ensure zero competitor mold outbreaks, the dry straw must be boiled, treated with food-grade disinfectants, and drained to 65% moisture.`,
    ` Before mixing with spawn, proper heat treatment in pasteurization chambers is critical to sanitize the fibers and promote strong mycelial run.`,
    ` Following standard protocols, the sterilized straw is cooled down completely to room temperature before inoculation under clean handling hoods.`
  ];
  const p3S3 = [
    ` Once cooled, the substrate is thoroughly spawned with lab-certified, high-germination F1 seeds to ensure rapid pinning.`,
    ` Inoculating this prepared compost with pure, sorghum-grain mother spawn bags triggers extremely fast and aggressive mycelial colonization.`,
    ` We provide first-generation, high-potency hybrid spawn seeds that guarantee up to 3 robust flushing cycles on these local straw mixes.`,
    ` Selecting F1 generation certified seeds ensures that the blocks develop high resistance against background pathogens and mold.`
  ];
  const paragraph3 = `${seededChoice(p3S1, seedKey, 3100)}${seededChoice(p3S2, seedKey, 3200)}${seededChoice(p3S3, seedKey, 3300)}`;

  // Paragraph 4: Ecosystem & Nearby Districts
  const p4S1 = [
    `The local agricultural network around <strong>${formattedLoc}</strong> is supported by progressive agrarian cooperatives and cooperative community groups.`,
    `Growers in the region benefit from active community workshops, peer-to-peer technical forums, and progressive farming clusters.`,
    `Agricultural extension programs and rural self-reliance centers across ${state} are actively guiding new growers in modern crop design.`,
    `The thriving agricultural ecosystem surrounding <strong>${formattedLoc}</strong> provides a highly collaborative environment for starting small-scale cottage enterprises.`
  ];
  const p4S2 = [
    ` Regional support from nearby <strong>Krishi Vigyan Kendras (KVK)</strong> offers free soil-testing, spawn advice, and structured agribusiness blueprints.`,
    ` Scientists at state agricultural universities and regional centers actively supply technical manuals and certified seed verification services.`,
    ` By registering with local district horticulture officers, farmers can easily obtain project layout files and validation documents.`,
    ` Our technical advisory works in alignment with national boards to provide verified DPR templates and credit-linked bank layouts.`
  ];
  const p4S3 = [
    ` This regional training and logistics chain actively services neighboring areas like <strong>${nearbyList.join(', ')}</strong>, creating a unified agricultural corridor.`,
    ` Farmers from surrounding communities including <strong>${nearbyList.join(', ')}</strong> can easily access our express spawn delivery and consulting networks.`,
    ` The proximity of commercial centers such as <strong>${nearbyList.join(', ')}</strong> ensures a fast transit route for fresh harvests and training visits.`,
    ` This localized agribusiness initiative bridges rural-urban gaps across <strong>${nearbyList.join(', ')}</strong> with high-speed logistic linkages.`
  ];
  const paragraph4 = `${seededChoice(p4S1, seedKey, 4100)}${seededChoice(p4S2, seedKey, 4200)}${seededChoice(p4S3, seedKey, 4300)}`;

  // Paragraph 5: Demand & Business Subsidies
  const p5S1 = [
    `From a commercial standpoint, wholesale demand is growing exceptionally fast due to ${reg.foodTrend}.`,
    `Modern food establishments and consumer households are fueling a massive protein transition, with a strong emphasis on ${reg.foodTrend}.`,
    `The culinary market is undergoing a major health revolution, characterized by a massive rise in local interest in ${reg.foodTrend}.`,
    `High profit margins are fully backed by steady buyer segments who appreciate ${reg.foodTrend}.`
  ];
  const p5S2 = [
    ` Growers can establish secure trade agreements with bulk merchants at <strong>${reg.localWholesaleHub}</strong>, where fresh button caps fetch ₹140 to ₹220 per kg.`,
    ` Daily fresh harvests are channeled directly to major dealers inside <strong>${reg.localWholesaleHub}</strong>, ensuring rapid cash conversion at premium local rates.`,
    ` Establishing a direct logistic link to the bustling trading floors of <strong>${reg.localWholesaleHub}</strong> provides consistent bulk sales and high price realizations.`,
    ` Our network helps bridge the supply gap by connecting regional cultivators with major distributors in <strong>${reg.localWholesaleHub}</strong> for daily wholesale trading.`
  ];
  const p5S3 = [
    ` To support infrastructure setups, the <strong>National Horticulture Board (NHB)</strong> offers 40% to 50% capital subsidies linked with bank loans.`,
    ` Agrarian business developers can leverage credit-linked subsidies of up to 40% through <strong>NABARD</strong> schemes for insulated warehouse projects.`,
    ` Financial feasibility is greatly enhanced by capital grants and low-interest loans under state-led horticulture mission guidelines.`,
    ` Entrepreneurs can access easy Mudra loans and credit subsidies to finance vertical racking systems and climate cooling panels.`
  ];
  const p5S4 = [
    ` By combining lab-grade F1 mother spawn with our legally bound buyback assistance sheets, launching a successful venture is highly secure.`,
    ` Multiple self-help groups and agrarian start-ups have proven that with structured training, mushroom farming is a highly stable high-paying business.`,
    ` Our training course near this region provides step-by-step handholding, making it extremely easy for beginners to start earning within 25 days.`,
    ` Join this organic agricultural revolution today to secure your family's future and transform simple agro-waste into highly profitable crops.`
  ];
  const paragraph5 = `${seededChoice(p5S1, seedKey, 5100)}${seededChoice(p5S2, seedKey, 5200)}${seededChoice(p5S3, seedKey, 5300)}${seededChoice(p5S4, seedKey, 5400)}`;

  // ========================================================
  // 📍 6. UNIQUE FAQS GENERATOR (0% SIMILARITY)
  // ========================================================
  const f1Q = [
    `How do I apply for government mushroom subsidies in ${formattedLoc}?`,
    `What financial grants are available for mushroom farming in ${formattedLoc}?`,
    `How can a beginner claim state horticulture subsidies around ${formattedLoc}?`
  ];
  const f1A = [
    `To secure up to 40% to 50% capital subsidies in ${formattedLoc}, you must submit a detailed project report (DPR) along with land ownership records, your Aadhaar card, and a verified training certificate to the district horticulture office in ${state}.`,
    `Growers in ${formattedLoc} can claim credit-linked capital grants ranging from 40% to 50% by applying through local commercial banks or submitting their business plan directly to the state horticulture mission portal.`,
    `The ${state} government provides substantial capital subsidies for indoor grow rooms. Beginners around ${formattedLoc} can register online with their certified training proof, project drafts, and bank accounts to unlock these funds.`
  ];

  const f2Q = [
    `What is the realistic cost of starting a small pilot room in ${formattedLoc}?`,
    `How much initial investment is needed for a basic home-grow setup in ${formattedLoc}?`,
    `Can I launch a micro-scale mushroom farm in ${formattedLoc} under ₹15,000?`
  ];
  const f2A = [
    `A basic pilot room of 100 square feet inside ${formattedLoc} requires approximately ₹10,000 to ₹15,000 to cover metal racks, organic spawn seeds, local ${reg.cropResiduе}, misting sprays, and thick polythene bags.`,
    `Setting up a small 10x10 feet cultivation space in ${formattedLoc} is very affordable. With a budget of ₹12,000 to ₹15,000, you can secure high-grade spawn, raw substrate materials, and clean ambient monitoring meters.`,
    `Absolutely! A mini home-scale setup in ${formattedLoc} is highly viable for under ₹10,000. This low-cost pilot project is perfect to master practical biological pinning before scaling up to larger structures.`
  ];

  const f3Q = [
    `Which mushroom strains are best suited for the climate of ${formattedLoc}?`,
    `What varieties should I cultivate in ${formattedLoc} during summers and winters?`,
    `How does the seasonal temperature of ${formattedLoc} impact strain selection?`
  ];
  const f3A = [
    `For optimal biological efficiency under the climate profiles of ${formattedLoc}, we recommend cultivating White Button mushrooms in the winter season and high-yield Oyster or heat-resistant Milky mushrooms during summers.`,
    `Oyster mushrooms are perfect year-round in ${formattedLoc} due to their extreme resilience, whereas Milky mushrooms thrive in the warm summer months and Button strains require cool winter settings.`,
    `Since ${formattedLoc} experiences ${reg.agroSpecs}, growing fast-fruiting Oyster mushrooms is the safest choice for beginners, while commercial farms install simple cooling systems for year-round Buttons.`
  ];

  const selectedFAQs = [
    { q: seededChoice(f1Q, seedKey, 10), a: seededChoice(f1A, seedKey, 10) },
    { q: seededChoice(f2Q, seedKey, 20), a: seededChoice(f2A, seedKey, 20) },
    { q: seededChoice(f3Q, seedKey, 30), a: seededChoice(f3A, seedKey, 30) }
  ];

  // ========================================================
  // 📍 7. CUSTOM REGIONAL ALERT BOX (0% SIMILARITY)
  // ========================================================
  let regionalBoxHtml = '';
  if (reg.isHindi) {
    regionalBoxHtml = `
      <div class="p-6 rounded-2xl bg-primary-start/5 border border-primary-start/15 my-8">
        <h4 class="text-base font-bold text-primary-start mb-2">💡 महत्वपूर्ण क्षेत्रीय निर्देश (${state})</h4>
        <p class="text-sm dark:text-slate-300 text-slate-700 leading-relaxed mb-3">
          कृषि विभाग के नवीनतम निर्देशों के अनुसार, <strong>${formattedLoc}</strong> और इसके आसपास के क्षेत्रों में कल्टीवेशन के लिए गेहूं के भूसे या धान के पुआल का स्थानीय संग्रहण सबसे किफायती विकल्प है। सरकारी सब्सिडी योजनाओं (NHB) का लाभ उठाने के लिए किसानों को प्रमाणित ट्रेनिंग सर्टिफिकेट प्रस्तुत करना अनिवार्य है।
        </p>
        <ul class="list-disc pl-5 text-xs dark:text-slate-400 text-slate-500 space-y-1">
          <li><strong>मुख्य किस्में:</strong> ओईस्टर कल्टीवेशन (कम लागत, तुरंत लाभ) और बटन मशरूम (शीतकालीन कल्टीवेशन)।</li>
          <li><strong>थोक बाजार लिंक:</strong> ताजा स्टॉक सीधे <strong>${reg.localWholesaleHub}</strong> में भेजें।</li>
          <li><strong>बीज आपूर्ति:</strong> लैब-टेस्टेड हाइब्रिड F1 स्पॉन की सुरक्षित होम डिलीवरी उपलब्ध है।</li>
        </ul>
      </div>
    `;
  } else {
    regionalBoxHtml = `
      <div class="p-6 rounded-2xl bg-primary-start/5 border border-primary-start/15 my-8">
        <h4 class="text-base font-bold text-primary-start mb-2">💡 Regional Strategic Agricultural Insight (${state})</h4>
        <p class="text-sm dark:text-slate-300 text-slate-700 leading-relaxed mb-3">
          For successful commercial operations across <strong>${formattedLoc}</strong>, utilizing local raw inputs like <strong>${reg.cropResiduе}</strong> is highly recommended. Utilizing vertical rack configurations minimizes space and maximizes yield weights matching the demands at <strong>${reg.localWholesaleHub}</strong>.
        </p>
        <ul class="list-disc pl-5 text-xs dark:text-slate-400 text-slate-500 space-y-1">
          <li><strong>Recommended Strains:</strong> Oyster Mushrooms (Fastest ROI), Milky variety (perfect for high summer heat).</li>
          <li><strong>Mandi Supply Linkage:</strong> Rapid early morning logistics connecting directly to ${reg.localWholesaleHub}.</li>
          <li><strong>State Grants:</strong> Secure sub-loans and technical support under central horticulture mission plans.</li>
        </ul>
      </div>
    `;
  }

  // ========================================================
  // 📍 8. ARTICLE HTML COMPILATION (0% SIMILARITY)
  // ========================================================
  const stepsPool = [
    `Phase 1: Procurement of certified F1 mother spawn seeds adapted to ${state}'s seasonal ranges.`,
    `Phase 2: Substrate soaking and thorough thermal or biological sterilization to remove competing wild spores.`,
    `Phase 3: Hygenic spawning and complete dark run incubation inside ventilated clean grow bags.`,
    `Phase 4: Pinhead triggering through active oxygen circulation and dropping chamber temperature fields.`,
    `Phase 5: Sustainable harvesting, punnet packaging, and scheduled transport to local wholesale mandis.`
  ];
  const shuffledSteps = shuffleSeedWise(stepsPool, seedKey, 18);

  const keyAspectsPool = [
    `<strong>Biological Efficiency:</strong> Target a high 25% to 30% crop yield weight relative to dry substrate mass.`,
    `<strong>Sterile Safeguards:</strong> Incorporate clean hand washing, specialized footwear, and formalin surface sanitation sprays.`,
    `<strong>Insulated Design:</strong> Minimize power consumption of cooling grids by utilizing thermal foil shields inside ${formattedLoc}.`,
    `<strong>Direct Buyback Channel:</strong> Access transparent, legally secure agreement sheets with direct crop collection points.`
  ];
  const shuffledAspects = shuffleSeedWise(keyAspectsPool, seedKey, 19);

  const fullHtml = `
    <div class="prose max-w-none dark:prose-invert prose-slate space-y-6 text-sm md:text-base leading-relaxed">
      
      <!-- Introduction Section -->
      <p class="text-lg font-light dark:text-slate-300 text-slate-700 mb-6 leading-relaxed">
        ${paragraph1}
      </p>

      ${regionalBoxHtml}

      <!-- Detailed Location Specific Mushroom Farming Guide -->
      <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-8 mb-4 border-l-4 border-primary-start pl-3">${pageH2s[0]}</h2>
      <p>
        ${paragraph2}
      </p>
      
      <div class="p-6 rounded-2xl dark:bg-white/5 bg-black/5 dark:border-white/5 border-black/5 border my-6">
        <h3 class="text-base md:text-lg font-bold dark:text-white text-slate-800 mb-3">5 Critical Stages of Production inside ${formattedLoc}:</h3>
        <ol class="list-decimal pl-6 space-y-2 dark:text-slate-300 text-slate-600 font-medium">
          <li><strong>${shuffledSteps[0]}</strong></li>
          <li><strong>${shuffledSteps[1]}</strong></li>
          <li><strong>${shuffledSteps[2]}</strong></li>
          <li><strong>${shuffledSteps[3]}</strong></li>
          <li><strong>${shuffledSteps[4]}</strong></li>
        </ol>
      </div>

      <!-- Training & Certification Details -->
      <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-8 mb-4 border-l-4 border-primary-start pl-3">${pageH2s[1]}</h2>
      <p>
        ${paragraph3}
      </p>

      <!-- Business Opportunities & Project Cost Breakdown -->
      <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-8 mb-4 border-l-4 border-primary-start pl-3">${pageH2s[2]}</h2>
      <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6 mb-3">${pageH3s[0]}</h3>
      <p>
        ${paragraph4}
      </p>

      <div class="p-6 rounded-2xl dark:bg-white/5 bg-black/5 dark:border-white/5 border-black/5 border my-6 grid sm:grid-cols-2 gap-4">
        <div>
          <h4 class="font-bold text-sm dark:text-white text-slate-800 mb-2">Key Climate Parameters:</h4>
          <ul class="list-disc pl-5 space-y-1.5 text-xs dark:text-slate-400 text-slate-500">
            <li>Optimal Spawn Run Temperature: 22°C to 25°C</li>
            <li>Relative Humidity Targets: 80% to 90%</li>
            <li>Carbon Dioxide Threshold: Under 800 ppm during pinning</li>
            <li>Watering Schedule: 2-3 times fine mist spray daily</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-sm dark:text-white text-slate-800 mb-2">Yield Metrics (Per 1000 Bags):</h4>
          <ul class="list-disc pl-5 space-y-1.5 text-xs dark:text-slate-400 text-slate-500">
            <li>Substrate Required: ~1000 kg dry raw straw</li>
            <li>Spawn Seed Needed: ~30 kg pure hybrid spawn</li>
            <li>First Harvest Rotation: 21 to 25 days</li>
            <li>Biological Yield Ratio: 1.2x to 1.5x output weight</li>
          </ul>
        </div>
      </div>

      <!-- Sells & Logistics -->
      <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-8 mb-4 border-l-4 border-primary-start pl-3">${pageH2s[3]}</h2>
      <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6 mb-3">${pageH3s[1]}</h3>
      <p>
        ${paragraph5}
      </p>

      <!-- Subsidies & Grants -->
      <h2 class="text-xl md:text-2xl font-bold dark:text-white text-slate-800 mt-8 mb-4 border-l-4 border-primary-start pl-3">${pageH2s[4]}</h2>
      <h3 class="text-lg md:text-xl font-bold dark:text-white text-slate-800 mt-6 mb-3">${pageH3s[2]}</h3>
      
      <div class="p-4 rounded-xl border border-dashed border-primary-start/30 dark:bg-white/5 bg-black/5 text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
        <strong>💡 Direct Buyback Assistance:</strong> We offer legally bound crop buyback agreements for certified contract farmers around the <strong>${formattedLoc}</strong> sector. Grow with peace of mind knowing that your high-grade dried button, oyster, or milky crops have a dedicated, stable buyer network ready for bulk dispatch across India.
      </div>

      <div class="mt-8 pt-6 border-t dark:border-white/5 border-black/5">
        <h4 class="font-bold dark:text-white text-slate-800 mb-3">Core Performance Benchmarks:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${shuffledAspects.map(aspect => `
            <div class="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs dark:text-slate-300 text-slate-700">
              • ${aspect}
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  // Construct final manual content object
  const finalContent: SEOManualContent = {
    title: pageTitle,
    metaDesc: pageMetaDesc,
    keywords: `${kwText} ${formattedLoc}, ${kwText} ${state}, mushroom spawn ${formattedLoc}, mushroom price ${formattedLoc}, mushroom training ${formattedLoc}`,
    h1: pageH1,
    h2s: pageH2s,
    h3s: pageH3s,
    h4s: selectedFAQs.map(faq => faq.q),
    articleHtml: fullHtml,
    faqs: selectedFAQs
  };

  // Check manual overrides if any
  const locSlug = locationName.toLowerCase().trim().replace(/_/g, '-').replace(/\s+/g, '-');
  const kwSlug = keywordInfo ? keywordInfo.url.replace(/^\/+|\/+$/g, '').toLowerCase() : '';
  const specificKey = `${locSlug}_${kwSlug}`;
  const generalKey = locSlug;

  const override = MANUAL_PAGE_OVERRIDES[specificKey] || MANUAL_PAGE_OVERRIDES[generalKey];
  if (override) {
    return {
      title: override.title || finalContent.title,
      metaDesc: override.metaDesc || finalContent.metaDesc,
      keywords: override.keywords || finalContent.keywords,
      h1: override.h1 || finalContent.h1,
      h2s: override.h2s || finalContent.h2s,
      h3s: override.h3s || finalContent.h3s,
      h4s: override.h4s || finalContent.h4s,
      articleHtml: override.articleHtml || finalContent.articleHtml,
      faqs: finalContent.faqs
    };
  }

  return finalContent;
}
