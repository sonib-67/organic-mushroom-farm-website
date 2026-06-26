import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, ArrowLeft, CheckCircle2, Award, Users, TrendingUp, DollarSign, ShieldCheck, HelpCircle, Phone, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ArticleMushroomTrainingAffordable = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Mushroom Farming Training - Online & Offline | Certificate ke Saath Seekho Mushroom Kheti" 
        description="India ka Sabse Affordable Mushroom Training Program | Sirf ₹299 Mein Online Course | Offline Training Jabalpur MP Mein Available. Complete guide with Certificate." 
      />

      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary-start transition-colors uppercase tracking-widest">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-primary-start/10 border border-primary-start/20 text-primary-start">
            <Award size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Mushroom Training Program</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 mb-6 leading-tight tracking-tight">
            Mushroom Farming Training – Online & Offline | Certificate ke Saath Seekho Mushroom Kheti
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-400 leading-relaxed mb-6">
            India ka Sabse Affordable Mushroom Training Program | Sirf ₹299 Mein Online Course | Offline Training Jabalpur Mein Available
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest border-b dark:border-white/10 border-black/10 pb-8">
            <div className="flex items-center gap-2">
              <Calendar size={14} /> June 01, 2026
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-start"></span>
              20 Min Read
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-start"></span>
              10,000+ Farmers Trained
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary-start">
          
          <div className="lead text-xl dark:text-slate-300 text-slate-700 font-medium mb-8 p-6 rounded-3xl bg-white/[0.02] border dark:border-white/5 border-black/5">
            <strong>Mushroom Training Kya Hoti Hai? | What is Mushroom Farming Training?</strong>
            <p className="mt-4 text-base leading-relaxed">
              Agar aap mushroom ki kheti shuru karna chahte hain aur nahi pata kahan se start karen — toh mushroom training bilkul aapke liye hai. Mushroom farming training ek aisa program hota hai jisme aapko step-by-step sikhaya jata hai ki mushroom kaise ugayi jaati hai, spawn kaise use hota hai, fruiting kaise hoti hai, harvesting aur packing kaise karni hai — aur sabse important — mushroom se paise kaise kamaye jaate hain.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Organic Mushroom Farm, Jabalpur (<a href="https://organicmushroomfarm.shop" target="_blank" rel="noopener noreferrer">organicmushroomfarm.shop</a>) ke through aap do tarah ki training le sakte hain:
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-start" /> <strong>Online Mushroom Training</strong> — sirf ₹299 mein, ghar baithe</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-start" /> <strong>Offline Mushroom Training</strong> — Jabalpur farm par aake, hands-on practical ke saath</li>
            </ul>
          </div>

          {/* Section: Why Training Matters */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Mushroom Farming Training Kyun Zaroori Hai? | Why Training Matters
          </h2>
          <p>
            Bohot log sochte hain ki mushroom farming easy hai — bas spawn dalo, pani daalo, mushroom nikal aayegi. Lekin bina proper training ke:
          </p>
          <ul className="space-y-3 my-6">
            <li className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
              <span><strong>Contamination ki problem aati hai:</strong> Mold aur bacteria pura crop barbad kar dete hain.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
              <span><strong>Spawn wastage:</strong> Sahi temperature aur humidity nahi hone par spawn waste ho jata hai.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
              <span><strong>Fruiting issues:</strong> Proper pinheads nahi bante ya dry ho jate hain.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
              <span><strong>Quality degradation:</strong> Mushrooms ka color aur shape kharab banta hai, jiski vajah se market rates nahi milte.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
              <span><strong>Paise ka nuksan:</strong> Yield kharab hone par mehnat aur lagat dono doob jati hain.</span>
            </li>
          </ul>
          <p>
            Training ke baad aap in sab galtiyon se bach sakte hain aur pehle batch se hi profit kama sakte hain. Yahi reason hai ki <strong>10,000+ farmers aur entrepreneurs</strong> pehle training lete hain, phir farming shuru karte hain.
          </p>

          {/* Section: Online Mushroom Training */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Online Mushroom Farming Training | Ghar Baithe Seekho — Sirf ₹299
          </h2>
          <p>
            Hamari online mushroom farming training course India ki sabse affordable aur comprehensive training hai. Ek video-based training program hai jisme aap apni speed se seekh sakte hain.
          </p>
          
          <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 my-8">
            <h3 className="text-xl font-bold mb-4 text-primary-start flex items-center gap-2">
              <BookOpen size={18} /> Online Mushroom Course Mein Kya Sikhoge?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Mushroom farming introduction & potential</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Oyster mushroom cultivation step by step</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Button mushroom cultivation technique</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Milky mushroom (Calocybe indica) kheti</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Shiitake aur Reishi mushroom basics</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Spawn identify aur quality spawn key aspects</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Substrate preparation (paddy, wheat, sugarcane bagasse)</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Fruiting chamber building & temp/humidity setup</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Contamination identify aur control solutions</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Harvesting, grading, and premium packaging</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Fresh vs. Dry Mushroom market value comparison</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Mushroom business marketing & selling strategies</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Mushroom business profit calculations</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> Govt schemes & NABARD subsidy guidelines</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">Online Training Ke Fayde | Benefits of Online Mushroom Course</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-sm">
            <li><strong>Ghar baithe:</strong> Kisi bhi state, city ya village se join kar sakte hain.</li>
            <li><strong>Hindi mein full explanation:</strong> Clear language aur high visual formatting.</li>
            <li><strong>Lifetime access:</strong> Ek baar buy karo, habi bhi aur jitni baar chaho dekho.</li>
            <li><strong>Certificate:</strong> Course complete karne ke baad certificate milega.</li>
            <li><strong>WhatsApp support:</strong> Any doubts directly cleared by our training experts.</li>
            <li><strong>Cross-device friendly:</strong> Mobile, Tablet aur Laptop sabhi vertical platforms par seamlessly chalta hai.</li>
            <li><strong>Sirf ₹299:</strong> India ka sabse budget-friendly agricultural training program.</li>
          </ul>

          <div className="glass p-8 rounded-3xl border border-primary-start/20 bg-primary-start/5 text-center my-8 max-w-xl mx-auto">
            <span className="text-2xl font-black block mb-2 text-[#22c55e]">📱 ONLINE MUSHROOM TRAINING — SIRF ₹299</span>
            <p className="font-bold text-sm text-slate-300">Certificate ke Saath | Hindi Mein | Lifetime Access</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://organicmushroomfarm.shop/training" className="inline-block bg-[#22c55e] text-black font-extrabold text-sm px-6 py-3 rounded-xl hover:scale-105 transition-transform">
                Register Now
              </a>
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-900 border border-white/10 text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-white/5 transition-all">
                WhatsApp: 9203544140
              </a>
            </div>
          </div>

          {/* Section: Offline Mushroom Training */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Offline Mushroom Training — Jabalpur Farm Pe Aake Seekho
          </h2>
          <p>
            Jinhe practically farm dekhna hai, hands-on kaam karna hai, aur expert se seedha baat karni hai — unke liye hamari offline training Jabalpur, Madhya Pradesh mein available hai.
          </p>
          <p>
            <strong>Organic Mushroom Farm Jabalpur</strong> mein ek live working farm hai jahan aap asli mushroom cultivation process dekhoge aur khud karoge. Yahan oyster, milky, aur button mushroom ki commercial cultivation hoti hai.
          </p>

          <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 my-8">
            <h3 className="text-xl font-bold mb-4 text-primary-start flex items-center gap-2">
              <Users size={18} /> Offline Mushroom Training Mein Kya Hoga?
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>Farm tour:</strong> Live production cycle rooms, structural setup setups check karein.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>Substrate preparation:</strong> Straw wetting, chemical treatment process haath se seekhein.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>Spawn inoculation:</strong> Sahi amount aur uniform seeding inoculation process techniques.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>Fruiting chamber setup:</strong> Climate components, ventilation exhaust configurations.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>Harvesting technique:</strong> Optimum picking indicators and gentle detachment demo.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>Dry mushroom parameters:</strong> Wet yield optimization and solar/electric dehydration setups.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>Packaging & Branding:</strong> Modern labeling, moisture-blocking sealing variables.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>1-on-1 Consultation:</strong> Personal layout budgeting planning sessions with Tanish Soni Sir.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Offline Training Details Table</h3>
          <div className="overflow-x-auto border dark:border-white/10 border-black/10 rounded-2xl glass mb-8">
            <table className="w-full text-left font-sans text-sm">
              <thead>
                <tr className="bg-white/5 border-b dark:border-white/10 border-black/10 text-primary-start font-bold">
                  <th className="p-4 uppercase tracking-wider">Detail</th>
                  <th className="p-4 uppercase tracking-wider">Information</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="p-4 font-bold text-white border-r border-white/5">Location</td>
                  <td className="p-4">Organic Mushroom Farm, Jabalpur, Madhya Pradesh</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white border-r border-white/5">Duration</td>
                  <td className="p-4">1 to 3 Days (as per requirements & scale index)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white border-r border-white/5">Language</td>
                  <td className="p-4">Hindi / Hinglish (Simple everyday terms)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white border-r border-white/5">Training Type</td>
                  <td className="p-4">100% Practical Field-work + Theoretical Concept Clarity</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white border-r border-white/5">Certificate</td>
                  <td className="p-4 text-[#22c55e] font-bold">Yes — Stamped & Issued on Course Completion</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white border-r border-white/5">Contact Support</td>
                  <td className="p-4">WhatsApp: 9203544140</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white border-r border-white/5">Official Site</td>
                  <td className="p-4">organicmushroomfarm.shop</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white border-r border-white/5">Scheduling Code</td>
                  <td className="p-4 font-bold text-orange-400">Call SMS / WhatsApp to schedule slot beforehand</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Comparison Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Online vs Offline Mushroom Training — Comparison
          </h2>
          <div className="overflow-x-auto border dark:border-white/10 border-black/10 rounded-2xl glass mb-8">
            <table className="w-full text-left font-sans text-xs sm:text-sm">
              <thead>
                <tr className="bg-white/5 border-b dark:border-white/10 border-black/10 text-primary-start font-bold">
                  <th className="p-3 uppercase">Feature</th>
                  <th className="p-3 uppercase">Online Training ₹299</th>
                  <th className="p-3 uppercase">Offline Training Jabalpur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {[
                  ["Location", "Kahi se bhi (India/World)", "Jabalpur, Madhya Pradesh"],
                  ["Duration", "Self-paced (Lifetime access)", "1 - 3 Days Modules"],
                  ["Medium", "Detailed HD video segments + Notes", "Physical Live Demos + Hand-work"],
                  ["Certificate", "Yes (Digital copy)", "Yes (Physical signed/stamped certificate)"],
                  ["Language", "Simple Hindi", "Simple Hindi / Hinglish"],
                  ["Cost", "₹299 only", "Affordable (Contact for batch pricing)"],
                  ["Hands-on", "No (Theory-based learning via Video)", "Yes (Full farm work experience)"],
                  ["Best For", "Beginners, Remote learners, Part-time seekers", "Serious commercial farmers, Farm setups"],
                  ["Support", "Active WhatsApp query group support", "Direct 1-on-1 expert support"],
                  ["Spawn Supply", "Available separately (Pan India dispatch)", "Directly available from the farm"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01]">
                    <td className="p-3 font-bold text-white border-r border-white/5">{row[0]}</td>
                    <td className="p-3 border-r border-white/5">{row[1]}</td>
                    <td className="p-3 font-medium text-slate-300">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section: Varieties Covered */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Kaunsi Mushroom Ki Training Available Hai? | Varieties Covered
          </h2>
          <p>Hamari training modules mein in high-revenue varieties ke single production segments hain:</p>
          
          <div className="space-y-6 my-8">
            <div className="p-6 rounded-3xl bg-white/[0.01] border dark:border-white/5 border-black/5">
              <h3 className="text-[#22c55e] font-extrabold text-lg flex items-center gap-2 mb-2">
                1. Oyster Mushroom (Pleurotus ostreatus) Training
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Oyster mushroom sabse popular aur beginner-friendly mushroom hai. Kam investment, fast growth (14-21 days), aur high demand. Training mein substrate preparation se lekar harvesting tak sab sikhayenge.
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4 text-xs font-bold text-slate-400">
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Paddy straw cultivation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Wheat straw cultivation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Cotton waste cultivation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Multiple flush management</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.01] border dark:border-white/5 border-black/5">
              <h3 className="text-[#22c55e] font-extrabold text-lg flex items-center gap-2 mb-2">
                2. Button Mushroom (Agaricus bisporus) Training
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Button mushroom India ki sabse zyada biki jaane wali mushroom hai. Thoda technical hai — composting process complex hota hai. Training mein compost preparation, casing preparation, casing soil, temperature structure adjustments sikhaya jata hai.
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4 text-xs font-bold text-slate-400">
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Long and Short Composting methods</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Casing soil preparation methods</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Temperature-controlled room setup</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Disease & pest prevention methods</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.01] border dark:border-white/5 border-black/5">
              <h3 className="text-[#22c55e] font-extrabold text-lg flex items-center gap-2 mb-2">
                3. Milky Mushroom (Calocybe indica) Training
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Milky mushroom India ka garam mausam mushroom hai — June se September tak ideal climate. Training mein high-temperature resistant crop protocols sikhate hain.
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4 text-xs font-bold text-slate-400">
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Summer cultivation setup</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> High humidity management</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Commercial production scaling</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.01] border dark:border-white/5 border-black/5">
              <h3 className="text-[#22c55e] font-extrabold text-lg flex items-center gap-2 mb-2">
                4. Shiitake, Reishi & Other Exotic Mushroom Training
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Advanced learners ke liye exotic aur medicinal mushroom training bhi available hai. Inki market value bohot high hoti hai — especially export markets mein.
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4 text-xs font-bold text-slate-400">
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Shiitake log cultivation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Reishi (Ganoderma) medical production</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#22c55e]" /> Export parameters alignment</li>
              </ul>
            </div>
          </div>

          {/* Section: Certificate Benefits */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Mushroom Training Certificate | Certification Ka Kya Fayda?
          </h2>
          <p>
            Hamare mushroom training program ke completion ke baad aapko ek certificate milega jo:
          </p>
          <ul className="space-y-3 my-6">
            <li className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
              <CheckCircle2 size={18} className="text-primary-start shrink-0 mt-0.5" />
              <span><strong>Government schemes apply karne mein helpful hota hai:</strong> NABARD, PMEGP, Mudra Loan apply karne ke liye educational competency proof demand hota hai.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
              <CheckCircle2 size={18} className="text-primary-start shrink-0 mt-0.5" />
              <span><strong>Bank loan processing:</strong> Agri-loans verification ke time training certificates competency prove karte hain.</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
              <CheckCircle2 size={18} className="text-primary-start shrink-0 mt-0.5" />
              <span><span><strong>Professional credibility:</strong> Business profile ya resume boost hota hai, jisse consultants ya setups create karne mein help milti hai.</span></span>
            </li>
            <li className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-700">
              <CheckCircle2 size={18} className="text-primary-start shrink-0 mt-0.5" />
              <span><strong>Farmer community trust:</strong> Agar aap spawn distribution ya local setups set up kar rahe hain, log proof mangte hain.</span>
            </li>
          </ul>
          <p className="italic text-xs font-bold text-orange-400">
            * Certificate Organic Mushroom Farm, Jabalpur, Madhya Pradesh ki taraf se issue hota hai — officially stamped aur signed.
          </p>

          {/* Section: Who Should Join */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Ye Training Kis Ke Liye Hai? | Who Should Join?
          </h2>
          <div className="overflow-x-auto border dark:border-white/10 border-black/10 rounded-2xl glass mb-8">
            <table className="w-full text-left font-sans text-sm">
              <thead>
                <tr className="bg-white/5 border-b dark:border-white/10 border-black/10 text-primary-start font-bold">
                  <th className="p-4 uppercase shrink-0">Target Group</th>
                  <th className="p-4 uppercase">Why Join?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {[
                  ["Farmers / Kisaan", "Extra side income, utilizing organic crop wastes, off-season farming opportunities."],
                  ["Women / SHG Members", "Low physical work, indoor space friendly, small initial budget requirements."],
                  ["Youth / Students", "Agri-tech careers exploration, startups formulation opportunities, self-made jobs."],
                  ["Unemployed Graduates", "Establish easy local production, self-employment with low-capital startup indices."],
                  ["Existing Business Owners", "Agriculture diversifications, adding mushrooms to organic supply lines."],
                  ["Online Sellers (Amazon/Flipkart)", "Organic food segment branding expansions, highly priced dried packaging exports."],
                  ["NGO / KVK Workers", "Expand core teaching modules, farmer upliftment knowledge bases up-scaling."],
                  ["Consultants / Trainers", "Agricultural professional up-skilling, certifications portfolios creation."],
                  ["NRI / Overseas Indians", "Set up stable family income sources in native states, export linkages buildups."]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01]">
                    <td className="p-4 font-bold text-white border-r border-white/5 whitespace-nowrap">{row[0]}</td>
                    <td className="p-4 text-slate-300 leading-relaxed">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section: Government Support */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Government Schemes for Mushroom Farming Training
          </h2>
          <p>
            India mein mushroom farming ko government ka strong support milta hai. Training ke baad aap in schemes se subsidy aur funding le sakte hain:
          </p>
          <ul className="space-y-3 text-sm my-6">
            <li className="flex items-start gap-2.5"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>NABARD Agri-Entrepreneurship Program:</strong> Mushroom farming unit build ke liye central state subsidies structure.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>PMEGP (Prime Minister's Employment Generation Programme):</strong> Urban and rural business setups configuration loans with 15-35% subsidy.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>National Horticulture Mission (NHM):</strong> Specific regional unit set up grants.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>Rashtriya Krishi Vikas Yojana (RKVY):</strong> State agro schemes alignment funding options.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>Mudra Loan:</strong> Collateral-free business lines available in Shishu, Kishore, and Tarun categories.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>MP Horticulture Department:</strong> Special target group benefits specific for Madhya Pradesh farmers.</li>
            <li className="flex items-start gap-2.5"><CheckCircle2 size={16} className="text-primary-start shrink-0 mt-0.5" /> <strong>KVK (Krishi Vigyan Kendra):</strong> Official recognition parameters validation support.</li>
          </ul>
          <p className="text-sm">
            Training complete karne ke baad hum aapko in schemes ke application process mein bhi guide karte hain.
          </p>

          {/* ROI Table */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Mushroom Farming Mein Kitna Profit Hoga? | ROI After Training
          </h2>
          <div className="overflow-x-auto border dark:border-white/10 border-black/10 rounded-2xl glass mb-8">
            <table className="w-full text-left font-sans text-xs sm:text-sm">
              <thead>
                <tr className="bg-white/5 border-b dark:border-white/10 border-black/10 text-primary-start font-bold">
                  <th className="p-3 uppercase">Scale</th>
                  <th className="p-3 uppercase">Investment</th>
                  <th className="p-3 uppercase">Monthly Revenue</th>
                  <th className="p-3 uppercase text-[#22c55e]">Monthly Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {[
                  ["Small (100 sq ft)", "₹15,000 – ₹25,000", "₹8,000 – ₹15,000", "₹5,000 – ₹10,000"],
                  ["Medium (500 sq ft)", "₹60,000 – ₹1,00,000", "₹40,000 – ₹70,000", "₹25,000 – ₹45,000"],
                  ["Commercial (1000+ sq ft)", "₹2,00,000 – ₹5,00,000", "₹1,20,000 – ₹2,50,000", "₹80,000 – ₹1,50,000"],
                  ["Online Selling (dry mushroom)", "₹5,00,000 – ₹10,00,000", "₹2,00,000 – ₹5,00,000", "₹1,20,000 – ₹3,50,000"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01]">
                    <td className="p-3 font-bold text-white border-r border-white/5">{row[0]}</td>
                    <td className="p-3 border-r border-white/5">{row[1]}</td>
                    <td className="p-3 border-r border-white/5">{row[2]}</td>
                    <td className="p-3 font-bold text-[#22c55e]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 italic">
            * Ye estimates average Indian market conditions pe based hain. Actual profit location, variety, aur marketing ke according vary kar sakta hai.
          </p>

          {/* Section: Reviews */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Training Participants Ki Baat | Student Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="glass p-6 rounded-2xl border dark:border-white/5 border-black/5 text-left relative">
              <div className="flex gap-1 text-orange-400 mb-3"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                "Online training lene ke baad maine 200 bags se start kiya. 3 mahine mein cost recover ho gayi. Certificate se bank loan bhi easily mila. Bahut accha program hai."
              </p>
              <span className="font-bold text-xs uppercase text-white block">— Ramesh Kumar, Chhindwara MP</span>
            </div>
            
            <div className="glass p-6 rounded-2xl border dark:border-white/5 border-black/5 text-left relative">
              <div className="flex gap-1 text-orange-400 mb-3"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                "Main ek housewife hun. ₹299 mein itni detailed training milegi ye sochti nahi thi. Ab main ghar pe oyster mushroom grow karti hun aur local market mein sell karti hun. Monthly ₹8,000-10,000 ho jaata hai."
              </p>
              <span className="font-bold text-xs uppercase text-white block">— Priya Sharma, Bhopal</span>
            </div>

            <div className="glass p-6 rounded-2xl border dark:border-white/5 border-black/5 text-left relative">
              <div className="flex gap-1 text-orange-400 mb-3"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                "Offline training ke liye farm aaya tha. Live demonstration dekhke bahut clear ho gaya. Tanish Sir ne sab detail mein bataya — spawn quality, contamination control, marketing sab kuch. Highly recommended."
              </p>
              <span className="font-bold text-xs uppercase text-white block">— Ajay Yadav, Jabalpur</span>
            </div>
          </div>

          {/* Registration Procedure */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Training Join Kaise Karen? | Registration Process
          </h2>
          <div className="glass p-6 rounded-2xl border dark:border-white/5 border-black/5 my-6 text-sm leading-relaxed">
            <ol className="list-decimal pl-6 space-y-3 font-semibold text-slate-300">
              <li>Website visit karo: <a href="https://organicmushroomfarm.shop/training" target="_blank" rel="noopener noreferrer" className="text-primary-start font-bold">organicmushroomfarm.shop</a></li>
              <li>Online Training — ₹299 pay karo (UPI / Card / Net Banking)</li>
              <li>WhatsApp karo <span className="text-[#22c55e]">9203544140</span> pe — confirmation layout update instructions milenge</li>
              <li>Video portal content access milega turant — explore and enjoy</li>
              <li>Official Stamp Completion Certificate milega completion parameters ke baad</li>
            </ol>
            <p className="mt-4 text-xs font-bold text-orange-400">
              * Offline Training ke liye: WhatsApp pe slots availability schedule karo — 9203544140. Bach dates, stay-rooms booking structures and fee structures explain kar diye jayenge.
            </p>
          </div>

          {/* FAQs section */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Q1: Mushroom training ki fees kitni hai?",
                a: "Online training sirf ₹299 mein available hai. Ye India ki sabse affordable mushroom farming course hai. Offline training ke liye WhatsApp karo — fees batch aur duration ke according hoti hai."
              },
              {
                q: "Q2: Kya training ke baad certificate milega?",
                a: "Haan. Online aur offline dono training ke baad Organic Mushroom Farm ka official certificate milega. Ye government schemes aur bank loans mein useful hota hai."
              },
              {
                q: "Q3: Training Hindi mein hogi ya English mein?",
                a: "Training primarily Hindi aur Hinglish mein hogi — taaki koi bhi easily samajh sake. Koi technical background ki zaroorat nahi hai."
              },
              {
                q: "Q4: Kya main training ke baad spawn order karti/kar sakta hun?",
                a: "Bilkul! Training ke baad hum spawn supply bhi karte hain. Pan-India delivery available hai — oyster, milky, button, shiitake sab varieties ka spawn."
              },
              {
                q: "Q5: Kya online training mobile pe dekh sakte hain?",
                a: "Haan, training completely mobile-friendly hai. Android ya iPhone — kisi bhi phone pe chal sakta hai. Lifetime access milta hai — jab chahein dekho."
              },
              {
                q: "Q6: Kya training ke baad farm setup mein help milegi?",
                a: "Haan! Hamare consultant service ke through aap apne farm ka complete setup plan banwa sakte hain. Jabalpur aur surrounding areas mein site visit bhi possible hai."
              },
              {
                q: "Q7: Kya mushroom farming profitable hai India mein?",
                a: "Haan — India mein mushroom ki demand 30-40% har saal badhti ja rahi hai. Fresh mushroom, dry mushroom, mushroom powder, aur value-added products — sab ki market growing hai. Sahi training ke baad ek choti si jagah se bhi ₹10,000-50,000 monthly earn ho sakta hai."
              },
              {
                q: "Q8: Kya NRI ya other state ke log bhi training join kar sakte hain?",
                a: "Haan! Online training poori duniya mein koi bhi join kar sakta hai — UAE, UK, USA, Canada, Nepal, Bangladesh — sab se participants aate hain. Offline training ke liye Jabalpur aana hoga."
              }
            ].map((faq, i) => (
              <div key={i} className="pb-4 border-b border-white/5">
                <h4 className="font-bold text-base text-white flex items-center gap-2">
                  <HelpCircle size={16} className="text-primary-start shrink-0" /> {faq.q}
                </h4>
                <p className="text-slate-400 text-sm pl-6 mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Cities listing */}
          <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-start border-b dark:border-white/5 border-black/5 pb-2">
            Mushroom Training Available Hai In Cities Mein
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            Online training ke through — India ke kisi bhi shehar se join karo:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-bold text-slate-400">
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Jabalpur (MP farm visit)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Bhopal (Online + offline)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Indore (Online available)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Delhi & NCR (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Mumbai (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Pune (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Hyderabad (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Bangalore (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Chennai (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Kolkata (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Lucknow (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Nagpur (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Raipur (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Gwalior (Online + offline)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Chhindwara (Online/visit)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Sagar (Online/visit)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Satna (Online)</span>
            <span className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:text-white transition-colors">✨ Rewa (Online)</span>
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 rounded-3xl gradient-bg text-center">
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Start Your Mushroom Journey Today!</h3>
            <p className="dark:text-white/80 text-slate-800 mb-6 max-w-2xl mx-auto">
              Enroll in India's most affordable training program and begin your path towards highly profitable commercial agriculture setup structures.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-center">
              <Link to="/training" className="inline-flex items-center justify-center bg-white text-primary-start font-bold py-3 px-8 rounded-xl shadow-xl hover:scale-105 transition-transform w-[280px]">
                Enroll in Training
              </Link>
              <a href="tel:9203544140" className="inline-flex items-center justify-center dark:bg-black/20 bg-white/20 dark:text-white text-slate-900 font-bold py-3 px-8 rounded-xl backdrop-blur border dark:border-white/20 border-black/20 hover:bg-white/30 transition-colors w-[280px]">
                Call / WhatsApp: 9203544140
              </a>
            </div>
          </div>

        </article>
      </div>
    </div>
  );
};

export default ArticleMushroomTrainingAffordable;
