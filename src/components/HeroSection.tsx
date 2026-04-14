import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload, HiMail, HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
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
            className="text-sm font-mono-code text-primary mb-4 tracking-widest uppercase"
          >
            &lt;Hello World /&gt;
          </motion.p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 glow-text text-primary">
            Naveen Khan
          </h1>
          <div className="h-10 sm:h-12 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Machine Learning Developer",
                2000,
                "Computer Vision Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg sm:text-2xl font-mono-code text-muted-foreground"
            />
          </div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Building intelligent systems that bridge the gap between data and decisions.
            Based in Karachi, Pakistan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mt-8"
        >
          <a href="#projects" className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm transition-all">
            <HiArrowDown className="text-base" /> View Projects
          </a>
          <a href="#contact" className="glass-card card-hover-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-foreground transition-all">
            <HiMail className="text-base" /> Contact Me
          </a>
          <a href="#" className="glass-card card-hover-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-foreground transition-all">
            <HiDownload /> Download Resume
          </a>
          <a href="https://github.com/Naveen-Khan" target="_blank" rel="noopener noreferrer" className="glass-card card-hover-glow inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-foreground transition-all">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/naveen-khan" target="_blank" rel="noopener noreferrer" className="glass-card card-hover-glow inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-foreground transition-all">
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
