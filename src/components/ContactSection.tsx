import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:naveenkhan0059@gmail.com?subject=${subject}&body=${body}`, "_self");
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fieldClass = (k: string) =>
    `w-full bg-secondary/40 border rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none transition-all ${
      focused === k
        ? "border-copper/70 shadow-[0_0_30px_-5px_hsl(25_78%_55%_/_0.5)]"
        : "border-border/60"
    }`;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* glowing background lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(25 78% 55% / 0.6), transparent 70%)", filter: "blur(90px)", animation: "drift 20s ease-in-out infinite" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(30 90% 65% / 0.5), transparent 70%)", filter: "blur(80px)", animation: "drift 25s ease-in-out infinite reverse" }} />

      <div className="section-container relative z-10 max-w-5xl">
        <SectionHeading eyebrow="06 — Get In Touch" title="Let's Create Together" subtitle="Have a project, idea or collaboration? The studio is open." />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 space-y-3"
          >
            <a href="mailto:naveenkhan0059@gmail.com" className="block glass-card card-hover-glow p-5 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-copper-glow/30 to-bronze/20 border border-copper/40 flex items-center justify-center">
                  <HiMail className="text-copper-glow text-xl" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground">naveenkhan0059@gmail.com</p>
                </div>
              </div>
            </a>
            <a href="tel:+923013586403" className="block glass-card card-hover-glow p-5 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-copper-glow/30 to-bronze/20 border border-copper/40 flex items-center justify-center">
                  <HiPhone className="text-copper-glow text-xl" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground">+92 301 3586403</p>
                </div>
              </div>
            </a>
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-copper-glow/30 to-bronze/20 border border-copper/40 flex items-center justify-center">
                  <HiLocationMarker className="text-copper-glow text-xl" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/Naveen-Khan" target="_blank" rel="noopener noreferrer"
                className="flex-1 glass-card card-hover-glow p-4 rounded-2xl flex items-center justify-center gap-2 text-sm">
                <FaGithub className="text-lg text-copper-glow" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/naveenkhan-ai" target="_blank" rel="noopener noreferrer"
                className="flex-1 glass-card card-hover-glow p-4 rounded-2xl flex items-center justify-center gap-2 text-sm">
                <FaLinkedin className="text-lg text-copper-glow" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card glow-border p-7 rounded-3xl space-y-4"
          >
            <p className="font-serif-italic text-copper-glow text-sm">— Send a message</p>
            <input
              type="text" placeholder="Your name" required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
              className={fieldClass("name")}
            />
            <input
              type="email" placeholder="Your email" required value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
              className={fieldClass("email")}
            />
            <textarea
              placeholder="Tell me about your project..." required rows={5} value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
              className={`${fieldClass("message")} resize-none`}
            />
            <button
              type="submit"
              className="btn-glow w-full bg-gradient-to-r from-copper-glow via-copper to-bronze text-background py-3.5 rounded-2xl font-semibold text-sm uppercase tracking-[0.2em]"
            >
              {submitted ? "✓  Message Sent" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
