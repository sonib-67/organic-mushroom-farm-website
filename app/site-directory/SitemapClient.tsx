"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, ArrowRight, Search, 
  Sprout, Award, Briefcase, Building, BookOpen, 
  HelpCircle, Image, List, Shield, Info, Phone,
  FileText, X, Printer, Download, MessageCircle
} from "lucide-react";
import { STATES, CITIES, VILLAGES } from "../data/locationsData";

// Helper functions based on original React Vite logic
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
  if (["chandigarh", "mohali", "panchkula", "zirakpur", "kharar"].includes(c)) return "Chandigarh";
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
  if (["manimajra", "dhanas", "burail", "mauli jagran", "maloya"].includes(c)) return "Chandigarh";
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

interface LocationItem {
  rawName: string;
  formattedName: string;
  slug: string;
  type: 'State' | 'City' | 'Village';
}

export default function SitemapClient() {
  const [activeTab, setActiveTab] = useState<'main' | 'locations'>('main');
  const [searchQuery, setSearchQuery] = useState('');
  const [locFilter, setLocFilter] = useState<'all' | 'State' | 'City' | 'Village'>('all');
  const [expandedStates, setExpandedStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    { name: "Ahmedabad Mushroom Farming Training Center", path: "/cities/gujarat/ahmedabad", desc: "Premium mushroom farming training, spawn supply and commercial setup in Ahmedabad, Gujarat." },
    { name: "Surat Mushroom Farming Training Center", path: "/cities/gujarat/surat", desc: "Surat Mushroom Farming complete guide. Learn farm setup, high-yield spawn supply in Gujarat." },
    { name: "Rajkot Mushroom Farming Business for Supermarkets", path: "/cities/gujarat/rajkot", desc: "રાજકોટમાં સુપરમાર્કેટ અને રિટેલ ચેઇન માટે Mushroom Farming Business કેવી રીતે શરૂ કરવો?" },
    { name: "Patna Mushroom Farming Training Center", path: "/cities/bihar/patna", desc: "Patna Mushroom Farming complete guide. Learn mushroom farm setup, high-yield spawn supply in Bihar." },
    { name: "Chandigarh Tricity Mushroom Farming Training Center", path: "/cities/chandigarh", desc: "Chandigarh, Mohali, Panchkula Mushroom Farming complete guide. Learn mushroom farm setup." },
    { name: "Jaipur Mushroom Farming Training Center", path: "/cities/rajasthan/jaipur", desc: "Start a highly profitable mushroom business in Rajasthan with full setup & marketing support." },
    { name: "Bikaner Mushroom Farming, Training, Spawn & Setup", path: "/cities/rajasthan/bikaner", desc: "बीकानेर में मशरूम फार्म सेटअप, स्पॉन सप्लाई, स्टूडेंट्स और किसानों के लिए ट्रेनिंग।" },
    { name: "Udaipur Mushroom Farming, Training, Spawn & Setup", path: "/cities/rajasthan/udaipur", desc: "उदयपुर में मशरूम फार्म सेटअप, स्पॉन सप्लाई, होटल व टूरिज्म बिजनेस के लिए ट्रेनिंग।" },
    { name: "Lucknow Mushroom Farming Training Center", path: "/cities/uttar-pradesh/lucknow", desc: "Complete guide on Lucknow Mushroom Farming. Learn mushroom farm setup in Uttar Pradesh." },
    { name: "Kanpur Food Processing and Mushroom Business", path: "/cities/uttar-pradesh/kanpur", desc: "Kanpur में Food Processing और Mushroom Business की नई संभावनाएँ 2026." },
    { name: "Agra Mushroom Farming for Export", path: "/cities/uttar-pradesh/agra", desc: "Mushroom Farming for Export & International Markets in Agra | आगरा से मशरूम एक्सपोर्ट बिजनेस." },
    { name: "Faridabad Industrial Mushroom Farming", path: "/cities/haryana/faridabad", desc: "फरीदाबाद के इंडस्ट्रियल एरिया में Mushroom Farming Business कैसे शुरू करें?" },
    { name: "Indore Mushroom Farming Training Center", path: "/cities/madhya-pradesh/indore", desc: "Indore Mushroom Farming complete guide. Learn mushroom farm setup in Madhya Pradesh." },
    { name: "Bhopal Mushroom Farming Training Center", path: "/cities/madhya-pradesh/bhopal", desc: "Bhopal Mushroom Farming complete guide. Learn mushroom farm setup in Madhya Pradesh." },
    { name: "Nagpur Mushroom Farming Training Center", path: "/cities/maharashtra/nagpur", desc: "Nagpur Mushroom Farming complete guide in Marathi. Learn mushroom farm setup in Maharashtra." },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50 dark:bg-black">
        <div className="absolute top-[5%] left-[10%] w-[350px] h-[350px] bg-green-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-1000" />
        <div className="absolute bottom-[5%] right-[10%] w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <article className="max-w-7xl mx-auto px-4 relative z-10 space-y-6 pb-24">
        
        {/* Header */}
        <header className="text-center space-y-4 mb-8 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[2rem] p-8 shadow-sm">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/50 dark:bg-white/10 border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <List className="w-3 h-3 text-green-600 dark:text-green-400" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Master Index</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Directory</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 font-medium">
            Complete architectural mapping of the Organic Mushrooms Farm platform. Navigate to <Link href="/" className="text-green-600 font-bold hover:underline">main hubs</Link>, <Link href="/services" className="text-green-600 font-bold hover:underline">services</Link>, or explore <Link href="/states" className="text-green-600 font-bold hover:underline">local state directories</Link>.
          </p>
          
          {/* Tab Controls */}
          <div className="flex justify-center gap-2 pt-4">
            <button 
              onClick={() => setActiveTab('main')}
              className={`px-6 py-2 rounded-full text-[10px] md:text-[11px] font-bold transition-all border ${activeTab === 'main' ? 'bg-green-600 border-green-600 text-white shadow-md' : 'bg-white/50 dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/10'}`}
            >
              Main Application Maps
            </button>
            <button 
              onClick={() => setActiveTab('locations')}
              className={`px-6 py-2 rounded-full text-[10px] md:text-[11px] font-bold transition-all border flex items-center gap-2 ${activeTab === 'locations' ? 'bg-green-600 border-green-600 text-white shadow-md' : 'bg-white/50 dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/10'}`}
            >
              <MapPin className="w-3 h-3" /> Location Architectures
            </button>
          </div>
        </header>

        {activeTab === 'main' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Primary Infrastructure Links */}
            <section className="bg-white/50 dark:bg-white/5 backdrop-blur-md border dark:border-white/10 border-black/10 rounded-[1.5rem] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b dark:border-white/10 border-black/10">
                <Briefcase className="w-4 h-4 text-green-600 dark:text-green-400" />
                <h2 className="text-[14px] md:text-[16px] font-bold dark:text-white text-slate-900">Primary Infrastructure & Hubs</h2>
              </div>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {mainHubs.map((link, i) => (
                  <Link href={link.path} key={i} className="group block p-3 rounded-xl bg-white/40 dark:bg-white/5 border border-transparent hover:border-green-500/30 hover:bg-white dark:hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] md:text-[12px] font-bold dark:text-white text-slate-900 group-hover:text-green-600 dark:group-hover:text-green-400">{link.name}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <span className="text-[9px] md:text-[10px] dark:text-slate-400 text-slate-600 block line-clamp-1">{link.desc}</span>
                    <span className="text-[8px] font-mono text-green-600 dark:text-green-400 mt-1 block opacity-0 group-hover:opacity-100 transition-opacity">{link.path}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Sub-services and Articles */}
            <div className="space-y-6">
              <section className="bg-white/50 dark:bg-white/5 backdrop-blur-md border dark:border-white/10 border-black/10 rounded-[1.5rem] p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b dark:border-white/10 border-black/10">
                  <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h2 className="text-[14px] md:text-[16px] font-bold dark:text-white text-slate-900">Services & SOPs</h2>
                </div>
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {subServicesAndSOPs.map((link, i) => (
                    <Link href={link.path} key={i} className="group flex items-center justify-between p-2.5 rounded-lg bg-white/40 dark:bg-white/5 border border-transparent hover:border-green-500/20 hover:bg-white dark:hover:bg-white/10 transition-all">
                      <div>
                        <span className="text-[10px] md:text-[11px] font-bold dark:text-white text-slate-800 group-hover:text-green-600 block">{link.name}</span>
                        <span className="text-[8px] md:text-[9px] dark:text-slate-500 text-slate-500 line-clamp-1">{link.desc}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </section>

              <section className="bg-white/50 dark:bg-white/5 backdrop-blur-md border dark:border-white/10 border-black/10 rounded-[1.5rem] p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b dark:border-white/10 border-black/10">
                  <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h2 className="text-[14px] md:text-[16px] font-bold dark:text-white text-slate-900">Top Educational Articles</h2>
                </div>
                <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                  {educationalArticles.map((article, i) => (
                    <Link href={article.path} key={i} className="group block p-2.5 rounded-lg bg-white/40 dark:bg-white/5 border border-transparent hover:border-green-500/20 hover:bg-white dark:hover:bg-white/10 transition-all">
                      <span className="text-[10px] md:text-[11px] font-bold dark:text-white text-slate-800 group-hover:text-green-600 block mb-0.5">{article.name}</span>
                      <span className="text-[8px] md:text-[9px] font-mono text-green-600 dark:text-green-500">{article.path}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        )}

        {activeTab === 'locations' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Search and Filters */}
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md border dark:border-white/10 border-black/10 rounded-[1.5rem] p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full md:flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search states, cities, or villages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-black/50 border dark:border-white/10 border-black/10 rounded-xl text-[11px] text-slate-900 dark:text-white focus:outline-none focus:border-green-500 transition-colors shadow-inner"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                {(['all', 'State', 'City', 'Village'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setLocFilter(filter)}
                    className={`px-4 py-1.5 rounded-lg text-[9px] md:text-[10px] font-bold whitespace-nowrap transition-colors border ${locFilter === filter ? 'bg-green-600 border-green-600 text-white' : 'bg-white/50 dark:bg-white/10 border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/20'}`}
                  >
                    {filter === 'all' ? 'All Types' : filter + 's'}
                  </button>
                ))}
              </div>
            </div>

            {/* State Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence>
                {filteredGroupedStates.map((stateGroup) => {
                  const isExpanded = expandedStates[stateGroup.slug] || searchQuery.length > 0;
                  
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={stateGroup.slug}
                      className={`bg-white/50 dark:bg-white/5 backdrop-blur-md border rounded-[1.2rem] overflow-hidden transition-all duration-300 shadow-sm ${stateGroup.isStateMatched && searchQuery ? 'border-green-500/50 ring-1 ring-green-500/20' : 'border-black/10 dark:border-white/10'}`}
                    >
                      <button
                        onClick={() => setExpandedStates(prev => ({ ...prev, [stateGroup.slug]: !prev[stateGroup.slug] }))}
                        className="w-full flex items-center justify-between p-4 bg-white/40 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-[10px]">
                            {stateGroup.formattedName.charAt(0)}
                          </div>
                          <div className="text-left">
                            <h3 className="text-[12px] md:text-[13px] font-bold text-slate-900 dark:text-white">
                              {stateGroup.formattedName}
                            </h3>
                            <div className="flex gap-2 text-[9px] text-slate-500 mt-0.5 font-medium">
                              {stateGroup.matchedCities.length > 0 && <span>{stateGroup.matchedCities.length} Cities</span>}
                              {stateGroup.matchedVillages.length > 0 && <span>{stateGroup.matchedVillages.length} Villages</span>}
                              {stateGroup.matchedCities.length === 0 && stateGroup.matchedVillages.length === 0 && <span>State Hub Only</span>}
                            </div>
                          </div>
                        </div>
                        <Link href={`/states/${stateGroup.slug}`} onClick={(e) => e.stopPropagation()} className="px-3 py-1 bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400 rounded-lg text-[9px] font-bold flex items-center gap-1 transition-colors">
                          View <ArrowRight className="w-3 h-3" />
                        </Link>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (stateGroup.matchedCities.length > 0 || stateGroup.matchedVillages.length > 0) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="border-t border-black/5 dark:border-white/5"
                          >
                            <div className="p-3 max-h-[300px] overflow-y-auto custom-scrollbar bg-slate-50/50 dark:bg-black/20">
                              
                              {stateGroup.matchedCities.length > 0 && (
                                <div className="mb-4">
                                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-2">Commercial City Hubs</h4>
                                  <div className="grid grid-cols-1 gap-1">
                                    {stateGroup.matchedCities.map(city => (
                                      <Link href={`/cities/${stateGroup.slug}/${city.slug}`} key={city.slug} className="flex items-center justify-between p-2 rounded-md hover:bg-white dark:hover:bg-white/5 transition-colors group">
                                        <span className="text-[10px] md:text-[11px] text-slate-700 dark:text-slate-300 font-medium group-hover:text-green-600 dark:group-hover:text-green-400">{city.formattedName}</span>
                                        <ArrowRight className="w-3 h-3 text-slate-300 dark:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {stateGroup.matchedVillages.length > 0 && (
                                <div>
                                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-2">Rural & Block Level</h4>
                                  <div className="flex flex-wrap gap-1.5 px-1">
                                    {stateGroup.matchedVillages.map(village => (
                                      <Link href={`/cities/${stateGroup.slug}/${village.slug}`} key={village.slug} className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 text-[9px] text-slate-600 dark:text-slate-400 hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                        {village.formattedName}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {filteredGroupedStates.length === 0 && (
                <div className="col-span-full py-12 text-center bg-white/50 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[1.5rem]">
                   <Search className="w-8 h-8 text-slate-400 mx-auto mb-3 opacity-50" />
                   <p className="text-[11px] md:text-[12px] text-slate-500 dark:text-slate-400 font-medium">No locations found matching "{searchQuery}"</p>
                   <button onClick={() => {setSearchQuery(''); setLocFilter('all');}} className="mt-3 text-[10px] text-green-600 font-bold hover:underline">Clear filters</button>
                </div>
              )}
            </div>
          </motion.div>
        )}

      </article>

      {/* Global CSS for custom scrollbar hidden in module */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.5);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </>
  );
}
