import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Autonomous Infrastructure Inspection System",
    tech: ["YOLO", "Computer Vision", "Streamlit"],
    description:
      "Computer vision-based road crack detection system with YOLO-based inspection pipeline and interactive Streamlit visualization dashboard.",
    github: "#",
  },
  {
    title: "Medical Disease Diagnosis Agent",
    tech: ["DenseNet", "TensorFlow", "CNN", "Streamlit"],
    description:
      "DenseNet-based MRI classification system achieving high validation accuracy with an interactive prediction interface for clinicians.",
    github: "#",
  },
  {
    title: "Multimodal Smart Wearable Safety System",
    tech: ["YOLO", "Computer Vision", "GPS Tracking", "Voice Commands"],
    description:
      "YOLO-based threat detection with GPS tracking alert system and voice command safety trigger — awarded 2nd place at IEEE Project Exhibition 2025.",
    github: "#",
  },
  {
    title: "Coffee Shop Sales Analysis Dashboard",
    tech: ["Excel", "Pivot Tables", "Data Visualization"],
    description:
      "Excel-based business analytics project featuring pivot tables, interactive charts, sales trend insights, and decision-support visualizations.",
    github: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="section-container">
      <SectionHeading title="Projects" subtitle="Featured work & research" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card card-hover-glow p-6 flex flex-col transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-display text-sm font-bold text-primary flex-1">{p.title}</h3>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors ml-2 shrink-0"
              >
                <FaGithub size={16} />
              </a>
            </div>
            <p className="text-xs text-foreground/70 mb-4 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
