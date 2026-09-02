import { Metadata } from 'next';
import { DisclaimerPageContent } from '../components/legal/DisclaimerPageContent';

export const metadata: Metadata = {
  title: 'Disclaimer & Transparency Policy (Preview) | Organic Mushrooms Farm',
  description:
    'Read our Disclaimer & Transparency Policy. We believe in complete honesty, scientific integrity, and ethical transparency with our community of mushroom growers.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Disclaimer & Transparency Policy (Preview)',
    description:
      'Read our Disclaimer & Transparency Policy. We believe in complete honesty, scientific integrity, and ethical transparency with our community of mushroom growers.',
    type: 'website',
    url: 'https://organicmushroomsfarm.com/newdisclaimer',
  },
};

export default function NewDisclaimerPage() {
  return <DisclaimerPageContent />;
}
