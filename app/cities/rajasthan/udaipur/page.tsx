import { Metadata } from 'next';
import { UdaipurRajasthanPageContent } from '../../../components/cities/UdaipurRajasthanPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming in Udaipur, Rajasthan: Setup & Supply | Organic Mushrooms Farm',
  description:
    'Discover why Udaipur is the perfect place to start your commercial mushroom cultivation journey, from the Aravalli climate advantage to a massive hospitality market.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/cities/rajasthan/udaipur',
  },
  openGraph: {
    title: 'Mushroom Farming in Udaipur, Rajasthan: Setup & Supply',
    description:
      'Discover why Udaipur is the perfect place to start your commercial mushroom cultivation journey, from the Aravalli climate advantage to a massive hospitality market.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/cities/rajasthan/udaipur',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Commercial Mushroom Farming in Udaipur Rajasthan',
      },
    ],
  },
};

export default function UdaipurRajasthanPage() {
  return <UdaipurRajasthanPageContent />;
}
