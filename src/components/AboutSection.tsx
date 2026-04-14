import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiLightningBolt, HiShieldCheck, HiEye, HiChartBar } from "react-icons/hi";

const highlights = [
  { icon: HiLightningBolt, text: "Reduced internal query processing time through AI automation" },
  { icon: HiShieldCheck, text: "Built high-accuracy medical classification model with DenseNet" },
  { icon: HiEye, text: "Developed real-time safety monitoring system using YOLO" },
  { icon: HiChartBar, text: "Built automated infrastructure inspection solution with computer vision" },
];

const AboutSection = () => (
  <section id="about" className="py-20 relative">
    <div className="section-container">
      <SectionHeading title="About Me" subtitle="Turning complex problems into intelligent solutions" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card glow-border p-6 sm:p-8 max-w-4xl mx-auto"
      >
        <p className="text-foreground/80 leading-relaxed text-sm sm:text-base mb-6">
          I'm a <span className="text-primary font-semibold">Computer Systems Engineering</span> graduate
          and AI Engineer with a passion for building intelligent, production-grade systems. My work spans
          medical image classification using DenseNet, YOLO-based real-time safety detection systems,
          autonomous infrastructure inspection using computer vision, and data analytics dashboards.
          I deploy solutions using Streamlit and have gained hands-on industry experience at the{" "}
          <span className="text-primary">Civil Aviation Authority Pakistan</span> and{" "}
          <span className="text-primary">Itsolera Pvt Ltd</span>, where I contributed to AI-driven
          automation and operational efficiency improvements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30"
            >
              <h.icon className="text-primary text-lg mt-0.5 shrink-0" />
              <p className="text-xs text-foreground/70">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
