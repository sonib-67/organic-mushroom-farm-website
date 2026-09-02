import { Metadata } from 'next';
import { WhiteButtonMushroomBusinessPlanContent } from '../../components/articles/WhiteButtonMushroomBusinessPlanContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming Business Plan India | Cost, Profit & Startup Guide (Preview)',
  description:
    'Learn how to start a profitable mushroom farming business in India. A step-by-step business plan, setup costs, marketing strategy, and ROI analysis.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Mushroom Farming Business Plan India | Cost, Profit & Startup Guide (Preview)',
    description:
      'Learn how to start a profitable mushroom farming business in India. A step-by-step business plan, setup costs, marketing strategy, and ROI analysis.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newarticles/white-button-mushroom-business-plan',
  },
};

export default function NewWhiteButtonMushroomBusinessPlanPage() {
  return <WhiteButtonMushroomBusinessPlanContent />;
}
