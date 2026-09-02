import { Metadata } from 'next';
import { SiliguriWestBengalPageContent } from '../../../components/cities/SiliguriWestBengalPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming in Siliguri, West Bengal: Setup & Tourism Hub (Preview)',
  description:
    'Discover why Siliguri is the ultimate strategic hub for high-profit commercial mushroom farming in West Bengal, connecting Darjeeling and Sikkim.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Mushroom Farming in Siliguri, West Bengal: Setup & Tourism Hub (Preview)',
    description:
      'Discover why Siliguri is the ultimate strategic hub for high-profit commercial mushroom farming in West Bengal, connecting Darjeeling and Sikkim.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newcities/west-bengal/siliguri',
  },
};

export default function NewSiliguriWestBengalPage() {
  return <SiliguriWestBengalPageContent />;
}
