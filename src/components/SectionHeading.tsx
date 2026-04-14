import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="font-display text-2xl sm:text-3xl font-bold gradient-text inline-block">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground mt-2 text-sm max-w-lg mx-auto">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
