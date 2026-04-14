import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © 2025 <span className="font-display text-primary">Naveen Khan</span>. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/Naveen-Khan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <FaGithub size={18} />
        </a>
        <a href="https://www.linkedin.com/in/naveenkhan-ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <FaLinkedin size={18} />
        </a>
        <a href="mailto:naveenkhan@email.com" className="text-muted-foreground hover:text-primary transition-colors">
          <HiMail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
