import { Metadata } from 'next';
import { BusinessPlanContent } from '../../components/business-plan/BusinessPlanContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming Business Plan India | Cost, Profit & Startup Blueprint',
  description:
    'Complete 2026 commercial guide to starting a profitable mushroom farming business in India. Setup costs, high-yield varieties, vertical farming economics, 40%+ profit margins, government subsidies, and proven marketing strategies.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/blog/mushroom-farming-business-plan-india',
  },
  openGraph: {
    title: 'Mushroom Farming Business Plan India | Cost, Profit & Startup Blueprint',
    description:
      'Step-by-step business plan for starting a profitable mushroom farm in India. Infrastructure, spawn sourcing, subsidies, and ROI analysis.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/blog/mushroom-farming-business-plan-india',
  },
};

export default function BlogMushroomFarmingBusinessPlanIndiaPage() {
  return <BusinessPlanContent />;
}
