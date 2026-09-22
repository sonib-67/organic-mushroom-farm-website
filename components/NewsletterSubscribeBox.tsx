"use client";
import React, { useState } from "react";
import { Mail, CheckCircle2, Sparkles, Send, ShieldCheck } from "lucide-react";

interface NewsletterSubscribeBoxProps {
  variant?: "footer" | "card" | "compact";
  source?: string;
}

export default function NewsletterSubscribeBox({
  variant = "footer",
  source = "Website Footer"
}: NewsletterSubscribeBoxProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setMessage("Thank you for subscribing! You'll receive our latest updates directly in your inbox.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Subscription failed, please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setMessage("Unable to connect to the server. Please try again.");
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
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            Stay Updated
          </h3>

          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Get the latest mushroom farming tips, training updates, and market news directly in your inbox.
          </p>
        </div>

        {/* Right: Form & Feedback */}
        <div className="w-full lg:w-auto lg:min-w-[380px]">
          {status === "success" ? (
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
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail size={16} />
                  </div>
                  <input
                    id="newsletter-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={loading}
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/90 text-white placeholder-slate-400 text-xs sm:text-sm rounded-xl border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
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
                <p className="text-xs text-rose-400 font-medium pl-1">
                  ⚠️ {message}
                </p>
              )}

              <p className="text-xs text-slate-400 text-center lg:text-left pl-1">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
