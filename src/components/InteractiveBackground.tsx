"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let width = window.innerWidth;
        let height = window.innerHeight;
        let scrollY = window.scrollY;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((width * height) / 4000); // Increased density
            for (let i = 0; i < numStars; i++) {
                const colorType = Math.random();
                let color = "255, 255, 255"; // White
                if (colorType > 0.8) color = "100, 200, 255"; // Blueish
                else if (colorType > 0.6) color = "200, 100, 255"; // Purpleish

                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 2 + 0.5, // Varied sizes
                    speedX: (Math.random() - 0.5) * 0.1,
                    speedY: (Math.random() - 0.5) * 0.1,
                    opacity: Math.random() * 0.5 + 0.3,
                    color: color
                } as Star & { color: string }); // Cast to include color
            }
        };

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw background gradient (Deep Space)
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            gradient.addColorStop(0, "#0B0B15");
            gradient.addColorStop(0.5, "#110F20"); // Subtle purple tint
            gradient.addColorStop(1, "#050508");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            stars.forEach((star: any) => {
                // Move star with scroll parallax
                // We add scrollY * factor to y. Factor depends on size (closer stars move faster)
                const parallaxSpeed = star.size * 0.5;
                let effectiveY = star.y - (scrollY * parallaxSpeed * 0.2);

                // Wrap around screen logic needs to account for the effective position relative to the viewport
                // Simplified: Just move the base Y and wrap that, then apply scroll offset visually?
                // Better: Move the star naturally, then apply scroll offset. 

                // Let's stick to the simple "flow" effect:
                // Stars move up as we scroll down (natural parallax)

                star.x += star.speedX;
                star.y += star.speedY;

                // Calculate visual position
                let visualY = (star.y - scrollY * 0.1 * star.size) % height;
                if (visualY < 0) visualY += height;

                // Mouse interaction (subtle parallax/repulsion)
                const dx = star.x - mouseX;
                const dy = visualY - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 200;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    star.x += (dx / distance) * force * 0.5;
                    star.y += (dy / distance) * force * 0.5;
                }

                // Draw star
                ctx.beginPath();
                ctx.arc(star.x, visualY, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                pointerEvents: "none",
            }}
        />
    );
}
