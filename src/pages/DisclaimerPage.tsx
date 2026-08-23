import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ShieldAlert, BookOpen, Calculator, FileText, CheckCircle2, Factory, Scale, ExternalLink } from 'lucide-react';

const DisclaimerPage = () => {
  return (
    <>
      <SEO 
        title="Disclaimer & Transparency Policy | Organic Mushrooms Farm"
        description="Read our Disclaimer & Transparency Policy. We believe in complete honesty and transparency with our community of farmers and agro-entrepreneurs."
      />

      <section className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <ShieldAlert className="w-10 h-10 text-primary-start" />
              <h1 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
                Disclaimer & Transparency Policy
              </h1>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
              We believe in complete honesty and transparency with our community of farmers and agro-entrepreneurs.
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-black/20 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6" /> 1. Our Commitment to Transparency
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Welcome to Organic Mushrooms Farm (a proud brand of Agrimotion Engineering Private Limited). We believe in complete honesty and transparency with our community of farmers and agro-entrepreneurs. We have built this platform (<Link to="/" className="text-primary-start hover:underline">https://organicmushroomsfarm.com</Link>) to share our years of hands-on experience, scientific SOPs, and commercial strategies in mushroom cultivation. However, to set the right expectations and protect both you and us, please read this disclaimer carefully.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-black/20 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                <BookOpen className="text-blue-500 w-6 h-6" /> 2. Educational and Informational Purpose Only
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                All the content on this website—including our <Link to="/blog" className="text-primary-start hover:underline">blogs</Link>, <Link to="/training" className="text-primary-start hover:underline">training videos</Link>, standard operating procedures (SOPs), and <Link to="/services" className="text-primary-start hover:underline">farm setup guides</Link>—is strictly for educational and informational purposes. 
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                While we strive to provide the most accurate, up-to-date, and scientifically backed data regarding Button, Oyster, Milky, and other mushroom varieties, agriculture is a constantly evolving field. We do not make any absolute guarantees that our methods will work flawlessly in every unique environment without proper adaptation.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-black/20 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                <Calculator className="text-orange-500 w-6 h-6" /> 3. Earnings, ROI, and Business Profitability Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We are incredibly passionate about the profitability of mushroom farming and provide tools like our <Link to="/roi-calculator" className="text-primary-start hover:underline">Mushroom Business ROI Estimator</Link>. Please understand that:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="dark:text-slate-300 text-slate-800">Estimates, Not Guarantees:</strong> Any income figures, profit margins, or return on investment (ROI) calculations mentioned on our site are simply estimates of what is commercially possible. They are based on ideal industry standards and our past successful turnkey projects.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="dark:text-slate-300 text-slate-800">Your Results Will Vary:</strong> We cannot and do not guarantee that you will achieve the same financial results. Your actual profits will depend heavily on your personal dedication, business acumen, initial investment, local market demand, selling price fluctuations, and operational efficiency.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="dark:text-slate-300 text-slate-800">Business Risks:</strong> Like any business, commercial farming involves financial risk. You are solely responsible for your business decisions, and Organic Mushrooms Farm is not liable for any financial losses your farm may incur.
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-black/20 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                <Factory className="text-purple-500 w-6 h-6" /> 4. Agricultural and Biological Variables (The Reality of Farming)
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Mushroom cultivation is a highly sensitive, biological process. Even with our premium <Link to="/spawn-seed" className="text-primary-start hover:underline">F1 hybrid spawn</Link> and state-of-the-art climate-controlled infrastructure, agricultural success is never 100% predictable. Your actual crop yield can be significantly affected by external factors beyond our control, including:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="dark:text-slate-300 text-slate-800">Climate & Weather:</strong> Sudden extreme weather changes or local humidity levels.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="dark:text-slate-300 text-slate-800">Raw Material Quality:</strong> The chemical composition of local wheat/paddy straw, water pH, and gypsum quality used in your compost.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="dark:text-slate-300 text-slate-800">Farm Hygiene:</strong> Strict adherence to aseptic inoculation and disease control protocols. Any lapse can lead to common biological contaminations (like green mold or wet bubble disease).
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="dark:text-slate-300 text-slate-800">Infrastructure Management:</strong> Power outages affecting HVAC cooling systems or improper CO2 flushing during the pinning stage.
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-black/20 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                <Scale className="text-yellow-600 w-6 h-6" /> 5. Government Subsidy and Legal Advice
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We provide guidance and consultancy regarding government agricultural subsidies (such as NHB or state-level schemes) to help you set up your farm. However:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    We are agro-tech consultants, not legal or financial advisors.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    The final approval, disbursement, and timeline of any government subsidy or bank loan are strictly at the discretion of the respective government departments and financial institutions.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-start mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    We strongly recommend consulting with a certified financial advisor or legal counsel before making major financial commitments.
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-black/20 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                <ExternalLink className="text-indigo-500 w-6 h-6" /> 6. External Links and Third-Party Tools
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To provide you with the best resources, our website may contain links to third-party websites, tools, or products. Please note that we do not have control over these external sites. Clicking on these links is at your own risk, and we do not endorse or take responsibility for the accuracy or safety of the content found on third-party platforms.
              </p>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-black/20 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                <FileText className="text-rose-500 w-6 h-6" /> 7. Let's Connect
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We are here to support your commercial mushroom farming journey responsibly. If you have any questions regarding this policy or need clarification on our business models, please reach out to us directly:
              </p>
              <ul className="space-y-4">
                <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-slate-600 dark:text-slate-400">
                  <strong className="dark:text-slate-300 text-slate-800 min-w-32">Company:</strong>
                  <span>Agrimotion Engineering Private Limited (Organic Mushrooms Farm)</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-slate-600 dark:text-slate-400">
                  <strong className="dark:text-slate-300 text-slate-800 min-w-32">Email:</strong>
                  <a href="mailto:support@mushroomtraining.online" className="text-primary-start hover:underline">support@mushroomtraining.online</a>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-slate-600 dark:text-slate-400">
                  <strong className="dark:text-slate-300 text-slate-800 min-w-32">Phone / WA:</strong>
                  <a href="tel:+919203544140" className="text-primary-start hover:underline">+91 9203544140</a>
                </li>
                <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-slate-600 dark:text-slate-400">
                  <strong className="dark:text-slate-300 text-slate-800 min-w-32 mt-1">Headquarters:</strong>
                  <span className="leading-relaxed">Katangi Road, Jabalpur, Madhya Pradesh, India, 482002</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisclaimerPage;
