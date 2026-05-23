import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload, HiMail, HiArrowDown } from "react-icons/hi";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const parallax = (depth: number) => ({
    transform: `translate3d(${(mouse.x - 0.5) * depth}px, ${(mouse.y - 0.5) * depth}px, 0)`,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grain"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-110"
          style={{ ...parallax(20), transition: "transform 0.6s ease-out" }}
        />
        {/* film overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/70" />
        {/* moving light beams (simulates video) */}
        <div
          className="absolute -top-1/2 left-1/3 w-[60vw] h-[140vh] opacity-40 animate-drift"
          style={{
            background: "conic-gradient(from 90deg at 50% 50%, transparent 0deg, hsl(25 78% 55% / 0.35) 60deg, transparent 120deg)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-1/3 right-1/4 w-[50vw] h-[100vh] opacity-30 animate-drift"
          style={{
            background: "conic-gradient(from 200deg at 50% 50%, transparent 0deg, hsl(30 90% 65% / 0.3) 80deg, transparent 160deg)",
            filter: "blur(80px)",
            animationDelay: "-8s",
          }}
        />
        {/* spotlight follows cursor */}
        <div
          className="absolute pointer-events-none w-[600px] h-[600px] rounded-full"
          style={{
            left: `${mouse.x * 100}%`,
            top: `${mouse.y * 100}%`,
            background: "radial-gradient(circle, hsl(30 90% 65% / 0.18) 0%, transparent 60%)",
            transform: "translate(-50%, -50%)",
            transition: "left 0.3s ease-out, top 0.3s ease-out",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Floating glass accent cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:block absolute top-32 left-10 glass-card px-4 py-3 rounded-2xl animate-float"
        style={parallax(-30)}
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-copper-glow/80">Now Building</p>
        <p className="text-sm font-display text-foreground mt-1">RAG Pipelines · LLM Agents</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden lg:block absolute bottom-32 right-10 glass-card px-4 py-3 rounded-2xl animate-float"
        style={{ ...parallax(-25), animationDelay: "-3s" }}
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-copper-glow/80">Based In</p>
        <p className="text-sm font-display text-foreground mt-1">Karachi, Pakistan</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="hidden xl:flex absolute top-1/3 right-16 glass-card glow-border px-4 py-3 rounded-2xl items-center gap-3"
        style={parallax(-40)}
      >
        <div className="w-2 h-2 rounded-full bg-copper-glow animate-pulse" />
        <p className="text-xs font-mono-code text-foreground/80">available_for_hire = true</p>
      </motion.div>

      {/* Main content */}
      <div className="section-container relative z-10 text-center" style={parallax(8)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-copper" />
          <p className="font-serif-italic text-copper-glow tracking-widest text-sm sm:text-base">
            build future with AI
          </p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-copper" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display font-bold leading-[0.95] tracking-tight"
        >
          <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl gradient-text-warm glow-text">
            Naveen
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground/95 mt-1 italic font-serif">
            Khan<span className="text-copper">.</span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <p className="text-base sm:text-lg uppercase tracking-[0.4em] text-foreground/80 font-medium">
            Creative Developer
          </p>
          <div className="h-7 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                "AI / ML Engineer",
                2000,
                "Computer Systems Engineer",
                2000,
                "Creative Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono-code text-sm sm:text-base text-copper-glow/90"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-muted-foreground mt-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          Crafting intelligent systems where data, design and decision-making meet
          — RAG pipelines, computer vision, and production-grade ML.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap gap-3 justify-center mt-10"
        >
          <a
            href="#projects"
            className="btn-glow group inline-flex items-center gap-2 bg-gradient-to-r from-copper-glow via-copper to-bronze text-background px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-[0.15em]"
          >
            Explore Portfolio
            <HiArrowDown className="text-base group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="glass-card card-hover-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm uppercase tracking-[0.15em] text-foreground"
          >
            <HiMail className="text-base" /> Contact Me
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Naveen_Resume.pdf`}
            download
            className="glass-card card-hover-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm uppercase tracking-[0.15em] text-foreground"
          >
            <HiDownload /> Resume
          </a>
          <div className="flex gap-2">
            <a
              href="https://github.com/Naveen-Khan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass-card card-hover-glow inline-flex items-center justify-center w-12 h-12 rounded-full text-foreground"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-khan-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass-card card-hover-glow inline-flex items-center justify-center w-12 h-12 rounded-full text-foreground"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
