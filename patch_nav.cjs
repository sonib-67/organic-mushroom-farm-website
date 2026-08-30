const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const targetMenuStart = `<AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden">`;
const targetMenuEnd = `      </AnimatePresence>`;

// Locate exact indices
const startIdx = content.indexOf(targetMenuStart);
if (startIdx === -1) {
  console.log("Error: mobile menu start not found");
  process.exit(1);
}
const endIdx = content.indexOf(targetMenuEnd, startIdx);
if (endIdx === -1) {
  console.log("Error: mobile menu end not found");
  process.exit(1);
}

const replacementMenu = `<AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/40 dark:bg-black/40 backdrop-blur-xl"
            />

            <motion.div
              initial={{ y: "100%", opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: "100%", opacity: 0, scale: 0.95 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              style={{ willChange: "transform, opacity" }}
              className="relative w-full max-h-[90vh] flex flex-col bg-white/70 dark:bg-[#09090b]/70 backdrop-blur-2xl rounded-t-[2.5rem] border-t border-white/20 dark:border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] pb-safe overflow-hidden z-[9999]"
            >
              {/* Drawer Handle */}
              <div className="w-full flex justify-center pt-4 pb-2">
                <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 pb-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 flex items-center justify-center shadow-sm overflow-hidden p-1.5 shrink-0">
                    <img
                      src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                      alt="Organic Mushrooms Farm"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold tracking-tight dark:text-white text-slate-900">
                    Menu
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="dark:text-white text-slate-900 p-2 bg-slate-200/50 dark:bg-white/10 rounded-full hover:bg-slate-300/50 dark:hover:bg-white/20 transition-all backdrop-blur-md"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Grid Menu Content */}
              <div className="flex-1 overflow-y-auto px-4 pb-12 hide-scrollbar">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
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

                    const baseCardClass = \`relative w-full overflow-hidden rounded-2xl border transition-all duration-300 \${isActive ? "border-primary-start/40 bg-primary-start/10 shadow-[0_0_20px_rgba(34,197,94,0.15)]" : "border-white/20 dark:border-white/5 bg-white/50 dark:bg-white/[0.03] shadow-sm hover:bg-white/80 dark:hover:bg-white/[0.06]"}\`;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3, type: "spring", damping: 20 }}
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
                              className="w-full flex items-center justify-between p-3.5"
                            >
                              <div className="flex items-center gap-3">
                                <div className={\`w-8 h-8 rounded-full flex items-center justify-center transition-all \${isActive ? "bg-primary-start/20 text-primary-start" : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"}\`}>
                                  {item.icon && <item.icon size={16} />}
                                </div>
                                <span className={\`text-[13px] font-bold \${isActive ? "text-primary-start" : "text-slate-800 dark:text-slate-200"}\`}>
                                  {item.name}
                                </span>
                              </div>
                              <ChevronDown
                                size={16}
                                className={\`transition-transform duration-300 \${isExpanded ? "rotate-180" : ""} \${isActive ? "text-primary-start" : "text-slate-400"}\`}
                              />
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden bg-slate-50/50 dark:bg-black/20"
                                >
                                  <div className="px-4 py-2 flex flex-col gap-1 border-t border-white/20 dark:border-white/5">
                                    {(item as any).subMenu.map((sub: any, subI: number) => (
                                      <motion.div
                                        key={sub.name}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: subI * 0.05 }}
                                      >
                                        <Link
                                          to={sub.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="block py-2 text-[12px] font-semibold text-slate-600 dark:text-slate-400 hover:text-primary-start dark:hover:text-primary-start transition-colors pl-8 relative"
                                        >
                                          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
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
                                const element = document.getElementById(hash!);
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
                            className={\`\${baseCardClass} flex flex-col items-start justify-center p-4 min-h-[90px]\`}
                          >
                            <div className={\`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-all \${isActive ? "bg-primary-start/20 text-primary-start" : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"}\`}>
                              {item.icon && <item.icon size={16} />}
                            </div>
                            <span className={\`text-[13px] font-bold \${isActive ? "text-primary-start" : "text-slate-800 dark:text-slate-200"}\`}>
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

const newContent = content.substring(0, startIdx) + replacementMenu + content.substring(endIdx + targetMenuEnd.length);
fs.writeFileSync('src/App.tsx', newContent);
console.log("Nav replaced");
