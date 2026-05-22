import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiAcademicCap, HiBookOpen, HiCalendar, HiLocationMarker } from "react-icons/hi";

const coursework = [
  "Database Management", "Linear Algebra", "Statistics",
  "Object-Oriented Programming", "Data Science", "Artificial Intelligence",
];

const EducationSection = () => (
  <section id="education" className="py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(30 55% 42% / 0.6), transparent 70%)", filter: "blur(80px)" }} />

    <div className="section-container relative z-10 max-w-6xl">
      <SectionHeading eyebrow="05 — Foundation" title="Education" subtitle="Where curiosity was sharpened into engineering" />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        {/* main degree card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4 glass-card glow-border p-8 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-50 group-hover:opacity-80 transition-opacity"
            style={{ background: "radial-gradient(circle, hsl(25 78% 55% / 0.4), transparent)", filter: "blur(20px)" }} />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-copper-glow/30 to-bronze/20 border border-copper/40 flex items-center justify-center">
                <HiAcademicCap className="text-copper-glow text-2xl" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono-code text-copper-glow/80">Degree</span>
            </div>
            <h3 className="font-display text-3xl text-foreground/95 mb-1">Bachelor of Engineering</h3>
            <p className="font-serif-italic text-xl gradient-text-warm mb-4">Computer Systems Engineering</p>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><HiLocationMarker /> Mehran UET, Jamshoro</span>
              <span className="inline-flex items-center gap-1.5"><HiCalendar /> Graduated</span>
            </div>
          </div>
        </motion.div>

        {/* CGPA bento tile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-2 glass-card glow-border p-8 rounded-3xl flex flex-col items-center justify-center text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-glow/80 mb-2">CGPA</p>
          <p className="font-display text-7xl gradient-text-warm leading-none">3.6</p>
          <p className="text-xs text-muted-foreground mt-2">out of 4.0</p>
        </motion.div>

        {/* Coursework bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-6 glass-card p-8 rounded-3xl"
        >
          <div className="flex items-center gap-2 mb-5">
            <HiBookOpen className="text-copper-glow text-xl" />
            <h4 className="font-display text-lg text-foreground/90">Relevant Coursework</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-xs px-4 py-2 rounded-full bg-secondary/60 border border-border/60 text-foreground/85 hover:border-copper/60 hover:text-copper-glow transition-all"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
