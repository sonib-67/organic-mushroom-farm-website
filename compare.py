import sys
with open('old_routes.txt', 'r') as f:
    old = set(line.strip() for line in f if line.strip())

with open('next_routes.txt', 'r') as f:
    next_routes = set(line.strip() for line in f if line.strip())

# The root path in next_routes might be empty string for app/page.tsx
if '' in next_routes:
    next_routes.remove('')
    next_routes.add('/')

missing = old - next_routes
missing = [m for m in missing if '*' not in m and ':' not in m]

print(f"Total Old Routes: {len(old)}")
print(f"Total Next.js Routes: {len(next_routes)}")
print(f"Migrated / Live Routes (approx): {len(next_routes.intersection(old))}")
print(f"Routes left to migrate (approx): {len(missing)}")
print("Some missing routes:")
for m in list(missing)[:20]:
    print(f" - {m}")
