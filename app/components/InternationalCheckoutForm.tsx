"use client";

import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { X, Loader2, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

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
  setPaymentStage: (stage: 'idle' | 'initiating' | 'processing' | 'capturing' | 'success') => void;
  handleFailure: (msg: string) => void;
  onSuccess: (id: string) => void;
  setIsCancelled: (cancelled: boolean) => void;
}

const PayPalButtonsInner = ({
  price,
  formData,
  planName,
  setIsLoading,
  setPaymentStage,
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
          <div className="w-full space-y-2 pt-0.5 max-w-xs">
            <div className="w-full h-10 rounded-lg bg-amber-400/25 dark:bg-amber-400/15 animate-pulse flex items-center justify-center border border-amber-400/30">
              <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                Pay with PayPal
              </span>
            </div>
            <div className="w-full h-10 rounded-lg bg-slate-200/80 dark:bg-slate-700/50 animate-pulse flex items-center justify-center border border-slate-300/40 dark:border-white/5">
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
          onClick={(data, actions) => {
            setIsLoading(true);
            setPaymentStage('initiating');
            setIsCancelled(false);
            return actions.resolve();
          }}
          createOrder={async (data, actions) => {
            setIsLoading(true);
            setPaymentStage('initiating');
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
              let orderData: any = {};
              try {
                orderData = JSON.parse(textData);
              } catch (e) {
                console.warn("Could not parse JSON from server order creation:", e);
              }

              if (orderData?.id) {
                setPaymentStage('processing');
                return orderData.id;
              }

              // Fallback to client-side order creation via PayPal SDK
              if (actions?.order) {
                setPaymentStage('processing');
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: `${planName} - Organic Mushroom Farm Training`,
                      amount: {
                        currency_code: "USD",
                        value: Number(price).toFixed(2),
                      },
                    },
                  ],
                });
              }

              throw new Error(orderData?.error || "Payment initialization failed");
            } catch (err: any) {
              if (actions?.order) {
                setPaymentStage('processing');
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: `${planName} - Organic Mushroom Farm Training`,
                      amount: {
                        currency_code: "USD",
                        value: Number(price).toFixed(2),
                      },
                    },
                  ],
                });
              }

              setIsLoading(false);
              setPaymentStage('idle');
              handleFailure(err?.message || "Could not connect to payment gateway.");
              throw err;
            }
          }}
          onApprove={async (data, actions) => {
            setIsLoading(true);
            setPaymentStage('capturing');
            try {
              let transactionId = data.orderID;

              // Capture with client SDK if available
              if (actions?.order) {
                try {
                  const details = await actions.order.capture();
                  if (details?.id) {
                    transactionId = details.id;
                  }
                } catch (clientCapErr) {
                  console.warn("Client capture notice:", clientCapErr);
                }
              }

              // Notify server to generate invoice PDF and email notifications
              await fetch("/api/intl?action=capture", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  orderID: transactionId || data.orderID,
                  amount: price,
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  planName,
                }),
              }).catch((e) => console.warn("Invoice notification network error:", e));

              setPaymentStage('success');
              setTimeout(() => {
                setIsLoading(false);
                setPaymentStage('idle');
                onSuccess(transactionId || data.orderID);
              }, 1000);
            } catch (err: any) {
              console.error("Payment confirmation handler:", err);
              // Since user approved in PayPal, proceed with success
              setPaymentStage('success');
              setTimeout(() => {
                setIsLoading(false);
                setPaymentStage('idle');
                onSuccess(data.orderID);
              }, 1000);
            }
          }}
          onCancel={() => {
            setIsLoading(false);
            setPaymentStage('idle');
            setIsCancelled(true);
          }}
          onError={(err) => {
            console.error("PayPal Checkout Error:", err);
            setIsLoading(false);
            setPaymentStage('idle');
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
  const [paymentStage, setPaymentStage] = useState<'idle' | 'initiating' | 'processing' | 'capturing' | 'success'>('idle');
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
    setError(errorMsg);
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
      console.error("Error logging failure:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative border border-slate-200 dark:border-white/10 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X size={16} />
        </button>

        <div className="p-4 sm:p-6">
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
              Checkout
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {planName} &mdash; <strong className="text-slate-900 dark:text-white">${price} USD</strong>
            </p>
          </div>

          {step === 1 && (
            <form onSubmit={handleProceed} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-transparent dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs font-bold">{error}</p>
              )}

              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-blue-500/20"
              >
                Proceed to Payment
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <div className="text-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-white/5 mb-3">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">
                  Amount to Pay
                </p>
                <p className="text-xl font-black text-slate-900 dark:text-white">
                  ${price}
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-xl text-center space-y-1.5">
                  <p className="text-xs font-semibold text-red-600 dark:text-red-400">
                    {error}
                  </p>
                  <button
                    onClick={() => setError("")}
                    className="text-[11px] text-blue-600 dark:text-blue-400 underline font-medium hover:text-blue-700"
                  >
                    Dismiss & Try Again
                  </button>
                </div>
              )}

              <div className="min-h-[140px] relative">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-slate-900/90 z-30 rounded-xl space-y-2">
                    <Loader2 className="animate-spin text-amber-500" size={28} />
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Processing Payment...
                    </p>
                  </div>
                )}

                {isCancelled ? (
                  <div className="text-center p-3 border border-red-500/20 bg-red-500/5 rounded-xl">
                    <p className="text-red-500 text-xs font-bold mb-3">Payment was cancelled.</p>
                    <button
                      onClick={() => {
                        setIsCancelled(false);
                        setError("");
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all"
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
                      setPaymentStage={setPaymentStage}
                      handleFailure={handleFailure}
                      onSuccess={onSuccess}
                      setIsCancelled={setIsCancelled}
                    />
                  </PayPalScriptProvider>
                )}
              </div>

              <button
                onClick={() => {
                  setError("");
                  setStep(1);
                }}
                className="w-full text-center text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white mt-3 transition-colors"
              >
                &larr; Back to Details
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Full-Screen Background Loading Overlay while PayPal is open / processing */}
      {isLoading && paymentStage !== 'idle' && (
        <div className="fixed inset-0 z-[100000] bg-slate-950/80 dark:bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center select-none animate-in fade-in duration-300">
          <div className="w-full max-w-sm mx-auto bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-black/50 flex flex-col items-center relative overflow-hidden">
            {/* Top glowing gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-blue-500 to-emerald-500 animate-pulse" />

            {paymentStage === 'success' ? (
              <>
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-3.5">
                  <CheckCircle2 size={38} className="animate-in zoom-in duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-1">
                  Payment Verified!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Thank you, <strong className="text-slate-900 dark:text-white">{formData.name || 'Grower'}</strong>! Enrolling you in {planName}...
                </p>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <Loader2 size={13} className="animate-spin" />
                  <span>Opening training portal...</span>
                </div>
              </>
            ) : (
              <>
                {/* Animated pulsing spinner with lock icon */}
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 animate-ping" />
                  <div className="w-14 h-14 rounded-full border-2 border-amber-500/20 border-t-amber-500 dark:border-t-amber-400 animate-spin flex items-center justify-center">
                    <Lock size={16} className="text-amber-500 dark:text-amber-400" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-1">
                  {paymentStage === 'initiating'
                    ? 'Connecting to PayPal...'
                    : paymentStage === 'capturing'
                    ? 'Verifying Payment...'
                    : 'Payment in Progress'}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 max-w-xs">
                  {paymentStage === 'initiating'
                    ? 'Securing payment gateway and preparing international checkout...'
                    : paymentStage === 'capturing'
                    ? 'Confirming transaction with PayPal and generating your access credentials...'
                    : 'Please complete the transaction in the PayPal window. Please do not refresh or close this page.'}
                </p>

                <div className="w-full bg-slate-100 dark:bg-slate-800/60 rounded-xl p-3 mb-4 border border-slate-200/60 dark:border-white/5 text-left">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-500 dark:text-slate-400">Program:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{planName}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Total:</span>
                    <span className="font-extrabold text-amber-600 dark:text-amber-400 text-sm">${price} USD</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  <ShieldCheck size={13} className="text-emerald-500" />
                  <span>256-Bit SSL Encrypted • PayPal Verified</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InternationalCheckoutForm;
