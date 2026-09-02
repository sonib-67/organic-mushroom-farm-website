import sys

with open('old_routes.txt', 'r') as f:
    old = set(line.strip() for line in f if line.strip())

with open('next_routes.txt', 'r') as f:
    next_routes = set(line.strip() for line in f if line.strip())

if '' in next_routes:
    next_routes.remove('')
    next_routes.add('/')

missing = old - next_routes
# Filter out dynamic routes (e.g. /services/:id) and wildcard routes
missing = [m for m in missing if '*' not in m and ':' not in m]
missing.sort()

# Grouping
categories = {
    "Main / Core Pages": [],
    "Legal & Policies": [],
    "Equipment": [],
    "States": [],
    "Cities / Locations": [],
    "Blog / Articles / Info": []
}

for m in missing:
    if m.startswith('/cities') or m.startswith('/locations') or m.startswith('/mushroom-farming-'):
        categories["Cities / Locations"].append(m)
    elif m.startswith('/states'):
        categories["States"].append(m)
    elif m.startswith('/equipment'):
        categories["Equipment"].append(m)
    elif m in ['/privacy', '/terms', '/refund-policy', '/shipping-policy', '/disclaimer']:
        categories["Legal & Policies"].append(m)
    elif m.startswith('/blog') or m.startswith('/articles'):
        categories["Blog / Articles / Info"].append(m)
    else:
        categories["Main / Core Pages"].append(m)

print(f"Total Pages Left: {len(missing)}\n")

for cat, routes in categories.items():
    if routes:
        print(f"--- {cat} ({len(routes)}) ---")
        for r in routes:
            print(f"  {r}")
        print()

