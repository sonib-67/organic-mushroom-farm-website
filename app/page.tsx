import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import MyceliumBackground from './components/MyceliumBackground';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';

import Hero from './components/home/Hero';
import EcosystemFlow from './components/home/EcosystemFlow';
import WhyChooseUs from './components/home/WhyChooseUs';
import FarmingModels from './components/home/FarmingModels';
import MushroomComparison from './components/home/MushroomComparison';
import ROICalculator from './components/home/ROICalculator';
import CriticalParameters from './components/home/CriticalParameters';
import ProductionSOP from './components/home/ProductionSOP';
import CompostUnits from './components/home/CompostUnits';
import Testimonials from './components/home/Testimonials';
import Marketplace from './components/home/Marketplace';
import ResourcesSection from './components/home/ResourcesSection';
import MushroomSEOSections from './components/home/MushroomSEOSections';
import ComparisonTable from './components/home/ComparisonTable';
import StatesSection from './components/home/StatesSection';
import CTASection from './components/home/CTASection';
import { generateGlobalFAQSchema, generateGlobalProductsSchema, generateGlobalServiceSchema } from '../src/utils/seoSchemas';

export const metadata: Metadata = {
  title: 'Organic Mushrooms Farm | Setup, Spawn & Training',
  description:
    'Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/',
  },
  openGraph: {
    title: 'Organic Mushrooms Farm | Setup, Spawn & Training',
    description: 'Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.',
    url: 'https://organicmushroomsfarm.com/',
    siteName: 'Organic Mushrooms Farm',
    images: [
      {
        url: 'https://organicmushroomsfarm.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organic Mushrooms Farm | Setup, Spawn & Training',
    description: 'Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.',
    images: ['https://organicmushroomsfarm.com/og-image.jpg'],
  },
};

export default function HomePage() {
  const schemas = [
    generateGlobalFAQSchema(),
    generateGlobalProductsSchema(),
    generateGlobalServiceSchema(),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <MyceliumBackground />
      <Navbar />
      <main className="pt-24 min-h-screen relative z-10">
        <Hero />
        <EcosystemFlow />
        <WhyChooseUs />
        <FarmingModels />
        <MushroomComparison />
        <ROICalculator />
        <CriticalParameters />
        <ProductionSOP />
        <CompostUnits />
        <Testimonials />
        <Marketplace />
        <ResourcesSection />
        <MushroomSEOSections />
        <ComparisonTable />
        <StatesSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
