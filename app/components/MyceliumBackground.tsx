"use client";
import React, { useEffect, useRef, useState } from "react";

export const MyceliumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 4 second delay before starting the animation to prevent lag during initial load
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Check dark mode
    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent) => {
      isDark = e.matches;
    };
    mediaQuery.addEventListener('change', handleThemeChange);

    // Set canvas dimensions
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const mouse = { x: -1000, y: -1000, radius: 150 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      isBlue: boolean;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.baseSize = Math.random() * 2 + 0.5;
        this.size = this.baseSize;
        this.isBlue = Math.random() > 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Interaction with mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          this.vx -= forceDirectionX * force * 0.01;
          this.vy -= forceDirectionY * force * 0.01;

          // Speed limit
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > 1.5) {
            this.vx = (this.vx / speed) * 1.5;
            this.vy = (this.vy / speed) * 1.5;
          }
          
          // Glow size increase near mouse
          this.size = this.baseSize + (mouse.radius - distance) * 0.02;
        } else {
          this.size = this.baseSize;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (isDark) {
          // 3D Glass Purple & Blue Mix for Dark Mode
          if (this.isBlue) {
            ctx.fillStyle = "rgba(6, 182, 212, 0.9)"; // Cyan
            ctx.shadowBlur = 20;
            ctx.shadowColor = "rgba(34, 211, 238, 0.8)";
          } else {
            ctx.fillStyle = "rgba(168, 85, 247, 0.9)"; // Purple
            ctx.shadowBlur = 20;
            ctx.shadowColor = "rgba(192, 132, 252, 0.8)";
          }
        } else {
          // 3D Glass Purple & Blue Mix for Light Mode
          if (this.isBlue) {
            ctx.fillStyle = "rgba(14, 165, 233, 0.7)"; // Sky blue
            ctx.shadowBlur = 12;
            ctx.shadowColor = "rgba(56, 189, 248, 0.4)";
          } else {
            ctx.fillStyle = "rgba(147, 51, 234, 0.7)"; // Purple
            ctx.shadowBlur = 12;
            ctx.shadowColor = "rgba(168, 85, 247, 0.4)";
          }
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(Math.floor((width * height) / 12000), 120);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            const opacity = (1 - distance / 140) * 0.6;
            
            // Mix colors between connected nodes
            const isBlueMix = (particles[i].isBlue || particles[j].isBlue);
            const isPurpleMix = (!particles[i].isBlue || !particles[j].isBlue);
            
            if (isDark) {
              if (isBlueMix && isPurpleMix) {
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // Indigo (Mix)
              } else if (isBlueMix) {
                ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`; // Cyan
              } else {
                ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`; // Purple
              }
            } else {
              if (isBlueMix && isPurpleMix) {
                ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.5})`; // Indigo mix
              } else if (isBlueMix) {
                ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.5})`; // Sky blue
              } else {
                ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.5})`; // Purple
              }
            }
            ctx.lineWidth = 1.2;

            ctx.moveTo(particles[i].x, particles[i].y);
            
            // Organic curve instead of straight line
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const offset = distance * 0.15;
            
            // Alternating curve direction
            if (i % 2 === 0) {
              ctx.quadraticCurveTo(midX + offset, midY - offset, particles[j].x, particles[j].y);
            } else {
              ctx.quadraticCurveTo(midX - offset, midY + offset, particles[j].x, particles[j].y);
            }

            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Track mouse safely
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", setSize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseout", handleMouseLeave);

    setSize();
    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      mediaQuery.removeEventListener('change', handleThemeChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReady]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Neutral clean base background */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#09090b] transition-colors duration-1000"></div>
      
      {/* Purple and Blue Glassmorphism Auras */}
      <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[600px] bg-purple-600/10 dark:bg-purple-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute top-[40%] right-[-10%] w-[50%] h-[700px] bg-cyan-600/10 dark:bg-cyan-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-[-10%] left-[20%] w-[40%] h-[500px] bg-indigo-600/10 dark:bg-indigo-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}></div>

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-[2000ms] ease-in-out ${isReady ? 'opacity-90' : 'opacity-0'}`}
      />
    </div>
  );
};

export default MyceliumBackground;
