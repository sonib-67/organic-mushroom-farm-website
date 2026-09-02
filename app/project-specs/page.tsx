import { Metadata } from 'next';
import { ProjectSpecsPageContent } from '../components/project-specs/ProjectSpecsPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farm Technical Project Specs & Blueprints | Organic Mushrooms Farm',
  description:
    'Download and inspect detailed project specifications for commercial mushroom farms in India. Complete civil room blueprints, 80mm PUF insulation, precision HVAC AHU calculations, and 25%-35% NHB subsidy DPR models.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/project-specs',
  },
  openGraph: {
    title: 'The Blueprint of a High-Yield Mushroom Farm: Technical Project Specs',
    description:
      'The secret to a highly profitable, industrial-scale mushroom business lies in precision engineering and detailed project specifications.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/project-specs',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Mushroom Farm Technical Project Specs',
      },
    ],
  },
};

export default function ProjectSpecsPage() {
  return <ProjectSpecsPageContent />;
}
