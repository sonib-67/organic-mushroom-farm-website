import { Sprout, Layers, Info, TrendingUp, Zap, ShieldCheck, ShoppingCart, Home, ArrowRight } from 'lucide-react';

export interface DetailPageContent {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h2: string;
  description: string;
  icon: any;
  steps: { title: string; content: string }[];
  materials: string[];
  costEstimation: string;
  commonMistakes: string[];
}

export const SERVICES_DATA: DetailPageContent[] = [
  {
    id: 'spawn-supply',
    title: 'Spawn Supply',
    metaTitle: 'Mushroom Spawn Supplier Pan India | Quality Hybrid Seeds',
    metaDescription: 'Buy premium hybrid mushroom spawn online. We are a trusted mushroom spawn supplier Pan India, delivering high-yield seeds optimized for the Indian climate.',
    h1: 'Premium Mushroom Spawn Supply in India',
    h2: 'High-Yield Hybrid Genetics for Professional Farming',
    description: 'Spawn (seed) is the foundation of a successful mushroom crop. We provide laboratory-verified, high-quality hybrid spawn optimized for the Indian climate.',
    icon: Sprout,
    steps: [
      { title: 'Selection', content: 'Choose the right strain based on your local temperature and market demand (Button, Oyster, etc.).' },
      { title: 'Ordering', content: 'Pre-book your spawn at least 15-20 days before your composting cycle ends.' },
      { title: 'Transportation', content: 'Transported in refrigerated containers (4-8°C) to maintain vitality.' },
      { title: 'Inoculation', content: 'Carefully mix with prepared compost under sterile conditions.' }
    ],
    materials: ['Hybrid Spawn Bottles/Packets', 'Sterile Hand Gloves', 'Isopropyl Alcohol', 'Clean Spawning Tray'],
    costEstimation: '₹80 - ₹120 per kg of spawn depending on strain and order volume.',
    commonMistakes: [
      'Using old or non-refrigerated spawn.',
      'Poor hygiene during inoculation leading to contamination.',
      'Purchasing from non-verified local labs without genetic stability.'
    ]
  },
  {
    id: 'compost-production',
    title: 'Compost Production',
    metaTitle: 'Industrial Mushroom Compost Production India | Phase II & III',
    metaDescription: 'Specialized industrial compost production for button mushroom farming. Standardized Phase II pasteurized compost for high yields in India.',
    h1: 'Industrial Mushroom Compost Production',
    h2: 'Standardized Phase II & Phase III Substrate Preparation',
    description: 'We help you set up industrial composting units or provide standardized pasteurized compost that eliminates competitors like weed molds and pathogens.',
    icon: Layers,
    steps: [
      { title: 'Raw Material Mixing', content: 'Balanced C:N ratio using wheat straw, poultry manure, and gypsum.' },
      { title: 'Phase-I Fermentation', content: 'Outdoor composting (windrow or bunker) for initial breakdown.' },
      { title: 'Phase-II Pasteurization', content: 'Controlled heating in tunnels at 60°C to kill pathogens.' },
      { title: 'Conditioning', content: 'Gradual cooling to 25°C before spawning.' }
    ],
    materials: ['Wheat/Paddy Straw', 'Chicken Manure', 'Gypsum', 'Urea/DAP', 'Bunker Infrastructure'],
    costEstimation: '₹5 - ₹8 per kg of prepared compost for large scale production.',
    commonMistakes: [
      'Incomplete pasteurization leaving ammonia traces.',
      'Imbalanced C:N ratio leading to low temperature rise.',
      'Poor moisture control (too wet or too dry).'
    ]
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    metaTitle: 'Mushroom Farming Training Online & Offline | Professional Farm Setup',
    metaDescription: 'Join our mushroom farming training online or offline. Get expert consultancy for complete mushroom setup, ROI analysis, and clinical production SOPs India-wide.',
    h1: 'Technical Mushroom Farm Consultancy',
    h2: 'Bridging the Gap Between Concept and Commercial Success',
    description: 'Avoid costly errors with our expert consultancy. We provide layouts, climate control specs, and operational mentorship tailored to your location.',
    icon: Info,
    steps: [
      { title: 'Site Inspection', content: 'Evaluating land, water quality, and power availability.' },
      { title: 'Project Report', content: 'Detailed DPR for bank loans and government subsidies.' },
      { title: 'Infrastructure Guidance', content: 'Supervising the construction of grow rooms and insulation.' },
      { title: 'Crop Management', content: 'On-call and site-visit support during the first 3 cycles.' }
    ],
    materials: ['Technical Layouts', 'DPR Templates', 'Climate Control Specs', 'ROI Sheets'],
    costEstimation: 'Starting from ₹25,000 for basic technical advisory to project-percentage based turnkey fees.',
    commonMistakes: [
      'Attempting setup without environmental data.',
      'Undersizing AC/Climate systems to save initial costs.',
      'Ignoring local market demand before choosing mushroom type.'
    ]
  },
  {
    id: 'marketing-support',
    title: 'Marketing Support',
    metaTitle: 'Mushroom Marketing Support India | B2B Market Linkage',
    metaDescription: 'Connect with verified mushroom buyers and export channels. We provide marketing support for button mushroom farming business success in India.',
    h1: 'Mushroom Marketing & Sales Support',
    h2: 'Connecting Producers with National B2B Markets',
    description: 'The biggest challenge in farming is sales. We help you connect with wholesalers, retailers, and food processing industries across India.',
    icon: TrendingUp,
    steps: [
      { title: 'Branding', content: 'Setting up basic packaging and branding for your local farm.' },
      { title: 'Buyer Networking', content: 'Introducing your produce to verified Mandi wholesalers.' },
      { title: 'Quality Grading', content: 'Sorting mushrooms into A, B, and C grades for maximum pricing.' },
      { title: 'Contract Farming', content: 'Establishing fixed-price buyback or supply agreements.' }
    ],
    materials: ['Packaging Crates', 'Branded Pouches', 'Grading Trays', 'Digital Inventory Sheets'],
    costEstimation: 'Included in turnkey packages or performance-based commission on bulk sales.',
    commonMistakes: [
      'Focusing only on production and ignoring market tie-ups until harvest.',
      'Poor packaging leading to bruising and price drops.',
      'Lack of consistent supply which breaks retail trust.'
    ]
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain',
    metaTitle: 'Mushroom Cold Chain & Storage Solutions India | Freshness Assured',
    metaDescription: 'Professional cold chain solutions for mushroom shelf-life extension. Specialized cold storage and refrigerated transport for Pan India delivery.',
    h1: 'Precision Cold Chain for Mushrooms',
    h2: 'Preserving Freshness from Harvest to Consumer',
    description: 'Mushrooms are 90% water and highly perishable. Our cold chain solutions ensure your harvest reaches the market with zero quality loss.',
    icon: Zap,
    steps: [
      { title: 'Pre-cooling', content: 'Rapid cooling of harvested mushrooms to 4°C within 2 hours.' },
      { title: 'Cold Storage', content: 'Maintaining 2-4°C with 90% humidity in the farm unit.' },
      { title: 'Insulated Transport', content: 'Moving goods in refrigerated or PUF insulated vehicles.' },
      { title: 'Retail Cooling', content: 'Ensuring retailers use cold displays for shelf life.' }
    ],
    materials: ['Cold Room Panels', 'Semi-Hermetic Compressors', 'Insulated Crates', 'Digital Temp Logs'],
    costEstimation: '₹3 - ₹5 Lakhs for a small on-farm cold room setup.',
    commonMistakes: [
      'Delaying pre-cooling leading to browning (oxidation).',
      'Fluctuating temperatures during transport.',
      'Poor air circulation in the cold room.'
    ]
  },
  {
    id: 'subsidy',
    title: 'Subsidy Support',
    metaTitle: 'Government Subsidy for Mushroom Farming India | NHB & MIDH Support',
    metaDescription: 'Get 40-50% subsidy for your mushroom farm setup. Full documentation support for NHB, MIDH, and State Agriculture schemes in India.',
    h1: 'Mushroom Farming Government Subsidies',
    h2: 'Maximizing Your Investment with Strategic Grant Support',
    description: 'Indian government provides significant incentives (40% to 50%) for mushroom units. We handle the complex documentation to ensure your project qualifies.',
    icon: ShieldCheck,
    steps: [
      { title: 'Scheme Identification', content: 'Finding the right NHB or State scheme for your project size.' },
      { title: 'DPR Preparation', content: 'Creating a bankable Detailed Project Report.' },
      { title: 'LOI Application', content: 'Submitting the Letter of Intent to the department.' },
      { title: 'Subsidy Claim', content: 'Post-completion inspection and fund release support.' }
    ],
    materials: ['Project DPR', 'Land Documents', 'Bank Appraisal Letter', 'Registration Certificates'],
    costEstimation: 'Service fee ranges from ₹10,000 to ₹50,000 depending on project scale and complexity.',
    commonMistakes: [
      'Starting construction before getting the LOI/Permission.',
      'Inconsistent bills that don\'t match the project report.',
      'Poor coordination with local agriculture officers.'
    ]
  }
];
