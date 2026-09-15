"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, X, PhoneCall } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function WorkshopClientPage() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePayment = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and WhatsApp number.");
      return;
    }
    
    setLoading(true);
    setPaymentStatus("idle");

    try {
      // 1. Create Order & Send "Initiated" Email via Backend API
      const orderRes = await fetch("/api/workshop/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, amount: 199 }),
      });
      
      const orderData = await orderRes.json();
      
      if (!orderRes.ok) throw new Error(orderData.error || "Failed to initiate order");

      // 2. Open Razorpay Checkout
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Organic Mushrooms Farm",
        description: "Mushroom Farming Workshop - ₹199",
        order_id: orderData.orderId,
        handler: async function (response: any) {
          // 3. Verify Payment & Send "Success" Email via Backend API
          try {
            const verifyRes = await fetch("/api/workshop/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                name: formData.name,
                phone: formData.phone,
                amount: 199,
              }),
            });
            const verifyData = await verifyRes.json();
            
            if (verifyRes.ok) {
              setPaymentStatus("success");
              setTimeout(() => {
                setShowCheckout(false);
                setPaymentStatus("idle");
              }, 4000);
            } else {
              throw new Error(verifyData.error || "Verification failed");
            }
          } catch (err) {
            console.error(err);
            setPaymentStatus("error");
          }
        },
        modal: {
          ondismiss: async function () {
            // 4. Send "Cancelled" Email if user closes checkout
            setLoading(false);
            try {
              await fetch("/api/workshop/cancel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: formData.name,
                  phone: formData.phone,
                  reason: "User closed Razorpay modal",
                }),
              });
            } catch (e) {
              console.error("Cancel reporting error", e);
            }
          },
        },
        prefill: {
          name: formData.name,
          contact: formData.phone,
        },
        theme: {
          color: "#10b981", // Emerald 500
        },
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on("payment.failed", async function (response: any) {
        // Send "Cancelled/Failed" Email
        try {
          await fetch("/api/workshop/cancel", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              reason: `Payment Failed: ${response.error.description}`,
            }),
          });
        } catch (e) {
          console.error("Failed reporting error", e);
        }
        setLoading(false);
        setPaymentStatus("error");
      });

      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Failed to initialize payment. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      {/* Load Razorpay SDK */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      {/* Subtle ambient light gradient glows (Transparent, no opaque blocks) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[12%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[420px] h-[420px] bg-green-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6 pt-4">
        
        {/* Main Content Area */}
        <section className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2rem] p-6 md:p-10 shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1 space-y-4">
            <h1 className="text-xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              Mushroom Farming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-500">Workshop</span>
            </h1>
            <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed max-w-lg">
              Join 5000+ others who have already transformed their lives. Our intensive workshop covers end-to-end practical knowledge. Whether you are aiming for a small balcony setup or looking into our <Link href="/turnkey-projects" className="text-emerald-600 font-bold hover:underline">commercial turnkey projects</Link>, this workshop is your perfect starting point. Learn about <Link href="/equipment" className="text-emerald-600 font-bold hover:underline">essential equipment</Link> and <Link href="/subsidy" className="text-emerald-600 font-bold hover:underline">subsidy details</Link> directly from experts.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 bg-white/10 dark:bg-black/10 border border-black/5 dark:border-white/5 rounded-2xl p-6 text-center shadow-sm">
            <h2 className="text-sm font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-500">Ready to Start?</h2>
            <p className="dark:text-slate-400 text-slate-600 mb-4 text-[10px]">Secure your seat instantly.</p>
            <button 
              onClick={() => setShowCheckout(true)} 
              className="w-full py-2.5 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-extrabold uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-transform shadow-xs"
            >
              Join Workshop Now
            </button>
          </div>
        </section>

        {/* Footer Links */}
        <footer className="border-t dark:border-white/5 border-black/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="dark:text-slate-400 text-slate-500 text-[10px] font-medium">© 2026 Organic Mushrooms Farm. All rights reserved.</p>
          <div className="flex gap-4 text-[10px] font-bold dark:text-slate-400 text-slate-500">
            <Link href="/terms" className="hover:text-emerald-500 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy</Link>
            <Link href="/refund-policy" className="hover:text-emerald-500 transition-colors">Refund Policy</Link>
          </div>
        </footer>
      </div>

      {/* Floating Mobile Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-black/10 dark:border-white/10 md:hidden z-40">
         <button onClick={() => setShowCheckout(true)} className="w-full py-3 bg-gradient-to-r from-purple-500 to-emerald-600 text-white rounded-xl text-[12px] font-black uppercase tracking-widest shadow-sm flex items-center justify-center gap-2">
           Pay & Join Now - ₹199 <ArrowRight size={14} />
         </button>
      </div>

      {/* WhatsApp Floating */}
      <a 
        href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20Mushroom%20Farming%20Workshop" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-[80px] md:bottom-6 right-4 z-50 bg-[#25D366] hover:bg-[#128C7E] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <PhoneCall size={20} className="text-white" />
      </a>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#0a0f0d] border border-black/10 dark:border-white/10 rounded-[2rem] p-6 max-w-sm w-full relative shadow-2xl">
            <button 
              onClick={() => {
                setShowCheckout(false);
                setLoading(false);
              }} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
            
            <h3 className="text-lg font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-500">Join Workshop</h3>
            <p className="dark:text-slate-400 text-slate-600 mb-5 text-[10px]">Provide details to receive the access link on WhatsApp.</p>
            
            {paymentStatus === "success" ? (
              <div className="text-center py-6 space-y-2">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-emerald-500 font-bold text-[11px] uppercase tracking-wider">Payment Successful!</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Check your WhatsApp/Email shortly.</p>
              </div>
            ) : paymentStatus === "error" ? (
              <div className="text-center py-6 space-y-2">
                <p className="text-red-500 font-bold text-[11px] uppercase tracking-wider">Payment Failed or Cancelled</p>
                <button onClick={() => setPaymentStatus("idle")} className="text-[10px] underline text-slate-500">Try Again</button>
              </div>
            ) : (
              <form onSubmit={handlePayment} className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-3 py-2 text-[11px] text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-3 py-2 text-[11px] text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-3 mt-2 bg-gradient-to-r from-purple-500 to-emerald-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-sm disabled:opacity-50 transition-all hover:scale-[1.02]"
                >
                  {loading ? "Processing..." : "Proceed to Pay ₹199"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Ensure the CheckCircle2 icon is available if used above
import { CheckCircle2 } from "lucide-react";
