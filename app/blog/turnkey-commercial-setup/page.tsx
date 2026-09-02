import { Metadata } from 'next';
import { TurnkeyCommercialSetupContent } from '../../components/blog/TurnkeyCommercialSetupContent';

export const metadata: Metadata = {
  title: 'Why Smart Investors Choose Turnkey Setups Over DIY Commercial Mushroom Farms | Organic Mushrooms Farm',
  description:
    'Discover why a Turnkey Commercial Mushroom Farm Setup is the smartest strategy to protect your capital, eliminate contamination risks, and guarantee high yields.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/blog/turnkey-commercial-setup',
  },
  openGraph: {
    title: 'Why Smart Investors Choose Turnkey Setups Over DIY Commercial Mushroom Farms',
    description:
      'Discover why a Turnkey Commercial Mushroom Farm Setup is the smartest strategy to protect your capital, eliminate contamination risks, and guarantee high yields.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/blog/turnkey-commercial-setup',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Turnkey Commercial Mushroom Farm Setup',
      },
    ],
  },
};

export default function TurnkeyCommercialSetupPage() {
  return <TurnkeyCommercialSetupContent />;
}
