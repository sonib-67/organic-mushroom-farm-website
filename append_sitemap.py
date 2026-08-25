import re
with open("public/sitemap-main.xml", "r") as f:
    content = f.read()

new_url = """  <url>
    <loc>https://organicmushroomsfarm.com/usatraining</loc>
    <lastmod>2026-08-24T15:43:16.243Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
</urlset>"""

content = content.replace("</urlset>", new_url)

with open("public/sitemap-main.xml", "w") as f:
    f.write(content)
