import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-sm p-12 md:p-20 border-stratosphere/20 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-stratosphere/10 blur-[80px] rounded-full" />

          <span className="text-stratosphere font-body text-xs tracking-[0.3em] uppercase mb-4 block relative">
            Take The First Step
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 relative">
            BOOK YOUR
            <br />
            <span className="text-gradient">DISCOVERY FLIGHT</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 relative">
            Experience the thrill of flying a private aircraft with one of our expert instructors.
            No experience needed — just bring your ambition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <Button variant="hero" size="lg" className="text-xs">
              Schedule Discovery Flight
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="metallic" size="lg" className="text-xs">
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
