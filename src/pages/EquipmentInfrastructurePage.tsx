import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function EquipmentInfrastructurePage() {
  return (
    <div className="font-sans">
      <Helmet>
        <title>Mushroom Farm Infrastructure & Insulation | Organic Mushroom Farm</title>
        <meta name="description" content="Discover why proper infrastructure and PUF insulation panels are essential for a commercial organic mushroom farm. Maximize yield and reduce energy costs." />
        <link rel="canonical" href="https://organicmushroomsfarm.com/equipment/infrastructure-and-insulation" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-20 mt-16">
        <div className="mb-8">
          <Link to="/equipment" className="text-primary-start hover:underline mb-4 inline-block text-sm font-semibold">
            &larr; Back to Equipment
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Mushroom Farm <span className="gradient-text">Infrastructure & Insulation</span>
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            Mushroom cultivation is a delicate science where precise climate control is everything. Whether you are setting up a commercial organic mushroom farm or building an experimental growing room, having the right infrastructure is non-negotiable. Proper insulation ensures that your temperature and humidity remain stable, reducing energy costs and maximizing your crop yield.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Why Premium PUF Insulation Panels are Essential</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Polyurethane Foam (PUF) panels are the gold standard for mushroom growing rooms. They offer superior thermal resistance, ensuring your HVAC and cooling systems don't have to overwork to maintain the perfect environment.
          </p>
          <ul className="space-y-4 text-slate-700 dark:text-slate-300">
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Maximum Energy Efficiency:</strong> High-density PUF panels lock in the cold air, drastically lowering electricity bills for commercial setups.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Complete Moisture Resistance:</strong> Mushroom rooms require 80% to 90% humidity. PUF panels prevent wall condensation and structural mold damage.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Long-lasting Durability:</strong> Unlike basic thermocol, structural PUF panels provide a robust, cleanable framework that lasts for years.</div>
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Components of a Complete Growing Room</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Building durable, energy-efficient mushroom growing rooms requires more than just four walls. Integrating the right structural materials is vital for a seamless setup, especially if you plan to demonstrate professional techniques in <Link to="/training" className="text-primary-start hover:underline font-medium">online training courses</Link> or scale your operations.
          </p>
          <ul className="space-y-4 text-slate-700 dark:text-slate-300">
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Heavy-Duty Vapor Barriers:</strong> Essential to prevent moisture from seeping into the structural joints and compromising insulation.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Epoxy Coated Floors:</strong> Easy to sanitize, preventing bacterial buildup and contamination between flushes.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Sealed Insulated Doors:</strong> Equipped with heavy-duty rubber gaskets to maintain optimal climate retention and prevent air leaks.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Controlled Exhaust & Intake:</strong> Strategically placed fresh air vents for proper CO2 management, especially crucial for button mushrooms.</div>
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Setting Up for Optimal Climate Retention</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            To get the absolute best results from your harvest, your farm infrastructure must perfectly support your climate control systems.
          </p>
          <ul className="space-y-4 text-slate-700 dark:text-slate-300">
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Seal Every Gap:</strong> Even a millimeter-wide leak can disrupt your carefully managed humidity levels. Use high-grade silicone sealants on every joint.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Select the Right Panel Thickness:</strong> Choose 60mm to 100mm PUF panels depending on your local climate's extreme temperatures.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-start font-bold mt-1">✓</span>
              <div><strong className="text-slate-900 dark:text-white">Smart Sensor Placement:</strong> Position your temperature and CO2 sensors away from direct airflow to ensure accurate environmental readings.</div>
            </li>
          </ul>
        </section>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
          <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">Pro Tip:</span> Invest in farm infrastructure from day one. It pays off by creating the perfect, stable microclimate, ensuring consistent and high-quality flushes year-round. Consult with our experts to get started.
          </p>
        </div>
      </main>
    </div>
  );
}
