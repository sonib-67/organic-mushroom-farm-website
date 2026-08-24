import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Phone, Mail, MapPin, Building2, Calendar, CheckCircle2, Factory, GraduationCap, Leaf, Sprout, Wind, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ReCaptchaWrapper, { ReCaptchaWrapperRef } from '../components/ReCaptchaWrapper';
import { Link } from 'react-router-dom';

const EnquiryPage = () => {
  const [formType, setFormType] = useState('training');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = React.useRef<ReCaptchaWrapperRef>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    if (!captchaToken) {
      setCaptchaError(true);
      setSubmitting(false);
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Build comprehensive message based on form type
    let messageBody = "Service Requested: " + formType + "\n\n";
    for (let [key, value] of formData.entries()) {
      if (key !== "name" && key !== "email" && key !== "phone" && key !== "formType") {
        messageBody += `${key}: ${value}\n`;
      }
    }
    
    const submitData = {
      name: formData.get("name"),
      email: formData.get("email") || "N/A",
      phone: formData.get("phone"),
      subject: `New Enquiry for ${formType.replace('_', ' ').toUpperCase()} from ${formData.get("name")}`,
      service: formType.replace('_', ' ').toUpperCase(),
      message: messageBody,
      trainingMode: formData.get("training_mode") || null,
      mushroomVariety: formData.get("mushroom_variety") || null,
      setupType: formData.get("setup_type") || null,
      productForm: formData.get("product_form") || null,
      otherSubject: formData.get("other_subject") || null,
      captchaToken: captchaToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const formTypes = [
    { id: 'training', label: 'Mushroom Training', icon: GraduationCap },
    { id: 'spawn', label: 'Mushroom Spawn', icon: Sprout },
    { id: 'setup', label: 'Farm Setup (Turnkey)', icon: Factory },
    { id: 'buy_mushroom', label: 'Buy Mushrooms', icon: Leaf },
    { id: 'other', label: 'Other Services', icon: Wind },
  ];

  const varieties = ['Button Mushroom', 'Oyster Mushroom', 'Milky Mushroom', 'Shiitake', "Lion's Mane", 'Cordyceps'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0A] pt-24 md:pt-32 pb-4">
      <SEO 
        title="Enquiry Form | Organic Mushroom Farm" 
        description="Submit your enquiry for mushroom training, spawn, farm setup, or purchasing fresh and dry mushrooms."
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-2">
          <h1 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
            How Can We <span className="text-primary-start gradient-text">Help You?</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Select the service you're interested in, fill in your details, and our experts will get back to you with the best solutions.
          </p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 1, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-white dark:bg-[#111] rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-white/10 text-center"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Enquiry Received!</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-3 max-w-md mx-auto">
              Thank you for reaching out to Organic Mushroom Farm. Our team will review your request and contact you shortly.
            </p>
            <Link to="/" className="inline-flex items-center justify-center px-8 py-1.5 rounded-full bg-gradient-to-r from-primary-start to-primary-end text-white font-bold hover:shadow-lg hover:-translate-y-1 transition-all">
              Return to Home <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        ) : (
          <div className="bg-white dark:bg-[#111] rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-white/10">
            {/* Service Selection */}
            <div className="p-3 md:p-4 bg-slate-50/50 dark:bg-white/5 border-b border-slate-100 dark:border-white/10 overflow-x-auto hide-scrollbar">
              <div className="flex gap-2 md:justify-center min-w-max">
                {formTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormType(type.id)}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg border-2 transition-all w-28 ${
                        formType === type.id 
                          ? 'border-primary-start bg-primary-start/5 text-primary-start shadow-sm' 
                          : 'border-slate-100 dark:border-white/10 bg-white dark:bg-[#111] text-slate-500 dark:text-slate-400 hover:border-slate-200 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-0.5" />
                      <span className="text-xs font-bold text-center leading-tight">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-3 md:p-4 space-y-3">
              <input type="hidden" name="formType" value={formType} />

              <div className="grid md:grid-cols-2 gap-2">
                <div className="space-y-3">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
                    <input required type="text" name="name" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all" placeholder="John Doe" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
                    <input required type="tel" name="phone" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="space-y-3 md:col-span-2">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
                    <input required type="email" name="email" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/10 space-y-3">
                <AnimatePresence mode="wait">
                  
                  {formType === 'training' && (
                    <motion.div key="training" initial={{ opacity: 1, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-3">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Training Preferences</h3>
                      
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Training Mode *</label>
                          <select required name="training_mode" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start">
                            <option value="">Select Mode</option>
                            <option value="Offline (At Farm)">Offline (At Farm)</option>
                            <option value="Online (Live Classes)">Online (Live Classes)</option>
                          </select>
                        </div>
                        
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Mushroom Variety *</label>
                          <select required name="mushroom_variety" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start">
                            <option value="">Select Variety</option>
                            {varieties.map(v => <option key={v} value={v}>{v}</option>)}
                            <option value="All Varieties">All Varieties Combined</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {formType === 'spawn' && (
                    <motion.div key="spawn" initial={{ opacity: 1, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-3">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Spawn (Seed) Requirements</h3>
                      
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Mushroom Variety *</label>
                          <select required name="mushroom_variety" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start">
                            <option value="">Select Variety</option>
                            {varieties.map(v => <option key={v} value={v}>{v}</option>)}
                            <option value="All Varieties Combined">All Varieties Combined / Multiple</option>
                          </select>
                        </div>
                        
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Quantity Required (kg) *</label>
                          <input required type="text" name="quantity_kg" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start" placeholder="e.g., 50 kg" />
                        </div>

                        <div className="space-y-3 md:col-span-2">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Delivery State/City *</label>
                          <input required type="text" name="delivery_location" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start" placeholder="Your delivery location" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {formType === 'setup' && (
                    <motion.div key="setup" initial={{ opacity: 1, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-3">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Turnkey Project Details</h3>
                      
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Setup Type *</label>
                          <select required name="setup_type" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start">
                            <option value="">Select Farm Type</option>
                            <option value="AC Commercial Farm">AC Commercial Farm (Button/Oyster)</option>
                            <option value="Non-AC Seasonal Hut">Non-AC Seasonal Hut Structure</option>
                            <option value="PUF Panel Setup">High-Tech PUF Panel Setup</option>
                            <option value="Consultancy Only">Consultancy Only</option>
                          </select>
                        </div>
                        
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Estimated Farm Size/Area</label>
                          <input type="text" name="farm_size" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start" placeholder="e.g., 2000 sq ft" />
                        </div>

                        <div className="space-y-3 md:col-span-2">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Farm Location *</label>
                          <input required type="text" name="farm_location" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start" placeholder="City, State" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {formType === 'buy_mushroom' && (
                    <motion.div key="buy_mushroom" initial={{ opacity: 1, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-3">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Purchase Mushrooms</h3>
                      
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Product Form *</label>
                          <select required name="product_form" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start">
                            <option value="">Select Form</option>
                            <option value="Fresh Mushroom">Fresh Mushroom</option>
                            <option value="Dry Mushroom">Dry Mushroom</option>
                            <option value="Mushroom Powder">Mushroom Powder</option>
                          </select>
                        </div>
                        
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Mushroom Variety *</label>
                          <select required name="mushroom_variety" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start">
                            <option value="">Select Variety</option>
                            {varieties.map(v => <option key={v} value={v}>{v}</option>)}
                          </select>
                        </div>
                        
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Order Quantity (kg) *</label>
                          <input required type="text" name="order_quantity" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start" placeholder="e.g., 100 kg" />
                        </div>

                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Delivery City/State *</label>
                          <input required type="text" name="delivery_location" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start" placeholder="Your delivery location" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {formType === 'other' && (
                    <motion.div key="other" initial={{ opacity: 1, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-3">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Other Services / General Enquiry</h3>
                      <div className="space-y-3">
                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Subject of Enquiry *</label>
                        <select required name="other_subject" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start">
                          <option value="">Select Service</option>
                          <option value="Machinery & Equipment">Machinery & Equipment</option>
                          <option value="Site Visit Consultation">Site Visit Consultation</option>
                          <option value="Marketing & Buyback Support">Marketing & Buyback Support</option>
                          <option value="Subsidies & Bank Loans">Subsidies & Bank Loans</option>
                          <option value="Other">Other Query</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Any additional details or questions?</label>
                <textarea name="additional_message" rows={4} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all resize-none" placeholder="Write your specific requirements here..."></textarea>
              </div>

              <div className="flex justify-center md:justify-start -mt-1 mb-2 scale-90 sm:scale-100 origin-left">
                <div className="flex flex-col items-start w-full">
                  <ReCaptchaWrapper ref={recaptchaRef} onChange={(token) => { setCaptchaToken(token); if (token) setCaptchaError(false); }} />
                  {captchaError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="text-red-500 text-sm font-medium mt-1 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Please solve the math security check above to submit.
                    </motion.p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {submitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> <span>Submit Enquiry</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryPage;
