import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  SiPython, SiCplusplus, SiTensorflow, SiKeras, SiScikitlearn, SiNumpy,
  SiOpencv, SiMysql, SiHtml5, SiCss, SiJavascript, SiPhp,
  SiGit, SiGithub, SiDocker, SiStreamlit, SiJupyter,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { HiSparkles } from "react-icons/hi";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "C++", Icon: SiCplusplus },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", Icon: HiSparkles },
      { name: "Computer Vision", Icon: HiSparkles },
      { name: "RAG Pipeline", Icon: HiSparkles },
      { name: "LLM API", Icon: HiSparkles },
      { name: "Model Evaluation", Icon: HiSparkles },
      { name: "Data Augmentation", Icon: HiSparkles },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "Keras", Icon: SiKeras },
      { name: "Scikit-learn", Icon: SiScikitlearn },
      { name: "NumPy", Icon: SiNumpy },
      { name: "OpenCV", Icon: SiOpencv },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", Icon: SiMysql },
      { name: "Oracle SQL", Icon: DiDatabase },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "PHP", Icon: SiPhp },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Docker", Icon: SiDocker },
      { name: "Streamlit", Icon: SiStreamlit },
      { name: "Jupyter", Icon: SiJupyter },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-32 relative overflow-hidden">
    {/* Concentric rings background */}
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
      <div className="absolute w-[400px] h-[400px] rounded-full border border-copper/15 animate-spin-slow" />
      <div className="absolute w-[600px] h-[600px] rounded-full border border-copper/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "45s" }} />
      <div className="absolute w-[800px] h-[800px] rounded-full border border-copper/5 animate-spin-slow" style={{ animationDuration: "60s" }} />
      <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-radial blur-2xl"
        style={{ background: "radial-gradient(circle, hsl(25 78% 55% / 0.35), transparent)" }} />
    </div>

    <div className="section-container relative z-10">
      <SectionHeading eyebrow="02 — Toolkit" title="Tech Stack" subtitle="The instruments behind the craft" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative p-6 rounded-3xl glass-card card-hover-glow overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "radial-gradient(circle, hsl(30 90% 65% / 0.3), transparent)" }} />
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl text-foreground/95">{group.title}</h3>
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono-code text-copper-glow/60">
                0{gi + 1}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s, si) => (
                <motion.span
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.05 + si * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-secondary/60 border border-border/60 text-foreground/85 hover:border-copper/60 hover:text-copper-glow hover:shadow-[0_0_20px_-5px_hsl(25_78%_55%_/_0.5)] transition-all"
                >
                  <s.Icon className="text-copper-glow/90 text-sm" />
                  {s.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
