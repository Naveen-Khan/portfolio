import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl"
    >
      <div className="glass-card border border-border/60 backdrop-blur-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between rounded-2xl">
        <a href="#home" className="font-display text-lg font-bold text-primary glow-text">
          NK<span className="text-foreground">.</span>
        </a>

        <LayoutGroup>
          <div className="hidden md:flex items-center gap-1 bg-secondary/40 rounded-xl p-1 border border-border/40">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                className={`relative text-xs px-3 py-1.5 rounded-lg transition-colors duration-300 ${
                  active === l.href
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-primary shadow-[0_0_16px_-2px_hsl(var(--primary))]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-medium">{l.label}</span>
              </a>
            ))}
          </div>
        </LayoutGroup>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass-card border border-border/60 mt-2 rounded-2xl"
          >
            <div className="flex flex-col gap-1 p-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => {
                    setOpen(false);
                    setActive(l.href);
                  }}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                    active === l.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
