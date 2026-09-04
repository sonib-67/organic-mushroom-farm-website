# Organic Mushrooms Farm - Next.js Production Implementation Blueprint

## Architecture Specification (Pure Next.js App Router)
- **Framework**: Next.js 14+ / 15+ (App Router)
- **Strict Directory Layout**: No `src/` directory. Root structure: `app/`, `components/`, `lib/`, `data/`, `public/`.
- **Styling**: Tailwind CSS with standard semantic design tokens.
- **Animations**: `framer-motion` / `motion` for fluid micro-interactions and scroll reveals.
- **SEO & Structured Data**: Server-rendered metadata, JSON-LD Schema (Organization, WebSite, LocalBusiness, FAQPage, Product, BreadcrumbList), Dynamic OpenGraph, Sitemap, Robots, and Web App Manifest.

---

## Master Next.js Prompt (Part 1: Foundational Architecture & Core Engine)

```markdown
### SYSTEM ROLE & OBJECTIVE
You are a senior Next.js full-stack architect specializing in ultra-high-performance agricultural enterprise websites and Core Web Vitals optimization. Your task is to build the complete, production-grade homepage for "Organic Mushrooms Farm" using Next.js App Router (strict rule: NO `src/` directory, pure `app/` structure, and zero React-Vite legacy patterns).

### STRICT DIRECTORY STRUCTURE
- `app/layout.tsx` (Root layout, Google Fonts: Plus Jakarta Sans / Playfair Display, global SEO, Theme provider)
- `app/page.tsx` (Complete modular homepage assembling all verified sections)
- `app/sitemap.ts` (Dynamic XML sitemap generator with priority & changefreq)
- `app/robots.ts` (Robots.txt generator with indexing & crawl directives)
- `app/manifest.ts` (PWA web app manifest generator)
- `app/not-found.tsx` (Custom 404 page)
- `app/error.tsx` (Error boundary component)
- `components/` (Extracted modular UI components: Hero, Stats, VirtualTour, ROIAnalytics, SOPTimeline, Testimonials, FAQAccordion, CityGrid, GlobalReach, ContactForm, Footer)
- `lib/` (SEO helpers, Schema generators, ROI calculation utility)
- `data/` (Static datasets for FAQs, SOP cycles, models, testimonials, and pan-India city coverage)
- `public/` (Static assets, icons, and media files)

### DESIGN SYSTEM & COLOR PALETTE
- **Primary Emerald/Forest**: `#064e3b` (Emerald 900), `#047857` (Emerald 700), `#10b981` (Emerald 500)
- **Mycelium Gold/Amber**: `#d97706` (Amber 600), `#f59e0b` (Amber 500), `#fef3c7` (Amber 100)
- **High-End Neutrals**: Background `#f8fafc` (Slate 50), Surface `#ffffff`, Text `#0f172a` (Slate 900), Muted `#475569` (Slate 600), Borders `#e2e8f0` (Slate 200)
- **Typography Scale**: High-contrast display pairing (Display: `Playfair Display` or `Outfit`, Body: `Plus Jakarta Sans`)
- **Spacing Math**: 8pt rhythmic grid, outer card padding >= inner child margins, rounded corners capped at `rounded-2xl` (16px) with smooth 1px slate borders.

### HOMEPAGE CORE SECTIONS TO IMPLEMENT
1. **Header & Navigation**: Sticky blur navbar with Logo, Navlinks (Services, Training, Setup, ROI Calculator, Subsidy, B2B), Phone Hotline (9203544140), WhatsApp CTA, and Quick Enquiry button.
2. **Hero Section**: High-impact H1 ("Expert Mushroom Farming Training & Setup – Complete Solutions for All Mushroom Types"), value proposition tags, dual primary CTAs (Enquiry Now, WhatsApp Us), and live trust badge metrics (1.5k+ Active Units, 98.93% Global Success Rate).
3. **Ecosystem Workflow**: 6-step visual pipeline (Raw Material -> Compost Prep -> Production Room -> Precision Harvest -> Cold Chain -> Market Linkage).
4. **Virtual 360° Tour**: Interactive video/3D preview section explaining industrial PUF panels, HVAC, and sterile lab protocols.
5. **Infrastructure Advantages**: 6-pillar grid (Cost Efficiency 15-25% Savings, Smart B2B Pricing, Pan-India & Global Execution, Price Match Guarantee, Certified Quality, Reliable Partnership).
6. **Investment & Turnkey Models**: 3-tier interactive cards (Starter Package ₹2-12L, Standard Commercial ₹15-42L, Industrial Unit ₹1.5-2.5Cr) with space, yield, and automation details.
7. **Commercial Varieties Matrix**: Detailed comparison table (Button, Oyster, Milky, Shiitake & Lion's Mane) highlighting difficulty, market segment, and temperature requirements.
8. **Interactive ROI Estimator**: Live sliders/inputs for Bags/Beds (e.g. 2000), Selling Price (₹120/kg), Operational Cost (₹40/kg) outputting Cycle Net Profit and Payback Period dynamically.
9. **Precision Climate Parameters**: 4 metric cards (Production Temp 14-18°C, Humidity 85-95%, CO2 <1000 ppm, Spawn Run 24-26°C).
10. **60-Day Commercial Cycle SOP**: Step-by-step 7-phase timeline (Phase-I Composting, Phase-II Pasteurization, Filling & Spawning, Spawn Run, Casing Application, Pinning Initiation, Cropping).
11. **Commercial Compost Units**: 20T (2000 bags) and 30T (3000 bags) industrial specs with CapEx breakdown.
12. **Farmer Testimonials & Global Marketplace**: Verified grower reviews and B2B trade listing (Spawn Seeds, Fresh Mushrooms, Dry Export).
13. **India Agro-Academy & Training Verticals**: State-wise curriculum (MP, UP, Delhi NCR, Maharashtra), Online vs. Physical Academy comparison, and Practical Cultivation Syllabus.
14. **Comprehensive FAQ Accordion**: 20+ expandable questions with high-volume search queries and complete answers.
15. **Pan-India & International Coverage Index**: Searchable/categorized index covering all 28 states, 8 UTs, 800+ tier-2/tier-3 cities, and international countries (USA, UK, Australia, UAE, Europe).
16. **Lead Generation Form & Footer**: Direct inquiry submission form, full site link hierarchy, legal notices, and copyright.

### SEO & STRUCTURED DATA MANDATES
- Next.js Metadata API with title, meta description, openGraph, twitter cards, canonical URLs, and hreflang tags.
- Inject structured JSON-LD schemas:
  - `Organization` (Name, logo, contactPoint, founders, address)
  - `WebSite` (URL, potentialAction SearchAction)
  - `LocalBusiness` / `AgricultureService` (Geo coordinates, opening hours, areaServed)
  - `FAQPage` (20+ Question & Answer entities)
  - `Product` (Turnkey setup models and spawn culture seeds)
  - `BreadcrumbList` (Home navigation breadcrumb trail)
```

---

## Master Next.js Prompt (Part 2: High-Performance Components & Interactive Engines)

```markdown
### SYSTEM ROLE & FOCUS (PHASE 2: 10% IMPLEMENTATION DEEP DIVE)
You are building the core interactive UI components, design tokens, mathematical ROI engine, and live simulation systems for the Organic Mushrooms Farm Next.js App Router application.

### DIRECTORY & FILE TARGETS (Strictly NO `src/`)
- `components/Navbar.tsx` (Glassmorphism backdrop-blur header, mobile menu drawer, direct WhatsApp/Call triggers)
- `components/HeroSection.tsx` (Responsive visual hero, badge trust counters, floating CTA group)
- `components/EcosystemFlow.tsx` (6-phase agricultural pipeline cards with SVG connection flows)
- `components/VirtualTour360.tsx` (Embedded 360° video inspection and sterile cleanroom technical breakdown)
- `components/InfrastructureGrid.tsx` (6 value pillars: In-house PUF panels, B2B wholesale pricing, global logistics)
- `components/InvestmentModels.tsx` (Interactive tabbed or card view for Starter, Standard Commercial, Industrial Units)
- `components/MushroomVarietiesTable.tsx` (Dense responsive table comparing Button, Oyster, Milky, Shiitake & Lion's Mane)
- `components/ROICalculator.tsx` (Client-side interactive profit engine with mathematical live sliders)
- `lib/calculateROI.ts` (Pure business logic calculation engine for bags, yield %, electricity, labor, net profit, and payback period)
- `data/modelsData.ts` (Structured JSON specs for all commercial turnkey investment packages)

### 1. ROI CALCULATION ENGINE SPECIFICATION (`lib/calculateROI.ts`)
```typescript
export interface ROICalculationInput {
  bagCount: number; // e.g. 2000
  marketPricePerKg: number; // e.g. 120
  operationalCostPerKg: number; // e.g. 40
  mushroomType?: 'button' | 'oyster' | 'milky';
}

export interface ROICalculationResult {
  totalEstimatedYieldKg: number;
  grossRevenue: number;
  totalOperationalCost: number;
  netProfitPerCycle: number;
  annualNetProfit: number; // 4 to 5 cycles per year
  estimatedPaybackPeriodMonths: number;
  profitMarginPercent: number;
}

export function calculateMushroomROI(input: ROICalculationInput): ROICalculationResult {
  // Yield logic: Standard commercial 20T/2000-bag unit yields ~3,000 to 3,500 kg per 60-day cycle
  const avgYieldPerBag = 1.5; // kg
  const totalEstimatedYieldKg = input.bagCount * avgYieldPerBag;
  const grossRevenue = totalEstimatedYieldKg * input.marketPricePerKg;
  const totalOperationalCost = totalEstimatedYieldKg * input.operationalCostPerKg;
  const netProfitPerCycle = grossRevenue - totalOperationalCost;
  const annualCycles = 4.5;
  const annualNetProfit = netProfitPerCycle * annualCycles;
  
  // CapEx baseline estimate: ~₹15,00,000 for standard 2000-bag commercial unit
  const estimatedCapEx = input.bagCount <= 1000 ? 500000 : input.bagCount <= 2500 ? 1600000 : 8000000;
  const estimatedPaybackPeriodMonths = Number(((estimatedCapEx / (annualNetProfit || 1)) * 12).toFixed(1));
  const profitMarginPercent = Number(((netProfitPerCycle / (grossRevenue || 1)) * 100).toFixed(1));

  return {
    totalEstimatedYieldKg,
    grossRevenue,
    totalOperationalCost,
    netProfitPerCycle,
    annualNetProfit,
    estimatedPaybackPeriodMonths: Math.max(6, Math.min(estimatedPaybackPeriodMonths, 48)),
    profitMarginPercent,
  };
}
```

### 2. INTERACTIVE ROI CALCULATOR COMPONENT (`components/ROICalculator.tsx`)
- Client Component (`'use client'`)
- Dual Range Sliders + Number input sync for:
  1. Bags/Beds (Range: 500 to 10,000 bags, step: 250)
  2. Market Selling Price (Range: ₹80 to ₹300 per kg, step: ₹5)
  3. Operating Cost (Range: ₹20 to ₹100 per kg, step: ₹5)
- Dynamic Stat Cards with smooth numeric transitions:
  - Cycle Net Profit (Formatted in ₹ INR with Lakh/Cr notation)
  - Estimated Payback Period (Months)
  - Total Estimated Cycle Yield (Kg)
  - Net Profit Margin (%)
- Direct CTA: "Book Commercial Feasibility Study" linking directly to WhatsApp/Enquiry with pre-filled calculated values.

### 3. NAVBAR & HERO DESIGN SPECIFICATIONS
- **Navbar**:
  * Fixed sticky layout with `backdrop-blur-md bg-white/90 border-b border-slate-200`
  * Left: Brand Logo + Typography ("Organic Mushrooms Farm")
  * Center: Navigation links with smooth hover underline indicators (Services, Training, Turnkey Setup, ROI Calculator, Subsidy, B2B)
  * Right: Emergency Hotline (`tel:9203544140`), WhatsApp Button (`https://wa.me/919203544140`), and Quick Consultation modal trigger.
- **Hero Section**:
  * Clean high-contrast off-white canvas with subtle mycelium geometric vector pattern.
  * Eyebrow Badge: `Verified Commercial Agro-Tech & Turnkey Solutions`
  * H1 Headline: `Expert Mushroom Farming Training & Setup – Complete Solutions for All Mushroom Types`
  * Sub-headline: Complete commercial methodology, calculators, and turnkey solutions for profitable button, oyster, and milky mushroom farming across India and worldwide.
  * CTA Row: Primary Button (Emerald-700 "Enquiry Now"), Secondary Button (Amber-600 "WhatsApp Us"), and Hotline Pill ("Call Now: 9203544140").
  * Real-time Trust Bar: 1.5k+ Active Units, 98.93% Global Success Rate, 5,000+ Farmers Trained, Pan-India & Global Delivery.
```

---

## Master Next.js Prompt (Part 3: Production SOPs, Composting Infrastructure & National Index)

```markdown
### SYSTEM ROLE & FOCUS (PHASE 3: 10% ARCHITECTURAL EXPANSION)
You are building the scientific cultivation workflows, industrial composting specs, technical FAQ engine, and pan-India/global geographic indexing system for the Organic Mushrooms Farm Next.js App Router application.

### DIRECTORY & FILE TARGETS (Strictly NO `src/`)
- `components/SOPTimeline.tsx` (7-phase 60-day commercial cultivation cycle interactive stepper)
- `components/CompostUnits.tsx` (20T & 30T Phase-I + Phase-II tunnel infrastructure specification cards)
- `components/PrecisionMetrics.tsx` (Critical climate boundaries: 14-18°C Temp, 85-95% RH, <1000ppm CO2, 24-26°C Spawn Run)
- `components/FAQSection.tsx` (20+ expandable accordion items with JSON-LD schema synchronization)
- `components/PanIndiaCoverage.tsx` (Searchable/filterable directory of 28 states, 8 UTs, 800+ tier-2/3 cities, and 15+ countries)
- `components/ContactInquiryForm.tsx` (Full-featured commercial inquiry form with instant validation & direct WhatsApp/Email dispatch)
- `data/sopData.ts` (Structured data for all 7 commercial phases)
- `data/faqData.ts` (20 high-volume search questions & in-depth agricultural answers)
- `data/citiesData.ts` (Categorized geographic list of tier-1, tier-2, tier-3 cities across all Indian states)

### 1. 60-DAY COMMERCIAL CYCLE SOP SPECIFICATION (`data/sopData.ts` & `components/SOPTimeline.tsx`)
```typescript
export interface CultivationPhase {
  step: number;
  title: string;
  duration: string;
  temperature: string;
  keyParam: string;
  description: string;
}

export const SOP_PHASES: CultivationPhase[] = [
  { step: 1, title: 'Phase-I Composting', duration: '8–10 Days', temperature: '60–70°C', keyParam: 'C:N Ratio Control', description: 'Outdoor aerobic fermentation of wheat straw, poultry manure, gypsum, and nitrogen supplements.' },
  { step: 2, title: 'Phase-II Pasteurization', duration: '5–7 Days', temperature: '57–60°C', keyParam: 'Ammonia Level < 10ppm', description: 'Conditioning in bulk chambers with precision steam injection to eliminate pathogens and nematode pests.' },
  { step: 3, title: 'Filling & Spawning', duration: '1–2 Days', temperature: '25–28°C', keyParam: 'Sterile Handling (0.5-0.7% rate)', description: 'Thorough mixing of lab-grade F1 hybrid grain spawn under sterile air-filtered conditions.' },
  { step: 4, title: 'Spawn Run (Mycelium Colonization)', duration: '14–16 Days', temperature: '24–26°C', keyParam: '90% Relative Humidity', description: 'Complete mycelial colonization of the compost substrate under dark, controlled conditions.' },
  { step: 5, title: 'Casing Application', duration: '1–2 Days', temperature: '22–24°C', keyParam: 'Soil pH 7.5–8.0 (35-40mm layer)', description: 'Application of sterilized peat moss/coir-pith overlay to stimulate rhizomorph aggregation.' },
  { step: 6, title: 'Pinning Initiation', duration: '7–10 Days', temperature: '16–18°C', keyParam: 'CO₂ Flush < 800 ppm', description: 'Temperature drop and fresh air introduction to shock mycelium into forming pinheads (primordia).' },
  { step: 7, title: 'Cropping & Flushes', duration: '25–30 Days', temperature: '14–16°C', keyParam: 'Peak Harvest Quality', description: 'Sequential harvesting across 3 commercial flushes with strict humidity maintenance.' }
];
```

### 2. COMMERCIAL COMPOST UNITS SPECIFICATION (`components/CompostUnits.tsx`)
- Card 1: **2000-Bag Commercial Unit (20T)**
  * Capacity: 20 Metric Tonnes / 2,000 Bags
  * Room Layout: 14x30 System
  * Cycle Duration: 15-day batch turnaround
  * Estimated CapEx: ₹15–17 Lakh
  * Highlights: Semi-automated compost turner, insulated bunker, blowers, ducting, direct pasteurization tunnel.
- Card 2: **3000-Bag Industrial Unit (30T)** (Badge: *Best Value*)
  * Capacity: 30 Metric Tonnes / 3,000 Bags
  * Room Layout: 14x40 System
  * Cycle Duration: 15-day batch turnaround
  * Estimated CapEx: ₹19–21 Lakh
  * Highlights: High-volume centrifugal aeration, digital temperature logging, hydraulic winch filling, export-grade hygiene standards.

### 3. PAN-INDIA & GLOBAL REACH DIRECTORY (`components/PanIndiaCoverage.tsx`)
- Search input with real-time fuzzy filtering.
- State-wise pills (MP, UP, Maharashtra, Bihar, Delhi NCR, Rajasthan, Gujarat, Punjab, Haryana, South India).
- Complete index displaying 800+ tier-2/tier-3 cities and major global destination countries (USA, UK, Australia, UAE, Canada, Europe).
- Dynamic quick-connect CTA: "Request Feasibility for [Selected City]".

### 4. 20-ITEM FAQ ACCORDION ENGINE (`components/FAQSection.tsx`)
- Clean toggle animations with accessibility (`aria-expanded`, keyboard navigable).
- All 20 high-frequency commercial farming search questions (Duration, Experience, Certificate, Near Me, MP/UP Hubs, Low Investment, Government Subsidies, Button vs Oyster, Climate Control, F1 Spawn Purity, B2B Marketing Linkages).
- Fully synchronized with Next.js `FAQPage` JSON-LD Schema.
```

---

## Master Next.js Prompt (Part 4: Agro-Academy, B2B Marketplace, E-E-A-T & Full Conversion Architecture)

```markdown
### SYSTEM ROLE & FOCUS (PHASE 4: 10% ARCHITECTURAL EXPANSION)
You are building the Agro-Education academy verticals, B2B marketplace trade engine, E-E-A-T trust signals, dynamic contact lead forms, and structured enterprise footer for the Organic Mushrooms Farm Next.js App Router application.

### DIRECTORY & FILE TARGETS (Strictly NO `src/`)
- `components/TrainingAcademy.tsx` (State-wise curriculum, Online vs. Practical Physical Academy comparison, 4-step syllabus)
- `components/MarketplaceB2B.tsx` (Spawn seeds, fresh button mushrooms, dry export listings with live query triggers)
- `components/Testimonials.tsx` (Verified grower reviews with location stamps: Bhopal, Indore, Sagar, Pune)
- `components/SetupComparisonTable.tsx` (Organic Mushrooms Farm vs. Traditional Others infrastructure comparison)
- `components/EEATTrustSection.tsx` (Government subsidy documentation, lab certifications, verified founder credentials)
- `components/ContactInquiryForm.tsx` (Lead capture with phone validation, state selector, direct WhatsApp dispatch)
- `components/Footer.tsx` (Multi-column sitemap, city hubs, social links, legal disclaimers, and copyright)
- `data/trainingData.ts` (Structured data for online & offline courses, syllabus modules, and state hubs)
- `data/marketplaceData.ts` (B2B wholesale trading items and bulk specifications)

### 1. AGRO-ACADEMY & TRAINING VERTICALS SPECIFICATION (`components/TrainingAcademy.tsx`)
- **State-Wise Agro Hubs Grid**:
  * Madhya Pradesh: Premium hubs in Jabalpur, Indore, Bhopal & Gwalior.
  * Uttar Pradesh: Extensive setups in Lucknow, Varanasi, Kanpur & Meerut.
  * Delhi NCR: Urban high-density farming & B2B distribution networks.
  * Maharashtra: Climate-controlled commercial units in Pune, Nashik & Mumbai.
- **Dual Course Comparison**:
  * Option A: *Certified Online Training Program* (10+ hours HD videos, composting ratio charts, lifetime WhatsApp group access).
  * Option B: *Practical Physical Academy* (Hands-on farm training in Jabalpur MP, live pasteurization, casing & harvesting, physical certificate).
- **Practical Syllabus (01-04)**:
  1. Composting Protocols (Formulations, turning schedules, pasteurization)
  2. Aseptic Inoculation (Cleanroom airflow, grain spawn mixing rates)
  3. Casing Preparation (Sterilization, water retention, 35-40mm overlay)
  4. Pest & Bio-Shield Care (Organic protection against green mold & fly vectors)

### 2. B2B MARKETPLACE & COMMERCIAL LINKAGES (`components/MarketplaceB2B.tsx`)
- Card 1: **Lab-Grade F1 Hybrid Spawn (Seed)** | Pure grain culture | Pan-India dispatch | Bulk Order CTA
- Card 2: **Fresh Organic Button Mushrooms** | A-Grade export quality | Cold-chain logistics | Live Market Rate CTA
- Card 3: **Dry Mushroom Export** | Solar/Dehydrated grade | Long shelf-life (12+ mo) | Wholesale Only CTA

### 3. INFRASTRUCTURE COMPARISON MATRIX (`components/SetupComparisonTable.tsx`)
| Feature | Organic Mushrooms Farm | Traditional / Others |
| :--- | :--- | :--- |
| **Commercial Insulation** | 80–100mm High-Density PUF Panels | 40–50mm Thermocol / Temporary Shed |
| **Cooling & HVAC** | Industrial Daikin / Precision AHU | Domestic Split ACs (High failure rate) |
| **Racking Systems** | Heavy-duty MS / GI Modular Racks | Bamboo / Wood (Mold contamination risk) |
| **Technical Support** | Lifetime Video & Agronomist Support | 1-Year or None |
| **Govt. Subsidy (NHB/NABARD)** | Complete Project DPR & Paperwork | No Subsidy Documentation Support |

### 4. COMPLETE LEAD GENERATION & ENTERPRISE FOOTER (`components/ContactInquiryForm.tsx` & `components/Footer.tsx`)
- **Contact Form**:
  * Full Name, Phone Number, State/City Dropdown, Preferred Mushroom Variety (Button, Oyster, Milky, Commercial Setup), Space Available.
  * Dual Action: Direct Server Action Submission + Instant WhatsApp Connect with pre-filled message.
- **Enterprise Footer**:
  * Brand Mission & Overview
  * Quick Links (Services, Training, Franchise, ROI Calculator, Subsidies, Weather)
  * City Hub Links (Jabalpur, Sagar, Damoh, Indore, Mumbai, Delhi, USA Guide)
  * Compliance & Legal (Terms of Service, Privacy Policy, Disclaimer, Shipping & Refund)
  * Copyright 2026 Organic Mushrooms Farm.
```



