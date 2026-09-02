import { Metadata } from 'next';
import { BikanerRajasthanPageContent } from '../../../components/regional/BikanerRajasthanPageContent';

export const metadata: Metadata = {
  title: 'Transforming the Desert: Mushroom Farming in Bikaner, Rajasthan (Preview)',
  description:
    'Discover how progressive farmers in Bikaner are turning to highly profitable, climate-proof indoor mushroom farming in the arid Thar desert.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Transforming the Desert: Commercial Mushroom Farming in Bikaner, Rajasthan',
    description:
      'Discover how progressive farmers in Bikaner are turning to highly profitable, climate-proof indoor mushroom farming in the arid Thar desert.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newcities/rajasthan/bikaner',
  },
};

export default function NewCitiesBikanerRajasthanPage() {
  return <BikanerRajasthanPageContent />;
}
