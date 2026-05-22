import { motion } from "framer-motion";

const SectionHeading = ({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "center" | "left";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
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
    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1] tracking-tight">
      <span className="gradient-text-warm">{title.split(" ").slice(0, -1).join(" ")} </span>
      <span className="font-serif italic text-foreground/90">{title.split(" ").slice(-1)}</span>
      <span className="text-copper">.</span>
    </h2>
    {subtitle && (
      <p className="text-muted-foreground mt-4 text-sm sm:text-base max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
