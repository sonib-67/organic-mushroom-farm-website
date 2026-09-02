import { Metadata } from 'next';
import { SiliguriWestBengalPageContent } from '../../../components/cities/SiliguriWestBengalPageContent';

export const metadata: Metadata = {
  title: 'Why Siliguri is the Ultimate Strategic Hub for Mushroom Farming in West Bengal | Organic Mushrooms Farm',
  description:
    'Discover why Siliguri is the perfect location for your mushroom farm, offering a high-profit, low-space business model with an unparalleled strategic advantage in North Bengal.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/cities/west-bengal/siliguri',
  },
  openGraph: {
    title: 'Why Siliguri is the Ultimate Strategic Hub for Mushroom Farming in West Bengal',
    description:
      'Discover why Siliguri is the perfect location for your mushroom farm, offering a high-profit, low-space business model with an unparalleled strategic advantage in North Bengal.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/cities/west-bengal/siliguri',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Commercial Mushroom Farming in Siliguri West Bengal',
      },
    ],
  },
};

export default function SiliguriWestBengalPage() {
  return <SiliguriWestBengalPageContent />;
}
