const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const targetStart = '{/* --- OPTIMIZED ANIMATED BACKGROUND --- */}';
const targetEnd = '{/* --- END OPTIMIZED BACKGROUND --- */}';

const idxStart = content.indexOf(targetStart);
const idxEnd = content.indexOf(targetEnd) + targetEnd.length;

if (idxStart === -1 || idxEnd === -1) {
  console.log("Tokens not found", idxStart, idxEnd);
  process.exit(1);
}

const ultraOptBackground = `{/* --- ULTRA OPTIMIZED ANIMATED BACKGROUND (Option 1) --- */}
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
                {/* Single, large pulsing glow (No complex rotation, no multiple elements, no heavy filters) */}
                <motion.div
                  className="absolute w-[120%] sm:w-[100%] aspect-square rounded-full opacity-30 dark:opacity-20"
                  style={{
                    background: 'radial-gradient(circle, rgba(52,211,153,0.3) 0%, transparent 60%)',
                    willChange: 'transform, opacity'
                  }}
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>
              {/* --- END ULTRA OPTIMIZED BACKGROUND --- */}`;

const newContent = content.substring(0, idxStart) + ultraOptBackground + content.substring(idxEnd);
fs.writeFileSync('src/App.tsx', newContent);
console.log("Success");
