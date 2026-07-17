import re

with open('public/sitemap-main.xml', 'r') as f:
    content = f.read()

# Fix the nested <url> issue
content = content.replace('''  <url>
    <url>
        <loc>https://organicmushroomfarm.shop/blog/mushroom-training-guide-english</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    <loc>https://organicmushroomfarm.shop/blog/mushroom-training-guide-hindi</loc>''', '''  <url>
    <loc>https://organicmushroomfarm.shop/blog/mushroom-training-guide-english</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://organicmushroomfarm.shop/blog/mushroom-training-guide-hindi</loc>''')

with open('public/sitemap-main.xml', 'w') as f:
    f.write(content)
