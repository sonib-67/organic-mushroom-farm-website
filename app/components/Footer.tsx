"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
  Youtube,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight
} from "lucide-react";

export const Footer = () => {
  const LOCATIONS = [
    "Madhya Pradesh",
    "Maharashtra",
    "Uttar Pradesh",
    "Bihar",
    "Delhi NCR",
    "Rajasthan",
    "Gujarat",
    "Punjab",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "West Bengal",
    "Telangana",
    "USA & Global Export"
  ];

  return (
    <footer className="pt-16 pb-24 md:pb-12 bg-slate-900/40 dark:bg-black/60 border-t border-black/5 dark:border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Global E-E-A-T Trust Profile Banner */}
        <div className="mb-12 p-6 rounded-3xl bg-linear-to-r from-purple-500/10 via-emerald-500/5 to-blue-500/10 border border-purple-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <ShieldCheck size={30} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                <span>Certified E-E-A-T Excellence & Practical Agronomy</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase">
                  Govt. Verified
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-5xl">
                <strong className="text-slate-900 dark:text-slate-200">Experience & Expertise:</strong> With over 10 cultivated mushroom species (Button, Oyster, Milky, Cordyceps) and world-class commercial infrastructure pan-India.
                {" "}<strong className="text-slate-900 dark:text-slate-200">Trust & Authority:</strong> ISO 9001:2015 certified, led by experienced commercial growers, and rated #1 by thousands of progressive farmers across India. Verified headquarters in Katangi Road, Jabalpur, Madhya Pradesh.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-500/30">
                🍄
              </div>
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                Organic <span className="gradient-text">Mushroom Farm</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-medium max-w-sm">
              Empowering high-yield organic button, oyster, and milky mushroom cultivation across India and internationally through standardized SOPs, commercial training, and turnkey climate-controlled setups.
            </p>

            <div className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <span>Katangi Road, Jabalpur, Madhya Pradesh – 483105, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a href="tel:9203544140" className="hover:text-purple-600 transition-colors">
                  +91 9203544140 (Consultancy & Spawn Booking)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <a href="mailto:support@organicmushroomsfarm.com" className="hover:text-purple-600 transition-colors">
                  support@organicmushroomsfarm.com
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://www.youtube.com/@organicmushroomfarm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-red-500/15 border border-black/5 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 hover:text-red-500 transition-colors"
              >
                <Youtube size={14} className="text-red-500" />
                <span>YouTube</span>
              </a>
              <a
                href="https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-blue-500/15 border border-black/5 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-colors"
              >
                <MapPin size={14} className="text-blue-500" />
                <span>Google Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column 1: Explore */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              {[
                { name: "About Farm", href: "/about" },
                { name: "Mushroom Training", href: "/training" },
                { name: "Workshop (₹199)", href: "/workshop" },
                { name: "Turnkey Setup", href: "/turnkey-projects" },
                { name: "Spawn Supply", href: "/spawn-seed" },
                { name: "Mushroom Franchise", href: "/mushroom-franchise" },
                { name: "USA Training ($49)", href: "/usatraining" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2: Resources & Calculators */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-2">
              Resources & Tools
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              {[
                { name: "Commercial ROI Calculator", href: "/roi-calculator" },
                { name: "NABARD / NHB Subsidy Guide", href: "/subsidy" },
                { name: "Live Farm Weather Tracker", href: "/mushroom-farm-climate-tracker" },
                { name: "Growing Equipment Directory", href: "/equipment" },
                { name: "Button Mushroom Guide", href: "/blog/button-mushroom-farming-guide" },
                { name: "Oyster Mushroom Cultivation", href: "/services/oyster-mushroom" },
                { name: "State & City Training Hubs", href: "/states" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 3: Trust & Legal */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-2">
              Support & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
              {[
                { name: "Contact & On-Site Consultation", href: "/contact" },
                { name: "Customer Support Desk", href: "/support" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Refund & Cancellation Policy", href: "/refund-policy" },
                { name: "Shipping & Spawn Delivery Policy", href: "/shipping-policy" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hubs pill tags */}
            <div className="flex flex-wrap gap-1.5">
              {LOCATIONS.slice(0, 8).map((loc) => (
                <span key={loc} className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[9px] text-slate-500 font-medium">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-slate-500 font-medium">
            © 2026 Organic Mushrooms Farm. All Rights Reserved. ISO 9001:2015 Certified Operations.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a
              href="https://wa.me/919203544140"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#128C7E] dark:text-[#25D366] font-bold hover:underline flex items-center gap-1"
            >
              <span>Instant WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
