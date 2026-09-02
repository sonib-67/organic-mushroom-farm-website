import { Metadata } from 'next';
import { WhiteButtonMushroomBusinessPlanContent } from '../../components/articles/WhiteButtonMushroomBusinessPlanContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming Business Plan India | Cost, Profit & Startup Guide',
  description:
    'Learn how to start a profitable mushroom farming business in India. A step-by-step business plan, setup costs, marketing strategy, and ROI analysis.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/articles/white-button-mushroom-business-plan',
  },
  openGraph: {
    title: 'Mushroom Farming Business Plan India | Cost, Profit & Startup Guide',
    description:
      'Learn how to start a profitable mushroom farming business in India. A step-by-step business plan, setup costs, marketing strategy, and ROI analysis.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/articles/white-button-mushroom-business-plan',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Mushroom Farming Business Plan',
      },
    ],
  },
};

export default function WhiteButtonMushroomBusinessPlanPage() {
  return <WhiteButtonMushroomBusinessPlanContent />;
}
