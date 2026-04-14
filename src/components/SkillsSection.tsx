import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "C++"],
  },
  {
    title: "Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Feature Engineering", "Model Evaluation Metrics", "Data Augmentation", "Data Annotation"],
  },
  {
    title: "Frameworks",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "NumPy", "Matplotlib", "OpenCV"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Oracle SQL", "SQL Query Writing", "Database Design"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Google Colab", "Jupyter", "VS Code", "Roboflow", "Streamlit"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="section-container">
      <SectionHeading title="Tech Stack" subtitle="Technologies & tools I work with" />
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
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.05 + si * 0.03 }}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/40 hover:shadow-[0_0_10px_-3px_hsl(var(--primary)/0.3)] transition-all duration-300"
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
