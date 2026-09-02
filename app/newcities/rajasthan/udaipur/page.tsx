import { Metadata } from 'next';
import { UdaipurRajasthanPageContent } from '../../../components/cities/UdaipurRajasthanPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming in Udaipur, Rajasthan: Royal Opportunity (Preview)',
  description:
    'Discover why Udaipur is the perfect place to start your commercial mushroom cultivation journey, from the Aravalli climate advantage to a massive hospitality market.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Mushroom Farming in Udaipur, Rajasthan: Royal Opportunity (Preview)',
    description:
      'Discover why Udaipur is the perfect place to start your commercial mushroom cultivation journey, from the Aravalli climate advantage to a massive hospitality market.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newcities/rajasthan/udaipur',
  },
};

export default function NewUdaipurRajasthanPage() {
  return <UdaipurRajasthanPageContent />;
}
