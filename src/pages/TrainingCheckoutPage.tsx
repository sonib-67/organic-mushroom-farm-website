import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, Loader2, ArrowLeft, Sprout, Leaf, Sparkles, ShieldCheck } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function TrainingCheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'cancelled'>('idle');

  useEffect(() => {
    document.title = "Checkout - Organic Mushroom Farm";
    window.scrollTo(0, 0);
    if (location.state && (location.state as any).retryFormData) {
      setFormData((location.state as any).retryFormData);
    }
  }, [location.state]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setPaymentStatus('idle');

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, productType: 'training' })
      });
      
      let payload;
      const text = await response.text();
      try {
        payload = JSON.parse(text);
      } catch (err) {
        console.error("Failed to parse JSON response:", text);
        throw new Error('Invalid JSON response from server');
      }
      
      if (!response.ok) throw new Error(payload?.error || 'Failed to fetch payload');

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
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            navigate('/payment-cancelled', { 
              state: { 
                amount: payload.amount, 
                currency: payload.currency, 
                productName: 'Training - Mushroom Cultivation',
                email: formData.email,
                from: '/training-checkout',
                formData: formData
              } 
            });
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
          setLoading(false);
          navigate('/payment-cancelled', { 
            state: { 
              amount: payload.amount, 
              currency: payload.currency, 
              productName: 'Training - Mushroom Cultivation',
              email: formData.email,
              from: '/training-checkout',
              formData: formData
            } 
          });
        });
        rzp.open();
      } else {
        console.error("Razorpay script not loaded properly");
        alert('Payment system error. Please refresh the page and try again.');
        setLoading(false);
      }
      
    } catch (error) {
      console.error(error);
      alert('Error initiating checkout. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#070707] bg-slate-50 flex flex-col items-center justify-center pt-24 pb-12 px-4 relative z-[999999] overflow-hidden">
      
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-indigo-500/20 dark:opacity-30 opacity-50 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-green-500/20 dark:opacity-30 opacity-50 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
      </div>

      {/* Floating 3D Elements for Desktop */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-32 left-[15%] hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl border dark:border-white/10 border-black/5 shadow-[0_20px_40px_-15px_rgba(37,211,102,0.3)] dark:bg-white/5 bg-white/60 backdrop-blur-xl"
      >
        <Sprout className="text-[#25D366] w-8 h-8 drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute bottom-32 right-[15%] hidden lg:flex items-center justify-center w-20 h-20 rounded-[2rem] border dark:border-white/10 border-black/5 shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] dark:bg-white/5 bg-white/60 backdrop-blur-xl"
      >
        <Leaf className="text-primary-start w-10 h-10 drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }} 
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-1/3 right-[20%] hidden lg:flex items-center justify-center w-12 h-12 rounded-full border dark:border-white/10 border-black/5 shadow-[0_15px_30px_-10px_rgba(234,179,8,0.3)] dark:bg-white/5 bg-white/60 backdrop-blur-xl"
      >
        <Sparkles className="text-yellow-500 w-6 h-6 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
      </motion.div>

      <div className="w-full max-w-md relative z-10 my-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 transition-colors mb-6 font-medium text-sm w-fit group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative p-[1px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group shadow-2xl"
        >
          {/* Luxury Gradient Glow Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-green-500 opacity-30 dark:opacity-50 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>

          <div className="relative dark:bg-[#0A0A0A]/90 bg-white/95 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 overflow-hidden h-full">
            {/* Subtle Inner Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 opacity-70"></div>

            {paymentStatus === 'cancelled' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-[0_0_40px_rgba(239,68,68,0.15)] ring-1 ring-red-500/20">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-2 sm:mb-3 tracking-tight">Payment Cancelled</h2>
                <p className="dark:text-slate-400 text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8 font-medium">Your premium training enrollment was not completed.</p>
                <button
                  onClick={() => {
                    setPaymentStatus('idle');
                    handleSubmit();
                  }}
                  className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] text-[14px] sm:text-[15px] text-white font-bold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                   Try Again - ₹299
                </button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/5 border mb-3 sm:mb-4">
                    <Sparkles className="text-yellow-500 w-3 h-3" />
                    <span className="text-[9px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Access</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-1.5 tracking-tight">Enroll in Training</h1>
                  <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-500 to-green-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Mushroom Cultivation - ₹299
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-3.5 sm:space-y-5">
                  <div className="group/input">
                    <label className="text-[10px] sm:text-[11px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5 block ml-1 transition-colors group-focus-within/input:text-primary-start">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-400 transition-colors group-focus-within/input:text-primary-start sm:w-[18px] sm:h-[18px]" />
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full box-border dark:bg-black/40 bg-slate-50/50 border dark:border-white/10 border-black/10 rounded-xl sm:rounded-2xl py-3 pl-10 pr-4 text-sm sm:pl-12 dark:text-white text-slate-900 placeholder:dark:text-slate-500 placeholder:text-slate-400 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start ring-offset-0 transition-all shadow-sm hover:dark:bg-white/[0.02] hover:bg-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="group/input">
                    <label className="text-[10px] sm:text-[11px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5 block ml-1 transition-colors group-focus-within/input:text-primary-start">Mobile Number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-400 transition-colors group-focus-within/input:text-primary-start sm:w-[18px] sm:h-[18px]" />
                      <input 
                        type="tel" 
                        required
                        pattern="[0-9]{10}"
                        value={formData.mobile}
                        onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full box-border dark:bg-black/40 bg-slate-50/50 border dark:border-white/10 border-black/10 rounded-xl sm:rounded-2xl py-3 pl-10 pr-4 text-sm sm:pl-12 dark:text-white text-slate-900 placeholder:dark:text-slate-500 placeholder:text-slate-400 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start ring-offset-0 transition-all shadow-sm hover:dark:bg-white/[0.02] hover:bg-white"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div className="group/input">
                    <label className="text-[10px] sm:text-[11px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5 block ml-1 transition-colors group-focus-within/input:text-primary-start">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-400 transition-colors group-focus-within/input:text-primary-start sm:w-[18px] sm:h-[18px]" />
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full box-border dark:bg-black/40 bg-slate-50/50 border dark:border-white/10 border-black/10 rounded-xl sm:rounded-2xl py-3 pl-10 pr-4 text-sm sm:pl-12 dark:text-white text-slate-900 placeholder:dark:text-slate-500 placeholder:text-slate-400 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start ring-offset-0 transition-all shadow-sm hover:dark:bg-white/[0.02] hover:bg-white"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 sm:mt-6 shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] text-[14px] sm:text-[15px] text-white font-black tracking-wide py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                  >
                    {loading ? <Loader2 size={18} className="animate-spin sm:w-5 sm:h-5" /> : (
                      <>
                        Complete Payment <ArrowLeft size={14} className="rotate-180 sm:w-4 sm:h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>

        {/* Secure Checkout Badge */}
        <div className="mt-8 flex items-center justify-center gap-2 dark:text-slate-500 text-slate-600 text-xs font-semibold uppercase tracking-widest">
          <ShieldCheck size={16} className="text-[#25D366]" />
          100% Secured by Razorpay
        </div>
      </div>
    </div>
  );
}
