import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, CheckCircle2, ChevronRight, Loader2, Sparkles, User, Mail, Phone, ArrowLeft, ShieldCheck, HelpCircle, MessageCircle, Sprout, Store, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { trackPaymentStep, pixelTrackCustom } from '../utils/pixel';

interface Product {
  id: string;
  name: string;
  price: number; // in INR
  unit: string;
  description: string;
  features: string[];
  category: 'spawn' | 'training' | 'mushrooms' | 'setup';
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'oyster_spawn',
    name: 'Oyster Mushroom Spawn',
    price: 200,
    unit: 'kg',
    description: 'High-yield, lab-tested premium grade spawn cultivated under sterile conditions. High resistance to contamination and rapid mycelium run.',
    features: ['Laboratory Tested', 'High Yield Potential', 'Contamination Resistant', 'Vigorous Mycelium Spread'],
    category: 'spawn',
    badge: 'Popular Choice'
  },
  {
    id: 'training',
    name: 'Mushroom Farming Training',
    price: 2999,
    unit: 'person',
    description: 'Complete commercial mushroom training program. Covers composting, temperature control, casing, harvesting, pest control, and marketing.',
    features: ['Certificate Included', 'Lifetime WhatsApp Support', 'Step-by-Step SOP Guidebook', 'Sellers Network Access'],
    category: 'training',
    badge: 'Best Seller'
  },
  {
    id: 'fresh_oyster',
    name: 'Fresh Oyster Mushrooms',
    price: 120,
    unit: 'kg',
    description: 'Freshly harvested hand-picked organic oyster mushrooms. Rich in protein, dietary fiber, and essential minerals with delightful culinary flavor.',
    features: ['100% Organic & Fresh', 'High Culinary Quality', 'Locally Grown in MP', 'Delivered within 24 Hours'],
    category: 'mushrooms',
    badge: 'Farm Fresh'
  },
  {
    id: 'dry_mushroom',
    name: 'Dry Oyster Mushrooms',
    price: 800,
    unit: 'kg',
    description: 'Sustainably dehydrated organic oyster mushrooms preserving nutritional integrity, vitamins, and natural rich umami profile with extensive shelf-life.',
    features: ['Extremely Long Shelf-life', 'Preserved Nutritional Value', 'Rich Umami Taste Maker', 'Perfect for Soup/Curry'],
    category: 'mushrooms'
  },
  {
    id: 'farm_setup',
    name: 'Complete Farm Setup Package',
    price: 15000,
    unit: 'package',
    description: 'End-to-end commercial farm consultation, layout blueprinting, climate controller setup direction, racks advice, and initial spawn/raw material starter kit.',
    features: ['Detailed Commercial Layout Plan', 'On-call Site Assistance', 'Spawn + Cylinder Setup Kit', 'Buyback Referral Agreement'],
    category: 'setup',
    badge: 'Ultimate Commercial'
  }
];

export default function ProductsPage() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  useEffect(() => {
    document.title = "Shop Products - Organic Mushroom Farm";
    window.scrollTo(0, 0);
  }, []);

  const openCheckout = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(product.category === 'training' || product.category === 'setup' ? 1 : 10); // Default to reasonable bulk or 1
    
    // Track opened checkout
    pixelTrackCustom('CheckoutOpen', {
      product_id: product.id,
      product_name: product.name,
      base_price: product.price
    });
  };

  const closeCheckout = () => {
    setSelectedProduct(null);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
  };

  const handlePurchaseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    setLoading(true);

    const computedAmount = selectedProduct.price * quantity;

    // Track checkout submission
    trackPaymentStep('InitiateCheckout', {
      value: computedAmount,
      currency: 'INR',
      content_name: selectedProduct.name,
      quantity: quantity
    });

    try {
      // Create Order API Call
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          productType: selectedProduct.id,
          productName: `${selectedProduct.name} - ${quantity} ${selectedProduct.unit}`,
          amount: computedAmount * 100 // send in paisa
        })
      });

      const text = await response.text();
      let payload;
      try {
        payload = JSON.parse(text);
      } catch (err) {
        throw new Error('Invalid serverside JSON layout structure');
      }

      if (!response.ok) throw new Error(payload?.error || 'Failed to initiate order.');

      // Razorpay checkout opening options logic
      const rzpOptions = {
        key: payload.key_id,
        amount: payload.amount,
        currency: payload.currency,
        name: payload.name,
        description: `${selectedProduct.name} (${quantity} ${selectedProduct.unit})`,
        prefill: payload.prefill,
        notes: payload.notes,
        theme: payload.theme || { color: '#2e7d32' },
        handler: function (res: any) {
          // Trigger Meta Purchase
          trackPaymentStep('Purchase', {
            value: computedAmount,
            currency: 'INR',
            order_id: payload.order_id,
            payment_id: res.razorpay_payment_id,
            content_name: selectedProduct.name,
            user_email: formData.email,
            user_phone: formData.mobile
          });
          
          setTimeout(() => {
            navigate('/payment-success?id=' + res.razorpay_payment_id);
          }, 300);
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            trackPaymentStep('PaymentCancelled', {
              value: computedAmount,
              currency: 'INR',
              content_name: selectedProduct.name,
              user_email: formData.email
            });
            navigate('/payment-cancelled', {
              state: {
                amount: computedAmount * 100,
                currency: 'INR',
                productName: selectedProduct.name,
                email: formData.email,
                from: '/products',
                formData: formData
              }
            });
          }
        }
      };

      if (typeof window !== 'undefined' && (window as any).Razorpay) {
        trackPaymentStep('AddPaymentInfo', {
          value: computedAmount,
          currency: 'INR',
          content_name: selectedProduct.name
        });

        const rzp = new (window as any).Razorpay(rzpOptions);

        rzp.on('payment.failed', function (res: any) {
          console.error(res.error);
          setLoading(false);
          trackPaymentStep('PaymentFailed', {
            value: computedAmount,
            currency: 'INR',
            content_name: selectedProduct.name,
            error_msg: res.error.description
          });
          navigate('/payment-failed', {
            state: {
              amount: computedAmount * 100,
              currency: 'INR',
              productName: selectedProduct.name,
              email: formData.email,
              error: res.error.description,
              from: '/products',
              formData: formData
            }
          });
        });

        rzp.open();
      } else {
        alert('Razorpay Checkout utility not loaded. Please connect to the internet & retry.');
        setLoading(false);
      }

    } catch (e: any) {
      console.error(e);
      alert(e.message || 'Payment initiation failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 dark:bg-[#070707] bg-slate-50 transition-colors duration-300">
      <SEO 
        title="Official Shop | Buy Spawn, Fresh & Dry Mushrooms, Setup Packages"
        description="Premium-grade laboratory tested mushroom spawn, 100% organic fresh and dry oyster mushrooms, training courses, and complete farm setup packages."
      />

      {/* Background Decorative Rings */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-45">
        <div className="absolute top-[10%] right-[5%] w-[35rem] h-[35rem] bg-green-500/10 dark:opacity-20 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[35rem] h-[35rem] bg-emerald-500/15 dark:opacity-20 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header Hero */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-green-500 font-bold tracking-widest text-xs uppercase mb-3 bg-green-500/10 px-4 py-1.5 rounded-full w-fit mx-auto"
          >
            <Store className="w-4 h-4" /> Organic E-Store
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-none mb-4"
          >
            Buy Premium <span className="text-green-500">Mushroom Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium"
          >
            Select from lab-verified high-yield spawn, farm-fresh local oyster mushrooms, curated training, or ready-to-run turn-key commercial crop infrastructure layouts.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6 relative border dark:border-white/5 border-black/5 flex flex-col justify-between overflow-hidden group shadow-md transition-all duration-300"
            >
              <div>
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(46,125,50,0.3)]">
                    {product.badge}
                  </span>
                )}
                
                <div className="mb-4">
                  <span className="text-xs font-bold font-mono tracking-widest text-slate-500 uppercase bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold dark:text-white text-slate-900 group-hover:text-green-500 transition-colors mb-2">
                  {product.name}
                </h3>
                
                <p className="text-xs text-slate-400 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and Action Section */}
              <div className="pt-4 border-t dark:border-white/10 border-black/5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Price</div>
                  <div className="text-2xl font-black dark:text-white text-slate-900 leading-none">
                    ₹{product.price}
                    <span className="text-xs font-bold text-slate-400"> / {product.unit}</span>
                  </div>
                </div>

                <button
                  onClick={() => openCheckout(product)}
                  className="btn-primary cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-600 dark:bg-green-700 hover:bg-green-500 font-bold text-white rounded-xl text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_4px_15px_rgba(46,125,50,0.25)]"
                >
                  Buy Now <ShoppingCart size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative Shipping Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-green-500/10 border border-green-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500">
              <Sprout size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold dark:text-white text-slate-900">100% Guaranteed High-Yield Germination or Fast Support</h4>
              <p className="text-xs text-slate-400 mt-1">Our laboratory in Jabalpur, MP delivers lab-pure test spawns directly nationwide with insulated temperature packs.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919203544140?text=Hello,%2520I%2520need%2520assistance%2520with%2520purchasing%2520spawn."
            target="_blank"
            className="flex items-center gap-2 dark:bg-white/5 bg-black/5 hover:bg-black/10 dark:hover:bg-white/10 px-5 py-2.5 rounded-full dark:text-white text-slate-900 text-xs font-bold transition-all"
          >
            <MessageCircle size={14} /> Support Agent
          </a>
        </motion.div>
      </div>

      {/* Dynamic Slide-up / Fade Checkout Form Sheet Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCheckout}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Body Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-md bg-[#0A0A0A]/95 p-6 md:p-8 rounded-[2rem] border border-green-500/20 text-white shadow-2xl overflow-hidden"
            >
              {/* Green Glow Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>

              {/* Close Button */}
              <button 
                onClick={closeCheckout}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full h-8 w-8 flex items-center justify-center transition-all"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <Store className="text-green-500" size={24} />
                <h3 className="text-xl font-bold tracking-tight">Checkout Order Form</h3>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl mb-6">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-extrabold mb-1">Product Details</p>
                <h4 className="font-bold text-base text-white">{selectedProduct.name}</h4>
                <div className="flex justify-between items-center mt-3 text-xs">
                  <span className="text-slate-400">Base Price:</span>
                  <span className="font-bold font-mono">₹{selectedProduct.price} / {selectedProduct.unit}</span>
                </div>

                {/* Scalable Quantity Selectors for Spawns / Fresh/Dry items */}
                {selectedProduct.category !== 'training' && selectedProduct.category !== 'setup' ? (
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs text-slate-400 font-bold">Inquire Quantity ({selectedProduct.unit}):</span>
                    <div className="flex items-center gap-3">
                      <button 
                        type="button"
                        onClick={() => handleQuantityChange(quantity - 10)}
                        className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded font-bold text-sm transition-colors"
                      >
                        -10
                      </button>
                      <span className="font-mono font-bold text-base px-2">{quantity}</span>
                      <button 
                        type="button"
                        onClick={() => handleQuantityChange(quantity + 10)}
                        className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded font-bold text-sm transition-colors"
                      >
                        +10
                      </button>
                    </div>
                  </div>
                ) : null}

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10 text-sm font-bold">
                  <span className="text-slate-200">Total Purchase Amount:</span>
                  <span className="text-green-400 text-lg font-black font-mono">₹{selectedProduct.price * quantity}</span>
                </div>
              </div>

              <form onSubmit={handlePurchaseSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase tracking-wider">Your Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#121212] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-green-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#121212] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-green-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase tracking-wider">WhatsApp Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input
                      type="tel"
                      name="mobile"
                      required
                      pattern="^[0-9]{10}$"
                      placeholder="10-digit mobile, e.g. 9203544140"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full bg-[#121212] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-green-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-500 hover:shadow-[0_0_25px_rgba(46,125,50,0.4)] text-[15px] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin text-white" />
                      Loading Payment Gateway...
                    </>
                  ) : (
                    <>
                      Pay ₹{selectedProduct.price * quantity} Securing Gateways <ShieldCheck size={16} />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-slate-500 mt-4 leading-relaxed font-semibold">
                  By paying, you secure order priority logs. Payments are 128-bit verified entirely on Razorpay India secure system.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
