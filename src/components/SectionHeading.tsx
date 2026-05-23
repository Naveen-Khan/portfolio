import { motion, Variants } from "framer-motion";

type Variant = "split" | "float" | "zoom" | "slide" | "rotate3d" | "neon";

const SectionHeading = ({
  title,
  subtitle,
  eyebrow,
  align = "center",
  variant = "split",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "center" | "left";
  variant?: Variant;
}) => {
  const words = title.split(" ");
  const lastWord = words.slice(-1)[0];
  const firstWords = words.slice(0, -1).join(" ");
  const fullText = `${firstWords} ${lastWord}.`;

  const renderHeading = () => {
    const baseClass =
      "font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1] tracking-tight inline-block cursor-default";

    // SPLIT — each letter staggered
    if (variant === "split") {
      const letters = Array.from(fullText);
      return (
        <motion.h2
          className={baseClass}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ scale: 1.02 }}
          transition={{ staggerChildren: 0.04 }}
        >
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
                },
              }}
              className={
                i >= fullText.length - lastWord.length - 1 && ch !== "."
                  ? "font-serif italic text-foreground/90"
                  : ch === "."
                  ? "text-copper"
                  : "inline-block gradient-text-warm"
              }
              style={{ display: "inline-block", whiteSpace: ch === " " ? "pre" : "normal" }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </motion.h2>
      );
    }

    // FLOAT — floating + rotation + glow pulse
    if (variant === "float") {
      return (
        <motion.h2
          className={`${baseClass} glow-text`}
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          whileInView={{
            opacity: 1,
            y: [0, -10, 0],
            rotate: [-1, 1, -1],
          }}
          viewport={{ once: false, margin: "-60px" }}
          whileHover={{ scale: 1.04, rotate: 0 }}
          transition={{
            opacity: { duration: 0.6 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            textShadow: "0 0 30px hsl(25 78% 55% / 0.5)",
          }}
        >
          <span className="gradient-text-warm">{firstWords} </span>
          <span className="font-serif italic text-foreground/90">{lastWord}</span>
          <span className="text-copper">.</span>
        </motion.h2>
      );
    }

    // ZOOM — cinematic large zoom-in
    if (variant === "zoom") {
      return (
        <motion.h2
          className={baseClass}
          initial={{ opacity: 0, scale: 2.5, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="gradient-text-warm">{firstWords} </span>
          <span className="font-serif italic text-foreground/90">{lastWord}</span>
          <span className="text-copper">.</span>
        </motion.h2>
      );
    }

    // SLIDE — from left with reveal
    if (variant === "slide") {
      return (
        <div className="relative overflow-hidden inline-block">
          <motion.h2
            className={baseClass}
            initial={{ opacity: 0, x: -120, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="gradient-text-warm">{firstWords} </span>
            <span className="font-serif italic text-foreground/90">{lastWord}</span>
            <span className="text-copper">.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="h-px bg-gradient-to-r from-copper via-copper-glow to-transparent origin-left mt-2"
          />
        </div>
      );
    }

    // 3D ROTATE
    if (variant === "rotate3d") {
      return (
        <motion.h2
          className={baseClass}
          initial={{ opacity: 0, rotateX: 90, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ rotateX: -8, rotateY: 4 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
        >
          <span className="gradient-text-warm">{firstWords} </span>
          <span className="font-serif italic text-foreground/90">{lastWord}</span>
          <span className="text-copper">.</span>
        </motion.h2>
      );
    }

    // NEON — flicker + soft pulse
    if (variant === "neon") {
      return (
        <motion.h2
          className={baseClass}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: [0, 1, 0.4, 1, 0.7, 1],
            scale: 1,
          }}
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{
            textShadow:
              "0 0 10px hsl(30 90% 65% / 0.8), 0 0 25px hsl(25 78% 55% / 0.6), 0 0 50px hsl(25 78% 55% / 0.4)",
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px hsl(30 90% 65% / 0.8), 0 0 25px hsl(25 78% 55% / 0.6)",
                "0 0 20px hsl(30 90% 65% / 1), 0 0 45px hsl(25 78% 55% / 0.9)",
                "0 0 10px hsl(30 90% 65% / 0.8), 0 0 25px hsl(25 78% 55% / 0.6)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="gradient-text-warm">{firstWords} </span>
            <span className="font-serif italic text-foreground/90">{lastWord}</span>
            <span className="text-copper">.</span>
          </motion.span>
        </motion.h2>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-copper/60" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-copper-glow font-mono-code">
            {eyebrow}
          </p>
          <span className="h-px w-8 bg-copper/60" />
        </div>
      )}
      {renderHeading()}
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-sm sm:text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
