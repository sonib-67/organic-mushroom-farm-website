"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MessageCircle, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const images = [
  {
    src: "/images/rakeshsoniorganicmushroomfarmexperttraininer.webp",
    category: "Expert Training",
    alt: "Rakesh Soni Expert Mushroom Farming Trainer",
  },
  {
    src: "/images/mushroom360viewimage.jpeg",
    category: "Farm View",
    alt: "Commercial Mushroom Farm 360 Degree View",
  },
  {
    src: "/images/buttonmushroomspawn.webp",
    category: "Premium Spawn",
    alt: "High Quality Button Mushroom Spawn Seeds",
  },
  {
    src: "/images/buttonmushroomroommaking.webp",
    category: "Farm Construction",
    alt: "Button Mushroom Growing Room Construction Process",
  },
  {
    src: "/images/butoonmushroomvsoystermushroom.webp",
    category: "Mushroom Guide",
    alt: "Detailed Comparison Between Button Mushroom and Oyster Mushroom",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png",
    category: "Commercial Infrastructure",
    alt: "Commercial Infrastructure Setup Mushroom Farm",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg",
    category: "All Types Mushroom",
    alt: "All Types High Yield Mushroom Farm",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
    category: "Mushroom Harvesting",
    alt: "Mushroom Harvesting Process Commercial",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378147/img_5794_tjestw.png",
    category: "Enoki Setup",
    alt: "Indoor Mushroom Farming Enoki Setup",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378183/Screenshot_2026-01-17_141353_v8rgpt.png",
    category: "Organic Spawn",
    alt: "Organic Quality Spawn Seed Supply",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png",
    category: "Commercial Training",
    alt: "Mushroom Farming Training Students Offline",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
    category: "Harvest Process",
    alt: "Mushroom Harvest India",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378144/img_9856_er5mbe.png",
    category: "Turnkey Infrastructure",
    alt: "Turnkey Project Mushroom Facility India",
  },
  {
    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378148/img_6985_inr8qh.png",
    category: "Industrial Compost",
    alt: "Industrial Mushroom Compost Production",
  },
];

const SITE_URL = "https://organicmushroomsfarm.com";

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://organicmushroomsfarm.com/gallery#webpage",
      url: "https://organicmushroomsfarm.com/gallery",
      name: "Mushroom Farming Gallery",
      description:
        "Explore commercial mushroom farming images, mushroom cultivation, growing rooms, farm infrastructure, harvesting and mushroom farming training.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
      breadcrumb: {
        "@id": "https://organicmushroomsfarm.com/gallery#breadcrumb",
      },
      primaryImageOfPage: {
        "@id":
          "https://organicmushroomsfarm.com/images/mushroom360viewimage.jpeg#image",
      },
      image: [
        {
          "@id":
            "https://organicmushroomsfarm.com/images/mushroom360viewimage.jpeg#image",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/gallery#breadcrumb",
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
          name: "Gallery",
          item: "https://organicmushroomsfarm.com/gallery",
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://organicmushroomsfarm.com/images/mushroom360viewimage.jpeg#image",
      contentUrl:
        "https://organicmushroomsfarm.com/images/mushroom360viewimage.jpeg",
      url:
        "https://organicmushroomsfarm.com/images/mushroom360viewimage.jpeg",
      name: "Commercial Mushroom Growing Room",
      caption:
        "Commercial mushroom growing room with cultivation racks for indoor mushroom cultivation.",
      description:
        "Commercial mushroom farming facility showing an indoor mushroom growing room and cultivation racks.",
      representativeOfPage: true,
    },
  ],
};

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-16 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryJsonLd),
        }}
      />

      {/* Page Hero */}
      <section className="relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border dark:border-emerald-500/30 border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              Commercial Ecosystem Tour
            </div>
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight">
              Visualizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Success</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A glimpse into our commercial farms, expert training sessions, and high-quality organic produce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative aspect-video rounded-2xl overflow-hidden glass border dark:border-white/10 border-black/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  title={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Semantic Sections */}
      <section className="py-12 dark:bg-black/20 bg-slate-100/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {/* Mushroom cultivation */}
            <div aria-labelledby="cultivation-images" className="mb-10">
              <h2 id="cultivation-images" className="text-2xl font-bold mb-4">Mushroom Cultivation</h2>
              <p className="text-sm leading-relaxed">
                Mushroom cultivation requires suitable growing conditions,
                correctly prepared cultivation material, appropriate
                environmental control and careful crop management. Our gallery
                shows different aspects of commercial mushroom production and
                farm operations.
              </p>
            </div>

            {/* Farm infrastructure */}
            <div aria-labelledby="farm-infrastructure" className="mb-10">
              <h2 id="farm-infrastructure" className="text-2xl font-bold mb-4">Mushroom Farm Infrastructure</h2>
              <p className="text-sm leading-relaxed">
                Commercial mushroom farms can include controlled growing rooms,
                cultivation racks, ventilation systems, climate management,
                harvesting areas and other production infrastructure.
              </p>
            </div>

            {/* Training */}
            <div aria-labelledby="training-images" className="mb-10">
              <h2 id="training-images" className="text-2xl font-bold mb-4">Mushroom Farming Training</h2>
              <p className="text-sm leading-relaxed mb-4">
                Our mushroom farming training covers practical cultivation,
                commercial farm planning, production systems and important
                operational practices for people interested in starting or
                expanding a mushroom farming project.
              </p>
              <Link href="/training" className="text-emerald-500 hover:text-emerald-400 font-bold text-sm underline decoration-emerald-500/30 underline-offset-4">
                Explore Mushroom Farming Training
              </Link>
            </div>

            {/* Harvesting */}
            <div aria-labelledby="harvesting-images" className="mb-10">
              <h2 id="harvesting-images" className="text-2xl font-bold mb-4">Mushroom Harvesting</h2>
              <p className="text-sm leading-relaxed">
                Harvesting is an important stage of mushroom production.
                Commercial harvesting involves selecting mushrooms at the
                appropriate stage and handling the crop carefully for further
                packing, storage or distribution.
              </p>
            </div>

            {/* Turnkey projects */}
            <div aria-labelledby="turnkey-projects" className="mb-10">
              <h2 id="turnkey-projects" className="text-2xl font-bold mb-4">Commercial Mushroom Farm Projects</h2>
              <p className="text-sm leading-relaxed mb-4">
                Explore our commercial mushroom farm project services for
                planning, infrastructure, cultivation systems and turnkey farm
                development.
              </p>
              <Link href="/turnkey-projects" className="text-emerald-500 hover:text-emerald-400 font-bold text-sm underline decoration-emerald-500/30 underline-offset-4">
                Explore Turnkey Mushroom Farm Projects
              </Link>
            </div>
            
            {/* Enquiry */}
            <div aria-labelledby="start-project" className="mb-4">
              <h2 id="start-project" className="text-2xl font-bold mb-4">
                Start Your Commercial Mushroom Farming Project
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                If you are planning a mushroom farm or looking for commercial
                mushroom cultivation guidance, you can contact our team for
                project and training information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Compact CTA Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass rounded-3xl border dark:border-white/10 border-black/10 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side: Information */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r dark:border-white/10 border-black/10">
                <h3 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-3 tracking-tight">
                  Start Your Commercial Mushroom Project Today
                </h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm mb-5 leading-relaxed">
                  Connect directly with India's most trusted commercial mushroom agriculture consultants. Submit your details to get a customized site feasibility evaluation & project setup design model layout matching your resource availability.
                </p>
                
                <ul className="space-y-2 mb-6">
                  {[
                    "Free pre-feasibility site evaluation guidance",
                    "Direct commercial G1 spawn delivery options",
                    "Subsidy assistance (NHB, NABARD & State-wise)",
                    "Complete HVAC, compost unit & lab setups"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs dark:text-slate-300 text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919203544140"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
                  >
                    <MessageCircle size={14} />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+919203544140"
                    className="flex items-center gap-2 dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 dark:text-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold transition-colors border dark:border-white/10 border-black/10"
                  >
                    <Phone size={14} />
                    Call +91 9203544140
                  </a>
                </div>
              </div>

              {/* Right Side: Inquiry Box */}
              <div className="p-6 md:p-8 flex flex-col justify-center dark:bg-white/[0.02] bg-black/[0.02]">
                <h4 className="text-lg font-bold dark:text-white text-slate-900 mb-2">
                  Send Instant Inquiry
                </h4>
                <p className="dark:text-slate-400 text-slate-600 text-xs mb-6 leading-relaxed">
                  Have questions about Mushroom Farming, Spawn, or Turnkey Projects? Submit your detailed requirements via our dedicated enquiry form and our experts will get back to you!
                </p>
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-emerald-500/25 w-full sm:w-max"
                >
                  Enquiry Now
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
