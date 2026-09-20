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
  Zap,
  Copy,
  Check,
  QrCode,
  ExternalLink,
  Smartphone,
  Laptop,
  Info,
  X,
  BookOpen,
  Award,
  ShieldAlert,
  Lock,
  Home,
  GraduationCap,
} from "lucide-react";
import QRCode from "qrcode";
import { getDeviceFingerprint } from "@/lib/deviceFingerprint";

const OFFICIAL_UPI_ID = "tanishsoni787941-8@okaxis";
const OFFICIAL_PAYEE_NAME = "Organic Mushroom Farm";
const ADVANCE_BOOKING_FEE = 500;
const UPI_TRANSACTION_NOTE = "Mushroom Training Seat Booking";
const UNIVERSAL_UPI_URI = `upi://pay?pa=${OFFICIAL_UPI_ID}&pn=${encodeURIComponent(
  OFFICIAL_PAYEE_NAME
)}&am=${ADVANCE_BOOKING_FEE}&cu=INR&tn=${encodeURIComponent(UPI_TRANSACTION_NOTE)}`;
const GPAY_UPI_URI = `gpay://upi/pay?pa=${OFFICIAL_UPI_ID}&pn=${encodeURIComponent(
  OFFICIAL_PAYEE_NAME
)}&am=${ADVANCE_BOOKING_FEE}&cu=INR&tn=${encodeURIComponent(UPI_TRANSACTION_NOTE)}`;
const PHONEPE_UPI_URI = `phonepe://pay?pa=${OFFICIAL_UPI_ID}&pn=${encodeURIComponent(
  OFFICIAL_PAYEE_NAME
)}&am=${ADVANCE_BOOKING_FEE}&cu=INR&tn=${encodeURIComponent(UPI_TRANSACTION_NOTE)}`;
const PAYTM_UPI_URI = `paytmmp://pay?pa=${OFFICIAL_UPI_ID}&pn=${encodeURIComponent(
  OFFICIAL_PAYEE_NAME
)}&am=${ADVANCE_BOOKING_FEE}&cu=INR&tn=${encodeURIComponent(UPI_TRANSACTION_NOTE)}`;

// Client-side automatic image compressor for ultra-fast upload on 2G/3G/slow networks
const compressImage = (
  file: File,
  maxDimension = 960,
  quality = 0.70
): Promise<{ base64: string; originalSize: number; compressedSize: number }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read image file"));
    reader.onload = (e) => {
      const img = new (window as any).Image();
      img.onerror = () => reject(new Error("Failed to parse image"));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Scale proportionally if larger than maxDimension (1200px retains full readability of text and UTR)
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve({
            base64: e.target?.result as string,
            originalSize: file.size,
            compressedSize: file.size,
          });
          return;
        }

        // Solid white background prevents black backgrounds on transparent PNGs
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to optimized JPEG (~80-150KB typically)
        const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
        const approxSize = Math.round((compressedBase64.length * 3) / 4);

        resolve({
          base64: compressedBase64,
          originalSize: file.size,
          compressedSize: approxSize,
        });
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};

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
  const [showKnowMoreModal, setShowKnowMoreModal] = useState(false);

  const [previousSubmissionWarning, setPreviousSubmissionWarning] = useState<string>("");

  // Device registration limit states (Strict max 3 per physical mobile/device)
  const [deviceId, setDeviceId] = useState<string>("");
  const [deviceQuota, setDeviceQuota] = useState<{
    count: number;
    maxAllowed: number;
    remaining: number;
    isBlocked: boolean;
    reason?: string;
  } | null>(null);
  const [checkingDeviceQuota, setCheckingDeviceQuota] = useState<boolean>(true);

  // UPI Payment & QR states
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [copiedUpi, setCopiedUpi] = useState<boolean>(false);
  const [showQrOnMobile, setShowQrOnMobile] = useState<boolean>(false);

  // Payment receipt states
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  const [receiptUtr, setReceiptUtr] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [compressingReceipt, setCompressingReceipt] = useState<boolean>(false);
  const [compressionStats, setCompressionStats] = useState<{
    originalKB: number;
    compressedKB: number;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize hardware device fingerprint and check server registration limit
  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const dId = await getDeviceFingerprint();
        if (isMounted) setDeviceId(dId);

        const res = await fetch(
          `/api/mushroom-training-registration/device-limit?deviceId=${encodeURIComponent(dId)}`
        );
        const json = await res.json();
        if (isMounted && json.success) {
          setDeviceQuota({
            count: json.count || 0,
            maxAllowed: json.maxAllowed || 3,
            remaining: json.remaining ?? 3,
            isBlocked: !!json.isBlocked,
            reason: json.reason,
          });
        }
      } catch (err) {
        console.error("Device fingerprint verification error:", err);
      } finally {
        if (isMounted) setCheckingDeviceQuota(false);
      }
    })();

    QRCode.toDataURL(UNIVERSAL_UPI_URI, {
      width: 320,
      margin: 1,
      color: {
        dark: "#0f172a",
        light: "#ffffff",
      },
      errorCorrectionLevel: "M",
    })
      .then((url) => {
        if (isMounted) setQrCodeUrl(url);
      })
      .catch((err) => {
        console.error("QR generation error:", err);
        if (isMounted) {
          setQrCodeUrl(
            `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
              UNIVERSAL_UPI_URI
            )}`
          );
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCopyUpi = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(OFFICIAL_UPI_ID);
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2200);
    }
  };

  const handleReceiptFileChange = async (file: File | null | undefined) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorMsg("Please upload a valid image file (JPG, PNG, or WEBP).");
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      setErrorMsg("File size exceeds 25MB. Please upload a standard mobile screenshot.");
      return;
    }

    setReceiptFile(file);
    setErrorMsg("");
    setCompressingReceipt(true);

    try {
      // Automatic client-side compression (resizes large camera/screenshots to ~50KB without losing text clarity)
      const result = await compressImage(file, 960, 0.70);
      setReceiptPreview(result.base64);
      setCompressionStats({
        originalKB: Math.max(1, Math.round(result.originalSize / 1024)),
        compressedKB: Math.max(1, Math.round(result.compressedSize / 1024)),
      });
    } catch {
      // Fallback to standard reader
      const reader = new FileReader();
      reader.onload = (event) => {
        setReceiptPreview(event.target?.result as string);
        setCompressionStats(null);
      };
      reader.onerror = () => {
        setErrorMsg("Failed to read image file. Please try selecting the image again.");
      };
      reader.readAsDataURL(file);
    } finally {
      setCompressingReceipt(false);
    }
  };

  const handleRemoveReceipt = () => {
    setReceiptFile(null);
    setReceiptPreview(null);
    setCompressionStats(null);
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

    if (deviceQuota?.isBlocked || (deviceQuota && deviceQuota.count >= 3)) {
      setErrorMsg(
        deviceQuota.reason ||
          "Security Alert: Is mobile device se registration ki adhiktam seema (3 registrations) poori ho chuki hai. Security niyam anusar aur registration allow nahi hai. Kripya helpline +91 9203544140 par sampark karein."
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

    const currentDeviceId =
      deviceId ||
      (typeof window !== "undefined"
        ? localStorage.getItem("__omf_device_id") || ""
        : "");

    const submissionPayload = {
      ...formData,
      deviceId: currentDeviceId,
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
        if (json.isDeviceBlocked || json.deviceLimitReached) {
          setDeviceQuota({
            count: 3,
            maxAllowed: 3,
            remaining: 0,
            isBlocked: true,
            reason: json.error,
          });
        }
        throw new Error(
          json.error || "Failed to submit registration. Please try again."
        );
      }

      if (json.deviceQuota) {
        setDeviceQuota({
          count: json.deviceQuota.used,
          maxAllowed: json.deviceQuota.max,
          remaining: json.deviceQuota.remaining,
          isBlocked: json.deviceQuota.isBlocked || json.deviceQuota.remaining <= 0,
        });
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
      <div className="min-h-screen py-8 px-3 sm:px-6 print:min-h-0 print:py-0 print:px-0 print:m-0 relative z-10">
        {/* Animated Spore & Fluid Liquid Neon Background Auras (Screen Only, Hidden on Print) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 no-print">
          <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-purple-500/15 dark:bg-purple-500/20 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -right-16 w-96 h-96 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 blur-3xl animate-pulse delay-700" />
          <div className="absolute -bottom-16 left-1/4 w-80 h-80 rounded-full bg-sky-500/15 dark:bg-sky-500/20 blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Inline style strictly enforcing EXACTLY 1 SINGLE PAGE A4 print flow */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media print {
            @page {
              size: A4 portrait;
              margin: 6mm 8mm 6mm 8mm;
            }
            *, *:before, *:after {
              box-sizing: border-box !important;
            }
            html, body {
              width: 100% !important;
              height: 100% !important;
              max-height: 100vh !important;
              margin: 0 !important;
              padding: 0 !important;
              background: #ffffff !important;
              color: #000000 !important;
              font-size: 10px !important;
              line-height: 1.25 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              overflow: hidden !important;
            }
            nav, header, footer, canvas, .no-print, #navbar, .conditional-widgets,
            .offline-checklist-container, #offline-inspection-modal, #floating-bottom-menu,
            #whatsapp-floating-widget, .top-loading-bar, .screen-only, button:not(.allow-print) {
              display: none !important;
              visibility: hidden !important;
              height: 0 !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .official-print-slip {
              display: block !important;
              visibility: visible !important;
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
              padding: 6px 10px !important;
              background: #ffffff !important;
              color: #000000 !important;
              border: 1.5px solid #000000 !important;
              box-sizing: border-box !important;
              page-break-inside: avoid !important;
              break-inside: avoid !important;
              page-break-before: avoid !important;
              page-break-after: avoid !important;
            }
            .official-print-slip * {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
          }
        ` }} />

        {/* 1. SCREEN VIEW: Interactive Summary Card (Hidden when printing) */}
        <div className="no-print screen-only w-full max-w-2xl mx-auto bg-white/90 dark:bg-slate-900/80 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl mb-8">
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
                  <span>Print / Save 1-Page PDF</span>
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
                      <span>Preview Official Slip (1 Page)</span>
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
                    setCompressionStats(null);
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

        {/* 2. OFFICIAL BLACK & WHITE 1-PAGE A4 REGISTRATION SLIP */}
        {/* Strictly formatted to fit 100% on a single A4 page without breaking or cutting */}
        <div
          id="official-registration-slip"
          className={`${
            showSlipPreview ? "block my-4" : "hidden"
          } print:block official-print-slip w-full max-w-3xl mx-auto bg-white text-black p-3 sm:p-5 border-2 border-black font-sans shadow-xl print:shadow-none print:border-[1.5px] print:border-black print:p-2.5 print:m-0`}
          style={{ color: "#000000", backgroundColor: "#ffffff" }}
        >
          {/* Screen-Only Preview Control Bar */}
          {showSlipPreview && (
            <div className="no-print -mt-3 -mx-3 sm:-mt-5 sm:-mx-5 mb-3 px-3 py-2 bg-neutral-900 text-white flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
              <div className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Official 1-Page A4 Registration Slip Preview</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1 transition-all text-xs font-bold"
                >
                  <Printer className="w-3 h-3" />
                  <span>Print / Save PDF (1 Page)</span>
                </button>
                <button
                  onClick={() => setShowSlipPreview(false)}
                  className="px-2 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Letterhead Header Section - Compact */}
          <div className="border-b-2 border-black pb-2 flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-wide uppercase text-black leading-tight">
                ORGANIC MUSHROOM FARM
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-neutral-800 uppercase tracking-wide">
                Commercial Mushroom Cultivation & Agro Training Center
              </div>
              <div className="text-[9px] text-neutral-600 mt-0.5 leading-tight">
                Village & Post Katangi, Jabalpur Road, Madhya Pradesh - 483105 | Helpline: +91 9203544140
              </div>
            </div>
            <div className="text-right border border-black px-2.5 py-1 bg-neutral-50 shrink-0">
              <span className="block text-[8.5px] uppercase font-bold text-neutral-600">
                Registration ID
              </span>
              <span className="font-mono font-black text-xs sm:text-sm text-black block tracking-wider">
                {submittedData.registrationId}
              </span>
              <span className="text-[8px] font-extrabold uppercase text-black bg-neutral-200 px-1 py-0.2 rounded inline-block mt-0.5">
                PROVISIONAL CONFIRMED
              </span>
            </div>
          </div>

          {/* Document Title Banner & Recorded Notice */}
          <div className="my-1.5 flex items-center justify-between border border-black bg-neutral-100 px-2.5 py-1 text-[9.5px]">
            <span className="font-black uppercase tracking-wider text-black">
              Official Training Registration Acknowledgement Slip
            </span>
            <span className="font-medium text-neutral-700">
              Registered Date: <strong className="text-black">{submittedData.submittedAt}</strong>
            </span>
          </div>

          {/* Confirmation note */}
          <div className="border border-black bg-neutral-50 px-2 py-1 text-center text-[9.5px]">
            <span className="font-bold text-black">
              Your details have been successfully recorded with Organic Mushroom Farm.
            </span>{" "}
            <span className="text-neutral-600">
              Preserve this slip as official proof for batch seat reservation and syllabus kit dispatch.
            </span>
          </div>

          {/* Section 1: Candidate Particulars */}
          <div className="mt-2">
            <div className="bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider">
              1. Candidate Particulars & Location
            </div>
            <div className="border border-t-0 border-black text-[9.5px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black border-b border-black">
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">Full Name: </span>
                  <span className="font-black text-black">{submittedData.fullName}</span>
                </div>
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">WhatsApp / Mobile: </span>
                  <span className="font-black text-black">+91 {submittedData.phone}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black">
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">Email Address: </span>
                  <span className="font-medium text-black">{submittedData.email}</span>
                </div>
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">City, State & Pin: </span>
                  <span className="font-medium text-black">
                    {submittedData.city},{" "}
                    {submittedData.district ? `${submittedData.district}, ` : ""}
                    {submittedData.state} - {submittedData.pincode}
                  </span>
                </div>
              </div>
              {submittedData.fullAddress && (
                <div className="p-1.5 border-t border-black">
                  <span className="font-bold text-neutral-600">Full Address: </span>
                  <span className="text-black">{submittedData.fullAddress}</span>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Training Program Details */}
          <div className="mt-2">
            <div className="bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider">
              2. Training Program & Seat Confirmation
            </div>
            <div className="border border-t-0 border-black text-[9.5px]">
              <div className="grid grid-cols-3 divide-x divide-black border-b border-black">
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600 block text-[8px] uppercase">
                    Selected Program
                  </span>
                  <span className="font-black text-black text-[10px]">
                    {submittedData.trainingName}
                  </span>
                </div>
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600 block text-[8px] uppercase">
                    Training Mode
                  </span>
                  <span className="font-black text-black text-[10px]">
                    {submittedData.trainingMode}
                  </span>
                </div>
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600 block text-[8px] uppercase">
                    Session Timing
                  </span>
                  <span className="font-black text-black text-[10px]">
                    {submittedData.trainingTime}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-black bg-neutral-50">
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">Advance Seat Booking: </span>
                  <span className="font-black text-black">₹500 (Advance Paid / Attached)</span>
                </div>
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">Payment Receipt: </span>
                  <span className="font-semibold text-black">
                    {submittedData.receiptPreview ? "Screenshot Uploaded & Dispatched" : "Logged"}
                    {submittedData.utr ? ` (UTR: ${submittedData.utr})` : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Farming Background & Project Plan */}
          <div className="mt-2">
            <div className="bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider">
              3. Cultivation Plan & Candidate Background
            </div>
            <div className="border border-t-0 border-black text-[9.5px]">
              <div className="grid grid-cols-2 divide-x divide-black border-b border-black">
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">Mushroom Variety: </span>
                  <span className="font-black text-black">{submittedData.mushroomInterested}</span>
                </div>
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">Planned Investment: </span>
                  <span className="font-black text-black">{submittedData.investment}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-black">
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">Currently Farming: </span>
                  <span className="text-black">{submittedData.currentlyFarming}</span>
                </div>
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">Experience: </span>
                  <span className="text-black">{submittedData.experience}</span>
                </div>
                <div className="p-1.5">
                  <span className="font-bold text-neutral-600">Farm Space: </span>
                  <span className="text-black">{submittedData.hasSetup}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Instructions for Registered Candidate */}
          <div className="mt-2 border border-black p-2 bg-neutral-50 text-[9px] leading-snug">
            <div className="font-black uppercase text-[9.5px] mb-0.5 text-black">
              4. Important Instructions for Candidate:
            </div>
            <ul className="list-decimal pl-3.5 space-y-0.5 text-neutral-800">
              <li>
                <strong>Batch Credentials:</strong> Senior training coordinator will verify registration and send batch link / reporting details on your WhatsApp (+91 9203544140).
              </li>
              <li>
                <strong>Training Kit & Materials:</strong> Complete mushroom SOPs, compost formula calculation sheet, and spawn vendor directory will be provided.
              </li>
              <li>
                <strong>Helpline:</strong> Call or WhatsApp <strong>+91 9203544140</strong> quoting your Registration ID: <strong>{submittedData.registrationId}</strong>.
              </li>
            </ul>
          </div>

          {/* Verification & Stamp Footer */}
          <div className="mt-2 pt-1.5 border-t-2 border-black flex items-center justify-between gap-3 text-[9px]">
            <div className="space-y-0.5">
              <div className="text-[8px] text-neutral-600 uppercase font-semibold">
                Official Digital Acknowledgment
              </div>
              <div className="font-bold text-black text-[9.5px]">
                System Generated Training Registration Record • Organic Mushroom Farm
              </div>
              <div className="text-[8px] text-neutral-600">
                Katangi Road, Jabalpur (M.P.) - 483105 | Helpline: +91 9203544140 | support@organicmushroomfarm.com
              </div>
            </div>

            <div className="border border-black px-2 py-1 text-center min-w-[150px] bg-neutral-50 shrink-0">
              <div className="text-[7.5px] font-black uppercase tracking-wider text-neutral-700">
                ORGANIC MUSHROOM FARM
              </div>
              <div className="text-[10px] font-black text-black my-0.2">
                ★ REGISTERED & VERIFIED ★
              </div>
              <div className="text-[7.5px] font-bold text-neutral-600">
                Training Cell • Jabalpur
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-4 sm:py-8 px-3 sm:px-6 max-w-4xl mx-auto relative z-10">
      {/* Animated Floating Glow Auras Behind Registration Page */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 -left-10 w-96 h-96 rounded-full bg-purple-500/12 dark:bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-10 w-[420px] h-[420px] rounded-full bg-sky-500/10 dark:bg-sky-500/15 blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-emerald-500/12 dark:bg-emerald-500/18 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* SEO & UX Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="mb-4 sm:mb-6 flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/60 dark:border-white/10 w-fit"
      >
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />
        <Link
          href="/training"
          className="flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Mushroom Training</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />
        <span className="text-purple-600 dark:text-purple-300 font-bold flex items-center gap-1">
          <FileText className="w-3.5 h-3.5" />
          <span>Registration Form</span>
        </span>
      </nav>

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
      <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-500/15 via-sky-400/15 to-emerald-400/15 border border-purple-500/20 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
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
        className="bg-white/85 dark:bg-slate-900/75 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl p-5 sm:p-8 space-y-8"
      >
        {/* Device Limit Security Alert (Strict 3 per physical mobile) */}
        {deviceQuota?.isBlocked ? (
          <div className="p-4 sm:p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border-2 border-red-500/50 text-red-800 dark:text-red-200 text-xs sm:text-sm flex items-start gap-3 shadow-md animate-in fade-in">
            <ShieldAlert className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="font-black text-red-900 dark:text-red-100 text-sm sm:text-base flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-red-600 inline" />
                  Device Security Limit Reached (3/3 Registrations Used)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-black text-[11px]">
                  Registration Blocked
                </span>
              </div>
              <p className="leading-relaxed">
                Is mobile device se maximum 3 registrations pehle hi complete ho chuki hain. Security niyam anusar is mobile se ab aur registration submit nahi kiya ja sakta (Browser data ya cache clear karne ke baad bhi yeh niyam 100% active rehta hai).
              </p>
              <div className="pt-1 text-[11px] text-red-700 dark:text-red-300 font-semibold flex items-center gap-2 flex-wrap">
                <span>Kisi bhi sahayata ya special approval ke liye helpline par call karein:</span>
                <a href="tel:+919203544140" className="underline font-bold text-red-900 dark:text-white">
                  +91 9203544140
                </a>
              </div>
            </div>
          </div>
        ) : deviceQuota && deviceQuota.count > 0 ? (
          <div className="p-3 sm:p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-200 text-xs flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="font-semibold">
                Device Security Status: <strong>{deviceQuota.count}/3</strong> Registrations Used on this Mobile
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-xl bg-emerald-600/15 text-emerald-700 dark:text-emerald-300 font-extrabold text-[11px] shrink-0">
              {deviceQuota.remaining} registration remaining
            </span>
          </div>
        ) : null}

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



        {/* SECTION 5: ADVANCE BOOKING FEE & PAYMENT RECEIPT */}
        <div id="payment-receipt-upload-section" className="space-y-3 pt-2">
          <div className="border-b border-slate-200/80 dark:border-white/10 pb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-bold text-[11px]">
                5
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                <span className="text-sm">💳</span> Seat Booking Advance & Payment Receipt
              </h2>
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              ₹500 Advance
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            To reserve your training seat and syllabus kit, an advance booking fee of <strong className="text-slate-700 dark:text-slate-200">₹500</strong> is required. Pay via 1-tap on mobile or scan QR on desktop, then upload the receipt screenshot below.
          </p>

          {/* PAYMENT OPTIONS CARD */}
          <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/20 dark:from-slate-950 dark:via-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800/60 shadow-sm space-y-3">
            {/* Payee Info Banner */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-2 sm:p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
              <div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Official Payee
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {OFFICIAL_PAYEE_NAME}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Fixed Advance Fee
                </div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  ₹500 Only
                </div>
              </div>
            </div>

            {/* MOBILE VIEW: 1-Tap Direct UPI Payment */}
            <div className="block sm:hidden space-y-2.5">
              <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mobile 1-Tap Instant Payment:</span>
              </div>

              {/* Universal UPI App Opener */}
              <a
                href={UNIVERSAL_UPI_URI}
                className="w-full py-2.5 px-3.5 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 active:scale-98 transition-all"
              >
                <span>Pay ₹500 via Any UPI App</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>

              {/* Direct Specific App Deep Links */}
              <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                <a
                  href={GPAY_UPI_URI}
                  className="py-1.5 px-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200 text-center text-xs flex flex-col items-center justify-center shadow-xs active:scale-95 transition-all"
                >
                  <span className="font-bold text-[11px] text-emerald-600">GPay</span>
                  <span className="text-[8px] text-slate-400">Google Pay</span>
                </a>
                <a
                  href={PHONEPE_UPI_URI}
                  className="py-1.5 px-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200 text-center text-xs flex flex-col items-center justify-center shadow-xs active:scale-95 transition-all"
                >
                  <span className="font-bold text-[11px] text-purple-600">PhonePe</span>
                  <span className="text-[8px] text-slate-400">PhonePe App</span>
                </a>
                <a
                  href={PAYTM_UPI_URI}
                  className="py-1.5 px-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200 text-center text-xs flex flex-col items-center justify-center shadow-xs active:scale-95 transition-all"
                >
                  <span className="font-bold text-[11px] text-sky-600">Paytm</span>
                  <span className="text-[8px] text-slate-400">Paytm App</span>
                </a>
              </div>

              {/* Toggle QR Code on mobile if paying from another phone */}
              <button
                type="button"
                onClick={() => setShowQrOnMobile(!showQrOnMobile)}
                className="w-full py-1.5 px-2.5 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <QrCode className="w-3 h-3" />
                <span>{showQrOnMobile ? "Hide QR Code" : "Pay from another phone? Show QR Code"}</span>
              </button>

              {showQrOnMobile && qrCodeUrl && (
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-800 text-center space-y-1.5 animate-fadeIn">
                  <div className="w-36 h-36 mx-auto bg-white p-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center justify-center">
                    <img
                      src={qrCodeUrl}
                      alt="₹500 UPI QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Scan using any UPI app on another phone to pay ₹500
                  </div>
                </div>
              )}
            </div>

            {/* DESKTOP / TABLET VIEW: QR Code + 1-Tap Links + Copy UPI ID */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-3 items-center">
              {/* Left Column: QR Code */}
              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-center space-y-1.5 shadow-xs">
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                  <Laptop className="w-3 h-3 text-emerald-600" />
                  <span>Scan via Phone to Pay ₹500</span>
                </div>
                <div className="w-36 h-36 mx-auto bg-white p-1.5 rounded-lg border border-slate-200 shadow-inner flex items-center justify-center">
                  {qrCodeUrl ? (
                    <img
                      src={qrCodeUrl}
                      alt="₹500 UPI QR Code"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400">
                      Loading QR...
                    </div>
                  )}
                </div>
                <p className="text-[9px] text-slate-400 dark:text-slate-500">
                  Scan via Google Pay, PhonePe, Paytm, or BHIM
                </p>
              </div>

              {/* Right Column: Copy UPI & Direct Links */}
              <div className="space-y-2.5">
                <div>
                  <div className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    Official Payment Receiver:
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg gap-2">
                    <div className="truncate">
                      <span className="font-bold text-xs text-slate-900 dark:text-white block truncate">
                        {OFFICIAL_PAYEE_NAME}
                      </span>
                      <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                        <Check className="w-2.5 h-2.5 text-emerald-500" /> Bank Verified Training Account
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyUpi}
                      title="Copy UPI ID to clipboard"
                      className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold flex items-center gap-1 transition-all shrink-0 shadow-xs"
                    >
                      {copiedUpi ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy UPI ID</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                    Direct UPI Apps:
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <a
                      href={GPAY_UPI_URI}
                      className="py-1.5 px-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-center text-[11px] font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 transition-colors shadow-xs"
                    >
                      GPay
                    </a>
                    <a
                      href={PHONEPE_UPI_URI}
                      className="py-1.5 px-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 text-center text-[11px] font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 transition-colors shadow-xs"
                    >
                      PhonePe
                    </a>
                    <a
                      href={PAYTM_UPI_URI}
                      className="py-1.5 px-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 text-center text-[11px] font-semibold text-slate-800 dark:text-slate-200 hover:text-sky-600 transition-colors shadow-xs"
                    >
                      Paytm
                    </a>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal bg-white/60 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-200/80 dark:border-slate-800">
                  💡 <strong>Tip:</strong> Payment complete hone ke baad screenshot le kar neeche upload karein.
                </p>
              </div>
            </div>

            {/* Copy UPI Bar for Mobile */}
            <div className="block sm:hidden pt-0.5">
              <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg gap-2">
                <div className="truncate">
                  <div className="text-[8px] uppercase font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-2 h-2" /> Verified Payee
                  </div>
                  <span className="font-bold text-xs text-slate-900 dark:text-white truncate block">
                    {OFFICIAL_PAYEE_NAME}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold flex items-center gap-1 transition-all shrink-0 shadow-xs"
                >
                  {copiedUpi ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy UPI</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleReceiptFileChange(e.target.files?.[0])}
            className="hidden"
          />

          {/* STEP 2: RECEIPT UPLOAD BOX */}
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <span className="text-xs">📸</span> Upload Payment Receipt Screenshot <span className="text-red-500">*</span>
              </span>
              <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">
                Auto-compressed for fast upload
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
              {compressingReceipt ? (
                <div className="border border-emerald-300 dark:border-emerald-700/60 rounded-xl p-4 text-center bg-emerald-50/60 dark:bg-emerald-950/30">
                  <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <div className="text-[11px] font-bold text-emerald-950 dark:text-emerald-100 flex items-center justify-center gap-1">
                    <Zap className="w-3 h-3 text-emerald-600 animate-pulse" />
                    Compressing receipt for fast upload...
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Resizing to ~100 KB for fast submission on 2G/3G networks.
                  </p>
                </div>
              ) : !receiptPreview ? (
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
                  className={`border-2 border-dashed rounded-xl p-4 sm:p-5 text-center cursor-pointer transition-all ${
                    isDragging
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 scale-[1.01]"
                      : "border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:bg-slate-100/60 dark:hover:bg-slate-900/60"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto mb-2 shadow-xs">
                    <UploadCloud className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    Click to upload payment receipt screenshot
                  </div>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    PNG, JPG, WEBP (Auto compressed for fast upload)
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800 shadow-xs">
                    <UploadCloud className="w-3 h-3" />
                    <span>Choose Receipt File</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Preview Card */}
                  <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-900/50 shadow-xs">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-emerald-300 dark:border-emerald-700 shrink-0 bg-black">
                      <img
                        src={receiptPreview}
                        alt="Uploaded Receipt Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 overflow-hidden text-xs">
                      <div className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white truncate text-[11px]">
                        <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{receiptFile?.name || "Receipt Screenshot"}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 flex flex-wrap items-center gap-1">
                        {compressionStats ? (
                          <>
                            <span className="line-through text-slate-400">
                              {compressionStats.originalKB} KB
                            </span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">
                              → {compressionStats.compressedKB} KB
                            </span>
                            <span className="inline-flex items-center gap-0.5 px-1 py-0.2 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 rounded text-[8px] font-bold uppercase">
                              <Zap className="w-2 h-2" /> Auto Compressed
                            </span>
                          </>
                        ) : (
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                            Ready to attach
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-2 py-1 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-[10px] font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                      >
                        Change
                      </button>
                      <button
                        type="button"
                        onClick={handleRemoveReceipt}
                        title="Remove receipt"
                        className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Optional UTR / Reference Field */}
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-400 mb-0.5">
                      UPI Ref / UTR / Transaction ID (Optional)
                    </label>
                    <input
                      type="text"
                      value={receiptUtr}
                      onChange={(e) => setReceiptUtr(e.target.value)}
                      placeholder="e.g. 423987123456 or Transaction Reference Number"
                      className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                    />
                    <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5">
                      If visible on your receipt, you can enter your 12-digit UTR or reference ID.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 6: FINAL CONFIRMATION */}
        <div className="pt-2 border-t border-slate-200/80 dark:border-white/10 space-y-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-900/40 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label className="flex items-start gap-3 cursor-pointer select-none flex-1">
                <input
                  type="checkbox"
                  name="confirmed"
                  checked={formData.confirmed}
                  onChange={handleChange}
                  className="mt-0.5 w-5 h-5 rounded-md text-purple-600 focus:ring-purple-500 border-slate-300 dark:border-slate-700 cursor-pointer accent-purple-600 shrink-0"
                />
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                  I confirm that the information provided by me is correct and the attached payment receipt is authentic. ☑️
                </span>
              </label>

              <button
                type="button"
                onClick={() => setShowKnowMoreModal(true)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold text-xs shadow-md shadow-purple-600/20 transition-all shrink-0 self-start sm:self-auto cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Know More</span>
              </button>
            </div>

            <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-900/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Need batch details, syllabus kit, daily timing & seat policies?</span>
              </span>
              <button
                type="button"
                onClick={() => setShowKnowMoreModal(true)}
                className="text-purple-600 dark:text-purple-400 font-extrabold underline hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Click here for Know More (अधिक जानकारी)</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          {deviceQuota?.isBlocked ? (
            <button
              type="button"
              disabled
              className="w-full py-4 px-6 rounded-2xl bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300 border-2 border-red-300 dark:border-red-800 font-black text-sm sm:text-base flex items-center justify-center gap-2 cursor-not-allowed shadow-inner"
            >
              <Lock className="w-5 h-5 text-red-500" />
              <span>Device Limit Reached (3/3 Used) — Registration Blocked</span>
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading || compressingReceipt}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-sky-600 to-emerald-600 hover:opacity-95 disabled:opacity-50 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-600/25 active:scale-98"
            >
              {compressingReceipt ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Optimizing Receipt Image...
                </span>
              ) : loading ? (
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
          )}

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

      {/* KNOW MORE & TRAINING GUIDELINES MODAL */}
      {showKnowMoreModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
          onClick={() => setShowKnowMoreModal(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-700 via-sky-700 to-emerald-700 text-white relative">
              <button
                type="button"
                onClick={() => setShowKnowMoreModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold text-emerald-200 mb-2 border border-white/20">
                <Sprout className="w-3.5 h-3.5" />
                <span>Organic Mushroom Farm • Official Training Portal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Training Admission & Guidelines (Know More)
              </h2>
              <p className="text-xs sm:text-sm text-white/90 mt-1">
                Review complete curriculum, kit details, daily batch schedule, and seat allocation rules.
              </p>
            </div>

            {/* Modal Content / Body */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[65vh] overflow-y-auto text-xs sm:text-sm">
              {/* Card 1: Curriculum & What You Learn */}
              <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-900/40">
                <h3 className="font-bold text-purple-700 dark:text-purple-300 flex items-center gap-2 text-sm mb-2">
                  <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>1. Commercial Curriculum & Practical Learning</span>
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  <li><strong>Cultivation Methods:</strong> Button, Oyster, and Milky Mushroom commercial production.</li>
                  <li><strong>Compost Preparation:</strong> Short method & bunker composting, formulation of raw materials (wheat straw, poultry manure, gypsum).</li>
                  <li><strong>Climate & Room Control:</strong> Precise management of temperature (18°C–25°C), relative humidity (85–90%), and CO2 ventilation.</li>
                  <li><strong>Casing & Pinhead Initiation:</strong> Casing soil sterilisation, spawning ratios, and optimum harvest flushing cycles.</li>
                  <li><strong>Hygiene & Disease Control:</strong> Zero-chemical disease prevention, pest mitigation, and green mold protection.</li>
                  <li><strong>Marketing & Pricing:</strong> Direct farm-gate sales, wholesale mandi supply, retail packaging, and value addition.</li>
                </ul>
              </div>

              {/* Card 2: Free Kit & Materials */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/40">
                <h3 className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-2 text-sm mb-2">
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>2. Candidate Study Kit & Raw Material Support</span>
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  <li><strong>Official SOP Handbook:</strong> Step-by-step printed/digital operation manual covering entire cultivation lifecycle.</li>
                  <li><strong>Compost Calculator:</strong> Master formula chart to calculate exact raw material weights for any batch size.</li>
                  <li><strong>Certified Vendor Directory:</strong> Contact list of certified Spawn (Beej), Casing Soil, PP bags, and equipment suppliers across India.</li>
                  <li><strong>Lifetime Grower Advisory:</strong> Direct helpline support from our lead trainers during your initial crop cycles.</li>
                </ul>
              </div>

              {/* Card 3: Batch Timings & Mode */}
              <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-900/40">
                <h3 className="font-bold text-sky-700 dark:text-sky-300 flex items-center gap-2 text-sm mb-2">
                  <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>3. Daily Timing & Training Modes</span>
                </h3>
                <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    <strong>Standard Timing:</strong> 10:00 AM to 4:00 PM IST (including 1 hour lunch & doubt clearing session).
                  </p>
                  <p>
                    <strong>Online Mode:</strong> Live interactive high-definition session + instant doubt solving + full batch session recording.
                  </p>
                  <p>
                    <strong>Offline Farm Mode:</strong> Direct hands-on practical at Organic Mushroom Farm, Katangi Road, Jabalpur (M.P.).
                  </p>
                </div>
              </div>

              {/* Card 4: Seat Reservation & Fee Policy */}
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 text-sm mb-2">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>4. Seat Reservation & ₹500 Advance Token</span>
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  <li>To ensure individual mentoring, each training batch is capped at <strong>25 candidates only</strong>.</li>
                  <li>The <strong>₹500 advance fee</strong> reserves your seat slot and initiates candidate kit dispatch.</li>
                  <li>This ₹500 is fully adjusted in the final course fee upon batch confirmation.</li>
                  <li>Official Digital Registration Slip with unique Registration ID is generated immediately.</li>
                </ul>
              </div>

              {/* Card 5: Helpline & Verification */}
              <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Official Farm Helpline:</span>
                  <span>Call or WhatsApp: +91 9203544140 | support@organicmushroomfarm.com</span>
                </div>
                <a
                  href="https://wa.me/919203544140?text=Hello%20Organic%20Mushroom%20Farm,%20I%20have%20a%20question%20regarding%20training%20registration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
                Pressing agree will confirm guidelines and auto-tick the declaration.
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setShowKnowMoreModal(false)}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, confirmed: true }));
                    setShowKnowMoreModal(false);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/25 transition-all cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>I Understand & Agree (समझ गया)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationFormClient;
