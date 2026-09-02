import { Metadata } from 'next';
import { CitiesIndiaPageContent } from '../components/cities/CitiesIndiaPageContent';

export const metadata: Metadata = {
  title: 'Commercial Mushroom Farming Across India: Setup by City (Preview)',
  description:
    'Discover how to build a highly profitable commercial mushroom farm anywhere in India, adapting to local climates, substrate availability, and urban spaces.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Commercial Mushroom Farming Across India: Setup by City (Preview)',
    description:
      'Discover how to build a highly profitable commercial mushroom farm anywhere in India, adapting to local climates, substrate availability, and urban spaces.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newcities',
  },
};

export default function NewCitiesPage() {
  return <CitiesIndiaPageContent />;
}
