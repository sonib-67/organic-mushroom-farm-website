import { Metadata } from 'next';
import { MangaloreKarnatakaPageContent } from '../components/regional/MangaloreKarnatakaPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming in Mangalore, Karnataka | Regional Guide & Farm Setup Preview',
  description:
    'Start a profitable commercial mushroom farming business in Mangalore, Dakshina Kannada, Karnataka. Learn about natural coastal humidity advantages, cheap paddy straw substrate, and high-yield Milky & Oyster varieties.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Mushroom Farming in Mangalore, Karnataka | Regional Farm Setup & Training',
    description:
      'Why coastal Karnataka is South India\'s next big hub for commercial organic mushroom cultivation. High-yield spawn, farm setup, and B2B market demand in Mangalore & Udupi.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newmushroom-farming-mangalore-karnataka',
  },
};

export default function NewMangaloreKarnatakaPage() {
  return <MangaloreKarnatakaPageContent />;
}
