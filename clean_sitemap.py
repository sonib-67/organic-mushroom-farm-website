import re

def clean_sitemap():
    try:
        with open('public/sitemap-main.xml', 'r', encoding='utf-8') as f:
            content = f.read()
            
        def filter_func(match):
            block = match.group(0)
            if '<loc>https://organicmushroomsfarm.com/oldhomepage</loc>' in block:
                return ''
            if '<loc>https://organicmushroomsfarm.com/new' in block:
                return ''
            return block

        new_content = re.sub(r'<url>\s*<loc>.*?</loc>.*?<\/url>', filter_func, content, flags=re.DOTALL)
        
        with open('public/sitemap-main.xml', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully cleaned public/sitemap-main.xml")
    except Exception as e:
        print(f"Error: {e}")

clean_sitemap()
