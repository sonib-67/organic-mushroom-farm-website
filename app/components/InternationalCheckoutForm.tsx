"use client";

import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { X, Loader2 } from "lucide-react";

interface CheckoutProps {
  planName: string;
  price: string;
  onSuccess: (id: string) => void;
  onClose: () => void;
}

interface PayPalButtonsInnerProps {
  price: string;
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  planName: string;
  setIsLoading: (loading: boolean) => void;
  handleFailure: (msg: string) => void;
  onSuccess: (id: string) => void;
  setIsCancelled: (cancelled: boolean) => void;
}

const PayPalButtonsInner = ({
  price,
  formData,
  planName,
  setIsLoading,
  handleFailure,
  onSuccess,
  setIsCancelled,
}: PayPalButtonsInnerProps) => {
  const [{ isPending, isResolved, isRejected }] = usePayPalScriptReducer();
  const [buttonsReady, setButtonsReady] = useState(false);

  // Fallback: If PayPal SDK resolves, ensure buttons display smoothly even if onInit is delayed
  useEffect(() => {
    if (isResolved && !buttonsReady) {
      const timer = setTimeout(() => {
        setButtonsReady(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isResolved, buttonsReady]);

  const showLoading = isPending || !isResolved || !buttonsReady;

  return (
    <div className="relative min-h-[160px]">
      {/* Visual Loading State & Button Skeletons */}
      {showLoading && (
        <div className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 flex flex-col items-center justify-center text-center space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center gap-2.5">
            <Loader2 className="w-5 h-5 text-amber-500 animate-spin" />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Loading Payment Options...
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
            Connecting securely to PayPal & Card gateway. Please wait a moment.
          </p>

          {/* Skeleton buttons indicating what is loading */}
          <div className="w-full space-y-2.5 pt-1 max-w-xs">
            <div className="w-full h-11 rounded-lg bg-amber-400/25 dark:bg-amber-400/15 animate-pulse flex items-center justify-center border border-amber-400/30">
              <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                Pay with PayPal
              </span>
            </div>
            <div className="w-full h-11 rounded-lg bg-slate-200/80 dark:bg-slate-700/50 animate-pulse flex items-center justify-center border border-slate-300/40 dark:border-white/5">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Debit or Credit Card
              </span>
            </div>
          </div>
        </div>
      )}

      {isRejected && (
        <div className="text-center p-4 border border-red-500/20 bg-red-500/5 rounded-xl text-red-500 text-xs font-bold mb-3">
          Unable to connect to PayPal. Please check your connection and try again.
        </div>
      )}

      {/* Actual PayPal Buttons: kept in layout flow so width is correctly calculated */}
      <div
        className={
          showLoading
            ? "opacity-0 pointer-events-none h-0 overflow-hidden"
            : "opacity-100 transition-opacity duration-300"
        }
      >
        <PayPalButtons
          style={{
            layout: "vertical",
            shape: "rect",
            label: "pay",
            color: "gold",
          }}
          onInit={() => {
            setButtonsReady(true);
          }}
          createOrder={async () => {
            setIsLoading(true);
            try {
              const response = await fetch("/api/intl?action=create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  amount: price,
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  planName,
                }),
              });
              const textData = await response.text();
              let orderData;
              try {
                orderData = JSON.parse(textData);
              } catch (e) {
                throw new Error("Invalid server response");
              }

              if (!response.ok)
                throw new Error(
                  orderData.error || "Payment creation failed"
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
              const response = await fetch("/api/intl?action=capture", {
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
              });
              const textData = await response.text();
              let captureData;
              try {
                captureData = JSON.parse(textData);
              } catch (e) {
                throw new Error("Invalid server response");
              }

              if (!response.ok)
                throw new Error(
                  captureData.error || "Payment capture failed"
                );

              setIsLoading(false);
              if (captureData.status === "COMPLETED") {
                onSuccess(captureData.id);
              } else {
                handleFailure(
                  "Payment was not completed successfully."
                );
              }
            } catch (err) {
              setIsLoading(false);
              handleFailure(
                "An error occurred while confirming payment."
              );
            }
          }}
          onCancel={() => {
            setIsCancelled(true);
          }}
          onError={(err) => {
            console.error("PayPal Checkout Error:", err);
            handleFailure(
              "Payment failed. Please try again or use another card."
            );
          }}
        />
      </div>
    </div>
  );
};

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
  const [isCancelled, setIsCancelled] = useState(false);

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
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
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
                  className="w-full bg-transparent dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
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
                  className="w-full bg-transparent dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-transparent dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs font-bold">{error}</p>
              )}

              <button
                type="submit"
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition-all"
              >
                Proceed to Payment
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-white/5 mb-6">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  Amount to Pay
                </p>
                <p className="text-2xl font-black text-slate-900 dark:text-white">
                  ${price}
                </p>
              </div>

              <div className="min-h-[160px] relative">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-slate-900/90 z-30 rounded-xl space-y-2">
                    <Loader2 className="animate-spin text-amber-500" size={36} />
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Processing Payment...
                    </p>
                  </div>
                )}

                {isCancelled ? (
                  <div className="text-center p-4 border border-red-500/20 bg-red-500/5 rounded-xl">
                    <p className="text-red-500 font-bold mb-4">Payment was cancelled.</p>
                    <button
                      onClick={() => setIsCancelled(false)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition-all"
                    >
                      Retry Payment
                    </button>
                  </div>
                ) : (
                  <PayPalScriptProvider
                    options={{
                      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "BAA9F1mTzMfsLuGY3cUMK_5-Q4cAq5DMmAbRenFGQs7AtoUEMY27wT_xYSvxh2sbUU8_wZRleyx7M4qMjg",
                      currency: "USD",
                      components: "buttons",
                      "enable-funding": "venmo,paylater,card",
                    }}
                  >
                    <PayPalButtonsInner
                      price={price}
                      formData={formData}
                      planName={planName}
                      setIsLoading={setIsLoading}
                      handleFailure={handleFailure}
                      onSuccess={onSuccess}
                      setIsCancelled={setIsCancelled}
                    />
                  </PayPalScriptProvider>
                )}
              </div>

              <button
                onClick={() => setStep(1)}
                className="w-full text-center text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white mt-4 transition-colors"
              >
                &larr; Back to Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternationalCheckoutForm;
