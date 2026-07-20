import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Search, Home, Sprout, Building2, BookOpen, Calculator, Phone } from "lucide-react";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <SEO
        title="404 | Organic Mushrooms Farm"
        description="The page you requested could not be found. Visit Organic Mushrooms Farm to explore mushroom farming training, consultancy, turnkey projects, spawn sales, business plans, subsidy guidance, and more."
        url="/404"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-start/20 rounded-full blur-[80px] mix-blend-screen opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-green/10 rounded-full blur-[100px] mix-blend-screen opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(126,34,206,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-block mb-6"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary-start via-brand-green to-primary-end drop-shadow-2xl select-none"
          >
            404
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-4 sm:bottom-4 right-0 sm:-right-8 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl rounded-2xl p-4 flex items-center justify-center transform rotate-12"
          >
            <Sprout className="w-10 h-10 sm:w-12 sm:h-12 text-brand-green drop-shadow-md" />
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight"
        >
          Oops! Page Not Found
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base sm:text-lg dark:text-slate-400 text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The page you are looking for may have been moved, deleted, or the URL is incorrect.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-start/30 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          <Link
            to="/training"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 dark:text-white text-slate-900 font-bold tracking-wide transition-all hover:bg-white/20 dark:hover:bg-white/10 hover:border-brand-green/30 flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5 text-brand-green" />
            Explore Mushroom Training
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border-2 border-primary-start/20 dark:border-white/10 dark:text-white text-slate-900 font-bold tracking-wide transition-all hover:border-primary-start dark:hover:border-white/30 flex items-center justify-center gap-2 group"
          >
            <Phone className="w-5 h-5" />
            Contact Us
            <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </Link>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-5xl mx-auto"
        >
          {[
            { title: "Training Programs", icon: BookOpen, link: "/training", color: "text-blue-500" },
            { title: "Farm Setup", icon: Building2, link: "/turnkey-projects", color: "text-purple-500" },
            { title: "Consultancy", icon: Search, link: "/book-consultant", color: "text-brand-green" },
            { title: "ROI Calculator", icon: Calculator, link: "/roi-calculator", color: "text-orange-500" },
          ].map((item, index) => (
            <Link key={index} to={item.link}>
              <div className="bg-white/40 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-xl p-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all group h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-white/50 dark:bg-white/5 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold dark:text-white text-slate-900 group-hover:text-primary-start transition-colors">{item.title}</h3>
                </div>
                <div className="flex items-center text-sm font-medium text-primary-start dark:text-brand-green mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
