import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import SectionHeading from "./SectionHeading";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    n: "01",
    title: "AI-Powered Chatbot Assistant",
    tag: "RAG · LLM · NLP",
    tech: ["RAG", "LLM", "Python", "NLP"],
    description:
      "A RAG-based conversational assistant with intelligent document retrieval and context-aware responses — built for production-grade enterprise workflows.",
    github: "https://github.com/Naveen-Khan/CATI--chatbot",
  },
  {
    n: "02",
    title: "Autonomous Infrastructure Inspection",
    tag: "Computer Vision · YOLO",
    tech: ["YOLO", "Computer Vision", "Streamlit"],
    description:
      "End-to-end road-crack detection system with a YOLO inspection pipeline and a polished Streamlit visualization dashboard.",
    github: "https://github.com/Naveen-Khan/Autonomous-Infrastructure-Inspection-System",
  },
  {
    n: "03",
    title: "Medical Disease Diagnosis Agent",
    tag: "DenseNet · TensorFlow",
    tech: ["DenseNet", "TensorFlow", "CNN", "Streamlit"],
    description:
      "DenseNet-based MRI classification reaching high validation accuracy, paired with an interactive prediction UI built for clinicians.",
    github: "#",
  },
  {
    n: "04",
    title: "Multimodal Smart Wearable Safety System",
    tag: "YOLO · GPS · Voice",
    tech: ["YOLO", "GPS", "Voice Commands"],
    description:
      "YOLO threat detection + GPS alerts + voice-triggered safety system. 🏆 2nd place — IEEE Project Exhibition 2025.",
    github: "https://github.com/Naveen-Khan/Multimodal-Smar-Wearable-Device-For-Personal-Saftey",
  },
  {
    n: "05",
    title: "Coffee Shop Sales Analytics",
    tag: "Excel · Data Viz",
    tech: ["Excel", "Pivot Tables", "Data Viz"],
    description:
      "Business analytics with pivot tables, trend insights and decision-support visualizations — designed for non-technical stakeholders.",
    github: "https://github.com/Naveen-Khan/Data-Analyst-projects",
  },
];

const ProjectCard = ({ p, i }: { p: typeof projects[number]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="group relative rounded-3xl overflow-hidden glass-card card-hover-glow p-7 sm:p-9 cursor-pointer"
    >
      {/* hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), hsl(25 78% 55% / 0.18), transparent 60%)" }} />
      <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono-code text-xs text-copper-glow/70 tracking-widest">{p.n}</span>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-copper-glow border border-border/50 hover:border-copper/60 transition-all"
          >
            <FaGithub size={15} />
          </a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-copper-glow/80 mb-3">{p.tag}</p>
        <h3 className="font-display text-2xl sm:text-3xl text-foreground/95 leading-tight mb-3 group-hover:gradient-text-warm transition-all">
          {p.title}
        </h3>
        <p className="text-sm text-foreground/65 leading-relaxed mb-6 flex-1">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tech.map((t) => (
            <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-copper/10 text-copper-glow border border-copper/25">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-copper-glow/80 group-hover:text-copper-glow transition-colors">
          Case Study <HiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-32 relative overflow-hidden">
    <div className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(25 78% 55% / 0.5), transparent 70%)", filter: "blur(100px)" }} />
    <div className="section-container relative z-10">
      <SectionHeading eyebrow="03 — Selected Work" title="What I've Built" subtitle="Case studies in applied intelligence" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
