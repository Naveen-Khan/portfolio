import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    type P = { x: number; y: number; vx: number; vy: number; size: number; life: number };
    let particles: P[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 22000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -Math.random() * 0.35 - 0.05,
          size: Math.random() * 1.6 + 0.4,
          life: Math.random(),
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        const alpha = 0.25 + Math.sin(p.life) * 0.25;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(30 90% 65% / ${alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "hsl(25 78% 55% / 0.7)";
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.01;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
      });
      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const onResize = () => { resize(); createParticles(); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute inset-0">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(25 78% 55% / 0.5) 0%, transparent 70%)",
            top: "5%", left: "10%",
            animation: "drift 28s ease-in-out infinite",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, hsl(30 55% 42% / 0.6) 0%, transparent 70%)",
            bottom: "10%", right: "5%",
            animation: "drift 34s ease-in-out infinite reverse",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute w-[420px] h-[420px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(20 40% 25% / 0.7) 0%, transparent 70%)",
            top: "55%", left: "45%",
            animation: "drift 22s ease-in-out infinite",
            filter: "blur(60px)",
          }}
        />
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.8 }} />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(hsl(25 78% 55% / 0.04) 1px, transparent 1px),
            linear-gradient(90deg, hsl(25 78% 55% / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
