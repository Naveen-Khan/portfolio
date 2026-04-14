import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Civil Aviation Authority Pakistan",
    points: [
      "Built conversational automation system for internal operations",
      "Worked on document indexing pipelines for efficient retrieval",
      "Improved internal workflow efficiency through AI-based automation",
      "Supported AI-driven operational automation initiatives",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Itsolera Pvt Ltd",
    points: [
      "Built DenseNet medical image classification system",
      "Performed dataset augmentation to improve model robustness",
      "Improved validation accuracy through training optimization",
      "Built Streamlit-based prediction interface for clinicians",
    ],
  },
];

const certs = [
  "IEEE Membership",
  "Engineering Alert Workshop",
  "AI Intern — Civil Aviation Authority Pakistan",
  "AI Intern — Itsolera Pvt Ltd",
  "2D Animation Course — TIF Hacks Institution",
];

const achievements = [
  "🏆 2nd Place — IEEE Computer Society Project Exhibition MUET 2025",
  "🎖️ Leadership Recognition — Civil Aviation Training Institute, Hyderabad Airport",
];

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="section-container max-w-4xl">
      <SectionHeading title="Experience" />
      <div className="space-y-5 mb-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card glow-border p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
            <h3 className="font-display text-sm font-bold text-primary">{exp.role}</h3>
            <p className="text-xs text-muted-foreground mb-3">{exp.company}</p>
            <ul className="space-y-1.5">
              {exp.points.map((pt) => (
                <li key={pt} className="text-xs text-foreground/70 flex items-start gap-2">
                  <span className="text-primary mt-0.5">▹</span> {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <SectionHeading title="Achievements" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 mb-16"
      >
        {achievements.map((a) => (
          <p key={a} className="text-sm text-foreground/80 mb-2 last:mb-0">{a}</p>
        ))}
      </motion.div>

      <SectionHeading title="Certifications" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 justify-center"
      >
        {certs.map((c, i) => (
          <motion.span
            key={c}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="glass-card text-xs px-3 py-1.5 text-foreground/70 border border-border/50 hover:border-primary/40 transition-colors"
          >
            {c}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
