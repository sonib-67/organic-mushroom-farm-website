"use client";

import React, { useEffect, useRef, useState } from "react";

export const MyceliumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 2.5 second delay before starting the animation to prevent lag during initial load
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2500);
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

    let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      isDark = e.matches;
    };
    mediaQuery.addEventListener("change", handleThemeChange);

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

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          this.vx -= forceDirectionX * force * 0.01;
          this.vy -= forceDirectionY * force * 0.01;

          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > 1.5) {
            this.vx = (this.vx / speed) * 1.5;
            this.vy = (this.vy / speed) * 1.5;
          }

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
          ctx.fillStyle = this.isBlue
            ? "rgba(124, 58, 237, 0.45)"
            : "rgba(34, 197, 94, 0.45)";
        } else {
          ctx.fillStyle = this.isBlue
            ? "rgba(124, 58, 237, 0.25)"
            : "rgba(34, 197, 94, 0.25)";
        }
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    setSize();
    window.addEventListener("resize", setSize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const connect = () => {
      const maxDistance = 120;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(124, 58, 237, ${opacity * 0.15})`
              : `rgba(124, 58, 237, ${opacity * 0.1})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleThemeChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReady]);

  return (
    <canvas
      ref={canvasRef}
      id="next-mycelium-canvas"
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      style={{ opacity: isReady ? 1 : 0 }}
      aria-hidden="true"
    />
  );
};

export default MyceliumBackground;
