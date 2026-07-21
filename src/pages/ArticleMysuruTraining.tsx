import React, { useEffect } from 'react';
import { Phone, ArrowRight, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ArticleMysuruTraining = () => {
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
              "name": "Mysuru mein mushroom farming ka cost kitna hai?",
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
                "text": "Haan, Kannada aur Hindi support ke saath complete online mushroom training available hai."
              }
            },
            {
              "@type": "Question",
              "name": "Mushroom spawn Mysuru mein kahan milega?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Organic Mushrooms Farm se pan-India delivery ke saath Mysuru aur aas-paas ke sabhi areas mein spawn milta hai."
              }
            },
            {
              "@type": "Question",
              "name": "Kya mushroom farming ko full-time business banaya ja sakta hai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ha, sahi planning, training aur consistent quality ke saath small production se shuru karke gradually full-time commercial mushroom business tak expand kiya ja sakta hai."
              }
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Organic Mushrooms Farm",
          "image": "https://organicmushroomsfarm.com/logo.png",
          "url": "https://organicmushroomsfarm.com/mushroom-farming-mysuru-karnataka",
          "areaServed": [
            "Mysuru", "Vijayanagar", "Hebbal", "Kuvempu Nagar", "Nazarbad",
            "Hootagalli", "Bogadi", "Gokulam", "Jayalakshmipuram", "Srirangapatna",
            "Nanjangud", "Hunsur", "KRS", "Yelwala", "Kadakola", "Belavadi", "Hinkal"
          ],
          "description": "Mushroom farm setup, spawn supply, online aur offline training, fresh aur dry mushroom sale, consultancy aur turnkey mushroom projects in Mysuru, Karnataka.",
          "priceRange": "₹₹"
        },
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Mushroom Farming Training Mysuru",
          "description": "Online aur offline mushroom farming training covering spawn handling, cultivation, harvesting, packaging aur marketing.",
          "provider": {
            "@type": "Organization",
            "name": "Organic Mushrooms Farm",
            "sameAs": "https://organicmushroomsfarm.com"
          }
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-slate-50 dark:bg-[#09090b]">
            {/* Ambient Background Colors */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <SEO 
                title="Top Mushroom Farming Training & Farm Setup in Mysuru" 
                description="Launch a successful agribusiness in Mysuru! We provide practical cultivation training, turnkey farm setup services, and premium quality spawn."
                keywords="Mushroom farming Mysuru, mushroom training Mysuru, mushroom spawn Mysuru, farm setup Mysuru, organic mushrooms farm Karnataka"
                url="/mushroom-farming-mysuru-karnataka"
                schemas={customSchemas}
            />
            
            <article className="max-w-4xl mx-auto px-4 prose prose-invert">
                <div className="glass p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-6 md:space-y-8">
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 leading-tight mb-4 uppercase tracking-tight">
                            Complete Mushroom Farming Training & Setup Solutions in Mysuru (ಮೈಸೂರು)
                        </h1>
                    </div>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        ಮೈಸೂರಿನಲ್ಲಿ Mushroom Business ಏಕೆ શરૂ ಮಾಡಬೇಕು?
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium text-sm md:text-base">
                        Mysuru is an excellent hub for agribusiness. ಮೈಸೂರಿನಲ್ಲಿ (in Mysuru) hotels, restaurants, and local markets have a huge growing demand for fresh Oyster and Button mushrooms. ನೀವು profitable agribusiness start ಮಾಡಲು ಯೋಚಿಸುತ್ತಿದ್ದರೆ, mushroom farming is one of the best and low-investment options.
                    </p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium text-sm md:text-base">
                        Organic Mushroom Farm provides hands-on practical cultivation training (ತರಬೇತಿ) and complete custom farm setup for beginners in Mysuru. ಮೈಸೂರಿನ ಹವಾಮಾನಕ್ಕೆ (for Mysuru's climate) suitable ಆಗಿರುವ mushroom varieties and premium quality spawn (ಮಶ್ರೂಮ್ ಬೀಜಗಳು - biyane) ನಾವು supply ಮಾಡುತ್ತೇವೆ.
                    </p>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium text-sm md:text-base">
                        Our support doesn't end with production! ಬೆಳೆದ ಮಶ್ರೂಮ್ಗಳನ್ನು Mysuru local market, supermarkets, and restaurants ಗೆ ಹೇಗೆ sell ಮಾಡುವುದು (marketing support and sales strategy) ಎಂಬುದರ ಬಗ್ಗೆ full professional guidance ನಾವು ನೀಡುತ್ತೇವೆ. Start your journey today!
                    </p>

                    <hr className="border-slate-200 dark:border-white/10" />

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        Mysuru ಯಾಕೆ ಉತ್ತಮ Business Potential ಹೊಂದಿದೆ?
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        ಮೈಸೂರು ಹಲವಾರು ಪ್ರಯೋಜನಗಳನ್ನು ನೀಡುತ್ತದೆ:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li><strong>ಪ್ರವಾಸೋದ್ಯಮ</strong> — ಪ್ರತಿ ವರ್ಷ ಲಕ್ಷಾಂತರ ಪ್ರವಾಸಿಗರು</li>
                        <li><strong>Hotels ಮತ್ತು Resorts</strong> — ಪ್ರೀಮಿಯಂ ಆಹಾರ ಪದಾರ್ಥಗಳ ಬೇಡಿಕೆ</li>
                        <li><strong>ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳು</strong> — ಯುವ ಜನಸಂಖ್ಯೆ, ಆರೋಗ್ಯಕರ ಆಹಾರದ ಅರಿವು</li>
                        <li><strong>Organic Food Demand</strong> — ಬೆಳೆಯುತ್ತಿರುವ ಸಾವಯವ ಆಹಾರ ಮಾರುಕಟ್ಟೆ</li>
                        <li><strong>Retail Market</strong> — ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಮತ್ತು organic store ಗಳ ವಿಸ್ತರಣೆ</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        Yeh sab sectors mile kar Mysuru mein fresh aur premium mushroom ki regular demand create karte hain.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        Mushroom Farming Full-Time Business ಆಗಬಹುದೇ?
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        ಹಲವಾರು ಯಶಸ್ವಿ ಉದ್ಯಮಿಗಳು ಹಂತ ಹಂತವಾಗಿ ಬೆಳೆಯುತ್ತಾರೆ:
                    </p>
                    <div className="bg-primary-start/10 text-primary-start p-3 rounded-lg text-center font-mono text-xs md:text-sm border border-primary-start/20 my-3">
                        Small Production ➔ Regular Customers ➔ Restaurant Supply ➔ Retail Sales ➔ Commercial Mushroom Farm ➔ Multiple Income Sources
                    </div>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        ಈ ಬೆಳವಣಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಒಂದೇ ದಿನದಲ್ಲಿ ಆಗುವುದಿಲ್ಲ, ಬದಲಿಗೆ ಸರಿಯಾದ planning, training ಮತ್ತು consistent quality ಮೂಲಕ ಕ್ರಮೇಣ ಸಾಧ್ಯವಾಗುತ್ತದೆ. Shuru mein side income ke roop mein start karke, dheere-dheere isko full-time career mein badla ja sakta hai.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        ಯಾವ <Link to="/mushroom-types" className="text-primary-start hover:underline">Mushroom Varieties</Link> ಗೆ Commercial Demand ಇದೆ?
                    </h2>
                    <ul className="list-disc pl-5 space-y-1.5 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li><strong><Link to="/mushroom-types" className="text-primary-start hover:underline">Oyster Mushroom</Link></strong> — beginners ಮತ್ತು commercial farming ಗೆ ಸೂಕ್ತ</li>
                        <li><strong><Link to="/mushroom-types" className="text-primary-start hover:underline">Button Mushroom</Link></strong> — restaurants ಮತ್ತು ಮನೆಗಳಲ್ಲಿ ಜನಪ್ರಿಯ</li>
                        <li><strong><Link to="/mushroom-types" className="text-primary-start hover:underline">Milky Mushroom</Link></strong> — commercial cultivation ಅವಕಾಶ</li>
                        <li><strong>Shiitake Mushroom</strong> — premium restaurant category</li>
                        <li><strong>Lion's Mane Mushroom</strong> — ಬೆಳೆಯುತ್ತಿರುವ wellness market</li>
                        <li><strong>Reishi Mushroom</strong> — medicinal mushroom segment</li>
                        <li><strong>Turkey Tail Mushroom</strong> — ಹೊಸ functional food category</li>
                        <li><strong>Cordyceps Mushroom</strong> — premium medicinal mushroom market</li>
                    </ul>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        <Link to="/training" className="text-primary-start hover:underline">Online Mushroom Training</Link>
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        <Link to="/training" className="text-primary-start hover:underline font-semibold">Online Mushroom Training</Link> ಕಲಿಕೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Cultivation Techniques</li>
                        <li>Spawn Management</li>
                        <li>Harvesting</li>
                        <li>Packaging</li>
                        <li>Marketing</li>
                        <li>Business Planning</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        ಕನ್ನಡ ಮತ್ತು Hindi ಎರಡೂ ಭಾಷೆಗಳಲ್ಲಿ support ಲಭ್ಯವಿದ್ದು, ವಿದ್ಯಾರ್ಥಿಗಳು, ಉದ್ಯೋಗಿಗಳು ಮತ್ತು ರೈತರಿಗೆ ಸೂಕ್ತವಾಗಿದೆ.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        <Link to="/training" className="text-primary-start hover:underline">Offline Mushroom Training</Link>
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        Practical learning <Link to="/training" className="text-primary-start hover:underline font-semibold">Offline Mushroom Training</Link> ಇದನ್ನು ಒಳಗೊಂಡಿದೆ:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Live Demonstrations</li>
                        <li>Bed Preparation</li>
                        <li>Production Systems</li>
                        <li>Harvesting</li>
                        <li>Quality Management</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        Vijayanagar, Hebbal, Kuvempu Nagar, Nazarbad ಪ್ರದೇಶಗಳ ಜನರು ಹೂಡಿಕೆಗೆ ಮುಂಚೆ ಆತ್ಮವಿಶ್ವಾಸ ಪಡೆಯಲು hands-on offline training ಆಯ್ಕೆ ಮಾಡುತ್ತಾರೆ.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        <Link to="/articles/turnkey-commercial-setup" className="text-primary-start hover:underline">Mushroom Farm Setup</Link>
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        ಯಶಸ್ವಿ <Link to="/articles/turnkey-commercial-setup" className="text-primary-start hover:underline font-semibold">Mushroom Farm Setup</Link> ಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಬೇಕಾಗುತ್ತದೆ:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Clean Production Area</li>
                        <li>Ventilation</li>
                        <li>Humidity Control</li>
                        <li>Storage Area</li>
                        <li>Quality Mushroom Spawn</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        Hootagalli, Bogadi, Gokulam ಮತ್ತು Jayalakshmipuram ಪ್ರದೇಶಗಳಲ್ಲಿ site visit ಮಾಡಿ ನಾವು customized setup plan ಕೂಡ ಸಿದ್ಧಪಡಿಸುತ್ತೇವೆ.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        <Link to="/spawn-seed" className="text-primary-start hover:underline">Mushroom Spawn Supply</Link>
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        Reliable <Link to="/spawn-seed" className="text-primary-start hover:underline font-semibold">Mushroom Spawn Supply</Link> ದ ಪ್ರಮುಖ input ಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ನಾವು ಒದಗಿಸುತ್ತೇವೆ:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Oyster Mushroom Spawn</li>
                        <li>Button Mushroom Spawn</li>
                        <li>Milky Mushroom Spawn</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        Mysuru, Srirangapatna, Nanjangud, Hunsur, KRS, Yelwala, Kadakola, Belavadi ಮತ್ತು Hinkal Rural Belt ವರೆಗೆ pan-India delivery ಜೊತೆಗೆ spawn ತಲುಪಿಸಲಾಗುತ್ತದೆ.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        Fresh Mushroom Business
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        Fresh mushrooms ಇವರಿಗೆ ಸರಬರಾಜು ಮಾಡಬಹುದು:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Hotels</li>
                        <li>Resorts</li>
                        <li>Restaurants</li>
                        <li>Supermarkets</li>
                        <li>Organic Food Stores</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        Mysuru ಪ್ರವಾಸೋದ್ಯಮವು ಬೆಳೆಯುತ್ತಿರುವ ಬೇಡಿಕೆಗೆ ಬೆಂಬಲ ನೀಡುತ್ತದೆ.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        <Link to="/spawn-seed" className="text-primary-start hover:underline">Dry Mushroom Business</Link>
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        ಹಲವಾರು ಉದ್ಯಮಿಗಳು <Link to="/spawn-seed" className="text-primary-start hover:underline font-semibold">Dry Mushroom Business</Link> ಇದರಲ್ಲಿ ವೈವಿಧ್ಯೀಕರಣ ಮಾಡುತ್ತಾರೆ:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Dry Mushrooms</li>
                        <li>Mushroom Powder</li>
                        <li>Functional Food Products</li>
                        <li>Premium Packaged Foods</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        Inka shelf life zyada hota hai aur additional income ka accha source banta hai.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        <Link to="/book-consultant" className="text-primary-start hover:underline">Mushroom Consultancy</Link>
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        Professional <Link to="/book-consultant" className="text-primary-start hover:underline font-semibold">Mushroom Consultancy</Link> ಇದನ್ನು ಒಳಗೊಂಡಿರಬಹುದು:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Farm Planning</li>
                        <li>Infrastructure Design</li>
                        <li>Market Development</li>
                        <li>Business Expansion</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        Expert guidance se startup mistakes kaafi had tak kam ho jaate hain.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        <Link to="/turnkey-projects" className="text-primary-start hover:underline">Turnkey Mushroom Projects</Link>
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        ದೊಡ್ಡ investor ಗಳಿಗೆ ನಾವು <strong><Link to="/turnkey-projects" className="text-primary-start hover:underline">turnkey project</Link></strong> ಒದಗಿಸುತ್ತೇವೆ — ಇದರಲ್ಲಿ farm design, equipment planning, infrastructure support ಮತ್ತು operational guidance ಎಲ್ಲವೂ ಸೇರಿದೆ.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        <Link to="/business-plan" className="text-primary-start hover:underline">Business Plan & ROI Analysis</Link>
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        ಹೂಡಿಕೆಗೆ ಮುಂಚೆ ಉದ್ಯಮಿಗಳು <Link to="/business-plan" className="text-primary-start hover:underline font-semibold">Business Plan</Link> ಮೌಲ್ಯಮಾಪನ ಮಾಡಬೇಕು:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Startup Capital</li>
                        <li>Customer Demand</li>
                        <li>Operating Costs</li>
                        <li>Production Capacity</li>
                        <li>Growth Potential</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        Aapke scale ke hisaab se hum customized business plan aur project report taiyaar karke dete hain, jo bank loan ya subsidy ke liye bhi kaam aata hai.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        <Link to="/subsidy" className="text-primary-start hover:underline">Government Subsidy Opportunities</Link>
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        ಅರ್ಹ ರೈತರು ಮತ್ತು ಉದ್ಯಮಿಗಳು ಪ್ರಸ್ತುತ agriculture ಮತ್ತು entrepreneurship support ಯೋಜನೆಗಳ ಪ್ರಯೋಜನ ಮತ್ತು <Link to="/subsidy" className="text-primary-start hover:underline font-semibold">Government Subsidy</Link> eligibility ಆಧಾರದ ಮೇಲೆ ಪಡೆಯಬಹುದು. ಸೂಕ್ತ ಯೋಜನೆ ಗುರುತಿಸಲು ಮತ್ತು ದಾಖಲಾತಿ ಸಿದ್ಧಪಡಿಸಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.
                    </p>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        Mushroom Marketing Support
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                        Marketing activities ಇವುಗಳನ್ನು ಒಳಗೊಂಡಿರಬಹುದು:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Local Branding</li>
                        <li>Restaurant Partnerships</li>
                        <li>Retail Distribution</li>
                        <li>Social Media Marketing</li>
                        <li>Customer Retention</li>
                    </ul>
                    <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                        Long-term success production ಮತ್ತು marketing ಎರಡರ ಮೇಲೂ ಅವಲಂಬಿತವಾಗಿದೆ.
                    </p>

                    <hr className="border-slate-200 dark:border-white/10" />

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        Mysuru ಪ್ರಮುಖ ಪ್ರದೇಶಗಳಲ್ಲಿ Mushroom Farming
                    </h2>
                    
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Vijayanagar</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Vijayanagar ನ ಬೆಳೆಯುತ್ತಿರುವ ವಸತಿ ಪ್ರದೇಶದಲ್ಲಿ ಮನೆ ಆಧಾರಿತ mushroom units ಜನಪ್ರಿಯವಾಗುತ್ತಿವೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Hebbal</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ Hebbal ಸಮೀಪ ಸಣ್ಣ commercial mushroom unit ಸ್ಥಾಪಿಸಲು ಉತ್ತಮ ಅವಕಾಶವಿದೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Kuvempu Nagar</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Kuvempu Nagar ವಸತಿ ಪ್ರದೇಶದ ಕುಟುಂಬಗಳು extra income ಗಾಗಿ mushroom farming ಅಳವಡಿಸಿಕೊಳ್ಳುತ್ತಿವೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Nazarbad</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">ನಗರ ಕೇಂದ್ರಕ್ಕೆ ಸಮೀಪವಿರುವ Nazarbad ನಿಂದ fresh mushroom distribution ಸುಲಭವಾಗಿ ಸಾಧ್ಯ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Hootagalli</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Industrial belt Hootagalli ಬಳಿ commercial scale mushroom unit ಗೆ ಸೂಕ್ತವಾದ ಜಾಗ ಲಭ್ಯವಿದೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Bogadi</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Bogadi ಬೆಳೆಯುತ್ತಿರುವ ಪ್ರದೇಶದಲ್ಲಿ ಮನೆ ಆಧಾರಿತ ಮತ್ತು ಸಣ್ಣ commercial farming ಎರಡಕ್ಕೂ ಸೂಕ್ತ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Gokulam</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">ಶ್ರೀಮಂತ ವಸತಿ ಪ್ರದೇಶ Gokulam ನಲ್ಲಿ organic ಮತ್ತು premium mushroom ಗೆ ಬೇಡಿಕೆ ಹೆಚ್ಚು.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Jayalakshmipuram</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Jayalakshmipuram ನ ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ direct mushroom supply ಮಾಡಲು ಉತ್ತಮ ಅವಕಾಶವಿದೆ.</p>
                        </div>
                    </div>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        Mysuru ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ Mushroom Farming
                    </h2>
                    
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Training in Srirangapatna</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">ಐತಿಹಾಸಿಕ ಪ್ರವಾಸಿ ತಾಣ Srirangapatna ನಲ್ಲಿ ಸ್ಥಳೀಯ hotels ಮತ್ತು resorts ಗೆ ಪೂರೈಕೆಯ ಅವಕಾಶವಿದೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Nanjangud</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">ಕೃಷಿ ಪ್ರಧಾನ ಪ್ರದೇಶ Nanjangud ನ ರೈತರು ಈಗ ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿಯ ಜೊತೆಗೆ mushroom cultivation ಅಳವಡಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದಾರೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Hunsur</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Hunsur ಪ್ರದೇಶದ ಸಣ್ಣ ರೈತರು ಕಡಿಮೆ ಜಾಗದಲ್ಲಿ ಹೆಚ್ಚು ಆದಾಯ ನೀಡುವ mushroom farming ಕಡೆಗೆ ಆಕರ್ಷಿತರಾಗುತ್ತಿದ್ದಾರೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in KRS Region</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">KRS ಅಣೆಕಟ್ಟು ಪ್ರದೇಶದ ಆರ್ದ್ರ ವಾತಾವರಣವು mushroom cultivation ಗೆ ನೈಸರ್ಗಿಕವಾಗಿ ಸಹಾಯಕವಾಗಿದೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Yelwala Region</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Yelwala ಪ್ರದೇಶದ ರೈತ ಕುಟುಂಬಗಳು group farming ಮತ್ತು bulk spawn ಖರೀದಿಯ ಕಡೆಗೆ ಒಲವು ತೋರುತ್ತಿವೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Kadakola Region</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Kadakola ಬಳಿ ಕೃಷಿ ಭೂಮಿಯ ಲಭ್ಯತೆಯಿಂದಾಗಿ commercial scale mushroom farming ಗೆ ಉತ್ತಮ ಸಾಧ್ಯತೆ ಇದೆ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Belavadi Region</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Belavadi ಪ್ರದೇಶದಲ್ಲಿ natural humidity ಯ ಲಾಭ ಪಡೆದು ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ mushroom farming ಸಾಧ್ಯ.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900">Mushroom Farming in Hinkal Rural Belt</h3>
                            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">Hinkal Rural Belt ನ ರೈತರು ಈಗ Mysuru ನಗರದ ಮಾರುಕಟ್ಟೆಯ ಪ್ರಯೋಜನ ಪಡೆದು spawn ಮತ್ತು training ಸೌಲಭ್ಯ ಪಡೆಯುತ್ತಿದ್ದಾರೆ.</p>
                        </div>
                    </div>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        Farmers, Students, Women, Startups ಮತ್ತು FPO ಗಳಿಗೆ ಅವಕಾಶಗಳು
                    </h2>
                    <ul className="list-disc pl-5 space-y-1.5 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li><strong>ರೈತರಿಗೆ</strong> — ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿಯ ಜೊತೆಗೆ ಹೆಚ್ಚುವರಿ ಆದಾಯ</li>
                        <li><strong>ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ</strong> — ಕಡಿಮೆ ಹೂಡಿಕೆಯಲ್ಲಿ part-time ವ್ಯವಹಾರ</li>
                        <li><strong>ಮಹಿಳೆಯರಿಗೆ</strong> — ಮನೆಯಲ್ಲೇ self-employment</li>
                        <li><strong>Startups ಗಳಿಗೆ</strong> — scalable business model, quick ROI</li>
                        <li><strong>FPO ಗಳಿಗೆ</strong> — group farming, bulk spawn ಖರೀದಿ, collective marketing</li>
                    </ul>

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        Kyun Chunein Organic Mushrooms Farm?
                    </h2>
                    <ul className="list-disc pl-5 space-y-1.5 dark:text-slate-300 text-slate-700 text-sm md:text-base">
                        <li>Jabalpur base se pura India mein spawn delivery ka experience</li>
                        <li>Mysuru ke tourism aur local market ko samajhne wali team</li>
                        <li>Online aur offline dono training options</li>
                        <li>Complete farm setup se leke hotel/restaurant marketing tak ka support</li>
                        <li>Transparent business plan aur ROI guidance</li>
                        <li>WhatsApp par direct support</li>
                    </ul>

                    <hr className="border-slate-200 dark:border-white/10" />

                    <h2 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mt-8 mb-4 border-l-4 border-primary-start pl-4 uppercase">
                        FAQs — ಮೈಸೂರು Mushroom Farming ಸಂಬಂಧಿತ ಪ್ರಶ್ನೆಗಳು
                    </h2>
                    
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">1. ಮೈಸೂರಿನಲ್ಲಿ mushroom farming ವೆಚ್ಚ ಎಷ್ಟು?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">Scale ಪ್ರಕಾರ ಬದಲಾಗುತ್ತದೆ — ಮನೆ ಆಧಾರಿತ ಸಣ್ಣ unit ಗೆ ₹10,000-₹25,000 ರಿಂದ ಪ್ರಾರಂಭಿಸಬಹುದು, commercial scale ಗೆ ಹೆಚ್ಚಿನ ಹೂಡಿಕೆ ಬೇಕು.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">2. Kitna profit ho sakta hai?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">Sahi management aur consistent hotel/restaurant demand ke saath monthly accha margin possible hai.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">3. Mushroom spawn ಎಲ್ಲಿ ಸಿಗುತ್ತದೆ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ನಮ್ಮಿಂದ ಇಡೀ Karnataka ಮತ್ತು pan-India delivery ಜೊತೆಗೆ spawn ಖರೀದಿಸಬಹುದು.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">4. Training kaise join karein?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">WhatsApp ke through contact karke online ya offline training ke liye registration kiya ja sakta hai.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">5. Online training ಲಭ್ಯವಿದೆಯೇ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ಹೌದು, ಕನ್ನಡ ಮತ್ತು Hindi ಎರಡೂ ಭಾಷೆಗಳ support ಜೊತೆಗೆ ಸಂಪೂರ್ಣ online training ಲಭ್ಯವಿದೆ.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">6. Mysuru ನಲ್ಲಿ offline training ಸಿಗುತ್ತದೆಯೇ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ಹೌದು, Mysuru ನಲ್ಲಿ practical hands-on offline training ವ್ಯವಸ್ಥೆ ಇದೆ.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">7. ಎಷ್ಟು ಜಾಗ ಬೇಕು?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ಸಣ್ಣ ಮಟ್ಟಕ್ಕೆ 100-200 sq ft ಸಾಕು, commercial ಗೆ ಹೆಚ್ಚಿನ ಜಾಗ ಬೇಕು.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">8. ಮಹಿಳೆಯರು mushroom farming ಪ್ರಾರಂಭಿಸಬಹುದೇ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ಖಂಡಿತ, ಮನೆಯಲ್ಲೇ ಇದ್ದು ಮಹಿಳೆಯರು ಸುಲಭವಾಗಿ ಈ ವ್ಯವಹಾರ ಪ್ರಾರಂಭಿಸಬಹುದು.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">9. Students bhi shuru kar sakte hain?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">Bilkul, kam investment aur time mein students ke liye bhi yeh accha option hai.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">10. Government subsidy ಲಭ್ಯವಿದೆಯೇ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">Eligibility criteria ಪ್ರಕಾರ ಕೆಲವು ಯೋಜನೆಗಳ ಮೂಲಕ ಸಹಾಯ ಸಿಗಬಹುದು, ನಾವು guidance ನೀಡುತ್ತೇವೆ.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">11. ಯಾವ mushroom variety ಅತ್ಯುತ್ತಮ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">Oyster mushroom beginners ಗೆ ಪ್ರಾರಂಭಿಸಲು ಅತ್ಯಂತ ಸುಲಭ.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">12. Mushroom ko full-time business kaise banayein?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">Small production se shuru karke, regular customers banaiye, phir restaurant supply aur retail sales tak dheere-dheere expand kariye — hum har step mein guidance dete hain.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">13. ನೀವು consultancy ಒದಗಿಸುತ್ತೀರಾ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ಹೌದು, production ನಿಂದ marketing ವರೆಗೆ ಸಂಪೂರ್ಣ consultancy ಲಭ್ಯವಿದೆ.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">14. Turnkey project bhi milta hai?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">Ha, bade investors ke liye complete turnkey mushroom project setup diya jata.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">15. Marketing support ಸಿಗುತ್ತದೆಯೇ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ಹೌದು, packaging, branding ಮತ್ತು hotel/buyer connection ನಲ್ಲಿ ಪೂರ್ಣ support ಸಿಗುತ್ತದೆ.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">16. ಮೈಸೂರಿನ ಯಾವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸೇವೆ ಲಭ್ಯವಿದೆ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">Vijayanagar, Hebbal, Kuvempu Nagar, Nazarbad, Hootagalli, Bogadi, Gokulam, Jayalakshmipuram ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಎಲ್ಲಾ ಪ್ರದೇಶಗಳಲ್ಲಿ.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">17. Srirangapatna ya Nanjangud mein bhi service milegi?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">Ha, Srirangapatna, Nanjangud, Hunsur, KRS samet nearby sabhi areas cover kiye jaate hain.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">18. Dry mushroom shelf life ಎಷ್ಟು?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ಸರಿಯಾದ storage ಜೊತೆಗೆ dry mushroom ತಿಂಗಳುಗಟ್ಟಲೆ ಉತ್ತಮ quality ಯಲ್ಲಿ ಇರುತ್ತದೆ.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">19. Medicinal mushroom farming profitable ಆಗಿದೆಯೇ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ಹೌದು, Lion's Mane, Reishi ನಂತಹ varieties premium price ಗೆ ಮಾರಾಟವಾಗುತ್ತವೆ, margin ಹೆಚ್ಚು.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">20. Business plan ಹೇಗೆ ಸಿಗುತ್ತದೆ?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">ನಿಮ್ಮ scale ಪ್ರಕಾರ customized project report ಮತ್ತು ROI analysis ನೀಡಲಾಗುತ್ತದೆ.</p>
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white text-slate-900 text-sm md:text-base">21. Contact ಹೇಗೆ ಮಾಡುವುದು?</h4>
                            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm">WhatsApp ಮೂಲಕ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಬಹುದು, ಅದರ response ಅತ್ಯಂತ ವೇಗವಾಗಿರುತ್ತದೆ.</p>
                        </div>
                    </div>

                    <div className="bg-linear-to-r from-primary-start/20 to-primary-end/20 p-6 md:p-8 rounded-3xl mt-12 border border-primary-start/20">
                        <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-4 uppercase tracking-tight">Conclusion</h2>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-4 text-sm md:text-base">
                            ಬೆಂಗಳೂರು, ಮೈಸೂರು ಮತ್ತು ಅದರ ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ಅಣಬೆ ಕೃಷಿಯು ಅತ್ಯುತ್ತಮ ಆರ್ಥಿಕ ಮತ್ತು ಉದ್ಯಮ ಅವಕಾಶವನ್ನು ಒದಗಿಸುತ್ತದೆ. With the right training, premium spawn, automated farm setup, and rock-solid marketing guidance, you can build a highly lucrative commercial mushroom brand in Karnataka.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6 text-sm md:text-base">
                            Whether your goal is a commercial farm setup, joining our next training batch, ordering bulk spawn, or setting up a premium medicinal mushroom project, we have the industry expertise to make your venture a major success.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a href="tel:+919203544140" className="btn-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all text-sm w-full sm:w-auto justify-center">
                                <Phone size={18} /> Call Now: 9203544140
                            </a>
                            <a 
                                href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Mushroom%20Farming%20in%20Mysuru.%20Please%20share%20details." 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-success px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all text-sm w-full sm:w-auto justify-center text-white bg-green-600 hover:bg-green-700"
                            >
                                <MessageSquare size={18} /> WhatsApp Us
                            </a>
                        </div>
                    </div>

                </div>
            </article>
        </div>
    );
};

export default ArticleMysuruTraining;
