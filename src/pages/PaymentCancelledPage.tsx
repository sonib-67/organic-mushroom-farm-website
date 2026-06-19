import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  RefreshCw, ArrowLeft, HeadphonesIcon, HelpCircle, 
  AlertCircle, Check, Gift, Clock 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pixelTrackCustom } from '../utils/pixel';
import SEO from '../components/SEO';

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

  const isWorkshop = state?.productName === 'Mushroom Farming Workshop' || state?.from === '/workshop';

  useEffect(() => {
    window.scrollTo(0, 0);

    // Track simply as a page landing. The actual failure/cancel event happens before routing.
    pixelTrackCustom('PaymentCancelledPage_Viewed', {
      value: state?.amount ? state.amount / 100 : 0,
      currency: state?.currency || 'INR',
      content_name: state?.productName || 'Consultation/Training',
    });
  }, [state, isWorkshop]);

  const handleRetry = () => {
    pixelTrackCustom('PaymentRetry', {
      content_name: state?.productName,
      from_page: state?.from
    });

    if (state?.from) {
      navigate(state.from, { state: { retryFormData: state.formData } });
    } else {
      navigate('/workshop');
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#070707] bg-slate-50 flex flex-col items-center justify-center pt-24 pb-12 px-4 relative z-[999999] overflow-hidden">
      <SEO 
        title={isWorkshop ? "Complete Your Workshop Registration" : "Payment Cancelled"} 
        description="Your training checkout process has been cancelled or aborted. You can easily retry or contact our support team." 
      />
      
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-red-500/10 dark:opacity-20 opacity-30 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-orange-500/10 dark:opacity-20 opacity-30 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
      </div>

      <div className={`w-full ${isWorkshop ? 'max-w-lg' : 'max-w-md'} relative z-10 my-auto`}>
        <button 
          onClick={() => navigate(isWorkshop ? '/workshop' : '/')}
          className="flex items-center gap-2 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 transition-colors mb-6 font-medium text-sm w-fit group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {isWorkshop ? 'Back to Workshop details' : 'Back to Home'}
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

            {isWorkshop ? (
              <div>
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/20"
                >
                  <AlertCircle size={32} />
                </motion.div>
                
                <h1 className="text-2xl font-black dark:text-white text-slate-900 mb-1 tracking-tight">
                  Registration Incomplete!
                </h1>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-500 mb-4">
                  <Clock size={12} className="animate-pulse" /> Offer Ending Soon (₹199 only)
                </div>

                <p className="dark:text-slate-400 text-slate-500 text-sm mb-6 leading-relaxed">
                  Your batch registration for the <strong>Live Mushroom Farming Workshop</strong> was not completed. Seats are filling up fast!
                </p>

                {/* Box of goodies included in ₹199 */}
                <div className="text-left dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-2xl p-4 sm:p-5 mb-6">
                  <h3 className="text-xs font-bold dark:text-white text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Gift size={14} className="text-amber-500" /> What's Included in ₹199:
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                      <span><strong>2-Hour Live Training:</strong> Step-by-step commercial cultivation blueprint.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                      <span><strong>Govt. Subsidy Session:</strong> Live guide on how to secure 40% government subsidy.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                      <span><strong>Lifetime WhatsApp Group:</strong> Engage with expert growers anytime.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                      <span><strong>Free SOP & PDFs:</strong> Complete handbook download (worth ₹999).</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                      <span><strong>Government certified trainer guidance:</strong> Live Q&A session.</span>
                    </li>
                  </ul>
                  
                  {/* Urgency Badge */}
                  <div className="mt-4 pt-3 border-t dark:border-white/5 border-black/5 flex items-center justify-between text-[11px] text-amber-500 font-bold">
                    <span>🔥 Next batch starts soon!</span>
                    <span className="underline">90% Discount Applied</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleRetry}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] text-white font-bold py-3.5 px-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95"
                  >
                    <RefreshCw size={18} /> Pay ₹199 & Register Again
                  </button>
                  
                  <button
                    onClick={() => navigate(state?.from || '/workshop')}
                    className="w-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 dark:text-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl text-sm transition-all"
                  >
                    Back to Workshop page
                  </button>
                </div>
              </div>
            ) : (
              <div>
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
              </div>
            )}
            
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
