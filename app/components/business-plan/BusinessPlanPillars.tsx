'use client';

import React, { useState } from 'react';
import {
  Compass,
  Building,
  Flame,
  Dna,
  Moon,
  Wind,
  PackageCheck,
  Coins,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Phone,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const BusinessPlanPillars: React.FC = () => {
  const { openConsultationModal } = useAppModals();
  const [openPillar, setOpenPillar] = useState<number | null>(1);

  const pillars = [
    {
      step: 1,
      icon: Compass,
      title: 'Geographic Feasibility & Variety Selection',
      summary:
        'Map your ambient seasonal temperature to choose either low-cost seasonal crops or year-round climate chambers.',
      details: [
        'North India / Hilly Regions (HP, UK, Kashmir): Natural Button & Shiitake in autumn/winter without heavy cooling electricity.',
        'Central & Western India (MP, Maharashtra, Gujarat, Rajasthan): Oyster in winter (Nov-Feb), Milky in summer/monsoon (March-Oct).',
        'South India & Coastal Belts (AP, Telangana, TN, Kerala, Karnataka): Year-round Oyster and Milky with high ambient humidity.',
        'High-Cap Commercial Setup: Insulated PUF panel chambers with chillers & AHU to produce White Button 365 days a year.',
      ],
      proTip:
        'Start with Oyster for your first 2-3 cycles to master humidity regulation before deploying capital into Button composting tunnels.',
    },
    {
      step: 2,
      icon: Building,
      title: 'Farm Infrastructure & Space Architecture',
      summary:
        'Vertical farming maximizes indoor cubic volume rather than relying on expensive horizontal agricultural acreage.',
      details: [
        'Minimal Footprint: A 300 to 500 sq ft room can easily accommodate 800 to 1,200 Oyster bags using 4 to 5-tier vertical bamboo/GI pipe racks.',
        'Zoning Architecture: Strictly separate the Dirty Area (Straw chopping, soaking & pasteurization) from the Clean Zone (Inoculation, Spawn Run & Fruiting room).',
        'Flooring & Walls: Smooth cement floor with drainage slope; lime-washed or epoxy-coated walls to prevent microbial harborage.',
        'Airlock & Insect Screens: 40-mesh nylon insect nets on all intake/exhaust ports to block sciarid flies and phorid vectors.',
      ],
      proTip:
        'Leave at least 2.5 to 3 feet walking aisle between vertical rack rows for unhindered spray misting, inspection, and rapid harvesting.',
    },
    {
      step: 3,
      icon: Flame,
      title: 'Substrate Sourcing & Chemical-Free Pasteurization',
      summary:
        'Agricultural crop residues (wheat straw, paddy straw, sugarcane bagasse) form 100% of mushroom nutrition.',
      details: [
        'Raw Material Procurement: Source fresh, dry, golden-yellow wheat or paddy straw free from rain rot and black mold.',
        'Chaffing: Cut straw to 2-3 inch pieces using an agricultural chaff cutter for optimal packing density.',
        'Hot Water / Steam Pasteurization: Heat soaked straw at 65°C – 70°C for 90 to 120 minutes. This eliminates competitor mold spores while retaining beneficial thermophilic microflora.',
        'Moisture Balancing: Dry straw on clean tarpaulin until moisture is exactly 65% – 70% (no water drips when squeezed tightly in palm).',
      ],
      proTip:
        'Avoid hazardous chemical sterilization (Carbendazim/Formalin) if you want to sell at premium organic rates and protect your workers.',
    },
    {
      step: 4,
      icon: Dna,
      title: 'Certified Lab-Grade F1 Spawn (Mushroom Seed)',
      summary:
        'Spawn is the genetic powerhouse. Low-quality or degenerated spawn is the #1 silent killer of farm ROI.',
      details: [
        'Genetics: Always procure pure master culture F1 grain spawn grown on sterilized whole wheat or sorghum (jowar) grains.',
        'Visual Quality Check: Fresh spawn should be uniformly covered with bright white, cottony mycelium smelling fresh and mushroomy—never brownish, sour, or dotted with green/black spots.',
        'Inoculation Ratio: Use 2% to 3% spawn by wet weight of substrate (e.g., 200g–300g spawn per 10kg wet straw bag).',
      ],
      proTip:
        'Order spawn from certified labs 7 to 10 days before your scheduled pasteurization date so it arrives at peak mycelial vigor.',
    },
    {
      step: 5,
      icon: Moon,
      title: 'Dark Incubation & Spawn Run (Colonization)',
      summary:
        'During the vegetative phase, mycelium aggressively consumes the substrate in warm, dark, unventilated conditions.',
      details: [
        'Room Climate: Maintain 24°C – 28°C and keep the room dark. High CO2 during this stage accelerates mycelial branching.',
        'Duration: 14 to 18 days for Oyster; 18 to 22 days for Milky; 15 to 20 days for Button casing run.',
        'Hygiene Audit: Inspect bags every 3 days. Any bag showing green patches (Trichoderma) or orange rot must be sealed and removed immediately from the farm.',
      ],
      proTip:
        'Do not water or ventilate during dark run; keep the plastic bags closed with cotton-plugged necks or micro-perforations.',
    },
    {
      step: 6,
      icon: Wind,
      title: 'Fruiting Induction & Microclimate Automation',
      summary:
        'Triggering mushroom pinheads requires four precise signals: Light, Fresh Air (CO2 Drop), Temperature Drop, and 85%+ Humidity.',
      details: [
        'Fresh Air & Exhaust: Install timer-controlled exhaust fans to purge CO2 below 800–1000 ppm. High CO2 causes elongated stems and stunted pinhead caps.',
        'Humidity Control: Ultrasonic mist makers or high-pressure foggers keeping air between 80% to 90% RH without soaking the delicate mushrooms directly.',
        'Diffuse Lighting: Provide 4 to 6 hours of indirect natural light or cool-white LED lighting (500–1000 lux).',
        'Pinhead Emergence: Tiny pinheads appear within 3 to 5 days after opening the bags and grow into harvestable clusters in 48 to 72 hours.',
      ],
      proTip:
        'Fine aerosol mist (5-10 micron) is essential. Coarse water droplets from garden nozzles will cause bacterial blotch and yellowing.',
    },
    {
      step: 7,
      icon: PackageCheck,
      title: 'Sanitary Harvesting & Punnet Packaging',
      summary:
        'Harvest at prime commercial maturity before mushroom edges curl upward and spore discharge begins.',
      details: [
        'Harvesting Technique: Twist gently at the base with sanitized hands or clean gloves. Do not pull roughly or cut with dirty blades.',
        'Trimming & Grading: Trim the dirty root base. Grade into Grade-A (intact uniform buttons/caps) and Grade-B (broken or open caps for drying/powder).',
        'Packaging: Pack in 200g perforated PP punnets or breathable BOPP micro-perforated pouches to prevent moisture buildup and sweat decay.',
        'Cold Chain: Store at 4°C in a commercial display refrigerator to extend fresh shelf life from 24 hours to 5-7 days.',
      ],
      proTip:
        'Harvest early in the morning (5:00 AM – 7:00 AM) so fresh punnets reach local vegetable markets and organic stores before morning retail rush.',
    },
    {
      step: 8,
      icon: Coins,
      title: 'Diversified Income Streams & Zero-Waste Economics',
      summary:
        'Do not rely solely on fresh daily sales. Smart processing safeguards cash flow against market price fluctuations.',
      details: [
        'Stream 1 (Fresh Retail & Wholesale): Consistent daily cash flow to restaurants, sabzi mandis, and societies.',
        'Stream 2 (Solar Dehydrated Dry Mushrooms): Convert surplus or unsold fresh harvest into dried oyster/shiitake (10kg fresh = 1kg dry). Shelf life 12+ months.',
        'Stream 3 (Value-Added Foods): Mushroom powder for protein shakes, mushroom soup premixes, pickles, and papad.',
        'Stream 4 (Spent Mushroom Substrate - SMS): Composted spent straw is nutrient-rich organic vermicompost sold to nurseries at ₹5–₹8 per kg.',
      ],
      proTip:
        'A small solar dehydrator (₹15,000 – ₹30,000) eliminates 100% of harvest spoilage and gives you dry inventory to sell on Amazon/Flipkart/TradeIndia.',
    },
    {
      step: 9,
      icon: ShieldCheck,
      title: 'Regulatory Approvals, FSSAI & Organic Certification',
      summary:
        'Ensure legal compliance and brand authority to supply organized retail and institutional chains.',
      details: [
        'FSSAI Basic Registration: Mandatory for all food businesses. Available online for ₹100/year.',
        'MSME / Udyam Aadhar: Free registration granting access to collateral-free bank loans and government subsidies.',
        'GST Registration: Fresh agricultural mushrooms are 0% GST exempt in India. Processed products (pickles, canned) attract 12% GST.',
        'NPOP Organic Certification: Boosts retail pricing by 30%–50% in premium metropolitan grocery chains.',
      ],
      proTip:
        'Keep your Udyam and FSSAI ready before approaching local supermarkets and HoReCa buyers for formal vendor onboarding.',
    },
  ];

  return (
    <section id="pillars" className="py-16 md:py-24 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-500/10 text-teal-500 border border-teal-500/20 mb-4">
            <Sparkles size={13} /> The 9 Core Execution Pillars
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4">
            The Complete Step-by-Step Operating System
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            From substrate pasteurization to climate management and FSSAI certification—follow this battle-tested SOP
            to eliminate crop loss and maximize yield efficiency.
          </p>
        </div>

        {/* Pillars Accordion / Expansion Stack */}
        <div className="space-y-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isOpen = openPillar === pillar.step;

            return (
              <div
                key={pillar.step}
                className={`glass rounded-2xl md:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/40 shadow-lg dark:bg-white/[0.04] bg-black/[0.03]'
                    : 'border-black/10 dark:border-white/10 hover:border-emerald-500/20'
                }`}
              >
                {/* Header Toggle */}
                <button
                  type="button"
                  onClick={() => setOpenPillar(isOpen ? null : pillar.step)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                          : 'bg-emerald-500/10 text-emerald-500'
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
                          Pillar 0{pillar.step}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900">
                        {pillar.title}
                      </h3>
                      {!isOpen && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 hidden sm:block">
                          {pillar.summary}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-black/5 dark:bg-white/5 text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-500' : ''
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Body Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t dark:border-white/5 border-black/5">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-medium">
                      {pillar.summary}
                    </p>

                    <div className="space-y-2.5 mb-5">
                      {pillar.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pro Tip Box */}
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-800 dark:text-amber-200">
                      <strong className="text-amber-600 dark:text-amber-400 font-bold block mb-0.5">
                        💡 Commercial Pro-Tip:
                      </strong>
                      {pillar.proTip}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mid-Page Callout Banner */}
        <div className="mt-12 glass p-6 sm:p-8 rounded-3xl border border-emerald-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-transparent">
          <div className="text-left">
            <h4 className="text-lg font-bold dark:text-white text-slate-900 mb-1">
              Need a Customized Detailed Project Report (DPR)?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Get bank-ready financials and technical layouts tailored to your exact land and budget.
            </p>
          </div>
          <button
            onClick={() =>
              openConsultationModal({
                category: 'DPR & Subsidy Guidance',
                message: 'I need a Bankable DPR and Business Plan for my upcoming mushroom farm.',
              })
            }
            className="shrink-0 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
          >
            <Phone size={15} />
            <span>Request Bankable DPR</span>
          </button>
        </div>
      </div>
    </section>
  );
};
