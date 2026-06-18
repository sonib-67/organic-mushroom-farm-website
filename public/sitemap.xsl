<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Organic Mushroom</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #334155;
            background-color: #f8fafc;
            margin: 0;
            padding: 40px 20px;
            -webkit-font-smoothing: antialiased;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
            overflow: hidden;
            border: 1px solid #e2e8f0;
          }
          .header {
            padding: 40px;
            background: #ffffff;
            border-bottom: 1px solid #f1f5f9;
          }
          h1 {
            margin: 0 0 10px 0;
            font-size: 28px;
            color: #0f172a;
            font-weight: 800;
            letter-spacing: -0.025em;
          }
          p {
            margin: 0;
            color: #64748b;
            font-size: 15px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            background-color: #f8fafc;
            text-align: left;
            padding: 16px 24px;
            font-size: 12px;
            font-weight: 700;
            color: #475569;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 2px solid #e2e8f0;
          }
          td {
            padding: 16px 24px;
            font-size: 14px;
            border-bottom: 1px solid #f1f5f9;
            color: #334155;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
            color: #1d4ed8;
          }
          .priority {
            color: #16a34a;
            font-weight: 700;
          }
          .footer {
            padding: 24px 40px;
            font-size: 13px;
            color: #94a3b8;
            background: #ffffff;
            text-align: center;
          }
          @media (prefers-color-scheme: dark) {
            body { background-color: #0f172a; color: #f1f5f9; }
            .container { background-color: #1e293b; border-color: #334155; }
            .header { background-color: #1e293b; border-color: #334155; }
            h1 { color: #f8fafc; }
            th { background-color: #0f172a; color: #94a3b8; border-color: #334155; }
            td { border-color: #334155; color: #cbd5e1; }
            tr:hover td { background-color: #0f172a; }
            .footer { background-color: #1e293b; color: #64748b; }
            a { color: #3b82f6; }
            a:hover { color: #60a5fa; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Organic Mushroom XML Sitemap</h1>
            <p>This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs for better search engine discovery.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="priority">
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            Design optimized for Search Engines - Created for Organic Mushroom Farm
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
