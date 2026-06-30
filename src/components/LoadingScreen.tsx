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

  useEffect(() => {
    if (!ringRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".load-ring-1", { rotate: 360, duration: 6, repeat: -1, ease: "none" });
      gsap.to(".load-ring-2", { rotate: -360, duration: 9, repeat: -1, ease: "none" });
      gsap.to(".load-ring-3", { rotate: 360, duration: 14, repeat: -1, ease: "none" });
    }, ringRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(name.slice(0, i));
      if (i >= name.length) clearInterval(id);
    }, 90);
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
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setDone(true), 50);
        setTimeout(() => onComplete(), 550);
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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* subtle white glows */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)", filter: "blur(100px)" }}
            animate={{ x: [0, 80, -60, 0], y: [0, -50, 60, 0], scale: [1, 1.2, 0.9, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)", filter: "blur(120px)" }}
            animate={{ x: [0, -60, 80, 0], y: [0, 50, -50, 0], scale: [1, 0.9, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* white particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: "0 0 10px rgba(255,255,255,0.9)",
              }}
              animate={{ y: [-20, -200], opacity: [0, 1, 0] }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeOut",
              }}
            />
          ))}

          <div className="relative flex flex-col items-center gap-10 z-10">
            <div className="relative w-56 h-56 flex items-center justify-center">
              <div
                className="load-ring-1 absolute inset-0 rounded-full border"
                style={{
                  borderColor: "rgba(255,255,255,0.2)",
                  borderTopColor: "rgba(255,255,255,0.95)",
                  boxShadow: "0 0 40px rgba(255,255,255,0.25), inset 0 0 30px rgba(255,255,255,0.1)",
                }}
              />
              <div
                className="load-ring-2 absolute inset-5 rounded-full border-2"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  borderRightColor: "rgba(255,255,255,0.9)",
                }}
              />
              <div
                className="load-ring-3 absolute inset-10 rounded-full border"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  borderBottomColor: "rgba(255,255,255,0.85)",
                }}
              />

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-2xl"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #e5e5e5, #ffffff)",
                  color: "#000",
                  boxShadow: "0 0 50px rgba(255,255,255,0.6), inset 0 1px 0 #fff",
                }}
              >
                NK
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ boxShadow: ["0 0 30px rgba(255,255,255,0.5)", "0 0 60px rgba(255,255,255,0.85)", "0 0 30px rgba(255,255,255,0.5)"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <h1
                className="font-display text-3xl sm:text-5xl tracking-[0.3em] font-bold text-white"
                style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}
              >
                {typed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-[2px] h-8 sm:h-10 ml-1 align-middle bg-white"
                />
              </h1>

              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="font-mono-code text-xs uppercase tracking-[0.4em] text-white/80"
              >
                Initializing Experience...
              </motion.p>
            </div>

            <div className="w-72 sm:w-96 flex flex-col items-center gap-2">
              <div className="w-full h-[2px] bg-white/15 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #ffffff, #e5e5e5, #ffffff)",
                    boxShadow: "0 0 20px rgba(255,255,255,0.7)",
                  }}
                />
              </div>
              <div className="flex justify-between w-full text-[10px] uppercase tracking-[0.3em] text-white/50 font-mono-code">
                <span>Loading Assets</span>
                <span className="text-white">{progress}%</span>
              </div>
            </div>

            <svg
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-40"
              width="400"
              height="40"
              viewBox="0 0 400 40"
            >
              <motion.path
                d="M0 20 Q 50 0 100 20 T 200 20 T 300 20 T 400 20"
                fill="none"
                stroke="#ffffff"
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
