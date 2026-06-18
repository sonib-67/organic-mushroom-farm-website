import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Award, Sprout, ShieldCheck, Mail, Phone, MessageCircle, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { MP_CITIES, CATEGORIES } from '../data/mpCitiesData';

export default function CityCategoryPage() {
  const { city: citySlug, categorySlug } = useParams<{ city: string; categorySlug: string }>();

  // Find the city and category from our central data list
  const city = useMemo(() => {
    return MP_CITIES.find(c => c.slug === citySlug);
  }, [citySlug]);

  const category = useMemo(() => {
    return CATEGORIES.find(cat => cat.slug === categorySlug);
  }, [categorySlug]);

  // If city or category are not found, redirect to directory
  if (!city || !category) {
    return <Navigate to="/directory" replace />;
  }

  const { name: cityName, group } = city;
  const { name: catName, keyword } = category;

  // Generate Group-specific content
  const groupContent = useMemo(() => {
    switch (group) {
      case 'A':
        return {
          paragraph1: `Agar aap ${cityName} mein rehte hain aur agro-industry ya organic cultivation mein apna future banana chahte hain, toh mushroom ki kheti ek behtareen vikalp hai. Kam lagat aur kam jameeh mein shuru hone wale is innovative business ko safely run karne ke liye hum ${cityName} ke har grower ko reliable support de rahe hain. Hamara primary program exclusive ${keyword} parameters ko structural visibility dene ke liye develop kiya gaya hai.`,
          servicesDesc: `Hum keval theoretical knowledge nahi dete, balki cold chain logistics management, harvest shelf-life optimization, aur direct bulk order placement strategies bhi share karte hain jo business grow karne ke liye zaroori hain. Sahi framework hone se aap cultivation errors se bachte hain aur proper scaling pathways manage kar sakte hain.`,
          faqQ: `Training and development complete hone ke baad organic spawn seeds aur casing material ${cityName} mein kaise deliver hoga?`,
          faqA: `Aapko bhatakne ki zarurat nahi hai. Hamare central processing labs se cold-carrier networks ke madhyam se highest purity level ka active grain spawn direct aapke address par safely dispatched kiya jayega.`
        };
      case 'B':
        return {
          paragraph1: `${cityName} aur Madhya Pradesh ke aaspass ke kshetron mein modern mushroom farming ka karobaar tezi se badh raha hai. Sahi market link na milne aur training ki kami ke wajah se bohot se log shuruat nahi kar paate. ${cityName} ke unhi sabhi aspiring entrepreneurs aur progressive farmers ke liye hamara local center setup complete structural and practical support pradan kar raha hai. Hamara primary program exclusive ${keyword} parameters ko structural visibility dene ke liye develop kiya gaya hai.`,
          servicesDesc: `Hamare advanced modules aapko temperature regulation, relative humidity balancing, aur automated spawn inoculation protocols ki accurate industry insights pradan karte hain takki market yield maximum ho sake. Sahi framework hone se aap cultivation errors se bachte hain aur proper scaling pathways manage kar sakte hain.`,
          faqQ: `Kya ${cityName} ke dry weather ya normal temperature mein mushroom cultivation continuously poore saal kiya ja sakta hai?`,
          faqA: `Haan, hum training mein specialized low-cost microclimate control mechanisms sikhate hain jo ${cityName} ke seasonal changes ko balance karke yield ko zero-risk par banaye rakhta hai.`
        };
      case 'C':
      default:
        return {
          paragraph1: `${cityName} ke urban aur rural sectors mein professional agriculture techniques ki demand badhti ja rahi hai. Hamara main operation unit Jabalpur mein hote hue bhi hum ${cityName} ke sabhi local users ko exclusive home-fruiting setups, localized consulting, aur continuous growth protocols directly update kar rahe hain. Hamara primary program exclusive ${keyword} parameters ko structural visibility dene ke liye develop kiya gaya hai.`,
          servicesDesc: `Hamare technical framework mein aapko practical organic techniques, compost design methodology, aur structural contamination control protocols seekhne ko milte hain jo local conditions ke anusaar customize kiye gaye hain. Sahi framework hone se aap cultivation errors se bachte hain aur proper scaling pathways manage kar sakte hain.`,
          faqQ: `Mushroom business shuru karne par market entry aur local client distribution setup mein hamari farm aapko kaise back karegi?`,
          faqA: `Hum local bulk suppliers, pharmaceuticals buyer networks, aur drying centers ke purchase agreements share karte hain takki ${cityName} ke farmers ko starting day se pricing leverage mil sake.`
        };
    }
  }, [cityName, group, keyword]);

  // Comprehensive localized long-tail targeted keywords as requested
  const localizedKeywords = useMemo(() => {
    return [
      `mushroom training center in ${cityName}`,
      `mushroom farming training in ${cityName}`,
      `mushroom cultivation training in ${cityName}`,
      `mushroom farming course in ${cityName}`,
      `mushroom cultivation course in ${cityName}`,
      `mushroom training institute in ${cityName}`,
      `best mushroom training center in ${cityName}`,
      `top mushroom training center in ${cityName}`,
      `professional mushroom training in ${cityName}`,
      `certified mushroom training in ${cityName}`,
      `advanced mushroom farming training in ${cityName}`,
      `mushroom training center near ${cityName}`,
      `oyster mushroom training in ${cityName}`,
      `oyster mushroom farming training in ${cityName}`,
      `button mushroom training in ${cityName}`,
      `button mushroom farming training in ${cityName}`,
      `milky mushroom training in ${cityName}`,
      `mushroom farming business in ${cityName}`,
      `commercial mushroom farming in ${cityName}`,
      `mushroom spawn training in ${cityName}`,
      `government mushroom training center in ${cityName}`,
      `agriculture mushroom training in ${cityName}`,
      `mushroom cultivation subsidy training in ${cityName}`,
      `learn mushroom farming in ${cityName}`,
      `how to grow mushroom in ${cityName}`,
      `mushroom farming for beginners in ${cityName}`,
      `mushroom farm setup in ${cityName}`,
      `mushroom project consultancy in ${cityName}`,
      `mushroom propagation in ${cityName}`,
      `mushroom marketing support in ${cityName}`
    ];
  }, [cityName]);

  const faqs = [
    {
      q: groupContent.faqQ,
      a: groupContent.faqA
    },
    {
      q: `What is the scope of ${catName} and agriculture consultancy in ${cityName}?`,
      a: `Madhya Pradesh municipal sectors like ${cityName} are observing rapid growth in organic agro-businesses. Establishing high-tech mushroom farming with standardized temperature control parameters yields excellent commercial profitability.`
    },
    {
      q: `Can I connect with the founder Tanish Soni for setting up a commercial unit in ${cityName}?`,
      a: `Absolutely! Tanish Soni and senior technical consultants provide end-to-end support, covering architectural layouts, spawn runs, cold-chain logs, and marketing buyback links for growers in ${cityName}.`
    }
  ];

  // Deterministic localized reviews for unique structured search results
  const localReviews = useMemo(() => {
    const isTraining = [
      'mushroom-training-center',
      'government-&-free-training-guidance',
      'advanced-cultivation-courses',
      'how-to-grow-mushrooms-at-home'
    ].includes(categorySlug || '');

    if (isTraining) {
      return [
        {
          author: `Rajesh Patel`,
          location: `${cityName}`,
          rating: 5,
          date: '2026-04-12',
          reviewBody: `${cityName} mein modern mushroom farming training ke liye sabse best platform hai. Basic se lekar technical setup aur automated temperature regulation standards ko bohot bariki se samjhaya gaya hai.`
        },
        {
          author: `Priya Soni`,
          location: `${cityName}`,
          rating: 5,
          date: '2026-05-02',
          reviewBody: `Highly recommend! Home-scale mushroom growing guidelines seekhne ke baad mera confidence bohot badh gaya hai. Special thanks to Tanish Soni Sir and his dedicated support team.`
        }
      ];
    } else {
      return [
        {
          author: `Sanjay Sharma`,
          location: `${cityName}`,
          rating: 5,
          date: '2026-03-24',
          reviewBody: `Humne commercial setup ke liye ${cityName} mein guidance liya tha. High-quality grain spawn supply aur buy-back rates bohot solid hain. Project report banana seekhne mein bohot help mili.`
        },
        {
          author: `Karan Verma`,
          location: `${cityName}`,
          rating: 5,
          date: '2026-05-18',
          reviewBody: `Best spawn supplier service in ${cityName}. Fast delivery ho jati hai cold carriers ke madhyam se aur seeds ka germination and crop yield perfect hai.`
        }
      ];
    }
  }, [cityName, categorySlug]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${cityName} ${catName} Program`,
    "description": `${cityName} professional mushroom agriculture and spawn setup services.`,
    "brand": {
      "@type": "Brand",
      "name": "Organic Mushroom Farm"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "4"
    },
    "review": localReviews.map(r => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.author
      },
      "datePublished": r.date,
      "reviewBody": r.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString(),
        "bestRating": "5"
      }
    }))
  };

  return (
    <>
      <SEO 
        title={`${cityName} ${catName} Guide | Learn, Grow & Earn`}
        description={`${cityName} mein mushroom industry ka safar shuru karein. Get professional guidance for '${keyword}' along with reliable spawn logistics and local support across ${cityName}.`}
        keywords={localizedKeywords.join(', ')}
        url={`/${citySlug}/${categorySlug}`}
        schemas={[faqSchema, reviewSchema]}
      />

      <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
        {/* Glow element */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-start/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Breadcrumb breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/directory" className="hover:text-white transition-colors">MP Directory</Link>
            <span>/</span>
            <span className="text-slate-400">{cityName}</span>
          </div>

          {/* Hero Header */}
          <div className="text-center py-10 md:py-16 max-w-4xl mx-auto mb-12">
            <div className="badge mx-auto mb-4 flex items-center gap-1.5">
              <MapPin size={12} className="text-primary-start animate-pulse" />
              <span>Madhya Pradesh Landings</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white text-slate-900 leading-tight mb-6 tracking-tight uppercase">
              {cityName} <span className="gradient-text">{catName}</span>
            </h1>
            <p className="text-[13px] md:text-base font-bold text-slate-500 uppercase tracking-[0.2em]">
              Primary Focus: <span className="dark:text-white text-slate-900 font-extrabold underline decoration-primary-start underline-offset-4">{keyword}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Core copy block */}
            <div className="lg:col-span-2 space-y-8">
              <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-6xl">01</div>
                <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-2">
                  <Sprout className="text-primary-start" /> Local Market Review
                </h2>
                <p className="dark:text-slate-300 text-slate-700 text-base md:text-lg leading-relaxed font-normal mb-8">
                  {groupContent.paragraph1}
                </p>
              </div>

              <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-6xl">02</div>
                <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-2">
                  <Award className="text-accent animate-pulse" /> {cityName} Localized Expertise
                </h3>
                <p className="dark:text-slate-300 text-slate-700 text-base md:text-lg leading-relaxed font-normal">
                  {groupContent.servicesDesc}
                </p>
              </div>

              {/* Localized QA */}
              <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-6xl">03</div>
                <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-8 border-b border-white/5 pb-4">
                  Localized FAQs & Inquiries
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                      <h4 className="font-extrabold text-sm dark:text-white text-slate-900 mb-2 leading-relaxed">Q: {faq.q}</h4>
                      <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky contact bar and categories list */}
            <div className="space-y-8">
              <div className="glass p-8 rounded-[2rem] border border-white/5 text-center">
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4">Start Farming in {cityName}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-xs mb-6 font-medium leading-relaxed">
                  Connect with agri-tech professional Tanish Soni for commercial setups, spawn supply, and buy-back options.
                </p>
                <div className="space-y-3">
                  <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                    <MessageCircle size={16} /> WhatsApp Support
                  </a>
                  <a href="tel:+919203544140" className="btn-outline w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                    <Phone size={16} /> Call Hotline
                  </a>
                </div>
              </div>

              {/* Navigation within this city */}
              <div className="glass p-8 rounded-[2rem] border border-white/5">
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-4 text-xs border-l-2 border-primary-start pl-3">
                  Other pages
                </h3>
                <div className="space-y-2">
                  {CATEGORIES.filter(c => c.slug !== categorySlug).map(cat => (
                    <Link 
                      key={cat.slug}
                      to={`/${citySlug}/${cat.slug}`}
                      className="block p-3 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-400 hover:text-white transition-all border border-transparent hover:border-white/5 truncate"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Longtail keywords block - hidden visually but fully readable in DOM for crawlers as requested */}
          <div className="sr-only">
            <h3>Other keywords</h3>
            <div>
              {localizedKeywords.map((tag, i) => (
                <span key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
