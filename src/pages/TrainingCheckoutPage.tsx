import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, Loader2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TrainingCheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Checkout - Organic Mushroom Farm";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/checkout-payload', {
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
        }
      };

      if (typeof window !== "undefined" && (window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          console.error(response.error);
          alert('Payment Failed. Please try again.');
          setLoading(false);
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
    <div className="min-h-screen bg-[#070707] flex flex-col items-center pt-24 pb-12 px-4 relative z-[999999]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-start/20 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-end/20 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 font-medium text-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark border dark:border-white/10 border-black/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* subtle top highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-start to-primary-end opacity-50"></div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-white mb-2">Checkout Details</h1>
            <p className="text-sm font-medium text-primary-start flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-start animate-pulse"></span>
              Mushroom Farming Training - ₹299
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full box-border bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Mobile Number</label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="tel" 
                  required
                  pattern="[0-9]{10}"
                  value={formData.mobile}
                  onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full box-border bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full box-border bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 shrink-0 bg-gradient-to-r from-primary-start to-primary-end hover:from-primary-start/90 hover:to-primary-end/90 text-[15px] text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 size={20} className="animate-spin" /> : 'Proceed To Payment - ₹299'}
            </button>
          </form>
        </motion.div>

        {/* Secure Checkout Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-xs font-medium">
          <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd"></path></svg>
          Secured by Razorpay
        </div>
      </div>
    </div>
  );
}
