import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D Commercial Mushroom Farm Setup & Interactive Machinery Viewer',
  description:
    'Explore an interactive 3D digital twin of a large commercial mushroom farm. Inspect Dutch shelving racks, AHU climate control, autoclave cleanrooms, industrial boilers, and all 14 equipment departments with 360° rotation and X-Ray view.',
  openGraph: {
    title: '3D Commercial Mushroom Farm Setup & Interactive Machinery Viewer',
    description:
      'Explore an interactive 3D digital twin of a large commercial mushroom farm with X-Ray view, Dutch shelving, and 14 machinery departments.',
  },
};

export default function FarmSetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
