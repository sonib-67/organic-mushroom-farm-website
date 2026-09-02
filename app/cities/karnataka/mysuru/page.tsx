import { Metadata } from 'next';
import { MysuruKarnatakaPageContent } from '../../../components/cities/MysuruKarnatakaPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming in Mysuru: Harnessing Heritage, Climate & Demand | Organic Mushrooms Farm',
  description:
    'Discover why Mysuru is uniquely positioned to become a major hub for highly profitable, space-efficient commercial mushroom farming in Karnataka.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/cities/karnataka/mysuru',
  },
  openGraph: {
    title: 'Mushroom Farming in Mysuru: Harnessing Heritage, Climate & Demand in Karnataka',
    description:
      'Discover why Mysuru is uniquely positioned to become a major hub for highly profitable, space-efficient commercial mushroom farming in Karnataka.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/cities/karnataka/mysuru',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Commercial Mushroom Farming in Mysuru Karnataka',
      },
    ],
  },
};

export default function MysuruKarnatakaPage() {
  return <MysuruKarnatakaPageContent />;
}
