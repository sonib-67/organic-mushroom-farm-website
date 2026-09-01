const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/workshop") return null;

  return (
    <footer className="pt-20 pb-24 md:pb-12 bg-black/50 border-t dark:border-white/5 border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Global E-E-A-T Profile for SEO Signals */}
        <div className="mb-6 p-3 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-start/20 flex items-center justify-center text-primary-start">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">
                Certified E-E-A-T Excellence
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-4xl">
                <strong className="dark:text-slate-300 text-slate-700">
                  Experience & Expertise:
                </strong>{" "}
                With years of hands-on cultivation of over 10 mushroom varieties
                (Button, Oyster, Milky, Cordyceps) and world-class commercial
                infrastructure setups pan-India.
                <br />
                <strong className="dark:text-slate-300 text-slate-700">
                  Authoritativeness & Trust:
                </strong>{" "}
                Certified by leading agricultural bodies, led by agri-tech
                expert Tanish Soni, and highly rated by thousands of trained
                farmers globally. Verified operations in Jabalpur, MP.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-6 md:grid md:grid-cols-5 md:gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                alt="Organic Mushrooms Farm"
                className="w-14 h-14 object-contain"
               width="120" height="120" />
              <span className="text-sm font-bold tracking-tight dark:text-white text-slate-900">
                Organic <span className="gradient-text">Mushroom Farm</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm text-[13px] leading-relaxed mb-6 font-medium">
              Empowering high-yield organic button & oyster mushroom cultivation
              across India and the globe through standardized SOPs, expert
              commercial training, and industrial-grade turnkey projects.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[8px] font-black text-slate-600 uppercase tracking-[0.3em]">
              {LOCATIONS.map((loc, i) => (
                <span key={loc} className="flex items-center gap-2">
                  {loc}{" "}
                  {i !== LOCATIONS.length - 1 && (
                    <div className="w-1 h-1 rounded-full dark:bg-white/10 bg-black/10"></div>
                  )}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://www.youtube.com/@organicmushroomfarm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-red-500/10 border dark:border-white/5 border-black/5 hover:border-red-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group"
              >
                <Youtube
                  size={16}
                  className="text-red-500 group-hover:scale-110 transition-transform"
                />
                <span className="font-medium">YouTube</span>
              </a>
              <a
                href="https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-blue-500/10 border dark:border-white/5 border-black/5 hover:border-blue-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group"
              >
                <MapPin
                  size={16}
                  className="text-blue-500 group-hover:scale-110 transition-transform"
                />
                <span className="font-medium">Google Profile</span>
              </a>
              <a
                href="https://www.pinterest.com/organicmushroomfarm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-pink-500/10 border dark:border-white/5 border-black/5 hover:border-pink-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group"
              >
                <ShieldCheck
                  size={16}
                  className="text-pink-500 group-hover:scale-110 transition-transform"
                />
                <span className="font-medium">Pinterest</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          <div>
            <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[8px] md:text-[9px] border-l-2 border-primary-start pl-2 md:pl-3">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Training", href: "/training" },
                { name: "Franchise", href: "/mushroom-franchise" },
                { name: "Mushroom Types", href: "/mushroom-types" },
                { name: "Careers", href: "/careers" },
                { name: "Mushroom Prices", href: "/mushroom-price-today" },
                { name: "Mushroom Farming USA Guide", href: "/mushroom-farming-usa-guide" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-[10px] sm:text-xs md:text-sm font-medium leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[8px] md:text-[9px] border-l-2 border-primary-start pl-2 md:pl-3">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Gallery", href: "/gallery" },
                { name: "Business Plan", href: "/business-plan" },
                { name: "Government Subsidy", href: "/subsidy" },
                { name: "Spawn Supply", href: "/spawn-seed" },
                { name: "Live Weather", href: "/mushroom-farm-climate-tracker" },
                { name: "Blog", href: "/blog" },
                { name: "FAQ", href: "/faq" },
                { name: "Cities Pages", href: "/states" },
                { name: "Contact Us", href: "/contact" },
                { name: "USA Training", href: "/usatraining" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-[10px] sm:text-xs md:text-sm font-medium leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[8px] md:text-[9px] border-l-2 border-primary-start pl-2 md:pl-3">
              Support & Legal
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Contact", href: "/contact" },
                { name: "Customer Support", href: "/support" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Disclaimer Policy", href: "/disclaimer" },
                { name: "Refund Policy", href: "/refund-policy" },
                { name: "Shipping Policy", href: "/shipping-policy" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-[10px] sm:text-xs md:text-sm font-medium leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t dark:border-white/5 border-black/5 pt-10 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <div className="mb-6 md:mb-0">
            © 2026 Organic Mushrooms Farm. All Rights Reserved.
          </div>
          <div className="flex gap-4 flex-wrap justify-center items-center">
            {[
              { label: "Facebook", href: "https://www.facebook.com/organic.mushroom.farm0", icon: Facebook },
              { label: "Instagram", href: "https://www.instagram.com/organic_mushroom_farm_jabalpur", icon: Instagram },
              { label: "Twitter", href: "https://x.com/mushroomfarmjbp", icon: Twitter },
              { label: "YouTube", href: "https://www.youtube.com/@organicmushroomfarm", icon: Youtube },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/organic-mushroom-farm-29b970282?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin },
              { label: "Pinterest", href: "https://www.pinterest.com/organicmushroomfarm", icon: PinterestIcon },
              { label: "Telegram", href: "https://t.me/organicmushroomfarms", icon: TelegramIcon },
              { label: "Quora", href: "https://www.quora.com/profile/Organic-Mushroom-Farm-1?ch=10&oid=3146591367&share=4e39c3cd&srid=5xCPIb&target_type=user", icon: QuoraIcon }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:hover:bg-slate-700 transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
