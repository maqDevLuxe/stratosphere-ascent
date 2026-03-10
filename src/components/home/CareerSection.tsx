import { motion } from "framer-motion";
import { Plane, Building2, Shield, Globe } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const paths = [
  { icon: Plane, title: "Airline Captain", desc: "Fast-track to major airline careers with our airline partnership program." },
  { icon: Building2, title: "Corporate Aviation", desc: "Fly for Fortune 500 companies in the world's finest business jets." },
  { icon: Shield, title: "Military Transition", desc: "Specialized programs for transitioning military aviators." },
  { icon: Globe, title: "Charter Operations", desc: "Enter the luxury charter market with comprehensive type ratings." },
];

const CareerSection = () => {
  return (
    <section className="section-padding bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Careers"
          title="Elite Career Pathways"
          description="Our graduates fly for the world's most prestigious operators"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-sm p-8 text-center hover:border-stratosphere/30 transition-all duration-500 group"
            >
              <path.icon className="w-10 h-10 mx-auto mb-4 text-stratosphere group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-display text-xs tracking-wider text-foreground mb-3">{path.title}</h4>
              <p className="text-muted-foreground text-sm">{path.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
