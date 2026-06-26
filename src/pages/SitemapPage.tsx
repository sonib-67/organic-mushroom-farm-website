import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, ArrowRight, Search, 
  Sprout, Award, Briefcase, Building, BookOpen, 
  HelpCircle, Image, List, Shield, Info, Phone,
  FileText, X, Printer, Download, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Import locations from central locationsData file
import { STATES, CITIES, VILLAGES } from '../data/locationsData';

interface LocationItem {
  rawName: string;
  formattedName: string;
  slug: string;
  type: 'State' | 'City' | 'Village';
}

function getStateForCity(city: string): string {
  const c = city.toLowerCase().replace(/_/g, ' ').replace(/-/g, ' ').trim();
  
  if (["visakhapatnam", "vijayawada", "guntur", "nellore", "kurnool", "kakinada", "rajahmundry", "kadapa", "tirupati", "anantapur", "vizianagaram", "eluru", "ongole", "nandyal", "machilipatnam", "adoni", "tenali", "chittoor", "hindupur", "proddatur", "bhimavaram", "madanapalle", "guntakal", "dharmavaram", "gudivada", "narasaraopet", "tadipatri", "mangalagiri", "chilakaluripet", "srikakulam", "rajam", "palasa", "bobbili", "tadepalligudem", "amalapuram", "bapatla", "narasapuram", "ponnur", "jangareddygudem", "palakol", "tanuku", "nidadavole", "pithapuram", "samalkot"].includes(c)) return "Andhra_Pradesh";
  if (["itanagar", "naharlagun", "pasighat", "namsai", "bomdila", "ziro", "tezu", "along", "tawang", "roing", "khonsa", "seppa", "daporijo", "anini", "yingkiong"].includes(c)) return "Arunachal_Pradesh";
  if (["guwahati", "silchar", "dibrugarh", "jorhat", "nagaon", "tinsukia", "tezpur", "bongaigaon", "dhubri", "north lakhimpur", "sivasagar", "goalpara", "barpeta", "karimganj", "hailakandi", "haflong", "diphu", "golaghat", "nalbari", "mangaldoi", "kokrajhar", "dhemaji", "morigaon", "sibsagar", "mariani"].includes(c)) return "Assam";
  if (["patna", "gaya", "bhagalpur", "muzaffarpur", "purnia", "darbhanga", "bihar sharif", "arrah", "begusarai", "katihar", "munger", "chhapra", "danapur", "bettiah", "saharsa", "sasaram", "hajipur", "dehri", "siwan", "motihari", "nawada", "bagaha", "buxar", "kishanganj", "sitamarhi", "jamalpur", "jehanabad", "aurangabad", "lakhisarai", "sheikhpura", "supaul", "araria", "gopalganj", "madhubani", "samastipur", "vaishali", "sheohar", "madhepura"].includes(c)) return "Bihar";
  if (["raipur", "bhilai", "bilaspur", "korba", "durg", "rajnandgaon", "jagdalpur", "raigarh", "ambikapur", "dhamtari", "chirmiri", "kanker", "kondagaon", "mahasamund", "bemetara", "gariaband", "baloda bazar", "mungeli", "kabirdham", "balrampur", "narayanpur", "sukma", "bijapur", "dantewada", "jashpur"].includes(c)) return "Chhattisgarh";
  if (["panaji", "margao", "vasco da gama", "mapusa", "ponda", "bicholim", "curchorem", "sanquelim", "canacona", "pernem", "sanguem", "quepem"].includes(c)) return "Goa";
  if (["ahmedabad", "surat", "vadodara", "rajkot", "bhavnagar", "jamnagar", "junagadh", "gandhinagar", "anand", "navsari", "morbi", "mehsana", "surendranagar", "bharuch", "porbandar", "gondal", "veraval", "botad", "amreli", "ankleshwar", "valsad", "dahod", "godhra", "palanpur", "gandhidham", "deesa", "idar", "nadiad", "khambhat", "unjha", "vapi", "mandvi", "dwarka", "somnath", "keshod", "dhoraji", "jetpur", "wankaner"].includes(c)) return "Gujarat";
  if (["faridabad", "gurugram", "rohtak", "hisar", "panipat", "ambala", "yamunanagar", "sonipat", "panchkula", "bhiwani", "sirsa", "bahadurgarh", "jind", "thanesar", "kaithal", "karnal", "rewari", "palwal", "narnaul", "mahendragarh", "fatehabad", "gohana", "tohana", "pinjore", "jhajjar", "nuh", "charkhi dadri", "hansi", "ratia", "dabwali"].includes(c)) return "Haryana";
  if (["shimla", "dharamshala", "solan", "mandi", "palampur", "baddi", "nahan", "kullu", "hamirpur", "una", "chamba", "bilaspur", "sundarnagar", "manali", "parwanoo", "rohru", "rampur", "nurpur", "jogindernagar", "dalhousie"].includes(c)) return "Himachal_Pradesh";
  if (["ranchi", "jamshedpur", "dhanbad", "bokaro", "deoghar", "phusro", "hazaribagh", "giridih", "ramgarh", "medininagar", "chirkunda", "chaibasa", "daltonganj", "sahibganj", "adityapur", "chas", "jugsalai", "mihijam", "dumka", "jamtara", "pakur", "godda", "gumla", "simdega", "lohardaga", "khunti", "seraikela"].includes(c)) return "Jharkhand";
  if (["bengaluru", "hubli", "dharwad", "mysuru", "kalaburagi", "mangaluru", "davanagere", "belagavi", "ballari", "vijayapura", "shivamogga", "tumakuru", "raichur", "bidar", "udupi", "hassan", "hospet", "gadag", "chitradurga", "mandya", "bagalkot", "chikkamagaluru", "robertsonpet", "bhadravati", "davengere", "ramanagara", "chikkaballapur", "kolar", "gangavati", "gokak", "yadgir", "koppal", "haveri", "chamarajanagar", "kodagu"].includes(c)) return "Karnataka";
  if (["thiruvananthapuram", "kochi", "kozhikode", "kollam", "thrissur", "alappuzha", "palakkad", "malappuram", "kannur", "kasaragod", "kottayam", "idukki", "pathanamthitta", "wayanad", "ernakulam", "manjeri", "kayamkulam", "thalassery", "vatakara", "ponnani", "tirur", "koyilandy", "payyannur", "perinthalmanna", "ottappalam", "shoranur", "chalakudy", "muvattupuzha", "kunnamkulam", "irinjalakuda", "kodungallur", "thodupuzha"].includes(c)) return "Kerala";
  if (["bhopal", "gwalior", "ujjain", "sagar", "dewas", "satna", "ratlam", "rewa", "murwara", "singrauli", "burhanpur", "khandwa", "bhind", "chhindwara", "guna", "shivpuri", "vidisha", "chhatarpur", "damoh", "mandsaur", "khargone", "neemuch", "pithampur", "hoshangabad", "itarsi", "sehore", "betul", "seoni", "datia", "nagda", "balaghat", "mandla", "dindori", "tikamgarh", "panna", "anuppur", "umaria", "sidhi", "shahdol", "rajgarh", "agar malwa", "alirajpur", "barwani", "ashoknagar", "katangi"].includes(c)) return "Madhya_Pradesh";
  if (["mumbai", "pune", "nagpur", "nashik", "aurangabad", "solapur", "amravati", "kolhapur", "nanded", "sangli", "malegaon", "jalgaon", "akola", "latur", "dhule", "ahmednagar", "chandrapur", "parbhani", "ichalkaranji", "jalna", "ambarnath", "bhiwandi", "panvel", "navi mumbai", "thane", "kalyan", "ulhasnagar", "mira bhayandar", "vasai virar", "ratnagiri", "sindhudurg", "satara", "osmanabad", "beed", "hingoli", "buldhana", "washim", "yavatmal", "wardha", "gadchiroli", "gondia", "bhandara", "nandurbar", "shirdi"].includes(c)) return "Maharashtra";
  if (["imphal", "thoubal", "bishnupur", "churachandpur", "ukhrul", "senapati", "tamenglong", "chandel", "jiribam", "kakching"].includes(c)) return "Manipur";
  if (["shillong", "tura", "nongpoh", "jowai", "baghmara", "resubelpara", "nongstoin", "mairang", "williamnagar"].includes(c)) return "Meghalaya";
  if (["aizawl", "lunglei", "saiha", "champhai", "serchhip", "kolasib", "lawngtlai", "mamit", "saitual"].includes(c)) return "Mizoram";
  if (["kohima", "dimapur", "mokokchung", "tuensang", "wokha", "zunheboto", "phek", "mon", "kiphire", "longleng", "peren"].includes(c)) return "Nagaland";
  if (["bhubaneswar", "cuttack", "rourkela", "brahmapur", "sambalpur", "puri", "balasore", "bhadrak", "baripada", "jharsuguda", "bargarh", "paradip", "jeypore", "sundargarh", "phulbani", "keonjhar", "jagatsinghpur", "kendrapara", "jajpur", "dhenkanal", "titlagarh", "rayagada", "bolangir", "nabarangapur", "koraput", "malkangiri", "nuapada", "sonepur", "nayagarh", "gajapati", "kandhamal"].includes(c)) return "Odisha";
  if (["ludhiana", "amritsar", "jalandhar", "patiala", "bathinda", "mohali", "hoshiarpur", "batala", "pathankot", "moga", "abohar", "malerkotla", "khanna", "phagwara", "muktsar", "barnala", "rajpura", "firozpur", "kapurthala", "sangrur", "faridkot", "mansa", "tarn taran", "rupnagar", "nawanshahr", "fatehgarh sahib", "gurdaspur"].includes(c)) return "Punjab";
  if (["jaipur", "jodhpur", "kota", "bikaner", "ajmer", "bhilwara", "alwar", "bharatpur", "sikar", "pali", "sri ganganagar", "tonk", "hanumangarh", "kishangarh", "baran", "dhaulpur", "banswara", "sirohi", "sawai madhopur", "chittorgarh", "nagaur", "jhalawar", "barmer", "jalore", "jhunjhunu", "bundi", "rajsamand", "dausa", "karauli", "pratapgarh"].includes(c)) return "Rajasthan";
  if (["gangtok", "namchi", "gyalshing", "mangan", "rangpo", "singtam", "jorethang"].includes(c)) return "Sikkim";
  if (["chennai", "coimbatore", "madurai", "tiruchirappalli", "salem", "tirunelveli", "tiruppur", "vellore", "erode", "thoothukkudi", "dindigul", "thanjavur", "ranipet", "sivakasi", "karur", "udhagamandalam", "hosur", "nagercoil", "kanchipuram", "kumarapalayam", "karaikkudi", "neyveli", "cuddalore", "kumbakonam", "tiruvannamalai", "pollachi", "rajapalayam", "pudukkottai", "nagapattinam", "virudhunagar", "namakkal", "maraimalai nagar", "tiruvottiyur", "villupuram", "ariyalur", "krishnagiri", "dharmapuri", "tiruvarur", "nilgiris", "tenkasi", "chengalpattu", "kallakurichi"].includes(c)) return "Tamil_Nadu";
  if (["hyderabad", "warangal", "nizamabad", "khammam", "karimnagar", "ramagundam", "mahabubnagar", "nalgonda", "adilabad", "suryapet", "miryalaguda", "siddipet", "jagtial", "mancherial", "nirmal", "kamareddy", "sangareddy", "vikarabad", "wanaparthy", "nagarkurnool", "bhongir", "yadadri", "medchal", "gadwal", "jogulamba"].includes(c)) return "Telangana";
  if (["agartala", "dharmanagar", "udaipur", "kailasahar", "belonia", "khowai", "bishramganj", "ambassa", "kumarghat", "sonamura"].includes(c)) return "Tripura";
  if (["lucknow", "kanpur", "ghaziabad", "agra", "varanasi", "meerut", "allahabad", "bareilly", "aligarh", "moradabad", "saharanpur", "gorakhpur", "noida", "firozabad", "loni", "jhansi", "muzaffarnagar", "mathura", "rampur", "shahjahanpur", "farrukhabad", "mau", "hapur", "etawah", "mirzapur", "bulandshahr", "sambhal", "amroha", "hardoi", "fatehpur", "raebareli", "orai", "sitapur", "bahraich", "modinagar", "unnao", "jaunpur", "lakhimpur", "hathras", "banda", "pilibhit", "barabanki", "khurja", "gonda", "mainpuri", "lalitpur", "etah", "deoria", "sultanpur", "azamgarh", "bijnor", "auraiya", "basti", "ballia", "chandausi", "akpur", "faizabad", "ghazipur", "kannauj", "shikohabad", "tanda", "najibabad", "shahabad", "tilhar", "ujhani", "zamania", "chhibramau", "nagina", "shamli", "kasganj"].includes(c)) return "Uttar_Pradesh";
  if (["dehradun", "haridwar", "roorkee", "haldwani", "rudrapur", "kashipur", "rishikesh", "kotdwar", "ramnagar", "pithoragarh", "almora", "nainital", "mussoorie", "bageshwar", "chamoli", "champawat", "pauri", "tehri", "uttarkashi", "rudraprayag"].includes(c)) return "Uttarakhand";
  if (["kolkata", "asansol", "siliguri", "durgapur", "bardhaman", "malda", "baharampur", "habra", "kharagpur", "shantipur", "dankuni", "dhulian", "ranaghat", "haldia", "raiganj", "krishnanagar", "nabadwip", "medinipur", "jalpaiguri", "balurghat", "basirhat", "bankura", "chakdaha", "darjeeling", "alipurduar", "purulia", "murshidabad", "jangipur", "suri", "arambhagh", "tamluk", "contai", "bishnupur", "cooch behar", "kalimpong", "gangarampur"].includes(c)) return "West_Bengal";
  if (["new delhi", "dwarka", "rohini", "janakpuri", "laxmi nagar", "shahdara", "pitampura", "saket", "vasant kunj", "narela", "bijwasan", "mehrauli", "najafgarh", "karol bagh", "connaught place", "chandni chowk"].includes(c)) return "Delhi";
  if (["srinagar", "jammu", "anantnag", "sopore", "baramulla", "kathua", "udhampur", "punch", "rajouri", "ganderbal", "pulwama", "shopian", "kulgam", "bandipora", "kupwara"].includes(c)) return "Jammu_and_Kashmir";
  if (["leh", "kargil", "diskit", "padum", "drass", "zanskar"].includes(c)) return "Ladakh";
  if (["chandigarh", "manimajra", "dhanas", "burail", "mauli jagran", "maloya"].includes(c)) return "Chandigarh";
  if (["puducherry", "karaikal", "mahe", "yanam", "ozhukarai"].includes(c)) return "Puducherry";
  if (["port blair", "diglipur", "rangat", "havelock", "car nicobar", "campbell bay"].includes(c)) return "Andaman_and_Nicobar_Islands";
  if (["silvassa", "daman", "diu", "naroli", "amli", "khanvel"].includes(c)) return "Dadra_and_Nagar_Haveli_and_Daman_and_Diu";
  if (["kavaratti", "agatti", "amini", "andrott", "minicoy", "kiltan"].includes(c)) return "Lakshadweep";
  
  return "Madhya_Pradesh";
}

function getStateForVillage(village: string): string {
  const v = village.toLowerCase().replace(/_/g, ' ').replace(/-/g, ' ').trim();
  if (v === "lepakshi") return "Andhra_Pradesh";
  if (v === "majuli") return "Assam";
  if (v === "bodh gaya") return "Bihar";
  if (v === "chitrakote") return "Chhattisgarh";
  if (v === "aldona") return "Goa";
  if (v === "gir forest") return "Gujarat";
  if (v === "kurukshetra") return "Haryana";
  if (v === "malana") return "Himachal_Pradesh";
  if (v === "hampi") return "Karnataka";
  if (v === "kumarakom") return "Kerala";
  if (v === "khajuraho") return "Madhya_Pradesh";
  if (v === "shani shingnapur") return "Maharashtra";
  if (v === "loktak lake") return "Manipur";
  if (v === "mawlynnong") return "Meghalaya";
  if (v === "dzukou") return "Nagaland";
  if (v === "konark") return "Odisha";
  if (v === "anandpur sahib") return "Punjab";
  if (v === "sambhar lake") return "Rajasthan";
  if (v === "yuksom") return "Sikkim";
  if (v === "mahabalipuram") return "Tamil_Nadu";
  if (v === "ramappa" || v === "patas") return "Telangana";
  if (v === "neermahal") return "Tripura";
  if (v === "vrindavan" || v === "shantiniketan") return "Uttar_Pradesh";
  return "Madhya_Pradesh";
}

export default function SitemapPage() {
  const [activeTab, setActiveTab] = useState<'main' | 'locations'>('main');
  const [searchQuery, setSearchQuery] = useState('');
  const [locFilter, setLocFilter] = useState<'all' | 'State' | 'City' | 'Village'>('all');
  const [expandedStates, setExpandedStates] = useState<Record<string, boolean>>({});

  // Group locations state-wise on load to prevent rendering multi-thousand element groups at once
  const groupedStates = useMemo(() => {
    const statesMap: Record<string, { cities: LocationItem[], villages: LocationItem[], stateItem: LocationItem }> = {};
    
    STATES.forEach(name => {
      statesMap[name] = {
        cities: [],
        villages: [],
        stateItem: {
          rawName: name,
          formattedName: name.replace(/_/g, ' '),
          slug: name.toLowerCase().replace(/_/g, '-'),
          type: 'State'
        }
      };
    });

    CITIES.forEach(name => {
      const stateName = getStateForCity(name);
      if (statesMap[stateName]) {
        statesMap[stateName].cities.push({
          rawName: name,
          formattedName: name.replace(/_/g, ' '),
          slug: name.toLowerCase().replace(/_/g, '-'),
          type: 'City'
        });
      }
    });

    VILLAGES.forEach(name => {
      const stateName = getStateForVillage(name);
      if (statesMap[stateName]) {
        statesMap[stateName].villages.push({
          rawName: name,
          formattedName: name.replace(/_/g, ' '),
          slug: name.toLowerCase().replace(/_/g, '-'),
          type: 'Village'
        });
      }
    });

    return Object.entries(statesMap).map(([stateName, data]) => ({
      stateName,
      formattedName: stateName.replace(/_/g, ' '),
      slug: stateName.toLowerCase().replace(/_/g, '-'),
      data
    })).sort((a, b) => a.formattedName.localeCompare(b.formattedName));
  }, []);

  // Filtered state-wise groups to match search inputs seamlessly
  const filteredGroupedStates = useMemo(() => {
    if (!searchQuery && locFilter === 'all') {
      return groupedStates.map(item => ({
        ...item,
        hasMatches: true,
        matchedCities: item.data.cities,
        matchedVillages: item.data.villages,
        isStateMatched: true
      }));
    }

    const query = searchQuery.toLowerCase().trim();
    
    return groupedStates.map(item => {
      const cities = item.data.cities.filter(c => {
        const matchesFilter = locFilter === 'all' || locFilter === 'City';
        const matchesSearch = c.formattedName.toLowerCase().includes(query);
        return matchesFilter && matchesSearch;
      });

      const villages = item.data.villages.filter(v => {
        const matchesFilter = locFilter === 'all' || locFilter === 'Village';
        const matchesSearch = v.formattedName.toLowerCase().includes(query);
        return matchesFilter && matchesSearch;
      });

      const isStateMatched = (locFilter === 'all' || locFilter === 'State') && 
        item.formattedName.toLowerCase().includes(query);

      const hasMatches = isStateMatched || cities.length > 0 || villages.length > 0;

      return {
        ...item,
        hasMatches,
        matchedCities: cities,
        matchedVillages: villages,
        isStateMatched
      };
    }).filter(item => item.hasMatches);
  }, [groupedStates, searchQuery, locFilter]);

  const mainHubs = [
    { name: "Home / Welcome", path: "/", desc: "Main landing gateway and entry point." },
    { name: "About Us", path: "/about", desc: "Our history, founders, mission, and philosophy." },
    { name: "Our Services Hub", path: "/services", desc: "Comprehensive mushroom business opportunities." },
    { name: "Mushroom Spawn (Seeds)", path: "/spawn-seed", desc: "High quality, laboratory-clean spawn seeds." },
    { name: "Mushroom Equipment", path: "/equipment", desc: "Industrial and organic level grow equipments." },
    { name: "Turnkey Farm Setup", path: "/turnkey-projects", desc: "Full planning, setup, and commissioning." },
    { name: "Government Subsidy", path: "/subsidy", desc: "Government grants, subsidies, and model guidelines." },
    { name: "Training & Courses", path: "/training", desc: "Aesthetic online/offline certified training sessions." },
    { name: "Business Plan Model", path: "/business-plan", desc: "Commercial business estimation guides." },
    { name: "Mushroom Varieties Guide", path: "/mushroom-types", desc: "Interactive listing of button, oyster, milky varieties." },
    { name: "Contact & Headquarters", path: "/contact", desc: "Addresses, interactive map and enquiry portals." }
  ];

  const subServicesAndSOPs = [
    { name: "Compost Production Setup", path: "/services/compost-production", desc: "Pasteurized compost manufacturing techniques." },
    { name: "Technical Consultancy", path: "/services/consultancy", desc: "Professional agronomist phone and on-site support." },
    { name: "Marketing Support & Buy-Back", path: "/services/marketing-support", desc: "End-to-end harvest marketing assistance." },
    { name: "Cold-Chain Logistics", path: "/services/cold-chain", desc: "Refrigerated transit for fresh spawn/harvests." },
    { name: "Model Specifications", path: "/model-details", desc: "Operational details of commercial setups." },
    { name: "Compost Unit Specifications", path: "/compost-unit-specs", desc: "Air-handling unit and infrastructure detailer." },
    { name: "Standard SOPs (Tunnel/Bunker Ops)", path: "/sops#tunnel-ops", desc: "Step-by-step Standard Operating Procedures guide." },
    { name: "Agriculture Expertise", path: "/expertise-details", desc: "Key academic and market insights on growth." },
    { name: "Mushroom Price Today", path: "/mushroom-price-today", desc: "Real-time pricing for major Indian wholesale markets." },
    { name: "ROI Profit Calculator", path: "/roi-calculator", desc: "Calculate your profits, investments, and paybacks." },
    { name: "Mushroom General Franchise", path: "/mushroom-franchise", desc: "Own an Organic franchise model representation." },
    { name: "Careers Index", path: "/careers", desc: "Join our fast-growing agro-business framework." },
    { name: "Photo Gallery", path: "/gallery", desc: "Visual peek into our farms, labs, and workshops." },
    { name: "Success Stories", path: "/success-stories", desc: "Real life stories of successful farmers we've trained." },
    { name: "Frequently Asked Questions", path: "/faq", desc: "A collection of questions solved for beginner farmers." },
    { name: "Customer Support Page", path: "/support", desc: "Submit tickets and get quick resolution support." }
  ];

  const educationalArticles = [
    { name: "Mushroom Training Profit Guide (USA)", path: "/articles/mushroom-training-profit-guide-usa", desc: "Complete guide to turning mushroom farming into a real business across the USA." },
    { name: "Medicinal Mushrooms Income Guide (USA)", path: "/articles/medicinal-mushrooms-income-guide-usa", desc: "Detailed breakdown on profits from Lion's Mane, Reishi, and Chaga in America." },
    { name: "Farming Beginner Guide India (2026)", path: "/articles/mushroom-farming-beginner-guide-india-2026-2027", desc: "Step-by-step guide for Indian beginner agripreneurs." },
    { name: "Oyster Mushroom Cultivation India", path: "/articles/oyster-mushroom-cultivation-india", desc: "Complete practical guide for high-yield Oyster setups." },
    { name: "What is Mushroom Spawn (Beginner Guide)", path: "/articles/what-is-mushroom-spawn-beginner-guide-india", desc: "Understanding mushroom mycelium and grain spawn." },
    { name: "Mushroom Business Plan Hindi", path: "/articles/mushroom-farming-business-plan-hindi-2026", desc: "Highly detailed business plan written in Hindi language." },
    { name: "Mushroom Farming Training course Hindi", path: "/articles/mushroom-farming-training-hindi-india", desc: "Indian central region training course information." },
    { name: "Farming Training Certificate", path: "/articles/mushroom-farming-training-online-offline-certificate", desc: "Syllabus and layout of certified online/offline workshops." },
    { name: "Ghar Par Mushroom Farming Manual", path: "/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026", desc: "Detailed home cultivation, bag preparation strategy." }
  ];

  const dynamicBlogPosts = Array.from({ length: 10 }, (_, i) => ({
    name: `Official Research Article #${i + 1}`,
    path: `/blog/${i + 1}`,
    desc: `Detailed industrial insights, seasonal updates, and updates on volume #${i + 1}.`
  }));

  const systemPolicies = [
    { name: "Terms of Service", path: "/terms", desc: "Rules and terms guiding farm partnerships." },
    { name: "Privacy Policy", path: "/privacy", desc: "Data protection and absolute client privacy logs." },
    { name: "Refund & Cancellation", path: "/refund-policy", desc: "Transparent policy on ticket / spawn refunds." },
    { name: "Shipping Directory", path: "/shipping-policy", desc: "Cold chain shipping guidelines and pin-codes." }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <SEO 
        title="Site Directory & HTML Sitemap | Organic Mushroom Farm" 
        description="Explore the complete site map directory of Organic Mushroom Farm. High-contrast index of core articles, local services, and 110+ pan-India location pathways." 
        keywords="site map organic mushroom farm, html sitemap, directory list mushroom training, mushroom farming list states"
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge mx-auto mb-4">Complete Directory</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
            HTML Site <span className="gradient-text">Directory</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
            A comprehensive, fully indexable site map index. Find main hub panels, expert articles, policies, and localized pages in one organized place.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://wa.me/919203544140"
              className="px-6 py-2.5 rounded-full border border-white/20 text-slate-300 hover:text-white text-xs sm:text-sm font-bold bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              WhatsApp Help Desk
            </a>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-white/5 max-w-md mx-auto mb-12 gap-2 bg-white/5 p-1.5 rounded-full">
          <button 
            onClick={() => setActiveTab('main')}
            className={`flex-1 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all ${activeTab === 'main' ? 'bg-primary-start text-white shadow-lg shadow-primary-start/20' : 'text-slate-400 hover:text-white'}`}
          >
            Core Pages & Blogs
          </button>
          <button 
            onClick={() => setActiveTab('locations')}
            className={`flex-1 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all ${activeTab === 'locations' ? 'bg-primary-start text-white shadow-lg shadow-primary-start/20' : 'text-slate-400 hover:text-white'}`}
          >
            Location Directory ({STATES.length + CITIES.length + VILLAGES.length})
          </button>
        </div>

        {/* Core Pages Tab */}
        <div className={`space-y-16 ${activeTab === 'main' ? 'block' : 'hidden'}`}>
            
            {/* Core pages */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">Main Hub & Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainHubs.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-primary-start text-xs font-bold uppercase tracking-wider mt-4">
                      Explore Page <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sub Services, Calcs & Details */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">Specifications & Calculators</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subServicesAndSOPs.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-primary-start text-xs font-bold uppercase tracking-wider mt-4">
                      Explore Page <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Scientific Guides / Articles */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">Step-by-Step Educational Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {educationalArticles.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-primary-start text-xs font-bold uppercase tracking-wider mt-4">
                      Read Article <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Scientific Blogs */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">Official Research Blogs</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dynamicBlogPosts.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-primary-start text-xs font-bold uppercase tracking-wider mt-4">
                      Read Post <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Policy files */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-primary-start pl-3 tracking-tight">System Policies & Legal Directories</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {systemPolicies.map((page, i) => (
                  <Link to={page.path} key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-start/20 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 className="text-white font-bold group-hover:text-primary-start transition-colors mb-2">{page.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                    <div className="flex items-center text-slate-500 text-xs font-bold uppercase tracking-wider mt-4">
                      Standard Terms <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        {/* Location Directory Tab */}
        <div className={activeTab === 'locations' ? 'block' : 'hidden'}>
          <div>
            {/* Search and control box */}
            <div className="glass p-6 rounded-3xl border border-white/5 mb-8 flex flex-col md:flex-row items-center gap-4 justify-between">
              <div className="relative w-full md:max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-500 text-slate-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search regions (Bhopal, Indore, Gwalior...)"
                  className="w-full dark:bg-white/5 bg-white/80 border dark:border-white/10 border-slate-200 rounded-full py-2.5 pl-12 pr-6 text-sm dark:text-white text-slate-900 dark:placeholder-slate-500 placeholder-slate-400 focus:outline-none focus:border-primary-start/50 transition-colors"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {(['all', 'State', 'City', 'Village'] as const).map(f => (
                  <button 
                    key={f}
                    onClick={() => setLocFilter(f)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      locFilter === f 
                        ? 'dark:bg-white/10 bg-slate-200 dark:text-white text-slate-900 border dark:border-white/10 border-slate-300' 
                        : 'dark:text-slate-500 text-slate-500 dark:hover:text-white hover:text-slate-900'
                    }`}
                  >
                    {f === 'all' ? 'All Locations' : f + 's'}
                  </button>
                ))}
              </div>
            </div>

            {/* Structured Accordion States List to prevent any lag */}
            <div className="space-y-4">
              {filteredGroupedStates.map((item) => {
                const expanded = searchQuery ? true : !!expandedStates[item.stateName];
                const activeCities = searchQuery ? item.matchedCities : item.data.cities;
                const activeVillages = searchQuery ? item.matchedVillages : item.data.villages;

                const toggleState = (stateName: string) => {
                  setExpandedStates(prev => ({
                    ...prev,
                    [stateName]: !prev[stateName]
                  }));
                };

                return (
                  <div 
                    key={item.stateName} 
                    className="glass rounded-3xl border border-white/5 overflow-hidden transition-all duration-300"
                  >
                    {/* State Accordion Header */}
                    <button
                      onClick={() => toggleState(item.stateName)}
                      className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-2xl text-primary-start">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <h3 className="text-white text-lg font-bold tracking-tight">
                            {item.formattedName}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-400">
                            <span>State/UT</span>
                            {activeCities.length > 0 && (
                              <span className="flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary-start inline-block"></span>
                                {activeCities.length} Cities
                              </span>
                            )}
                            {activeVillages.length > 0 && (
                              <span className="flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block"></span>
                                {activeVillages.length} Villages
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="text-slate-400">
                        {expanded ? (
                          <span className="text-xl font-bold p-1 bg-white/5 rounded-lg inline-block w-8 text-center">&#8722;</span>
                        ) : (
                          <span className="text-xl font-bold p-1 bg-white/5 rounded-lg inline-block w-8 text-center">&#43;</span>
                        )}
                      </div>
                    </button>

                    {/* State Content Body */}
                    {expanded && (
                      <div className="border-t border-white/5 bg-black/20 p-6 space-y-6">
                        {/* 1. State Level Main SEO Paths */}
                        <div>
                          <span className="block text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">
                            {item.formattedName} State Core Directory
                          </span>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <Link 
                              to={`/mushroom-farming-${item.slug}`} 
                              className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/10 border border-transparent transition-all group"
                            >
                              <span className="text-[11px] sm:text-xs text-slate-300 font-medium flex items-center gap-2 truncate">
                                <Sprout size={14} className="text-primary-start flex-shrink-0" />
                                Farming Hub
                              </span>
                              <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </Link>
                            <Link 
                              to={`/mushroom-training-${item.slug}`} 
                              className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/10 border border-transparent transition-all group"
                            >
                              <span className="text-[11px] sm:text-xs text-slate-300 font-medium flex items-center gap-2 truncate">
                                <BookOpen size={14} className="text-primary-start flex-shrink-0" />
                                Certified Course
                              </span>
                              <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </Link>
                            <Link 
                              to={`/mushroom-franchise-${item.slug}`} 
                              className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/10 border border-transparent transition-all group"
                            >
                              <span className="text-[11px] sm:text-xs text-slate-300 font-medium flex items-center gap-2 truncate">
                                <Building size={14} className="text-primary-start flex-shrink-0" />
                                Franchise Models
                              </span>
                              <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </Link>
                            <Link 
                              to={`/careers-${item.slug}`} 
                              className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/10 border border-transparent transition-all group"
                            >
                              <span className="text-[11px] sm:text-xs text-slate-300 font-medium flex items-center gap-2 truncate">
                                <Briefcase size={14} className="text-primary-start flex-shrink-0" />
                                Farming Jobs
                              </span>
                              <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </Link>
                          </div>
                        </div>

                        {/* 2. Cities in this State */}
                        {activeCities.length > 0 && (
                          <div className="space-y-3">
                            <span className="block text-xs uppercase tracking-widest font-bold text-slate-500">
                              Registered Cities / Districts
                            </span>
                            <div className="grid md:grid-cols-2 gap-4">
                              {activeCities.map(city => {
                                return (
                                  <div 
                                    key={city.rawName} 
                                    className="p-4 rounded-2xl border bg-white/5 border-white/5 flex flex-col justify-between"
                                  >
                                    <div className="flex items-center justify-between mb-3">
                                      <span className="text-sm font-bold text-white flex items-center gap-2">
                                        <MapPin size={14} className="text-slate-400" />
                                        {city.formattedName} 
                                      </span>
                                      <span className="text-[9px] bg-white/5 text-slate-400 px-2 py-0.5 rounded-full uppercase font-medium">City</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                      <Link 
                                        to={`/mushroom-farming-${city.slug}`}
                                        className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium flex items-center gap-1.5 transition-colors truncate"
                                      >
                                        <Sprout size={10} className="text-primary-start" />
                                        Farming
                                      </Link>
                                      <Link 
                                        to={`/mushroom-training-${city.slug}`}
                                        className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium flex items-center gap-1.5 transition-colors truncate"
                                      >
                                        <BookOpen size={10} className="text-primary-start" />
                                        Training
                                      </Link>
                                      <Link 
                                        to={`/mushroom-franchise-${city.slug}`}
                                        className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium flex items-center gap-1.5 transition-colors truncate"
                                      >
                                        <Building size={10} className="text-primary-start" />
                                        Franchise
                                      </Link>
                                      <Link 
                                        to={`/careers-${city.slug}`}
                                        className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium flex items-center gap-1.5 transition-colors truncate"
                                      >
                                        <Briefcase size={10} className="text-primary-start" />
                                        Jobs Info
                                      </Link>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* 3. Villages in this State */}
                        {activeVillages.length > 0 && (
                          <div className="space-y-3">
                            <span className="block text-xs uppercase tracking-widest font-bold text-slate-500">
                              Registered Villages
                            </span>
                            <div className="grid md:grid-cols-2 gap-4">
                              {activeVillages.map(village => (
                                <div 
                                  key={village.rawName} 
                                  className="p-4 rounded-2xl bg-white/10 border border-white/5 flex flex-col justify-between"
                                >
                                  <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-bold text-white flex items-center gap-2">
                                      <MapPin size={14} className="text-slate-400" />
                                      {village.formattedName}
                                    </span>
                                    <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full uppercase font-medium">Village</span>
                                  </div>

                                  <div className="grid grid-cols-2 gap-2">
                                    <Link 
                                      to={`/mushroom-farming-${village.slug}`}
                                      className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium flex items-center gap-1.5 transition-colors truncate"
                                    >
                                      <Sprout size={10} className="text-primary-start" />
                                      Farming
                                    </Link>
                                    <Link 
                                      to={`/mushroom-training-${village.slug}`}
                                      className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium flex items-center gap-1.5 transition-colors truncate"
                                    >
                                      <BookOpen size={10} className="text-primary-start" />
                                      Training
                                    </Link>
                                    <Link 
                                      to={`/mushroom-franchise-${village.slug}`}
                                      className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium flex items-center gap-1.5 transition-colors truncate"
                                    >
                                      <Building size={10} className="text-primary-start" />
                                      Franchise
                                    </Link>
                                    <Link 
                                      to={`/careers-${village.slug}`}
                                      className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium flex items-center gap-1.5 transition-colors truncate"
                                    >
                                      <Briefcase size={10} className="text-primary-start" />
                                      Jobs Info
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {filteredGroupedStates.length === 0 && (
              <div className="text-center py-20 text-slate-500 text-sm">
                No location states match your search query or filter. Try typing another city or state!
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
