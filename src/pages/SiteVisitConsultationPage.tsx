import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, User, Phone, CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loadRazorpayScript } from '../utils/razorpay';
import { sendPaymentNotificationToFormspree } from '../utils/formspree';
import SEO from '../components/SEO';

const SiteVisitConsultationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', preferredDate: '' });
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    // Lazily load Razorpay checkout script
    loadRazorpayScript();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          productType: 'site_visit_consultation',
          name: formData.name,
          email: formData.name.replace(/\s+/g, '').toLowerCase() + '@example.com', // Dummy email as it's not required in UI but backend might need it
          mobile: formData.phone,
          preferredDate: formData.preferredDate
        })
      });
      
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Failed to fetch payload');

      // Send INITIATED notification to Formspree
      sendPaymentNotificationToFormspree({
        name: formData.name,
        phone: formData.phone,
        email: formData.name.replace(/\s+/g, '').toLowerCase() + '@example.com',
        preferredDate: formData.preferredDate,
        productType: 'On Site Visit Consultation Slot',
        amount: '₹500',
        status: 'INITIATED',
        orderId: payload.order_id
      });

      const options = {
        key: payload.key_id,
        amount: payload.amount,
        currency: payload.currency,
        order_id: payload.order_id,
        name: payload.name,
        description: payload.description,
        prefill: { ...payload.prefill, contact: formData.phone, name: formData.name },
        notes: payload.notes,
        theme: payload.theme,
        handler: function (response: any) {
          // Notify Formspree that payment is DONE
          sendPaymentNotificationToFormspree({
            name: formData.name,
            phone: formData.phone,
            email: formData.name.replace(/\s+/g, '').toLowerCase() + '@example.com',
            preferredDate: formData.preferredDate,
            productType: 'On Site Visit Consultation Slot',
            amount: '₹500',
            status: 'DONE',
            orderId: payload.order_id,
            paymentId: response.razorpay_payment_id
          });

          setPaymentSuccess(true);
          setLoading(false);
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            // Notify Formspree that payment is CANCELLED
            sendPaymentNotificationToFormspree({
              name: formData.name,
              phone: formData.phone,
              email: formData.name.replace(/\s+/g, '').toLowerCase() + '@example.com',
              preferredDate: formData.preferredDate,
              productType: 'On Site Visit Consultation Slot',
              amount: '₹500',
              status: 'CANCELLED',
              orderId: payload.order_id
            });
          }
        }
      };

      // Ensure Razorpay script is loaded dynamically
      await loadRazorpayScript();

      if (typeof window !== "undefined" && (window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          console.error(response.error);
          // Notify Formspree that payment is FAILED
          sendPaymentNotificationToFormspree({
            name: formData.name,
            phone: formData.phone,
            email: formData.name.replace(/\s+/g, '').toLowerCase() + '@example.com',
            preferredDate: formData.preferredDate,
            productType: 'On Site Visit Consultation Slot',
            amount: '₹500',
            status: 'FAILED',
            orderId: payload.order_id,
            paymentId: response.error?.metadata?.payment_id
          });

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-12 flex items-center justify-center px-4 selection:bg-green-500/30">
      <SEO 
        title="On Site Visit Consultation | Organic Mushroom Farm" 
        description="Book your site visit consultation for organic mushroom farming. Visit our farm in Jabalpur."
        url="/site-visit-consultation"
      />
      
      <div className="max-w-md w-full relative z-10">
        
        {!paymentSuccess ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl rounded-3xl p-8 overflow-hidden relative"
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            <div className="text-center mb-8 relative z-10">
              <div className="mx-auto bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/40 dark:to-green-800/40 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border border-white dark:border-green-600/30 mb-4">
                <MapPin className="text-green-600 dark:text-green-400 w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-slate-800 dark:text-white tracking-tight mb-2">On Site Visit Consultation</h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Book your site visit consultation for only <span className="text-green-600 dark:text-green-400 font-bold">₹500</span></p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5 relative z-10">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  </div>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 focus:border-green-500 dark:focus:border-green-500 focus:ring-4 focus:ring-green-500/10 rounded-xl outline-none transition-all duration-200 text-slate-800 dark:text-white font-medium placeholder:font-normal placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  </div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 focus:border-green-500 dark:focus:border-green-500 focus:ring-4 focus:ring-green-500/10 rounded-xl outline-none transition-all duration-200 text-slate-800 dark:text-white font-medium placeholder:font-normal placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Visit Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  </div>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 focus:border-green-500 dark:focus:border-green-500 focus:ring-4 focus:ring-green-500/10 rounded-xl outline-none transition-all duration-200 text-slate-800 dark:text-white font-medium placeholder:font-normal placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !formData.name || formData.phone.length !== 10 || !formData.preferredDate}
                className="w-full py-4 mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:tracking-wide focus:ring-4 focus:ring-green-500/20 text-white rounded-xl font-bold shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/0000.svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Pay ₹500 & Confirm Visit
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50 flex flex-col gap-3 relative z-10">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50">
                <MapPin className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm">Location: Katangi, Jabalpur, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm">Mobile: <a href="tel:9203544140" className="font-semibold text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">9203544140</a></span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl rounded-3xl p-10 text-center relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mx-auto bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-400 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-100 dark:shadow-green-900/20 border-4 border-white dark:border-slate-700/50 relative z-10"
            >
              <CheckCircle className="w-10 h-10" />
            </motion.div>
            
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-3 relative z-10">Payment Successful ✅</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg font-medium relative z-10">Your site visit consultation request has been submitted successfully.</p>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 mb-8 text-left border border-slate-100 dark:border-slate-700/50 relative z-10">
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700/80 pb-2">Booking Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2"><User className="w-4 h-4"/> Name</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{formData.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2"><Calendar className="w-4 h-4"/> Date</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{new Date(formData.preferredDate).toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2"><MapPin className="w-4 h-4"/> Status</span>
                  <span className="font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 px-2 flex items-center gap-1 py-0.5 rounded-full text-xs">Confirmed</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/')}
              className="w-full bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white rounded-xl py-4 font-bold shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 relative z-10"
            >
              Return Home
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SiteVisitConsultationPage;
