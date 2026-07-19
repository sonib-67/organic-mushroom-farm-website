import React, { useEffect } from 'react';
import { Phone, ArrowRight, MapPin, CheckCircle2, MessageSquare, BookOpen, Calendar, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleNashikTraining = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Custom Schemas for Nashik as requested by user
    const customSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "नाशिकमध्ये mushroom farming चा खर्च किती आहे?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Scale नुसार वेगळा असतो — घरगुती छोट्या unit साठी ₹10,000-₹25,000 पासून सुरुवात करता येते, commercial scale साठी जास्त गुंतवणूक लागते."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Mushroom spawn नाशिकमध्ये कुठे मिळेल?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "आमच्याकडून संपूर्ण Maharashtra आणि pan-India delivery सह spawn खरेदी करता येतं."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Online training उपलब्ध आहे का?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "हो, Marathi आणि Hindi दोन्ही भाषांमध्ये सपोर्टसह पूर्णपणे online training उपलब्ध आहे."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Nashik मध्ये offline training मिळेल का?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "हो, Nashik मध्ये practical hands-on offline training ची व्यवस्था आहे."
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Mushroom Farming Training Nashik",
            "description": "Online aur offline mushroom farming training covering spawn handling, cultivation, harvesting, packaging aur marketing in Nashik, Maharashtra.",
            "provider": {
                "@type": "Organization",
                "name": "Organic Mushroom Farm",
                "sameAs": "https://organicmushroomfarm.shop"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Organic Mushroom Farm",
            "url": "https://organicmushroomfarm.shop/mushroom-farming-nashik-maharashtra",
            "areaServed": [
                "Nashik", "Gangapur Road", "Panchavati", "Indira Nagar", "Satpur", "Ambad",
                "Nashik Road", "College Road", "CIDCO", "Sinnar", "Niphad", "Igatpuri",
                "Yeola", "Trimbakeshwar", "Ozar", "Pimpalgaon", "Dindori"
            ],
            "description": "Mushroom farm setup, spawn supply, online aur offline training, fresh aur dry mushroom sale, consultancy aur turnkey mushroom projects in Nashik, Maharashtra.",
            "priceRange": "₹₹"
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
                title="Mushroom Farming Training, Spawn Supply, Consultancy & Farm Setup in Nashik" 
                description="Start your mushroom farming business in Nashik with Organic Mushroom Farm. Get professional online & offline training, premium spawn, customized farm setup, and complete marketing support."
                keywords="Mushroom farming Nashik, mushroom training Nashik, mushroom spawn Maharashtra, oyster mushroom Nashik, button mushroom Nashik, organic mushroom farm"
                url="/cities/maharashtra/nashik"
                schemas={customSchemas}
            />
            
            <article className="max-w-4xl mx-auto px-4 prose prose-invert">
                {/* Back Link */}
                <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
                    <span className="text-slate-400">/</span>
                    <Link to="/states" className="hover:text-brand-blue transition-colors">States</Link>
                    <span className="text-slate-400">/</span>
                    <Link to="/states/maharashtra" className="hover:text-brand-blue transition-colors">Maharashtra</Link>
                    <span className="text-slate-400">/</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Nashik</span>
                </div>

                <div className="glass p-6 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center border-b dark:border-white/10 border-black/10 pb-8">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 leading-tight mb-4">
                            Mushroom Farming Training, Spawn Supply, Consultancy & Farm Setup in Nashik | Organic Mushroom Farm
                        </h1>
                        <p className="text-brand-blue font-semibold tracking-wider uppercase text-xs md:text-sm">
                            Organic Mushroom Farm — Nashik, Maharashtra Special Edition
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-4">
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            नाशिक — द्राक्ष आणि वाईनयार्ड्ससाठी प्रसिद्ध असलेलं हे शहर, आता एका नव्या कृषी संधीकडे वळत आहे — ती म्हणजे <strong>mushroom farming</strong>. Gangapur Road, Panchavati, Indira Nagar, Satpur, Ambad, Nashik Road आणि आजूबाजूच्या गावांमध्ये शेतकरी, विद्यार्थी, महिला उद्योजक आणि तरुण व्यावसायिक आता mushroom farming कडे एक गंभीर व्यवसाय संधी म्हणून बघत आहेत.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            <Link to="/" className="text-emerald-500 hover:underline font-semibold">Organic Mushroom Farm</Link> म्हणून आम्ही नाशिक आणि आसपासच्या Sinnar, Niphad, Igatpuri, Yeola, Trimbakeshwar, Ozar, Pimpalgaon आणि Dindori भागातील लोकांना <Link to="/articles/turnkey-commercial-setup" className="text-emerald-500 hover:underline font-semibold">farm setup</Link>, <Link to="/spawn-seed" className="text-emerald-500 hover:underline font-semibold">spawn supply</Link>, <Link to="/training" className="text-emerald-500 hover:underline font-semibold">online/offline training</Link>, fresh आणि dry mushroom sale, <Link to="/book-consultant" className="text-emerald-500 hover:underline font-semibold">consultancy</Link> आणि <Link to="/turnkey-projects" className="text-emerald-500 hover:underline font-semibold">turnkey project</Link> ही सेवा पुरवत आहोत. या पानावर आपण बघू की नाशिकमध्ये mushroom business कसा सुरू करायचा, कोणकोणत्या संधी आहेत आणि आमच्याशी कसं जोडून घ्यायचं.
                        </p>
                        <div className="p-4 rounded-xl dark:bg-emerald-950/30 bg-emerald-50 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
                            Agar aap Nashik ya aas-paas ke kisi bhi area se ho aur mushroom farming shuru karna chahte ho, to yeh guide bilkul aapke liye hi likha gaya hai — poora practical, local aur real jankari ke saath.
                        </div>
                    </div>

                    {/* Section 1 */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Nashik मध्ये Beginners साठी Mushroom Farming का योग्य आहे?
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            बऱ्याच शेती व्यवसायांना लागतं:
                        </p>
                        <ul className="space-y-2 pl-0 list-none">
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-red-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">मोठी जमीन</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-red-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">जड यंत्रसामग्री</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-red-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">हंगामावर अवलंबून राहणं</span></li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mt-4">
                            Mushroom farming यापेक्षा वेगळं आहे:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 list-none">
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">कमी जागा लागते — छोट्या खोलीतूनही सुरुवात करता येते</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Indoor production — हवामानाचा फारसा परिणाम होत नाही</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">वर्षभर संधी — seasonal dependency नाही</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Scalable model — छोट्या स्तरावरून मोठ्या commercial farm पर्यंत वाढवता येतं</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">एकाहून अधिक income streams — fresh, dry, spawn, training सगळ्यातून कमाई</span></li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed italic text-sm mt-2">
                            Yehi wajah hai ki Nashik ke naye entrepreneurs ke liye yeh business first-time investment ke liye bhi safe option ban raha hai.
                        </p>
                    </div>

                    {/* Step 1 */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Step 1: Mushroom चे प्रकार समजून घ्या
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            सुरुवात करण्याआधी उपलब्ध जातींची माहिती असणं गरजेचं आहे. आमच्या <Link to="/mushroom-types" className="text-emerald-500 hover:underline font-semibold">Mushroom Types</Link> गाईड मध्ये सविस्तर माहिती दिली आहे:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                Oyster Mushroom
                                <span className="block text-[10px] text-slate-500 font-normal">beginners साठी सर्वात सोपा</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                Button Mushroom
                                <span className="block text-[10px] text-slate-500 font-normal">भारतात सर्वाधिक लोकप्रिय</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                Milky Mushroom
                                <span className="block text-[10px] text-slate-500 font-normal">उष्ण हवामानासाठी योग्य</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                Shiitake Mushroom
                                <span className="block text-[10px] text-slate-500 font-normal">premium restaurant market</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                Lion's Mane Mushroom
                                <span className="block text-[10px] text-slate-500 font-normal">वाढती wellness category</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                Reishi Mushroom
                                <span className="block text-[10px] text-slate-500 font-normal">medicinal segment</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                Turkey Tail Mushroom
                                <span className="block text-[10px] text-slate-500 font-normal">health-focused नवीन</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                Cordyceps Mushroom
                                <span className="block text-[10px] text-slate-500 font-normal">high-value medicinal</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Step 2: गुंतवणुकीआधी शिका
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            बऱ्याच लोकांची सर्वात मोठी चूक म्हणजे शेती समजून न घेता आधी पैसे गुंतवणं. Training मुळे समजतं:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0 list-none">
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Production systems</span></li>
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Crop management</span></li>
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Spawn handling</span></li>
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Harvesting & Marketing</span></li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            ज्ञान असेल तर risk कमी होतो.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Online Mushroom Training</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 mb-4">
                                    Online training खासकरून यांच्यासाठी उपयुक्त: विद्यार्थी, Working professionals, शेतकरी, महिला उद्योजक. Marathi आणि Hindi दोन्ही भाषांमध्ये सपोर्ट, cultivation, business planning आणि marketing सर्व topics कव्हर होतात.
                                </p>
                                <Link to="/training" className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1">
                                    Explore Course Details <ArrowRight size={14} />
                                </Link>
                            </div>
                            <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Offline Mushroom Training</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 mb-4">
                                    Practical training मध्ये असतं: Bed preparation, Production room management, Harvesting techniques आणि Farm operations. Nashik Road, Satpur, Ambad भागातील अनेकजण hands-on experience साठी offline training ला प्राधान्य देतात.
                                </p>
                                <Link to="/training" className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1">
                                    View Schedule <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Step 3: लहान Mushroom Farm Setup ची योजना करा
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            बरेच यशस्वी growers छोट्या setup पासून सुरुवात करतात. मूलभूत गरजा:
                        </p>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2.5 pl-0 list-none">
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700 text-sm">स्वच्छ खोली</span></li>
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Ventilation</span></li>
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Humidity control</span></li>
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Storage area</span></li>
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700 text-sm">दर्जेदार spawn</span></li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm">
                            आम्ही Gangapur Road, Panchavati, Indira Nagar, CIDCO आणि College Road भागात प्रत्यक्ष भेट देऊनही <Link to="/articles/turnkey-commercial-setup" className="text-emerald-500 hover:underline font-semibold">customized setup plan</Link> बनवून देतो.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Step 4: दर्जेदार Mushroom Spawn वापरा
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Spawn ची quality production वर थेट परिणाम करते. आम्ही <Link to="/spawn-seed" className="text-emerald-500 hover:underline font-semibold">Mushroom Spawn</Link> पुरवतो:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pl-0 list-none">
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500" /> <span className="dark:text-slate-300 text-slate-700">Oyster Mushroom Spawn</span></li>
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500" /> <span className="dark:text-slate-300 text-slate-700">Button Mushroom Spawn</span></li>
                            <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500" /> <span className="dark:text-slate-300 text-slate-700">Milky Mushroom Spawn</span></li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm">
                            नाशिक, Sinnar, Niphad, Igatpuri, Yeola, Trimbakeshwar, Ozar, Pimpalgaon, Dindori — सगळीकडे pan-India delivery सह चांगल्या packaging मध्ये spawn पोहोचवलं जातं.
                        </p>
                    </div>

                    {/* Step 5 */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Step 5: तुमचं Market समजून घ्या
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            उत्पादन सुरू करण्याआधी संभाव्य ग्राहक ओळखा: Restaurants, Hotels, Vegetable shops, Organic stores आणि Direct consumers. नाशिकच्या urban भागांमध्ये, विशेषतः College Road आणि CIDCO सारख्या भागांत, ही मागणी सतत वाढत आहे.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <div className="p-5 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Fresh Mushroom Sale</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Fresh mushrooms स्थानिक retail markets, Food service businesses, आणि Organic stores ना पुरवले जातात. Nashik Road आणि Gangapur Road भागातील hotel-restaurant industry मध्ये सातत्याने पुरवठा हवा असतो.</p>
                            </div>
                            <div className="p-5 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Dry Mushroom Sale Business</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">बरेच growers Dry mushrooms, Mushroom powder आणि Packaged products explore करतात. यांचं shelf life जास्त असतं आणि online तसेच offline दोन्ही माध्यमातून विक्री सोपी होते.</p>
                            </div>
                            <div className="p-5 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Medicinal Mushroom संधी</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Wellness बद्दल जागरूकता वाढल्यामुळे Lion's Mane, Reishi आणि Cordyceps सारख्या medicinal mushroom ची मागणी वाढत आहे. हे premium price मध्ये विकले जातात — नाशिकच्या शिक्षित urban ग्राहकांमध्ये याची लोकप्रियता वाढत आहे.</p>
                            </div>
                        </div>
                    </div>

                    {/* Services and Plans */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            आमच्या व्यावसायिक सेवा (Professional Services)
                        </h2>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Consultancy Services</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    आधीच शेती करणाऱ्यांसाठी <Link to="/book-consultant" className="text-emerald-500 hover:underline font-semibold">consultancy</Link> मदत करते: Farm planning, Infrastructure selection, Market development आणि Expansion strategies. Professional guidance मुळे वेळ आणि पैसा दोन्ही वाचतो.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Turnkey Mushroom Projects</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    मोठ्या investors साठी किंवा commercial scale farm सुरू करू इच्छिणाऱ्यांसाठी आम्ही <Link to="/turnkey-projects" className="text-emerald-500 hover:underline font-semibold">turnkey project</Link> देतो — यात farm design, infrastructure, equipment आणि operational systems सगळं समाविष्ट असतं.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Business Plan & ROI Analysis</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    गुंतवणुकीआधी entrepreneurs नी विचार करावा: Startup costs, Production capacity, Market demand, Revenue potential, आणि Operating expenses. आम्ही प्रत्येक ग्राहकाच्या scale नुसार <Link to="/business-plan" className="text-emerald-500 hover:underline font-semibold">customized business plan & project report</Link> तयार करून देतो, जो bank loan किंवा <Link to="/subsidy" className="text-emerald-500 hover:underline font-semibold">subsidy</Link> साठीही वापरता येतो.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Government Subsidy Opportunities</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    पात्र शेतकरी आणि entrepreneurs सध्याच्या agriculture आणि self-employment योजनांचा फायदा घेऊ शकतात, eligibility criteria नुसार. आम्ही योग्य योजना ओळखण्यात आणि documentation तयार करण्यात <Link to="/subsidy" className="text-emerald-500 hover:underline font-semibold">Government Subsidy Support</Link> च्या माध्यमातून मदत करतो.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Marketing Support</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    बरेच शेतकरी चांगलं उत्पादन घेतात पण योग्य ग्राहक मिळत नाहीत. आम्ही मदत करतो: Brand building, Retail partnerships, Customer acquisition, आणि Online promotion (WhatsApp, Instagram, Facebook).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Nashik Neighborhoods and Areas */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Nashik च्या प्रमुख भागांमध्ये Mushroom Farming
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Gangapur Road</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Gangapur Road भागातील अनेक घरगुती growers आता hotel आणि resort industry ला supply देत आहेत.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Panchavati</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">धार्मिक आणि सांस्कृतिकदृष्ट्या महत्त्वाच्या Panchavati भागात organic mushroom ची मागणी वाढत आहे.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Indira Nagar</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Indira Nagar सारख्या निवासी भागात छोट्या स्तरावरील घरगुती mushroom unit लोकप्रिय होत आहेत.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Satpur</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">औद्योगिक भाग Satpur मध्ये कामगार वर्गातील कुटुंबांसाठी part-time mushroom farming चांगला पर्याय ठरत आहे.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Ambad</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Ambad Industrial Area जवळ लहान commercial mushroom unit उभारण्याची चांगली संधी आहे.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Nashik Road</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Nashik Road स्टेशन भागातून राज्यभर fresh आणि dry mushroom distribution करणं सोपं जातं.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in College Road</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">विद्यार्थ्यांची मोठी संख्या असलेल्या College Road भागात project-based आणि business-based mushroom farming दोन्हीत रस वाढतोय.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in CIDCO</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 font-medium">CIDCO सारख्या नियोजित निवासी भागात घरगुती mushroom farming आणि direct-to-consumer विक्री दोन्ही सहज शक्य आहे.</p>
                            </div>
                        </div>
                    </div>

                    {/* Nearby Towns */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Nashik जवळील गावं आणि तालुक्यांमध्ये Mushroom Farming
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Training in Sinnar</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Sinnar तालुक्यातील शेतकरी कुटुंबं पारंपरिक शेतीला mushroom farming ची जोड देऊन उत्पन्न वाढवत आहेत.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Niphad</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">द्राक्ष शेतीसाठी प्रसिद्ध Niphad भागातही आता शेतकरी अतिरिक्त उत्पन्यासाठी mushroom cultivation कडे वळत आहेत.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Igatpuri</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 font-medium">थंड आणि दमट हवामान असलेल्या Igatpuri भागात mushroom farming साठी नैसर्गिकरित्या अनुकूल परिस्थिती आहे.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Yeola</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Yeola भागातील छोटे शेतकरी कमी जागेत जास्त उत्पन्न देणाऱ्या mushroom farming कडे आकर्षित होत आहेत.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Trimbakeshwar Region</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">तीर्थक्षेत्र असलेल्या Trimbakeshwar भागात स्थानिक हॉटेल्स आणि भक्तनिवासांना पुरवठा करण्याची संधी आहे.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Ozar Belt</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">विमानतळाजवळील Ozar भागात commercial scale mushroom project साठी चांगली जागा उपलब्ध आहे.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Pimpalgaon Area</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">कृषी बाजारपेठ म्हणून प्रसिद्ध Pimpalgaon मध्ये mushroom spawn आणि training ची मागणी वाढते आहे.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Dindori Region</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Dindori भागातील द्राक्ष उत्पादक शेतकरी आता mushroom farming ला दुय्यम उत्पन्याचा स्रोत म्हणून बघत आहेत.</p>
                            </div>
                        </div>
                    </div>

                    {/* Beginner Mistakes */}
                    <div className="space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-red-500 pl-4">
                            Beginner Mistakes जे टाळावेत
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-0 list-none">
                            <li className="flex gap-2 items-center"><span className="text-red-500 font-bold">❌</span> <span className="dark:text-slate-300 text-slate-700">Training शिवाय सुरुवात करणं</span></li>
                            <li className="flex gap-2 items-center"><span className="text-red-500 font-bold">❌</span> <span className="dark:text-slate-300 text-slate-700">कमी दर्जाचं spawn विकत घेणं</span></li>
                            <li className="flex gap-2 items-center"><span className="text-red-500 font-bold">❌</span> <span className="dark:text-slate-300 text-slate-700">स्वच्छतेकडे दुर्लक्ष करणं</span></li>
                            <li className="flex gap-2 items-center"><span className="text-red-500 font-bold">❌</span> <span className="dark:text-slate-300 text-slate-700">ग्राहक न शोधता उत्पादन सुरू करणं</span></li>
                            <li className="flex gap-2 items-center"><span className="text-red-500 font-bold">❌</span> <span className="dark:text-slate-300 text-slate-700">खूप घाईने विस्तार करणं</span></li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm">
                            यशस्वी growers सहसा आधी शिकतात आणि नंतर हळूहळू व्यवसाय वाढवतात.
                        </p>
                    </div>

                    {/* Opportunities */}
                    <div className="space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Farmers, Students, Women आणि Startups साठी संधी
                        </h2>
                        <ul className="space-y-2.5 pl-0 list-none">
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1.5" /> <span className="dark:text-slate-300 text-slate-700"><strong>शेतकऱ्यांसाठी</strong> — पारंपरिक शेतीला जोड म्हणून अतिरिक्त उत्पन्न</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1.5" /> <span className="dark:text-slate-300 text-slate-700"><strong>विद्यार्थ्यांसाठी</strong> — कमी गुंतवणुकीत part-time व्यवसाय</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1.5" /> <span className="dark:text-slate-300 text-slate-700"><strong>महिलांसाठी</strong> — घरबसल्या self-employment</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1.5" /> <span className="dark:text-slate-300 text-slate-700"><strong>Startups साठी</strong> — scalable business model, quick ROI</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1.5" /> <span className="dark:text-slate-300 text-slate-700"><strong>FPO साठी</strong> — group farming, bulk spawn खरेदी, collective marketing</span></li>
                        </ul>
                    </div>

                    {/* Why Choose */}
                    <div className="p-6 rounded-3xl dark:bg-white/5 bg-black/5 border border-white/5 space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Kyun Chunein Organic Mushroom Farm?
                        </h2>
                        <ul className="space-y-2 pl-0 list-none">
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Jabalpur base se pura India mein spawn delivery ka experience</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Nashik ke local weather aur market ko samajhne wali team</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Online aur offline dono training options</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Complete farm setup se leke marketing tak ka support</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">Transparent business plan aur ROI guidance</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm">WhatsApp par direct support</span></li>
                        </ul>
                    </div>

                    {/* FAQs */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            FAQs — नाशिक Mushroom Farming संबंधित प्रश्नोत्तरे
                        </h2>
                        
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">1. नाशिकमध्ये mushroom farming चा खर्च किती आहे?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Scale नुसार वेगळा असतो — घरगुती छोट्या unit साठी ₹10,000-₹25,000 पासून सुरुवात करता येते, commercial scale साठी जास्त गुंतवणूक लागते.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">2. Kitna profit ho sakta hai?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Sahi management aur consistent demand ke saath monthly accha margin possible hai, khaaskar fresh aur dry mushroom dono bech kar.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">3. Mushroom spawn कुठे मिळेल?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">आमच्याकडून संपूर्ण Maharashtra आणि pan-India delivery सह spawn खरेदी करता येतं.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">4. Training kaise join karein?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">WhatsApp ke through contact karke online ya offline training ke liye registration kiya ja sakta hai.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">5. Online training उपलब्ध आहे का?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">हो, Marathi आणि Hindi दोन्ही भाषांमध्ये सपोर्टसह पूर्णपणे online training उपलब्ध आहे.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">6. Nashik मध्ये offline training मिळेल का?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">हो, Nashik मध्ये practical hands-on offline training ची व्यवस्था आहे.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">7. किती जागा लागते?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">छोट्या स्तरासाठी 100-200 sq ft पुरेसं आहे, commercial साठी जास्त जागा लागते.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">8. महिला mushroom farming सुरू करू शकतात का?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">नक्कीच, घरबसल्या महिलांना हा व्यवसाय सहज सुरू करता येतो.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">9. Students bhi shuru kar sakte hain?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Bilkul, kam investment aur time mein students ke liye bhi yeh accha option hai.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">10. Government subsidy उपलब्ध आहे का?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Eligibility criteria नुसार काही योजनांद्वारे मदत मिळू शकते, आम्ही guidance देतो.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">11. कोणती mushroom variety सर्वोत्तम आहे?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Oyster mushroom beginners साठी सुरुवात करायला सर्वात सोपा आहे.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">12. Mushroom kaise bechein?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Local hotels, restaurants, organic stores, aur WhatsApp/social media ke through direct customers tak.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">13. आपण consultancy देता का?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">हो, production पासून marketing पर्यंत संपूर्ण consultancy उपलब्ध आहे.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">14. Turnkey project bhi milta hai?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Ha, bade investors ke liye complete turnkey mushroom project setup diya jata hai.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">15. Marketing support मिळेल का?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">हो, packaging, branding आणि buyer connection मध्ये पूर्ण सपोर्ट मिळतो.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">16. नाशिकच्या कोणकोणत्या भागात सेवा उपलब्ध आहे?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Gangapur Road, Panchavati, Indira Nagar, Satpur, Ambad, Nashik Road, College Road, CIDCO आणि आजूबाजूच्या सर्व भागांत.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">17. Sinnar ya Niphad mein bhi service milegi?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Ha, Sinnar, Niphad, Igatpuri, Yeola samet nearby sabhi areas cover kiye jaate hain.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">18. Dry mushroom चं shelf life किती असतं?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">योग्य storage सह dry mushroom महिनोंमहिने चांगल्या quality मध्ये टिकतं.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">19. Medicinal mushroom farming profitable आहे का?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">हो, Lion's Mane, Reishi सारख्या varieties premium price ला विकल्या जातात, margin जास्त असतो.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">20. Business plan कसा मिळेल?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 font-medium font-sans">तुमच्या scale नुसार customized project report आणि ROI analysis दिलं जातं.</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">21. Contact kasa karayacha?</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 font-medium font-sans">
                                    <Link to="/contact" className="text-emerald-500 hover:underline">संपर्क फॉर्म</Link> किंवा WhatsApp च्या माध्यमातून थेट संपर्क करता येतो, ज्याचा response सर्वात जलद असतो.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ArticleNashikTraining;
