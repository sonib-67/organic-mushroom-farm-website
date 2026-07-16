import fs from 'fs';
import path from 'path';

function getAppRoutes(): string[] {
  const content = fs.readFileSync(path.resolve('./src/App.tsx'), 'utf-8');
  const routeRegex = /<Route\s+path="([^"]+)"/g;
  let match;
  const routes: string[] = [];
  while ((match = routeRegex.exec(content)) !== null) {
    if (match[1] !== '*' && match[1] !== '/') {
      routes.push(match[1]);
    }
  }
  return routes;
}

function extractMatches(filePath: string, regex: RegExp): string[] {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  let match;
  const matches: string[] = [];
  while ((match = regex.exec(content)) !== null) {
    matches.push(match[1]);
  }
  return [...new Set(matches)];
}

const allPaths = new Set<string>();
const staticPaths = getAppRoutes();

const servicesIds = extractMatches(path.resolve('./src/data/services.ts'), /id:\s*'([^']+)'/g);
const processesIds = extractMatches(path.resolve('./src/data/processes.ts'), /id:\s*'([^']+)'/g);
const successStoryIds = extractMatches(path.resolve('./src/pages/ProjectSpecs.tsx'), /"([^"]+)":\s*{\s*name:/g);
const mushroomTypesSlugs = extractMatches(path.resolve('./src/data/mushroomDetailData.ts'), /slug:\s*"([^"]+)"/g);
const blogIds = extractMatches(path.resolve('./src/pages/ArticlePage.tsx'), /"(\d+)":\s*{/g);
const jabalpurSlugs = extractMatches(path.resolve('./src/data/jabalpurBlogsData.ts'), /slug:\s*"([^"]+)"/g);
const puneSlugs = extractMatches(path.resolve('./src/data/puneBlogsData.ts'), /slug:\s*"([^"]+)"/g);

allPaths.add(''); // home

for (const p of staticPaths) {
  if (p.includes(':')) {
    if (p === '/services/:id') servicesIds.forEach(id => allPaths.add(`/services/${id}`));
    else if (p === '/process/:id') processesIds.forEach(id => allPaths.add(`/process/${id}`));
    else if (p === '/success-story/:id') successStoryIds.forEach(id => allPaths.add(`/success-story/${id}`));
    else if (p === '/mushroom-types/:slug') mushroomTypesSlugs.forEach(slug => allPaths.add(`/mushroom-types/${slug}`));
    else if (p === '/blog/:id') blogIds.forEach(id => allPaths.add(`/blog/${id}`));
    else if (p === '/locations/jabalpur/:slug') jabalpurSlugs.forEach(slug => allPaths.add(`/locations/jabalpur/${slug}`));
    else if (p === '/locations/pune/:slug') puneSlugs.forEach(slug => allPaths.add(`/locations/pune/${slug}`));
  } else {
    allPaths.add(p);
  }
}

// Write to sitemap
const dateInfo = new Date().toISOString();
let mainXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const urlPath of allPaths) {
  let priority = "0.80";
  let changefreq = "monthly";
  
  if (urlPath === '') { priority = "1.00"; changefreq = "daily"; }
  else if (urlPath.startsWith('/locations/')) { priority = "1.00"; changefreq = "daily"; }
  else if (urlPath.startsWith('/articles/')) { priority = "1.00"; changefreq = "daily"; }
  else if (urlPath.startsWith('/states')) { priority = "1.00"; changefreq = "daily"; }
  else if (urlPath.startsWith('/cities')) { priority = "1.00"; changefreq = "daily"; }
  else if (urlPath.startsWith('/mushroom-types')) { priority = "0.90"; }
  else if (urlPath.startsWith('/services') || urlPath.startsWith('/process')) { priority = "0.90"; }

  mainXml += `  <url>
    <loc>https://organicmushroomfarm.shop${urlPath}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

mainXml += `</urlset>`;

fs.writeFileSync(path.resolve('./public/sitemap-main.xml'), mainXml, 'utf8');

const distDir = path.resolve('./dist');
if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap-main.xml'), mainXml, 'utf8');
}

console.log(`Total URLs found and added to sitemap: ${allPaths.size}`);

let indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://organicmushroomfarm.shop/sitemap-main.xml</loc>
  </sitemap>
</sitemapindex>`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), indexXml, 'utf8');
fs.writeFileSync(path.resolve('./sitemap.xml'), indexXml, 'utf8');
if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), indexXml, 'utf8');
}

function prerenderTurnkeyProjects() {
  const distDir = path.resolve('./dist');
  if (!fs.existsSync(distDir)) return;

  const turnkeyDir = path.join(distDir, 'turnkey-projects');
  if (!fs.existsSync(turnkeyDir)) {
    fs.mkdirSync(turnkeyDir, { recursive: true });
  }

  const assetsDir = path.join(distDir, 'assets');
  let jsFile = 'index-pYnno5N1.js';
  let cssFile = 'index-CVvtLoTi.css';

  if (fs.existsSync(assetsDir)) {
    const assets = fs.readdirSync(assetsDir);
    const foundJs = assets.find(f => f.startsWith('index-') && f.endsWith('.js'));
    const foundCss = assets.find(f => f.startsWith('index-') && f.endsWith('.css'));
    if (foundJs) jsFile = foundJs;
    if (foundCss) cssFile = foundCss;
  }

  const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <script>
      window.addEventListener('error', function(e) {
        if (e.message === 'Script error.' || (e.filename && !e.filename.includes(window.location.host))) {
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      }, true);
    </script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Turnkey Mushroom Farm Projects & Case Studies | Organic Mushroom Farm</title>
    <link rel="canonical" href="https://organicmushroomfarm.shop/turnkey-projects" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" as="style" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" media="print" onload="this.media='all'" />
    <noscript>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" />
    </noscript>

    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T6PD72F4');</script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQ7XCLKDW6"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-DQ7XCLKDW6');
      gtag('config', 'AW-11268929095');
    </script>

    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '925374987123460');
    fbq('track', 'PageView');

    (function() {
      var scriptLoaded = false;
      function loadDeferredScripts() {
        if (scriptLoaded) return;
        scriptLoaded = true;

        var t = document.createElement('script');
        t.async = true;
        t.src = 'https://connect.facebook.net/en_US/fbevents.js';
        var s = document.getElementsByTagName('script')[0];
        if (s && s.parentNode) {
          s.parentNode.insertBefore(t, s);
        } else {
          document.head.appendChild(t);
        }

        cleanupListeners();
      }

      function cleanupListeners() {
        window.removeEventListener('scroll', loadDeferredScripts);
        window.removeEventListener('mousemove', loadDeferredScripts);
        window.removeEventListener('touchstart', loadDeferredScripts);
        window.removeEventListener('click', loadDeferredScripts);
        window.removeEventListener('keydown', loadDeferredScripts);
      }

      window.addEventListener('load', function() {
        setTimeout(loadDeferredScripts, 2500);
      });

      window.addEventListener('scroll', loadDeferredScripts, { passive: true });
      window.addEventListener('mousemove', loadDeferredScripts, { passive: true });
      window.addEventListener('touchstart', loadDeferredScripts, { passive: true });
      window.addEventListener('click', loadDeferredScripts, { passive: true });
      window.addEventListener('keydown', loadDeferredScripts, { passive: true });
    })();
    </script>
    <script src="https://analytics.ahrefs.com/analytics.js" data-key="1AeC4dCToDOOlFFul5svgA" async></script>
    <meta name="ahrefs-site-verification" content="d48267d7b8ee00a28f8051d5992c2cfd9373b8971e22a50f65b1829eae808130">

    <meta name="google-site-verification" content="520546c7ef1f49ea" />
    <meta name="google-site-verification" content="T08GKq12QZ4luzcstvFZsBt2z44RJf3TL5TSuWnUS_Q" />
    <meta name="google-site-verification" content="Ca2ApiBcsYgNBj1_2r78MpVoymOH90MvqxDh1dMDVPY" />

    <meta name="msvalidate.01" content="C2D1783AC6AE837F8BE7F263E322C2B8" />

    <meta name="description" content="Turnkey mushroom farm projects by Organic Mushroom Farm — insulated grow rooms, compost & pasteurisation units, spawn lab setup, DPR & subsidy support. Pan-India installations from Jabalpur, Madhya Pradesh." />
    <meta name="keywords" content="turnkey mushroom farm project, mushroom farm setup India, mushroom grow room construction, mushroom compost unit, mushroom pasteurisation tunnel, mushroom farm case study, mushroom project cost, mushroom farm Jabalpur, mushroom farm EPC contractor, button mushroom farm setup, oyster mushroom farm setup, mushroom farm subsidy project, commercial mushroom setup, turnkey mushroom business setup, automated mushroom farm setup, mushroom plant turnkey setup, complete mushroom cultivation setup, turnkey farming solutions" />
    <meta name="author" content="Organic Mushroom Farm" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    <meta name="revisit-after" content="7 days" />
    <meta name="rating" content="general" />
    <meta name="language" content="English" />
    <meta name="category" content="Agriculture, Mushroom Farming, Turnkey Projects" />

    <meta name="geo.region" content="IN-MP" />
    <meta name="geo.placename" content="Pan India - Madhya Pradesh, Delhi, Maharashtra, Karnataka, Tamil Nadu, Telangana, Gujarat, Rajasthan, Uttar Pradesh, Bihar, West Bengal, Punjab, Haryana, Kerala, Andhra Pradesh, Odisha, Chhattisgarh, Jharkhand, Uttarakhand, Himachal Pradesh, Assam, Goa, Jammu and Kashmir, Ladakh" />
    <meta name="geo.position" content="23.1815;79.9864" />
    <meta name="ICBM" content="23.1815, 79.9864" />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content="Organic Mushroom Farm" />
    <meta property="og:title" content="Turnkey Mushroom Farm Projects & Case Studies | Organic Mushroom Farm" />
    <meta property="og:description" content="See turnkey mushroom farm projects delivered by Organic Mushroom Farm — grow rooms, compost units, spawn lab & full EPC setup, Pan-India." />
    <meta property="og:url" content="https://organicmushroomfarm.shop/turnkey-projects" />
    <meta property="og:image" content="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Organic Mushroom Farm - Turnkey Projects" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@OrganicMushroomFarm" />
    <meta name="twitter:creator" content="@OrganicMushroomFarm" />
    <meta name="twitter:title" content="Turnkey Mushroom Farm Projects & Case Studies" />
    <meta name="twitter:description" content="Grow rooms, compost units, spawn lab & full EPC turnkey mushroom farm setup — Pan-India delivery from Jabalpur, MP." />
    <meta name="twitter:image" content="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />
    <meta name="twitter:image:alt" content="Organic Mushroom Farm" />

    <link rel="icon" type="image/png" href="https://res.cloudinary.com/dtpktdkqw/image/upload/w_32,h_32/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />
    <link rel="apple-touch-icon" href="https://res.cloudinary.com/dtpktdkqw/image/upload/w_180,h_180/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />

    <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomfarm.shop/turnkey-projects#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://organicmushroomfarm.shop"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Turnkey Projects",
          "item": "https://organicmushroomfarm.shop/turnkey-projects"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://organicmushroomfarm.shop/turnkey-projects#service",
      "name": "Turnkey Mushroom Farm Project Setup",
      "serviceType": "Turnkey Mushroom Farm EPC & Installation",
      "description": "End-to-end turnkey mushroom farm projects including insulated grow rooms, compost & pasteurisation units, spawn lab setup, DPR preparation and subsidy assistance.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Organic Mushroom Farm",
        "legalName": "Agrimotion Engineering Private Limited",
        "url": "https://organicmushroomfarm.shop/",
        "telephone": "+919203544140",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Naka Katangi",
          "addressLocality": "Jabalpur",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "483105",
          "addressCountry": "IN"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "25"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Verified Customer"
        }
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://organicmushroomfarm.shop/turnkey-projects"
      }
    }
  ]
}
    </script>

    <script type="module" crossorigin src="/assets/${jsFile}"></script>
    <link rel="stylesheet" crossorigin href="/assets/${cssFile}">
  </head>

  <body>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6PD72F4"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <div id="root">
      <header style="display: none;">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/training">Mushroom Training</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/spawn-seed">Mushroom Spawn (Seed)</a></li>
            <li><a href="/turnkey-projects">Turnkey Projects</a></li>
            <li><a href="/roi-calculator">ROI Calculator</a></li>
            <li><a href="/business-plan">Business Plan</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main style="display: none;">
        <article>
          <nav aria-label="breadcrumb">
            <a href="/">Home</a> &gt; <span>Turnkey Projects</span>
          </nav>

          <h1>Turnkey Mushroom Farm Projects & Case Studies</h1>
          <p>Explore turnkey mushroom farm projects delivered by <strong>Organic Mushroom Farm</strong> (Agrimotion Engineering Pvt. Ltd.), based in <strong>Katangi Road, Jabalpur, Madhya Pradesh, India (482002)</strong>. From single grow rooms to full commercial compost-to-harvest facilities, our engineering team designs and installs complete mushroom production units across India.</p>

          <h2>What We Deliver</h2>
          <ul>
            <li><strong>Insulated Grow Rooms</strong> — PUF-panel insulated rooms with multi-tier rack systems, sized from small hobby units to industrial multi-ton capacity.</li>
            <li><strong>Compost & Pasteurisation Units</strong> — Phase-1 composting bunkers and Phase-2 pasteurisation tunnels for consistent, contamination-free substrate.</li>
            <li><strong>Spawn Lab Setup</strong> — HEPA-filtered, negative-pressure culture labs for producing certified G1 mother-strain spawn.</li>
            <li><strong>Climate Control Systems</strong> — Daikin refrigeration, forced-air ventilation, micro-mist humidification and automated CO2 exhaust dampers.</li>
            <li><strong>DPR & Subsidy Assistance</strong> — Detailed Project Reports for bank loans plus guidance on NHB, RKVY and NABARD capital subsidy schemes.</li>
            <li><strong>Post-Setup Support</strong> — VIP WhatsApp support, troubleshooting and marketing/B2B linkage assistance after commissioning.</li>
          </ul>

          <h2>Project Scale Options</h2>
          <p>Projects range from low-investment starter units (bamboo or single insulated room, roughly ₹10,000–₹15,000) up to fully automated industrial button-mushroom facilities with multi-ton daily capacity, pasteurisation tunnels and climate-insulated growth sections.</p>

          <h2>Get a Project Quote</h2>
          <p>Call or WhatsApp our team to discuss your turnkey mushroom farm project:</p>
          <p>
            <a href="tel:+919203544140">+91 9203544140</a> ·
            <a href="https://wa.me/919203544140">WhatsApp +91 9203544140</a> ·
            <a href="mailto:support@mushroomtraining.online">support@mushroomtraining.online</a>
          </p>
        </article>
      </main>
      <footer style="display: none;">
        <p>© 2026 Organic Mushroom Farm (Agrimotion Engineering Pvt. Ltd.). All Rights Reserved. Katangi Road, Jabalpur, Madhya Pradesh, India, 482002.</p>
        <p>Helpline: <a href="tel:+919203544140">+91 9203544140</a> | WhatsApp: <a href="https://wa.me/919203544140">+91 9203544140</a> | Email: <a href="mailto:support@mushroomtraining.online">support@mushroomtraining.online</a></p>
        <nav>
          <a href="/about">About Us</a> |
          <a href="/contact">Contact Support</a> |
          <a href="/privacy">Privacy Policy</a> |
          <a href="/refund-policy">Refund Policy</a> |
          <a href="/shipping-policy">Shipping & G1 Spawn Transport Policy</a> |
          <a href="/support">Customer Support & Helpline</a> |
          <a href="/terms">Terms of Service</a>
        </nav>
      </footer>
    </div>
  </body>
</html>`;

  fs.writeFileSync(path.join(turnkeyDir, 'index.html'), htmlContent, 'utf8');
  console.log(`Successfully prerendered /turnkey-projects page at ${path.join(turnkeyDir, 'index.html')}`);
}

prerenderTurnkeyProjects();
