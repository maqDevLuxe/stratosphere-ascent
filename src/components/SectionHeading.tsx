import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ label, title, description, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <span className="text-stratosphere font-body text-xs tracking-[0.3em] uppercase mb-4 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-stratosphere to-transparent" />
    </motion.div>
  );
};

export default SectionHeading;
