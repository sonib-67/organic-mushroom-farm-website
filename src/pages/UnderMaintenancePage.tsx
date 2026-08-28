import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnderMaintenancePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0B0F19]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-auto p-8 glass border border-black/10 dark:border-white/10 rounded-[2.5rem] text-center"
      >
        <div className="w-20 h-20 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldAlert size={40} />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Form Under Maintenance
        </h1>
        
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          We are currently upgrading our security systems to serve you better. Form submissions are temporarily disabled. Please check back in a few days.
        </p>
        
        <div className="flex flex-col gap-4">
          <a 
            href="mailto:contact@organicmushroomsfarm.com" 
            className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-primary-start hover:bg-primary-mid text-white rounded-xl font-bold transition-colors"
          >
            <Mail size={18} />
            Email Us Directly
          </a>
          
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-xl font-bold transition-colors"
          >
            <Home size={18} />
            Return to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderMaintenancePage;
