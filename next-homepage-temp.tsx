const HomePage = () => { 
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <SEO
        title="Organic Mushrooms Farm | Setup, Spawn & Training"
        description="Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP."
        schemas={[
          generateGlobalFAQSchema(),
          generateGlobalProductsSchema(),
          generateGlobalServiceSchema(),
        ]}
      />
      <Hero />
      <EcosystemFlow />
      <WhyChooseUs />
      <FarmingModels />
      <MushroomComparison />
      <ROICalculator />
      <CriticalParameters />
      <ProductionSOP />

      {/* Compost Units Section */}
      <section
        id="compost-units"
        className="section-padding relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <div className="badge mx-auto mb-4">Commercial Infrastructure</div>
            <h2 className="mb-4 uppercase">
              <Link to="/equipment" className="hover:text-current transition-colors">
                Standard Commercial{" "}
                <span className="gradient-text">Compost Units</span>
              </Link>
            </h2>
            <p className="max-w-xl mx-auto text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Complete Phase-I + Phase-II commercial infrastructure with 15-day cycles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-6">
            {[
              {
                name: "2000-Bag Commercial Unit (20T)",
                desc: "14x30 System",
                investment: "₹15-17 Lakh",
                stats: { bags: "2,000", cap: "20t", cycle: "15d" },
              },
              {
                name: "3000-Bag Industrial Unit (30T)",
                desc: "14x40 System",
                investment: "₹19-21 Lakh",
                stats: { bags: "3,000", cap: "30t", cycle: "15d" },
                recommended: true,
              },
            ].map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                
                className={`glass card-padding rounded-3xl border dark:border-white/5 border-black/5 relative ${comp.recommended ? "shadow-2xl shadow-brand-blue/10 border-primary-mid/30" : ""}`}
              >
                {comp.recommended && (
                  <div className="absolute top-4 right-5 badge text-[8px]">
                    Best Value
                  </div>
                )}
                <h3 className="dark:text-white text-slate-900 mb-2">
                  {comp.name}
                </h3>
                <div className="text-slate-500 mb-6 font-medium text-[13px]">
                  {comp.desc}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(comp.stats).map(([k, v]) => (
                    <div
                      key={k}
                      className="p-2 md:p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 text-center"
                    >
                      <div className="text-[8px] text-slate-500 font-bold uppercase mb-1">
                        {k}
                      </div>
                      <div className="text-sm md:text-sm font-bold dark:text-white text-slate-900">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 shadow shadow-brand-blue/10 ring-1 ring-white/10 ring-inset mb-6">
                  <span className="text-[11px] font-semibold dark:text-slate-400 text-slate-600">
                    Est. CapEx
                  </span>
                  <span className="text-sm font-bold dark:text-white text-slate-900">
                    {comp.investment}
                  </span>
                </div>

                <Link
                  to="/compost-unit-specs"
                  className="btn-primary w-full py-2 rounded-xl text-[12px] font-bold min-h-[44px] flex items-center justify-center"
                >
                  Get Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <div className="badge mx-auto mb-4">Farmer Testimonials</div>
            <h2 className="mb-4 uppercase">
              Real Commercial <span className="gradient-text">Voices</span>
            </h2>
            <p>Join 5000+ commercial farmers trained by our expert team.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Rahul S.",
                location: "Bhopal",
                text: "Turnkey setup changed my perspective. Outstanding support even after 2 years.",
                avatar: "RS",
              },
              {
                name: "Deepak M.",
                location: "Indore",
                text: "Professional SOPs. Yield exceeded expectations by 20% due to climate design.",
                avatar: "DM",
              },
              {
                name: "Suresh K.",
                location: "Sagar",
                text: "Honest ROI analysis. No hidden costs, just pure business growth.",
                avatar: "SK",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                className="glass p-3 rounded-3xl border dark:border-white/5 border-black/5 flex flex-col h-full"
              >
                <Quote
                  size={20}
                  className="text-primary-start mb-4 opacity-40"
                />
                <p className="dark:text-slate-300 text-slate-700 text-[13px] italic mb-6 leading-relaxed flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center font-bold dark:text-white text-slate-900 text-[10px] shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="dark:text-white text-slate-900 font-bold text-[12px] tracking-tight">
                      {t.name}
                    </div>
                    <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">
                      {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section Placeholder */}
      <section id="market" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="badge mx-auto mb-4">Global Market Linkage</div>
          <h2 className="mb-4 uppercase tracking-tight">
            Global{" "}
            <span className="gradient-text">Mushroom B2B Marketplace</span>
          </h2>
          <p className="max-w-xl mx-auto mb-5 font-medium">
            Connect directly with verified commercial buyers and sellers
            worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
            {[
              {
                type: "Seller",
                title: "Mushroom Spawn (Seed)",
                desc: "Lab-grade organic F1 hybrid spawn.",
                price: "Bulk Order",
                linkType: "page",
                to: "/spawn-seed",
              },
              {
                type: "Seller",
                title: "Fresh Organic Mushrooms",
                desc: "A-grade commercial button mushrooms.",
                price: "Live Market Rate",
                linkType: "external",
                to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Fresh%20Mushrooms",
              },
              {
                type: "Seller",
                title: "Dry Mushrooms Export",
                desc: "Long shelf life, premium export quality.",
                price: "Wholesale Only",
                linkType: "external",
                to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Dry%20Mushrooms",
              },
            ].map((ad, i) => {
              const CardWrapper = ad.linkType === "page" ? Link : "a";
              return (
                <CardWrapper
                  key={i}
                  to={ad.linkType === "page" ? ad.to : undefined}
                  href={ad.linkType === "external" ? ad.to : undefined}
                  target={ad.linkType === "external" ? "_blank" : undefined}
                  rel={
                    ad.linkType === "external"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass p-3 rounded-2xl border dark:border-white/5 border-black/5 relative group cursor-pointer block"
                >
                  <div
                    className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400`}
                  >
                    {ad.type}
                  </div>
                  <h3 className="dark:text-white text-slate-900 mb-1 mt-4 tracking-tight">
                    {ad.title}
                  </h3>
                  <div className="text-[12px] text-slate-500 mb-6">
                    {ad.desc}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="dark:text-white text-slate-900 font-bold text-sm dark:bg-white/5 bg-black/5 px-3 py-2 rounded-xl">
                      {ad.price}
                    </span>
                    <span className="w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 dark:text-slate-400 text-slate-600 flex items-center justify-center group-hover:bg-primary-start group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources & SOPs Section */}
      <section id="resources" className="section-padding bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-start">
            <div>
              <div className="badge mb-6 mx-auto lg:mx-0">
                Documentation & Resources
              </div>
              <h2 className="mb-6 uppercase text-center lg:text-left">
                <Link to="/cities" className="hover:text-current transition-colors">
                  Commercial Production{" "}
                  <span className="gradient-text">SOPs & Guides</span>
                </Link>
              </h2>
              <p className="mb-6 text-center lg:text-left">
                Standard operating procedures used by commercial mushroom
                specialists nationwide and internationally.
              </p>

              <div className="md:hidden">
                {[
                  {
                    title: "Tunnel Ops",
                    content:
                      "Details for Phase-II Pasteurization Tunnel operations and parameters.",
                    id: "tunnel-ops",
                  },
                  {
                    title: "Spawning",
                    content:
                      "Comprehensive checklist for spawning and incubation stages.",
                    id: "spawning",
                  },
                  {
                    title: "Casing",
                    content:
                      "Material preparation guide for optimal casing layer.",
                    id: "casing",
                  },
                  {
                    title: "Hygiene",
                    content:
                      "Disease control protocols and farm hygiene standards.",
                    id: "hygiene",
                  },
                ].map((sop, i) => (
                  <Collapsible key={i} title={sop.title}>
                    {sop.content}
                    <Link
                      to={`/sops#${sop.id}`}
                      className="flex items-center gap-2 text-primary-start font-bold mt-3"
                    >
                      Get Details <ArrowRight size={14} />
                    </Link>
                  </Collapsible>
                ))}
              </div>

              <div className="hidden md:block space-y-4">
                {[
                  {
                    name: "Phase-II Commercial Pasteurization Tunnel Ops",
                    id: "tunnel-ops",
                  },
                  { name: "Spawning & Incubation Checklist", id: "spawning" },
                  { name: "Casing Material Preparation Guide", id: "casing" },
                  {
                    name: "Disease Control & Commercial Farm Hygiene Protocols",
                    id: "hygiene",
                  },
                ].map((sop) => (
                  <Link
                    to={`/sops#${sop.id}`}
                    key={sop.name}
                    className="flex items-center gap-4 p-3 glass rounded-2xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen size={18} className="text-primary-start" />
                    </div>
                    <span className="text-sm font-bold dark:text-slate-300 text-slate-700">
                      {sop.name}
                    </span>
                    <ArrowRight
                      className="ml-auto text-slate-700 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 blur-[80px] rounded-full"></div>
              <div className="relative glass p-3 md:p-10 rounded-[2.5rem] border dark:border-white/10 border-black/10">
                <div className="flex items-center gap-4 mb-5 justify-center lg:justify-start">
                  <BookOpen className="text-primary-start" size={24} />
                  <h3 className="dark:text-white text-slate-900 tracking-tight">
                    Commercial Knowledge Hub
                  </h3>
                </div>
                <div className="space-y-6">
                  <Link
                    to="/articles/mushroom-farming-beginner-guide-india-2026-2027"
                    className="p-3 md:p-3 rounded-3xl bg-primary-start/10 border border-primary-start/20 block group hover:scale-[1.02] transition-transform"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-primary-start font-black uppercase tracking-widest">
                        Ultimate Guide 2026-2027
                      </span>
                      <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-500 text-[8px] font-black uppercase">
                        Article
                      </div>
                    </div>
                    <h4 className="dark:text-white text-slate-900 font-bold text-sm mb-2">
                        Mushroom Farming Beginner Guide India 2026-2027
                      </h4>
                    <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">
                      Complete guide on how to start mushroom farming (mushroom
                      ki kheti) from scratch for beginners.
                    </p>
                  </Link>

                  <div className="p-3 md:p-3 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">
                        Featured
                      </span>
                      <div className="px-2 py-0.5 rounded bg-red-500/20 text-red-500 text-[8px] font-black uppercase">
                        Video
                      </div>
                    </div>
                    <a
                      href="https://youtube.com/shorts/wxLiU3nNZmM?si=6VmH86DPYKoQ72P6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-video rounded-2xl overflow-hidden mb-4 group cursor-pointer inline-block w-full"
                    >
                      <img
                        loading="lazy"
                        src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg"
                        alt="Mushroom Farming Training Video - Commercial Cultivation SOPs India"
                        className="w-full h-full object-cover opacity-60"
                       width="1080" height="1080" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-2xl">
                          <Play size={20} fill="currentColor" />
                        </div>
                      </div>
                    </a>
                    <h4 className="dark:text-white text-slate-900 font-bold text-[13px] tracking-tight">
                      Commercial Composting Flow Explained
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MushroomSEOSections />
      <ComparisonTable />
      <StatesSection />
      <CTASection />
    </>
  );
};
