"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  User,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Calendar,
  Clock,
  Video,
  Building2,
  Send,
  Printer,
  ChevronRight,
  ShieldCheck,
  RotateCcw,
  Sprout,
  HelpCircle,
} from "lucide-react";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCT)",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
  "Other / Outside India",
];

export function RegistrationFormClient() {
  const [formData, setFormData] = useState({
    // 1-8 Customer Details
    fullName: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    state: "Madhya Pradesh",
    pincode: "",
    fullAddress: "",

    // 9-13 Mushroom Farming Details
    currentlyFarming: "No, I am a beginner",
    mushroomInterested: "Button",
    experience: "No experience",
    hasSetup: "Planning to set up",
    investment: "₹1–5 lakh",

    // 14-16 Training Information
    reason: "Start mushroom farming",
    learningGoals: "",
    hearAboutUs: "YouTube",

    // Training Session
    trainingName: "1-Day Button Mushroom Training",
    trainingDate: "Sunday, Upcoming Batch (10:00 AM IST)",
    trainingMode: "Online",
    trainingTime: "10:00 AM – 4:00 PM IST",

    // 21 Confirmation
    confirmed: false,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelect = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validate Required Fields
    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your Full Name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit WhatsApp / Mobile number.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid Email Address.");
      return;
    }
    if (!formData.city.trim()) {
      setErrorMsg("Please enter your City.");
      return;
    }
    if (!formData.state.trim()) {
      setErrorMsg("Please select your State.");
      return;
    }
    if (!formData.confirmed) {
      setErrorMsg(
        "Please check the confirmation box to verify that your provided details are correct."
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/mushroom-training-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(
          json.error || "Failed to submit registration. Please try again."
        );
      }

      setSubmittedData({
        ...formData,
        registrationId: json.registrationId || "OMF-BTN-" + Date.now(),
        submittedAt: json.submittedAt || new Date().toLocaleString("en-IN"),
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setErrorMsg(
        err.message ||
          "Network error. Please check your connection or contact +91 91791 26868."
      );
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsAppMessage = () => {
    if (!submittedData) return "";
    const msg = `*New 1-Day Button Mushroom Training Registration Slip* 🍄%0A%0A` +
      `*Reg ID:* ${submittedData.registrationId}%0A` +
      `*Name:* ${submittedData.fullName}%0A` +
      `*WhatsApp:* ${submittedData.phone}%0A` +
      `*Email:* ${submittedData.email}%0A` +
      `*City/State:* ${submittedData.city}, ${submittedData.state}%0A` +
      `*Training Program:* ${submittedData.trainingName}%0A` +
      `*Batch Date:* ${submittedData.trainingDate}%0A` +
      `*Mode:* ${submittedData.trainingMode}%0A` +
      `*Time:* ${submittedData.trainingTime}%0A%0A` +
      `*Farming Status:* ${submittedData.currentlyFarming}%0A` +
      `*Mushroom Interested:* ${submittedData.mushroomInterested}%0A` +
      `*Experience:* ${submittedData.experience}%0A` +
      `*Planned Investment:* ${submittedData.investment}%0A` +
      `*Goal:* ${submittedData.reason}%0A%0A` +
      `Please confirm my batch seat. Thank you!`;
    return `https://wa.me/919179126868?text=${msg}`;
  };

  // SUCCESS SCREEN
  if (submittedData) {
    return (
      <div className="min-h-screen py-10 px-4 sm:px-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Header Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-600 via-sky-600 to-emerald-600 text-white text-center relative">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/30 shadow-inner">
              <CheckCircle2 className="w-9 h-9 text-white" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full text-emerald-200">
              Registration Successful
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">
              1-Day Button Mushroom Training
            </h1>
            <p className="text-sm text-white/90 mt-1 max-w-md mx-auto">
              Your details have been successfully recorded with Organic Mushroom
              Farm.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 bg-white/15 border border-white/30 px-4 py-1.5 rounded-full font-mono text-sm sm:text-base font-extrabold shadow-sm">
              <span>Registration ID:</span>
              <span className="text-emerald-300">
                {submittedData.registrationId}
              </span>
            </div>
          </div>

          {/* Registration Slip Summary */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> Training Schedule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    Program
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.trainingName}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    Batch Date
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.trainingDate}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    Mode
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.trainingMode}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    Session Timing
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.trainingTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-1.5">
                <User className="w-4 h-4" /> Candidate Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    Full Name
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.fullName}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    WhatsApp / Phone
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.phone}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    Email
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.email}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    Location
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.city},{" "}
                    {submittedData.district ? `${submittedData.district}, ` : ""}
                    {submittedData.state}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    Mushroom Interest
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.mushroomInterested}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    Farming Experience
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.experience}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-600/25 active:scale-98 text-sm sm:text-base"
              >
                <Send className="w-5 h-5" />
                <span>Send Confirmation Slip on WhatsApp (+91 91791 26868)</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => window.print()}
                  className="py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save Slip</span>
                </button>
                <a
                  href="tel:+919179126868"
                  className="py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>Call Farm Support</span>
                </a>
              </div>

              <div className="pt-3 text-center">
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setFormData((prev) => ({
                      ...prev,
                      fullName: "",
                      phone: "",
                      email: "",
                      city: "",
                      district: "",
                      pincode: "",
                      fullAddress: "",
                      learningGoals: "",
                      confirmed: false,
                    }));
                  }}
                  className="text-xs text-purple-600 dark:text-purple-400 hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Registration</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 sm:py-10 px-3 sm:px-6 max-w-4xl mx-auto">
      {/* Top Header Card */}
      <div className="mb-6 sm:mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-bold mb-3">
          <Sprout className="w-4 h-4" />
          <span>Official Registration Portal</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          1-Day Button Mushroom Training <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-purple-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
            Registration Form
          </span>
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Kripya apni sahi jankari bharein taaki aapka batch confirm kiya ja
          sake. Complete SOPs, compost calculation, raw material sourcing aur
          live Q&A included hai.
        </p>
      </div>

      {/* Program Summary Badge */}
      <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-sky-400/10 to-emerald-400/10 border border-purple-500/20 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
            alt="Mushroom Logo"
            className="w-10 h-10 object-contain"
            width="40"
            height="40"
          />
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              Program: 1-Day Button Mushroom Commercial Training
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 flex items-center gap-3 mt-0.5">
              <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                <Clock className="w-3.5 h-3.5" /> Fixed Time: 10:00 AM – 4:00 PM IST
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Video className="w-3.5 h-3.5 text-sky-500" /> Mode: Online / Offline
              </span>
            </p>
          </div>
        </div>
        <div className="text-right ml-auto">
          <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 block">
            Upcoming Batch
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
            Live Interactive Session
          </span>
        </div>
      </div>

      {/* Main Form Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-900/85 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-xl overflow-hidden backdrop-blur-xl p-5 sm:p-8 space-y-8"
      >
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
            <div className="font-semibold">{errorMsg}</div>
          </div>
        )}

        {/* SECTION 1: CUSTOMER DETAILS */}
        <div className="space-y-4">
          <div className="border-b border-slate-200/80 dark:border-white/10 pb-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
              1
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
              Customer Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                1. Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Patel"
                  required
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* 2. WhatsApp / Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                2. WhatsApp / Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9179126868"
                  required
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* 3. Email Address */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                3. Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. ramesh@gmail.com"
                  required
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* 4. City */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                4. City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Jabalpur / Indore"
                required
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* 5. District */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                5. District
              </label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="e.g. Jabalpur"
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* 6. State */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                6. State <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              >
                {INDIAN_STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* 7. PIN Code */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                7. PIN Code
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="e.g. 482001"
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* 8. Full Address */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                8. Full Address
              </label>
              <textarea
                name="fullAddress"
                rows={2}
                value={formData.fullAddress}
                onChange={handleChange}
                placeholder="House / Plot No., Village, Post, Tehsil..."
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: MUSHROOM FARMING DETAILS */}
        <div className="space-y-4 pt-2">
          <div className="border-b border-slate-200/80 dark:border-white/10 pb-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
              2
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
              <span>🍄</span> Mushroom Farming Details
            </h2>
          </div>

          {/* 9. Are you currently doing mushroom farming? */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              9. Are you currently doing mushroom farming?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                "No, I am a beginner",
                "Yes, currently farming",
                "Planning to start",
              ].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => handleSelect("currentlyFarming", opt)}
                  className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                    formData.currentlyFarming === opt
                      ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20"
                      : "bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-purple-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* 10. Which mushroom are you interested in? */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              10. Which mushroom are you interested in?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {["Button", "Oyster", "Milky", "Other"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => handleSelect("mushroomInterested", opt)}
                  className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    formData.mushroomInterested === opt
                      ? "bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/20"
                      : "bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-sky-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* 11. Previous mushroom farming experience */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              11. Previous mushroom farming experience
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {["No experience", "Less than 1 year", "1–3 years", "3+ years"].map(
                (opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => handleSelect("experience", opt)}
                    className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                      formData.experience === opt
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                        : "bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-400"
                    }`}
                  >
                    {opt}
                  </button>
                )
              )}
            </div>
          </div>

          {/* 12. Do you already have a mushroom farm/setup? */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              12. Do you already have a mushroom farm/setup?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {["Yes", "No", "Planning to set up"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => handleSelect("hasSetup", opt)}
                  className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                    formData.hasSetup === opt
                      ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20"
                      : "bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-purple-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* 13. Approximate planned farm size / investment */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              13. Approximate planned farm size / investment
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {["₹50,000–₹1 lakh", "₹1–5 lakh", "₹5–10 lakh", "₹10 lakh+"].map(
                (opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => handleSelect("investment", opt)}
                    className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                      formData.investment === opt
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                        : "bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-400"
                    }`}
                  >
                    {opt}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* SECTION 3: TRAINING INFORMATION */}
        <div className="space-y-4 pt-2">
          <div className="border-b border-slate-200/80 dark:border-white/10 pb-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-300 flex items-center justify-center font-bold text-xs">
              3
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
              <span>🎯</span> Training Information
            </h2>
          </div>

          {/* 14. Why do you want to attend this training? */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              14. Why do you want to attend this training?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "Start mushroom farming",
                "Improve existing farm",
                "Commercial production",
                "Learn Button Mushroom cultivation",
                "Other",
              ].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => handleSelect("reason", opt)}
                  className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                    formData.reason === opt
                      ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20"
                      : "bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-purple-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* 15. What do you want to learn from this training? */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              15. What do you want to learn from this training?
            </label>
            <textarea
              name="learningGoals"
              rows={3}
              value={formData.learningGoals}
              onChange={handleChange}
              placeholder="Apne specific questions ya jo cheez aap detail mein seekhna chahte hain (e.g. Compost recipe, temperature management, disease control)..."
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* 16. How did you hear about us? */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              16. How did you hear about us?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                "YouTube",
                "Instagram",
                "Google",
                "Facebook",
                "WhatsApp",
                "Friend/Referral",
                "Other",
              ].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => handleSelect("hearAboutUs", opt)}
                  className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                    formData.hearAboutUs === opt
                      ? "bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/20"
                      : "bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-sky-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4: TRAINING DETAILS & SCHEDULE */}
        <div className="space-y-4 pt-2">
          <div className="border-b border-slate-200/80 dark:border-white/10 pb-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
              4
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
              <span>📅</span> Training Schedule & Mode
            </h2>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Training Program
                </label>
                <input
                  type="text"
                  readOnly
                  value={formData.trainingName}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-200/60 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-bold cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Training Time (Fixed Timing)
                </label>
                <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-200/60 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white font-bold">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>10:00 AM – 4:00 PM IST</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Training Mode (Select Preferred Mode)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Online", "Offline"].map((mode) => (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => handleSelect("trainingMode", mode)}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        formData.trainingMode === mode
                          ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                          : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      {mode === "Online" ? (
                        <Video className="w-3.5 h-3.5" />
                      ) : (
                        <Building2 className="w-3.5 h-3.5" />
                      )}
                      <span>{mode}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Batch Date
                </label>
                <select
                  name="trainingDate"
                  value={formData.trainingDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-bold focus:outline-none focus:border-purple-500"
                >
                  <option value="Sunday, Upcoming Batch (10:00 AM IST)">
                    Sunday, Upcoming Batch (10:00 AM IST)
                  </option>
                  <option value="Next Sunday Batch (10:00 AM IST)">
                    Next Sunday Batch (10:00 AM IST)
                  </option>
                  <option value="Custom Batch Date (Discuss on Call)">
                    Custom Batch Date (Discuss on Call)
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: FINAL CONFIRMATION */}
        <div className="pt-2 border-t border-slate-200/80 dark:border-white/10 space-y-4">
          <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/40">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="confirmed"
                checked={formData.confirmed}
                onChange={handleChange}
                className="mt-0.5 w-5 h-5 rounded-md text-purple-600 focus:ring-purple-500 border-slate-300 dark:border-slate-700 cursor-pointer accent-purple-600 shrink-0"
              />
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                21. I confirm that the information provided by me is correct. ☑️
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-sky-600 to-emerald-600 hover:opacity-95 disabled:opacity-50 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-600/25 active:scale-98"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting Your Registration...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Submit Registration</span>
                <ChevronRight className="w-5 h-5" />
              </span>
            )}
          </button>

          <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
            Submitting this form connects you directly to our lead trainer. Need
            instant help? Call{" "}
            <a
              href="tel:+919179126868"
              className="text-purple-600 dark:text-purple-400 font-bold underline"
            >
              +91 91791 26868
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationFormClient;
