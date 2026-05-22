import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, MessageCircle, BookOpen, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PaymentSuccessPage() {
  return (
    <div className="relative pt-24 pb-32 md:pt-32 lg:pb-0 overflow-hidden min-h-screen selection:bg-green-500/30 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-5 md:p-8 rounded-2xl md:rounded-[2rem] border dark:border-green-500/20 border-green-500/20 relative overflow-hidden text-center"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-green-500/20 blur-[80px] pointer-events-none rounded-full"></div>

          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)] relative z-10"
          >
            <CheckCircle size={32} className="md:w-10 md:h-10" />
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight mb-2 md:mb-3 relative z-10">
            Payment <span className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">Successful!</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mb-5 md:mb-8 font-medium">Thank you for enrolling. Your journey begins now.</p>

          {/* Details Card */}
          <div className="bg-black/20 dark:bg-black/40 rounded-xl p-4 md:p-5 mb-5 md:mb-6 border dark:border-white/5 border-black/5 text-left space-y-3 relative z-10">
            <div className="flex justify-between items-center border-b dark:border-white/5 border-black/5 pb-2 md:pb-3">
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><BookOpen size={12}/> Course</span>
              <span className="text-xs md:text-sm font-bold dark:text-white text-slate-900 text-right">Live Mushroom Training<br/><span className="text-[10px] text-slate-500 font-medium">(Online Model)</span></span>
            </div>
            <div className="flex justify-between items-center border-b dark:border-white/5 border-black/5 pb-2 md:pb-3">
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Zap size={12}/> Price Paid</span>
              <span className="text-sm md:text-base font-black text-green-500">₹299</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Clock size={12}/> Access</span>
              <span className="text-xs md:text-sm font-bold dark:text-white text-slate-900">Lifetime Activated</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <motion.a
            href="https://wa.me/919203544140?text=Hi,%20I%20just%20enrolled%20in%20the%20Mushroom%20Training.%20Please%20add%20me%20to%20the%20VIP%20group."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full relative overflow-hidden rounded-lg md:rounded-xl group px-4 md:px-6 py-3.5 md:py-4 bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all font-bold text-xs md:text-base flex items-center justify-center gap-2 mb-4 md:mb-5 z-10"
          >
            <MessageCircle size={18} className="md:w-5 md:h-5" />
            Join Exclusive WhatsApp Group <ArrowRight size={14} className="md:w-4 md:h-4" />
            <div className="absolute inset-0 rounded-lg md:rounded-xl bg-white/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </motion.a>

          {/* Post Action Info */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-left relative z-10">
            <p className="text-[9px] md:text-xs text-blue-200 leading-tight">
              <span className="font-bold text-blue-400">Note:</span> An onboarding email containing your Live Training batch schedule and downloadable PDF notes has been sent to your registered email address. Please check your spam/promotions folder if it doesn't arrive in 5 minutes.
            </p>
          </div>

          {/* Back to Home */}
          <Link 
            to="/" 
            className="inline-block mt-5 md:mt-8 text-[10px] md:text-xs font-bold text-slate-500 hover:text-white transition-colors underline decoration-slate-500/30 underline-offset-4 relative z-10"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
