import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "AI-Powered Chatbot Assistant",
    tech: ["RAG", "LLM", "Python", "NLP"],
    description:
      "RAG-based conversational AI for intelligent document retrieval and context-aware responses.",
    github: "https://github.com/Naveen-Khan/CATI--chatbot",
    demo: "",
    gradient: "from-primary/30 via-primary/10 to-transparent",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    title: "Autonomous Infrastructure Inspection",
    tech: ["YOLO", "Computer Vision", "Streamlit"],
    description:
      "Road crack detection with YOLO and an interactive Streamlit dashboard.",
    github: "https://github.com/Naveen-Khan/Autonomous-Infrastructure-Inspection-System",
    demo: "",
    gradient: "from-primary/20 to-transparent",
    span: "",
  },
  {
    title: "Medical Disease Diagnosis Agent",
    tech: ["DenseNet", "TensorFlow", "CNN"],
    description:
      "DenseNet-based MRI classification with high validation accuracy and a clinician UI.",
    github: "#",
    demo: "",
    gradient: "from-primary/20 to-transparent",
    span: "",
  },
  {
    title: "Multimodal Smart Wearable Safety",
    tech: ["YOLO", "GPS", "Voice"],
    description:
      "YOLO threat detection, GPS alerts and voice safety triggers — 2nd place IEEE 2025.",
    github: "https://github.com/Naveen-Khan/Multimodal-Smar-Wearable-Device-For-Personal-Saftey",
    demo: "",
    gradient: "from-primary/20 to-transparent",
    span: "lg:col-span-2",
  },
  {
    title: "Coffee Shop Sales Dashboard",
    tech: ["Excel", "Pivot Tables", "Viz"],
    description:
      "Business analytics with pivot tables, interactive charts and trend insights.",
    github: "https://github.com/Naveen-Khan/Data-Analyst-projects",
    demo: "",
    gradient: "from-primary/20 to-transparent",
    span: "",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="section-container">
      <SectionHeading title="What I've Built" subtitle="Featured work & research" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(220px,auto)] gap-5 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.015 }}
            className={`bento-card p-6 flex flex-col group ${p.span}`}
          >
            {/* Thumbnail / gradient block */}
            <div className={`relative mb-4 rounded-xl overflow-hidden border border-border/40 bg-gradient-to-br ${p.gradient} ${p.featured ? "h-40" : "h-24"} flex items-center justify-center`}>
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)/0.5) 1px, transparent 0)",
                backgroundSize: "16px 16px",
              }} />
              <span className="relative font-display text-3xl font-bold text-primary/80 group-hover:scale-110 transition-transform duration-500">
                {p.title.split(" ").map((w) => w[0]).slice(0, 3).join("")}
              </span>
            </div>

            <h3 className="font-display text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-xs text-foreground/65 mb-4 flex-1 leading-relaxed">{p.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-border hover:border-primary/60 hover:text-primary transition-all"
              >
                <FaGithub size={12} /> Code
              </a>
              <a
                href={p.demo || p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-primary/90 text-primary-foreground hover:bg-primary transition-all shadow-[0_0_18px_-6px_hsl(var(--primary))]"
              >
                <HiExternalLink size={14} /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
