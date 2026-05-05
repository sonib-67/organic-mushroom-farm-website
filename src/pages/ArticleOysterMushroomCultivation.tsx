import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, MapPin, CheckCircle2, TrendingUp, Phone, ArrowRight, Sprout, Building2, ShoppingCart } from 'lucide-react';
import SEO from '../components/SEO';

const ArticleOysterMushroomCultivation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20">
            <SEO 
                title="Oyster Mushroom Cultivation in India | Complete Guide" 
                description="Oyster Mushroom Cultivation (Dhingri Mushroom ki Kheti) India's fastest growing agribusiness. Guide for training, spawn, and bulk supply."
                keywords="oyster mushroom cultivation in India, mushroom spawn near me, mushroom farming training Jabalpur, mushroom seed price India, mushroom bulk supplier"
            />

            {/* Article Header */}
            <section className="section-padding text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="badge mx-auto mb-6 bg-primary-start/10 text-primary-start">Complete Guide</div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                        Oyster Mushroom Cultivation <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-start to-accent">Complete Guide for India</span>
                    </h1>
                    <p className="dark:text-slate-400 text-slate-600 text-lg md:text-xl leading-relaxed mb-6">
                        Mushroom Farming Training | Mushroom Spawn/Seed Supply | Bulk & Retail Mushroom | Pan India Delivery
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest mb-10">
                         By Organic Mushroom Farm, Jabalpur, Madhya Pradesh | organicmushroomfarm.shop | Call: 9203544140
                    </div>
                </motion.div>
            </section>

            {/* Article Content */}
            <article className="max-w-5xl mx-auto px-4 prose prose-invert">
                <div className="glass p-8 md:p-12 rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-12">
                    
                    <section>
                         <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-3">
                            <TrendingUp className="text-primary-start" /> India Ka Sabse Profitable Mushroom Business
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed">
                            Oyster Mushroom Cultivation (Dhingri Mushroom ki Kheti) aaj India ka sabse fast-growing agribusiness ban chuka hai. Chahe aap Madhya Pradesh ke Jabalpur mein ho, Maharashtra ke Pune mein, Uttar Pradesh ke Lucknow mein, ya Kerala ke Kochi mein – har jagah oyster mushroom ki demand tez ho rahi hai. Yeh article especially un logo ke liye likha gaya hai jo mushroom farming training lena chahte hain, mushroom spawn/seed kharidna chahte hain, ya fresh aur dry mushroom bulk ya retail mein supply karwana chahte hain.
                        </p>
                        <p className="text-sm dark:text-slate-400 text-slate-500 italic mt-4">
                             Agar aap Google par search karte hain: oyster mushroom cultivation in India, mushroom spawn near me, mushroom farming training Jabalpur, mushroom seed price India, mushroom bulk supplier – toh yeh guide bilkul aapke liye hai.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900 flex items-center gap-3">
                            <Sprout className="text-primary-start" /> Oyster Mushroom Kya Hota Hai? – Introduction & Market Demand
                        </h2>
                        <p className="dark:text-slate-400 text-slate-600 leading-relaxed max-w-4xl">
                            Oyster mushroom (scientific name: <em>Pleurotus ostreatus</em>) ek edible fungus hai jise <strong>Dhingri Mushroom</strong> bhi kaha jata hai. Yeh India ke har region mein ugaya ja sakta hai – North India (Delhi, Lucknow, Kanpur, Varanasi, Patna), South India (Bangalore, Chennai, Hyderabad, Coimbatore), East India (Kolkata, Bhubaneswar, Guwahati), West India (Mumbai, Pune, Ahmedabad, Surat), aur Central India (Jabalpur, Bhopal, Indore, Nagpur) – sabhi jagah yeh successfully grow hota hai.
                        </p>
                         <p className="dark:text-slate-400 text-slate-600 leading-relaxed max-w-4xl">
                            Indian mushroom market 2025 mein 2000 crore rupees se zyada ho gayi hai aur 2030 tak yeh billion-dollar industry ban sakti hai. Oyster mushroom ki demand restaurants, hotels, supermarkets, export markets (Gulf, Europe, USA) sab jagah barhti ja rahi hai.
                        </p>
                    </section>

                    <section className="dark:bg-white/5 bg-black/5 p-8 rounded-3xl border dark:border-white/10 border-black/10">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-6">Oyster Mushroom Cultivation Kyu Karein? – Top Reasons</h2>
                        <p className="dark:text-slate-300 text-slate-700 mb-6 font-semibold">India ke Har State Mein Kyu Popular Hai Dhingri Mushroom Farming</p>
                        <p className="text-sm dark:text-slate-400 text-slate-600 mb-6">Oyster mushroom cultivation India ke har state – Madhya Pradesh, Uttar Pradesh, Rajasthan, Gujarat, Maharashtra, Karnataka, Tamil Nadu, West Bengal, Odisha, Bihar, Jharkhand, Haryana, Punjab, Himachal Pradesh, Uttarakhand, Chhattisgarh, Telangana, Andhra Pradesh, Kerala, Assam aur baki sabhi states mein kiya ja raha hai.</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                             {[
                                "Kam jagah chahiye – 6x8 ft ka room bhi kafi hai",
                                "Low investment – Rs. 5,000 se shuru ho sakta hai",
                                "Fast return – 25-30 din mein pehli harvest",
                                "High profit – 150% se zyada margin possible hai",
                                "Koi pesticide/fertilizer nahi chahiye – 100% organic",
                                "Government subsidy milti hai – NHB, MIDH, State Horticulture schemes",
                                "Women, students, senior citizens sab kar sakte hain",
                                "Fresh + Dry mushroom dono form mein sell kar sakte ho"
                             ].map((reason, i) => (
                                 <div key={i} className="flex gap-2 text-sm dark:text-slate-300 text-slate-700 items-start">
                                     <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                                     <span>{reason}</span>
                                 </div>
                             ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900">Oyster Mushroom Profit Table – Cost vs Income Analysis</h2>
                        <div className="overflow-x-auto w-full">
                            <table className="w-full text-left border-collapse min-w-[600px] text-sm">
                                <thead className="bg-primary-start/10 border-b border-primary-start/20">
                                    <tr>
                                        <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Scale</th>
                                        <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Investment (Rs.)</th>
                                        <th className="py-4 px-6 dark:text-white text-slate-900 font-bold whitespace-nowrap">Monthly Profit (Rs.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-white/5 border-black/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Small (Home – 50 bags)</td>
                                        <td className="py-4 px-6 dark:text-slate-400 text-slate-600">3,000 – 5,000</td>
                                        <td className="py-4 px-6 dark:text-slate-400 text-slate-600 font-semibold text-accent">4,000 – 8,000</td>
                                    </tr>
                                    <tr className="border-b dark:border-white/5 border-black/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Medium (100-200 bags)</td>
                                        <td className="py-4 px-6 dark:text-slate-400 text-slate-600">8,000 – 15,000</td>
                                        <td className="py-4 px-6 dark:text-slate-400 text-slate-600 font-semibold text-accent">12,000 – 25,000</td>
                                    </tr>
                                    <tr className="border-b dark:border-white/5 border-black/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Commercial (500+ bags)</td>
                                        <td className="py-4 px-6 dark:text-slate-400 text-slate-600">30,000 – 60,000</td>
                                        <td className="py-4 px-6 dark:text-slate-400 text-slate-600 font-semibold text-accent">40,000 – 80,000</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 dark:text-slate-300 text-slate-700">Large Farm (1000+ bags)</td>
                                        <td className="py-4 px-6 dark:text-slate-400 text-slate-600">1,00,000+</td>
                                        <td className="py-4 px-6 dark:text-slate-400 text-slate-600 font-semibold text-accent">1,20,000 – 2,00,000+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900 border-b border-primary-start/20 pb-4">Oyster Mushroom Ke Liye Kya Chahiye? – Materials & Setup</h2>
                        
                        <div className="space-y-6">
                             <div className="pl-4 border-l-2 border-accent">
                                 <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Mushroom Spawn (Seed) – Sabse Zaroori Cheez</h3>
                                 <p className="dark:text-slate-400 text-slate-600 text-sm mb-3">Mushroom spawn ko mushroom ka seed kaha jata hai. Yeh mushroom cultivation ka base hai. Acha spawn = achhi yield. Kharab spawn = waste of time and money. Organic Mushroom Farm, Jabalpur se aap high-quality oyster mushroom spawn/seed Pan India delivery ke saath khareed sakte hain.</p>
                                 <ul className="list-disc pl-5 text-sm dark:text-slate-300 text-slate-700 space-y-1">
                                     <li><strong>Spawn Type:</strong> Grain-based (wheat straw), sawdust, liquid spawn</li>
                                     <li><strong>Purity:</strong> Contamination-free, lab-tested mycelium</li>
                                     <li><strong>Varieties:</strong> White Oyster, Pink Oyster, Grey Oyster, Yellow Oyster</li>
                                     <li><strong>Shelf life:</strong> 15-30 din refrigeration mein</li>
                                 </ul>
                             </div>

                             <div className="pl-4 border-l-2 border-primary-start">
                                 <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Substrate (Growing Medium)</h3>
                                 <ul className="list-disc pl-5 text-sm dark:text-slate-300 text-slate-700 space-y-1">
                                     <li><strong>Paddy straw (dhan ki padi):</strong> sabse common, UP, Bihar, Punjab mein easily available</li>
                                     <li><strong>Wheat straw:</strong> Madhya Pradesh, Rajasthan, Haryana mein popular</li>
                                     <li><strong>Sugarcane bagasse:</strong> Maharashtra, Gujarat, Karnataka mein use hota hai</li>
                                     <li><strong>Sawdust:</strong> timber-rich states mein (Assam, Odisha, Chhattisgarh)</li>
                                     <li><strong>Cotton waste:</strong> Gujarat, Maharashtra mein available</li>
                                 </ul>
                             </div>

                             <div className="pl-4 border-l-2 border-teal-500">
                                 <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Equipment & Setup</h3>
                                 <ul className="list-disc pl-5 text-sm dark:text-slate-300 text-slate-700 space-y-1">
                                     <li>Polypropylene (PP) bags – mushroom grow bags</li>
                                     <li>Pressure cooker ya drum sterilizer</li>
                                     <li>Humidity controller / water sprayer</li>
                                     <li>Thermometer & hygrometer</li>
                                     <li>Ventilated room ya poly house</li>
                                 </ul>
                             </div>
                        </div>
                    </section>

                    <section className="glass rounded-[2rem] p-8 space-y-8">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900">Oyster Mushroom Cultivation – Step by Step Process</h2>
                        
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                             {[
                                 { title: "Step 1 – Substrate Preparation", desc: "Sabse pehle paddy straw ya wheat straw ko 2-3 inch ke tukdo mein kaat lo. Phir ise 12-16 ghante paani mein soak karo. Baad mein hot water treatment (75-80°C par 1-2 ghante) ya chemical treatment (2% lime + calcium carbonate solution 8-12 ghante) karke sterilize karo. Yeh process Jabalpur, Bhopal, Indore, Lucknow, Patna, Hyderabad – kahi bhi same hai." },
                                 { title: "Step 2 – Spawning (Beej Bharna)", desc: "Jab substrate thanda ho jaye (room temperature 25-28°C), tab mushroom spawn mix karo. Spawn rate: 2-3% of wet substrate weight. Clean environment mein kaam karo – gloves, mask use karo. Polypropylene bags mein layer-by-layer substrate aur spawn bharo. Bags ke upar aur neche holes karo ya net lagao." },
                                 { title: "Step 3 – Incubation", desc: "Bags ko dark, clean room mein rakh do. Temperature: 25-28°C. Humidity: 70-80%. Time: 15-20 din. Is phase mein white mycelium puri bag mein phail jayega. Koi pani nahi chahiye is phase mein. Yeh step Jabalpur, Nagpur, Hyderabad, Chennai – sabhi warm cities mein easy hai." },
                                 { title: "Step 4 – Fruiting", desc: "Jab bag puri tarah white ho jaye, bags ko fruiting room mein shift karo ya holes zyada karo. Fresh air circulation dena shuru karo. Humidity: 80-90%. Temperature: 20-28°C. Pani spray karo 2-3 baar daily. 5-7 din mein pinning shuru hogi aur 10-14 din mein harvest ready ho jayega." },
                                 { title: "Step 5 – Harvesting (Katai)", desc: "Jab mushroom caps puri tarah khul jayein lekin still tight hon – harvest ka time hai. Twist karke ya scissors se cut karo. Ek bag se 3 flushes milti hain – 7-14 din ke antar par. Total yield per kg dry substrate: 700-1200 gram mushroom." }
                             ].map((step, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 dark:border-[#1a1535] border-white dark:bg-white/5 bg-black/5 dark:text-white text-slate-800 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        {idx + 1}
                                    </div>
                                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-3xl border dark:border-white/5 border-black/5 bg-white/5 text-sm">
                                        <h4 className="font-bold dark:text-white text-slate-900 mb-2">{step.title}</h4>
                                        <p className="dark:text-slate-400 text-slate-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                             ))}
                        </div>
                    </section>

                    <section className="space-y-8">
                         <h2 className="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-3">
                            <MapPin className="text-primary-start" /> Oyster Mushroom Cultivation India Ke Har City Mein
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                                <h3 className="font-bold text-primary-start mb-2">Central India – MP & CG</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">Jabalpur, Bhopal, Indore, Raipur, Bilaspur. Oct to Mar ideal. Spawn supply from Organic Mushroom Farm Jabalpur poore region mein available hai.</p>
                            </div>
                             <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                                <h3 className="font-bold text-primary-start mb-2">North India – UP, Bihar, Del, Raj</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">Lucknow, Patna, Jaipur, Delhi NCR, Chandigarh. Courier delivery in 3-5 days. Great demand all season around safe setups.</p>
                            </div>
                             <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                                <h3 className="font-bold text-primary-start mb-2">South & West India</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">Bangalore, Chennai, Hyderabad, Mumbai, Pune, Ahmedabad. Ideal humidity, urban consumers driving huge demand.</p>
                            </div>
                             <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                                <h3 className="font-bold text-primary-start mb-2">East India & Export</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">Kolkata, Bhubaneswar, Guwahati. Traditional consumption is high here. Export to Dubai, UK, USA also rising fast.</p>
                            </div>
                        </div>
                    </section>

                     <section className="p-8 rounded-[3rem] bg-linear-to-br from-primary-start/20 to-accent/20 border border-primary-start/20">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-3"><BookOpen /> Mushroom Farming Training</h2>
                        <p className="dark:text-slate-300 text-slate-700 text-sm md:text-base leading-relaxed mb-6">Organic Mushroom Farm Jabalpur mein practical training programs available hain. Yeh training specifically design ki gayi hai India ke farmers, housewives, students, unemployed youth aur entrepreneurs ke liye.</p>
                        <ul className="list-disc pl-5 text-sm dark:text-slate-300 text-slate-700 space-y-2 font-medium mb-6">
                            <li><strong>Training Mode:</strong> Online + Offline (Jabalpur center ya aapke city mein on-site)</li>
                            <li><strong>Duration:</strong> 1 din basic training / 3-5 din complete commercial training</li>
                            <li><strong>Topics:</strong> Spawn making, substrate prep, contamination control, marketing</li>
                            <li><strong>Certificate:</strong> Training completion certificate provided</li>
                        </ul>
                        <div className="flex gap-4 items-center">
                            <a href="tel:+919203544140" className="btn-primary px-8 py-3 rounded-xl font-bold text-sm bg-white text-black hover:text-white shadow-xl flex items-center gap-2">
                                <Phone size={16} /> Book Training: 9203544140
                            </a>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900">Mushroom Spawn/Seed Supply & Bulk Mushroom</h2>
                        <p className="text-sm dark:text-slate-400 text-slate-600 mb-4">High-Quality Oyster Mushroom Spawn – Pan India Delivery. Pure culture, high-yield varieties available.</p>
                         <div className="overflow-x-auto w-full">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className="bg-[#1A1A2E]/5 dark:bg-[#1A1A2E] border-b border-[#1A1A2E]/10 dark:border-white/10">
                                    <tr>
                                        <th className="py-3 px-4 font-bold">Spawn Type</th>
                                        <th className="py-3 px-4 font-bold">Pack Size</th>
                                        <th className="py-3 px-4 font-bold">Variety</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-white/5 border-black/5 hover:bg-white/5 transition-colors">
                                        <td className="py-3 px-4">Grain Spawn</td>
                                        <td className="py-3 px-4">500g / 1kg / 5kg</td>
                                        <td className="py-3 px-4">White, Pink, Grey Oyster</td>
                                    </tr>
                                    <tr className="border-b dark:border-white/5 border-black/5 hover:bg-white/5 transition-colors">
                                        <td className="py-3 px-4">Sawdust Spawn</td>
                                        <td className="py-3 px-4">1kg / 5kg</td>
                                        <td className="py-3 px-4">White, Yellow Oyster</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 dark:bg-white/5 bg-black/5 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                             <div>
                                 <h3 className="font-bold text-lg dark:text-white text-slate-900 mb-2">Bulk Fresh & Dry Mushroom Order</h3>
                                 <p className="text-sm dark:text-slate-400 text-slate-600 max-w-xl">Restaurants, Hotels, Retailers, Exporters ke liye Bulk Fresh Oyster (₹50-80/kg bulk) aur Dry Oyster (₹400-700/kg) available hai.</p>
                             </div>
                             <a href="https://organicmushroomfarm.shop" target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 whitespace-nowrap">
                                <ShoppingCart size={16} /> Visit Shop
                             </a>
                        </div>
                    </section>
                    
                    <section className="space-y-8">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900 border-t border-primary-start/20 pt-8 mt-8">FAQ – Mushroom Farming ke Baare Mein Aksar Pooche Jaane Wale Sawaal</h2>
                        <div className="space-y-4">
                            <div className="p-5 rounded-2xl glass border border-white/10 group">
                                <h4 className="font-bold text-primary-start group-hover:text-accent transition-colors mb-2">Q1. Oyster mushroom farming mein kitna kharcha aata hai?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Small scale: Rs. 3,000-5,000. Commercial: Rs. 50,000-1,00,000+. Organic Mushroom Farm se kit, training aur guidance sab milti hai.</p>
                            </div>
                            <div className="p-5 rounded-2xl glass border border-white/10 group">
                                <h4 className="font-bold text-primary-start group-hover:text-accent transition-colors mb-2">Q2. Mushroom spawn kahan se kharidein?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Organic Mushroom Farm Jabalpur se Pan India delivery available hai. WhatsApp: 9203544140</p>
                            </div>
                            <div className="p-5 rounded-2xl glass border border-white/10 group">
                                <h4 className="font-bold text-primary-start group-hover:text-accent transition-colors mb-2">Q3. Kya oyster mushroom ghar par uga sakte hain?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Bilkul! 6x8 ft ka clean room chahiye. Kitchen, terrace, garage kahi bhi shuru kar sakte ho.</p>
                            </div>
                            <div className="p-5 rounded-2xl glass border border-white/10 group">
                                <h4 className="font-bold text-primary-start group-hover:text-accent transition-colors mb-2">Q4. Jabalpur mein mushroom ki price kya hai?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Retail: Rs. 100-150/kg. Bulk: Rs. 50-80/kg. Dry: Rs. 500-700/kg. Export quality dry: Rs. 800-1200/kg.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </article>
        </div>
    );
};

export default ArticleOysterMushroomCultivation;
