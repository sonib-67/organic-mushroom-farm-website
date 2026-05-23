import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Phone, Loader2 } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  productType: 'training' | 'consultation';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, productType }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validates and immediately formats the payload via strict JSON parsing API
      const response = await fetch('/api/checkout-payload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, productType })
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
          // Success route placeholder
          window.location.href = '/payment-success?id=' + response.razorpay_payment_id;
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        console.error(response.error);
        alert('Payment Failed. Please try again.');
        setLoading(false);
      });
      rzp.open();
      
    } catch (error) {
      console.error(error);
      alert('Error initiating checkout. Please try again.');
    } finally {
      setLoading(false);
      onClose(); // Optional: Keep modal open until checkout returns
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999990]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm glass-dark border dark:border-white/10 border-black/10 rounded-2xl p-6 z-[999999] shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-xl font-bold text-white mb-1">
              Checkout Details
            </h3>
            <p className="text-sm text-slate-300 mb-6 font-medium">
              {productType === 'training' ? 'Mushroom Farming Training - ₹299' : '1-on-1 Consultation - ₹59'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 block">Mobile Number</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 block">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-linear-to-r from-primary-start to-primary-end hover:from-primary-start/90 hover:to-primary-end/90 text-black font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary-start/20 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : 'Proceed to Setup'}
              </button>
            </form>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
