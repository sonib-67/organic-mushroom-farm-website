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
  title: "Mushroom Farming, Training, Spawn Supply & Consultancy in Gurugram",
  description:
    "Organic Mushrooms Farm's page is specially designed for the people of Gurugram and NCR looking for mushroom farm setup, online/offline training, quality spawn supply, and consultancy.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/haryana/gurugram",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming, Training, Spawn Supply & Consultancy in Gurugram",
    description:
      "Organic Mushrooms Farm's page is specially designed for the people of Gurugram and NCR looking for mushroom farm setup, online/offline training, quality spawn supply, and consultancy.",
    url: "https://organicmushroomsfarm.com/cities/haryana/gurugram",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming, Training, Spawn Supply & Consultancy in Gurugram",
    description:
      "Organic Mushrooms Farm's page is specially designed for the people of Gurugram and NCR looking for mushroom farm setup, online/offline training, quality spawn supply, and consultancy.",
  },
};

export default function ArticleGurugramTrainingPage() {
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
        name: "Haryana",
        item: "https://organicmushroomsfarm.com/cities#haryana",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Gurugram",
        item: "https://organicmushroomsfarm.com/cities/haryana/gurugram",
      },
    ],
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    name: "Organic Mushrooms Farm - Gurugram Training & Setup Center",
    description:
      "Organic Mushrooms Farm's center in Gurugram and NCR for commercial mushroom farm setup, online/offline training, premium spawn supply, and agribusiness consultancy.",
    url: "https://organicmushroomsfarm.com/cities/haryana/gurugram",
    telephone: "+919203544140",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    areaServed: [
      "DLF Phase 1-5",
      "Cyber Hub",
      "Golf Course Road",
      "Sohna Road",
      "Manesar",
      "Palam Vihar",
      "Sushant Lok",
      "Sector 56",
      "Sector 57",
      "Dwarka Expressway",
      "Southern Peripheral Road",
      "Farrukhnagar",
      "Pataudi",
      "Bhondsi",
      "Badshahpur",
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gurugram mein mushroom farming ka cost kitna hota hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost depends entirely on your scale. Ek chhoti unit kam budget mein shuru ho sakti hai, whereas a commercial climate-controlled setup requires higher investment. A personalized business plan is the best way to get an exact estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Kitna profit ho sakta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Profit margins depend on the variety, production scale, and your local buyer network. Consistent supply aur achi marketing ensure excellent returns.",
        },
      },
      {
        "@type": "Question",
        name: "Mushroom spawn kahan se khareedein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can buy quality-assured oyster, button, and milky mushroom spawn directly from us, with delivery options available across Gurugram.",
        },
      },
      {
        "@type": "Question",
        name: "Kya online aur offline training dono available hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Working professionals ke liye online training is highly convenient, jabki offline sessions are perfect for hands-on practical experience.",
        },
      },
      {
        "@type": "Question",
        name: "Mushroom farming ke liye kitni jagah chahiye?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can start a small-scale operation in just 100-200 sq. ft. For commercial production, you will need larger space with proper climate control setups.",
        },
      },
      {
        "@type": "Question",
        name: "Kya government subsidy milti hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, several central and state-level agricultural schemes support mushroom farming. However, details change frequently, isliye current eligibility ke liye apne nearest Krishi Vigyan Kendra ya bank se verify karna best rehta hai.",
        },
      },
      {
        "@type": "Question",
        name: "Konsi mushroom variety Gurugram ke liye best hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oyster is the most forgiving for beginners. Milky is great for summer heat, aur Button mushrooms ke liye you will need a proper cooling setup or winter temperatures.",
        },
      },
      {
        "@type": "Question",
        name: "Mushroom kahan aur kaise bechein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Restaurants, luxury hotels, organic stores, residential societies, and online platforms. Our marketing support helps you build these crucial connections.",
        },
      },
      {
        "@type": "Question",
        name: "DLF phases ya Golf Course Road mein rehne wale log kya fresh mushroom order kar sakte hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Direct-to-home fresh mushroom delivery in these premium residential areas is a rapidly growing trend.",
        },
      },
      {
        "@type": "Question",
        name: "Kya turnkey project setups aur business plans milte hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, for large-scale investors, we provide complete turnkey solutions—from farm design to operational setup—along with detailed ROI and business planning.",
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
          <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-indigo-400/20 dark:bg-indigo-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-cyan-400/20 dark:bg-cyan-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
        </div>

        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto px-4 mb-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
          >
            <Link
              href="/"
              className="hover:text-emerald-500 flex items-center gap-1 transition-colors"
            >
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/cities"
              className="hover:text-emerald-500 transition-colors"
            >
              Cities
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/cities#haryana"
              className="hover:text-emerald-500 transition-colors"
            >
              Haryana
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 dark:text-slate-200 font-medium">
              Gurugram
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4">
          <div className="glass p-6 md:p-10 lg:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-6 md:space-y-8">
            <header className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 leading-tight mb-4">
                Mushroom Farming, Training, Spawn Supply &amp; Consultancy in Gurugram
              </h1>
            </header>

            <section aria-labelledby="introduction-heading">
              <h2
                id="introduction-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-6 md:mt-8 mb-4 border-l-4 border-primary-start pl-4"
              >
                Introduction
              </h2>

              <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium text-sm md:text-base">
                When we think of Gurugram, corporate towers aur malls sabse pehle yaad aate hain. But right here in this cyber city, ek naya, quiet revolution shuru ho chuka hai:{" "}
                <Link href="/" className="text-primary-start hover:underline font-semibold">
                  mushroom farming
                </Link>
                . From the phases of DLF to the societies of Sohna Road, and from Manesar&apos;s industrial belt to the villages of Pataudi and Farrukhnagar, log ab mushroom ko sirf ek sabzi nahi, balki ek massive business opportunity ki tarah dekh rahe hain.
              </p>

              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-4">
                Organic Mushrooms Farm&apos;s page is specially designed for the people of Gurugram and NCR jo{" "}
                <Link href="/services/turnkey-setup" className="text-primary-start hover:underline font-semibold">
                  mushroom farm setup
                </Link>
                ,{" "}
                <Link href="/training" className="text-primary-start hover:underline font-semibold">
                  online/offline training
                </Link>
                ,{" "}
                <Link href="/services/spawn-supply" className="text-primary-start hover:underline font-semibold">
                  quality spawn supply
                </Link>
                , fresh &amp; dry mushroom delivery, or a proper{" "}
                <Link href="/blog/mushroom-farming-business-plan-india" className="text-primary-start hover:underline font-semibold">
                  business plan
                </Link>{" "}
                and{" "}
                <Link href="/services/consultancy" className="text-primary-start hover:underline font-semibold">
                  consultancy
                </Link>{" "}
                dhundh rahe hain. Let’s get straight to business.
              </p>
            </section>

            <hr className="my-6 md:my-8 border-t dark:border-white/10 border-black/10" />

            <section aria-labelledby="why-growing-fast">
              <h2
                id="why-growing-fast"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-6 md:mt-8 mb-4 border-l-4 border-primary-start pl-4"
              >
                Why is Mushroom Farming Growing Fast in Gurugram?
              </h2>

              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 text-sm md:text-base">
                Gurugram is Haryana&apos;s fastest-urbanising district, lekin iske aas-paas ke areas like Farrukhnagar, Pataudi, Manesar, and the Sohna belt mein aaj bhi premium agricultural land maujood hai. This unique combination of high urban demand and peri-urban production capacity makes Gurugram a highly profitable hub for the mushroom business.
              </p>

              <ul className="list-none space-y-3.5 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                  <span>
                    <strong>High-End Consumer Base:</strong> Upscale societies like DLF Phases, Golf Course Road, Sushant Lok, and Sector 56-57 mein health-conscious professionals aur gym-goers ki bhaari population hai. They are actively looking to consume oyster, button, and even medicinal mushrooms like Lion&apos;s Mane and Reishi—bas supply reliable aur fresh honi chahiye.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                  <span>
                    <strong>Expanding Markets:</strong> New developing sectors near Dwarka Expressway and Southern Peripheral Road mean the demand is constantly expanding beyond &quot;Old Gurgaon.&quot;
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                  <span>
                    <strong>B2B Opportunities:</strong> Restaurants, cloud kitchens, 5-star hotels in Cyber Hub, and corporate cafeterias sabko consistent quality mushroom supply chahiye. Currently, ye demand zyaadatar Azadpur mandi se poori hoti hai, which causes delays. This local supply gap is the real opportunity for you.
                  </span>
                </li>
              </ul>
            </section>

            <hr className="my-6 md:my-8 border-t dark:border-white/10 border-black/10" />

            <section aria-labelledby="climate-suitability">
              <h2
                id="climate-suitability"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-6 md:mt-8 mb-4 border-l-4 border-primary-start pl-4"
              >
                How is Gurugram&apos;s Climate for Mushrooms?
              </h2>

              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 text-sm md:text-base">
                Gurugram has a semi-arid climate, where summer temperatures cross 40°C aur sardi mein 5-6°C tak drop hota hai. This doesn&apos;t mean farming is difficult; iska matlab hai ki controlled environment zaroori hai.
              </p>

              <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                <li>
                  <strong>
                    <Link href="/services/milky-mushroom" className="text-primary-start hover:underline font-semibold">
                      Milky Mushroom
                    </Link>
                    :
                  </strong>{" "}
                  Highly heat-tolerant, making it perfect for the summer heat of the Gurugram-Manesar belt.
                </li>
                <li>
                  <strong>
                    <Link href="/services/button-mushroom" className="text-primary-start hover:underline font-semibold">
                      Button Mushroom
                    </Link>
                    :
                  </strong>{" "}
                  Requires a cooler temperature (16-22°C), isliye winter months (Oct to March) are best, or you can produce them year-round with a proper cooling setup.
                </li>
                <li>
                  <strong>
                    <Link href="/services/oyster-mushroom" className="text-primary-start hover:underline font-semibold">
                      Oyster Mushroom
                    </Link>
                    :
                  </strong>{" "}
                  The most forgiving variety, making it the absolute best starting point for beginners in Gurugram&apos;s fluctuating climate.
                </li>
              </ul>

              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mt-4 font-medium italic text-xs sm:text-sm">
                You can easily control humidity and temperature in small production rooms, warehouse corners, ya poly-sheds banakar—especially in areas where land is relatively affordable but connectivity is great.
              </p>
            </section>

            <hr className="my-6 md:my-8 border-t dark:border-white/10 border-black/10" />

            <section aria-labelledby="core-services-heading">
              <h2
                id="core-services-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-6 md:mt-8 mb-4 border-l-4 border-primary-start pl-4"
              >
                Our Core Services
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-4 mb-2">
                    1. Mushroom Farm Setup Services
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                    Many Gurugram-based entrepreneurs don&apos;t own farmland—aur ye koi rukawat nahi hai. To start mushroom farming, you simply need:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                    <li>A small production room (starting from 100-500 sq. ft.)</li>
                    <li>Humidity control (60-85% range, depending on the variety)</li>
                    <li>Proper ventilation and cross-air flow</li>
                    <li>A clean, sanitised environment (kyunki contamination is the biggest risk)</li>
                    <li>Racking systems for bags/beds</li>
                    <li>Spawn and substrate storage areas</li>
                  </ul>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed mt-3 text-sm md:text-base">
                    Our setup services cover everything from site assessments and layout designs to low-cost DIY and semi-automated climate-controlled units. Chahe aapke paas DLF flat ka terrace ho, Manesar mein shed ho, ya Pataudi road par thodi zameen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-6 mb-2">
                    2. Online &amp; Offline Training Programs
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                    Gurugram is a corporate hub, aur yahan ke professionals aksar weekends par hi time nikal paate hain.
                  </p>
                  <ul className="list-none space-y-3 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                      <span>
                        <strong>
                          <Link href="/training" className="text-primary-start hover:underline font-semibold">
                            Online Training
                          </Link>
                          :
                        </strong>{" "}
                        Perfect for working professionals, students, and housewives jo ghar se seekhna chahte hain. We cover cultivation basics, substrate sterilization, contamination solutions, and business planning.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                      <span>
                        <strong>
                          <Link href="/workshop" className="text-primary-start hover:underline font-semibold">
                            Offline/Hands-on Training
                          </Link>
                          :
                        </strong>{" "}
                        For those who say, &quot;Video dekh ke samajh toh aa gaya, par practical karke dikhaao.&quot; We conduct live demonstrations covering bed/bag preparation, spawn handling, and harvesting near the city so you can travel easily from New Gurgaon or Sohna Road.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-6 mb-2">
                    3. Mushroom Spawn Sale &amp; Delivery
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                    <Link href="/services/spawn-supply" className="text-primary-start hover:underline font-semibold">
                      Spawn
                    </Link>{" "}
                    is the foundation of your farm—agar spawn quality achi nahi hai toh yield kabhi consistent nahi hogi. We provide premium, contamination-free spawn for:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                    <li><strong>Oyster Mushroom:</strong> Popular for both beginners and commercial setups.</li>
                    <li><strong>Button Mushroom:</strong> High demand in the hotel and restaurant industry.</li>
                    <li><strong>Milky Mushroom:</strong> Suitable for Gurugram&apos;s warm climate.</li>
                  </ul>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed mt-3 font-medium italic text-xs sm:text-sm">
                    Delivery is available across DLF phases, New Gurgaon, Manesar, and the Farrukhnagar belt.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-6 mb-2">
                    4. Fresh &amp; Dry Mushroom Market Integration
                  </h3>
                  <ul className="list-none space-y-3 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                      <span>
                        <strong>Fresh Sales:</strong> Supply directly to premium cafes in Cyber Hub, organic grocery stores, and corporate cafeterias. Local sourcing guarantees better margins aur aapka mushroom hamesha fresh rehta hai.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                      <span>
                        <strong>Dry &amp; Value-Added Products:</strong> You can sell dried oyster/shiitake mushrooms or mushroom powder for health supplements. Ye products sirf Gurugram tak seemit nahi rehte—you can sell them pan-India online.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                      <span>
                        <strong>Medicinal Mushrooms:</strong> With a highly wellness-conscious crowd, varieties like Lion&apos;s Mane, Reishi, and Cordyceps offer a massive first-mover advantage in the supplement market.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-6 mb-2">
                    5. Consultancy &amp; Turnkey Projects
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                    Every entrepreneur has different needs. Kisi ke paas budget kam hai, kisi ke paas space choti hai.
                  </p>
                  <ul className="list-none space-y-3 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                      <span>
                        <strong>
                          <Link href="/services/consultancy" className="text-primary-start hover:underline font-semibold">
                            Consultancy
                          </Link>
                          :
                        </strong>{" "}
                        We guide you on production planning, infrastructure design, and market development to minimize startup risks.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                      <span>
                        <strong>
                          <Link href="/services/turnkey-setup" className="text-primary-start hover:underline font-semibold">
                            Turnkey Projects
                          </Link>
                          :
                        </strong>{" "}
                        For large-scale investors looking at the Manesar or Pataudi belts, we provide complete end-to-end solutions. Farm design, equipment, and operational systems sab ek saath handle kiye jaate hain for quick implementation.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="my-6 md:my-8 border-t dark:border-white/10 border-black/10" />

            <section aria-labelledby="success-opportunities">
              <h2
                id="success-opportunities"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-6 md:mt-8 mb-4 border-l-4 border-primary-start pl-4"
              >
                Success Opportunities for Everyone
              </h2>

              <ul className="list-none space-y-3 dark:text-slate-300 text-slate-700 mb-6 text-sm md:text-base">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                  <span>
                    <strong>Farmers/Kisan:</strong> Farmers in the Farrukhnagar and Sohna belts can use mushroom farming as a highly profitable supplementary income source, especially off-season.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                  <span>
                    <strong>Students &amp; Startups:</strong> Requires low capital investment, making it a great side-hustle or an innovative food-brand startup idea in a city like Gurugram.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                  <span>
                    <strong>Women Entrepreneurs:</strong> Start a small unit from home. Ye low-investment self-employment ka ek behtareen rasta hai.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                  <span>
                    <strong>FPOs (Farmer Producer Organisations):</strong> Collective production and marketing reduce costs aur bargaining power badhti hai in large urban markets.
                  </span>
                </li>
              </ul>
            </section>

            <hr className="my-8 md:my-10 border-t-2 dark:border-white/10 border-black/10" />

            <section aria-labelledby="faqs-heading">
              <h2
                id="faqs-heading"
                className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900 mt-8 mb-6 text-center"
              >
                FAQs (Frequently Asked Questions)
              </h2>

              <div className="space-y-4 mb-8">
                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    1. Gurugram mein mushroom farming ka cost kitna hota hai?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    The cost depends entirely on your scale. Ek chhoti unit kam budget mein shuru ho sakti hai, whereas a commercial climate-controlled setup requires higher investment. A personalized{" "}
                    <Link href="/blog/mushroom-farming-business-plan-india" className="text-primary-start hover:underline font-semibold">
                      business plan
                    </Link>{" "}
                    is the best way to get an exact estimate.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    2. Kitna profit ho sakta hai?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    Profit margins depend on the variety, production scale, and your local buyer network. Consistent supply aur achi marketing ensure excellent returns.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    3. Mushroom spawn kahan se khareedein?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    You can buy quality-assured oyster, button, and milky{" "}
                    <Link href="/services/spawn-supply" className="text-primary-start hover:underline font-semibold">
                      mushroom spawn
                    </Link>{" "}
                    directly from us, with delivery options available across Gurugram.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    4. Kya online aur offline training dono available hain?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    Yes! Working professionals ke liye{" "}
                    <Link href="/training" className="text-primary-start hover:underline font-semibold">
                      online training
                    </Link>{" "}
                    is highly convenient, jabki offline sessions are perfect for hands-on practical experience.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    5. Mushroom farming ke liye kitni jagah chahiye?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    You can start a small-scale operation in just 100-200 sq. ft. For commercial production, you will need larger space with proper climate control setups.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    6. Kya government subsidy milti hai?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    Yes, several central and state-level agricultural schemes support mushroom farming. However, details change frequently, isliye current eligibility ke liye apne nearest Krishi Vigyan Kendra ya bank se verify karna best rehta hai.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    7. Konsi mushroom variety Gurugram ke liye best hai?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    Oyster is the most forgiving for beginners. Milky is great for summer heat, aur Button mushrooms ke liye you will need a proper cooling setup or winter temperatures.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    8. Mushroom kahan aur kaise bechein?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    Restaurants, luxury hotels, organic stores, residential societies, and online platforms. Our marketing support helps you build these crucial connections.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    9. DLF phases ya Golf Course Road mein rehne wale log kya fresh mushroom order kar sakte hain?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    Absolutely! Direct-to-home fresh mushroom delivery in these premium residential areas is a rapidly growing trend.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    10. Kya turnkey project setups aur business plans milte hain?
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                    Haan, for large-scale investors, we provide complete{" "}
                    <Link href="/services/turnkey-setup" className="text-primary-start hover:underline font-semibold">
                      turnkey solutions
                    </Link>
                    —from farm design to operational setup—along with detailed ROI and business planning.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section
              aria-labelledby="cta-heading"
              className="bg-linear-to-r from-indigo-500/10 to-cyan-500/10 p-6 md:p-8 rounded-3xl mt-10 md:mt-12 border border-indigo-500/20"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+919203544140"
                  className="btn-primary px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  <Phone size={18} /> Talk to Experts
                </a>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all w-full sm:w-auto justify-center text-sm sm:text-base border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/10"
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
