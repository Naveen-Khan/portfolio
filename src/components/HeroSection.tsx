import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload, HiMail, HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Glowing aura behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-xs font-mono-code text-primary mb-6 tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </motion.p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-5 tracking-tight">
            <span className="text-foreground">Naveen</span>{" "}
            <span className="gradient-text glow-text">Khan</span>
          </h1>
          <p className="font-display text-xl sm:text-2xl text-primary mb-2">
            Creative Developer
          </p>
          <div className="h-8 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                "AI/ML Engineer & Computer Systems Engineer",
                2500,
                "Building intelligent, production-grade systems",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-sm sm:text-base font-mono-code text-muted-foreground"
            />
          </div>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-sm sm:text-base">
            Bridging data and decisions through modern AI, RAG pipelines, and clean engineering.
            Based in Karachi, Pakistan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mt-10"
        >
          <a href="#projects" className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm transition-all">
            <HiArrowDown className="text-base" /> View Projects
          </a>
          <a href="#contact" className="glass-card card-hover-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-foreground transition-all">
            <HiMail className="text-base" /> Contact Me
          </a>
          <a href={`${import.meta.env.BASE_URL}Naveen_Resume.pdf`} download className="glass-card card-hover-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-foreground transition-all">
            <HiDownload /> Resume
          </a>
          <a href="https://github.com/Naveen-Khan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="glass-card card-hover-glow inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-foreground transition-all">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/naveenkhan-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="glass-card card-hover-glow inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-foreground transition-all">
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 text-muted-foreground"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <HiArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
