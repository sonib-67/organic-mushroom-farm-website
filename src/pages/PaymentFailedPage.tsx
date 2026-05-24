import React from 'react';
import { motion } from 'motion/react';
import { XCircle, RefreshCw, MessageCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export default function PaymentFailedPage() {
  const [searchParams] = useSearchParams();
  const retryUrl = searchParams.get('retry') || '/';

  return (
    <div className="relative pt-24 pb-32 md:pt-32 lg:pb-0 overflow-hidden min-h-screen selection:bg-red-500/30 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-5 md:p-8 rounded-2xl md:rounded-[2rem] border dark:border-red-500/20 border-red-500/20 relative overflow-hidden text-center"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-red-500/20 blur-[80px] pointer-events-none rounded-full"></div>

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
            Payment Failed
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-2 font-medium">We could not process your payment.</p>
          <p className="text-slate-400 dark:text-slate-300 text-xs md:text-sm mb-5 md:mb-8 font-medium">Please check your payment details or try a different method.</p>

          {/* Action Info */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 md:p-6 mb-5 text-center relative z-10">
            <p className="text-xs md:text-sm text-red-700 dark:text-red-100 font-medium leading-relaxed mb-3">
              Need help with the transaction?
            </p>
            <a href="https://wa.me/919203544140?text=I%20am%20facing%20issues%20with%20payment"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] text-white font-bold rounded-xl hover:scale-105 transition-transform text-sm w-full md:w-auto">
                <MessageCircle size={18} /> Contact Support on WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-3 relative z-10">
            {/* Retry Button */}
            <Link 
              to={retryUrl} 
              className="inline-flex items-center justify-center w-full px-4 py-3 md:py-4 bg-primary-start hover:bg-primary-end text-white rounded-xl font-bold transition-all text-xs md:text-sm shadow-xl"
            >
              <RefreshCw size={16} className="mr-2" /> Retry Payment
            </Link>

            {/* Back to Home */}
            <Link 
              to="/" 
              className="inline-flex items-center justify-center w-full px-4 py-3 md:py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all text-xs md:text-sm"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
