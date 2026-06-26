import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, MapPin, CheckCircle2, TrendingUp, Info, Phone, ArrowLeft, Sprout, 
  ShoppingCart, Award, AlertCircle, HelpCircle, Gift, DollarSign, Calendar, User, 
  Settings, Check, ChevronRight, MessageCircle, Layers, ClipboardList, ShieldAlert,
  Sliders, Star, Users, ExternalLink, Globe, PlayCircle, BookMarked
} from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleUltimateGuideHinglish = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const costMatrix = [
    { type: "Starter (Home Unit)", investment: "₹8,000 – ₹25,000", bags: "200 – 500 bags", suitable: "Beginners, students, home income" },
    { type: "Medium Commercial", investment: "₹50,000 – ₹2,00,000", bags: "1,000 – 2,000 bags", suitable: "Serious growers, side business" },
    { type: "Large / Climate-Controlled", investment: "₹2,00,000 – ₹5,00,000+", bags: "2,000+ bags", suitable: "Full-time commercial farming" }
  ];

  const profitEstimates = [
    { size: "500 bags (Home Unit)", investment: "₹10,000 – ₹25,000", cycle: "40 - 45 din", profit: "₹3,000 – ₹8,000 per cycle" },
    { size: "2,000 bags (Medium)", investment: "₹50,000 – ₹1,00,000", cycle: "40 - 45 din, 6+ cycle/year", profit: "₹20,000 – ₹40,000 per month" },
    { size: "5,000+ bags (Commercial)", investment: "₹2,00,000+", cycle: "Year-round (controlled)", profit: "₹60,000 – ₹1,50,000+ per month" }
  ];

  const statesCoverage = [
    { state: "Madhya Pradesh", cities: "Jabalpur, Bhopal, Indore, Gwalior, Ujjain" },
    { state: "Maharashtra", cities: "Mumbai, Pune, Nagpur, Nashik" },
    { state: "Uttar Pradesh", cities: "Lucknow, Kanpur, Varanasi, Agra, Noida" },
    { state: "Bihar", cities: "Patna, Gaya, Muzaffarpur" },
    { state: "Rajasthan", cities: "Jaipur, Jodhpur, Udaipur, Kota" },
    { state: "Gujarat", cities: "Ahmedabad, Surat, Vadodara, Rajkot" },
    { state: "Karnataka", cities: "Bengaluru, Mysuru, Hubli" },
    { state: "Tamil Nadu", cities: "Chennai, Coimbatore, Madurai" },
    { state: "West Bengal", cities: "Kolkata, Siliguri, Durgapur" },
    { state: "Telangana", cities: "Hyderabad, Warangal" },
    { state: "Andhra Pradesh", cities: "Visakhapatnam, Vijayawada, Guntur" },
    { state: "Punjab", cities: "Ludhiana, Amritsar, Jalandhar" },
    { state: "Haryana", cities: "Gurugram, Faridabad, Panchkula" },
    { state: "Kerala", cities: "Kochi, Thiruvananthapuram, Kozhikode" },
    { state: "Odisha", cities: "Bhubaneswar, Cuttack" },
    { state: "Jharkhand", cities: "Ranchi, Jamshedpur, Dhanbad" },
    { state: "Chhattisgarh", cities: "Raipur, Bilaspur" },
    { state: "Assam", cities: "Guwahati, Dibrugarh" },
    { state: "Himachal Pradesh", cities: "Shimla, Solan" },
    { state: "Uttarakhand", cities: "Dehradun, Haridwar" },
    { state: "Goa", cities: "Panaji, Margao" },
    { state: "Delhi NCR", cities: "New Delhi, Noida, Gurugram, Faridabad" },
    { state: "Jammu & Kashmir / Ladakh", cities: "Srinagar, Jammu, Leh" },
    { state: "North East States", cities: "Tripura, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Arunachal Pradesh (Agartala, Imphal, Shillong, Aizawl, Kohima, Gangtok, Itanagar)" }
  ];

  const globalCoverage = [
    { country: "UAE 🇦🇪", hubs: "Dubai, Abu Dhabi, Sharjah" },
    { country: "UK 🇬🇧", hubs: "London, Birmingham, Manchester" },
    { country: "USA 🇺🇸", hubs: "New York, California, Texas" },
    { country: "Canada 🇨🇦", hubs: "Toronto, Vancouver" },
    { country: "Nepal 🇳🇵", hubs: "Kathmandu, Pokhara" },
    { country: "Bangladesh 🇧🇩", hubs: "Dhaka, Chittagong" }
  ];

  const faqsList = [
    {
      q: "Mushroom farming start karne ke liye kitni jagah chahiye?",
      a: "Sirf 200-500 sq ft ka enclosed, ventilated room ya shed bhi kaafi hai — bade khet ki zaroorat nahi."
    },
    {
      q: "Sabse kam investment mein kaunsi mushroom shuru kar sakte hain?",
      a: "Oyster mushroom (Dhingri) beginners ke liye sabse aasan aur sasti hai — paddy straw par ugayi ja sakti hai aur 40-45 din mein ready ho jaati hai."
    },
    {
      q: "Training online hi kaafi hai ya offline bhi karni chahiye?",
      a: "Online training (₹299) foundation ke liye accha start hai. Agar aap commercial level par jaana chahte hain, to offline hands-on training (Jabalpur) recommended hai."
    },
    {
      q: "Buyback guarantee kaise kaam karti hai?",
      a: "Aap mushroom produce karte hain, aur hum (market rate, quality grade ke hisaab se) wo mushroom kharid lete hain — isse aapki marketing ki tension kam ho jaati hai. Current rate ke liye direct contact karein."
    },
    {
      q: "Medicinal mushroom (Reishi, Cordyceps) ka training bhi milta hai?",
      a: "Haan, local edible mushroom ke sath-sath medicinal mushroom cultivation ki training, spawn aur buyback support bhi available hai."
    },
    {
      q: "Kya aap pan India delivery karte hain?",
      a: "Haan — spawn, dry mushroom aur training material pure India mein deliver hota hai, aur kuch products UAE, UK, USA, Canada, Nepal, Bangladesh tak bhi pahunchte hain."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 dark:bg-[#070707] bg-slate-50 font-sans">
      <SEO 
        title="Mushroom Farming: Complete Guide for Spawn, Training, Setup, and Business in India" 
        description="India's ultimate guide to starting a successful mushroom business: Covers spawn, offline/online training, setup cost margins, buyback guarantee, & city-wise guides."
        keywords="mushroom farming guide, mushroom training program, buy mushroom spawn online, mushroom buyback india, button mushroom setup, organic mushroom farm"
      />

      {/* Header section */}
      <section className="relative overflow-hidden section-padding pb-6">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[5%] left-[10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-emerald-500 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6 hover:underline"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-emerald-500/20 mb-6">
            ✨ COMPLETE EXHAUSTIVE ULTIMATE HINGLISH GUIDE
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
            Mushroom Farming: <span className="gradient-text bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Complete Guide for Spawn, Training, Setup, & Business in India</span>
          </h1>
          <p className="dark:text-slate-300 text-slate-700 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed mb-6">
            Mushroom farming aaj ke time mein India ke sabse tezi se badhne wale agribusiness models mein se ek ban chuka hai. Is ek hi guide mein sab kuch bina faimily technical words ke simple Hinglish mein seekhein! 🍄
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm dark:text-slate-400 text-slate-600 font-medium mb-6">
            <span className="flex items-center gap-1.5"><User size={16} className="text-emerald-500" /> By <strong>Expert Team</strong></span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5"><Calendar size={16} className="text-emerald-500" /> Published: June 22, 2026</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5 font-bold uppercase text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">Read Time: 12 Mins</span>
          </div>
        </div>
      </section>

      {/* Structured Content Container */}
      <section className="max-w-5xl mx-auto px-4 relative z-10 transition-all duration-300">
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 space-y-12 dark:bg-[#0d0d0d] bg-white shadow-xl">
          
          {/* Section 1: Intro Text */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-500 first-letter:mr-3 first-letter:float-left">
              Chahe aap ek student ho, koi farmer ho, ghar baithi housewife ho ya phir naukri chhod ke apna khud ka business start karna chahta ho — mushroom farming ek aisa option hai jisme kam jagah, kam paisa aur kam time mein achha income generate kiya ja sakta hai.
            </p>
            <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed">
              <strong>Organic Mushroom Farm, Jabalpur (Madhya Pradesh)</strong> se hum pure India mein — har state, har shakar, har gaon tak — apni services pahuncha rahe hain. Sath hi humara network UAE, UK, USA, Canada, Nepal aur Bangladesh tak pahunch chuka hai. Is ek hi blog mein hum sab kuchh cover kar rahe hain: local edible mushroom se lekar high value medicinal mushroom tak, online aur offline mushroom training, complete farm setup, turnkey project model, mushroom buyback guarantee, har variety ka mushroom spawn, aur fresh-dry mushroom ka business — sab simple Hinglish mein, bina kisi bhari-bharkam technical jargon ke.
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* 1. Mushroom Farming Kya Hai */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Mushroom Farming Kya Hai aur Yeh Itna Popular Kyun Ho Raha Hai?
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Mushroom ek fungus hai jo mitti mein nahi, balki organic substrate — jaise paddy straw, sawdust, ya compost — par bags ya racks mein ugaya jata hai. Isliye iske liye bade khet ki zaroorat nahi padti. Ek 200-500 sq ft ka kamra, shed ya tarpaulin ke neeche ki jagah bhi kaafi hai shuruaat karne ke liye.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="dark:bg-[#121212] bg-slate-100 p-6 rounded-2xl border dark:border-white/5 border-black/5">
                <h3 className="font-bold text-lg dark:text-white mb-2 flex items-center gap-2"><DollarSign className="text-emerald-500" size={18} /> Kam Investment</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600">Chhoti unit ₹8,000 - ₹25,000 mein bhi shuru ho sakti hai.</p>
              </div>
              <div className="dark:bg-[#121212] bg-slate-100 p-6 rounded-2xl border dark:border-white/5 border-black/5">
                <h3 className="font-bold text-lg dark:text-white mb-2 flex items-center gap-2"><Calendar className="text-emerald-500" size={18} /> Chhota Crop Cycle</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600">Zyada tar varieties 25-45 din mein ready ho jaate hain, matlab saal mein 6-8 cycle nikal sakte hain.</p>
              </div>
              <div className="dark:bg-[#121212] bg-slate-100 p-6 rounded-2xl border dark:border-white/5 border-black/5">
                <h3 className="font-bold text-lg dark:text-white mb-2 flex items-center gap-2"><TrendingUp className="text-emerald-500" size={18} /> Tezi se Badhti Demand</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600">Healthy aur protein-rich diet ki taraf logon ka rujhan badh raha hai, isliye fresh aur dry mushroom dono ki market expand ho rahi hai.</p>
              </div>
              <div className="dark:bg-[#121212] bg-slate-100 p-6 rounded-2xl border dark:border-white/5 border-black/5">
                <h3 className="font-bold text-lg dark:text-white mb-2 flex items-center gap-2"><Award className="text-emerald-500" size={18} /> Government Support & Subsidies</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600">NABARD, MIDH aur state horticulture mission jaise schemes ke through subsidy ki sambhavna rehti hai — apne district horticulture office ya KVK se current scheme zarur check karein.</p>
              </div>
              <div className="dark:bg-[#121212] bg-slate-100 p-6 rounded-2xl border dark:border-white/5 border-black/5 sm:col-span-2">
                <h3 className="font-bold text-lg dark:text-white mb-2 flex items-center gap-2"><Layers className="text-emerald-500" size={18} /> Multiple Income Streams</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600">Fresh mushroom, dry mushroom, spawn (beej), aur value added products jaise mushroom powder — ek hi unit se kayi tarah ki kamai.</p>
              </div>
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* 2. Mushroom Spawn */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Mushroom Spawn — Local Edible Mushroom Ki Sabhi Varieties
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6 bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/15">
              <strong>Spawn matlab mushroom ka 'beej'</strong> — aur mushroom farming ki success 70% spawn ki quality par depend karti hai. Hum lab-tested, high-yield spawn supply karte hain, pan India delivery ke sath. Neeche sabse zyada demand wali varieties di gayi hain:
            </p>

            <div className="space-y-6">
              <div className="border dark:border-white/5 border-slate-200 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2 text-emerald-500 flex items-center gap-2">🕹️ Button Mushroom Spawn</h3>
                <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed">
                  India ki sabse popular aur sabse zyada bika jaane wali mushroom. Curry, pizza, soup aur salad mein use hoti hai. Isko 14-18°C ke controlled temperature ki zaroorat hoti hai, isliye zyada tar yeh climate-controlled rooms ya thande season mein ugayi jaati hai. <strong>Cycle: 3 hafte (casing ke baad).</strong>
                </p>
              </div>

              <div className="border dark:border-white/5 border-slate-200 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2 text-emerald-500 flex items-center gap-2">🌸 Oyster Mushroom Spawn (Dhingri)</h3>
                <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed">
                  Beginners ke liye sabse aasan variety. Paddy straw par sasti lagat mein ugayi jaa sakti hai, 20-30°C tak ka wide temperature range tolerate kar leti hai aur sirf 40-45 din mein ready ho jaati hai. Choti galti maaf karne wali (forgiving) variety hone ki wajah se pehli baar shuru karne walon ke liye best hai.
                </p>
              </div>

              <div className="border dark:border-white/5 border-slate-200 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2 text-emerald-500 flex items-center gap-2">🥛 Milky Mushroom Spawn (Dudh Chhatri)</h3>
                <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed">
                  South aur Central India ke garam-humid climate ke liye perfect. Iski shelf life dusri varieties se lambi hoti hai, isliye transport aur marketing aasan ho jaata hai. Temperature changes ke prati bhi kam sensitive hai.
                </p>
              </div>

              <div className="border dark:border-white/5 border-slate-200 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2 text-emerald-500 flex items-center gap-2">🌾 Paddy Straw Mushroom Spawn</h3>
                <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed">
                  Garam climate ka traditional mushroom, dhaan ki paraali (rice straw) par ugaya jata hai. Eastern aur Southern India ke kisanon mein bahut popular.
                </p>
              </div>

              <div className="border dark:border-white/5 border-slate-200 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2 text-emerald-500 flex items-center gap-2">🥢 Shiitake Mushroom Spawn</h3>
                <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed">
                  Premium variety, thoda technical process lekin market mein higher price milta hai. Asian cuisine aur specialty stores mein demand badh rahi hai — export ke liye bhi accha option.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm italic dark:text-slate-400 text-slate-500 bg-slate-100 dark:bg-white/5 p-4 rounded-xl text-center">
              Sabhi spawn certified labs se prepare kiye jaate hain aur pure India mein courier ke through bhejen jaate hain — order karne ke liye website <a href="https://organicmushroomfarm.shop" target="_blank" rel="noreferrer" className="text-emerald-500 font-bold underline">organicmushroomfarm.shop</a> par visit karein ya seedha call/WhatsApp karein.
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* 3. Medicinal Mushroom Farming */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Medicinal Mushroom Farming — High Value, High Demand Segment
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Local edible mushroom ke sath-sath medicinal mushroom ka segment bhi tezi se grow kar raha hai. Reishi, Cordyceps aur Lion's Mane jaise mushroom traditional Chinese, Tibetan aur Ayurvedic medicine systems mein centuries se use hote rahe hain, aur ab modern wellness industry — supplements, extracts, mushroom coffee — mein bhi inki demand bahut zyada hai.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="dark:bg-[#121212] bg-slate-100 p-6 rounded-2xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-lg text-emerald-400 mb-3">Reishi / Ganoderma</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed mb-4">
                    Duniya bhar mein 'immortality mushroom' ke naam se jaani jaati hai. Yeh sabse zyada commercially valuable medicinal mushroom mein se ek hai — market price range generally ₹3,000-₹5,000 per kg tak ja sakta hai, quality aur processing ke hisaab se. Traditional medicine mein immunity aur overall wellness support ke liye use hoti hai.
                  </p>
                </div>
                <span className="text-xs font-bold text-center bg-emerald-500/10 text-emerald-400 py-1.5 rounded border border-emerald-500/20">Market Price: ₹3,000-₹5,000/kg</span>
              </div>

              <div className="dark:bg-[#121212] bg-slate-100 p-6 rounded-2xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-lg text-emerald-400 mb-3">Cordyceps Mushroom</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed mb-4">
                    Isko 'soft gold' bhi kaha jaata hai. Stamina aur energy ke liye traditional Tibetan aur Ayurvedic texts mein iska zikr milta hai. Cultivation thoda technical hai lekin per-kg return dusri mushrooms ke mukable kaafi zyada ho sakta hai, isliye serious growers ke liye yeh ek premium opportunity hai.
                  </p>
                </div>
                <span className="text-xs font-bold text-center bg-emerald-500/10 text-emerald-400 py-1.5 rounded border border-emerald-500/20">Premium Segment</span>
              </div>

              <div className="dark:bg-[#121212] bg-slate-100 p-6 rounded-2xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-lg text-emerald-400 mb-3">Lion's Mane</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed mb-4">
                    Focus aur brain-health wellness segment mein iski demand tezi se badh rahi hai — especially functional food aur coffee products mein. Cultivation oyster mushroom jaisi hi simple substrate technique se ho sakti hai.
                  </p>
                </div>
                <span className="text-xs font-bold text-center bg-emerald-500/10 text-emerald-400 py-1.5 rounded border border-emerald-500/20">Brain & Focus Segment</span>
              </div>
            </div>

            <p className="mt-6 text-xs dark:text-slate-400 text-slate-500 bg-amber-500/5 p-4 rounded-xl border border-amber-500/20 flex gap-2">
              <AlertCircle size={18} className="text-amber-500 shrink-0" />
              <span><strong>Note:</strong> Yeh content general wellness jaankari ke liye hai, koi medical claim nahi hai — koi bhi health-related decision lene se pehle qualified doctor se sampark karein. Hum medicinal mushroom ke liye bhi spawn, training aur buyback support dete hain.</span>
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* 4. Mushroom Farming Training */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              Mushroom Farming Training — Online aur Offline, Beginner se Expert Tak
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Sabse zyada beginners isi wajah se fail hote hain ki unhone bina training ke seedha farming shuru kar di. Contamination aur humidity control jaise basic mistakes hi sabse zyada nuksan karti hain. Isliye hum training ko sabse pehla aur sabse zaroori step maante hain.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border dark:border-white/5 border-slate-200 p-8 rounded-3xl dark:bg-transparent bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">Fast-track Option</span>
                  <h3 className="font-black text-2xl text-slate-900 dark:text-white mt-4 mb-2">Online Training</h3>
                  <div className="text-xl font-extrabold text-emerald-500 mb-6">Fee: ₹299 Only</div>
                  
                  <ul className="space-y-3 mb-8 text-sm dark:text-slate-300 text-slate-600">
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Ghar baithe, mobile ya laptop se kisi bhi time access.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Spawn making, substrate preparation, bag filling, humidity, and temperature control.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Contamination identify aur prevent karne ke tarike.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Harvesting, drying, packaging aur local market mein selling ke practical tips.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Beginners ke liye low-cost entry point — sirf ₹299 mein poora foundation.</li>
                  </ul>
                </div>

                <Link to="/workshop" className="btn btn-primary w-full text-center">Enroll in Online Class</Link>
              </div>

              <div className="border dark:border-white/5 border-slate-200 p-8 rounded-3xl dark:bg-transparent bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">In-Person Masterclass</span>
                  <h3 className="font-black text-2xl text-slate-900 dark:text-white mt-4 mb-2">Offline Training — Jabalpur</h3>
                  <div className="text-xl font-extrabold text-emerald-500 mb-6">Hands-on Experience</div>

                  <ul className="space-y-3 mb-8 text-sm dark:text-slate-300 text-slate-600">
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Actual farm visit karke live demo dekhna aur khud practice karna.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Spawn lab aur growing unit ka real-time observation.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Direct sawaal-jawab aur one-on-one guidance with trainers.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> Jo log apna khud ka commercial setup lagana chahte hain, unke liye yeh sabse effective tareeka hai.</li>
                  </ul>
                </div>

                <Link to="/contact" className="btn btn-secondary w-full text-center">Register interest for Jabalpur</Link>
              </div>
            </div>

            <p className="mt-6 text-sm dark:text-slate-300 text-slate-600 text-center bg-slate-100 dark:bg-white/5 p-4 rounded-xl">
              📍 Pure India se — <strong>Madhya Pradesh, Maharashtra, Uttar Pradesh, Bihar, Rajasthan, Gujarat, Karnataka, Tamil Nadu, West Bengal</strong> — har state se students humari training join kar rahe hain.
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* 5. Mushroom Farm Setup */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
              Mushroom Farm Setup — Step-by-Step Process aur Cost
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Ek successful mushroom farm setup karne ke liye yeh basic steps follow karne hote hain:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
              <div className="border border-slate-200 dark:border-white/5 p-5 rounded-2xl">
                <span className="text-emerald-400 font-bold">Step 1: Site Selection</span>
                <p className="dark:text-slate-400 text-slate-600 mt-2">200-500 sq ft ka enclosed, well-ventilated space — spare room, shed ya bamboo structure bhi chal jaata hai.</p>
              </div>
              <div className="border border-slate-200 dark:border-white/5 p-5 rounded-2xl">
                <span className="text-emerald-400 font-bold">Step 2: Substrate Preparation</span>
                <p className="dark:text-slate-400 text-slate-600 mt-2">Paddy straw ko pasteurize karna — lime treatment ya 70°C hot water mein bhigo kar target sterilization.</p>
              </div>
              <div className="border border-slate-200 dark:border-white/5 p-5 rounded-2xl">
                <span className="text-emerald-400 font-bold">Step 3: Spawn Sourcing</span>
                <p className="dark:text-slate-400 text-slate-600 mt-2">Hamesha registered/lab-tested supplier se hi spawn lein taaki quality maintain rahe.</p>
              </div>
              <div className="border border-slate-200 dark:border-white/5 p-5 rounded-2xl">
                <span className="text-emerald-400 font-bold">Step 4: Bag Filling</span>
                <p className="dark:text-slate-400 text-slate-600 mt-2">Substrate aur spawn ko polythene bags mein layer karke, aeration ke liye chhote chhid karna.</p>
              </div>
              <div className="border border-slate-200 dark:border-white/5 p-5 rounded-2xl">
                <span className="text-emerald-400 font-bold">Step 5: Incubation</span>
                <p className="dark:text-slate-400 text-slate-600 mt-2 font-medium">Dark, humid room mein spawn run honey dena blocks white hone tak.</p>
              </div>
              <div className="border border-slate-200 dark:border-white/5 p-5 rounded-2xl">
                <span className="text-emerald-400 font-bold">Step 6: Harvesting</span>
                <p className="dark:text-slate-400 text-slate-600 mt-2">Pinheads specialized aane ke 4-7 din ke andar mushroom harvest karna.</p>
              </div>
            </div>

            <h3 className="font-extrabold text-xl mb-4 dark:text-white text-slate-900">Setup Cost — Approximate Range</h3>
            <div className="overflow-x-auto rounded-2xl border dark:border-white/10 border-black/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white font-bold text-sm">
                    <th className="p-4">Setup Type</th>
                    <th className="p-4">Investment Range</th>
                    <th className="p-4">Bags / Units</th>
                    <th className="p-4">Suitable For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-sm dark:text-slate-300 text-slate-600">
                  {costMatrix.map((item, id) => (
                    <tr key={id} className="hover:bg-slate-50 dark:hover:bg-white/[0.01]">
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">{item.type}</td>
                      <td className="p-4 text-emerald-500 font-bold">{item.investment}</td>
                      <td className="p-4">{item.bags}</td>
                      <td className="p-4">{item.suitable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs dark:text-slate-400 text-slate-500 italic">
              * Note: Yeh figures general industry range hain — actual cost aapke state, room type aur equipment ke hisaab se alag ho sakti hai. Exact quotation ke liye hamse direct contact karein.
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* 6. Turnkey Mushroom Project */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
              Turnkey Mushroom Project — Poora Solution Ek Hi Jagah
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Bahut se log mushroom farming start karna chahte hain lekin unke paas time ya technical knowledge nahi hota ki setup khud kaise karein. Isi wajah se hum <strong>Turnkey Mushroom Project model</strong> offer karte hain — jisme setup se lekar production tak ka poora kaam humari highly experienced team handles karti hai:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm dark:text-slate-300 text-slate-700 mb-6">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#121212] p-4 rounded-xl">
                <Check className="text-emerald-500 shrink-0" size={16} /> Site planning aur layout design
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#121212] p-4 rounded-xl">
                <Check className="text-emerald-500 shrink-0" size={16} /> Room/shed construction setup & climate-control
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#121212] p-4 rounded-xl">
                <Check className="text-emerald-500 shrink-0" size={16} /> Certified premium seed spawn supply
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#121212] p-4 rounded-xl">
                <Check className="text-emerald-500 shrink-0" size={16} /> Complete training (online + offline)
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#121212] p-4 rounded-xl">
                <Check className="text-emerald-500 shrink-0" size={16} /> Equipment aur machinery sourcing support
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#121212] p-4 rounded-xl">
                <Check className="text-emerald-500 shrink-0" size={16} /> Production cycles ongoing technical support
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#121212] p-4 rounded-xl sm:col-span-2">
                <Check className="text-emerald-500 shrink-0" size={16} /> Guaranteed buyback support after successful cycles
              </div>
            </div>

            <p className="dark:text-slate-300 text-slate-700 leading-relaxed bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10">
              💡 Yeh model especially un **investors** ke liye banaya gaya hai jo apna paisa lagana chahte hain lekin farming background nahi rakhte — humari team unki taraf se zameen se production tak poora project chalati hai.
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* 7. Mushroom Buyback Guarantee */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">7</span>
              Mushroom Buyback Guarantee — Aapka Market Risk Hum Kam Karte Hain
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Naye growers ki sabse badi chinta yeh hoti hai — <em>'mushroom toh ugaa lenge, lekin bechenge kahan?'</em>. Isi problem ko solve karne ke liye hum <strong>Buyback Support</strong> provide karte hain — jisme aapka produced mushroom (fresh ya dry, including medicinal varieties jaise Ganoderma/Reishi) hum se connect ho kar bik sakta hai, market rate ke hisaab se.
            </p>
            <div className="bg-slate-100 dark:bg-white/5 p-6 rounded-2xl border dark:border-white/5 border-black/5">
              <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-0">
                <strong>Buyback ka sabase bada fayda</strong> yeh hai ki naye farmers ko marketing aur distribution ki tension nahi leni padti — woh sirf quality production par focus kar sakte hain. Current buyback rates aur written agreement terms ke liye humse seedha contact karein, kyunki yeh mushroom variety, quality grade aur season ke hisaab se update hote rehte hain.
              </p>
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* 8. Fresh aur Dry Mushroom */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">8</span>
              Fresh aur Dry Mushroom — Pan India aur International Delivery
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Hum sirf farming inputs hi nahi, balki ready mushroom products bhi sell karte hain:
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-sm text-center">
              <div className="border border-slate-200 dark:border-white/5 p-6 rounded-2xl">
                <span className="text-3xl block mb-3">🥗</span>
                <h4 className="font-bold dark:text-white mb-2">Fresh Edible Mushrooms</h4>
                <p className="dark:text-slate-400 text-slate-600">Fresh Button, Oyster, and Milky Mushrooms — hotels, restaurants, cafes and retail delivery across multiple regions.</p>
              </div>
              <div className="border border-slate-200 dark:border-white/5 p-6 rounded-2xl">
                <span className="text-3xl block mb-3">📦</span>
                <h4 className="font-bold dark:text-white mb-2">Premium Dry Mushroom</h4>
                <p className="dark:text-slate-400 text-slate-600">Oyster, Shiitake, Button, Ganoderma — longer shelf life, easy transportation, and export-grade vacuum packaging.</p>
              </div>
              <div className="border border-slate-200 dark:border-white/5 p-6 rounded-2xl">
                <span className="text-3xl block mb-3">🧪</span>
                <h4 className="font-bold dark:text-white mb-2">Mushroom Powder</h4>
                <p className="dark:text-slate-400 text-slate-600">Mushroom powder and wellness value-added products tailored for active supplement & health sector segments.</p>
              </div>
            </div>

            <p className="mt-6 dark:text-slate-300 text-slate-700 bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10">
              🌍 <strong>Export Opportunity:</strong> Dry mushroom ka sabse bada fayda yeh hai ki India abhi processed/dry mushroom products ka net importer hai — matlab export-oriented entrepreneurs ke liye yeh ek clear opportunity hai, especially dried oyster aur shiitake segment mein.
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* 9. Mushroom Farming Profit */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">9</span>
              Mushroom Farming Profit — Kitni Kamai Ho Sakti Hai?
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Mushroom ki kheti se kitna profit ho sakta hai? Neeche humne different scale metrics ka details di hai:
            </p>

            <div className="overflow-x-auto rounded-2xl border dark:border-white/10 border-black/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white font-bold text-sm">
                    <th className="p-4">Unit Size</th>
                    <th className="p-4">Approx. Investment</th>
                    <th className="p-4">Cycle Time</th>
                    <th className="p-4">Approx Monthly Profit*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-sm dark:text-slate-300 text-slate-600">
                  {profitEstimates.map((item, id) => (
                    <tr key={id} className="hover:bg-slate-50 dark:hover:bg-white/[0.01]">
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">{item.size}</td>
                      <td className="p-4">{item.investment}</td>
                      <td className="p-4">{item.cycle}</td>
                      <td className="p-4 text-emerald-500 font-black">{item.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs dark:text-slate-400 text-slate-500 italic bg-slate-100 dark:bg-white/5 p-4 rounded-xl">
              * Yeh figures industry-average estimates hain. Actual profit aapke variety, local market rate, state support, quality standards aur sales channel (fresh/dry/buyback agreement) par depend karta hai.
            </p>
          </div>

          <hr className="border-slate-800" />

          {/* 10. India Ke Har State and 11. Global Reach */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">10</span>
              India Ke Har State aur Top City Mein Hamari Service
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Organic Mushroom Farm, Jabalpur (Madhya Pradesh) se hum pure India mein spawn delivery, training enrollment, setup consulting aur buyback support de rahe hain — North se South, East se West, har region cover hota hai:
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm mb-8">
              {statesCoverage.map((item, id) => (
                <div key={id} className="border border-slate-200 dark:border-white/5 p-4 rounded-xl flex flex-col justify-between">
                  <span className="font-extrabold text-emerald-500 mb-1">{item.state}</span>
                  <span className="dark:text-slate-400 text-slate-600 font-mono text-xs">{item.cities}</span>
                </div>
              ))}
            </div>

            <div className="border border-emerald-500/10 bg-emerald-500/5 rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-black dark:text-white text-slate-900 mb-3 flex items-center gap-2">
                <Globe className="text-emerald-500" size={20} />
                <span>11. Global Reach — International Customers</span>
              </h3>
              <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-6">
                India ke alawa, hamari mushroom training, spawn aur dry mushroom products ki demand in countries mein bhi hai:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium">
                {globalCoverage.map((item, id) => (
                  <div key={id} className="bg-slate-100 dark:bg-white/5 p-4 rounded-xl border dark:border-white/5 border-black/5">
                    <div className="font-bold dark:text-white mb-1">{item.country}</div>
                    <div className="text-xs dark:text-slate-400 text-slate-600">{item.hubs}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs dark:text-slate-400 text-slate-500">
                International customers training aur consultation ke liye humse online (website/WhatsApp) ke through direct contact kar sakte hain. We provide easy international documentation and custom setups solutions.
              </p>
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* 12. FAQ Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="bg-emerald-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">12</span>
              FAQ — Aksar Puche Jaane Wale Sawaal
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed mb-6">
              Mushroom business shuru karne se pehle log aksar ye doubt puchte hain:
            </p>

            <div className="space-y-4">
              {faqsList.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden transition-colors"
                >
                  <button 
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left p-6 font-bold dark:text-white text-slate-900 flex justify-between items-center bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight size={18} className={`text-emerald-500 transform transition-transform ${activeFAQ === idx ? 'rotate-90' : ''}`} />
                  </button>
                  {activeFAQ === idx && (
                    <div className="p-6 dark:bg-transparent bg-white border-t border-slate-200 dark:border-white/5 text-sm dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* 13. Conclusion Banner */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-[2.5rem] p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl font-black dark:text-white text-slate-900">
              13. Conclusion — Apna Mushroom Farming Safar Aaj Hi Shuru Karein
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-md leading-relaxed max-w-3xl mx-auto">
              Mushroom farming sirf ek business idea nahi, balki ek complete ecosystem hai — training, setup, spawn, production aur buyback, sab ek dusre se juda hua. Agar aap Madhya Pradesh, ya India ke kisi bhi state, ya phir UAE, UK, USA, Canada, Nepal, Bangladesh jaise kisi bhi country se ho — <strong>Organic Mushroom Farm, Jabalpur</strong> aapke har step par sath hai.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a 
                href="https://wa.me/919203544140" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-black px-8 py-4 rounded-2xl text-md transition-all shadow-lg"
              >
                <MessageCircle size={18} /> Chat on WhatsApp (9203544140)
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 border border-slate-200 dark:border-white/10 dark:text-white text-slate-900 dark:hover:bg-white/5 hover:bg-slate-100 font-extrabold px-8 py-4 rounded-2xl text-md transition-all"
              >
                Get Custom Call Back
              </Link>
            </div>
            <p className="text-xs dark:text-slate-400 text-slate-500">
              Aap aaj hi online training (₹299) join karein, mushroom spawn seeds order karein ya apne commercial layout plans/buyback queries ke baare mein humari central expert team se phone calls par baat karein!
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ArticleUltimateGuideHinglish;
