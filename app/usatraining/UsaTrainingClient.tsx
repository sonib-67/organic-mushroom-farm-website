"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle2, TrendingUp, DollarSign, Home, Award, ArrowRight, BookOpen, Clock, ShieldCheck, ThermometerSnowflake, Globe } from 'lucide-react';
import InternationalCheckoutForm from "../components/InternationalCheckoutForm";

const UsaTrainingClient = () => {
  const router = useRouter();
  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);
  const [checkoutPlan, setCheckoutPlan] = useState<{name: string, price: string} | null>(null);

  const searchParams = useSearchParams();
  useEffect(() => {
    const type = searchParams?.get('type');
    if (type === 'basic') {
      setCheckoutPlan({ name: "Basic Cultivation Mushroom Training", price: "39.00" });
      setTimeout(() => {
        document.getElementById('checkout-form-container')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else if (type === 'advanced') {
      setCheckoutPlan({ name: "Advanced Commercial Mushroom Training", price: "97.00" });
      setTimeout(() => {
        document.getElementById('checkout-form-container')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [searchParams]);


  const faqs = [
    {
      q: "Do I need a large farm to take this online mushroom cultivation course?",
      a: "No! Our Basic Cultivation module teaches you how to start a profitable mushroom business in small spaces like a spare room, garage, or basement using strictly controlled indoor environments."
    },
    {
      q: "Are the climate control methods suitable for my local weather?",
      a: "Absolutely. The Advanced Commercial Training covers automated HVAC, humidifiers, and fogger systems that help you maintain the perfect fruiting temperatures indoors, regardless of how hot, cold, dry, or humid your outside weather conditions are."
    },
    {
      q: "How can I sell my mushrooms locally?",
      a: "The advanced program includes a dedicated module on B2B sales and marketing strategies. You will learn exactly how to approach local farmer's markets, organic grocery stores, and local restaurants for highly profitable wholesale tie-ups."
    },
    {
      q: "What payment methods are accepted for international students?",
      a: "We accept all major global credit and debit cards through our secure payment gateways. For your convenience and global accessibility, our course pricing is clearly listed in USD ($)."
    },
    {
      q: "Is mushroom farming a profitable business model?",
      a: "Yes, specialty organic mushrooms like Oyster and Button carry a premium price tag at farmer's markets and organic stores worldwide. Our Advanced Commercial Training covers specific marketing and sales strategies to help you connect with high-paying local buyers, restaurants, and wholesalers to maximize your profit margins."
    },
    {
      q: "Do I need a large agricultural property to get started?",
      a: "Not at all. Our step-by-step guides focus heavily on controlled indoor environments. The Basic Cultivation plan is perfect for utilizing small spaces like a spare bedroom, while the Advanced Plan teaches you how to scale up using vertical racking systems in commercial warehouses, basements, or large sheds."
    },
    {
      q: "Where will I get the equipment and mushroom spawn in my country?",
      a: "Our training teaches you the fundamental universal principles of substrate preparation, sterilization, and climate control. The equipment required (like humidifiers, HEPA filters, and HVAC units) can be easily sourced from local hardware stores or global online retailers like Amazon. We also guide you on how to identify and select high-quality spawn from reliable regional suppliers near you."
    },
    {
      q: "How much time does it take to maintain a mushroom grow room daily?",
      a: "Once your automated climate systems (covered in our Advanced Plan) are set up, daily maintenance is minimal. For a basic home setup, it takes less than 30 minutes a day to monitor humidity, temperature, and fresh air exchange."
    },
    {
      q: "Which mushroom varieties are best to grow in my specific climate?",
      a: "We cover cultivation techniques for multiple varieties to ensure global success. For colder regions, traditional Button and Oyster mushrooms are excellent choices. If you live in a hotter, tropical, or arid climate, our Advanced program includes training on high-temperature varieties like Milky Mushrooms, ensuring you can grow successfully no matter where you are located on the map."
    },
    {
      q: "Will I receive ongoing support after purchasing the course?",
      a: "Absolutely. We understand that hands-on farming comes with unique challenges. Enrolling in our Advanced Commercial Training gives you exclusive access to our private community and ongoing technical support to help you troubleshoot any contamination issues or climate control problems as you scale your farm."
    },
    {
      q: "Are the climate control metrics easy to understand for international growers?",
      a: "Yes, the training is designed to be universally applicable. We explain the exact science behind perfect humidity, airflow, and temperature control, making it easy to adapt the settings on your local thermostats and hygrometers, whether you measure in Celsius or Fahrenheit."
    }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-12 md:pb-16">
      <div className="max-w-5xl mx-auto px-3.5 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-lg md:text-2xl font-bold dark:text-white text-slate-900 mb-2 tracking-tight">
            Mushroom Cultivation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Training</span>
          </h1>

          {/* Region Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3.5 w-full max-w-xs mx-auto">
            <span className="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-[9px] md:text-[10px] shadow-sm shadow-blue-500/25 leading-tight flex-1">
              <Globe size={11} /> USA & Global (USD)
            </span>
            <Link href="/training" className="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded-full bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold text-[9px] md:text-[10px] transition-all hover:scale-105 active:scale-95 leading-tight flex-1">
              <Globe size={11} /> India (INR)
            </Link>
          </div>

          <p className="max-w-2xl mx-auto text-[11px] md:text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
            Mushroom farming is a highly profitable business worldwide. From dry heat to freezing winters, our training teaches you to master indoor climate control and grow high-demand mushrooms year-round, anywhere.
          </p>
        </div>

        {/* Pricing/Plans Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-sm md:text-base font-bold text-center dark:text-white text-slate-900 mb-4">Choose Your Training Program</h2>
          
          {paymentSuccess && (
            <div className="max-w-lg mx-auto glass border border-green-500/50 rounded-2xl p-5 text-center bg-green-500/5">
              <CheckCircle2 size={36} className="text-green-500 mx-auto mb-3" />
              <h3 className="text-base font-bold dark:text-white text-slate-900 mb-1.5">Payment Successful!</h3>
              <p className="text-xs dark:text-slate-300 text-slate-700 mb-3">
                Welcome to Organic Mushroom Farm Training. Your transaction ID is <strong>{paymentSuccess}</strong>.
              </p>
              <p className="text-xs text-green-500 font-semibold mb-4">We have received your enrollment and will email you the next steps shortly.</p>
              <button 
                onClick={() => setPaymentSuccess(null)}
                className="px-5 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-xs hover:scale-105 transition-transform"
              >
                Back to Plans
              </button>
            </div>
          )}
          
          {!paymentSuccess && (
            <>
              {checkoutPlan && (
                <InternationalCheckoutForm 
                  planName={checkoutPlan.name}
                  price={checkoutPlan.price}
                  onSuccess={(id) => {
                    setCheckoutPlan(null);
                    if (checkoutPlan.price === "39.00") {
                      router.push(`/usatraining/success/basic?id=${id}`);
                    } else if (checkoutPlan.price === "97.00") {
                      router.push(`/usatraining/success/advanced?id=${id}`);
                    } else {
                      setPaymentSuccess(id);
                    }
                  }}
                  onClose={() => setCheckoutPlan(null)}
                />
              )}
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
                
                {/* Plan 1 */}
                <div className="rounded-2xl p-3.5 md:p-5 flex flex-col relative transition-transform hover:-translate-y-0.5 border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="mb-3">
                    <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-500 rounded-full text-[9px] font-bold uppercase tracking-wider">Hobbyist / Home-Scale</span>
                    <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mt-2">Basic Cultivation Training</h3>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl md:text-3xl font-black dark:text-white text-slate-900">$39</span>
                      <span className="text-xs dark:text-slate-400 text-slate-500 font-medium">USD</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-1.5 md:space-y-2 mb-4 flex-1">
                    <li className="flex items-start gap-1.5 text-[11px] md:text-xs dark:text-slate-300 text-slate-700 leading-snug">
                      <CheckCircle2 size={13} className="text-green-500 shrink-0 mt-0.5" />
                      <span>Step-by-step Oyster & Button Mushroom growing guide</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[11px] md:text-xs dark:text-slate-300 text-slate-700 leading-snug">
                      <CheckCircle2 size={13} className="text-green-500 shrink-0 mt-0.5" />
                      <span>Substrate preparation & sterilization techniques</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[11px] md:text-xs dark:text-slate-300 text-slate-700 leading-snug">
                      <CheckCircle2 size={13} className="text-green-500 shrink-0 mt-0.5" />
                      <span>Basic indoor climate control for small spaces</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[11px] md:text-xs dark:text-slate-300 text-slate-700 leading-snug">
                      <CheckCircle2 size={13} className="text-green-500 shrink-0 mt-0.5" />
                      <span>Harvesting, drying, and packing instructions</span>
                    </li>
                  </ul>
                  
                  <button 
                    onClick={() => setCheckoutPlan({name: "Basic Cultivation Training", price: "39.00"})}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-xl text-xs transition-all hover:scale-[1.01] shadow-md shadow-blue-500/20"
                  >
                    Enroll Now
                  </button>
                  <div className="text-center mt-1.5 text-[9px] text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center gap-1">
                    <ShieldCheck size={11} /> Secured by PayPal
                  </div>
                </div>

                {/* Plan 2 */}
                <div className="rounded-2xl p-3.5 md:p-5 flex flex-col relative transition-transform hover:-translate-y-0.5 border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wider shadow-md">
                    MOST POPULAR
                  </div>
                  
                  <div className="mb-3 mt-1">
                    <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-500 rounded-full text-[9px] font-bold uppercase tracking-wider">Industrial / Commercial</span>
                    <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mt-2">Commercial Farm Advisory</h3>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl md:text-3xl font-black dark:text-white text-slate-900">$97</span>
                      <span className="text-xs dark:text-slate-400 text-slate-500 font-medium">USD</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-1.5 md:space-y-2 mb-4 flex-1">
                    <li className="flex items-start gap-1.5 text-[11px] md:text-xs dark:text-slate-300 text-slate-700 leading-snug">
                      <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="font-semibold">Everything in Basic Plan, PLUS:</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[11px] md:text-xs dark:text-slate-300 text-slate-700 leading-snug">
                      <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>Commercial ROI & Business Planning</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[11px] md:text-xs dark:text-slate-300 text-slate-700 leading-snug">
                      <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>Automated HVAC & Humidification Setup Guides</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[11px] md:text-xs dark:text-slate-300 text-slate-700 leading-snug">
                      <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>B2B Sales & Marketing strategies for bulk supply</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[11px] md:text-xs dark:text-slate-300 text-slate-700 leading-snug">
                      <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>1-on-1 Email Support for Farm Setup</span>
                    </li>
                  </ul>
                  
                  <button 
                    onClick={() => setCheckoutPlan({name: "Commercial Farm Advisory", price: "97.00"})}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-2 rounded-xl text-xs transition-all hover:scale-[1.01] shadow-md shadow-blue-500/20"
                  >
                    Get Commercial Access
                  </button>
                  <div className="text-center mt-1.5 text-[9px] text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center gap-1">
                    <ShieldCheck size={11} /> Secured by PayPal
                  </div>
                </div>

              </div>
            </>
          )}
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-10">
          <div>
            <h3 className="text-sm md:text-base font-bold dark:text-white text-slate-900 mb-2">Global Demand is Surging</h3>
            <p className="text-[10.5px] md:text-[11.5px] dark:text-slate-400 text-slate-600 leading-relaxed mb-2.5">
              Gourmet and medicinal mushrooms (like Oyster, Shiitake, and Milky) are seeing unprecedented demand across North America, Europe, and Asia. However, the supply chain is localized due to the highly perishable nature of fresh mushrooms.
            </p>
            <p className="text-[10.5px] md:text-[11.5px] dark:text-slate-400 text-slate-600 leading-relaxed">
              This creates a massive opportunity for local growers to supply fresh, organic mushrooms directly to their community's restaurants, farmer's markets, and supermarkets at premium retail prices.
            </p>
          </div>
          
          <div className="space-y-2 md:space-y-2.5">
            <h3 className="text-sm md:text-base font-bold dark:text-white text-slate-900 mb-1">Why Choose Indoor Mushroom Cultivation?</h3>
            
            <div className="flex gap-2.5">
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <ThermometerSnowflake size={13} />
              </div>
              <div>
                <h4 className="text-xs font-bold dark:text-white text-slate-900 mb-0.5">Year-Round Harvest</h4>
                <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">With the right indoor setup, you become completely independent of outside weather conditions. This allows for continuous, predictable income, whether you face freezing winters or scorching summers.</p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                <Home size={13} />
              </div>
              <div>
                <h4 className="text-xs font-bold dark:text-white text-slate-900 mb-0.5">High Yield, Small Space</h4>
                <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">You don't need acres of expensive agricultural land. Our training teaches you how to grow hundreds of pounds of mushrooms in a standard spare room, garage, or custom grow tent using vertical farming techniques.</p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
                <DollarSign size={13} />
              </div>
              <div>
                <h4 className="text-xs font-bold dark:text-white text-slate-900 mb-0.5">Fast Return on Investment (ROI)</h4>
                <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">Unlike traditional farming, mushrooms have a rapid growth cycle. With our step-by-step mushroom farming business plan, you can start seeing returns on your investment in just a matter of weeks.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-sm md:text-base font-bold dark:text-white text-slate-900">Frequently Asked Questions (FAQs)</h2>
          </div>
          <div className="space-y-1.5 md:space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="mb-2">
                <h4 className="text-xs font-bold dark:text-white text-slate-900 mb-0.5 flex items-start gap-1">
                  <span className="text-blue-500 mt-0.5 shrink-0">Q:</span>
                  {faq.q.replace('Q: ', '')}
                </h4>
                <p className="text-[10.5px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed pl-3.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UsaTrainingClient;
