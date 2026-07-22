import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0a0a0a]">
      <SEO
        title="404 | Organic Mushrooms Farm"
        description="The page you requested could not be found."
        url="/404"
      />

      <div className="max-w-2xl w-full text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-[150px] sm:text-[220px] md:text-[250px] font-black leading-none tracking-tighter text-[#7b51f8] select-none">
            404
          </div>
        </motion.div>

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
