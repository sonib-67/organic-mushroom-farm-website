import React, { useState, useEffect } from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CheckCircle2, ArrowRight, Loader2, X } from "lucide-react";

interface CheckoutProps {
  planName: string;
  price: string;
  onSuccess: (id: string) => void;
  onClose: () => void;
}

const InternationalCheckoutForm = ({
  planName,
  price,
  onSuccess,
  onClose,
}: CheckoutProps) => {
  const [step, setStep] = useState<1 | 2>(1); // 1: Details form, 2: PayPal Buttons
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill all details correctly.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleFailure = async (errorMsg: string) => {
    try {
      await fetch("/api/intl?action=fail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          planName,
          errorMsg,
        }),
      });
    } catch (err) {
      console.error(err);
    }
    alert(errorMsg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 dark:border-white/10 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Checkout
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {planName} &mdash; <strong>${price} USD</strong>
            </p>
          </div>

          {step === 1 && (
            <form onSubmit={handleProceed} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  placeholder="+1 234 567 8900"
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs font-semibold">{error}</p>
              )}

              <button
                type="submit"
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                Continue to Payment <ArrowRight size={16} />
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  Billing Details
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {formData.name}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {formData.email} • {formData.phone}
                </p>
              </div>

              <div className="min-h-[150px] relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 z-10 rounded-xl">
                    <Loader2 className="animate-spin text-blue-500" size={32} />
                  </div>
                )}

                <PayPalScriptProvider
                  options={{
                    clientId:
                      (import.meta as any).env.VITE_PAYPAL_CLIENT_ID ||
                      "BAA9F1mTzMfsLuGY3cUMK_5-Q4cAq5DMmAbRenFGQs7AtoUEMY27wT_xYSvxh2sbUU8_wZRleyx7M4qMjg",
                    currency: "USD",
                  }}
                >
                  <PayPalButtons
                    style={{
                      layout: "vertical",
                      shape: "pill",
                      label: "pay",
                      color: "gold",
                    }}
                    createOrder={async () => {
                      setIsLoading(true);
                      try {
                        const response = await fetch(
                          "/api/intl?action=create",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              amount: price,
                              name: formData.name,
                              email: formData.email,
                              phone: formData.phone,
                              planName,
                            }),
                          },
                        );
                        const textData = await response.text();
                        let orderData;
                        try {
                          orderData = JSON.parse(textData);
                        } catch (e) {
                          throw new Error("Invalid server response");
                        }
                        if (!response.ok)
                          throw new Error(
                            orderData.error || "Payment creation failed",
                          );
                        setIsLoading(false);
                        return orderData.id;
                      } catch (err) {
                        setIsLoading(false);
                        handleFailure("Could not connect to payment gateway.");
                        throw err;
                      }
                    }}
                    onApprove={async (data, actions) => {
                      setIsLoading(true);
                      try {
                        const response = await fetch(
                          "/api/intl?action=capture",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              orderID: data.orderID,
                              amount: price,
                              name: formData.name,
                              email: formData.email,
                              phone: formData.phone,
                              planName,
                            }),
                          },
                        );
                        const textData = await response.text();
                        let captureData;
                        try {
                          captureData = JSON.parse(textData);
                        } catch (e) {
                          throw new Error("Invalid server response");
                        }
                        if (!response.ok)
                          throw new Error(
                            captureData.error || "Payment capture failed",
                          );
                        setIsLoading(false);

                        if (captureData.status === "COMPLETED") {
                          onSuccess(captureData.id);
                        } else {
                          handleFailure(
                            "Payment was not completed successfully.",
                          );
                        }
                      } catch (err) {
                        setIsLoading(false);
                        handleFailure(
                          "An error occurred while confirming payment.",
                        );
                      }
                    }}
                    onCancel={() => {
                      handleFailure("Payment was cancelled by the user.");
                    }}
                    onError={(err) => {
                      console.error("PayPal Checkout Error:", err);
                      handleFailure(
                        "Payment failed. Please try again or use another card.",
                      );
                    }}
                  />
                </PayPalScriptProvider>
              </div>

              <button
                onClick={() => setStep(1)}
                className="w-full text-center text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white mt-4 transition-colors"
              >
                ← Back to Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternationalCheckoutForm;
