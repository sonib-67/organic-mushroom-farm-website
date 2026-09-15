'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { BlogPost } from '../../lib/blog-data';
import { BookOpen, Calendar, User, ArrowRight, Search, Sprout, HeartPulse, TrendingUp, Layers } from 'lucide-react';

interface BlogListClientProps {
  posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { name: 'All', icon: Layers, count: posts.length },
    { name: 'Educational', icon: Sprout, count: posts.filter(p => p.category === 'Educational').length },
    { name: 'Health & Wellness', icon: HeartPulse, count: posts.filter(p => p.category === 'Health & Wellness').length },
    { name: 'Business Trends', icon: TrendingUp, count: posts.filter(p => p.category === 'Business Trends').length },
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Educational':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20';
      case 'Health & Wellness':
        return 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20';
      case 'Business Trends':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20';
      default:
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Pills & Search Filter */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between pb-2 border-b border-slate-200/60 dark:border-white/10">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`cursor-pointer px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30'
                    : 'bg-white/40 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/[0.08]'
                }`}
              >
                <Icon size={12} className={isSelected ? 'text-white' : 'text-slate-400'} />
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/60 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Search Input */}
        <div className="relative w-full sm:w-64 shrink-0">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search guides & topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-white/40 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/10 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all backdrop-blur-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Showing Result Counter */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1">
        <span>
          Showing <strong className="text-slate-700 dark:text-slate-200">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}
          {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          {searchQuery ? ` matching "${searchQuery}"` : ''}
        </span>
      </div>

      {/* Grid of Compact Glass Cards (No Black Box, Small Text) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {filteredPosts.map((post, idx) => (
          <article
            key={`${post.slug}-${idx}`}
            className="group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs hover:border-emerald-500/40 hover:bg-white/60 dark:hover:bg-white/[0.06] transition-all duration-200 shadow-xs hover:shadow-md"
          >
            <div>
              {/* Top Row: Category Badge & Date */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span
                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${getCategoryColor(
                    post.category
                  )}`}
                >
                  {post.category}
                </span>
                
                <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                  <Calendar size={10} className="text-slate-400" />
                  <span>{post.datePublished}</span>
                </div>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500 mb-1.5">
                <User size={10} />
                <span>{post.author || 'Expert Team'}</span>
              </div>

              {/* Title (Compact Font) */}
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2 mb-1.5">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none focus:underline">
                  {post.title}
                </Link>
              </h2>

              {/* Description (Compact Text) */}
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3 mb-3">
                {post.description}
              </p>
            </div>

            {/* Read Article Link */}
            <div className="pt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between mt-auto">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group-hover:translate-x-0.5 transition-all"
              >
                <span>Read Article</span>
                <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-slate-300 dark:border-white/10 bg-white/20 dark:bg-white/[0.02]">
          <BookOpen size={28} className="mx-auto text-slate-400 mb-2" />
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">No articles found</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            Try adjusting your search query or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
