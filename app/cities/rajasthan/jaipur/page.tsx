import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Home,
  ChevronRight,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "जयपुर में आधुनिक मशरूम खेती प्रशिक्षण | सफल बिजनेस की शुरुआत",
  description:
    "Start a highly profitable mushroom business in Rajasthan. Learn from the best Mushroom Farming Training Center in Jaipur with full setup & marketing support.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/rajasthan/jaipur",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "जयपुर में आधुनिक मशरूम खेती प्रशिक्षण | सफल बिजनेस की शुरुआत",
    description:
      "Start a highly profitable mushroom business in Rajasthan. Learn from the best Mushroom Farming Training Center in Jaipur with full setup & marketing support.",
    url: "https://organicmushroomsfarm.com/cities/rajasthan/jaipur",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "जयपुर में आधुनिक मशरूम खेती प्रशिक्षण | सफल बिजनेस की शुरुआत",
    description:
      "Start a highly profitable mushroom business in Rajasthan. Learn from the best Mushroom Farming Training Center in Jaipur with full setup & marketing support.",
  },
};

export default function ArticleJaipurTrainingPage() {
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
        name: "States",
        item: "https://organicmushroomsfarm.com/states",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Rajasthan",
        item: "https://organicmushroomsfarm.com/states/rajasthan",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Jaipur",
        item: "https://organicmushroomsfarm.com/cities/rajasthan/jaipur",
      },
    ],
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    name: "Organic Mushrooms Farm Jaipur",
    description:
      "Commercial mushroom farming training, mushroom farm setup, high-yield spawn supply, fresh & dry mushroom distribution, government subsidies, and agribusiness consultancy in Jaipur, Rajasthan.",
    url: "https://organicmushroomsfarm.com/cities/rajasthan/jaipur",
    telephone: "+919203544140",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.9124,
      longitude: 75.7873,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: [
      "Jaipur",
      "Vaishali Nagar",
      "Mansarovar",
      "Jagatpura",
      "Malviya Nagar",
      "Sanganer",
      "Vidhyadhar Nagar",
      "Jhotwara",
      "Tonk Road",
      "C-Scheme",
      "Raja Park",
      "Bani Park",
      "Civil Lines",
      "Gopalpura Bypass",
      "Ajmer Road",
      "Agra Road",
      "Kalwar Road",
      "Sirsi Road",
      "Muralipura",
      "Shastri Nagar",
      "Ambabari",
      "Chomu",
      "Bagru",
      "Shahpura",
      "Kotputli",
      "Achrol",
      "Chandwaji",
      "Dudu",
      "Phagi",
      "Bassi",
      "Sambhar Lake",
      "Jobner",
      "Govindgarh",
      "Jamwa Ramgarh",
      "Viratnagar",
      "Muhana",
      "Vatika",
      "Kanota",
    ],
    priceRange: "₹₹",
  };

  const courseSchema = {
    "@type": "Course",
    name: "जयपुर में आधुनिक मशरूम खेती प्रशिक्षण | Commercial Mushroom Cultivation Guide in Rajasthan",
    description:
      "Comprehensive commercial mushroom training course covering substrate preparation, spawn management, climate control in Rajasthan climate, harvesting, subsidies, and marketing in Jaipur.",
    provider: {
      "@type": "Organization",
      name: "Organic Mushrooms Farm",
      sameAs: "https://organicmushroomsfarm.com",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      localBusinessSchema,
      courseSchema,
    ],
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
              href="/states"
              className="hover:text-primary-start transition-colors"
            >
              States
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/states/rajasthan"
              className="hover:text-primary-start transition-colors"
            >
              Rajasthan
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 dark:text-slate-200 font-medium">
              Jaipur
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-6 md:p-10 lg:p-12 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden space-y-6 md:space-y-8">
            <header className="text-center md:text-left border-b dark:border-white/10 border-black/10 pb-6 md:pb-8">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">
                जयपुर में आधुनिक मशरूम खेती प्रशिक्षण | सफल बिजनेस की शुरुआत
              </h1>
              <h2 className="text-base md:text-lg font-medium dark:text-slate-300 text-slate-700 leading-relaxed">
                Commercial Mushroom Cultivation Guide in Rajasthan
              </h2>
            </header>

            {/* Introduction Section */}
            <section aria-labelledby="intro-heading" className="space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                जयपुर, वैशाली नगर, मानसरोवर, जगतपुरा, मालवीय नगर, सांगानेर, विद्याधर नगर, झोटवाड़ा और इसके आसपास के ग्रामीण अंचलों में{" "}
                <Link href="/" className="text-primary-start hover:underline font-semibold">mushroom farming</Link>{" "}
                (मशरूम की खेती) एक बेहद आकर्षक और उच्च मुनाफे वाला कृषि-व्यवसाय बनकर उभरा है। आधुनिक
                जीवनशैली, बढ़ते हेल्थ-कॉन्शियस उपभोक्ता, और होटलों, रेस्टोरेंट्स व सुपरमार्केट्स में ऑर्गेनिक और औषधीय
                मशरूम (Medicinal Mushrooms) की लगातार बढ़ती मांग ने जयपुर को राजस्थान का सबसे बड़ा मशरूम हब बना दिया है।
              </p>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                यदि आप एक किसान हैं, छात्र हैं, कामकाजी महिला हैं, या एग्री-स्टार्टअप शुरू करना चाहते हैं, तो <strong>Organic Mushrooms Farm</strong> आपको
                पूरी तरह से प्रैक्टिकल और व्यावसायिक मार्गदर्शन प्रदान करता है। हम केवल ट्रेनिंग ही नहीं देते, बल्कि आपके बिजनेस को जमीन से उठाकर
                एक ब्रांड बनाने तक हर कदम पर आपके साथ खड़े रहते हैं।
              </p>
            </section>

            <hr className="my-6 border-t dark:border-white/10 border-black/10" />

            {/* Step 1: Comprehensive Services */}
            <section aria-labelledby="services-heading" className="space-y-4 md:space-y-5">
              <h2
                id="services-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                1. Comprehensive Services Offered by Organic Mushrooms Farm
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                जयपुर और राजस्थान के सभी जिलों के लिए हमारी सेवाएं पूरी तरह से कस्टमाइज्ड और कमर्शियल ओरिएंटेड हैं:
              </p>

              <div className="space-y-3">
                <ul className="list-none space-y-3 text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Mushroom Farm Setup in Jaipur:</strong> वैज्ञानिक तरीकों से इन्सुलेटेड कमरों, शेड और ग्रोइंग रूम्स का नक्शा व डिज़ाइन तैयार करना।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Online Mushroom Training:</strong> घर बैठे लाइव प्रैक्टिकल क्लासेज, वीडियो मॉड्युल्स और लाइफटाइम चैट असिस्टेंस के साथ <Link href="/training" className="text-primary-start hover:underline font-medium">सीखें</Link>।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Offline Mushroom Training:</strong> जयपुर स्थित हमारे <Link href="/workshop" className="text-primary-start hover:underline font-medium">ट्रेनिंग सेंटर</Link> पर आकर हाथों से बेड बनाना, स्पॉनिंग करना और क्रॉप हार्वेस्टिंग का लाइव अनुभव प्राप्त करें।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Mushroom Spawn Sale (मशरूम बीज):</strong> हाई-यील्डिंग, लैब-टेस्टेड और शुद्ध मदर कल्चर से तैयार प्रथम श्रेणी के स्पॉन की उपलब्धता।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Fresh Mushroom Sale:</strong> स्थानीय मंडियों, होटल्स और सुपरमार्केट्स के लिए ताज़ा मशरूम की डायरेक्ट सप्लाई चेन।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Dry Mushroom Sale &amp; Processing:</strong> बचे हुए या वैल्यू-एडेड मशरूम को सुखाकर राष्ट्रीय व अंतर्राष्ट्रीय स्तर पर बेचने की पूरी तकनीक।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Mushroom Consultancy &amp; Expert Advice:</strong> किसी भी बीमारी, फंगस इन्फेक्शन, या कम उत्पादन की समस्या का ऑन-कॉल और ऑन-साइट समाधान।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Turnkey Projects:</strong> बड़े पैमाने पर ऑटोमैटिक या सेमी-ऑटोमैटिक मशरूम प्लांट की स्थापना (ए से जेड तक पूरा काम हमारा)।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Business Plan &amp; ROI (Return on Investment):</strong> आपके बजट के अनुसार बैंक लोन और प्रोजेक्ट रिपोर्ट तैयार करना ताकि मुनाफा सुनिश्चित हो सके।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Government Subsidy Guidance:</strong> राष्ट्रीय बागवानी बोर्ड (NHB) और राजस्थान कृषि विभाग की 30% से 50% तक की <Link href="/subsidy" className="text-primary-start hover:underline font-medium">सब्सिडी योजनाओं</Link> का लाभ उठाने में संपूर्ण कागजी सहायता।</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                    <span><strong>Mushroom Marketing Support:</strong> आपके द्वारा उत्पादित माल को बेचने के लिए लोकल बायर्स, रीसेलर्स और कॉर्पोरेट नेटवर्क्स से सीधा जुड़ाव।</span>
                  </li>
                </ul>
              </div>
            </section>

            <hr className="my-6 border-t dark:border-white/10 border-black/10" />

            {/* Step 2: High Yield Varieties Table */}
            <section aria-labelledby="varieties-heading" className="space-y-4 md:space-y-5">
              <h2
                id="varieties-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                2. High-Yield Mushroom Varieties Cultivated in Jaipur
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                जयपुर की जलवायु और बाजार की मांग को देखते हुए निम्नलिखित प्रमुख मशरूम प्रजातियों की खेती पर विशेष प्रशिक्षण दिया जाता है:
              </p>

              <div className="overflow-x-auto rounded-xl border dark:border-white/10 border-black/10">
                <table className="w-full text-left border-collapse min-w-max text-xs md:text-sm">
                  <thead>
                    <tr className="dark:bg-white/10 bg-black/5 dark:text-white text-slate-900 font-bold">
                      <th className="p-3.5 border-b dark:border-white/10 border-black/10">Mushroom Variety</th>
                      <th className="p-3.5 border-b dark:border-white/10 border-black/10">Ideal Temp &amp; Season</th>
                      <th className="p-3.5 border-b dark:border-white/10 border-black/10">Market Demand &amp; Uses</th>
                    </tr>
                  </thead>
                  <tbody className="dark:text-slate-300 text-slate-700">
                    <tr className="border-b dark:border-white/5 border-black/5 hover:dark:bg-white/5 hover:bg-black/5 transition-colors">
                      <td className="p-3.5 font-semibold text-slate-900 dark:text-white">Oyster (ऑयस्टर मशरूम)</td>
                      <td className="p-3.5">20°C - 28°C (साल के 8-10 महीने)</td>
                      <td className="p-3.5">लोकल सब्जी मार्केट, सुखाकर पाउडर बनाना, सूप मिक्स। सबसे आसान कल्टीवेशन।</td>
                    </tr>
                    <tr className="border-b dark:border-white/5 border-black/5 hover:dark:bg-white/5 hover:bg-black/5 transition-colors">
                      <td className="p-3.5 font-semibold text-slate-900 dark:text-white">Button (बटन मशरूम)</td>
                      <td className="p-3.5">14°C - 22°C (सर्दियों में, या AC प्लांट में)</td>
                      <td className="p-3.5">होटल, रेस्टोरेंट, पिज़्ज़ा आउटलेट्स, ढाबे और मैरिज कैटरिंग में सबसे ज्यादा।</td>
                    </tr>
                    <tr className="border-b dark:border-white/5 border-black/5 hover:dark:bg-white/5 hover:bg-black/5 transition-colors">
                      <td className="p-3.5 font-semibold text-slate-900 dark:text-white">Milky (मिल्की मशरूम)</td>
                      <td className="p-3.5">28°C - 38°C (तेज गर्मियों के मौसम में)</td>
                      <td className="p-3.5">लंबी शेल्फ-लाइफ। राजस्थान की गर्मियों के लिए सबसे बेहतरीन व्यावसायिक विकल्प।</td>
                    </tr>
                    <tr className="border-b dark:border-white/5 border-black/5 hover:dark:bg-white/5 hover:bg-black/5 transition-colors">
                      <td className="p-3.5 font-semibold text-slate-900 dark:text-white">Shiitake (शिटाके)</td>
                      <td className="p-3.5">15°C - 20°C (नियंत्रित वातावरण)</td>
                      <td className="p-3.5">प्रीमियम होटल्स, चाइनीज व जापानी रेस्तरां, कैंसर और इम्यूनिटी बूस्टर में उच्च मांग।</td>
                    </tr>
                    <tr className="border-b dark:border-white/5 border-black/5 hover:dark:bg-white/5 hover:bg-black/5 transition-colors">
                      <td className="p-3.5 font-semibold text-slate-900 dark:text-white">Lion’s Mane &amp; Reishi</td>
                      <td className="p-3.5">नियंत्रित तापमान और नमी</td>
                      <td className="p-3.5">सुपरफूड और न्यूट्रास्युटिकल्स इंडस्ट्री, दिमागी स्वास्थ्य और क्रोनिक बीमारियों की दवाओं में।</td>
                    </tr>
                    <tr className="hover:dark:bg-white/5 hover:bg-black/5 transition-colors">
                      <td className="p-3.5 font-semibold text-slate-900 dark:text-white">Cordyceps Militaris</td>
                      <td className="p-3.5">15°C - 18°C (पूरी तरह से लैब सेटअप)</td>
                      <td className="p-3.5">अत्यधिक महंगी (लाखों रुपये प्रति किलो)। एथलीट सप्लीमेंट्स, एंटी-एजिंग बूस्टर।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="my-6 border-t dark:border-white/10 border-black/10" />

            {/* Step 3: Scientific Mushroom Farm Setup */}
            <section aria-labelledby="infrastructure-heading" className="space-y-3 md:space-y-4">
              <h2
                id="infrastructure-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                3. Scientific Mushroom Farm Setup: Step-by-Step Infrastructure
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                कमर्शियल स्तर पर सफलता पाने के लिए मशरूम फार्म का बुनियादी ढांचा वैज्ञानिक नियमों के अनुसार होना आवश्यक है। हमारे एक्सपर्ट्स
                निम्नलिखित मानकों पर <Link href="/services" className="text-primary-start hover:underline font-medium">सेटअप तैयार</Link> करवाते हैं:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                <li><strong>Growing Room Layout:</strong> वर्टिकल फार्मिंग (लोहे या बांस के रैक्स) का उपयोग करके कम से कम जगह में 4 गुना अधिक उत्पादन प्राप्त करना।</li>
                <li><strong>Climate Control Systems:</strong> फॉगर्स, ह्यूमिडिफायर और वेंटिलेशन एग्जॉस्ट फैन्स का सही संयोजन ताकि 80-90% नमी (Humidity) हमेशा बनी रहे।</li>
                <li><strong>Substrate Pasteurization Unit:</strong> भूसे या कंपोस्ट को पूरी तरह से कीटाणुरहित (Sterilize) करने के लिए स्टीम बॉयलर या केमिकल ड्रम का सेटअप।</li>
                <li><strong>Incubation (Spawn Run) Room:</strong> मशरूम के कवक जाल (Mycelium) के तेजी से फैलने के लिए पूरी तरह से अंधेरा और सही तापमान वाला कमरा।</li>
              </ul>
            </section>

            <hr className="my-6 border-t dark:border-white/10 border-black/10" />

            {/* Step 4: Commercial Business Plan & ROI */}
            <section aria-labelledby="planning-heading" className="space-y-3 md:space-y-4">
              <h2
                id="planning-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                4. Commercial Business Plan, ROI &amp; Government Subsidies
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                मशरूम उत्पादन केवल एक कृषि कार्य नहीं, बल्कि एक शुद्ध बिजनेस है। बिना सही वित्तीय योजना के निवेश करना जोखिम भरा हो सकता
                है। हमारी टीम आपके लिए एक सटीक <Link href="/business-plan" className="text-primary-start hover:underline font-medium">Mushroom Business Project Report</Link> तैयार करती है:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                <li><strong>Initial Investment &amp; Returns:</strong> यदि आप एक छोटे कमरे (10x10 फीट) से शुरुआत करते हैं, तो मात्र ₹15,000 से ₹20,000 की लागत आती है, जिससे आप हर महीने ₹8,000 से ₹12,000 तक कमा सकते हैं। बड़े पैमाने पर (Commercial AC Plant) निवेश करने पर 1.5 से 2 साल के भीतर पूरी पूंजी वापस (ROI) मिल जाती है।</li>
                <li><strong>Rajasthan Govt Subsidies:</strong> राजस्थान सरकार और केंद्र सरकार की एकीकृत बागवानी विकास मिशन (MIDH) के तहत महिलाओं, अनुसूचित जाति/जनजाति के उद्यमियों और छोटे किसानों को मशरूम यूनिट स्थापित करने के लिए भारी सब्सिडी दी जा रही है। हम बैंक लोन फाइलिंग से लेकर <Link href="/subsidy" className="text-primary-start hover:underline font-medium">सब्सिडी अप्रूवल</Link> तक पूरी कंसल्टेंसी प्रदान करते हैं।</li>
              </ul>
            </section>

            <hr className="my-8 border-t-2 dark:border-white/10 border-black/10" />

            {/* Step 5: Target Areas & Villages in Jaipur */}
            <section aria-labelledby="areas-heading" className="space-y-4 md:space-y-6">
              <h2
                id="areas-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                5. Target Areas &amp; Villages in Jaipur
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                जयपुर शहर के कोने-कोने और उससे जुड़े सभी ग्रामीण और अर्ध-शहरी इलाकों में हम अपनी सेवाएं और लॉजिस्टिक्स सपोर्ट पहुंचा रहे हैं।
                नीचे दिए गए सभी क्षेत्रों के निवासी हमारे जयपुर केंद्र से सीधे जुड़ सकते हैं:
              </p>

              <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mt-4 mb-1">
                Major Urban Clusters &amp; Neighborhoods (मुख्य शहरी क्षेत्र):
              </h3>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                वैशाली नगर (Vaishali Nagar), मानसरोवर (Mansarovar), जगतपुरा (Jagatpura), मालवीय नगर (Malviya Nagar), सांगानेर (Sanganer), विद्याधर नगर (Vidhyadhar Nagar), झोटवाड़ा (Jhotwara), टोंक रोड (Tonk Road), सी-स्कीम (C-Scheme), राजा पार्क (Raja Park), बनीपार्क (Bani Park), सिविल लाइंस (Civil Lines), गोपालपुरा बाईपास (Gopalpura Bypass), अजमेर रोड (Ajmer Road), आगरा रोड (Agra Road), कालवाड़ रोड (Kalwar Road), सिरसी रोड (Sirsi Road), मुरलीपुरा (Muralipura), शास्त्री नगर (Shastri Nagar), और अम्बाबाड़ी (Ambabari)।
              </p>

              <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mt-4 mb-1">
                Satellite Towns &amp; Highway Suburbs (सैटेलाइट टाउन और उपनगर):
              </h3>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                चौमु (Chomu), बगरू (Bagru), शाहपुरा (Shahpura), कोटपुतली (Kotputli), अचरोल (Achrol), चंदवाजी (Chandwaji), दूदू (Dudu), फागी (Phagi), बस्सी (Bassi), सांभर लेक (Sambhar Lake), जोबनेर (Jobner), गोविंदगढ़ (Govindgarh), जमवा रामगढ़ (Jamwa Ramgarh), और विराटनगर (Viratnagar)।
              </p>

              <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mt-4 mb-1">
                Target Rural &amp; Village Clusters (ग्रामीण एवं ढाणी क्षेत्र):
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                <li><strong>मुहाना क्षेत्र (Muhana Region):</strong> मुहाना गांव, केसर चौराहा, श्योपुर, सुमेर नगर, मांग्यावास, और शिकारपुरा।</li>
                <li><strong>कालवाड़ क्षेत्र (Kalwar Region):</strong> कालवाड़, हाथोज, झलाई, निवारू, माचवा, पचार, और करधनी गांव।</li>
                <li><strong>अचरोल एवं दिल्ली हाईवे (Achrol Region):</strong> अचरोल, बिलौची, कूकस, लबाना, साईवाड़, और मनोहरपुर।</li>
                <li><strong>जमवा रामगढ़ क्षेत्र (Jamwa Ramgarh Region):</strong> रामगढ़, डांगरवाड़ा, थलाई, सायपुरा, गढ़वाजी, और आंधी कस्बा।</li>
                <li><strong>बस्सी एवं आगरा रोड क्षेत्र (Bassi Region):</strong> बस्सी, कानोता, जटवाड़ा, झराना, पालड़ी मीना, और सुमेल।</li>
                <li><strong>फागी एवं सांगानेर ग्रामीण (Sanganer Rural):</strong> वाटिका, चित्तौड़ा, पलावाला जाटान, रेनवाल मांजी, डिग्गी मालपुरा रोड के गांव, और चंदलाई।</li>
              </ul>
            </section>

            <hr className="my-8 border-t-2 dark:border-white/10 border-black/10" />

            {/* Step 6: Strategic Marketing Support */}
            <section aria-labelledby="marketing-heading" className="space-y-3 md:space-y-4">
              <h2
                id="marketing-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                6. Strategic Marketing Support &amp; Network Development
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                नए मशरूम उत्पादकों के सामने सबसे बड़ी चुनौती होती है—&ldquo;माल कहां बेचें?&rdquo; इसके लिए <strong>Organic Mushrooms Farm</strong> आपको एक
                रेडीमेड मार्केटिंग इकोसिस्टम प्रदान करता है:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                <li><strong>B2B Direct Supply:</strong> जयपुर की मुहाना मंडी (Muhana Mandi) और लाल कोठी सब्जी मंडी के थोक विक्रेताओं से सीधा संपर्क।</li>
                <li><strong>HORECA Network:</strong> जयपुर के प्रमुख फाइव-स्टार होटलों, रिसॉर्ट्स (जैसे कूकस और दिल्ली रोड के रिसॉर्ट्स) और कैफे के साथ कस्टमाइज्ड कॉन्ट्रैक्ट्स।</li>
                <li><strong>Value-Added Processing:</strong> यदि आपका फ्रेश मशरूम नहीं बिक पाता है, तो हम उसे सोलर ड्रायर के माध्यम से सुखाकर Mushroom Powder, Mushroom Pickle (अचार), और Mushroom Papad बनाने की ट्रेनिंग देते हैं, जिसकी बाजार में 3 गुना अधिक कीमत मिलती है।</li>
              </ul>
            </section>

            {/* CTA Section */}
            <section
              aria-labelledby="cta-heading"
              className="bg-linear-to-r from-primary-start/20 to-primary-end/20 p-6 md:p-8 rounded-3xl mt-6 md:mt-8 border border-primary-start/20"
            >
              <h2
                id="cta-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 mb-3"
              >
                Ready to Grow Your Agribusiness?
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed mb-4">
                सही शुरुआत ही बड़ी सफलता की कुंजी है। आज ही अपने नजदीकी जयपुर केंद्र से संपर्क करें और मशरूम फार्मिंग क्रांति का
                हिस्सा बनें! <br /><br />
                <strong>Organic Mushrooms Farm - Your Trusted Agri-Business Partner in Rajasthan.</strong>
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
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
