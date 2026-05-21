import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiLightningBolt, HiShieldCheck, HiEye, HiChartBar, HiCode, HiSparkles } from "react-icons/hi";

const highlights = [
  { icon: HiLightningBolt, text: "Intelligent chatbot systems with RAG pipelines and LLM APIs" },
  { icon: HiShieldCheck, text: "High-accuracy medical classification with DenseNet" },
  { icon: HiEye, text: "Real-time safety monitoring system using YOLO" },
  { icon: HiChartBar, text: "Automated infrastructure inspection with computer vision" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="section-container">
      <SectionHeading title="About Me" subtitle="Turning complex problems into intelligent solutions" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {/* Profile / intro bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card lg:col-span-2 p-7"
        >
          <div className="flex items-center gap-2 text-xs font-mono-code text-primary mb-4">
            <HiSparkles /> WHO I AM
          </div>
          <p className="text-foreground/85 leading-relaxed text-sm sm:text-base">
            Passionate <span className="text-primary font-semibold">AI/ML Engineer</span> and{" "}
            <span className="text-primary font-semibold">Computer Systems Engineer</span> focused on
            building intelligent systems, modern web applications, and innovative AI-powered solutions.
            Hands-on industry experience at the{" "}
            <span className="text-primary">Civil Aviation Authority Pakistan</span> and{" "}
            <span className="text-primary">Itsolera Pvt Ltd</span>.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { k: "5+", v: "Projects" },
              { k: "2", v: "Internships" },
              { k: "1st", v: "IEEE Awarded" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl bg-secondary/40 border border-border/40 p-3 text-center">
                <div className="font-display text-xl text-primary font-bold">{s.k}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Avatar bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bento-card glow-border p-6 flex flex-col items-center justify-center text-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center font-display text-3xl font-bold text-primary-foreground shadow-[0_0_40px_-5px_hsl(var(--primary))]"
          >
            NK
          </motion.div>
          <p className="mt-4 font-display text-sm text-foreground font-semibold">Naveen Khan</p>
          <p className="text-xs text-muted-foreground">Karachi, Pakistan</p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-mono-code text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Online
          </div>
        </motion.div>

        {/* Highlights bento */}
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bento-card p-5 flex items-start gap-3"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <h.icon className="text-primary text-lg" />
            </div>
            <p className="text-xs text-foreground/75 leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
