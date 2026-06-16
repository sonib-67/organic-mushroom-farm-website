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
        <title>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">Sitemap Index | Organic Mushroom Farm</xsl:when>
            <xsl:otherwise>Sitemap XML | Organic Mushroom Farm</xsl:otherwise>
          </xsl:choose>
        </title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&amp;family=Inter:wght@400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #1e293b;
            background-color: #f8fafc;
            margin: 0;
            padding: 40px 16px;
            -webkit-font-smoothing: antialiased;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .card {
            background: white;
            border-radius: 24px;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
            overflow: hidden;
            border: 1px solid #e2e8f0;
            margin-bottom: 24px;
          }
          .hero-header {
            padding: 48px 40px;
            background: linear-gradient(135deg, #15803d 0%, #166534 100%);
            color: white;
            position: relative;
          }
          .hero-header::after {
            content: " ";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(to right, #22c55e, #eab308, #3b82f6);
          }
          .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .badge-light {
            background: rgba(255, 255, 255, 0.15);
            color: white;
          }
          .badge-success {
            background: #dcfce7;
            color: #15803d;
          }
          .badge-info {
            background: #eef2ff;
            color: #4f46e5;
          }
          h1 {
            font-family: 'Space Grotesk', sans-serif;
            margin: 16px 0 8px 0;
            font-size: 32px;
            color: #ffffff;
            font-weight: 700;
            letter-spacing: -0.025em;
          }
          p.lead {
            margin: 0;
            color: #bbf7d0;
            font-size: 16px;
            line-height: 1.6;
            max-width: 800px;
          }
          .metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            margin-bottom: 24px;
          }
          .metric-card {
            background: white;
            padding: 24px;
            border-radius: 20px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.05);
          }
          .metric-label {
            font-size: 12px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 6px;
          }
          .metric-value {
            font-size: 28px;
            font-weight: 700;
            font-family: 'Space Grotesk', sans-serif;
            color: #0f172a;
          }
          .table-wrapper {
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            background-color: #f8fafc;
            text-align: left;
            padding: 16px 24px;
            font-size: 11px;
            font-weight: 700;
            color: #475569;
            text-transform: uppercase;
            letter-spacing: 0.07em;
            border-bottom: 2px solid #e2e8f0;
          }
          td {
            padding: 16px 24px;
            font-size: 14px;
            border-bottom: 1px solid #f1f5f9;
            color: #334155;
            vertical-align: middle;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          a {
            color: #15803d;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          a:hover {
            color: #166534;
            text-decoration: underline;
          }
          .priority-tag {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 6px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            font-weight: 600;
            text-align: center;
          }
          .priority-high {
            background-color: #fee2e2;
            color: #991b1b;
          }
          .priority-medium {
            background-color: #fef3c7;
            color: #92400e;
          }
          .priority-low {
            background-color: #f1f5f9;
            color: #475569;
          }
          .mono {
            font-family: 'JetBrains Mono', monospace;
            font-size: 13px;
            color: #64748b;
          }
          .footer {
            padding: 32px;
            text-align: center;
            font-size: 13px;
            color: #64748b;
          }
          .footer-logo {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 700;
            color: #166534;
            margin-bottom: 4px;
          }
          @media (prefers-color-scheme: dark) {
            body { background-color: #0b0f19; color: #cbd5e1; }
            .card { background-color: #111827; border-color: #1f2937; }
            .metric-card { background-color: #111827; border-color: #1f2937; }
            .metric-value { color: #ffffff; }
            th { background-color: #1f2937; color: #9ca3af; border-color: #374151; }
            td { border-color: #1f2937; color: #9ca3af; }
            tr:hover td { background-color: #1f2937; }
            a { color: #4ade80; }
            a:hover { color: #22c55e; }
            .priority-tag.priority-low { background-color: #1f2937; color: #9ca3af; }
            .footer-logo { color: #4ade80; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          
          <!-- Master Grid Layout based on document root -->
          <xsl:choose>
            
            <!-- VIEW 1: Sitemap Index -->
            <xsl:when test="sitemap:sitemapindex">
              <div class="card">
                <div class="hero-header">
                  <div class="badge badge-light">Centralized Map</div>
                  <h1>Master Google Sitemap Index</h1>
                  <p class="lead">Serving as the ultimate navigational hub for search crawls. This index coordinates sub-sitemaps for state-wise, city-wise, and local farming directories.</p>
                </div>
              </div>

              <div class="metrics">
                <div class="metric-card">
                  <div class="metric-label">Total Sitemaps Indexed</div>
                  <div class="metric-value"><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> Parts</div>
                </div>
                <div class="metric-card">
                  <div class="metric-label">Integration Scope</div>
                  <div class="metric-value">Pan India (Organic Hub)</div>
                </div>
                <div class="metric-card">
                  <div class="metric-label">Crawling Optimization</div>
                  <div class="metric-value">50k Max compliant</div>
                </div>
              </div>

              <div class="card">
                <div class="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Sitemap Partition Location (URL)</th>
                        <th>Last Modified (UTC)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                        <tr>
                          <td>
                            <a href="{sitemap:loc}">
                              <xsl:value-of select="sitemap:loc"/>
                            </a>
                          </td>
                          <td class="mono">
                            <xsl:value-of select="sitemap:lastmod"/>
                          </td>
                        </tr>
                      </xsl:for-each>
                    </tbody>
                  </table>
                </div>
              </div>
            </xsl:when>
            
            <!-- VIEW 2: Sub-Sitemap Links Detailed View -->
            <xsl:otherwise>
              <div class="card">
                <div class="hero-header">
                  <div class="badge badge-light">Directory File</div>
                  <h1>Target Keyword XML Sitemap</h1>
                  <p class="lead">Dynamic list mapping high-index agri-tech routes, prices list databases, spawn channels, &amp; training hubs. Optimizing search engine indexation directly.</p>
                </div>
              </div>

              <div class="metrics">
                <div class="metric-card">
                  <div class="metric-label">Total URLs Map</div>
                  <div class="metric-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> Links</div>
                </div>
                <div class="metric-card">
                  <div class="metric-label">Primary Frequency</div>
                  <div class="metric-value">Monthly / Daily</div>
                </div>
                <div class="metric-card">
                  <div class="metric-label">Target Engine</div>
                  <div class="metric-value">Google / Bing Bot</div>
                </div>
              </div>

              <div class="card">
                <div class="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Crawl Target URL</th>
                        <th>Priority Weight</th>
                        <th>Change Frequency</th>
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
                          <td>
                            <xsl:variable name="p" select="number(sitemap:priority)"/>
                            <span>
                              <xsl:attribute name="class">
                                <xsl:choose>
                                  <xsl:when test="$p &gt;= 0.8">priority-tag priority-high</xsl:when>
                                  <xsl:when test="$p &gt;= 0.6">priority-tag priority-medium</xsl:when>
                                  <xsl:otherwise>priority-tag priority-low</xsl:otherwise>
                                </xsl:choose>
                              </xsl:attribute>
                              <xsl:value-of select="sitemap:priority"/>
                            </span>
                          </td>
                          <td class="mono">
                            <xsl:value-of select="sitemap:changefreq"/>
                          </td>
                          <td class="mono">
                            <xsl:value-of select="sitemap:lastmod"/>
                          </td>
                        </tr>
                      </xsl:for-each>
                    </tbody>
                  </table>
                </div>
              </div>
            </xsl:otherwise>
            
          </xsl:choose>

          <!-- Standard Bottom Brand Panel -->
          <div class="footer">
            <div class="footer-logo">Organic Mushroom Farm Ecosystem</div>
            <div>Professional Spawn Supply, High Yield Training &amp; Turnkey Agro Solutions</div>
          </div>

        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
