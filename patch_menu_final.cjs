const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const target1 = '<AnimatePresence>\n        {mobileMenuOpen && (';
const target2 = '    </>\n  );\n};\n\nconst Hero = () => {';

const idx1 = content.lastIndexOf(target1, content.indexOf('Hero = () =>'));
const idx2 = content.indexOf(target2);

if (idx1 === -1 || idx2 === -1) {
  console.log("Tokens not found", idx1, idx2);
  process.exit(1);
}

const replacementMenu = `<AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden flex flex-col justify-end">
            {/* Dark Overlay (Click to close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
            />

            {/* Fast Sliding Drawer with Drag to Close */}
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(e, info) => {
                if (info.offset.y > 100 || info.velocity.y > 500) {
                  setMobileMenuOpen(false);
                }
              }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{
                type: "tween",
                ease: [0.16, 1, 0.3, 1],
                duration: 0.3,
              }}
              style={{ willChange: "transform, opacity" }}
              className="relative w-full max-h-[85vh] flex flex-col bg-white/70 dark:bg-[#09090b]/80 backdrop-blur-3xl rounded-t-[2.5rem] border-t border-white/40 dark:border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] pb-safe z-[9999] overflow-hidden"
            >
              {/* --- UNIQUE ANIMATED BACKGROUND COMBO --- */}
              <div className="absolute inset-0 pointer-events-none z-0 opacity-50 dark:opacity-40">
                {/* 1. Liquid Nature Aura (Orbs) */}
                <motion.div 
                  className="absolute w-64 h-64 bg-emerald-400/30 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
                  animate={{ x: [-30, 40, -30], y: [-20, 50, -20] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  style={{ top: '-10%', left: '-10%' }}
                />
                <motion.div 
                  className="absolute w-72 h-72 bg-amber-300/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
                  animate={{ x: [40, -20, 40], y: [50, -10, 50] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  style={{ bottom: '-10%', right: '-10%' }}
                />
                <motion.div 
                  className="absolute w-56 h-56 bg-blue-300/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ top: '30%', left: '30%' }}
                />

                {/* 2. Breathing Mycelium Lines (Abstract SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                  <motion.path 
                    d="M-50,50 Q100,150 200,50 T500,100" 
                    stroke="url(#mycelium-grad)" 
                    strokeWidth="1.5" 
                    fill="none"
                    animate={{ d: ["M-50,50 Q100,150 200,50 T500,100", "M-50,70 Q120,130 180,80 T500,120", "M-50,50 Q100,150 200,50 T500,100"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M-20,250 Q150,150 250,300 T500,200" 
                    stroke="url(#mycelium-grad)" 
                    strokeWidth="1" 
                    fill="none"
                    animate={{ d: ["M-20,250 Q150,150 250,300 T500,200", "M-20,270 Q130,170 270,280 T500,220", "M-20,250 Q150,150 250,300 T500,200"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="mycelium-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                      <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* 3. Falling Spores */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={\`spore-\${i}\`}
                    className="absolute rounded-full bg-emerald-500"
                    style={{
                      width: Math.random() * 3 + 1 + "px",
                      height: Math.random() * 3 + 1 + "px",
                      left: Math.random() * 100 + "%",
                      top: "-5%",
                      filter: "blur(0.5px)"
                    }}
                    animate={{
                      y: ['0vh', '85vh'],
                      x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: Math.random() * 8 + 6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: Math.random() * 5,
                    }}
                  />
                ))}

                {/* 4. Pulsing Watermark (Mushroom Icon Bottom Right) */}
                <motion.div
                  className="absolute -bottom-8 -right-8 text-emerald-600/10 dark:text-emerald-300/5 pointer-events-none"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C7 2 3 6.5 3 11.5C3 12.3 3.7 13 4.5 13H19.5C20.3 13 21 12.3 21 11.5C21 6.5 17 2 12 2ZM10.5 14.5V21C10.5 21.8 11.2 22.5 12 22.5C12.8 22.5 13.5 21.8 13.5 21V14.5H10.5Z" />
                  </svg>
                </motion.div>
              </div>
              {/* --- END ANIMATED BACKGROUND --- */}

              {/* Drawer Handle (Drag Indicator) - Tap to close as well as drag */}
              <div 
                className="w-full flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing relative z-20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-12 h-1.5 bg-slate-300/80 dark:bg-slate-600/80 rounded-full hover:bg-slate-400 dark:hover:bg-slate-500 transition-colors" />
              </div>

              {/* Header with Inline Live Ticker */}
              <div className="flex items-center gap-3 px-4 pb-3 pt-1 w-full relative z-20">
                {/* Logo & Title */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-6 h-6 rounded-md bg-white/70 dark:bg-white/10 border border-white/50 dark:border-white/5 flex items-center justify-center shadow-sm overflow-hidden p-0.5">
                    <img
                      src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                      alt="Organic Mushrooms Farm"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[13px] font-bold tracking-tight dark:text-white text-slate-900 hidden sm:block">
                    Menu
                  </span>
                </div>
                
                {/* Inline Live Ticker (No Green Dot, Seamless) */}
                <div className="flex-1 overflow-hidden h-7 bg-slate-100/40 dark:bg-black/20 rounded-full flex items-center shadow-inner border border-white/20 dark:border-white/5 backdrop-blur-md">
                   <div className="w-full overflow-hidden flex items-center h-full">
                     <motion.div 
                       className="whitespace-nowrap text-[10px] sm:text-[11px] font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase flex items-center h-full pt-0.5"
                       animate={{ x: [0, -600] }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     >
                       <span className="mx-4">India 24.4°C, Hum 88% 🌡️</span>
                       <span className="mx-4">•</span>
                       <span className="mx-4">New Batch Opens Soon 🍄</span>
                       <span className="mx-4">•</span>
                       <span className="mx-4">Turnkey Setup Consultation 📞</span>
                       <span className="mx-4">•</span>
                       <span className="mx-4">India 24.4°C, Hum 88% 🌡️</span>
                       <span className="mx-4">•</span>
                       <span className="mx-4">New Batch Opens Soon 🍄</span>
                     </motion.div>
                   </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="shrink-0 dark:text-white text-slate-900 p-1.5 bg-slate-200/50 dark:bg-white/10 rounded-full hover:bg-slate-300/50 dark:hover:bg-white/20 transition-all backdrop-blur-md border border-white/20 dark:border-white/5"
                  aria-label="Close Menu"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Grid Menu Content */}
              <div className="flex-1 overflow-y-auto px-4 pb-8 pt-1 hide-scrollbar relative z-20">
                <div className="grid grid-cols-2 gap-2">
                  {NAV_ITEMS.map((item, i) => {
                    const isHashLink = item.href.includes("#");
                    const hash = isHashLink ? item.href.split("#")[1] : null;
                    const isActive = isHashLink
                      ? location.pathname === "/" && activeSection === hash
                      : location.pathname === item.href &&
                        !location.hash &&
                        activeSection === null;

                    const hasSubMenu = (item as any).subMenu && (item as any).subMenu.length > 0;
                    const isExpanded = expandedMobileMenu === item.name;

                    const baseCardClass = \`relative w-full overflow-hidden rounded-2xl border transition-all duration-200 \${isActive ? "border-primary-start/50 bg-primary-start/15 shadow-[0_0_15px_rgba(34,197,94,0.2)]" : "border-white/50 dark:border-white/10 bg-white/70 dark:bg-white/[0.05] shadow-sm hover:bg-white/90 dark:hover:bg-white/[0.1] backdrop-blur-md"}\`;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.02, duration: 0.2, ease: "easeOut" }}
                        className={hasSubMenu ? "col-span-2 sm:col-span-1" : "col-span-1"}
                      >
                        {hasSubMenu ? (
                          <div className={baseCardClass}>
                            <button
                              onClick={() => {
                                setExpandedMobileMenu((prev) =>
                                  prev === item.name ? null : item.name,
                                );
                              }}
                              className="w-full flex items-center justify-between p-2.5 group relative overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="flex items-center gap-2 relative z-10">
                                <div className={\`w-6 h-6 rounded-full flex items-center justify-center transition-all \${isActive ? "bg-primary-start/20 text-primary-start" : "bg-slate-100/80 dark:bg-white/10 text-slate-700 dark:text-slate-300"}\`}>
                                  {item.icon && <item.icon size={12} />}
                                </div>
                                <span className={\`text-[11px] font-bold \${isActive ? "text-primary-start" : "text-slate-800 dark:text-slate-200"}\`}>
                                  {item.name}
                                </span>
                              </div>
                              <ChevronDown
                                size={12}
                                className={\`transition-transform duration-200 relative z-10 \${isExpanded ? "rotate-180" : ""} \${isActive ? "text-primary-start" : "text-slate-500"}\`}
                              />
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden bg-white/40 dark:bg-black/30 backdrop-blur-md"
                                >
                                  <div className="px-3 py-1 flex flex-col gap-0.5 border-t border-white/40 dark:border-white/10">
                                    {(item as any).subMenu.map((sub: any, subI: number) => (
                                      <motion.div
                                        key={sub.name}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: subI * 0.03, duration: 0.15 }}
                                      >
                                        <Link
                                          to={sub.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="block py-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-start dark:hover:text-primary-start transition-colors pl-6 relative"
                                        >
                                          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                                          {sub.name}
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            onClick={(e) => {
                              if (isHashLink && location.pathname === "/") {
                                e.preventDefault();
                                setMobileMenuOpen(false);
                                const element = document.getElementById(hash);
                                if (element) {
                                  const offset = 80;
                                  const bodyRect = document.body.getBoundingClientRect().top;
                                  const elementRect = element.getBoundingClientRect().top;
                                  const offsetPosition = (elementRect - bodyRect) - offset;
                                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                  window.history.pushState(null, "", \`/#\${hash}\`);
                                }
                              } else {
                                setMobileMenuOpen(false);
                              }
                            }}
                            className={\`\${baseCardClass} flex flex-col items-start justify-center p-2.5 min-h-[60px] group\`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className={\`w-6 h-6 rounded-full flex items-center justify-center mb-1.5 transition-all relative z-10 \${isActive ? "bg-primary-start/20 text-primary-start" : "bg-slate-100/80 dark:bg-white/10 text-slate-700 dark:text-slate-300"}\`}>
                              {item.icon && <item.icon size={12} />}
                            </div>
                            <span className={\`text-[11px] font-bold relative z-10 \${isActive ? "text-primary-start" : "text-slate-800 dark:text-slate-200"}\`}>
                              {item.name}
                            </span>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>`;

const newContent = content.substring(0, idx1) + replacementMenu + '\n' + content.substring(idx2);
fs.writeFileSync('src/App.tsx', newContent);
console.log("Success");
