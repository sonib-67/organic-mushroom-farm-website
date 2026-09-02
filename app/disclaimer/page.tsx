import { Metadata } from 'next';
import { DisclaimerPageContent } from '../components/legal/DisclaimerPageContent';

export const metadata: Metadata = {
  title: 'Disclaimer & Transparency Policy | Organic Mushrooms Farm',
  description:
    'Read our Disclaimer & Transparency Policy. We believe in complete honesty, scientific integrity, and ethical transparency with our community of mushroom growers and agro-entrepreneurs.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer & Transparency Policy | Organic Mushrooms Farm',
    description:
      'Read our Disclaimer & Transparency Policy. We believe in complete honesty, scientific integrity, and ethical transparency with our community of mushroom growers.',
    type: 'website',
    url: 'https://organicmushroomsfarm.com/disclaimer',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Disclaimer & Transparency Policy Organic Mushrooms Farm',
      },
    ],
  },
};

export default function DisclaimerPage() {
  return <DisclaimerPageContent />;
}
