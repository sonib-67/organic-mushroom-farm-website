import { Metadata } from 'next';
import { SpawnSeedPageContent } from '../components/spawn/SpawnSeedPageContent';

export const metadata: Metadata = {
  title: 'Premium Mushroom Spawn (Seed) Supplier | High Yield Spawn India | Organic Mushrooms Farm',
  description:
    'Buy high-quality, lab-tested mushroom spawn (seed) for button, oyster, milky, and medicinal mushrooms. High yield, contamination-free with Pan-India express delivery.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewSpawnSeedPage() {
  return <SpawnSeedPageContent />;
}
