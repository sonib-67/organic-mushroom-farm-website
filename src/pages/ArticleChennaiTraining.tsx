import React, { useEffect } from 'react';
import { Phone, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleChennaiTraining = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Colors */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <SEO 
                title="Chennai Mushroom Farming Training Center" 
                description="Start Your Profitable Agri-Business Today! Premium mushroom farming training, spawn supply and commercial setup in Chennai, Tamil Nadu."
                keywords="Mushroom farming Chennai, mushroom training Chennai, mushroom spawn Chennai, commercial mushroom farming Tamil Nadu, Tambaram, Velachery, OMR"
            />
            
            <article className="max-w-4xl mx-auto px-4 prose prose-invert">
                <div className="glass p-8 md:p-12 rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 leading-tight mb-4">
                            Chennai Mushroom Farming Training Center
                        </h1>
                        <p className="font-bold text-xl md:text-2xl text-primary-start mb-6">
                            Start Your Profitable Agri-Business Today!
                        </p>
                    </div>

                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                        சென்னை, தாம்பரம், வேளச்சேரி, அண்ணா நகர், ஓ.எம்.ஆர், போரூர், அம்பத்தூர், அவடி மற்றும் சுற்றியுள்ள கிராமங்களில் காளான் வளர்ப்பு (Mushroom Farming) வேகமாக வளர்ந்து வரும் ஒரு லாபகரமான தொழிலாக மாறியுள்ளது. Today, health-conscious consumers, top-tier restaurants, hotels, and organic stores across Chennai are demanding fresh, organic, and medicinal mushrooms.
                    </p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                        If you are a farmer, student, aspiring entrepreneur, or part of a women's self-help group looking for a low-investment, high-value agricultural business, this is your perfect opportunity. <strong>Mushroom Farm</strong> is here to guide you through every single step—from learning the basics to setting up a commercial facility and selling your produce.
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
                        Why Mushroom Farming is Booming in Chennai & Tamil Nadu?
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                        Chennai's food industry is massive and continuously evolving. People are shifting toward sustainable, high-protein, and organic diets. This shift has created an unprecedented demand not just for standard varieties, but also for premium medicinal mushrooms.
                    </p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4">
                        With our training, you can master the cultivation of:
                    </p>
                    <ul className="list-none space-y-3 dark:text-slate-300 text-slate-700">
                        <li className="flex gap-3"><CheckCircle2 className="text-primary-start shrink-0" size={20} /> <span><strong>Commercial Varieties:</strong> Oyster Mushroom, Milky Mushroom, and Button Mushroom.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-primary-start shrink-0" size={20} /> <span><strong>Premium & Medicinal Varieties:</strong> Shiitake Mushroom, Lion’s Mane, Reishi, and Turkey Tail Mushroom.</span></li>
                    </ul>

                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-primary-start pl-4">
                        Complete Blueprint: From Learning to Earning
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                        To build a successful business, you need the right mix of technical knowledge, quality raw materials, and market access. Here is how we support your entrepreneurial journey:
                    </p>

                    <div className="space-y-6">
                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">1. Online Mushroom Training (வீட்டிலிருந்தே ஆன்லைன் பயிற்சி)</h3>
                            <p className="dark:text-slate-400 text-slate-600 mb-3">Can’t travel? No problem. Learn the entire science of mushroom cultivation from the comfort of your home. Our comprehensive <strong>Online Mushroom Training</strong> program covers:</p>
                            <ul className="list-disc pl-5 space-y-2 text-sm dark:text-slate-400 text-slate-600">
                                <li>Substrate preparation and sterilization techniques.</li>
                                <li>Spawn running conditions and crop management.</li>
                                <li>Harvesting, professional packaging, and modern marketing strategies.</li>
                            </ul>
                            <p className="dark:text-slate-400 text-slate-600 mt-3 text-sm italic">Perfect for residents across Tambaram, Velachery, OMR, Porur, and remote villages who want flexible learning hours.</p>
                        </div>
                        
                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">2. Offline Practical Mushroom Training</h3>
                            <p className="dark:text-slate-400 text-slate-600">If you prefer hands-on learning, our <strong>Offline Mushroom Training</strong> features live demonstrations in a working farm environment. You will get dirty, prepare your own mushroom beds, learn precise spawn handling, study disease management, and master commercial production workflows firsthand.</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">3. Professional Mushroom Farm Setup</h3>
                            <p className="dark:text-slate-400 text-slate-600">Setting up a high-yield growing environment requires precision. We provide complete technical guidance for <strong>Mushroom Farm Setup in Chennai</strong>, ensuring you have the perfect clean growing room, humidity management, balanced ventilation systems, temperature control, and proper hygienic storage areas.</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">4. Turnkey Mushroom Projects</h3>
                            <p className="dark:text-slate-400 text-slate-600">For investors and commercial growers looking for a hassle-free launch, we design and execute <strong>Turnkey Projects</strong>. We handle everything—from structural construction and climate-control automation to initial spawn inoculation—handing over a fully operational, ready-to-harvest farm.</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">5. High-Yield Mushroom Spawn Sale</h3>
                            <p className="dark:text-slate-400 text-slate-600 mb-3">The secret to a heavy harvest lies in the genetics. We offer premium, laboratory-tested <strong>Mushroom Spawn Sale</strong> services. Get the highest-yielding Oyster Mushroom Spawn, Milky Mushroom Spawn, and Button Mushroom Spawn to ensure a disease-free, high-quality crop cycle.</p>
                            <div className="bg-primary-start/10 text-primary-start p-3 rounded-lg text-center font-mono text-sm border border-primary-start/20">
                                [ High-Yield Spawn ] ➔ [ Controlled Farm Setup ] ➔ [ Bumper Mushroom Harvest ]
                            </div>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">6. Mushroom Consultancy Services</h3>
                            <p className="dark:text-slate-400 text-slate-600">Stuck with low yields or contamination? Our expert <strong>Mushroom Consultancy</strong> services provide end-to-end troubleshooting, farm planning optimization, production management audits, and business expansion advice to keep your farm profitable year-round.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-primary-start pl-4">
                        Maximizing Revenue: Sales, Marketing & Business Strategy
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                        Growing mushrooms is only half the battle; selling them smartly is where the real profit lies.
                    </p>

                    <div className="space-y-6">
                        <div className="glass p-6 rounded-2xl border dark:border-white/5 border-black/5">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3">Fresh Mushroom Sale & Dry Mushroom Business</h3>
                            <ul className="list-disc pl-5 space-y-3 dark:text-slate-400 text-slate-600">
                                <li><strong>Fresh Mushroom Sale:</strong> Tap into Chennai’s bustling local markets, retail shops, supermarkets, and premium organic stores.</li>
                                <li><strong>Dry Mushroom Sale & Value Addition:</strong> Mushrooms have a short shelf-life, but drying them opens up a massive pan-India market. Dry mushrooms offer longer shelf life, effortless transportation, and can be converted into high-margin products like mushroom powder or health supplements.</li>
                            </ul>
                        </div>
                        
                        <div className="glass p-6 rounded-2xl border dark:border-white/5 border-black/5">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3">Business Plan, ROI & Government Subsidy</h3>
                            <p className="dark:text-slate-400 text-slate-600 mb-4">
                                Before building a single bed, we help you draft a solid <strong>Business Plan & ROI</strong> evaluation. We calculate your exact investment costs against production capacity to forecast real profitability.
                            </p>
                            <div className="p-4 rounded-xl border border-primary-start/30 bg-primary-start/5 text-primary-start">
                                <strong>Financial Boost:</strong> We also guide you through the latest <strong>Government Subsidy for Mushroom Farming</strong> under various agricultural and entrepreneurship schemes, making your initial setup incredibly cost-effective.
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl border dark:border-white/5 border-black/5">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3">Dedicated Mushroom Marketing Support</h3>
                            <p className="dark:text-slate-400 text-slate-600">
                                You don’t have to worry about finding buyers. Our <strong>Mushroom Marketing Support</strong> connects you with local market networks, commercial restaurant supply chains, and bulk buyers, helping you build a sustainable, highly profitable business model.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-primary-start pl-4">
                        Hyper-Local Connectivity: Serving Every Corner of Chennai
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                        We are deeply rooted in the local community, extending our training, setup, and spawn delivery services to all major zones and neighboring rural clusters:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 dark:text-slate-300 text-slate-700">
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Major Urban Hubs:</strong> Tambaram, Velachery, Anna Nagar, OMR (Old Mahabalipuram Road), Porur, Ambattur, Avadi, and Chromepet.</span></li>
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Poonamallee Region:</strong> Covering Poonamallee town, Kumananchavadi, Karayanchavadi, Senneerkuppam, and Nazarathpet.</span></li>
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Thiruvallur Region:</strong> Serving Thiruvallur blocks, Kakalur, Putlur, Aranvoyal, and Veppambaattu.</span></li>
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Sriperumbudur Region:</strong> Extending to Sriperumbudur industrial zones, Mampakkam, Pennalur, Irungattukottai, and Sunguvarchatram.</span></li>
                        <li className="flex gap-3 items-start md:col-span-2"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Kundrathur Region:</strong> Reaching Kundrathur, Kovur, Mangadu, Chembarambakkam, and Chikkarayapuram villages.</span></li>
                    </ul>

                    <div className="bg-linear-to-r from-primary-start/20 to-primary-end/20 p-8 rounded-3xl mt-12 border border-primary-start/20">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Conclusion: Take the First Step Today!</h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4">
                            சென்னை மற்றும் அதன் சுற்றுப்புற பகுதிகளில் காளான் வளர்ப்பு ஒரு சிறந்த விவசாய மற்றும் தொழில் வாய்ப்பாக மாறி வருகிறது. Proper training, premium spawn, and strategic marketing support can transform a small space into a highly rewarding business venture.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            Whether you want to join our next training batch, buy premium spawn, or set up a commercial commercial facility, we have the expertise to make your venture a grand success.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 font-bold mb-8">
                            Ready to start your mushroom farming journey in Chennai? Contact us today to consult with our experts!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a href="tel:+919203544140" className="btn-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                                <Phone size={18} /> Call Now: 9203544140
                            </a>
                            <Link to="/contact" className="btn-outline px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                                Contact Us <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
        </div>
    );
};

export default ArticleChennaiTraining;
