import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Star,
  Quote,
  Award,
  TrendingUp,
  UserCheck,
  ArrowRight,
  MapPin,
  Sparkles,
  PhoneCall,
  ShieldCheck
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Success Stories | Mushroom Farming Training & Commercial Setup Results",
  description:
    "Read how our students and clients across India have built profitable mushroom farming businesses. From small balconies to 5-ton industrial units.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/success-stories",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Success Stories | Mushroom Farming Training & Commercial Setup Results",
    description:
      "Read how our students and clients across India have built profitable mushroom farming businesses. From small balconies to 5-ton industrial units.",
    url: "https://organicmushroomsfarm.com/success-stories",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Success Stories | Mushroom Farming Training & Commercial Setup Results",
    description:
      "Read how our students and clients across India have built profitable mushroom farming businesses. From small balconies to 5-ton industrial units.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://organicmushroomsfarm.com/#organization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
      logo: "https://organicmushroomsfarm.com/icon.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9203544140",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
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
      "@id": "https://organicmushroomsfarm.com/success-stories#webpage",
      url: "https://organicmushroomsfarm.com/success-stories",
      name: "Success Stories | Mushroom Farming Training & Commercial Setup Results",
      description:
        "Read how our students and clients across India have built profitable mushroom farming businesses. From small balconies to 5-ton industrial units.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/success-stories#breadcrumb",
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
          name: "Success Stories",
          item: "https://organicmushroomsfarm.com/success-stories",
        },
      ],
    },
  ],
};

interface StoryItem {
  id: string;
  name: string;
  location: string;
  tagline: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image: string;
  achievement: string;
  specsUrl: string;
  story: string;
  internalLinkPrompt: React.ReactNode;
}

export default function SuccessStoriesPage() {
  const stories: StoryItem[] = [
    {
      id: "rajesh-kumar",
      name: "Rajesh Kumar",
      location: "Jabalpur, Madhya Pradesh",
      tagline: "The Local Farmer Pivot",
      icon: UserCheck,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
      achievement: "2x Increase in Seasonal Income",
      specsUrl: "/success-story/rajesh-kumar",
      story:
        "A traditional wheat farmer from Madhya Pradesh who pivoted to Milky mushrooms during the harsh summer months. After attending our 15-day intensive training, Rajesh setup a small 500 bag unit that doubled his seasonal income in just one cycle.",
      internalLinkPrompt: (
        <>
          Rajesh mastered bag pasteurization through our{" "}
          <Link
            href="/training"
            className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
          >
            hands-on mushroom training course
          </Link>{" "}
          and relied on lab-certified{" "}
          <Link
            href="/spawn-seed"
            className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
          >
            first-generation mushroom spawn
          </Link>{" "}
          for zero contamination.
        </>
      ),
    },
    {
      id: "sneha-sharma",
      name: "Sneha Sharma",
      location: "Delhi NCR",
      tagline: "The Student Agripreneur",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      achievement: "Founded 'BrainFungi' D2C Brand",
      specsUrl: "/success-story/sneha-sharma",
      story:
        "A college student who utilized her apartment's balcony and vertical space to grow high-value medicinal mushrooms like Lion's Mane. She now runs a successful D2C supplement brand while continuing her studies.",
      internalLinkPrompt: (
        <>
          Sneha applied micro-climate temperature and humidity controls learned in our{" "}
          <Link
            href="/sops"
            className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
          >
            fruiting SOP guidelines
          </Link>{" "}
          and launched value-added extracts as outlined in our{" "}
          <Link
            href="/articles/medicinal-mushrooms-income-guide-usa"
            className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
          >
            medicinal mushroom business guide
          </Link>
          .
        </>
      ),
    },
    {
      id: "amit-singhal",
      name: "Amit Singhal",
      location: "Indore, Madhya Pradesh",
      tagline: "The B2B Industrialist",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      achievement: "5-Ton Industrial Unit Setup",
      specsUrl: "/success-story/amit-singhal",
      story:
        "An ex-corporate professional who setup a fully climate-controlled 5-ton capacity Button mushroom unit. After our technical consultancy and market linkage support, he now supplies premium produce to top-tier hotel chains across North India.",
      internalLinkPrompt: (
        <>
          Amit chose our turnkey engineering package detailed in{" "}
          <Link
            href="/model-details"
            className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
          >
            commercial farm setup models
          </Link>{" "}
          and validated his investment using our{" "}
          <Link
            href="/book-consultant"
            className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
          >
            on-site commercial consultation
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 relative z-20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Subtle ambient light gradient glows (Transparent, no opaque blocks) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[12%] left-[8%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[15%] right-[8%] w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      <header className="max-w-4xl mx-auto px-4 relative z-10 text-center mb-8">
        <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-emerald-500/20 mb-4">
          <Sparkles size={12} /> Client Testimonials & Case Studies
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
          Our <span className="text-emerald-600 dark:text-emerald-400">Success Stories</span>
        </h1>

        <p className="dark:text-slate-300 text-slate-700 text-[11px] md:text-[12px] font-medium max-w-2xl mx-auto leading-relaxed">
          Real growers, real commercial results. See how we help agripreneurs, rural farmers, and urban entrepreneurs build sustainable wealth through scientific mushroom cultivation across India and internationally.
        </p>
      </header>

      {/* Stories list */}
      <section aria-label="Client Case Studies" className="max-w-5xl mx-auto px-4 relative z-10 space-y-6">
        {stories.map((s, i) => (
          <article
            key={i}
            className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-5 md:p-7 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-sm space-y-4 hover:border-emerald-500/30 transition-colors"
          >
            {/* Top row: Tagline, Name, Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/5 dark:border-white/5 pb-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
                  <s.icon size={12} /> {s.tagline}
                </div>
                <h2 className="text-base md:text-lg font-black text-slate-900 dark:text-white">
                  {s.name}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5 text-[10px] tracking-wide">
                  <MapPin size={11} className="text-emerald-500" /> {s.location}
                </p>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={12} fill="currentColor" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  <ShieldCheck size={11} /> Verified Grower
                </span>
              </div>
            </div>

            {/* Middle: Photo + Story & Quote */}
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-xs">
                <Image
                  src={s.image}
                  alt={`${s.name} - Successful Mushroom Grower in ${s.location}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="space-y-2 flex-1">
                <div className="relative pl-3 border-l-2 border-emerald-500/40">
                  <Quote size={14} className="text-emerald-500 mb-1 opacity-70" />
                  <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed italic">
                    "{s.story}"
                  </p>
                </div>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-normal">
                  {s.internalLinkPrompt}
                </p>
              </div>
            </div>

            {/* Bottom Row: Key Achievement & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2 text-[11px]">
                <span className="font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[9px]">
                  Key Achievement:
                </span>
                <span className="font-black text-emerald-600 dark:text-emerald-400 text-[11px]">
                  {s.achievement}
                </span>
              </div>

              <Link
                href={s.specsUrl}
                className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-800 dark:text-slate-200 bg-black/5 dark:bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-1.5 rounded-xl transition-all"
              >
                View Project Specs <ArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Call to action section */}
      <section className="max-w-4xl mx-auto px-4 mt-10 text-center relative z-10">
        <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-sm space-y-3">
          <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white">
            Want to Be Our Next Commercial Success Story?
          </h2>
          <p className="dark:text-slate-300 text-slate-700 text-[11px] max-w-xl mx-auto leading-relaxed">
            Whether starting with a 200-bag trial batch or launching a multi-ton climate-controlled facility, our dedicated agronomy team helps you build with zero contamination risk.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/book-consultant"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-extrabold px-5 py-2.5 rounded-xl shadow-sm hover:scale-[1.02] transition-transform"
            >
              <PhoneCall size={13} /> Book 1-on-1 Consultation
            </Link>
            <Link
              href="/training"
              className="inline-flex items-center gap-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 text-[11px] font-bold px-5 py-2.5 rounded-xl transition-colors"
            >
              Explore Training Programs <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
