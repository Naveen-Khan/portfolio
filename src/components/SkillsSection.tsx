import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiSparkles, HiGlobeAlt, HiServer, HiCog } from "react-icons/hi";

const skillGroups = [
  {
    title: "AI / ML",
    icon: HiSparkles,
    span: "lg:col-span-2",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow", "Keras", "OpenCV", "LangChain", "FAISS", "RAG Pipeline", "LLM APIs"],
  },
  {
    title: "Web Development",
    icon: HiGlobeAlt,
    span: "",
    skills: ["ReactJS", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: HiServer,
    span: "",
    skills: ["Python", "FastAPI", "PHP", "SQL", "MySQL", "Oracle SQL"],
  },
  {
    title: "Tools & Platforms",
    icon: HiCog,
    span: "lg:col-span-2",
    skills: ["Git", "GitHub", "Docker", "Streamlit", "Roboflow", "Google Colab", "Jupyter", "VS Code"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="section-container">
      <SectionHeading title="Tech Stack" subtitle="Tools and technologies I work with" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className={`bento-card p-6 ${group.span}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <group.icon className="text-primary text-lg" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.05 + si * 0.03 }}
                  whileHover={{ y: -2 }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-secondary/60 text-foreground/80 border border-border/50 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_14px_-3px_hsl(var(--primary)/0.5)] transition-all duration-300"
                >
                  {skill}
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
