import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, MapPin, X, Users, Zap, Briefcase, Layers, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookConsultantPage() {
  const [modalState, setModalState] = useState<'idle' | 'form' | 'cancelled' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', preferredDate: '' });

  useEffect(() => {
    if (modalState === 'success') {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Purchase', { currency: 'INR', value: 59.00 });
      }
    }
  }, [modalState]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          productType: 'consultation',
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          preferredDate: formData.preferredDate
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
          setModalState('success');
        },
        modal: {
          ondismiss: function() {
            setModalState('cancelled');
          }
        }
      };

      if (typeof window !== "undefined" && (window as any).Razorpay) {
        if ((window as any).fbq) {
          (window as any).fbq('track', 'InitiateCheckout', { currency: payload.currency, value: payload.amount / 100 });
        }
        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          console.error(response.error);
          setModalState('cancelled');
        });
        rzp.open();
      } else {
        console.error("Razorpay script not loaded properly");
        alert('Payment system error. Please refresh the page and try again.');
        setModalState('idle');
      }
    } catch (error) {
      console.error(error);
      alert('Error initiating checkout. Please try again.');
      setModalState('idle');
    }
  };

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

  const generateWhatsappLink = () => {
    const text = 'New Consultant Booking 🎉\\n\\nName: ' + formData.name + '\\nMobile: ' + formData.phone + '\\nEmail: ' + formData.email + '\\nDate: ' + formData.preferredDate + '\\n\\nPayment Status: Paid ₹59';
    return 'https://wa.me/919203544140?text=' + encodeURIComponent(text);
  };

  return (
    <div className="relative pb-24 md:pb-0 pt-16 md:pt-32 overflow-hidden min-h-screen selection:bg-blue-500/30">
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
              onClick={() => setModalState('form')}
              className="relative overflow-hidden rounded-lg md:rounded-2xl group px-4 md:px-12 py-2.5 md:py-5 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all font-bold text-[11px] md:text-lg inline-flex items-center gap-1.5 md:gap-2"
            >
              <Zap size={14} className="md:w-6 md:h-6" /> Book Consultant Now - ₹59
            </motion.button>
          </motion.div>
        </div>
      </div>

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

      <AnimatePresence>
        {modalState === 'form' && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="glass border dark:border-white/10 border-black/10 rounded-xl md:rounded-3xl p-6 md:p-8 w-full max-w-md relative overflow-hidden text-left"
            >
              <button 
                onClick={() => setModalState('idle')}
                className="absolute top-3 right-3 text-slate-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition-colors z-20"
              >
                <X size={16} />
              </button>
              
              <h3 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-2">Book Consultant</h3>
              <p className="text-xs md:text-sm text-slate-400 mb-6">Enter your details to proceed to payment.</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10 w-full">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full box-border dark:bg-black/40 bg-white border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm dark:text-white text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full box-border dark:bg-black/40 bg-white border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm dark:text-white text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full box-border dark:bg-black/40 bg-white border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm dark:text-white text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Preferred Date</label>
                  <input 
                    type="date" 
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full box-border dark:bg-black/40 bg-white border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm dark:text-white text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  Proceed to Pay ₹59
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}

        {modalState === 'cancelled' && (
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
              className="glass border dark:border-white/10 border-black/10 rounded-xl md:rounded-3xl p-6 md:p-8 w-full max-w-sm relative overflow-hidden text-center"
            >
              <button 
                onClick={() => setModalState('idle')}
                className="absolute top-3 right-3 text-slate-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition-colors z-20"
              >
                <X size={16} />
              </button>
              
              <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <X size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-2">Payment Cancelled ❌</h3>
              <p className="text-sm text-slate-400 mb-6">Your consultation booking was not completed.<br/>Please try again to continue.</p>
              
              <div className="space-y-3 relative z-10 w-full">
                <button
                  onClick={() => setModalState('form')}
                  className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <Zap size={18} /> Try Again
                </button>
                <Link
                  to="/"
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-slate-300 hover:text-white transition-all text-sm"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}

        {modalState === 'success' && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="glass-dark border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 w-full max-w-sm relative overflow-hidden text-center bg-black"
            >
              <button 
                onClick={() => setModalState('idle')}
                className="absolute top-3 right-3 text-slate-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition-colors z-20"
              >
                <X size={16} />
              </button>
              
              <div className="py-6">
                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3">Consultation Booked Successfully 🎉</h3>
                <p className="text-sm text-slate-400 mb-8">Our team will contact you shortly.</p>
                
                <a 
                  href={generateWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all hover:scale-[1.02]"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
