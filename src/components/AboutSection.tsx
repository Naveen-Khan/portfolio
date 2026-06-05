import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, decimals = 0, duration = 1200) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(target * eased);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { ref, value: decimals === 0 ? Math.round(val) : val.toFixed(decimals) };
}

const Stat = ({
  value,
  decimals = 0,
  suffix = "",
  label,
  accent = false,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  accent?: boolean;
}) => {
  const { ref, value: v } = useCountUp(value, decimals);
  return (
    <div ref={ref} className="card-base p-8">
      <div
        className="mono"
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 500,
          lineHeight: 1,
          color: accent ? "#6366F1" : "#FAFAFA",
        }}
      >
        {v}
        {suffix}
      </div>
      <div className="mt-3 text-[14px]" style={{ color: "#71717A" }}>{label}</div>
    </div>
  );
};

const About = () => (
  <section id="about" className="section-pad bg-surface">
    <div className="container-page">
      <div className="section-label mb-4">About</div>
      <h2 className="section-heading max-w-[700px]">The numbers that matter.</h2>

      <div className="mt-12 grid grid-cols-2 gap-4">
        <Stat value={3.6} decimals={1} label="GPA / 4.0 — MUET" />
        <Stat value={93} suffix="%" label="Model accuracy — DenseNet121" accent />
        <Stat value={2} suffix="×" label="AI internships — enterprise scale" />
        <Stat value={3} suffix="+" label="Production AI systems shipped" />
      </div>

      <p
        className="mt-12 max-w-[600px]"
        style={{ color: "#71717A", fontSize: "17px", lineHeight: 1.7 }}
      >
        B.E. Computer Systems Engineering, Mehran University of Engineering & Technology.
        Building intelligent systems in Karachi — RAG, computer vision, and LLM applications.
      </p>
    </div>
  </section>
);

export default About;
