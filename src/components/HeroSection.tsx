import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 65%), #0A0A0B",
      }}
    >
      <div className="container-page w-full">
        <div className="max-w-[700px]">
          <div className="pill-accent rise" style={{ animationDelay: "0ms" }}>
            <span className="dot-indigo" />
            AI Engineer · ML Specialist
          </div>

          <h1 className="display-name mt-8">
            <span className="block rise text-z1" style={{ animationDelay: "150ms" }}>
              Naveen
            </span>
            <span className="block rise text-indigo" style={{ animationDelay: "250ms" }}>
              Khan.
            </span>
          </h1>

          <p
            className="rise mt-6 text-z2 max-w-[520px]"
            style={{
              animationDelay: "400ms",
              fontWeight: 300,
              fontSize: "clamp(18px, 2.2vw, 22px)",
              lineHeight: 1.45,
            }}
          >
            I build AI systems that work in the real world.
          </p>

          <p
            className="rise mt-4 max-w-[480px]"
            style={{
              animationDelay: "550ms",
              color: "#71717A",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            RAG pipelines. Computer vision. LLM applications. Shipped at Civil Aviation Authority and Itsolera.
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "700ms" }}>
            <a href="#projects" className="btn-primary">
              View Projects <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Download size={16} /> Download CV
            </a>
          </div>

          <div
            className="rise mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]"
            style={{ animationDelay: "850ms", color: "#52525B" }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="dot-green" />
              <span style={{ color: "#A1A1AA" }}>Open to opportunities</span>
            </span>
            <span aria-hidden>·</span>
            <span className="mono">CGPA 3.6 · MUET</span>
            <span aria-hidden>·</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
