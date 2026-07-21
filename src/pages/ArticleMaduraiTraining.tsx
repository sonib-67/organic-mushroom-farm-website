import React, { useEffect } from 'react';
import { Phone, ArrowRight, MapPin, CheckCircle2, MessageSquare, BookOpen, Calendar, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleMaduraiTraining = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const customSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Organic Mushrooms Farm",
            "areaServed": "Madurai, Tamil Nadu",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madurai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
            },
            "description": "Mushroom farm setup, training, spawn supply and consultancy services in Madurai and surrounding blocks, Tamil Nadu."
        },
        {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Mushroom Farming Training (Online & Offline) - Madurai",
            "description": "Practical and online training covering mushroom cultivation, spawn management, harvesting and business planning.",
            "provider": {
                "@type": "Organization",
                "name": "Organic Mushrooms Farm"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "மதுரையில் mushroom farming-இன் cost எவ்வளவு?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Cost scale-ஐ பொறுத்தது. சரியான estimate-க்கு personalized business plan எடுத்துக்கொள்வது நல்லது."
                    }
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Colors */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-emerald-400/20 dark:bg-emerald-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <SEO 
                title="Madurai-ல் Mushroom Farm Setup & Training" 
                description="Start your profitable mushroom business in Madurai. Get expert காளான் வளர்ப்பு (cultivation) training, custom farm setup & premium spawn supply."
                keywords="Mushroom farming Madurai, mushroom training Madurai, mushroom spawn Madurai, oyster mushroom Tamil Nadu, organic mushrooms farm"
                url="/mushroom-farming-madurai"
                schemas={customSchemas}
            />
            
            <article className="max-w-4xl mx-auto px-4">
                {/* Back Link */}
                <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
                    <span className="text-slate-400">/</span>
                    <Link to="/states" className="hover:text-brand-blue transition-colors">States</Link>
                    <span className="text-slate-400">/</span>
                    <Link to="/states/tamil-nadu" className="hover:text-brand-blue transition-colors">Tamil Nadu</Link>
                    <span className="text-slate-400">/</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Madurai</span>
                </div>

                <div className="glass p-6 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center border-b dark:border-white/10 border-black/10 pb-8">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 leading-tight mb-4">
                            Expert Mushroom Farming Training & Farm Setup in Madurai 
                        </h1>
                        <p className="text-brand-blue font-semibold tracking-wider uppercase text-xs md:text-sm">
                            Organic Mushrooms Farm — Madurai, Tamil Nadu Special Edition
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            மதுரையில் Mushroom Business ஏன் தொடங்க வேண்டும்?
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            Madurai is a fast-growing city where the demand for Oyster and Button mushrooms in local hotels, restaurants, and supermarkets is increasing rapidly. நீங்களும் மதுரையில் ஒரு profitable agribusiness தொடங்க நினைத்தால், காளான் வளர்ப்பு (mushroom farming) ஒரு சிறந்த வாய்ப்பு.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Organic Mushroom Farm offers specialized practical training (பயிற்சி) and complete farm setup services for youth, women, and farmers in Madurai. மதுரை climate-க்கு ஏற்ற சிறந்த mushroom varieties மற்றும் high-quality spawn (காளான் வித்துக்கள்) நாங்கள் வழங்குகிறோம்.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            We don't just stop at training! உற்பத்தி செய்த காளான்களை Madurai local market-ல் எப்படி விற்பனை செய்வது (marketing and sales support) என்பதற்கான முழுமையான வழிகாட்டுதலையும் எங்கள் experts வழங்குகிறார்கள். Start your mushroom farm today!
                        </p>
                    </div>

                    {/* Demand Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            மதுரையில் காளான் தொழில் ஏன் வேகமாக வளர்கிறது?
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            மதுரை ஒரு பாரம்பரிய கலாச்சார நகரம் மட்டுமல்ல, இது ஒரு strong tourism மற்றும் food industry hub கூட. ஆண்டுக்கு லட்சக்கணக்கான tourists மீனாட்சி கோவில், தியாகராஜர் கல்லூரி பகுதி, மேலும் சுற்றுவட்டார religious spots பார்க்க வருகிறார்கள். இதனால் hotels, restaurants, mess business இங்கு அதிகமாக இருக்கின்றன.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            இதனுடன் சேர்ந்து, health awareness அதிகரிப்பது, organic food stores பெருகுவது, மற்றும் protein-rich உணவுக்கான தேவை — இவை அனைத்தும் mushroom business க்கு ஒரு strong foundation உருவாக்குகின்றன. முன்பு காளான் பெரும்பாலும் ஊட்டி அல்லது கோயம்புத்தூர் பகுதிகளில் இருந்து மதுரைக்கு வந்தது. இப்போது local growers இந்த gap-ஐ fill செய்கிறார்கள், இதனால் transportation cost குறைந்து, காளான் fresh ஆக consumer-க்கு கிடைக்கிறது.
                        </p>
                    </div>

                    {/* Climate */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            மதுரையின் Climate காளான் சாகுபடிக்கு எப்படி பொருந்துகிறது?
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            மதுரை ஒரு hot and dry climate கொண்ட நகரம் — கோடையில் temperature 40°C-க்கும் மேல் செல்கிறது. இது milky mushroom-க்கு மிகவும் suitable, ஏனெனில் இது heat-tolerant variety. Oyster mushroom-ம் Tamil Nadu-வின் இந்த warm climate-ல் நன்றாக வளரும்.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Button mushroom-க்கு குளிர்ந்த temperature (16-22°C) தேவை, அதனால் மதுரையில் இதற்கு cooling setup அல்லது semi-controlled room தேவைப்படும். வடிபட்டி, கொட்டாம்பட்டி, செடப்பட்டி போன்ற peri-urban blocks-ல் poly-shed அமைத்து, ஆண்டு முழுவதும் production செய்யலாம்.
                        </p>
                    </div>

                    {/* Services Section */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold dark:text-white text-slate-900">Mushroom Farm Setup Services</h3>
                            <p className="text-sm dark:text-slate-300 text-slate-700">
                                மதுரையில் பலருக்கு பெரிய நிலம் இல்லை — இது ஒரு பிரச்சனை இல்லை. Mushroom farming ஆரம்பிக்க தேவைப்படுவது:
                            </p>
                            <ul className="space-y-2 pl-0 list-none">
                                <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">சிறிய production room (100-500 sq. ft. இலிருந்து ஆரம்பிக்கலாம்)</span></li>
                                <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">Proper humidity control</span></li>
                                <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">Ventilation மற்றும் clean air flow</span></li>
                                <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">Quality spawn</span></li>
                                <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">Contamination-free clean environment</span></li>
                                <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">Storage area</span></li>
                            </ul>
                            <p className="text-sm dark:text-slate-300 text-slate-700">
                                Setup services-ல் site assessment, layout design, low-cost DIY options முதல் semi-automated climate-controlled units வரை அனைத்தும் cover செய்யப்படுகிறது — உங்களுடையது அரப்பாளையத்தில் ஒரு terrace ஆனாலும், தல்லாகுளத்தில் ஒரு shed ஆனாலும், அல்லது ஓத்தக்கடை பக்கம் கொஞ்சம் நிலம் ஆனாலும்.
                            </p>
                        </div>
                    </div>

                    {/* Training */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Training (பயிற்சி)
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Online Mushroom Training Program</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 mb-4">
                                    மதுரையில் பலர் IT, government, private sector jobs-ல் வேலை செய்கிறார்கள் — அவர்களுக்கு weekend அல்லது மாலை நேரம்தான் கிடைக்கும். அவர்களுக்கு Online Mushroom Training ஒரு perfect option. Online training-ல் கற்றுக்கொள்ளக்கூடியவை: Oyster Mushroom Farming, Button Mushroom Farming, Milky Mushroom Farming, Spawn management மற்றும் production planning, Mushroom marketing, Business planning.
                                </p>
                                <Link to="/training" className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1">
                                    Explore Course Details <ArrowRight size={14} />
                                </Link>
                            </div>
                            <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Offline Practical Mushroom Training</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 mb-4">
                                    சிலர் சொல்வார்கள் — "வீடியோ பார்த்து புரிஞ்சுது, ஆனா கையால செஞ்சு காமிக்கணும்." Offline training இந்த gap-ஐ fill செய்கிறது. Hands-on training-ல் இருப்பவை: Bed preparation, Spawn handling, Harvesting techniques, Farm management, Production techniques. மட்டுத்தாவணி, அண்ணா நகர், KK நகர் பகுதிகளில் இருந்து எளிதாக வரக்கூடிய வகையில் offline training venue வைக்கப்படுகிறது.
                                </p>
                                <Link to="/training" className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1">
                                    View Schedule <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sales & Services Section */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Mushroom Sales, Spawn & Value-added Products
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Mushroom Spawn Supply</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Spawn quality நன்றாக இல்லையென்றால் yield ஒருபோதும் consistent ஆக வராது. கிடைக்கும் categories: Oyster, Button, Milky. Delivery மட்டுத்தாவணி, அண்ணா நகர், KK நகர், திருநகர், செல்லூர், தில்லாகுளம் முதல் திருப்பரங்குன்றம், வடிபட்டி, அலங்காநல்லூர் block வரை செய்யப்படுகிறது.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Fresh Mushroom Supply</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Fresh mushroom demand முக்கியமாக இங்கிருந்து வருகிறது: Hotels மற்றும் restaurants (பெரியார் bus stand, டவுன் ஹால் ரோடு பகுதி), Supermarkets, Organic food stores, Vegetable markets (ஜோதி மற்றும் மட்டுத்தாவணி மார்க்கெட்).</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Dry Mushroom Products</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Fresh mushroom-உடன், value-added products-க்கும் நல்ல market உள்ளது: Dry mushrooms, Mushroom powder (soup மற்றும் health supplements-ல் பயன்படுகிறது), Ready-to-cook mushroom mixes. இந்த products-ஐ மதுரைக்கு மட்டும் limit செய்யாமல், online மூலம் pan-India-வும் விற்கலாம்.</p>
                            </div>
                        </div>

                        <div className="space-y-4 mt-6">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Medicinal மற்றும் Gourmet Mushroom Opportunities</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    Wellness market-ல் interest அதிகரிக்கும் varieties: Lion's Mane (cognitive wellness), Reishi (immunity), Cordyceps (premium medicinal), Turkey Tail (functional food), Shiitake (gourmet restaurant segment). இந்த category இன்னும் India-வில் early-stage-ல் தான் இருக்கிறது, அதனால் இப்போது enter ஆகும் entrepreneurs-க்கு first-mover advantage கிடைக்கும்.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Consultancy Services</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    ஒவ்வொரு entrepreneur-இன் situation வேறு — யாருக்கோ budget குறைவு, யாருக்கோ space சிறியது, யாருக்கோ marketing தெரியாது. Consultancy services இந்த areas-ல் help செய்யும்: Farm planning, Technical support, Infrastructure design, Business expansion, Market development.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Turnkey Mushroom Projects</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    பெரிய scale-ல் யோசிக்கும் investors-க்கு — அரப்பாளையம் industrial belt-ல் ஆனாலும், கொட்டாம்பட்டி-செடப்பட்டி land-ல் ஆனாலும் — turnkey projects available. Farm design, equipment planning, infrastructure மற்றும் operational setup எல்லாம் ஒரே மையத்தில் handle செய்யப்படும்.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Business Plan & ROI</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    Investment செய்வதற்கு முன் இவற்றை evaluate செய்யவும்: Investment budget, Production capacity, Market demand, Sales channels, Operating costs. ஒரு structured <Link to="/business-plan" className="text-emerald-500 hover:underline font-semibold">Mushroom Business Plan</Link> business risks-ஐ குறைக்க உதவும்.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Government Subsidy & Marketing Support</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    Available schemes மற்றும் eligibility-ஐ பொறுத்து subsidies கிடைக்கலாம். Marketing support-ல் Brand development, Packaging, Restaurant partnerships, Online promotion എന്നിവ focus செய்யப்படும்.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Neighborhoods and Areas */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Mushroom Farming in Major Areas of Madurai
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">மட்டுத்தாவணி</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Bus terminus மற்றும் market hub, wholesale fresh mushroom supply-க்கு strategic location.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">அண்ணா நகர் மற்றும் KK நகர்</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Established residential areas, health-conscious families-க்கு direct home delivery-க்கு நல்ல scope.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">திருநகர் மற்றும் செல்லூர்</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Growing residential belt, retail மற்றும் local market demand அதிகரித்து வருகிறது.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">திருப்பரங்குன்றம்</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Temple town அருகில் இருப்பதால் tourism-driven hotel/restaurant demand.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">அரப்பாளையம்</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Traditional trading area, spawn மற்றும் dry mushroom distribution-க்கு suitable.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">தல்லாகுளம், கோரிபாளையம், சிம்மக்கல்</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">City-central areas, organic stores மற்றும் supermarkets இங்கு அதிகம்.</p>
                            </div>
                        </div>
                    </div>

                    {/* Nearby Regions */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Mushroom Farming in Nearby Villages மற்றும் Blocks
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> ஓத்தக்கடை (Othakadai)</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Madurai East block-ல் உள்ள இந்த பகுதியில் storage godown facilities ஏற்கனவே உள்ளதால், dry mushroom மற்றும் spawn storage-க்கு strategic.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> அலங்காநல்லூர்</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Jallikattu-க்கு பிரபலமான இந்த block-ல் agricultural land அதிகம் கிடைக்கிறது, mushroom unit தொடங்க cost-effective.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> வடிபட்டி</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Traditional farming block, சான்னம்பட்டி பகுதியில் storage facility-ம் உள்ளது.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> கொட்டாம்பட்டி மற்றும் செடப்பட்டி</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Rural belt, land cost குறைவு, commercial scale-க்கு suitable.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> மேலூர்</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Municipality town, regulated market உள்ளது, paddy மற்றும் agri produce trading hub — mushroom-க்கும் அதே network பயன்படுத்தலாம்.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> உசிலம்பட்டி மற்றும் திருமங்கலம்</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Municipality towns, spawn மற்றும் dry mushroom distribution-க்கு reach அதிகரிக்கும்.</p>
                            </div>
                        </div>
                    </div>

                    {/* Audiences Segment */}
                    <div className="space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Opportunities for Various Groups
                        </h2>
                        <ul className="space-y-2.5 pl-0 list-none">
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>விவசாயிகள் (Farmers)</strong> — ஓத்தக்கடை, வடிபட்டி, அலங்காநல்லூர் belt-ல் உள்ள விவசாயிகள் தங்கள் traditional விவசாயத்துடன் mushroom-ஐ supplementary income ஆக சேர்த்துக்கொள்ளலாம்.</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>மாணவர்கள் (Students)</strong> — குறைந்த investment-ல் தொடங்க முடியும் என்பதால், college students மற்றும் fresh graduates-க்கு ஒரு நல்ல side-business idea.</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>பெண்கள் (Women)</strong> — வீட்டிலிருந்தே சிறிய unit தொடங்கி self-employment வழி உருவாக்கிக்கொள்ளலாம் — பல self-help groups ஏற்கனவே இதை apply செய்கிறார்கள்.</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>Startups</strong> — மதுரையில் வளர்ந்து வரும் food business ecosystem காரணமாக mushroom-based food brands (dry mushroom, powder, ready-to-cook products)-க்கு scope உள்ளது.</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>FPOs</strong> — Collective production மற்றும் marketing-ஆல் cost குறையும், bargaining power அதிகரிக்கும், குறிப்பாக மதுரை போன்ற பெரிய market-க்கு supply செய்யும்போது.</span></li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="p-6 md:p-8 rounded-[2rem] dark:bg-emerald-950/20 bg-emerald-50/50 border border-emerald-500/10 space-y-4">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Why Choose Organic Mushrooms Farm</h3>
                        <ul className="space-y-2.5 pl-0 list-none">
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Practical hands-on மற்றும் online — இரண்டு training options</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Consistent yield தரும் quality spawn</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Setup முதல் marketing வரை end-to-end support</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">மதுரை மற்றும் அதன் சுற்றுவட்டார blocks-இன் local market understanding</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Business planning மற்றும் ROI-focused approach, training மட்டும் இல்லை</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Turnkey மற்றும் consultancy — சிறிய unit ஆனாலும், பெரிய commercial project ஆனாலும்</span></li>
                        </ul>
                    </div>

                    {/* FAQ section */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
                            <HelpCircle className="text-emerald-500" /> அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    q: "1. மதுரையில் mushroom farming-இன் cost எவ்வளவு?",
                                    a: "Cost scale-ஐ பொறுத்தது — சிறிய unit குறைந்த budget-ல் தொடங்கும், commercial climate-controlled setup-க்கு அதிக investment தேவை. சரியான estimate-க்கு personalized business plan எடுத்துக்கொள்வது நல்லது."
                                },
                                {
                                    q: "2. எவ்வளவு profit கிடைக்கும்?",
                                    a: "Profit variety, scale, production quality மற்றும் local buyer network-ஐ பொறுத்தது."
                                },
                                {
                                    q: "3. Mushroom spawn எங்கே வாங்குவது?",
                                    a: "Quality-assured oyster, button மற்றும் milky mushroom spawn direct-ஆக supply கிடைக்கும், மதுரைக்குள் delivery-ம் possible."
                                },
                                {
                                    q: "4. Mushroom training எப்படி join செய்வது?",
                                    a: "Online மற்றும் offline, இரண்டு formats-ம் available — உங்கள் availability-ஐ பொறுத்து தேர்வு செய்யலாம்."
                                },
                                {
                                    q: "5. Online training கிடைக்குமா?",
                                    a: "ஆம், working professionals மற்றும் busy schedule உள்ளவர்களுக்கு online training convenient."
                                },
                                {
                                    q: "6. Offline/hands-on training-ம் கிடைக்குமா?",
                                    a: "ஆம், practical demonstration மற்றும் live sessions offline training-ல் cover செய்யப்படும்."
                                },
                                {
                                    q: "7. Mushroom farming-க்கு எவ்வளவு இடம் தேவை?",
                                    a: "சிறிய scale-க்கு 100-200 sq. ft. இலிருந்தே தொடங்கலாம்; commercial scale-க்கு அதிக space மற்றும் proper climate control தேவை."
                                },
                                {
                                    q: "8. பெண்கள் இந்த business-ஐ தொடங்கலாமா?",
                                    a: "நிச்சயமாக — mushroom farming low-investment, home-based self-employment-க்கு popular option."
                                },
                                {
                                    q: "9. மாணவர்களும் தொடங்கலாமா?",
                                    a: "ஆம், குறைந்த capital மற்றும் சிறிய இடத்தில் மாணவர்களும் side-business ஆக தொடங்கலாம்."
                                },
                                {
                                    q: "10. Government subsidy கிடைக்குமா?",
                                    a: "சில agriculture மற்றும் self-employment schemes allied activities-க்கு support செய்கின்றன; current eligibility மற்றும் benefits-க்கு local Krishi Vigyan Kendra அல்லது வங்கியில் verify செய்துகொள்ளவும்."
                                },
                                {
                                    q: "11. மதுரைக்கு எந்த mushroom variety best?",
                                    a: "Beginners-க்கு oyster mushroom எளிமையானது; heat-tolerant milky mushroom-ம் suitable; button mushroom-க்கு cooling setup தேவை."
                                },
                                {
                                    q: "12. Mushroom-ஐ எப்படி விற்பது?",
                                    a: "Hotels, restaurants, organic stores, supermarkets மற்றும் online platforms — multiple channels available, marketing support இதில் help செய்யும்."
                                },
                                {
                                    q: "13. Consultancy service கிடைக்குமா?",
                                    a: "ஆம், farm planning முதல் market development வரை consultancy available."
                                },
                                {
                                    q: "14. Turnkey project setup கிடைக்குமா?",
                                    a: "ஆம், பெரிய scale investors-க்கு complete farm design முதல் operational setup வரை turnkey solutions available."
                                },
                                {
                                    q: "15. Marketing support கிடைக்குமா?",
                                    a: "ஆம், branding, packaging, restaurant partnerships மற்றும் online promotion areas-ல் support கிடைக்கும்."
                                },
                                {
                                    q: "16. அண்ணா நகர் அல்லது KK நகரில் இருப்பவர்கள் நேரடியாக fresh mushroom order செய்யலாமா?",
                                    a: "ஆம், இந்த areas-ல் fresh, locally-grown mushroom delivery ஒரு growing trend."
                                },
                                {
                                    q: "17. வடிபட்டி அல்லது அலங்காநல்லூர் block-ல் production unit வைப்பது நல்லதா?",
                                    a: "ஆம், இந்த areas-ல் land cost மதுரை நகரத்தை விட குறைவு, connectivity-ம் நன்றாக உள்ளது."
                                },
                                {
                                    q: "18. Dry mushroom மற்றும் mushroom powder எங்கே விற்கலாம்?",
                                    a: "இந்த products-ஐ மதுரைக்கு மட்டும் limit செய்யாமல் online அல்லது pan-India-வும் விற்கலாம்."
                                },
                                {
                                    q: "19. மதுரையில் medicinal mushroom (Lion's Mane, Reishi, Cordyceps) market எப்படி உள்ளது?",
                                    a: "மதுரையின் health-conscious consumer base இதை ஒரு promising, early-stage category ஆக மாற்றுகிறது."
                                },
                                {
                                    q: "20. FPO அல்லது farmer group commercial scale-ல் எப்படி தொடங்குவது?",
                                    a: "Collective production மற்றும் turnkey/consultancy support எடுத்து FPOs பெரிய scale-ல் cost-efficient ஆக தொடங்கலாம்."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="p-5 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5 space-y-2">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                                        {faq.q}
                                    </h4>
                                    <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="pt-8 border-t dark:border-white/10 border-black/10 text-center space-y-4">
                        <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900">
                            மதுரையில் காளான் தொழில் தொடங்க தயாரா?
                        </h3>
                        <p className="text-sm dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
                            Organic Mushrooms Farm-உடன் இணைந்து training, quality spawn, farm setup guidance மற்றும் sales support-ஐ பெறுங்கள்.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <a 
                                href="https://wa.me/917389595844"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
                            >
                                <Phone size={18} /> Contact on WhatsApp
                            </a>
                            <Link 
                                to="/book-consultant"
                                className="px-8 py-3.5 rounded-full dark:bg-white/5 bg-black/5 dark:text-white text-slate-900 font-semibold border dark:border-white/10 border-black/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                            >
                                <Calendar size={18} /> Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ArticleMaduraiTraining;
