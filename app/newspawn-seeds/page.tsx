import { Metadata } from 'next';
import { SpawnSeedPageContent } from '../components/spawn/SpawnSeedPageContent';

export const metadata: Metadata = {
  title: 'Premium Organic Mushroom Spawn & Seeds Supplier | Preview',
  description:
    'Laboratory-grade, contamination-free F1 mushroom spawn (seeds) for Button, Oyster, Milky, Shiitake, and medicinal mushrooms. Pan-India express delivery with 100% genetic purity guarantee.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Premium Organic Mushroom Spawn & Seeds Supplier India',
    description:
      'Order top-grade F1 mushroom spawn (seeds) pan-India. Disease-free, high-yielding hybrid varieties for commercial and home growers.',
    type: 'website',
    url: 'https://organicmushroomsfarm.com/newspawn-seeds',
  },
};

export default function NewSpawnSeedsPage() {
  return <SpawnSeedPageContent />;
}
