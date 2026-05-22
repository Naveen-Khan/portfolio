import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import portrait from "@/assets/about-portrait.jpg";
import { HiLightningBolt, HiShieldCheck, HiEye, HiChartBar } from "react-icons/hi";

const highlights = [
  { icon: HiLightningBolt, text: "Built intelligent chatbot systems using RAG pipelines and LLM APIs" },
  { icon: HiShieldCheck, text: "High-accuracy medical classification model with DenseNet" },
  { icon: HiEye, text: "Real-time safety monitoring system using YOLO" },
  { icon: HiChartBar, text: "Automated infrastructure inspection with computer vision" },
];

const AboutSection = () => (
  <section id="about" className="py-32 relative overflow-hidden">
    {/* Floating gradient orbs */}
    <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(25 78% 55% / 0.5), transparent 70%)", filter: "blur(80px)", animation: "drift 18s ease-in-out infinite" }} />
    <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full opacity-25 pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(30 55% 42% / 0.6), transparent 70%)", filter: "blur(70px)", animation: "drift 22s ease-in-out infinite reverse" }} />

    <div className="section-container relative z-10">
      <SectionHeading eyebrow="01 — Origin Story" title="About Me" subtitle="Turning complex problems into intelligent, cinematic solutions" />

      <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card glow-border">
            <img src={portrait} alt="Naveen Khan portrait" loading="lazy" width={768} height={960}
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            {/* corner ornaments */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-copper/70 rounded-tl-2xl" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-copper/70 rounded-br-2xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif-italic text-copper-glow text-sm mb-1">— Engineer & Storyteller</p>
              <p className="font-display text-2xl text-foreground">Naveen Khan</p>
            </div>
          </div>
          {/* floating stat tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -right-6 glass-card glow-border px-5 py-4 rounded-2xl"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-glow/80">CGPA</p>
            <p className="font-display text-3xl gradient-text-warm">3.6<span className="text-base text-muted-foreground">/4.0</span></p>
          </motion.div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <p className="font-serif-italic text-2xl sm:text-3xl text-foreground/90 leading-snug">
            “I build intelligent systems that bridge the gap between
            <span className="gradient-text-warm"> raw data </span>
            and
            <span className="gradient-text-warm"> real decisions</span>.”
          </p>
          <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
            I'm a <span className="text-copper-glow font-semibold">Computer Systems Engineering</span> graduate and
            AI Engineer with a passion for production-grade machine intelligence — from
            DenseNet-powered medical imaging to YOLO safety detection, RAG chatbots and
            autonomous inspection. Hands-on industry experience at the{" "}
            <span className="text-copper-glow">Civil Aviation Authority Pakistan</span> and{" "}
            <span className="text-copper-glow">Itsolera Pvt Ltd</span>.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-3 p-4 rounded-2xl glass-card card-hover-glow"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-copper-glow/30 to-bronze/20 border border-copper/40 flex items-center justify-center shrink-0">
                  <h.icon className="text-copper-glow" />
                </div>
                <p className="text-xs sm:text-sm text-foreground/80 pt-1">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
