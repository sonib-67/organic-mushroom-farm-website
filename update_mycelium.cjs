const fs = require('fs');

function optimizeFile(path) {
  if (!fs.existsSync(path)) return;
  let code = fs.readFileSync(path, 'utf8');

  // Replace draw method to remove shadowBlur on mobile
  code = code.replace(
    /if \(isDark\) \{\s*ctx\.fillStyle = this\.isBlue \? "rgba\(6, 182, 212, 0\.9\)" : "rgba\(168, 85, 247, 0\.9\)";\s*ctx\.shadowBlur = 20;\s*ctx\.shadowColor = [^;]+;\s*\} else \{\s*ctx\.fillStyle = this\.isBlue \? "rgba\(14, 165, 233, 0\.7\)" : "rgba\(147, 51, 234, 0\.7\)";\s*ctx\.shadowBlur = 12;\s*ctx\.shadowColor = [^;]+;\s*\}/,
    `if (isDark) {
          ctx.fillStyle = this.isBlue ? "rgba(6, 182, 212, 0.9)" : "rgba(168, 85, 247, 0.9)";
          if (width >= 768) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.isBlue ? "rgba(34, 211, 238, 0.5)" : "rgba(192, 132, 252, 0.5)";
          }
        } else {
          ctx.fillStyle = this.isBlue ? "rgba(14, 165, 233, 0.7)" : "rgba(147, 51, 234, 0.7)";
          if (width >= 768) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = this.isBlue ? "rgba(56, 189, 248, 0.3)" : "rgba(168, 85, 247, 0.3)";
          }
        }`
  );

  // Reduce particle count on mobile
  code = code.replace(
    /const numParticles = Math\.min\(Math\.floor\(\(width \* height\) \/ 12000\), 120\);/,
    `const isMobile = width < 768;
      const numParticles = isMobile ? 22 : Math.min(Math.floor((width * height) / 12000), 90);`
  );

  // Use straight lines on mobile for instant 60fps render
  code = code.replace(
    /if \(i % 2 === 0\) ctx\.quadraticCurveTo\(midX \+ offset, midY - offset, particles\[j\]\.x, particles\[j\]\.y\);\s*else ctx\.quadraticCurveTo\(midX - offset, midY \+ offset, particles\[j\]\.x, particles\[j\]\.y\);/,
    `if (isMobile) {
              ctx.lineTo(particles[j].x, particles[j].y);
            } else {
              if (i % 2 === 0) ctx.quadraticCurveTo(midX + offset, midY - offset, particles[j].x, particles[j].y);
              else ctx.quadraticCurveTo(midX - offset, midY + offset, particles[j].x, particles[j].y);
            }`
  );

  // Add passive listener
  code = code.replace(
    'window.addEventListener("touchmove", handleTouchMove);',
    'window.addEventListener("touchmove", handleTouchMove, { passive: true });'
  );

  fs.writeFileSync(path, code);
  console.log('Optimized:', path);
}

optimizeFile('components/MyceliumBackground.tsx');
optimizeFile('app/components/MyceliumBackground.tsx');
