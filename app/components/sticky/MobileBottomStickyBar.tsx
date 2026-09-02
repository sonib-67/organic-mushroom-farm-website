'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Calendar,
  Sprout,
  BookOpen,
  Home,
  Layers,
  ShoppingCart,
  Phone,
} from 'lucide-react';

export const MobileBottomStickyBar = () => {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    const onScroll = () => {
      if (pathname !== '/') return;
      const sections = ['farming-models', 'compost-units', 'market'];
      let active = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            active = '#' + section;
            break;
          }
        }
      }
      if (active) {
        setCurrentHash(active);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  const mobileNavItems = [
    { label: 'Book Consultant', href: '/book-consultant', icon: Calendar },
    { label: 'Spawn (Seed)', href: '/spawn-seed', icon: Sprout },
    { label: 'Training', href: '/training', icon: BookOpen },
    { label: 'Setup (Turnkey)', href: '/#farming-models', icon: Home },
    { label: 'Bags', href: '/#compost-units', icon: Layers },
    { label: 'Fresh Mushroom', href: '/#market', icon: ShoppingCart },
    { label: 'Call Us', href: 'tel:+919203544140', icon: Phone },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[110] md:hidden backdrop-blur-xl border-t dark:border-white/20 border-black/10 shadow-[0_-8px_32px_0_rgba(31,38,135,0.1)]"
      style={{
        background:
          'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.15) 33%, rgba(34, 197, 94, 0.15) 66%, rgba(234, 179, 8, 0.15) 100%)',
      }}
    >
      <div className="overflow-x-auto scrollbar-hide snap-x flex items-center gap-2 p-3 px-4">
        {mobileNavItems.map((item) => {
          const isExternal = item.href.startsWith('tel:') || item.href.startsWith('http');
          const isHashLink = item.href.includes('#');

          let isActive = false;
          if (isHashLink) {
            const hash = item.href.split('#')[1];
            isActive = pathname === '/' && currentHash === '#' + hash;
          } else {
            isActive = pathname === item.href;
          }

          const className = `snap-start shrink-0 flex items-center justify-center rounded-full border transition-all active:scale-95 gap-1.5 px-3.5 py-2 ${
            isActive
              ? 'bg-purple-600/20 text-purple-600 dark:text-purple-400 border-purple-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)] font-bold'
              : 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:border-white/10 border-black/10 dark:text-white text-slate-900 hover:border-purple-500/40 active:bg-purple-500/20'
          }`;

          const content = (
            <>
              <item.icon size={13} className="text-purple-600 dark:text-purple-400 shrink-0" />
              <span className="leading-tight tracking-tight font-semibold text-[10px] whitespace-nowrap">
                {item.label}
              </span>
            </>
          );

          if (isExternal) {
            return (
              <a key={item.label} href={item.href} className={className}>
                {content}
              </a>
            );
          }

          if (isHashLink) {
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  const hash = item.href.split('#')[1];
                  if (pathname === '/') {
                    e.preventDefault();
                    const el = document.getElementById(hash);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      setCurrentHash('#' + hash);
                    }
                  }
                }}
                className={className}
              >
                {content}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href} className={className}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
