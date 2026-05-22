import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiBriefcase, HiStar } from "react-icons/hi";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Civil Aviation Authority Pakistan",
    date: "Jul 2025 — Aug 2025",
    points: [
      "Built conversational automation system for internal operations",
      "Worked on document indexing pipelines for efficient retrieval",
      "Improved internal workflow efficiency through AI-based automation",
      "Supported AI-driven operational automation initiatives",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Itsolera Pvt Ltd",
    date: "Jan 2026 — Mar 2026",
    points: [
      "Built DenseNet medical image classification system",
      "Performed dataset augmentation to improve robustness",
      "Improved validation accuracy through training optimization",
      "Built Streamlit-based prediction interface for clinicians",
    ],
  },
];

const achievements = [
  "🏆  2nd Place — IEEE Computer Society Project Exhibition MUET 2025",
  "🎖️  Leadership Recognition — Civil Aviation Training Institute, Hyderabad Airport",
];

const ExperienceSection = () => (
  <section id="experience" className="py-32 relative overflow-hidden">
    {/* floating particles */}
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-copper-glow/50 animate-float pointer-events-none"
        style={{
          left: `${(i * 83) % 100}%`,
          top: `${(i * 47) % 100}%`,
          animationDelay: `${i * 0.7}s`,
          animationDuration: `${5 + (i % 4)}s`,
          boxShadow: "0 0 10px hsl(25 78% 55% / 0.6)",
        }}
      />
    ))}

    <div className="section-container relative z-10 max-w-4xl">
      <SectionHeading eyebrow="04 — Journey" title="Where I've Worked" subtitle="Industry experience that shaped the craft" />

      <div className="relative">
        {/* vertical glowing line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/60 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}
            >
              {/* node */}
              <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="relative w-4 h-4 rounded-full bg-copper-glow shadow-[0_0_25px_hsl(30_90%_65%_/_0.9)]">
                  <div className="absolute inset-0 rounded-full bg-copper-glow animate-ping opacity-60" />
                </div>
              </div>

              <div className={`glass-card glow-border p-6 rounded-3xl ${i % 2 === 0 ? "sm:text-right" : ""}`}>
                <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "sm:justify-end" : ""}`}>
                  <HiBriefcase className="text-copper-glow" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-copper-glow/80 font-mono-code">{exp.date}</p>
                </div>
                <h3 className="font-display text-xl text-foreground/95">{exp.role}</h3>
                <p className="text-sm gradient-text-warm font-semibold mb-4">{exp.company}</p>
                <ul className={`space-y-2 ${i % 2 === 0 ? "sm:text-right" : ""}`}>
                  {exp.points.map((pt) => (
                    <li key={pt} className="text-xs text-foreground/70 leading-relaxed">{pt}</li>
                  ))}
                </ul>
              </div>
              <div />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <HiStar className="text-copper-glow" />
          <h3 className="font-display text-2xl gradient-text-warm">Milestones</h3>
        </div>
        <div className="glass-card glow-border p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto">
          {achievements.map((a) => (
            <p key={a} className="text-sm text-foreground/85 py-2 border-b border-border/30 last:border-0">{a}</p>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
