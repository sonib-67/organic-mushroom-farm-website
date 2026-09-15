import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Home,
  ChevronRight,
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "અમદાવાદમાં વ્યાવસાયિક મશરૂમ ખેતી તાલીમ | ફાર્મ સેટઅપ નિષ્ણાતો",
  description:
    "Start Your Profitable Agribusiness Today! Premium mushroom farming training, spawn supply and commercial setup in Ahmedabad, Gujarat.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "અમદાવાદમાં વ્યાવસાયિક મશરૂમ ખેતી તાલીમ | ફાર્મ સેટઅપ નિષ્ણાતો",
    description:
      "Start Your Profitable Agribusiness Today! Premium mushroom farming training, spawn supply and commercial setup in Ahmedabad, Gujarat.",
    url: "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "અમદાવાદમાં વ્યાવસાયિક મશરૂમ ખેતી તાલીમ | ફાર્મ સેટઅપ નિષ્ણાતો",
    description:
      "Start Your Profitable Agribusiness Today! Premium mushroom farming training, spawn supply and commercial setup in Ahmedabad, Gujarat.",
  },
};

export default function ArticleAhmedabadTrainingPage() {
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://organicmushroomsfarm.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cities",
        item: "https://organicmushroomsfarm.com/cities",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gujarat",
        item: "https://organicmushroomsfarm.com/cities#gujarat",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Ahmedabad",
        item: "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad",
      },
    ],
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    name: "Organic Mushrooms Farm - Ahmedabad Training & Agribusiness Center",
    description:
      "Premium mushroom farming training, spawn supply and commercial setup in Ahmedabad, Gujarat.",
    url: "https://organicmushroomsfarm.com/cities/gujarat/ahmedabad",
    telephone: "+919203544140",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: [
      "SG Highway",
      "Satellite",
      "Bopal",
      "Chandkheda",
      "Motera",
      "Gota",
      "Thaltej",
      "Vastrapur",
      "Naroda",
      "Nikol",
      "Odhav",
      "Maninagar",
      "C.G. Road",
      "Prahladnagar",
      "Science City Road",
      "Gandhinagar",
      "Kalol",
      "Sanand",
      "Adalaj",
      "Dholka",
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, localBusinessSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen pt-4 sm:pt-6 pb-20 relative overflow-hidden bg-transparent dark:bg-transparent">
        {/* Ambient Background Colors */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
        </div>

        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto px-4 mb-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
          >
            <Link
              href="/"
              className="hover:text-primary-start flex items-center gap-1 transition-colors"
            >
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/cities"
              className="hover:text-primary-start transition-colors"
            >
              Cities
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/cities#gujarat"
              className="hover:text-primary-start transition-colors"
            >
              Gujarat
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 dark:text-slate-200 font-medium">
              Ahmedabad
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-6 md:p-10 lg:p-12 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden space-y-6 md:space-y-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-start/10 blur-[100px] rounded-full pointer-events-none" />

            <header className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
                અમદાવાદમાં વ્યાવસાયિક મશરૂમ ખેતી તાલીમ | ફાર્મ સેટઅપ નિષ્ણાતો
              </h1>
            </header>

            <p className="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              અમદાવાદ અને તેની આસપાસના વિસ્તારોમાં આજે હેલ્ધી લાઈફસ્ટાઈલ અને ઓર્ગેનિક ફૂડનો ક્રેઝ ઝડપથી વધી રહ્યો છે. આ બદલાવને કારણે{" "}
              <Link href="/" className="text-primary-start hover:underline font-semibold">
                Mushroom Farming
              </Link>{" "}
              in Ahmedabad (અમદાવાદમાં મશરૂમની ખેતી) એક સુપર પ્રોફિટેબલ એગ્રી-બિઝનેસ મોડલ તરીકે ઉભરી આવ્યું છે. જો તમે ખેડૂત હોવ, સ્ટુડન્ટ, મહિલા ઉદ્યોગસાહસિક (women entrepreneur) કે પછી સ્ટાર્ટઅપ ફાઉન્ડર—મશરૂમની ખેતી ઓછા રોકાણમાં અને ઓછી જગ્યામાં બમ્પર કમાણી કરવાનો એક બેસ્ટ સ્કોપ આપે છે.
            </p>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              જો તમે પણ અમદાવાદ, ગાંધીનગર કે ગુજરાતમાં તમારો પોતાનો મશરૂમ બિઝનેસ શરૂ કરવા માંગો છો, તો <strong>Organic Mushrooms Farm</strong> તમને સેટઅપથી લઈને માર્કેટિંગ સુધીનો કમ્પ્લીટ સપોર્ટ પૂરો પાડે છે.
            </p>

            <section aria-labelledby="high-demand-varieties">
              <h2
                id="high-demand-varieties"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                High-Value Mushroom Varieties in Demand
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                અમદાવાદના પ્રીમિયમ માર્કેટ્સ, હોટલ્સ, કાફે અને ફાર્માસ્યુટિકલ કંપનીઓમાં નીચેની મશરૂમ વેરાયટીઝની ખૂબ જ વધારે ડિમાન્ડ (High Demand) રહે છે:
              </p>
              <ul className="list-none space-y-3 dark:text-slate-300 text-slate-700 mb-6 md:mb-8 text-sm md:text-base">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong>Commercial Varieties:</strong> Oyster Mushroom (ઓયસ્ટર મશરૂમ), Button Mushroom (બટન મશરૂમ), Milky Mushroom (મિલ્કી મશરૂમ).
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong>Exotic Varieties:</strong> Shiitake Mushroom (શિયાતાકે).
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong>Medicinal Mushrooms (મેડિસિનલ મશરૂમ):</strong> Lion’s Mane, Reishi Mushroom, Turkey Tail, અને Cordyceps Mushroom (કીડાજડી). આ મશરૂમ્સ હેલ્થ સપ્લીમેન્ટ્સ અને વેલનેસ પ્રોડક્ટ્સમાં વ્યાપકપણે વપરાય છે.
                  </span>
                </li>
              </ul>
            </section>

            <section aria-labelledby="core-services">
              <h2
                id="core-services"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                Our Core Services: From Setup to Sales Support
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                તમારા બિઝનેસને સફળ બનાવવા માટે અમે એન્ડ-ટુ-એન્ડ કન્સલ્ટન્સી અને પ્રોડક્ટ્સ પ્રોવાઈડ કરીએ છીએ:
              </p>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    1. Mushroom Farm Setup &amp; Infrastructure
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 mb-2 text-sm md:text-base">
                    એક પ્રોફેશનલ ફાર્મ શરૂ કરવા માટે યોગ્ય પ્લાનિંગ જરૂરી છે. અમે તમને{" "}
                    <Link href="/services" className="text-primary-start hover:underline">
                      Mushroom Farm Setup
                    </Link>{" "}
                    in Ahmedabad માટે કમ્પ્લીટ ગાઈડન્સ આપીએ છીએ, જેમાં:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    <li>Growing Room Design &amp; Insulated Shed Layout</li>
                    <li>Temperature Control &amp; Humidity Management System</li>
                    <li>Ventilation &amp; AC Systems for Commercial Cultivation</li>
                    <li>Packaging &amp; Cold Storage Facility Setup</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    2. Online Mushroom Training
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    જો તમે ઘર બેઠા કે તમારા ફ્રી ટાઈમમાં મશરૂમ પ્રોડક્શન શીખવા માંગતા હોવ, તો અમારી{" "}
                    <Link href="/training" className="text-primary-start hover:underline">
                      Online Mushroom Training
                    </Link>{" "}
                    બેસ્ટ ઓપ્શન છે. આ કોર્સમાં Substrate Preparation (ભૂસાની તૈયારી), Spawn Running, Crop Management, લાઈવ હાર્વેસ્ટિંગ ટેકનિક અને ડિજિટલ માર્કેટિંગ મોડ્યુલ્સ કવર કરવામાં આવ્યા છે.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    3. Offline Mushroom Training (Practical Hands-on)
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    પ્રેક્ટિકલ અનુભવ માટે અમારી <strong>Offline Mushroom Training</strong> પ્રોગ્રામ જોઈન કરો. આમાં તમને લાઈવ ડેમોન્સ્ટ્રેશન, બેડ પ્રિપેરેશન (Bed Preparation), સ્પોન હેન્ડલિંગ અને રોગ-જીવાત નિયંત્રણ (Disease Management) વિશે રૂબરૂ શીખવા મળશે, જેથી તમે આત્મવિશ્વાસ સાથે ફાર્મ શરૂ કરી શકો.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    4. High-Yield Mushroom Spawn Sale
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    મશરૂમના સારા ઉત્પાદન માટે ક્વોલિટી બિયારણ (Spawn) હોવું સૌથી જરૂરી છે. અમે લેબ-ટેસ્ટેડ, હાઈ-યીલ્ડિંગ <strong>Oyster Mushroom Spawn</strong>, <strong>Button Mushroom Spawn</strong>, અને <strong>Milky Mushroom Spawn Sale</strong> સર્વિસ ઓફર કરીએ છીએ.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    5. Fresh Mushroom Sale Business
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    અમદાવાદની લક્ઝરી હોટલો, પ્રીમિયમ રેસ્ટોરન્ટ્સ, સબઝી મંડી અને ઓર્ગેનિક સ્ટોર્સમાં દરરોજ ફ્રેશ મશરૂમની મોટી ડિમાન્ડ રહે છે. અમે લોકલ બી-ટુ-બી (B2B) સપ્લાય ચેઈન કનેક્ટિવિટી માટે <strong>Fresh Mushroom Sale</strong> નેટવર્ક ડેવલપ કરવામાં મદદ કરીએ છીએ.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    6. Dry Mushroom Sale &amp; Processing
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    ડ્રાય મશરૂમ્સ લાંબી શેલ્ફ લાઈફ (Shelf Life) અને ઈઝી ટ્રાન્સપોર્ટેશનનો મોટો ફાયદો આપે છે. મશરૂમ પાવડર મેન્યુફેક્ચરિંગ અને <strong>Dry Mushroom Sale Business</strong> દ્વારા તમે નેશનલ અને ઈન્ટરનેશનલ માર્કેટ સુધી પહોંચી શકો છો.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    7. Professional Mushroom Consultancy
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    જો તમને પ્રોડક્શનમાં કોઈ ટેકનિકલ પ્રોબ્લેમ આવતો હોય અથવા ફાર્મનું એક્સપાન્શન કરવું હોય, તો અમારી <strong>Mushroom Consultancy Services</strong> તમને બિઝનેસ ડેવલપમેન્ટ, પ્રોડક્શન ઓપ્ટિમાઈઝેશન અને ટેકનિકલ સપોર્ટ પૂરો પાડે છે.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    8. Turnkey Projects for Investors
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    મોટા પાયે કોમર્શિયલ પ્લાન્ટ સ્થાપવા માંગતા રોકાણકારો માટે અમે{" "}
                    <Link href="/services/turnkey-setup" className="text-primary-start hover:underline">
                      Turnkey Mushroom Projects
                    </Link>{" "}
                    હેન્ડલ કરીએ છીએ. આમાં જમીન સર્વેથી લઈને, મશીનરી ઈન્સ્ટોલેશન, પ્રોડક્શન સેટઅપ અને ઓપરેશનલ હેન્ડઓવર સુધીનું તમામ કામ અમારી ટીમ કરે છે.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    9. Mushroom Business Plan &amp; ROI Analysis
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    કોઈપણ બિઝનેસ શરૂ કરતા પહેલાં તેનું ગણિત સમજવું જરૂરી છે. અમે તમને એક પ્રોપર <strong>Mushroom Business Plan &amp; ROI</strong> રિપોર્ટ બનાવી આપીએ છીએ, જેમાં ઈનિશ્યલ ઈન્વેસ્ટમેન્ટ (Initial Investment), ઓપરેટિંગ કોસ્ટ (Cost of Production) અને ચોખ્ખા નફા (Net Profit Margin) ની વિગતવાર ગણતરી હોય છે.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    10. Government Subsidy Guidance
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    મશરૂમની ખેતી પ્રોમોટ કરવા માટે સરકાર દ્વારા નેશનલ હોર્ટિકલ્ચર બોર્ડ (NHB) અને અન્ય એગ્રીકલ્ચર સ્કીમ્સ હેઠળ સબસિડી આપવામાં આવે છે. અમે તમને{" "}
                    <Link href="/contact" className="text-primary-start hover:underline">
                      Government Subsidy for Mushroom Farming
                    </Link>{" "}
                    મેળવવા માટેના ડોક્યુમેન્ટેશન અને પાત્રતા (Eligibility) અંગે કમ્પ્લીટ ગાઈડન્સ આપીએ છીએ.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    11. Mushroom Marketing Support
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    ઉત્પાદન તો થઈ ગયું, પણ વેચવું ક્યાં? અમારી <strong>Mushroom Marketing Support</strong> ટીમ તમને લોકલ રીટેલ પાર્ટનરશીપ, સુપરમાર્કેટ્સ ટાઈ-અપ, ઓનલાઈન સેલિંગ પ્લેટફોર્મ્સ અને બ્રાન્ડ બિલ્ડિંગમાં પૂરેપૂરી મદદ કરે છે.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="ahmedabad-areas">
              <h2
                id="ahmedabad-areas"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                Ahmedabad Areas &amp; Nearby Villages Covered
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6 text-sm md:text-base">
                જો તમે અમદાવાદના કોઈપણ ખૂણે કે આસપાસના ગ્રામ્ય વિસ્તારોમાં રહેતા હોવ, તો અમારી સેવાઓ તમારા સુધી ઉપલબ્ધ છે. અમે આ તમામ લોકેશન્સને પ્રાઈમરી સપોર્ટ ઝોનમાં કવર કરીએ છીએ:
              </p>

              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 mt-6">
                અમદાવાદના મુખ્ય શહેરી વિસ્તારો (Major Areas in Ahmedabad City):
              </h3>
              <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 text-sm md:text-base">
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>SG Highway (એસજી હાઇવે)</strong> &amp; <strong>Satellite (સેટેલાઇટ)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Bopal (બોપલ)</strong> &amp; <strong>South Bopal (સાઉથ બોપલ)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Chandkheda (ચાંદખેડા)</strong> &amp; <strong>Motera (મોટેરા)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Gota (ગોટા)</strong>, <strong>Thaltej (થલતેજ)</strong> &amp; <strong>Vastrapur (વસ્ત્રાપુર)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Naroda (નરોડા)</strong>, <strong>Nikol (નિકોલ)</strong> &amp; <strong>Odhav (ઓઢવ)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Maninagar (મણિનગર)</strong> &amp; <strong>C.G. Road (સીજી રોડ)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Prahladnagar (પ્રહલાદનગર)</strong> &amp; <strong>Science City Road (સાયન્સ સિટી રોડ)</strong>
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 mt-6">
                અમદાવાદની નજીકના સેન્ટર્સ (Nearby Locations &amp; Towns):
              </h3>
              <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 text-sm md:text-base">
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Gandhinagar (ગાંધીનગર)</strong> &amp; <strong>Sargasan (સરગાસણ)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Kalol (કલોલ)</strong> &amp; <strong>Chhatral (છત્રાલ)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Sanand (સાણંદ GIDC)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Adalaj (અડાલજ)</strong> &amp; <strong>Sughad (સુઘડ)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Dholka (ધોળકા)</strong> &amp; <strong>Bavla (બાવળા)</strong>
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 mt-6">
                આસપાસના પ્રમુખ ગ્રામ્ય વિસ્તારો (Nearby Villages Covered for Farming):
              </h3>
              <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 text-sm md:text-base">
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Shela Region (શેલા વિસ્તાર)</strong> &amp; <strong>Ghuma (ઘુમા)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Rancharda Region (રાંચરડા ગામ અને ફાર્મ્સ)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Godhavi Region (ગોધાવી વિસ્તાર)</strong> &amp; <strong>Garodiya (ગરોડિયા)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Kanbha Region (કાંભા)</strong> &amp; <strong>Kuha (કુહા)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Jetalpur (જેતલપુર)</strong> &amp; <strong>Aslali (અસલાલી)</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Bhat (ભાટ ગામ)</strong> &amp; <strong>Sughad Village</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Kavitha (કવિઠા)</strong>, <strong>Virochannagar (વિરોચનનગર)</strong>, અને <strong>Nandej (નાંદેજ)</strong>
                  </span>
                </li>
              </ul>
            </section>

            <section
              aria-labelledby="cta-heading"
              className="bg-linear-to-r from-primary-start/20 to-primary-end/20 p-6 md:p-8 rounded-3xl mt-8 md:mt-12 border border-primary-start/20"
            >
              <h2
                id="cta-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-4"
              >
                Conclusion: Start Your Mushroom Journey Today!
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 text-sm md:text-base">
                અમદાવાદ અને સમગ્ર ગુજરાતમાં મશરૂમ ફાર્મિંગ એ માત્ર ખેતી નથી, પણ એક હાઈ-રીટર્ન આપતો મોર્ડન એગ્રી-બિઝનેસ ઓપ્શન છે. પ્રોપર ટ્રેનિંગ, ક્વોલિટી સ્પોન, રાઈટ ફાર્મ સેટઅપ અને સોલિડ માર્કેટિંગ પ્લાન સાથે તમે આ બિઝનેસમાં ખૂબ જ ટૂંકા સમયમાં સેટ થઈ શકો છો.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                ભલે તમારો ગોલ એક નાનું હોમ-બેઝ્ડ સેટઅપ શરૂ કરવાનો હોય કે મોટું કોમર્શિયલ પ્રોડક્શન યુનિટ—<strong>Organic Mushrooms Farm</strong> તમારી સાથે છે. આજે જ અમારો સંપર્ક કરો અને ગુજરાતના આ ગ્રોઈંગ એગ્રીકલ્ચર રિવોલ્યુશનનો ભાગ બનો!
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+919203544140"
                  className="btn-primary px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  <Phone size={18} /> Call Now: 9203544140
                </a>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 text-slate-900 dark:text-white w-full sm:w-auto justify-center hover:bg-white/80 dark:hover:bg-white/10 text-sm sm:text-base"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
