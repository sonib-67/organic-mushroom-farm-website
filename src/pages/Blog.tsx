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
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            The <span className="gradient-text">Fungi Feed</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Your daily dose of educational, financial, and wellness content from the world of mushrooms.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {blogPosts.map((column, idx) => (
          <section key={idx}>
            <div className={`inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-2xl ${column.bg} border border-white/5 ${column.color}`}>
              <column.icon size={18} />
              <h2 className="font-black uppercase tracking-widest text-sm">{column.category}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {column.posts.map((post, i) => (
                <motion.div 
                   key={i}
                   whileHover={{ y: -5 }}
                   className="glass p-8 rounded-[2.5rem] border border-white/5 flex flex-col h-full hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> Expert Team</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 leading-tight group-hover:text-primary-start transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={post.isExternalPage ? `/articles/${post.id}` : `/blog/${post.id}`} 
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
        <div className="max-w-4xl mx-auto glass p-12 rounded-[4rem] border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">Get the latest market price updates and farming SOPs delivered straight to your inbox.</p>
            <div id="mc_embed_shell">
                  <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
              <style type="text/css">
                    {`#mc_embed_signup{background:transparent; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%; max-width: 600px; margin: 0 auto;}
                    #mc_embed_signup label, #mc_embed_signup .indicates-required {color: white;}
                    #mc_embed_signup h2 {color: white;}
                    #mc_embed_signup input.email {border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.5); color: white;}
                    #mc_embed_signup input.button {background-color: var(--primary-start); color: white; border-radius: 8px;}
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
                            <p style={{margin: "10px auto 0"}}><a href="http://eepurl.com/bACEnyjC7lT" title="Mailchimp - email marketing made easy and fun"><span style={{display: "inline-block", backgroundColor: "transparent", borderRadius: "4px"}}><img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: "220px", height: "40px", display: "flex", padding: "2px 0px", justifyContent: "center", alignItems: "center"}} /></span></a></p>
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
