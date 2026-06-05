import { Github, ArrowUpRight } from "lucide-react";

const FeaturedVisual = () => (
  <div
    className="relative h-full min-h-[280px] rounded-xl overflow-hidden"
    style={{
      background:
        "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(99,102,241,0.30) 0%, transparent 60%), #0A0A0B",
      border: "1px solid rgba(255,255,255,0.06)",
    }}
  >
    {/* dot grid */}
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
    {/* code snippet */}
    <div
      className="absolute inset-0 p-6 mono text-[12px] leading-[1.8]"
      style={{ color: "rgba(129,140,248,0.55)" }}
    >
      <div>from langchain import FAISS</div>
      <div>from mistral import LLM</div>
      <div className="opacity-70">&nbsp;</div>
      <div>
        <span style={{ color: "#52525B" }}># retrieve context</span>
      </div>
      <div>ctx = vectorstore.search(query, k=4)</div>
      <div>answer = llm.generate(prompt, ctx)</div>
    </div>
    <div
      className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent 70%)", filter: "blur(40px)" }}
    />
  </div>
);

const Projects = () => (
  <section id="projects" className="section-pad bg-surface">
    <div className="container-page">
      <div className="section-label mb-4">Projects</div>
      <h2 className="section-heading max-w-[700px]">What I’ve shipped.</h2>

      <div className="mt-12 flex flex-col gap-4">
        {/* Featured */}
        <article
          className="rounded-2xl p-8 md:p-12 shadow-feature"
          style={{
            background: "linear-gradient(135deg, #111113 0%, #16161A 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="text-indigo text-[12px] font-medium uppercase" style={{ letterSpacing: "0.08em" }}>
                Featured Project
              </div>
              <h3
                className="mt-3 text-z1"
                style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: "clamp(24px, 3.5vw, 32px)", letterSpacing: "-0.02em" }}
              >
                CATI — AI Chatbot Assistant
              </h3>
              <p className="mt-4 max-w-[440px]" style={{ color: "#A1A1AA", fontSize: 16, lineHeight: 1.75 }}>
                Enterprise RAG-based AI chatbot deployed at Civil Aviation Authority of Pakistan.
                Retrieves and synthesizes information from internal documents using Mistral LLM,
                FAISS vector search, and Groq API for real-time inference.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["RAG", "Mistral LLM", "FAISS", "Groq", "Hugging Face"].map((t) => (
                  <span key={t} className="tag-accent">{t}</span>
                ))}
              </div>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-ghost mt-8">
                <Github size={16} /> View on GitHub
              </a>
            </div>
            <div className="lg:col-span-2">
              <FeaturedVisual />
            </div>
          </div>
        </article>

        {/* Row of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="card-base p-8 relative overflow-hidden">
            <div className="text-indigo text-[12px] font-medium uppercase" style={{ letterSpacing: "0.08em" }}>
              Deep Learning
            </div>
            <h3 className="mt-3 text-z1" style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>
              Medical Diagnosis Agent
            </h3>
            <div
              className="absolute top-6 right-6 mono"
              style={{ color: "#6366F1", fontSize: 36, fontWeight: 500, lineHeight: 1 }}
            >
              93%
            </div>
            <p className="mt-4" style={{ color: "#A1A1AA", fontSize: 15, lineHeight: 1.7 }}>
              DenseNet121 model for medical imaging classification. Built complete ML pipeline from
              preprocessing to Streamlit deployment.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["DenseNet121", "OpenCV", "Streamlit"].map((t) => (
                <span key={t} className="tag-accent">{t}</span>
              ))}
            </div>
          </article>

          <article className="card-base p-8">
            <div className="text-indigo text-[12px] font-medium uppercase" style={{ letterSpacing: "0.08em" }}>
              Computer Vision
            </div>
            <h3 className="mt-3 text-z1" style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>
              Smart Safety Wearable
            </h3>
            <p className="mt-4" style={{ color: "#A1A1AA", fontSize: 15, lineHeight: 1.7 }}>
              Real-time YOLO object detection for personal safety. Emergency alert system.
              IEEE competition project.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["YOLO", "OpenCV", "Real-time"].map((t) => (
                <span key={t} className="tag-accent">{t}</span>
              ))}
            </div>
            <ArrowUpRight size={16} className="absolute opacity-0" />
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
