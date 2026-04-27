import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Thermometer, ShieldCheck, Droplets, Wind } from 'lucide-react';
import SEO from '../components/SEO';

const SopsPage = () => {
    return (
        <div className="min-h-screen pt-32 pb-20">
             <SEO 
                 title="Standard Operating Procedures | Technical Documentation"
                 description="Technical SOPs for Tunnel Ops, Spawning, Casing, and Hygiene."
             />

             <section className="section-padding text-center">
                 <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="max-w-4xl mx-auto"
                 >
                     <div className="badge mx-auto mb-6">Technical Manual</div>
                     <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                         Production <span className="gradient-text">SOPs</span>
                     </h1>
                     <p className="text-slate-400 text-lg leading-relaxed mb-10">
                         Standardized protocols for high-yield button mushroom output.
                     </p>
                 </motion.div>
             </section>

             <section className="section-padding max-w-4xl mx-auto pt-0 space-y-12">
                  <div id="tunnel-ops" className="glass p-10 rounded-[3rem] border border-white/5">
                      <div className="flex items-center gap-4 mb-6">
                           <Thermometer size={32} className="text-primary-start" />
                           <h2 className="text-3xl font-bold text-white tracking-tight">Tunnel Ops</h2>
                      </div>
                      <div className="prose prose-invert max-w-none text-slate-300">
                          <p>Phase-II Pasteurization Tunnel operations require strict temperature and oxygen management to eliminate ammonia and pathogens.</p>
                          <ul className="list-disc pl-5 mt-4 space-y-2">
                              <li><strong>Ramp-Up:</strong> Gradually increase temperature to 57°C over 12 hours.</li>
                              <li><strong>Pasteurization:</strong> Maintain strictly between 57°C to 60°C for 6 to 8 hours. Do not exceed 61°C (kills beneficial thermophilic fungi).</li>
                              <li><strong>Conditioning:</strong> Lower to 48-52°C and hold for 4 to 6 days to clear ammonia (target &lt; 10ppm).</li>
                              <li><strong>Cooldown:</strong> Rapidly cool compost to 24-25°C before spawning.</li>
                          </ul>
                      </div>
                  </div>

                  <div id="spawning" className="glass p-10 rounded-[3rem] border border-white/5">
                      <div className="flex items-center gap-4 mb-6">
                           <Wind size={32} className="text-primary-start" />
                           <h2 className="text-3xl font-bold text-white tracking-tight">Spawning</h2>
                      </div>
                      <div className="prose prose-invert max-w-none text-slate-300">
                          <p>Proper inoculation requires absolute sterile conditions to prevent green mold (Trichoderma).</p>
                          <ul className="list-disc pl-5 mt-4 space-y-2">
                              <li><strong>Sterile Handling:</strong> Workers must use IPA (Isopropyl Alcohol 70%) on hands and tools. Masks and fresh aprons are strictly mandatory.</li>
                              <li><strong>Grain-to-Compost Ratio:</strong> Use 0.5% to 0.7% spawn by weight of wet compost (e.g., 50-70g spawn per 10kg compost).</li>
                              <li><strong>Mixing:</strong> Ensure uniform distribution of grain. Top dress lightly to accelerate surface colonization.</li>
                              <li><strong>Incubation:</strong> Maintain room temperature at 24°C with high relative humidity (90%+) and high CO2.</li>
                          </ul>
                      </div>
                  </div>

                  <div id="casing" className="glass p-10 rounded-[3rem] border border-white/5">
                      <div className="flex items-center gap-4 mb-6">
                           <Droplets size={32} className="text-primary-start" />
                           <h2 className="text-3xl font-bold text-white tracking-tight">Casing</h2>
                      </div>
                      <div className="prose prose-invert max-w-none text-slate-300">
                          <p>The casing layer provides water storage and induces pinning. Poor casing leads to stroma formation.</p>
                          <ul className="list-disc pl-5 mt-4 space-y-2">
                              <li><strong>Material:</strong> Coir pith + Farm Yard Manure (2-year old) + Chalk powder.</li>
                              <li><strong>pH Balance:</strong> Adjust strictly to 7.5pH using Calcium Carbonate (chalk mitti).</li>
                              <li><strong>Formalin Treatment:</strong> Treat raw materials with 2-4% Formalin solution. Cover tightly with a tarpaulin for 48 hours to pasteurize.</li>
                              <li><strong>Off-gassing:</strong> Uncover and rake repeatedly for 24-48 hours until all traces of formaldehyde smell are gone before application.</li>
                          </ul>
                      </div>
                  </div>

                  <div id="hygiene" className="glass p-10 rounded-[3rem] border border-white/5">
                      <div className="flex items-center gap-4 mb-6">
                           <ShieldCheck size={32} className="text-primary-start" />
                           <h2 className="text-3xl font-bold text-white tracking-tight">Hygiene</h2>
                      </div>
                      <div className="prose prose-invert max-w-none text-slate-300">
                          <p>Biological contamination is the primary cause of crop failure. Zero-tolerance hygiene must be enforced.</p>
                          <ul className="list-disc pl-5 mt-4 space-y-2">
                              <li><strong>Footbath Protocols:</strong> Install 2% Formalin or Bleach footbaths at every entrance. Replenish daily.</li>
                              <li><strong>Fly-Net Specifications:</strong> Install 40-mesh nylon screens on all vents, exhausts, and doors to prevent Sciarid and Phorid fly entry.</li>
                              <li><strong>Waste Disposal:</strong> Spent compost and infected bags must be immediately sealed in plastic and moved at least 500 meters from the growing area.</li>
                              <li><strong>Sanitization:</strong> Spray 0.5% Bleach solution on floors and corridors twice daily.</li>
                          </ul>
                      </div>
                  </div>
             </section>
        </div>
    );
};

export default SopsPage;
