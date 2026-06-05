const items = [
  {
    date: "2024",
    company: "Civil Aviation Authority of Pakistan",
    role: "AI Engineer Intern",
    bullets: [
      "Built CATI — enterprise RAG chatbot using Mistral LLM + FAISS + Groq API",
      "Developed document retrieval pipeline for internal knowledge systems",
      "Optimized LLM inference latency with Groq API integration",
    ],
    tags: ["RAG", "Mistral", "FAISS", "Groq"],
  },
  {
    date: "2024",
    company: "Itsolera Pvt. Ltd.",
    role: "AI Engineer Intern",
    bullets: [
      "DenseNet121 model for medical image disease classification — 93% accuracy",
      "Built end-to-end healthcare prediction pipeline in Streamlit",
      "Deployed production-ready AI diagnostic interface",
    ],
    tags: ["DenseNet121", "TensorFlow", "Streamlit", "Healthcare AI"],
  },
];

const Experience = () => (
  <section id="experience" className="section-pad bg-bg">
    <div className="container-page">
      <div className="section-label mb-4">Experience</div>
      <h2 className="section-heading max-w-[700px]">Where I’ve built.</h2>

      <div className="mt-12 flex flex-col gap-4">
        {items.map((it) => (
          <article key={it.company} className="card-base p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-2 text-[13px] mono" style={{ color: "#52525B" }}>
                {it.date}
              </div>
              <div className="md:col-span-7">
                <h3 className="text-z1" style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em" }}>
                  {it.company}
                </h3>
                <div className="text-indigo-light text-[14px] mt-1">{it.role}</div>
                <ul className="mt-4 space-y-2">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px]" style={{ color: "#A1A1AA", lineHeight: 1.7 }}>
                      <span aria-hidden className="text-z3 mt-[10px] w-1 h-1 rounded-full shrink-0" style={{ background: "#52525B" }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3 flex md:justify-end items-start">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {it.tags.map((t) => (
                    <span key={t} className="tag-accent">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
