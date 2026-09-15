import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Sprout, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Oyster Mushroom Farming & Cultivation | Organic Mushroom Farm",
  description:
    "Learn about oyster mushroom farming, cultivation, growing methods, substrates, harvesting, yield and why oyster mushrooms are a popular choice for beginners and commercial growers.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/services/oyster-mushroom",
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
    title: "Oyster Mushroom Farming & Cultivation | Organic Mushroom Farm",
    description:
      "Explore oyster mushroom cultivation, farming methods, substrates, harvesting, yield and practical growing information.",
    url: "https://organicmushroomsfarm.com/services/oyster-mushroom",
    siteName: "Organic Mushroom Farm",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
        alt: "Mushroom cultivation and commercial mushroom farming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oyster Mushroom Farming & Cultivation | Organic Mushroom Farm",
    description:
      "Learn about oyster mushroom cultivation, farming, substrates, harvesting and growing methods.",
  },
};

const oysterMushroomJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://organicmushroomsfarm.com/services/oyster-mushroom#article",
      "headline": "Why Oyster Mushrooms Are Taking the Culinary & Farming World by Storm",
      "description": "Learn about oyster mushroom cultivation, farming, growing methods, substrates, harvesting, yield and why oyster mushrooms are popular with beginners and commercial growers.",
      "url": "https://organicmushroomsfarm.com/services/oyster-mushroom",
      "mainEntityOfPage": {
        "@id": "https://organicmushroomsfarm.com/services/oyster-mushroom#webpage"
      },
      "articleSection": "Oyster Mushroom",
      "keywords": [
        "oyster mushroom",
        "oyster mushroom farming",
        "oyster mushroom cultivation",
        "oyster mushroom growing",
        "oyster mushroom substrate",
        "oyster mushroom harvesting",
        "commercial oyster mushroom farming"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://organicmushroomsfarm.com/services/oyster-mushroom#webpage",
      "url": "https://organicmushroomsfarm.com/services/oyster-mushroom",
      "name": "Oyster Mushroom Farming & Cultivation",
      "description": "Learn about oyster mushroom farming, cultivation, substrates, growing methods, harvesting and yield.",
      "isPartOf": {
        "@id": "https://organicmushroomsfarm.com/#website"
      },
      "breadcrumb": {
        "@id": "https://organicmushroomsfarm.com/services/oyster-mushroom#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp#image"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/services/oyster-mushroom#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://organicmushroomsfarm.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://organicmushroomsfarm.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Oyster Mushroom",
          "item": "https://organicmushroomsfarm.com/services/oyster-mushroom"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://organicmushroomsfarm.com/services/oyster-mushroom#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are oyster mushrooms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oyster mushrooms are edible fungi known for their fan-shaped caps and delicate texture. They are widely used in cooking and can be cultivated on suitable organic substrates."
          }
        },
        {
          "@type": "Question",
          "name": "Is oyster mushroom farming suitable for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oyster mushrooms can be a suitable option for beginners because they can grow on several suitable substrates and have a relatively short production cycle when proper cultivation conditions are maintained."
          }
        },
        {
          "@type": "Question",
          "name": "What substrate is used for oyster mushroom cultivation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common substrates include properly prepared straw and suitable sawdust-based materials. The substrate must be prepared appropriately to reduce contamination and support healthy mushroom growth."
          }
        },
        {
          "@type": "Question",
          "name": "How long does oyster mushroom cultivation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cultivation timeline varies according to the oyster mushroom species, spawn, substrate and environmental conditions. Under suitable conditions, growers can often harvest within a few weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Can oyster mushrooms be grown commercially?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Oyster mushrooms can be cultivated on both small and commercial scales. Commercial viability depends on production efficiency, yield, input costs, market demand and selling price."
          }
        }
      ]
    },
    {
      "@type": "ImageObject",
      "@id": "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp#image",
      "contentUrl": "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
      "url": "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp",
      "name": "Oyster Mushroom Cultivation",
      "description": "Oyster mushroom cultivation and farming area.",
      "representativeOfPage": true
    }
  ]
};

export default function ArticleOysterMushroom() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-12 relative z-20">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(oysterMushroomJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
            <li>
              <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li>
              <Link href="/services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200">Oyster Mushroom</li>
          </ol>
        </nav>

        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest mb-3">
            <Sprout size={16} />
            <span>Mushroom Services</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black dark:text-white text-slate-900 mb-4 leading-tight tracking-tight">Oyster Mushroom Farming &amp; Cultivation</h1>
        </div>

        <div className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            Have you ever wondered why oyster mushrooms are suddenly everywhere? From high-end restaurant menus to local farmers' markets, these beautiful, fan-shaped fungi are having a major moment. And honestly? They completely deserve the hype.
          </p>
          <p>
            Whether you are a food lover looking to upgrade your meals or an aspiring grower stepping into organic mushroom farming, oyster mushrooms are the perfect starting point.
          </p>
          <p>
            Here is why everyone is falling in love with them—and why you should too!
          </p>

          
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
            alt="Oyster mushroom farming and cultivation"
            width={1200}
            height={800}
            priority
            referrerPolicy="no-referrer"
            className="rounded-2xl shadow-lg my-6 w-full object-cover"
          />

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            Why Oyster Mushrooms Are Popular
          </h2>
          <p>
            Oyster mushrooms are celebrated for their incredible versatility, rapid growth cycle, and resilience against competing fungi, making them ideal for both small-scale and commercial production.
          </p>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            Oyster Mushroom Nutrition and Culinary Uses
          </h2>
          <p>
            Don't let their delicate appearance fool you. Oyster mushrooms are packed with serious health benefits. They are naturally low in calories but loaded with protein, fiber, antioxidants, and essential B vitamins. For vegans and vegetarians, their meaty texture makes them an incredible, natural meat substitute that absorbs flavors and spices beautifully.
          </p>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            Why Oyster Mushrooms Are Easy to Cultivate
          </h2>
          <p>
            If you have ever thought about mushroom cultivation, oyster mushrooms are your best friend. Why? Because they are famously forgiving and fast-growing.
          </p>
          
          <ul className="space-y-4 my-6">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <h3 className="dark:text-white text-slate-900 font-bold mb-1">Easy to Cultivate</h3>
                <p>Oyster mushrooms can grow well on suitable organic substrates such as pasteurized straw and certain sawdust-based substrates when appropriate moisture, temperature, hygiene and growing conditions are maintained.</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <h3 className="dark:text-white text-slate-900 font-bold mb-1">Quick Harvest</h3>
                <p>Unlike other crops that take months, you can often see your first harvest of fresh oyster mushrooms in just a few weeks.</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <h3 className="dark:text-white text-slate-900 font-bold mb-1">High Yield</h3>
                <p>Oyster mushrooms can be a practical option for small-scale and commercial growers because of their relatively fast production cycle and suitability for several cultivation systems. Actual profitability depends on yield, input costs, market prices and farm management.</p>
              </div>
            </li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            Experience the Organic Difference
          </h2>
          <p>
            Not all mushrooms are created equal. To get the best flavor, highest nutritional value, and safest crop, starting with high-quality, chemical-free methods is crucial.
          </p>
          <p>
            Whether you are looking for premium organic oyster mushrooms for your kitchen, or need expert guidance, training, and supplies to start your own successful grow room, we have you covered.
          </p>

          <div className="space-y-4 my-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p>
              Learn more about our{" "}
              <Link href="/training" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming training
              </Link>{" "}
              programs.
            </p>
            <p>
              For commercial farm planning, explore our{" "}
              <Link href="/mushroomfarmingcalculators" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming calculators
              </Link>
              .
            </p>
            <p>
              Interested in starting a commercial mushroom project?{" "}
              <Link href="/enquiry" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                Send us an enquiry
              </Link>
              .
            </p>
            <p>
              You can also explore our{" "}
              <Link href="/gallery" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming gallery
              </Link>{" "}
              to see cultivation and farm infrastructure.
            </p>
          </div>

          
          <section aria-labelledby="oyster-faq" className="mt-12 mb-8">
            <h2 id="oyster-faq" className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-6">
              Oyster Mushroom Farming – Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">What are oyster mushrooms?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Oyster mushrooms are edible fungi known for their fan-shaped caps and delicate texture. They are widely used in cooking and can be cultivated on suitable organic substrates.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Is oyster mushroom farming suitable for beginners?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Oyster mushrooms can be a suitable option for beginners because they can grow on several suitable substrates and have a relatively short production cycle when proper cultivation conditions are maintained.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">What substrate is used for oyster mushroom cultivation?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Common substrates include properly prepared straw and suitable sawdust-based materials. The substrate must be prepared appropriately to reduce contamination and support healthy mushroom growth.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">How long does oyster mushroom cultivation take?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  The cultivation timeline varies according to the oyster mushroom species, spawn, substrate and environmental conditions. Under suitable conditions, growers can often harvest within a few weeks.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Can oyster mushrooms be grown commercially?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Yes. Oyster mushrooms can be cultivated on both small and commercial scales. Commercial viability depends on production efficiency, yield, input costs, market demand and selling price.
                </p>
              </div>
            </div>
          </section>

          <div className="dark:bg-purple-900/10 bg-purple-50 p-6 rounded-2xl md:rounded-3xl border border-purple-500/20 text-center mt-8 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">Ready to explore the world of Oysters?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm mb-5 max-w-2xl mx-auto">
              Discover top-tier cultivation resources and fresh produce at <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm - Oyster Mushroom Services</strong> today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 text-sm">
                <Phone size={16} /> WhatsApp Us
              </a>
              <Link href="/contact" className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 text-sm">
                <Mail size={16} /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
