import '../index.css';
import NextNavbar from './components/NextNavbar';
import NextFooter from './components/NextFooter';
import NextFloatingButtons from './components/NextFloatingButtons';
import { HelmetProvider } from 'react-helmet-async'; // In case any child uses it

export const metadata = {
  title: 'Organic Mushrooms Farm',
  description: 'Premium organic mushroom spawn, commercial farming training, and setup.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-primary-start/30 selection:dark:text-white min-h-screen">
        {/* We are only importing the Next.js versions of these global layout components */}
        <div className="relative z-10">
          <NextNavbar />
          <main>
            {children}
          </main>
          <NextFooter />
          <NextFloatingButtons />
        </div>
      </body>
    </html>
  );
}
