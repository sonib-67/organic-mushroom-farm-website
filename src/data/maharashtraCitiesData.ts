export interface MaharasthraCityData {
  areas: string[];
  markets: string[];
  climate: string;
  agri: string[];
  nearby: string[];
  midc: string[];
}

export const MH_CITIES_DATA: Record<string, MaharasthraCityData> = {
  "mumbai": {
    areas: ["Andheri", "Dadar", "Borivali", "Goregaon", "Malad"],
    markets: ["Vashi APMC", "Dadar Phool Mandi", "Byculla Market", "Crawford Market"],
    climate: "Humid coastal climate (दमट हवामान)",
    agri: ["Urban vertical farming", "Terrace setups"],
    nearby: ["Navi Mumbai", "Thane", "Palghar", "Alibaug"],
    midc: ["Andheri MIDC", "Marol MIDC", "Seepz"]
  },
  "nagpur": {
    areas: ["Dharampeth", "Sitabuldi", "Manish Nagar", "Wardhaman Nagar"],
    markets: ["Kalamna Market", "Cotton Market", "Mahatma Phule Market"],
    climate: "Extreme hot summers and moderate winters (उष्ण आणि कोरडे)",
    agri: ["Cotton residue", "Orange orchards waste", "Soybean straw"],
    nearby: ["Wardha", "Bhandara", "Amravati", "Ramtek"],
    midc: ["Hingna MIDC", "Butibori MIDC", "MIHAN"]
  },
  "nashik": {
    areas: ["Panchavati", "Indira Nagar", "CIDCO", "Satpur", "Ambad"],
    markets: ["Pimpalgaon APMC", "Lasalgaon Market", "Nashik Krushi Utpann Bazar Samiti"],
    climate: "Pleasant moderate climate (समशीतोष्ण हवामान)",
    agri: ["Grape waste", "Onion dry stalks", "Wheat straw"],
    nearby: ["Ozar", "Trimbakeshwar", "Sinnar", "Igatpuri"],
    midc: ["Satpur MIDC", "Ambad MIDC", "Sinnar MIDC"]
  },
  "aurangabad": {
    areas: ["CIDCO", "Waluj", "Chhatrapati Sambhajinagar", "Garkheda"],
    markets: ["Jadhavwadi APMC", "Shahgunj Market", "Gulmandi"],
    climate: "Semi-arid dry climate (कोरडे हवामान)",
    agri: ["Cotton stalks", "Maize residue", "Bajra straw"],
    nearby: ["Jalna", "Paithan", "Vaijapur", "Gangapur"],
    midc: ["Waluj MIDC", "Chikalthana MIDC", "Shendra MIDC"]
  },
  "pune": {
    areas: ["Kothrud", "Hadapsar", "Wakad", "Baner", "Hinjewadi"],
    markets: ["Gultekdi APMC", "Market Yard Pune", "Khadki Bazar"],
    climate: "Pleasant Deccan plateau climate (आल्हाददायक हवामान)",
    agri: ["Sugarcane bagasse", "Wheat straw", "Urban agro-waste"],
    nearby: ["Pimpri-Chinchwad", "Saswad", "Shirur", "Baramati"],
    midc: ["Bhosari MIDC", "Chakan MIDC", "Talawade IT Park"]
  },
  "solapur": {
    areas: ["Kumbhari", "Jule Solapur", "Bhavani Peth", "Sadar Bazar"],
    markets: ["Solapur APMC", "Market Yard Solapur"],
    climate: "Hot and dry (अति उष्ण आणि कोरडे)",
    agri: ["Jowar stalks (कडबा)", "Sugarcane trash", "Tur dal waste"],
    nearby: ["Mohol", "Akkalkot", "Pandharpur", "Tuljapur"],
    midc: ["Chincholi MIDC", "Akkalkot Road MIDC"]
  },
  "amravati": {
    areas: ["Raja Peth", "Camp", "Rajapeth", "Sai Nagar"],
    markets: ["Amravati APMC", "Cotton Market", "Itwara Bazar"],
    climate: "Tropical wet and dry (उष्णकटिबंधीय)",
    agri: ["Cotton stalks", "Soybean husk", "Tur stalks"],
    nearby: ["Badnera", "Achalpur", "Morshi", "Chandur"],
    midc: ["Nandgaon Peth MIDC", "Amravati MIDC"]
  },
  "kolhapur": {
    areas: ["Rajarampuri", "Tarabai Park", "Shahupuri", "Shivaji Peth"],
    markets: ["Kolhapur APMC", "Shahumil Market", "Laxmipuri Market"],
    climate: "Moderate with heavy rainfall (समशीतोष्ण आणि पर्जन्यमान)",
    agri: ["Sugarcane bagasse and trash", "Paddy straw (भात पेंढा)"],
    nearby: ["Sangli", "Ichalkaranji", "Karveer", "Panhala"],
    midc: ["Shiroli MIDC", "Gokul Shirgaon MIDC", "Kagal-Hatkanangale MIDC"]
  },
  "nanded": {
    areas: ["Vazirabad", "Shivaji Nagar", "Cidco", "Taroda"],
    markets: ["Nanded APMC", "Mondha Market"],
    climate: "Hot and dry (उष्ण आणि कोरडे)",
    agri: ["Cotton residue", "Soybean stalks", "Sorghum straw"],
    nearby: ["Hingoli", "Parbhani", "Loha", "Mudkhed"],
    midc: ["Krushnur MIDC", "Nanded MIDC"]
  },
  "sangli": {
    areas: ["Vishrambag", "Kupwad", "Miraj", "Sangliwadi"],
    markets: ["Sangli APMC", "Turmeric City Market", "Miraj Market"],
    climate: "Dry and arid (कोरडे आणि उष्ण)",
    agri: ["Sugarcane trash", "Turmeric dry leaves", "Soybean residue"],
    nearby: ["Miraj", "Kolhapur", "Islampur", "Tasgaon"],
    midc: ["Kupwad MIDC", "Miraj MIDC"]
  },
  "malegaon": {
    areas: ["Camp", "Nayapura", "Sangameshwar", "Ravalgaon"],
    markets: ["Malegaon APMC", "Krushi Utpann Bazar Samiti"],
    climate: "Hot and dry (उष्ण हवामान)",
    agri: ["Bajra stalks", "Cotton residue", "Maize straw"],
    nearby: ["Dhule", "Manmad", "Satana", "Nandgaon"],
    midc: ["Malegaon MIDC"]
  },
  "jalgaon": {
    areas: ["M.J. College Area", "Pimprala", "Mehrun", "Ganesh Colony"],
    markets: ["Jalgaon APMC", "Kanda Batata Market", "Cotton Market"],
    climate: "Extremely hot (अति उष्ण हवामान)",
    agri: ["Banana plant waste", "Cotton stalks", "Jowar stalks"],
    nearby: ["Bhusawal", "Pachora", "Erandol", "Amalner"],
    midc: ["Jalgaon MIDC", "Ajanta Road MIDC"]
  },
  "akola": {
    areas: ["Ramdaspeth", "Jatharpeth", "Khadki", "Murtizapur Road"],
    markets: ["Akola APMC", "Cotton Market"],
    climate: "Tropical savannah (उष्ण कटिबंधीय कोरडे)",
    agri: ["Cotton residue", "Soybean husk", "Tur dal waste"],
    nearby: ["Washim", "Amravati", "Balapur", "Akot"],
    midc: ["Akola MIDC", "Shivapur MIDC"]
  },
  "latur": {
    areas: ["Ausa Road", "Shivaji Nagar", "Moti Nagar", "Vivekanand Chowk"],
    markets: ["Latur APMC", "Gunj Golai Market"],
    climate: "Dry and hot (उष्ण आणि कोरडे)",
    agri: ["Soybean straw", "Tur stalks", "Sugarcane trash"],
    nearby: ["Osmanabad", "Ausa", "Udgir", "Nilanga"],
    midc: ["Latur MIDC", "Additional Latur MIDC"]
  },
  "dhule": {
    areas: ["Deopur", "Sakri Road", "Agra Road", "Wadi Bhokar"],
    markets: ["Dhule APMC", "Krushi Bazar Samiti"],
    climate: "Hot and dry (उष्ण हवामान)",
    agri: ["Cotton residue", "Bajra straw", "Groundnut shells"],
    nearby: ["Amalner", "Shirpur", "Malegaon", "Nandurbar"],
    midc: ["Awadhan MIDC", "Dhule MIDC"]
  },
  "ahmednagar": {
    areas: ["Savedi", "Bhingar", "Kedgaon", "Pipeline Road"],
    markets: ["Ahmednagar APMC", "Market Yard"],
    climate: "Dry climate (कोरडे हवामान)",
    agri: ["Sugarcane bagasse", "Jowar stalks", "Wheat straw"],
    nearby: ["Rahuri", "Shrirampur", "Parner", "Jamkhed"],
    midc: ["Supra MIDC", "Ahmednagar MIDC", "Nagapur MIDC"]
  },
  "chandrapur": {
    areas: ["Bapat Nagar", "Ramnagar", "Tukum", "Jatpura"],
    markets: ["Chandrapur APMC", "Krushi Bazar"],
    climate: "Hot and humid (उष्ण आणि दमट)",
    agri: ["Paddy straw (भात पेंढा)", "Cotton residue", "Forest organic waste"],
    nearby: ["Bhadravati", "Ballarpur", "Warora", "Gadchiroli"],
    midc: ["Tadali MIDC", "Chandrapur MIDC"]
  },
  "parbhani": {
    areas: ["Shivaji Nagar", "Basmat Road", "Jintur Road", "Kalyan Nagar"],
    markets: ["Parbhani APMC", "Mondha Market"],
    climate: "Hot and dry (उष्ण आणि कोरडे)",
    agri: ["Soybean husk", "Cotton stalks", "Tur residue"],
    nearby: ["Hingoli", "Jintur", "Pathri", "Nanded"],
    midc: ["Parbhani MIDC"]
  },
  "ichalkaranji": {
    areas: ["Shivaji Nagar", "Shahapur", "Gavbhag", "Kabnoor"],
    markets: ["Ichalkaranji APMC", "Raviwar Peth Market"],
    climate: "Moderate (समशीतोष्ण)",
    agri: ["Sugarcane bagasse", "Textile organic waste", "Soybean straw"],
    nearby: ["Kolhapur", "Hatkanangale", "Kurundwad", "Jaysingpur"],
    midc: ["Parvati Industrial Estate", "DKTE area"]
  },
  "jalna": {
    areas: ["Khadkeshwar", "Sadar Bazar", "Ambad Road", "Devalgaon Raja Road"],
    markets: ["Jalna APMC", "Mondha Market", "Seed Market"],
    climate: "Semi-arid (निम-कोरडे)",
    agri: ["Cotton stalks", "Sweet lime (Mosambi) waste", "Bajra straw"],
    nearby: ["Aurangabad", "Ambad", "Partur", "Bhokardan"],
    midc: ["Jalna MIDC", "Additional Jalna MIDC"]
  },
  "satara": {
    areas: ["Karanje", "Sadarbazar", "Khandala", "Wai"],
    markets: ["Satara APMC", "Market Yard Satara"],
    climate: "Pleasant (आल्हाददायक)",
    agri: ["Sugarcane trash", "Wheat straw", "Turmeric waste"],
    nearby: ["Karad", "Wai", "Panchgani", "Phaltan"],
    midc: ["Satara MIDC", "Shirwal MIDC"]
  },
  "ratnagiri": {
    areas: ["Maruti Mandir", "Kuwarbav", "Salvi Stop", "Pawas"],
    markets: ["Ratnagiri APMC", "Bhatye Market"],
    climate: "Tropical coastal (किनारपट्टीचे दमट हवामान)",
    agri: ["Paddy straw (भात पेंढा)", "Mango dry leaves", "Coconut coir"],
    nearby: ["Lanja", "Rajapur", "Chiplun", "Guhagar"],
    midc: ["Ratnagiri MIDC", "Mirjole MIDC"]
  },
  "shirdi": {
    areas: ["Nagar-Manmad Road", "Rui", "Nimgaon", "Pimpalwadi"],
    markets: ["Shirdi Market", "Rahata APMC"],
    climate: "Dry (कोरडे)",
    agri: ["Sugarcane bagasse", "Wheat straw", "Pomegranate waste"],
    nearby: ["Rahata", "Kopargaon", "Sangamner", "Sinnar"],
    midc: ["Shrirampur MIDC", "Sinnar MIDC"]
  }
};

export const DEFAULT_MH_CITY: MaharasthraCityData = {
  areas: ["City Center", "Main Road", "Station Road", "Shivaji Chowk"],
  markets: ["Local APMC Market", "Main Krushi Utpann Bazar Samiti", "Phule Market"],
  climate: "Varying Maharashtra climate (महाराष्ट्रातील हवामान)",
  agri: ["Wheat straw (गव्हाचा भुसा)", "Soybean husk (सोयाबीन कुटार)", "Sugarcane trash (उसाचे पाचट)"],
  nearby: ["Nearby Talukas", "Surrounding Villages", "Adjacent Districts"],
  midc: ["Local MIDC Area", "Agro Processing Zone"]
};

export function getMhCityData(citySlug: string): MaharasthraCityData {
  const normalized = citySlug.toLowerCase().replace(/-/g, ' ');
  for (const [key, val] of Object.entries(MH_CITIES_DATA)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return val;
    }
  }
  return DEFAULT_MH_CITY;
}
