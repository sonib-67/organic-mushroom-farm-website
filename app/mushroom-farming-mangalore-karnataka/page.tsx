import { Metadata } from 'next';
import { MangaloreKarnatakaPageContent } from '../components/regional/MangaloreKarnatakaPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming in Mangalore, Karnataka | Setup, Spawn & Training',
  description:
    'Start a profitable commercial mushroom farming business in Mangalore, Dakshina Kannada, Karnataka. Learn about natural coastal humidity advantages, cheap paddy straw substrate, and high-yield Milky & Oyster varieties.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/mushroom-farming-mangalore-karnataka',
  },
  openGraph: {
    title: 'Why Mangalore is the Next Big Hub for Commercial Mushroom Farming in Karnataka',
    description:
      'Discover why coastal Karnataka is the perfect place to start your organic mushroom farm, from climate advantages to skyrocketing local market demand in Mangalore, Udupi & Manipal.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/mushroom-farming-mangalore-karnataka',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Mushroom Farming in Mangalore Karnataka',
      },
    ],
  },
};

export default function MangaloreKarnatakaPage() {
  return <MangaloreKarnatakaPageContent />;
}
