import { Metadata } from 'next';
import { GuwahatiAssamPageContent } from '../components/cities/GuwahatiAssamPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming in Guwahati, Assam: High-Profit Setup Guide (Preview)',
  description:
    'Discover why Guwahati is the perfect launchpad for a high-return, low-space commercial mushroom farming business in Northeast India.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Mushroom Farming in Guwahati, Assam: High-Profit Setup Guide (Preview)',
    description:
      'Discover why Guwahati is the perfect launchpad for a high-return, low-space commercial mushroom farming business in Northeast India.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newmushroom-farming-guwahati-assam',
  },
};

export default function NewMushroomFarmingGuwahatiAssamPage() {
  return <GuwahatiAssamPageContent />;
}
