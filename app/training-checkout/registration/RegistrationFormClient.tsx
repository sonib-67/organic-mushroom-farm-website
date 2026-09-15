"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function RegistrationFormClient({ 
  type, 
  searchParams 
}: { 
  type: "basic" | "advanced"; 
  searchParams: { [key: string]: string | undefined } 
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const isAdvanced = type === "advanced";
  
  // Payment auto-filled data
  const paymentData = {
    name: searchParams.name || "",
    email: searchParams.email || "",
    phone: searchParams.phone || "",
    amount: searchParams.amount || (isAdvanced ? "699" : "299"),
    payment_id: searchParams.payment_id || "NOT_PROVIDED",
    order_id: searchParams.order_id || "NOT_PROVIDED",
    payment_date: new Date().toLocaleDateString(),
  };

  const [formData, setFormData] = useState({
    whatsapp: "",
    altPhone: "",
    country: "India",
    state: "",
    city: "",
    slot: "",
    startDate: "",
    mushroom: "",
    experience: "",
    haveFarm: "",
    farmSize: "",
    purpose: "",
    requirement: "",
    hearAbout: "",
    agreeCorrect: false,
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/registration/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          payment: paymentData,
          form: formData
        }),
      });
      
      if (res.ok) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Failed to submit registration. Please contact support.");
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-transparent">
        <div className="z-10 w-full max-w-lg mx-auto px-4 py-8 flex flex-col items-center justify-center h-[100dvh]">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="backdrop-blur-xl bg-black/40 border border-green-500/30 p-8 rounded-2xl shadow-2xl relative z-10 text-white text-center w-full">
            <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/50">
              <span className="text-4xl">✅</span>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-green-400">Registration Completed</h1>
            <h2 className="text-lg font-semibold text-gray-200 mb-6">
              {isAdvanced ? "Advanced Mushroom Farming Training" : "Basic Mushroom Farming Training"}
            </h2>
            
            <div className="bg-black/30 rounded-xl p-4 text-left border border-white/10 mb-6 space-y-2 text-sm text-gray-300">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-semibold text-gray-400">Payment Status:</span>
                <span className="text-green-400 font-bold">PAID</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="font-semibold text-gray-400">Registration Status:</span>
                <span className="text-blue-400 font-bold">COMPLETED</span>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-2">Your training registration has been received.</p>
            <p className="text-sm text-gray-300">Our team will contact you with the training access details shortly.</p>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex flex-col items-center min-h-[100dvh] overflow-y-auto bg-transparent py-10">
      <div className="z-10 w-full max-w-2xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full border border-green-500/30 font-bold text-sm mb-4 backdrop-blur-md">
            Payment Successful ✅
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Complete Your Training Registration</h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="backdrop-blur-xl bg-black/40 border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl relative z-10 text-white">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* SECTION 1: Personal Details */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-purple-300 border-b border-white/20 pb-2">1. Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Full Name *</label>
                  <input type="text" disabled value={paymentData.name} className="w-full px-3 py-2 text-sm bg-black/50 border border-white/10 rounded-lg text-gray-400 cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email Address *</label>
                  <input type="email" disabled value={paymentData.email} className="w-full px-3 py-2 text-sm bg-black/50 border border-white/10 rounded-lg text-gray-400 cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">WhatsApp Number *</label>
                  <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-white placeholder-gray-400" placeholder="Your active WhatsApp number" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Alternate Mobile Number</label>
                  <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-white placeholder-gray-400" placeholder="Optional" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Country *</label>
                  <input type="text" name="country" required value={formData.country} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-white placeholder-gray-400" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">State / City</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-white placeholder-gray-400" placeholder="e.g. Maharashtra, Mumbai" />
                </div>
              </div>
            </section>

            {/* SECTION 2: Training Details */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-purple-300 border-b border-white/20 pb-2">2. Training Details</h3>
              <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-sm space-y-2 text-gray-300 mb-4">
                <p><span className="font-semibold text-gray-400">Course Name:</span> {isAdvanced ? "Advanced Mushroom Farming Training" : "Basic Mushroom Farming Training"}</p>
                <p><span className="font-semibold text-gray-400">Course Fee:</span> ₹{paymentData.amount}</p>
                <p><span className="font-semibold text-gray-400">Training Mode:</span> Online</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Preferred Training Slot *</label>
                  <select name="slot" required value={formData.slot} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-[#1a1a2e] border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white">
                    <option value="">Select a slot</option>
                    <option value="9:00 AM - 10:30 AM">9:00 AM – 10:30 AM</option>
                    <option value="2:00 PM - 3:30 PM">2:00 PM – 3:30 PM</option>
                    <option value="4:00 PM - 5:30 PM">4:00 PM – 5:30 PM</option>
                    <option value="7:00 PM - 8:30 PM">7:00 PM – 8:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Preferred Start Date</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white" />
                </div>
              </div>
            </section>

            {/* SECTION 3: Farming Information */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-purple-300 border-b border-white/20 pb-2">3. {isAdvanced ? "Mushroom Farming Information" : "Basic Farming Details"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Which mushroom do you want to learn? *</label>
                  <select name="mushroom" required value={formData.mushroom} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-[#1a1a2e] border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white">
                    <option value="">Select type</option>
                    <option value="Button">Button Mushroom</option>
                    <option value="Oyster">Oyster Mushroom</option>
                    <option value="Milky">Milky Mushroom</option>
                    <option value="Multiple">Multiple Types</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Current Experience *</label>
                  <select name="experience" required value={formData.experience} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-[#1a1a2e] border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white">
                    <option value="">Select experience</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Some Experience">Some Experience</option>
                    <option value="Experienced">Experienced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Do you already have a farm? *</label>
                  <select name="haveFarm" required value={formData.haveFarm} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-[#1a1a2e] border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white">
                    <option value="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Planned Farm Size</label>
                  <select name="farmSize" value={formData.farmSize} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-[#1a1a2e] border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white">
                    <option value="">Select size</option>
                    <option value="Small">Home / Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Not Decided">Not Decided</option>
                  </select>
                </div>
                {isAdvanced && (
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-300 mb-1">Main Purpose *</label>
                    <select name="purpose" required value={formData.purpose} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-[#1a1a2e] border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white">
                      <option value="">Select purpose</option>
                      <option value="Learn">Learn Mushroom Farming</option>
                      <option value="Start">Start a Farm</option>
                      <option value="Expand">Expand Existing Farm</option>
                      <option value="Commercial">Commercial Production</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                )}
              </div>
            </section>

            {/* SECTION 4: Payment Information */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-purple-300 border-b border-white/20 pb-2">4. Payment Information</h3>
              <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 text-sm space-y-2 text-green-100">
                <p className="text-xs text-green-300/70 uppercase tracking-widest mb-3">Auto-filled via Razorpay</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs font-semibold text-green-400/80">Status</span>
                    <span className="font-bold">PAID</span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-green-400/80">Amount</span>
                    <span className="font-bold">₹{paymentData.amount}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-xs font-semibold text-green-400/80">Payment ID</span>
                    <span className="font-mono text-xs break-all">{paymentData.payment_id}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-xs font-semibold text-green-400/80">Order ID</span>
                    <span className="font-mono text-xs break-all">{paymentData.order_id}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-xs font-semibold text-green-400/80">Date</span>
                    <span>{paymentData.payment_date}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: Additional Info */}
            <section className="space-y-4">
              <details className="group bg-black/20 border border-white/10 rounded-xl overflow-hidden cursor-pointer">
                <summary className="px-4 py-3 text-sm font-bold text-gray-200 outline-none flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors">
                  5. Additional Information (Optional)
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-4 py-4 space-y-4 bg-black/30 border-t border-white/10">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">{isAdvanced ? "Your Question / Requirement" : "Any question or requirement"}</label>
                    <textarea name="requirement" rows={3} value={formData.requirement} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white resize-none" placeholder="Write any specific requirements here..."></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">How did you hear about us?</label>
                    <select name="hearAbout" value={formData.hearAbout} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-[#1a1a2e] border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white">
                      <option value="">Select option</option>
                      <option value="Google">Google</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Referral">Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </details>
            </section>

            {/* SECTION 6: Agreement */}
            <section className="space-y-4 pt-4 border-t border-white/20">
              <h3 className="text-lg font-bold text-purple-300 mb-2">6. Agreement</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="agreeCorrect" required checked={formData.agreeCorrect} onChange={handleChange} className="mt-1 w-4 h-4 rounded border-white/30 bg-white/10 text-purple-600 focus:ring-purple-500" />
                  <span className="text-sm text-gray-300">I confirm that the information provided by me is correct.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="agreeTerms" required checked={formData.agreeTerms} onChange={handleChange} className="mt-1 w-4 h-4 rounded border-white/30 bg-white/10 text-purple-600 focus:ring-purple-500" />
                  <span className="text-sm text-gray-300">I agree to the Training Terms & Conditions and Privacy Policy.</span>
                </label>
              </div>
            </section>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl mt-6 border border-white/10"
            >
              {loading ? "Submitting Details..." : "Complete Registration"}
            </button>
            
          </form>
        </motion.div>
      </div>
    </main>
  );
}
