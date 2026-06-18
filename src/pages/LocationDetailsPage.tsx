import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Sprout, Briefcase, TrendingUp, Users, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateReviewSchema } from '../utils/seoSchemas';

export default function LocationDetailsPage() {
  const { pathname } = useLocation();
  // Example pathnames: /careers-delhi, /mushroom-training-delhi, /mushroom-farming-delhi, /mushroom-franchise-delhi
  const pathParts = pathname.split('-');
  const baseType = pathParts[0].replace('/', ''); // e.g., 'careers', 'mushroom'
  
  let pageType = 'farming';
  let locationSlug = '';

  if (baseType === 'careers') {
    pageType = 'careers';
    locationSlug = pathParts.slice(1).join('-');
  } else if (pathname.includes('mushroom-training')) {
    pageType = 'training';
    locationSlug = pathname.replace('/mushroom-training-', '');
  } else if (pathname.includes('mushroom-farming')) {
    pageType = 'farming';
    locationSlug = pathname.replace('/mushroom-farming-', '');
  } else if (pathname.includes('mushroom-franchise')) {
    pageType = 'franchise';
    locationSlug = pathname.replace('/mushroom-franchise-', '');
  }

  const formattedLocation = locationSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const generateDynamicContent = () => {
    switch (pageType) {
      case 'training':
        return {
          title: `Mushroom Training in ${formattedLocation}`,
          description: `Get professional mushroom farming training in ${formattedLocation}. Both online and offline courses available covering Oyster, Button, and Milky mushrooms.`,
          heroHeading: `Professional Mushroom Training in ${formattedLocation}`,
          heroSub: `Start your successful organic farming journey with expert guidance specifically tailored for ${formattedLocation}'s climate.`,
          ctaText: "Get Training Information"
        };
      case 'franchise':
        return {
          title: `Mushroom Franchise Opportunities in ${formattedLocation}`,
          description: `Start a highly profitable mushroom franchise in ${formattedLocation}. Low investment, guaranteed ROI, full cold chain and marketing support provided.`,
          heroHeading: `Own a Mushroom Franchise in ${formattedLocation}`,
          heroSub: `Join India's fastest-growing organic network. We provide complete setup, spawn, and buy-back options in ${formattedLocation}.`,
          ctaText: "Apply for Franchise"
        };
      case 'careers':
        return {
          title: `Mushroom Farm Jobs & Careers in ${formattedLocation}`,
          description: `Looking for agriculture and farm jobs in ${formattedLocation}? Apply for roles ranging from Supervisors, Sales to Digital Marketing at Organic Mushroom Farm.`,
          heroHeading: `Grow Your Career in ${formattedLocation}`,
          heroSub: `Join the sustainable food revolution. Now hiring in ${formattedLocation} for multiple remote and on-farm positions.`,
          ctaText: "Apply Now"
        };
      case 'farming':
      default:
        return {
          title: `Mushroom Farming Business in ${formattedLocation}`,
          description: `Start a highly profitable mushroom farming business in ${formattedLocation}. We offer turnkey setups, spawn supply, and expert consultation.`,
          heroHeading: `Mushroom Farming Setup in ${formattedLocation}`,
          heroSub: `End-to-End commercial setups, high-yield spawn, and consultancy specifically adapted to the environment of ${formattedLocation}.`,
          ctaText: "Start Business Now"
        };
    }
  };

  const content = generateDynamicContent();

  const faqs = [
    {
      q: `What is the scope of mushroom business in ${formattedLocation}?`,
      a: `The demand for organic and fresh mushrooms is growing rapidly in ${formattedLocation}. With local hotels, restaurants, and health-conscious consumers, it represents a highly profitable venture.`
    },
    {
      q: `Do you provide support for setting up farms in ${formattedLocation}?`,
      a: `Yes, we provide pan-India support, including turnkey setups, climate control unit installation, and continuous online/offline consultation directly for ${formattedLocation} residents.`
    },
    {
      q: `Can I get high-quality spawn delivered to ${formattedLocation}?`,
      a: `Absolutely! We have an advanced cold-chain supply network that ensures premium, high-yield spawn reaches ${formattedLocation} in optimal condition.`
    }
  ];

  const generateSchemas = () => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    return [faqSchema];
  };

  return (
    <>
      <SEO 
        title={`${content.title} | Organic Mushroom Farm`}
        description={content.description}
        keywords={`mushroom farming ${formattedLocation}, mushroom training ${formattedLocation}, mushroom franchise ${formattedLocation}, organic agriculture ${formattedLocation}`}
        url={pathname}
        schemas={generateSchemas()}
      />
      <div className="pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="text-center py-16 md:py-24 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white text-slate-900 leading-tight mb-6 tracking-tighter">
              <span className="gradient-text">{content.heroHeading}</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-slate-400 text-slate-600 mb-10 leading-relaxed">
              {content.heroSub}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919203544140" className="btn-primary px-8 py-3 rounded-full font-bold flex items-center gap-2">
                <MessageCircle size={18} /> {content.ctaText} via WhatsApp
              </a>
              <a href="tel:9203544140" className="px-8 py-3 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-slate-900 font-bold hover:dark:bg-white/5 hover:bg-black/5 transition-colors flex items-center gap-2">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5">
              <Sprout className="text-primary-start mb-4" size={32} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Local Support</h3>
              <p className="dark:text-slate-400 text-slate-600">Access to comprehensive technical guides, local supply chains, and on-the-ground networking.</p>
            </div>
            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5">
              <TrendingUp className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">High ROI</h3>
              <p className="dark:text-slate-400 text-slate-600">Maximize profitability with advanced cultivation techniques optimized for regional conditions.</p>
            </div>
            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5">
              <ShieldCheck className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Premium Quality</h3>
              <p className="dark:text-slate-400 text-slate-600">We guarantee high-yield strains and structural guarantees on all farm equipment used.</p>
            </div>
          </div>

          <div className="glass p-10 md:p-16 rounded-[3rem] border dark:border-white/5 border-black/5 mb-24">
            <h2 className="text-2xl md:text-4xl font-bold dark:text-white text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                 <div key={i} className="p-6 rounded-2xl dark:bg-white/5 bg-black/5">
                   <h4 className="font-bold dark:text-white text-slate-900 mb-2">{faq.q}</h4>
                   <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
