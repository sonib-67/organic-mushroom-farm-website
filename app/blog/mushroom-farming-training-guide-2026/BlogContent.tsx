import React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Thermometer,
  Layers,
  Sprout,
  Target,
  CheckCircle2,
  Megaphone,
  Smartphone,
  QrCode,
  Share2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { FAQSection } from "./FAQSection";

export function BlogContent() {
  return (
    <div className="space-y-6 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
      {/* Intro paragraphs */}
      <div className="space-y-3">
        <p>
          Aaj ke samay mein commercial mushroom farming sirf ek kheti nahi, balki ek highly profitable agritech business ban chuka hai. Lekin internet par aadhi-adhuri jankari aur purane tarikon ke karan 80% naye growers pehle hi saal mein fail ho jate hain. Agar aap ek successful organic mushroom farm setup karna chahte hain, toh aapko ek aisi mushroom cultivation training ki zaroorat hai jo sirf theory na sikhaye, balki practically profit kamana sikhaye.
        </p>
        <p>
          Is in-depth guide mein hum un advanced techniques aur secret strategies ka khulasa karenge jo aapko kisi aam website par nahi milengi. Hum zero se lekar advanced spawn preparation aur digital marketing tak sab kuch cover karenge.
        </p>
      </div>

      {/* Section 1 */}
      <section className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-emerald-500 pl-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-500" />
          Mushroom Cultivation Training Kyu Zaroori Hai? (The Foundation)
        </h2>
        <p className="mb-3">
          Mushroom grow karna paudhe ugane jaisa nahi hai. Yeh ek fungi hai, jiske liye ek controlled environment ki zaroorat hoti hai. Ek professional mushroom farming training course aapko in galtiyon se bachata hai:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
          <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30">
            <div className="flex items-center gap-2 mb-1.5 text-red-700 dark:text-red-400 font-bold text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>Contamination (Sankraman)</span>
            </div>
            <p className="text-[12px] text-slate-600 dark:text-slate-300">
              Fungi aur bacteria ka attack jo puri fasal barbaad kar sakta hai.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30">
            <div className="flex items-center gap-2 mb-1.5 text-blue-700 dark:text-blue-400 font-bold text-xs">
              <Thermometer className="w-4 h-4" />
              <span>Temperature &amp; Humidity Control</span>
            </div>
            <p className="text-[12px] text-slate-600 dark:text-slate-300">
              Mausam ke hisaab se climate control systems ka sahi istemal.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
            <div className="flex items-center gap-2 mb-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
              <Layers className="w-4 h-4" />
              <span>Substrate Preparation</span>
            </div>
            <p className="text-[12px] text-slate-600 dark:text-slate-300">
              Sahi compost aur raw material ka chunav.
            </p>
          </div>
        </div>

        <p className="mt-3">
          Bina sahi guidance ke, log aksar galat environment set kar lete hain jisse unka pura capital waste ho jata hai. Ek structured curriculum wala course hi aapko ek pro-grower bana sakta hai.
        </p>
      </section>

      {/* Section 2 */}
      <section className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-purple-500 pl-3 flex items-center gap-2">
          <Sprout className="w-4 h-4 text-purple-500" />
          Button Mushroom Farming: Asli Profit Ka Secret
        </h2>
        <p className="mb-4">
          Bharat aur global market mein sabse zyada demand White Button Mushroom (Agaricus bisporus) ki hoti hai. Iski kheti thodi technical hoti hai, lekin returns sabse zyada hote hain. Ek advanced training curriculum mein in steps par sabse zyada focus hona chahiye:
        </p>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-purple-600 dark:text-purple-400">
              <Target className="w-4 h-4" />
              1. The Core: Spawn Preparation (Mushroom ka Beej)
            </h3>
            <p className="mb-2">
              Agar aapka beej (spawn) accha nahi hai, toh harvest kabhi accha nahi ho sakta. Market se purana spawn kharidne ke bajay, top growers apna button mushroom spawn preparation khud karte hain ya sirf certified organic labs se lete hain.
            </p>
            <ul className="space-y-1.5 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 dark:text-white">Mother Culture:</strong> Pure mycelium culture ko agar plates par develop karna.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 dark:text-white">Grain Spawn:</strong> Gehu (wheat) ya jowar ke daano ko sterilize karke uspar mycelium ko grow karna. Sahi sterilization se &ldquo;green mold&rdquo; jaise khatarnak contamination se bacha ja sakta hai.
                </span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400">
              <Layers className="w-4 h-4" />
              2. High-Yield Organic Compost Making
            </h3>
            <p>
              Organic mushroom farm setup ke liye synthetic chemicals ka use band karna hoga. Long method aur short method compost mein farq samajhna zaroori hai. Chicken manure, wheat straw, aur gypsum ke sahi ratio se aapka compost nitrogen-rich banta hai.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
              <Thermometer className="w-4 h-4" />
              3. Casing Soil aur Pinning
            </h3>
            <p>
              Compost par mycelium (safed jaal) failne ke baad (Spawn Run), uske upar mitti ki ek layer bichayi jati hai jise &apos;Casing&apos; kehte hain. Casing soil moisture hold karti hai aur temperature shock dekar mycelium ko pins (chhote mushrooms) banane par majboor karti hai.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 border-l-4 border-blue-500 pl-3 flex items-center gap-2">
          <Megaphone className="w-4 h-4 text-blue-500" />
          Apne Mushroom Business Ko Scale Kaise Karein? (Digital Marketing &amp; Automation)
        </h2>
        <p className="mb-3">
          Traditional kisaan sirf mandi mein apna maal bechte hain, jahan unhe sahi daam nahi milta. Ek modern mushroom entrepreneur apne business ko online scale karta hai.
        </p>

        <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3">
          Smart Marketing Strategies:
        </h3>

        <div className="space-y-3">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
            <div className="flex items-center gap-2 mb-1.5 font-bold text-xs text-blue-600 dark:text-blue-400">
              <Megaphone className="w-4 h-4" />
              <span>1. Meta Ads for Mushroom Sales &amp; Training:</span>
            </div>
            <p className="text-xs sm:text-[13px]">
              Agar aap apna khud ka mushroom training course ya organic products bech rahe hain, toh Facebook aur Instagram Ads (Meta Ads) sabse powerful tool hain. Custom audience targeting aur sahi campaign objectives set karke aap direct consumers aur students tak pahunch sakte hain.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
            <div className="flex items-center gap-2 mb-1.5 font-bold text-xs text-purple-600 dark:text-purple-400">
              <Smartphone className="w-4 h-4" />
              <span>2. App &amp; Online Presence:</span>
            </div>
            <p className="text-xs sm:text-[13px]">
              Apne farm ka ek digital profile banayein. Agar aap training dete hain, toh Next.js aur modern databases jaisi technologies ka use karke ek mobile-friendly platform banayein jahan students schedule check kar sakein aur study material access kar sakein.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
            <div className="flex items-center gap-2 mb-1.5 font-bold text-xs text-emerald-600 dark:text-emerald-400">
              <QrCode className="w-4 h-4" />
              <span>3. QR Code Reviews:</span>
            </div>
            <p className="text-xs sm:text-[13px]">
              Apni packaging par ek smart QR code lagayein jisse scan karke customers aapke Google Business profile par direct review de sakein. Positive reviews aapki local SEO ranking ko boost karte hain.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Conclusion Section */}
      <section className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-purple-500/5 to-teal-500/10 border border-emerald-500/20 dark:border-emerald-500/30">
        <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          Nishkarsh (Conclusion)
        </h2>
        <p className="mb-3 text-xs sm:text-sm">
          Mushroom farming 2026 aur aane wale samay ka sabse tezi se badhta hua agritech sector hai. Lekin yaad rakhein, &ldquo;Sahi knowledge ke bina farming sirf ek jua (gamble) hai.&rdquo; Ek high-quality mushroom farming training program join karein, organic spawn preparation ki science ko samjhein, aur digital marketing ka sahara lekar apne brand ko bada banayein.
        </p>
        <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
          Agar aapko yeh guide pasand aayi aur aap apna organic mushroom farm shuru karne ke liye serious hain, toh is blog ko apne network mein share zaroor karein!
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-emerald-500/20">
          <Link
            href="/training"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors shadow-sm"
          >
            Explore Mushroom Training
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/enquiry"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-emerald-500 transition-colors"
          >
            Consult with Farm Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
