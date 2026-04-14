import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiAcademicCap } from "react-icons/hi";

const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="section-container max-w-3xl">
      <SectionHeading title="Education" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card glow-border p-6 text-center"
      >
        <HiAcademicCap className="text-4xl text-primary mx-auto mb-3" />
        <h3 className="font-display text-sm font-bold text-primary">
          Bachelor of Engineering
        </h3>
        <p className="text-foreground/80 text-sm">Computer Systems Engineering</p>
        <p className="text-muted-foreground text-xs mt-1">
          Mehran University of Engineering & Technology
        </p>
        <div className="mt-3 inline-block bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
          <span className="font-display text-lg font-bold text-primary">3.6</span>
          <span className="text-muted-foreground text-xs"> / 4.0 CGPA</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
