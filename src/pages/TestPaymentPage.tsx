"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, Lock, ChevronRight, ChevronDown, ArrowLeft, Shield, ShieldCheck, CreditCard, Building2, Clock, HeadphonesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loadRazorpayScript } from '../utils/razorpay';
import SEO from '../components/SEO';

export default function TestPaymentPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); 

  useEffect(() => {
    window.scrollTo(0, 0);
    loadRazorpayScript();
  }, []);

  const handleProcessNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.mobile && formData.email) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const initiatePayment = async (customMethod: string | null) => {
    setLoading(true);
    
    try {
      // Step 1: Request Order from backend
      const response = await fetch('/api/test-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      
      const order = await response.json();
      
      if (!response.ok) throw new Error(order.error || 'Failed to generate order');

      // Step 2: Configure Razorpay options
      const options: any = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YourKeyHere', 
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Organic Mushroom Farm",
        description: "₹1 Test Payment",
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile
        },
        theme: { color: "#0C4524" }, // Exact Razorpay dark green from image
        handler: function (response: any) {
          navigate(`/payment-success?id=${response.razorpay_payment_id}&type=test_1_rupee`);
          setLoading(false);
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };

      // Force Razorpay to open a specific method natively (UPI, Card, or Netbanking)
      // This delegates all validation (QR code, UPI intent, Card number check) to Razorpay!
      if (customMethod) {
        options.config = {
          display: {
            blocks: {
              [customMethod]: {
                name: `Pay via ${customMethod}`,
                instruments: [
                  {
                    method: customMethod,
                  }
                ]
              }
            },
            sequence: [`block.${customMethod}`],
            preferences: {
              show_default_blocks: false
            }
          }
        };
      }

      await loadRazorpayScript();

      if (typeof window !== "undefined" && (window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          setLoading(false);
          alert('Payment Failed: ' + response.error.description);
        });
        rzp.open();
      } else {
        alert('Razorpay failed to load');
        setLoading(false);
      }
    } catch (error: any) {
      alert('Error: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <SEO title="Secure Checkout | ₹1 Test" />
      
      <AnimatePresence mode="wait">
        
        {/* =========================================
            STEP 1: USER DETAILS FORM
            ========================================= */}
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-grow flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden">
              <div className="bg-[#0C4524] p-8 text-center">
                 <div className="w-16 h-16 bg-white rounded-2xl p-2 mx-auto mb-4 shadow-lg">
                   <img src="/mushroom-icon.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/7144/7144203.png' }} />
                 </div>
                 <h2 className="text-2xl font-bold text-white tracking-tight">Contact Details</h2>
                 <p className="text-white/80 text-sm mt-2">Enter details to proceed to the ₹1 test payment</p>
              </div>
              <form onSubmit={handleProcessNow} className="p-8 space-y-6">
                <div>
                  <div className="relative">
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full pt-6 pb-2 px-4 rounded-xl border-2 border-slate-200 focus:border-[#0C4524] outline-none peer text-slate-900 font-medium transition-colors" placeholder=" " />
                    <label className="absolute left-4 top-4 text-slate-500 font-medium text-[15px] transition-all peer-focus:-translate-y-2 peer-focus:text-[11px] peer-focus:text-[#0C4524] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[11px]">Full Name</label>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input required type="tel" pattern="[0-9]{10}" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} className="w-full pt-6 pb-2 px-4 rounded-xl border-2 border-slate-200 focus:border-[#0C4524] outline-none peer text-slate-900 font-medium transition-colors" placeholder=" " />
                    <label className="absolute left-4 top-4 text-slate-500 font-medium text-[15px] transition-all peer-focus:-translate-y-2 peer-focus:text-[11px] peer-focus:text-[#0C4524] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[11px]">Mobile Number</label>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full pt-6 pb-2 px-4 rounded-xl border-2 border-slate-200 focus:border-[#0C4524] outline-none peer text-slate-900 font-medium transition-colors" placeholder=" " />
                    <label className="absolute left-4 top-4 text-slate-500 font-medium text-[15px] transition-all peer-focus:-translate-y-2 peer-focus:text-[11px] peer-focus:text-[#0C4524] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[11px]">Email Address</label>
                  </div>
                </div>
                <button type="submit" className="w-full bg-[#0C4524] text-white font-bold py-4 rounded-xl flex items-center justify-center text-[17px] active:scale-[0.98] transition-all shadow-lg shadow-[#0C4524]/20 mt-4">
                  Pay Now
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {/* =========================================
            STEP 2: RAZORPAY CUSTOM UI (EXACT MATCH)
            ========================================= */}
        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-md mx-auto bg-[#FAFBFC] min-h-screen relative pb-40 shadow-2xl"
          >
            {loading && (
               <div className="absolute inset-0 z-50 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center">
                 <Loader2 size={44} className="animate-spin text-[#0C4524] mb-4" />
                 <p className="font-bold text-slate-800 text-lg">Processing...</p>
                 <p className="text-sm text-slate-500 mt-1">Opening secure gateway</p>
               </div>
            )}

            {/* --- Dark Green Header --- */}
            <div className="bg-[#0b3d1f] text-white px-5 pt-6 pb-24 rounded-b-3xl shadow-sm">
              <div className="flex items-start justify-between">
                 <div className="flex items-center gap-3">
                    <button onClick={() => setStep(1)} className="p-1 -ml-2 hover:bg-white/10 rounded-full transition-colors">
                      <ArrowLeft size={24} strokeWidth={2.5}/>
                    </button>
                    <div className="bg-white p-1 rounded-xl shadow-sm">
                       <img src="/mushroom-icon.png" alt="Logo" className="w-9 h-9 object-contain rounded-lg" onError={(e) => { e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/7144/7144203.png' }} />
                    </div>
                    <div className="flex flex-col">
                       <h1 className="font-bold text-[17px] leading-tight tracking-wide">Organic Mushroom Farm</h1>
                       <p className="text-[12px] text-white/90 mt-0.5 font-medium">Grow Naturally, Live Healthy</p>
                    </div>
                 </div>
                 
                 <div className="flex flex-col items-end text-right ml-2 shrink-0 pt-1">
                    <div className="flex items-center gap-1.5 opacity-90">
                      <Shield size={14} strokeWidth={2.5}/> 
                      <span className="font-bold text-[12px]">Secure Payment</span>
                    </div>
                    <div className="text-[10px] opacity-80 mt-1 font-medium">Powered by <span className="font-bold italic">Razorpay</span></div>
                 </div>
              </div>
            </div>

            {/* --- Main Content (Overlaps Header) --- */}
            <div className="px-5 -mt-16 relative z-10 space-y-5">
               
               {/* 1. Summary Card */}
               <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100">
                   <div className="flex justify-between items-start mb-5">
                      <div className="flex gap-4 items-center">
                          <img src="/mushroom-icon.png" alt="Product" className="w-14 h-14 rounded-[14px] object-cover bg-slate-50 border border-slate-100 p-1" onError={(e) => { e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/7144/7144203.png' }} />
                          <div className="flex flex-col">
                             <h2 className="font-bold text-slate-800 text-[18px] leading-tight">Test Payment</h2>
                             <p className="text-[13px] text-slate-500 mt-1 font-medium">Organic Mushroom Farm – ₹1 Test Payment</p>
                          </div>
                      </div>
                      <div className="font-bold text-[18px] text-slate-800 tracking-tight">₹1.00</div>
                   </div>
                   <div className="border-t border-dashed border-slate-200 my-4"></div>
                   <div className="flex justify-between items-center">
                      <span className="font-bold text-[16px] text-slate-900">Total Amount</span>
                      <span className="font-bold text-[#0b3d1f] text-[20px] tracking-tight">₹1.00</span>
                   </div>
               </div>

               {/* 2. Trust Banner */}
               <div className="bg-[#f0f9ec] rounded-xl p-3.5 flex items-center justify-center gap-2 text-[12px] text-[#0b3d1f] font-medium border border-[#d1ebd3] shadow-sm">
                   <ShieldCheck size={16} className="text-[#0b3d1f]" strokeWidth={2.5} />
                   <span>100% Secure Payments <span className="text-[#a1d9a8] mx-2">|</span> Your data is safe with us</span>
               </div>

               {/* 3. Payment Options Section */}
               <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-slate-100">
                  <h3 className="font-bold text-[20px] text-slate-900 tracking-tight">Payment Options</h3>
                  <p className="text-[14px] text-slate-500 mb-6 font-medium">Choose a payment method to continue</p>

                  <div className="space-y-4">
                     
                     {/* UPI Button */}
                     <button onClick={() => initiatePayment('upi')} className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-[20px] hover:border-[#0b3d1f]/40 hover:bg-[#f8fdf9] transition-all active:scale-[0.99] shadow-sm">
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 rounded-2xl border border-green-500 flex items-center justify-center bg-white shadow-sm shrink-0">
                              {/* BHIM UPI Triangle SVG Approximation */}
                              <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8"><path d="M24 6L42 24L24 42L6 24L24 6z" fill="#FFF"/><path d="M24 13L13 24L24 35L35 24L24 13z" fill="#000"/><path d="M24 17L17 24L24 31L31 24L24 17z" fill="#F7931E"/><path d="M28 24L24 20v8l4-4z" fill="#249B55"/></svg>
                           </div>
                           <div className="text-left flex flex-col justify-center gap-0.5">
                              <div className="flex items-center gap-2">
                                 <span className="font-bold text-slate-900 text-[17px]">UPI</span>
                                 <span className="bg-[#e6f4ea] text-[#0b3d1f] text-[11px] font-bold px-2 py-0.5 rounded-md tracking-wide">Recommended</span>
                              </div>
                              <p className="text-[13px] text-slate-500 font-medium">Pay using any UPI app</p>
                           </div>
                        </div>
                        <ChevronRight className="text-slate-400" size={22} strokeWidth={2.5} />
                     </button>

                     {/* Cards Button */}
                     <button onClick={() => initiatePayment('card')} className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-[20px] hover:border-[#0b3d1f]/40 hover:bg-[#f8fdf9] transition-all active:scale-[0.99] shadow-sm">
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center bg-[#FAFBFC] text-[#0b3d1f] shrink-0">
                              <CreditCard strokeWidth={2} size={26} />
                           </div>
                           <div className="text-left flex flex-col justify-center gap-0.5">
                              <span className="font-bold text-slate-900 text-[17px]">Cards</span>
                              <p className="text-[13px] text-slate-500 font-medium truncate max-w-[200px]">Visa, Mastercard, RuPay & more</p>
                           </div>
                        </div>
                        <ChevronRight className="text-slate-400" size={22} strokeWidth={2.5} />
                     </button>

                     {/* Net Banking Button */}
                     <button onClick={() => initiatePayment('netbanking')} className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-[20px] hover:border-[#0b3d1f]/40 hover:bg-[#f8fdf9] transition-all active:scale-[0.99] shadow-sm">
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center bg-[#FAFBFC] text-[#0b3d1f] shrink-0">
                              <Building2 strokeWidth={2} size={26} />
                           </div>
                           <div className="text-left flex flex-col justify-center gap-0.5">
                              <span className="font-bold text-slate-900 text-[17px]">Net Banking</span>
                              <p className="text-[13px] text-slate-500 font-medium">Pay using your preferred bank</p>
                           </div>
                        </div>
                        <ChevronRight className="text-slate-400" size={22} strokeWidth={2.5} />
                     </button>
                  </div>
               </div>

               {/* 4. Trust Icons Grid */}
               <div className="bg-transparent py-5 px-1">
                  <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-200">
                      <div className="flex flex-col items-center px-1">
                         <ShieldCheck className="text-[#0b3d1f] mb-3" size={30} strokeWidth={1.5}/>
                         <span className="font-bold text-[12px] text-slate-900">Secure Payments</span>
                         <span className="text-[11px] text-slate-500 mt-1.5 leading-snug font-medium">256-bit SSL<br/>Encryption</span>
                      </div>
                      <div className="flex flex-col items-center px-1">
                         <Clock className="text-[#0b3d1f] mb-3" size={30} strokeWidth={1.5}/>
                         <span className="font-bold text-[12px] text-slate-900">Instant Confirmation</span>
                         <span className="text-[11px] text-slate-500 mt-1.5 leading-snug font-medium">Get confirmation<br/>immediately</span>
                      </div>
                      <div className="flex flex-col items-center px-1">
                         <HeadphonesIcon className="text-[#0b3d1f] mb-3" size={30} strokeWidth={1.5}/>
                         <span className="font-bold text-[12px] text-slate-900">24/7 Support</span>
                         <span className="text-[11px] text-slate-500 mt-1.5 leading-snug font-medium">We are always<br/>here to help</span>
                      </div>
                  </div>
                  <div className="mt-10 text-center text-[12px] text-slate-500 flex items-center justify-center gap-1.5 pb-6">
                     <ShieldCheck size={16} className="text-[#0b3d1f]" strokeWidth={2.5}/> Secured by <span className="font-black text-[#133F20] italic tracking-tight">Razorpay</span> <span className="mx-1 text-slate-300">|</span> Trusted by 10,000+ customers
                  </div>
               </div>
            </div>

            {/* --- Sticky Bottom Checkout Bar --- */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 max-w-md mx-auto w-full shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)]">
               <div className="px-5 py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                     <span className="text-[13px] text-slate-500 font-medium">Payable Amount</span>
                     <span className="font-bold text-[24px] text-slate-900 leading-none mt-1 tracking-tight">₹1.00</span>
                     <span className="text-[12px] text-slate-500 mt-2 flex items-center gap-1 font-bold cursor-pointer hover:text-slate-700 transition-colors">View Details <ChevronDown size={14} strokeWidth={3}/></span>
                  </div>
                  <button onClick={() => initiatePayment(null)} className="bg-[#0b3d1f] text-white rounded-[16px] px-6 py-4.5 font-bold flex items-center gap-2 shadow-lg shadow-[#0b3d1f]/20 w-full max-w-[210px] justify-center active:scale-[0.98] transition-transform text-[17px]">
                     <Lock size={18} strokeWidth={2.5}/> Pay ₹1 Securely
                  </button>
               </div>
               <div className="bg-[#f8f9fa] py-3 flex items-center justify-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider border-t border-slate-100">
                  <span className="flex items-center gap-1"><ShieldCheck size={13} strokeWidth={2.5}/> 100% Secure</span>
                  <span className="text-slate-300">|</span>
                  <span className="font-black italic text-[#133F20] text-[13px] lowercase tracking-normal">Razorpay</span>
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1"><ShieldCheck size={13} strokeWidth={2.5}/> PCI DSS Compliant</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
