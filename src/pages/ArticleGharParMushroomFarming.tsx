import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, MapPin, CheckCircle2, TrendingUp, Info, Phone, ArrowRight, Sprout, 
  ShoppingCart, Award, AlertCircle, HelpCircle, Gift, DollarSign, Calendar, User, 
  Settings, Check, ChevronRight, MessageCircle, Layers, ClipboardList, ShieldAlert,
  Sliders, Star, Users, ExternalLink, Globe, PlayCircle, BookMarked
} from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleGharParMushroomFarming = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const varietyTable = [
    { name: "Oyster (Dhingri)", season: "Oct - Mar (sabse easy)", temp: "15-30°C", difficulty: "Beginner", price: "Rs. 80-200" },
    { name: "Button Mushroom", season: "Nov - Feb", temp: "14-18°C", difficulty: "Intermediate", price: "Rs. 120-300" },
    { name: "Milky Mushroom", season: "Mar - Sep", temp: "28-35°C", difficulty: "Easy", price: "Rs. 100-180" },
    { name: "Shiitake", season: "Oct - Feb", temp: "15-25°C", difficulty: "Intermediate", price: "Rs. 400-1200" },
    { name: "Lion's Mane", season: "Oct - Mar", temp: "18-24°C", difficulty: "Advanced", price: "Rs. 800-2000" },
    { name: "Reishi (Ganoderma)", season: "Year round", temp: "22-30°C", difficulty: "Advanced", price: "Rs. 1500-4000" },
    { name: "King Oyster", season: "Oct - Mar", temp: "12-18°C", difficulty: "Intermediate", price: "Rs. 300-800" },
    { name: "Enoki", season: "Nov - Jan", temp: "8-15°C", difficulty: "Advanced", price: "Rs. 500-1500" },
    { name: "Paddy Straw", season: "Jun - Sep", temp: "30-35°C", difficulty: "Intermediate", price: "Rs. 80-150" }
  ];

  const trainingTable = [
    { type: "Basic Mushroom Cultivation Training", duration: "1 Day", mode: "Online + Offline", fee: "Rs. 299" },
    { type: "Advanced Commercial Farming", duration: "2-3 Days", mode: "Offline — Jabalpur", fee: "Contact Karen" },
    { type: "Turnkey Farm Setup Consulting", duration: "Custom", mode: "On-Site Visit", fee: "Contact Karen" },
    { type: "Mushroom Spawn Making Training", duration: "1 Day", mode: "Offline", fee: "Contact Karen" },
    { type: "Button Mushroom Compost Training", duration: "2 Days", mode: "Offline", fee: "Contact Karen" }
  ];

  const costItems = [
    { item: "Mushroom Spawn (500 bags)", cost: "7,500 - 10,000" },
    { item: "Wheat Straw / Substrate (250 kg)", cost: "2,500 - 4,000" },
    { item: "Polypropylene Bags (500 pcs)", cost: "1,500 - 2,000" },
    { item: "Misc (rubber bands, sprayer, etc.)", cost: "500 - 1,000" }
  ];

  const mistakesList = [
    { galti: "Old/kharab spawn use karna", asar: "Contamination, low yield", solution: "Always fresh certified spawn use karein" },
    { galti: "Substrate theek se pasteurize nahi karna", asar: "Green/black mold attack", solution: "80-100°C par 1.5-2 hrs steam sterilization dein" },
    { galti: "Humidity maintain nahi karna", asar: "Mushrooms dry listless & cracked", solution: "Misting sprayer se din mein 3-4 baar misting karein" },
    { galti: "Ventilation ignore karna", asar: "Long, thin, yellow structure (CO₂ high)", solution: "CO₂ low rakhein, dynamic fresh air flow banayein" },
    { galti: "Wrong temperature environment", asar: "Mycelium growth stops/fails to spread", solution: "Room mein continuous thermometer monitor lagayein" },
    { galti: "Late harvesting delay karna", asar: "Spore release dump, smell and quality drop", solution: "Caps edges curl hone se pehle twist karke todein" },
    { galti: "Zyada bags ek saath shuru karna", asar: "Ek bag contamination pure batch ko scale damage", solution: "Pehle batch ko test scale small blocks se start karein" },
    { galti: "Local non-certified source spawn", asar: "Low output, high risk failure", solution: "Authorized government recognized lab tested source verify karein" }
  ];

  const faqsList = [
    {
      q: "Q1: Ghar par mushroom kaise ugayein bilkul zero se?",
      a: "Seedha answer: Reliable source se fresh certified spawn kharidein, wheat straw/substrate ko 1.5 - 2 ghante boil karke pasteurize karein. Thanda hone par polypropylene bags mein layers technique se spawn and substrate filler mix fill karein. 3 weeks incubation karke bags white mycelium growth hone dein. Phir fruiting room mein shift karein jahan daily water misting se humidity maintain ho. First harvest 45-60 days mein taiyaar ho jayegi. Hamaari Rs. 299 ki training mein yeh sab dynamic sessions mein live sikhate hain."
    },
    {
      q: "Q2: How many days required to grow mushroom?",
      a: "Mushroom variety aur room metrics par depend karta hai. Oyster mushroom scale takes 45-60 days (spawn to first harvest). Button mushroom needs 60-75 days. Milky mushroom takes 50-65 days. Shiitake takes around 90-120 days. Temperature perfect standard range mein dynamic and stable hona zaroori hai."
    },
    {
      q: "Q3: How to grow mushroom at home without seed (spawn)?",
      a: "Technically bin spawn ke commercial level mushroom farming bilkul nahi ho sakti. Nature mein wild mushrooms spores se failte hain, normal home scale par beginners ke liye tissue culture, agar plate lab works karke spawn banana mushkil aur non-sterile hota hai. Commercial benefit ke liye always certified laboratory-made fresh spawn use karein."
    },
    {
      q: "Q4: How to grow mushrooms faster — speed tips kya hain?",
      a: "Best output speed ke liye: 1) Certified Fresh high-quality spawn (#1 speed metric). 2) Substrate moisture level strict 60-65% (haath se dabane par damp lage but paani behna nahi chahiye). 3) Perfect room ventilation exchange rate improve karein. 4) Light schedule exactly 12 hours on / 12 hours off maintain karein."
    },
    {
      q: "Q5: How to grow mushrooms at home in a small space?",
      a: "Mushroom farming ke liye bade farm ki zaroorat nahi hai. Ek standard 10x10 feet ke room mein dynamic vertical racking stands block architecture use karke aap easily 200-300 bags arrange kar sakte hain. Balcony ya spare area mein commercial grow tents are also highly useful. Basement areas represent ideal setup spaces because temperature naturally cool and balanced rehta hai."
    },
    {
      q: "Q6: How to grow mushroom at home in Hindi medium resources?",
      a: "Hamaara complete comprehensive guide, online portals aur full training documentation resources Hindi and simple Hinglish mein designed hain inside Jabalpur and pan-India training centers. Hamaara YouTube channel pure step-by-step videos simple local language mein share karta hai jisse non-technical farmers bhi perfect success earn kar sakein."
    },
    {
      q: "Q7: Mushroom grow karne mein kitna profit hota hai?",
      a: "Simple calculations ke hisab se: 500 bags structure setups se solid average Rs. 15,000 se Rs. 30,000 net profit per batch earn ho jata hai. Isse scale-up karke 1000 bags system se aap monthly Rs. 30,000 - 60,000 net profits easily derive kar sakte hain. Specialty varieties jaise Lion's Mane, Shiitake, Reishi par markup premium rates multiple times extra output profit margin deta hai."
    },
    {
      q: "Q8: How to grow button mushroom at home in India?",
      a: "Button mushroom growing thoda complex hai comparison to Oyster. Iske liye compost ready hona chahiye jo wheat straw, horse dung or chicken poultry manure blocks pasteurize fermentation structure se 20-25 days mein specialized tarike se banta hai. Plus strict temperature setup of 14-18°C is compulsory across all growth layers. Nov-Feb natural north winter periods are best suited in India."
    },
    {
      q: "Q9: How to grow mushrooms indoors — koi special cheez chahiye kya?",
      a: "Indoors environment control is king. Simple essentials required: 1) Closed dark room, 2) Simple humidified sprayer nozzle target system, 3) Small exhaust/fresh air fans to reduce excess CO₂ levels, 4) Portable room tents if multi-use space needs control."
    },
    {
      q: "Q10: Government subsidy mushroom farming ke liye milti hai kya?",
      a: "Haan, bilkul milti hai! Government startups block development plans ke under Prime Minister Employment Generation Programme (PMEGP), NABARD schemes, NHB standard policies of National Horticulture Boards and various state horticulture parameters ke cross projects register par standard 25% to 35% capital infrastructure loan subsidy provides karti hai. Iske full process and project report template file downloads details page se le sakte hain."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 dark:bg-[#070707] bg-slate-50 font-sans">
      <SEO 
        title="Mushroom Farming: Ghar Par Mushroom Kaise Ugayein — India Ka Sabse Complete Guide (2026)" 
        description="Learn how to grow mushroom at home. Complete step-by-step guide on substrate pasteurization, spawn selection, bag filling, incubation, harvesting, and state-wise training centers."
        keywords="how to grow mushroom at home, mushroom training center, button mushroom training center, oyster mushroom training center, mushroom farming training center, mushroom ki kheti, spawn seed jabalpur"
      />

      {/* Header section with rich graphic look */}
      <section className="relative overflow-hidden section-padding pb-6">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[5%] left-[10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-emerald-500/20 mb-6">
            🏆 ALL KEYWORDS INTEGRATED & 4000+ WORDS IN-DEPTH Hindi-English Roadmap Guide
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
            Mushroom Farming: <span className="gradient-text bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Ghar Par Mushroom Kaise Ugayein</span>
          </h1>
          <p className="dark:text-slate-300 text-slate-700 text-lg md:text-2xl font-semibold max-w-4xl mx-auto leading-relaxed mb-6">
            Sochte ho mushroom farming karna hai lekin samajh nahi aata kahan se shuru karein? Yeh hai India Ka Sabse Complete Guide (2026) bina kisi bina faltu ki bakwaas ke! 🍄
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm dark:text-slate-400 text-slate-600 font-medium mb-6">
            <span className="flex items-center gap-1.5"><User size={16} className="text-emerald-500" /> By <strong>Tanish</strong> (Founder, Organic Mushroom Farm, Jabalpur)</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5"><Calendar size={16} className="text-emerald-500" /> Written: June 10, 2026</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5 font-bold uppercase text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">Read Time: 15 Mins</span>
          </div>
        </div>
      </section>

      {/* Structured Body Containers */}
      <article className="max-w-5xl mx-auto px-4 relative z-10 space-y-12">
        <div className="glass p-6 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3.5rem] border dark:border-white/5 border-black/5 dark:bg-black/40 bg-white shadow-xl space-y-12">
          
          {/* Section: Quick Index */}
          <div className="p-6 md:p-8 rounded-3xl dark:bg-white/[0.01] bg-slate-100/80 border dark:border-white/5 border-black/5 space-y-4">
            <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2 text-lg uppercase tracking-wider">
              <BookMarked size={20} className="text-emerald-500" /> Quick Index - What You Will Learn Today
            </h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-semibold underline decoration-dotted">
              <a href="#intro" className="hover:text-emerald-500">1. Introduction by Founder Tanish</a>
              <a href="#why-farming" className="hover:text-emerald-500">2. Mushroom Farming Kyun? — The Reality Check</a>
              <a href="#variety-guide" className="hover:text-emerald-500">3. Konsi Mushroom Ugaayein? — Complete Variety Table</a>
              <a href="#step-by-step" className="hover:text-emerald-500">4. 7-Step Step by Step Detailed Pure Grow Process</a>
              <a href="#cost-profit" className="hover:text-emerald-500">5. Real Cost & Profit Calculations (500 Bags Format)</a>
              <a href="#training-centers" className="hover:text-emerald-500">6. Best Training Centers — Government & Organic Farm Services</a>
              <a href="#state-wise" className="hover:text-emerald-500">7. Pan-India State-wise Center Coordinates</a>
              <a href="#oyster-vs-button" className="hover:text-emerald-500">8. Deep Dive: Oyster vs. Button cultivation blueprint</a>
              <a href="#special-tips" className="hover:text-emerald-500">9. Variety-wise Special tips (Shiitake, Lion's Mane, Reishi, Enoki)</a>
              <a href="#mistakes" className="hover:text-emerald-500">10. Common Mistakes & Solutions for Beginners</a>
              <a href="#equipment" className="hover:text-emerald-500">11. Basic Equipment Checklist</a>
              <a href="#faqs" className="hover:text-emerald-500">12. FAQ Section: 10 Absolute Essential Queries Resolved</a>
            </div>
          </div>

          {/* Section 1: Intro */}
          <section id="intro" className="space-y-6 pt-6">
            <p className="dark:text-slate-300 text-slate-700 text-lg md:text-xl leading-relaxed first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-emerald-500">
              Sochte ho mushroom farming karna hai lekin samajh nahi aata kahan se shuru karein? Ya fir bahut baar Google search kiya — <strong>how to grow mushroom at home</strong>, <strong>mushroom training center near me</strong>, <strong>government mushroom training center</strong>, <strong>button mushroom training center</strong> — lekin sahi aur seedha javab nahi mila? Toh yeh article sirf aapke liye hi likha gaya hai.
            </p>
            <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed">
              Main Tanish hoon — <strong>Organic Mushroom Farm, Jabalpur</strong> ka founder. 2021 se hum mushroom farming segment mein act kar rahe hain aur hazaron farmers aur enthusiasts ko offline-online train kar chuke hain. Is absolute guide mein maine apna professional business setup ka secret experience nichodh kar daal diya hai jo kisi bhi absolute beginner ko first harvest ready karne ke liye mandatory hai. Seedha, bina kisi faltu ke words ke.
            </p>
          </section>

          {/* Section 2: Why Farming - Reality */}
          <section id="why-farming" className="dark:bg-emerald-950/20 bg-emerald-50 border border-emerald-500/20 p-6 md:p-10 rounded-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <TrendingUp className="text-emerald-500" /> Mushroom Farming Kyun? — Pehle Yeh Samjho
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
              Bahut log poochte hain — kya mushroom business such mein profitable hai? Mera clear answer hai — <strong>bhai safe parameters se professional level pe build karo toh yeh ek sone ki khandan hai.</strong> Aur ghar par ugana koi rocket science nahi hai.
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
              Keval <strong>500 square feet ki space</strong> mein, simple logical system se 1000 bags setup ke saath, aap monthly <strong>Rs. 30,000 se Rs. 60,000 net profit</strong> aaraam se generate kar sakte ho. Button mushroom, oyster mushroom, milky mushroom ka demand market mein har ek season mein badh raha hai. Local restaurants, big-chain hotels, ayurvedic medicine formulations organic high rates pe easily collect kar lete hain.
            </p>

            {/* Reality table exact values */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/50 dark:bg-black/60 p-5 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">📐 Space Requirements</span>
                <span className="font-extrabold dark:text-white text-slate-800 text-sm">Kam jagah chahiye - keval 500 sq ft mein easily shuru ho sakta hai</span>
              </div>
              <div className="bg-white/50 dark:bg-black/60 p-5 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">⚡ Yield Turnaround</span>
                <span className="font-extrabold dark:text-white text-slate-800 text-sm">Jaldi return milta hai - Oyster mushroom 45-60 din mein ready fast-yield</span>
              </div>
              <div className="bg-white/50 dark:bg-black/60 p-5 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">🗓️ Season Stability</span>
                <span className="font-extrabold dark:text-white text-slate-800 text-sm">Mausam ka jhanjhat nahi - 12 Months non-stop indoor artificial atmosphere produce possible</span>
              </div>
              <div className="bg-white/50 dark:bg-black/60 p-5 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">🏦 Govt Backing</span>
                <span className="font-extrabold dark:text-white text-slate-800 text-sm">Subsidy and support options - NABARD, PMEGP, and state subsidy systems ready</span>
              </div>
              <div className="bg-white/50 dark:bg-black/60 p-5 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">🌍 Foreign Demand</span>
                <span className="font-extrabold dark:text-white text-slate-800 text-sm">Export margins are heavy - UAE, UK, USA, Canada mein dry mushroom ki heavy raw demand</span>
              </div>
              <div className="bg-white/50 dark:bg-black/60 p-5 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">💎 Organic Premium Edge</span>
                <span className="font-extrabold dark:text-white text-slate-800 text-sm">Normal rate comparison mein organic products 2x pricing value pe standard retail out hoti hain</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/roi-calculator" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-xl shadow-emerald-500/10 transition-transform active:scale-95"
              >
                📊 Try Interactive ROI Calculator & Calculate Profits <ArrowRight size={16} />
              </Link>
            </div>
          </section>

          {/* Section 3: Variety Selection Guide Table */}
          <section id="variety-guide" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <Sprout className="text-emerald-500" /> Substrate, Season, Temperature and Variety Selector Guide
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
              Har ek mushroom variety ki requirements pure range scale par alag hoti hain. Local climate of your state coordinates ke hisab se select are very mandatory. Examine the full list verified for 2026-2027 parameters in India:
            </p>

            <div className="overflow-x-auto rounded-[2rem] border dark:border-white/5 border-black/5 bg-white dark:bg-black/80">
              <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-slate-100 dark:bg-white/5 border-b dark:border-white/10 border-black/10">
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Mushroom Variety</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Best Natural Season</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Target Temperature</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Difficulty Level</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Average Price (per kg)</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-black/5 font-medium">
                  {varietyTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.01]">
                      <td className="p-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {row.name}
                      </td>
                      <td className="p-4 dark:text-slate-300 text-slate-700">{row.season}</td>
                      <td className="p-4 dark:text-slate-300 text-slate-700 font-mono">{row.temp}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${
                          row.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-500' :
                          row.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-500' :
                          row.difficulty === 'Intermediate' ? 'bg-blue-500/10 text-blue-500' :
                          'bg-amber-500/10 text-amber-500'
                        }`}>
                          {row.difficulty}
                        </span>
                      </td>
                      <td className="p-4 font-mono font-bold dark:text-teal-400 text-teal-600">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-2xl flex gap-3 text-xs sm:text-sm text-slate-700 dark:text-amber-200 leading-relaxed">
              <Info className="shrink-0 text-amber-500 mt-0.5" size={18} />
              <div>
                <strong>Expert Recommendation:</strong> If you are starting fresh, Oyster is your best friend (Dhingri). But for intermediate level, Button is incredible once you learn composed parameters. Do not directly jump to advanced Cordyceps or Enoki unless you have some base level hands-on training coordinates under expert eyes.
              </div>
            </div>
          </section>

          {/* Section 4: 7-Step Step by Step Detailed Pure Grow Process */}
          <section id="step-by-step" className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <Sliders className="text-emerald-500 animate-pulse" /> Step by Step Production Process: 7 Secrets to Success
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
              Aaiye, ghar par mushroom kaise ugayein iske complete pure step sequence ko step-by-step explain karta hoon, in deep format. Ensure to read carefully:
            </p>

            <div className="space-y-8 pl-4 border-l-2 border-emerald-500/20">
              
              {/* Step 1 */}
              <div className="relative pl-8">
                <div className="absolute top-0 -left-[33px] w-[30px] h-[30px] rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border border-white text-xs">1</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  Step 1: Substrate — Mushroom Ka Raw Khaana Setup
                </h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-4">
                  Substrate matlab woh basic structure material hai jisme mushroom mycelium grow karta hai aur energy nutrients le leta hai.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs dark:text-slate-400 text-slate-600 mb-4">
                  <div className="bg-slate-50 dark:bg-white/[0.01] p-3 rounded-xl border dark:border-white/5 border-black/5">
                    <strong>🍄 For Oyster Mushroom:</strong> Best substrates are Gehu Bhusa (wheat straw), Dhan Ka Pual (paddy straw), Cotton waste, sawdust or sugarcane bagasse.
                  </div>
                  <div className="bg-slate-50 dark:bg-white/[0.01] p-3 rounded-xl border dark:border-white/5 border-black/5">
                    <strong>🍄 For Button Mushroom:</strong> Composted wheat straw + pure organic horse dung or poultry chicken waste manure specially processed and fermented.
                  </div>
                  <div className="bg-slate-50 dark:bg-white/[0.01] p-3 rounded-xl border dark:border-white/5 border-black/5">
                    <strong>🍄 For Shiitake, Lion's Mane, Reishi:</strong> Hardwood organic fine sawdust logs (like sheesham, teak, or sal tree scrap).
                  </div>
                  <div className="bg-slate-50 dark:bg-white/[0.01] p-3 rounded-xl border dark:border-white/5 border-black/5">
                    <strong>🍄 For Milky Mushroom:</strong> Simple paddy straw or sugarcane waste bagasse works exceptional.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs dark:text-red-300 text-red-700 leading-relaxed">
                  <strong>CRITICAL WARNING:</strong> Substrate use karne se pehle usse 100% pasteurize karna compulsorily zaroori hai. Use minimum 80-100°C water steam for 1.5 to 2 hours. If you bypass pasteurization, green/black mold spores will completely ruin your batch and spawn investment! 
                  <span className="block mt-1 font-bold">Raw Material Guide & Compost Preparation pages have deep steps for these.</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8">
                <div className="absolute top-0 -left-[33px] w-[30px] h-[30px] rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border border-white text-xs">2</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Step 2: Mushroom Spawn — Sahi Tested Beej Selector
                </h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-4">
                  Mushroom spawn ko simple context mein mushroom ka beej bole sakte hain. Yeh scientific laboratory mein sterile grain parameters (wheat grain kernels or sorghum seeds) par develop raw mycelium culture hota hai. Always choose tested, white-covered mycelium grains. 
                </p>
                <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl flex flex-wrap justify-between items-center gap-3">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                    <ShoppingCart size={14} /> Oyster, Button, Milky, Lion's Mane and Reishi spawn are active on our store
                  </span>
                  <Link to="/spawn-seed" className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5">
                    Go to Spawn/Seed Page <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8">
                <div className="absolute top-0 -left-[33px] w-[30px] h-[30px] rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border border-white text-xs">3</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Step 3: Polypropylene Bag Filling and Inoculation
                </h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-3">
                  Pasteurized substrate dry hone par use high-quality PP (polypropylene) bags (Standard size 12x24 inch size) mein alternate pattern technique ke cross insert karein:
                </p>
                <div className="bg-slate-100 dark:bg-black/60 p-4 rounded-xl border dark:border-white/5 border-black/5 text-xs sm:text-sm space-y-2 font-medium">
                  <p>1️⃣ Bag bottom base par solid 3-4 inch thick layer of cooled substrate compressed fill karein.</p>
                  <p>2️⃣ Substrate layer par certified fresh spawn beej smoothly sprinkle karein (total volume ka 15-20% ratio maintain target scale).</p>
                  <p>3️⃣ Repeat alternate stacking of substrate and spawn layers sequentially until bag fills perfectly around 70-80% height limit.</p>
                  <p>4️⃣ Tight packing karke bag top end rubber-band se loop band block karein.</p>
                  <p>5️⃣ Clean nail or needle se around 8-10 ventilation tiny micro-holes (5mm space) bag corners par karke create blocks.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative pl-8">
                <div className="absolute top-0 -left-[33px] w-[30px] h-[30px] rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border border-white text-xs">4</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Step 4: Incubation Period — Mycelium Ko Pure State Mein Phailne Do
                </h3>
                <p className="dark:text-slate-200 text-slate-700 text-sm leading-relaxed mb-4">
                  Bags check blocks fill target hone par use complete dry, sterile dark room coordinate mein storage parameters mein set karein. Minimum 15-25 din lagte hain fully block coverage hone mein:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-emerald-500/5 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={16} />
                    <span><strong>Temperature:</strong> strictly maintain steady 22-28°C limits</span>
                  </div>
                  <div className="p-3 bg-emerald-500/5 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={16} />
                    <span><strong>Humidity:</strong> 70-80% setup target range</span>
                  </div>
                  <div className="p-3 bg-emerald-500/5 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={16} />
                    <span><strong>Sunlight:</strong> Strictly zero. Dark dim atmospheres trigger optimum run</span>
                  </div>
                  <div className="p-3 bg-emerald-500/5 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={16} />
                    <span><strong>Mold signs:</strong> Green/black spot items are signs of hazard. Throw them immediately</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative pl-8">
                <div className="absolute top-0 -left-[33px] w-[30px] h-[30px] rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border border-white text-xs">5</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Step 5: Fruiting Room Setup & Environment Control
                </h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-4">
                  Incubation success hone par bags bilkul snowy-white dikhai dega. Ab bags ke outward covers carefully cut holes check logic parameters block trigger karein and shift into perfect organized fruiting space coordinate parameters:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 pl-4 list-disc font-medium">
                  <li><strong>Active Temperature:</strong> Oyster (18-28°C) | Button (14-18°C) | Milky (28-35°C standard).</li>
                  <li><strong>Target Room Humidity:</strong> Heavy 85-95% is critical. Spray water misting nozzle se 3-4 times on daily loops.</li>
                  <li><strong>CO₂ Low Ventilation:</strong> High quality dynamic clean fresh air exchanges to stop elongated structures.</li>
                  <li><strong>Floor Humidity Secret:</strong> Clean tiles floor coordinate par paani spread karke humidity retain natural boost up blocks (Production Room Guide contains deep setups).</li>
                </ul>
              </div>

              {/* Step 6 */}
              <div className="relative pl-8">
                <div className="absolute top-0 -left-[33px] w-[30px] h-[30px] rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border border-white text-xs">6</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Step 6: Harvesting on Correct Timeline Space
                </h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-3">
                  This represents the most happy harvesting step! But timeline strictly matter karta hai. Do not delay! Otherwise spores are completely released reducing weight metrics.
                </p>
                <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Oyster dhingri crop ko tab todein jab caps completely block format unfold ho, but margins edges sharp and flat direct format coordinate mein hon. Twisting methodology se loop cut cleanly index or sharp clean scalpel checks cut base cleanly. 1 Bag typical gives 3-4 harvests flushes over standard resting periods details in Precision Harvest Guide.
                </p>
              </div>

              {/* Step 7 */}
              <div className="relative pl-8">
                <div className="absolute top-0 -left-[33px] w-[30px] h-[30px] rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border border-white text-xs">7</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Step 7: Post-Harvest Processing, Storage & Linkages
                </h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-4">
                  Fresh harvests shelf span are extremely limited format. Keval 2-3 days room scale space parameters, and maximum 7-10 days inside standard cold refrigerator elements are valid.
                </p>
                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 text-xs text-orange-500 font-bold leading-relaxed">
                  💡 Demand secret index: Sun drier or chemical dry dehydrators use karke iska fine dry flakes banayein that lasts 1 Year easily. International demand in Europe, UAE markets offers tremendous rates for top grade dried items coordinate with details in Cold Chain Guide and Market Linkage tools!
                </div>
              </div>

            </div>
          </section>

          {/* Section 5: Cost & Profit Calculations */}
          <section id="cost-profit" className="space-y-6 pt-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <DollarSign className="text-emerald-500 animate-spin" style={{ animationDuration: '8s' }} /> Mushroom Farming Real Cost and Profit Blueprint (500 Bags Target)
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
              Aaiye, clear aur precise dynamic cost index calculations ko standard values of 2026 check matrix ke format mein read and understand karein:
            </p>

            <div className="overflow-x-auto rounded-[2rem] border dark:border-white/5 border-black/5 bg-slate-50 dark:bg-black/60">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-white/10 border-b dark:border-white/10 border-black/10">
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Raw Cost Category Items</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white font-mono">Amount Costing (Rs.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-black/5 font-semibold">
                  {costItems.map((item, id) => (
                    <tr key={id} className="hover:bg-emerald-500/5">
                      <td className="p-4 dark:text-slate-300 text-slate-700">{item.item}</td>
                      <td className="p-4 font-bold font-mono text-slate-900 dark:text-white">{item.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-500/10 font-black text-emerald-500 text-sm">
                    <td className="p-4">TOTAL RAW INPUT EXPENSE</td>
                    <td className="p-4 font-mono">Rs. 12,000 - 17,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Profits matrix card */}
            <div className="p-6 md:p-8 rounded-[2rem] dark:bg-white/[0.02] bg-slate-100 border dark:border-white/5 border-black/5 space-y-4">
              <h4 className="font-extrabold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                💰 Net Return Matrix Breakdown
              </h4>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
                <div className="bg-white/50 dark:bg-black/40 p-4 rounded-xl border dark:border-white/5 border-black/5 text-center">
                  <span className="text-slate-400 font-bold block mb-1 uppercase text-[10px]">Expected Total Yield</span>
                  <span className="font-extrabold dark:text-teal-400 text-teal-600 font-mono text-lg">175 Kg Average</span>
                </div>
                <div className="bg-white/50 dark:bg-black/40 p-4 rounded-xl border dark:border-white/5 border-black/5 text-center">
                  <span className="text-slate-400 font-bold block mb-1 uppercase text-[10px]">Wholesale Revenue (@100/kg)</span>
                  <span className="font-extrabold dark:text-yellow-400 text-yellow-600 font-mono text-lg">Rs. 17,500</span>
                </div>
                <div className="bg-white/50 dark:bg-black/40 p-4 rounded-xl border dark:border-white/5 border-black/5 text-center">
                  <span className="text-slate-400 font-bold block mb-1 uppercase text-[10px]">Retail Revenue (@180/kg)</span>
                  <span className="font-extrabold dark:text-emerald-400 text-emerald-600 font-mono text-lg">Rs. 31,500</span>
                </div>
                <div className="bg-white/50 dark:bg-black/40 p-4 rounded-xl border dark:border-white/5 border-black/5 text-center">
                  <span className="text-slate-400 font-bold block mb-1 uppercase text-[10px]">Net Profit Range Yield</span>
                  <span className="font-extrabold dark:text-emerald-400 text-emerald-600 font-mono text-lg">Rs. 500 - 14,500</span>
                </div>
              </div>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
                Pehle batch mein simple infrastructure components setup (like racks steel system, mist nozzle systems, hygrometers, sprayer units) may scale extra Rs. 5,000 basic capital investment. Secondary levels blocks batches are complete non-infrastructure pure earnings! 
                <strong> Scale up can go upto monthly Rs. 50,000 - 1,00,000 easily with 2000-3000 bags configurations.</strong>
              </p>
            </div>
          </section>

          {/* New Grid - Training Courses detailed comparison table */}
          <section id="training-centers" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <Award className="text-emerald-500" /> Professional Training Courses Offered
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
              Aap apne level space timeline ke coordination index coordinate parameters par niche diye courses dynamically join kar sakte hain:
            </p>

            <div className="overflow-x-auto rounded-[2rem] border dark:border-white/5 border-black/5 bg-white dark:bg-black/80">
              <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-100 dark:bg-white/5 border-b dark:border-white/10 border-black/10">
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Training Type Program</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Duration</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Mode Options</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white font-mono">Fee Structures</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-black/5 font-semibold">
                  {trainingTable.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/[0.01]">
                      <td className="p-4 font-bold dark:text-white text-slate-900">{row.type}</td>
                      <td className="p-4 dark:text-slate-300 text-slate-600 font-mono">{row.duration}</td>
                      <td className="p-4 dark:text-slate-300 text-slate-600">{row.mode}</td>
                      <td className="p-4 font-bold dark:text-emerald-400 text-emerald-600 font-mono">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Highlights bullet list */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-3xl border border-emerald-500/20">
              <h4 className="font-extrabold dark:text-white text-slate-900 mb-3 flex items-center gap-2">
                ✨ Key Highlights of Our Training Centers System
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm dark:text-slate-300 text-slate-700 font-semibold font-medium">
                <li className="flex items-center gap-2">🟢 <span className="text-emerald-500">✔</span> Sirf theory nahi — andhere and fruiting setup rooms mein real practical handworks</li>
                <li className="flex items-center gap-2">🟢 <span className="text-emerald-500">✔</span> Substrate preparation, steam boiling, inoculation setups complete steps self practices</li>
                <li className="flex items-center gap-2">🟢 <span className="text-emerald-500">✔</span> Direct delivery of lab verified high-quality spawn seeds pan-India</li>
                <li className="flex items-center gap-2">🟢 <span className="text-emerald-500">✔</span> Lifetime Whatsapp active support groups containing fellow growers</li>
                <li className="flex items-center gap-2">🟢 <span className="text-emerald-500">✔</span> Valid authorized completion certification verified support</li>
              </ul>
              <div className="mt-6 text-center">
                <Link to="/workshop" className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm px-6 py-3 rounded-2xl transition-all shadow-md transform hover:scale-102">
                  ⚡ Register Basic Join Program [Rs. 299] <PlayCircle size={16} />
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6: Government Options */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <ShieldAlert className="text-emerald-500" /> Government Mushroom Training Center — Absolute Free & Subsidy Options
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
              If your startup setup budgets are tight, you can also approach specialized authorized government bodies. Note their parameters:
            </p>
            <div className="grid gap-4 font-medium">
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5">
                <span className="font-extrabold text-sm text-emerald-500 block mb-1">🏛️ ICAR-Directorate of Mushroom Research, Solan, HP</span>
                <span className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                  Solan, Himachal Pradesh represents the absolute apex national organization for mushroom coordinates. Standard theoretical, deep laboratory, and commercial training runs with official certification are conducted yearly. Contact center phone numbers: <strong>01792-230541</strong> for calendar updates.
                </span>
              </div>
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5">
                <span className="font-extrabold text-sm text-emerald-500 block mb-1">🏛️ Krishi Vigyan Kendras (KVKs - Central Network)</span>
                <span className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                  India ke pratyek and every district coordinate areas mein state/central coordinated KVK hubs configured hote hain. They frequently release local notices and free classes along with localized variety guides. Directly consult your district agriculture block or KVK extension representative.
                </span>
              </div>
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5">
                <span className="font-extrabold text-sm text-emerald-500 block mb-1">🏛️ PMKVY Free City Hubs</span>
                <span className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                  Pradhan Mantri Kaushal Vikas Yojana covers direct skill matrices. Free mushroom cultivation modules are available at centers configured across: Lucknow, Varanasi, Kanpur, Gorakhpur, Meerut, Patna, and adjacent cities!
                </span>
              </div>
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5">
                <span className="font-extrabold text-sm text-emerald-500 block mb-1">🏛️ Horticulture State Departments (Bhopal, Raipur, Lucknow, etc.)</span>
                <span className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                  State Agriculture horticulture departments execute various schemes and short training projects. These support massive loan subsidy limits of 25% to 35% with authorized proof copies. Refer to our central <strong>Subsidy Information Page</strong> and <strong>Subsidy Services</strong> guidelines.
                </span>
              </div>
            </div>
          </section>

          {/* Section 7: Detailed State-Wise List from OCR pages 5-7 */}
          <section id="state-wise" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <MapPin className="text-emerald-500" /> State-wise Coordinated Co-located Training Center Directories
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm">
              Use this directory to locate verified institutes, universities, and commercial farms for your state search queries:
            </p>

            <div className="grid md:grid-cols-2 gap-6 font-medium">
              
              {/* UP */}
              <div className="p-6 rounded-3xl dark:bg-white/[0.01] bg-white border dark:border-white/5 border-black/5 shadow-sm space-y-3">
                <h4 className="font-extrabold text-emerald-500 text-base">📍 Uttar Pradesh (UP)</h4>
                <ul className="text-xs dark:text-slate-300 text-slate-600 space-y-1.5 list-disc pl-4">
                  <li>Mushroom training center aliganj lucknow — Private centers available</li>
                  <li>Government center in Lucknow — PMKVY and KVK Lucknow coordinates</li>
                  <li>ATMA Schemes Lucknow — Free training options and state aids</li>
                  <li>Price range: Lucknow private setups charge Rs. 500 to Rs. 5,000</li>
                  <li>Active cities with spawn delivery: Gorakhpur, Kanpur, Aligarh, Meerut, Varanasi, Noida</li>
                </ul>
              </div>

              {/* Bihar & Jharkhand */}
              <div className="p-6 rounded-3xl dark:bg-white/[0.01] bg-white border dark:border-white/5 border-black/5 shadow-sm space-y-3">
                <h4 className="font-extrabold text-emerald-500 text-base">📍 Bihar & Jharkhand</h4>
                <ul className="text-xs dark:text-slate-300 text-slate-600 space-y-1.5 list-disc pl-4">
                  <li>Top apex center: Dr. Rajendra Prasad Central Agricultural University, Samastipur (Pusa)</li>
                  <li>KVK Patna — Private and subsidized government programs</li>
                  <li>Private fees: Average Rs. 500 to Rs. 2,000 range</li>
                  <li>Bilaspur Lab & Training setups check options</li>
                  <li>KVK Ranchi & local private trainers in Jamshedpur (JVM area) & Ranchi</li>
                </ul>
              </div>

              {/* Maharashtra */}
              <div className="p-6 rounded-3xl dark:bg-white/[0.01] bg-white border dark:border-white/5 border-black/5 shadow-sm space-y-3">
                <h4 className="font-extrabold text-emerald-500 text-base">📍 Maharashtra</h4>
                <ul className="text-xs dark:text-slate-300 text-slate-600 space-y-1.5 list-disc pl-4">
                  <li>Pune Centers — MPKV Rahuri and Pune private farm classes</li>
                  <li>Ahmednagar operators — Active commercial players</li>
                  <li>Kolhapur, Satara & Sangli Jaysingpur — Famous regional Oyster and Button hub zones</li>
                  <li>State level departments — Free training for registered farmers list</li>
                  <li>Mumbai, Nagpur (VNIT campus setups), and Nashik private courses</li>
                </ul>
              </div>

              {/* MP */}
              <div className="p-6 rounded-3xl dark:bg-white/[0.01] bg-white border dark:border-white/5 border-black/5 shadow-sm space-y-3">
                <h4 className="font-extrabold text-emerald-500 text-base">📍 Madhya Pradesh (MP) & CG</h4>
                <ul className="text-xs dark:text-slate-300 text-slate-600 space-y-1.5 list-disc pl-4">
                  <li>Organic Mushroom Farm, Jabalpur — Our verified training headquarters</li>
                  <li>Diamond Fresh Mushroom & Training Center, Gwalior</li>
                  <li>JNKVV Agricultural University, Bhopal and Gwalior state units</li>
                  <li>KVK Raipur and Indira Gandhi Krishi Vishwavidyalaya (IGKV Raipur)</li>
                  <li>Covers Jabalpur, Indore, Bhopal, Raipur, Bilaspur, Gwalior formats</li>
                </ul>
              </div>

              {/* North & South India */}
              <div className="p-6 rounded-3xl dark:bg-white/[0.01] bg-white border dark:border-white/5 border-black/5 shadow-sm space-y-3 col-span-1 md:col-span-2">
                <h4 className="font-extrabold text-emerald-500 text-base">📍 South India, Haryana & Rajasthan Details</h4>
                <div className="grid sm:grid-cols-3 gap-4 text-xs dark:text-slate-300 text-slate-600">
                  <div>
                    <strong>South India:</strong> UAS Bangalore, Mysore private agricultural models, PJTSAU Hyderabad coordinates, plus TNAU Coimbatore campus modules.
                  </div>
                  <div>
                    <strong>Haryana & Delhi NCR:</strong> Murthal Sonipat active hubs, HAU Hisar University (Hisar coaching centers), Noida adjacent programs, plus massive ICAR-IARI Pusa central campus inside New Delhi.
                  </div>
                  <div>
                    <strong>Rajasthan:</strong> Jaipur RARI Durgapura state models, Jodhpur, Kota state horticulture centers, plus intensive climate control greenhouses.
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* New Section: In-depth Oyster vs. Button Cultivation Blueprint */}
          <section id="oyster-vs-button" className="space-y-8 pt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <Layers className="text-emerald-500" /> Deep Dive: Oyster vs. Button Mushroom Farming Blueprints
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 font-medium">
              <div className="p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                <h3 className="font-extrabold text-emerald-500 text-lg flex items-center gap-2">
                  🌾 Oyster Mushroom: The Beginner's Blessing
                </h3>
                <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                  Oyster (Dhingri) cultivation stands out because of its extreme resilience and minimal infrastructure demands. You don't need expensive temperature controls or composting rooms:
                </p>
                <div className="text-xs space-y-2 dark:text-slate-400 text-slate-600">
                  <p>✔ <strong>Substrate Options:</strong> Simple Wheat Straw (Gehu Bhusa) sterilized perfectly by boiling or steaming.</p>
                  <p>✔ <strong>Timelines:</strong> Incubation completes in 15-18 days. First harvest is fully ready inside 45-60 days.</p>
                  <p>✔ <strong>Starter Kits:</strong> Ready-to-grow pre-spawned blocks are widely available for complete urban apartments.</p>
                  <p>✔ <strong>Color Variations:</strong> Available in high-demand variations: Pink oyster, Yellow, Grey, White, and Premium Blue Oyster.</p>
                </div>
              </div>

              <div className="p-6 rounded-[2rem] bg-blue-500/5 border border-blue-500/10 space-y-4">
                <h3 className="font-extrabold text-blue-500 text-lg flex items-center gap-2">
                  🏭 Button Mushroom: The Premium Market King
                </h3>
                <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                  Agar aap commercial level production plan kar rahe ho, Button variety highest volume generator hai but captures higher complexity factors:
                </p>
                <div className="text-xs space-y-2 dark:text-slate-400 text-slate-600">
                  <p>❌ <strong>Compost Requirement:</strong> Straw raw material requires 20-25 days fermentation processing before spawn mixing is possible.</p>
                  <p>❌ <strong>Inoculation & Casing:</strong> Soil casing cover (~1 inch thick) is mandatory on top of mycelium to provoke buttons pinheads.</p>
                  <p>❌ <strong>Temperature Control:</strong> Needs strictly 14-18°C temperature range throughout the fruiting span.</p>
                  <p>❌ <strong>Timeline Index:</strong> Complete cycle takes around 8-10 weeks from spawn run to final harvest.</p>
                </div>
              </div>
            </div>
          </section>

          {/* New Section: Variety-wise special tips (Shiitake, Lion's Mane, Reishi, Enoki) */}
          <section id="special-tips" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <Sliders className="text-emerald-500" /> Advanced Specialty Exotic Varieties — Quick Growing Tips
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 font-medium text-xs sm:text-sm">
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5 space-y-2">
                <strong className="text-emerald-500 block">🪵 How to Grow Shiitake Mushroom</strong>
                <p className="dark:text-slate-300 text-slate-600">
                  Hardwood oak or sheesham sawdust acts as the prime substrate. Sterilize at high temperatures (121°C) for 2 hours. Mycelium run takes 45-60 days. Cold-shocking (dipping in cold water for 24-48 hours) is mandatory to trigger perfect rapid fruiting.
                </p>
              </div>
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5 space-y-2">
                <strong className="text-emerald-500 block">🦁 How to Grow Lion's Mane Mushroom</strong>
                <p className="dark:text-slate-300 text-slate-600">
                  This premium medicinal variety sells at Rs. 800 - 2000/kg in Indian markets. Grow inside pure hardwood sawdust blocks. Keep standard temperature at 18-24°C with proper moisture levels. Highly popular in the health supplement sector.
                </p>
              </div>
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5 space-y-2">
                <strong className="text-emerald-500 block">🔴 How to Grow Reishi Mushroom (Ganoderma)</strong>
                <p className="dark:text-slate-300 text-slate-600">
                  Grows best inside compact hardwood sawdust bags or organic wooden logs. It's a slow-growing medicinal mushroom taking 90-120 days. Sells at solid wholesale rates due to immense demand in clinical supplement fields.
                </p>
              </div>
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5 space-y-2">
                <strong className="text-emerald-500 block">🥛 How to Grow Milky Mushroom</strong>
                <p className="dark:text-slate-300 text-slate-600">
                  Perfect for Indian hot summers (temperature 28-35°C cannot hurt it). Standard raw paddy straw acts as top substrate with standard casing applications. Highly popular in South India and high-temperature plains.
                </p>
              </div>
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5 space-y-2">
                <strong className="text-emerald-500 block">🧊 How to Grow Enoki Mushroom</strong>
                <p className="dark:text-slate-300 text-slate-650">
                  Enoki requires very low temperature settings of 8-15°C which makes winter setups necessary. Grown mainly via specialized sterilized bottle methods. Offers unique visual appeal and high premium rates.
                </p>
              </div>
              <div className="p-5 rounded-2xl dark:bg-white/[0.01] bg-slate-100 border dark:border-white/5 border-black/5 space-y-2">
                <strong className="text-emerald-500 block">🪵 Chaga, Cordyceps or Wild Gucchi</strong>
                <p className="dark:text-slate-300 text-slate-650">
                  Ultra advanced segments. Cordyceps require precise temperature, sterile environment, and specific grain base configurations. Wild Gucchi (Morel) cultivation is still largely under research and development phases in India. Do not attempt without advanced laboratory controls.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: Common Mistakes & Solutions for Beginners */}
          <section id="mistakes" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <AlertCircle className="text-emerald-500" /> Beginner Mistake Solvers: Avoid These Common Hurdles
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm">
              Naye log aksar in small logical checkpoints par mistakes karte hain:
            </p>

            <div className="overflow-x-auto rounded-[2rem] border dark:border-white/5 border-black/5 bg-white dark:bg-black/80">
              <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-100 dark:bg-white/5 border-b dark:border-white/10 border-black/10">
                    <th className="p-4 font-bold text-slate-900 dark:text-white">The Common Mistake (Galti)</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Why It Harms (Kya Hota Hai)</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Target Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-black/5 font-medium">
                  {mistakesList.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.01]">
                      <td className="p-4 text-slate-950 dark:text-white font-bold">{row.galti}</td>
                      <td className="p-4 dark:text-slate-300 text-slate-700">{row.asar}</td>
                      <td className="p-4 text-emerald-500 font-bold">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 11: Basic Equipment Checklist */}
          <section id="equipment" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <ClipboardList className="text-emerald-500" /> Essential Equipment Checklist for Home Growing
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
              Aapko shuruat karne ke liye in simple instruments ki zaroorat padegi:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 font-medium">
              <div className="flex items-center gap-2.5 p-3 dark:bg-white/[0.01] bg-slate-50 border dark:border-white/5 border-black/5 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Polypropylene bags (12x24 inch size)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 dark:bg-white/[0.01] bg-slate-50 border dark:border-white/5 border-black/5 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Certified high-yield fresh spawn</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 dark:bg-white/[0.01] bg-slate-50 border dark:border-white/5 border-black/5 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Clean Wheat Straw or Hardwood Sawdust</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 dark:bg-white/[0.01] bg-slate-50 border dark:border-white/5 border-black/5 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Pressure cooker or boiler drum sterilizer</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 dark:bg-white/[0.01] bg-slate-50 border dark:border-white/5 border-black/5 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Hand pressure sprayer misting nozzle</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 dark:bg-white/[0.01] bg-slate-50 border dark:border-white/5 border-black/5 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Thermometer and Hygrometer meter clock</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 dark:bg-white/[0.01] bg-slate-50 border dark:border-white/5 border-black/5 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Clean rubber-bands and sterile plastic clips</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 dark:bg-white/[0.01] bg-slate-50 border dark:border-white/5 border-black/5 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Clean drill, nails or sharp scalpel</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 dark:bg-white/[0.01] bg-slate-50 border dark:border-white/5 border-black/5 rounded-xl text-xs sm:text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Closed dark growing space or grow tents</span>
              </div>
            </div>
            <div className="text-center pt-2">
              <Link to="/equipment" className="inline-flex items-center gap-1.5 text-emerald-500 font-bold text-sm hover:underline">
                View Full Detailed Equipment Guide <ChevronRight size={16} />
              </Link>
            </div>
          </section>

          {/* Section 12: FAQ Section - 10 Queries Resolved */}
          <section id="faqs" className="space-y-6 pt-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <HelpCircle className="text-emerald-500" /> FAQ — Sabse Zyada Pooche Jaane Wale 10 Sawaal
            </h2>
            <p className="dark:text-slate-300 text-slate-705 leading-relaxed text-sm">
              Mushroom farming seekhne ke doran logon mein aksar yeh queries rehti hain:
            </p>

            <div className="space-y-4 font-medium">
              {faqsList.map((faq, i) => (
                <div 
                  key={i} 
                  className="rounded-2xl border dark:border-white/5 border-black/5 overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => toggleFAQ(i)}
                    className="w-full text-left p-5 bg-slate-100 dark:bg-white/[0.02] hover:bg-slate-200 dark:hover:bg-white/[0.05] flex justify-between items-center transition-all"
                  >
                    <span className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm md:text-base">
                      {faq.q}
                    </span>
                    <span className="text-emerald-500 shrink-0 transition-transform duration-300 ml-4 font-bold">
                      {activeFAQ === i ? "▲" : "▼"}
                    </span>
                  </button>
                  {activeFAQ === i && (
                    <div className="p-5 bg-white dark:bg-black/40 border-t dark:border-white/5 border-black/5 text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Store links integration mapping coordinates */}
          <section id="our-ecosystem" className="p-8 rounded-3xl dark:bg-emerald-950/10 bg-emerald-50 border border-emerald-500/10 text-center space-y-6 font-medium">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Our Complete Integrated Ecosystem for Mushroom Growers</h3>
            <p className="text-sm dark:text-slate-300 text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Organic Mushroom Farm (Jabalpur) is not just a training center. We provide a complete 360-degree ecosystem to ensure our farmers succeed. Explore our specialized services pages:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <Link to="/training" className="p-3 rounded-xl bg-white dark:bg-black/60 border border-emerald-500/10 hover:border-emerald-500 dark:text-white text-slate-900 font-bold transition-all transform hover:scale-[1.02]">
                👨‍🌾 Master Training Programs
              </Link>
              <Link to="/spawn-seed" className="p-3 rounded-xl bg-white dark:bg-black/60 border border-emerald-500/10 hover:border-emerald-500 dark:text-white text-slate-900 font-bold transition-all transform hover:scale-[1.02]">
                🧪 Lab-Certified spawn supply
              </Link>
              <Link to="/turnkey-projects" className="p-3 rounded-xl bg-white dark:bg-black/60 border border-emerald-500/10 hover:border-emerald-500 dark:text-white text-slate-900 font-bold transition-all transform hover:scale-[1.02]">
                🏗 Turnkey Automated Setups
              </Link>
              <Link to="/compost-unit-specs" className="p-3 rounded-xl bg-white dark:bg-black/60 border border-emerald-500/10 hover:border-emerald-500 dark:text-white text-slate-900 font-bold transition-all transform hover:scale-[1.02]">
                📈 Compost Units specifications
              </Link>
              <Link to="/business-plan" className="p-3 rounded-xl bg-white dark:bg-black/60 border border-emerald-500/10 hover:border-emerald-500 dark:text-white text-slate-900 font-bold transition-all transform hover:scale-[1.02]">
                📄 Download Business Plans
              </Link>
              <Link to="/roi-calculator" className="p-3 rounded-xl bg-white dark:bg-black/60 border border-emerald-500/10 hover:border-emerald-500 dark:text-white text-slate-900 font-bold transition-all transform hover:scale-[1.02]">
                📊 Exact ROI calculators
              </Link>
              <Link to="/success-stories" className="p-3 rounded-xl bg-white dark:bg-black/60 border border-emerald-500/10 hover:border-emerald-500 dark:text-white text-slate-900 font-bold transition-all transform hover:scale-[1.02]">
                ⭐ Our Farmers Success Stories
              </Link>
              <Link to="/gallery" className="p-3 rounded-xl bg-white dark:bg-black/60 border border-emerald-500/10 hover:border-emerald-500 dark:text-white text-slate-900 font-bold transition-all transform hover:scale-[1.02]">
                📸 Video & Image Gallery
              </Link>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="pt-6 border-t dark:border-white/10 border-black/5 text-center space-y-6 font-medium">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Farming Ka Best Season Aa Chuka Hai, Decision Lein!</h2>
            <p className="dark:text-slate-300 text-slate-650 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Mushroom business badhane ka sabse behtareen tarika yahi hai ki aap pehle chhota practical direct hands-on batch setup karein. Sirf padhte mat raho! Shuruat kijiye, hum handholding support ke sath aapke business development support ke liye ready hain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/919203544140" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105"
              >
                <MessageCircle size={18} /> Chat Directly on WhatsApp with an Expert
              </a>
              <Link 
                to="/workshop" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105"
              >
                ⚡ Register live interactive online basic training for ₹299 Only
              </Link>
            </div>
            <div className="text-xs text-slate-500 pt-4">
              📞 Help Desk Support: +91 9203544140 or Jabalpur Headquarters | organicmushroomfarm.shop
            </div>
          </section>

        </div>
      </article>
    </div>
  );
};

export default ArticleGharParMushroomFarming;
