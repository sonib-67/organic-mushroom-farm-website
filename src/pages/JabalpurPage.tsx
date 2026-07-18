import React from "react";
import { Link } from "react-router-dom";
import { jabalpurBlogs } from "../data/jabalpurBlogsData";
import SEO from "../components/SEO";
import { ChevronRight, MapPin } from "lucide-react";

export default function JabalpurPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-[#09090b]">
      <SEO
        title="Jabalpur Mushroom Farming | Cities Pages"
        description="Explore mushroom farming, training, and resources in Jabalpur."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/states" className="hover:text-brand-blue transition-colors">States</Link>
          <ChevronRight size={14} />
          <Link to="/states/madhya-pradesh" className="hover:text-brand-blue transition-colors">Madhya Pradesh</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-slate-900 dark:text-white">Jabalpur</span>
        </div>

        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <MapPin className="text-brand-blue" size={40} />
            Jabalpur Mushroom Resources
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            A complete list of mushroom farming training, spawn suppliers, guides, and courses available for the Jabalpur region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jabalpurBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/locations/jabalpur/${blog.slug}`}
              className="group glass p-6 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col"
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                {blog.h1}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                {blog.intro}
              </p>
              <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Guide <ChevronRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
