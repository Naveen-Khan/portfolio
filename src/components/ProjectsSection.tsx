import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "CATI AI Chatbot Assistant",
    tech: ["Mistral LLM", "Groq API", "FAISS", "LangChain", "FastAPI"],
    description:
      "Enterprise conversational assistant using RAG pipelines across 100+ PDFs, improving response speed by 40%.",
  },
  {
    title: "Medical Disease Diagnosis Agent",
    tech: ["DenseNet121", "TensorFlow", "CNN", "Streamlit"],
    description:
      "MRI and X-ray classification system achieving 93% validation accuracy with a clinician-friendly interface.",
  },
  {
    title: "Multimodal Smart Wearable Safety System",
    tech: ["YOLO", "Computer Vision", "GPS Tracking", "Voice Commands"],
    description:
      "Real-time threat detection wearable achieving 91% precision — awarded 2nd place at IEEE Project Exhibition 2025.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="section-container">
      <SectionHeading title="Projects" subtitle="Featured work & research" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
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
            <h3 className="font-display text-sm font-bold text-primary mb-2">{p.title}</h3>
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
