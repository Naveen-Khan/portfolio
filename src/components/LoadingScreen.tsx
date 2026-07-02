import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Props {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: Props) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [typed, setTyped] = useState("");
  const name = "NAVEEN KHAN";
  const ringRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const ORANGE = "#f97316";
  const ORANGE_GLOW = "rgba(249, 115, 22, 0.55)";
  const WHITE = "#ffffff";
  const WHITE_GLOW = "rgba(255, 255, 255, 0.35)";

  useEffect(() => {
    if (!ringRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".load-ring-1", { rotate: 360, duration: 5, repeat: -1, ease: "none" });
      gsap.to(".load-ring-2", { rotate: -360, duration: 8, repeat: -1, ease: "none" });
      gsap.to(".load-ring-3", { rotate: 360, duration: 12, repeat: -1, ease: "none" });
    }, ringRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(name.slice(0, i));
      if (i >= name.length) clearInterval(id);
    }, 80);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const start = performance.now();
    const DURATION = 3000;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 50);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    if (!done || !containerRef.current) return;
    const el = containerRef.current;
    gsap.to(el, {
      opacity: 0,
      scale: 1.06,
      filter: "blur(16px)",
      duration: 0.7,
      ease: "power2.inOut",
      onComplete,
    });
  }, [done, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Ambient orange glows */}
      <div
        className="absolute top-1/4 left-1/4 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${ORANGE_GLOW} 0%, transparent 65%)`,
          filter: "blur(100px)",
          animation: "loadDrift 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)`,
          filter: "blur(110px)",
          animation: "loadDrift 12s ease-in-out infinite reverse",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            left: `${10 + (i * 3.7) % 80}%`,
            top: `${10 + (i * 5.1) % 80}%`,
            background: i % 4 === 0 ? ORANGE : WHITE,
            opacity: 0.6,
            boxShadow: i % 4 === 0 ? `0 0 10px ${ORANGE_GLOW}` : `0 0 8px ${WHITE_GLOW}`,
            animation: `loadParticle ${3.5 + (i % 4)}s ease-out ${i * 0.15}s infinite`,
          }}
        />
      ))}

      <div className="relative flex flex-col items-center gap-10 z-10">
        {/* Rings + Center badge */}
        <div ref={ringRef} className="relative w-56 h-56 flex items-center justify-center">
          <div
            className="load-ring-1 absolute inset-0 rounded-full border"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              borderTopColor: ORANGE,
              boxShadow: `0 0 45px ${ORANGE_GLOW}, inset 0 0 30px rgba(255,255,255,0.05)`,
            }}
          />
          <div
            className="load-ring-2 absolute inset-5 rounded-full border-2"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              borderRightColor: WHITE,
              boxShadow: `0 0 25px ${WHITE_GLOW}`,
            }}
          />
          <div
            className="load-ring-3 absolute inset-10 rounded-full border"
            style={{
              borderColor: "rgba(249,115,22,0.18)",
              borderBottomColor: ORANGE,
              boxShadow: `0 0 20px rgba(249,115,22,0.4)`,
            }}
          />

          <div
            className="relative w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-2xl animate-pulse-glow"
            style={{
              background: "linear-gradient(135deg, #1a1a1a, #0f0f0f)",
              color: WHITE,
              border: `1px solid rgba(249,115,22,0.6)`,
              boxShadow: `0 0 40px ${ORANGE_GLOW}, inset 0 1px 0 rgba(255,255,255,0.1)`,
            }}
          >
            NK
            <span
              className="absolute inset-0 rounded-full"
              style={{
                animation: "loadPulse 2.2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-3">
          <h1
            className="font-display text-3xl sm:text-5xl tracking-[0.3em] font-bold"
            style={{ color: WHITE, textShadow: `0 0 35px ${ORANGE_GLOW}` }}
          >
            {typed}
            <span
              className="inline-block w-[2px] h-8 sm:h-10 ml-1 align-middle"
              style={{ background: ORANGE, animation: "loadBlink 0.7s step-end infinite" }}
            />
          </h1>

          <p
            className="font-mono-code text-xs uppercase tracking-[0.4em]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Initializing Experience...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-72 sm:w-96 flex flex-col items-center gap-2">
          <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-75 ease-out"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${ORANGE}, #ffffff, ${ORANGE})`,
                boxShadow: `0 0 20px ${ORANGE_GLOW}`,
              }}
            />
          </div>
          <div className="flex justify-between w-full text-[10px] uppercase tracking-[0.3em] font-mono-code" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span>Loading Assets</span>
            <span style={{ color: WHITE }}>{progress}%</span>
          </div>
        </div>

        {/* Decorative orange wave */}
        <svg
          className="absolute -bottom-24 left-1/2 -translate-x-1/2"
          width="360"
          height="40"
          viewBox="0 0 360 40"
          style={{ opacity: 0.5 }}
        >
          <path
            d="M0 20 Q 45 0 90 20 T 180 20 T 270 20 T 360 20"
            fill="none"
            stroke={ORANGE}
            strokeWidth="1.5"
            style={{ animation: "loadWave 2.8s ease-in-out infinite" }}
          />
        </svg>
      </div>

      <style>{`
        @keyframes loadDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.12); }
        }
        @keyframes loadParticle {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-140px); opacity: 0; }
        }
        @keyframes loadPulse {
          0%, 100% { box-shadow: 0 0 25px rgba(249,115,22,0.45); }
          50% { box-shadow: 0 0 55px rgba(249,115,22,0.85); }
        }
        @keyframes loadBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes loadWave {
          0%, 100% { d: path("M0 20 Q 45 0 90 20 T 180 20 T 270 20 T 360 20"); }
          50% { d: path("M0 20 Q 45 40 90 20 T 180 20 T 270 20 T 360 20"); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
