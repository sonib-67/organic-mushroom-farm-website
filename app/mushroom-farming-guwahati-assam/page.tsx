import { Metadata } from 'next';
import { GuwahatiAssamPageContent } from '../components/cities/GuwahatiAssamPageContent';

export const metadata: Metadata = {
  title: 'Commercial Mushroom Farming in Guwahati, Assam | Organic Mushrooms Farm',
  description:
    'Discover why Guwahati is the perfect launchpad for a high-return, low-space commercial mushroom farming business in Northeast India.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/mushroom-farming-guwahati-assam',
  },
  openGraph: {
    title: 'Commercial Mushroom Farming in Guwahati, Assam',
    description:
      'Discover why Guwahati is the perfect launchpad for a high-return, low-space commercial mushroom farming business in Northeast India.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/mushroom-farming-guwahati-assam',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Commercial Mushroom Farming in Guwahati Assam',
      },
    ],
  },
};

export default function MushroomFarmingGuwahatiAssamPage() {
  return <GuwahatiAssamPageContent />;
}
