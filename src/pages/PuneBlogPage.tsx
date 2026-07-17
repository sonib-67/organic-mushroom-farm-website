import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { puneBlogs } from "../data/puneBlogsData";
import SEO from "../components/SEO";
import { ChevronRight, ArrowLeft } from "lucide-react";

export default function PuneBlogPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const blog = puneBlogs.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return <Navigate to="/locations/pune" replace />;
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-[#09090b]">
      <SEO
        title={blog.title}
        description={blog.metaDesc}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/states" className="hover:text-brand-blue transition-colors">States</Link>
          <ChevronRight size={14} />
          <Link to="/states/maharashtra" className="hover:text-brand-blue transition-colors">Maharashtra</Link>
          <ChevronRight size={14} />
          <Link to="/locations/pune" className="hover:text-brand-blue transition-colors">Pune</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px]">{blog.h1}</span>
        </div>

        <Link
          to="/locations/pune"
          className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all mb-8 bg-brand-blue/10 px-4 py-2 rounded-xl"
        >
          <ArrowLeft size={16} /> Back to Pune Resources
        </Link>

        <article className="glass p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />
          
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 relative z-10">
            {blog.h1}
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12 relative z-10">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {blog.intro}
            </p>
          </div>

          <div className="relative z-10 bg-slate-100 dark:bg-white/5 p-6 md:p-8 rounded-2xl border border-black/5 dark:border-white/5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {blog.faq.map((item, index) => (
                <div key={index} className="bg-white dark:bg-[#09090b] p-5 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {item.q}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
