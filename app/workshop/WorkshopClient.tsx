"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Calendar,
  Users,
  Award,
  Video,
  FileText,
  Download,
  Gift,
  ArrowRight,
  ChevronDown,
  X,
  PhoneCall,
  MessageCircle,
  HelpCircle,
  BookOpen,
  DollarSign,
  Star,
  Check,
  Zap,
  Building2,
  Sprout,
  Layers,
  Thermometer,
  Percent,
  Mail,
  User,
  Phone,
  MapPin,
  Flame,
  BadgeAlert
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function WorkshopClientPage() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    interest: "Button Mushroom",
  });
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeModule, setActiveModule] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openCheckoutWithInterest = (selectedInterest?: string) => {
    if (selectedInterest) {
      setFormData((prev) => ({ ...prev, interest: selectedInterest }));
    }
    setShowCheckout(true);
  };

  const handlePayment = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      alert("Please enter a valid 10-digit WhatsApp number.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      alert("Please enter a valid email address to receive your webinar link and handbook.");
      return;
    }

    setLoading(true);
    setPaymentStatus("idle");

    try {
      // 1. Create Order & Send "Initiated" Notification via Backend API
      const orderRes = await fetch("/api/workshop/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          interest: formData.interest,
          amount: 199,
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok) throw new Error(orderData.error || "Failed to initiate order");

      // 2. Open Razorpay Checkout
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Organic Mushrooms Farm",
        description: "Mushroom Farming Live Workshop - ₹199",
        order_id: orderData.orderId,
        handler: async function (response: any) {
          // 3. Verify Payment & Send "Success" Email via Backend API
          try {
            const verifyRes = await fetch("/api/workshop/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                city: formData.city,
                interest: formData.interest,
                amount: 199,
              }),
            });
            const verifyData = await verifyRes.json();

            if (verifyRes.ok) {
              setPaymentStatus("success");
              setTimeout(() => {
                setShowCheckout(false);
                setPaymentStatus("idle");
              }, 4500);
            } else {
              throw new Error(verifyData.error || "Verification failed");
            }
          } catch (err) {
            console.error("Verification error:", err);
            setPaymentStatus("error");
          }
        },
        modal: {
          ondismiss: async function () {
            setLoading(false);
            try {
              await fetch("/api/workshop/cancel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: formData.name,
                  phone: formData.phone,
                  email: formData.email,
                  reason: "User closed Razorpay checkout modal",
                }),
              });
            } catch (e) {
              console.error("Cancel reporting error", e);
            }
          },
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#059669", // Emerald 600
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", async function (response: any) {
        try {
          await fetch("/api/workshop/cancel", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              reason: `Payment Failed: ${response.error?.description || "Unknown failure"}`,
            }),
          });
        } catch (e) {
          console.error("Failed reporting error", e);
        }
        setLoading(false);
        setPaymentStatus("error");
      });

      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Failed to initialize payment gateway. Please try again or WhatsApp us directly.");
      setLoading(false);
    }
  };

  const modules = [
    {
      id: 1,
      title: "Module 1: Fungal Biology & Indian Market Economics",
      duration: "30 Mins",
      points: [
        "Why Button, Oyster & Milky mushrooms have skyrocketing demand in India (2026-2030 forecast)",
        "Detailed comparison of Capital Investment vs. Profit Margins for each species",
        "Understanding mycelium life-cycle, environmental thresholds, and yield ratios",
        "How ordinary farmers generate ₹50,000 to ₹3,00,000/month on compact land areas",
      ],
      icon: Sprout,
    },
    {
      id: 2,
      title: "Module 2: 100% Natural Composting & Substrate Preparation",
      duration: "40 Mins",
      points: [
        "Wheat Straw vs. Paddy Straw vs. Bagasse: Best raw materials for Indian climate",
        "Phase-I Composting without toxic chemicals: Mixing organic cakes and chicken manure",
        "Phase-II Steam Pasteurization: Natural conditioning without carcinogenic formaldehyde",
        "Checking pH (7.2-7.8), moisture (68-72%), and zero-ammonia clearance tests",
      ],
      icon: Layers,
    },
    {
      id: 3,
      title: "Module 3: Spawning, Bagging & Incubation Chambers",
      duration: "35 Mins",
      points: [
        "How to select 100% pure F1 master spawn and avoid contaminated dead seeds",
        "Spawning rates (0.5% - 0.7%), layer vs. through spawning practical methodology",
        "Polybag packing techniques, aeration filters, and racking systems",
        "Incubation microclimate control: 22°C - 25°C temperature & mycelial run in dark conditions",
      ],
      icon: Thermometer,
    },
    {
      id: 4,
      title: "Module 4: Casing Soil, Pinhead Induction & Cropping Flushes",
      duration: "35 Mins",
      points: [
        "Formulating chemical-free casing using coir pith, peat, and Trichoderma bio-agent",
        "Pinhead shocking: Triggering uniform fruiting through fresh air exchange (CO2 < 1000 ppm)",
        "Maintaining 85% - 90% relative humidity using misting nozzles & foggers",
        "Managing Flush 1, Flush 2, and Flush 3 harvesting schedules without cap discoloration",
      ],
      icon: Building2,
    },
    {
      id: 5,
      title: "Module 5: Natural Pest Control, Harvesting & Cold Storage",
      duration: "20 Mins",
      points: [
        "Integrated Pest Management (IPM): Sciarid fly sticky traps and cold-pressed neem bio-sprays",
        "Preventing Green Mold, Wet Bubble, and Bacterial Blotch naturally without Bavistin",
        "Harvesting twisting technique to preserve compost beds and mushroom shelf life",
        "Pre-cooling, punnet packaging, and cold-chain transport for zero weight loss",
      ],
      icon: ShieldCheck,
    },
    {
      id: 6,
      title: "Module 6: Business Setup, Govt Subsidies & Market Selling Blueprints",
      duration: "20 Mins + Q&A",
      points: [
        "How to secure 40% - 50% capital subsidies under NHB, MIDH & NABARD schemes",
        "Detailed Project Report (DPR) formulation for commercial bank financing",
        "How to sell mushrooms directly to 5-star hotels, wholesale mandis, and retail chains",
        "Live interactive Q&A: Ask the master cultivator your specific personal questions",
      ],
      icon: DollarSign,
    },
  ];

  const bonuses = [
    {
      title: "Complete 80+ Page Commercial Mushroom Handbook (PDF)",
      value: "₹1,499",
      desc: "Comprehensive illustrated SOP manual covering button, oyster, and milky cultivation with precise temperature charts.",
      icon: BookOpen,
    },
    {
      title: "Bankable DPR & Financial Feasibility Calculator (Excel)",
      value: "₹1,999",
      desc: "Ready-to-use economic spreadsheet to calculate your exact project setup cost, recurring expenses, and ROI.",
      icon: FileText,
    },
    {
      title: "Pan-India Verified Spawn & Equipment Supplier Directory",
      value: "₹999",
      desc: "Direct contact numbers of tested organic spawn laboratories, PUF panel makers, and chiller manufacturers.",
      icon: Users,
    },
    {
      title: "Full HD Session Recording Access (30 Days)",
      value: "₹999",
      desc: "Missed something or want to review? Watch the complete high-definition recording anytime on mobile or laptop.",
      icon: Video,
    },
    {
      title: "Digital Certificate of Participation",
      value: "₹499",
      desc: "Official verifiable certificate awarded by Organic Mushroom Farm acknowledging your completed training.",
      icon: Award,
    },
    {
      title: "VIP WhatsApp Grower Support Community Access",
      value: "Priceless",
      desc: "Connect with fellow commercial farmers, share room updates, and receive guidance from our farm engineers.",
      icon: MessageCircle,
    },
  ];

  const testimonials = [
    {
      name: "Rajeshwar Patil",
      location: "Pune, Maharashtra",
      type: "Commercial Oyster & Button Grower",
      quote:
        "The ₹199 workshop cleared 2 years of confusion from random YouTube videos. The natural composting and temperature control modules helped me set up my first 3-room unit without chemical sprays. Now harvesting 80kg fresh daily!",
      rating: 5,
    },
    {
      name: "Gurpreet Singh",
      location: "Ludhiana, Punjab",
      type: "Paddy Straw Mushroom Setup",
      quote:
        "Practical and to the point. No fluff. The subsidy and DPR explanation was eye-opening. We utilized our wheat and paddy straw and received NHB guidance. Highly recommend to everyone entering agri-business.",
      rating: 5,
    },
    {
      name: "Dr. Ananya Sen",
      location: "Kolkata, West Bengal",
      type: "Terrace & Home Cultivator",
      quote:
        "I was worried I wouldn't have time, but having the 30-day recording access and the PDF handbook made it effortless. Within 4 weeks, my oyster bags were pinning beautifully. Clean, chemical-free, and delicious!",
      rating: 5,
    },
    {
      name: "Karthik Raja",
      location: "Coimbatore, Tamil Nadu",
      type: "Milky & Button Project",
      quote:
        "The direct supplier contact list alone is worth 10x the ticket price. I sourced genuine F1 spawn and humidifiers without getting scammed by brokers. Thank you Organic Mushroom Farm team!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "How will I receive the workshop link and login details?",
      a: "Immediately upon completing your payment of ₹199, you will receive an instant confirmation on your WhatsApp number and Email. The private webinar link (Zoom/Google Meet) and calendar reminder will be sent 24 hours and 1 hour before the live session.",
    },
    {
      q: "What if I cannot attend the live session due to personal emergency?",
      a: "Don't worry at all! Every registered participant receives full 30-day access to the high-definition recorded session, along with all downloadable bonuses, PDF manuals, and Excel calculators.",
    },
    {
      q: "What language will the workshop be conducted in?",
      a: "The workshop is delivered in easy-to-understand Hinglish (clear blend of Hindi & English) with visual slide presentations and farm photos so participants from all states in India can easily follow.",
    },
    {
      q: "Is this suitable for a complete beginner with zero farming background?",
      a: "Yes! 70% of our attendees are complete beginners, engineers, salaried professionals, or hobbyists. We start from ground-level basics and guide you step-by-step into commercial operations.",
    },
    {
      q: "Are there any hidden costs after the ₹199 registration?",
      a: "None whatsoever. The ₹199 registration fee includes the 3-hour live workshop, Q&A session, 30-day recording access, and all ₹4,999 worth of bonus materials and directories.",
    },
    {
      q: "Will I get a certificate after completing the workshop?",
      a: "Yes, you will receive an official digital Certificate of Participation from Organic Mushroom Farm that you can print, frame, or attach to project reports.",
    },
  ];

  return (
    <>
      {/* Load Razorpay SDK */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      {/* 3D Ambient Glowing Mesh Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[8%] left-[10%] w-[500px] h-[500px] bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute top-[35%] right-[8%] w-[520px] h-[520px] bg-teal-500/15 dark:bg-teal-500/15 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[15%] left-[12%] w-[480px] h-[480px] bg-purple-500/15 dark:bg-purple-500/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 flex-wrap pt-2"
        >
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <span className="text-slate-400 dark:text-slate-600">/</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">
            Live Mushroom Farming Workshop
          </span>
        </nav>

        {/* Hero Section - 3D Glass Header */}
        <section className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-emerald-950/5 dark:shadow-black/50">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-purple-500" />

          {/* Top Urgent Alert Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30 animate-pulse">
              <Flame className="w-3.5 h-3.5" /> Next Batch This Sunday 11:00 AM IST
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> 3-Hour Live Interactive Masterclass
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
              <Award className="w-3.5 h-3.5" /> Certification + Free Bonuses
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.18]">
                Master Commercial{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-200">
                  Mushroom Farming
                </span>{" "}
                in 3 Hours
              </h1>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Join India&apos;s most practical online masterclass by <strong>Organic Mushroom Farm</strong>. Learn how to grow high-demand <strong>Button, Oyster &amp; Milky mushrooms</strong> without harmful chemicals, master natural compost making, unlock 40-50% government subsidies, and tap into lucrative B2B markets.
              </p>

              {/* Quick Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-emerald-500/5 dark:bg-white/[0.02] border border-emerald-500/20 flex flex-col gap-1">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Duration</span>
                  <span className="text-xs font-black text-slate-900 dark:text-white">3 Hours Live</span>
                </div>
                <div className="p-3 rounded-2xl bg-teal-500/5 dark:bg-white/[0.02] border border-teal-500/20 flex flex-col gap-1">
                  <Video className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Mode</span>
                  <span className="text-xs font-black text-slate-900 dark:text-white">Live + HD Recording</span>
                </div>
                <div className="p-3 rounded-2xl bg-purple-500/5 dark:bg-white/[0.02] border border-purple-500/20 flex flex-col gap-1">
                  <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Credential</span>
                  <span className="text-xs font-black text-slate-900 dark:text-white">Govt Aligned Cert</span>
                </div>
              </div>

              {/* Rating & Social Proof Strip */}
              <div className="flex items-center gap-3 pt-2 text-xs text-slate-600 dark:text-slate-400 flex-wrap">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900 dark:text-white">4.9/5</span>
                <span>•</span>
                <span>Over <strong>5,200+</strong> participants trained nationwide</span>
              </div>
            </div>

            {/* Right Registration Card - 3D Frosted Glass */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-3xl backdrop-blur-2xl bg-white/90 dark:bg-slate-950/80 border-2 border-emerald-500/40 p-6 sm:p-7 shadow-2xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white">
                      Early Bird 90% OFF
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-1">
                      Reserve Your Spot Now
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="line-through text-xs text-slate-400">₹1,999</span>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                      ₹199
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Fill details below to get instant webinar link &amp; bonus materials sent to your WhatsApp and Email:
                </p>

                {/* Inline Quick Registration Form */}
                <form onSubmit={handlePayment} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-emerald-500" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                        })
                      }
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-emerald-500" /> Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        State / City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Bhopal, MP"
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Mushroom Focus
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      >
                        <option value="Button Mushroom">Button Mushroom</option>
                        <option value="Oyster Mushroom">Oyster Mushroom</option>
                        <option value="Milky Mushroom">Milky Mushroom</option>
                        <option value="Commercial Turnkey Project">Turnkey Farm Project</option>
                        <option value="All Species Overview">All Species Overview</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Connecting Gateway...</span>
                    ) : (
                      <>
                        <span>Pay ₹199 &amp; Join Live Workshop</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 100% Secure Payment
                  </span>
                  <span>UPI / Cards / NetBanking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Attend This Workshop (Key Differentiators) */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Zap className="w-4 h-4" /> Real Commercial Experience
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Why 90% of Mushroom Growers Struggle &amp; How We Fix It
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Most beginners rely on generic YouTube tips that lead to compost rot, green mold outbreaks, or zero harvest flushes. Our masterclass gives you the precise industrial blueprints used by profitable commercial plants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3">
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-2.5 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Zero Toxic Formalin &amp; Bavistin
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Learn modern steam-based natural pasteurization and bio-fungicides like Trichoderma to protect your farm without carcinogenic chemical fumigants.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-2.5 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                40% - 50% Government Subsidies
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Unlock national schemes (MIDH, NHB, NABARD) with ready-to-use Bankable Project Reports (DPR) so you do not fund the entire farm from personal savings.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-2.5 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Direct B2B Market Linkages
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Learn how to bypass predatory middleman mandis and supply directly to premium star hotels, organic retail outlets, and dehydration processors.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive 6-Module Curriculum */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <BookOpen className="w-4 h-4" /> Comprehensive 3-Hour Roadmap
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Detailed Workshop Syllabus &amp; Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Click through the modules to explore what will be covered step-by-step during the live session:
            </p>
          </div>

          {/* Module Selector Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeModule === m.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
                }`}
              >
                <span>Module {m.id}</span>
              </button>
            ))}
          </div>

          {/* Active Module Focus Card */}
          {(() => {
            const current = modules.find((m) => m.id === activeModule) || modules[0];
            const Icon = current.icon;
            return (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-purple-500/10 border border-emerald-500/30 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                        {current.duration}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        {current.title}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => openCheckoutWithInterest(current.title)}
                    className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:scale-105 transition-transform"
                  >
                    Join for ₹199
                  </button>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 dark:text-slate-300">
                  {current.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/50 dark:bg-white/[0.02]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}

          {/* Complete 6 Module Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {modules.map((m) => (
              <div
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeModule === m.id
                    ? "border-emerald-500 bg-emerald-500/5"
                    : "border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase">
                    Module {m.id}
                  </span>
                  <span className="text-[10px] text-slate-500">{m.duration}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 mb-2">
                  {m.title.split(": ")[1] || m.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                  {m.points[0]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: What's Included & Exclusive Bonuses (₹4,999 Value Free) */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <Gift className="w-4 h-4" /> Free Welcome Toolkit
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Included Bonuses Worth <span className="text-emerald-600 dark:text-emerald-400">₹4,999</span> (FREE with ₹199 Pass)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Register today and instantly unlock our proprietary cultivation materials, direct supplier contact sheets, and complete HD recording access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {bonuses.map((bonus, idx) => {
              const Icon = bonus.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                        Value: {bonus.value}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {bonus.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {bonus.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free with Ticket
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-purple-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              <strong>Instant Digital Delivery:</strong> All PDF guides, templates, and supplier directories are emailed and WhatsApped immediately following the live session.
            </div>
            <button
              onClick={() => openCheckoutWithInterest()}
              className="shrink-0 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
            >
              Get Free Bonuses Now
            </button>
          </div>
        </section>

        {/* Section 5: Who Is This Workshop Designed For? */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Users className="w-4 h-4" /> Ideal Participant Profiles
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Who Should Attend This Mushroom Farming Workshop?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Whether you have 200 sq.ft of rooftop space or 2 acres of farmland, this workshop scales to your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-2">
              <Sprout className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Progressive Farmers
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Utilize unused agricultural residues (wheat/paddy straw) to build a high-rotation secondary income stream with quick 30-day cash cycles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-2">
              <Building2 className="w-6 h-6 text-teal-500" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Agri-Entrepreneurs
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Looking to set up commercial, climate-controlled button or oyster facilities with capital subsidies from NHB &amp; NABARD.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-2">
              <DollarSign className="w-6 h-6 text-amber-500" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Working Professionals
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Seeking a sustainable, profitable agri-business with automated sensor monitoring that does not require full-time physical labor.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-2">
              <ShieldCheck className="w-6 h-6 text-purple-500" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Terrace &amp; Home Growers
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Grow pesticide-free organic oyster mushrooms at home in compact bags for fresh family consumption and local neighborhood sales.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Real Testimonials & Reviews */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> Verified Attendee Feedback
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              What Previous Workshop Attendees Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {t.name}
                    </h3>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                      {t.location} • {t.type}
                    </span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Frequently Asked Questions (FAQs) Accordion */}
        <section className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <HelpCircle className="w-4 h-4" /> Clear Answers
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions About the Workshop
            </h2>
          </div>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl backdrop-blur-md bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none gap-4"
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 8: Final Call to Action Box */}
        <section className="relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-8 sm:p-12 shadow-2xl text-center space-y-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/20 text-white backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" /> Strictly Limited to 50 Participants per Batch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Ready to Launch Your High-Yield Mushroom Venture?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
              Don&apos;t spend years making expensive trial-and-error mistakes. Learn the exact proven blueprint directly from commercial growers for just <strong>₹199</strong>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => openCheckoutWithInterest()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-black text-xs sm:text-sm shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Your Seat for ₹199</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919203544140?text=Hi%20Organic%20Mushroom%20Farm,%20I%20have%20questions%20regarding%20the%20Mushroom%20Farming%20Workshop"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm border border-emerald-400/40 backdrop-blur-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Ask Question on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer Navigation Links */}
        <footer className="border-t dark:border-white/10 border-slate-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Organic Mushrooms Farm. All rights reserved.</p>
          <div className="flex gap-4 font-medium">
            <Link href="/terms" className="hover:text-emerald-500 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-emerald-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className="hover:text-emerald-500 transition-colors">
              Refund Policy
            </Link>
            <Link href="/contact" className="hover:text-emerald-500 transition-colors">
              Contact Us
            </Link>
          </div>
        </footer>
      </div>

      {/* Floating Mobile Bottom Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-white/10 md:hidden z-40">
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="line-through text-[10px] text-slate-400">₹1,999</span>
            <div className="text-base font-black text-emerald-600 dark:text-emerald-400">₹199</div>
          </div>
          <button
            onClick={() => openCheckoutWithInterest()}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
          >
            <span>Book Workshop Seat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* WhatsApp Floating Assistance Button */}
      <a
        href="https://wa.me/919203544140?text=Hi%20Organic%20Mushroom%20Farm,%20I%20want%20to%20know%20more%20about%20the%20Mushroom%20Farming%20Workshop"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-[74px] md:bottom-6 right-4 z-50 bg-[#25D366] hover:bg-[#128C7E] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <PhoneCall size={20} className="text-white" />
      </a>

      {/* Checkout / Registration Modal (with Full Name, Phone, and Email) */}
      {showCheckout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => {
                setShowCheckout(false);
                setLoading(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>

            <div className="mb-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white mb-1">
                Workshop Pass • ₹199 Only
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                Join Mushroom Farming Workshop
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Webinar link, calendar invite, and bonus PDF handbook will be dispatched to your details:
              </p>
            </div>

            {paymentStatus === "success" ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-base font-black text-emerald-600 dark:text-emerald-400">
                  Payment Successful!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Congratulations! Your registration is confirmed. Please check your WhatsApp and Email for instant access links.
                </p>
              </div>
            ) : paymentStatus === "error" ? (
              <div className="text-center py-6 space-y-3">
                <p className="text-red-500 font-bold text-xs uppercase tracking-wider">
                  Payment Failed or Cancelled
                </p>
                <p className="text-xs text-slate-500">
                  Transaction was not completed. You can try again or message our team directly.
                </p>
                <button
                  onClick={() => setPaymentStatus("idle")}
                  className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handlePayment} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-500" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                      })
                    }
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    placeholder="10-digit mobile number"
                  />
                </div>

                {/* Email Input Field */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-emerald-500" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    placeholder="name@gmail.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      City / State
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      placeholder="Your City"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Focus Area
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-white/10 rounded-xl px-2 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Button Mushroom">Button Mushroom</option>
                      <option value="Oyster Mushroom">Oyster Mushroom</option>
                      <option value="Milky Mushroom">Milky Mushroom</option>
                      <option value="Commercial Turnkey Project">Turnkey Farm</option>
                      <option value="General Overview">General Overview</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <div className="flex justify-between font-bold">
                    <span>Workshop Ticket</span>
                    <span className="text-emerald-600 dark:text-emerald-400">₹199</span>
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Includes 3-Hour Live Access, 30-Day Recording &amp; ₹4,999 Bonuses
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 mt-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-600/30 disabled:opacity-50 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  {loading ? "Processing Gateway..." : "Proceed to Pay ₹199"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
