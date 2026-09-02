import { Metadata } from 'next';
import { OysterMushroomPageContent } from '../../components/services/OysterMushroomPageContent';

export const metadata: Metadata = {
  title: 'Why Oyster Mushrooms Are Taking the World by Storm | Organic Mushrooms Farm',
  description:
    'Discover the nutritional power, fast 25-day harvest cycles, and cultivation benefits of oyster mushrooms (Dhingri). Training, F1 spawn, and setup guidance.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ServicesOysterMushroomPage() {
  return <OysterMushroomPageContent />;
}
