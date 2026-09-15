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
  title: "Mushroom Farming Business for Young Entrepreneurs in Tiruchirappalli",
  description:
    "Smart Mushroom Farming for Young Entrepreneurs in Tiruchirappalli | திருச்சிராப்பள்ளியில் இளைஞர்களுக்கான ஸ்மார்ட் மஷ்ரூம் பிசினஸ் வழிகாட்டி 2026",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming Business for Young Entrepreneurs in Tiruchirappalli",
    description:
      "Smart Mushroom Farming for Young Entrepreneurs in Tiruchirappalli | திருச்சிராப்பள்ளியில் இளைஞர்களுக்கான ஸ்மார்ட் மஷ்ரூம் பிசினஸ் வழிகாட்டி 2026",
    url: "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Business for Young Entrepreneurs in Tiruchirappalli",
    description:
      "Smart Mushroom Farming for Young Entrepreneurs in Tiruchirappalli | திருச்சிராப்பள்ளியில் இளைஞர்களுக்கான ஸ்மார்ட் மஷ்ரூம் பிசினஸ் வழிகாட்டி 2026",
  },
};

export default function ArticleTiruchirappalliTrainingPage() {
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
        name: "Tamil Nadu",
        item: "https://organicmushroomsfarm.com/cities#tamil-nadu",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tiruchirappalli",
        item: "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli",
      },
    ],
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    name: "Organic Mushrooms Farm - Tiruchirappalli Training & Agribusiness Center",
    description:
      "Smart Mushroom Farming for Young Entrepreneurs in Tiruchirappalli. Commercial mushroom farm setup, online and offline training, spawn supply, and agribusiness consultancy.",
    url: "https://organicmushroomsfarm.com/cities/tamil-nadu/tiruchirappalli",
    telephone: "+919203544140",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tiruchirappalli",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: [
      "Srirangam",
      "Thillai Nagar",
      "KK Nagar",
      "Cantonment",
      "Woraiyur",
      "Golden Rock",
      "Thuvakudi",
      "Crawford",
      "Lalgudi",
      "Manapparai",
      "Thuraiyur",
      "Samayapuram",
      "Navalpattu",
      "Panjappur",
      "Jeeyapuram",
      "Manikandam",
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "திருச்சிராப்பள்ளி தட்பவெப்ப நிலைக்கு எந்த வகை காளான் மிகவும் ஏற்றது?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "திருச்சிராப்பள்ளியின் வெப்பமான காலநிலைக்கு பால் காளான் (Milky Mushroom) மற்றும் சிப்பி காளான் (Oyster Mushroom) வளர்ப்பு மிகவும் ஏற்றது. நவீன வெப்பநிலை கட்டுப்பாடு கொண்ட அறைகளில் பட்டன் காளான் மற்றும் மருத்துவ காளான்களையும் வெற்றிகரமாக சாகுபடி செய்யலாம்.",
        },
      },
      {
        "@type": "Question",
        name: "இளைஞர்கள் மற்றும் ஆரம்ப நிலை தொழில்முனைவோர் சிறிய இடத்தில் காளான் வளர்ப்பை தொடங்க முடியுமா?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ஆம், பெரிய விவசாய நிலங்கள் தேவையில்லை. ஒரு சிறிய அறை அல்லது மாடியில் குறைந்த முதலீட்டில் indoor grow kit மூலம் ஆரம்பித்து, தேவைக்கு ஏற்ப வணிக ரீதியான பண்ணையாக விரிவுபடுத்தலாம்.",
        },
      },
      {
        "@type": "Question",
        name: "How can young entrepreneurs in Trichy access mushroom training and bank subsidies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive online courses and practical offline workshops covering substrate preparation, spawn management, and disease control. We also provide bankable mushroom project reports to help entrepreneurs obtain MSME and government subsidies.",
        },
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, localBusinessSchema, faqSchema],
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
              href="/cities#tamil-nadu"
              className="hover:text-primary-start transition-colors"
            >
              Tamil Nadu
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 dark:text-slate-200 font-medium">
              Tiruchirappalli
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-6 md:p-10 lg:p-12 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden space-y-6 md:space-y-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-start/10 blur-[100px] rounded-full pointer-events-none" />

            <header>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
                Smart Mushroom Farming for Young Entrepreneurs in Tiruchirappalli | திருச்சிராப்பள்ளியில் இளைஞர்களுக்கான ஸ்மார்ட் மஷ்ரூம் பிசினஸ் வழிகாட்டி 2026
              </h1>
            </header>

            <p className="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              The startup culture is growing rapidly across India, and today, many young entrepreneurs are looking for businesses that require practical skills, can begin on a small scale, and offer long-term growth potential. திருச்சிராப்பள்ளியில் பல இளைஞர்கள் பாரம்பரிய வேலைகளை மட்டுமல்லாமல், நவீன வேளாண்மை மற்றும் உணவு சார்ந்த தொழில்களையும் தேர்வு செய்து வருகின்றனர்.{" "}
              <Link href="/services/turnkey-setup" className="text-primary-start hover:underline font-semibold">
                Mushroom farming
              </Link>{" "}
              இதில் மிக முக்கியமான மற்றும் லாபகரமான ஒரு தொழில் வாய்ப்பாக உருவெடுத்துள்ளது.
            </p>

            <section aria-labelledby="why-choosing-mushroom">
              <h2
                id="why-choosing-mushroom"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                Why Are Young Entrepreneurs Choosing Mushroom Farming?
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Unlike many traditional agricultural businesses, commercial mushroom farming offers unique advantages that perfectly suit modern youth:
              </p>
              <ul className="list-disc pl-5 space-y-3 dark:text-slate-300 text-slate-700 mb-6 md:mb-8 text-sm md:text-base">
                <li>
                  <strong>உட்புற சாகுபடி (Indoor Cultivation):</strong> இதற்காக பெரிய விவசாய நிலங்கள் தேவையில்லை; ஒரு சிறிய அறையில் கூட indoor grow kit மூலம் ஆரம்பிக்கலாம்.
                </li>
                <li>
                  <strong>Small Space Requirement:</strong> Young entrepreneurs can start small and gradually scale up their{" "}
                  <Link href="/services/turnkey-setup" className="text-primary-start hover:underline">
                    mushroom farm setup
                  </Link>{" "}
                  as demand increases.
                </li>
                <li>
                  <strong>ஆண்டு முழுவதும் உற்பத்தி (Year-Round Production):</strong> பருவமழையை நம்பியிருக்காமல், வருடம் முழுவதும்{" "}
                  <Link href="/" className="text-primary-start hover:underline">
                    organic mushroom farming
                  </Link>{" "}
                  மூலம் நிலையான வருமானம் பெறலாம்.
                </li>
                <li>
                  <strong>மதிப்புக்கூட்டப்பட்ட பொருட்கள் (Value-Added Products):</strong> காளான் பவுடர், உலர் காளான் மற்றும் ஆரோக்கிய உணவுப் பொருட்கள் தயாரித்து விற்பனை செய்யலாம்.
                </li>
              </ul>
            </section>

            <section aria-labelledby="startup-opportunities">
              <h2
                id="startup-opportunities"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                Startup Opportunities in the Mushroom Industry
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Instead of focusing only on cultivation, you can build a highly profitable agribusiness through multiple channels:
              </p>
              <ul className="list-disc pl-5 space-y-3 dark:text-slate-300 text-slate-700 mb-6 md:mb-8 text-sm md:text-base">
                <li>
                  <strong>Mushroom Farm Setup:</strong> Start a modern commercial mushroom cultivation unit in your local area.
                </li>
                <li>
                  <strong>ஆன்லைன் மற்றும் ஆஃப்லைன் பயிற்சி (Online &amp; Offline Training):</strong> You can launch the best{" "}
                  <Link href="/training" className="text-primary-start hover:underline font-semibold">
                    online mushroom training course in India
                  </Link>{" "}
                  or offer hands-on{" "}
                  <Link href="/workshop" className="text-primary-start hover:underline font-semibold">
                    workshops
                  </Link>{" "}
                  covering live demonstrations and bed preparation.
                </li>
                <li>
                  <strong>Mushroom Spawn Supply:</strong> Supply quality grain spawn to commercial growers through certified{" "}
                  <Link href="/services/spawn-supply" className="text-primary-start hover:underline font-semibold">
                    mushroom spawn supply
                  </Link>
                  .
                </li>
                <li>
                  <strong>Fresh &amp; Dry Mushroom Supply:</strong> Sell premium organic mushrooms to hotels, supermarkets, and direct customers.
                </li>
                <li>
                  <strong>ஆலோசனை மற்றும் வழிகாட்டுதல் (Mushroom Consultancy):</strong> புதிய தொழில்முனைவோருக்கு mushroom project report மற்றும்{" "}
                  <Link href="/services/turnkey-setup" className="text-primary-start hover:underline">
                    turnkey mushroom project
                  </Link>{" "}
                  அமைத்து தரும்{" "}
                  <Link href="/services/consultancy" className="text-primary-start hover:underline font-semibold">
                    Mushroom Consultancy
                  </Link>{" "}
                  ஆலோசகராக செயல்படலாம்.
                </li>
              </ul>
            </section>

            <section aria-labelledby="high-demand-varieties">
              <h2
                id="high-demand-varieties"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                High-Demand Mushroom Varieties (அதிக தேவையுள்ள முக்கிய காளான் வகைகள்)
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                சந்தையில் நல்ல வரவேற்பை பெற்றுள்ள காளான் வகைகளைத் தேர்ந்தெடுப்பது வியாபார வெற்றிக்கு மிகவும் அவசியம்:
              </p>
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-primary-start shrink-0" />
                    <Link href="/services/oyster-mushroom" className="text-primary-start hover:underline">
                      Oyster Mushroom
                    </Link>
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed pl-6 text-sm md:text-base">
                    சிறந்த தொடக்க நிலை காளான்; ஆரம்பக்கட்ட பயிற்சியாளர்கள் learn oyster mushroom cultivation step by step மூலம் எளிதாக வளர்க்கலாம்.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-primary-start shrink-0" />
                    <Link href="/services/button-mushroom" className="text-primary-start hover:underline">
                      Button Mushroom
                    </Link>
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed pl-6 text-sm md:text-base">
                    இது இந்தியாவின் அதிக விற்பனையாகும் காளான் வகை ஆகும்.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-primary-start shrink-0" />
                    <Link href="/services/milky-mushroom" className="text-primary-start hover:underline">
                      Milky Mushroom
                    </Link>
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed pl-6 text-sm md:text-base">
                    திருச்சி போன்ற வெப்பமான காலநிலைக்கு (Warm climates) மிகவும் ஏற்றது.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-primary-start shrink-0" /> மருத்துவ காளான்கள் (Medicinal Mushrooms)
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed pl-6 text-sm md:text-base">
                    Shiitake (premium gourmet), Lion&apos;s Mane, Reishi, Turkey Tail, மற்றும் Cordyceps போன்ற உயர் மதிப்புள்ள medicinal mushrooms மூலம் சுகாதார மற்றும் ஆரோக்கிய சந்தையில் (health and wellness category) நல்ல லாபம் ஈட்டலாம்.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="training-skill-development">
              <h2
                id="training-skill-development"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                Training &amp; Skill Development (பயிற்சி மற்றும் தொழில் மேம்பாடு)
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Learning before investment significantly reduces business risks. Whether you are searching for a beginner mushroom course or an advanced button mushroom cultivation course, training is essential.
              </p>
              <ul className="list-disc pl-5 space-y-3 dark:text-slate-300 text-slate-700 mb-6 md:mb-8 text-sm md:text-base">
                <li>
                  <strong>Online Training:</strong> Course topics often include mushroom cultivation, spawn management, farm hygiene, harvesting, and marketing. Earning a mushroom farming certificate course online builds credibility.
                </li>
                <li>
                  <strong>செயல்முறைப் பயிற்சி (Practical Learning):</strong> ஆஃப்லைன் பயிற்சி மூலம் காளான் படுக்கை தயாரிப்பு (Bed preparation), தரக் கட்டுப்பாடு (Quality control), மற்றும் உற்பத்தி மேலாண்மை போன்றவற்றை நேரடியாக கற்கலாம்.
                </li>
              </ul>
            </section>

            <section aria-labelledby="tiruchirappalli-areas">
              <h2
                id="tiruchirappalli-areas"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                Tiruchirappalli Areas Covered (காளான் வளர்ப்புக்கு ஏற்ற பகுதிகள்)
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Tiruchirappalli combines education, agriculture, and industrial development, creating massive potential for a mushroom farming startup. You can successfully launch your nearby mushroom farm in the following target areas:
              </p>
              <ul className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 text-xs sm:text-sm">
                <li className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-start gap-2.5">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      முக்கிய நகரப் பகுதிகள் (Major Areas):
                    </strong>
                    <span className="text-slate-600 dark:text-slate-300">
                      Srirangam, Thillai Nagar, KK Nagar, Cantonment, Woraiyur, Golden Rock, Thuvakudi, மற்றும் Crawford.
                    </span>
                  </div>
                </li>
                <li className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-start gap-2.5">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      அருகிலுள்ள நகரங்கள் (Nearby Locations):
                    </strong>
                    <span className="text-slate-600 dark:text-slate-300">
                      Lalgudi, Manapparai, Thuraiyur, மற்றும் Samayapuram.
                    </span>
                  </div>
                </li>
                <li className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-start gap-2.5">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      கிராமப்புறப் பகுதிகள் (Nearby Villages):
                    </strong>
                    <span className="text-slate-600 dark:text-slate-300">
                      Navalpattu Region, Panjappur Belt, Jeeyapuram Area, மற்றும் Manikandam Rural Region.
                    </span>
                  </div>
                </li>
              </ul>
            </section>

            <section aria-labelledby="business-plan-subsidies">
              <h2
                id="business-plan-subsidies"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                Business Plan, Subsidies &amp; Marketing
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 text-sm md:text-base">
                <strong>Business Plan &amp; ROI:</strong> Before executing your{" "}
                <Link href="/blog/mushroom-farming-business-plan-india" className="text-primary-start hover:underline font-semibold">
                  mushroom farm setup
                </Link>
                , clearly evaluate your startup budget, operating costs, production capacity, and market demand.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 text-sm md:text-base">
                <strong>அரசு மானியம் (Government Subsidy):</strong> தகுதியான விவசாயிகள் மற்றும் தொழில்முனைவோர், MSME மற்றும் உணவு பதப்படுத்தும் திட்டங்களின் கீழ் mushroom loan subsidy பெற வாய்ப்புகள் உள்ளன.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                <strong>சந்தைப்படுத்தல் (Mushroom Marketing Support):</strong> Successful businesses focus heavily on brand building, digital marketing, direct customer sales, and restaurant supply. Marketing is one of the biggest growth drivers in this industry.
              </p>
            </section>

            <section aria-labelledby="final-thoughts">
              <h2
                id="final-thoughts"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 md:mb-6 border-l-4 border-primary-start pl-4"
              >
                Final Thoughts (முடிவுரை)
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                For young entrepreneurs in Tiruchirappalli, mushroom farming is more than just cultivation—it is a brilliant opportunity to build a complete agribusiness. Whether your goal is to offer an online mushroom business training program, become an organic mushroom spawn supplier, or secure a mushroom loan subsidy for your startup, Trichy offers phenomenal opportunities for long-term business success. சிறந்த பயிற்சியுடன் உங்கள் தொழில் பயணத்தை இன்றே தொடங்குங்கள்!
              </p>
            </section>

            <section
              aria-labelledby="cta-heading"
              className="bg-linear-to-r from-primary-start/20 to-primary-end/20 p-6 md:p-8 rounded-3xl mt-8 md:mt-12 border border-primary-start/20"
            >
              <h2
                id="cta-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-4"
              >
                Ready to Grow Your Agribusiness?
              </h2>
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
