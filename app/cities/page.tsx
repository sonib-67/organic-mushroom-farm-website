import { Metadata } from 'next';
import { CitiesIndiaPageContent } from '../components/cities/CitiesIndiaPageContent';

export const metadata: Metadata = {
  title: 'Commercial Mushroom Farming Across India: Setup by City | Organic Mushrooms Farm',
  description:
    'Discover how to build a highly profitable commercial mushroom farm anywhere in India. Regional guides for Rajasthan, Kerala, Karnataka, Maharashtra, UP, WB, Gujarat and more.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/cities',
  },
  openGraph: {
    title: 'Commercial Mushroom Farming Across India: Setup by City',
    description:
      'Discover how to build a highly profitable commercial mushroom farm anywhere in India, adapting to local climates, substrate availability, and urban spaces.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/cities',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Commercial Mushroom Farming Across India - Setup by City',
      },
    ],
  },
};

export default function CitiesPage() {
  return <CitiesIndiaPageContent />;
}
