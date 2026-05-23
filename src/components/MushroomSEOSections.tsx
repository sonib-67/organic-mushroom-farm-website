import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sprout, Award, TrendingUp, HelpCircle, ChevronDown, 
  ChevronUp, BookOpen, MapPin, CheckCircle2, ShieldCheck, 
  Map, MessageCircle, ArrowRight, Zap, Target, HelpCircle as HelpIcon 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MushroomSEOSections() {
  // FAQ toggles
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const locations = [
    { name: "Madhya Pradesh", desc: "Premium hubs around Jabalpur, Indore, Bhopal & Gwalior" },
    { name: "Uttar Pradesh", desc: "Extensive setups near Lucknow, Varanasi, Kanpur & Meerut" },
    { name: "Delhi NCR", desc: "Urban farming centers and commercial distribution networks" },
    { name: "Maharashtra", desc: "High-yield climate controlled units in Pune, Nashik & Mumbai" },
    { name: "Rajasthan", desc: "Innovative water-saving farming setups near Jaipur, Udaipur & Jodhpur" },
    { name: "Punjab & Haryana", desc: "Traditional agrarian commercial model transformations" },
    { name: "Bihar", desc: "Low investment, high density organic beginner startups" },
    { name: "Chhattisgarh", desc: "Emerging hubs with local state subsidies for agriproducts" },
    { name: "Himachal Pradesh", desc: "Natural climate advantageous spawn cultivation units" },
    { name: "Gujarat", desc: "SME-scale processing and business-focused packaging setups" },
    { name: "Karnataka & West Bengal", desc: "Sub-tropical organic varieties and rich market linkages" }
  ];

  const benefits = [
    { title: "High Return on Investment", desc: "Convert small agricultural spaces into high-yield commercial crop units with rapid cycles.", icon: TrendingUp },
    { title: "Low Capital Setup Setup", desc: "A great low investment farming business option requiring fractional resource base compared to regular dairy/crop projects.", icon: Zap },
    { title: "Vertical Farming Adaptable", desc: "Maximize spatial cube layouts, perfect for indoor climate control systems and city outskirts.", icon: Sprout },
    { title: "Waste Recycling Power", desc: "Utilizes common agricultural waste products such as wheat or paddy straw, promoting local circular ecosystem loops.", icon: ShieldCheck },
    { title: "Year-Round Production", desc: "No dependency on unpredictable weather conditions when operating standard commercial climate setups.", icon: Target },
    { title: "Certified Accreditation", desc: "Boost credibility in B2B and export marketplaces with our specialized mushroom farming training with certificate.", icon: Award }
  ];

  const mushroomTypes = [
    { name: "White Button Mushrooms", desc: "The heavyweight champion representing over 75% of the national Indian consumption market.", temp: "14°C - 18°C during cropping", margin: "Excellent for cold-rooms & winter sets" },
    { name: "Oyster Mushrooms (Sajor-Caju)", desc: "Super resilient, easy spawn run times, highly rich in fibers, and best for absolute beginners.", temp: "20°C - 30°C", margin: "Ideal starting variety for small spaces" },
    { name: "Milky Mushrooms (Calocybe)", desc: "Outstanding aesthetic look with prolonged summer shelf life, perfect for hotter states.", temp: "25°C - 35°C", margin: "Thrives in warm tropical regions" },
    { name: "Paddy Straw Mushrooms", desc: "Extremely popular in Eastern states like West Bengal, super fast culture and growth.", temp: "30°C - 38°C", margin: "Best fit for high-temperature cycles" },
    { name: "Ganoderma / Medicinal Mushrooms", desc: "High-value pharmaceutical and wellness market product, low raw material cost but exceptional B2B export values.", temp: "22°C - 28°C", margin: "Designed for premium long-term scale" }
  ];

  const faqs = [
    {
      q: "What is the duration of this commercial mushroom farming training course?",
      a: "Our online mushroom training course offers lifetime on-demand access to premium step-by-step video modules, allowing you to learn at your personal speed. For offline physical training at our central farm in Jabalpur (Madhya Pradesh), we conduct intensive 2 to 3-day practical commercial sessions covering commercial bulk composting, spawning, and harvesting hands-on."
    },
    {
      q: "Do I need prior agricultural experience to join your mushroom cultivation course?",
      a: "No prior experience in agriculture is required at all! This mushroom cultivation training is developed and designed structurally from scratch for absolute beginners. We cover basic biology, room preparation, substrate sterilization, hygienic standards, temperature monitoring, and commercial packaging, guiding you step-by-step."
    },
    {
      q: "Is there any certificate provided upon completion of the training?",
      a: "Yes, absolutely. Once you complete our commercial training modules, you will receive our professional, certified mushroom cultivation training credential. This certificate helps you secure agricultural loans, pitch to retail store chains, and satisfy safety compliance procedures for your company startup."
    },
    {
      q: "How can I locate certified mushroom training near me in my state?",
      a: "Whether you seek mushroom training in Madhya Pradesh, Uttar Pradesh, Delhi, Maharashtra, or Rajasthan, you can easily access our high-value online training portal globally. For those looking for practical mushroom growing training nearby, our offline practical academy offers masterclasses that students from all across India visit monthly."
    },
    {
      q: "What are the hot state-wise opportunities for mushroom training in Madhya Pradesh and Uttar Pradesh?",
      a: "Madhya Pradesh and Uttar Pradesh are top tier regions for mushroom cultivation due to high local availability of wheat straw, which reduces raw composting costs. In Bihar, Haryana, and Punjab, students can start with relatively simple semi-closed setups and ramp up to automated commercial climate-controlled farms."
    },
    {
      q: "Can I truly start a premium commercial mushroom business with low investment?",
      a: "Yes, organic oyster and milky varieties make for a solid low investment farming business setup. Beginners can launch their first crop in a simple insulated room or temporary bamboo structure with an investment of ₹10,000 to ₹15,000. For large industrial button mushrooms, our clients scale up to modern pasteurization tunnels and climate-insulated growth sections."
    },
    {
      q: "Is a government subsidy available for a mushroom cultivation business setup globally/in India?",
      a: "Yes, several states offer rich subsidies of up to 40% to 50% under National Horticulture Board (NHB) and Rashtriya Krishi Vikas Yojana (RKVY) schemes. Our comprehensive mushroom business training guides you through preparing your project report and technical documentation needed to secure state subsidies."
    },
    {
      q: "What are the core differences between online and offline practical training?",
      a: "Online mushroom training gives you flexible lifetime access to HD videos, charts, SOP templates, and technical forums at an extremely nominal cost. Offline practical training takes place at our high-yield farm, offering hands-on compost heap turning, inoculation (spawning) practice, casing formulation, and real-time environment sensor training."
    },
    {
      q: "What key mushroom types are covered in this crop cultivation syllabus?",
      a: "Our certified mushroom cultivation training covers White Button Mushrooms (commercial composting focus), Oyster Mushrooms (beginner-friendly substrate hydration), Milky Mushrooms (high-temperature tolerance), and specialty medicinal/decorative strains like Ganoderma."
    },
    {
      q: "How can I source pure quality first-generation mushroom spawn (seed) pan India?",
      a: "We manufacture high-grade F1 laboratory-tested hybrid spawn in-house and supply them safely in thermal boxes to farmers in Uttar Pradesh, Delhi, Bihar, West Bengal, Maharashtra, Rajasthan, Karnataka, and beyond. We guarantee high mycelium colonization rates and contamination-free deliveries."
    },
    {
      q: "Do you assist with commercial business registration, licenses, and marketing?",
      a: "Yes! Part of our professional agriculture business training India roadmap includes training on FSSAI food licensing, local MSME registration, packaging guidelines, branding, and establishing direct global and domestic B2B links with leading supermarket chains and dried export traders."
    },
    {
      q: "Is commercial button mushroom cultivation more profitable than oyster?",
      a: "Commercial button mushrooms enjoy persistent high-volume demand in hotels, restaurant kitchens, and supermarkets, making them highly profitable at scale. Oyster mushrooms are simpler to grow with lower operating costs, offering higher profit margins on local retail sales with minimal risk."
    },
    {
      q: "What temperature and climate controls are required for high-yield commercial cultivation?",
      a: "White button mushrooms require 22°C - 25°C for the early spawn run (mycelium growth) and 14°C - 18°C with high relative humidity (85%-90%) and fresh air exchange for maximum pinning. We teach you how to build cost-effective automated climate growth chambers during our program."
    },
    {
      q: "What post-training support do you offer to students when they launch their farm?",
      a: "Our students gain exclusive access to our VIP WhatsApp support channel, direct telephone consultation with master agriculturalists, commercial product marketing support, bulk spawn discounts, and diagnostic troubleshooting assistance for any mycelium growth issues."
    },
    {
      q: "How can agricultural beginners start successfully in Rajasthan, Haryana, and Punjab?",
      a: "In arid regions like Rajasthan, indoor farming protects crops from intense heat waves. In Haryana and Punjab, abundant wheat straw compost material offers high cost optimization potentials. Our tailored plans optimize water use and energy efficiency based on local regional logistics."
    },
    {
      q: "Why is high-quality compost referred to as the heart of professional button mushroom training?",
      a: "Button mushrooms can only feed on complex, pasteurized chemical blocks of composted straw, gypsum, and urea. Our course provides the exact proportions to complete compost fermentation safely, eliminating wild molds and maximizing organic matter intake."
    },
    {
      q: "What are the major b2b market linkages available after completing agriculture business training in India?",
      a: "We connect our trained network with dry mushroom exporters, local wholesale Mandis, retail supermarkets, pharmaceuticals buying medicinal Ganoderma, and local agri-cooperatives. We also train you in sun-drying or cold-dehydrating techniques to preserve surplus crops safely."
    },
    {
      q: "How does the quality of spawn (seed) impact overall yield?",
      a: "Low-quality, aged, or contaminated seeds can lead to complete mycelium failure or weak pinning. Sourcing fresh, pure F1 grain spawn ensures aggressive mycelium colonization, which naturally crowd out competing molds and boost your overall harvest yield by up to 25%."
    },
    {
      q: "What are the common pests/diseases in commercial setups, and how are they managed?",
      a: "Green mold, wet bubble disease, and flies can impact yield under low hygienic standards. Our training focuses extensively on strict sanitation protocols, organic pesticide formulas, and correct pasteurization of composting layers to keep crops perfectly clean."
    },
    {
      q: "Why is your program recognized as the best mushroom training institute in India?",
      a: "We combine decades of real commercial farming experience with high-tech laboratory infrastructure and an easy-to-learn educational style. Rather than just offering simple theories, we provide validated scientific SOPs, live support, reliable seed supply chains, and actual turnkey consulting globally."
    }
  ];

  return (
    <div id="seo-knowledge-base" className="relative text-white overflow-hidden py-16 md:py-24 bg-black/90">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#25D366]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20 md:space-y-32">
        
        {/* H1 SEO Block Option: Elegant intro for search engines and humans */}
        <div className="text-center space-y-4">
          <div className="badge mx-auto bg-primary-start/10 text-primary-start border border-primary-start/20 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest">
            India's Leading Agro-Academy Hub
          </div>
          <h1 className="text-3xl md:text-6xl font-black tracking-tight leading-tight">
            Comprehensive <span className="gradient-text">Mushroom Training in India</span>
          </h1>
          <p className="text-sm md:text-lg max-w-3xl mx-auto text-slate-400 font-medium">
            Master scientific cultivation under the <strong className="text-white font-semibold">best mushroom training institute in India</strong>. 
            We provide expert-curated <strong className="text-white font-semibold">mushroom farming training</strong>, high-yield premium spawn, 
            and complete turnkey commercial setup consulting across all major states.
          </p>
        </div>

        {/* Section 1: About Mushroom Training in India */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary-start">
              <BookOpen size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Certified Agri-Education</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white uppercase">
              About <span className="gradient-text font-serif">Mushroom Training</span> in India
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">
              Farming mushrooms requires an ideal balance of moisture, hygiene, ventilation, and strict temperature protocols. Our institute bridges the gap between traditional agricultural limitations and scientific agro-entrepreneurship. From raw beginners seeking a <strong className="text-white font-semibold">mushroom training near me</strong> to experienced large-scale farmers ready to update their existing commercial infrastructure, we provide the ultimate platform for learning and implementation.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We cover the full agricultural ecosystem. With customized curriculums matching state climates, we specialize in high-yield <strong className="text-white font-semibold">mushroom cultivation training</strong> designed to convert agricultural wastes directly into consistent high-margin revenue streams. Join a network of thousands of successful farmers operating high-demand projects.
            </p>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl border border-white/5 relative bg-white/[0.02]">
            <h3 className="text-lg font-bold text-white mb-4">Location-Based Learning Verticals</h3>
            <p className="text-xs text-slate-500 mb-6">Our modules are calibrated to address climatic conditions, local raw material constraints, and logistics in each key region:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.slice(0, 4).map((loc, i) => (
                <div key={i} className="flex gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-primary-start/30 transition-all">
                  <MapPin size={18} className="text-primary-start shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{loc.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-primary-start/10 border border-primary-start/20 text-center mt-6">
              <span className="text-[11px] text-primary-start font-bold">Comprehensive coverage in over 15+ Indian states with direct delivery of seed culture.</span>
            </div>
          </div>
        </section>

        {/* Section 2: Mushroom Farming Business Opportunity */}
        <section className="bg-white/[0.01] border border-white/5 p-6 md:p-12 rounded-[2.5rem] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="badge bg-green-500/10 text-[#25D366] border border-[#25D366]/20 mx-auto">High Demand Industry</div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
              Mushroom Farming <span className="gradient-text">Business Opportunity</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              As consumption grows rapidly across residential households, hotels, and retail outlets, commercial mushroom growing presents a highly scalable, <strong className="text-white font-semibold">low investment farming business</strong> opportunity. Unlike classic crops that require massive acreages of soil and open skies, high-density mushroom setups are stacked vertically in insulated, space-efficient grow rooms.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-6 text-left">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-primary-start font-black text-xl">30% - 45%</div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Average Profit Margin</h4>
                <p className="text-[10px] text-slate-400">High efficiency converting substrate compost blocks directly into premium harvest weights.</p>
              </div>
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-[#25D366] font-black text-xl">30-45 Days</div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Rapid Crop Rotation Cycle</h4>
                <p className="text-[10px] text-slate-400">Harvest starts within index cycles of bag shifting, allowing constant cash flows throughout the months.</p>
              </div>
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-purple-400 font-black text-xl">Minimal Land</div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Vertical Cube Yields</h4>
                <p className="text-[10px] text-slate-400">Stack beds 4 to 6 layers high. Perfect for small farming plots and semi-urban outskirts.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-4">
              Our structured <strong className="text-white font-semibold">mushroom farming business setup training</strong> provides complete blueprints covering building layout plans, compost tunnel design, safety hygiene protocols, and government grant integrations.
            </p>
          </div>
        </section>

        {/* Section 3: Mushroom Types Covered in Training */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="badge bg-purple-500/10 text-purple-400 border border-purple-500/20 mx-auto">Varieties Showcase</div>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight">
              Mushroom Types <span className="gradient-text">Covered In Our Training</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Different mushrooms require unique composting structures, hydration standards, and temperature thresholds. We ensure you master them all.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mushroomTypes.map((type, i) => (
              <div key={i} className="glass p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-primary-start/30 transition-all bg-white/[0.01]">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center text-primary-start mb-4">
                    <Sprout size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{type.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-500 font-bold uppercase">Optimal Temp:</span>
                    <span className="text-primary-start font-bold">{type.temp}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-500 font-bold uppercase">Climatic Zone:</span>
                    <span className="text-white font-semibold">{type.margin}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Online and Offline Mushroom Training */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 glass p-6 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-start animate-ping"></span>
              Compare Learning Models
            </h3>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-400"></div> Online Training Program
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Start your commercial journey instantly with our certified <strong className="text-white font-semibold">online mushroom training</strong> program. Access 10+ hours step-by-step videos, download high-density compost ratio charts, reference step lists, and join regional expert groups instantly on WhatsApp.
                </p>
                <div className="text-[11px] text-sky-400 font-bold uppercase pt-1">Flexible Self-Paced Learning • Lifetime Access</div>
              </div>
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#25D366]"></div> Practical Physical Academy
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Hands-on intensive batches at our modern mushroom farm in Madhya Pradesh. Dive into active pasteurization steps, spawn inoculation procedures, humidity calibration settings, casing application depth controls, and disease troubleshooting with our agriculture professors.
                </p>
                <div className="text-[11px] text-[#25D366] font-bold uppercase pt-1">On-Farm Composting Sessions • Certificate of Achievement</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-[#25D366]">
              <Target size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Flexible Modern Formats</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Online and Offline <span className="gradient-text font-serif">Mushroom Training</span> Systems
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We design modern learning systems that deliver high professional value. Our flexible plans are structured for students, active corporate professionals preparing a secondary income channel, or traditional farmers looking to convert agricultural wastes to direct organic income.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you choose our flexible <strong className="text-white font-semibold">mushroom cultivation course</strong> online or our intensive physical <strong className="text-white font-semibold">mushroom farming workshop</strong>, you gain access to the same validated commercial composting recipes, clean environment protocols, and reliable F1 seed delivery channels.
            </p>
          </div>
        </section>

        {/* Section 5: Practical Mushroom Farming Training */}
        <section className="bg-white/[0.01] border border-white/5 p-6 md:p-12 rounded-[2.5rem] space-y-8">
          <div className="text-center space-y-3">
            <div className="badge bg-red-500/10 text-red-400 border border-red-500/20 mx-auto">Science & Practice</div>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight">
              Practical <span className="gradient-text">Mushroom Cultivation Course</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Our training program rejects sterile dry theory and teaches the exact practical skills needed to run high-yield commercial crops successfully.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {[
              { id: "01", title: "Composting Protocols", desc: "Master wet composting formulations, heap-turning schedules, pasteurization, and correct nutrient parameters." },
              { id: "02", title: "Aseptic Inoculation", desc: "Practice dust-free clean room procedures, proper seed mixing densities, spawn run room controls, and bag placement logic." },
              { id: "03", title: "Casing Preparation", desc: "Prepare casing dirt overlays step-by-step with maximum hydration capacity, sterilization guidelines, and layering depth systems." },
              { id: "04", title: "Pest & Hygiene Care", desc: "Implement clean bio-shield protocols to eliminate white mold, green mold, web disease, and agricultural fly cycles organically." },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black/40 border border-white/5 relative hover:border-primary-start/30 transition-all">
                <span className="absolute top-4 right-4 text-3xl font-black text-white/5">{step.id}</span>
                <h4 className="text-sm font-bold text-white mb-2">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-normal">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center pt-2">
            <span className="text-xs text-slate-500 font-medium">This comprehensive syllabus is recognized as one of the best <strong className="text-white font-semibold">commercial mushroom farming training</strong> manuals in the country.</span>
          </div>
        </section>

        {/* Section 6: Benefits of Mushroom Cultivation */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="badge bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mx-auto">Socio-Economic Value</div>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight">
              Benefits of <span className="gradient-text">Mushroom Cultivation</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              A climate-resilient crop that delivers structural financial advantages over classic agro-business setups.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary-start/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-start/10 text-primary-start flex items-center justify-center shrink-0">
                  <benefit.icon size={22} className="text-primary-start" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">{benefit.title}</h3>
                  <p className="text-xs text-slate-450 leading-relaxed text-slate-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Why Choose Our Mushroom Training Program */}
        <section className="glass p-6 md:p-12 rounded-[2.5rem] border border-white/5 text-center space-y-6 relative bg-white/[0.02] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-start/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <div className="badge bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 mx-auto">Commercial Authority</div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-white">
              Why Choose Our <span className="gradient-text">Mushroom Training Program</span>?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We aren't simple theoreticians or online aggregators. We operate one of the premier physical commercial organic labs and production farms in central India. Sourcing high-grade seed cultures, structuring automated vertical growth rooms, obtaining state agro-subsidies, and closing high-volume commercial vendor deals can be intimidating without expert support.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-left">
              <div className="space-y-1 p-3 rounded-lg bg-black/40 border border-white/5 text-center">
                <div className="text-lg font-bold text-white">5000+</div>
                <div className="text-[10px] text-slate-400 uppercase font-black">Farmers Trained</div>
              </div>
              <div className="space-y-1 p-3 rounded-lg bg-black/40 border border-white/5 text-center">
                <div className="text-lg font-bold text-white">F1 Hybrid</div>
                <div className="text-[10px] text-slate-400 uppercase font-black">Spawn Quality</div>
              </div>
              <div className="space-y-1 p-3 rounded-lg bg-black/40 border border-white/5 text-center">
                <div className="text-lg font-bold text-white">Lifetime</div>
                <div className="text-[10px] text-slate-400 uppercase font-black">WhatsApp Help</div>
              </div>
              <div className="space-y-1 p-3 rounded-lg bg-black/40 border border-white/5 text-center">
                <div className="text-lg font-bold text-white">Turnkey</div>
                <div className="text-[10px] text-slate-400 uppercase font-black">Setup Experts</div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Join a scientifically validated coaching program designed structurally for modern agricultural success in all major districts of India.
            </p>
          </div>
        </section>

        {/* Section 7: FAQ Section (20 SEO FAQs with answers) */}
        <section id="seo-faqs" className="space-y-12">
          <div className="text-center space-y-4">
            <div className="badge bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mx-auto">Frequently Asked Questions</div>
            <h3 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight">
              Cultivation <span className="gradient-text">Knowledge</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              Get detailed answers to highly searched technical, financial, and regulatory questions about starting a modern agriculture business in India.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-colors"
                >
                  <span className="text-xs md:text-sm font-bold text-white flex gap-3 items-start">
                    <span className="text-primary-start font-bold select-none">{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <div className="shrink-0 ml-4 text-slate-500">
                    {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1 border-t border-white/5 text-[11px] md:text-xs text-slate-400 leading-relaxed space-y-2">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* SEO-friendly CTA section */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-primary-start/20 to-primary-end/20 border border-primary-start/30 p-8 md:p-12 text-center space-y-6">
          <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
              Ready to Start Your High-Yield <span className="gradient-text">Mushroom Farming Journey</span>?
            </h3>
            <p className="text-slate-350 text-xs md:text-sm text-slate-300">
              Stop waiting and start your journey with India's best practical education system. Learn correct composting techniques, buy contaminated-free pure grains, get certified status, and secure maximum local state marketing setup linkages!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/training-checkout"
                className="px-8 py-4 bg-gradient-to-r from-primary-start to-primary-end font-bold rounded-xl text-xs uppercase tracking-wider text-white shadow-lg hover:shadow-primary-start/50 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Enroll in Training Online - ₹299 <ArrowRight size={14} />
              </Link>
              <Link
                to="/book-consultant"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-xl text-xs uppercase tracking-wider text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Book 1-on-1 Consultation - ₹59 <Zap size={14} />
              </Link>
            </div>
            <p className="text-[10px] text-slate-500 font-medium">Looking for <strong className="text-slate-400">mushroom training near me</strong>? We ship lab-grade F1 hybrid spawn safely to every pin code in MP, UP, Bihar, Delhi & all Indian states.</p>
          </div>
        </section>
        
      </div>
    </div>
  );
}
