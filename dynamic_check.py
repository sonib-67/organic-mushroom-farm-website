import re
with open("public/sitemap-main.xml", "r") as f:
    text = f.read()

urls = re.findall(r"<loc>(.*?)</loc>", text)
dynamic_count = sum(1 for url in urls if "/locations/" in url or "/services/" in url or "/process/" in url or "/success-story/" in url or "/mushroom-types/" in url or re.search(r"/blog/\d+", url))

print(f"Total dynamic/expanded routes in sitemap: {dynamic_count}")
