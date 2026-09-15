import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Info,
  CheckCircle2,
  Phone,
  ArrowRight,
  TrendingUp,
  MapPin,
  Clock,
  Sparkles,
  HelpCircle,
  Coins,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to Start Mushroom Farming in India: Complete Guide 2026-2027",
  description:
    "Complete guide to beginning your mushroom cultivation business in 2026-2027. A comprehensive guide for profitable mushroom farming in Madhya Pradesh & across India.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/madhya-pradesh/how-to-start-mushroom-farming-india",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "How to Start Mushroom Farming in India: Complete Guide 2026-2027",
    description:
      "Complete guide to beginning your mushroom cultivation business in 2026-2027. A comprehensive guide for profitable mushroom farming in Madhya Pradesh & across India.",
    type: "article",
    url: "https://organicmushroomsfarm.com/madhya-pradesh/how-to-start-mushroom-farming-india",
    siteName: "Organic Mushroom Farm",
  },
  twitter: {
    card: "summary",
    title: "How to Start Mushroom Farming in India: Complete Guide 2026-2027",
    description:
      "Complete guide to beginning your mushroom cultivation business in 2026-2027. A comprehensive guide for profitable mushroom farming in Madhya Pradesh & across India.",
  },
};

export default function ArticleMadhyaPradeshGuidePage() {
  const articleUrl =
    "https://organicmushroomsfarm.com/madhya-pradesh/how-to-start-mushroom-farming-india";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline:
      "How to Start Mushroom Farming in India: Complete Guide to Beginning Your Mushroom Cultivation Business in 2026-2027",
    description:
      "Complete guide to beginning your mushroom cultivation business in 2026-2027. A comprehensive guide for profitable mushroom farming in Madhya Pradesh & across India.",
    inLanguage: "en-US",
    datePublished: "2026-06-27T08:00:00+05:30",
    dateModified: "2026-09-14T10:00:00+05:30",
    author: {
      "@type": "Organization",
      name: "Organic Mushrooms Farm Agronomy Team",
      url: "https://organicmushroomsfarm.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
      logo: {
        "@type": "ImageObject",
        url: "https://organicmushroomsfarm.com/logo.png",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        name: "Madhya Pradesh",
        item: "https://organicmushroomsfarm.com/states/madhya-pradesh",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Start Mushroom Farming in India",
        item: articleUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to start mushroom farming?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can start small-scale mushroom farming in 2-4 weeks from decision to first harvest. But building a proper, professional setup takes 2-3 months.",
        },
      },
      {
        "@type": "Question",
        name: "What's the best mushroom to grow for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oyster mushroom farming is best for beginners because it's forgiving, requires less investment, and has good market demand.",
        },
      },
      {
        "@type": "Question",
        name: "Can I do mushroom farming as a side business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Many people start with 50-100 sq ft and earn ₹10,000-20,000 monthly as a side income.",
        },
      },
      {
        "@type": "Question",
        name: "Is mushroom farming profitable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, very profitable. ROI can be 50-100% per cycle with proper management, and cycles repeat every month.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need land to start mushroom farming?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you just need covered space. A basement, shed, or rented room works perfectly.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I earn from mushroom farming?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small-scale operations: ₹20,000-50,000/month. Medium-scale: ₹1-3 lakhs/month. Large commercial: ₹5+ lakhs/month.",
        },
      },
      {
        "@type": "Question",
        name: "What's the shelf life of farmed mushrooms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "5-7 days refrigerated for most varieties, longer if properly packaged and cooled.",
        },
      },
    ],
  };

  const faqs = [
    {
      q: "How long does it take to start mushroom farming?",
      a: "You can start small-scale mushroom farming in 2-4 weeks from decision to first harvest. But building a proper, professional setup takes 2-3 months.",
    },
    {
      q: "What's the best mushroom to grow for beginners?",
      a: "Oyster mushroom farming is best for beginners because it's forgiving, requires less investment, and has good market demand.",
    },
    {
      q: "Can I do mushroom farming as a side business?",
      a: "Absolutely! Many people start with 50-100 sq ft and earn ₹10,000-20,000 monthly as a side income.",
    },
    {
      q: "Is mushroom farming profitable?",
      a: "Yes, very profitable. ROI can be 50-100% per cycle with proper management, and cycles repeat every month.",
    },
    {
      q: "Do I need land to start mushroom farming?",
      a: "No, you just need covered space. A basement, shed, or rented room works perfectly.",
    },
    {
      q: "How much can I earn from mushroom farming?",
      a: "Small-scale operations: ₹20,000-50,000/month. Medium-scale: ₹1-3 lakhs/month. Large commercial: ₹5+ lakhs/month.",
    },
    {
      q: "What's the shelf life of farmed mushrooms?",
      a: "5-7 days refrigerated for most varieties, longer if properly packaged and cooled.",
    },
  ];

  const tags = [
    "Mushroom farming India",
    "how to start mushroom farming",
    "oyster mushroom farming",
    "button mushroom farming",
    "mushroom cultivation training",
    "mushroom farming profit",
    "mushroom farming investment",
    "commercial mushroom farming",
    "mushroom farming Madhya Pradesh",
    "mushroom spawn",
    "mushroom farming business",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen pt-28 md:pt-32 pb-20 relative overflow-hidden text-sm md:text-base">
        {/* Ambient Glows Preserved Without Dark Overlay Artifacts */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[2%] left-[8%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="absolute top-[18%] right-[6%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="absolute top-[45%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="absolute bottom-[5%] right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] md:blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link
              href="/states/madhya-pradesh"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors uppercase tracking-widest"
            >
              <ArrowLeft size={14} /> Back to Madhya Pradesh Hub
            </Link>
          </nav>

          {/* Article Header */}
          <header className="text-center max-w-4xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-5">
              <Sparkles size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Comprehensive Guide 2026-2027
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight">
              How to Start Mushroom Farming in India:{" "}
              <span className="gradient-text">
                Complete Guide to Beginning Your Mushroom Cultivation Business in 2026-2027
              </span>
            </h1>

            <p className="dark:text-slate-400 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              A Comprehensive Guide for Profitable Mushroom Farming in Madhya Pradesh &amp; Across India
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <Clock size={12} />
              <span>Published: June 27, 2026-2027 | Reading Time: ~25 minutes</span>
            </div>
          </header>

          {/* Main Article Content */}
          <main>
            <article className="max-w-5xl mx-auto">
              <div className="glass p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-10 shadow-xl">
                
                {/* Section 1: Introduction */}
                <section className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-3 border-l-4 border-[#7C3AED] pl-4">
                    <Info className="text-primary-start shrink-0" size={22} />
                    <span>Introduction: Why Mushroom Farming is Your Best Business Opportunity</span>
                  </h2>
                  <p className="dark:text-slate-400 text-slate-600 leading-relaxed text-sm md:text-base">
                    When I first thought about starting a mushroom farming business in India, I had so many questions. How much investment does mushroom farming need? What&apos;s the actual profit potential? Can I really do this in Madhya Pradesh? After months of research and connecting with experienced mushroom farmers at our{" "}
                    <Link
                      href="/cities/madhya-pradesh/jabalpur"
                      className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Jabalpur training farm
                    </Link>
                    , I&apos;ve learned that mushroom farming in India is one of the most profitable agricultural businesses you can start with minimal land and investment. If you&apos;re looking to start mushroom farming in India, whether you&apos;re in Madhya Pradesh, Delhi, or any other state, this complete guide will walk you through everything you need to know about mushroom cultivation, from choosing the right mushroom variety to scaling your mushroom farming business.
                  </p>
                </section>

                <hr className="dark:border-white/10 border-black/10" />

                {/* Section 2: Why Best Business */}
                <section className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-600 dark:border-emerald-500 pl-4">
                    Why Mushroom Farming is the Best Agricultural Business
                  </h2>
                  <p className="dark:text-slate-400 text-slate-600 leading-relaxed text-sm md:text-base">
                    Let me be straight with you: mushroom farming business is absolutely booming in India right now. Here&apos;s why I think more farmers are shifting toward mushroom cultivation:
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-3xl border dark:border-white/10 border-black/10 space-y-2">
                      <div className="flex items-center gap-2 text-[#7C3AED] dark:text-purple-400 font-bold text-base">
                        <TrendingUp size={18} />
                        <h3 className="font-bold dark:text-white text-slate-900 text-base md:text-lg">
                          Mushroom farming profit margins are incredible.
                        </h3>
                      </div>
                      <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                        Unlike traditional farming where you invest heavily in land, water, and lengthy crop cycles, mushroom farming gives you returns in just 30-45 days. I&apos;ve seen farmers earning ₹3-5 lakhs per month from a small 100 sq ft mushroom farm setup.
                      </p>
                    </div>

                    <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-3xl border dark:border-white/10 border-black/10 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-base">
                        <MapPin size={18} />
                        <h3 className="font-bold dark:text-white text-slate-900 text-base md:text-lg">
                          Land requirement for mushroom farming is minimal.
                        </h3>
                      </div>
                      <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                        You don&apos;t need acres of farmland. In fact, you can start mushroom cultivation in a small basement, shed, or even a rented space. This is what makes mushroom farming perfect for urban farmers and those with limited land.
                      </p>
                    </div>

                    <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-3xl border dark:border-white/10 border-black/10 space-y-2">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-base">
                        <Clock size={18} />
                        <h3 className="font-bold dark:text-white text-slate-900 text-base md:text-lg">
                          Year-round mushroom production means consistent income.
                        </h3>
                      </div>
                      <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                        Unlike seasonal crops, mushroom farming can be done throughout the year with proper climate control in an{" "}
                        <Link
                          href="/articles/turnkey-commercial-setup"
                          className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                          insulated indoor grow room
                        </Link>
                        . This means you have a steady income stream every month.
                      </p>
                    </div>

                    <div className="dark:bg-white/5 bg-black/5 p-5 md:p-6 rounded-3xl border dark:border-white/10 border-black/10 space-y-2">
                      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-base">
                        <Coins className="text-amber-500" size={18} />
                        <h3 className="font-bold dark:text-white text-slate-900 text-base md:text-lg">
                          Market demand for mushrooms in India is constantly increasing.
                        </h3>
                      </div>
                      <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                        From restaurants and hotels to grocery stores and health-conscious consumers, everyone wants fresh mushrooms. Button mushrooms, oyster mushrooms, shiitake mushrooms, and milky mushrooms are all in high demand.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="dark:border-white/10 border-black/10" />

                {/* Section 3: Types of Mushrooms */}
                <section className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 uppercase tracking-tight border-l-4 border-[#7C3AED] pl-4">
                    Types of Mushrooms You Can Farm: Choosing Your Mushroom Variety
                  </h2>
                  <p className="dark:text-slate-400 text-slate-600 leading-relaxed text-sm md:text-base">
                    One of the biggest decisions in mushroom farming is choosing which mushroom variety to grow. Each mushroom cultivation type has different requirements and profit potential.
                  </p>

                  <div className="space-y-5">
                    {/* Button Mushrooms */}
                    <div className="glass p-6 md:p-8 rounded-3xl border dark:border-white/5 border-black/5 space-y-3">
                      <div className="flex items-center gap-3 dark:text-white text-slate-900 font-bold text-lg md:text-xl">
                        <CheckCircle2 className="text-primary-start shrink-0" size={20} />
                        <h3>
                          <Link
                            href="/services/button-mushroom"
                            className="hover:underline text-slate-900 dark:text-white"
                          >
                            Button Mushrooms (Champignon Mushroom Farming)
                          </Link>
                        </h3>
                      </div>
                      <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                        Button mushroom cultivation is the most common type of mushroom farming in India. They&apos;re called &quot;button mushrooms&quot; because of their appearance, and they&apos;re what you typically find in grocery stores.
                      </p>
                      <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm font-semibold pt-1">
                        Why button mushroom farming is popular:
                      </p>
                      <ul className="text-xs md:text-sm space-y-1.5 text-slate-500 italic pl-2">
                        <li>• Highest market demand</li>
                        <li>• Good shelf life</li>
                        <li>• Easier to transport and sell</li>
                        <li>• Better profit margins in bulk sales</li>
                        <li>• Perfect for commercial mushroom farming</li>
                      </ul>
                      <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed pt-1">
                        Button mushroom farming requires more controlled temperature (around 12-18°C), which means you&apos;ll need investment in climate control systems. However, the return on investment is excellent.
                      </p>
                    </div>

                    {/* Oyster Mushrooms */}
                    <div className="glass p-6 md:p-8 rounded-3xl border dark:border-white/5 border-black/5 space-y-3">
                      <div className="flex items-center gap-3 dark:text-white text-slate-900 font-bold text-lg md:text-xl">
                        <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                        <h3>
                          <Link
                            href="/services/oyster-mushroom"
                            className="hover:underline text-slate-900 dark:text-white"
                          >
                            Oyster Mushroom Farming (Grey, Pink, Yellow)
                          </Link>
                        </h3>
                      </div>
                      <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                        If you&apos;re new to mushroom farming in India, oyster mushroom cultivation might be your best starting point. Why? Because oyster mushroom farming is more forgiving and requires less investment in climate control.
                      </p>
                      <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm font-semibold pt-1">
                        Advantages of oyster mushroom farming:
                      </p>
                      <ul className="text-xs md:text-sm space-y-1.5 text-slate-500 italic pl-2">
                        <li>• Easier to grow for beginners</li>
                        <li>• Lower initial investment</li>
                        <li>• Faster growth cycle (25-30 days)</li>
                        <li>• Can grow at higher temperatures (18-25°C)</li>
                        <li>• Less contamination risk</li>
                        <li>• Perfect for mushroom farming in Madhya Pradesh climate</li>
                      </ul>
                      <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed pt-1">
                        I&apos;ve seen many successful mushroom farmers in Madhya Pradesh start with oyster mushroom farming because it suits the regional climate perfectly.
                      </p>
                    </div>

                    {/* Shiitake Mushrooms */}
                    <div className="glass p-6 md:p-8 rounded-3xl border dark:border-white/5 border-black/5 space-y-3">
                      <div className="flex items-center gap-3 dark:text-white text-slate-900 font-bold text-lg md:text-xl">
                        <CheckCircle2 className="text-[#7C3AED] shrink-0" size={20} />
                        <h3>Shiitake Mushroom Farming</h3>
                      </div>
                      <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                        Shiitake mushroom cultivation is growing rapidly in India because of premium pricing. Shiitake mushrooms command 2-3 times higher prices than button mushrooms in the market.
                      </p>
                      <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm font-semibold pt-1">
                        Shiitake mushroom farming requires:
                      </p>
                      <ul className="text-xs md:text-sm space-y-1.5 text-slate-500 italic pl-2">
                        <li>• Higher investment in humidity control</li>
                        <li>• Longer growth cycle (40-60 days)</li>
                        <li>• More technical knowledge</li>
                        <li>• Better climate control infrastructure</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <hr className="dark:border-white/10 border-black/10" />

                {/* Section 4: Cost and Investment */}
                <section className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-600 dark:border-emerald-500 pl-4 uppercase tracking-tight">
                    Cost and Investment Required for Starting Mushroom Farming in India
                  </h2>
                  <p className="dark:text-slate-400 text-slate-600 font-medium text-sm md:text-base">
                    Let me break down the actual investment required for mushroom farming in India. This varies based on the scale and mushroom variety you choose.
                  </p>

                  <div className="grid md:grid-cols-3 gap-5">
                    {/* Small Scale */}
                    <div className="glass p-6 rounded-3xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">
                          Small-Scale Mushroom Farming (Beginner Level)
                        </h3>
                        <p className="dark:text-slate-400 text-slate-600 text-xs font-semibold">
                          For a 100-200 sq ft space:
                        </p>
                        <ul className="text-xs space-y-2 text-slate-500 list-disc pl-4">
                          <li>Mushroom growing structure setup: ₹15,000-25,000</li>
                          <li>Climate control equipment (fans, coolers, humidifiers): ₹20,000-35,000</li>
                          <li>Sterilization equipment: ₹10,000-15,000</li>
                          <li>Initial mushroom spawn (seed) cost: ₹5,000-10,000</li>
                          <li>Raw materials and supplies: ₹10,000-15,000</li>
                        </ul>
                      </div>
                      <div className="mt-5 pt-3 border-t dark:border-white/10 border-black/10">
                        <p className="text-emerald-500 font-bold text-xs md:text-sm">
                          Total Initial Investment: ₹60,000-1,00,000
                        </p>
                      </div>
                    </div>

                    {/* Medium Scale */}
                    <div className="glass p-6 rounded-3xl border border-emerald-500/30 dark:border-emerald-500/30 flex flex-col justify-between relative">
                      <span className="absolute -top-3 right-4 bg-emerald-500 text-slate-950 font-black text-[9px] uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                        Most Popular
                      </span>
                      <div className="space-y-3">
                        <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">
                          Medium-Scale Mushroom Farming (Semi-Commercial)
                        </h3>
                        <p className="dark:text-slate-400 text-slate-600 text-xs font-semibold">
                          For a 500-1000 sq ft space:
                        </p>
                        <ul className="text-xs space-y-2 text-slate-500 list-disc pl-4">
                          <li>Mushroom farm shed construction: ₹1,50,000-2,50,000</li>
                          <li>Advanced climate control system: ₹80,000-1,50,000</li>
                          <li>Industrial sterilization equipment: ₹40,000-60,000</li>
                          <li>Shelving and growing infrastructure: ₹50,000-80,000</li>
                          <li>Initial spawn and materials: ₹30,000-50,000</li>
                        </ul>
                      </div>
                      <div className="mt-5 pt-3 border-t dark:border-white/10 border-black/10">
                        <p className="text-emerald-500 font-bold text-xs md:text-sm">
                          Total Investment: ₹3,50,000-6,00,000
                        </p>
                      </div>
                    </div>

                    {/* Commercial Scale */}
                    <div className="glass p-6 rounded-3xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">
                          Commercial-Scale Mushroom Farming
                        </h3>
                        <p className="dark:text-slate-400 text-slate-600 text-xs font-semibold">
                          For a 2000+ sq ft space:
                        </p>
                        <ul className="text-xs space-y-2 text-slate-500 list-disc pl-4">
                          <li>Professional farm construction with HEPA filtration: ₹5,00,000-10,00,000+</li>
                          <li>Industrial climate control systems: ₹2,50,000-5,00,000+</li>
                          <li>Advanced sterilization setup: ₹1,50,000-3,00,000</li>
                          <li>Automated systems and infrastructure: ₹2,00,000-4,00,000</li>
                        </ul>
                      </div>
                      <div className="mt-5 pt-3 border-t dark:border-white/10 border-black/10">
                        <p className="text-emerald-500 font-bold text-xs md:text-sm">
                          Total Investment: ₹10,00,000+
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <hr className="dark:border-white/10 border-black/10" />

                {/* Section 5: Step-by-Step Guide */}
                <section className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 uppercase tracking-tight border-l-4 border-[#7C3AED] pl-4">
                    Step-by-Step Guide: How to Start Mushroom Farming in India
                  </h2>

                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex gap-4 md:gap-5 items-start">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 text-[#7C3AED] dark:text-purple-400 font-black text-base md:text-lg">
                        1
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">
                          Learn Mushroom Farming Through Proper Training
                        </h3>
                        <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                          This is the most important step that many beginners skip. Mushroom farming requires specific knowledge about sterilization, contamination control, and climate management.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm font-semibold">
                          Where to get mushroom farming training:
                        </p>
                        <ul className="text-xs md:text-sm space-y-1 text-slate-500 list-disc pl-5">
                          <li>Enroll in mushroom cultivation training courses</li>
                          <li>Join mushroom farming workshops in your region</li>
                          <li>Get hands-on training at established mushroom farms</li>
                          <li>Online mushroom farming courses for theoretical knowledge</li>
                        </ul>
                        <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed pt-1">
                          Proper training will teach you about mushroom spawn preparation, substrate sterilization, humidity and temperature control, contamination prevention, and harvest management. This knowledge directly impacts your success rate.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4 md:gap-5 items-start">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 text-[#7C3AED] dark:text-purple-400 font-black text-base md:text-lg">
                        2
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">
                          Select Your Location and Space
                        </h3>
                        <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                          For mushroom farming in India, location matters less than you&apos;d think because you&apos;re working indoors. However, consider:
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm font-semibold">
                          Best locations for mushroom farming:
                        </p>
                        <ul className="text-xs md:text-sm space-y-1 text-slate-500 list-disc pl-5">
                          <li>Basements (temperature-controlled naturally)</li>
                          <li>Sheds or unused buildings</li>
                          <li>Rented commercial spaces</li>
                          <li>Tunnels or covered structures</li>
                          <li>Even apartments with proper setup</li>
                        </ul>
                        <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed pt-1">
                          The ideal location should have consistent temperature, electricity connection for climate control, water supply for humidity and cleaning, be away from direct sunlight, and have good ventilation system.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4 md:gap-5 items-start">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 text-[#7C3AED] dark:text-purple-400 font-black text-base md:text-lg">
                        3
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">
                          Get Quality Mushroom Spawn (Seed)
                        </h3>
                        <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed">
                          Mushroom spawn is literally the foundation of your mushroom farming business. Using contaminated or poor-quality spawn will ruin your entire crop.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm font-semibold">
                          What to look for in{" "}
                          <Link
                            href="/spawn-seeds"
                            className="text-emerald-600 dark:text-emerald-400 hover:underline"
                          >
                            mushroom spawn
                          </Link>
                          :
                        </p>
                        <ul className="text-xs md:text-sm space-y-1 text-slate-500 list-disc pl-5">
                          <li>Certified, mother-strain spawn</li>
                          <li>Zero contamination guarantee</li>
                          <li>Proper packaging for transport</li>
                          <li>Cold-chain maintained during shipping</li>
                          <li>Source from established mushroom seed suppliers</li>
                        </ul>
                        <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed pt-1">
                          In India, you can get high-quality mushroom spawn from specialized suppliers who maintain laboratory standards for mushroom cultivation.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <hr className="dark:border-white/10 border-black/10" />

                {/* Section 6: Profit Calculation */}
                <section className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-600 dark:border-emerald-500 pl-4 uppercase tracking-tight">
                    Mushroom Farming Profit Calculation: Real Numbers
                  </h2>
                  <p className="dark:text-slate-400 text-slate-600 font-medium text-sm md:text-base">
                    Let me show you actual numbers from mushroom farming in India. Using a small 100 sq ft oyster mushroom farm as example:
                  </p>

                  <div className="dark:bg-white/5 bg-black/5 p-6 md:p-8 rounded-3xl border dark:border-white/10 border-black/10 space-y-5">
                    <div>
                      <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                        Per cycle (35 days):
                      </h3>
                      <ul className="text-xs md:text-sm space-y-1.5 text-slate-500 list-disc pl-5">
                        <li>Raw materials and substrate: ₹2,000-3,000</li>
                        <li>Spawn cost: ₹1,000-1,500</li>
                        <li>Electricity and utilities: ₹500-800</li>
                      </ul>
                      <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm mt-3">
                        <strong>Total operating cost per cycle:</strong> ₹3,500-5,300
                      </p>
                    </div>

                    <div className="pt-3 border-t dark:border-white/10 border-black/10">
                      <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2">
                        Yield per cycle:
                      </h3>
                      <ul className="text-xs md:text-sm space-y-1.5 text-slate-500 list-disc pl-5">
                        <li>100 sq ft can produce 80-120 kg oyster mushrooms</li>
                        <li>Average market price: ₹80-120 per kg</li>
                      </ul>
                    </div>

                    <div className="pt-3 border-t dark:border-white/10 border-black/10 space-y-1.5">
                      <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm">
                        <strong>Gross revenue:</strong> ₹6,400-14,400 per cycle
                      </p>
                      <p className="text-emerald-500 font-bold text-xs md:text-sm">
                        <strong>Net profit per cycle:</strong> ₹1,000-11,100
                      </p>
                      <p className="text-[#7C3AED] dark:text-purple-400 font-bold text-xs md:text-sm">
                        <strong>Annual profit (10 cycles per year):</strong> ₹10,000-1,11,000
                      </p>
                    </div>

                    <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm pt-2 italic">
                      With better management and scaling, many farmers report monthly incomes of ₹40,000-1,50,000 from medium-scale mushroom farming operations.
                    </p>
                  </div>
                </section>

                <hr className="dark:border-white/10 border-black/10" />

                {/* Section 7: FAQs */}
                <section className="space-y-6 dark:bg-white/5 bg-black/5 p-6 md:p-10 rounded-[2.5rem] border dark:border-white/10 border-black/10">
                  <div className="text-center space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-emerald-500 text-xs font-bold uppercase tracking-wider">
                      <HelpCircle size={14} /> Clear Answers
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900">
                      Frequently Asked Questions About Mushroom Farming
                    </h2>
                  </div>

                  <div className="space-y-4 pt-2">
                    {faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] border dark:border-white/5 border-black/5 space-y-1.5"
                      >
                        <h3 className="dark:text-white text-slate-900 font-bold text-xs md:text-sm flex gap-2">
                          <span className="text-[#7C3AED] dark:text-purple-400">Q:</span> {faq.q}
                        </h3>
                        <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm leading-relaxed pl-5">
                          <strong>A:</strong> {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <hr className="dark:border-white/10 border-black/10" />

                {/* Section 8: Conclusion */}
                <section className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-600 dark:border-emerald-500 pl-4">
                    Conclusion: Your Mushroom Farming Journey Starts Now
                  </h2>
                  <p className="dark:text-slate-400 text-slate-600 leading-relaxed text-sm md:text-base">
                    Starting mushroom farming in India is genuinely one of the best decisions you can make if you want to build a profitable agricultural business with minimal land and investment. Whether you&apos;re in Madhya Pradesh, Delhi, Mumbai, or any other part of India, mushroom farming offers consistent, profitable returns.
                  </p>
                  <p className="dark:text-slate-400 text-slate-600 leading-relaxed text-sm md:text-base">
                    The key is to start small, learn properly, and scale gradually. Don&apos;t try to become a commercial operation overnight. Build your experience and confidence with a small 100-200 sq ft setup, perfect your process, establish your market, and then expand. The mushroom farming industry in India is growing exponentially, and there&apos;s definitely room for new farmers. With proper training, the right equipment, quality spawn, and good market connections, you can build a thriving mushroom farming business.
                  </p>
                  <p className="dark:text-slate-300 text-slate-700 font-bold leading-relaxed text-sm md:text-base">
                    Ready to start mushroom farming? Your first step should be getting proper training and creating a detailed plan specific to your situation. Connect with experienced mushroom farmers, learn the techniques, understand the market, and then take the leap. The opportunity is right here, right now. Mushroom farming in India is waiting for you.
                  </p>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-linear-to-tr from-purple-700 to-emerald-600 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-black">
                      Start Your Mushroom Journey Today
                    </h2>
                    <p className="text-white/85 text-xs md:text-base max-w-xl mx-auto leading-relaxed">
                      Get access to the best mushroom spawn, professional training, and setup support with{" "}
                      <strong>Organic Mushrooms Farm</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                      <a
                        href="tel:+919203544140"
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 hover:scale-[1.02] transition-all shadow-lg"
                      >
                        <Phone size={16} /> Call Now: +91 9203544140
                      </a>
                      <Link
                        href="/contact"
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 border border-white/40 hover:bg-white/10 hover:scale-[1.02] transition-all text-white"
                      >
                        Contact Us <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </section>

              </div>
            </article>
          </main>

          {/* Tags / Footer Meta */}
          <footer className="max-w-5xl mx-auto px-4 mt-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-3 py-1 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
