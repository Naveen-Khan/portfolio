import { useEffect, useRef } from "react";

/**
 * Neural network background animation.
 * Floating nodes connect with lines when within proximity,
 * creating a living "neural net" effect. Tuned to the copper/bronze theme.
 */
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    type Node = { x: number; y: number; vx: number; vy: number; r: number; pulse: number };
    let nodes: Node[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const build = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = Math.min(110, Math.floor((w * h) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const MAX_DIST = 140;
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        // mouse repel
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14000) {
          const f = (14000 - d2) / 14000;
          n.x += (dx / Math.sqrt(d2 + 0.1)) * f * 1.2;
          n.y += (dy / Math.sqrt(d2 + 0.1)) * f * 1.2;
        }
      }

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MAX_DIST_SQ) {
            const alpha = (1 - d2 / MAX_DIST_SQ) * 0.45;
            ctx.strokeStyle = `hsl(28 85% 60% / ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw nodes (glowing)
      for (const n of nodes) {
        const glow = 0.6 + Math.sin(n.pulse) * 0.35;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(32 95% 68% / ${glow})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = "hsl(25 80% 55% / 0.9)";
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      resize();
      build();
    };

    resize();
    build();
    draw();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* ambient gradient washes */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(25 78% 55% / 0.5) 0%, transparent 70%)",
          top: "5%",
          left: "10%",
          animation: "drift 28s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(30 55% 42% / 0.6) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          animation: "drift 34s ease-in-out infinite reverse",
          filter: "blur(70px)",
        }}
      />

      {/* neural network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.9 }} />

      {/* subtle grid + vignette */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(hsl(25 78% 55% / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, hsl(25 78% 55% / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 85%)",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
