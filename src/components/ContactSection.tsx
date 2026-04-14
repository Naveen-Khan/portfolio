import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container max-w-4xl">
        <SectionHeading title="Contact" subtitle="Let's build something intelligent together" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="glass-card p-4 flex items-center gap-3">
              <HiMail className="text-primary text-xl" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm text-foreground">naveenkhan@email.com</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-3">
              <HiPhone className="text-primary text-xl" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm text-foreground">+92 XXX XXXXXXX</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/Naveen-Khan"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card card-hover-glow p-4 flex-1 flex items-center justify-center gap-2 text-sm text-foreground transition-all"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/naveen-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card card-hover-glow p-4 flex-1 flex items-center justify-center gap-2 text-sm text-foreground transition-all"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card glow-border p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full btn-glow bg-primary text-primary-foreground py-2.5 rounded-lg font-medium text-sm transition-all"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
