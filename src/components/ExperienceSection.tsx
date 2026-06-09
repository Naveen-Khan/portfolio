import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiBriefcase, HiOfficeBuilding, HiCalendar, HiLocationMarker } from "react-icons/hi";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Civil Aviation Authority Pakistan",
    location: "Islamabad, PK",
    date: "Jul 2025 — Aug 2025",
    tag: "Government / Aviation",
    summary:
      "Designed conversational automation and document intelligence pipelines for internal aviation operations.",
    points: [
      "Built an internal conversational assistant using LLM APIs to automate repetitive operations and FAQs",
      "Engineered document indexing & retrieval pipelines (chunking, embeddings, vector search) over policy documents",
      "Integrated retrieval-augmented generation (RAG) to deliver citation-backed answers to officers",
      "Improved internal workflow efficiency and reduced manual lookup time through AI-driven automation",
    ],
    stack: ["Python", "LangChain", "OpenAI API", "FAISS", "FastAPI"],
  },
  {
    role: "AI Engineer Intern",
    company: "Itsolera Pvt Ltd",
    location: "Islamabad, PK",
    date: "Jan 2026 — Mar 2026",
    tag: "AI / Healthcare",
    summary:
      "Developed a production-grade deep learning system for medical image classification with a clinician-facing UI.",
    points: [
      "Built a DenseNet121-based medical image classifier with transfer learning for high diagnostic accuracy",
      "Performed dataset augmentation (rotation, flips, contrast) to boost robustness on unseen scans",
      "Tuned training (learning rate scheduling, early stopping) to lift validation accuracy significantly",
      "Shipped a Streamlit prediction interface with Grad-CAM heatmaps for clinician explainability",
    ],
    stack: ["PyTorch", "DenseNet121", "OpenCV", "Streamlit", "Grad-CAM"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-32 relative overflow-hidden">
    {/* Ambient orbs */}
    <div
      aria-hidden
      className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none opacity-30"
      style={{
        background: "radial-gradient(circle, hsl(22 90% 55% / 0.55), transparent 70%)",
        filter: "blur(90px)",
        animation: "drift 20s ease-in-out infinite",
      }}
    />
    <div
      aria-hidden
      className="absolute bottom-1/4 -right-32 w-[460px] h-[460px] rounded-full pointer-events-none opacity-25"
      style={{
        background: "radial-gradient(circle, hsl(25 55% 38% / 0.55), transparent 70%)",
        filter: "blur(90px)",
        animation: "drift 26s ease-in-out infinite reverse",
      }}
    />

    {/* Floating particles */}
    {[...Array(14)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-copper-glow/60 animate-float pointer-events-none"
        style={{
          left: `${(i * 73) % 100}%`,
          top: `${(i * 41) % 100}%`,
          animationDelay: `${i * 0.6}s`,
          animationDuration: `${5 + (i % 4)}s`,
          boxShadow: "0 0 12px hsl(25 78% 55% / 0.7)",
        }}
      />
    ))}

    <div className="section-container relative z-10 max-w-6xl">
      <SectionHeading
        eyebrow="04 — Journey"
        title="Where I've Worked"
        subtitle="Industry experience that shaped the craft — from aviation automation to medical AI."
        variant="slide"
      />

      <div className="relative mt-16">
        {/* Vertical timeline line */}
        <div
          aria-hidden
          className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-copper/60 to-transparent"
        />
        <div
          aria-hidden
          className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/60 to-transparent"
        />

        <div className="space-y-16 md:space-y-24">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={exp.company}
                className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                  <div className="relative w-5 h-5 rounded-full bg-copper-glow shadow-[0_0_30px_hsl(30_90%_65%_/_0.95)]">
                    <div className="absolute inset-0 rounded-full bg-copper-glow animate-ping opacity-50" />
                    <div className="absolute inset-1 rounded-full bg-background" />
                  </div>
                </div>

                {/* Card — alternating left/right */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -80 : 80, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className={`pl-12 md:pl-0 ${
                    isLeft ? "md:col-start-1 md:pr-10" : "md:col-start-2 md:pl-10"
                  }`}
                >
                  <div
                    className={`group glass-card glow-border rounded-3xl p-7 sm:p-8 relative overflow-hidden card-hover-glow ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* Decorative gradient sheen */}
                    <div
                      aria-hidden
                      className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle, hsl(22 90% 55% / 0.35), transparent 70%)",
                        filter: "blur(40px)",
                      }}
                    />

                    {/* Tag */}
                    <div
                      className={`flex items-center gap-2 mb-4 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-[0.3em] font-mono-code px-3 py-1 rounded-full border border-copper/40 bg-copper/10 text-copper-glow">
                        {exp.tag}
                      </span>
                    </div>

                    {/* Role + Company */}
                    <h3 className="font-display text-2xl sm:text-3xl text-foreground/95 leading-tight">
                      {exp.role}
                    </h3>
                    <div
                      className={`flex flex-wrap items-center gap-3 mt-2 mb-4 text-sm ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <span className="flex items-center gap-1.5 gradient-text-warm font-semibold">
                        <HiOfficeBuilding className="text-copper-glow" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-foreground/60">
                        <HiLocationMarker /> {exp.location}
                      </span>
                    </div>

                    {/* Date */}
                    <div
                      className={`flex items-center gap-2 mb-5 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <HiCalendar className="text-copper-glow text-sm" />
                      <p className="text-[11px] uppercase tracking-[0.3em] text-copper-glow/80 font-mono-code">
                        {exp.date}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-foreground/80 italic font-serif-italic mb-5 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Bullet points */}
                    <ul className={`space-y-2.5 mb-6 ${isLeft ? "md:text-right" : ""}`}>
                      {exp.points.map((pt, idx) => (
                        <motion.li
                          key={pt}
                          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                          className={`flex items-start gap-2 text-xs sm:text-sm text-foreground/75 leading-relaxed ${
                            isLeft ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper-glow shrink-0 shadow-[0_0_8px_hsl(25_78%_55%)]" />
                          <span className="flex-1">{pt}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Stack chips */}
                    <div
                      className={`flex flex-wrap gap-2 pt-4 border-t border-copper/20 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono-code px-2.5 py-1 rounded-md bg-gradient-to-br from-copper/10 to-bronze/10 border border-copper/30 text-foreground/80 hover:border-copper-glow hover:text-copper-glow transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Briefcase corner icon */}
                    <div
                      className={`absolute top-5 ${
                        isLeft ? "left-5" : "right-5"
                      } w-9 h-9 rounded-xl bg-gradient-to-br from-copper-glow/30 to-bronze/20 border border-copper/40 flex items-center justify-center`}
                    >
                      <HiBriefcase className="text-copper-glow" />
                    </div>
                  </div>
                </motion.div>

                {/* Empty spacer column for alternating layout */}
                <div className="hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
