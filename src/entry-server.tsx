import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from './App';
import { SEOContext } from './SEOContext';

export function render(url: string) {
  let seoData = null;
  const setSEO = (data: any) => { seoData = data; };
  const helmetContext = {};
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <SEOContext.Provider value={setSEO}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </SEOContext.Provider>
        <SpeedInsights />
      </HelmetProvider>
    </React.StrictMode>
  );
  
  return { html, seoData, helmetContext };
}
