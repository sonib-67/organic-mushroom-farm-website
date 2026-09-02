import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sprout, 
  Layers, 
  Info, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Calculator, 
  Briefcase, 
  ArrowRight, 
  Building2, 
  Phone, 
  Mail, 
  Sun,
  Factory,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

export interface ServiceDetailItem {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h2: string;
  description: string;
  category: string;
  iconName: string;
  steps: { title: string; content: string }[];
  materials: string[];
  costEstimation: string;
  commonMistakes: string[];
  highlights?: string[];
}

export const ALL_SERVICES_DATA: Record<string, ServiceDetailItem> = {
  'spawn-supply': {
    id: 'spawn-supply',
    title: 'Spawn Supply',
    metaTitle: 'Mushroom Spawn Supplier Pan India | Quality Hybrid Seeds',
    metaDescription: 'Buy premium hybrid mushroom spawn online. We are a trusted mushroom spawn supplier Pan India, delivering high-yield seeds optimized for the Indian climate.',
    h1: 'Premium Mushroom Spawn Supply in India',
    h2: 'High-Yield Hybrid Genetics for Professional Farming',
    description: 'Spawn (seed) is the foundation of a successful mushroom crop. We provide laboratory-verified, high-quality hybrid spawn optimized for the Indian climate.',
    category: 'Spawn & Genetics',
    iconName: 'Sprout',
    steps: [
      { title: 'Selection', content: 'Choose the right strain based on your local temperature and market demand (Button, Oyster, Milky, etc.).' },
      { title: 'Ordering', content: 'Pre-book your spawn at least 15-20 days before your composting/substrate cycle ends.' },
      { title: 'Transportation', content: 'Transported in temperature-regulated containers (4-8°C) to maintain maximum mycelium vitality.' },
      { title: 'Inoculation', content: 'Carefully mix with prepared compost or substrate under sterile, sanitized farm conditions.' }
    ],
    materials: ['Hybrid Spawn Bottles/Packets', 'Sterile Hand Gloves', 'Isopropyl Alcohol (70%)', 'Clean Spawning Tray'],
    costEstimation: '₹80 - ₹120 per kg of spawn depending on strain, genetics, and order volume.',
    commonMistakes: [
      'Using old or non-refrigerated spawn with degraded mycelium vigor.',
      'Poor hygiene during inoculation leading to competitor mold contamination.',
      'Purchasing from non-verified local labs without genetic stability and purity checks.'
    ],
    highlights: ['First-generation master culture replication', 'Zero green-mold contamination guarantee', 'Pan India express refrigerated dispatch']
  },
  'compost-production': {
    id: 'compost-production',
    title: 'Compost Production',
    metaTitle: 'Industrial Mushroom Compost Production India | Phase II & III',
    metaDescription: 'Specialized industrial compost production for button mushroom farming. Standardized Phase II pasteurized compost for high yields in India.',
    h1: 'Industrial Mushroom Compost Production',
    h2: 'Standardized Phase II & Phase III Substrate Preparation',
    description: 'We help you set up industrial composting units or provide standardized pasteurized compost that eliminates competitors like weed molds and pathogens.',
    category: 'Substrate & Compost',
    iconName: 'Layers',
    steps: [
      { title: 'Raw Material Mixing', content: 'Balanced C:N ratio formulation using wheat straw, paddy straw, poultry manure, and gypsum.' },
      { title: 'Phase-I Fermentation', content: 'Outdoor composting in aerobic bunkers for initial biochemical breakdown.' },
      { title: 'Phase-II Pasteurization', content: 'Controlled peak heating in pasteurization tunnels at 58-60°C to eliminate all weed molds and nematodes.' },
      { title: 'Conditioning & Cooling', content: 'Gradual ammonia clearance at 48-52°C and cooling to 25°C prior to spawning.' }
    ],
    materials: ['Wheat/Paddy Straw', 'Poultry Manure', 'Gypsum', 'Urea/DAP', 'Aerated Bunker System'],
    costEstimation: '₹5 - ₹8 per kg of prepared pasteurized compost for commercial scale operations.',
    commonMistakes: [
      'Incomplete pasteurization leaving residual ammonia traces that kill mushroom mycelium.',
      'Imbalanced C:N ratio leading to inadequate thermal rise in fermentation piles.',
      'Poor moisture control (waterlogged or overly dry substrate).'
    ],
    highlights: ['100% ammonia-free pasteurization protocol', 'Consistent moisture levels (65-68%)', 'High yield potential (20-25% crop conversion)']
  },
  'consultancy': {
    id: 'consultancy',
    title: 'Farm Consultancy',
    metaTitle: 'Mushroom Farming Training Online & Offline | Professional Farm Setup',
    metaDescription: 'Join our mushroom farming training online or offline. Get expert consultancy for complete mushroom setup, ROI analysis, and clinical production SOPs India-wide.',
    h1: 'Technical Mushroom Farm Consultancy',
    h2: 'Bridging the Gap Between Concept and Commercial Success',
    description: 'Avoid costly engineering and biological errors with our expert consultancy. We provide layouts, climate control specs, and operational mentorship tailored to your location.',
    category: 'Advisory & Setup',
    iconName: 'Info',
    steps: [
      { title: 'Site Inspection & Feasibility', content: 'Evaluating land topography, water pH/TDS quality, power availability, and local micro-climate.' },
      { title: 'Detailed Project Report (DPR)', content: 'Creating comprehensive bankable DPRs for financing and government subsidies.' },
      { title: 'Infrastructure Supervision', content: 'Guiding construction of insulated grow rooms, HVAC ducting, and airtight airlocks.' },
      { title: 'Crop Cycle Handholding', content: 'On-call and site-visit technical mentorship during your first 3 full commercial crop cycles.' }
    ],
    materials: ['Technical CAD Layouts', 'DPR Templates', 'HVAC Airflow Specs', 'Daily Monitoring Charts'],
    costEstimation: 'Starting from ₹25,000 for basic technical advisory to project-percentage based turnkey consultancy.',
    commonMistakes: [
      'Attempting commercial setup without analyzing seasonal ambient temperature ranges.',
      'Undersizing HVAC chillers or blowers to cut initial capital expenses.',
      'Ignoring local mandi and institutional buyer demand before selecting mushroom species.'
    ],
    highlights: ['End-to-end DPR assistance for bank loans', 'Custom HVAC and ducting optimization', 'Hands-on SOP training for farm workers']
  },
  'marketing-support': {
    id: 'marketing-support',
    title: 'Marketing Support',
    metaTitle: 'Mushroom Marketing Support India | B2B Market Linkage',
    metaDescription: 'Connect with verified mushroom buyers and export channels. We provide marketing support for button mushroom farming business success in India.',
    h1: 'Mushroom Marketing & Sales Support',
    h2: 'Connecting Producers with National B2B Markets & Retail Chains',
    description: 'The biggest challenge in commercial farming is timely sales. We connect your farm with verified Mandi wholesalers, supermarket chains, and food processing units across India.',
    category: 'Market Linkage',
    iconName: 'TrendingUp',
    steps: [
      { title: 'Branding & Packaging', content: 'Designing breathable, moisture-barrier retail punnets and bulk corrugated boxes.' },
      { title: 'Buyer Matchmaking', content: 'Connecting daily harvest volume with verified wholesalers and modern trade buyers.' },
      { title: 'Quality Grading & Sorting', content: 'Sorting harvest into A-grade (button), B-grade (open veil), and processing grades for maximum realization.' },
      { title: 'Supply Contracts', content: 'Establishing long-term supply agreements and price-hedged buyback relationships.' }
    ],
    materials: ['Perforated Punnets', 'Branded Shrink Wrap', 'Grading Trays', 'Cold-Transit Crates'],
    costEstimation: 'Included in turnkey packages or performance-based commission on facilitated bulk sales.',
    commonMistakes: [
      'Focusing exclusively on production while ignoring market off-take until harvest day.',
      'Substandard packaging leading to cap bruising, condensation, and price discounts.',
      'Irregular harvesting schedules breaking retail supply commitments.'
    ],
    highlights: ['Direct connection with verified Mandi traders', 'Value-added product guidance (canning/drying)', 'Export linkage for medicinal & exotic varieties']
  },
  'cold-chain': {
    id: 'cold-chain',
    title: 'Cold Chain Solutions',
    metaTitle: 'Mushroom Cold Chain & Storage Solutions India | Freshness Assured',
    metaDescription: 'Professional cold chain solutions for mushroom shelf-life extension. Specialized cold storage and refrigerated transport for Pan India delivery.',
    h1: 'Precision Cold Chain for Mushrooms',
    h2: 'Preserving Freshness, Color, and Weight from Harvest to Consumer',
    description: 'Fresh mushrooms are 90% water and highly perishable. Our engineered cold chain solutions halt respiration immediately, preventing cap browning and moisture loss.',
    category: 'Post-Harvest & Storage',
    iconName: 'Zap',
    steps: [
      { title: 'Pre-Cooling', content: 'Rapid forced-air cooling of harvested produce to 4°C within 2 hours of harvesting.' },
      { title: 'Farm Cold Storage', content: 'Maintaining 2-4°C with 85-90% relative humidity in specialized on-farm cold rooms.' },
      { title: 'Refrigerated Transit', content: 'Dispatching packed mushrooms in temperature-monitored refrigerated vehicles.' },
      { title: 'Retail Cold Management', content: 'Ensuring end-distributor adherence to unbroken cold chains until retail sale.' }
    ],
    materials: ['PUF Cold Room Panels (80-100mm)', 'Semi-Hermetic Compressor Units', 'Digital Data Loggers', 'Insulated Transport Crates'],
    costEstimation: '₹3 - ₹5 Lakhs for small on-farm 5-tonne cold room setup; scaled for industrial farms.',
    commonMistakes: [
      'Delaying pre-cooling, causing rapid polyphenol oxidase activation (browning).',
      'Temperature fluctuations during transit leading to package sweating and mold growth.',
      'Poor air circulation inside cold rooms creating localized freezing spots.'
    ],
    highlights: ['Extends fresh mushroom shelf life up to 10-14 days', 'Eliminates distress selling during market dips', 'Automated digital temperature logging']
  },
  'subsidy': {
    id: 'subsidy',
    title: 'Subsidy Support',
    metaTitle: 'Government Subsidy for Mushroom Farming India | NHB & MIDH Support',
    metaDescription: 'Get 40-50% subsidy for your mushroom farm setup. Full documentation support for NHB, MIDH, and State Agriculture schemes in India.',
    h1: 'Mushroom Farming Government Subsidies',
    h2: 'Maximizing Capital Efficiency with Strategic National Grants',
    description: 'The Government of India and state horticulture departments provide 40% to 50% credit-linked back-ended subsidies for commercial mushroom and spawn laboratories.',
    category: 'Government Schemes',
    iconName: 'ShieldCheck',
    steps: [
      { title: 'Scheme Mapping', content: 'Identifying the most lucrative scheme (MIDH, NHB, RKVY, PMFME) for your project size.' },
      { title: 'Bankable DPR Preparation', content: 'Drafting techno-commercial project reports complying with NHB/NABARD cost norms.' },
      { title: 'In-Principle Approval (IPA/LOI)', content: 'Submitting documentation for official sanction prior to commencing civil construction.' },
      { title: 'Subsidy Disbursement Support', content: 'Joint inspection coordination, chartered engineer documentation, and final grant release.' }
    ],
    materials: ['Detailed Project Report (DPR)', 'Land Ownership Documents', 'Bank Appraisal & Sanction Letter', 'Quotations & Invoices'],
    costEstimation: 'Consultancy fee ranges from ₹10,000 to ₹50,000 based on grant size and documentation scope.',
    commonMistakes: [
      'Commencing site construction before securing the formal Letter of Intent (LOI).',
      'Financial mismatch between actual machinery bills and approved DPR lines.',
      'Failing to adhere to NHB mandatory technical specifications for PUF panels and chillers.'
    ],
    highlights: ['Up to ₹20 Lakhs to ₹50+ Lakhs grant potential', 'Complete liaison support with state nodal agencies', '100% compliance with NHB/MIDH guidelines']
  },
  'button-mushroom': {
    id: 'button-mushroom',
    title: 'Button Mushroom Farming',
    metaTitle: 'Mastering Button Mushroom Farming: The King of the Commercial Market | Services',
    metaDescription: 'Learn why Button Mushroom (Agaricus bisporus) is the ultimate cash crop and what it takes to cultivate it successfully for the commercial market in India.',
    h1: 'Commercial Button Mushroom Farming Services',
    h2: 'High-Density Climate-Controlled Setup & High-Yield Cultivation',
    description: 'Button Mushroom (Agaricus bisporus) dominates over 75% of the Indian commercial mushroom market. We provide comprehensive turnkey setup, compost formulation, and cultivation consulting.',
    category: 'Commercial Crop Services',
    iconName: 'Factory',
    steps: [
      { title: 'Phase II/III Composting', content: 'Formulating high-nitrogen straw-poultry substrate pasteurized at 60°C.' },
      { title: 'Spawning & Mycelium Run', content: 'Evenly mixing hybrid grain spawn at 0.5-0.7% under 24-25°C and 90% RH.' },
      { title: 'Casing Soil Application', content: 'Applying 35-40mm sterilized peat/coir-pith casing layer to stimulate pinhead initiation.' },
      { title: 'Thermal Induction & Harvesting', content: 'Dropping temperature to 15-17°C with fresh air intake (CO2 < 1000 ppm) to trigger flushes.' }
    ],
    materials: ['Pasteurized Phase II/III Compost', 'Certified Hybrid Grain Spawn', 'Sterilized Casing Peat/Coir', 'Climate-Controlled AC Grow Rooms'],
    costEstimation: '₹8 - ₹15 Lakhs for small 1000-bag climate-controlled unit; ₹35+ Lakhs for full industrial EPC setup.',
    commonMistakes: [
      'Allowing CO2 levels to spike above 1500 ppm during pinhead formation.',
      'Using unsterilized casing soil that harbors wet bubble or cobweb mold.',
      'Inadequate temperature differential between spawn-run and cropping phases.'
    ],
    highlights: ['Year-round production with precision AC control', 'Consistent daily market liquidity in all major mandis', 'High profitability with 20-25% biological conversion']
  },
  'oyster-mushroom': {
    id: 'oyster-mushroom',
    title: 'Oyster Mushroom Cultivation',
    metaTitle: 'Why Oyster Mushrooms Are Taking the Culinary & Farming World by Storm | Services',
    metaDescription: 'Discover the nutritional power and cultivation benefits of oyster mushrooms. Learn why they are a favorite for farmers and a delicious meat substitute.',
    h1: 'Oyster Mushroom Cultivation & Farm Setup',
    h2: 'Fast-Growing, Low-Capital Commercial Farming with 21-Day Cycles',
    description: 'Oyster mushrooms (Pleurotus ostreatus / florida / sajor-caju) are exceptionally fast-growing and forgiving. They convert agricultural crop residues into premium gourmet protein in just 3 weeks.',
    category: 'Fast-Yield Crop Services',
    iconName: 'Sprout',
    steps: [
      { title: 'Substrate Pasteurization', content: 'Boiling or chemical/steam treatment of wheat straw or paddy straw to eliminate competing fungi.' },
      { title: 'Layer Spawning & Bagging', content: 'Mixing spawn in perforated polypropylene bags at 2-3% by wet substrate weight.' },
      { title: 'Incubation (Spawn Run)', content: 'Maintaining dark, warm conditions (22-26°C, 75-80% RH) for 15-18 days until substrate turns solid white.' },
      { title: 'Fruiting & Flush Harvesting', content: 'Providing diffused light, 85-90% humidity, and fresh air to harvest 3 flushes over 30 days.' }
    ],
    materials: ['Paddy/Wheat Straw', 'Polypropylene Grow Bags (16x24 inch)', 'Certified Oyster Spawn', 'Humidifier/Fogger Units'],
    costEstimation: '₹20,000 - ₹50,000 for home/seasonal shed; ₹1.5 - ₹3 Lakhs for commercial semi-controlled unit.',
    commonMistakes: [
      'Substrate excess moisture (>70%) leading to bacterial rot and anaerobic odor.',
      'Insufficient ventilation causing long, thick stems and tiny unmarketable caps.',
      'Delaying harvest until after heavy spore drop, which shortens storage life.'
    ],
    highlights: ['Shortest cultivation cycle (21 days from spawning to harvest)', 'Low capital requirement with minimal electricity needs', 'High dehydration and export market potential']
  },
  'milky-mushroom': {
    id: 'milky-mushroom',
    title: 'Milky Mushroom Farming',
    metaTitle: 'Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming | Services',
    metaDescription: 'Discover why Milky mushrooms (Calocybe indica) are the perfect summer crop. Learn about their heat tolerance, high yield, and incredible shelf life.',
    h1: 'Milky Mushroom Summer Crop Services',
    h2: 'Heat-Resistant Tropical Cultivation (30°C - 35°C) with Extended Shelf Life',
    description: 'Native to India, the Milky Mushroom (Calocybe indica) thrives in high summer temperatures with exceptional firmness, long shelf-life, and biological efficiency exceeding 100%.',
    category: 'Summer Crop Services',
    iconName: 'Sun',
    steps: [
      { title: 'Straw Pasteurization', content: 'Hot water soaking or steam sterilization of chopped straw.' },
      { title: 'Bag Spawning & Incubation', content: 'Inoculating with Milky mushroom spawn and incubating at 28-32°C for 20 days.' },
      { title: 'Casing Application', content: 'Applying 2-3cm sterilized loam soil or spent compost casing mix with pH 8.0-8.5.' },
      { title: 'Cropping & Fruiting', content: 'Maintaining 30-35°C with 80-85% humidity; picking large pristine-white fruiting bodies.' }
    ],
    materials: ['Sterilized Straw Substrate', 'Certified Calocybe indica Spawn', 'Alkaline Casing Soil', 'Ventilated Grow Chamber'],
    costEstimation: '₹35,000 - ₹75,000 for seasonal unit; ₹2 - ₹4 Lakhs for commercial farm.',
    commonMistakes: [
      'Using acidic casing soil instead of properly adjusted alkaline casing.',
      'Allowing casing layer to dry out during pinhead emergence.',
      'Harvesting overgrown caps with curled edges.'
    ],
    highlights: ['Zero chilling/AC requirement during peak Indian summers', '3-5 days shelf life without refrigeration', 'Heavy, dense stems preferred by catering and restaurant sectors']
  },
  'turnkey-setup': {
    id: 'turnkey-setup',
    title: 'Turnkey Farm Setup',
    metaTitle: 'Why Smart Investors Choose Turnkey Setups Over DIY Commercial Mushroom Farms | Services',
    metaDescription: 'Discover why a Turnkey Commercial Mushroom Farm Setup is the smartest strategy to protect your capital and guarantee high yields in India.',
    h1: 'Turnkey Commercial Mushroom Farm Setup',
    h2: 'End-to-End Engineering, PUF Insulation, HVAC Systems, and Yield Guarantee',
    description: 'Commercial mushroom farming is an engineering discipline. We provide complete turnkey farm execution—from architectural layout and PUF insulated rooms to automated HVAC and yield commissioning.',
    category: 'Turnkey Projects',
    iconName: 'Building2',
    steps: [
      { title: 'Architectural & HVAC Engineering', content: 'Designing room layouts, AHU ducting, drainage slopes, and biosecurity airlocks.' },
      { title: 'Civil & PUF Panel Erection', content: 'Installing 80-100mm high-density PUF panels with thermal-bridge-free cam locks.' },
      { title: 'Climate Control & IoT Automation', content: 'Integrating precision chillers, humidifiers, CO2 sensors, and variable frequency drive (VFD) blowers.' },
      { title: 'Commissioning & Trial Crops', content: 'Hands-on operational execution of the initial crop cycle with performance benchmarking.' }
    ],
    materials: ['High-Density PUF Panels', 'Precision Air Handling Units (AHU)', 'IoT Climate Automation Controllers', 'Galvanized Multi-Tier Racks'],
    costEstimation: '₹25 Lakhs to ₹2+ Crores depending on farm capacity (500 kg/day to 5+ TPD).',
    commonMistakes: [
      'Hiring non-specialized local AC contractors who misunderstand mushroom airflow physics.',
      'Poor vapor sealing allowing moisture to seep into structural walls and rot insulation.',
      'Inadequate electrical backup causing thermal spikes during critical pinning periods.'
    ],
    highlights: ['Single-window responsibility with zero execution risk', 'Optimized energy design cutting operational costs by 30%', 'Guaranteed yield and technical SOP certification']
  }
};

const getIcon = (name: string) => {
  switch (name) {
    case 'Sprout': return Sprout;
    case 'Layers': return Layers;
    case 'Info': return Info;
    case 'TrendingUp': return TrendingUp;
    case 'Zap': return Zap;
    case 'ShieldCheck': return ShieldCheck;
    case 'Factory': return Factory;
    case 'Sun': return Sun;
    case 'Building2': return Building2;
    default: return Sprout;
  }
};

export async function generateStaticParams() {
  return Object.keys(ALL_SERVICES_DATA).map((id) => ({
    id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = ALL_SERVICES_DATA[id];

  if (!service) {
    return {
      title: 'Service Not Found | Organic Mushrooms Farm',
      description: 'The requested mushroom service page could not be found.',
    };
  }

  const canonicalUrl = `https://mushroomsfarm.in/services/${id}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Organic Mushrooms Farm India',
      images: [
        {
          url: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
          width: 1200,
          height: 630,
          alt: `${service.title} - Organic Mushrooms Farm`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: ['https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = ALL_SERVICES_DATA[id];

  if (!service) {
    notFound();
  }

  const IconComponent = getIcon(service.iconName);

  // Structured Data Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.category,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Organic Mushrooms Farm',
      url: 'https://mushroomsfarm.in',
      logo: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9203544140',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    url: `https://mushroomsfarm.in/services/${id}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mushroomsfarm.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://mushroomsfarm.in/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://mushroomsfarm.in/services/${id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-emerald-400 font-medium truncate">{service.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden mb-16 border-b border-slate-800/80 pb-16">
          <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent -z-10 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <IconComponent size={15} />
                <span>{service.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                {service.h1}
              </h1>
              <h2 className="text-lg sm:text-xl text-emerald-300/90 font-medium mb-6">
                {service.h2}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Step-by-Step & Pitfalls */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              {service.highlights && service.highlights.length > 0 && (
                <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/20">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-emerald-400" /> Key Technical Advantages
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step-by-Step Workflow */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" size={24} /> Step-by-Step Implementation SOP
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">{service.steps.length} Key Phases</span>
                </div>
                <div className="space-y-4">
                  {service.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-colors relative overflow-hidden group"
                    >
                      <div className="absolute top-3 right-4 text-5xl font-black text-slate-800/40 select-none group-hover:text-emerald-500/10 transition-colors">
                        0{idx + 1}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        {step.title}
                      </h4>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed relative z-10 pl-8">
                        {step.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Pitfalls / Mistakes */}
              <section className="p-6 sm:p-8 rounded-2xl bg-rose-950/20 border border-rose-500/20">
                <h3 className="text-xl font-bold text-rose-300 mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-rose-400" size={22} /> Critical Pitfalls & How to Avoid Them
                </h3>
                <ul className="space-y-4">
                  {service.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-slate-300 text-sm sm:text-base">
                      <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Cross-Service Navigation */}
              <section className="pt-6 border-t border-slate-800">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Explore Other Mushroom Services
                </h4>
                <div className="flex flex-wrap gap-2">
                  {Object.values(ALL_SERVICES_DATA).map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.id}`}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        s.id === id
                          ? 'bg-emerald-500 text-white font-bold'
                          : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300'
                      }`}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar: Assets, Costing & Contact */}
            <aside className="space-y-8">
              {/* Required Assets / Materials */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                  <Briefcase className="text-emerald-400" size={18} /> Required Farm Assets
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.materials.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Commercial Cost Estimation */}
              <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2.5">
                  <Calculator className="text-emerald-400" size={18} /> Cost & Budget Estimation
                </h3>
                <p className="text-emerald-300 font-bold text-base mb-2">
                  {service.costEstimation}
                </p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                  *Final costs depend on farm capacity, local raw material pricing, and automation degree.
                </p>
              </div>

              {/* Direct WhatsApp / Consultation CTA */}
              <div className="p-6 rounded-2xl bg-linear-to-br from-emerald-600 to-teal-700 text-white shadow-xl">
                <h4 className="text-xl font-bold mb-2">Ready to Setup Your Farm?</h4>
                <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
                  Connect with our senior technical consultants for personalized site evaluation and layout planning across India.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/919203544140?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.%20Please%20guide%20me.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-slate-950 font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-md"
                  >
                    Chat on WhatsApp <ArrowRight size={16} />
                  </a>
                  <a
                    href="tel:+919203544140"
                    className="w-full bg-emerald-800/60 hover:bg-emerald-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-emerald-400/30"
                  >
                    <Phone size={14} /> Call: +91 9203544140
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
