import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  // Only show loading screen on first visit of the session
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("nk_loaded") !== "1";
  });

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      sessionStorage.setItem("nk_loaded", "1");
    }
  }, [loading]);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="app"
            initial={{ opacity: 0, scale: 1.03, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative min-h-screen"
          >
            <ParticleBackground />
            {/* Cinematic ambient lighting */}
            <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
              <div className="mesh-gradient" />
              <div className="ambient-orb ambient-orb-amber animate-orb-drift w-[480px] h-[480px] -top-32 -left-24" />
              <div className="ambient-orb ambient-orb-crimson animate-orb-drift w-[420px] h-[420px] top-1/3 -right-32" style={{ animationDelay: "-7s" }} />
              <div className="ambient-orb ambient-orb-purple animate-orb-drift w-[520px] h-[520px] bottom-0 left-1/4" style={{ animationDelay: "-12s" }} />
              <div className="ambient-orb ambient-orb-gold animate-orb-drift w-[360px] h-[360px] top-2/3 right-1/4" style={{ animationDelay: "-4s" }} />
            </div>
            <CursorGlow />
            <Navbar />
            <main className="relative z-10">
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <EducationSection />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
