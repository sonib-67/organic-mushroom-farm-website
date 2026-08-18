import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Heart, TrendingUp, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const blogPosts = [
  {
    category: "Educational",
    icon: BookOpen,
    color: "text-blue-500",
    bg: "bg-blue-500/5",
    posts: [
      { customPath: "/blog/how-to-get-mushroom-farming-training", title: "How to Get Mushroom Farming Training? Complete Guide to Mushroom Cultivation Training in India", excerpt: "Discover how to get structured, expert-led mushroom cultivation training in India. Learn about our complete A-to-Z process, from spawn preparation to harvesting.", date: "August 18, 2026" },
      { customPath: "/blog/best-mushroom-farming-training-guide-india", title: "Best Mushroom Farming Training Guide In India", excerpt: "Discover the best mushroom farming training guide in India. Learn button, oyster, and milky mushroom cultivation from structured curriculums and expert trainers.", date: "August 16, 2026" },
      { customPath: "/blog/mushroom-farming-business-plan-india", title: "Starting a Profitable Mushroom Farming Business in India: Where to Begin?", excerpt: "Discover why mushroom farming is a top business opportunity in India. Learn about space utilization, fast growth cycles, and how to build a scalable business plan.", date: "August 12, 2026" },
      { customPath: "/services/milky-mushroom", title: "Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming", excerpt: "When the summer heat kicks in, the Milky Mushroom (Calocybe indica) takes the spotlight. Discover why this tropical variety is perfect for profitable farming.", date: "August 12, 2026" },
      { customPath: "/services/turnkey-setup", title: "Launch Your Commercial Mushroom Farm Stress-Free with a Complete Turnkey Setup", excerpt: "Bypass the trial-and-error phase with a Turnkey Mushroom Farm Setup. Get end-to-end infrastructure for maximum yield and efficiency.", date: "August 12, 2026" },
      { customPath: "/services/button-mushroom", title: "Mastering Button Mushroom Farming: The King of the Commercial Market", excerpt: "Successfully cultivating button mushrooms is one of the most lucrative business moves you can make. Discover why this popular fungus is the ultimate cash crop.", date: "August 12, 2026" },
      { customPath: "/spawn-seeds", title: "The Foundation of Every Great Harvest: Premium Organic Mushroom Spawn", excerpt: "Every successful mushroom farm starts with one critical decision: the quality of your seed. Discover why premium, lab-quality spawn is non-negotiable.", date: "August 12, 2026" },
      { customPath: "/project-specs", title: "The Blueprint of a High-Yield Mushroom Farm: Why Technical Project Specs Matter", excerpt: "The secret to a highly profitable, industrial-scale mushroom business lies in precision engineering and detailed project specifications.", date: "August 12, 2026" },
      { customPath: "/mushroom-farming-mangalore-karnataka", title: "Why Mangalore is the Next Big Hub for Commercial Mushroom Farming in Karnataka", excerpt: "Discover why coastal Karnataka is the perfect place to start your organic mushroom farm, from climate advantages to skyrocketing local market demand.", date: "August 12, 2026" },
      { customPath: "/blog/button-mushroom-vs-oyster-mushroom", title: "Button Mushroom vs Oyster Mushroom: Which is Better? Complete Guide", excerpt: "Detailed comparison of button mushroom and oyster mushroom cultivation, including temperature, humidity, growing period, substrate, yield and farming requirements.", date: "August 12, 2026" },
      { customPath: "/blog/oyster-mushroom-cultivation-india", title: "The Rise of Oyster Mushroom Cultivation in India: A High-Profit, Low-Cost Agri-Business", excerpt: "Discover why Oyster mushroom cultivation is transforming small-scale farmers and urban youth into successful business owners in India with its high-profit and low-cost model.", date: "August 12, 2026" },
      { customPath: "/cities/rajasthan/bikaner", title: "Transforming the Desert: The Rise of Commercial Mushroom Farming in Bikaner, Rajasthan", excerpt: "Discover how progressive farmers in Bikaner are turning to highly profitable, climate-proof indoor mushroom farming in the arid Thar desert.", date: "August 12, 2026" },
      { customPath: "/training/online", title: "Master Mushroom Farming from Anywhere: Join the Ultimate Online Training", excerpt: "Learn the precise science of mushroom farming from the comfort of your home with a structured, expert-led online cultivation program.", date: "August 12, 2026" },
      { customPath: "/training/offline", title: "Get Hands-On: Why Offline Mushroom Farming Training is the Ultimate Game-Changer", excerpt: "Learn why physical, offline mushroom farming training is the smartest first investment for your agri-business. Experience a live commercial setup.", date: "August 12, 2026" },
      { customPath: "/cities", title: "Commercial Mushroom Farming Across India: Find the Perfect Setup for Your City", excerpt: "Discover how to build a highly profitable commercial mushroom farm anywhere in India, adapting to local climates and urban spaces.", date: "August 12, 2026" },
      { customPath: "/blog/mushroom-training-guide-english", title: "Master Commercial Mushroom Cultivation: Your Step-by-Step Training Guide in English", excerpt: "Discover the ultimate step-by-step mushroom farming training guide in English. Master substrate science, climate management, and contamination control.", date: "August 12, 2026" },
      { customPath: "/cities/kerala/thiruvananthapuram", title: "Mushroom Farming in Thiruvananthapuram: The New Cash Crop of Kerala\'s Capital", excerpt: "Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.", date: "August 12, 2026" },
      { customPath: "/mushroom-farming-guwahati-assam", title: "Unlocking the Potential of Commercial Mushroom Farming in Guwahati, Assam", excerpt: "Discover why Guwahati is the perfect launchpad for a high-return, low-space commercial mushroom farming business in Northeast India.", date: "August 12, 2026" },
      { customPath: "/contact-form", title: "Take the First Step Towards a Profitable Mushroom Farm Today! 🍄", excerpt: "Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, and turnkey setup.", date: "August 12, 2026" },
      { customPath: "/cities/rajasthan/udaipur", title: "Mushroom Farming in Udaipur: A Royal Opportunity in the City of Lakes", excerpt: "For agri-entrepreneurs in the Mewar region, cultivating organic mushrooms is emerging as one of the most profitable, space-saving, and climate-smart investments today.", date: "August 12, 2026" },
      { customPath: "/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026", title: "How to Grow Mushrooms at Home in India: The Ultimate 2026 Guide (Ghar Par Kaise Ugayein)", excerpt: "Discover how to cultivate highly nutritious mushrooms right inside your house. The perfect beginner-friendly guide to zero-land organic farming in India.", date: "August 12, 2026" },
      { customPath: "/cities/karnataka/mysuru", title: "Mushroom Farming in Mysuru: Harnessing Heritage, Climate & Demand in Karnataka", excerpt: "Discover why Mysuru is uniquely positioned to become a major hub for highly profitable, space-efficient commercial mushroom farming in Karnataka.", date: "August 12, 2026" },
      { customPath: "/cities/west-bengal/siliguri", title: "Why Siliguri is the Ultimate Strategic Hub for Commercial Mushroom Farming in West Bengal", excerpt: "Discover why Siliguri is the perfect location for your mushroom farm, offering a high-profit, low-space business model with an unparalleled strategic advantage.", date: "August 12, 2026" },
      { customPath: "/blog/turnkey-commercial-setup", title: "Why Smart Investors Choose Turnkey Setups Over DIY Commercial Mushroom Farms", excerpt: "Discover why a Turnkey Commercial Mushroom Farm Setup is the smartest strategy to protect your capital and guarantee high yields in the booming commercial mushroom industry.", date: "August 12, 2026" },
      { customPath: "/operations", title: "Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm", excerpt: "Discover why mushroom farm operations require military-grade discipline, strict hygiene, and well-defined workflows to eliminate crop loss and maximize yield.", date: "August 12, 2026" },
      { customPath: "/articles/oyster-mushroom-cultivation-india", title: "Oyster Mushroom Cultivation in India: The Ultimate Low-Cost, High-Profit Agri-Business", excerpt: "Across India, rural farmers, urban youth, and agri-startups are turning to Oyster Mushroom cultivation as a highly lucrative and scalable business model.", date: "August 12, 2026" },
      { customPath: "/compost-unit", title: "The Heart of Button Mushroom Farming: The Science of a Commercial Compost Unit", excerpt: "Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.", date: "August 12, 2026" },
      { customPath: "/services/oyster-mushroom", title: "Why Oyster Mushrooms Are Taking the Culinary & Farming World by Storm", excerpt: "Discover the nutritional power and cultivation benefits of oyster mushrooms. Learn why they are a favorite for farmers and a delicious meat substitute.", date: "August 12, 2026" },
      { id: "commercial-mushroom-farm-setup-training", customPath: "/articles/commercial-mushroom-farm-setup-training", title: "Commercial Mushroom Farm Setup & Training: A Complete Guide to All Varieties", excerpt: "Starting a commercial mushroom venture requires more than just passion; it demands technical know-how, precise climate control, and practical training.", date: "July 29, 2026" },
      { id: "organic-mushroom-farm-everything-you-need-to-know", customPath: "/articles/organic-mushroom-farm-everything-you-need-to-know", title: "Organic Mushroom Farm: Everything You Need to Know", excerpt: "Are you looking to dive into the world of sustainable agriculture, or simply trying to find the freshest produce from an organic mushroom farm?", date: "July 28, 2026" },
      { id: "mushroom-farming-russia", customPath: "/blog/mushroom-farming-russia", title: "Mushroom Farming in Russia: Start Your Profitable Agribusiness", excerpt: "Mushroom farming is becoming one of the fastest-growing agricultural businesses in Russia. Start a successful commercial business today.", date: "July 24, 2026" },
      { id: 1, title: "How to Start Mushroom Farming at Home", excerpt: "A beginner's guide to growing your first batch of mushrooms in small spaces.", date: "April 15, 2027" },
      { id: 2, title: "Top 5 Mistakes New Mushroom Farmers Make", excerpt: "Avoid these common pitfalls that often lead to crop failure in the first cycle.", date: "April 10, 2027" },
      { id: 3, title: "How to Prepare the Perfect Substrate", excerpt: "Master the art of pasteurization and moisture levels for high-yield harvests.", date: "April 02, 2027" }
    ]
  },
  {
    category: "Health & Wellness",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-500/5",
    posts: [
      { customPath: "/blog/organic-mushrooms-health-benefits-nutrition-cultivation-uses", title: "Organic Mushrooms: Health Benefits, Nutrition, Cultivation & Uses", excerpt: "Discover the incredible health benefits of organic mushrooms like Oyster, Button, and Milky. Learn about nutrition, mushroom powder, and healthy pickles.", date: "July 21, 2026" },
      { id: 4, title: "The Brain-Boosting Secrets of Lion’s Mane", excerpt: "Scientific insights into how this mushroom improves focus and memory.", date: "March 28, 2027" },
      { id: 5, title: "Mushrooms vs Meat: The Ultimate Protein Showdown", excerpt: "Comprehensive comparison of nutritional density and environmental impact.", date: "March 20, 2027" },
      { id: 6, title: "Vitamin D Deficiency? Eat Button Mushrooms", excerpt: "How to maximize Vitamin D absorption from your daily mushroom intake.", date: "March 12, 2027" }
    ]
  },
  {
    category: "Business Trends",
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-500/5",
    posts: [
      { id: "mushroom-farming-business-practical-guide", customPath: "/blog/mushroom-farming-business-practical-guide", title: "Mushroom Farming Business: Kam Investment Mein Lakhon Kamane Ka Ek Practical Guide", excerpt: "Agar aap Reddit ya Quora par scroll karte hain, toh aapne ek sawal baar-baar dekha hoga: Kam capital mein sabse accha business kaun sa hai?", date: "August 07, 2026" },
      { id: "mushroom-farming-training-tamil-guide", customPath: "/blog/mushroom-farming-training-tamil-guide", title: "காளான் சாகுபடி பயிற்சி மற்றும் காளான் பண்ணை அமைப்பு: முழுமையான வழிகாட்டி", excerpt: "காளான் சாகுபடி எப்படி தொடங்குவது, என்ன பயிற்சி தேவை, மற்றும் காளான் பண்ணை அமைப்பு (Mushroom Setup) செய்வதற்கான படிப்படியான வழிகாட்டி.", date: "July 20, 2026" },
      { id: "mushroom-training-guide-punjabi", customPath: "/blog/mushroom-training-guide-punjabi", title: "ਕਣਕ-ਝੋਨੇ ਦੇ ਚੱਕਰ ਤੋਂ ਬਾਹਰ: ਪੰਜਾਬ ਦੇ ਕਿਸਾਨਾਂ ਲਈ ਖੁੰਬਾਂ ਦੀ ਖੇਤੀ ਦੀ ਟਰੇਨਿੰਗ ਕਿਉਂ ਬਣ ਰਹੀ ਹੈ ਨਵਾਂ ਰਾਹ", excerpt: "ਪੰਜਾਬ ਵਿੱਚ ਖੁੰਬਾਂ ਦੀ ਖੇਤੀ ਦੀ ਟਰੇਨਿੰਗ ਬਾਰੇ ਪੂਰੀ ਜਾਣਕਾਰੀ। PAU ਲੁਧਿਆਣਾ, KVK, ਅਤੇ ਸੋਲਨ ਤੋਂ ਟਰੇਨਿੰਗ, ਸਬਸਿਡੀ, ਅਤੇ ਮੁਨਾਫੇ ਬਾਰੇ ਜਾਣੋ।", date: "July 17, 2026" },
      { id: "mushroom-training-guide-english", customPath: "/blog/mushroom-training-guide-english", title: "Mushroom Farming Training: The Complete Guide to Starting a Profitable Mushroom Cultivation Business", excerpt: "Where to get trained in mushroom farming, varieties to learn, training costs, government support, and how the profit works in 2026.", date: "July 17, 2026" },
      { id: "mushroom-training-guide-hindi", customPath: "/blog/mushroom-training-guide-hindi", title: "मशरूम ट्रेनिंग कैसे करें: गांव से लेकर शहर तक कमाई का नया जरिया (2026 पूरी गाइड)", excerpt: "अगर आप भी सोच रहे हैं कि मशरूम की खेती सीखकर अपना खुद का बिज़नेस शुरू करूं, तो ये ब्लॉग आपके लिए ही है।", date: "July 17, 2026" },
      { id: "commercial-mushroom-farming-india", customPath: "/blog/commercial-mushroom-farming-india", title: "The Ultimate Guide to Commercial Mushroom Farming in India: Setup, Training, and Scalability", excerpt: "The agricultural landscape in India is experiencing a massive shift, driven by high-yield, space-optimized agribusinesses. Learn about setup, training, and scalability.", date: "July 14, 2026" },
      { id: "7-mushroom-farming-mistakes-india", customPath: "/blog/7-mushroom-farming-mistakes-india", title: "7 Mushroom Farming Mistakes That Cause Crop Failure in India (And How to Avoid Them)", excerpt: "Why Do Many New Mushroom Farmers Fail Within the First Few Months? Learn the most common mistakes and how to avoid them.", date: "July 02, 2026" },
      { id: "mushroom-farming-business-plan-india", customPath: "/blog/mushroom-farming-business-plan-india", title: "Mushroom Farming Business Plan: How to Start a Profitable Mushroom Business in India", excerpt: "Learn how to start a profitable mushroom farming business in India. A step-by-step business plan, setup costs, marketing strategy, and ROI analysis for 2026.", date: "July 02, 2026" },
      { id: "turnkey-commercial-setup", isExternalPage: true, title: "TURNKEY COMMERCIAL MUSHROOM FARM SETUP", excerpt: "Complete EPC Project Consultancy, Climate-Controlled Grow Rooms & Compost Infrastructure by Mushroom Farm Setup", date: "June 28, 2026" },
      { id: "mushroom-training-profit-guide-usa", isExternalPage: true, title: "The Complete Guide to Mushroom Training: How to Start Growing Mushrooms for Profit in the USA", excerpt: "Whether you're in New York, California, Texas, or Florida — this guide is for anyone ready to turn mushroom farming into a real business or side income.", date: "June 25, 2026" },
      { id: "medicinal-mushrooms-income-guide-usa", isExternalPage: true, title: "How Much Can You Really Make Growing Medicinal Mushrooms? (Lion's Mane, Reishi & Chaga Income Guide for USA Growers)", excerpt: "The wellness industry is spending billions on these three mushrooms. Here's how everyday Americans are cashing in — from their garage, basement, or backyard.", date: "June 25, 2026" },
      { id: "mushroom-farming-complete-guide-hinglish-india", isExternalPage: true, title: "Mushroom Farming: Complete Guide for Spawn, Training, Setup, & Business in India", excerpt: "India's most exhaustive roadmap! Covers spawn seed varieties, online/offline training structures, design layout costs, buyback guarantee agreements, and our pan-India services in simple Hinglish.", date: "June 22, 2026" },
      { id: "mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026", isExternalPage: true, title: "Mushroom Farming: Ghar Par Mushroom Kaise Ugayein — India Ka Sabse Complete Guide (2026)", excerpt: "Ghar par mushroom kaise ugayein step-by-step. Button mushroom, oyster, and milky mushroom training guides, cost estimation, spawn info & training centers.", date: "June 10, 2026" },
      { id: "mushroom-farming-training-online-offline-certificate", isExternalPage: true, title: "Mushroom Farming Training – Online & Offline | Certificate ke Saath Seekho Mushroom Kheti", excerpt: "India ka Sabse Affordable Mushroom Training Program | Sirf ₹299 Mein Online Course | Offline Training Jabalpur MP Mein Available. Complete guide with Certificate.", date: "June 01, 2026" },
      { id: "mushroom-farming-training-hindi-india", isExternalPage: true, title: "Mushroom Farming Training — Complete Guide | Mushroom Ki Kheti Sikhein India Mein", excerpt: "India mein mushroom farming training kaise aur kahan se lein? Complete guide in Hindi for offline and online courses.", date: "May 17, 2026" },
      { id: "mushroom-farming-business-plan-hindi-2026", isExternalPage: true, title: "Mushroom Farming Business Plan Kya Hota Hai? | What is a Mushroom Farming Business Plan?", excerpt: "India mein 2026 ke liye complete mushroom farming business plan. Low investment mein mushroom ki kheti shuru karein aur acha profit kamayein.", date: "May 14, 2026" },
      { id: "what-is-mushroom-spawn-beginner-guide-india", isExternalPage: true, title: "What is Mushroom Spawn? Complete Beginner Guide (2026–27)", excerpt: "Learn what mushroom spawn is, the types of spawn, how to use it, and where to buy quality mushroom seeds in India.", date: "May 09, 2026" },
      { id: "oyster-mushroom-cultivation-india", isExternalPage: true, title: "Oyster Mushroom Cultivation: Complete Guide for India", excerpt: "Oyster Mushroom Cultivation (Dhingri Mushroom ki Kheti) aaj India ka sabse fast-growing agribusiness ban chuka hai.", date: "May 05, 2026" },
      { id: "mushroom-farming-beginner-guide-india-2026-2027", isExternalPage: true, title: "What is Mushroom Farming? Complete Beginner Guide India 2026-2027", excerpt: "Mushroom farming in India 2026-2027: Complete beginner guide for mushroom cultivation (mushroom ki kheti), training, spawn, and business plan.", date: "May 02, 2026" },
      { id: 10, title: "Mushroom Farming in India 2027 — Complete Guide", excerpt: "Your ultimate guide to mushroom spawn, training, setup kits, and supply across 28 states of India.", date: "April 30, 2027" },
      { id: 7, title: "Future of Mushroom Farming in India 2027", excerpt: "Analyzing the market shifts and the move towards medicinal mushrooms.", date: "March 05, 2027" },
      { id: 8, title: "Selling Harvest in Local Mandis: A Practical Guide", excerpt: "Tips for negotiation and bulk logistics for first-time mushroom sellers.", date: "Feb 28, 2027" },
      { id: 9, title: "Government Subsidies in MP: Step-by-Step Guide", excerpt: "How to navigate the MP state portal for horticulture grants.", date: "Feb 15, 2027" }
    ]
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Mushroom Farming Blog | Educational & Health Insights" 
        description="Read the latest articles on mushroom cultivation, health benefits of medicinal fungi, and market trends in the Indian agri-business sector." 
      />

      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6">Expert Insights</div>
          <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight">
            The <span className="gradient-text">Fungi Feed</span>
          </h1>
          <p className="dark:text-slate-400 text-slate-600 text-lg leading-relaxed">
            Your daily dose of educational, financial, and wellness content from the world of mushrooms.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {blogPosts.map((column, idx) => (
          <section key={idx}>
            <div className={`inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-2xl ${column.bg} border dark:border-white/5 border-black/5 ${column.color}`}>
              <column.icon size={18} />
              <h2 className="font-black uppercase tracking-widest text-sm">{column.category}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {column.posts.map((post, i) => (
                <motion.div 
                   key={i}
                   whileHover={{ y: -5 }}
                   className="glass p-8 rounded-[2.5rem] border dark:border-white/5 border-black/5 flex flex-col h-full hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> Expert Team</span>
                  </div>
                  <h3 className="dark:text-white text-slate-900 font-bold text-[15px] md:text-base mb-3 leading-snug group-hover:text-primary-start transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={(post as any).customPath || (post.isExternalPage ? `/articles/${post.id}` : `/blog/${post.id}`)} 
                    className="text-primary-start font-bold text-xs uppercase tracking-widest flex items-center gap-2 mt-auto w-fit border-b border-primary-start/20 pb-1"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[4rem] border dark:border-white/10 border-black/10 text-center">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Never Miss an Update</h2>
            <p className="dark:text-slate-400 text-slate-600 mb-8 max-w-lg mx-auto">Get the latest market price updates and farming SOPs delivered straight to your inbox.</p>
            <div id="mc_embed_shell">
                  <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
              <style type="text/css">
                    {`#mc_embed_signup{background:transparent; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%; max-width: 600px; margin: 0 auto;}
                    #mc_embed_signup label, #mc_embed_signup .indicates-required {color: var(--text-heading);}
                    #mc_embed_signup h2 {color: var(--text-heading);}
                    #mc_embed_signup input.email {border-radius: 8px; border: 1px solid var(--glass-border); background: var(--bg-alt); color: var(--text-heading);}
                    #mc_embed_signup input.button {background-color: var(--color-primary-start); color: white; border-radius: 8px;}
                    `}
            </style>
            <div id="mc_embed_signup">
                <form action="https://gmail.us3.list-manage.com/subscribe/post?u=1d6033f192756e322bdf749ea&amp;id=fb8e6fe459&amp;f_id=00cdcfe0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required defaultValue="" /></div>
                    <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                        <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                    </div>
                <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
                    <input type="text" name="b_1d6033f192756e322bdf749ea_fb8e6fe459" tabIndex={-1} defaultValue="" />
                </div>
                    <div className="optionalParent" style={{ marginTop: '20px' }}>
                        <div className="clear foot" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button !bg-primary-start" defaultValue="Subscribe" />
                            <p style={{margin: "10px auto 0"}}><a href="http://eepurl.com/bACEnyjC7lT" title="Mailchimp - email marketing made easy and fun"><span style={{display: "inline-block", backgroundColor: "transparent", borderRadius: "4px"}}><img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: "220px", height: "40px", display: "flex", padding: "2px 0px", justifyContent: "center", alignItems: "center"}}  width="1000" height="295" /></span></a></p>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
