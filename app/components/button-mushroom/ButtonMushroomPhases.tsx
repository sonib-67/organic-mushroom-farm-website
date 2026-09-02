'use client';

import React from 'react';
import {
  FlaskConical,
  Layers,
  Thermometer,
  ShieldCheck,
  Droplets,
  Package,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

export const ButtonMushroomPhases: React.FC = () => {
  const harvestImage =
    'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png';
  const farmerImage =
    'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png';

  const phases = [
    {
      num: '01',
      badge: 'Genetics & Seed',
      title: 'Master Grain Spawn Preparation & Inoculation',
      icon: FlaskConical,
      color: 'from-blue-500/20 to-cyan-500/20 text-cyan-500 border-cyan-500/30',
      summary:
        'Spawn is the living fungal mycelium propagated onto sterile cereal grain carriers. High-vigor certified F1 spawn determines 50% of your ultimate button mushroom yield.',
      bullets: [
        'Grain Selection: Whole wheat, sorghum (jowar), or rye grains washed, boiled to 45%–48% moisture, and drained.',
        'Mineral Buffering: Mix with Calcium Carbonate (CaCO3, 0.5%) and Gypsum (CaSO4, 2%) to balance pH at 6.8–7.2 and prevent grain compaction.',
        'Sterilization: Autoclaved at 121°C (15 psi pressure) for 90 to 120 minutes inside autoclavable polypropylene filter bags.',
        'Laminar Flow Inoculation: Transferred under a Class 100 HEPA laminar airflow station using pure Agaricus bisporus master cultures.',
        'Dark Incubation: Colonized at 24°C to 26°C for 15 to 20 days until grains turn dense, brilliant snow-white.',
      ],
      proTip:
        'Always avoid spawn with brown damp spots, sweet fermented smell, or greenish patches—indicative of bacterial blotch or Trichoderma mold.',
    },
    {
      num: '02',
      badge: 'Nutritional Substrate',
      title: 'Scientific Compost Formulation (Phase-I & Phase-II Tunnel)',
      icon: Layers,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-500 border-amber-500/30',
      summary:
        'Unlike saprophytes that grow on raw straw, button mushrooms are secondary decomposers requiring a chemically transformed, microbial-rich fermented compost matrix.',
      bullets: [
        'Standard Recipe (Per 1,000 kg Compost): Wheat Straw (1,000 kg), Poultry Manure / Horse Dung (400–500 kg), Wheat Bran (80 kg), Urea (14 kg), MOP (10 kg), Gypsum (40 kg).',
        'Phase-I Outdoor Fermentation: Wetting, stacking, and 5 systematic mechanical turnings over 10–12 days to initiate thermophilic bacterial decomposition (temperatures reach 70°C–75°C).',
        'Phase-II Bulk Pasteurization Tunnel: Steamed at 58°C–60°C for 6 to 8 hours to kill all nematodes, insect eggs, and competitor fungi.',
        'Conditioning Phase: Kept at 48°C–52°C for 4 to 6 days with constant airflow until thermophilic actinomycetes (firefang) multiply and free ammonia levels drop strictly below 10 ppm.',
        'Final Target Specs: Moisture 68%–70%, pH 7.2–7.5, Nitrogen content 2.0%–2.2%, Nitrogen to Carbon ratio ~17:1.',
      ],
      proTip:
        'Never spawn compost if you detect even a trace of pungent ammonia gas; residual ammonia is 100% toxic to mushroom mycelium.',
    },
    {
      num: '03',
      badge: 'Vegetative Growth',
      title: 'Spawning & Dark Room Spawn Run Incubation',
      icon: Thermometer,
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-500 border-emerald-500/30',
      summary:
        'Once compost cools below 25°C, pure grain spawn is homogeneously mixed and loaded into polythene bags or bulk shelving trays.',
      bullets: [
        'Spawning Rate: 0.6% to 0.8% of wet compost weight (600g to 800g spawn per 100 kg compost).',
        'Loading Density: Filled into 10–12 kg perforated bags or spread evenly at 8–10 inch depth on multi-tier vertical galvanized steel racks.',
        'Spawn Run Environment: Compost temperature strictly maintained at 23°C–25°C with 85%–90% relative humidity.',
        'CO2 Saturation: Kept at high CO2 (>5,000 ppm) with closed ventilation to stimulate aggressive vegetative mycelial running.',
        'Timeline: Complete colonization within 14 to 18 days, turning the dark compost into a fragrant, cottony-white block.',
      ],
      proTip:
        'Monitor core compost internal temperature probe twice daily. If compost core exceeds 28°C, increase cooling immediately to prevent mycelial heat death.',
    },
    {
      num: '04',
      badge: 'Fruiting Catalyst',
      title: 'Casing Soil Formulation & Application',
      icon: ShieldCheck,
      color: 'from-purple-500/20 to-pink-500/20 text-purple-500 border-purple-500/30',
      summary:
        'Button mushrooms cannot form fruit bodies on raw compost alone; they require a 3.5 to 4.0 cm moisture-retentive, microbially active casing overlay.',
      bullets: [
        'Casing Soil Mixture: 2-Year Old Decomposed Spent Mushroom Substrate (SMS) + Washed Coir Pith + Vermicompost + Calcium Carbonate (to buffer pH to 7.8–8.2). Alternatively, decomposed Peat Moss + Chalk.',
        'Pasteurization: Steam treated at 65°C for 4 hours or chemical formalin treatment (4% solution drenched and aerated for 7 days).',
        'Application: Spread uniformly at 3.5 cm (1.5 inch) thickness over fully colonized compost surfaces.',
        'Casing Run: Room kept at 24°C–25°C for 7 to 9 days until white mycelium threads climb up through 70% of the casing layer depth.',
        'Ruffling (Scratching): Lightly racking top casing soil after day 6 promotes uniform pinning across the entire bed.',
      ],
      proTip:
        'Casing soil must have high water-holding capacity (70%+) but open porous porosity to allow gas exchange without turning muddy.',
    },
    {
      num: '05',
      badge: 'Induction & Harvest',
      title: 'Environmental Cold Shock, Pinning & Flush Harvesting',
      icon: Droplets,
      color: 'from-emerald-500/20 to-cyan-500/20 text-emerald-500 border-emerald-500/30',
      summary:
        'A drastic change in climate parameters triggers the mushroom from vegetative mycelium into reproductive fruiting bodies (pinheads).',
      bullets: [
        'The Environmental Shock: Temperature is dropped from 24°C down to 15°C–17°C over 48 hours.',
        'CO2 Flushing: Fresh air introduced via AHU ducting to drop room CO2 from 5,000 ppm down to 800–1,100 ppm.',
        'Pinhead Emergence: Tiny pinhead mushrooms (pea-sized) appear across the casing surface within 4 to 6 days.',
        'Maturation: Pins expand into tight, globe-shaped white buttons in 48 to 72 hours ready for plucking.',
        'Multi-Flush Cropping: Harvested in 3 to 4 successive flushes spaced 7 to 10 days apart over a 35-day fruiting cycle.',
      ],
      proTip:
        'Harvest when the cap is 3.5–5.0 cm wide and the partial veil under the cap is still tightly sealed. Open gills reduce market price by 40%.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-t dark:border-white/10 border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles size={13} /> Complete Scientific SOP
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-3">
            The 5 Critical Phases of Button Mushroom Cultivation
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Follow this step-by-step technical standard operating procedure (SOP) used by leading commercial farms in India
            to achieve 18% to 22% biological efficiency.
          </p>
        </div>

        {/* Phase Cards */}
        <div className="space-y-8 mb-14">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass p-6 sm:p-8 rounded-3xl border dark:border-white/10 border-black/10 relative overflow-hidden hover:border-emerald-500/30 transition-all"
              >
                {/* Top Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} border flex items-center justify-center font-black text-lg`}
                    >
                      {p.num}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
                        {p.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-medium">
                  {p.summary}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 mb-5">
                  {p.bullets.map((b, bIdx) => {
                    const [head, ...tail] = b.split(':');
                    return (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300">
                          <strong className="dark:text-white text-slate-900">{head}:</strong>
                          {tail.join(':')}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Pro Tip Callout */}
                <div className="p-3.5 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                  <AlertCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-600 dark:text-emerald-400 font-bold">Pro Tip: </strong>
                    {p.proTip}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-Guide Image Banner 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="rounded-3xl overflow-hidden shadow-xl border dark:border-white/10 border-black/10 group">
            <div className="relative aspect-video">
              <img
                src={harvestImage}
                alt="Harvesting fresh white button mushrooms in climate room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-semibold text-white">
                  Plucking grade-A closed white button mushrooms with sharp twisting motion
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border dark:border-white/10 border-black/10 group">
            <div className="relative aspect-video">
              <img
                src={farmerImage}
                alt="Successful organic mushroom farm entrepreneur with freshly packaged punnets"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-semibold text-white">
                  Commercial grower packaging 200g micro-perforated punnets for daily retail delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
