import sys
with open('old_routes.txt', 'r') as f:
    old = set(line.strip() for line in f if line.strip())

with open('next_routes.txt', 'r') as f:
    next_routes = set(line.strip() for line in f if line.strip())

if '' in next_routes:
    next_routes.remove('')
    next_routes.add('/')

missing = old - next_routes
missing = [m for m in missing if '*' not in m and ':' not in m]
missing.sort()
print("Top-level missing routes:")
for m in missing:
    if m.count('/') == 1:
        print(f" - {m}")
