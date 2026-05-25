import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { RefreshCw, ArrowLeft, HeadphonesIcon, HelpCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pixelTrackCustom } from '../utils/pixel';

export default function PaymentCancelledPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {
    amount?: number,
    currency?: string,
    productName?: string,
    email?: string,
    from?: string,
    formData?: any
  } | undefined;

  useEffect(() => {
    document.title = "Payment Cancelled";
    window.scrollTo(0, 0);

    // Track simply as a page landing. The actual failure/cancel event happens before routing.
    pixelTrackCustom('PaymentCancelledPage_Viewed', {
      value: state?.amount ? state.amount / 100 : 0,
      currency: state?.currency || 'INR',
      content_name: state?.productName || 'Consultation/Training',
    });
  }, [state]);

  const handleRetry = () => {
    pixelTrackCustom('PaymentRetry', {
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
    <div className="min-h-screen dark:bg-[#070707] bg-slate-50 flex flex-col items-center justify-center pt-24 pb-12 px-4 relative z-[999999] overflow-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-red-500/10 dark:opacity-20 opacity-30 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-orange-500/10 dark:opacity-20 opacity-30 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
      </div>

      <div className="w-full max-w-md relative z-10 my-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 transition-colors mb-6 font-medium text-sm w-fit group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative p-[1px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group shadow-2xl"
        >
          {/* Subtle Red/Orange Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

          <div className="relative dark:bg-[#0A0A0A]/90 bg-white/95 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 overflow-hidden h-full text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-70"></div>

            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(239,68,68,0.15)] ring-1 ring-red-500/20"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>
            
            <h1 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 mb-3 tracking-tight">Payment Cancelled</h1>
            <p className="dark:text-slate-400 text-slate-500 text-sm sm:text-base mb-8 font-medium">
              Your payment was not completed. No money was deducted from your account. Do you want to try again?
            </p>

            <button
              onClick={handleRetry}
              className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] text-[15px] sm:text-[16px] text-white font-bold py-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 mb-4"
            >
              <RefreshCw size={18} /> Retry Payment
            </button>
            
            <div className="pt-6 mt-6 border-t dark:border-white/10 border-black/5">
               <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-2">
                 <HelpCircle size={16} className="text-indigo-400" /> Need Help? Contact Support
               </h3>
               <p className="text-xs dark:text-slate-400 text-slate-500 mb-4">
                 If you are facing issues with payment, please reach out to us and we will assist you.
               </p>
               <a href="https://wa.me/919203544140?text=Hi,%20I%20am%20facing%20some%20issues%20with%20an%20online%20payment." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full dark:bg-white/5 bg-black/5 dark:text-white text-slate-900 text-sm font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                  <HeadphonesIcon size={16} /> Contact Support
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
