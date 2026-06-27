import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, MapPin, Globe, CheckCircle2, Info, Phone, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleMadhyaPradeshGuide = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20">
            <SEO 
                title="How to Start Mushroom Farming in India: Complete Guide 2024" 
                description="Complete guide to beginning your mushroom cultivation business in 2024. A comprehensive guide for profitable mushroom farming in Madhya Pradesh & across India."
                keywords="Mushroom farming India, how to start mushroom farming, oyster mushroom farming, button mushroom farming, mushroom cultivation training, mushroom farming profit, mushroom farming investment, commercial mushroom farming, mushroom farming Madhya Pradesh, mushroom spawn, mushroom farming business"
            />

            {/* Article Header */}
            <section className="section-padding text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="badge mx-auto mb-6">Comprehensive Guide 2024</div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight leading-tight">
                        How to Start Mushroom Farming in India: <span className="gradient-text">Complete Guide to Beginning Your Mushroom Cultivation Business in 2024</span>
                    </h1>
                    <p className="dark:text-slate-400 text-slate-600 text-lg md:text-xl leading-relaxed">
                        A Comprehensive Guide for Profitable Mushroom Farming in Madhya Pradesh & Across India
                    </p>
                    <div className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Published: June 27, 2024 | Reading Time: ~25 minutes
                    </div>
                </motion.div>
            </section>

            {/* Article Content */}
            <article className="max-w-5xl mx-auto px-4 prose prose-invert">
                <div className="glass p-8 md:p-12 rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-12">
                    
                    <section>
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                            <Info className="text-primary-start" /> Introduction: Why Mushroom Farming is Your Best Business Opportunity
                        </h2>
                        <p className="dark:text-slate-400 text-slate-600 text-lg leading-relaxed">
                            When I first thought about starting a mushroom farming business in India, I had so many questions. How much investment does mushroom farming need? What's the actual profit potential? Can I really do this in Madhya Pradesh? After months of research and connecting with experienced mushroom farmers, I've learned that mushroom farming in India is one of the most profitable agricultural businesses you can start with minimal land and investment. If you're looking to start mushroom farming in India, whether you're in Madhya Pradesh, Delhi, or any other state, this complete guide will walk you through everything you need to know about mushroom cultivation, from choosing the right mushroom variety to scaling your mushroom farming business.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900">
                            Why Mushroom Farming in India is the Best Agricultural Business to Start in 2024
                        </h2>
                        <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
                            Let me be straight with you: mushroom farming business is absolutely booming in India right now. Here's why I think more farmers are shifting toward mushroom cultivation:
                        </p>
                        
                        <div className="space-y-6 mt-8">
                            <div className="dark:bg-white/5 bg-black/5 p-6 rounded-3xl border dark:border-white/10 border-black/10">
                                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Mushroom farming profit margins are incredible.</h3>
                                <p className="dark:text-slate-400 text-slate-600">
                                    Unlike traditional farming where you invest heavily in land, water, and lengthy crop cycles, mushroom farming gives you returns in just 30-45 days. I've seen farmers earning ₹3-5 lakhs per month from a small 100 sq ft mushroom farm setup.
                                </p>
                            </div>
                            
                            <div className="dark:bg-white/5 bg-black/5 p-6 rounded-3xl border dark:border-white/10 border-black/10">
                                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Land requirement for mushroom farming is minimal.</h3>
                                <p className="dark:text-slate-400 text-slate-600">
                                    You don't need acres of farmland. In fact, you can start mushroom cultivation in a small basement, shed, or even a rented space. This is what makes mushroom farming perfect for urban farmers and those with limited land.
                                </p>
                            </div>

                            <div className="dark:bg-white/5 bg-black/5 p-6 rounded-3xl border dark:border-white/10 border-black/10">
                                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Year-round mushroom production means consistent income.</h3>
                                <p className="dark:text-slate-400 text-slate-600">
                                    Unlike seasonal crops, mushroom farming can be done throughout the year with proper climate control. This means you have a steady income stream every month.
                                </p>
                            </div>

                            <div className="dark:bg-white/5 bg-black/5 p-6 rounded-3xl border dark:border-white/10 border-black/10">
                                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Market demand for mushrooms in India is constantly increasing.</h3>
                                <p className="dark:text-slate-400 text-slate-600">
                                    From restaurants and hotels to grocery stores and health-conscious consumers, everyone wants fresh mushrooms. Button mushrooms, oyster mushrooms, shiitake mushrooms, and milky mushrooms are all in high demand.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tighter">Types of Mushrooms You Can Farm: Choosing Your Mushroom Variety</h2>
                        <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
                            One of the biggest decisions in mushroom farming is choosing which mushroom variety to grow. Each mushroom cultivation type has different requirements and profit potential.
                        </p>
                        
                        <div className="grid md:grid-cols-1 gap-8">
                            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 space-y-4">
                                <div className="flex items-center gap-3 dark:text-white text-slate-900 font-bold text-xl">
                                    <CheckCircle2 className="text-primary-start" /> Button Mushrooms (Champignon Mushroom Farming)
                                </div>
                                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                                    Button mushroom cultivation is the most common type of mushroom farming in India. They're called "button mushrooms" because of their appearance, and they're what you typically find in grocery stores. 
                                </p>
                                <p className="dark:text-slate-400 text-slate-600 text-sm font-medium">Why button mushroom farming is popular:</p>
                                <ul className="text-sm space-y-2 text-slate-500 italic">
                                    <li>• Highest market demand</li>
                                    <li>• Good shelf life</li>
                                    <li>• Easier to transport and sell</li>
                                    <li>• Better profit margins in bulk sales</li>
                                    <li>• Perfect for commercial mushroom farming</li>
                                </ul>
                                <p className="dark:text-slate-400 text-slate-600 text-sm">
                                    Button mushroom farming requires more controlled temperature (around 12-18°C), which means you'll need investment in climate control systems. However, the return on investment is excellent.
                                </p>
                            </div>

                            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 space-y-4">
                                <div className="flex items-center gap-3 dark:text-white text-slate-900 font-bold text-xl">
                                    <CheckCircle2 className="text-primary-start" /> Oyster Mushroom Farming (Grey, Pink, Yellow)
                                </div>
                                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                                    If you're new to mushroom farming in India, oyster mushroom cultivation might be your best starting point. Why? Because oyster mushroom farming is more forgiving and requires less investment in climate control.
                                </p>
                                <p className="dark:text-slate-400 text-slate-600 text-sm font-medium">Advantages of oyster mushroom farming:</p>
                                <ul className="text-sm space-y-2 text-slate-500 italic">
                                    <li>• Easier to grow for beginners</li>
                                    <li>• Lower initial investment</li>
                                    <li>• Faster growth cycle (25-30 days)</li>
                                    <li>• Can grow at higher temperatures (18-25°C)</li>
                                    <li>• Less contamination risk</li>
                                    <li>• Perfect for mushroom farming in Madhya Pradesh climate</li>
                                </ul>
                                <p className="dark:text-slate-400 text-slate-600 text-sm">
                                    I've seen many successful mushroom farmers in Madhya Pradesh start with oyster mushroom farming because it suits the regional climate perfectly.
                                </p>
                            </div>

                            <div className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 space-y-4">
                                <div className="flex items-center gap-3 dark:text-white text-slate-900 font-bold text-xl">
                                    <CheckCircle2 className="text-primary-start" /> Shiitake Mushroom Farming
                                </div>
                                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                                    Shiitake mushroom cultivation is growing rapidly in India because of premium pricing. Shiitake mushrooms command 2-3 times higher prices than button mushrooms in the market. 
                                </p>
                                <p className="dark:text-slate-400 text-slate-600 text-sm font-medium">Shiitake mushroom farming requires:</p>
                                <ul className="text-sm space-y-2 text-slate-500 italic">
                                    <li>• Higher investment in humidity control</li>
                                    <li>• Longer growth cycle (40-60 days)</li>
                                    <li>• More technical knowledge</li>
                                    <li>• Better climate control infrastructure</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-6 uppercase tracking-tighter">Cost and Investment Required for Starting Mushroom Farming in India</h2>
                        <p className="dark:text-slate-400 text-slate-600 font-medium">Let me break down the actual investment required for mushroom farming in India. This varies based on the scale and mushroom variety you choose.</p>
                        
                        <div className="space-y-6 mt-8">
                            <div className="glass p-6 rounded-3xl border dark:border-white/5 border-black/5">
                                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4">Small-Scale Mushroom Farming (Beginner Level)</h3>
                                <p className="dark:text-slate-400 text-slate-600 text-sm mb-3">For a 100-200 sq ft space:</p>
                                <ul className="text-sm space-y-2 text-slate-500 mb-4 list-disc pl-5">
                                    <li>Mushroom growing structure setup: ₹15,000-25,000</li>
                                    <li>Climate control equipment (fans, coolers, humidifiers): ₹20,000-35,000</li>
                                    <li>Sterilization equipment: ₹10,000-15,000</li>
                                    <li>Initial mushroom spawn (seed) cost: ₹5,000-10,000</li>
                                    <li>Raw materials and supplies: ₹10,000-15,000</li>
                                </ul>
                                <p className="text-green-500 font-bold">Total Initial Investment: ₹60,000-1,00,000</p>
                            </div>

                            <div className="glass p-6 rounded-3xl border dark:border-white/5 border-black/5">
                                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4">Medium-Scale Mushroom Farming (Semi-Commercial)</h3>
                                <p className="dark:text-slate-400 text-slate-600 text-sm mb-3">For a 500-1000 sq ft space:</p>
                                <ul className="text-sm space-y-2 text-slate-500 mb-4 list-disc pl-5">
                                    <li>Mushroom farm shed construction: ₹1,50,000-2,50,000</li>
                                    <li>Advanced climate control system: ₹80,000-1,50,000</li>
                                    <li>Industrial sterilization equipment: ₹40,000-60,000</li>
                                    <li>Shelving and growing infrastructure: ₹50,000-80,000</li>
                                    <li>Initial spawn and materials: ₹30,000-50,000</li>
                                </ul>
                                <p className="text-green-500 font-bold">Total Investment: ₹3,50,000-6,00,000</p>
                            </div>

                            <div className="glass p-6 rounded-3xl border dark:border-white/5 border-black/5">
                                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4">Commercial-Scale Mushroom Farming</h3>
                                <p className="dark:text-slate-400 text-slate-600 text-sm mb-3">For a 2000+ sq ft space:</p>
                                <ul className="text-sm space-y-2 text-slate-500 mb-4 list-disc pl-5">
                                    <li>Professional farm construction with HEPA filtration: ₹5,00,000-10,00,000+</li>
                                    <li>Industrial climate control systems: ₹2,50,000-5,00,000+</li>
                                    <li>Advanced sterilization setup: ₹1,50,000-3,00,000</li>
                                    <li>Automated systems and infrastructure: ₹2,00,000-4,00,000</li>
                                </ul>
                                <p className="text-green-500 font-bold">Total Investment: ₹10,00,000+</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tighter">Step-by-Step Guide: How to Start Mushroom Farming in India</h2>
                        
                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-primary-start/20 flex items-center justify-center shrink-0 text-primary-start font-black">1</div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold dark:text-white text-slate-900">Learn Mushroom Farming Through Proper Training</h3>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                                        This is the most important step that many beginners skip. Mushroom farming requires specific knowledge about sterilization, contamination control, and climate management.
                                    </p>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm font-medium">Where to get mushroom farming training:</p>
                                    <ul className="text-xs space-y-2 text-slate-500 list-disc pl-5">
                                        <li>Enroll in mushroom cultivation training courses</li>
                                        <li>Join mushroom farming workshops in your region</li>
                                        <li>Get hands-on training at established mushroom farms</li>
                                        <li>Online mushroom farming courses for theoretical knowledge</li>
                                    </ul>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                                        Proper training will teach you about mushroom spawn preparation, substrate sterilization, humidity and temperature control, contamination prevention, and harvest management. This knowledge directly impacts your success rate.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-primary-start/20 flex items-center justify-center shrink-0 text-primary-start font-black">2</div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold dark:text-white text-slate-900">Select Your Location and Space</h3>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                                        For mushroom farming in India, location matters less than you'd think because you're working indoors. However, consider:
                                    </p>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm font-medium">Best locations for mushroom farming:</p>
                                    <ul className="text-xs space-y-2 text-slate-500 list-disc pl-5">
                                        <li>Basements (temperature-controlled naturally)</li>
                                        <li>Sheds or unused buildings</li>
                                        <li>Rented commercial spaces</li>
                                        <li>Tunnels or covered structures</li>
                                        <li>Even apartments with proper setup</li>
                                    </ul>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                                        The ideal location should have consistent temperature, electricity connection for climate control, water supply for humidity and cleaning, be away from direct sunlight, and have good ventilation system.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-primary-start/20 flex items-center justify-center shrink-0 text-primary-start font-black">3</div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold dark:text-white text-slate-900">Get Quality Mushroom Spawn (Seed)</h3>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                                        Mushroom spawn is literally the foundation of your mushroom farming business. Using contaminated or poor-quality spawn will ruin your entire crop.
                                    </p>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm font-medium">What to look for in mushroom spawn:</p>
                                    <ul className="text-xs space-y-2 text-slate-500 list-disc pl-5">
                                        <li>Certified, mother-strain spawn</li>
                                        <li>Zero contamination guarantee</li>
                                        <li>Proper packaging for transport</li>
                                        <li>Cold-chain maintained during shipping</li>
                                        <li>Source from established mushroom seed suppliers</li>
                                    </ul>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                                        In India, you can get high-quality mushroom spawn from specialized suppliers who maintain laboratory standards for mushroom cultivation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-6 uppercase tracking-tighter">Mushroom Farming Profit Calculation: Real Numbers</h2>
                        <p className="dark:text-slate-400 text-slate-600 font-medium">Let me show you actual numbers from mushroom farming in India. Using a small 100 sq ft oyster mushroom farm as example:</p>
                        
                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-3xl border dark:border-white/10 border-black/10 mt-6">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4">Per cycle (35 days):</h3>
                            <ul className="text-sm space-y-2 text-slate-500 mb-4 list-disc pl-5">
                                <li>Raw materials and substrate: ₹2,000-3,000</li>
                                <li>Spawn cost: ₹1,000-1,500</li>
                                <li>Electricity and utilities: ₹500-800</li>
                            </ul>
                            <p className="text-slate-400 mb-4"><strong>Total operating cost per cycle:</strong> ₹3,500-5,300</p>
                            
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4">Yield per cycle:</h3>
                            <ul className="text-sm space-y-2 text-slate-500 mb-4 list-disc pl-5">
                                <li>100 sq ft can produce 80-120 kg oyster mushrooms</li>
                                <li>Average market price: ₹80-120 per kg</li>
                            </ul>
                            <p className="text-slate-400 mb-2"><strong>Gross revenue:</strong> ₹6,400-14,400 per cycle</p>
                            <p className="text-green-400 font-bold mb-2"><strong>Net profit per cycle:</strong> ₹1,000-11,100</p>
                            <p className="text-primary-start font-bold mb-4"><strong>Annual profit (10 cycles per year):</strong> ₹10,000-1,11,000</p>
                            
                            <p className="dark:text-slate-400 text-slate-600 text-sm">
                                With better management and scaling, many farmers report monthly incomes of ₹40,000-1,50,000 from medium-scale mushroom farming operations.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-8 dark:bg-white/5 bg-black/5 p-8 md:p-12 rounded-[3.5rem] border dark:border-white/10 border-black/10">
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 text-center">Frequently Asked Questions About Mushroom Farming</h2>
                        <div className="space-y-6">
                            {[
                                { q: "How long does it take to start mushroom farming?", a: "You can start small-scale mushroom farming in 2-4 weeks from decision to first harvest. But building a proper, professional setup takes 2-3 months." },
                                { q: "What's the best mushroom to grow for beginners?", a: "Oyster mushroom farming is best for beginners because it's forgiving, requires less investment, and has good market demand." },
                                { q: "Can I do mushroom farming as a side business?", a: "Absolutely! Many people start with 50-100 sq ft and earn ₹10,000-20,000 monthly as a side income." },
                                { q: "Is mushroom farming profitable?", a: "Yes, very profitable. ROI can be 50-100% per cycle with proper management, and cycles repeat every month." },
                                { q: "Do I need land to start mushroom farming?", a: "No, you just need covered space. A basement, shed, or rented room works perfectly." },
                                { q: "How much can I earn from mushroom farming?", a: "Small-scale operations: ₹20,000-50,000/month. Medium-scale: ₹1-3 lakhs/month. Large commercial: ₹5+ lakhs/month." },
                                { q: "What's the shelf life of farmed mushrooms?", a: "5-7 days refrigerated for most varieties, longer if properly packaged and cooled." }
                            ].map((faq, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="dark:text-white text-slate-900 font-bold flex gap-2"><span className="text-primary-start">Q:</span> {faq.q}</h4>
                                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed pl-6"><strong>A:</strong> {faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900">Conclusion: Your Mushroom Farming Journey Starts Now</h2>
                        <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
                            Starting mushroom farming in India is genuinely one of the best decisions you can make if you want to build a profitable agricultural business with minimal land and investment. Whether you're in Madhya Pradesh, Delhi, Mumbai, or any other part of India, mushroom farming offers consistent, profitable returns.
                        </p>
                        <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
                            The key is to start small, learn properly, and scale gradually. Don't try to become a commercial operation overnight. Build your experience and confidence with a small 100-200 sq ft setup, perfect your process, establish your market, and then expand. The mushroom farming industry in India is growing exponentially, and there's definitely room for new farmers. With proper training, the right equipment, quality spawn, and good market connections, you can build a thriving mushroom farming business.
                        </p>
                        <p className="dark:text-slate-400 text-slate-600 leading-relaxed font-bold">
                            Ready to start mushroom farming? Your first step should be getting proper training and creating a detailed plan specific to your situation. Connect with experienced mushroom farmers, learn the techniques, understand the market, and then take the leap. The opportunity is right here, right now. Mushroom farming in India is waiting for you.
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center bg-linear-to-tr from-primary-start to-primary-end p-12 rounded-[4rem] dark:text-white text-slate-900 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6">Start Your Mushroom Journey Today</h2>
                            <p className="dark:text-white text-slate-900/80 mb-10 text-lg max-w-2xl mx-auto">
                                Get access to the best mushroom spawn, professional training, and setup support with <strong>Organic Mushroom Farm</strong>.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a href="tel:+919203544140" className="btn-primary px-10 py-5 rounded-2xl font-black text-sm flex items-center gap-2 hover:scale-105 transition-all">
                                    <Phone size={18} /> Call Now: 9203544140
                                </a>
                                <Link to="/contact" className="btn-outline px-10 py-5 rounded-2xl font-black text-sm flex items-center gap-2 hover:scale-105 transition-all">
                                    Contact Us <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            {/* Tags / Footer Meta */}
            <section className="max-w-5xl mx-auto px-4 mt-12">
                <div className="flex flex-wrap gap-2 justify-center">
                    {["Mushroom farming India", "how to start mushroom farming", "oyster mushroom farming", "button mushroom farming", "mushroom cultivation training", "mushroom farming profit", "mushroom farming investment", "commercial mushroom farming", "mushroom farming Madhya Pradesh", "mushroom spawn", "mushroom farming business"].map(tag => (
                        <span key={tag} className="text-[9px] px-3 py-1 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 text-slate-600 uppercase font-black tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ArticleMadhyaPradeshGuide;
