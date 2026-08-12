import React, { useEffect } from 'react';
import { Phone, ArrowRight, MapPin, CheckCircle2, MessageSquare, BookOpen, Calendar, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleAmritsarTraining = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const customSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Amritsar mein mushroom farming ka cost kitna hai?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Scale ke hisaab se alag hota hai — chhoti home unit ₹10,000-₹25,000 se shuru ho sakti hai, commercial scale ke liye zyada investment lagta hai."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Kya online mushroom training available hai?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Haan, Punjabi aur Hindi support ke saath complete online mushroom training available hai."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Mushroom spawn Amritsar mein kahan milega?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Organic Mushrooms Farm se pan-India delivery ke saath Amritsar aur aas-paas ke sabhi areas mein spawn milta hai."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Kya kanak-jhone ki kheti ke saath mushroom farming combine ki ja sakti hai?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ha, bahut saare Punjab ke farmers apni existing traditional kheti ke saath mushroom cultivation combine karke additional income kama rahe hain."
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Organic Mushrooms Farm",
            "image": "https://organicmushroomsfarm.com/logo.png",
            "url": "https://organicmushroomsfarm.com/mushroom-farming-amritsar-punjab",
            "areaServed": [
                "Amritsar", "Ranjit Avenue", "Majitha Road", "Chheharta", "Batala Road",
                "Verka", "Putlighar", "Lawrence Road", "Mall Road", "Ajnala",
                "Tarn Taran", "Attari", "Jandiala Guru", "Chogawan", "Lopoke",
                "Verka Rural Belt", "Ajnala Villages"
            ],
            "description": "Mushroom farm setup, spawn supply, online aur offline training, fresh aur dry mushroom sale, consultancy aur turnkey mushroom projects in Amritsar, Punjab.",
            "priceRange": "₹₹"
        },
        {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Mushroom Farming Training Amritsar",
            "description": "Online aur offline mushroom farming training covering spawn handling, cultivation, harvesting, packaging aur marketing.",
            "provider": {
                "@type": "Organization",
                "name": "Organic Mushrooms Farm",
                "sameAs": "https://organicmushroomsfarm.com"
            }
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
                title="ਅੰਮ੍ਰਿਤਸਰ 'ਚ Commercial Mushroom Business & Setup" 
                description="ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਆਪਣਾ high-profit mushroom business ਸ਼ੁਰੂ ਕਰੋ! We offer practical cultivation classes, custom farm setup, and premium quality spawn."
                keywords="Mushroom farming Amritsar, mushroom training Amritsar, mushroom spawn Punjab, oyster mushroom Amritsar, button mushroom Amritsar, organic mushrooms farm"
                url="/mushroom-farming-amritsar"
                schemas={customSchemas}
            />
            
            <article className="max-w-4xl mx-auto px-4">
                {/* Back Link */}
                <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link to="/" className="hover:text-emerald-500 flex items-center gap-1 transition-colors">
                        Home
                    </Link>
                    <ArrowRight size={14} />
                    <Link to="/states" className="hover:text-emerald-500 transition-colors">States</Link>
                    <ArrowRight size={14} />
                    <Link to="/states/punjab" className="hover:text-emerald-500 transition-colors">Punjab</Link>
                    <ArrowRight size={14} />
                    <span className="font-semibold text-slate-900 dark:text-white">Amritsar</span>
                </div>

                <div className="glass p-6 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center border-b dark:border-white/10 border-black/10 pb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
                            <MapPin size={14} /> Punjab Special (Punjabi Blog)
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 leading-tight mb-4">
                            ਅੰਮ੍ਰਿਤਸਰ (Punjab) ਵਿੱਚ Profitable Mushroom Farming: Practical Training & Setup Solutions
                        </h1>
                        <h2 className="text-lg md:text-xl font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ Mushroom Business ਇੱਕ ਵਧੀਆ ਮੌਕਾ ਕਿਉਂ ਹੈ?
                        </h2>
                        <p className="text-brand-blue font-semibold tracking-wider uppercase text-xs md:text-sm">
                            Organic Mushrooms Farm — Amritsar, Punjab Special Edition
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-4">
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            Punjab is famous for its rich agriculture, but modern farming methods are now changing the game. ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਲੋਕਲ ਬਾਜ਼ਾਰਾਂ, ਢਾਬਿਆਂ ਅਤੇ ਵੱਡੇ ਹੋਟਲਾਂ ਵਿੱਚ (In local markets, dhabas, and big hotels of Amritsar) fresh Button and Oyster mushrooms ਦੀ ਬਹੁਤ ਜ਼ਿਆਦਾ ਮੰਗ ਹੈ। This makes it an excellent high-yield agribusiness for local farmers and the youth.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            Organic Mushroom Farm is here to support you at every step. ਅਸੀਂ ਤੁਹਾਡੇ ਬਜਟ ਅਤੇ ਜਗ੍ਹਾ ਦੇ ਅਨੁਸਾਰ (According to your budget and space) ਇੱਕ ਵਧੀਆ commercial farm setup ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ। Along with the complete setup, we also supply premium, high-yielding spawn (ਮਸ਼ਰੂਮ ਦਾ ਬੀਜ - Mushroom seeds) directly to your location in Amritsar.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            Growing mushrooms is just the beginning. ਤਿਆਰ ਕੀਤੀ ਫਸਲ ਨੂੰ ਪੰਜਾਬ ਦੀਆਂ ਮੰਡੀਆਂ ਵਿੱਚ ਕਿਵੇਂ ਵੇਚਣਾ ਹੈ (How to sell the prepared crop in Punjab's markets), our experts will give you proper marketing strategies and sales guidance to ensure maximum profit. Start your smart farming journey with us today!
                        </p>
                    </div>

                    {/* Demand Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            ਪੰਜਾਬ ਦੇ ਕਿਸਾਨ ਮਸ਼ਰੂਮ ਖੇਤੀ ਵੱਲ ਕਿਉਂ ਵਧ ਰਹੇ ਹਨ?
                        </h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            ਇੱਕੋ ਫ਼ਸਲ 'ਤੇ ਨਿਰਭਰ ਰਹਿਣ ਦੀ ਬਜਾਏ, ਬਹੁਤ ਸਾਰੇ ਕਿਸਾਨ ਹੁਣ ਕਈ ਆਮਦਨ ਸਰੋਤਾਂ ਨੂੰ ਤਰਜੀਹ ਦਿੰਦੇ ਹਨ। Mushroom farming ਦੇ ਫਾਇਦੇ:
                        </p>
                        <ul className="space-y-2 pl-0 list-none">
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">Indoor Farming — ਮੌਸਮ 'ਤੇ ਘੱਟ ਨਿਰਭਰਤਾ</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">ਘੱਟ ਜਗ੍ਹਾ — ਛੋਟੇ ਕਮਰੇ ਤੋਂ ਵੀ ਸ਼ੁਰੂਆਤ ਸੰਭਵ</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">ਸਾਲ ਭਰ ਉਤਪਾਦਨ — ਸੀਜ਼ਨ 'ਤੇ ਨਿਰਭਰ ਨਹੀਂ</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">High-Value Crop — ਘੱਟ ਜਗ੍ਹਾ ਵਿੱਚ ਵੱਧ ਮੁਨਾਫ਼ਾ</span></li>
                            <li className="flex gap-2.5 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700">Value-Added Products — dry mushroom, powder ਆਦਿ ਤੋਂ ਵਾਧੂ ਕਮਾਈ</span></li>
                        </ul>
                        <p className="dark:text-slate-400 text-slate-600 italic text-sm mt-2">
                            Bahut saare growers ise apni existing kheti ke saath combine karke chalate hain, jisse dono taraf se income aati hai.
                        </p>
                    </div>

                    {/* Varieties Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            ਕਿਹੜੀਆਂ <Link to="/mushroom-types" className="text-emerald-500 hover:underline">Mushroom Varieties</Link> ਉਗਾਈਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ?
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Oyster Mushroom</Link>
                                <span className="block text-[10px] text-slate-500 font-normal">beginners & commercial</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Button Mushroom</Link>
                                <span className="block text-[10px] text-slate-500 font-normal">ਸਭ ਤੋਂ ਵੱਧ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Milky Mushroom</Link>
                                <span className="block text-[10px] text-slate-500 font-normal">commercial farms ਲਈ</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Shiitake Mushroom</Link>
                                <span className="block text-[10px] text-slate-500 font-normal">premium gourmet</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Lion's Mane Mushroom</Link>
                                <span className="block text-[10px] text-slate-500 font-normal">wellness market</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Reishi Mushroom</Link>
                                <span className="block text-[10px] text-slate-500 font-normal">medicinal mushroom</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Turkey Tail Mushroom</Link>
                                <span className="block text-[10px] text-slate-500 font-normal">health product</span>
                            </div>
                            <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                <Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Cordyceps Mushroom</Link>
                                <span className="block text-[10px] text-slate-500 font-normal">premium medicinal</span>
                            </div>
                        </div>
                    </div>

                    {/* Training Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Mushroom Training (ਸਿਖਲਾਈ)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2"><Link to="/training" className="hover:text-emerald-500 transition-colors">Online Mushroom Training</Link></h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 mb-4">
                                    ਨਿਵੇਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ, ਬਹੁਤ ਸਾਰੇ ਕਿਸਾਨ ਪੂਰੀ cultivation process ਸਿੱਖਣਾ ਪਸੰਦ ਕਰਦੇ ਹਨ। Training ਵਿੱਚ ਸ਼ਾਮਲ ਹੈ: Mushroom Cultivation, Spawn Management, Crop Management, Harvesting, Packaging, Marketing, Business Planning. Punjabi ਅਤੇ Hindi ਦੋਵਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ support ਮੌਜੂਦ ਹੈ, ਤਾਂ ਜੋ ਘਰ ਬੈਠੇ ਹੀ ਸਿਖਲਾਈ ਲਈ ਜਾ ਸਕੇ।
                                </p>
                                <Link to="/training" className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1">
                                    Explore Course Details <ArrowRight size={14} />
                                </Link>
                            </div>
                            <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2"><Link to="/training" className="hover:text-emerald-500 transition-colors">Offline Mushroom Training</Link></h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 mb-4">
                                    Practical sessions ਵਿੱਚ ਸ਼ਾਮਲ ਹੈ: Live Demonstrations, Bed Preparation, Spawn Handling, Harvesting, Farm Management. Ranjit Avenue, Majitha Road, Chheharta ਅਤੇ Batala Road ਦੇ ਲੋਕ hands-on experience ਲਈ offline training ਨੂੰ ਤਰਜੀਹ ਦਿੰਦੇ ਹਨ, ਜਿਸ ਨਾਲ beginner mistakes ਘੱਟ ਹੁੰਦੀਆਂ ਹਨ।
                                </p>
                                <Link to="/training" className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1">
                                    View Schedule <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Setup and Spawn Section */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold dark:text-white text-slate-900"><Link to="/articles/turnkey-commercial-setup" className="hover:text-emerald-500 transition-colors">Mushroom Farm Setup</Link></h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    ਇੱਕ ਸਫਲ <Link to="/articles/turnkey-commercial-setup" className="text-emerald-500 hover:underline font-semibold">Mushroom Farm Setup</Link> ਲਈ ਆਮ ਤੌਰ 'ਤੇ ਲੋੜ ਹੁੰਦੀ ਹੈ: Growing Room, Humidity Control, Ventilation, Storage Area, ਅਤੇ Quality Mushroom Spawn. Verka, Putlighar, Lawrence Road ਅਤੇ Mall Road ਵਿੱਚ site visit ਕਰਕੇ ਵੀ ਅਸੀਂ customized setup plan ਬਣਾ ਕੇ ਦਿੰਦੇ ਹਾਂ।
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold dark:text-white text-slate-900">Mushroom Spawn Supply</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    Reliable spawn cultivation ਦੀ ਸਫਲਤਾ ਲਈ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ factor ਹੈ। ਅਸੀਂ ਮੁਹੱਈਆ ਕਰਵਾਉਂਦੇ ਹਾਂ: Oyster Mushroom Spawn, Button Mushroom Spawn, Milky Mushroom Spawn. Amritsar, Ajnala, Tarn Taran, Attari, Jandiala Guru, Chogawan, Lopoke ਅਤੇ Verka Rural Belt ਤੱਕ pan-India delivery ਨਾਲ spawn ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sales & Services Section */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Commercial Mushroom Services
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1"><Link to="/contact" className="hover:text-emerald-500 transition-colors">Fresh Mushroom Sale</Link></h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Fresh mushrooms ਇਹਨਾਂ ਨੂੰ ਸਪਲਾਈ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ: Hotels, Restaurants, Dhabas, Retail Markets, Organic Stores. ਪੰਜਾਬ ਦੀ ਖਾਣ-ਪੀਣ ਦੀ ਸਨਅਤ, ਖਾਸ ਕਰਕੇ dhaba culture, ਮਜ਼ਬੂਤ ਮੰਗ ਪੈਦਾ ਕਰਦੀ ਹੈ。</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1"><Link to="/contact" className="hover:text-emerald-500 transition-colors">Dry Mushroom Business</Link></h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">ਬਹੁਤ ਸਾਰੇ growers ਇਸ ਵਿੱਚ ਵਿਸਥਾਰ ਕਰਦੇ ਹਨ: Dry Mushrooms, Mushroom Powder, Packaged Products, Functional Food Ingredients. Inka shelf life zyada hota hai aur market reach bhi badh jaata hai.</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1"><Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Medicinal Mushroom</Link> ਦੇ ਮੌਕੇ</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Wellness ਪ੍ਰਤੀ ਜਾਗਰੂਕਤਾ ਵਧਣ ਨਾਲ <Link to="/mushroom-types" className="hover:text-emerald-500 transition-colors">Lion's Mane, Reishi ਅਤੇ Cordyceps</Link> ਵਰਗੇ medicinal mushroom ਦੀ ਮੰਗ ਵਧ ਰਹੀ ਹੈ। ਇਹ premium price 'ਤੇ ਵਿਕਦੇ ਹਨ ਅਤੇ ਵਧੀਆ ਮੁਨਾਫ਼ਾ ਦਿੰਦੇ ਹਨ।</p>
                            </div>
                        </div>

                        <div className="space-y-4 mt-6">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1"><Link to="/book-consultant" className="hover:text-emerald-500 transition-colors">Mushroom Consultancy</Link></h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    Professional <Link to="/book-consultant" className="text-emerald-500 hover:underline font-semibold">consultancy</Link> ਮਦਦ ਕਰਦੀ ਹੈ: Farm Planning, Technical Guidance, Business Development, Market Expansion. Expert advice se business mistakes kaafi kam ho jaati hain.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1"><Link to="/articles/turnkey-commercial-setup" className="hover:text-emerald-500 transition-colors">Turnkey Mushroom Projects</Link></h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    ਵੱਡੇ investors ਲਈ ਅਸੀਂ <Link to="/articles/turnkey-commercial-setup" className="text-emerald-500 hover:underline font-semibold">turnkey project</Link> ਦਿੰਦੇ ਹਾਂ — ਇਸ ਵਿੱਚ farm design, infrastructure planning, equipment selection ਅਤੇ operational guidance ਸਭ ਸ਼ਾਮਲ ਹੈ।
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Business Plan & ROI Analysis</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    Mushroom business ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਉੱਦਮੀਆਂ ਨੂੰ ਵਿਚਾਰਨਾ ਚਾਹੀਦਾ ਹੈ: Investment Budget, Production Capacity, Market Demand, Operating Costs, Revenue Opportunities. Aapke scale ke hisaab se hum <Link to="/business-plan" className="text-emerald-500 hover:underline font-semibold">customized business plan</Link> aur project report banaa kar dete hain, jo bank loan ya subsidy application ke liye bhi use ho sakta hai.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1"><Link to="/subsidy" className="hover:text-emerald-500 transition-colors">Government Subsidy Opportunities</Link></h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    ਯੋਗ ਕਿਸਾਨ ਅਤੇ ਉੱਦਮੀ ਖੇਤੀਬਾੜੀ, food processing ਅਤੇ entrepreneurship support ਯੋਜਨਾਵਾਂ ਦਾ ਲਾਭ eligibility ਦੇ ਆਧਾਰ 'ਤੇ ਲੈ ਸਕਦੇ ਹਨ। ਸਹੀ ਯੋਜਨਾ ਪਛਾਣਨ ਅਤੇ documentation ਤਿਆਰ ਕਰਨ ਵਿੱਚ ਅਸੀਂ ਮਦਦ ਕਰਦੇ ਹਾਂ। <Link to="/subsidy" className="text-emerald-500 hover:underline font-semibold">Subsidy opportunities check karo.</Link>
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Marketing Support</h3>
                                <p className="text-sm dark:text-slate-300 text-slate-700">
                                    Marketing support ਵਿੱਚ ਸ਼ਾਮਲ ਹੈ: Restaurant Partnerships, Retail Distribution, Brand Building, Customer Acquisition, Online Marketing (WhatsApp, Instagram, Facebook). ਮਜ਼ਬੂਤ marketing ਨਾਲ repeat business ਬਣਦਾ ਹੈ।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Neighborhoods and Areas */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Amritsar ਦੇ ਮੁੱਖ ਇਲਾਕਿਆਂ ਵਿੱਚ Mushroom Farming
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Ranjit Avenue</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Ranjit Avenue ਦੇ ਰਿਹਾਇਸ਼ੀ ਇਲਾਕੇ ਵਿੱਚ ਘਰੇਲੂ mushroom units ਲੋਕਪ੍ਰਿਯ ਹੋ ਰਹੇ ਹਨ।</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Majitha Road</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Majitha Road ਦੇ ਵਪਾਰਕ ਇਲਾਕੇ ਵਿੱਚ hotels ਅਤੇ restaurants ਲਈ fresh mushroom supply ਦਾ ਵਧੀਆ ਮੌਕਾ ਹੈ।</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Chheharta</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">ਉਦਯੋਗਿਕ ਇਲਾਕਾ Chheharta ਵਿੱਚ ਮਿਹਨਤਕਸ਼ ਪਰਿਵਾਰਾਂ ਲਈ part-time mushroom farming ਵਧੀਆ ਵਿਕਲਪ ਬਣ ਰਿਹਾ ਹੈ।</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Batala Road</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Batala Road 'ਤੇ commercial scale mushroom unit ਸਥਾਪਿਤ ਕਰਨ ਲਈ ਢੁਕਵੀਂ ਜਗ੍ਹਾ ਉਪਲਬਧ ਹੈ।</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Verka</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Verka ਦੇ ਡੇਅਰੀ ਅਤੇ ਖੇਤੀ ਪ੍ਰਧਾਨ ਇਲਾਕੇ ਵਿੱਚ mushroom farming ਨੂੰ ਮੌਜੂਦਾ ਖੇਤੀ ਨਾਲ ਜੋੜਨਾ ਸੌਖਾ ਹੈ।</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Putlighar</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Putlighar ਦੇ ਵਪਾਰਕ ਇਲਾਕੇ ਤੋਂ fresh ਅਤੇ dry mushroom ਦੀ distribution ਸੌਖੀ ਹੁੰਦੀ ਹੈ।</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Lawrence Road</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Lawrence Road ਦੇ premium ਇਲਾਕੇ ਵਿੱਚ organic ਅਤੇ medicinal mushroom ਦੀ ਮੰਗ ਵੱਧ ਹੈ।</p>
                            </div>
                            <div className="glass p-5 rounded-2xl border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mushroom Farming in Mall Road</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 font-medium">Mall Road ਤੋਂ ਸ਼ਹਿਰ ਭਰ ਵਿੱਚ mushroom marketing ਅਤੇ networking ਲਈ ਵਧੀਆ connectivity ਮਿਲਦੀ ਹੈ।</p>
                            </div>
                        </div>
                    </div>

                    {/* Nearby Regions */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            Amritsar ਦੇ ਆਲੇ-ਦੁਆਲੇ ਦੇ ਪਿੰਡਾਂ ਅਤੇ ਕਸਬਿਆਂ ਵਿੱਚ Mushroom Farming
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Training in Ajnala</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Ajnala ਦੇ ਖੇਤੀ ਪ੍ਰਧਾਨ ਇਲਾਕੇ ਦੇ ਕਿਸਾਨ ਹੁਣ ਕਣਕ-ਝੋਨੇ ਦੇ ਨਾਲ mushroom cultivation ਵੀ ਅਪਣਾ ਰਹੇ ਹਨ।</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Tarn Taran</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Tarn Taran ਦੇ ਪਿੰਡਾਂ ਵਿੱਚ ਛੋਟੇ ਕਿਸਾਨ ਘੱਟ ਜਗ੍ਹਾ ਵਿੱਚ ਵੱਧ ਆਮਦਨ ਦੇਣ ਵਾਲੀ mushroom farming ਵੱਲ ਖਿੱਚੇ ਜਾ ਰਹੇ ਹਨ।</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Attari</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">ਸਰਹੱਦੀ ਇਲਾਕਾ Attari ਵਿੱਚ ਸਥਾਨਕ ਮੰਡੀ ਅਤੇ ਸੈਲਾਨੀ ਆਵਾਜਾਈ ਦੋਵਾਂ ਦਾ ਫਾਇਦਾ ਲੈ ਕੇ mushroom business ਸ਼ੁਰੂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Jandiala Guru</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Jandiala Guru ਦੇ ਕਿਸਾਨ ਪਰਿਵਾਰ ਹੁਣ spawn ਅਤੇ training ਸਹੂਲਤਾਂ ਦਾ ਲਾਭ ਲੈ ਰਹੇ ਹਨ।</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Chogawan Region</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Chogawan ਇਲਾਕੇ ਦੀ ਨਮੀ ਵਾਲੀ ਜਲਵਾਯੂ mushroom cultivation ਲਈ ਕੁਦਰਤੀ ਤੌਰ 'ਤੇ ਸਹਾਇਕ ਹੈ।</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Lopoke Region</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Lopoke ਦੇ ਕਿਸਾਨ group farming ਅਤੇ bulk spawn ਖਰੀਦ ਵੱਲ ਵਧ ਰਹੇ ਹਨ।</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Verka Rural Belt</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600">Verka Rural Belt ਵਿੱਚ ਡੇਅਰੀ ਦੇ ਨਾਲ mushroom farming ਜੋੜ ਕੇ ਕਿਸਾਨ ਦੋਹਰੀ ਆਮਦਨ ਕਮਾ ਰਹੇ ਹਨ।</p>
                            </div>
                            <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> Mushroom Farming in Ajnala Villages</h3>
                                <p className="text-xs dark:text-slate-400 text-slate-600 font-medium">Ajnala ਦੇ ਪਿੰਡਾਂ ਵਿੱਚ FPO ਦੇ ਜ਼ਰੀਏ collective mushroom farming ਦੇ ਮੌਕੇ ਵੀ ਵਧ ਰਹੇ ਹਨ।</p>
                            </div>
                        </div>
                    </div>

                    {/* Audiences Segment */}
                    <div className="space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4">
                            ਕਿਸਾਨਾਂ, ਵਿਦਿਆਰਥੀਆਂ, ਔਰਤਾਂ ਅਤੇ Startups ਲਈ ਮੌਕੇ
                        </h2>
                        <ul className="space-y-2.5 pl-0 list-none">
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>ਕਿਸਾਨਾਂ ਲਈ</strong> — ਕਣਕ-ਝੋਨੇ ਦੀ ਖੇਤੀ ਨਾਲ ਵਾਧੂ ਆਮਦਨ</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>ਵਿਦਿਆਰਥੀਆਂ ਲਈ</strong> — ਘੱਟ ਨਿਵੇਸ਼ ਵਿੱਚ part-time ਕਾਰੋਬਾਰ</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>ਔਰਤਾਂ ਲਈ</strong> — ਘਰ ਬੈਠੇ self-employment</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>Startups ਲਈ</strong> — scalable business model, quick ROI</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="dark:text-slate-300 text-slate-700 text-sm"><strong>FPO ਲਈ</strong> — group farming, bulk spawn ਖਰੀਦ, collective marketing</span></li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="p-6 md:p-8 rounded-[2rem] dark:bg-emerald-950/20 bg-emerald-50/50 border border-emerald-500/10 space-y-4">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Kyun Chunein Organic Mushrooms Farm?</h3>
                        <ul className="space-y-2.5 pl-0 list-none">
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Jabalpur base se pura India mein spawn delivery ka experience</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Punjab ke local farming culture aur mandi system ko samajhne wali team</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Online aur offline dono training options</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Complete farm setup se leke dhaba/restaurant marketing tak ka support</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">Transparent business plan aur ROI guidance</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" /> <span className="text-sm dark:text-slate-300 text-slate-700">WhatsApp par direct support</span></li>
                        </ul>
                    </div>

                    {/* FAQ section */}
                    <div className="space-y-6 pt-6 border-t dark:border-white/10 border-black/10">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
                            <HelpCircle className="text-emerald-500" /> FAQs — ਅੰਮ੍ਰਿਤਸਰ Mushroom Farming ਸੰਬੰਧੀ ਸਵਾਲ-ਜਵਾਬ
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    q: "1. ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ mushroom farming ਦਾ ਖਰਚ ਕਿੰਨਾ ਹੈ?",
                                    a: "Scale ਅਨੁਸਾਰ ਵੱਖ-ਵੱਖ ਹੁੰਦਾ ਹੈ — ਘਰੇਲੂ ਛੋਟੀ unit ਲਈ ₹10,000-₹25,000 ਤੋਂ ਸ਼ੁਰੂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ, commercial scale ਲਈ ਵੱਧ ਨਿਵੇਸ਼ ਲੋੜੀਂਦਾ ਹੈ।"
                                },
                                {
                                    q: "2. Kitna profit ho sakta hai?",
                                    a: "Sahi management aur consistent dhaba/hotel demand ke saath monthly accha margin possible hai."
                                },
                                {
                                    q: <>3. Mushroom spawn ਕਿੱਥੋਂ ਮਿਲੇਗਾ?</>,
                                    a: "ਸਾਡੇ ਵੱਲੋਂ ਪੂਰੇ Punjab ਅਤੇ pan-India delivery ਨਾਲ spawn ਖਰੀਦਿਆ ਜਾ ਸਕਦਾ ਹੈ।"
                                },
                                {
                                    q: <>4. <Link to="/training" className="hover:text-emerald-500 transition-colors">Training</Link> kaise join karein?</>,
                                    a: "WhatsApp ke through contact karke online ya offline training ke liye registration kiya ja sakta hai."
                                },
                                {
                                    q: <>5. <Link to="/training" className="hover:text-emerald-500 transition-colors">Online training</Link> ਉਪਲਬਧ ਹੈ?</>,
                                    a: "ਹਾਂ, Punjabi ਅਤੇ Hindi ਦੋਵਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ support ਨਾਲ ਪੂਰੀ online training ਉਪਲਬਧ ਹੈ।"
                                },
                                {
                                    q: <>6. Amritsar ਵਿੱਚ <Link to="/training" className="hover:text-emerald-500 transition-colors">offline training</Link> ਮਿਲੇਗੀ?</>,
                                    a: "ਹਾਂ, Amritsar ਵਿੱਚ practical hands-on offline training ਦਾ ਪ੍ਰਬੰਧ ਹੈ।"
                                },
                                {
                                    q: "7. ਕਿੰਨੀ ਜਗ੍ਹਾ ਚਾਹੀਦੀ ਹੈ?",
                                    a: "ਛੋਟੇ ਪੱਧਰ ਲਈ 100-200 sq ft ਕਾਫੀ ਹੈ, commercial ਲਈ ਵੱਧ ਜਗ੍ਹਾ ਚਾਹੀਦੀ ਹੈ।"
                                },
                                {
                                    q: "8. ਕੀ ਔਰਤਾਂ mushroom farming ਸ਼ੁਰੂ ਕਰ ਸਕਦੀਆਂ ਹਨ?",
                                    a: "ਬਿਲਕੁਲ, ਘਰ ਬੈਠੇ ਔਰਤਾਂ ਆਸਾਨੀ ਨਾਲ ਇਹ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰ ਸਕਦੀਆਂ ਹਨ।"
                                },
                                {
                                    q: "9. Students bhi shuru kar sakte hain?",
                                    a: "Bilkul, kam investment aur time mein students ke liye bhi yeh accha option hai."
                                },
                                {
                                    q: <>10. <Link to="/subsidy" className="hover:text-emerald-500 transition-colors">Government subsidy</Link> ਉਪਲਬਧ ਹੈ?</>,
                                    a: "Eligibility criteria ਅਨੁਸਾਰ ਕੁਝ ਯੋਜਨਾਵਾਂ ਰਾਹੀਂ ਮਦਦ ਮਿਲ ਸਕਦੀ ਹੈ, ਅਸੀਂ guidance ਦਿੰਦੇ ਹਾਂ।"
                                },
                                {
                                    q: "11. ਕਿਹੜੀ mushroom variety ਸਭ ਤੋਂ ਵਧੀਆ ਹੈ?",
                                    a: <><Link to="/mushroom-types" className="text-emerald-500 hover:underline">Oyster mushroom</Link> beginners ਲਈ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਸਭ ਤੋਂ ਸੌਖਾ ਹੈ।</>
                                },
                                {
                                    q: "12. Mushroom ko dhabo aur restaurants tak kaise pahunchayein?",
                                    a: "Direct partnerships, consistent quality aur reliable delivery schedule ke through — hum yeh setup karne mein madad karte hain."
                                },
                                {
                                    q: <>13. ਕੀ ਤੁਸੀਂ <Link to="/book-consultant" className="hover:text-emerald-500 transition-colors">consultancy</Link> ਦਿੰਦੇ ਹੋ?</>,
                                    a: "ਹਾਂ, production ਤੋਂ marketing ਤੱਕ ਪੂਰੀ consultancy ਉਪਲਬਧ ਹੈ।"
                                },
                                {
                                    q: <>14. <Link to="/turnkey-projects" className="hover:text-emerald-500 transition-colors">Turnkey project</Link> bhi milta hai?</>,
                                    a: "Ha, bade investors ke liye complete turnkey mushroom project setup diya jata hai."
                                },
                                {
                                    q: "15. Marketing support ਮਿਲੇਗਾ?",
                                    a: "ਹਾਂ, packaging, branding ਅਤੇ dhaba/hotel connection ਵਿੱਚ ਪੂਰਾ support ਮਿਲਦਾ ਹੈ।"
                                },
                                {
                                    q: "16. ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਕਿਹੜੇ ਇਲਾਕਿਆਂ ਵਿੱਚ ਸੇਵਾ ਉਪਲਬਧ ਹੈ?",
                                    a: "Ranjit Avenue, Majitha Road, Chheharta, Batala Road, Verka, Putlighar, Lawrence Road, Mall Road ਅਤੇ ਆਲੇ-ਦੁਆਲੇ ਦੇ ਸਾਰੇ ਇਲਾਕਿਆਂ ਵਿੱਚ।"
                                },
                                {
                                    q: "17. Ajnala ya Tarn Taran mein bhi service milegi?",
                                    a: "Ha, Ajnala, Tarn Taran, Attari, Jandiala Guru samet nearby sabhi areas cover kiye jaate hain."
                                },
                                {
                                    q: "18. Dry mushroom ਦੀ shelf life ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?",
                                    a: "ਸਹੀ storage ਨਾਲ dry mushroom ਮਹੀਨਿਆਂ ਤੱਕ ਵਧੀਆ quality ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ।"
                                },
                                {
                                    q: "19. Kya kanak-jhone ke saath mushroom farming combine ki ja sakti hai?",
                                    a: "Bilkul, bahut saare farmers apni existing kheti ke saath ek shed mein mushroom cultivation shuru karke additional income kama rahe hain."
                                },
                                {
                                    q: <>20. <Link to="/business-plan" className="hover:text-emerald-500 transition-colors">Business plan</Link> ਕਿਵੇਂ ਮਿਲੇਗਾ?</>,
                                    a: "ਤੁਹਾਡੇ scale ਅਨੁਸਾਰ customized project report ਅਤੇ ROI analysis ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।"
                                },
                                {
                                    q: <>21. <Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link> ਕਿਵੇਂ ਕਰੀਏ?</>,
                                    a: "WhatsApp ਰਾਹੀਂ ਸਿੱਧਾ ਸੰਪਰਕ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ, ਜਿਸਦਾ response ਸਭ ਤੋਂ ਤੇਜ਼ ਹੁੰਦਾ ਹੈ।"
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
                            ਅੰਮ੍ਰਿਤਸਰ ਜਾਂ ਆਸ-ਪਾਸ ਮਸ਼ਰੂਮ ਬਿਜ਼ਨੈੱਸ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?
                        </h3>
                        <p className="text-sm dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
                            ਅੱਜ ਹੀ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ ਅਤੇ training, premium spawn, farm setup, ਅਤੇ marketing support ਪ੍ਰਾਪਤ ਕਰੋ।
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <a 
                                href="https://wa.me/919203544140"
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

export default ArticleAmritsarTraining;
