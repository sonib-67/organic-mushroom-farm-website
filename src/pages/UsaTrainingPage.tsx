import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, DollarSign, Home, Award, ArrowRight, BookOpen, Clock, ShieldCheck, ThermometerSnowflake, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const UsaTrainingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16 md:pb-20">
      <SEO 
        title="Mushroom Cultivation Training USA"
        description="Learn highly profitable organic mushroom farming for the US market. Turnkey solutions, climate control strategies, and business models for commercial growers."
        url="/usatraining"
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-wider">
            USA Specialized Program
          </div>
          <h1 className="text-xl md:text-3xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight">
            Mushroom Cultivation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Training</span>
          </h1>

          {/* Region Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 w-full max-w-sm mx-auto">
            <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-[10px] md:text-xs shadow-lg shadow-blue-500/25 leading-tight flex-1">
              <Globe size={12} className="md:w-[14px] md:h-[14px]" /> USA & Global (USD)
            </span>
            <Link to="/training" className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold text-[10px] md:text-xs transition-all hover:scale-105 active:scale-95 leading-tight flex-1">
              <Globe size={12} className="md:w-[14px] md:h-[14px]" /> India (INR)
            </Link>
          </div>

          <p className="max-w-2xl mx-auto text-xs md:text-sm dark:text-slate-400 text-slate-600">
            Growing mushrooms is one of the most profitable agricultural businesses in the US today. Whether you live in a dry state like California or a colder region like New York, our training program teaches you how to master indoor climate control to grow fresh, high-demand mushrooms year-round.
          </p>
        </div>

        {/* Pricing/Plans Section */}
        <div className="mb-14">
          <h2 className="text-lg md:text-xl font-bold text-center dark:text-white text-slate-900 mb-6">Choose Your Training Program</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Plan 1 */}
            <div className="glass border dark:border-white/10 border-black/10 rounded-3xl p-6 flex flex-col relative transition-transform hover:-translate-y-1">
              <div className="mb-3">
                <h3 className="text-base font-bold dark:text-white text-slate-900 leading-tight">Basic Cultivation Mushroom Training</h3>
                <p className="text-[10px] md:text-xs dark:text-slate-400 text-slate-600 font-medium mt-0.5">(Home Scale)</p>
              </div>
              <div className="mb-3">
                <span className="text-2xl md:text-3xl font-black dark:text-white text-slate-900">$39</span>
                <span className="text-[10px] md:text-xs text-slate-500 ml-1">(One-Time)</span>
              </div>
              <p className="text-[10px] md:text-xs font-semibold text-blue-500 mb-3 flex items-center gap-1">
                <Home size={12} /> Ideal For: Beginners & Hobbyists
              </p>
              <div className="flex-grow">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Learnings:</p>
                <ul className="space-y-1.5 mb-5">
                  {['Oyster & Button mushroom home setup.', 'Substrate boiling & basic sterilization.', 'Simple temperature/humidity control.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs dark:text-slate-300 text-slate-700">
                      <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/enquiry" className="w-full block text-center bg-white/5 hover:bg-white/10 border border-white/10 dark:text-white text-slate-900 font-bold py-3 rounded-xl text-sm transition-colors mt-auto">
                Enroll Now
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="glass border-2 border-blue-500/50 rounded-3xl p-6 flex flex-col relative transition-transform hover:-translate-y-1 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                ⭐ Best Value
              </div>
              <div className="mb-3">
                <h3 className="text-base font-bold dark:text-white text-slate-900 leading-tight">Advanced Commercial Mushroom Training</h3>
                <p className="text-[10px] md:text-xs dark:text-slate-400 text-slate-600 font-medium mt-0.5">(Business Scale)</p>
              </div>
              <div className="mb-3">
                <span className="text-2xl md:text-3xl font-black dark:text-white text-slate-900">$97</span>
                <span className="text-[10px] md:text-xs text-slate-500 ml-1">(One-Time)</span>
              </div>
              <p className="text-[10px] md:text-xs font-semibold text-blue-500 mb-3 flex items-center gap-1">
                <TrendingUp size={12} /> Ideal For: Entrepreneurs & Commercial Growers
              </p>
              <div className="flex-grow">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Learnings:</p>
                <ul className="space-y-1.5 mb-5">
                  {[
                    'Farm layout, vertical racks & HVAC setup.', 
                    'High-yield varieties + Pest management.', 
                    'Sales strategies for US Farmer\'s Markets & local stores.',
                    'Certificate & Private Community Access.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs dark:text-slate-300 text-slate-700">
                      <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/enquiry" className="w-full block text-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 mt-auto">
                Enroll Now
              </Link>
            </div>

          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="glass p-5 md:p-6 rounded-3xl border dark:border-white/5 border-black/5">
            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-2 leading-tight">Build a Highly Profitable Organic Mushroom Farm in the USA</h3>
            <p className="text-[11px] md:text-sm dark:text-slate-400 text-slate-600 mb-3 leading-relaxed">
              The demand for fresh, locally grown organic mushrooms is skyrocketing across the United States. From local farmer's markets to high-end restaurants, buyers are constantly looking for premium quality Oyster, Button, and specialty mushrooms.
            </p>
            <p className="text-[11px] md:text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
              Our comprehensive online training program is specifically designed to help you tap into this lucrative market. Whether you want to start a small homestead project in your basement or launch a full-scale commercial indoor farm, we provide the exact blueprints, climate control strategies, and business models you need to succeed in the North American market.
            </p>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold dark:text-white text-slate-900 mb-1">Why Choose Indoor Mushroom Cultivation?</h3>
            
            <div className="flex gap-3 glass p-3 md:p-4 rounded-2xl border dark:border-white/5 border-black/5">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <ThermometerSnowflake size={16} />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-0.5">Year-Round Harvest</h4>
                <p className="text-[11px] md:text-xs dark:text-slate-400 text-slate-600 leading-relaxed">With the right indoor setup, you are completely independent of outside weather, allowing for continuous, predictable income.</p>
              </div>
            </div>

            <div className="flex gap-3 glass p-3 md:p-4 rounded-2xl border dark:border-white/5 border-black/5">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                <Home size={16} />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-0.5">High Yield, Small Space</h4>
                <p className="text-[11px] md:text-xs dark:text-slate-400 text-slate-600 leading-relaxed">You don't need acres of land. You can grow hundreds of pounds of mushrooms in a standard spare room, garage, or custom grow tent.</p>
              </div>
            </div>

            <div className="flex gap-3 glass p-3 md:p-4 rounded-2xl border dark:border-white/5 border-black/5">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
                <DollarSign size={16} />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-0.5">Fast ROI</h4>
                <p className="text-[11px] md:text-xs dark:text-slate-400 text-slate-600 leading-relaxed">Unlike traditional farming, mushrooms have a rapid growth cycle, meaning you can start seeing returns on your investment in a matter of weeks.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900">Frequently Asked Questions (FAQs)</h2>
          </div>
          <div className="space-y-2 md:space-y-3">
            {[
              {
                q: "Do I need a large farm to take this online mushroom course?",
                a: "No! Our Basic Cultivation module teaches you how to start in small spaces like a spare room, garage, or basement using controlled indoor environments."
              },
              {
                q: "Are the climate control methods suitable for US weather?",
                a: "Absolutely. The Advanced Commercial Training covers automated HVAC, humidifiers, and fogger systems that help you maintain perfect fruiting temperatures, regardless of outside weather conditions."
              },
              {
                q: "How can I sell my mushrooms locally?",
                a: "The advanced program includes a dedicated module on US marketing strategies. You will learn how to approach local farmer's markets, organic grocery stores, and local restaurants for wholesale tie-ups."
              },
              {
                q: "What payment methods are accepted for international students?",
                a: "We accept all major global credit/debit cards through our secure PayPal gateway. Pricing is clearly listed in USD ($) for your convenience."
              },
              {
                q: "Is mushroom farming a profitable business in the US?",
                a: "Yes, specialty organic mushrooms like Oyster and Shiitake carry a premium price tag at US farmer's markets and organic grocery stores. Our Advanced Commercial Training covers specific marketing and sales strategies to help you connect with local buyers, restaurants, and wholesalers to maximize your profit margins."
              },
              {
                q: "Do I need a large agricultural property to get started?",
                a: "Not at all. Our step-by-step guides focus heavily on controlled indoor environments. The Basic Cultivation plan is perfect for utilizing small spaces like a spare bedroom or basement, while the Advanced Plan teaches you how to scale up using vertical racking systems in commercial warehouses or large sheds."
              },
              {
                q: "Where will I get the equipment and mushroom spawn in the US?",
                a: "Our training teaches you the fundamental principles of substrate preparation, sterilization, and climate control. The equipment required (like humidifiers, HEPA filters, and HVAC units) can be easily sourced from local hardware stores or online retailers across the US. We also guide you on how to select high-quality spawn from reliable regional suppliers."
              },
              {
                q: "How much time does it take to maintain a mushroom grow room daily?",
                a: "Once your automated climate systems (covered in our Advanced Plan) are set up, the daily maintenance is minimal. For a basic home setup, it takes less than 30 minutes a day to monitor humidity, temperature, and fresh air exchange."
              },
              {
                q: "Which mushroom varieties are best to grow in my specific state?",
                a: "We cover cultivation techniques for multiple varieties. For colder regions, traditional Button and Oyster mushrooms are excellent choices. If you live in a warmer climate like Texas or Florida, our Advanced program includes training on high-temperature varieties like Milky Mushrooms, ensuring you can grow successfully no matter where you live."
              },
              {
                q: "Will I receive ongoing support after purchasing the course?",
                a: "Absolutely. We understand that hands-on farming comes with unique challenges. Enrolling in our Advanced Commercial Training gives you access to our private community and ongoing technical support to help you troubleshoot any contamination issues or climate control problems."
              },
              {
                q: "Are the climate control metrics easy to understand for US growers?",
                a: "Yes, the training is designed to be universally applicable. We explain the science behind perfect humidity, airflow, and temperature control, making it easy to adapt the settings on your local thermostats and hygrometers."
              }
            ].map((faq, i) => (
              <div key={i} className="glass p-3 rounded-2xl border dark:border-white/5 border-black/5">
                <h4 className="text-xs md:text-sm font-bold dark:text-white text-slate-900 mb-1 flex items-start gap-1.5">
                  <span className="text-blue-500 mt-0.5 shrink-0">Q:</span>
                  {faq.q.replace('Q: ', '')}
                </h4>
                <p className="text-[11px] md:text-xs dark:text-slate-400 text-slate-600 leading-relaxed pl-4 md:pl-5">
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

export default UsaTrainingPage;
