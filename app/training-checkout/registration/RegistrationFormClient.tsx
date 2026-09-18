"use client";
import React, { useState } from "react";

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
      <main className="relative flex flex-col items-center justify-center min-h-[100dvh] bg-transparent py-8 px-4 z-20 pointer-events-auto" style={{ isolation: 'isolate' }}>
        <div className="w-full max-w-md mx-auto text-center space-y-3">
          <div className="w-14 h-14 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/40">
            <span className="text-2xl">✅</span>
          </div>
          <h1 className="text-lg font-bold text-emerald-500">Registration Completed</h1>
          <h2 className="text-xs font-semibold text-slate-700 dark:text-gray-300">
            {isAdvanced ? "Advanced Mushroom Farming Training" : "Basic Mushroom Farming Training"}
          </h2>
          
          <div className="py-2.5 px-3 text-left border-y border-black/10 dark:border-white/10 text-xs space-y-1 text-slate-700 dark:text-gray-300">
            <div className="flex justify-between">
              <span className="font-semibold text-slate-500 dark:text-gray-400">Payment Status:</span>
              <span className="text-emerald-500 font-bold">PAID (₹{paymentData.amount})</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-500 dark:text-gray-400">Registration Status:</span>
              <span className="text-indigo-500 font-bold">COMPLETED</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-600 dark:text-gray-400">Your training registration has been received.</p>
          <p className="text-[11px] text-slate-600 dark:text-gray-400">Our team will contact you with the training access details shortly.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex flex-col items-center min-h-[100dvh] bg-transparent py-6 px-3 z-20 pointer-events-auto" style={{ isolation: 'isolate' }}>
      <div className="w-full max-w-lg mx-auto">
        {/* Flat Minimal Header */}
        <div className="text-center mb-3">
          <span className="inline-block text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            Payment Successful (₹{paymentData.amount}) ✅
          </span>
          <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
            Complete Your Training Registration
          </h1>
        </div>

        {/* 100% Flat & Box-Free Lightweight Form */}
        <div className="relative z-20 text-slate-900 dark:text-white">
          <form onSubmit={handleSubmit} className="space-y-3.5">
            
            {/* SECTION 1: Personal Details */}
            <section className="space-y-1.5">
              <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                1. Personal Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-medium text-slate-500 dark:text-gray-400 mb-0.5">Full Name *</label>
                  <input type="text" disabled value={paymentData.name} className="w-full px-2.5 py-1 text-xs bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded text-slate-500 dark:text-gray-400 cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-500 dark:text-gray-400 mb-0.5">Email Address *</label>
                  <input type="email" disabled value={paymentData.email} className="w-full px-2.5 py-1 text-xs bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded text-slate-500 dark:text-gray-400 cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">WhatsApp Number *</label>
                  <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full px-2.5 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white placeholder-slate-400" placeholder="Active WhatsApp number" />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">Alternate Mobile Number</label>
                  <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleChange} className="w-full px-2.5 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white placeholder-slate-400" placeholder="Optional" />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">Country *</label>
                  <input type="text" name="country" required value={formData.country} onChange={handleChange} className="w-full px-2.5 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">State / City *</label>
                  <input type="text" name="state" required value={formData.state} onChange={handleChange} className="w-full px-2.5 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white placeholder-slate-400" placeholder="e.g. Maharashtra, Mumbai" />
                </div>
              </div>
            </section>

            {/* SECTION 2: Training Details */}
            <section className="space-y-1.5 pt-1">
              <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                2. Training Details
              </h2>
              <div className="py-1 px-1 border-b border-black/10 dark:border-white/10 text-xs flex flex-wrap gap-x-4 gap-y-1 text-slate-600 dark:text-gray-300">
                <span><strong>Course:</strong> {isAdvanced ? "Advanced Mushroom Training" : "Basic Mushroom Training"}</span>
                <span><strong>Fee:</strong> ₹{paymentData.amount}</span>
                <span><strong>Mode:</strong> Online</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">Preferred Training Slot *</label>
                  <select name="slot" required value={formData.slot} onChange={handleChange} className="w-full px-2 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white cursor-pointer">
                    <option value="" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Select a slot</option>
                    <option value="9:00 AM - 10:30 AM" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">9:00 AM – 10:30 AM</option>
                    <option value="2:00 PM - 3:30 PM" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">2:00 PM – 3:30 PM</option>
                    <option value="4:00 PM - 5:30 PM" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">4:00 PM – 5:30 PM</option>
                    <option value="7:00 PM - 8:30 PM" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">7:00 PM – 8:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">Preferred Start Date</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-2 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white cursor-pointer" />
                </div>
              </div>
            </section>

            {/* SECTION 3: Farming Information */}
            <section className="space-y-1.5 pt-1">
              <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                3. {isAdvanced ? "Mushroom Farming Information" : "Basic Farming Details"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">Mushroom to learn? *</label>
                  <select name="mushroom" required value={formData.mushroom} onChange={handleChange} className="w-full px-2 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white cursor-pointer">
                    <option value="" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Select type</option>
                    <option value="Button" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Button Mushroom</option>
                    <option value="Oyster" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Oyster Mushroom</option>
                    <option value="Milky" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Milky Mushroom</option>
                    <option value="Multiple" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Multiple Types</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">Current Experience *</label>
                  <select name="experience" required value={formData.experience} onChange={handleChange} className="w-full px-2 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white cursor-pointer">
                    <option value="" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Select experience</option>
                    <option value="Beginner" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Beginner</option>
                    <option value="Some Experience" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Some Experience</option>
                    <option value="Experienced" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Experienced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">Do you already have a farm? *</label>
                  <select name="haveFarm" required value={formData.haveFarm} onChange={handleChange} className="w-full px-2 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white cursor-pointer">
                    <option value="" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Select option</option>
                    <option value="Yes" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Yes</option>
                    <option value="No" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">Planned Farm Size</label>
                  <select name="farmSize" value={formData.farmSize} onChange={handleChange} className="w-full px-2 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white cursor-pointer">
                    <option value="" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Select size</option>
                    <option value="Small" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Home / Small</option>
                    <option value="Medium" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Medium</option>
                    <option value="Commercial" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Commercial</option>
                    <option value="Not Decided" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Not Decided</option>
                  </select>
                </div>
                {isAdvanced && (
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">Main Purpose *</label>
                    <select name="purpose" required value={formData.purpose} onChange={handleChange} className="w-full px-2 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white cursor-pointer">
                      <option value="" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Select purpose</option>
                      <option value="Learn" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Learn Mushroom Farming</option>
                      <option value="Start" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Start a Farm</option>
                      <option value="Expand" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Expand Existing Farm</option>
                      <option value="Commercial" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Commercial Production</option>
                      <option value="Other" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Other</option>
                    </select>
                  </div>
                )}
              </div>
            </section>

            {/* SECTION 4: Payment Information */}
            <section className="space-y-1 pt-1">
              <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                4. Payment Information
              </h2>
              <div className="py-1 px-1 border-y border-black/10 dark:border-white/10 text-[11px] grid grid-cols-2 gap-1 text-slate-700 dark:text-gray-300">
                <div>Status: <span className="font-bold text-emerald-500">PAID</span></div>
                <div>Amount: <span className="font-bold">₹{paymentData.amount}</span></div>
                <div className="col-span-2 truncate">Payment ID: <span className="font-mono text-[10px]">{paymentData.payment_id}</span></div>
                <div className="col-span-2 truncate">Order ID: <span className="font-mono text-[10px]">{paymentData.order_id}</span></div>
              </div>
            </section>

            {/* SECTION 5: Additional Info */}
            <section className="space-y-1.5 pt-1">
              <details className="group cursor-pointer">
                <summary className="text-[11px] font-bold text-slate-600 dark:text-gray-300 outline-none flex justify-between items-center py-1 border-b border-black/10 dark:border-white/10">
                  5. Additional Information (Optional)
                  <span className="transition-transform group-open:rotate-180 text-xs">▼</span>
                </summary>
                <div className="py-2 space-y-2">
                  <div>
                    <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">{isAdvanced ? "Your Question / Requirement" : "Any question or requirement"}</label>
                    <textarea name="requirement" rows={2} value={formData.requirement} onChange={handleChange} className="w-full px-2 py-1 text-xs bg-transparent border border-black/20 dark:border-white/20 rounded focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white resize-none" placeholder="Write any specific requirements..."></textarea>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-slate-600 dark:text-gray-300 mb-0.5">How did you hear about us?</label>
                    <select name="hearAbout" value={formData.hearAbout} onChange={handleChange} className="w-full px-2 py-1 text-xs bg-transparent border-0 border-b border-black/20 dark:border-white/20 focus:outline-none focus:border-indigo-500 rounded-none text-slate-900 dark:text-white cursor-pointer">
                      <option value="" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Select option</option>
                      <option value="Google" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Google</option>
                      <option value="YouTube" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">YouTube</option>
                      <option value="Instagram" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Instagram</option>
                      <option value="Facebook" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Facebook</option>
                      <option value="Referral" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Referral</option>
                      <option value="Other" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Other</option>
                    </select>
                  </div>
                </div>
              </details>
            </section>

            {/* SECTION 6: Agreement */}
            <section className="space-y-1.5 pt-2 border-t border-black/10 dark:border-white/10">
              <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                6. Agreement
              </h2>
              <div className="space-y-1">
                <label className="flex items-start gap-2 cursor-pointer py-0.5 select-none touch-manipulation">
                  <input type="checkbox" name="agreeCorrect" required checked={formData.agreeCorrect} onChange={handleChange} className="mt-0.5 w-3.5 h-3.5 rounded accent-indigo-600 cursor-pointer shrink-0" />
                  <span className="text-[11px] text-slate-600 dark:text-gray-300 leading-tight">I confirm that the information provided by me is correct.</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer py-0.5 select-none touch-manipulation">
                  <input type="checkbox" name="agreeTerms" required checked={formData.agreeTerms} onChange={handleChange} className="mt-0.5 w-3.5 h-3.5 rounded accent-indigo-600 cursor-pointer shrink-0" />
                  <span className="text-[11px] text-slate-600 dark:text-gray-300 leading-tight">I agree to the Training Terms & Conditions and Privacy Policy.</span>
                </label>
              </div>
            </section>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white rounded-lg text-xs font-bold transition-opacity cursor-pointer disabled:opacity-50 mt-4 active:opacity-90 touch-manipulation"
            >
              {loading ? "Submitting Details..." : "Complete Registration"}
            </button>
            
          </form>
        </div>
      </div>
    </main>
  );
}
