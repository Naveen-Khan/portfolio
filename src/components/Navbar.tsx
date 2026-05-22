import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiUser, HiSparkles, HiBriefcase, HiAcademicCap, HiFolder, HiMail } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#about", icon: HiUser, span: "col-span-2" },
  { label: "Skills", href: "#skills", icon: HiSparkles, span: "col-span-1" },
  { label: "Projects", href: "#projects", icon: HiFolder, span: "col-span-1" },
  { label: "Experience", href: "#experience", icon: HiBriefcase, span: "col-span-1" },
  { label: "Education", href: "#education", icon: HiAcademicCap, span: "col-span-1" },
  { label: "Contact", href: "#contact", icon: HiMail, span: "col-span-2" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-3 left-3 right-3 z-50"
    >
      <div className="max-w-6xl mx-auto glass-card border border-border/50 backdrop-blur-2xl px-3 py-2 rounded-2xl">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="font-display text-lg font-bold text-primary glow-text px-3 py-2 glass-card rounded-xl border border-primary/30">
            NK
          </a>
          <div className="hidden md:grid grid-cols-8 gap-2 flex-1 max-w-3xl">
            {navLinks.map((l, i) => {
              const Icon = l.icon;
              return (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  className={`${l.span} group relative flex items-center justify-center gap-2 px-3 py-2 rounded-xl glass-card border border-border/40 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 card-hover-glow transition-all`}
                >
                  <Icon className="text-base group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{l.label}</span>
                </motion.a>
              );
            })}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground glass-card p-2 rounded-xl border border-border/40"
          >
            {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden mt-2"
            >
              <div className="grid grid-cols-2 gap-2 pt-2">
                {navLinks.map((l) => {
                  const Icon = l.icon;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-3 py-3 rounded-xl glass-card border border-border/40 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Icon /> {l.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
