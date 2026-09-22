"use client";
import React, { useState } from "react";
import { Mail, CheckCircle2, Sparkles, Send, ShieldCheck, MailCheck, AlertTriangle } from "lucide-react";

interface NewsletterSubscribeBoxProps {
  variant?: "footer" | "card" | "compact";
  source?: string;
}

export default function NewsletterSubscribeBox({
  variant = "footer",
  source = "Website Footer"
}: NewsletterSubscribeBoxProps) {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loadTime] = useState<number>(() => Date.now());
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setIsDuplicate(false);
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setIsDuplicate(false);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source,
          hp_website: honeypot,
          load_time: loadTime
        })
      });

      const data = await res.json();

      if (res.status === 409 || data.alreadySubscribed) {
        // Duplicate email error
        setStatus("error");
        setIsDuplicate(true);
        setMessage(
          data.error ||
          "⚠️ This email ID is already registered with us! Please enter a different email address."
        );
      } else if (res.ok && data.success) {
        if (data.pendingVerification) {
          // Double opt-in confirmation required (Tareeka 1)
          setSubmittedEmail(email.trim());
          setStatus("pending");
          setMessage(
            data.message ||
            "We have sent a verification link to your email. Please check your inbox and click 'Confirm Subscription'!"
          );
          setHoneypot("");
        } else {
          setStatus("success");
          setMessage(data.message || "Thank you for subscribing! You'll receive our latest updates directly in your inbox.");
          setEmail("");
          setHoneypot("");
        }
      } else {
        setStatus("error");
        setIsDuplicate(false);
        setMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setIsDuplicate(false);
      setMessage("Unable to connect to server. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="newsletter-subscribe-widget"
      className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-500/25 p-6 sm:p-8 backdrop-blur-md shadow-xl my-8"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left: Headline & Subheadline */}
        <div className="text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
            <Sparkles size={13} />
            <span>2-Day Farmers' Technical Digest</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            Stay Updated (Mandi Rates & Farming Hacks)
          </h3>

          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Get high-yield cultivation techniques, humidity control hacks, and fresh wholesale mandi rates delivered directly to your inbox every 48 hours.
          </p>
        </div>

        {/* Right: Form & Feedback */}
        <div className="w-full lg:w-auto lg:min-w-[400px]">
          {status === "pending" ? (
            <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-100 flex items-start gap-3.5 text-sm animate-in fade-in shadow-lg">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <MailCheck size={20} />
              </div>
              <div className="space-y-1.5 flex-1">
                <strong className="block text-white font-bold text-sm sm:text-base leading-tight">
                  📩 Please Check Your Inbox (Verify Subscription)
                </strong>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  We have sent a verification link to <strong className="text-white underline">{submittedEmail}</strong>. Please open the email and click <strong className="text-emerald-300 font-semibold">'Confirm Subscription'</strong> to activate your 2-Day Farmers' Digest.
                </p>
                <div className="pt-1 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setEmail("");
                    }}
                    className="text-xs text-emerald-300 underline font-semibold hover:text-white transition-colors"
                  >
                    Entered wrong email? Enter another email ➔
                  </button>
                </div>
              </div>
            </div>
          ) : status === "success" ? (
            <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-500/50 text-emerald-200 flex items-start gap-3 text-sm animate-in fade-in">
              <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-bold mb-1">Subscribed Successfully!</strong>
                <p className="text-xs text-emerald-300/90 leading-relaxed">{message}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[11px] text-emerald-400 underline font-semibold hover:text-emerald-300"
                >
                  Add another email
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              {/* Invisible Honeypot Trap: Real users never see this, automated bots fill it */}
              <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                <input
                  type="text"
                  name="hp_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail size={16} />
                  </div>
                  <input
                    id="newsletter-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") {
                        setStatus("idle");
                        setIsDuplicate(false);
                      }
                    }}
                    placeholder="Enter your email address"
                    required
                    disabled={loading}
                    className={`w-full pl-10 pr-4 py-3 bg-slate-900/90 text-white placeholder-slate-400 text-xs sm:text-sm rounded-xl border transition-all ${
                      isDuplicate
                        ? "border-rose-500 ring-2 ring-rose-500/20 bg-rose-950/20"
                        : "border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    } focus:outline-none`}
                  />
                </div>

                <button
                  id="newsletter-subscribe-button"
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shrink-0"
                >
                  {loading ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>

              {status === "error" && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium flex items-start gap-2.5 animate-in fade-in ${
                    isDuplicate
                      ? "bg-rose-950/60 border border-rose-500/50 text-rose-200"
                      : "bg-rose-950/40 border border-rose-600/40 text-rose-300"
                  }`}
                >
                  <AlertTriangle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="leading-relaxed font-semibold">{message}</p>
                    {isDuplicate && (
                      <p className="text-[11px] text-rose-300/80">
                        Tip: If this is your email, your subscription is already active. You may enter a different email address.
                      </p>
                    )}
                  </div>
                </div>
              )}

              <p className="text-xs text-slate-400 text-center lg:text-left pl-1">
                🔒 100% Secure • Unsubscribe Anytime • No Spam Ever
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
