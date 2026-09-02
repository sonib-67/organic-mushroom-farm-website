import { Metadata } from 'next';
import { ProjectSpecsPageContent } from '../components/project-specs/ProjectSpecsPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farm Technical Project Specs & Blueprints | Preview',
  description:
    'Detailed technical specifications and engineering blueprints for commercial mushroom farms in India. High-density PUF insulation, precision HVAC AHU, 6-tier GI racking, and Phase-II composting tunnels.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'The Blueprint of a High-Yield Mushroom Farm: Technical Project Specs',
    description:
      'Discover why precision engineering and technical project specifications are the secret to a highly profitable, industrial-scale mushroom farming business.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newproject-specs',
  },
};

export default function NewProjectSpecsPage() {
  return <ProjectSpecsPageContent />;
}
