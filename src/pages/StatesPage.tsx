import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ChevronRight, Map } from "lucide-react";

export default function StatesPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-[#09090b]">
      <SEO
        title="Mushroom Farming States | Cities Pages"
        description="Select a state to explore mushroom farming resources, training centers, and local guides."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-slate-900 dark:text-white">States</span>
        </div>

        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <Map className="text-brand-blue" size={40} />
            Mushroom Farming Resources by State
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Choose your state below to find mushroom farming training, spawn suppliers, courses, and guides available in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/states/madhya-pradesh"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Madhya Pradesh
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Jabalpur and other cities in Madhya Pradesh.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          
          <Link
            to="/states/maharashtra"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Maharashtra
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Mumbai, Pune and other cities in Maharashtra.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>

          <Link
            to="/states/tamil-nadu"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Tamil Nadu
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Chennai and other cities in Tamil Nadu.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>

          <Link
            to="/states/karnataka"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Karnataka
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Bangalore and other cities in Karnataka.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/bihar"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Bihar
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Patna and other cities in Bihar.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/chhattisgarh"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Chhattisgarh
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Raipur and other cities in Chhattisgarh.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/kerala"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Kerala
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Kochi and other cities in Kerala.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/chandigarh"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Chandigarh
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Chandigarh Tricity.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/delhi"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Delhi
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in New Delhi and NCR region.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/telangana"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Telangana
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Hyderabad and other cities in Telangana.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/west-bengal"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              West Bengal
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Kolkata and other cities in West Bengal.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/gujarat"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Gujarat
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Ahmedabad and other cities in Gujarat.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/rajasthan"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Rajasthan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Jaipur and other cities in Rajasthan.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/states/uttar-pradesh"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Uttar Pradesh
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore resources in Lucknow and other cities in Uttar Pradesh.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Cities <ChevronRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
