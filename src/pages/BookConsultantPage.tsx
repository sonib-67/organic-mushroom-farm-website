import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, TrendingUp, ShieldCheck, MapPin, X, ArrowRight, BookOpen, Layers, Users, Zap, Briefcase, Calendar, Phone, MessageCircle, Sprout, Home, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookConsultantPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(formData.name.trim() !== '' && formData.phone.trim() !== '' && formData.email.trim() !== '');
  }, [formData]);

  const includedItems = [
    { title: "Custom Project Blueprint", desc: "Tailored strategy based on your target investment, location, and climate.", icon: MapPin },
    { title: "Subsidy & Loan Guidance", desc: "Expert insights on government schemes, NHB/NABARD subsidies, and documentation.", icon: Briefcase },
    { title: "Vendor & Spawn Sourcing", desc: "Direct connections to verified high-yield spawn suppliers and raw material vendors.", icon: Layers },
    { title: "Contamination Troubleshooting", desc: "Quick diagnostic frameworks to eliminate mold, pests, and yield drops.", icon: ShieldCheck }
  ];

  const whoIsItFor = [
    "Serious beginners ready to start right",
    "Traditional farmers scaling to commercial levels",
    "Investors building fully automated climate-controlled plants"
  ];

  return (
    <div className="relative pb-24 md:pb-0 pt-16 md:pt-32 overflow-hidden min-h-screen selection:bg-blue-500/30">
      {/* Hero Section */}
      <div className="py-4 md:py-16 text-center px-2 md:px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge mx-auto mb-2 md:mb-6 text-[9px] md:text-sm bg-blue-500/10 text-blue-400 border-blue-500/20 px-2 py-0.5 md:px-4 md:py-1">Premium Consulting</div>
            <h1 className="text-xl md:text-5xl lg:text-6xl font-extrabold dark:text-white text-slate-900 mb-1.5 md:mb-6 tracking-tighter leading-tight uppercase">
              1-on-1 Commercial <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Mushroom Consultancy</span>
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-[10px] md:text-xl max-w-2xl mx-auto font-medium mb-3 md:mb-10 leading-snug px-2">
              Get direct, actionable solutions from industry experts to avoid costly mistakes and scale profitably.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="relative overflow-hidden rounded-lg md:rounded-2xl group px-4 md:px-12 py-2.5 md:py-5 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all font-bold text-[11px] md:text-lg inline-flex items-center gap-1.5 md:gap-2"
            >
              <Zap size={14} className="md:w-6 md:h-6" /> Book Consultation Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* What's Included */}
      <div className="py-4 md:py-16 dark:bg-white/5 bg-black/5 px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 md:mb-12">
            <h3 className="text-md md:text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-0.5 md:mb-2">What's <span className="text-blue-500">Included</span></h3>
            <p className="dark:text-slate-400 text-slate-600 text-[9px] md:text-base">Everything you need to launch and scale efficiently.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-6">
            {includedItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-2 md:p-6 rounded-lg md:rounded-3xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-colors flex flex-col items-center text-center"
              >
                <div className="w-6 h-6 md:w-16 md:h-16 rounded-md md:rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-1.5 md:mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-3 h-3 md:w-8 md:h-8" />
                </div>
                <h4 className="text-[10px] md:text-xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-3 leading-tight">{item.title}</h4>
                <p className="dark:text-slate-400 text-slate-600 text-[8px] md:text-sm leading-tight md:leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Who is this for */}
      <div className="py-4 md:py-16 px-2 md:px-4">
        <div className="max-w-4xl mx-auto glass p-3 md:p-10 rounded-xl md:rounded-[3rem] border dark:border-white/10 border-black/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-2 md:p-10 opacity-5">
              <Users size={60} className="md:w-[200px] md:h-[200px]" />
           </div>
           <h3 className="text-md md:text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-2 md:mb-8 text-center relative z-10">Who Is This <span className="text-blue-500">For?</span></h3>
           <ul className="space-y-1.5 md:space-y-6 relative z-10 max-w-2xl mx-auto">
             {whoIsItFor.map((item, i) => (
               <li key={i} className="flex items-center gap-1.5 md:gap-4 dark:text-slate-200 text-slate-800 font-bold text-[9px] md:text-lg text-left">
                 <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0">
                   <CheckCircle2 size={10} className="md:w-5 md:h-5" />
                 </div>
                 {item}
               </li>
             ))}
           </ul>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass border dark:border-white/10 border-black/10 rounded-xl md:rounded-3xl p-4 md:p-8 w-full max-w-md relative overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 md:top-4 md:right-4 text-slate-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition-colors"
              >
                <X size={14} className="md:w-4 md:h-4" />
              </button>
              
              <h3 className="text-sm md:text-2xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-1 mt-1">Your Details</h3>
              <p className="text-[9px] md:text-sm text-slate-400 mb-3 md:mb-6">Please provide your details to proceed to payment.</p>
              
              <div className="space-y-2 md:space-y-4 mb-4 md:mb-6 relative z-10">
                <div>
                  <label className="block text-[8px] md:text-xs font-bold text-slate-400 mb-0.5 md:mb-1 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/20 border border-white/10 rounded-md md:rounded-lg px-2 md:px-4 py-1.5 md:py-3 text-[10px] md:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[8px] md:text-xs font-bold text-slate-400 mb-0.5 md:mb-1 uppercase tracking-wider">Mobile Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black/20 border border-white/10 rounded-md md:rounded-lg px-2 md:px-4 py-1.5 md:py-3 text-[10px] md:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter WhatsApp number" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-[8px] md:text-xs font-bold text-slate-400 mb-0.5 md:mb-1 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/20 border border-white/10 rounded-md md:rounded-lg px-2 md:px-4 py-1.5 md:py-3 text-[10px] md:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter email address" 
                    required
                  />
                </div>
              </div>

              {/* Razorpay Conditional Button */}
              {isFormValid ? (
                <button
                  type="button"
                  onClick={async (e) => {
                    e.preventDefault();
                    // Custom implementation for consultation
                    try {
                      const response = await fetch('/api/checkout-payload', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                          name: formData.name, 
                          mobile: formData.phone, 
                          email: formData.email, 
                          productType: 'consultation' 
                        })
                      });
                      
                      const payload = await response.json();
                      if (!response.ok) throw new Error(payload.error || 'Failed to fetch payload');

                      const options = {
                        key: payload.key_id,
                        amount: payload.amount,
                        currency: payload.currency,
                        name: payload.name,
                        description: payload.description,
                        prefill: payload.prefill,
                        notes: payload.notes,
                        theme: payload.theme,
                        handler: function (response: any) {
                          window.location.href = '/payment-success?id=' + response.razorpay_payment_id;
                        }
                      };

                      const rzp = new (window as any).Razorpay(options);
                      rzp.open();
                    } catch (error) {
                      console.error(error);
                      alert('Error initiating checkout. Please try again.');
                    }
                  }}
                  className="relative overflow-hidden rounded-md md:rounded-lg group w-full bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all border dark:border-white/10 border-black/10 h-8 md:h-12 flex items-center justify-center cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center font-bold z-10 px-2 md:px-4 gap-1.5 md:gap-2 whitespace-nowrap text-[9px] md:text-sm">
                    <span>Proceed to Payment</span> <ArrowRight size={10} className="md:w-3 md:h-3" />
                  </div>
                  <div className="absolute inset-0 rounded-md md:rounded-lg bg-blue-400 animate-pulse opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
              ) : (
                <button 
                  disabled
                  className="w-full relative overflow-hidden rounded-md md:rounded-lg group px-3 py-2 md:px-4 md:py-3 bg-slate-800 text-slate-400 transition-all font-bold text-[9px] md:text-sm flex items-center justify-center gap-1.5 md:gap-2 cursor-not-allowed"
                >
                  Fill form to Proceed <ArrowRight size={10} className="md:w-3 md:h-3" />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
