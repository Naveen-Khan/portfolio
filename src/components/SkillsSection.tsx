const groups: Array<[string, string]> = [
  ["AI / ML", "Machine Learning, Deep Learning, Computer Vision, RAG Systems, LLM Applications"],
  ["Frameworks", "TensorFlow, LangChain, FAISS, Hugging Face, OpenCV, Roboflow"],
  ["Languages", "Python, C++"],
  ["Web & Backend", "FastAPI, React, Tailwind CSS, Streamlit"],
  ["Infrastructure", "Docker, Git, GitHub, SQL, Google Colab"],
];

const Skills = () => (
  <section id="skills" className="section-pad bg-bg">
    <div className="container-page">
      <div className="section-label mb-4">Skills</div>
      <h2 className="section-heading max-w-[700px]">Technical Skills</h2>

      <div className="mt-12 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        {groups.map(([cat, list], i) => (
          <div
            key={cat}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 px-6 py-5 transition-colors duration-200 hover:bg-white/[0.02]"
            style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="md:col-span-3 text-[13px] font-medium uppercase"
              style={{ color: "#52525B", letterSpacing: "0.08em" }}
            >
              {cat}
            </div>
            <div className="md:col-span-9 text-[15px]" style={{ color: "#A1A1AA", lineHeight: 1.7 }}>
              {list}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
