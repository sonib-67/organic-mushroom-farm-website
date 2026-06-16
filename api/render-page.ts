import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';
import { parseSEOPathname } from '../src/utils/seoPathParser';
import { generateLocationSEOArticle } from '../src/data/locationSEOContent';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Determine original requested pathname
  const urlObj = new URL(req.url || '/', 'https://organicmushroomfarm.shop');
  const pathname = urlObj.pathname;

  const indexPath = path.join(process.cwd(), 'dist', 'index.html');
  
  fs.readFile(indexPath, 'utf8', (err, html) => {
    if (err) {
      console.error("Error reading index.html in Vercel function:", err);
      // Double fallback: check if we can read it from the local directory or return standard error
      return res.status(500).send("Internal Server Error: Solid index.html asset is cooking or not found. Please redeploy.");
    }

    try {
      const parsed = parseSEOPathname(pathname);
      if (parsed) {
        const { locationSlug, keywordInfo } = parsed;
        const seoData = generateLocationSEOArticle(locationSlug, keywordInfo.category.toLowerCase(), keywordInfo);
        
        if (seoData) {
          let modifiedHtml = html;
          
          // 1. Replace title
          modifiedHtml = modifiedHtml.replace(
            /<title>.*?<\/title>/i,
            `<title>${seoData.title}</title>`
          );
          
          // 2. Replace description
          modifiedHtml = modifiedHtml.replace(
            /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
            `<meta name="description" content="${seoData.metaDesc.replace(/"/g, '&quot;')}" />`
          );
          
          // 3. Replace keywords
          modifiedHtml = modifiedHtml.replace(
            /<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>/i,
            `<meta name="keywords" content="${seoData.keywords.replace(/"/g, '&quot;')}" />`
          );
          
          // 4. Replace canonical URL
          modifiedHtml = modifiedHtml.replace(
            /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
            `<link rel="canonical" href="https://organicmushroomfarm.shop${pathname}" />`
          );
          
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=86400, must-revalidate');
          return res.status(200).send(modifiedHtml);
        }
      }
    } catch (parseErr) {
      console.error("Error injecting dynamic meta tags in Vercel API:", parseErr);
    }

    // Fallback: send index.html but with request-specific canonical URL
    let fallbackHtml = html;
    fallbackHtml = fallbackHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="https://organicmushroomfarm.shop${pathname}" />`
    );
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(fallbackHtml);
  });
}
