import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      for (const l of links) {
        const id = l.href.slice(1);
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 140 && r.bottom >= 140) { setActive(l.href); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-[60px] transition-colors duration-300 ${
          scrolled ? "backdrop-blur-xl" : ""
        }`}
        style={{
          background: scrolled ? "rgba(10,10,11,0.8)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="container-page h-full flex items-center justify-between">
          <a href="#home" className="text-z1 font-medium text-[15px] tracking-tight">
            Naveen Khan
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative text-[14px] transition-colors duration-200"
                  style={{ color: isActive ? "#FAFAFA" : "#71717A" }}
                >
                  {l.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#6366F1", boxShadow: "0 0 8px rgba(99,102,241,0.8)" }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2 text-[13px] font-medium" style={{ color: "#22C55E" }}>
            <span className="dot-green" />
            Available
          </div>

          <button
            className="md:hidden text-z1 p-2 -mr-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "#111113" }}
      >
        <div className="flex items-center justify-between h-[60px] container-page">
          <span className="text-z1 font-medium text-[15px]">Naveen Khan</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2 text-z1">
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 pt-24">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-z1 text-3xl font-display font-bold tracking-tight"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 text-[14px] font-medium mt-6" style={{ color: "#22C55E" }}>
            <span className="dot-green" /> Available for work
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
