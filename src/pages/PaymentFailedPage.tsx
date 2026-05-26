import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { XCircle, RefreshCw, MessageCircle, HelpCircle, HeadphonesIcon, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { pixelTrackCustom } from '../utils/pixel';

export default function PaymentFailedPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryError = searchParams.get('error') || searchParams.get('reason');
  const paymentId = searchParams.get('id');

  const state = location.state as {
    amount?: number,
    currency?: string,
    productName?: string,
    email?: string,
    from?: string,
    formData?: any,
    error?: string
  } | undefined;

  const errorMessage = queryError || state?.error || "Your bank or payment gateway declined the transaction.";

  useEffect(() => {
    document.title = "Payment Failed - Organic Mushroom Farm";
    window.scrollTo(0, 0);

    // Track simply as a page landing.
    pixelTrackCustom('PaymentFailedPage_Viewed', {
      payment_id: paymentId || 'unknown',
      error: errorMessage,
      value: state?.amount ? state.amount / 100 : 0,
      currency: state?.currency || 'INR',
      content_name: state?.productName || 'Mushroom Product/Training',
    });
  }, [state, errorMessage, paymentId]);

  const handleRetry = () => {
    pixelTrackCustom('PaymentRetry_FromFailed', {
      content_name: state?.productName,
      from_page: state?.from
    });

    if (state?.from) {
      navigate(state.from, { state: { retryFormData: state.formData } });
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="relative pt-24 pb-32 md:pt-32 overflow-hidden min-h-screen selection:bg-red-500/30 flex items-center justify-center">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-red-500/10 dark:opacity-20 opacity-30 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
      </div>

      <div className="w-full max-w-lg mx-auto px-4 z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 transition-colors mb-6 font-medium text-sm w-fit group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-5 md:p-8 rounded-2xl md:rounded-[2rem] border dark:border-red-500/20 border-red-500/20 relative overflow-hidden text-center shadow-2xl"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-red-500/10 blur-[80px] pointer-events-none rounded-full"></div>

          {/* Red Warning line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-rose-600 opacity-70"></div>

          {/* Failed Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-[0_0_30px_rgba(239,68,68,0.3)] relative z-10"
          >
            <XCircle size={32} className="md:w-10 md:h-10" />
            <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight mb-2 md:mb-3 relative z-10">
            Payment Failed ❌
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-2 font-medium">We were unable to process your payment.</p>
          
          {paymentId && (
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-4 font-mono">Payment ID: {paymentId}</p>
          )}

          {/* Error Message Box */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 text-center relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">Error Details</span>
            <p className="text-sm dark:text-slate-300 text-slate-700 font-medium leading-relaxed mt-1">
              {errorMessage}
            </p>
          </div>

          {/* Retry Button */}
          <button
            onClick={handleRetry}
            className="w-full bg-gradient-to-r from-red-500 to-rose-600 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] text-[15px] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 mb-4 z-10 relative"
          >
            <RefreshCw size={18} /> Retry Payment
          </button>

          {/* Help details */}
          <div className="pt-6 mt-6 border-t dark:border-white/10 border-black/5 relative z-10">
            <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-2 flex items-center justify-center gap-2">
              <HelpCircle size={16} className="text-red-400" /> Need Help? WhatsApp Support
            </h3>
            <p className="text-xs dark:text-slate-400 text-slate-500 mb-4 font-medium">
              If your bank account was debited, it will be refunded automatically within 3-5 working days. Contact us via WhatsApp for instant assistance:
            </p>
            <a 
              href="https://wa.me/919203544140?text=Customer%20payment%20failed%20for%20Mushroom%20Farm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full dark:bg-white/5 bg-[#25D366] text-white border border-[#25d366] text-sm font-bold hover:bg-[#1ebd5d] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.2)]"
            >
              <MessageCircle size={16} /> Contact Support (+91 9203544140)
            </a>
          </div>

          {/* Return to home link */}
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-slate-300 hover:text-white transition-all text-xs md:text-sm mt-6 relative z-10"
          >
            Back to Home
          </Link>

        </motion.div>
      </div>
    </div>
  );
}
