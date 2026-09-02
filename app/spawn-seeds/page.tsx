import { Metadata } from 'next';
import { SpawnSeedPageContent } from '../components/spawn/SpawnSeedPageContent';

export const metadata: Metadata = {
  title: 'Buy Premium Mushroom Spawn (Seed) India | Lab-Certified F1 Master Cultures',
  description:
    'Order high-yielding, contamination-free F1 mushroom spawn (seeds) for Button, Oyster, Milky, Shiitake, and medicinal varieties. 100% pure lab culture, Pan-India express delivery, and wholesale bulk farm pricing.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/spawn-seeds',
  },
  openGraph: {
    title: 'Buy Premium Mushroom Spawn (Seed) Online | Organic Mushrooms Farm',
    description:
      'The foundation of every great harvest starts with genetic vigor. Get lab-tested F1 hybrid spawn for Button, Oyster, and Milky mushrooms with express cold-chain delivery.',
    url: 'https://organicmushroomsfarm.com/spawn-seeds',
    type: 'website',
  },
};

export default function SpawnSeedsPage() {
  return <SpawnSeedPageContent />;
}
