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
  title: "ଭୁବନେଶ୍ୱରରେ ବାଣିଜ୍ୟିକ ଛତୁ ଚାଷ ପ୍ରଶିକ୍ଷଣ | ଫାର୍ମ ସେଟଅପ୍ ବିଶେଷଜ୍ଞ",
  description:
    "ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶାର ରାଜଧାନୀ, ଏକ profitable mushroom business model ପାଇଁ mushroom farm setup, online/offline training, spawn supply.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ଭୁବନେଶ୍ୱରରେ ବାଣିଜ୍ୟିକ ଛତୁ ଚାଷ ପ୍ରଶିକ୍ଷଣ | ଫାର୍ମ ସେଟଅପ୍ ବିଶେଷଜ୍ଞ",
    description:
      "ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶାର ରାଜଧାନୀ, ଏକ profitable mushroom business model ପାଇଁ mushroom farm setup, online/offline training, spawn supply.",
    url: "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "ଭୁବନେଶ୍ୱରରେ ବାଣିଜ୍ୟିକ ଛତୁ ଚାଷ ପ୍ରଶିକ୍ଷଣ | ଫାର୍ମ ସେଟଅପ୍ ବିଶେଷଜ୍ଞ",
    description:
      "ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶାର ରାଜଧାନୀ, ଏକ profitable mushroom business model ପାଇଁ mushroom farm setup, online/offline training, spawn supply.",
  },
};

export default function ArticleBhubaneswarTrainingPage() {
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
        name: "Odisha",
        item: "https://organicmushroomsfarm.com/states/odisha",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Bhubaneswar",
        item: "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar",
      },
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ଭୁବନେଶ୍ୱରରେ mushroom farming କରିବାର cost କେତେ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cost ଆପଣଙ୍କର scale (small home unit ବନାମ commercial farm), jagah ଏବଂ variety ଉପରେ depend କରେ। Small-scale setup ତୁଳନାତ୍ମକ ଭାବେ କମ୍ investment ରେ ଆରମ୍ଭ ହୋଇପାରେ।",
        },
      },
      {
        "@type": "Question",
        name: "ମଶ୍ରୁମ ଚାଷରୁ କେତେ profit ମିଳେ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Profit market demand, production quality ଏବଂ marketing strategy ଉପରେ depend କରେ। Fresh ଓ dry mushroom, ଉଭୟ ପାଇଁ Bhubaneswar market ରେ ଭଲ demand ରହିଛି।",
        },
      },
      {
        "@type": "Question",
        name: "Mushroom spawn କେଉଁଠି କିଣିବି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Organic Mushrooms Farm ମାଧ୍ୟମରେ Oyster, Button, Milky ଓ Shiitake spawn direct order କରି Bhubaneswar ଓ ଆଖପାଖ ଅଞ୍ଚଳକୁ delivery ପାଇପାରିବେ।",
        },
      },
      {
        "@type": "Question",
        name: "Mushroom training ପାଇଁ କିପରି join କରିବି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Online ବା Offline, ଆପଣଙ୍କ ସୁବିଧା ଅନୁସାରେ training program ପାଇଁ ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
        },
      },
      {
        "@type": "Question",
        name: "Online training available କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ହଁ, Online Mushroom Training ସମଗ୍ର India ପାଇଁ available ଅଛି।",
        },
      },
      {
        "@type": "Question",
        name: "Offline training available କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ହଁ, Bhubaneswar ଓ ଆଖପାଖ ଅଞ୍ଚଳରେ hands-on Offline Training organize କରାଯାଏ।",
        },
      },
      {
        "@type": "Question",
        name: "Mushroom farming ପାଇଁ କେତେ ଜାଗା ଆବଶ୍ୟକ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small-scale ପାଇଁ ଏକ ଛୋଟ କୋଠରୀ ବା ଶେଡ୍ ଯଥେଷ୍ଟ। Commercial scale ପାଇଁ dedicated shed ଆବଶ୍ୟକ ହୁଏ।",
        },
      },
      {
        "@type": "Question",
        name: "ମହିଳାମାନେ mushroom farming ଆରମ୍ଭ କରିପାରିବେ କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ନିଶ୍ଚିତ ଭାବେ। ଘର ମଧ୍ୟରେ ମଧ୍ୟ ଏହା ଆରମ୍ଭ କରାଯାଇପାରେ, ଏବଂ ଅନେକ ମହିଳା ଏହାକୁ successful self-employment ମଡେଲ ଭାବେ ଅପନାଉଛନ୍ତି।",
        },
      },
      {
        "@type": "Question",
        name: "ଛାତ୍ରମାନେ mushroom farming ଆରମ୍ଭ କରିପାରିବେ କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ହଁ, part-time business ଭାବେ students ମଧ୍ୟ ଏହା ଆରମ୍ଭ କରିପାରନ୍ତି।",
        },
      },
      {
        "@type": "Question",
        name: "Government subsidy available କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligibility ଓ scheme ଉପରେ ନିର୍ଭର କରି କେତେକ entrepreneur subsidy ର ଲାଭ ପାଇପାରନ୍ତି। ଆମେ documentation ପାଇଁ guidance ଦେଇଥାଉ।",
        },
      },
      {
        "@type": "Question",
        name: "କେଉଁ mushroom variety best?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ଆରମ୍ଭ ପାଇଁ Oyster Mushroom ସବୁଠାରୁ ସହଜ ଓ popular। Commercial scale ପାଇଁ Button ଓ Milky Mushroom ମଧ୍ୟ ଭଲ option।",
        },
      },
      {
        "@type": "Question",
        name: "Mushroom କିପରି sell କରାଯିବ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Restaurant partnership, organic store, direct consumer sale ଏବଂ social media marketing ମାଧ୍ୟମରେ mushroom sell କରାଯାଇପାରେ।",
        },
      },
      {
        "@type": "Question",
        name: "ଆପଣ consultancy service ଦିଅନ୍ତି କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ହଁ, ଆମେ farm setup ଠାରୁ production ପର୍ଯ୍ୟନ୍ତ complete Consultancy ଦେଇଥାଉ।",
        },
      },
      {
        "@type": "Question",
        name: "Turnkey project provide କରନ୍ତି କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ହଁ, commercial investor ମାନଙ୍କ ପାଇଁ complete Turnkey Mushroom Project setup ଉପଲବ୍ଧ।",
        },
      },
      {
        "@type": "Question",
        name: "Marketing support ଦିଅନ୍ତି କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ହଁ, branding ଏବଂ sales strategy ପାଇଁ ମଧ୍ୟ ଆମେ support ପ୍ରଦାନ କରୁ।",
        },
      },
      {
        "@type": "Question",
        name: "Bhubaneswar ର କେଉଁ climate mushroom farming ପାଇଁ best?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monsoon (June-Sept) ର humid climate Oyster ଓ Milky Mushroom ପାଇଁ ଆଦର୍ଶ, ଏବଂ Winter (Nov-Feb) Button Mushroom ପାଇଁ suitable।",
        },
      },
      {
        "@type": "Question",
        name: "Medicinal mushroom cultivation profitable କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ହଁ, wellness market ରେ demand ବଢୁଥିବାରୁ Reishi, Cordyceps, Lion's Mane ଭଳି medicinal mushroom ର premium value ରହିଛି।",
        },
      },
      {
        "@type": "Question",
        name: "Dry mushroom ର shelf life କେତେ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ସଠିକ ଭାବେ dehydrate ଓ store କରାଗଲେ dry mushroom ମାସ ମାସ ଧରି store ହୋଇପାରେ।",
        },
      },
      {
        "@type": "Question",
        name: "Cuttack ଓ Khordha ର ଲୋକମାନେ training ପାଇପାରିବେ କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ହଁ, Cuttack, Khordha, Jatni, Pipili ସମେତ ସମଗ୍ର ଓଡ଼ିଶାରୁ ଲୋକମାନେ Online ବା Offline training ପାଇପାରିବେ।",
        },
      },
      {
        "@type": "Question",
        name: "FPO ମାନେ bulk spawn order କରିପାରିବେ କି?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ହଁ, Farmer Producer Organisation ମାନେ bulk order ଉପରେ special support ପାଇପାରନ୍ତି।",
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    name: "Organic Mushrooms Farm - Bhubaneswar Center",
    image: "https://organicmushroomsfarm.com/logo.png",
    url: "https://organicmushroomsfarm.com/cities/odisha/bhubaneswar",
    telephone: "+919203544140",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      addressCountry: "IN",
    },
    areaServed: [
      "Bhubaneswar",
      "Patia",
      "Khandagiri",
      "Chandrasekharpur",
      "Nayapalli",
      "Rasulgarh",
      "Saheed Nagar",
      "Old Town",
      "Jaydev Vihar",
      "Cuttack",
      "Khordha",
      "Jatni",
      "Pipili",
      "Balianta",
      "Balipatna",
      "Mendhasal",
      "Chandaka",
    ],
    description:
      "Commercial mushroom farming training, mushroom farm setup, spawn supply, fresh & dry mushroom distribution, and agribusiness consultancy in Bhubaneswar, Odisha.",
    priceRange: "₹₹",
  };

  const courseSchema = {
    "@type": "Course",
    name: "Commercial Mushroom Cultivation Training Bhubaneswar",
    description:
      "Comprehensive mushroom farming training covering spawn management, climate control, harvesting, and marketing strategy in Odisha.",
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
      faqSchema,
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
          <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-orange-400/20 dark:bg-orange-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-red-400/20 dark:bg-red-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
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
              href="/states/odisha"
              className="hover:text-primary-start transition-colors"
            >
              Odisha
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 dark:text-slate-200 font-medium">
              Bhubaneswar
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-6 md:p-10 lg:p-12 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden space-y-6 md:space-y-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

            <header className="text-center md:text-left border-b dark:border-white/10 border-black/10 pb-6 md:pb-8">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 md:mb-4 leading-tight">
                ଭୁବନେଶ୍ୱରରେ ବାଣିଜ୍ୟିକ ଛତୁ ଚାଷ ପ୍ରଶିକ୍ଷଣ | ଫାର୍ମ ସେଟଅପ୍ ବିଶେଷଜ୍ଞ
              </h1>
            </header>

            {/* Introduction Section */}
            <section aria-labelledby="intro-heading" className="space-y-3 md:space-y-4">
              <h2
                id="intro-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Introduction – ଭୂମିକା
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶାର ରାଜଧାନୀ, ଆଜିକାଲି କେବଳ ଏକ IT ଓ Education Hub ଭାବେ ନୁହେଁ, ବରଂ ଏକ ନୂଆ agribusiness destination ଭାବେ ଉଭା ହେଉଛି। <Link href="/" className="text-primary-start hover:underline">Mushroom Farming in Bhubaneswar</Link> ଏବେ ଏକ ଚର୍ଚ୍ଚିତ ବିଷୟ, ଯେଉଁଠି ଯୁବକ, ଛାତ୍ର, ମହିଳା, ଚାକିରି ଛାଡିଥିବା ପ୍ରୋଫେସନାଲ୍ ଏବଂ କୃଷକ ମାନେ ଏକ profitable business model ଭାବେ ଏହାକୁ ଗ୍ରହଣ କରୁଛନ୍ତି। Organic Mushrooms Farm ଟିମ୍ <Link href="/articles/turnkey-commercial-setup" className="text-primary-start hover:underline">Mushroom Farm Setup</Link>, <Link href="/training" className="text-primary-start hover:underline">Online Mushroom Training</Link>, <Link href="/training" className="text-primary-start hover:underline">Offline Mushroom Training</Link>, <Link href="/spawn-seed" className="text-primary-start hover:underline">Mushroom Spawn Sale</Link>, Fresh ଓ Dry Mushroom Sale, <Link href="/book-consultant" className="text-primary-start hover:underline">Consultancy</Link>, Turnkey Project ଏବଂ Government Subsidy Support ପାଇଁ ଭୁବନେଶ୍ୱର ଓ ଆଖପାଖ ସମସ୍ତ ଅଞ୍ଚଳରେ ସେବା ଦେଉଛି।
              </p>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଏହି ଆର୍ଟିକଲ୍ଟି ସେମାନଙ୍କ ପାଇଁ, ଯେଉଁମାନେ Patia, Khandagiri, Chandrasekharpur, Nayapalli, Rasulgarh, Saheed Nagar, Old Town, Jaydev Vihar କିମ୍ବା Cuttack, Khordha, Jatni, Pipili ଭଳି ଅଞ୍ଚଳରୁ mushroom farming, mushroom training near me, ବା mushroom spawn near me ଖୋଜୁଛନ୍ତି।
              </p>
            </section>

            <hr className="my-6 border-t dark:border-white/10 border-black/10" />

            {/* Why Mushroom Farming is Growing */}
            <section aria-labelledby="why-growing-heading" className="space-y-3 md:space-y-4">
              <h2
                id="why-growing-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                ଭୁବନେଶ୍ୱରରେ Mushroom Farming କାହିଁକି ବଢୁଛି?
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed mb-3">
                ଓଡ଼ିଶାର ଏହି ସହର ଚାଉଳ, ପାନ ଓ ପାରମ୍ପରିକ ସାଗ-ପନିପରିବା ଚାଷ ପାଇଁ ଜଣାଶୁଣା, କିନ୍ତୁ ବର୍ତ୍ତମାନ ଏଠାକାର ଲୋକମାନେ ବୁଝିଲେଣି ଯେ ଅଳ୍ପ ଜାଗାରେ, ଘର ମଧ୍ୟରେ ବି mushroom cultivation ଆରମ୍ଭ କରାଯାଇପାରେ ଏବଂ ତାହା ଏକ high-return agribusiness ହୋଇପାରେ। Zamindari ଜମି ନଥିଲେ ମଧ୍ୟ ଏକ ଛୋଟ କୋଠରୀ, ବାରଣ୍ଡା କିମ୍ବା ଶେଡ୍ରେ ମଶ୍ରୁମ ଉତ୍ପାଦନ ସମ୍ଭବ। ଏହା ହିଁ ମୁଖ୍ୟ କାରଣ ଯେ Patia, Khandagiri, Nayapalli ଭଳି ସହରାଞ୍ଚଳ ଏବଂ Chandaka, Balianta ଭଳି ଗ୍ରାମାଞ୍ଚଳ, ଉଭୟଠାରେ ମଶ୍ରୁମ ବ୍ୟବସାୟ ଲୋକପ୍ରିୟ ହେଉଛି।
              </p>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed mb-3">
                ଏହା ସହିତ, Health-conscious consumers ର ସଂଖ୍ୟା ମଧ୍ୟ ବଢୁଛି। Organic food, high-protein diet, functional food ଏବଂ wellness product ପାଇଁ demand ବଢୁଥିବାରୁ, mushroom business କରୁଥିବା entrepreneur ମାନଙ୍କ ପାଇଁ market ମଧ୍ୟ ବଢୁଛି।
              </p>

              <div className="pt-2">
                <h3 className="text-sm md:text-base font-bold dark:text-white text-slate-900 mb-2">
                  Bhubaneswar ର Climate Suitability
                </h3>
                <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                  ଓଡ଼ିଶାର humid, tropical climate — ବିଶେଷ କରି <Link href="/mushroom-types" className="text-primary-start hover:underline">Oyster</Link> ଓ <Link href="/mushroom-types" className="text-primary-start hover:underline">Milky Mushroom</Link> ପାଇଁ ବହୁତ ଭଲ। ବର୍ଷା ଋତୁରେ (June-September) natural humidity ଅଧିକ ରହିବାରୁ mushroom bed ପାଇଁ ideal condition ମିଳେ। ଠଣ୍ଡା ଋତୁରେ (November-February) <Link href="/mushroom-types" className="text-primary-start hover:underline">Button Mushroom</Link> farming ପାଇଁ temperature suitable ରହେ। Summer season (April-June) ରେ temperature control ପାଇଁ shade net, cooling system ଏବଂ humidity chamber ଆବଶ୍ୟକ ପଡ଼େ, ଯାହା ପାଇଁ Organic Mushrooms Farm ର <Link href="/book-consultant" className="text-primary-start hover:underline">Consultancy</Link> Team farmer ମାନଙ୍କୁ guide କରେ।
                </p>
              </div>
            </section>

            <hr className="my-6 border-t dark:border-white/10 border-black/10" />

            {/* Farm Setup Services */}
            <section aria-labelledby="setup-services-heading" className="space-y-3 md:space-y-4">
              <h2
                id="setup-services-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Mushroom Farm Setup Services – ଭୁବନେଶ୍ୱରରେ
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଆମ ଟିମ୍ ଭୁବନେଶ୍ୱର ଓ ଆଖପାଖ ଅଞ୍ଚଳରେ ସମ୍ପୂର୍ଣ୍ଣ <Link href="/articles/turnkey-commercial-setup" className="text-primary-start hover:underline">Mushroom Farm Setup</Link> ସେବା ଦେଉଛି — ଛୋଟ ଘରୋଇ ୟୁନିଟ୍ ଠାରୁ ଆରମ୍ଭ କରି commercial scale farm ପର୍ଯ୍ୟନ୍ତ। ଏଥିରେ ସାମିଲ ରହେ:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li>Shed Design ଏବଂ Layout Planning</li>
                <li>Humidity ଓ Temperature Control System</li>
                <li>Racking System ଓ Bed Preparation</li>
                <li>Water Supply ଓ Drainage Planning</li>
                <li>Ventilation ଓ Hygiene Management</li>
              </ul>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଯଦି ଆପଣ ଏକ new mushroom farm setup in Bhubaneswar କରିବାକୁ ଚାହୁଁଛନ୍ତି, ଆମେ ଆପଣଙ୍କ ଜାଗା, ବଜେଟ୍ ଏବଂ ଉତ୍ପାଦନ ଲକ୍ଷ୍ୟ ଅନୁସାରେ ଏକ customized plan ପ୍ରଦାନ କରୁ।
              </p>
            </section>

            {/* Online Training */}
            <section aria-labelledby="online-training-heading" className="space-y-3 md:space-y-4">
              <h2
                id="online-training-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Online Mushroom Training Program
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଯେଉଁମାନେ ଘରେ ବସି ମଶ୍ରୁମ ଚାଷ ଶିଖିବାକୁ ଚାହାଁନ୍ତି, ସେମାନଙ୍କ ପାଇଁ Organic Mushrooms Farm ର <Link href="/training" className="text-primary-start hover:underline">Online Mushroom Training</Link> ଏକ ବେଷ୍ଟ ଅପ୍ସନ୍। Bhubaneswar, Cuttack ବା ଦୂରାଞ୍ଚଳରେ ରହୁଥିବା students, housewife, private job holder — ସମସ୍ତେ ଏଥିରେ ଅଂଶଗ୍ରହଣ କରିପାରିବେ।
              </p>
              <p className="font-bold text-xs md:text-sm dark:text-white text-slate-900">Training modules ରେ ଥାଏ:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li>Cultivation Systems ଓ Spawn Management</li>
                <li>Production Planning</li>
                <li>Marketing ଓ Sales Strategy</li>
                <li>Business Development ଓ Costing</li>
              </ul>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed italic font-medium">
                ଏହା ଦ୍ୱାରା trial-and-error cost କମ୍ ହୋଇଯାଏ ଏବଂ new farmer ମାନେ ଆତ୍ମବିଶ୍ୱାସ ସହ ବ୍ୟବସାୟ ଆରମ୍ଭ କରିପାରନ୍ତି।
              </p>
            </section>

            {/* Offline Training */}
            <section aria-labelledby="offline-training-heading" className="space-y-3 md:space-y-4">
              <h2
                id="offline-training-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Offline Mushroom Training Program – ଭୁବନେଶ୍ୱର ଓ ଆଖପାଖ
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Hands-on learning ପାଇଁ ଆମେ <Link href="/training" className="text-primary-start hover:underline">Offline Mushroom Training</Link> ମଧ୍ୟ ପ୍ରଦାନ କରୁ, ଯେଉଁଥିରେ ଥାଏ:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li>Live Demonstration</li>
                <li>Bed Preparation Practical</li>
                <li>Harvesting Techniques</li>
                <li>Farm Operations ଓ Quality Management</li>
              </ul>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Patia, Khandagiri, Chandrasekharpur ଆଦି ଅଞ୍ଚଳରୁ ଆସୁଥିବା trainee ମାନେ practical experience ପାଇ ନିଜ ଫାର୍ମ ଆରମ୍ଭ କରିବାରେ ଅଧିକ confidence ପାଆନ୍ତି।
              </p>
            </section>

            {/* Spawn Sale */}
            <section aria-labelledby="spawn-sale-heading" className="space-y-3 md:space-y-4">
              <h2
                id="spawn-sale-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Mushroom Spawn Sale &amp; Delivery
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Quality spawn ହିଁ ମଶ୍ରୁମ ଚାଷର ମୂଳ ଆଧାର। ଆମେ Bhubaneswar ଓ ଓଡ଼ିଶାର ବିଭିନ୍ନ ଅଞ୍ଚଳକୁ <Link href="/spawn-seed" className="text-primary-start hover:underline">Mushroom Spawn Supply</Link> କରୁଛୁ, ଯେଉଁଥିରେ ସାମିଲ:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li><Link href="/mushroom-types" className="text-primary-start hover:underline">Oyster Mushroom Spawn</Link></li>
                <li><Link href="/mushroom-types" className="text-primary-start hover:underline">Button Mushroom Spawn</Link></li>
                <li><Link href="/mushroom-types" className="text-primary-start hover:underline">Milky Mushroom Spawn</Link></li>
                <li>Shiitake Mushroom Spawn</li>
              </ul>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଆପଣ mushroom spawn near me ବା mushroom seed supplier in Bhubaneswar ଖୋଜୁଥିଲେ, ଆମେ ଆପଣଙ୍କ ଡୋର୍ଷ୍ଟେପ ପର୍ଯ୍ୟନ୍ତ safe packaging ସହ delivery କରୁ।
              </p>
            </section>

            {/* Fresh Sale */}
            <section aria-labelledby="fresh-sale-heading" className="space-y-3 md:space-y-4">
              <h2
                id="fresh-sale-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Fresh Mushroom Sale
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Local restaurant, hotel, organic store ଓ ସିଧାସଳଖ ଗ୍ରାହକଙ୍କ ପାଇଁ ଆମେ Fresh Mushroom ସପ୍ଲାଏ କରୁ। Bhubaneswar ର Saheed Nagar, Jaydev Vihar ଓ Nayapalli ଭଳି urban area ରେ fresh, pesticide-free mushroom ର demand ଦିନକୁ ଦିନ ବଢୁଛି।
              </p>
            </section>

            {/* Dry Sale */}
            <section aria-labelledby="dry-sale-heading" className="space-y-3 md:space-y-4">
              <h2
                id="dry-sale-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Dry Mushroom Sale
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Shelf life ବଢାଇବା ପାଇଁ Dry Mushroom ଏକ ଉତ୍ତମ product line। ଆମେ dehydrated Oyster, Shiitake ଓ Milky Mushroom Odisha ର ବିଭିନ୍ନ ସହରକୁ ଏବଂ ଅନ୍ୟ ରାଜ୍ୟକୁ ମଧ୍ୟ ପଠାଉ।
              </p>
            </section>

            {/* Medicinal */}
            <section aria-labelledby="medicinal-heading" className="space-y-3 md:space-y-4">
              <h2
                id="medicinal-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Medicinal Mushroom Opportunities
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Wellness ଓ health supplement market ରେ Medicinal Mushroom ର craze ବଢୁଛି। ଆମେ ନିମ୍ନଲିଖିତ variety ପାଇଁ guidance ଓ spawn support ଦେଉଛୁ:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li>Reishi Mushroom</li>
                <li>Ganoderma Mushroom</li>
                <li>Cordyceps Mushroom</li>
                <li>Lion&apos;s Mane Mushroom</li>
                <li>Turkey Tail Mushroom</li>
              </ul>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଏହି mushroom ମାନଙ୍କର immunity booster ଓ health supplement industry ରେ premium value ରହିଛି, ଯାହା Bhubaneswar ଭଳି growing health-market ପାଇଁ ଏକ ବଡ଼ opportunity।
              </p>
            </section>

            {/* Consultancy */}
            <section aria-labelledby="consultancy-heading" className="space-y-3 md:space-y-4">
              <h2
                id="consultancy-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Mushroom Consultancy Services
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଯଦି ଆପଣ existing farm ର problem solve କରିବାକୁ ଚାହୁଁଛନ୍ତି, କିମ୍ବା ନୂଆ farm ଆରମ୍ଭ କରିବା ପୂର୍ବରୁ expert advice ଚାହୁଁଛନ୍ତି, ଆମର <Link href="/book-consultant" className="text-primary-start hover:underline">Mushroom Consultancy</Link> service ଆପଣଙ୍କ ପାଇଁ। Yield improvement, disease management, ଏବଂ production planning ଠାରୁ ଆରମ୍ଭ କରି marketing strategy ପର୍ଯ୍ୟନ୍ତ, ଆମେ end-to-end support ଦେଉ।
              </p>
            </section>

            {/* Turnkey */}
            <section aria-labelledby="turnkey-heading" className="space-y-3 md:space-y-4">
              <h2
                id="turnkey-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Turnkey Mushroom Projects
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Commercial investor ଏବଂ large-scale farmer ମାନଙ୍କ ପାଇଁ ଆମେ <Link href="/turnkey-projects" className="text-primary-start hover:underline">Turnkey Mushroom Project</Link> ପ୍ରଦାନ କରୁ, ଯେଉଁଥିରେ ସାମିଲ:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li>Infrastructure Planning</li>
                <li>Farm Design</li>
                <li>Equipment Guidance</li>
                <li>Operational Systems Setup</li>
              </ul>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଏହା ଦ୍ୱାରା investor ମାନେ ନିଜେ technical hassle ଉଠାଇବା ବଦଳରେ, ଏକ ready-to-operate system ପାଇପାରନ୍ତି।
              </p>
            </section>

            {/* Business Plan */}
            <section aria-labelledby="business-plan-heading" className="space-y-3 md:space-y-4">
              <h2
                id="business-plan-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Mushroom Business Plan &amp; ROI Analysis
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ମଶ୍ରୁମ ବ୍ୟବସାୟ ଆରମ୍ଭ କରିବା ପୂର୍ବରୁ ପ୍ରତ୍ୟେକ entrepreneur ନିମ୍ନଲିଖିତ ବିଷୟ ମୂଲ୍ୟାୟନ କରିବା ଉଚିତ:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li>Startup Cost</li>
                <li>Production Goal</li>
                <li>Market Demand</li>
                <li>Revenue Stream</li>
                <li>Growth Potential</li>
              </ul>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଏକ ସୁ-ପରିକଳ୍ପିତ <Link href="/business-plan" className="text-primary-start hover:underline">Mushroom Project Report</Link> ଓ business plan long-term sustainability ପାଇଁ ବହୁତ ଜରୁରୀ। ଆମେ Bhubaneswar ର local market condition ଅନୁସାରେ customized project report ପ୍ରସ୍ତୁତ କରିବାରେ ସହାୟତା କରୁ, ଯାହା bank loan ବା subsidy application ପାଇଁ ମଧ୍ୟ ଉପଯୋଗୀ।
              </p>
            </section>

            {/* Subsidy */}
            <section aria-labelledby="subsidy-heading" className="space-y-3 md:space-y-4">
              <h2
                id="subsidy-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Government Subsidy Support
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Eligibility ଓ available scheme ଉପରେ ନିର୍ଭର କରି, କେତେକ entrepreneur agriculture ଏବଂ self-employment support programme ଅନ୍ତର୍ଗତ subsidy ର ଲାଭ ପାଇପାରନ୍ତି। ଆମର ଟିମ୍ ଏହି ପ୍ରକ୍ରିୟାରେ documentation ଓ application ପାଇଁ guidance ଦେଇଥାଏ।
              </p>
            </section>

            {/* Marketing */}
            <section aria-labelledby="marketing-heading" className="space-y-3 md:space-y-4">
              <h2
                id="marketing-heading"
                className="text-base md:text-lg lg:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4"
              >
                Mushroom Marketing Support
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                ଅନେକ beginner ଭାବନ୍ତି ଉତ୍ପାଦନ ହିଁ ସବୁଠାରୁ ବଡ଼ ଚ୍ୟାଲେଞ୍ଜ, କିନ୍ତୁ ବାସ୍ତବରେ Marketing ହିଁ profitability decide କରେ। ସଫଳ mushroom business ମାନେ ଏହି ଉପରେ ଫୋକସ୍ କରନ୍ତି:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li>Local Branding</li>
                <li>Restaurant Partnerships</li>
                <li>Organic Store Tie-up</li>
                <li>Direct Consumer Sales</li>
                <li>Social Media Marketing</li>
              </ul>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Strong customer relationship ହିଁ repeat demand ସୃଷ୍ଟି କରେ। ଆମେ ଏଥିପାଇଁ marketing strategy support ମଧ୍ୟ ଦେଇଥାଉ।
              </p>
            </section>

            <hr className="my-8 border-t-2 dark:border-white/10 border-black/10" />

            {/* Major Areas in Bhubaneswar */}
            <section aria-labelledby="major-areas-heading" className="space-y-4 md:space-y-6">
              <h2
                id="major-areas-heading"
                className="text-lg md:text-xl lg:text-2xl font-bold dark:text-white text-slate-900 text-center"
              >
                Bhubaneswar ର Major Areas ରେ Mushroom Farming
              </h2>

              <h3 className="text-sm md:text-base font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-3">
                ମୁଖ୍ୟ ଅଞ୍ଚଳ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h4 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">Mushroom Farming in Patia</h4>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">IT hub ପାଖରେ ରହୁଥିବା professional ମାନେ side-business ଭାବେ mushroom cultivation ଆରମ୍ଭ କରୁଛନ୍ତି।</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h4 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">Mushroom Training in Khandagiri</h4>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">historic ଓ semi-urban ଅଞ୍ଚଳ ହୋଇଥିବାରୁ ଏଠାରେ ଛୋଟ ଜାଗାରେ ମଧ୍ୟ farm setup ସହଜ।</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h4 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">Mushroom Spawn Supply in Nayapalli</h4>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">residential density ଅଧିକ ହୋଇଥିବାରୁ direct-to-customer fresh mushroom sale ର ଭଲ ସୁଯୋଗ।</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h4 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">Mushroom Business in Chandrasekharpur</h4>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">educational institution ଓ hostel ପାଖରେ ରହିଥିବାରୁ bulk supply opportunity।</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 md:col-span-2">
                  <h4 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">Mushroom Farming in Rasulgarh</h4>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">commercial ଓ transport hub ହୋଇଥିବାରୁ wholesale distribution ପାଇଁ ଉପଯୁକ୍ତ।</p>
                </div>
              </div>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Saheed Nagar, Old Town ଏବଂ Jaydev Vihar ଭଳି ଅଞ୍ଚଳରେ ମଧ୍ୟ ଆମର customer base ଓ training participant ବଢୁଛନ୍ତି।
              </p>

              <h3 className="text-sm md:text-base font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-3 pt-2">
                ଆଖପାଖ ସହର
              </h3>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Cuttack, Khordha, Jatni ଏବଂ Pipili ର ଲୋକମାନେ ମଧ୍ୟ <Link href="/training" className="text-primary-start hover:underline">mushroom training near me</Link> ଖୋଜି ଆମ ସହ ଯୋଗାଯୋଗ କରୁଛନ୍ତି। ଏହି ସହରଗୁଡ଼ିକ ଭୁବନେଶ୍ୱର ସହ ଭଲ connectivity ଥିବାରୁ, spawn delivery ଓ offline training ପାଇଁ ମଧ୍ୟ ସୁବିଧାଜନକ।
              </p>

              <h3 className="text-sm md:text-base font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-3 pt-2">
                ଆଖପାଖ ଗ୍ରାମାଞ୍ଚଳ
              </h3>
              <ul className="space-y-2 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span><strong>Mushroom Training in Balianta Region:</strong> agricultural background ଥିବା farmer ମାନେ mushroom କୁ ଏକ additional income source ଭାବେ ଗ୍ରହଣ କରୁଛନ୍ତି।</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span><strong>Mushroom Spawn Supply in Balipatna Region:</strong> vegetable farming ସହ mushroom cultivation ର combination popular ହେଉଛି।</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span><strong>Mushroom Farming in Mendhasal Region:</strong> industrial corridor ପାଖରେ ରହିଥିବାରୁ new entrepreneur ମାନେ mushroom business ଆରମ୍ଭ କରୁଛନ୍ତି।</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span><strong>Mushroom Business Opportunities in Chandaka Belt:</strong> forest-adjacent ଅଞ୍ଚଳ ହୋଇଥିବାରୁ natural humidity mushroom farming ପାଇଁ ଅନୁକୂଳ।</span>
                </li>
              </ul>
            </section>

            <hr className="my-6 border-t dark:border-white/10 border-black/10" />

            {/* Opportunities */}
            <section aria-labelledby="opportunities-heading" className="space-y-4">
              <h2
                id="opportunities-heading"
                className="text-lg md:text-xl lg:text-2xl font-bold dark:text-white text-slate-900 text-center"
              >
                Farmers, Students, Women, Startups ଓ FPO ମାନଙ୍କ ପାଇଁ Opportunities
              </h2>

              <ul className="space-y-2.5 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Farmers:</strong> ପାରମ୍ପରିକ ଚାଷ ସହ mushroom farming ମିଶାଇ additional income ପାଇପାରନ୍ତି।</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Students:</strong> part-time ବ୍ୟବସାୟ ଭାବେ ଆରମ୍ଭ କରି graduation ପରେ full-time entrepreneur ହୋଇପାରନ୍ତି।</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Women:</strong> ଘର ମଧ୍ୟରେ ଛୋଟ ୟୁନିଟ୍ ସେଟଅପ୍ କରି self-employment ଆରମ୍ଭ କରିପାରନ୍ତି।</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Startups:</strong> branding, packaging ଓ online sale ଉପରେ ଫୋକସ୍ କରି scalable business model ତିଆରି କରିପାରନ୍ତି।</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>FPO (Farmer Producer Organisation):</strong> group farming ଏବଂ bulk <Link href="/spawn-seed" className="text-primary-start hover:underline">spawn</Link> purchase ଦ୍ୱାରା cost-efficiency ପାଇପାରନ୍ତି।</span>
                </li>
              </ul>
            </section>

            <hr className="my-6 border-t dark:border-white/10 border-black/10" />

            {/* Why Us */}
            <section aria-labelledby="why-us-heading" className="space-y-4">
              <h2
                id="why-us-heading"
                className="text-lg md:text-xl lg:text-2xl font-bold dark:text-white text-slate-900 text-center"
              >
                Organic Mushrooms Farm କୁ କାହିଁକି ବାଛିବେ?
              </h2>

              <ul className="space-y-2 text-xs md:text-sm dark:text-slate-300 text-slate-700 max-w-2xl mx-auto">
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>Bhubaneswar ଓ ସମଗ୍ର ଓଡ଼ିଶାରେ experience-based service</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>Online ଓ Offline, ଉଭୟ <Link href="/training" className="text-primary-start hover:underline">Training</Link> available</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>Quality <Link href="/spawn-seed" className="text-primary-start hover:underline">Spawn</Link> ର timely delivery</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>End-to-end <Link href="/book-consultant" className="text-primary-start hover:underline">Consultancy</Link> ଏବଂ Turnkey Project Support</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span><Link href="/business-plan" className="text-primary-start hover:underline">Business Plan</Link>, ROI Analysis ଏବଂ Subsidy Guidance</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>Marketing ଓ Branding Support</span>
                </li>
              </ul>
            </section>

            <hr className="my-8 border-t-2 dark:border-white/10 border-black/10" />

            {/* FAQs */}
            <section aria-labelledby="faq-heading" className="space-y-4 md:space-y-6">
              <h2
                id="faq-heading"
                className="text-lg md:text-xl lg:text-2xl font-bold dark:text-white text-slate-900 text-center"
              >
                FAQ Section – ପ୍ରାୟତଃ ପଚରାଯାଉଥିବା ପ୍ରଶ୍ନ
              </h2>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">1. ଭୁବନେଶ୍ୱରରେ mushroom farming କରିବାର cost କେତେ?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">Cost ଆପଣଙ୍କର scale (small home unit ବନାମ commercial farm), jagah ଏବଂ variety ଉପରେ depend କରେ। Small-scale setup ତୁଳନାତ୍ମକ ଭାବେ କମ୍ investment ରେ ଆରମ୍ଭ ହୋଇପାରେ। Exact estimate ପାଇଁ ଆମ <Link href="/book-consultant" className="text-primary-start hover:underline">consultancy</Link> team ସହ contact କରନ୍ତୁ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">2. ମଶ୍ରୁମ ଚାଷରୁ କେତେ profit ମିଳେ?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">Profit market demand, production quality ଏବଂ marketing strategy ଉପରେ depend କରେ। Fresh ଓ dry mushroom, ଉଭୟ ପାଇଁ Bhubaneswar market ରେ ଭଲ demand ରହିଛି।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">3. Mushroom spawn କେଉଁଠି କିଣିବି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">Organic Mushrooms Farm ମାଧ୍ୟମରେ <Link href="/mushroom-types" className="text-primary-start hover:underline">Oyster</Link>, <Link href="/mushroom-types" className="text-primary-start hover:underline">Button</Link>, <Link href="/mushroom-types" className="text-primary-start hover:underline">Milky</Link> ଓ Shiitake spawn direct order କରି Bhubaneswar ଓ ଆଖପାଖ ଅଞ୍ଚଳକୁ delivery ପାଇପାରିବେ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">4. Mushroom training ପାଇଁ କିପରି join କରିବି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs"><Link href="/training" className="text-primary-start hover:underline">Online</Link> ବା <Link href="/training" className="text-primary-start hover:underline">Offline</Link>, ଆପଣଙ୍କ ସୁବିଧା ଅନୁସାରେ training program ପାଇଁ ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">5. Online training available କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ହଁ, <Link href="/training" className="text-primary-start hover:underline">Online Mushroom Training</Link> ସମଗ୍ର India ପାଇଁ available ଅଛି।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">6. Offline training available କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ହଁ, Bhubaneswar ଓ ଆଖପାଖ ଅଞ୍ଚଳରେ hands-on <Link href="/training" className="text-primary-start hover:underline">Offline Training</Link> organize କରାଯାଏ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">7. Mushroom farming ପାଇଁ କେତେ ଜାଗା ଆବଶ୍ୟକ?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">Small-scale ପାଇଁ ଏକ ଛୋଟ କୋଠରୀ ବା ଶେଡ୍ ଯଥେଷ୍ଟ। Commercial scale ପାଇଁ dedicated shed ଆବଶ୍ୟକ ହୁଏ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">8. ମହିଳାମାନେ mushroom farming ଆରମ୍ଭ କରିପାରିବେ କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ନିଶ୍ଚିତ ଭାବେ। ଘର ମଧ୍ୟରେ ମଧ୍ୟ ଏହା ଆରମ୍ଭ କରାଯାଇପାରେ, ଏବଂ ଅନେକ ମହିଳା ଏହାକୁ successful self-employment ମଡେଲ ଭାବେ ଅପନାଉଛନ୍ତି।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">9. ଛାତ୍ରମାନେ mushroom farming ଆରମ୍ଭ କରିପାରିବେ କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ହଁ, part-time business ଭାବେ students ମଧ୍ୟ ଏହା ଆରମ୍ଭ କରିପାରନ୍ତି।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">10. Government subsidy available କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">Eligibility ଓ scheme ଉପରେ ନିର୍ଭର କରି କେତେକ entrepreneur subsidy ର ଲାଭ ପାଇପାରନ୍ତି। ଆମେ documentation ପାଇଁ guidance ଦେଇଥାଉ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">11. କେଉଁ mushroom variety best?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ଆରମ୍ଭ ପାଇଁ <Link href="/mushroom-types" className="text-primary-start hover:underline">Oyster Mushroom</Link> ସବୁଠାରୁ ସହଜ ଓ popular। Commercial scale ପାଇଁ <Link href="/mushroom-types" className="text-primary-start hover:underline">Button</Link> ଓ <Link href="/mushroom-types" className="text-primary-start hover:underline">Milky Mushroom</Link> ମଧ୍ୟ ଭଲ option।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">12. Mushroom କିପରି sell କରାଯିବ?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">Restaurant partnership, organic store, direct consumer sale ଏବଂ social media marketing ମାଧ୍ୟମରେ mushroom sell କରାଯାଇପାରେ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">13. ଆପଣ consultancy service ଦିଅନ୍ତି କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ହଁ, ଆମେ farm setup ଠାରୁ production ପର୍ଯ୍ୟନ୍ତ complete <Link href="/book-consultant" className="text-primary-start hover:underline">Consultancy</Link> ଦେଇଥାଉ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">14. Turnkey project provide କରନ୍ତି କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ହଁ, commercial investor ମାନଙ୍କ ପାଇଁ complete <Link href="/turnkey-projects" className="text-primary-start hover:underline">Turnkey Mushroom Project</Link> setup ଉପଲବ୍ଧ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">15. Marketing support ଦିଅନ୍ତି କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ହଁ, branding ଏବଂ sales strategy ପାଇଁ ମଧ୍ୟ ଆମେ support ପ୍ରଦାନ କରୁ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">16. Bhubaneswar ର କେଉଁ climate mushroom farming ପାଇଁ best?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">Monsoon (June-Sept) ର humid climate Oyster ଓ Milky Mushroom ପାଇଁ ଆଦର୍ଶ, ଏବଂ Winter (Nov-Feb) Button Mushroom ପାଇଁ suitable।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">17. Medicinal mushroom cultivation profitable କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ହଁ, wellness market ରେ demand ବଢୁଥିବାରୁ Reishi, Cordyceps, Lion&apos;s Mane ଭଳି medicinal mushroom ର premium value ରହିଛି।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">18. Dry mushroom ର shelf life କେତେ?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ସଠିକ ଭାବେ dehydrate ଓ store କରାଗଲେ dry mushroom ମାସ ମାସ ଧରି store ହୋଇପାରେ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">19. Cuttack ଓ Khordha ର ଲୋକମାନେ training ପାଇପାରିବେ କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ହଁ, Cuttack, Khordha, Jatni, Pipili ସମେତ ସମଗ୍ର ଓଡ଼ିଶାରୁ ଲୋକମାନେ <Link href="/training" className="text-primary-start hover:underline">Online</Link> ବା <Link href="/training" className="text-primary-start hover:underline">Offline training</Link> ପାଇପାରିବେ।</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <h3 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1">20. FPO ମାନେ bulk spawn order କରିପାରିବେ କି?</h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs">ହଁ, Farmer Producer Organisation ମାନେ bulk order ଉପରେ special support ପାଇପାରନ୍ତି।</p>
                </div>
              </div>
            </section>

            {/* Next 10 Years Industry */}
            <section aria-labelledby="future-industry-heading" className="space-y-3">
              <h2
                id="future-industry-heading"
                className="text-lg md:text-xl lg:text-2xl font-bold dark:text-white text-slate-900 text-center"
              >
                ଆଗାମୀ 10 ବର୍ଷରେ Mushroom Industry କେମିତି ଦେଖାଯିବ?
              </h2>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed text-center">
                Industry experts ଙ୍କ ମତରେ ଆଗାମୀ ଦଶନ୍ଧିରେ growth ଦେଖାଯିବ:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm dark:text-slate-300 text-slate-700 max-w-2xl mx-auto">
                <li>Fresh Mushroom Consumption ରେ</li>
                <li>Medicinal Mushroom Products ରେ</li>
                <li>Mushroom Powder Manufacturing ରେ</li>
                <li>Functional Foods ରେ</li>
                <li>Export-Oriented Processing ରେ</li>
                <li>Wellness Products ରେ</li>
              </ul>
              <p className="text-xs md:text-sm dark:text-slate-300 text-slate-700 leading-relaxed text-center italic font-medium pt-2">
                ଯେଉଁ entrepreneur ମାନେ ଆଜିଠାରୁ expertise build କରୁଛନ୍ତି, ସେମାନେ future market expansion ର ଲାଭ ଉଠାଇବାରେ ଆଗରେ ରହିବେ।
              </p>
            </section>

            {/* CTA Section */}
            <section
              aria-labelledby="cta-heading"
              className="bg-linear-to-r from-orange-500/10 to-red-500/10 p-6 md:p-8 rounded-3xl mt-6 md:mt-8 border border-orange-500/20"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <a
                  href="tel:+919203544140"
                  className="btn-primary px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  <Phone size={18} /> Talk to Experts
                </a>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 text-slate-900 dark:text-white w-full sm:w-auto justify-center hover:bg-white/80 dark:hover:bg-white/10 text-sm sm:text-base"
                >
                  Get a Quote <ArrowRight size={18} />
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
