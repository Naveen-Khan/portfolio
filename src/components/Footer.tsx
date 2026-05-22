import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => (
  <footer className="relative border-t border-border/40 mt-10">
    <div className="ornament-divider absolute top-0 left-0 right-0" />
    <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-copper-glow via-copper to-bronze flex items-center justify-center text-background font-display text-xs font-bold">NK</div>
        <p className="text-xs text-muted-foreground">
          © 2026 <span className="gradient-text-warm font-display">Naveen Khan</span> · Crafted with intention
        </p>
      </div>
      <div className="flex gap-3">
        {[
          { Icon: FaGithub, href: "https://github.com/Naveen-Khan", label: "GitHub" },
          { Icon: FaLinkedin, href: "https://www.linkedin.com/in/naveenkhan-ai", label: "LinkedIn" },
          { Icon: HiMail, href: "mailto:naveenkhan0059@gmail.com", label: "Email" },
        ].map(({ Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-copper-glow hover:border-copper/50 transition-all">
            <Icon size={15} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
