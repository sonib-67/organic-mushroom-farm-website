import { Metadata } from 'next';
import { MysuruKarnatakaPageContent } from '../../../components/cities/MysuruKarnatakaPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming in Mysuru, Karnataka: Setup & Demand (Preview)',
  description:
    'Discover why Mysuru is uniquely positioned to become a major hub for highly profitable, space-efficient commercial mushroom farming in Karnataka.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Mushroom Farming in Mysuru, Karnataka: Setup & Demand (Preview)',
    description:
      'Discover why Mysuru is uniquely positioned to become a major hub for highly profitable, space-efficient commercial mushroom farming in Karnataka.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newcities/karnataka/mysuru',
  },
};

export default function NewMysuruKarnatakaPage() {
  return <MysuruKarnatakaPageContent />;
}
