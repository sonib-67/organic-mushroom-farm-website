"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, Loader2, ArrowLeft, Sprout, Leaf, Sparkles, ShieldCheck } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { trackPaymentStep, pixelTrackCustom } from '@/lib/utils/pixel';
import { loadRazorpayScript } from '@/lib/utils/razorpay';
import { sendPaymentNotificationToFormspree } from '@/lib/utils/formspree';

export default function TrainingCheckoutClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams ? (searchParams.get('type') || 'basic') : 'basic';
  const type = typeParam as "basic" | "advanced" | "offline-basic" | "offline-advanced";
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: ""
  });

  const selectedProductType = type.includes('advanced') ? 'training_advanced' : 'training_basic';
  const selectedPrice = type.includes('advanced') ? '₹699' : '₹299';
  const selectedTitle = type.includes('advanced') ? 'Advanced Commercial Cultivation' : 'Basic Mushroom Farming';
  const isAdvancedTraining = type.includes('advanced');

  useEffect(() => {
    trackPaymentStep('InitiateCheckout', { 
      content_name: selectedProductType, 
      value: parseInt(selectedPrice.replace(/[^\d]/g, '')) || 299,
      currency: 'INR' 
    });
    // Load script on mount
    loadRazorpayScript();
  }, [selectedProductType, selectedPrice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email) {
      alert('Please fill in all details');
      return;
    }
    if (formData.mobile.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);

    try {
      trackPaymentStep('AddPaymentInfo', { 
        content_name: selectedProductType,
        user_email: formData.email, 
        user_phone: formData.mobile 
      });

      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: isAdvancedTraining ? 'advanced' : 'basic',
          productId: selectedProductType,
          type: type,
          currency: 'INR',
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
        }),
      });
      
      const text = await res.text();
      let payload;
      try {
        payload = JSON.parse(text);
      } catch (err) {
        console.error("Failed to parse JSON response:", text);
        throw new Error('Invalid JSON response from server');
      }
      
      if (!res.ok) throw new Error(payload?.error || 'Failed to fetch payload');

      // Send INITIATED notification to Formspree
      sendPaymentNotificationToFormspree({
        name: formData.name,
        phone: formData.mobile,
        email: formData.email,
        productType: `${selectedTitle} Training`,
        amount: selectedPrice,
        status: 'INITIATED',
        orderId: payload.id
      });

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || payload.key,
        amount: payload.amount,
        currency: payload.currency,
        order_id: payload.id,
        name: "Organic Mushrooms Farm",
        description: selectedTitle + " Training",
        image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/q_auto,f_auto/v1785226016/IMG-20260728-WA0000-removebg-preview_bztf7y.png",
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile
        },
        theme: {
          color: "#4f46e5"
        },
        handler: function (response: any) {
          // Notify Formspree that payment is successful
          sendPaymentNotificationToFormspree({
            name: formData.name,
            phone: formData.mobile,
            email: formData.email,
            productType: `${selectedTitle} Training`,
            amount: selectedPrice,
            status: 'DONE',
            orderId: payload.id,
            paymentId: response.razorpay_payment_id
          });

          trackPaymentStep('PaymentSuccess', {
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            content_name: selectedProductType,
            value: payload.amount / 100,
            currency: payload.currency
          });

          // Redirect to registration form
          setTimeout(() => {
             router.push(`/training/register?id=${response.razorpay_payment_id}&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.mobile)}&email=${encodeURIComponent(formData.email)}&type=${selectedProductType}`);
          }, 400);
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            // Notify Formspree that payment form cancelled/not complete
            sendPaymentNotificationToFormspree({
              name: formData.name,
              phone: formData.mobile,
              email: formData.email,
              productType: `${selectedTitle} Training`,
              amount: selectedPrice,
              status: 'CANCELLED',
              orderId: payload.id
            });

            trackPaymentStep('PaymentCancelled', {
              order_id: payload.id,
              content_name: selectedProductType
            });
            
            // Redirect to cancel
            router.push(`/training/cancel?type=${selectedProductType}&price=${selectedPrice}`);
          }
        }
      };

      if (typeof window !== "undefined" && (window as any).Razorpay) {
        pixelTrackCustom('InitiateCheckout', {
          value: payload.amount / 100,
          currency: payload.currency,
          content_name: `Training - ${selectedTitle}`
        });

        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          console.error(response.error);
          setLoading(false);
          // Notify Formspree of failed payment
          sendPaymentNotificationToFormspree({
            name: formData.name,
            phone: formData.mobile,
            email: formData.email,
            productType: `${selectedTitle} Training`,
            amount: selectedPrice,
            status: 'FAILED',
            orderId: payload.id,
            paymentId: response.error?.metadata?.payment_id
          });

          trackPaymentStep('PaymentFailed', {
            content_name: `PaymentFailed: ${response.error?.code || 'error'}`,
            order_id: response.error?.metadata?.order_id,
            payment_id: response.error?.metadata?.payment_id
          });
          
          router.push(`/training/cancel?type=${selectedProductType}&price=${selectedPrice}`);
        });

        rzp.open();
      } else {
        console.error("Razorpay script not loaded properly");
        alert("Payment gateway not loaded. Please refresh the page.");
        setLoading(false);
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center pt-24 pb-12 px-4 relative z-[99] overflow-hidden">
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
        <Leaf className="text-indigo-500 w-10 h-10 drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
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
          onClick={() => router.back()}
          className="flex items-center gap-2 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 transition-colors mb-6 font-medium text-sm w-fit group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl sm:rounded-[2rem] border dark:border-white/10 border-black/10 dark:bg-black/30 bg-white/40 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500"></div>
          <div className="p-5 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/5 border mb-3 sm:mb-4">
                <Sparkles className="text-yellow-500 w-3 h-3" />
                <span className="text-[9px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Access</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 mb-1.5 tracking-tight">Enroll in Training</h1>
              <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-500 to-green-500 bg-clip-text text-transparent flex flex-wrap items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></span>
                {selectedTitle} - {selectedPrice}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3.5 sm:space-y-5">
              <div className="group/input">
                <label className="text-[10px] sm:text-[11px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5 block ml-1 transition-colors group-focus-within/input:text-indigo-500">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-400 transition-colors group-focus-within/input:text-indigo-500 sm:w-[18px] sm:h-[18px]" />
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full box-border dark:bg-black/40 bg-white/5 border dark:border-white/10 border-black/10 rounded-xl sm:rounded-2xl py-3 pl-10 pr-4 text-sm sm:pl-12 dark:text-white text-slate-900 placeholder:dark:text-slate-500 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ring-offset-0 transition-all shadow-sm hover:dark:bg-white/[0.02] hover:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              
              <div className="group/input">
                <label className="text-[10px] sm:text-[11px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5 block ml-1 transition-colors group-focus-within/input:text-indigo-500">Mobile Number</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-400 transition-colors group-focus-within/input:text-indigo-500 sm:w-[18px] sm:h-[18px]" />
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={e => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 10) {
                        setFormData({ ...formData, mobile: value });
                      }
                    }}
                    className="w-full box-border dark:bg-black/40 bg-white/5 border dark:border-white/10 border-black/10 rounded-xl sm:rounded-2xl py-3 pl-10 pr-4 text-sm sm:pl-12 dark:text-white text-slate-900 placeholder:dark:text-slate-500 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ring-offset-0 transition-all shadow-sm hover:dark:bg-white/[0.02] hover:bg-white"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div className="group/input">
                <label className="text-[10px] sm:text-[11px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5 block ml-1 transition-colors group-focus-within/input:text-indigo-500">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-400 transition-colors group-focus-within/input:text-indigo-500 sm:w-[18px] sm:h-[18px]" />
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full box-border dark:bg-black/40 bg-white/5 border dark:border-white/10 border-black/10 rounded-xl sm:rounded-2xl py-3 pl-10 pr-4 text-sm sm:pl-12 dark:text-white text-slate-900 placeholder:dark:text-slate-500 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ring-offset-0 transition-all shadow-sm hover:dark:bg-white/[0.02] hover:bg-white"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 sm:mt-5 shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] text-xs sm:text-sm text-white font-black tracking-wide py-2.5 sm:py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 size={18} className="animate-spin sm:w-5 sm:h-5" /> <span>Processing...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>Complete Payment</span> <ArrowLeft size={14} className="rotate-180 sm:w-4 sm:h-4" />
                  </span>
                )}
              </button>
            </form>
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
