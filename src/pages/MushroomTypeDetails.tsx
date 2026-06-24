import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowLeft, Thermometer, Droplets, Inbox, Calendar, 
  Coins, Sparkles, ArrowRight, BookOpen, Layers, Sprout, Home, Zap, 
  Cpu, TrendingUp, HelpCircle, PhoneCall, Search, Activity, Gem, Flame, Leaf
} from 'lucide-react';
import SEO from '../components/SEO';
import { mushroomDetails } from '../data/mushroomDetailData';
import { SHIPPING_DETAILS, MERCHANT_RETURN_POLICY } from '../utils/seoSchemas';

const MushroomTypeDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: null as string | null
  });

  // Find the exact mushroom details
  const info = slug ? mushroomDetails[slug] : null;

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!info) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-transparent">
        <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-6">
          <HelpCircle size={44} />
        </div>
        <h1 className="text-3xl font-extrabold text-white mb-2 uppercase tracking-tight">Variety Not Found</h1>
        <p className="text-slate-400 max-w-sm mb-8 font-medium">The requested mushroom variety setup details could not be loaded or is in preparation.</p>
        <Link to="/mushroom-types" className="btn-outline px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-white">
          Back to Varieties
        </Link>
      </div>
    );
  }

  // Handle Dynamic Lead Form
  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, error: null });
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formData.has('_subject')) {
      formData.append('_subject', `Variety Consultation Request: ${info.name} - ` + formData.get('name'));
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/df116a35555567e9addd5cf3304c3af1', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: null });
        form.reset();
      } else {
        const errorText = await response.text();
        setFormState({ submitting: false, succeeded: false, error: errorText || 'Failed to submit enquiry' });
      }
    } catch (err: any) {
      setFormState({ submitting: false, succeeded: false, error: err.message || String(err) });
    }
  };

  // Structured Data Schema markup for outstanding Google SEO!
  const mushroomSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": info.name,
    "image": info.image,
    "description": info.seoDescription,
    "brand": {
      "@type": "Brand",
      "name": "Organic Mushroom Farm"
    },
    "category": "Agricultural Setup & Spawns",
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "INR",
      "price": info.productionCost.includes("₹") ? info.productionCost.replace(/[^0-9]/g, "") : "100",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "shippingDetails": SHIPPING_DETAILS,
      "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Scientific Name",
        "value": info.scientific
      },
      {
        "@type": "PropertyValue",
        "name": "Optimal Cropping Temperature",
        "value": info.parameters.temperature
      },
      {
        "@type": "PropertyValue",
        "name": "Required Humidity Level",
        "value": info.parameters.humidity
      },
      {
        "@type": "PropertyValue",
        "name": "Production Substrate",
        "value": info.parameters.substrate
      }
    ]
  };

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-body)]">
      <SEO 
        title={`${info.seoTitle} | Organic Mushroom Farm`}
        description={info.seoDescription}
        schemas={[mushroomSchema]}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:py-24 overflow-hidden border-b border-white/5 bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.06),transparent_60%)] z-0"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link 
            to="/mushroom-types" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 uppercase tracking-widest text-[10px] font-bold transition-colors"
          >
            <ArrowLeft size={14} /> Back to Varieties List
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge text-[9px] uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full">
                  Scientific: {info.scientific}
                </span>
                <span className="badge text-[9px] uppercase tracking-widest bg-primary-start/10 text-primary-start border border-primary-start/20 px-3 py-1 rounded-full">
                  Level: {info.difficulty}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none uppercase">
                {info.name}
              </h1>

              <p className="text-lg text-slate-300 md:max-w-2xl font-semibold leading-relaxed">
                {info.tagline}
              </p>

              <div className="grid grid-cols-3 gap-4 xl:max-w-xl bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="text-center md:text-left">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Market Price</div>
                  <div className="text-sm md:text-base font-extrabold text-white">{info.marketPrice}</div>
                </div>
                <div className="text-center md:text-left border-l border-white/15 pl-4">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Production Cost</div>
                  <div className="text-sm md:text-base font-extrabold text-slate-400">{info.productionCost}</div>
                </div>
                <div className="text-center md:text-left border-l border-white/15 pl-4">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Profit Range</div>
                  <div className="text-sm md:text-base font-extrabold text-emerald-400">{info.profitMargin}</div>
                </div>
              </div>
            </div>

            {/* Glowing Tech Vector Spec Card replacing the physical image */}
            <div className="lg:col-span-4 shrink-0 mt-8 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-[2.5rem] overflow-hidden border border-white/10 p-8 shadow-2xl relative group bg-radial-to-br from-primary-start/15 via-transparent to-black/30 flex flex-col justify-between min-h-[260px]"
              >
                <div className="space-y-4 text-center">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">{info.name}</h3>
                    <p className="text-xs font-mono text-primary-start italic">{info.scientific}</p>
                  </div>
                  
                  <div className="flex justify-center gap-2 flex-wrap">
                    <span className="badge scale-90">Biological Spawn Grade A</span>
                    <span className="badge scale-90 text-[10px] text-emerald-400">Yield Optimize</span>
                  </div>
                </div>

                <div className="pt-6 w-full text-center">
                  <a 
                    href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20premium%20spawn%20for%20${encodeURIComponent(info.name)}.%20Please%20send%20details.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn bg-primary-start hover:bg-emerald-600 dark:text-white text-slate-900 w-full py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest block text-center shadow-lg transition-all"
                  >
                    Buy Spawn (Seed)
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Specifications Left Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Box */}
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 space-y-6">
              <h2 className="text-2xl font-black uppercase text-white tracking-tight flex items-center gap-2">
                <BookOpen size={24} className="text-primary-start" /> Variety Overview
              </h2>
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                {info.overview}
              </p>
            </div>

            {/* Farming Technical Parameters Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-white tracking-tight flex items-center gap-2">
                <Cpu size={24} className="text-primary-start" /> Optimal Farming Parameters
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="glass p-6 rounded-3xl border border-white/5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                    <Thermometer size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Temperature Variables</h4>
                    <p className="text-sm font-bold text-white">{info.parameters.temperature}</p>
                    <p className="text-xs text-slate-400 mt-1">Must maintain tight controls in respective cropping rooms.</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-3xl border border-white/5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Droplets size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Required Humidity (RH)</h4>
                    <p className="text-sm font-bold text-white">{info.parameters.humidity}</p>
                    <p className="text-xs text-slate-400 mt-1">Regulated through modern high pressure misting systems.</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-3xl border border-white/5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Layers size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Production Substrate</h4>
                    <p className="text-sm font-bold text-white">{info.parameters.substrate}</p>
                    <p className="text-xs text-slate-400 mt-1">Carefully analyzed agricultural bio-waste combinations.</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-3xl border border-white/5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Mycelium Incubation Time</h4>
                    <p className="text-sm font-bold text-white">{info.parameters.incubation}</p>
                    <p className="text-xs text-slate-400 mt-1">Conducted inside fully dark incubation chambers.</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-3xl border border-white/5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Active Cropping Phase</h4>
                    <p className="text-sm font-bold text-white">{info.parameters.cropping}</p>
                    <p className="text-xs text-slate-400 mt-1">Flushes occur in multiple automated picking cycles.</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-3xl border border-white/5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                    <Inbox size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Casing Layer Status</h4>
                    <p className="text-sm font-bold text-white">{info.parameters.casing}</p>
                    <p className="text-xs text-slate-400 mt-1">{info.parameters.casing === "Required" ? "Essential for mycelium protection & pins activation." : "Can be bypassed safely to cut setup costs."}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Premium Commercial Key Highlights */}
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 space-y-6">
              <h2 className="text-2xl font-black uppercase text-white tracking-tight flex items-center gap-2">
                <Sparkles size={24} className="text-primary-start" /> Market Advantages
              </h2>
              <div className="grid gap-4">
                {info.keyFeatures.map((feat, fIdx) => {
                  const parts = feat.split(":");
                  return (
                    <div key={fIdx} className="flex gap-3 bg-white/[0.01] p-4 rounded-2xl border border-white/5">
                      <CheckCircle2 size={18} className="text-primary-start shrink-0 mt-1" />
                      <div>
                        {parts.length > 1 ? (
                          <>
                            <strong className="text-white text-base block mb-0.5">{parts[0]}</strong>
                            <p className="text-sm text-slate-400">{parts[1]}</p>
                          </>
                        ) : (
                          <span className="text-sm text-slate-300">{feat}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step-by-Step Farming Guide */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-white tracking-tight flex items-center gap-2">
                <Cpu size={24} className="text-primary-start" /> Step-by-Step Farming Protocol
              </h2>

              <div className="relative border-l-2 border-white/5 pl-6 ml-4 space-y-8">
                {info.farmingSteps.map((step, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-black border-2 border-primary-start flex items-center justify-center text-primary-start text-[10px] font-black group-hover:bg-primary-start group-hover:text-black transition-all">
                      {sIdx + 1}
                    </div>
                    <div className="glass p-6 rounded-3xl border border-white/5 group-hover:border-primary-start/20 transition-all space-y-2">
                      <h4 className="text-lg font-bold text-white">{step.Title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-semibold">{step.Desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Commercial Market Demand section */}
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 space-y-4">
              <h3 className="text-xl font-bold uppercase text-white tracking-tight">Supply Dynamics & Subsidies</h3>
              <div 
                className="text-sm md:text-base text-slate-300 leading-relaxed font-semibold"
                dangerouslySetInnerHTML={{ __html: info.marketDemandHtml }}
              />
            </div>

          </div>

          {/* Setup Inquiry Side Column Right */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Consultation Quote Card */}
            <div className="glass border border-white/10 p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-emerald-500/10 blur-[50px] rounded-full"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <PhoneCall size={22} />
                </div>
                
                <div>
                  <h3 className="text-xl font-black uppercase text-white leading-tight">Got Questions?</h3>
                  <p className="text-xs text-slate-400 mt-1 font-semibold">Speak directly with our Chief Tech Consultant.</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 bg-white/2 p-3 rounded-xl border border-white/5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-xs font-semibold text-slate-300">Custom project profiling</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/2 p-3 rounded-xl border border-white/5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-xs font-semibold text-slate-300">Subsidy documentation assistance</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/2 p-3 rounded-xl border border-white/5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-xs font-semibold text-slate-300">Wholesale pricing options</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20regarding%20commercial%20${encodeURIComponent(info.name)}%20farming%20setup.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn bg-white dark:text-black text-slate-900 w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest block text-center hover:bg-slate-200 transition-colors"
                >
                  Direct WhatsApp Consult
                </a>
              </div>
            </div>

            {/* Custom Interactive Lead Feed Form */}
            <div className="glass p-6 md:p-8 rounded-[2.5rem] border border-white/5 space-y-6">
              <div>
                <h3 className="text-lg font-black uppercase text-white tracking-tight">Variety Project Inquiry</h3>
                <p className="text-xs text-slate-500 mt-1 font-semibold">Submit your location and requirements for a customized business blueprint.</p>
              </div>

              {formState.succeeded ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-base font-bold text-white">We've Received Your Booking!</h4>
                  <p className="text-xs text-slate-400 max-w-[200px] mx-auto">Tanish Soni Sir will touch base with you shortly regarding coordinates.</p>
                  <button 
                    onClick={() => setFormState({ submitting: false, succeeded: false, error: null })}
                    className="text-[10px] font-black uppercase tracking-widest text-[#00E5FF] hover:underline"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  {/* Hidden tracking */}
                  <input type="hidden" name="targeted_mushroom_variety" value={info.name} />
                  <input type="hidden" name="_date" value={new Date().toLocaleDateString()} />

                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Name *</label>
                    <input 
                      id="name" name="name" required type="text" placeholder="John Doe" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs placeholder:text-slate-700 h-11 focus:outline-none focus:border-primary-start"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Mobile No *</label>
                    <input 
                      id="phone" name="phone" required type="tel" placeholder="e.g. +91 92035 44140" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs placeholder:text-slate-700 h-11 focus:outline-none focus:border-primary-start"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address *</label>
                    <input 
                      id="email" name="email" required type="email" placeholder="john@domain.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs placeholder:text-slate-700 h-11 focus:outline-none focus:border-primary-start"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="loctype" className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Location Details *</label>
                    <input 
                      id="loctype" name="proposed_location" required type="text" placeholder="City, State" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs placeholder:text-slate-700 h-11 focus:outline-none focus:border-primary-start"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Specific Requirements *</label>
                    <textarea 
                      id="message" name="message" required rows={3} placeholder="Describe project scale or queries..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs placeholder:text-slate-700 focus:outline-none focus:border-primary-start resize-none min-h-[75px]"
                    />
                  </div>

                  {formState.error && (
                    <p className="text-red-500 text-[10px] font-bold">{formState.error}</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={formState.submitting}
                    className={`btn bg-primary-start text-white w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest relative overflow-hidden transition-all hover:brightness-110 active:scale-[0.98] ${formState.submitting ? 'opacity-70' : ''}`}
                  >
                    {formState.submitting ? "Booking..." : "Submit Project Specs"}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Explore other premium types section (replaces image grid with exquisite micro-vector badge tiles) */}
      <section className="section-padding border-t border-white/5 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black uppercase text-white tracking-tight">Explore Other Premium Varieties</h2>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-black text-primary-start">Commercial Yield portfolios</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.values(mushroomDetails)
              .filter(item => item.slug !== info.slug)
              .slice(0, 4)
              .map((m, mIdx) => {
                const specSlug = m.slug;
                return (
                  <Link 
                    key={mIdx} 
                    to={`/mushroom-types/${m.slug}`}
                    className="glass border border-white/5 rounded-3xl overflow-hidden hover:border-primary-start/20 transition-all group block text-center p-6 space-y-4"
                  >
                    <div className="relative h-20 w-20 rounded-full bg-primary-start/10 border border-primary-start/25 flex items-center justify-center text-primary-start mx-auto group-hover:scale-105 transition-transform duration-300">
                      {specSlug === 'white-button' ? <Gem size={28} /> : 
                       specSlug === 'oyster' ? <Flame size={28} /> :
                       specSlug === 'milky-mushroom' ? <Leaf size={28} /> :
                       specSlug === 'shiitake' ? <Sparkles size={28} /> :
                       specSlug === 'lions-mane' ? <Cpu size={28} /> :
                       specSlug === 'reishi' ? <Activity size={28} /> :
                       specSlug === 'cordyceps' ? <Zap size={28} /> :
                       <Sprout size={28} />}
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-white group-hover:text-primary-start transition-colors leading-none uppercase">{m.name}</h4>
                      <p className="text-[10px] font-bold italic text-slate-500 mt-1.5 leading-none">{m.scientific}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default MushroomTypeDetails;
