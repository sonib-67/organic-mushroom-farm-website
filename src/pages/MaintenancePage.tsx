import React from 'react';
import SEO from '../components/SEO';
import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
      <SEO 
        title="Form Under Maintenance"
        description="Our enquiry and contact forms are currently undergoing scheduled maintenance to improve our systems."
        url="/maintenance"
      />
      <div className="max-w-md w-full mx-auto px-4 text-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-8 h-8 text-amber-600 dark:text-amber-400" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Under Maintenance
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Due to an unusually high volume of spam, our enquiry forms are temporarily disabled for 48 hours while we upgrade our security systems. 
            Please check back later or contact us directly via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-sm font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              Return Home
            </Link>
            <a 
              href="https://wa.me/917415886616" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
