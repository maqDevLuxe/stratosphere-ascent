import { motion } from "framer-motion";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const programs = [
  {
    title: "Private Pilot License",
    tag: "PPL",
    duration: "4-6 Months",
    price: "From $18,500",
    description: "Your first step into the skies. Master the fundamentals of flight with personalized instruction.",
    features: ["40+ Flight Hours", "Ground School", "Written & Practical Exam Prep", "Solo Cross-Country"],
  },
  {
    title: "Commercial Pilot License",
    tag: "CPL",
    duration: "12-18 Months",
    price: "From $65,000",
    description: "Transform your passion into a career. Achieve the precision and expertise airlines demand.",
    features: ["250+ Flight Hours", "Multi-Engine Rating", "Instrument Rating", "Career Placement Support"],
    featured: true,
  },
  {
    title: "Instrument Rating",
    tag: "IR",
    duration: "3-4 Months",
    price: "From $12,000",
    description: "Master flying in all conditions. Navigate with confidence through clouds and low visibility.",
    features: ["40+ Instrument Hours", "Simulator Training", "IFR Navigation", "Approach Procedures"],
  },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Programs"
          title="Pilot License Programs"
          description="Choose your path to the cockpit with our FAA-certified training programs"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-sm p-8 border transition-all duration-500 group hover:border-stratosphere/40 ${
                program.featured
                  ? "border-stratosphere/30 bg-gradient-to-b from-stratosphere/5 to-transparent glow-primary"
                  : "border-border glass"
              }`}
            >
              {program.featured && (
                <span className="absolute -top-3 left-8 bg-stratosphere text-primary-foreground text-[10px] font-display tracking-widest px-3 py-1 rounded-sm">
                  MOST POPULAR
                </span>
              )}

              <span className="text-stratosphere font-display text-xs tracking-[0.3em]">{program.tag}</span>
              <h3 className="font-display text-lg text-foreground mt-2 mb-3">{program.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{program.description}</p>

              <div className="flex items-center gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2 text-silver">
                  <Clock className="w-4 h-4 text-stratosphere" />
                  {program.duration}
                </div>
                <div className="flex items-center gap-2 text-silver">
                  <DollarSign className="w-4 h-4 text-stratosphere" />
                  {program.price}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {program.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-stratosphere" />
                    {f}
                  </div>
                ))}
              </div>

              <Button
                variant={program.featured ? "hero" : "metallic"}
                size="sm"
                className="w-full text-xs group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
