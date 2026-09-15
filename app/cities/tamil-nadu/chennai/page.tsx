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
  title: "Chennai Mushroom Farming Training Center",
  description:
    "Start Your Profitable Agri-Business Today! Premium mushroom farming training, spawn supply and commercial setup in Chennai, Tamil Nadu.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Chennai Mushroom Farming Training Center",
    description:
      "Start Your Profitable Agri-Business Today! Premium mushroom farming training, spawn supply and commercial setup in Chennai, Tamil Nadu.",
    url: "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Chennai Mushroom Farming Training Center",
    description:
      "Start Your Profitable Agri-Business Today! Premium mushroom farming training, spawn supply and commercial setup in Chennai, Tamil Nadu.",
  },
};

export default function ArticleChennaiTrainingPage() {
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
        name: "Chennai",
        item: "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai",
      },
    ],
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    name: "Organic Mushrooms Farm - Chennai Training Center",
    description:
      "Start Your Profitable Agri-Business Today! Premium mushroom farming training, spawn supply and commercial setup in Chennai, Tamil Nadu.",
    url: "https://organicmushroomsfarm.com/cities/tamil-nadu/chennai",
    telephone: "+919203544140",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: [
      "Tambaram",
      "Velachery",
      "Anna Nagar",
      "OMR",
      "Porur",
      "Ambattur",
      "Avadi",
      "Chromepet",
      "Poonamallee",
      "Thiruvallur",
      "Sriperumbudur",
      "Kundrathur",
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "சென்னை மற்றும் சுற்றுப்புற பகுதிகளில் எந்த வகை காளான் வளர்ப்பு மிகவும் லாபகரமானது?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "சென்னை மற்றும் தமிழக தட்பவெப்ப நிலைக்கு சிப்பி காளான் (Oyster Mushroom) மற்றும் பால் காளான் (Milky Mushroom) வளர்ப்பு மிக எளிதானது மற்றும் அதிக லாபம் தரக்கூடியது. மேலும் குளிரூட்டப்பட்ட வசதி உள்ளவர்களுக்கு பட்டன் காளான் (Button Mushroom) மற்றும் லயன்ஸ் மேன் போன்ற மருத்துவ காளான்களும் சிறந்த வருவாய் தரும்.",
        },
      },
      {
        "@type": "Question",
        name: "Can I do mushroom farming training online from home in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer comprehensive online mushroom farming training covering substrate preparation, sterilization, spawn running, crop management, and harvesting techniques with continuous guidance.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get high-yield mushroom spawn in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide laboratory-tested high-yield Oyster, Milky, and Button mushroom spawn with doorstep delivery across Chennai, Tambaram, Velachery, OMR, Porur, and nearby districts.",
        },
      },
      {
        "@type": "Question",
        name: "Does Organic Mushrooms Farm help in commercial farm setup and marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide end-to-end turnkey project setup, climate-control design, government subsidy documentation support, and dedicated marketing linkage with local buyers and organic retail chains.",
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
              href="/cities#tamil-nadu"
              className="hover:text-emerald-500 transition-colors"
            >
              Tamil Nadu
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 dark:text-slate-200 font-medium">
              Chennai
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4">
          <div className="glass p-6 md:p-10 lg:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-6 md:space-y-8">
            <header className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 leading-tight mb-3">
                Chennai Mushroom Farming Training Center
              </h1>
              <p className="font-bold text-lg md:text-xl lg:text-2xl text-primary-start mb-4">
                Start Your Profitable Agri-Business Today!
              </p>
            </header>

            <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium text-sm md:text-base">
              சென்னை, தாம்பரம், வேளச்சேரி, அண்ணா நகர், ஓ.எம்.ஆர், போரூர், அம்பத்தூர், அவடி மற்றும் சுற்றியுள்ள கிராமங்களில் காளான் வளர்ப்பு (Mushroom Farming) வேகமாக வளர்ந்து வரும் ஒரு லாபகரமான தொழிலாக மாறியுள்ளது. Today, health-conscious consumers, top-tier restaurants, hotels, and organic stores across Chennai are demanding fresh, organic, and medicinal mushrooms.
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium text-sm md:text-base">
              If you are a farmer, student, aspiring entrepreneur, or part of a women&apos;s self-help group looking for a low-investment, high-value agricultural business, this is your perfect opportunity.{" "}
              <Link href="/" className="text-primary-start hover:underline font-semibold">
                Mushroom Farm
              </Link>{" "}
              is here to guide you through every single step—from learning the basics to setting up a commercial facility and selling your produce.
            </p>

            <section aria-labelledby="why-booming-chennai">
              <h2
                id="why-booming-chennai"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4"
              >
                Why Mushroom Farming is Booming in Chennai &amp; Tamil Nadu?
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                Chennai&apos;s food industry is massive and continuously evolving. People are shifting toward sustainable, high-protein, and organic diets. This shift has created an unprecedented demand not just for standard varieties, but also for premium medicinal mushrooms.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed my-4 text-sm md:text-base">
                With our training, you can master the cultivation of:
              </p>
              <ul className="list-none space-y-3 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong>Commercial Varieties:</strong>{" "}
                    <Link href="/services/oyster-mushroom" className="text-primary-start hover:underline">
                      Oyster Mushroom
                    </Link>
                    ,{" "}
                    <Link href="/services/milky-mushroom" className="text-primary-start hover:underline">
                      Milky Mushroom
                    </Link>
                    , and{" "}
                    <Link href="/services/button-mushroom" className="text-primary-start hover:underline">
                      Button Mushroom
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary-start shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong>Premium &amp; Medicinal Varieties:</strong> Shiitake Mushroom, Lion’s Mane, Reishi, and Turkey Tail Mushroom.
                  </span>
                </li>
              </ul>
            </section>

            <section aria-labelledby="complete-blueprint">
              <h2
                id="complete-blueprint"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-6 border-l-4 border-primary-start pl-4"
              >
                Complete Blueprint: From Learning to Earning
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6 text-sm md:text-base">
                To build a successful business, you need the right mix of technical knowledge, quality raw materials, and market access. Here is how we support your entrepreneurial journey:
              </p>

              <div className="space-y-5">
                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/10 border-black/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    1. Online Mushroom Training (வீட்டிலிருந்தே ஆன்லைன் பயிற்சி)
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 mb-3 text-sm md:text-base">
                    Can’t travel? No problem. Learn the entire science of mushroom cultivation from the comfort of your home. Our comprehensive{" "}
                    <Link href="/training" className="text-primary-start hover:underline font-semibold">
                      Online Mushroom Training
                    </Link>{" "}
                    program covers:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm dark:text-slate-400 text-slate-600">
                    <li>Substrate preparation and sterilization techniques.</li>
                    <li>Spawn running conditions and crop management.</li>
                    <li>Harvesting, professional packaging, and modern marketing strategies.</li>
                  </ul>
                  <p className="dark:text-slate-400 text-slate-600 mt-3 text-xs sm:text-sm italic">
                    Perfect for residents across Tambaram, Velachery, OMR, Porur, and remote villages who want flexible learning hours.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/10 border-black/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    2. Offline Practical Mushroom Training
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    If you prefer hands-on learning, our{" "}
                    <Link href="/workshop" className="text-primary-start hover:underline font-semibold">
                      Offline Practical Mushroom Training
                    </Link>{" "}
                    features live demonstrations in a working farm environment. You will get dirty, prepare your own mushroom beds, learn precise spawn handling, study disease management, and master commercial production workflows firsthand.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/10 border-black/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    3. Professional Mushroom Farm Setup
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    Setting up a high-yield growing environment requires precision. We provide complete technical guidance for{" "}
                    <Link href="/services/turnkey-setup" className="text-primary-start hover:underline font-semibold">
                      Mushroom Farm Setup in Chennai
                    </Link>
                    , ensuring you have the perfect clean growing room, humidity management, balanced ventilation systems, temperature control, and proper hygienic storage areas.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/10 border-black/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    4. Turnkey Mushroom Projects
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    For investors and commercial growers looking for a hassle-free launch, we design and execute{" "}
                    <Link href="/services/turnkey-setup" className="text-primary-start hover:underline font-semibold">
                      Turnkey Projects
                    </Link>
                    . We handle everything—from structural construction and climate-control automation to initial spawn inoculation—handing over a fully operational, ready-to-harvest farm.
                  </p>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/10 border-black/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    5. High-Yield Mushroom Spawn Sale
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 mb-3 text-sm md:text-base">
                    The secret to a heavy harvest lies in the genetics. We offer premium, laboratory-tested{" "}
                    <Link href="/services/spawn-supply" className="text-primary-start hover:underline font-semibold">
                      Mushroom Spawn Sale
                    </Link>{" "}
                    services. Get the highest-yielding Oyster Mushroom Spawn, Milky Mushroom Spawn, and Button Mushroom Spawn to ensure a disease-free, high-quality crop cycle.
                  </p>
                  <div className="bg-primary-start/10 text-primary-start p-3 rounded-lg text-center font-mono text-xs sm:text-sm border border-primary-start/20">
                    [ High-Yield Spawn ] ➔ [ Controlled Farm Setup ] ➔ [ Bumper Mushroom Harvest ]
                  </div>
                </div>

                <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-2xl border dark:border-white/10 border-black/10">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">
                    6. Mushroom Consultancy Services
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    Stuck with low yields or contamination? Our expert{" "}
                    <Link href="/services/consultancy" className="text-primary-start hover:underline font-semibold">
                      Mushroom Consultancy
                    </Link>{" "}
                    services provide end-to-end troubleshooting, farm planning optimization, production management audits, and business expansion advice to keep your farm profitable year-round.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="maximizing-revenue">
              <h2
                id="maximizing-revenue"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-6 border-l-4 border-primary-start pl-4"
              >
                Maximizing Revenue: Sales, Marketing &amp; Business Strategy
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6 text-sm md:text-base">
                Growing mushrooms is only half the battle; selling them smartly is where the real profit lies.
              </p>

              <div className="space-y-5">
                <div className="glass p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-3">
                    Fresh Mushroom Sale &amp; Dry Mushroom Business
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    <li>
                      <strong>Fresh Mushroom Sale:</strong> Tap into Chennai’s bustling local markets, retail shops, supermarkets, and premium organic stores.
                    </li>
                    <li>
                      <strong>Dry Mushroom Sale &amp; Value Addition:</strong> Mushrooms have a short shelf-life, but drying them opens up a massive pan-India market. Dry mushrooms offer longer shelf life, effortless transportation, and can be converted into high-margin products like mushroom powder or health supplements.
                    </li>
                  </ul>
                </div>

                <div className="glass p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-3">
                    Business Plan, ROI &amp; Government Subsidy
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 mb-4 text-sm md:text-base">
                    Before building a single bed, we help you draft a solid{" "}
                    <Link href="/blog/mushroom-farming-business-plan-india" className="text-primary-start hover:underline font-semibold">
                      Business Plan &amp; ROI
                    </Link>{" "}
                    evaluation. We calculate your exact investment costs against production capacity to forecast real profitability.
                  </p>
                  <div className="p-4 rounded-xl border border-primary-start/30 bg-primary-start/5 text-primary-start text-xs sm:text-sm">
                    <strong>Financial Boost:</strong> We also guide you through the latest <strong>Government Subsidy for Mushroom Farming</strong> under various agricultural and entrepreneurship schemes, making your initial setup incredibly cost-effective.
                  </div>
                </div>

                <div className="glass p-5 md:p-6 rounded-2xl border dark:border-white/5 border-black/5">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-3">
                    Dedicated Mushroom Marketing Support
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
                    You don’t have to worry about finding buyers. Our <strong>Mushroom Marketing Support</strong> connects you with local market networks, commercial restaurant supply chains, and bulk buyers, helping you build a sustainable, highly profitable business model.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="hyper-local-connectivity">
              <h2
                id="hyper-local-connectivity"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-6 border-l-4 border-primary-start pl-4"
              >
                Hyper-Local Connectivity: Serving Every Corner of Chennai
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6 text-sm md:text-base">
                We are deeply rooted in the local community, extending our training, setup, and spawn delivery services to all major zones and neighboring rural clusters:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 md:gap-4 dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                <li className="flex gap-2.5 items-start">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Major Urban Hubs:</strong> Tambaram, Velachery, Anna Nagar, OMR (Old Mahabalipuram Road), Porur, Ambattur, Avadi, and Chromepet.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Poonamallee Region:</strong> Covering Poonamallee town, Kumananchavadi, Karayanchavadi, Senneerkuppam, and Nazarathpet.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Thiruvallur Region:</strong> Serving Thiruvallur blocks, Kakalur, Putlur, Aranvoyal, and Veppambaattu.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Sriperumbudur Region:</strong> Extending to Sriperumbudur industrial zones, Mampakkam, Pennalur, Irungattukottai, and Sunguvarchatram.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start md:col-span-2">
                  <MapPin className="text-primary-start shrink-0 mt-0.5" size={16} />
                  <span>
                    <strong>Kundrathur Region:</strong> Reaching Kundrathur, Kovur, Mangadu, Chembarambakkam, and Chikkarayapuram villages.
                  </span>
                </li>
              </ul>
            </section>

            <section
              aria-labelledby="conclusion-take-action"
              className="bg-linear-to-r from-primary-start/20 to-primary-end/20 p-6 md:p-8 rounded-3xl mt-10 md:mt-12 border border-primary-start/20"
            >
              <h2
                id="conclusion-take-action"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-3"
              >
                Conclusion: Take the First Step Today!
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                சென்னை மற்றும் அதன் சுற்றுப்புற பகுதிகளில் காளான் வளர்ப்பு ஒரு சிறந்த விவசாய மற்றும் தொழில் வாய்ப்பாக மாறி வருகிறது. Proper training, premium spawn, and strategic marketing support can transform a small space into a highly rewarding business venture.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 text-sm md:text-base">
                Whether you want to join our next training batch, buy premium spawn, or set up a commercial facility, we have the expertise to make your venture a grand success.
              </p>
              <p className="dark:text-slate-300 text-slate-700 font-bold mb-6 text-sm md:text-base">
                Ready to start your mushroom farming journey in Chennai? Contact us today to consult with our experts!
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+919203544140"
                  className="btn-primary px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <Phone size={18} /> Call Now: 9203544140
                </a>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all text-sm sm:text-base border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 text-slate-900 dark:text-white w-full sm:w-auto justify-center hover:bg-white/80 dark:hover:bg-white/10"
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
