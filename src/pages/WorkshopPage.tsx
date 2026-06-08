import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Star, ShieldCheck, CheckCircle, Clock, 
  PlayCircle, Users, Mail, ArrowRight, Menu, X, Leaf,
  Briefcase,
  TrendingUp,
  Award
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { loadRazorpayScript } from '../utils/razorpay';
import SEO from '../components/SEO';

const WorkshopPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  useEffect(() => {
    if (location.state && (location.state as any).retryFormData) {
      const data = (location.state as any).retryFormData;
      setFormData(data);
      setShowCheckout(true);
      // Clear location state to prevent re-opening on tab reload
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    loadRazorpayScript();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePayment = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.phone || formData.phone.length < 10) {
      setShowCheckout(true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          productType: 'workshop',
          name: formData.name,
          email: formData.name.replace(/\s+/g, '').toLowerCase() + '@example.com',
          mobile: formData.phone
        })
      });
      
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Failed to fetch payload');

      const options = {
        key: payload.key_id,
        amount: payload.amount,
        currency: payload.currency,
        name: payload.name,
        description: payload.description,
        prefill: { ...payload.prefill, contact: formData.phone, name: formData.name },
        notes: payload.notes,
        theme: payload.theme,
        handler: function (response: any) {
          navigate('/payment-success');
          setLoading(false);
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            navigate('/payment-cancelled', {
              state: {
                amount: 19900,
                currency: 'INR',
                productName: 'Mushroom Farming Workshop',
                from: window.location.pathname,
                formData: formData
              }
            });
          }
        }
      };

      await loadRazorpayScript();
      if (typeof window !== "undefined" && (window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
             navigate('/payment-cancelled', {
               state: {
                 amount: 19900,
                 currency: 'INR',
                 productName: 'Mushroom Farming Workshop',
                 from: window.location.pathname,
                 formData: formData
               }
             });
        });
        rzp.open();
      } else {
        throw new Error("Razorpay not loaded");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to initiate payment. Please try again.");
      setLoading(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Workshop", href: "#workshop" },
    { name: "Benefits", href: "#benefits" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="font-sans dark:bg-[#0a0f0d] bg-slate-50 dark:text-white text-slate-900 min-h-screen overflow-x-hidden selection:bg-green-500/30">
      
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'dark:bg-[#0a0f0d]/80 bg-white/80 backdrop-blur-md border-b dark:border-white/5 border-black/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1779785300/d91bc495-04ad-4214-ad23-5abdd9bf370d_gzmzqt.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-base md:text-lg tracking-tight dark:text-white text-slate-900 whitespace-nowrap">Organic Mushroom Farm</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-10 md:pt-40 md:pb-24 px-4 relative">
        <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none opacity-50"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 text-sm font-medium text-purple-600 dark:text-purple-400 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Workshop Starting soon
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight mb-2 md:mb-4 leading-snug md:leading-[1.2]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
              Start Your Profitable <br />
              Mushroom Farming Business
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-lg dark:text-slate-300 text-slate-700 mb-4 md:mb-8 max-w-2xl font-light px-2"
          >
            Learn Oyster, Button & Milky Mushroom Farming from Experts. A complete step-by-step masterclass to launch your agribusiness.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 mb-6 md:mb-10 w-full px-4 sm:px-0 sm:w-auto"
          >
            <button onClick={handlePayment} className="group relative w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-4 bg-white text-black font-bold rounded-full overflow-hidden text-sm md:text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center justify-center gap-2">
                Reserve Your Seat <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <div className="flex items-center justify-center gap-2 dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 px-6 py-2.5 md:py-4 rounded-full backdrop-blur-sm w-full sm:w-auto">
              <span className="text-xs md:text-sm font-medium dark:text-slate-300 text-slate-700">Only</span>
              <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">₹199</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 max-w-4xl mx-auto w-full px-2 lg:px-0"
          >
            <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 backdrop-blur-sm">
              <Users className="w-6 h-6 text-purple-400 mb-2 md:mb-3" />
              <h3 className="text-lg md:text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">5000+</h3>
              <p className="text-xs md:text-sm dark:text-slate-400 text-slate-600">Students</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 backdrop-blur-sm">
              <MapPin className="w-6 h-6 text-blue-400 mb-2 md:mb-3" />
              <h3 className="text-lg md:text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Pan India</h3>
              <p className="text-xs md:text-sm dark:text-slate-400 text-slate-600">Reach</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 backdrop-blur-sm">
              <Clock className="w-6 h-6 text-green-400 mb-2 md:mb-3" />
              <h3 className="text-lg md:text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">24x7</h3>
              <p className="text-xs md:text-sm dark:text-slate-400 text-slate-600">Support</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="px-4 pb-8 md:pb-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border dark:border-white/10 border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
            <img 
              src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1780901052/Screenshot_2026-06-08_120816_pittyu.png" 
              alt="Mushroom Farming Workshop" 
              className="w-full h-auto object-cover md:h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="benefits" className="py-12 md:py-24 bg-[#050806] relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Why Join This Workshop</h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto text-sm md:text-lg px-2">Everything you need to build a successful and highly profitable mushroom farming business from scratch.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              { title: "Low Investment", desc: "Start with minimal capital and space. High returns on investment.", icon: TrendingUp },
              { title: "High Profit", desc: "Learn to maximize yield and select high-demand mushroom varieties.", icon: Award },
              { title: "Lifetime Guidance", desc: "Mushroom farming requires continuous support. We provide lifetime handholding.", icon: Clock },
              { title: "Step-by-Step Training", desc: "From compost preparation to harvesting and packaging.", icon: Briefcase },
              { title: "Business Setup Support", desc: "Guidance on farm design, climate control, and required infrastructure.", icon: Briefcase },
              { title: "Marketing Training", desc: "Don't just grow, know how to sell. Learn B2B and Direct-to-Consumer marketing.", icon: Users },
            ].map((feature, i) => (
              <div key={i} className="dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/[0.05] border-black/[0.05] hover:border-purple-500/30 p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all hover:dark:bg-white/[0.05] bg-black/[0.05] group">
                {i === 3 ? <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mb-2 md:mb-4 group-hover:scale-110 transition-transform" /> : 
                 feature.icon && <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mb-2 md:mb-4 group-hover:scale-110 transition-transform" />}
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">{feature.title}</h3>
                <p className="text-xs md:text-sm dark:text-slate-400 text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="workshop" className="py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Workshop Gallery</h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto text-sm md:text-lg px-2">Glimpses of our successful mushroom farm setups and hands-on training sessions across India.</p>
          </div>

          {/* Top Row - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4 items-start">
            <div className="rounded-2xl overflow-hidden relative group border dark:border-white/10 border-black/10">
              <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1780901050/Screenshot_2026-06-08_120804_myrcoc.png" alt="Gallery" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group border dark:border-white/10 border-black/10">
              <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1780900956/Screenshot_2026-06-08_120832_z6sizr.png" alt="Gallery" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group border dark:border-white/10 border-black/10">
              <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1780900921/Screenshot_2026-06-08_120840_ichkxe.png" alt="Gallery" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group border dark:border-white/10 border-black/10">
              <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png" alt="Gallery" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
          
          {/* Bottom Row - 4 items (2 columns) */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 items-start">
            <div className="rounded-2xl overflow-hidden relative group border dark:border-white/10 border-black/10">
              <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-01-30_124943_ylpdme.png" alt="Gallery" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group border dark:border-white/10 border-black/10">
              <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png" alt="Gallery" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group border dark:border-white/10 border-black/10">
              <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378181/Screenshot_2026-02-22_165318_cyla5n.png" alt="Gallery" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group border dark:border-white/10 border-black/10">
              <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378062/images_wrrupm.jpg" alt="Gallery" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-24 bg-[#050806]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Watch Real Mushroom Training</h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto text-sm md:text-lg px-2">See our experts in action and learn what happens inside a commercial organic mushroom farm.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="rounded-3xl overflow-hidden border-2 dark:border-white/5 border-black/5 hover:border-emerald-500/50 transition-colors dark:bg-white/5 bg-black/5 p-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
              <div className="aspect-video rounded-2xl overflow-hidden relative">
                <iframe 
                  className="absolute inset-0 w-full h-full" 
                  src="https://www.youtube.com/embed/mhGkQHhpTDg" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border-2 dark:border-white/5 border-black/5 hover:border-emerald-500/50 transition-colors dark:bg-white/5 bg-black/5 p-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
               <div className="aspect-video rounded-2xl overflow-hidden relative">
                <iframe 
                  className="absolute inset-0 w-full h-full" 
                  src="https://www.youtube.com/embed/43Thvrlr1-Y" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="reviews" className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Student Success Stories</h2>
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-3 md:mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-yellow-500" />)}
            </div>
            <p className="dark:text-slate-300 text-slate-700 font-medium text-sm md:text-lg">Rated 4.9/5 by 5,000+ happy farmers across India</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { text: "Workshop bahut helpful tha. Maine 2 mahine me apna mushroom business start kar diya.", author: "Rahul Verma", role: "Mushroom Farmer, UP" },
              { text: "Sir ne practical knowledge diya aur marketing bhi sikhayi. Highly recommended!", author: "Pooja Sharma", role: "Agri-Entrepreneur, MP" },
              { text: "Only ₹199 me itna valuable training expected nahi tha. Best investment ever.", author: "Aman Patel", role: "Business Owner, Gujarat" },
            ].map((review, i) => (
              <div key={i} className="bg-gradient-to-b dark:from-white/10 from-black/10 dark:to-white/5 to-black/5 border dark:border-white/10 border-black/10 backdrop-blur-md p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl relative">
                <div className="absolute -top-6 -right-6 text-purple-500/10 md:text-purple-500/20 text-9xl leading-none font-serif">"</div>
                <div className="flex gap-1 mb-4 md:mb-6 relative z-10">
                   {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 md:w-4 md:h-4 text-[#FFD700] fill-[#FFD700]" />)}
                </div>
                <p className="text-sm md:text-lg text-slate-200 mb-6 md:mb-8 relative z-10 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3 md:gap-4 relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-900 border-2 border-purple-500 flex items-center justify-center dark:text-white text-slate-900 font-bold text-lg md:text-xl uppercase">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">{review.author}</h4>
                    <p className="text-xs md:text-sm text-blue-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-24 dark:bg-[#050806] bg-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-br from-purple-500/20 dark:via-white/10 via-black/10 to-transparent border dark:border-white/20 border-black/20 rounded-[2rem] p-1 md:p-2 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
            <div className="dark:bg-[#0a0f0d] bg-white rounded-[1.8rem] p-6 md:p-12 relative overflow-hidden">
               {/* Gold Accent Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-[80px]"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                 <div className="flex-1 text-center md:text-left">
                    <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 md:mb-6">
                      Limited Time Offer
                    </div>
                    <h2 className="text-xl md:text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Complete Mushroom Farming Masterclass</h2>
                    <p className="dark:text-slate-400 text-slate-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">Everything you need to successfully grow and sell organic mushrooms.</p>
                    
                    <ul className="space-y-3 md:space-y-4 text-left">
                      {[
                        "Full Workshop Access",
                        "Lifetime Support",
                        "Business Guidance",
                        "PDF Notes & Resources",
                        "WhatsApp Community Access"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                          <span className="text-sm md:text-base font-medium text-slate-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
                 
                 <div className="w-full md:w-auto bg-gradient-to-b from-white/5 to-transparent border dark:border-white/10 border-black/10 rounded-2xl md:rounded-3xl p-5 md:p-8 text-center min-w-[280px]">
                    <p className="dark:text-slate-400 text-slate-600 font-medium mb-1 md:mb-2 text-sm md:text-base">One-time payment</p>
                    <div className="flex items-start justify-center gap-1 mb-4 md:mb-6">
                      <span className="text-xl md:text-2xl font-bold dark:text-slate-300 text-slate-700 mt-2">₹</span>
                      <span className="text-4xl md:text-6xl font-black dark:text-white text-slate-900">199</span>
                      <span className="text-lg md:text-xl text-slate-500 line-through mt-1 md:mt-2 ml-2">₹1999</span>
                    </div>
                    
                    <button onClick={handlePayment} className="w-full py-3 md:py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 rounded-xl font-bold text-base md:text-lg shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all hover:-translate-y-1 mb-3 md:mb-4 flex justify-center items-center gap-2">
                       Pay & Join Now <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-xs text-slate-500 flex items-center justify-center gap-1 mt-3">
                      <ShieldCheck className="w-4 h-4" /> 100% Secure SSL Payment
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-xl md:text-3xl font-black mb-8 md:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Frequently Asked Questions</h2>
           
           <div className="space-y-3 md:space-y-4">
             {[
               { q: "Is this suitable for beginners?", a: "Yes! 90% of our successful students started with zero farming background. We teach from scratch." },
               { q: "Do I need a large farm space to start?", a: "Absolutely not. You can start oyster mushroom farming in a 10x10 ft room in your house." },
               { q: "How do I sell my mushrooms?", a: "We cover complete marketing strategies, B2B tie-ups, and direct sales techniques in the workshop." },
               { q: "Will I get support after the workshop?", a: "Yes, you get lifetime access to our private WhatsApp community for continuous expert support." }
             ].map((faq, i) => (
               <div key={i} className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl md:rounded-2xl p-4 md:p-6">
                 <h3 className="text-base md:text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">{faq.q}</h3>
                 <p className="text-sm md:text-base dark:text-slate-400 text-slate-600">{faq.a}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <footer id="contact" className="dark:bg-black bg-slate-50 pt-12 pb-20 md:pb-10 border-t dark:border-white/10 border-black/10 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
            <div>
               <Link to="/" className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                    <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1779785300/d91bc495-04ad-4214-ad23-5abdd9bf370d_gzmzqt.jpg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bold text-2xl tracking-tight dark:text-white text-slate-900">Organic Mushroom Farm</span>
               </Link>
               <p className="dark:text-slate-400 text-slate-600 mb-8 max-w-sm">Empowering Indian farmers and entrepreneurs with modern, highly profitable organic mushroom farming methods.</p>
               
               <div className="space-y-4">
                 <a href="tel:9203544140" className="flex items-center gap-3 dark:text-slate-300 text-slate-700 hover:text-purple-400 transition-colors">
                   <Phone className="w-5 h-5 text-purple-400" /> +91 9203544140
                 </a>
                 <a href="mailto:support@mushroomtraining.online" className="flex items-center gap-3 dark:text-slate-300 text-slate-700 hover:text-blue-400 transition-colors">
                   <Mail className="w-5 h-5 text-blue-400 shrink-0" /> <span className="break-all md:break-normal">support@mushroomtraining.online</span>
                 </a>
               </div>
            </div>
            
            <div className="flex flex-col md:items-end justify-center">
               <div className="text-center md:text-right dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-2xl p-8 backdrop-blur-md max-w-sm">
                 <h4 className="text-lg md:text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Ready to Start?</h4>
                 <p className="dark:text-slate-400 text-slate-600 mb-6 text-sm">Join 5000+ others who have already transformed their lives.</p>
                 <button onClick={handlePayment} className="w-full py-3 bg-white text-black font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform">
                   Join Workshop Now
                 </button>
               </div>
            </div>
          </div>
          
          <div className="border-t dark:border-white/10 border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
             <p className="text-slate-500 text-sm">© 2026 Organic Mushroom Farm. All rights reserved.</p>
             <div className="flex gap-6 text-sm text-slate-500">
               <Link to="/terms" className="hover:dark:text-white text-slate-900 transition-colors">Terms</Link>
               <Link to="/privacy" className="hover:dark:text-white text-slate-900 transition-colors">Privacy</Link>
               <Link to="/refund-policy" className="hover:dark:text-white text-slate-900 transition-colors">Refund Policy</Link>
             </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Container */}
      <div className="fixed bottom-0 left-0 right-0 p-4 dark:bg-black/80 bg-white/80 backdrop-blur-lg border-t dark:border-white/10 border-black/10 md:hidden z-40">
         <button onClick={() => handlePayment()} className="w-full py-3.5 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2">
           Pay & Join Now - ₹199 <ArrowRight className="w-5 h-5" />
         </button>
      </div>

      {/* WhatsApp Floating */}
      <a 
        href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20Mushroom%20Farming%20Workshop" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-[90px] md:bottom-6 right-4 z-50 bg-[#25D366] hover:bg-[#128C7E] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white ml-0.5 mt-0.5" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="dark:bg-[#0a0f0d] bg-white border dark:border-white/10 border-black/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            >
              <button onClick={() => setShowCheckout(false)} className="absolute top-4 right-4 dark:text-slate-400 text-slate-600 hover:dark:text-white text-slate-900 transition-colors">
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Join Workshop</h3>
              <p className="dark:text-slate-400 text-slate-600 mb-6 text-sm">Please provide your details so we can send you the access link on WhatsApp.</p>
              
              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 dark:text-white text-slate-900 focus:outline-none focus:border-green-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-1">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                    className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 dark:text-white text-slate-900 focus:outline-none focus:border-green-500"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold shadow-lg hover:shadow-green-500/25 transition-all disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Proceed to Pay ₹199'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default WorkshopPage;
