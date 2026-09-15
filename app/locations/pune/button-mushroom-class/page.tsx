import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  Thermometer,
  Wind,
  ShieldCheck,
  HelpCircle,
  BookOpen,
  Phone,
  Droplets,
  TrendingUp,
  Layers,
  Store,
  ArrowLeft,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Button Mushroom Class – Manjri Pune | Organic Mushrooms Farm",
  description:
    "Manjri, Pune outskirts मध्ये button mushroom class. मोकळ्या जागेचा फायदा घेऊन commercial mushroom farming सुरू करा. Compost beds, casing soil व मार्केट विक्रीचे सविस्तर प्रशिक्षण.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/locations/pune/button-mushroom-class",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Button Mushroom Class – Manjri Pune | Organic Mushrooms Farm",
    description:
      "Manjri, Pune outskirts मध्ये button mushroom class. मोकळ्या जागेचा फायदा घेऊन commercial mushroom farming सुरू करा. Compost beds, casing soil व मार्केट विक्रीचे सविस्तर प्रशिक्षण.",
    url: "https://organicmushroomsfarm.com/locations/pune/button-mushroom-class",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title: "Button Mushroom Class – Manjri Pune | Organic Mushrooms Farm",
    description:
      "Manjri, Pune outskirts मध्ये button mushroom class. मोकळ्या जागेचा फायदा घेऊन commercial mushroom farming सुरू करा. Compost beds, casing soil व मार्केट विक्रीचे सविस्तर प्रशिक्षण.",
  },
};

const faqs = [
  {
    q: "मोकळी जागा असल्याचा फायदा काय?",
    a: "Manjri आणि Pune ग्रामीण परिसरात मोकळी जागा असल्यामुळे मोठ्या प्रमाणावर compost beds सहज तयार करता येतात. यामुळे जागेचे भाडे वाचते आणि व्यावसायिक (commercial) स्तरावर मोठ्या व्हॉल्यूममध्ये बटन मशरूम उत्पादन घेऊन जास्त नफा मिळवता येतो.",
  },
  {
    q: "Commercial scale वर सुरुवात कशी करावी?",
    a: "Commercial शेतीसाठी सुरुवातीला योग्य कंपोस्ट युनिट, नियंत्रित तापमान व आर्द्रता असलेली ग्रो रूम (14-18°C), आणि खात्रीशीर स्पॉन पुरवठा आवश्यक असतो. आमच्या training मध्ये scale-up करण्यासाठी स्टेप-बाय-स्टेप प्रोजेक्ट रिपोर्ट व बिझनेस प्लॅन दिला जातो.",
  },
  {
    q: "पुण्यात बटन मशरूमसाठी कच्चा माल (Raw Material) कुठे मिळेल?",
    a: "बटन मशरूम कंपोस्टसाठी लागणारा गव्हाचा पेंढा, कोंबडी खत, जिप्सम आणि चोकर हे Manjri, Hadapsar, दौंड आणि पुणे परिसरातील कृषी केंद्रांवर मुबलक प्रमाणात सहज उपलब्ध होते. स्पॉन (बियाणे) आमच्या फार्मकडून थेट कुरिअरने मिळते.",
  },
  {
    q: "पुण्यातील उन्हाळ्यात बटन मशरूमचे उत्पादन घेता येते का?",
    a: "होय, उन्हाळ्यात तापमान नियंत्रित ठेवण्यासाठी इन्सुलेटेड रूम (PUF पॅनल किंवा थर्मोकोल) आणि फॉगर किंवा एसी युनिट वापरून 14°C ते 18°C तापमान नियंत्रित करता येते. हिवाळ्यात मात्र नैसर्गिकरित्या कमी खर्चात बंपर उत्पादन मिळते.",
  },
  {
    q: "पुण्यात बटन मशरूमला विक्रीसाठी कोणते मार्केट उपलब्ध आहे?",
    a: "पुण्यातील गुलटेकडी मार्केट यार्ड, हडपसर भाजी मार्केट, कोरेगाव पार्क व कल्याणी नगरमधील हॉटेल्स, सुपरमार्केट्स आणि केटरिंग व्यवसायांमध्ये ताज्या बटन मशरूमला दररोज प्रचंड मागणी असते.",
  },
  {
    q: "प्रशिक्षणानंतर प्रत्यक्ष फार्म सेटअपसाठी सपोर्ट मिळतो का?",
    a: "होय, Organic Mushrooms Farm तर्फे ऑनलाईन व ऑफलाईन ट्रेनिंग पूर्ण झाल्यानंतर WhatsApp द्वारे थेट तज्ज्ञ मार्गदर्शन, फार्म व्हिजिट सल्ला, आणि उत्तम दर्जाच्या स्पॉनचा अविरत पुरवठा केला जातो.",
  },
];

export default function ButtonMushroomClassManjriPage() {
  const pageUrl = "https://organicmushroomsfarm.com/locations/pune/button-mushroom-class";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://organicmushroomsfarm.com/#organization",
        name: "Organic Mushroom Farm",
        url: "https://organicmushroomsfarm.com",
        logo: {
          "@type": "ImageObject",
          url: "https://organicmushroomsfarm.com/images/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9203544140",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Katangi Road",
          addressLocality: "Jabalpur",
          addressRegion: "Madhya Pradesh",
          postalCode: "483105",
          addressCountry: "IN",
        },
        sameAs: ["https://wa.me/919203544140"],
      },
      {
        "@type": "WebSite",
        "@id": "https://organicmushroomsfarm.com/#website",
        url: "https://organicmushroomsfarm.com",
        name: "Organic Mushroom Farm",
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Button Mushroom Class – Manjri Pune | Organic Mushrooms Farm",
        description:
          "Manjri, Pune outskirts मध्ये button mushroom class. मोकळ्या जागेचा फायदा घेऊन commercial mushroom farming सुरू करा. Compost beds, casing soil व मार्केट विक्रीचे सविस्तर प्रशिक्षण.",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://organicmushroomsfarm.com",
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
            name: "Maharashtra",
            item: "https://organicmushroomsfarm.com/states/maharashtra",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Pune",
            item: "https://organicmushroomsfarm.com/locations/pune",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Button Mushroom Class Manjri",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main
      id="button-mushroom-class-page"
      className="min-h-screen bg-transparent pt-20 sm:pt-24 pb-12 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-2"
      >
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/states"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              States
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/states/maharashtra"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Maharashtra
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/locations/pune"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Pune
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px]"
          >
            Button Mushroom Class
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact, Seamless & Translucent (Zero Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Back Link to Pune Directory */}
        <div className="pt-1">
          <Link
            href="/locations/pune"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Pune Resources</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <header className="text-center pt-1 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Manjri, Hadapsar & Pune Outskirts Agribusiness Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Manjri, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Button Mushroom Class
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>पुणे व परिसर प्रशिक्षण</span>
            <span>•</span>
            <span>व्यावसायिक बटन मशरूम वर्ग</span>
            <span>•</span>
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              बटन मशरूम कल्टिव्हेशन गाईड
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png"
              alt="Commercial Button Mushroom Farm Setup and Compost Beds in Manjri Pune"
              width={600}
              height={315}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Commercial button mushroom cultivation setup & compost beds designed for Pune agricultural outskirts.
          </p>
        </div>

        {/* Executive Summary Card - Exact Core Content from React Vite */}
        <section
          aria-labelledby="intro-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="intro-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
            >
              मांजरी, पुणे परिसरात बटन मशरूम शेतीची मोठी संधी
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Manjri हा Pune च्या outskirts मधला भाग असल्यामुळे इथे तुलनेने जास्त मोकळी जागा उपलब्ध आहे</strong>, जी mushroom farming साठी एक मोठा फायदा आहे. आमची{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              button mushroom class
            </Link>{" "}
            इथल्या रहिवाशांना या मोकळ्या जागेच्या फायद्याचा पुरेपूर वापर कसा करायचा हे शिकवते — मोठ्या प्रमाणावर{" "}
            <Link
              href="/compost-unit"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              compost beds
            </Link>{" "}
            कसे तयार करायचे आणि commercial scale वर production कसं वाढवायचं याबद्दल सविस्तर मार्गदर्शन दिलं जातं.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            हे प्रशिक्षण विशेषतः <strong>Manjri, Phursungi, Loni Kalbhor, Hadapsar, Wagholi आणि शेजारील दौंड, सासवड</strong> भागातील शेतकरी, तरुण उद्योजक आणि महिला बचत गटांसाठी अत्यंत उपयुक्त ठरत आहे. शहरालगत असल्याने तयार माल थेट मार्केट यार्डमध्ये पाठवून चांगला नफा मिळवणे शक्य होते.
          </p>
        </section>

        {/* Section 1: Button Mushroom Cultivation Process */}
        <section
          id="cultivation-steps"
          aria-labelledby="cultivation-steps-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="cultivation-steps-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. बटन मशरूम उत्पादनाचे मुख्य टप्पे (Step-by-Step SOP)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            बटन मशरूम (<em>Agaricus bisporus</em>) ची लागवड शास्त्रीय पद्धतीने केली जाते. यामध्ये खालील 4 टप्पे अत्यंत महत्त्वाचे असतात:
          </p>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>कंपोस्ट खत निर्मिती (Composting)</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                गव्हाचा पेंढा, कोंबडी खत, जिप्सम आणि युरिया यांचे योग्य मिश्रण करून पाश्चरायझेशन टनेल किंवा लॉन्ग मेथडने दर्जेदार कंपोस्ट तयार केले जाते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>स्पॉनिंग व स्पॉन रन (Spawning)</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                लॅब-सर्टिफाइड दर्जेदार{" "}
                <Link
                  href="/spawn-seed"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  मशरूम स्पॉन (बियाणे)
                </Link>{" "}
                कंपोस्टमध्ये मिसळून 22°C ते 25°C तापमानात कवकजाल (mycelium) पसरवले जाते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>कॅसिंग थर (Casing Soil Layer)</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                स्पॉन रन पूर्ण झाल्यावर त्यावर 3-4 सेमी जाडीचा निर्जंतुक पीट मॉस किंवा कॉयर पिथचा कॅसिंग थर दिला जातो, जो ओलावा टिकवतो आणि पिनहेड्स तयार करतो.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>फ्रूटिंग आणि तोडणी (Harvesting)</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                14°C ते 18°C तापमान व 85-90% आर्द्रतेमध्ये आकर्षक पांढरे बटन मशरूम तयार होतात. क्लोज्ड कप अवस्थेत हळुवार हाताने तोडणी करून पॅकिंग केले जाते.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Pune Climate & Setup Requirements */}
        <section
          id="pune-climate"
          aria-labelledby="pune-climate-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Thermometer className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="pune-climate-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. पुणे हवामान व आवश्यक इन्फ्रास्ट्रक्चर
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुण्याचे हवामान बहुतांश महिने मध्यम असते, ज्यामुळे हिवाळ्यात (ऑक्टोबर ते फेब्रुवारी) अगदी कमी खर्चात नैसर्गिकरित्या बटन मशरूमचे उत्पादन घेता येते. उन्हाळ्यामध्ये व्यावसायिक फार्म चालवण्यासाठी योग्य तंत्रज्ञान आवश्यक असते:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Droplets className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>आर्द्रता नियंत्रण:</strong> 85% ते 90% सापेक्ष आर्द्रता राखण्यासाठी ऑटोमॅटिक फॉगर्स किंवा ह्युमिडिफायर्स वापरले जातात.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Wind className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>ऑक्सिजन आणि व्हेंटिलेशन:</strong> बटन मशरूमला फ्रूटिंग दरम्यान कार्बन डायऑक्साईड (CO2) चे प्रमाण 1000 ppm पेक्षा कमी ठेवावे लागते. यासाठी एक्झॉस्ट फॅन व HEPA फिल्टर युनिट आवश्यक असते.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>व्हर्टिकल रॅक सिस्टीम:</strong> उपलब्ध जागेचा पुरेपूर वापर करण्यासाठी 4 ते 5 थरांचे जीआय रॅक्स (GI racks) लावून उत्पादन क्षमता 4 पट वाढवता येते.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3: Market & Commercial Profitability in Pune */}
        <section
          id="pune-market"
          aria-labelledby="pune-market-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Store className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="pune-market-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. पुणे स्थानिक बाजारपेठ आणि विक्री संधी (Market Demand)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुणे हे मेट्रो शहर असल्याने येथे बटन मशरूमला बारमाही प्रचंड मागणी आहे. मांजरी व हडपसर परिसरातून थेट पुरवठा करण्यासाठी प्रमुख पर्याय:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">मार्केट यार्ड घाऊक विक्री:</strong>
              <span className="text-slate-600 dark:text-slate-300">गुलटेकडी मार्केट यार्ड व हडपसर भाजी बाजारात दररोज घाऊक दराने नियमित विक्री.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">हॉटेल्स व केटरर्स:</strong>
              <span className="text-slate-600 dark:text-slate-300">कोरेगाव पार्क, कल्याणी नगर, मगरपट्टा व विमाननगर येथील प्रीमियम रेस्टॉरंट्सना थेट पुरवठा.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">200 ग्रॅम पॅकेट्स:</strong>
              <span className="text-slate-600 dark:text-slate-300">स्थानिक सोसायटी, ऑरगॅनिक स्टोअर्स आणि सुपरमार्केट्समध्ये ब्रँडेड पॅकिंगसह जास्त नफा.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="pune-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (बटन मशरूम वर्ग - वारंवार विचारले जाणारे प्रश्न)
            </h2>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1"
              >
                <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                  Q{idx + 1}: {faq.q}
                </h3>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Training & Consultation CTA - Seamless & Translucent */}
        <section
          aria-labelledby="training-cta-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs space-y-3"
        >
          <div className="space-y-1">
            <h3
              id="training-cta-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              आजच मांजरी व पुणे बटन मशरूम वर्गात सहभागी व्हा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              स्वतःचा बटन मशरूम शेती व्यवसाय सुरू करण्यासाठी आमचे प्रमाणित प्रशिक्षण वर्ग उपलब्ध आहेत. यामध्ये कंपोस्ट मेकिंग, स्पॉन रन, कॅसिंग, रोग नियंत्रण, आणि प्रत्यक्ष विक्रीचे सर्व व्यावहारिक पैलू शिकवले जातात.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  मूलभूत मशरूम प्रशिक्षण (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                नवशिक्यांसाठी घरबसल्या ऑनलाईन व्हिडिओ लेक्चर्स, डिजिटल नोट्स आणि व्हॉट्सॲप सपोर्ट.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  व्यावसायिक कमर्शियल ब्लूप्रिंट (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                मोठ्या स्तरावरील फार्म सेटअप, कंपोस्ट पाश्चरायझेशन टनेल, बँक प्रोजेक्ट रिपोर्ट आणि खात्रीशीर मार्केट लिंकेज.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Link
              href="/training"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>प्रशिक्षण सुरू करा (₹299)</span>
            </Link>
            <Link
              href="/compost-unit"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>कंपोस्ट युनिट मॉडेल बघा</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मला%20पुणे%20मांजरी%20येथील%20बटन%20मशरूम%20क्लासबाबत%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp सल्ला मिळवा</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
