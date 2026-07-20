import React, { useEffect } from 'react';
import { Phone, ArrowRight, CheckCircle2, ChevronRight, Home, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleSiliguriTraining = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const siliguriSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Siliguri mein mushroom farming ka cost kitna hai?",
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
                        "text": "Haan, Bengali, Nepali aur Hindi teeno bhasha mein support ke saath complete online mushroom training available hai."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Mushroom spawn Siliguri mein kahan milega?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Organic Mushroom Farm se pan-India delivery ke saath Siliguri aur aas-paas ke sabhi areas mein spawn milta hai."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Kya Siliguri se mushroom North-East India mein export kiya ja sakta hai?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ha, Siliguri ke strategic location aur logistics network ki wajah se Sikkim, Assam aur nearby regional markets mein mushroom supply karna aasan hai."
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Organic Mushroom Farm",
            "image": "https://organicmushroomfarm.shop/logo.png",
            "url": "https://organicmushroomfarm.shop/mushroom-farming-siliguri-west-bengal",
            "areaServed": [
                "Siliguri", "Sevoke Road", "Pradhan Nagar", "Hakim Para", "Hill Cart Road",
                "Matigara", "Champasari", "Salugara", "Ashram Para", "Bagdogra",
                "Jalpaiguri", "Kurseong", "Islampur", "Naxalbari", "Gossaipur",
                "Hatighisa", "Phansidewa", "Fulbari", "Dabgram", "Bhaktinagar", "New Jalpaiguri"
            ],
            "description": "Mushroom farm setup, spawn supply, online aur offline training, fresh aur dry mushroom sale, consultancy aur turnkey mushroom projects in Siliguri, West Bengal.",
            "priceRange": "₹₹"
        },
        {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Mushroom Farming Training Siliguri",
            "description": "Online aur offline mushroom farming training covering spawn handling, cultivation, harvesting, packaging aur regional/export marketing.",
            "provider": {
                "@type": "Organization",
                "name": "Organic Mushroom Farm",
                "sameAs": "https://organicmushroomfarm.shop"
            }
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Colors */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <SEO 
                title="Siliguri Mushroom Farming, Training, Spawn & Setup | West Bengal Guide" 
                description="Mushroom farm setup, spawn supply, online aur offline training, fresh aur dry mushroom sale, consultancy aur turnkey mushroom projects in Siliguri, West Bengal."
                keywords="Mushroom cultivation in West Bengal, Mushroom farming in Siliguri, Mushroom spawn in Siliguri, mushroom training center in Siliguri, Sevoke Road, Pradhan Nagar"
                url="/cities/west-bengal/siliguri"
                schemas={siliguriSchemas}
            />
            
            <div className="max-w-4xl mx-auto px-4 mb-8">
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link to="/" className="hover:text-primary-start flex items-center gap-1 transition-colors">
                        <Home size={14} /> Home
                    </Link>
                    <ChevronRight size={14} />
                    <Link to="/states" className="hover:text-primary-start transition-colors">States</Link>
                    <ChevronRight size={14} />
                    <Link to="/states/west-bengal" className="hover:text-primary-start transition-colors">West Bengal</Link>
                    <ChevronRight size={14} />
                    <span className="font-semibold text-slate-900 dark:text-white">Siliguri</span>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 prose prose-invert">
                <div className="glass p-8 md:p-12 rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-start/10 text-primary-start text-xs font-bold uppercase tracking-wider mb-4 border border-primary-start/20">
                            <MapPin size={14} /> শিলিগুড়ি বিশেষ (Siliguri Special)
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 leading-tight mb-4">
                            শিলিগুড়িতে Mushroom Farming, Training, Spawn Supply এবং Consultancy Guide
                        </h1>
                        <h2 className="text-lg md:text-xl font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            শিলিগুড়িতে কমার্শিয়াল মাশরুম ব্যবসা শুরু করার সহজ গাইড
                        </h2>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-4">
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                            শিলিগুড়িকে বলা হয় <strong>&quot;Gateway to North-East India&quot;</strong> — কারণ এই শহর পশ্চিমবঙ্গকে সিকিম, আসাম, ভুটান এবং নেপালের সাথে সংযুক্ত করে। এই কৌশলগত অবস্থানের কারণে শিলিগুড়ি আজ একটি গুরুত্বপূর্ণ বাণিজ্যিক এবং লজিস্টিক্স হাব হয়ে উঠেছে। Sevoke Road, Pradhan Nagar, Hakim Para, Hill Cart Road, Matigara, Champasari, Salugara এবং Ashram Para-র মতো এলাকাগুলিতে এখন <strong>mushroom farming</strong> কেবল একটি চাষবাস নয়, বরং একটি export-quality business হিসেবে গড়ে উঠছে।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                            Mushroom entrepreneur-দের জন্য এর মানে হলো — একটি শহর থেকেই একাধিক আঞ্চলিক বাজারে প্রবেশাধিকার। Organic Mushroom Farm হিসেবে আমরা শিলিগুড়ি এবং আশেপাশের Bagdogra, Jalpaiguri, Kurseong, Islampur, Naxalbari, Phansidewa, Matigara এবং Fulbari অঞ্চলের কৃষক, ছাত্র এবং উদ্যোক্তাদের <strong>farm setup, spawn supply, online/offline training, fresh এবং dry mushroom sale, consultancy এবং turnkey project</strong> পরিষেবা প্রদান করছি।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-semibold">
                            Agar aap Siliguri ya North Bengal ke kisi bhi area se ho aur mushroom business ko regional aur cross-border level tak le jaana chahte ho, to yeh guide bilkul aapke liye likha gaya hai।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Why Siliguri */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            শিলিগুড়ি কেন মাশরুম উদ্যোক্তাদের জন্য আকর্ষণীয়?
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            শহরটি বেশ কিছু ব্যবসায়িক সুবিধা প্রদান করে:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li><strong>চমৎকার সড়ক সংযোগ</strong> — NH10, Hill Cart Road, Sevoke Road দিয়ে সহজ পরিবহন</li>
                            <li><strong>বড় পাইকারি বাজার</strong> — wholesale distribution-এর জন্য আদর্শ</li>
                            <li><strong>উত্তর-পূর্ব ভারতে প্রবেশাধিকার</strong> — সিকিম, আসাম পর্যন্ত সহজ সরবরাহ</li>
                            <li><strong>ক্রমবর্ধমান হসপিটালিটি শিল্প</strong> — Bagdogra বিমানবন্দর কেন্দ্রিক hotel-resort বৃদ্ধি</li>
                            <li><strong>পর্যটন খাত</strong> — Darjeeling, Kalimpong, Sikkim যাওয়ার পথে transit demand</li>
                            <li><strong>সম্প্রসারিত অর্গানিক খাদ্য বাজার</strong> — health-conscious শহুরে গ্রাহক</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-semibold">
                            এই সবকিছু মিলিয়ে fresh এবং value-added, দুই ধরনের mushroom business-এর জন্যই সুযোগ তৈরি করে।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Beyond local market */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            স্থানীয় বাজারের বাইরেও চিন্তা করুন
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            অনেক নতুন grower শুধু নিজের শহরের মধ্যেই বিক্রি করেন। কিন্তু শিলিগুড়ির উদ্যোক্তারা mushroom সরবরাহ করতে পারেন:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Hotels</li>
                            <li>Resorts</li>
                            <li>Supermarkets</li>
                            <li>Food Processing Companies</li>
                            <li>Wholesale Buyers</li>
                            <li>Nearby States (Sikkim, Assam, North Bengal জেলা)</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            স্থানীয় গ্রাহকের বাইরে গিয়ে ব্যবসা সম্প্রসারণ করলে দীর্ঘমেয়াদী growth অনেক শক্তিশালী হয়।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Commercial Varieties */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Commercial Mushroom Varieties (বোতাম মাশরুম, ঝিনুক মাশরুম এবং অন্যান্য)
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            আমাদের ট্রেনিং এবং বীজ সরবরাহে সমস্ত ধরনের প্রিমিয়াম এবং কমার্শিয়াল মাশরুম অন্তর্ভুক্ত রয়েছে:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li><strong>Oyster Mushroom (ঝিনুক মাশরুম)</strong> — চাষ করা সহজ, beginners ও commercial farming-এর জন্য উপযুক্ত।</li>
                            <li><strong>Button Mushroom (বোতাম মাশরুম)</strong> — ভারতের সবচেয়ে জনপ্রিয় এবং চাহিদাপূর্ণ ভোজ্য মাশরুম।</li>
                            <li><strong>Milky Mushroom (দুধে মাশরুম)</strong> — গরমের দিনে বাণিজ্যিক উৎপাদনের জন্য অত্যন্ত সাশ্রয়ী।</li>
                            <li><strong>Shiitake Mushroom</strong> — প্রিমিয়াম গুরমে ক্যাটাগরি, যার মার্কেট ভ্যালু অনেক বেশি।</li>
                            <li><strong>Lion&apos;s Mane Mushroom</strong> — ওয়েলনেস এবং ব্রেইন হেলথ মার্কেটে ক্রমবর্ধমান চাহিদা।</li>
                            <li><strong>Reishi Mushroom</strong> — ঔষধি মাশরুম ইন্ডাস্ট্রির একটি অত্যন্ত মূল্যবান অংশ।</li>
                            <li><strong>Turkey Tail Mushroom</strong> — ক্যান্সার প্রতিরোধক ও ইমিউনিটি বুস্টার হিসেবে ব্যবহৃত।</li>
                            <li><strong>Cordyceps Mushroom</strong> — অত্যন্ত প্রিমিয়াম এবং ভিআইপি ওষুধি মাশরুম ক্যাটাগরি।</li>
                        </ul>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Farm Setup */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Mushroom Farm Setup
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            একটি সফল Mushroom Farm Setup-এ সাধারণত থাকে:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Clean Production Room (জীবাণুমুক্ত ক্রমবর্ধমান ঘর)</li>
                            <li>Controlled Humidity (আর্দ্রতা নিয়ন্ত্রণ ব্যবস্থা)</li>
                            <li>Ventilation (সঠিক হাওয়া চলাচলের ফ্যান)</li>
                            <li>Storage Area (স্টোরেজ এলাকা)</li>
                            <li>Quality Spawn (উন্নত মানের বীজ)</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-semibold">
                            ভালো infrastructure উৎপাদনের মান স্থির রাখতে সাহায্য করে। Sevoke Road, Pradhan Nagar, Matigara এবং Champasari-তে site visit করেও আমরা customized setup plan তৈরি করে দিই।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Online Training */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Online Mushroom Training
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Online Mushroom Training শিখতে সাহায্য করে:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Mushroom Cultivation (বৈজ্ঞানিক চাষ পদ্ধতি)</li>
                            <li>Spawn Management (বীজ রক্ষণাবেক্ষণ)</li>
                            <li>Harvesting (সঠিক সময়ে মাশরুম তোলা)</li>
                            <li>Packaging (প্যাকেজিং ও প্রিজারভেশন)</li>
                            <li>Business Planning (ব্যবসায়িক খসড়া তৈরি)</li>
                            <li>Marketing (মার্কেটিং ও বিক্রয় কৌশল)</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Bengali, Nepali এবং Hindi — তিন ভাষাতেই support পাওয়া যায়, কারণ শিলিগুড়ি একটি বহু-ভাষিক শহর। বিনিয়োগের আগে শেখা production-এর ঝুঁকি অনেকটাই কমিয়ে দেয়।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Offline Training */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Offline Mushroom Training
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Practical training-এ থাকে:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Live Demonstrations (লাইভ চাষ প্রসেস)</li>
                            <li>Bed Preparation (মাশরুমের বেড তৈরি)</li>
                            <li>Spawn Handling (বীজের ব্যবহার ও মিক্সিং)</li>
                            <li>Harvesting Techniques (তোলার বৈজ্ঞানিক কৌশল)</li>
                            <li>Farm Operations (খামার পরিচালনা)</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-semibold">
                            Hakim Para, Hill Cart Road, Salugara এবং Ashram Para-র মানুষরা hands-on experience-এর জন্য offline training পছন্দ করেন, যা আত্মবিশ্বাস বাড়ায়।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Spawn Supply */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Mushroom Spawn Supply
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Reliable spawn সুস্থ উৎপাদনের জন্য অপরিহার্য। আমরা সরবরাহ করি:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Oyster Mushroom Spawn (ঝিনুক মাশরুম বীজ)</li>
                            <li>Button Mushroom Spawn (বোতাম মাশরুম বীজ)</li>
                            <li>Milky Mushroom Spawn (দুধে মাশরুম বীজ)</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            শিলিগুড়ি, Bagdogra, Jalpaiguri, Kurseong, Islampur, Naxalbari, Phansidewa, Matigara Region এবং Fulbari Rural Region পর্যন্ত pan-India delivery-সহ spawn পৌঁছে দেওয়া হয়।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Fresh Sale */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Fresh Mushroom Sale
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Fresh mushrooms সরবরাহ করা যেতে পারে:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Hotels and Restaurants</li>
                            <li>Supermarkets and Retailers</li>
                            <li>Organic Stores</li>
                            <li>Wholesale Markets (সবজি মান্ডি)</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            শহরের logistics network ব্যাপক distribution-কে সমর্থন করে — এমনকি সিকিম এবং আসামের কাছাকাছি বাজারেও।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Dry Mushroom */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Dry Mushroom Products
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            অনেক উদ্যোক্তা এগুলিও উৎপাদন করেন:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Dry Mushrooms (শুকনো মাশরুম)</li>
                            <li>Mushroom Powder (মাশরুম প্রোটিন পাউডার)</li>
                            <li>Premium Packaged Products (ভ্যালু অ্যাডেড আইটেম)</li>
                            <li>Functional Food Ingredients (হেলথ ড্রিংক সাবস্ট্রেট)</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-semibold">
                            Ei products revenue-r additional zariya toiri kore, biশেষ kore online এবং interstate selling-এর জন্য।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Medicinal */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Medicinal Mushroom-এর সুযোগ
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Wellness সম্পর্কে সচেতনতা বাড়ার সাথে সাথে Lion&apos;s Mane, Reishi এবং Cordyceps-এর মতো medicinal mushroom-এর চাহিদা বাড়ছে। এগুলো premium price-এ বিক্রি হয় এবং শিলিগুড়ির শিক্ষিত শহুরে গ্রাহকদের মধ্যে জনপ্রিয়তা দ্রুত বাড়ছে।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Consultancy */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Mushroom Consultancy
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Professional consultancy-তে থাকে:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Farm Planning (খামার পরিকল্পনা)</li>
                            <li>Technical Guidance (প্রযুক্তিগত সমাধান)</li>
                            <li>Business Expansion (ব্যবসা সম্প্রসারণ)</li>
                            <li>Market Development (মার্কেট লিংকেজ)</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-semibold">
                            Expert advice startup mistakes onek kome dey।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Turnkey */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Turnkey Mushroom Projects
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            বড় আকারের বিনিয়োগকারীদের জন্য আমরা <strong>turnkey project</strong> সেটআপ সুবিধা দিই — যাতে থাকে farm design, infrastructure planning, equipment guidance এবং operational systems। Turnkey solution project implementation-ke onek shohoj kore dey।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Business Plan */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Business Plan & ROI Analysis
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            বিনিয়োগের আগে উদ্যোক্তাদের মূল্যায়ন করা উচিত:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Production Capacity (উৎপাদন ক্ষমতা)</li>
                            <li>Market Demand (বাজারের চাহিদা)</li>
                            <li>Operating Costs (পরিচালন ব্যয়)</li>
                            <li>Customer Base (গ্রাহক শ্রেণী)</li>
                            <li>Revenue Potential (লাভের সম্ভাবনা)</li>
                        </ul>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Ekটি structured Mushroom Business Plan টেকসই বৃদ্ধিতে সাহায্য করে। Aapke scale অনুযায়ী আমরা customized business plan এবং project report তৈরি করে দিই, যা bank loan বা subsidy application-এও কাজে লাগে।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Government Subsidy */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Government Subsidy Opportunities
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            যোগ্য কৃষক এবং উদ্যোক্তারা বর্তমান agriculture এবং food-processing support scheme-এর সুবিধা eligibility অনুযায়ী পেতে পারেন। সঠিক scheme চিহ্নিত করতে এবং documentation তৈরিতে আমরা সাহায্য করি।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Marketing Support */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Mushroom Marketing Support
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            Marketing support-এ থাকে:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Wholesale Networks (পাইকারি বাজার সংযোগ)</li>
                            <li>Retail Branding (রিটেল ব্রান্ডিং এবং প্যাকেজিং)</li>
                            <li>Restaurant Partnerships (হোটেল-রেস্তোরাঁর সাথে টাই-আপ)</li>
                            <li>Online Promotion (অনলাইন ও সোশ্যাল মিডিয়া প্রোমোশন)</li>
                            <li>Customer Relationship Development (ক্রেতা সম্পর্ক বৃদ্ধি)</li>
                        </ul>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Area lists Siliguri */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            শিলিগুড়ির প্রধান এলাকাগুলিতে Mushroom Farming
                        </h3>

                        <div className="space-y-4 dark:text-slate-300 text-slate-700">
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Sevoke Road</h4>
                                <p className="text-sm">Sevoke Road-এর হোটেল এবং restaurant belt-এ fresh mushroom সরবরাহের ভালো সুযোগ রয়েছে।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Pradhan Nagar</h4>
                                <p className="text-sm">Pradhan Nagar-এর বহু-ভাষিক জনবসতিতে (Nepali, Bengali, Hindi) ঘরোয়া mushroom unit জনপ্রিয় হয়ে উঠছে।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Hakim Para</h4>
                                <p className="text-sm">বাণিজ্যিক এলাকা Hakim Para থেকে fresh এবং dry mushroom-এর distribution সহজ হয়।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Hill Cart Road</h4>
                                <p className="text-sm">Hill Cart Road-এর ব্যস্ত ট্রানজিট রুটে দার্জিলিং-যাত্রীদের জন্য mushroom-ভিত্তিক খাবারের চাহিদা তৈরি হয়।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Matigara</h4>
                                <p className="text-sm">বিমানবন্দর সংলগ্ন এলাকা Matigara-তে commercial scale mushroom unit স্থাপনের জন্য উপযুক্ত জায়গা রয়েছে।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Champasari</h4>
                                <p className="text-sm">Champasari-র কৃষিভিত্তিক এলাকায় পরিবারভিত্তিক mushroom farming ক্রমবর্ধমান।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Salugara</h4>
                                <p className="text-sm">মঠ এবং মনাস্ট্রি এলাকা Salugara-তে organic এবং wellness-focused mushroom-এর চাহিদা বাড়ছে।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Ashram Para</h4>
                                <p className="text-sm">Ashram Para-র residential এলাকায় বাড়তি আয়ের জন্য ঘরোয়া mushroom unit বাড়ছে।</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Nearby Areas */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            শিলিগুড়ির আশেপাশের শহর ও গ্রামে Mushroom Farming
                        </h3>

                        <div className="space-y-4 dark:text-slate-300 text-slate-700">
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Training in Bagdogra</h4>
                                <p className="text-sm">বিমানবন্দর শহর Bagdogra-তে hotel এবং transit market-কে সরবরাহের জন্য ভালো সুযোগ রয়েছে।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Jalpaiguri</h4>
                                <p className="text-sm">যমজ শহর Jalpaiguri-র কৃষকরা ঐতিহ্যবাহী চাষের সাথে mushroom cultivation যুক্ত করছেন।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Kurseong</h4>
                                <p className="text-sm">পাহাড়ি এলাকা Kurseong-এর ঠান্ডা ও আর্দ্র আবহাওয়া mushroom চাষের জন্য প্রাকৃতিকভাবেই অনুকূল।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Islampur</h4>
                                <p className="text-sm">Islampur-এর কৃষি-প্রধান এলাকায় ছোট কৃষকরা কম জায়গায় বেশি আয়ের mushroom farming-এর দিকে ঝুঁকছেন।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Naxalbari, Gossaipur ও Hatighisa</h4>
                                <p className="text-sm">Naxalbari block-এর Naxalbari, Gossaipur, Hatighisa এবং Maniram গ্রাম পঞ্চায়েত এলাকায় কৃষক পরিবাররা spawn এবং training সুবিধা নিচ্ছেন।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Phansidewa Belt</h4>
                                <p className="text-sm">Phansidewa block-এর Phansidewa-Bansgoan, Ghospukur এবং Bidhannagar এলাকায় group farming ও bulk spawn ক্রয়ের প্রবণতা বাড়ছে।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Matigara Region (Khaprail, Tomba, Patiram)</h4>
                                <p className="text-sm">Matigara block-এর Khaprail, Tomba, Patiram এবং Matigarahat-এর মতো গ্রামে natural humidity-র সুবিধা নিয়ে কম খরচে mushroom farming সম্ভব।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Fulbari Rural Region</h4>
                                <p className="text-sm">Fulbari-র গ্রামীণ এলাকায় কৃষি জমির সহজলভ্যতার কারণে commercial scale mushroom farming-এর ভালো সম্ভাবনা রয়েছে।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-950">Mushroom Farming in Dabgram, Bhaktinagar ও New Jalpaiguri (NJP)</h4>
                                <p className="text-sm">শিলিগুড়ি মহকুমার Dabgram, Bhaktinagar এবং NJP রেলওয়ে এলাকা থেকে সমগ্র উত্তরবঙ্গে mushroom distribution সহজে করা যায়।</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Why Siliguri is long-term */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            কেন শিলিগুড়ির দীর্ঘমেয়াদী ব্যবসায়িক সম্ভাবনা রয়েছে
                        </h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                            এর অবস্থান, পরিবহন সংযোগ এবং একাধিক আঞ্চলিক বাজারে প্রবেশাধিকার শিলিগুড়িকে পূর্ব ভারতের অন্যতম প্রতিশ্রুতিশীল শহরে পরিণত করেছে, যারা scalable mushroom business গড়তে চান তাদের জন্য।
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Opportunities */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            কৃষক, ছাত্র, মহিলা, Startups এবং FPO-দের জন্য সুযোগ
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li><strong>কৃষকদের জন্য</strong> — ঐতিহ্যবাহী চাষের সাথে অতিরিক্ত লাভজনক আয়ের সুযোগ।</li>
                            <li><strong>ছাত্রদের জন্য</strong> — পড়াশোনার পাশাপাশি অত্যন্ত কম বিনিয়োগে পার্ট-টাইম ব্যবসা।</li>
                            <li><strong>মহিলাদের জন্য</strong> — ঘরে বসেই অর্থনৈতিক স্বাবলম্বিতা ও স্বনির্ভর গোষ্ঠী গঠন।</li>
                            <li><strong>Startups-এর জন্য</strong> — Scalable business model এবং চমৎকার ROI (রিটার্ন অন ইনভেস্টমেন্ট)।</li>
                            <li><strong>FPO-দের জন্য</strong> — গ্রুপ ফার্মিং, সাশ্রয়ী মূল্যে বাল্ক বীজ ক্রয় এবং সম্মিলিত বিক্রয় নেটওয়ার্ক।</li>
                        </ul>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Why Us */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            Kyun Chunein Organic Mushroom Farm?
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 dark:text-slate-300 text-slate-700">
                            <li>Jabalpur base se pura India mein spawn delivery ka experience</li>
                            <li>Siliguri ke logistics hub aur cross-border market ko samajhne wali team</li>
                            <li>Online aur offline dono training options (Bengali, Nepali, Hindi support)</li>
                            <li>Complete farm setup se leke wholesale/export marketing tak ka support</li>
                            <li>Transparent business plan aur ROI guidance</li>
                            <li>WhatsApp par direct fast support</li>
                        </ul>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* FAQs */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary-start pl-4">
                            FAQs — শিলিগুড়ি Mushroom Farming সম্পর্কিত প্রশ্নোত্তর
                        </h3>

                        <div className="space-y-4 dark:text-slate-300 text-slate-700">
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১. শিলিগুড়িতে mushroom farming-এর খরচ কত?</h4>
                                <p className="text-sm">Scale অনুযায়ী পরিবর্তিত হয় — ঘরোয়া ছোট unit-এর জন্য ₹10,000-₹25,000 থেকে শুরু করা যায়, commercial scale-এর জন্য বেশি বিনিয়োগ প্রয়োজন।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">২. Kitna profit ho sakta hai?</h4>
                                <p className="text-sm">Sahi management aur consistent wholesale/hotel demand ke saath monthly accha margin possible hai।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">৩. Mushroom spawn কোথায় পাওয়া যাবে?</h4>
                                <p className="text-sm">আমাদের কাছ থেকে সমগ্র North Bengal এবং pan-India delivery-সহ spawn কেনা যায়।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">৪. Training kaise join karein?</h4>
                                <p className="text-sm">WhatsApp ke through contact karke online ya offline training ke liye registration kiya ja sakta hai।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">৫. Online training উপলব্ধ আছে?</h4>
                                <p className="text-sm">হ্যাঁ, Bengali, Nepali এবং Hindi — তিন ভাষার support-সহ সম্পূর্ণ online training উপলব্ধ।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">৬. শিলিগুড়িতে offline training পাওয়া যাবে?</h4>
                                <p className="text-sm">হ্যাঁ, শিলিগুড়িতে practical hands-on offline training-এর ব্যবস্থা রয়েছে।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">৭. কত জায়গা লাগবে?</h4>
                                <p className="text-sm">ছোট স্তরের জন্য 100-200 sq ft যথেষ্ট, commercial-এর জন্য বেশি জায়গা প্রয়োজন।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">৮. মহিলারা কি mushroom farming শুরু করতে পারেন?</h4>
                                <p className="text-sm">অবশ্যই, ঘরে বসেই মহিলারা সহজে এই ব্যবসা শুরু করতে পারেন।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">৯. Students bhi shuru kar sakte hain?</h4>
                                <p className="text-sm">Bilkul, kam investment aur time mein students ke liye bhi yeh accha option hai।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১০. Government subsidy উপলব্ধ আছে?</h4>
                                <p className="text-sm">Eligibility criteria অনুযায়ী কিছু scheme-এর মাধ্যমে সাহায্য পাওয়া যেতে পারে, আমরা guidance দিই।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১১. কোন mushroom variety সবচেয়ে ভালো?</h4>
                                <p className="text-sm">Oyster mushroom beginners-দের জন্য শুরু করার সবচেয়ে সহজ বিকল্প।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১২. Mushroom ko Sikkim ya Assam tak kaise export karein?</h4>
                                <p className="text-sm">Siliguri ke logistics network, reliable packaging aur wholesale buyer connections ke through — hum yeh setup karne mein madad karte hain।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১৩. আপনারা কি consultancy প্রদান করেন?</h4>
                                <p className="text-sm">হ্যাঁ, production থেকে marketing পর্যন্ত সম্পূর্ণ consultancy উপলব্ধ।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১৪. Turnkey project bhi milta hai?</h4>
                                <p className="text-sm">Ha, bade investors ke liye complete turnkey mushroom project setup diya jata hai।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১৫. Marketing support পাওয়া যাবে?</h4>
                                <p className="text-sm">হ্যাঁ, packaging, branding এবং wholesale/hotel buyer connection-এ সম্পূর্ণ support পাওয়া যায়।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১৬. শিলিগুড়ির কোন কোন এলাকায় সেবা উপলব্ধ?</h4>
                                <p className="text-sm">Sevoke Road, Pradhan Nagar, Hakim Para, Hill Cart Road, Matigara, Champasari, Salugara, Ashram Para এবং আশেপাশের সব এলাকায়।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১৭. Bagdogra ya Jalpaiguri mein bhi service milegi?</h4>
                                <p className="text-sm">Ha, Bagdogra, Jalpaiguri, Kurseong, Islampur samet nearby sabhi areas cover kiye jaate hain।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১৮. Dry mushroom-এর shelf life কতদিন?</h4>
                                <p className="text-sm">সঠিক storage-সহ dry mushroom মাসের পর মাস ভালো quality-তে থাকে।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">১৯. Medicinal mushroom farming profitable কি?</h4>
                                <p className="text-sm">হ্যাঁ, Lion&apos;s Mane, Reishi-র মতো varieties premium price-এ বিক্রি হয়, margin বেশি।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">২০. Business plan কীভাবে পাওয়া যাবে?</h4>
                                <p className="text-sm">আপনার scale অনুযায়ী customized project report এবং ROI analysis দেওয়া হয়।</p>
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white text-slate-900">২১. Contact কীভাবে করবেন?</h4>
                                <p className="text-sm">WhatsApp-এর মাধ্যমে সরাসরি যোগাযোগ করা যায়, যার response সবচেয়ে দ্রুত হয়।</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-linear-to-r from-primary-start/20 to-primary-end/20 p-8 rounded-3xl mt-12 border border-primary-start/20">
                        <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">শিলিগুড়িতে মাশরুম চাষ শুরু করতে প্রস্তুত?</h3>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4">
                            মাশরুম চাষ কেবল একটি আয়ের উৎস নয়, বরং একটি উচ্চমানের আধুনিক এগ্রি-বিজনেস সুযোগ। আমাদের উন্নত মানের স্পন (Spawn), কাস্টমাইজড ফার্ম ডিজাইন এবং অভিজ্ঞ মেন্টরদের সহায়তায় আপনি খুব সহজেই লাভজনক মাশরুম ব্যবসা শুরু করতে পারবেন।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            আজই আপনার মাশরুম খামার গড়ে তোলার প্রথম পদক্ষেপটি নিন! আমাদের সাথে যোগাযোগ করুন এবং শিলিগুড়ি ও সমগ্র উত্তরবঙ্গের মাশরুম বিপ্লবের অংশ হোন।
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

export default ArticleSiliguriTraining;
