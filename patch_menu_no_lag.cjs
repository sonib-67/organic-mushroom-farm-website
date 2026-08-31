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
            {/* NO BLUR Overlay - Solid 70% opacity black */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/70 dark:bg-black/80"
            />

            {/* Fast Sliding Drawer with Drag - SOLID COLORS, NO BLUR */}
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.2 }}
              onDragEnd={(e, info) => {
                if (info.offset.y > 60 || info.velocity.y > 200) {
                  setMobileMenuOpen(false);
                }
              }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.2,
              }}
              style={{ willChange: "transform" }}
              className="relative w-full max-h-[85vh] flex flex-col bg-slate-50 dark:bg-slate-900 rounded-t-[2rem] shadow-2xl pb-safe z-[9999] overflow-hidden"
            >
              {/* STATIC Soft Top Gradient (Instead of animated glow) */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-500/10 dark:from-emerald-400/5 to-transparent pointer-events-none" />

              {/* Drawer Handle */}
              <div 
                className="w-full flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing relative z-20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
              </div>

              {/* Header with Inline Live Ticker */}
              <div className="flex items-center gap-3 px-4 pb-3 pt-1 w-full relative z-20">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-6 h-6 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden p-0.5">
                    <img
                      src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                      alt="Farm Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[13px] font-bold tracking-tight dark:text-white text-slate-900 hidden sm:block">
                    Menu
                  </span>
                </div>
                
                <div className="flex-1 overflow-hidden h-7 bg-white dark:bg-slate-800 rounded-full flex items-center shadow-inner border border-slate-200 dark:border-slate-700">
                   <div className="w-full overflow-hidden flex items-center h-full">
                     <motion.div 
                       className="whitespace-nowrap text-[10px] sm:text-[11px] font-bold text-slate-600 dark:text-slate-400 tracking-wider uppercase flex items-center h-full pt-0.5"
                       animate={{ x: [0, -600] }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                       style={{ willChange: "transform" }}
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

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="shrink-0 dark:text-white text-slate-900 p-1.5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"
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

                    const baseCardClass = \`relative w-full overflow-hidden rounded-2xl border transition-colors duration-150 \${isActive ? "border-emerald-500/50 bg-emerald-50 dark:bg-emerald-500/10" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"}\`;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.02, duration: 0.15, ease: "easeOut" }}
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
                              className="w-full flex items-center justify-between p-2.5"
                            >
                              <div className="flex items-center gap-2">
                                <div className={\`w-6 h-6 rounded-full flex items-center justify-center \${isActive ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"}\`}>
                                  {item.icon && <item.icon size={12} />}
                                </div>
                                <span className={\`text-[11px] font-bold \${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-800 dark:text-slate-200"}\`}>
                                  {item.name}
                                </span>
                              </div>
                              <ChevronDown
                                size={12}
                                className={\`transition-transform duration-200 \${isExpanded ? "rotate-180" : ""} \${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}\`}
                              />
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="overflow-hidden bg-slate-50 dark:bg-slate-900/50"
                                >
                                  <div className="px-3 py-1 flex flex-col gap-0.5 border-t border-slate-100 dark:border-slate-700">
                                    {(item as any).subMenu.map((sub: any, subI: number) => (
                                      <Link
                                        key={sub.name}
                                        to={sub.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-1.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400 pl-6 relative"
                                      >
                                        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                                        {sub.name}
                                      </Link>
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
                            className={\`\${baseCardClass} flex flex-col items-start justify-center p-2.5 min-h-[60px]\`}
                          >
                            <div className={\`w-6 h-6 rounded-full flex items-center justify-center mb-1.5 \${isActive ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"}\`}>
                              {item.icon && <item.icon size={12} />}
                            </div>
                            <span className={\`text-[11px] font-bold \${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-800 dark:text-slate-200"}\`}>
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
