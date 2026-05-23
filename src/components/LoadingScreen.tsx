import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // GSAP ring rotation
  useEffect(() => {
    if (!ringRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".load-ring-1", { rotate: 360, duration: 6, repeat: -1, ease: "none" });
      gsap.to(".load-ring-2", { rotate: -360, duration: 9, repeat: -1, ease: "none" });
      gsap.to(".load-ring-3", { rotate: 360, duration: 14, repeat: -1, ease: "none" });
    }, ringRef);
    return () => ctx.revert();
  }, []);

  // Typing animation
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(name.slice(0, i));
      if (i >= name.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, []);

  // Progress
  useEffect(() => {
    const start = performance.now();
    const DURATION = 2600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setDone(true), 450);
        setTimeout(() => onComplete(), 1250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          ref={ringRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(24 18% 7%) 0%, hsl(24 18% 3%) 60%, hsl(20 25% 2%) 100%)",
          }}
        >
          {/* floating gradient blurs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, hsl(25 78% 55% / 0.4), transparent 70%)", filter: "blur(100px)" }}
            animate={{ x: [0, 80, -60, 0], y: [0, -50, 60, 0], scale: [1, 1.2, 0.9, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, hsl(30 90% 65% / 0.3), transparent 70%)", filter: "blur(120px)" }}
            animate={{ x: [0, -60, 80, 0], y: [0, 50, -50, 0], scale: [1, 0.9, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* cinematic particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-copper-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: "0 0 10px hsl(30 90% 65% / 0.9)",
              }}
              animate={{
                y: [-20, -200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeOut",
              }}
            />
          ))}

          {/* center stage */}
          <div className="relative flex flex-col items-center gap-10 z-10">
            {/* rotating 3D rings */}
            <div className="relative w-56 h-56 flex items-center justify-center">
              <div
                className="load-ring-1 absolute inset-0 rounded-full border"
                style={{
                  borderColor: "hsl(25 78% 55% / 0.4)",
                  borderTopColor: "hsl(30 90% 65%)",
                  boxShadow: "0 0 40px hsl(25 78% 55% / 0.4), inset 0 0 30px hsl(25 78% 55% / 0.2)",
                }}
              />
              <div
                className="load-ring-2 absolute inset-5 rounded-full border-2"
                style={{
                  borderColor: "hsl(30 55% 42% / 0.3)",
                  borderRightColor: "hsl(30 90% 65%)",
                }}
              />
              <div
                className="load-ring-3 absolute inset-10 rounded-full border"
                style={{
                  borderColor: "hsl(25 78% 55% / 0.25)",
                  borderBottomColor: "hsl(30 90% 75%)",
                }}
              />

              {/* center monogram */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(30 90% 65%), hsl(25 78% 55%), hsl(30 55% 42%))",
                  color: "hsl(24 18% 4%)",
                  boxShadow: "0 0 50px hsl(30 90% 65% / 0.7), inset 0 1px 0 hsl(30 90% 80%)",
                }}
              >
                NK
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ boxShadow: ["0 0 30px hsl(30 90% 65% / 0.6)", "0 0 60px hsl(30 90% 65% / 0.9)", "0 0 30px hsl(30 90% 65% / 0.6)"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            {/* typing name */}
            <div className="flex flex-col items-center gap-3">
              <h1
                className="font-display text-3xl sm:text-5xl tracking-[0.3em] font-bold"
                style={{
                  background: "linear-gradient(180deg, hsl(35 90% 80%), hsl(25 78% 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 40px hsl(30 90% 65% / 0.5)",
                }}
              >
                {typed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-[2px] h-8 sm:h-10 ml-1 align-middle bg-copper-glow"
                />
              </h1>

              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="font-mono-code text-xs uppercase tracking-[0.4em] text-copper-glow/90"
              >
                Initializing Experience...
              </motion.p>
            </div>

            {/* progress line */}
            <div className="w-72 sm:w-96 flex flex-col items-center gap-2">
              <div className="w-full h-[2px] bg-secondary/60 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, hsl(25 78% 55%), hsl(30 90% 65%), hsl(35 90% 80%))",
                    boxShadow: "0 0 20px hsl(30 90% 65% / 0.8)",
                  }}
                />
              </div>
              <div className="flex justify-between w-full text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono-code">
                <span>Loading Assets</span>
                <span className="text-copper-glow">{progress}%</span>
              </div>
            </div>

            {/* wave motion graphics */}
            <svg
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-30"
              width="400"
              height="40"
              viewBox="0 0 400 40"
            >
              <motion.path
                d="M0 20 Q 50 0 100 20 T 200 20 T 300 20 T 400 20"
                fill="none"
                stroke="hsl(30 90% 65%)"
                strokeWidth="1.5"
                animate={{
                  d: [
                    "M0 20 Q 50 0 100 20 T 200 20 T 300 20 T 400 20",
                    "M0 20 Q 50 40 100 20 T 200 20 T 300 20 T 400 20",
                    "M0 20 Q 50 0 100 20 T 200 20 T 300 20 T 400 20",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
