import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, MessageCircle, FileText } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { trackPurchase } from '../utils/analytics';

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const [productType, setProductType] = useState('Training');
  const paymentId = searchParams.get('id');
  const orderId = searchParams.get('order_id') || `OMF-${Math.floor(Math.random() * 1000000)}`;

  useEffect(() => {
    // If we have a product type in URL or local storage
    const customProduct = searchParams.get('product') || 'Mushroom Farming Training';
    setProductType(customProduct);

    trackPurchase(299.00, "INR", [{ item_name: customProduct }]);
  }, [searchParams, paymentId]);

  return (
    <div className="relative pt-24 pb-32 md:pt-32 lg:pb-0 overflow-hidden min-h-screen selection:bg-green-500/30 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-5 md:p-8 rounded-2xl md:rounded-[2rem] border dark:border-green-500/20 border-green-500/20 relative overflow-hidden text-center shadow-xl"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-500/10 blur-[100px] pointer-events-none rounded-full"></div>

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
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-6 font-medium">Thank you for choosing {productType}</p>
          
          {/* Payment Summary */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-6 border border-slate-100 dark:border-slate-800 text-left relative z-10">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center">
              <FileText size={16} className="mr-2 text-primary-start" /> Order Summary
            </h3>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-500 dark:text-slate-400">Order ID</span>
                <span className="font-mono font-medium text-slate-900 dark:text-slate-200">{orderId}</span>
              </div>
              {paymentId && (
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">Payment ID</span>
                  <span className="font-mono font-medium text-slate-900 dark:text-slate-200">{paymentId}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-500 dark:text-slate-400">Product</span>
                <span className="font-medium text-slate-900 dark:text-slate-200">{productType}</span>
              </div>
            </div>
            {/* Download Invoice Button */}
            <button className="w-full mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary-start hover:text-primary-end transition-colors bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg py-2">
              <FileText size={16} /> Download Invoice
            </button>
          </div>

          {/* Action Info */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 md:p-6 mb-5 text-center relative z-10">
            <p className="text-xs md:text-sm text-green-700 dark:text-green-100 font-medium leading-relaxed mb-4">
              You will receive details shortly on WhatsApp and Email.
            </p>
            <a href={`https://wa.me/919203544140?text=I%20have%20completed%20payment%20for%20${encodeURIComponent(productType)}.%20Order%20ID:%20${orderId}`}
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] text-white font-bold rounded-xl hover:scale-105 transition-transform text-sm w-full">
                <MessageCircle size={18} /> Contact Support on WhatsApp
            </a>
          </div>

          {/* Back to Home */}
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full px-4 py-3 md:py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all text-xs md:text-sm mt-2 relative z-10"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
