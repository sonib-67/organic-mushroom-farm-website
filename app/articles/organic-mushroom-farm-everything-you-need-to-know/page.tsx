import { Metadata } from 'next';
import { OrganicMushroomFarmGuideContent } from '../../components/articles/OrganicMushroomFarmGuideContent';

export const metadata: Metadata = {
  title: 'Organic Mushroom Farm: Everything You Need to Know | Ultimate Guide',
  description:
    'Discover everything about organic mushroom farming in India. Learn about cultivation, health benefits, spawn sourcing, and government subsidies.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/articles/organic-mushroom-farm-everything-you-need-to-know',
  },
  openGraph: {
    title: 'Organic Mushroom Farm: Everything You Need to Know | Ultimate Guide',
    description:
      'Discover everything about organic mushroom farming in India. Learn about cultivation, health benefits, spawn sourcing, and government subsidies.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/articles/organic-mushroom-farm-everything-you-need-to-know',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Organic Mushroom Farm Guide',
      },
    ],
  },
};

export default function OrganicMushroomFarmGuidePage() {
  return <OrganicMushroomFarmGuideContent />;
}
