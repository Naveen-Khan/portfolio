import { ArrowUpRight } from "lucide-react";

const cards = [
  { label: "Email", value: "naveen.khan@example.com", href: "mailto:naveen.khan@example.com" },
  { label: "LinkedIn", value: "linkedin.com/in/naveenkhan", href: "https://linkedin.com/in/naveenkhan" },
  { label: "GitHub", value: "github.com/naveenkhan", href: "https://github.com/naveenkhan" },
];

const Contact = () => (
  <section id="contact" className="section-pad bg-surface">
    <div className="container-page">
      <div className="max-w-[640px] mx-auto text-center">
        <h2
          className="text-z1"
          style={{
            fontFamily: "'Plus Jakarta Sans'",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            fontSize: "clamp(36px, 6vw, 56px)",
            lineHeight: 1.05,
          }}
        >
          Let’s work together.
        </h2>
        <p className="mt-4" style={{ color: "#71717A", fontSize: 18, lineHeight: 1.7 }}>
          Open for AI engineering roles, research collaborations, and freelance projects.
        </p>
      </div>

      <div className="max-w-[640px] mx-auto mt-12 flex flex-col gap-3">
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group card-base flex items-center justify-between gap-6 px-6 py-5 md:px-8 md:py-6"
          >
            <div>
              <div
                className="text-[13px] font-medium uppercase"
                style={{ color: "#52525B", letterSpacing: "0.08em" }}
              >
                {c.label}
              </div>
              <div className="mt-1 text-z1 font-medium text-[16px] md:text-[17px] break-all">
                {c.value}
              </div>
            </div>
            <ArrowUpRight
              size={22}
              className="text-indigo shrink-0 transition-transform duration-300 group-hover:rotate-45"
            />
          </a>
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto mt-20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
           style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="text-[13px]" style={{ color: "#52525B" }}>Naveen Khan © 2025</div>
        <div className="text-[13px]" style={{ color: "#27272A" }}>Designed & built with precision</div>
      </div>
    </div>
  </section>
);

export default Contact;
