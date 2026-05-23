import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, MessageCircle, BookOpen, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PaymentSuccessPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', { currency: "INR", value: 299.00 });
    }
  }, []);

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
            Payment Successful 🎉
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-2 font-medium">Thank you for joining our Mushroom Farming Training</p>
          <p className="text-slate-400 dark:text-slate-300 text-xs md:text-sm mb-5 md:mb-8 font-medium">Your registration has been completed successfully.</p>

          {/* Action Info */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 md:p-6 mb-5 text-center relative z-10">
            <p className="text-xs md:text-sm text-green-100 font-medium leading-relaxed mb-3">
              You will receive joining details on WhatsApp.
            </p>
            <a href="https://wa.me/919203544140?text=I%20have%20join%20mushroom%20training"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] text-white font-bold rounded-xl hover:scale-105 transition-transform text-sm w-full md:w-auto">
                <MessageCircle size={18} /> Message on WhatsApp
            </a>
            <p className="text-xs mt-4 text-slate-400 font-medium break-words">Number: <span className="text-green-500 font-bold">+91 9203544140</span><br/>Message: "i have join mushroom training"</p>
          </div>

          {/* Back to Home */}
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full px-4 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-slate-300 hover:text-white transition-all text-xs md:text-sm mt-2 relative z-10"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
