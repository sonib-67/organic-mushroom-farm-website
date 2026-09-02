import { Metadata } from 'next';
import { BikanerRajasthanPageContent } from '../../../components/regional/BikanerRajasthanPageContent';

export const metadata: Metadata = {
  title: 'Transforming the Desert: Mushroom Farming in Bikaner, Rajasthan | Setup & Training',
  description:
    'Discover how progressive farmers in Bikaner are turning to highly profitable, climate-proof indoor mushroom farming in the arid Thar desert with low water consumption and high returns.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/cities/rajasthan/bikaner',
  },
  openGraph: {
    title: 'Transforming the Desert: Commercial Mushroom Farming in Bikaner, Rajasthan',
    description:
      'Discover how progressive farmers in Bikaner are turning to highly profitable, climate-proof indoor mushroom farming in the arid Thar desert.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/cities/rajasthan/bikaner',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Commercial Mushroom Farming in Bikaner Rajasthan',
      },
    ],
  },
};

export default function CitiesBikanerRajasthanPage() {
  return <BikanerRajasthanPageContent />;
}
