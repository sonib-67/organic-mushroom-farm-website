import React, { useEffect } from 'react';
import { Phone, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleKolkataTraining = () => {
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
                title="Kolkata Mushroom Farming: Start Your Profitable Agribusiness in West Bengal" 
                description="Start Your Profitable Agribusiness Today! Premium mushroom farming training, spawn supply and commercial setup in Kolkata, West Bengal."
                keywords="Mushroom cultivation in West Bengal, Oyester mushroom farming profit, Mushroom spawn price near me, mushroom training Kolkata"
            />
            
            <article className="max-w-4xl mx-auto px-4 prose prose-invert">
                <div className="glass p-8 md:p-12 rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 leading-tight mb-4">
                            Kolkata Mushroom Farming: Start Your Profitable Agribusiness in West Bengal
                        </h1>
                    </div>

                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                        কলকাতা এবং তার পার্শ্ববর্তী অঞ্চলে বাণিজ্যিক উপায়ে মাশরুম চাষ (<Link to="/" className="text-primary-start hover:underline">Mushroom Farming</Link> in Kolkata) বর্তমানে অন্যতম লাভজনক ও দ্রুত বর্ধনশীল একটি ব্যবসা হয়ে উঠেছে। কম পুঁজি, সীমিত জায়গা এবং মাত্র কয়েক সপ্তাহের পরিশ্রমে মোটা টাকা আয় করার সুযোগ থাকায় আজ বহু কৃষক, শিক্ষার্থী, গৃহিণী, স্বনির্ভর গোষ্ঠী (SHG) এবং নতুন উদ্যোক্তারা এই ব্যবসার দিকে ঝুঁকছেন।
                    </p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                        আজকের দিনে মানুষ স্বাস্থ্য সচেতন। অর্গানিক খাবার এবং ওষুধি মাশরুমের (Medicinal Mushrooms) চাহিদা বাজারে আকাশছোঁয়া। আপনি যদি কলকাতা, সল্টলেক, নিউ টাউন বা পশ্চিমবঙ্গের যেকোনো প্রান্ত থেকে একটি সফল মাশরুম ব্যবসা শুরু করতে চান, তবে এই কমপ্লিট গাইডটি আপনার জন্য।
                    </p>

                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-10 mb-4 border-l-4 border-primary-start pl-4">
                        Why Mushroom Farming is Skyrocketing in Kolkata & West Bengal?
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                        পশ্চিমবঙ্গের আবহাওয়া মাশরুম চাষের জন্য অত্যন্ত অনুকূল। বিশেষ করে কলকাতার মতো মেগাসিটিতে এর একটি বিশাল রেডি মার্কেট রয়েছে। কলকাতার নামী-দামী হোটেল, রেস্তোরাঁ, সুপারমার্কেট, অর্গানিক স্টোর এবং হেলথ ফুড ব্র্যান্ডগুলিতে প্রতিদিন প্রচুর পরিমাণে মাশরুমের সাপ্লাই লাগে।
                    </p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4">
                        সঠিক টেকনিক ও গাইডেন্স থাকলে আপনি বছরের বারো মাসই বিভিন্ন ভ্যারাইটির মাশরুম উৎপাদন করতে পারবেন:
                    </p>
                    <ul className="list-none space-y-3 dark:text-slate-300 text-slate-700">
                        <li className="flex gap-3"><CheckCircle2 className="text-primary-start shrink-0" size={20} /> <span><strong>Commercial Cultivation:</strong> Oyster Mushroom (ঝিনুক মাশরুম), Button Mushroom (বোতাম মাশরুম), Milky Mushroom (দুধে মাশরুম)।</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-primary-start shrink-0" size={20} /> <span><strong>Premium & Medicinal Cultivation:</strong> Shiitake, Lion’s Mane, Reishi (গ্যানোডার্মা), Turkey Tail, এবং অত্যন্ত মূল্যবান Cordyceps Mushroom (কিড়া জড়িবুটি)।</span></li>
                    </ul>

                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-primary-start pl-4">
                        Our End-to-End Mushroom Business Services
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                        আমরা আপনাকে মাশরুম চাষের একদম শুরু থেকে শেষ পর্যন্ত (A to Z) সমস্ত ধরনের প্রফেশনাল সাপোর্ট দিয়ে থাকি। আমাদের মূল পরিষেবাগুলি নিচে আলোচনা করা হলো:
                    </p>

                    <div className="space-y-6">
                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">১. High-Yield Mushroom Spawn Sale</h3>
                            <p className="dark:text-slate-400 text-slate-600">যেকোনো সফল মাশরুম চাষের আসল চাবিকাঠি হলো উন্নত মানের বীজ বা স্পন। আমরা ল্যাব-টেস্টেড, রোগমুক্ত এবং উচ্চ ফলনশীল <strong>Mushroom Spawn Sale</strong> করি। আমাদের কাছে অত্যন্ত সাশ্রয়ী মূল্যে Oyster Mushroom Spawn, Button Mushroom Spawn এবং Milky Mushroom Spawn পেয়ে যাবেন, যা আপনার খামারে সর্বোচ্চ ফলন নিশ্চিত করবে।</p>
                        </div>
                        
                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">২. Smart Mushroom Farm Setup</h3>
                            <p className="dark:text-slate-400 text-slate-600">আপনি কি নিজের বাড়িতে ছোট করে শুরু করতে চান নাকি বড় কমার্শিয়াল প্রজেক্ট করতে চান? আমরা সমস্ত স্কেলের জন্য <Link to="/services" className="text-primary-start hover:underline">Mushroom Farm Setup</Link> করে থাকি। মাশরুমের ভালো ফলনের জন্য সঠিক ক্রমবর্ধমান ঘর (Growing Room), তাপমাত্রা নিয়ন্ত্রণ (Temperature Control), আর্দ্রতা বজায় রাখা (Humidity Management), এবং সঠিক বায়ু চলাচলের (Air Circulation) ব্যবস্থা আমরা বৈজ্ঞানিক পদ্ধতিতে সেটআপ করে দিই।</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">৩. Online Mushroom Training (বাড়িতে বসেই শিখুন)</h3>
                            <p className="dark:text-slate-400 text-slate-600">দূরত্ব বা সময়ের অভাব এখন আর বাধা নয়। আমাদের <Link to="/training" className="text-primary-start hover:underline">Online Mushroom Training</Link> প্রোগ্রামের মাধ্যমে আপনি ঘরে বসেই মাশরুম চাষের খুঁটিনাটি শিখতে পারবেন। এই কোর্সে সাবস্ট্রেট তৈরি (Substrate Preparation), স্পন রানিং, ক্রপ ম্যানেজমেন্ট, হার্ভেস্টিং এবং প্যাকেজিংয়ের লাইভ ও রেকর্ডেড সেশন করানো হয়।</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">৪. Practical Offline Mushroom Training</h3>
                            <p className="dark:text-slate-400 text-slate-600">যারা সরাসরি প্র্যাক্টিক্যাল দেখে কাজ শিখতে ভালোবাসেন, তাদের জন্য রয়েছে আমাদের <strong>Offline Mushroom Training</strong>। এখানে আপনি সরাসরি হ্যান্ডস-অন এক্সপেরিয়েন্স পাবেন। বেড তৈরি, লাইভ ডেমোনেস্ট্রেশন, রোগ বা পোকার আক্রমণ দমন (Disease Management) এবং কমার্শিয়াল প্রোডাকশন টেকনিক আমাদের এক্সপার্টরা সামনাসামনি শেখাবেন।</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">৫. Custom Business Plan & ROI Analysis</h3>
                            <p className="dark:text-slate-400 text-slate-600 mb-3">যেকোনো ব্যবসায় নামার আগে হিসাব-নিকাশ জরুরি। আমরা আপনাকে একটি প্রফেশনাল <strong>Business Plan & ROI</strong> রিপোর্ট তৈরি করে দিই। আপনার প্রাথমিক বিনিয়োগ (Initial Investment), রানিং খরচ (Operating Costs) এবং প্রতি মাসে কত টাকা নেট প্রফিট বা রিটার্ন অন ইনভেস্টমেন্ট (ROI) আসবে, তার নিখুঁত ব্লু-প্রিন্ট পেয়ে যাবেন।</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">৬. Government Subsidy Guidance</h3>
                            <p className="dark:text-slate-400 text-slate-600">ভারত ও পশ্চিমবঙ্গ সরকার কৃষকদের উৎসাহিত করতে মাশরুম চাষে দারুণ ভরতুকি দিয়ে থাকে। NHB (National Horticulture Board) বা অন্যান্য সরকারি প্রকল্পের অধীনে কীভাবে আপনি <Link to="/contact" className="text-primary-start hover:underline">Government Subsidy</Link> পেতে পারেন, তার সঠিক লোন প্রসেস ও ডকুমেন্টেশনের গাইডেন্স আমরা প্রদান করি।</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">৭. Comprehensive Mushroom Consultancy</h3>
                            <p className="dark:text-slate-400 text-slate-600">খামার তৈরি করার পর অনেক সময় চাষিরা ছোটখাটো সমস্যায় পড়েন (যেমন- ছত্রাকের আক্রমণ বা কম ফলন)। আমাদের <strong>Mushroom Consultancy</strong> সার্ভিসের মাধ্যমে আপনি অভিজ্ঞ কনসালট্যান্টদের সরাসরি টেকনিক্যাল গাইডেন্স এবং ফার্ম ম্যানেজমেন্ট সাপোর্ট পাবেন।</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">৮. Commercial Turnkey Projects</h3>
                            <p className="dark:text-slate-400 text-slate-600">যদি আপনি বড় স্কেলে বা ইন্ডাস্ট্রিয়াল লেভেলে অটোমেটেড মাশরুম প্ল্যান্ট তৈরি করতে চান, তবে আমাদের <Link to="/articles/turnkey-commercial-setup" className="text-primary-start hover:underline">Turnkey Projects</Link> সার্ভিস আপনার জন্য সেরা অপশন। ইনফ্রাস্ট্রাকচার প্ল্যানিং থেকে শুরু করে ল্যাব সেটআপ এবং সম্পূর্ণ প্রোডাকশন ইউনিট চালু করে দেওয়ার দায়িত্ব আমাদের।</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">৯. Fresh Mushroom Sale & B2B Supply</h3>
                            <p className="dark:text-slate-400 text-slate-600">আমরা স্থানীয় বাজার, পাইকারি সবজি মান্ডি, রেস্তোরাঁ ও সুপারশপগুলির সাথে সরাসরি যুক্ত। আপনি আমাদের মাধ্যমে হাই-কোয়ালিটি <strong>Fresh Mushroom Sale</strong> করতে পারেন অথবা আপনার উৎপাদিত ফ্রেশ মাশরুম সরাসরি আমাদের বিটুবি (B2B) নেটওয়ার্কে সাপ্লাই করতে পারেন।</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">১০. High-Profit Dry Mushroom Sale</h3>
                            <p className="dark:text-slate-400 text-slate-600">ফ্রেশ মাশরুমের সেলফ-লাইফ কম হওয়ায় অনেকেই ড্রাই মাশরুমের ব্যবসা পছন্দ করেন। <strong>Dry Mushroom Sale</strong> ব্যবসার সুবিধা হলো এর দীর্ঘস্থায়িত্ব, সহজ পরিবহন এবং প্রিমিয়াম প্রাইসিং। আমরা মাশরুম ড্রাইং প্রসেস এবং ড্রাই মাশরুম ও মাশরুম পাউডার মার্কেটিংয়ে সাহায্য করি।</p>
                        </div>

                        <div className="dark:bg-white/5 bg-black/5 p-6 rounded-2xl border dark:border-white/10 border-black/10">
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">১১. Dedicated Mushroom Marketing Support</h3>
                            <p className="dark:text-slate-400 text-slate-600">চাষ তো করলেন, কিন্তু বিক্রি করবেন কোথায়? এই চিন্তা দূর করতে আমরা দিচ্ছি <strong>Mushroom Marketing Support</strong>। লোকাল মার্কেট লিংকেজ তৈরি, রিটেল ডিস্ট্রিবিউশন নেটওয়ার্ক, হোটেল-রেস্তোরাঁ চেইনের সাথে টাই-আপ এবং ডিজিটাল ব্র্যান্ডিংয়ের মাধ্যমে আপনার প্রোডাক্ট সরাসরি সঠিক কাস্টমারের কাছে পৌঁছে দেওয়ার রাস্তা আমরা তৈরি করি।</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-12 mb-6 border-l-4 border-primary-start pl-4">
                        Areas We Cover: Kolkata City & All Nearby Villages (<Link to="/training" className="text-primary-start hover:underline">https://organicmushroomfarm.shop/training</Link>)
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                        আমরা কলকাতা শহরের প্রতিটি কোণায় এবং আশেপাশের গ্রামীণ অঞ্চলের চাষিদের কাছে আমাদের পরিষেবা পৌঁছে দিচ্ছি। 
                    </p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                        For more details, visit our <Link to="/training" className="text-primary-start hover:underline">Training section</Link>.
                    </p>

                    <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 mt-6">Major Urban Areas (কলকাতা ও পার্শ্ববর্তী শহর):</h3>
                    <ul className="list-none space-y-4 dark:text-slate-300 text-slate-700">
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Kolkata Central & North:</strong> Dum Dum (দমদম), Shyambazar, Airport Area, Belgharia, Sodepur (সোদপুর), Khardah, Madhyamgram (মধ্যমগ্রাম), Barasat (বারাসাত), Barrackpore.</span></li>
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Kolkata East & South:</strong> Salt Lake (সল্টলেক), New Town (নিউ টাউন), Rajarhat (রাজারহাট), Garia, Jadavpur, Tollygunge, Behala.</span></li>
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Howrah & Hooghly Belt:</strong> Howrah (হাওড়া), Bally (বালি), Liluah, Uttarpara, Dankuni, Shrirampur.</span></li>
                    </ul>

                    <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 mt-6">Nearby Rural & Village Clusters (আশেপাশের গ্রামাঞ্চল):</h3>
                    <p className="dark:text-slate-400 text-slate-600 mb-4">আমরা গ্রামীণ এলাকার স্বনির্ভর গোষ্ঠী ও কৃষকদের বিশেষভাবে সহায়তা করছি:</p>
                    <ul className="list-none space-y-4 dark:text-slate-300 text-slate-700">
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Rajarhat & Bhangar Region:</strong> Lauhati, Chinar Park outskirts, Bhangar Block I & II, Ghatakpukur, Beonta.</span></li>
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Haroa & Minakhan Belt:</strong> Haroa Region, Gopalpur, Kulti, Minakhan villages.</span></li>
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Barasat & Basirhat Region:</strong> Duttapukur, Deganga, Amdanga, Baduria, Basirhat Region (বসিরহাট ও সংলগ্ন গ্রামসমূহ), Swarupnagar, Harishpur.</span></li>
                        <li className="flex gap-3 items-start"><MapPin className="text-primary-start shrink-0 mt-1" size={18} /> <span><strong>Howrah Rural:</strong> Amta, Bagnan, Udaynarayanpur, Jagatballavpur.</span></li>
                    </ul>

                    <div className="bg-linear-to-r from-primary-start/20 to-primary-end/20 p-8 rounded-3xl mt-12 border border-primary-start/20">
                        <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Conclusion: Start Your Mushroom Journey Today!</h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4">
                            মাশরুম চাষ শুধু একটি চাষ নয়, এটি একটি অত্যন্ত লাভজনক আধুনিক এগ্রি-বিজনেস। সঠিক টেকনিক্যাল ট্রেনিং, উন্নত মানের বীজ (Spawn), এবং সঠিক মার্কেটিং সাপোর্ট থাকলে আপনি খুব কম সময়ে এই ব্যবসা থেকে স্বাবলম্বী হতে পারবেন।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            আপনি যদি আজই আপনার মাশরুম ব্যবসার যাত্রা শুরু করতে চান—তা সে <strong>Mushroom Farm Setup</strong> হোক, <strong>Online/Offline Training</strong> হোক, কিংবা <strong>Mushroom Spawn</strong> কেনা—আজই আমাদের সাথে যোগাযোগ করুন এবং পশ্চিমবঙ্গের এই দ্রুত বর্ধনশীল মাশরুম বিপ্লবের অংশ হয়ে উঠুন!
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

export default ArticleKolkataTraining;
