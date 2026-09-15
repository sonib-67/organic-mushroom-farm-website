import React from "react";
import {
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Calendar,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "லாபகரமான காளான் வளர்ப்பு: Training & Setup Madurai",
  description:
    "Organic Mushroom Farm brings you complete agribusiness support in Madurai. Join our expert offline classes for காளான் வளர்ப்பு and get turnkey farm setup solutions.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/mushroom-farming-madurai-tamil-nadu",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "லாபகரமான காளான் வளர்ப்பு: Training & Setup Madurai",
    description:
      "Organic Mushroom Farm brings you complete agribusiness support in Madurai. Join our expert offline classes for காளான் வளர்ப்பு and get turnkey farm setup solutions.",
    url: "https://organicmushroomsfarm.com/mushroom-farming-madurai-tamil-nadu",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "லாபகரமான காளான் வளர்ப்பு: Training & Setup Madurai",
    description:
      "Organic Mushroom Farm brings you complete agribusiness support in Madurai. Join our expert offline classes for காளான் வளர்ப்பு and get turnkey farm setup solutions.",
  },
};

const ArticleMaduraiTraining = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://organicmushroomsfarm.com/mushroom-farming-madurai-tamil-nadu#webpage",
        url: "https://organicmushroomsfarm.com/mushroom-farming-madurai-tamil-nadu",
        name: "லாபகரமான காளான் வளர்ப்பு: Training & Setup Madurai",
        description:
          "Organic Mushroom Farm brings you complete agribusiness support in Madurai. Join our expert offline classes for காளான் வளர்ப்பு and get turnkey farm setup solutions.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://organicmushroomsfarm.com/#website",
          url: "https://organicmushroomsfarm.com",
          name: "Organic Mushrooms Farm",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://organicmushroomsfarm.com/mushroom-farming-madurai-tamil-nadu#breadcrumb",
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
            name: "Tamil Nadu",
            item: "https://organicmushroomsfarm.com/states/tamil-nadu",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Madurai",
            item: "https://organicmushroomsfarm.com/mushroom-farming-madurai-tamil-nadu",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id":
          "https://organicmushroomsfarm.com/mushroom-farming-madurai-tamil-nadu#localbusiness",
        name: "Organic Mushrooms Farm",
        areaServed: "Madurai, Tamil Nadu",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Madurai",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        description:
          "Mushroom farm setup, training, spawn supply and consultancy services in Madurai and surrounding blocks, Tamil Nadu.",
      },
      {
        "@type": "Course",
        "@id":
          "https://organicmushroomsfarm.com/mushroom-farming-madurai-tamil-nadu#course",
        name: "Mushroom Farming Training (Online & Offline) - Madurai",
        description:
          "Practical and online training covering mushroom cultivation, spawn management, harvesting and business planning.",
        provider: {
          "@type": "Organization",
          name: "Organic Mushrooms Farm",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://organicmushroomsfarm.com/mushroom-farming-madurai-tamil-nadu#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "1. மதுரையில் mushroom farming-இன் cost எவ்வளவு?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cost scale-ஐ பொறுத்தது — சிறிய unit குறைந்த budget-ல் தொடங்கும், commercial climate-controlled setup-க்கு அதிக investment தேவை. சரியான estimate-க்கு personalized business plan எடுத்துக்கொள்வது நல்லது.",
            },
          },
          {
            "@type": "Question",
            name: "2. எவ்வளவு profit கிடைக்கும்?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Profit variety, scale, production quality மற்றும் local buyer network-ஐ பொறுத்தது.",
            },
          },
          {
            "@type": "Question",
            name: "3. Mushroom spawn எங்கே வாங்குவது?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Quality-assured oyster, button மற்றும் milky mushroom spawn direct-ஆக supply கிடைக்கும், மதுரைக்குள் delivery-ம் possible.",
            },
          },
          {
            "@type": "Question",
            name: "4. Mushroom training எப்படி join செய்வது?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Online மற்றும் offline, இரண்டு formats-ம் available — உங்கள் availability-ஐ பொறுத்து தேர்வு செய்யலாம்.",
            },
          },
          {
            "@type": "Question",
            name: "5. Online training கிடைக்குமா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ஆம், working professionals மற்றும் busy schedule உள்ளவர்களுக்கு online training convenient.",
            },
          },
          {
            "@type": "Question",
            name: "6. Offline/hands-on training-ம் கிடைக்குமா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ஆம், practical demonstration மற்றும் live sessions offline training-ல் cover செய்யப்படும்.",
            },
          },
          {
            "@type": "Question",
            name: "7. Mushroom farming-க்கு எவ்வளவு இடம் தேவை?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "சிறிய scale-க்கு 100-200 sq. ft. இலிருந்தே தொடங்கலாம்; commercial scale-க்கு அதிக space மற்றும் proper climate control தேவை.",
            },
          },
          {
            "@type": "Question",
            name: "8. பெண்கள் இந்த business-ஐ தொடங்கலாமா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "நிச்சயமாக — mushroom farming low-investment, home-based self-employment-க்கு popular option.",
            },
          },
          {
            "@type": "Question",
            name: "9. மாணவர்களும் தொடங்கலாமா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ஆம், குறைந்த capital மற்றும் சிறிய இடத்தில் மாணவர்களும் side-business ஆக தொடங்கலாம்.",
            },
          },
          {
            "@type": "Question",
            name: "10. Government subsidy கிடைக்குமா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "சில agriculture மற்றும் self-employment schemes allied activities-க்கு support செய்கின்றன; current eligibility மற்றும் benefits-க்கு local Krishi Vigyan Kendra அல்லது வங்கியில் verify செய்துகொள்ளவும்.",
            },
          },
          {
            "@type": "Question",
            name: "11. மதுரைக்கு எந்த mushroom variety best?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oyster mushroom beginners-க்கு எளிமையானது; heat-tolerant milky mushroom-ம் suitable; button mushroom-க்கு cooling setup தேவை.",
            },
          },
          {
            "@type": "Question",
            name: "12. Mushroom-ஐ எப்படி விற்பது?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hotels, restaurants, organic stores, supermarkets மற்றும் online platforms — multiple channels available, marketing support இதில் help செய்யும்.",
            },
          },
          {
            "@type": "Question",
            name: "13. Consultancy service கிடைக்குமா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ஆம், farm planning முதல் market development வரை consultancy available.",
            },
          },
          {
            "@type": "Question",
            name: "14. Turnkey project setup கிடைக்குமா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ஆம், பெரிய scale investors-க்கு complete farm design முதல் operational setup வரை turnkey solutions available.",
            },
          },
          {
            "@type": "Question",
            name: "15. Marketing support கிடைக்குமா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ஆம், branding, packaging, restaurant partnerships மற்றும் online promotion areas-ல் support கிடைக்கும்.",
            },
          },
          {
            "@type": "Question",
            name: "16. அண்ணா நகர் அல்லது KK நகரில் இருப்பவர்கள் நேரடியாக fresh mushroom order செய்யலாமா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ஆம், இந்த areas-ல் fresh, locally-grown mushroom delivery ஒரு growing trend.",
            },
          },
          {
            "@type": "Question",
            name: "17. வடிபட்டி அல்லது அலங்காநல்லூர் block-ல் production unit வைப்பது நல்லதா?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ஆம், இந்த areas-ல் land cost மதுரை நகரத்தை விட குறைவு, connectivity-ம் நன்றாக உள்ளது.",
            },
          },
          {
            "@type": "Question",
            name: "18. Dry mushroom மற்றும் mushroom powder எங்கே விற்கலாம்?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "இந்த products-ஐ மதுரைக்கு மட்டும் limit செய்யாமல் online அல்லது pan-India-வும் விற்கலாம்.",
            },
          },
          {
            "@type": "Question",
            name: "19. மதுரையில் medicinal mushroom (Lion's Mane, Reishi, Cordyceps) market எப்படி உள்ளது?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "மதுரையின் health-conscious consumer base இதை ஒரு promising, early-stage category ஆக மாற்றுகிறது.",
            },
          },
          {
            "@type": "Question",
            name: "20. FPO அல்லது farmer group commercial scale-ல் எப்படி தொடங்குவது?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Collective production மற்றும் turnkey/consultancy support எடுத்து FPOs பெரிய scale-ல் cost-efficient ஆக தொடங்கலாம்.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen pt-24 sm:pt-28 pb-20 relative overflow-hidden">
        {/* Ambient Background Colors */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-emerald-400/20 dark:bg-emerald-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <article className="max-w-4xl mx-auto px-4">
          {/* Back Navigation Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
          >
            <Link
              href="/"
              className="hover:text-emerald-500 transition-colors"
            >
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link
              href="/states"
              className="hover:text-emerald-500 transition-colors"
            >
              States
            </Link>
            <span className="text-slate-400">/</span>
            <Link
              href="/states/tamil-nadu"
              className="hover:text-emerald-500 transition-colors"
            >
              Tamil Nadu
            </Link>
            <span className="text-slate-400">/</span>
            <span className="font-semibold text-slate-900 dark:text-white">
              Madurai
            </span>
          </nav>

          <div className="glass p-5 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] border dark:border-white/5 border-black/5 space-y-7 sm:space-y-8">
            <header className="text-center border-b dark:border-white/10 border-black/10 pb-6 sm:pb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold dark:text-white text-slate-900 leading-tight mb-3 sm:mb-4">
                மதுரையில் வெற்றிகரமான Mushroom Farming: Training, Spawn & Setup
              </h1>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase text-xs sm:text-sm">
                Organic Mushrooms Farm — Madurai, Tamil Nadu Special Edition
              </p>
            </header>

            {/* Introduction Section */}
            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3.5 sm:pl-4">
                Madurai-ல் Commercial காளான் விவசாயம் (Mushroom Farming) எப்படி
                செய்வது?
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                Madurai is rapidly becoming a hotspot for modern agriculture.
                மதுரையில் உள்ள முன்னணி ஹோட்டல்கள் மற்றும் மார்க்கெட்டுகளில் (In
                top hotels and markets in Madurai) fresh Oyster mushrooms-க்கு
                அதிக தட்டுப்பாடு மற்றும் தேவை உள்ளது. This makes commercial
                mushroom farming a highly lucrative agribusiness opportunity.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                As a beginner, you need the right guidance to prevent losses.
                அதற்காகவே நாங்கள் (That is why we) provide advanced practical
                training and A-to-Z farm setup services customized specially for
                Madurai's weather. உங்கள் பண்ணைக்கே நேரடியாக தரமான காளான்
                வித்துக்கள் (Premium mushroom spawn delivered directly to your
                farm) நாங்கள் வழங்குகிறோம்.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                Your success is our priority. காளான்களை உற்பத்தி செய்த பிறகு,
                அதனை லோக்கல் மார்க்கெட்டில் எப்படி லாபகரமாக விற்பது (how to sell
                it profitably in the local market) என்பதற்கான பிரத்யேக marketing
                and sales strategies-ஐ நாங்கள் கற்றுத்தருகிறோம். Start building
                your agribusiness today!
              </p>
            </section>

            {/* Demand Section */}
            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3.5 sm:pl-4">
                மதுரையில் காளான் தொழில் ஏன் வேகமாக வளர்கிறது?
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                மதுரை ஒரு பாரம்பரிய கலாச்சார நகரம் மட்டுமல்ல, இது ஒரு strong
                tourism மற்றும் food industry hub கூட. ஆண்டுக்கு லட்சக்கணக்கான
                tourists மீனாட்சி கோவில், தியாகராஜர் கல்லூரி பகுதி, மேலும்
                சுற்றுவட்டார religious spots பார்க்க வருகிறார்கள். இதனால்
                hotels, restaurants, mess business இங்கு அதிகமாக இருக்கின்றன.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                இதனுடன் சேர்ந்து, health awareness அதிகரிப்பது, organic food
                stores பெருகுவது, மற்றும் protein-rich உணவுக்கான தேவை — இவை
                அனைத்தும் mushroom business க்கு ஒரு strong foundation
                உருவாக்குகின்றன. முன்பு காளான் பெரும்பாலும் ஊட்டி அல்லது
                கோயம்புத்தூர் பகுதிகளில் இருந்து மதுரைக்கு வந்தது. இப்போது local
                growers இந்த gap-ஐ fill செய்கிறார்கள், இதனால் transportation
                cost குறைந்து, காளான் fresh ஆக consumer-க்கு கிடைக்கிறது.
              </p>
            </section>

            {/* Climate Section */}
            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3.5 sm:pl-4">
                மதுரையின் Climate காளான் சாகுபடிக்கு எப்படி பொருந்துகிறது?
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                மதுரை ஒரு hot and dry climate கொண்ட நகரம் — கோடையில் temperature
                40°C-க்கும் மேல் செல்கிறது. இது{" "}
                <Link
                  href="/mushroom-types"
                  className="text-emerald-500 hover:underline"
                >
                  milky mushroom
                </Link>
                -க்கு மிகவும் suitable, ஏனெனில் இது heat-tolerant variety.{" "}
                <Link
                  href="/mushroom-types"
                  className="text-emerald-500 hover:underline"
                >
                  Oyster mushroom
                </Link>
                -ம் Tamil Nadu-வின் இந்த warm climate-ல் நன்றாக வளரும்.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                <Link
                  href="/mushroom-types"
                  className="text-emerald-500 hover:underline"
                >
                  Button mushroom
                </Link>
                -க்கு குளிர்ந்த temperature (16-22°C) தேவை, அதனால் மதுரையில்
                இதற்கு cooling setup அல்லது semi-controlled room தேவைப்படும்.
                வடிபட்டி, கொட்டாம்பட்டி, செடப்பட்டி போன்ற peri-urban blocks-ல்
                poly-shed அமைத்து, ஆண்டு முழுவதும் production செய்யலாம்.
              </p>
            </section>

            {/* Services Section */}
            <section className="space-y-5 sm:space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900">
                  <Link
                    href="/articles/turnkey-commercial-setup"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Mushroom Farm Setup Services
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700">
                  மதுரையில் பலருக்கு பெரிய நிலம் இல்லை — இது ஒரு பிரச்சனை இல்லை.
                  Mushroom farming ஆரம்பிக்க தேவைப்படுவது:
                </p>
                <ul className="space-y-2 pl-0 list-none">
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />{" "}
                    <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                      சிறிய production room (100-500 sq. ft. இலிருந்து
                      ஆரம்பிக்கலாம்)
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />{" "}
                    <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                      Proper humidity control
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />{" "}
                    <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                      Ventilation மற்றும் clean air flow
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />{" "}
                    <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                      Quality spawn
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />{" "}
                    <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                      Contamination-free clean environment
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />{" "}
                    <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm">
                      Storage area
                    </span>
                  </li>
                </ul>
                <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700">
                  Setup services-ல் site assessment, layout design, low-cost DIY
                  options முதல் semi-automated climate-controlled units வரை
                  அனைத்தும் cover செய்யப்படுகிறது — உங்களுடையது அரப்பாளையத்தில்
                  ஒரு terrace ஆனாலும், தல்லாகுளத்தில் ஒரு shed ஆனாலும், அல்லது
                  ஓத்தக்கடை பக்கம் கொஞ்சம் நிலம் ஆனாலும்.
                </p>
              </div>
            </section>

            {/* Training Section */}
            <section className="space-y-5 sm:space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3.5 sm:pl-4">
                Training (பயிற்சி)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 sm:p-6 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">
                    <Link
                      href="/training"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Online Mushroom Training Program
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-xs dark:text-slate-400 text-slate-600 mb-4 leading-relaxed">
                    மதுரையில் பலர் IT, government, private sector jobs-ல் வேலை
                    செய்கிறார்கள் — அவர்களுக்கு weekend அல்லது மாலை நேரம்தான்
                    கிடைக்கும். அவர்களுக்கு Online Mushroom Training ஒரு perfect
                    option. Online training-ல் கற்றுக்கொள்ளக்கூடியவை: Oyster
                    Mushroom Farming, Button Mushroom Farming, Milky Mushroom
                    Farming, Spawn management மற்றும் production planning,
                    Mushroom marketing, Business planning.
                  </p>
                  <Link
                    href="/training"
                    className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1"
                  >
                    Explore Course Details <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="p-5 sm:p-6 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">
                    <Link
                      href="/training"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Offline Practical Mushroom Training
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-xs dark:text-slate-400 text-slate-600 mb-4 leading-relaxed">
                    சிலர் சொல்வார்கள் — "வீடியோ பார்த்து புரிஞ்சுது, ஆனா கையால
                    செஞ்சு காமிக்கணும்." Offline training இந்த gap-ஐ fill
                    செய்கிறது. Hands-on training-ல் இருப்பவை: Bed preparation,
                    Spawn handling, Harvesting techniques, Farm management,
                    Production techniques. மட்டுத்தாவணி, அண்ணா நகர், KK நகர்
                    பகுதிகளில் இருந்து எளிதாக வரக்கூடிய வகையில் offline training
                    venue வைக்கப்படுகிறது.
                  </p>
                  <Link
                    href="/training"
                    className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1"
                  >
                    View Schedule <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Sales & Services Section */}
            <section className="space-y-5 sm:space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3.5 sm:pl-4">
                Mushroom Sales, Spawn & Value-added Products
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1.5">
                    <Link
                      href="/spawn-seed"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Mushroom Spawn Supply
                    </Link>
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Spawn quality நன்றாக இல்லையென்றால் yield ஒருபோதும்
                    consistent ஆக வராது. கிடைக்கும் categories: Oyster, Button,
                    Milky. Delivery மட்டுத்தாவணி, அண்ணா நகர், KK நகர், திருநகர்,
                    செல்லூர், தில்லாகுளம் முதல் திருப்பரங்குன்றம், வடிபட்டி,
                    அலங்காநல்லூர் block வரை செய்யப்படுகிறது.
                  </p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1.5">
                    <Link
                      href="/contact"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Fresh Mushroom Supply
                    </Link>
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Fresh mushroom demand முக்கியமாக இங்கிருந்து வருகிறது:
                    Hotels மற்றும் restaurants (பெரியார் bus stand, டவுன் ஹால்
                    ரோடு பகுதி), Supermarkets, Organic food stores, Vegetable
                    markets (ஜோதி மற்றும் மட்டுத்தாவணி மார்க்கெட்).
                  </p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1.5">
                    <Link
                      href="/contact"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Dry Mushroom Products
                    </Link>
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Fresh mushroom-உடன், value-added products-க்கும் நல்ல market
                    உள்ளது: Dry mushrooms, Mushroom powder (soup மற்றும் health
                    supplements-ல் பயன்படுகிறது), Ready-to-cook mushroom mixes.
                    இந்த products-ஐ மதுரைக்கு மட்டும் limit செய்யாமல், online
                    மூலம் pan-India-வும் விற்கலாம்.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-5 sm:mt-6">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    Medicinal மற்றும் Gourmet Mushroom Opportunities
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    Wellness market-ல் interest அதிகரிக்கும் varieties:{" "}
                    <Link
                      href="/mushroom-types"
                      className="text-emerald-500 hover:underline"
                    >
                      Lion's Mane
                    </Link>{" "}
                    (cognitive wellness),{" "}
                    <Link
                      href="/mushroom-types"
                      className="text-emerald-500 hover:underline"
                    >
                      Reishi
                    </Link>{" "}
                    (immunity),{" "}
                    <Link
                      href="/mushroom-types"
                      className="text-emerald-500 hover:underline"
                    >
                      Cordyceps
                    </Link>{" "}
                    (premium medicinal),{" "}
                    <Link
                      href="/mushroom-types"
                      className="text-emerald-500 hover:underline"
                    >
                      Turkey Tail
                    </Link>{" "}
                    (functional food),{" "}
                    <Link
                      href="/mushroom-types"
                      className="text-emerald-500 hover:underline"
                    >
                      Shiitake
                    </Link>{" "}
                    (gourmet restaurant segment). இந்த category இன்னும்
                    India-வில் early-stage-ல் தான் இருக்கிறது, அதனால் இப்போது
                    enter ஆகும் entrepreneurs-க்கு first-mover advantage
                    கிடைக்கும்.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    <Link
                      href="/contact"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Mushroom Consultancy Services
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    ஒவ்வொரு entrepreneur-இன் situation வேறு — யாருக்கோ budget
                    குறைவு, யாருக்கோ space சிறியது, யாருக்கோ marketing தெரியாது.
                    Consultancy services இந்த areas-ல் help செய்யும்: Farm
                    planning, Technical support, Infrastructure design, Business
                    expansion, Market development.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    <Link
                      href="/articles/turnkey-commercial-setup"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Turnkey Mushroom Projects
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    பெரிய scale-ல் யோசிக்கும் investors-க்கு — அரப்பாளையம்
                    industrial belt-ல் ஆனாலும், கொட்டாம்பட்டி-செடப்பட்டி land-ல்
                    ஆனாலும் — turnkey projects available. Farm design, equipment
                    planning, infrastructure மற்றும் operational setup எல்லாம்
                    ஒரே மையத்தில் handle செய்யப்படும்.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    <Link
                      href="/blog/mushroom-farming-business-plan-india"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Mushroom Business Plan & ROI
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    Investment செய்வதற்கு முன் இவற்றை evaluate செய்யவும்:
                    Investment budget, Production capacity, Market demand, Sales
                    channels, Operating costs. ஒரு structured{" "}
                    <Link
                      href="/business-plan"
                      className="text-emerald-500 hover:underline font-semibold"
                    >
                      Mushroom Business Plan
                    </Link>{" "}
                    business risks-ஐ குறைக்க உதவும்.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    <Link
                      href="/subsidy"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Government Subsidy
                    </Link>{" "}
                    & Marketing Support
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    Available schemes மற்றும் eligibility-ஐ பொறுத்து subsidies
                    கிடைக்கலாம். Marketing support-ல் Brand development,
                    Packaging, Restaurant partnerships, Online promotion എന്നിവ
                    focus செய்யப்படும்.
                  </p>
                </div>
              </div>
            </section>

            {/* Neighborhoods and Areas Section */}
            <section className="space-y-5 sm:space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3.5 sm:pl-4">
                Mushroom Farming in Major Areas of Madurai
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    மட்டுத்தாவணி
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Bus terminus மற்றும் market hub, wholesale fresh mushroom
                    supply-க்கு strategic location.
                  </p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    அண்ணா நகர் மற்றும் KK நகர்
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Established residential areas, health-conscious
                    families-க்கு direct home delivery-க்கு நல்ல scope.
                  </p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    திருநகர் மற்றும் செல்லூர்
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Growing residential belt, retail மற்றும் local market demand
                    அதிகரித்து வருகிறது.
                  </p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    திருப்பரங்குன்றம்
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Temple town அருகில் இருப்பதால் tourism-driven
                    hotel/restaurant demand.
                  </p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    அரப்பாளையம்
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Traditional trading area, spawn மற்றும் dry mushroom
                    distribution-க்கு suitable.
                  </p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    தல்லாகுளம், கோரிபாளையம், சிம்மக்கல்
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    City-central areas, organic stores மற்றும் supermarkets
                    இங்கு அதிகம்.
                  </p>
                </div>
              </div>
            </section>

            {/* Nearby Regions Section */}
            <section className="space-y-5 sm:space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3.5 sm:pl-4">
                Mushroom Farming in Nearby Villages மற்றும் Blocks
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" />{" "}
                    ஓத்தக்கடை (Othakadai)
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Madurai East block-ல் உள்ள இந்த பகுதியில் storage godown
                    facilities ஏற்கனவே உள்ளதால், dry mushroom மற்றும் spawn
                    storage-க்கு strategic.
                  </p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" />{" "}
                    அலங்காநல்லூர்
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Jallikattu-க்கு பிரபலமான இந்த block-ல் agricultural land
                    அதிகம் கிடைக்கிறது, mushroom unit தொடங்க cost-effective.
                  </p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" />{" "}
                    வடிபட்டி
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Traditional farming block, சான்னம்பட்டி பகுதியில் storage
                    facility-ம் உள்ளது.
                  </p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" />{" "}
                    கொட்டாம்பட்டி மற்றும் செடப்பட்டி
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Rural belt, land cost குறைவு, commercial scale-க்கு
                    suitable.
                  </p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" />{" "}
                    மேலூர்
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Municipality town, regulated market உள்ளது, paddy மற்றும்
                    agri produce trading hub — mushroom-க்கும் அதே network
                    பயன்படுத்தலாம்.
                  </p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" />{" "}
                    உசிலம்பட்டி மற்றும் திருமங்கலம்
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Municipality towns, spawn மற்றும் dry mushroom
                    distribution-க்கு reach அதிகரிக்கும்.
                  </p>
                </div>
              </div>
            </section>

            {/* Audiences Segment Section */}
            <section className="space-y-3 sm:space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3.5 sm:pl-4">
                Opportunities for Various Groups
              </h2>
              <ul className="space-y-2.5 pl-0 list-none">
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <strong>விவசாயிகள் (Farmers)</strong> — ஓத்தக்கடை, வடிபட்டி,
                    அலங்காநல்லூர் belt-ல் உள்ள விவசாயிகள் தங்கள் traditional
                    விவசாயத்துடன் mushroom-ஐ supplementary income ஆக
                    சேர்த்துக்கொள்ளலாம்.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <strong>மாணவர்கள் (Students)</strong> — குறைந்த
                    investment-ல் தொடங்க முடியும் என்பதால், college students
                    மற்றும் fresh graduates-க்கு ஒரு நல்ல side-business idea.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <strong>பெண்கள் (Women)</strong> — வீட்டிலிருந்தே சிறிய unit
                    தொடங்கி self-employment வழி உருவாக்கிக்கொள்ளலாம் — பல
                    self-help groups ஏற்கனவே இதை apply செய்கிறார்கள்.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <strong>Startups</strong> — மதுரையில் வளர்ந்து வரும் food
                    business ecosystem காரணமாக mushroom-based food brands (dry
                    mushroom, powder, ready-to-cook products)-க்கு scope உள்ளது.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="dark:text-slate-300 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <strong>FPOs</strong> — Collective production மற்றும்
                    marketing-ஆல் cost குறையும், bargaining power அதிகரிக்கும்,
                    குறிப்பாக மதுரை போன்ற பெரிய market-க்கு supply செய்யும்போது.
                  </span>
                </li>
              </ul>
            </section>

            {/* Why Choose Us Section */}
            <section className="p-5 sm:p-7 md:p-8 rounded-[2rem] dark:bg-emerald-950/20 bg-emerald-50/50 border border-emerald-500/10 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Why Choose Organic Mushrooms Farm
              </h3>
              <ul className="space-y-2.5 pl-0 list-none">
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    Practical hands-on மற்றும் online — இரண்டு training options
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    Consistent yield தரும் quality spawn
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    Setup முதல் marketing வரை end-to-end support
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                    <span className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    மதுரை மற்றும் அதன் சுற்றுவட்டார blocks-இன் local market
                    understanding
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    Business planning மற்றும் ROI-focused approach, training
                    மட்டும் இல்லை
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />{" "}
                  <span className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    Turnkey மற்றும் consultancy — சிறிய unit ஆனாலும், பெரிய
                    commercial project ஆனாலும்
                  </span>
                </li>
              </ul>
            </section>

            {/* FAQ Section */}
            <section className="space-y-5 sm:space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <HelpCircle className="text-emerald-500 shrink-0" /> அடிக்கடி
                கேட்கப்படும் கேள்விகள் (FAQs)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                {[
                  {
                    q: "1. மதுரையில் mushroom farming-இன் cost எவ்வளவு?",
                    a: "Cost scale-ஐ பொறுத்தது — சிறிய unit குறைந்த budget-ல் தொடங்கும், commercial climate-controlled setup-க்கு அதிக investment தேவை. சரியான estimate-க்கு personalized business plan எடுத்துக்கொள்வது நல்லது.",
                  },
                  {
                    q: "2. எவ்வளவு profit கிடைக்கும்?",
                    a: "Profit variety, scale, production quality மற்றும் local buyer network-ஐ பொறுத்தது.",
                  },
                  {
                    q: (
                      <>
                        3.{" "}
                        <Link
                          href="/spawn-seed"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          Mushroom spawn
                        </Link>{" "}
                        எங்கே வாங்குவது?
                      </>
                    ),
                    a: "Quality-assured oyster, button மற்றும் milky mushroom spawn direct-ஆக supply கிடைக்கும், மதுரைக்குள் delivery-ம் possible.",
                  },
                  {
                    q: (
                      <>
                        4.{" "}
                        <Link
                          href="/training"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          Mushroom training
                        </Link>{" "}
                        எப்படி join செய்வது?
                      </>
                    ),
                    a: "Online மற்றும் offline, இரண்டு formats-ம் available — உங்கள் availability-ஐ பொறுத்து தேர்வு செய்யலாம்.",
                  },
                  {
                    q: (
                      <>
                        5.{" "}
                        <Link
                          href="/training"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          Online training
                        </Link>{" "}
                        கிடைக்குமா?
                      </>
                    ),
                    a: "ஆம், working professionals மற்றும் busy schedule உள்ளவர்களுக்கு online training convenient.",
                  },
                  {
                    q: (
                      <>
                        6.{" "}
                        <Link
                          href="/training"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          Offline/hands-on training
                        </Link>
                        -ம் கிடைக்குமா?
                      </>
                    ),
                    a: "ஆம், practical demonstration மற்றும் live sessions offline training-ல் cover செய்யப்படும்.",
                  },
                  {
                    q: "7. Mushroom farming-க்கு எவ்வளவு இடம் தேவை?",
                    a: "சிறிய scale-க்கு 100-200 sq. ft. இலிருந்தே தொடங்கலாம்; commercial scale-க்கு அதிக space மற்றும் proper climate control தேவை.",
                  },
                  {
                    q: "8. பெண்கள் இந்த business-ஐ தொடங்கலாமா?",
                    a: "நிச்சயமாக — mushroom farming low-investment, home-based self-employment-க்கு popular option.",
                  },
                  {
                    q: "9. மாணவர்களும் தொடங்கலாமா?",
                    a: "ஆம், குறைந்த capital மற்றும் சிறிய இடத்தில் மாணவர்களும் side-business ஆக தொடங்கலாம்.",
                  },
                  {
                    q: (
                      <>
                        10.{" "}
                        <Link
                          href="/subsidy"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          Government subsidy
                        </Link>{" "}
                        கிடைக்குமா?
                      </>
                    ),
                    a: "சில agriculture மற்றும் self-employment schemes allied activities-க்கு support செய்கின்றன; current eligibility மற்றும் benefits-க்கு local Krishi Vigyan Kendra அல்லது வங்கியில் verify செய்துகொள்ளவும்.",
                  },
                  {
                    q: "11. மதுரைக்கு எந்த mushroom variety best?",
                    a: (
                      <>
                        <Link
                          href="/mushroom-types"
                          className="text-emerald-500 hover:underline"
                        >
                          Oyster mushroom
                        </Link>{" "}
                        beginners-க்கு எளிமையானது; heat-tolerant milky
                        mushroom-ம் suitable; button mushroom-க்கு cooling setup
                        தேவை.
                      </>
                    ),
                  },
                  {
                    q: "12. Mushroom-ஐ எப்படி விற்பது?",
                    a: "Hotels, restaurants, organic stores, supermarkets மற்றும் online platforms — multiple channels available, marketing support இதில் help செய்யும்.",
                  },
                  {
                    q: (
                      <>
                        13.{" "}
                        <Link
                          href="/book-consultant"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          Consultancy service
                        </Link>{" "}
                        கிடைக்குமா?
                      </>
                    ),
                    a: "ஆம், farm planning முதல் market development வரை consultancy available.",
                  },
                  {
                    q: (
                      <>
                        14.{" "}
                        <Link
                          href="/turnkey-projects"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          Turnkey project setup
                        </Link>{" "}
                        கிடைக்குமா?
                      </>
                    ),
                    a: "ஆம், பெரிய scale investors-க்கு complete farm design முதல் operational setup வரை turnkey solutions available.",
                  },
                  {
                    q: "15. Marketing support கிடைக்குமா?",
                    a: "ஆம், branding, packaging, restaurant partnerships மற்றும் online promotion areas-ல் support கிடைக்கும்.",
                  },
                  {
                    q: "16. அண்ணா நகர் அல்லது KK நகரில் இருப்பவர்கள் நேரடியாக fresh mushroom order செய்யலாமா?",
                    a: "ஆம், இந்த areas-ல் fresh, locally-grown mushroom delivery ஒரு growing trend.",
                  },
                  {
                    q: "17. வடிபட்டி அல்லது அலங்காநல்லூர் block-ல் production unit வைப்பது நல்லதா?",
                    a: "ஆம், இந்த areas-ல் land cost மதுரை நகரத்தை விட குறைவு, connectivity-ம் நன்றாக உள்ளது.",
                  },
                  {
                    q: "18. Dry mushroom மற்றும் mushroom powder எங்கே விற்கலாம்?",
                    a: "இந்த products-ஐ மதுரைக்கு மட்டும் limit செய்யாமல் online அல்லது pan-India-வும் விற்கலாம்.",
                  },
                  {
                    q: (
                      <>
                        19. மதுரையில்{" "}
                        <Link
                          href="/mushroom-types"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          medicinal mushroom
                        </Link>{" "}
                        (Lion's Mane, Reishi, Cordyceps) market எப்படி உள்ளது?
                      </>
                    ),
                    a: "மதுரையின் health-conscious consumer base இதை ஒரு promising, early-stage category ஆக மாற்றுகிறது.",
                  },
                  {
                    q: "20. FPO அல்லது farmer group commercial scale-ல் எப்படி தொடங்குவது?",
                    a: "Collective production மற்றும் turnkey/consultancy support எடுத்து FPOs பெரிய scale-ல் cost-efficient ஆக தொடங்கலாம்.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5 space-y-2"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {faq.q}
                    </h3>
                    <div className="text-xs sm:text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="pt-8 border-t dark:border-white/10 border-black/10 text-center space-y-4">
              <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900">
                மதுரையில் காளான் தொழில் தொடங்க தயாரா?
              </h3>
              <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Organic Mushrooms Farm-உடன் இணைந்து training, quality spawn,
                farm setup guidance மற்றும் sales support-ஐ பெறுங்கள்.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
                <a
                  href="https://wa.me/917389595844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 text-sm"
                >
                  <Phone size={17} /> Contact on WhatsApp
                </a>
                <Link
                  href="/book-consultant"
                  className="px-7 py-3 rounded-full dark:bg-white/5 bg-black/5 dark:text-white text-slate-900 font-semibold border dark:border-white/10 border-black/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Calendar size={17} /> Book Consultation
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default ArticleMaduraiTraining;
