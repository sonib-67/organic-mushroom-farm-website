"use client";

import React, { useState, useEffect, useRef } from "react";
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
  FileText,
  Eye,
  EyeOff,
  UploadCloud,
  FileCheck,
  Trash2,
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
    mushroomInterestedOther: "",
    experience: "No experience",
    hasSetup: "Planning to set up",
    investment: "₹1–5 lakh",
    investmentCustom: "",

    // 14-16 Training Information
    reason: "Start mushroom farming",
    learningGoals: "",
    hearAboutUs: "YouTube",

    // Training Session
    trainingName: "1 Day",
    trainingMode: "Online",
    trainingTime: "10:00 AM – 4:00 PM IST",

    // 21 Confirmation
    confirmed: false,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [showSlipPreview, setShowSlipPreview] = useState(false);

  const [previousSubmissionWarning, setPreviousSubmissionWarning] = useState<string>("");

  // Payment receipt states (Upload-only, NO QR, NO UPI, NO phone number)
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  const [receiptUtr, setReceiptUtr] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleReceiptFileChange = (file: File | null | undefined) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorMsg("Please upload a valid image file (JPG, PNG, or WEBP).");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg("File size exceeds 10MB. Please upload a smaller image.");
      return;
    }

    setReceiptFile(file);
    setErrorMsg("");

    const reader = new FileReader();
    reader.onload = (event) => {
      setReceiptPreview(event.target?.result as string);
    };
    reader.onerror = () => {
      setErrorMsg("Failed to read image file. Please try selecting the image again.");
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveReceipt = () => {
    setReceiptFile(null);
    setReceiptPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Check on client mount if this device already completed a registration
  useEffect(() => {
    try {
      const savedPhone = localStorage.getItem("omf_registered_phone");
      const savedRegId = localStorage.getItem("omf_registered_id");
      if (savedPhone) {
        setPreviousSubmissionWarning(
          `Notice: A registration slip was already generated from this device for phone number +91 ${savedPhone} (ID: ${savedRegId || "OMF"}). Single registration is permitted per phone number.`
        );
      }
    } catch {
      // ignore localStorage restriction
    }
  }, []);

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
    if (
      formData.mushroomInterested === "Other" &&
      !formData.mushroomInterestedOther.trim()
    ) {
      setErrorMsg("Please specify the mushroom variety you are interested in.");
      return;
    }
    if (
      formData.investment === "Other" &&
      (!formData.investmentCustom.trim() ||
        Number(formData.investmentCustom) <= 0)
    ) {
      setErrorMsg(
        "Please enter your planned investment amount in numbers (e.g. 250000)."
      );
      return;
    }

    if (!receiptPreview) {
      setErrorMsg(
        "Please upload your payment receipt screenshot to complete the registration."
      );
      const el = document.getElementById("payment-receipt-upload-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (!formData.confirmed) {
      setErrorMsg(
        "Please check the confirmation box to verify that your provided details are correct."
      );
      return;
    }

    setLoading(true);

    const finalMushroom =
      formData.mushroomInterested === "Other" &&
      formData.mushroomInterestedOther.trim()
        ? `Other (${formData.mushroomInterestedOther.trim()})`
        : formData.mushroomInterested;

    const finalInvestment =
      formData.investment === "Other" && formData.investmentCustom.trim()
        ? `Other (₹${Number(formData.investmentCustom).toLocaleString("en-IN")})`
        : formData.investment;

    const submissionPayload = {
      ...formData,
      mushroomInterested: finalMushroom,
      investment: finalInvestment,
      trainingName: `${formData.trainingName} Mushroom Training`,
      receiptBase64: receiptPreview || "",
      receiptMimeType: receiptFile?.type || "image/jpeg",
      receiptFileName: receiptFile?.name || "payment_receipt.jpg",
      utr: receiptUtr.trim(),
      paymentApp: "Payment Receipt Uploaded",
    };

    try {
      const res = await fetch("/api/mushroom-training-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(
          json.error || "Failed to submit registration. Please try again."
        );
      }

      // Record in device storage to prevent multiple duplicate registrations from this phone
      try {
        localStorage.setItem("omf_registered_phone", formData.phone);
        localStorage.setItem("omf_registered_id", json.registrationId || "");
      } catch {
        // ignore
      }

      setSubmittedData({
        ...submissionPayload,
        registrationId: json.registrationId || "OMF-TRN-" + Date.now(),
        submittedAt: json.submittedAt || new Date().toLocaleString("en-IN"),
        receiptPreview: receiptPreview,
        utr: receiptUtr.trim() || json.utr || "Attached with Registration",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setErrorMsg(
        err.message ||
          "Network error. Please check your connection or contact +91 9203544140."
      );
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsAppMessage = () => {
    if (!submittedData) return "";
    const msg =
      `*New Mushroom Training Registration Slip* 🍄%0A%0A` +
      `*Reg ID:* ${submittedData.registrationId}%0A` +
      `*Name:* ${submittedData.fullName}%0A` +
      `*WhatsApp:* ${submittedData.phone}%0A` +
      `*Email:* ${submittedData.email}%0A` +
      `*City/State:* ${submittedData.city}, ${submittedData.state}%0A` +
      `*Training Program:* ${submittedData.trainingName}%0A` +
      `*Mode:* ${submittedData.trainingMode}%0A` +
      `*Time:* ${submittedData.trainingTime}%0A%0A` +
      `*Farming Status:* ${submittedData.currentlyFarming}%0A` +
      `*Mushroom Interested:* ${submittedData.mushroomInterested}%0A` +
      `*Experience:* ${submittedData.experience}%0A` +
      `*Planned Investment:* ${submittedData.investment}%0A` +
      `*Goal:* ${submittedData.reason}%0A%0A` +
      `Please confirm my registration seat. Thank you!`;
    return `https://wa.me/919203544140?text=${msg}`;
  };

  // SUCCESS SCREEN
  if (submittedData) {
    return (
      <div className="min-h-screen py-8 px-3 sm:px-6">
        {/* Inline style specifically protecting print media flow */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media print {
            nav, header, footer, canvas, .no-print, #navbar, .conditional-widgets,
            .offline-checklist-container, #offline-inspection-modal, #floating-bottom-menu,
            #whatsapp-floating-widget, .top-loading-bar, .screen-only, button:not(.allow-print) {
              display: none !important;
              visibility: hidden !important;
              height: 0 !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            body, html {
              background: #ffffff !important;
              color: #000000 !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .official-print-slip {
              display: block !important;
              visibility: visible !important;
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 auto !important;
              padding: 0 !important;
              background: #ffffff !important;
              color: #000000 !important;
              border: 2px solid #000000 !important;
            }
            @page {
              size: A4 portrait;
              margin: 12mm 15mm 12mm 15mm;
            }
          }
        ` }} />

        {/* 1. SCREEN VIEW: Interactive Summary Card (Hidden when printing) */}
        <div className="no-print screen-only w-full max-w-2xl mx-auto bg-white dark:bg-slate-900/95 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl mb-8">
          {/* Header Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-600 via-sky-600 to-emerald-600 text-white text-center relative">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/30 shadow-inner">
              <CheckCircle2 className="w-9 h-9 text-white" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full text-emerald-200">
              Registration Successful
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">
              {submittedData.trainingName || "Mushroom Commercial Training"}
            </h1>
            <p className="text-sm text-white/95 mt-1 max-w-md mx-auto font-medium">
              Your details have been successfully recorded with Organic Mushroom Farm.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 bg-white/15 border border-white/30 px-4 py-1.5 rounded-full font-mono text-sm sm:text-base font-extrabold shadow-sm">
              <span>Registration ID:</span>
              <span className="text-emerald-300">
                {submittedData.registrationId}
              </span>
            </div>
          </div>

          {/* Registration Summary */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> Training Schedule & Mode
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
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
                <User className="w-4 h-4" /> Candidate Details
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
                    +91 {submittedData.phone}
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
                    Planned Investment
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {submittedData.investment}
                  </span>
                </div>
              </div>
            </div>

            {/* Attached Payment Receipt Record */}
            {submittedData.receiptPreview && (
              <div className="bg-emerald-50/80 dark:bg-emerald-950/40 rounded-2xl p-4 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-emerald-300 dark:border-emerald-700 shrink-0 bg-black shadow-sm">
                  <img
                    src={submittedData.receiptPreview}
                    alt="Uploaded Payment Receipt"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs flex-1">
                  <div className="font-bold text-emerald-950 dark:text-emerald-100 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    Payment Receipt Attached & Dispatched
                  </div>
                  {submittedData.utr && (
                    <div className="text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                      Ref / UTR: {submittedData.utr}
                    </div>
                  )}
                  <div className="text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                    Receipt screenshot is securely attached to your registration and emailed to the training cell.
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-600/25 active:scale-98 text-sm sm:text-base"
              >
                <Send className="w-5 h-5" />
                <span>Send Confirmation Slip on WhatsApp (+91 9203544140)</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => window.print()}
                  className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-black text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save Slip (PDF)</span>
                </button>
                <button
                  onClick={() => setShowSlipPreview((prev) => !prev)}
                  className="py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  {showSlipPreview ? (
                    <>
                      <EyeOff className="w-4 h-4 text-purple-500" />
                      <span>Hide Slip Preview</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 text-purple-500" />
                      <span>Preview Official Slip (B&W)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:+919203544140"
                  className="py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Call Farm Support (+91 9203544140)</span>
                </a>
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setShowSlipPreview(false);
                    setFormData((prev) => ({
                      ...prev,
                      fullName: "",
                      phone: "",
                      email: "",
                      city: "",
                      district: "",
                      pincode: "",
                      fullAddress: "",
                      mushroomInterested: "Button",
                      mushroomInterestedOther: "",
                      investment: "₹1–5 lakh",
                      investmentCustom: "",
                      learningGoals: "",
                      confirmed: false,
                    }));
                    setReceiptFile(null);
                    setReceiptPreview(null);
                    setReceiptUtr("");
                  }}
                  className="py-2.5 px-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Registration</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. OFFICIAL BLACK & WHITE A4 REGISTRATION SLIP */}
        {/* Displayed cleanly on screen when preview is toggled, and ALWAYS rendered cleanly in print / PDF */}
        <div
          id="official-registration-slip"
          className={`${
            showSlipPreview ? "block my-6" : "hidden"
          } print:block official-print-slip w-full max-w-3xl mx-auto bg-white text-black p-6 sm:p-8 border-2 border-black font-sans shadow-xl print:shadow-none print:border-2 print:border-black print:p-6 print:m-0`}
          style={{ color: "#000000", backgroundColor: "#ffffff" }}
        >
          {/* Screen-Only Preview Control Bar */}
          {showSlipPreview && (
            <div className="no-print -mt-6 -mx-6 sm:-mt-8 sm:-mx-8 mb-6 px-4 py-3 bg-neutral-900 text-white flex flex-wrap items-center justify-between gap-3 text-xs font-bold">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Official A4 Registration Slip Preview (Black & White Format)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-all text-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  onClick={() => setShowSlipPreview(false)}
                  className="px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs"
                >
                  Close Preview
                </button>
              </div>
            </div>
          )}

          {/* Letterhead Header Section */}
          <div className="border-b-2 border-black pb-4 text-center">
            <div className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-black">
              ORGANIC MUSHROOM FARM
            </div>
            <div className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wide mt-0.5">
              Commercial Mushroom Cultivation & Agro Training Center
            </div>
            <div className="text-[11px] text-neutral-800 mt-1 leading-snug">
              Village & Post Katangi, Jabalpur Road, Madhya Pradesh - 483105, India
            </div>
            <div className="text-[11px] text-neutral-900 font-semibold mt-0.5">
              Helpline / WhatsApp: +91 9203544140 | Email: support@organicmushroomfarm.com | Web: www.organicmushroomsfarm.com
            </div>
          </div>

          {/* Document Title Banner */}
          <div className="my-3 text-center">
            <span className="inline-block border border-black px-4 py-1 text-xs font-black uppercase tracking-widest bg-neutral-100 text-black">
              Official Training Registration Acknowledgement Slip
            </span>
          </div>

          {/* Official Confirmation Statement (Exact text requested by user) */}
          <div className="border border-black bg-neutral-50 p-2.5 sm:p-3 my-3 text-center">
            <p className="text-xs sm:text-sm font-bold text-black">
              Your details have been successfully recorded with Organic Mushroom Farm.
            </p>
            <p className="text-[11px] text-neutral-700 mt-0.5">
              Please preserve this slip (Print / PDF) as official proof of registration for batch confirmation, syllabus kit, and session access.
            </p>
          </div>

          {/* Registration Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 border border-black divide-x divide-black text-xs my-3 bg-neutral-100 font-medium">
            <div className="p-2">
              <span className="block text-[10px] uppercase font-bold text-neutral-600">
                Registration ID
              </span>
              <span className="font-mono font-black text-sm text-black">
                {submittedData.registrationId}
              </span>
            </div>
            <div className="p-2">
              <span className="block text-[10px] uppercase font-bold text-neutral-600">
                Date & Time
              </span>
              <span className="font-bold text-black">{submittedData.submittedAt}</span>
            </div>
            <div className="p-2 col-span-2 sm:col-span-1 border-t sm:border-t-0 border-black">
              <span className="block text-[10px] uppercase font-bold text-neutral-600">
                Registration Status
              </span>
              <span className="font-black text-black">CONFIRMED (PROVISIONAL)</span>
            </div>
          </div>

          {/* Section 1: Candidate Personal Details */}
          <div className="mt-4">
            <div className="bg-black text-white px-2.5 py-1 text-[11px] font-black uppercase tracking-wider">
              1. Candidate Particulars
            </div>
            <div className="border border-t-0 border-black divide-y divide-black text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black">
                <div className="p-2">
                  <span className="font-bold text-neutral-700">Full Name: </span>
                  <span className="font-black text-black">{submittedData.fullName}</span>
                </div>
                <div className="p-2">
                  <span className="font-bold text-neutral-700">WhatsApp / Mobile: </span>
                  <span className="font-black text-black">+91 {submittedData.phone}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black">
                <div className="p-2">
                  <span className="font-bold text-neutral-700">Email Address: </span>
                  <span className="font-semibold text-black">{submittedData.email}</span>
                </div>
                <div className="p-2">
                  <span className="font-bold text-neutral-700">City & State: </span>
                  <span className="font-semibold text-black">
                    {submittedData.city},{" "}
                    {submittedData.district ? `${submittedData.district}, ` : ""}
                    {submittedData.state} - {submittedData.pincode}
                  </span>
                </div>
              </div>
              {submittedData.fullAddress && (
                <div className="p-2">
                  <span className="font-bold text-neutral-700">Full Address: </span>
                  <span className="text-black">{submittedData.fullAddress}</span>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Training Program Details */}
          <div className="mt-4">
            <div className="bg-black text-white px-2.5 py-1 text-[11px] font-black uppercase tracking-wider">
              2. Training Program & Schedule
            </div>
            <div className="border border-t-0 border-black divide-y divide-black text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black">
                <div className="p-2">
                  <span className="font-bold text-neutral-700 block text-[10px]">
                    Selected Program
                  </span>
                  <span className="font-black text-black text-sm">
                    {submittedData.trainingName}
                  </span>
                </div>
                <div className="p-2">
                  <span className="font-bold text-neutral-700 block text-[10px]">
                    Training Mode
                  </span>
                  <span className="font-black text-black text-sm">
                    {submittedData.trainingMode}
                  </span>
                </div>
                <div className="p-2">
                  <span className="font-bold text-neutral-700 block text-[10px]">
                    Session Timing
                  </span>
                  <span className="font-black text-black">
                    {submittedData.trainingTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Project & Farming Plan */}
          <div className="mt-4">
            <div className="bg-black text-white px-2.5 py-1 text-[11px] font-black uppercase tracking-wider">
              3. Cultivation Background & Project Plan
            </div>
            <div className="border border-t-0 border-black divide-y divide-black text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black">
                <div className="p-2">
                  <span className="font-bold text-neutral-700">Mushroom Variety: </span>
                  <span className="font-black text-black">
                    {submittedData.mushroomInterested}
                  </span>
                </div>
                <div className="p-2">
                  <span className="font-bold text-neutral-700">Planned Investment: </span>
                  <span className="font-black text-black">
                    {submittedData.investment}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black">
                <div className="p-2">
                  <span className="font-bold text-neutral-700">Currently Farming: </span>
                  <span className="text-black">{submittedData.currentlyFarming}</span>
                </div>
                <div className="p-2">
                  <span className="font-bold text-neutral-700">Farming Experience: </span>
                  <span className="text-black">{submittedData.experience}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black">
                <div className="p-2">
                  <span className="font-bold text-neutral-700">Farm Setup Space: </span>
                  <span className="text-black">{submittedData.hasSetup}</span>
                </div>
                <div className="p-2">
                  <span className="font-bold text-neutral-700">Primary Goal: </span>
                  <span className="text-black">{submittedData.reason}</span>
                </div>
              </div>
              {submittedData.learningGoals && (
                <div className="p-2">
                  <span className="font-bold text-neutral-700">
                    Specific Learning Goals:{" "}
                  </span>
                  <span className="text-black">{submittedData.learningGoals}</span>
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Payment Receipt Status */}
          <div className="mt-4">
            <div className="bg-black text-white px-2.5 py-1 text-[11px] font-black uppercase tracking-wider">
              4. Payment Receipt Status
            </div>
            <div className="border border-t-0 border-black p-2 text-xs bg-neutral-50 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black">
              <div>
                <span className="font-bold text-neutral-700">Receipt Attachment: </span>
                <span className="font-black text-black">
                  {submittedData.receiptPreview ? "Screenshot Uploaded & Dispatched" : "Not Provided"}
                </span>
              </div>
              <div className="sm:pl-2 pt-1 sm:pt-0">
                <span className="font-bold text-neutral-700">Ref / UTR Number: </span>
                <span className="font-mono font-bold text-black">
                  {submittedData.utr || "Verified & Logged"}
                </span>
              </div>
            </div>
          </div>

          {/* Section 5: Instructions for Registered Candidate */}
          <div className="mt-4 border border-black p-3 bg-neutral-50 text-[11px] leading-relaxed">
            <div className="font-black uppercase text-xs mb-1 text-black">
              5. Important Instructions for Registered Candidate:
            </div>
            <ul className="list-decimal pl-4 space-y-0.5 text-neutral-800">
              <li>
                <strong>Batch Coordination:</strong> Our senior training coordinator will verify your registration and communicate batch credentials / venue reporting details directly on your WhatsApp number (+91 9203544140).
              </li>
              <li>
                <strong>Training Materials & Kit:</strong> Complete Standard Operating Procedures (SOPs), compost calculation formula sheet, and raw material vendor directory will be provided.
              </li>
              <li>
                <strong>Helpline Support:</strong> For any assistance regarding your training registration, please contact our support team at <strong>+91 9203544140</strong> quoting your Registration ID: <strong>{submittedData.registrationId}</strong>.
              </li>
            </ul>
          </div>

          {/* Verification & Stamp Footer */}
          <div className="mt-6 pt-4 border-t-2 border-black flex flex-wrap items-end justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="text-[10px] text-neutral-600 uppercase font-semibold">
                Official Digital Acknowledgment
              </div>
              <div className="font-bold text-black">
                System Generated Training Registration Record
              </div>
              <div className="text-[10px] text-neutral-600">
                Organic Mushroom Farm • Katangi Road, Jabalpur (M.P.) - 483105
              </div>
              <div className="text-[10px] text-neutral-600">
                Helpline: +91 9203544140 | Support: support@organicmushroomfarm.com
              </div>
            </div>

            <div className="border-2 border-black p-2.5 text-center min-w-[170px] bg-neutral-50">
              <div className="text-[9px] font-black uppercase tracking-wider text-neutral-700">
                ORGANIC MUSHROOM FARM
              </div>
              <div className="text-xs font-black text-black my-0.5">
                ★ REGISTERED & VERIFIED ★
              </div>
              <div className="text-[9px] font-bold text-neutral-600">
                Training Cell • Jabalpur
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
          Mushroom Training{" "}
          <span className="bg-gradient-to-r from-purple-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
            Registration
          </span>
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Please enter your accurate details below to confirm your training registration. You will receive practical guidance on button mushroom cultivation, complete SOPs, compost preparation and calculations, raw material sourcing, and live Q&A support.
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
              Selected Program: {formData.trainingName} Mushroom Training
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 flex items-center gap-3 mt-0.5">
              <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                <Clock className="w-3.5 h-3.5" /> Fixed Time: 10:00 AM – 4:00 PM IST
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Video className="w-3.5 h-3.5 text-sky-500" /> Mode: {formData.trainingMode}
              </span>
            </p>
          </div>
        </div>
        <div className="text-right ml-auto">
          <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 block">
            Duration
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
            {formData.trainingName} Program
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

        {previousSubmissionWarning && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-200 text-xs flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <div className="leading-relaxed font-medium">
              {previousSubmissionWarning}
            </div>
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
                  placeholder="e.g. 9203544140"
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

            {/* If Other selected, allow user to fill details */}
            {formData.mushroomInterested === "Other" && (
              <div className="mt-3 p-3 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 animate-in fade-in">
                <label className="block text-xs font-bold text-sky-900 dark:text-sky-300 mb-1.5">
                  Specify Mushroom Variety / Details <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="mushroomInterestedOther"
                  value={formData.mushroomInterestedOther}
                  onChange={handleChange}
                  placeholder="e.g. Shiitake, Cordyceps militaris, Paddy Straw, Ganoderma / Reishi"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-sky-300 dark:border-sky-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-medium"
                />
              </div>
            )}
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
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {["₹50,000–₹1 lakh", "₹1–5 lakh", "₹5–10 lakh", "₹10 lakh+", "Other"].map(
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

            {/* If Other selected, allow user to fill detail number in ₹ */}
            {formData.investment === "Other" && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 animate-in fade-in">
                <label className="block text-xs font-bold text-emerald-900 dark:text-emerald-300 mb-1.5">
                  Enter Planned Investment Amount (in ₹ numbers) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="investmentCustom"
                    value={formData.investmentCustom}
                    onChange={handleChange}
                    placeholder="e.g. 250000"
                    min="1"
                    className="w-full pl-8 pr-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-bold"
                  />
                </div>
              </div>
            )}
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

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 space-y-4">
            {/* Training Program Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Training Program (Select Duration) <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "1 Day", label: "1 Day", sub: "One Day Training" },
                  { id: "1 Week", label: "1 Week", sub: "One Week Training" },
                  { id: "2 Week", label: "2 Week", sub: "Two Week Training" },
                  { id: "1 Month", label: "1 Month", sub: "One Month Training" },
                ].map((prog) => (
                  <button
                    type="button"
                    key={prog.id}
                    onClick={() => handleSelect("trainingName", prog.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      formData.trainingName === prog.id
                        ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/25 scale-[1.02]"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-purple-400"
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-black">{prog.label}</span>
                    <span
                      className={`block text-[10px] mt-0.5 font-medium ${
                        formData.trainingName === prog.id
                          ? "text-purple-200"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {prog.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
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
                  Training Time (Fixed Timing)
                </label>
                <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-200/60 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white font-bold">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>10:00 AM – 4:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* SECTION 5: PAYMENT RECEIPT UPLOAD (NO QR, NO UPI ID, NO NUMBER) */}
        <div id="payment-receipt-upload-section" className="space-y-4 pt-2">
          <div className="border-b border-slate-200/80 dark:border-white/10 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
                5
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                <span>🧾</span> Payment Receipt Upload
              </h2>
            </div>
            <span className="text-[10px] sm:text-xs font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              Receipt Required
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Please upload your payment receipt screenshot or transaction slip below (JPG, PNG, or WEBP). Your uploaded receipt will be attached to your registration application.
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleReceiptFileChange(e.target.files?.[0])}
            className="hidden"
          />

          {/* Upload Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-4">
            {!receiptPreview ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  handleReceiptFileChange(e.dataTransfer.files?.[0]);
                }}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                  isDragging
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 scale-[1.01]"
                    : "border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:bg-slate-100/60 dark:hover:bg-slate-900/60"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Click to upload payment receipt screenshot
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  or drag and drop screenshot here (PNG, JPG, WEBP - Max 10MB)
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/80 px-4 py-2 rounded-xl border border-emerald-300 dark:border-emerald-800 shadow-sm">
                  <UploadCloud className="w-4 h-4" />
                  <span>Choose Receipt File</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Preview Card */}
                <div className="flex items-center gap-4 p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-900/50 shadow-sm">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-emerald-300 dark:border-emerald-700 shrink-0 bg-black">
                    <img
                      src={receiptPreview}
                      alt="Uploaded Receipt Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white truncate">
                      <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{receiptFile?.name || "Payment Receipt Screenshot"}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {receiptFile?.size
                        ? `${(receiptFile.size / 1024).toFixed(1)} KB`
                        : "Ready to attach"}
                      {" • "}
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        Ready to attach
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      Change
                    </button>
                    <button
                      type="button"
                      onClick={handleRemoveReceipt}
                      title="Remove receipt"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Optional UTR / Reference Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    UPI Ref / UTR / Transaction ID (Optional)
                  </label>
                  <input
                    type="text"
                    value={receiptUtr}
                    onChange={(e) => setReceiptUtr(e.target.value)}
                    placeholder="e.g. 423987123456 or Transaction Reference Number"
                    className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    If visible on your receipt, you can enter your 12-digit UTR or reference ID.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 6: FINAL CONFIRMATION */}
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
                21. I confirm that the information provided by me is correct and the attached payment receipt is authentic. ☑️
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
                Submitting Registration...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Submit Training Registration</span>
                <ChevronRight className="w-5 h-5" />
              </span>
            )}
          </button>

          <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
            Submitting this form connects you directly to our lead trainer. Need
            instant help? Call{" "}
            <a
              href="tel:+919203544140"
              className="text-purple-600 dark:text-purple-400 font-bold underline"
            >
              +91 9203544140
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationFormClient;
