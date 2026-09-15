import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Phone,
  ArrowLeft,
  GraduationCap,
  Microscope,
  FileText,
  Award,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Education Courses – Deccan Gymkhana Pune | Organic Mushrooms Farm",
  description:
    "Deccan Gymkhana, Pune मधील students साठी structured mushroom education courses, college projects आणि research साठी उपयुक्त. Scientific biology, lifecycle आणि practical cultivation.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-education-courses",
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
    title:
      "Mushroom Education Courses – Deccan Gymkhana Pune | Organic Mushrooms Farm",
    description:
      "Deccan Gymkhana, Pune मधील students साठी structured mushroom education courses, college projects आणि research साठी उपयुक्त. Scientific biology, lifecycle आणि practical cultivation.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-education-courses",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Education Courses – Deccan Gymkhana Pune | Organic Mushrooms Farm",
    description:
      "Deccan Gymkhana, Pune मधील students साठी structured mushroom education courses, college projects आणि research साठी उपयुक्त. Scientific biology, lifecycle आणि practical cultivation.",
  },
};

const faqs = [
  {
    q: "College project साठी हे course उपयोगी आहे का?",
    a: "हो, अनेक students B.Sc, M.Sc, Botany, Biotechnology, Microbiology आणि Agriculture project documentation तसेच विद्यापीठ viva साठी आमचं training आणि प्रॅक्टिकल डेटा यशस्वीपणे वापरतात.",
  },
  {
    q: "Scientific terms समजवले जातात का?",
    a: "हो, biology आणि cultivation दोन्ही दृष्टिकोनातून simple व वैज्ञानिक भाषेत समजवलं जातं. यामध्ये Mycelial run, Spore germination, Substrate sterilization, C:N ratio आणि Fruiting environmental parameters चा सखोल समावेश असतो.",
  },
  {
    q: "College submission साठी सर्टिफिकेट आणि प्रोजेक्ट रिपोर्ट मिळतो का?",
    a: "होय, कोर्स पूर्ण केल्यानंतर कॉलेज सबमिशनसाठी व्हेरिफायड सर्टिफिकेट, प्रोजेक्ट रिपोर्ट फॉरमॅट, केस स्टडीज आणि हाय-रिझोल्यूशन प्रॅक्टिकल फोटोग्राफ्स दिले जातात.",
  },
  {
    q: "Fergusson College व Garware College जवळील विद्यार्थ्यांसाठी बॅचेसची वेळ काय असते?",
    a: "कॉलेज लेक्चर्स आणि प्रॅक्टिकल्सचा विचार करून शनिवार-रविवारच्या विशेष वीकेंड बॅचेस तसेच संध्याकाळच्या लवचिक वेळेतील सेशन्स आयोजित केले जातात.",
  },
  {
    q: "कोर्समध्ये टिश्यू कल्चर किंवा स्पॉन मेकिंग लॅब टेक्नॉलॉजी शिकवली जाते का?",
    a: "बेसिक कोर्समध्ये सबस्ट्रेट पाश्चरायझेशन व लेयर स्पॉनिंग असते, तर ॲडव्हान्स्ड रिसर्च कोर्समध्ये लॅमिनार एअर फ्लो, अगार प्लेट कल्चर आणि मदर स्पॉन निर्मितीचे प्रात्यक्षिक दिले जाते.",
  },
  {
    q: "विद्यार्थ्यांसाठी किंवा कॉलेज ग्रुप्ससाठी विशेष सवलत (Student Discount) आहे का?",
    a: "होय, अधिकृत कॉलेज ओळखपत्र दाखवणाऱ्या विद्यार्थ्यांसाठी आणि 3 किंवा अधिक विद्यार्थ्यांच्या ग्रुप प्रोजेक्टसाठी विशेष शैक्षणिक सवलत उपलब्ध आहे.",
  },
];

export default function MushroomEducationCoursesPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-education-courses";

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
        name: "Mushroom Education Courses – Deccan Gymkhana Pune | Organic Mushrooms Farm",
        description:
          "Deccan Gymkhana, Pune मधील students साठी structured mushroom education courses, college projects आणि research साठी उपयुक्त. Scientific biology, lifecycle आणि practical cultivation.",
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
            name: "Mushroom Education Courses",
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
      id="education-courses-page"
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
            Education Courses
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
            <span>Back to Pune Education Hub</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <header className="text-center pt-1 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Deccan Gymkhana, FC Road & Garware College Academic Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Deccan Gymkhana, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Education Courses
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>कॉलेज प्रोजेक्ट्स व रिसर्च उपयुक्त</span>
            <span>•</span>
            <span>वैज्ञानिक मायकॉलॉजी गाईड</span>
            <span>•</span>
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              सर्व कोर्सेस तपासा
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Scientific mushroom biology and education course practical session in Deccan Gymkhana Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Academic mushroom cultivation and biotechnology education courses for students in Deccan Gymkhana, Pune.
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
              डेक्कन जिमखाना मधील विद्यार्थ्यांसाठी वैज्ञानिक व प्रॅक्टिकल मशरूम एज्युकेशन
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Deccan Gymkhana भागात Fergusson College, Garware College सारखी अनेक नामांकित colleges आहेत</strong>, आणि इथले अनेक students agriculture किंवा biology related projects साठी mushroom cultivation बद्दल शिकायला येतात.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आमचे education courses याच गरजेसाठी design केलेले आहेत — <strong>scientific दृष्टिकोनातून mushroom biology, lifecycle आणि cultivation principles समजवले जातात</strong>, जे project work किंवा research साठी सुद्धा उपयोगी पडतात. College submissions साठी documentation आणि photos सुद्धा दिले जातात.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            हे केंद्र FC Road, BMCC Road, प्रभात रोड, शिवाजीनगर आणि सावित्रीबाई फुले पुणे विद्यापीठाच्या परिसरातील सर्व विज्ञान, कृषी व बायोटेक्नॉलॉजी विद्यार्थ्यांसाठी अत्यंत सोयीचे आहे. विद्यार्थी आमच्या{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              सुलभ प्रशिक्षण कोर्सेस
            </Link>{" "}
            आणि वाजवी{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी पॅकेजेस (₹299 पासून)
            </Link>{" "}
            चा लाभ घेऊ शकतात.
          </p>
        </section>

        {/* Section 1: Academic & Research Modules */}
        <section
          id="academic-modules"
          aria-labelledby="modules-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Microscope className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="modules-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. वैज्ञानिक अभ्यासक्रम मॉड्युल्स (Scientific Mycology & Cultivation)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कॉलेजच्या सिलॅबसला साजेसा आणि प्रत्यक्ष प्रयोगांवर आधारित अभ्यासक्रम:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Mycelium Biology:</strong>
              <span className="text-slate-600 dark:text-slate-300">स्पोर जर्मिनेशन, हायफाल ग्रोथ, कार्बन-नायट्रोजन (C:N) रेशो आणि न्यूट्रिशन अपटेक मेकॅनिझम.</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Substrate Science:</strong>
              <span className="text-slate-600 dark:text-slate-300">पेंढा पाश्चरायझेशन, लिग्नोसेल्युलोजिक वेस्ट रिसायकलिंग आणि मायक्रोबियल कंडिशनिंग.</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Spawn & Pure Culture:</strong>
              <span className="text-slate-600 dark:text-slate-300">लॅबमधील मदर कल्चर, धान्य निर्जंतुकीकरण आणि कंटॅमिनेशन प्रिव्हेन्शन प्रोटोकॉल.</span>
            </div>
          </div>
        </section>

        {/* Section 2: College Project Documentation & Viva Support */}
        <section
          id="project-support"
          aria-labelledby="support-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <FileText className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="support-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. प्रोजेक्ट सबमिशन, डेटा आणि व्हायव्हा (Viva) संपूर्ण तयारी
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            विद्यार्थ्यांना प्रोजेक्ट रिपोर्ट बनवण्यासाठी आवश्यक सर्व तांत्रिक सहकार्य दिले जाते:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>हाय-रिझोल्यूशन प्रॅक्टिकल फोटोग्राफ्स:</strong> सबस्ट्रेट तयार करणे, मायसेलियम स्प्रेड, पिनहेड्स आणि मॅच्युअर फ्रूटिंगचे स्टेज-वाईज ओरिजिनल फोटो.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>डेटा टेबल्स व यील्ड कॅल्क्युलेशन्स:</strong> बायोलॉजिकल एफिशिअन्सी (BE %), तापमानातील चढ-उतार आणि आर्द्रता नियंत्रण नोंदी.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>प्रोजेक्ट रिपोर्ट फॉरमॅट:</strong> ॲब्स्ट्रॅक्ट, साहित्याचा परिचय, पद्धती (Methodology), निष्कर्ष आणि संदर्भ यादी.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>व्हायव्हा व्हॉईस (Viva Voce) प्रश्नमंजुषा:</strong> एक्सटर्नल एक्झामिनर विचारू शकतील अशा 25+ संभाव्य वैज्ञानिक प्रश्नांची उत्तरे.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Student Certification & Career Opportunities */}
        <section
          id="student-certification"
          aria-labelledby="cert-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Award className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="cert-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. व्हेरिफायड सर्टिफिकेट व करिअर संधी (Agri-Preneurship)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            शिक्षण पूर्ण झाल्यानंतर केवळ पदवीपुरते मर्यादित न राहता स्वतःचा स्टार्ट-अप किंवा लॅब सुरू करण्याची संधी:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">व्हेरिफायड सर्टिफिकेट:</strong>
              <span className="text-slate-600 dark:text-slate-300">सीव्ही (Resume) मध्ये जोडण्यासाठी अधिकृत मायकॉलॉजी व मशरूम कल्टिव्हेशन प्रमाणपत्र.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">ॲग्री-स्टार्टअप सपोर्ट:</strong>
              <span className="text-slate-600 dark:text-slate-300">कॉलेज कॅम्पसमधूनच स्वतःचा मशरूम व्यवसाय सुरू करण्यासाठी शासकीय सबसिडी गाईड.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">मदर स्पॉन व लॅब पुरवठा:</strong>
              <span className="text-slate-600 dark:text-slate-300">रिसर्चसाठी लागणारे शुद्ध{" "}
                <Link href="/spawn-seed" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  स्पॉन बियाणे
                </Link>{" "}
                व पॅथॉलॉजीमुक्त कल्चर थेट फार्म लॅबमधून उपलब्ध.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="education-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (डेक्कन जिमखाना एज्युकेशन कोर्सेसविषयी वारंवार विचारले जाणारे प्रश्न)
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
              तुमच्या कॉलेज प्रोजेक्ट व संशोधनासाठी आजच एज्युकेशन कोर्स जॉईन करा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              डेक्कन जिमखाना, एफसी रोड आणि पुण्याच्या नामांकित कॉलेज विद्यार्थ्यांसाठी विशेष सवलत व प्रॅक्टिकल सहकार्य उपलब्ध.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  स्टुडंट बेसिक कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                मूलभूत मायकॉलॉजी, प्रात्यक्षिक व्हिडिओ, ई-बुक आणि प्रोजेक्ट केस स्टडीज.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  रिसर्च व कमर्शियल मास्टरक्लास (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                बटन + ऑयस्टर शेड डिझाईन, लॅब प्रोटोकॉल, प्रोजेक्ट रिपोर्ट आणि व्हेरिफायड सर्टिफिकेट.
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
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>फी तपशील तपासा</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20पुण्यातील%20कॉलेज%20विद्यार्थी%20आहे.%20मला%20मशरूम%20एज्युकेशन%20कोर्स%20आणि%20प्रोजेक्ट%20गाईडन्सबाबत%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp वर शंका विचारा</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
