import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, input, textarea, [role='button']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hover ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 800, damping: 40, mass: 0.2 }}
      >
        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        animate={{
          x: pos.x - (hover ? 24 : 16),
          y: pos.y - (hover ? 24 : 16),
          scale: hover ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      >
        <div
          className={`rounded-full border transition-colors ${
            hover ? "w-12 h-12 border-primary/80 bg-primary/10" : "w-8 h-8 border-primary/40"
          }`}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
