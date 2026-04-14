import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AboutSection = () => (
  <section id="about" className="py-20 relative">
    <div className="section-container">
      <SectionHeading title="About Me" subtitle="Turning complex problems into intelligent solutions" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card glow-border p-6 sm:p-8 max-w-4xl mx-auto"
      >
        <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
          I'm a <span className="text-primary font-semibold">Computer Systems Engineering</span> graduate
          and AI Engineer specializing in building production-grade intelligent systems. My expertise spans
          LLM-based enterprise chatbots with RAG pipelines using FAISS and embeddings, computer vision
          detection systems using YOLO, and medical image classification with DenseNet121. I deploy
          solutions using Streamlit, and have hands-on experience at the{" "}
          <span className="text-primary">Civil Aviation Authority Pakistan</span> and{" "}
          <span className="text-primary">Itsolera Pvt Ltd</span>.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
