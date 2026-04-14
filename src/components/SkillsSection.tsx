import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "C++"],
  },
  {
    title: "ML & AI",
    skills: ["Machine Learning", "Computer Vision", "LLMs", "RAG Pipeline", "Feature Engineering"],
  },
  {
    title: "Frameworks",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "PyTorch", "OpenCV", "Hugging Face", "FAISS"],
  },
  {
    title: "Web Dev",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Streamlit"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Google Colab", "Jupyter", "VS Code", "Roboflow"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Oracle SQL", "Vector DBs"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="section-container">
      <SectionHeading title="Skills" subtitle="Technologies & tools I work with" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.08 }}
            className="glass-card card-hover-glow p-5 transition-all duration-300"
          >
            <h3 className="font-display text-xs font-semibold text-primary mb-3 uppercase tracking-wider">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
