'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShoppingCart,
  CheckCircle2,
  Package,
  ArrowRight,
  ShieldCheck,
  Truck,
  Plus,
  Minus,
  MessageCircle,
  ExternalLink,
  Info,
  Send,
  Sparkles,
} from 'lucide-react';
import { useAppModals } from './ModalContext';

interface SpawnProduct {
  id: string;
  name: string;
  species: string;
  pricePerKg: number;
  badge: string;
  iconBg: string;
}

export const QuickOrderModal: React.FC = () => {
  const { activeModal, closeModal, modalData } = useAppModals();
  const isOpen = activeModal === 'quick_order';

  const products: SpawnProduct[] = [
    {
      id: 'button',
      name: 'Button Mushroom Spawn (F1 Master)',
      species: 'Agaricus bisporus',
      pricePerKg: 140,
      badge: 'Commercial Best Seller',
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 'oyster',
      name: 'Oyster Mushroom Spawn (Grey / Florida)',
      species: 'Pleurotus ostreatus / florida',
      pricePerKg: 120,
      badge: 'Fast 20-Day Harvest',
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    },
    {
      id: 'milky',
      name: 'Milky Mushroom Spawn (High Temp)',
      species: 'Calocybe indica',
      pricePerKg: 130,
      badge: 'Summer Heat Strains',
      iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    },
    {
      id: 'shiitake',
      name: 'Shiitake & Exotic Gourmet Spawn',
      species: "Lentinula edodes / Lion's Mane",
      pricePerKg: 350,
      badge: 'Superfood Premium',
      iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    },
  ];

  const [selectedProductId, setSelectedProductId] = useState<string>(
    modalData?.variety?.toLowerCase().includes('oyster')
      ? 'oyster'
      : modalData?.variety?.toLowerCase().includes('milky')
      ? 'milky'
      : modalData?.variety?.toLowerCase().includes('shiitake')
      ? 'shiitake'
      : 'button'
  );

  const [quantityKg, setQuantityKg] = useState<number>(modalData?.quantity || 5);
  const [packType, setPackType] = useState<'1kg' | '5kg' | '20kg' | 'cargo'>('5kg');

  // Checkout Form Mode
  const [orderMethod, setOrderMethod] = useState<'options' | 'direct_form'>('options');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  // Math security check
  const [captcha] = useState({ num1: 2, num2: 6 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];

  // Pricing calculations
  const orderSummary = useMemo(() => {
    const rawPrice = selectedProduct.pricePerKg * quantityKg;
    let discountPercent = 0;

    if (quantityKg >= 100) {
      discountPercent = 20; // 20% off for 100kg+
    } else if (quantityKg >= 20) {
      discountPercent = 10; // 10% off for 20kg+
    } else if (quantityKg >= 10) {
      discountPercent = 5; // 5% off for 10kg+
    }

    const discountAmount = Math.round((rawPrice * discountPercent) / 100);
    const estShipping = quantityKg <= 5 ? 120 : quantityKg <= 20 ? 250 : 500;
    const finalTotal = rawPrice - discountAmount + estShipping;

    return {
      rawPrice,
      discountPercent,
      discountAmount,
      estShipping,
      finalTotal,
    };
  }, [selectedProduct, quantityKg]);

  if (!isOpen) return null;

  const handleDirectOrderSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parseInt(captchaAnswer, 10) !== captcha.num1 + captcha.num2) {
      setCaptchaError('Please solve the security sum correctly.');
      return;
    }

    setCaptchaError('');
    setSubmitting(true);
    setApiError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          location: `${formValues.address}, ${formValues.pincode}`,
          service: 'QUICK_SPAWN_ORDER',
          mushroomVariety: selectedProduct.name,
          quantity: `${quantityKg} kg (${packType})`,
          estimatedTotal: `₹${orderSummary.finalTotal.toLocaleString('en-IN')}`,
          message: `Quick Spawn Purchase: ${selectedProduct.name}, Qty: ${quantityKg} kg. Final Total: ₹${orderSummary.finalTotal.toLocaleString('en-IN')}. Shipping Address: ${formValues.address}, PIN: ${formValues.pincode}. Payment preference: ${formValues.paymentPreference || 'COD / Bank Transfer'}. Additional Note: ${formValues.note || 'None'}`,
          subject: `New Quick Spawn Order: ${formValues.name} (${quantityKg}kg ${selectedProduct.name})`,
        }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to place spawn order. Please try again.');
      }

      setSubmitted(true);
      setApiError('');
    } catch (err: any) {
      console.error('Quick order submission error:', err);
      setApiError(err.message || 'Error processing order. Please order directly on WhatsApp or Razorpay.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsAppOrderText = `Hi, I want to place a Quick Spawn Order:%0A- Variety: ${selectedProduct.name}%0A- Quantity: ${quantityKg} kg%0A- Packaging: ${packType}%0A- Estimated Total: ₹${orderSummary.finalTotal.toLocaleString('en-IN')}%0APlease confirm delivery timeline & payment details.`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl my-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden text-slate-900 dark:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-5 sm:p-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-white/20">
                <ShoppingCart size={12} /> Direct Spawn Bag Checkout
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                Quick Spawn Purchase & Order Summary
              </h3>
              <p className="text-xs text-emerald-100 font-medium mt-0.5">
                Certified F1 pure grain spawn delivered safely to your doorstep across India
              </p>
            </div>

            <button
              onClick={closeModal}
              aria-label="Close quick order modal"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shrink-0 ml-2"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto space-y-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-black dark:text-white text-slate-900 mb-2">
                  Spawn Order Placed Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for ordering {quantityKg} kg {selectedProduct.name}. Our dispatch coordinator is preparing your parcel with thermal protection and will contact you with courier tracking.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919203544140?text=${whatsAppOrderText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs inline-flex items-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle size={15} /> Confirm on WhatsApp
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs transition-transform hover:scale-105"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : orderMethod === 'options' ? (
              <>
                {/* Step 1: Select Spawn Product */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    1. Select Mushroom Variety
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {products.map((p) => {
                      const isSelected = selectedProductId === p.id;
                      return (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => setSelectedProductId(p.id)}
                          className={`p-3.5 rounded-2xl border text-left transition-all flex items-start justify-between ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-500/10 shadow-xs'
                              : 'border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5'
                          }`}
                        >
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-0.5">
                              {p.badge}
                            </span>
                            <h5 className="text-xs font-bold dark:text-white text-slate-900 leading-tight">
                              {p.name}
                            </h5>
                            <span className="text-[11px] text-slate-500 italic block mt-0.5">
                              ₹{p.pricePerKg}/kg
                            </span>
                          </div>
                          {isSelected && <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Quantity & Packaging */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      2. Quantity in Kilograms (kg)
                    </label>
                    <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10">
                      <button
                        type="button"
                        onClick={() => setQuantityKg((q) => Math.max(1, q - 1))}
                        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold"
                      >
                        <Minus size={16} />
                      </button>
                      <input
                        type="number"
                        min={1}
                        value={quantityKg}
                        onChange={(e) => setQuantityKg(Math.max(1, parseInt(e.target.value, 10) || 1))}
                        className="w-full text-center bg-transparent font-black text-lg dark:text-white text-slate-900 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setQuantityKg((q) => q + 1)}
                        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="flex gap-2 mt-2">
                      {[1, 5, 20, 50, 100].map((q) => (
                        <button
                          type="button"
                          key={q}
                          onClick={() => setQuantityKg(q)}
                          className={`flex-1 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                            quantityKg === q
                              ? 'bg-emerald-500 text-white border-emerald-500'
                              : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                          }`}
                        >
                          {q} kg
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Packaging Preference
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: '1kg' as const, label: '1 kg Packs' },
                        { id: '5kg' as const, label: '5 kg Master Bag' },
                        { id: '20kg' as const, label: '20 kg Bulk Box' },
                        { id: 'cargo' as const, label: 'Tonne Cargo' },
                      ].map((pkg) => (
                        <button
                          type="button"
                          key={pkg.id}
                          onClick={() => setPackType(pkg.id)}
                          className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                            packType === pkg.id
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                              : 'border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {pkg.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Order Summary Box */}
                <div className="p-4 sm:p-5 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200 dark:border-white/10">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">
                      {selectedProduct.name} ({quantityKg} kg @ ₹{selectedProduct.pricePerKg}/kg)
                    </span>
                    <span className="font-bold dark:text-white text-slate-900">
                      ₹{orderSummary.rawPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {orderSummary.discountPercent > 0 && (
                    <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400">
                      <span className="font-medium flex items-center gap-1">
                        <Sparkles size={12} /> Bulk Volume Discount ({orderSummary.discountPercent}% Off)
                      </span>
                      <span className="font-bold">
                        -₹{orderSummary.discountAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1">
                      <Truck size={12} /> Insulated Express Courier Transit
                    </span>
                    <span className="font-bold dark:text-white text-slate-900">
                      ₹{orderSummary.estShipping.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-200 dark:border-white/10 font-black">
                    <span className="dark:text-white text-slate-900">Estimated Total Amount:</span>
                    <span className="text-base text-emerald-600 dark:text-emerald-400">
                      ₹{orderSummary.finalTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Direct Checkout Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <a
                      href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all text-center"
                    >
                      <ShoppingCart size={16} /> Buy on Razorpay Store <ExternalLink size={14} />
                    </a>

                    <a
                      href={`https://wa.me/919203544140?text=${whatsAppOrderText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md text-center"
                    >
                      <MessageCircle size={16} /> Quick Order on WhatsApp
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOrderMethod('direct_form')}
                    className="w-full py-3 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Send size={14} /> Or Enter Delivery Address for COD / Bank Booking
                  </button>
                </div>
              </>
            ) : (
              /* Address & Direct Booking Form */
              <form onSubmit={handleDirectOrderSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                  <h4 className="text-sm font-bold dark:text-white text-slate-900">
                    Delivery Address for {quantityKg} kg {selectedProduct.name}
                  </h4>
                  <button
                    type="button"
                    onClick={() => setOrderMethod('options')}
                    className="text-xs text-emerald-500 hover:underline font-bold"
                  >
                    ← Back to Order Summary
                  </button>
                </div>

                {apiError && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 p-3.5 rounded-xl text-xs flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>{apiError}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Suresh Patel"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Delivery Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      placeholder="e.g. 482002"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Complete Shipping Address (House/Farm, Area, City, State) *
                  </label>
                  <textarea
                    name="address"
                    required
                    rows={2}
                    placeholder="Enter complete address for courier parcel delivery..."
                    className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  ></textarea>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Payment Preference
                    </label>
                    <select
                      name="paymentPreference"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="UPI / QR Code on WhatsApp">Instant UPI / QR Code on WhatsApp</option>
                      <option value="Direct Bank NEFT / IMPS">Direct Bank NEFT / IMPS</option>
                      <option value="Cash on Delivery (Advance Freight)">Cash on Delivery (Advance Freight)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Delivery Date / Specific Note
                    </label>
                    <input
                      type="text"
                      name="note"
                      placeholder="e.g. Dispatch urgently on Monday"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Anti-spam Math */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/10">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                    Security Math Check: What is {captcha.num1} + {captcha.num2}? *
                  </label>
                  <input
                    required
                    type="number"
                    value={captchaAnswer}
                    onChange={(e) => {
                      setCaptchaAnswer(e.target.value);
                      if (captchaError) setCaptchaError('');
                    }}
                    className={`w-full bg-white dark:bg-slate-900 border ${
                      captchaError ? 'border-red-500' : 'border-slate-200 dark:border-white/10'
                    } rounded-lg px-3 py-2 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    placeholder="Enter the correct sum"
                  />
                  {captchaError && <p className="text-red-500 text-[11px] mt-1 font-medium">{captchaError}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Confirming Spawn Booking...
                    </span>
                  ) : (
                    <>
                      <span>Confirm Spawn Booking (₹{orderSummary.finalTotal.toLocaleString('en-IN')})</span> <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
