import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";

const PlugAnimation = () => (
  <div className="relative w-full h-48 sm:h-56 flex items-center justify-center mb-8 sm:mb-12 mt-4 sm:mt-8">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[160px] sm:text-[220px] md:text-[250px] font-black text-[#7b51f8] select-none tracking-tighter leading-none"
    >
      404
    </motion.div>

    <div className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] flex items-center justify-between mt-16 sm:mt-24">
      {/* Left Plug (Male) */}
      <motion.div 
        className="flex items-center w-1/2 justify-end"
        animate={{ x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      >
        <div className="w-full h-3 sm:h-4 bg-slate-800 dark:bg-slate-200 rounded-l-full relative overflow-hidden z-0">
           <div className="absolute top-0 left-0 w-full h-1/3 bg-white/20"></div>
        </div>
        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-slate-800 dark:bg-slate-200 rounded-l-xl relative shadow-lg flex flex-col justify-center items-end pr-1 z-10 border-r-2 border-black/20 dark:border-white/10">
          <div className="absolute top-0 left-0 w-full h-1/4 bg-white/20 rounded-tl-xl pointer-events-none"></div>
          <div className="w-3 sm:w-5 h-2 sm:h-2.5 bg-slate-400 dark:bg-slate-400 rounded-sm mb-1.5 sm:mb-2"></div>
          <div className="w-3 sm:w-5 h-2 sm:h-2.5 bg-slate-400 dark:bg-slate-400 rounded-sm"></div>
        </div>
      </motion.div>

      {/* Sparkles */}
      <div className="flex flex-col items-center justify-center w-12 sm:w-16">
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-[#7b51f8]"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(123,81,248,0.8)]">
            <path d="m13 2-2 2.5h3L11 7"/>
            <path d="m11 22 2-2.5h-3L13 17"/>
            <path d="m2 13 2.5-2v3L7 11"/>
            <path d="m22 11-2.5 2v-3L17 13"/>
          </svg>
        </motion.div>
      </div>

      {/* Right Plug (Female) */}
      <motion.div 
        className="flex items-center w-1/2 justify-start"
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.1 }}
      >
        <div className="w-10 sm:w-14 h-14 sm:h-20 bg-slate-800 dark:bg-slate-200 rounded-r-xl relative shadow-lg flex flex-col justify-center items-start pl-1 sm:pl-1.5 z-10 border-l border-black/20 dark:border-white/10">
          <div className="absolute top-0 left-0 w-full h-1/4 bg-white/20 rounded-tr-xl pointer-events-none"></div>
          <div className="w-3 sm:w-4 h-2.5 sm:h-3.5 bg-slate-900 dark:bg-slate-800 rounded-sm mb-1.5 sm:mb-2 shadow-inner"></div>
          <div className="w-3 sm:w-4 h-2.5 sm:h-3.5 bg-slate-900 dark:bg-slate-800 rounded-sm shadow-inner"></div>
        </div>
        <div className="w-full h-3 sm:h-4 bg-slate-800 dark:bg-slate-200 rounded-r-full relative overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-white/20"></div>
        </div>
      </motion.div>
    </div>
  </div>
);

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0a0a0a]">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <SEO
        title="404 | Organic Mushrooms Farm"
        description="The page you requested could not be found."
        url="/404"
      />

      <div className="max-w-2xl w-full text-center relative z-10 flex flex-col items-center">
        <PlugAnimation />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white text-slate-900 mt-2 mb-6 tracking-tight leading-tight"
        >
          Oops! You've <br className="hidden sm:block" /> drifted <span className="text-[#7b51f8]">offline</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl dark:text-slate-400 text-slate-600 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          The page you are looking for doesn't exist or has been moved to a more premium location. Let's get you back on track to growing your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-center gap-4 w-full max-w-[280px]"
        >
          <Link
            to="/"
            className="w-full py-4 rounded-2xl bg-[#7b51f8] text-white font-bold tracking-wide transition-all hover:bg-[#6a42d9] shadow-lg shadow-[#7b51f8]/20 flex items-center justify-center text-lg"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="w-full py-4 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-white/10 dark:text-white text-slate-900 font-bold tracking-wide transition-all hover:border-[#7b51f8] hover:text-[#7b51f8] flex items-center justify-center text-lg shadow-sm"
          >
            Explore Services
          </Link>
          <Link
            to="/training"
            className="w-full py-4 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-white/10 dark:text-white text-slate-900 font-bold tracking-wide transition-all hover:border-[#7b51f8] hover:text-[#7b51f8] flex items-center justify-center text-lg shadow-sm"
          >
            View Plans
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
