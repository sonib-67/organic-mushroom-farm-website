import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ChevronRight, MapPin } from "lucide-react";

export default function ChhattisgarhPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-[#09090b]">
      <SEO
        title="Mushroom Farming in Chhattisgarh | Cities"
        description="Find mushroom farming training, commercial setups, and resources across cities in Chhattisgarh."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/states" className="hover:text-brand-blue transition-colors">States</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-slate-900 dark:text-white">Chhattisgarh</span>
        </div>

        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <MapPin className="text-brand-blue" size={40} />
            Chhattisgarh Cities
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Select a city in Chhattisgarh to find local mushroom farming training centers, consultants, and spawn suppliers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/cities/chhattisgarh/raipur"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Raipur
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Mushroom training, cultivation resources, and commercial setups in Raipur and surrounding areas.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Resources <ChevronRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
