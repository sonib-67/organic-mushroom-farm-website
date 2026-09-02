'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Building2,
  Cpu,
  Layers,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Clock,
  Flame,
  Award,
  Droplets,
  Calculator,
  AlertTriangle,
  Send,
  Loader2,
  FileSpreadsheet,
  DollarSign,
  Wrench,
  Boxes,
  Compass,
  Wind,
  Zap,
  Sparkles,
  Info,
  Maximize2,
  Check,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

interface ProjectModelConfig {
  id: string;
  name: string;
  badge: string;
  roomSize: string;
  carpetArea: string;
  bagCapacity: string;
  pufSpecs: string;
  hvacSpecs: string;
  rackSpecs: string;
  airFlow: string;
  powerLoad: string;
  monthlyYield: string;
  estCost: string;
  nhbSubsidy: string;
  recommendedFor: string;
}

const ProjectSpecsInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedModel, setSelectedModel] = useState<string>('room-18x60');
  const { openConsultationModal, openQuoteCalculatorModal, openQuickOrderModal } = useAppModals();

  // Lead capture state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: 'Commercial 18x60 ft High-Yield Grow Room',
    landStatus: 'Land available (Ready for construction)',
    message: '',
  });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const farmModels: Record<string, ProjectModelConfig> = {
    'pilot-500': {
      id: 'pilot-500',
      name: 'Pilot Commercial Shed (500 Bags)',
      badge: 'Starter / Semi-Controlled',
      roomSize: '15 ft × 25 ft × 10 ft',
      carpetArea: '375 Sq. Ft.',
      bagCapacity: '500 – 600 Bags (10kg each)',
      pufSpecs: '60mm – 80mm High-Density PUF Panels (40 kg/m³)',
      hvacSpecs: '2.5 – 3.0 TR High-Static Ductable / Split AC',
      rackSpecs: '3-Tier Modular Galvanized Iron (GI) Frames',
      airFlow: '800 – 1,200 CFM with Manual Fresh Air Dampers',
      powerLoad: '4.5 kW (Single / 3-Phase)',
      monthlyYield: '280 – 350 kg / month',
      estCost: '₹3.5 Lakh – ₹5.5 Lakh',
      nhbSubsidy: 'Eligible under State Horticulture Schemes (25%–40%)',
      recommendedFor: 'New entrepreneurs, testing local market, semi-commercial trial runs.',
    },
    'room-18x40': {
      id: 'room-18x40',
      name: 'Standard Commercial Unit (1,600 Bags)',
      badge: 'Most Popular for Single Rooms',
      roomSize: '18 ft × 40 ft × 12 ft',
      carpetArea: '720 Sq. Ft.',
      bagCapacity: '1,500 – 1,700 Bags (10kg each)',
      pufSpecs: '80mm Continuous Cam-Lock PUF Panels (0.022 W/m·K)',
      hvacSpecs: '5.5 – 7.5 TR DX Precision AHU with Scroll Compressor',
      rackSpecs: '5-Tier Heavy Duty GI Slotted Channels (350 kg/m² load)',
      airFlow: '2,200 – 2,800 CFM with Modulating CO₂ Actuator',
      powerLoad: '9.5 kW (3-Phase 415V)',
      monthlyYield: '850 – 1,100 kg / month',
      estCost: '₹9.5 Lakh – ₹14.5 Lakh',
      nhbSubsidy: 'NHB Scheme II (25% to 35% Credit-Linked Back-Ended Subsidy)',
      recommendedFor: 'Commercial growers targeting steady wholesale/retail supply in nearby cities.',
    },
    'room-18x60': {
      id: 'room-18x60',
      name: 'High-Yield Commercial Room (2,400 Bags)',
      badge: 'Maximum Spatial Efficiency',
      roomSize: '18 ft × 60 ft × 13.5 ft',
      carpetArea: '1,080 Sq. Ft.',
      bagCapacity: '2,400 – 2,600 Bags (10kg each)',
      pufSpecs: '80mm – 100mm PUF Panels + Anti-Fungal Food Grade Coating',
      hvacSpecs: '8.5 – 11.0 TR Variable Air Handling Unit with Cooling Coils',
      rackSpecs: '5 to 6-Tier 2-Row Vertical Rack Layout with Walkway Aisles',
      airFlow: '3,200 – 4,000 CFM with Pre-Filters & NDIR CO₂ Sensors',
      powerLoad: '14.0 kW (3-Phase)',
      monthlyYield: '1,400 – 1,800 kg / month',
      estCost: '₹14.5 Lakh – ₹21.0 Lakh',
      nhbSubsidy: 'NHB Commercial Horticulture Mission (Up to 35% Subsidy)',
      recommendedFor: 'Serious commercial operators aiming for maximum ROI per square foot.',
    },
    'industrial-4room': {
      id: 'industrial-4room',
      name: 'Industrial 4-Room Complex + Bulk Bunker',
      badge: 'Complete Turnkey Ecosystem',
      roomSize: '4 Rooms (18×60 ft each) + Phase-II Bunker Tunnel',
      carpetArea: '6,500 – 10,000 Sq. Ft. Total Footprint',
      bagCapacity: '10,000+ Bags in Staggered Rotation Cycles',
      pufSpecs: '100mm PUF Cold Storage Grade with Cam-Locks',
      hvacSpecs: 'Multi-Stage Central Chiller / DX AHU System with SCADA PLC',
      rackSpecs: '6-Tier Custom Engineered Structural Steel Racks',
      airFlow: 'Centralized Micro-Ducting (16,000+ CFM Total Capacity)',
      powerLoad: '45 – 65 kW (Industrial 3-Phase + DG Backup)',
      monthlyYield: '6,000 – 8,000 kg / month (Continuous Daily Harvest)',
      estCost: '₹65 Lakh – ₹1.10 Crore',
      nhbSubsidy: 'MIDH & NHB Cold Chain Subsidy (₹30 Lakh to ₹50 Lakh Grant)',
      recommendedFor: 'Agri-business enterprises, corporate farms, and large investor projects.',
    },
  };

  const currentSpec = farmModels[selectedModel];

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(captchaAnswer, 10) !== 9) {
      setFormError('Please answer the security question correctly (4 + 5 = 9).');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please enter your name and contact phone number.');
      return;
    }

    setSubmitting(true);
    setFormError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          service: 'PROJECT_SPECS',
          projectType: formData.projectType,
          message: `Project Specs Inquiry: Model=${currentSpec.name}, LandStatus=${formData.landStatus}, Location=${formData.location}. Notes: ${formData.message}`,
          subject: `New Project Specs & DPR Inquiry from ${formData.name}`,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err: any) {
      setFormError(err.message || 'Could not submit inquiry. Please WhatsApp or call us directly at 9203544140.');
    } finally {
      setSubmitting(false);
    }
  };

  const technicalPillars = [
    {
      icon: Building2,
      title: 'Thermal Envelope & PUF Insulation',
      spec: '80mm – 100mm Cam-Lock Panels',
      desc: 'High-density rigid polyurethane foam (PUF) with 40 ± 2 kg/m³ density and 0.022 W/m·K thermal conductivity. Food-grade pre-painted galvanized steel (PPGI) facings prevent thermal leakage, cutting refrigeration power bills by up to 40%.',
      highlights: ['Cam-lock tongue & groove interlocking', 'Zero thermal bridging', 'Antibacterial food-grade coating'],
    },
    {
      icon: Wind,
      title: 'Precision HVAC & Modulating AHU',
      spec: 'Daikin / Blue Star DX Scroll Systems',
      desc: 'Engineered air handling units with high-static backward-curved blowers, micro-grooved inner copper cooling coils, and automated NDIR CO₂ damper actuators. Delivers laminar air distribution without dry blast zones.',
      highlights: ['NDIR CO₂ monitoring (<1,000 ppm)', 'EU-4 pre-filter + EU-7 fine filter', '15–20 Air Changes/Hour (ACH)'],
    },
    {
      icon: Layers,
      title: 'Vertical Space Maximization',
      spec: '4 to 6-Tier Galvanized Iron (GI) Racks',
      desc: 'Structural slotted C-channel racks with hot-dip galvanized coating (275 GSM) resistant to 95% relative humidity. Engineered for 350+ kg/m² load capacity to support dense 10kg compost bags across vertical height.',
      highlights: ['85cm vertical tier clearance', 'Central & lateral harvest aisles', 'Corrosion-proof 15-year life'],
    },
    {
      icon: Droplets,
      title: 'Ultrasonic Micro-Fogging System',
      spec: '0.5 – 5.0 Micron Aerosolized Mist',
      desc: 'High-frequency ultrasonic transducers or high-pressure brass nozzle misting systems operating at 70 Bar. Maintains 85%–95% RH continuously without depositing water droplets on delicate mushroom cap velums.',
      highlights: ['Prevents bacterial blotch', 'Digital humidistat control', 'TDS <150 ppm RO water loop'],
    },
    {
      icon: Flame,
      title: 'Phase-I & Phase-II Bunker Engineering',
      spec: 'Bulk Pasteurization Spigot Floors',
      desc: 'Slotted or spigot-nozzle aeration concrete floors with high-pressure centrifugal blowers. Enables uniform 58°C–60°C peak steam pasteurization and 48°C–52°C conditioning for zero-ammonia high-protein compost.',
      highlights: ['<5 ppm free ammonia target', 'Automated PT100 temperature sensors', 'High biological efficiency (>20%)'],
    },
    {
      icon: ShieldCheck,
      title: 'Seamless Cleanroom Flooring & Drainage',
      spec: 'Self-Leveling Epoxy / Coved PU Screed',
      desc: 'Jointless, non-porous 3mm heavy-duty polyurethane floor with 100mm coved wall skirting. Central 1:50 slope with deep U-trap insect-proof water seals prevents stagnant puddles and pest infiltration.',
      highlights: ['Resistant to harsh sanitisers', 'Zero crack harboring for molds', 'Anti-slip textured finish'],
    },
  ];

  const commonMistakes = [
    {
      title: 'Using Residential Split ACs Instead of High-Static AHUs',
      problem: 'Domestic ACs lack fresh air intake capabilities and freeze up in 90% humidity.',
      consequence: 'Severe CO₂ toxicity (>2,500 ppm) leads to leggy stems, tiny pinhead caps, and frequent compressor breakdowns.',
      solution: 'Precision Air Handling Units (AHU) with fresh-air modulating dampers and hydrophilic blue-fin cooling coils.',
    },
    {
      title: 'Substandard Insulation (Local Thermocol or Low-Density Foam)',
      problem: 'Gaps between unsealed sheets cause massive thermal leakage in summer heatwaves.',
      consequence: 'Compressors run 24/7 without tripping, skyrocketing monthly electricity bills and causing temperature spikes.',
      solution: 'Continuous 80mm–100mm high-density PUF cam-lock panels with silicone food-grade joint sealing.',
    },
    {
      title: 'Poor Airflow Dynamics & Dead Air Pockets',
      problem: 'Installing standard axial fans blowing directly onto the top rack.',
      consequence: 'Top shelf dries out while bottom shelves suffocate in stagnant moisture, causing green mold (Trichoderma).',
      solution: 'Perforated poly-duct air distribution delivering uniform laminar air velocity (0.15–0.25 m/s) to all tiers.',
    },
    {
      title: 'Non-Standardized Civil Construction Without DPR',
      problem: 'Building random room dimensions without calculating bag counts, rack widths, or harvest aisles.',
      consequence: '30%–40% wasted floor area, awkward labor movement, and rejection of bank loan / NHB subsidy applications.',
      solution: 'Bankable Detailed Project Reports (DPR) with AutoCAD civil blueprints and NHB-compliant architectural layouts.',
    },
  ];

  const technicalParametersMatrix = [
    {
      parameter: 'Room Dimensions (Standard Single Room)',
      specValue: '18 ft (W) × 60 ft (L) × 13.5 ft (H)',
      importance: 'Optimizes dual 4.5 ft rack rows with 3 ft central & lateral walkways.',
    },
    {
      parameter: 'Wall & Ceiling Insulation',
      specValue: '80mm to 100mm High-Density PUF (40 ± 2 kg/m³)',
      importance: 'Maintains 14°C–18°C temperature with minimal compressor runtime.',
    },
    {
      parameter: 'Air Changes per Hour (ACH)',
      specValue: '12 – 20 ACH (Variable Speed Inverter Drive)',
      importance: 'Quickly exhausts metabolic CO₂ during explosive pinhead flushing.',
    },
    {
      parameter: 'CO₂ Control Range',
      specValue: 'Spawn Run: 2,000–5,000 ppm | Pinning/Fruiting: 800–1,000 ppm',
      importance: 'Determines cap-to-stem ratio and prevents cap deformation.',
    },
    {
      parameter: 'Relative Humidity (RH %)',
      specValue: 'Spawn Run: 70%–80% | Pinning: 90%–95% | Harvesting: 85%–88%',
      importance: 'Controlled by ultrasonic foggers with digital microcontroller feedback.',
    },
    {
      parameter: 'Rack Shelving Specification',
      specValue: 'Hot-Dip Galvanized Iron (GI) 5-Tier Heavy Duty (350 kg/m²)',
      importance: 'Prevents structural collapse under heavy saturated compost bags.',
    },
    {
      parameter: 'Air Filtration Grade',
      specValue: 'Primary Pre-filter (G4/EU4) + Fine Dust Filter (F7/EU7)',
      importance: 'Blocks 99% of airborne competitor fungal spores and insect pests.',
    },
    {
      parameter: 'Flooring & Wall Coving',
      specValue: '3mm Seamless Antibacterial PU / Heavy Epoxy with 100mm Coving',
      importance: 'Enables high-pressure washdowns and 100% sterile room sanitation.',
    },
  ];

  const faqs = [
    {
      q: 'Why are technical project specifications critical before starting civil construction?',
      a: 'A commercial mushroom farm is an enclosed bioclimatic laboratory. Unlike normal warehouses, room dimensions must match rack tier heights, blower CFM, cooling coil surface areas, and air diffusion vectors. Building without engineered specifications leads to thermal leakage, dead air spots, mold contamination, and 2x to 3x higher operational power costs.',
    },
    {
      q: 'What thickness of PUF panels is recommended for button mushroom farming in India?',
      a: 'For tropical Indian climates (where summer ambient temperatures exceed 40°C–45°C), we recommend 80mm PUF panels for walls and 100mm PUF for ceilings with continuous cam-lock tongue-and-groove joints. In extreme hot zones (Rajasthan, Gujarat, Central India), 100mm on all sides ensures the HVAC system operates at peak efficiency with minimal compressor stress.',
    },
    {
      q: 'Why can’t I use standard home split air conditioners for commercial mushroom farming?',
      a: 'Standard residential split ACs recirculate 100% of room air without bringing in filtered fresh air to purge CO₂. When mushrooms fruit, they exhale heavy CO₂ that suffocates pinheads. Furthermore, domestic cooling coils corrode rapidly in 90%+ RH and freeze into solid ice blocks. Commercial mushroom AHUs feature hydrophilic blue fins, high-static blowers, and motorized CO₂ dampers.',
    },
    {
      q: 'Can these project blueprints and specifications be used for Bank Loans and NHB Subsidies?',
      a: 'Yes, 100%. Our Detailed Project Reports (DPR) and technical blueprints adhere to National Horticulture Board (NHB), MIDH, and NABARD commercial norms. They include complete civil drawings, machinery schedules, recurring raw material cash-flows, 5-year DSCR financial projections, and environmental compliance documentation required by nationalized banks.',
    },
    {
      q: 'What is the typical timeframe required to set up a commercial mushroom facility with these specs?',
      a: 'A single to dual-room commercial facility (18×40 or 18×60 ft) takes approximately 45 to 60 days from civil floor foundation to commissioning. An industrial 4-room complex with a dedicated Phase-II bulk composting tunnel takes between 90 to 120 days for complete turnkey erection, testing, and initial trial batch inoculation.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services/turnkey-setup" className="hover:text-emerald-500 transition-colors">
              Turnkey Setup
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Project Specifications & Blueprints</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Compass size={14} /> Commercial Farm Architecture & Engineering
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-5xl mx-auto leading-tight">
              The Blueprint of a High-Yield Farm: <br />
              <span className="gradient-text font-black">Technical Project Specifications</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
              Precision engineering, thermal envelope insulation, and mathematical airflow dynamics are the secrets to industrial-scale profitability. Eliminate expensive infrastructure mistakes with standardized project specs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#specs-configurator"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-emerald-600/25"
              >
                <Calculator size={16} /> Explore Room Models & Specs <ArrowRight size={14} />
              </a>
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20need%20technical%20project%20specifications%20and%20civil%20blueprints%20for%20a%20commercial%20mushroom%20farm."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} /> WhatsApp Technical Team
              </a>
              <a
                href="#enquiry-form"
                className="px-6 py-3.5 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-900 dark:text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
              >
                <FileText size={16} /> Request Bankable DPR
              </a>
            </div>
          </motion.div>
        </section>

        {/* Quick Highlights Strip */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 block mb-0.5">
                80–100mm
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Cam-Lock PUF Panels</span>
              <span className="text-[10px] text-slate-400">0.022 W/m·K Thermal Rating</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 block mb-0.5">
                &lt;1,000 ppm
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">CO₂ Modulating AHU</span>
              <span className="text-[10px] text-slate-400">Automatic Fresh Air Flushing</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 block mb-0.5">
                350+ kg/m²
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Heavy Duty GI Racks</span>
              <span className="text-[10px] text-slate-400">Hot-Dip Galvanized 275 GSM</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 block mb-0.5">
                25%–35%
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">NHB / MIDH Subsidy</span>
              <span className="text-[10px] text-slate-400">Credit-Linked Capital Grant</span>
            </div>
          </div>
        </section>

        {/* Deep Article Foundation Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-16">
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4 py-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 tracking-tight m-0">
                  Farming is Now an Exact Science
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 mb-0">
                  Why commercial profitability is built on paper long before the first compost bag is spawned.
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                Many aspiring growers believe that a basic shed and a standard domestic air conditioner are enough to start a commercial mushroom farm. However, when you are aiming for maximum biological efficiency, low contamination rates, and consistent year-round harvests, guesswork simply will not cut it.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Cultivating high-demand crops like <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">White Button</Link>, <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Oyster</Link>, or <Link href="/services/milky-mushroom" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Milky mushrooms</Link> on a commercial level requires complete mastery over your microclimate. A slight fluctuation in CO₂ levels, a sudden drop in relative humidity, or stagnant airflow dead-zones will instantly compromise an entire flush.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">
                  The Multi-Tier Synergy Rule:
                </strong>
                A successful commercial room must balance five interdependent engineering variables: <strong>thermal resistance (R-value)</strong>, <strong>laminar air velocity (0.15–0.25 m/s)</strong>, <strong>microbial air filtration (EU-4 + EU-7)</strong>, <strong>micro-fog droplet suspension (&lt;5 microns)</strong>, and <strong>structural rack load capacity</strong>. If even one specification fails, the farm suffers from bacterial blotch, high power bills, or stunted crops.
              </div>
            </div>
          </div>
        </section>

        {/* 6 Core Technical Pillars */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Wrench size={12} /> Engineering Standards
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              6 Core Pillars of Commercial <span className="gradient-text font-black">Project Engineering</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              Every detail in our project blueprints is mathematically engineered for peak biological output and lowest utility overheads.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 md:p-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <pillar.icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                    {pillar.spec}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-1.5">
                  {pillar.highlights.map((hl, hli) => (
                    <div key={hli} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Room Configurator & Specs Inspector */}
        <section id="specs-configurator" className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="p-6 md:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-slate-900/5 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Calculator size={13} /> Blueprint & Model Selector
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Interactive Project <span className="gradient-text font-black">Specs Configurator</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Select a standard commercial room blueprint to inspect detailed engineering dimensions, HVAC loads, yields, and capital requirements.
              </p>
            </div>

            {/* Model Selector Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
              {Object.values(farmModels).map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all border ${
                    selectedModel === m.id
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/30 scale-[1.02]'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider block mb-1 ${
                      selectedModel === m.id ? 'text-emerald-100' : 'text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {m.badge}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm leading-snug">{m.name}</h4>
                  <span
                    className={`text-[10px] block mt-1 ${
                      selectedModel === m.id ? 'text-emerald-100' : 'text-slate-400'
                    }`}
                  >
                    {m.bagCapacity}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Model Technical Card */}
            <div className="bg-white dark:bg-slate-850 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 inline-block mb-1.5">
                    {currentSpec.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900">
                    {currentSpec.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Recommended For: {currentSpec.recommendedFor}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Project Investment</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {currentSpec.estCost}
                  </span>
                </div>
              </div>

              {/* Grid of Specs */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-6">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase mb-1">
                    <Maximize2 size={14} className="text-emerald-500" />
                    <span>Room Dimensions & Area</span>
                  </div>
                  <div className="font-bold text-sm dark:text-white text-slate-900">{currentSpec.roomSize}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Carpet: {currentSpec.carpetArea}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase mb-1">
                    <Boxes size={14} className="text-emerald-500" />
                    <span>Bag & Tier Capacity</span>
                  </div>
                  <div className="font-bold text-sm dark:text-white text-slate-900">{currentSpec.bagCapacity}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{currentSpec.rackSpecs}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase mb-1">
                    <Cpu size={14} className="text-emerald-500" />
                    <span>HVAC & Cooling System</span>
                  </div>
                  <div className="font-bold text-sm dark:text-white text-slate-900">{currentSpec.hvacSpecs}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{currentSpec.airFlow}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase mb-1">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span>PUF Insulation Specs</span>
                  </div>
                  <div className="font-bold text-sm dark:text-white text-slate-900">{currentSpec.pufSpecs}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Tongue & Groove Cam-Lock Panels</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase mb-1">
                    <Zap size={14} className="text-emerald-500" />
                    <span>Connected Power Load</span>
                  </div>
                  <div className="font-bold text-sm dark:text-white text-slate-900">{currentSpec.powerLoad}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Energy-Optimized Inverter DX Coils</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase mb-1">
                    <Award size={14} className="text-emerald-500" />
                    <span>Expected Monthly Yield</span>
                  </div>
                  <div className="font-bold text-sm text-emerald-600 dark:text-emerald-400">
                    {currentSpec.monthlyYield}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Across 3 Flush Harvest Cycles</div>
                </div>
              </div>

              {/* Subsidy Banner */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <DollarSign className="text-emerald-600 dark:text-emerald-400 shrink-0" size={24} />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold dark:text-white text-slate-900 block">
                      Government Subsidy Eligibility:
                    </strong>
                    <span className="text-xs text-slate-600 dark:text-slate-300">{currentSpec.nhbSubsidy}</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20apply%20for%20NHB%20Subsidy%20for%20a%20commercial%20mushroom%20farm."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shrink-0"
                >
                  <MessageCircle size={14} /> Subsidy Guidance
                </a>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                  currentSpec.name
                )}%20specifications%20and%20civil%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-transform hover:scale-105"
              >
                <MessageCircle size={16} /> Get WhatsApp Quote for {currentSpec.name}
              </a>
              <button
                onClick={() => openQuoteCalculatorModal()}
                className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Calculator size={16} /> Custom Project Calculator
              </button>
            </div>
          </div>
        </section>

        {/* Technical Parameters Matrix Table */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
              <FileSpreadsheet size={12} /> Master Data Sheet
            </div>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Standard Commercial <span className="gradient-text font-black">Parameter Matrix</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto">
              Engineering benchmarks followed across our turnkey climate-controlled mushroom installations in India.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-lg">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-4 sm:p-5">Engineering Parameter</th>
                  <th className="p-4 sm:p-5">Standard Specification</th>
                  <th className="p-4 sm:p-5">Agronomic & Biological Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-slate-600 dark:text-slate-300">
                {technicalParametersMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">{row.parameter}</td>
                    <td className="p-4 sm:p-5 font-semibold text-emerald-600 dark:text-emerald-400">
                      {row.specValue}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400">{row.importance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Avoid Expensive Mistakes Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="p-6 md:p-10 rounded-3xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/20 backdrop-blur-md shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <AlertTriangle size={13} /> Risk Mitigation
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Avoid Expensive <span className="text-amber-600 dark:text-amber-400">Infrastructure Mistakes</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                The most common reason new agri-businesses fail is poor infrastructure planning. Standardized project specs eliminate guesswork.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, idx) => (
                <div
                  key={idx}
                  className="p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/80 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-red-600 dark:text-red-400 mb-2 flex items-start gap-2">
                      <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                      <span>{mistake.title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                      <strong>The Flaw:</strong> {mistake.problem}
                    </p>
                    <p className="text-xs text-amber-700 dark:text-amber-300/80 mb-3 bg-amber-500/10 p-2.5 rounded-xl">
                      <strong>Consequence:</strong> {mistake.consequence}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-start gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
                    <span>Engineered Solution: {mistake.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture / DPR Request Form */}
        <section id="enquiry-form" className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Request Detailed Project <span className="gradient-text font-black">Specs & DPR Blueprints</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Fill in your project details to receive a customized infrastructure layout, machinery bill of quantities (BOQ), and bankable DPR blueprint.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 text-center rounded-3xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-xl"
              >
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black dark:text-white text-slate-900 mb-2">
                  Project Request Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed max-w-md mx-auto">
                  Our senior farm engineers and project consultants are reviewing your location and room capacity requirements. We will contact you via WhatsApp / Call with layout diagrams and cost estimations.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs transition-transform hover:scale-105"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl relative"
              >
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  {formError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 p-4 rounded-xl text-xs font-medium flex items-start gap-2">
                      <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>{formError}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Farm Setup Location (City & State) *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Pune, Maharashtra / Jaipur, Rajasthan"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Target Commercial Model
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      >
                        <option value="Pilot 500-Bag Commercial Unit (₹3.5L - ₹5.5L)">
                          Pilot 500-Bag Commercial Unit (₹3.5L - ₹5.5L)
                        </option>
                        <option value="Commercial 18x40 ft Single Room (₹9.5L - ₹14.5L)">
                          Commercial 18x40 ft Single Room (₹9.5L - ₹14.5L)
                        </option>
                        <option value="High-Yield 18x60 ft Single Room (₹14.5L - ₹21L)">
                          High-Yield 18x60 ft Single Room (₹14.5L - ₹21L)
                        </option>
                        <option value="Industrial 4-Room Complex + Bunker (₹65L - ₹1.10 Cr)">
                          Industrial 4-Room Complex + Bunker (₹65L - ₹1.10 Cr)
                        </option>
                        <option value="Custom Multi-Species Turnkey Setup">Custom Multi-Species Turnkey Setup</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Land / Shed Availability
                      </label>
                      <select
                        name="landStatus"
                        value={formData.landStatus}
                        onChange={(e) => setFormData({ ...formData, landStatus: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      >
                        <option value="Land available (Ready for construction)">
                          Land available (Ready for construction)
                        </option>
                        <option value="Existing building / shed to be converted">
                          Existing building / shed to be converted
                        </option>
                        <option value="Searching / Leasing agricultural land">Searching / Leasing agricultural land</option>
                        <option value="Planning for future (within 6 months)">Planning for future (within 6 months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Project Notes / Specific Questions (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your land dimensions, target mushroom varieties, power connection, or bank loan requirements..."
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Math Anti-Spam Security Field */}
                  <div className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-emerald-500" />
                      <span className="text-xs font-bold dark:text-slate-200 text-slate-700">
                        Security Verification: What is 4 + 5 = ? *
                      </span>
                    </div>
                    <input
                      type="number"
                      required
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      placeholder="Answer"
                      className="w-24 bg-white dark:bg-slate-800 border border-slate-300 dark:border-white/20 rounded-lg px-3 py-1.5 text-xs text-center font-bold text-emerald-600 dark:text-emerald-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} /> Submitting Project Request...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Submit Project Specs & DPR Request
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </section>

        {/* Technical FAQ Accordion */}
        <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Frequently Asked <span className="gradient-text font-black">Engineering Questions</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Clear answers on PUF thickness, HVAC airflow synchronization, civil blueprints, and bank loan approvals.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm dark:text-white text-slate-900 flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 text-emerald-500 shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-center mb-8">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">
              Ready to Build Your Commercial Agribusiness?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Get precision engineering blueprints, machinery BOQs, and turnkey project execution from Organic Mushrooms Farm to launch your high-yield farm right.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20with%20your%20engineering%20team%20for%20a%20commercial%20mushroom%20farm%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white text-emerald-800 font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-emerald-50 transition-all shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={18} /> WhatsApp 9203544140
              </a>
              <a
                href="tel:9203544140"
                className="px-8 py-4 rounded-full bg-emerald-950/40 hover:bg-emerald-950/60 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all border border-white/20 flex items-center gap-2"
              >
                <Phone size={18} /> Call +91 9203544140
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Modals & Sticky Buttons */}
      <HomeModals />
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <AIChatWidget />
      <Footer />
    </div>
  );
};

export const ProjectSpecsPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <ProjectSpecsInner />
    </ModalProvider>
  );
};
