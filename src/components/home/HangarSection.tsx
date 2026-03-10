import { motion } from "framer-motion";
import hangarImg from "@/assets/hangar.jpg";

const HangarSection = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <img src={hangarImg} alt="Aircraft hangar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h2 className="font-display text-3xl md:text-6xl text-foreground mb-4">
            WHERE PRECISION
            <br />
            <span className="text-gradient">MEETS PASSION</span>
          </h2>
          <p className="text-silver text-base md:text-lg">
            Our 200,000 sq ft facility houses the most advanced training equipment in private aviation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HangarSection;
