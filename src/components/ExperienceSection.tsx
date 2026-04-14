import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Civil Aviation Authority Pakistan",
    points: [
      "Built enterprise conversational AI system with RAG retrieval pipelines",
      "Indexed 100+ internal documents using FAISS vector store",
      "Improved workflow efficiency by 60% through automated query resolution",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Itsolera Pvt Ltd",
    points: [
      "Trained DenseNet121 CNN for medical image classification",
      "Built end-to-end diagnostic pipeline with data augmentation",
      "Deployed Streamlit-based clinician diagnostic tool",
    ],
  },
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
        className="glass-card p-6"
      >
        {achievements.map((a) => (
          <p key={a} className="text-sm text-foreground/80 mb-2">{a}</p>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
