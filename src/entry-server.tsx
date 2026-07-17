import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { SEOContext } from './SEOContext';

export function render(url: string) {
  let seoData = null;
  const setSEO = (data: any) => { seoData = data; };
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <SEOContext.Provider value={setSEO}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SEOContext.Provider>
    </React.StrictMode>
  );
  
  return { html, seoData };
}
