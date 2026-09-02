import { Metadata } from 'next';
import { TurnkeyCommercialSetupContent } from '../../components/blog/TurnkeyCommercialSetupContent';

export const metadata: Metadata = {
  title: 'Why Smart Investors Choose Turnkey Setups Over DIY Commercial Mushroom Farms (Preview)',
  description:
    'Discover why a Turnkey Commercial Mushroom Farm Setup is the smartest strategy to protect your capital, eliminate contamination risks, and guarantee high yields.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Why Smart Investors Choose Turnkey Setups Over DIY Commercial Mushroom Farms (Preview)',
    description:
      'Discover why a Turnkey Commercial Mushroom Farm Setup is the smartest strategy to protect your capital, eliminate contamination risks, and guarantee high yields.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newblog/turnkey-commercial-setup',
  },
};

export default function NewTurnkeyCommercialSetupPage() {
  return <TurnkeyCommercialSetupContent />;
}
