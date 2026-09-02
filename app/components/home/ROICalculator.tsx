"use client";
import React, { useState, useMemo } from 'react';
import NextLink from 'next/link';

const ROICalculator = () => {
  const [bags, setBags] = useState(2000);
  const [sellingPrice, setSellingPrice] = useState(120);
  const [operatingCost, setOperatingCost] = useState(40);

  const yieldPerBag = 1.5; // kg
  const estimatedInvestment = bags * 1200; // estimated investment formula

  const monthlyProfit = useMemo(() => {
    return (sellingPrice - operatingCost) * (bags * yieldPerBag);
  }, [sellingPrice, operatingCost, bags]);

  const paybackPeriod = useMemo(() => {
    const yearlyProfit = monthlyProfit * 5; // 5 cycles a year usually
    if (yearlyProfit <= 0) return 0;
    return (estimatedInvestment / yearlyProfit) * 12; // in months
  }, [monthlyProfit, estimatedInvestment]);

  const webmcpSchema = {
    "@context": "https://webmcp.dev",
    "@type": "WebMCP",
    tool: {
      name: "home_roi_estimator",
      description:
        "Estimate your mushroom farming profit, investment returns, and payback period on the home page.",
      inputSchema: {
        type: "object",
        properties: {
          bags: {
            type: "number",
            minimum: 500,
            maximum: 10000,
            description: "Number of spawn bags or cultivation beds",
          },
          sellingPrice: {
            type: "number",
            minimum: 80,
            maximum: 250,
            description: "Market selling price per kg in Indian Rupees (INR)",
          },
          operatingCost: {
            type: "number",
            minimum: 20,
            maximum: 80,
            description:
              "Labor and electricity operating expense per kg in Indian Rupees (INR)",
          },
        },
        required: ["bags", "sellingPrice", "operatingCost"],
      },
    },
  };

  return (
    <section id="roi-calculator" className="section-padding overflow-hidden">
      <script type="application/ld+json">{JSON.stringify(webmcpSchema)}</script>
      <div className="max-w-7xl mx-auto">
        <div
          className="glass card-padding border dark:border-white/10 border-black/10 relative"
          data-webmcp-tool="home_roi_estimator"
          data-webmcp-description="Estimate commercial mushroom farming profits based on spawn bags count, selling price, and operating expenses."
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-primary-start/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="badge mb-4 mx-auto lg:mx-0">Profit Analytics</div>
              <h2 className="mb-4">
                <NextLink href="/roi-calculator" className="hover:text-current transition-colors">
                  Personalized Mushroom Business{" "}
                  <span className="gradient-text">ROI Estimator</span>
                </NextLink>
              </h2>
              <p className="mb-5 max-w-lg mx-auto lg:mx-0">
                Estimate your mushroom farming profits based on real-time market
                averages.
              </p>

              <div className="space-y-8 text-left">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label
                      id="bags-label"
                      htmlFor="bags-range-input"
                      className="text-[9px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      Number of Bags/Beds
                    </label>
                    <span className="text-xl font-bold dark:text-white text-slate-900">
                      {bags}
                    </span>
                  </div>
                  <input
                    id="bags-range-input"
                    aria-labelledby="bags-label"
                    aria-label="Number of Bags or Beds"
                    data-webmcp-property="bags"
                    data-webmcp-description="Number of spawn bags or cultivation beds"
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={bags}
                    onChange={(e) => setBags(Number(e.target.value))}
                    className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label
                      id="price-label"
                      htmlFor="price-range-input"
                      className="text-[9px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      Market Selling Price (₹/kg)
                    </label>
                    <span className="text-xl font-bold dark:text-white text-slate-900">
                      ₹{sellingPrice}
                    </span>
                  </div>
                  <input
                    id="price-range-input"
                    aria-labelledby="price-label"
                    aria-label="Market Selling Price per Kilogram"
                    data-webmcp-property="sellingPrice"
                    data-webmcp-description="Market selling price per kg of mushrooms in Indian Rupees (INR)"
                    type="range"
                    min="80"
                    max="250"
                    step="5"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label
                      id="cost-label"
                      htmlFor="cost-range-input"
                      className="text-[9px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      Labor/Electricity Cost (₹/kg)
                    </label>
                    <span className="text-xl font-bold dark:text-white text-slate-900">
                      ₹{operatingCost}
                    </span>
                  </div>
                  <input
                    id="cost-range-input"
                    aria-labelledby="cost-label"
                    aria-label="Labor and Electricity Cost per Kilogram"
                    data-webmcp-property="operatingCost"
                    data-webmcp-description="Labor and electricity operating cost per kg in Indian Rupees (INR)"
                    type="range"
                    min="20"
                    max="80"
                    step="2"
                    value={operatingCost}
                    onChange={(e) => setOperatingCost(Number(e.target.value))}
                    className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="glass p-3 rounded-3xl border dark:border-white/10 border-black/10 text-center">
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">
                  Cycle Net Profit
                </div>
                <div
                  className={
                    monthlyProfit > 0
                      ? "text-sm font-black text-green-400"
                      : "text-sm font-black text-red-400"
                  }
                >
                  ₹{monthlyProfit.toLocaleString()}
                </div>
              </div>

              <div className="glass p-3 rounded-3xl border dark:border-white/10 border-black/10 text-center">
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">
                  Estimated Payback Period
                </div>
                <div className="text-sm font-black text-primary-start">
                  {paybackPeriod > 0
                    ? `${paybackPeriod.toFixed(1)} Months`
                    : "N/A"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
