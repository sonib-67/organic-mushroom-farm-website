import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Sparkles,
  Target,
  Eye,
  Sprout,
  Play,
  Users,
  Home,
  Award,
  BookOpen,
  Zap,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Organic Mushrooms Farm | India's Mushroom Training Experts",
  description:
    "Learn about Organic Mushrooms Farm, India's leading mushroom ecosystem architect. We provide quality spawn, expert training, and turnkey farming solutions India-wide and globally.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "About Organic Mushrooms Farm | India's Mushroom Training Experts",
    description:
      "Learn about Organic Mushrooms Farm, India's leading mushroom ecosystem architect. We provide quality spawn, expert training, and turnkey farming solutions India-wide and globally.",
    url: "https://organicmushroomsfarm.com/about",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
        width: 1200,
        height: 630,
        alt: "About Organic Mushroom Farm Setup and Commercial Training Experts",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_800,h_800,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
        width: 800,
        height: 800,
        alt: "Organic Mushroom Farm - WhatsApp Square Share Preview",
      },
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_675,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
        width: 1200,
        height: 675,
        alt: "Organic Mushroom Farm Global Setup Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Organic Mushrooms Farm | India's Mushroom Training Experts",
    description:
      "Learn about Organic Mushrooms Farm, India's leading mushroom ecosystem architect. We provide quality spawn, expert training, and turnkey farming solutions India-wide and globally.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_800,h_800,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_675,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
    ],
  },
};

export default function AboutPage() {
  const pageUrl = "https://organicmushroomsfarm.com/about";

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
          availableLanguage: ["en", "hi"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Katangi Road",
          addressLocality: "Jabalpur",
          addressRegion: "Madhya Pradesh",
          postalCode: "483105",
          addressCountry: "IN",
        },
        sameAs: [
          "https://wa.me/919203544140",
        ],
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
        name: "About Organic Mushrooms Farm | India's Mushroom Training Experts",
        description:
          "Learn about Organic Mushrooms Farm, India's leading mushroom ecosystem architect. We provide quality spawn, expert training, and turnkey farming solutions India-wide and globally.",
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
            name: "About Us",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const whatWeDo = [
    {
      title: "Commercial Mushroom Production",
      desc: "We produce premium quality button and oyster mushrooms using scientific organic methods in our state-of-the-art facility.",
      icon: Sprout,
      link: "/services/button-mushroom",
      linkText: "Explore Production",
    },
    {
      title: "Online Mushroom Training",
      desc: "Comprehensive digital modules for beginners. Start your commercial journey for just ₹399 with lifetime access.",
      icon: Play,
      price: "₹399",
      link: "/training/online",
      linkText: "Join Online Batch",
    },
    {
      title: "Offline Practical Training",
      desc: "Hands-on practical sessions in our Jabalpur farm. Intensive commercial workshop at ₹3000 per person.",
      icon: Users,
      price: "₹3000",
      link: "/training/offline",
      linkText: "Book Farm Seat",
    },
    {
      title: "Commercial Farm Setup",
      desc: "Complete turnkey solutions from shed insulation to climate control and global marketing support.",
      icon: Home,
      link: "/services/turnkey-setup",
      linkText: "View Turnkey Specs",
    },
  ];

  const advantages = [
    {
      title: "Expert Guidance",
      desc: "Scientific methods and professional mentorship for high commercial yield.",
      icon: Award,
    },
    {
      title: "Beginner Friendly",
      desc: "No background required. We train you from scratch for commercial success.",
      icon: BookOpen,
    },
    {
      title: "Affordable Pricing",
      desc: "Best-in-class commercial training and setup at competitive rates globally.",
      icon: Zap,
    },
    {
      title: "Lifetime Support",
      desc: "Continuous technical guidance even after commercial farm setup.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main
      id="about-us-page"
      className="min-h-screen bg-transparent pt-20 sm:pt-24 pb-12 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation - Compact & Clean */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-2">
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            About Us
          </li>
        </ol>
      </nav>

      {/* Main Content Flow - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        {/* Page Hero Section */}
        <header className="text-center pt-2 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Our Commercial Journey</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            About Organic Mushrooms Farm |{" "}
            <span className="gradient-text">Global Setup Experts</span>
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Empowering modern India and global markets through sustainable,
            high-yield organic mushroom cultivation.
          </p>
        </header>

        {/* Section 1: Who We Are (Our Mission & Vision) */}
        <section aria-labelledby="mission-vision-heading" className="space-y-3">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-1.5">
              Who We Are
            </div>
            <h2
              id="mission-vision-heading"
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Our Mission &amp;{" "}
              <span className="gradient-text">Vision for Organic Agriculture</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Mission Item */}
            <div className="rounded-2xl p-3.5 sm:p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-xs sm:text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                Our startup is dedicated to helping people start{" "}
                <Link
                  href="/services/turnkey-setup"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  commercial mushroom farming businesses
                </Link>{" "}
                with minimal risk and maximum precision. We bridge the gap
                between theoretical knowledge and commercial success in{" "}
                <Link
                  href="/services/button-mushroom"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  button mushroom
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/oyster-mushroom"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  oyster mushroom
                </Link>{" "}
                production.
              </p>
            </div>

            {/* Vision Item */}
            <div className="rounded-2xl p-3.5 sm:p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-xs sm:text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                  We aim to lead the revolution in promoting organic agriculture and
                  self-employment across{" "}
                  <Link
                    href="/cities/madhya-pradesh/jabalpur"
                    className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                  >
                    Madhya Pradesh
                  </Link>
                  , India, and internationally. Our vision is to make every farmer a
                  successful global agri-entrepreneur through sustainable practices.
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-200/50 dark:border-white/5">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat directly with founder on WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What We Do (Core Operations & Consultancy) */}
        <section aria-labelledby="what-we-do-heading" className="space-y-3">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 mb-1.5">
              What We Do
            </div>
            <h2
              id="what-we-do-heading"
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Core{" "}
              <span className="gradient-text">
                Mushroom Operations &amp; Consultancy
              </span>
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 mt-1">
              Providing end-to-end support for commercial{" "}
              <strong className="text-slate-800 dark:text-slate-200 font-semibold">
                button mushroom farming in India and globally
              </strong>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {whatWeDo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-3.5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2.5 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between">
                    {item.price ? (
                      <span className="text-xs font-black gradient-text">
                        {item.price}
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                        Commercial SOP
                      </span>
                    )}
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 dark:text-purple-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: The Commercial Advantage */}
        <section aria-labelledby="commercial-advantage-heading" className="space-y-3">
          <div className="text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 mb-1.5">
              The Commercial Advantage
            </div>
            <h2
              id="commercial-advantage-heading"
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              Why Choose{" "}
              <span className="gradient-text">Us for Turnkey Projects?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-3 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-1.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                    {adv.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Regional & SEO Authority Hub (In-Text Natural Internal Links) */}
        <section
          aria-labelledby="regional-authority-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <h3
            id="regional-authority-heading"
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight"
          >
            Pioneering Commercial{" "}
            <span className="gradient-text">Organic Mushrooms Farm Katangi</span> &amp;{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Jabalpur
            </Link>
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
            Our commercial <strong>organic mushrooms farm in Katangi</strong> road,
            Jabalpur, serves as a model for aspiring farmers across the region and globe.
            We are proud to provide the most reliable{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              mushroom training in Madhya Pradesh
            </Link>
            , focusing on the specific environmental needs of Central India and
            international exports. From climate-controlled grow rooms and{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              commercial turnkey setup
            </Link>{" "}
            to industrial compost preparation and lab-certified{" "}
            <Link
              href="/spawn-seeds"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              pure mushroom spawn
            </Link>
            , our{" "}
            <Link
              href="/cities/madhya-pradesh/jabalpur"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              mushroom farming in Jabalpur
            </Link>{" "}
            solutions ensure that you enter the global market with a competitive edge.
            Join us to build a sustainable commercial future with professional{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              button mushroom farming in India
            </Link>
            .
          </p>
        </section>

        {/* Section 5: Direct Fast Action & Contact Advisory (Transparent, No Black Box) */}
        <section
          aria-labelledby="consultation-advisory-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3
              id="consultation-advisory-heading"
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
            >
              Ready to Discuss Your Commercial Mushroom Farm Project?
            </h3>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300">
              Get direct assistance with project feasibility, compost units, and training enrollment.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-500" /> Katangi Road, Jabalpur (M.P.)
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-500" /> +91 9203544140
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20commercial%20mushroom%20farming.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Advisory</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Page</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
