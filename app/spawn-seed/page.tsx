import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Sprout, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Mushroom Spawn & Seeds | Quality Spawn for Mushroom Farming",
  description:
    "Learn about mushroom spawn, mushroom seed, quality spawn selection, mycelium, colonization, contamination and how the right spawn can support successful mushroom cultivation.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/spawn-seed",
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
    title: "Mushroom Spawn & Seeds | Organic Mushroom Farm",
    description:
      "Learn about mushroom spawn, mycelium, quality spawn selection, colonization and successful mushroom cultivation.",
    url: "https://organicmushroomsfarm.com/spawn-seed",
    siteName: "Organic Mushroom Farm",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
        alt: "Mushroom cultivation and commercial mushroom farming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushroom Spawn & Seeds | Organic Mushroom Farm",
    description:
      "Learn about mushroom spawn, mycelium, quality spawn selection and mushroom cultivation.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
    ],
  },
};

const spawnSeedJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://organicmushroomsfarm.com/spawn-seed#article",
      "headline":
        "The Secret to Bountiful Organic Mushrooms: It All Starts with the Right Spawn",
      "description":
        "Learn about mushroom spawn, mushroom seed, mycelium, quality spawn selection, colonization, contamination and successful mushroom cultivation.",
      "url": "https://organicmushroomsfarm.com/spawn-seed",
      "image": {
        "@id":
          "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp#image"
      },
      "mainEntityOfPage": {
        "@id": "https://organicmushroomsfarm.com/spawn-seed#webpage"
      },
      "articleSection": "Mushroom Spawn & Seeds",
      "keywords": [
        "mushroom spawn",
        "mushroom seed",
        "quality mushroom spawn",
        "mushroom cultivation",
        "mushroom farming",
        "mushroom mycelium",
        "mushroom spawn selection",
        "mushroom substrate",
        "mushroom colonization"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://organicmushroomsfarm.com/spawn-seed#webpage",
      "url": "https://organicmushroomsfarm.com/spawn-seed",
      "name": "Mushroom Spawn & Seeds",
      "description":
        "Learn about mushroom spawn, mycelium, quality spawn selection, colonization and successful mushroom cultivation.",
      "isPartOf": {
        "@id": "https://organicmushroomsfarm.com/#website"
      },
      "breadcrumb": {
        "@id": "https://organicmushroomsfarm.com/spawn-seed#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id":
          "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp#image"
      }
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp#image",
      "contentUrl":
        "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
      "url":
        "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp",
      "name": "Button Mushroom Cultivation",
      "description":
        "Button mushroom cultivation and mushroom farming yield.",
      "representativeOfPage": true
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/spawn-seed#breadcrumb",
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
          "name": "Spawn & Seeds",
          "item": "https://organicmushroomsfarm.com/spawn-seed"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://organicmushroomsfarm.com/spawn-seed#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is mushroom spawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mushroom spawn is a growing medium such as sterilized grain or sawdust that has been colonized by mushroom mycelium. It is used to introduce mycelium into a suitable substrate for mushroom cultivation."
          }
        },
        {
          "@type": "Question",
          "name": "Is mushroom spawn the same as mushroom seeds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mushrooms do not grow from traditional seeds. Mushroom spawn contains actively growing mycelium and is commonly used to start mushroom cultivation."
          }
        },
        {
          "@type": "Question",
          "name": "Why is quality mushroom spawn important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Good-quality spawn can support healthy colonization and consistent mushroom cultivation when the substrate, temperature, humidity and hygiene are properly managed."
          }
        },
        {
          "@type": "Question",
          "name": "How can I identify contaminated mushroom spawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unusual green, pink, black or other abnormal growth can indicate contamination. Spawn should be inspected carefully before use."
          }
        },
        {
          "@type": "Question",
          "name": "How should mushroom spawn be selected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consider the mushroom species, spawn freshness, purity, cultivation method and compatibility with the intended substrate."
          }
        }
      ]
    }
  ]
};

export default function SpawnSeedPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-12 relative z-20">
      
      {/* Schema.org JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spawnSeedJsonLd).replace(/</g, "\u003c"),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
            <li>
              <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200">Spawn &amp; Seeds</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest mb-3">
            <Sprout size={16} />
            <span>Spawn & Seeds</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-3 leading-tight tracking-tight">
            The Secret to Bountiful Organic Mushrooms: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">It All Starts with the Right Spawn</span>
          </h1>
        </div>

        {/* Content Section */}
        <div className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            If you are stepping into the rewarding world of organic mushroom farming, there is one crucial element you simply cannot compromise on: <strong>Mushroom Spawn</strong>.
          </p>
          <p>
            Often referred to as the "seed" of the mushroom, spawn is the absolute foundation of your crop. Whether you are a weekend hobbyist or scaling up a commercial farm, your harvest will only ever be as good as the material you start with.
          </p>
          <p>
            Here is everything you need to know about setting your farm up for success!
          </p>

          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/buttonmushroomyield_gpbiqf.webp"
            alt="Button mushroom cultivation and mushroom farming yield"
            width={1200}
            height={800}
            priority
            referrerPolicy="no-referrer"
            className="rounded-2xl shadow-lg my-6 w-full object-cover"
          />

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            What Exactly is Mushroom Spawn?
          </h2>
          <p>
            Unlike plants, mushrooms don't grow from traditional seeds. Instead, they grow from spores, which are then cultivated into mycelium (the root-like system of a fungus).
          </p>
          <p>
            Spawn is simply a carrier—usually sterilized grain, sawdust, or wooden plugs—that has been fully colonized by this mycelium. When you introduce this spawn to your growing medium (substrate), it explodes into life, eventually fruiting into the delicious organic mushrooms you love.
          </p>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            Why Quality Spawn is a Game-Changer
          </h2>
          <p>
            Sourcing your mushroom seed from a reliable, organic provider isn't just an option; it's a necessity. Here is why premium spawn makes all the difference:
          </p>
          
          <ul className="space-y-3 my-4">
            <li className="flex gap-2.5 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-0.5">Faster Colonization:</strong>
                Vigorous, healthy mycelium spreads rapidly through your substrate, beating out competing molds and bacteria before they can take hold.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-0.5">Maximum Yields:</strong>
                Top-tier spawn carries superior genetics, translating to more frequent "flushes" and significantly larger mushrooms.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckCircle2 className="text-purple-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong className="dark:text-white text-slate-900 block mb-0.5">Guaranteed Consistency:</strong>
                High-quality spawn ensures you get the exact strain you paid for, behaving predictably in your grow room every single time.
              </div>
            </li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mt-8 mb-3 border-l-4 border-purple-500 pl-3">
            Tips for Choosing the Right "Seed"
          </h2>
          <p>When browsing for spawn, always look for:</p>
          
          <ul className="space-y-3 my-4">
            <li className="flex gap-2.5 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></div>
              <div>
                <strong className="dark:text-white text-slate-900">Freshness:</strong> The mycelium should look bright white and healthy.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></div>
              <div>
                <strong className="dark:text-white text-slate-900">Purity:</strong> Avoid bags with green, pink, or black patches, as this indicates contamination.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></div>
              <div>
                <strong className="dark:text-white text-slate-900">Organic Origins:</strong> To grow truly organic mushrooms, your starting culture must also be cultivated in clean, chemical-free environments.
              </div>
            </li>
          </ul>

          <div className="space-y-4 my-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p>
              Learn more about our{" "}
              <Link href="/training" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming training
              </Link>{" "}
              programs.
            </p>

            <p>
              For mushroom farm planning, explore our{" "}
              <Link href="/mushroomfarmingcalculators" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                mushroom farming calculators
              </Link>
              .
            </p>

            <p>
              For commercial mushroom farming guidance,{" "}
              <Link href="/enquiry" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                send us an enquiry
              </Link>.
            </p>

            <p>
              Explore our <Link href="/gallery" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">mushroom farming gallery</Link> to see cultivation, farm infrastructure and harvesting images.
            </p>
          </div>

          <section aria-labelledby="spawn-faq" className="mt-12 mb-8">
            <h2 id="spawn-faq" className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-6">Mushroom Spawn & Seeds – Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">What is mushroom spawn?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Mushroom spawn is a growing medium such as sterilized grain or sawdust
                  that has been colonized by mushroom mycelium. It is used to introduce
                  mycelium into a suitable substrate for mushroom cultivation.
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Is mushroom spawn the same as mushroom seeds?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Mushrooms do not grow from traditional seeds. Mushroom spawn contains
                  actively growing mycelium and is commonly used to start mushroom
                  cultivation.
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Why is quality mushroom spawn important?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Good-quality spawn can support healthy colonization and consistent
                  mushroom cultivation when the substrate, temperature, humidity and
                  hygiene are properly managed.
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">How can I identify contaminated mushroom spawn?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Unusual green, pink, black or other abnormal growth can indicate
                  contamination. Spawn should be inspected carefully before it is
                  introduced into the cultivation substrate.
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">How should mushroom spawn be selected?</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  Consider the mushroom species, spawn freshness, purity, cultivation
                  method and compatibility with the intended substrate before selecting
                  mushroom spawn.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="dark:bg-purple-900/10 bg-purple-50 p-6 rounded-2xl md:rounded-3xl border border-purple-500/20 text-center mt-8 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-2">Ready to Grow?</h2>
            <p className="dark:text-slate-300 text-slate-700 text-xs md:text-sm mb-5 max-w-xl mx-auto">
              The journey to harvesting perfect, chemical-free mushrooms begins with a single, high-quality bag of spawn. Don't leave your yield to chance! Start your organic farming journey today with premium, fully-colonized mushroom spawn at <strong className="dark:text-white text-slate-900">Organic Mushrooms Farm</strong>. Happy growing! 🍄
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