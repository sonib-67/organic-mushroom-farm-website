import React, { useEffect } from 'react';
import { Phone, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleTamilTrainingGuide = ({ metaDesc }: { metaDesc?: string }) => {
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
                title="காளான் விவசாயம் தமிழில் | கற்றுக்கொண்டு லாபம் பெறுங்கள்" 
                description={metaDesc || "காளான் சாகுபடி எப்படி தொடங்குவது, என்ன பயிற்சி தேவை, மற்றும் காளான் பண்ணை அமைப்பு (Mushroom Setup) செய்வதற்கான படிப்படியான வழிகாட்டி."}
                keywords="காளான் சாகுபடி, காளான் பயிற்சி மையம், காளான் பண்ணை அமைப்பு, Mushroom Farming, Mushroom Setup, Mushroom Training, காளான் சாகுபடி மானியம்"
            />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap pb-2">
                    <Link to="/" className="hover:text-primary-start transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/blog" className="hover:text-primary-start transition-colors">Blog</Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white">காளான் சாகுபடி பயிற்சி</span>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-start/10 blur-[100px] rounded-full pointer-events-none" />

                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                        காளான் விவசாயம் தமிழில் | கற்றுக்கொண்டு லாபம் பெறுங்கள்
                    </h1>
                    
                    <div className="flex items-center gap-4 mb-8 text-sm text-slate-600 dark:text-slate-400 font-medium border-b border-black/5 dark:border-white/5 pb-8">
                        <span>எழுதியவர்: Tanish Soni</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                        <span>இணை நிறுவனர்: Dwarka Prasad</span>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate max-w-none">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">அறிமுகம்</h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            இன்றைய வேளாண் உலகில், <strong><Link to="/" className="text-primary-start hover:underline">காளான் சாகுபடி</Link></strong> (Mushroom Farming) என்பது மிகவும் லாபகரமான மற்றும் குறைந்த முதலீட்டில் தொடரக்கூடிய ஒரு தொழிலாக மாறி வருகிறது. குறிப்பாக இளைஞர்கள் மற்றும் விவசாயிகள் இடையே <strong>காளான் பயிற்சி மையம்</strong> தேடும் போக்கு நாளுக்கு நாள் அதிகரித்து வருகிறது. இந்த வலைப்பதிவில், காளான் சாகுபடி எப்படி தொடங்குவது, என்ன பயிற்சி தேவை, மற்றும் <strong><Link to="/turnkey-projects" className="text-primary-start hover:underline">காளான் பண்ணை அமைப்பு</Link></strong> (Mushroom Setup) செய்வதற்கான படிப்படியான வழிமுறைகளை விரிவாக பார்க்கலாம்.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                            இந்த கட்டுரையை Tanish Soni தலைமையிலான குழு தயார் செய்துள்ளது. இதற்கு Dwarka Prasad இணை நிறுவனராக இருந்து, தொழில்நுட்ப ஆலோசனைகளை வழங்கியுள்ளார்.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">காளான் சாகுபடி ஏன் லாபகரமான தொழில்?</h2>
                        <ul className="space-y-4 my-6 list-none pl-0">
                            {[
                                { title: "குறைந்த முதலீடு", desc: "வீட்டிலேயே சிறிய அறையில் தொடங்கலாம்" },
                                { title: "அதிக லாபம்", desc: "சந்தையில் காளான் விலை நிலையாக அதிகமாக இருக்கும்" },
                                { title: "குறைந்த நேரம்", desc: "25-30 நாட்களில் முதல் அறுவடை கிடைக்கும்" },
                                { title: "ஆரோக்கிய தேவை அதிகரிப்பு", desc: "ஆயிஸ்டர் காளான், பட்டன் காளான் போன்றவற்றுக்கு நகர்ப்புற சந்தையில் நல்ல தேவை உள்ளது" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-brand-green" />
                                    </div>
                                    <div>
                                        <strong className="text-slate-900 dark:text-white block mb-1">{item.title}:</strong>
                                        <span className="text-slate-700 dark:text-slate-300">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">காளான் பயிற்சி (Mushroom Training) என்றால் என்ன?</h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            பலரும் காளான் சாகுபடியை தொடங்குவதற்கு முன், சரியான <strong><Link to="/training" className="text-primary-start hover:underline">மஷ்ரூம் பயிற்சி</Link></strong> பெறாமல் தொடங்கி நஷ்டம் அடைவதை பார்த்திருக்கிறோம். எனவே, தொழில்முறையான பயிற்சி பெறுவது மிகவும் அவசியம். எங்கள் பயிற்சியில் அடங்கியவை:
                        </p>
                        
                        <ol className="space-y-4 my-6 list-none pl-0 counter-reset-list">
                            {[
                                "ஸ்போன் தயாரிப்பு (Mushroom Spawn Preparation) – சரியான தரமான ஸ்போன் தேர்ந்தெடுப்பது எப்படி",
                                "சப்ஸ்ட்ரேட் தயாரிப்பு – வைக்கோல், தானிய தவிடு போன்றவற்றை பயன்படுத்தி ஊடகம் தயாரித்தல்",
                                "வெப்பநிலை மற்றும் ஈரப்பதம் கட்டுப்பாடு – காளான் வளர்ச்சிக்கு தேவையான சூழல் அமைத்தல்",
                                "நோய் மற்றும் பூச்சி கட்டுப்பாடு – இயற்கை முறையில் பாதுகாப்பு வழிமுறைகள்",
                                "அறுவடை மற்றும் பேக்கிங் – சந்தைக்கு தயார் செய்யும் முறை",
                                "மார்க்கெட்டிங் மற்றும் விற்பனை உத்திகள் – உள்ளூர் மற்றும் ஆன்லைன் சந்தைப்படுத்தல்"
                            ].map((text, idx) => (
                                <li key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary-start/10 text-primary-start flex items-center justify-center font-bold flex-shrink-0">
                                        {idx + 1}
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300">{text}</span>
                                </li>
                            ))}
                        </ol>

                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-6">
                            Dwarka Prasad அவர்களின் வழிகாட்டுதலின் கீழ், இந்த பயிற்சி நடைமுறை அனுபவத்துடன் வழங்கப்படுகிறது, இதனால் புதிதாக தொடங்குபவர்களும் எளிதாக புரிந்துகொள்ள முடியும்.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">காளான் பண்ணை அமைப்பு (Mushroom Setup) – படிப்படியான வழிமுறை</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1. இடம் தேர்வு</h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    காளான் வளர்ப்பதற்கு நேரடி சூரிய ஒளி படாத, குளிர்ச்சியான மற்றும் ஈரப்பதம் நிறைந்த அறை தேவை. வீட்டின் ஒரு அறை, கொட்டகை அல்லது சிறப்பாக கட்டப்பட்ட <strong>மஷ்ரூம் ஷெட்</strong> இதற்கு ஏற்றது.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2. தேவையான உபகரணங்கள்</h3>
                                <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                                    <li>பாலிதீன் பைகள்</li>
                                    <li>ஆவி மூலம் அணுநீக்கம் செய்யும் கருவி (Steam Sterilizer)</li>
                                    <li>ஈரப்பத அளவீட்டு கருவி (Humidity Meter)</li>
                                    <li>ரேக்குகள் (Racks) மற்றும் தட்டுகள்</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">3. சப்ஸ்ட்ரேட் தயாரிப்பு</h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    வைக்கோலை சரியாக நறுக்கி, தண்ணீரில் ஊற வைத்து, பின் அணுநீக்கம் செய்ய வேண்டும். இது காளான் வளர்ச்சிக்கு அடிப்படை ஊடகமாக செயல்படும்.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">4. ஸ்போன் விதைத்தல்</h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    தயார் செய்யப்பட்ட சப்ஸ்ட்ரேட்டில் தரமான <strong><Link to="/spawn-seeds" className="text-primary-start hover:underline">காளான் ஸ்போனை</Link></strong> சரியான விகிதத்தில் கலந்து பைகளில் அடைக்க வேண்டும்.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">5. இன்குபேஷன் மற்றும் பராமரிப்பு</h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    இருண்ட, குளிர்ச்சியான இடத்தில் 15-20 நாட்கள் வைத்து, பூஞ்சை முழுவதும் பரவும் வரை காத்திருக்க வேண்டும். பின் ஒளி மற்றும் காற்றோட்டம் கொடுத்து காளான் வளர வைக்க வேண்டும்.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4">அரசு உதவி மற்றும் மானியங்கள்</h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            பல மாநிலங்களில் <strong><Link to="/subsidy" className="text-primary-start hover:underline">காளான் சாகுபடி மானியம்</Link></strong> (Mushroom Farming Subsidy) கிடைக்கிறது. வேளாண் துறை மற்றும் கிராமப்புற வளர்ச்சி திட்டங்கள் மூலம் புதிதாக தொடங்குபவர்களுக்கு நிதி உதவி மற்றும் பயிற்சி இலவசமாக அல்லது குறைந்த கட்டணத்தில் வழங்கப்படுகிறது.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">முடிவுரை</h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            <strong><Link to="/training" className="text-primary-start hover:underline">காளான் சாகுபடி பயிற்சி</Link></strong> மற்றும் <strong><Link to="/turnkey-projects" className="text-primary-start hover:underline">காளான் பண்ணை அமைப்பு</Link></strong> ஆகியவை சரியான வழிகாட்டுதலுடன் செய்யப்பட்டால், குறைந்த முதலீட்டில் நல்ல வருமானம் ஈட்டும் தொழிலாக மாறும். Tanish Soni மற்றும் Dwarka Prasad தலைமையிலான எங்கள் குழு, ஆரம்பநிலை முதல் தொழில்முறை மட்டம் வரை முழுமையான பயிற்சி மற்றும் ஆலோசனை வழங்குகிறது.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                            நீங்களும் காளான் சாகுபடியில் உங்கள் தொழிலை தொடங்க விரும்பினால், சரியான பயிற்சி பெற்று, திட்டமிட்டு தொடங்குங்கள். இது உங்கள் எதிர்காலத்திற்கு ஒரு நல்ல முதலீடாக அமையும்.
                        </p>

                        <div className="mt-8 p-4 bg-slate-100 dark:bg-white/5 rounded-2xl italic text-sm text-slate-600 dark:text-slate-400">
                            *இந்த கட்டுரை தகவல் நோக்கத்திற்காக மட்டுமே வழங்கப்படுகிறது. தொழில் தொடங்கும் முன் உள்ளூர் நிபுணர்களை அணுகவும்.*
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 border-t border-black/5 dark:border-white/5 pt-8">
                        <Link 
                            to="/training" 
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                        >
                            <BookOpen className="w-5 h-5" />
                            பயிற்சியில் சேர
                        </Link>
                        <Link 
                            to="/contact" 
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-transparent border border-black/10 dark:border-white/20 text-slate-900 dark:text-white font-bold tracking-wide transition-all hover:bg-transparent dark:hover:bg-white/5 flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            தொடர்பு கொள்ள
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ArticleTamilTrainingGuide;
