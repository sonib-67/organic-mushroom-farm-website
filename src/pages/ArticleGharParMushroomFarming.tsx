import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, MapPin, CheckCircle2, TrendingUp, Info, Phone, ArrowRight, Sprout, 
  ShoppingCart, Award, AlertCircle, HelpCircle, Gift, DollarSign, Calendar, User, 
  Settings, Check, ChevronRight, MessageCircle 
} from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleGharParMushroomFarming = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const costItems = [
    { item: "Mushroom Spawn (500 bags)", cost: "7,500 - 10,000" },
    { item: "Wheat Straw / Substrate (250 kg)", cost: "2,500 - 4,000" },
    { item: "Polypropylene Bags (500 pcs)", cost: "1,500 - 2,000" },
    { item: "Misc (rubber bands, sprayer, etc.)", cost: "500 - 1,000" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 dark:bg-[#070707] bg-slate-50">
      <SEO 
        title="Mushroom Farming: Ghar Par Mushroom Kaise Ugayein — India Ka Sabse Complete Guide (2026)" 
        description="Ghar par mushroom kaise ugayein step-by-step. Button mushroom, oyster, and milky mushroom training guides, cost estimation, spawn info & training centers."
        keywords="how to grow mushroom at home, mushroom training center, button mushroom training center, oyster mushroom training center, mushroom farming training center, mushroom ki kheti"
      />

      {/* Article Header */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-primary-start/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10 px-4"
        >
          <div className="badge mx-auto mb-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-500 border border-emerald-500/20">
            🥇 Complete Hindi Roadmap (2026)
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Mushroom Farming: <span className="gradient-text">Ghar Par Mushroom Kaise Ugayein</span>
          </h1>
          <p className="dark:text-slate-300 text-slate-700 text-lg md:text-2xl font-semibold mb-6 max-w-3xl mx-auto">
            India Ka Sabse Complete Guide 🍄 — Step by Step Training, Cost & Setup Blueprint
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider mb-6">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> June 10, 2026</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5"><User size={14} /> By Tanish (Founder, Organic Mushroom Farm, Jabalpur)</span>
          </div>
        </motion.div>
      </section>

      {/* Article Content */}
      <article className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="glass p-6 md:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-12">
          
          {/* Introduction */}
          <section className="space-y-6">
            <p className="dark:text-slate-300 text-slate-700 text-lg md:text-xl leading-relaxed first-letter:text-6xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-emerald-500">
              Sochte ho mushroom farming karna hai lekin samajh nahi aata kahan se shuru karein? Ya fir bahut baar googled kiya — <strong>how to grow mushroom at home</strong>, <strong>mushroom training center near me</strong>, <strong>government mushroom training center</strong>, <strong>button mushroom training center</strong> — lekin sahi aur seedha jawab nahi mila? Toh yeh article sirf aapke liye likha gaya hai.
            </p>
            <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed">
              Main Tanish hoon — <strong>Organic Mushroom Farm, Jabalpur</strong> ka founder. 2021 se hum mushroom farming mein hain aur hazaron logon ko train kar chuke hain. Is guide mein maine woh sab kuch daal diya hai jo ek beginner ko chahiye — ghar par mushroom ugane ka pura process, sahi variety ka chunaav, spawning se lekar harvesting tak, aur India ke best mushroom training centers ki list. Seedha, seedha, kisi bhi bakwaas ke bina.
            </p>
          </section>

          {/* Why Mushroom Farming Section */}
          <section className="dark:bg-emerald-900/10 bg-emerald-50 border border-emerald-500/20 p-6 md:p-10 rounded-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 flex items-center gap-3">
              <TrendingUp className="text-emerald-500" /> Mushroom Farming Kyun? — Pehle Yeh Samjho
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
              Bahut log poochte hain — bhai mushroom farming worth it hai kya? Main seedha bolunga — haan, agar sahi tarike se karo toh yeh ek bahut solid business hai. Aur ghar par mushroom kaise ugayein — iska jawab jitna mushkil lagta hai, utna hai nahi.
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-semibold">
              Socho — 500 square feet ki ek room mein, 1000 bags ke saath, aap monthly 30,000 se 60,000 rupaye net profit kama sakte ho. Button mushroom, oyster mushroom, milky mushroom — market demand saal bhar rehti hai. Hotels, restaurants, medical supplement companies, ayurvedic brands — sab khareedte hain. Organic mushroom toh aur bhi mehenga bikta hai.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white/50 dark:bg-black/40 p-4 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-xs font-bold text-slate-400 block mb-1">📐 Kam Jagah Chahiye</span>
                <span className="font-bold dark:text-white text-slate-800 text-sm">500 sq ft mein shuru ho sakta hai</span>
              </div>
              <div className="bg-white/50 dark:bg-black/40 p-4 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-xs font-bold text-slate-400 block mb-1">⚡ Jaldi Return Milta Hai</span>
                <span className="font-bold dark:text-white text-slate-800 text-sm">Oyster mushroom 45-60 din mein ready</span>
              </div>
              <div className="bg-white/50 dark:bg-black/40 p-4 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-xs font-bold text-slate-400 block mb-1">📅 Saal Bhar Income</span>
                <span className="font-bold dark:text-white text-slate-800 text-sm">Season nahi hota, 12 months production possible</span>
              </div>
              <div className="bg-white/50 dark:bg-black/40 p-4 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-xs font-bold text-slate-400 block mb-1">🏦 Government Support</span>
                <span className="font-bold dark:text-white text-slate-800 text-sm">NABARD, PMEGP, State schemes available</span>
              </div>
              <div className="bg-white/50 dark:bg-black/40 p-4 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-xs font-bold text-slate-400 block mb-1">🌍 Export Opportunities</span>
                <span className="font-bold dark:text-white text-slate-800 text-sm">Dry mushroom ki demand in UAE, UK, USA, Canada</span>
              </div>
              <div className="bg-white/50 dark:bg-black/40 p-4 rounded-2xl border dark:border-white/5 border-black/5">
                <span className="text-xs font-bold text-slate-400 block mb-1">💎 Organic Premium Price</span>
                <span className="font-bold dark:text-white text-slate-800 text-sm">Normal rate se 2x price milta hai organic ko</span>
              </div>
            </div>

            <div className="pt-4 text-center">
              <Link 
                to="/roi-calculator" 
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.01]"
              >
                📊 Calculate Your Profit - Use ROI Calculator <ArrowRight size={16} />
              </Link>
            </div>
          </section>

          {/* Variety Selection Guide */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 flex items-center gap-3">
              <Sprout className="text-emerald-500" /> Konsi Mushroom Ugaayein? — Variety Selection Guide
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
              Yeh sabse pehla decision hai aur bahut zaroori bhi. Har mushroom ki alag temperature chahiye, alag substrate chahiye, aur alag time lagta hai. India ke climate ke hisab se main categories yeh hain:
            </p>

            <div className="overflow-x-auto rounded-3xl border dark:border-white/5 border-black/5">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-100 dark:bg-white/5 border-b dark:border-white/10 border-black/10">
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Mushroom Variety</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Best Season (India)</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Temperature</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Difficulty Level</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Average Market Price/kg</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-black/5">
                  {varietyTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                      <td className="p-4 font-bold text-slate-900 dark:text-white">{row.name}</td>
                      <td className="p-4 dark:text-slate-300 text-slate-700">{row.season}</td>
                      <td className="p-4 dark:text-slate-300 text-slate-700">{row.temp}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
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

            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-sm leading-relaxed dark:text-amber-200 text-amber-800">
              💡 <strong>Meri Suggestion:</strong> Beginners ke liye meri suggestion hamesha yahi hoti hai — pehle oyster mushroom se shuru karo. Jab confidence aa jaaye, tab button mushroom ya shiitake try karo. Button mushroom training center near me search karne wale dhyan dein — button mushroom ke liye controlled temperature environment zaroori hai, jo ghar mein maintain karna thoda challenging hai.
            </div>

            <div className="text-center pt-2">
              <Link to="/mushroom-types" className="inline-flex items-center gap-1.5 text-emerald-500 font-bold hover:underline">
                View Mushroom Types Complete Guide <ChevronRight size={16} />
              </Link>
            </div>
          </section>

          {/* Step by Step Process */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 flex items-center gap-3">
              <Settings className="text-emerald-500 animate-spin" style={{ animationDuration: '6s' }} /> How to Grow Mushroom at Home — Step by Step Pura Process
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
              Chalte hain main topic par. Ghar par mushroom kaise ugayein — yeh 7 steps mein samjhata hoon. Ek ek step seedha aur clear.
            </p>

            <div className="space-y-8 pl-4 border-l-2 border-emerald-500/30">
              
              {/* Step 1 */}
              <div className="relative pl-6">
                <div className="absolute top-0 -left-[29px] w-12 h-12 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border-4 dark:border-black border-slate-50">1</div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Step 1: Substrate — Mushroom Ka Khaana</h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-4">
                  Substrate matlab woh material jisme mushroom grow karti hai. Yeh depend karta hai variety par:
                </p>
                <ul className="space-y-2 text-xs md:text-sm pl-4 list-disc dark:text-slate-400 text-slate-600">
                  <li><strong>Oyster mushroom:</strong> Wheat straw (gehu bhusa), paddy straw (dhan ka pual), cotton waste, sawdust (lakdi ka burra), sugarcane bagasse — yeh sab chalte hain.</li>
                  <li><strong>Button mushroom:</strong> Composted wheat straw + horse dung/poultry manure — specifically prepared compost chahiye.</li>
                  <li><strong>Shiitake, Lion's Mane, Reishi:</strong> Hardwood sawdust (sheesham, teak, sal).</li>
                  <li><strong>Milky mushroom:</strong> Paddy straw, sugarcane bagasse best hai.</li>
                </ul>
                <div className="mt-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-xs text-red-500 font-semibold leading-relaxed">
                  ⚠️ <strong>Ek important cheez:</strong> Substrate use karne se pehle usse pasteurize karna zaroori hai. 80-100°C par 1.5 se 2 ghante steam deni hoti hai. Yeh step skip mat karna — contamination ka yahi sabse bada source hota hai aur puri mehnat bekar ho jaati hai.
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-6">
                <div className="absolute top-0 -left-[29px] w-12 h-12 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border-4 dark:border-black border-slate-50">2</div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Step 2: Mushroom Spawn — Sahi Beej Laana</h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-4">
                  Mushroom spawn ko mushroom ka beej samjho. Yeh ek specially prepared mycelium culture hota hai — wheat grain ya sawdust mein mushroom ki roots grow ki hoti hain lab mein. Fresh, certified spawn se hi acchi crop aati hai.
                </p>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-4">
                  Market mein bahut kharab quality ka spawn milta hai — jisse na sirf yield kam aati hai balki bags contaminate bhi ho jaate hain. Hamesha reliable source se spawn lo. Hamare paas oyster, button, milky, shiitake, lion's mane, reishi, king oyster — sab available hai. Pan-India delivery hoti hai.
                </p>
                <Link to="/spawn-seed" className="inline-flex items-center gap-1 text-emerald-500 font-extrabold text-xs hover:underline uppercase tracking-wide">
                  🛒 Order Fresh Spawn Online <ArrowRight size={12} />
                </Link>
              </div>

              {/* Step 3 */}
              <div className="relative pl-6">
                <div className="absolute top-0 -left-[29px] w-12 h-12 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border-4 dark:border-black border-slate-50">3</div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Step 3: Bag Filling aur Inoculation</h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-3">
                  Ab substrate thanda ho jaaye toh bag filling shuru karo. Polypropylene bags use karo — 12x24 inch size mushroom farming ke liye standard hai.
                </p>
                <div className="bg-slate-50 dark:bg-white/[0.02] p-4 rounded-2xl border dark:border-white/5 border-black/5 space-y-2">
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-bold text-emerald-500 shrink-0">1.</span>
                    <span>Bag ki tali mein 3-4 inch substrate ki layer daalo.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-bold text-emerald-500 shrink-0">2.</span>
                    <span>Upar spawn ki thin layer chhidko (substrate ka 15-20% spawn hona chahiye total mein).</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-bold text-emerald-500 shrink-0">3.</span>
                    <span>Dobara substrate layer, dobara spawn — yeh layering repeat karo jab tak bag bhar na jaaye.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-bold text-emerald-500 shrink-0">4.</span>
                    <span>Bag ko tight pack karo, upar se fold karke rubber band se band karo.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-bold text-emerald-500 shrink-0">5.</span>
                    <span>Bag mein 8-10 jagah 5mm ke holes karo — ventilation ke liye aur mushroom pins yahan se nikalenge.</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative pl-6">
                <div className="absolute top-0 -left-[29px] w-12 h-12 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border-4 dark:border-black border-slate-50">4</div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Step 4: Incubation — Mycelium Ko Phailne Do</h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-4">
                  Bags taiyaar hone ke baad incubation room mein rakhte hain. Yeh woh stage hai jab mushroom mycelium (white fluffy growth) poore bag mein phailta hai. Isme 15-25 din lagte hain variety ke hisab se.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>Temperature:</strong> 22-28°C — dark ya dim light mein rakhein</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>Humidity:</strong> 70-80% maintain karo</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>Direct Sunlight:</strong> Nahi — andhere mein fast grows</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span><strong>Ventilation:</strong> Thodi honi chahiye — not fully sealed</span>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-500 font-semibold leading-relaxed">
                  📢 <strong>Tip:</strong> Jab poora bag white ho jaaye — bags fruiting ke liye ready hain. Green ya black patches dikhein toh bag contaminated hai — aise bags alag karo warna poore batch ko affect karega.
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative pl-6">
                <div className="absolute top-0 -left-[29px] w-12 h-12 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border-4 dark:border-black border-slate-50">5</div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Step 5: Fruiting Room Setup</h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-4">
                  Fruiting room woh jagah hai jahan mushroom actually grow hoti hain. Yeh stage crop quality decide karti hai. Temperature, humidity, fresh air exchange, aur light — charon factors sahi hone chahiye.
                </p>
                <ul className="space-y-2 text-xs md:text-sm pl-4 list-disc dark:text-slate-400 text-slate-600 mb-4">
                  <li><strong>Temperature:</strong> Oyster ke liye 18-28°C | Button ke liye 14-18°C | Milky ke liye 28-35°C</li>
                  <li><strong>Humidity:</strong> 85-95% — din mein 3-4 baar misting karo (spray machine)</li>
                  <li><strong>Fresh Air:</strong> CO2 level low rakhna zaroori hai — warna mushroom long aur thin hogi</li>
                  <li><strong>Light:</strong> 200-400 lux, 10-12 hours cycle</li>
                  <li><strong>Floor:</strong> Floor par bhi pani chhidakein — humidity banaye rakhne ke liye</li>
                </ul>
              </div>

              {/* Step 6 */}
              <div className="relative pl-6">
                <div className="absolute top-0 -left-[29px] w-12 h-12 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border-4 dark:border-black border-slate-50">6</div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Step 6: Harvesting — Sahi Time Par Todo</h3>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-3">
                  Yeh mushroom farming ka sabse satisfying step hota hai. Lekin timing zaroori hai — zyada late karo toh mushroom spore release karne lagti hai, yield waste.
                </p>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-3">
                  Oyster mushroom tab todo jab caps fully open ho jayein lekin edges abhi straight hon — curl shuru ho matlab deri ho gayi. Mushroom ko twist karke toda jaata hai — sharply maro aur pull karo. Ya sharp knife se cut kar sakte ho base se.
                </p>
                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-500 font-bold">
                  🔥 Ek bag se 3 se 4 flushes (harvests) milte hain. Pehle flush mein sabse zyada yield aati hai. Harvest ke baad substrate ko 7-10 days rest do aur daily misting jaari rakho.
                </div>
              </div>

              {/* Step 7 */}
              <div className="relative pl-6">
                <div className="absolute top-0 -left-[29px] w-12 h-12 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shadow-lg border-4 dark:border-black border-slate-50">7</div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Step 7: Post-Harvest, Storage aur Market</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-3">
                  Fresh mushroom ka shelf life kam hota hai — room temperature par 2-3 din, refrigerator mein 7-10 din. Cold chain maintain karo toh rate bhi zyada milta hai aur wastage bhi kam.
                </p>
                <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed">
                  <strong>Dry mushroom bana lo:</strong> Sun drying ya food dehydrator se dry karein — shelf life 6-12 months ho jaati hai. Dry oyster, dry shiitake, dry reishi ki demand internationally bhi hai — UAE, UK, USA, Canada, Nepal tak export ho sakta hai.
                </p>
              </div>

            </div>
          </section>

          {/* Real Numbers Cost & Profit */}
          <section className="dark:bg-emerald-950/10 bg-slate-100 border border-emerald-500/10 p-6 md:p-10 rounded-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 flex items-center gap-3">
              <DollarSign className="text-emerald-500" /> Mushroom Farming Cost aur Profit — Real Numbers
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
              How to grow mushroom at home for business — iske liye numbers samajhna zaroori hai. Yeh calculation <strong>500 bags</strong> ke liye hai:
            </p>

            <div className="overflow-x-auto rounded-2xl border dark:border-white/5 border-black/5 bg-white dark:bg-black/60">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-white/5 border-b dark:border-white/10 border-black/10">
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Cost Item</th>
                    <th className="p-4 font-bold text-slate-900 dark:text-white">Amount (Rs.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-black/5">
                  {costItems.map((item, i) => (
                    <tr key={i}>
                      <td className="p-4 dark:text-slate-300 text-slate-700 font-medium">{item.item}</td>
                      <td className="p-4 font-mono font-bold text-slate-900 dark:text-white">{item.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-500/5 font-extrabold text-emerald-500">
                    <td className="p-4">TOTAL INPUT COST</td>
                    <td className="p-4 font-mono">12,000 - 17,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Profits details */}
            <div className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 space-y-4">
              <h3 className="font-bold dark:text-white text-slate-900">Yield and Revenue Analysis:</h3>
              <ul className="space-y-2.5 text-xs md:text-sm">
                <li className="flex justify-between items-center dark:text-slate-300 text-slate-700">
                  <span>📉 Expected Yield (500 bags x 350g average):</span>
                  <span className="font-bold font-mono">175 kg</span>
                </li>
                <li className="flex justify-between items-center dark:text-slate-300 text-slate-700">
                  <span>🏪 Revenue at Rs. 100/kg (Wholesale market):</span>
                  <span className="font-bold font-mono text-amber-500">Rs. 17,500</span>
                </li>
                <li className="flex justify-between items-center dark:text-slate-300 text-slate-700">
                  <span>📈 Revenue at Rs. 180/kg (Retail / Direct consumer):</span>
                  <span className="font-bold font-mono text-emerald-500">Rs. 31,500</span>
                </li>
                <li className="flex justify-between items-center border-t dark:border-white/10 border-black/5 pt-2 font-bold dark:text-white text-slate-900 text-sm md:text-base">
                  <span>💰 Net Profit (after input costs):</span>
                  <span className="font-mono text-emerald-500">Rs. 500 - 14,500</span>
                </li>
              </ul>
            </div>

            <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm leading-relaxed">
              Pehle batch mein infrastructure cost bhi lagti hai — racks, sprayer, thermometer, hygrometer, room modification. Yeh ek time investment hai. 2nd batch se profit clearly dikhne lagta hai. Scale up karo 2000-3000 bags tak — toh monthly Rs. 50,000 - 1,00,000 possible hai.
            </p>
          </section>

          {/* Mushroom Training Center - Practical vs Government */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 flex items-center gap-3">
              <Award className="text-emerald-500" /> Mushroom Training Center — Sahi Jagah Se Seekho
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
              Yeh ek cheez main clearly bolunga — mushroom farming YouTube se bhi seekhi ja sakti hai, lekin agar aap seriously commercial level par karna chahte ho toh proper training invest karna hoga. Galat technique se ek batch contaminate ho toh Rs. 10,000-20,000 seedha drain ho jaate hain.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Private center */}
              <div className="glass p-6 rounded-3xl border dark:border-white/10 border-black/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white font-bold text-[10px]">ORGANIC</span>
                    <h3 className="font-bold dark:text-white text-slate-900 text-lg">Organic Mushroom Farm Training Center</h3>
                  </div>
                  <p className="text-xs dark:text-slate-400 text-slate-500 mb-4 leading-relaxed">
                    Hum India ke ek leading mushroom training centers mein se hain. Jabalpur, Madhya Pradesh mein headquartered hain aur 2021 se active hain. Humne 500+ farmers train kiye hain MP, UP, Bihar, Gujarat, Maharashtra, Karnataka aur foreign countries (UAE, international).
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 mb-6 font-medium">
                    <li className="flex items-center gap-2"><Check className="text-emerald-500" size={14} /> Practical hands-on training (theory nahi)</li>
                    <li className="flex items-center gap-2"><Check className="text-emerald-500" size={14} /> Substrate creation, inoculation, room setup</li>
                    <li className="flex items-center gap-2"><Check className="text-emerald-500" size={14} /> Lifetime WhatsApp active community support</li>
                    <li className="flex items-center gap-2"><Check className="text-emerald-500" size={14} /> Authorized Govt. certified trainer guidance</li>
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Link to="/workshop" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center font-bold py-2.5 rounded-xl text-xs sm:text-sm shadow-md">
                    Join basic workshop - Rs. 199/299
                  </Link>
                </div>
              </div>

              {/* Government center */}
              <div className="glass p-6 rounded-3xl border dark:border-white/10 border-black/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500 text-white font-bold text-[10px]">GOVT</span>
                    <h3 className="font-bold dark:text-white text-slate-900 text-lg">Government Training Options</h3>
                  </div>
                  <p className="text-xs dark:text-slate-400 text-slate-500 mb-4 leading-relaxed">
                    Agar budget tight hai toh free/subsidy-based training le sakte hain. Government programs government research centers dwara conduct hote hain:
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 mb-6 font-medium">
                    <li>🔹 <strong>ICAR-DMR Solan, Himachal Pradesh:</strong> India's apex institute for mushroom research</li>
                    <li>🔹 <strong>Krishi Vigyan Kendras (KVKs):</strong> Every district has a local KVK with training</li>
                    <li>🔹 <strong>PMKVY Centers:</strong> Free training in cities like Lucknow, Patna, Varanasi, etc.</li>
                    <li>🔹 <strong>State Horticulture Departments:</strong> Under NHB/NABARD capital subsidy</li>
                  </ul>
                </div>
                <Link to="/subsidy" className="w-full bg-slate-200 dark:bg-white/5 dark:text-white text-slate-950 font-bold py-2.5 rounded-xl text-xs sm:text-sm text-center">
                  Government Subsidy Details
                </Link>
              </div>

            </div>
          </section>

          {/* State Wise List */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 flex items-center gap-3">
              <MapPin className="text-emerald-500" /> State-wise Mushroom Training Centers India
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm">
              Mushroom training center near me search karne wale logo ke liye yeh comprehensive state list hai:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border dark:border-white/5 border-black/5">
                <span className="font-extrabold text-sm text-emerald-500 block mb-2">📍 Uttar Pradesh (UP)</span>
                <p className="text-xs dark:text-slate-400 text-slate-505 leading-relaxed">
                  UP mein mushroom ki demand bahut zyada hai. Mushroom training center Aliganj Lucknow, Gorakhpur, Varanasi, Meerut, Kanpur, aur Aligarh mein detailed training programs chalte hain. Aap hamari online masterclass kisi bhi city se join kar sakte hain. We deliver spawn to all cities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border dark:border-white/5 border-black/5">
                <span className="font-extrabold text-sm text-emerald-500 block mb-2">📍 Bihar & Jharkhand</span>
                <p className="text-xs dark:text-slate-400 text-slate-505 leading-relaxed">
                  Bihar mein mushroom farming tezi se badh rahi hai. Dr. Rajendra Prasad Central Agricultural University, Samastipur (Pusa) ka top center hai. Patna, jamshedpur aur Ranchi mein local training options and certification is available.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border dark:border-white/5 border-black/5">
                <span className="font-extrabold text-sm text-emerald-500 block mb-2">📍 Madhya Pradesh (MP) & Chhattisgarh</span>
                <p className="text-xs dark:text-slate-400 text-slate-505 leading-relaxed">
                  Jabalpur (Organic Mushroom Farm), JNKVV Jabalpur, RVNK Gwalior Bhopal, Indore, aur Raipur (IGKV) mein dynamic training programs and spawn distribution centers are available.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border dark:border-white/5 border-black/5">
                <span className="font-extrabold text-sm text-emerald-500 block mb-2">📍 South India (Karnataka, TN, Hyderabad)</span>
                <p className="text-xs dark:text-slate-400 text-slate-505 leading-relaxed">
                  UAS Bangalore, TNAU Coimbatore, aur PJTSAU Hyderabad mein standard commercial training courses and high temperature tolerance variety selection guidance is provided.
                </p>
              </div>
            </div>
          </section>

          {/* FAQS */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 flex items-center gap-3">
              <HelpCircle className="text-emerald-500" /> FAQ — Sabse Zyada Pooche Jaane Wale Sawaal
            </h2>

            <div className="space-y-4 divide-y dark:divide-white/5 divide-black/5">
              
              <div className="pt-4">
                <h4 className="font-extrabold text-slate-900 dark:text-white mb-2 text-base">Q1: Ghar par mushroom kaise ugayein bilkul zero se?</h4>
                <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                  Seedha answer: spawn kharidein, substrate (straw) taiyaar karein use steaming se pasteurize karein, polypropylene bags mein layering se seal fill karein. 3 weeks incubation (andhere room) mein rakhein jab tak pura bag white fluffy na ho jaye, phir fruiting room (water spray system) mein rakhein. First harvest 45-60 days mein taiyaar ho jayegi.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="font-extrabold text-slate-900 dark:text-white mb-2 text-base">Q2: How many days are required to grow commercial mushrooms?</h4>
                <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                  Oyster mushroom takes 45-60 days from spawn to first harvest. Button mushroom takes 60-75 days. Milky mushroom takes 50-65 days. Shiitake takes 90-120 days. Speed variety, temperature, and substrate quality par depend karegi.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="font-extrabold text-slate-900 dark:text-white mb-2 text-base">Q3: How to grow mushroom at home without seed (spawn)?</h4>
                <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                  Technically, bina commercial spawn ke commercial mushroom cultivation nahi ho sakti. Wild spores collect karke lab mein PDA media par mycelium block banaya jata hai lekin yeh advance biotech training hai. Local scale par hume hamesha certified lab tested spawn hi kharidna chahiye.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="font-extrabold text-slate-900 dark:text-white mb-2 text-base">Q4: How to grow mushrooms faster — speed tips kya hain?</h4>
                <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                  Best quality fresh spawn use karein, substrate moisture 60-65% rakhein (squeeze krne pr 1-2 drops paani aana chahiye), aur humidity setup maintain karein. Misting cycle din m 3-4 baar karein. Light schedule 12 hrs on / 12 hrs off follow karein.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="font-extrabold text-slate-900 dark:text-white mb-2 text-base">Q5: Government subsidy mushroom farming ke liye milti hai kya?</h4>
                <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                  Haan! PMEGP, NABARD, NHB, State Horticulture departments under capital infrastructure projects and training startups par 25% se lekhr 35% tak capital subsidy provide karte hain. Iske liye project report submit karni hoti hai.
                </p>
              </div>

            </div>
          </section>

          {/* Alternative Substrates */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold dark:text-white text-slate-900">Substrate Alternatives — Ek Hi Cheez Se Nahi</h2>
            <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
              Logon ke paas different materials available hote hain. Yeh alternate substrates bhi use ho sakte hain:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 space-y-1.5">
              <li><strong>Sawdust:</strong> Oyster, Shiitake, Lion's mane ke liye excellent substrate hai.</li>
              <li><strong>Banana leaves / dried banana leaves:</strong> Oyster mushroom ke liye usable hai, pasteurize zaroor karein.</li>
              <li><strong>Rice straw / corn cobs:</strong> Paddy straw and maize cobs are premium cheap substrate options in agricultural regions.</li>
              <li><strong>Coffee grounds:</strong> Specialty oyster growing ke liye highly popular in urban cities.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="pt-6 border-t dark:border-white/10 border-black/5 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900">Ab Decision Lein — Action Start Karein</h2>
            <p className="dark:text-slate-300 text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Aap is article ki end tak aaye — matlab genuinely mushroom farming mein interest hai. Ek suggestion bolunga — sirf padhte mat raho. Action lein. Training join karein, spawn kharidein, ek chhota batch shuru karein. Experience se jo seekhenge woh kisi bhi article se zyada valuable hoga.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105">
                <MessageCircle size={18} /> Chat with Tanish on WhatsApp
              </a>
              <Link to="/workshop" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105">
                ⚡ Join Live Workshop @ ₹199 Only
              </Link>
            </div>
            <div className="text-xs text-slate-500 pt-4">
              📞 Emergency Support: 9203544140 | organicmushroomfarm.shop | Jabalpur, MP
            </div>
          </section>

        </div>
      </article>
    </div>
  );
};

export default ArticleGharParMushroomFarming;
