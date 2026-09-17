import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MyceliumBackground } from "@/components/MyceliumBackground";
import { FloatingWidgetsLayer } from "@/components/FloatingWidgetsLayer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { FloatingBottomMenu } from "@/components/FloatingBottomMenu";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1C1936",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://organicmushroomsfarm.com"),
  title: {
    default: "Organic Mushroom Farm | Mushroom Farming, Training & Spawn",
    template: "%s | Organic Mushroom Farm",
  },
  description: "Organic Mushroom Farm provides mushroom farming training, commercial farm setup guidance and quality mushroom spawn for Button, Oyster and Milky mushroom cultivation.",
  keywords: [
    "mushroom farming training",
    "turnkey mushroom setup",
    "mushroom spawn seed",
    "button mushroom project cost",
    "organic mushroom farm jabalpur",
    "commercial mushroom SOP"
  ],
  authors: [{ name: "Organic Mushrooms Farm Agronomy Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://organicmushroomsfarm.com/",
    title: "Organic Mushroom Farm | Mushroom Farming, Training & Spawn",
    description: "Organic Mushroom Farm provides mushroom farming training, commercial farm setup guidance and quality mushroom spawn for Button, Oyster and Milky mushroom cultivation.",
    siteName: "Organic Mushroom Farm",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
        width: 1200,
        height: 630,
        alt: "Organic Button Mushroom Farm Setup - Organic Mushroom Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Mushroom Farm | Mushroom Farming, Training & Spawn",
    description: "Organic Mushroom Farm provides mushroom farming training, commercial farm setup guidance and quality mushroom spawn for Button, Oyster and Milky mushroom cultivation.",
    images: ["https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png"],
  },
  alternates: {
    canonical: "https://organicmushroomsfarm.com/",
  },
  verification: {
    google: "Ca2ApiBcsYgNBj1_2r78MpVoymOH90MvqxDh1dMDVPY",
    other: {
      "google-adsense-account": "ca-pub-8976157136173429",
      "ahrefs-site-verification": "d48267d7b8ee00a28f8051d5992c2cfd9373b8971e22a50f65b1829eae808130",
      "msvalidate.01": "C2D1783AC6AE837F8BE7F263E322C2B8"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <meta key="520546c7ef1f49ea" name="google-site-verification" content="520546c7ef1f49ea" />
        <meta key="T08GKq12QZ4luzcstvFZsBt2z44RJf3TL5TSuWnUS_Q" name="google-site-verification" content="T08GKq12QZ4luzcstvFZsBt2z44RJf3TL5TSuWnUS_Q" />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T6PD72F4');`}
        </Script>

        {/* Google Analytics 4 & Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQ7XCLKDW6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQ7XCLKDW6', { page_path: window.location.pathname });
            gtag('config', 'AW-11268929095');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8976157136173429"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="1AeC4dCToDOOlFFul5svgA"
          strategy="afterInteractive"
        />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '925374987123460');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6PD72F4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel (noscript fallback) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=925374987123460&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Animated Canvas Background */}
        <MyceliumBackground />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow relative z-10 pt-[84px] md:pt-[96px]">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* ================= FLOATING STACK LAYER ================= */}
        <FloatingWidgetsLayer />

        {/* Right Side: WhatsApp Floating Action */}
        <WhatsAppWidget />

        {/* Bottom Mobile Scrollable Dock (Zero overlap with floating widgets) */}
        <FloatingBottomMenu />
      </body>
    </html>
  );
}
