import { ShoppingCart, Layers, Home, Sprout, Zap, TrendingUp } from 'lucide-react';
import { DetailPageContent } from './services';

export const PROCESS_DATA: DetailPageContent[] = [
  {
    id: 'raw-material',
    title: 'Raw Material Selection',
    metaTitle: 'Mushroom Raw Material Guide India | Wheat Straw & Supplements',
    metaDescription: 'Proper raw material selection for button mushroom composting. Quality wheat straw, supplements, and casing soil standards in India.',
    h1: 'Precision Raw Material Sourcing',
    h2: 'The Secret to High-Yield Mushroom Substrates',
    description: 'Quality mushroom production starts with the right substrate. Using inferior raw materials is the leading cause of crop failure.',
    icon: ShoppingCart,
    steps: [
      { title: 'Straw Selection', content: 'Use fresh, golden-yellow wheat or paddy straw, free from moisture/rot.' },
      { title: 'Supplement Sourcing', content: 'Procure high-nitrogen supplements like poultry manure or cottonseed meal.' },
      { title: 'Gypsum Check', content: 'Ensure 95%+ purity in gypsum for proper pH stabilization.' },
      { title: 'Water Quality', content: 'Testing water for pH and mineral content to avoid toxicity.' }
    ],
    materials: ['Wheat Straw (Dry)', 'Poultry Manure', 'Gypsum', 'Urea', 'Water Testing Kit'],
    costEstimation: 'Variable; Wheat straw typically ₹500 - ₹900 per quintal in peak season.',
    commonMistakes: [
      'Using old straw that has already started decomposing.',
      'Improper storage leading to fungal infections before use.',
      'Ignoring the moisture content of the input straw.'
    ]
  },
  {
    id: 'compost-preparation',
    title: 'Compost Preparation',
    metaTitle: 'Button Mushroom Compost Preparation Guide | Phase I & II',
    metaDescription: 'Step-by-step button mushroom compost preparation. Learn Phase I fermentation and Phase II pasteurization for commercial farming.',
    h1: 'Scientific Compost Preparation',
    h2: 'Converting Waste into Nutrient-Rich Gold',
    description: 'Composting is a chemical process that breaks down lignin and cellulose into forms the mushroom mycelium can consume.',
    icon: Layers,
    steps: [
      { title: 'Pre-wetting', content: 'Soaking straw for 48 hours to ensure deep moisture absorption.' },
      { title: 'Main Stack', content: 'Creating stacks with supplements for aerobic fermentation.' },
      { title: 'Turning Schedule', content: 'Regular turning (Day 0, 4, 8, etc.) to ensure uniform heat.' },
      { title: 'Tunnel Loading', content: 'Moving to the Phase-II tunnel for peak heat and oxygenation.' }
    ],
    materials: ['Bunker/Floor', 'Front-end Loader', 'Turning Machine', 'Temperature Probes'],
    costEstimation: '₹6,000 - ₹8,000 per ton of production depending on machinery use.',
    commonMistakes: [
      'Anaerobic pockets in the stack creating foul odor.',
      'Temperature drop below 50°C during Phase-II.',
      'Inconsistent turning leading to un-fermented straw.'
    ]
  },
  {
    id: 'production-room',
    title: 'Production Room Setup',
    metaTitle: 'Mushroom Grow Room Design & Climate Control India',
    metaDescription: 'Advanced mushroom production room setup. Climate control, racking, and insulation standards for year-round farming in India.',
    h1: 'Industrial Growing Environment Control',
    h2: 'Creating the Perfect Micro-Climate for Year-Round Harvest',
    description: 'The production room (Grow Room) is a high-tech environment where CO2, Humidity, and Temperature are strictly regulated.',
    icon: Home,
    steps: [
      { title: 'Insulation', content: 'PUF panels or high-grade thermo-insulation for temp stability.' },
      { title: 'Racking', content: 'Vertical racking (5-7 tiers) to maximize square footage.' },
      { title: 'Air Handling', content: 'AHUs with HEPA filters to maintain CO2 below 1000ppm.' },
      { title: 'Drainage', content: 'Sloped floors for easy cleaning and pathogen control.' }
    ],
    materials: ['PUF Panels', 'GI Racks', 'AHU Units', 'Ducting', 'LED Grow Lights'],
    costEstimation: '₹5 - ₹8 Lakhs per 2000 sq ft room setup.',
    commonMistakes: [
      'Leaky insulation causing high electricity bills.',
      'Poor air distribution creating "hot spots" in racks.',
      'Inadequate light control for workers during harvest.'
    ]
  },
  {
    id: 'precision-harvest',
    title: 'Precision Harvesting',
    metaTitle: 'Mushroom Harvesting Techniques India | Post-Harvest Management',
    metaDescription: 'Learn precision mushroom harvesting techniques. Grading, picking, and post-harvest care for premium button mushrooms.',
    h1: 'Precision Mushroom Harvesting',
    h2: 'Techniques for Premium Quality and Maximum Rushes',
    description: 'Harvesting is an art. Timing determines the shelf life and market value of your mushrooms.',
    icon: Sprout,
    steps: [
      { title: 'Size Identification', content: 'Picking when the veil is still intact and diameter is 35-45mm.' },
      { title: 'Hand-Twist Technique', content: 'Removing mushrooms without disturbing the casing soil.' },
      { title: 'Stump Cleaning', content: 'Removing leftover stems to prevent disease (dry bubble).' },
      { title: 'Cycle Management', content: 'Timed flushes (1st, 2nd, 3rd) for consistent supply.' }
    ],
    materials: ['Picking Knives', 'Cleaning Brushes', 'Grading Baskets', 'Headlamps'],
    costEstimation: 'Labor based; usually ₹5-₹10 per kg of harvest fee.',
    commonMistakes: [
      'Waiting too long (open veils) which drops the price by 40%.',
      'Damaging the pinheads of the next flush during picking.',
      'Storing harvested mushrooms at room temperature.'
    ]
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain Management',
    metaTitle: 'Post-Harvest Cold Chain for Mushrooms | Preservation Guide',
    metaDescription: 'Effective cold chain management for mushrooms. Pre-cooling and storage techniques to double the shelf-life of fresh produce.',
    h1: 'Strategic Cold Chain Management',
    h2: 'Maintaining High-Value Inventories post-Harvest',
    description: 'Mushrooms start losing weight and color the moment they are picked. A solid cold chain is non-negotiable for commercial success.',
    icon: Zap,
    steps: [
      { title: 'Immediate Cooling', content: 'Pre-cooling to 4°C within 120 minutes of harvest.' },
      { title: 'Cold Packaging', content: 'Packing into moisture-resistant crates in a chilled environment.' },
      { title: 'Storage Management', content: 'FIFO (First-In, First-Out) inventory control in cold rooms.' },
      { title: 'Transport Link', content: 'Sealing the cargo in pre-cooled insulated vehicles.' }
    ],
    materials: ['Blast Chillers', 'Cold Storage Unit', 'Data Loggers', 'Thermal Blankets'],
    costEstimation: 'Energy costs: Approx ₹2,000 - ₹5,000 per month for small units.',
    commonMistakes: [
      'Opening cold room doors frequently causing condensation.',
      'Mixing fresh harvest with old stock (temperature shock).',
      'Over-packing causing crushing at the bottom of crates.'
    ]
  },
  {
    id: 'market-linkage',
    title: 'Market Linkage',
    metaTitle: 'Mushroom Market Linkage India | Business Sales Strategies',
    metaDescription: 'Expert market linkage strategies for mushroom farmers. Connect with mandi buyers, retailers, and exporters across India.',
    h1: 'Industrial Market Linkage Strategies',
    h2: 'Converting Fresh Produce into Sustainable Revenue Streams',
    description: 'Sustainable profit comes from diverse sales channels—Mandi, Direct-to-Consumer, and Institutional sales.',
    icon: TrendingUp,
    steps: [
      { title: 'Price Analysis', content: 'Daily monitoring of Mandi prices via apps and networks.' },
      { title: 'Direct Retail', content: 'Supplying to local supermarkets and high-end restaurants.' },
      { title: 'Institutional Tie-ups', content: 'Contracts with hotels and frozen food processors.' },
      { title: 'Digital Presence', content: 'Listing on B2B platforms like Indiamart and our internal exchange.' }
    ],
    materials: ['Sales Brochures', 'B2B Accounts', 'Logistics Contracts', 'Invoicing Software'],
    costEstimation: 'Marketing budget: 2-5% of total revenue suggested.',
    commonMistakes: [
      'Over-relying on a single buyer.',
      'Inconsistent quality leading to rejection at retail counters.',
      'Lack of proper invoicing and credit management.'
    ]
  }
];
