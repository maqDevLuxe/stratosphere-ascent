import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const instructors = [
  { name: "Capt. James Whitfield", title: "Chief Flight Instructor", hours: "18,000+ hrs", specialty: "Multi-Engine & Type Ratings" },
  { name: "Capt. Sarah Chen", title: "Senior Instructor", hours: "12,000+ hrs", specialty: "Instrument & Commercial" },
  { name: "Capt. Marcus Reed", title: "Simulator Lead", hours: "15,000+ hrs", specialty: "Jet Transition Training" },
  { name: "Capt. Elena Vasquez", title: "Aerobatics Instructor", hours: "9,000+ hrs", specialty: "Upset Recovery & PPL" },
];

const InstructorsSection = () => {
  return (
    <section className="section-padding bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Instructors"
          title="Veteran Flight Instructors"
          description="Learn from former military and airline pilots with decades of experience"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-sm p-6 text-center hover:border-stratosphere/30 transition-all duration-500 group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center border border-border group-hover:border-stratosphere/30 transition-colors">
                <span className="font-display text-xl text-stratosphere">
                  {inst.name.split(" ").slice(1).map(n => n[0]).join("")}
                </span>
              </div>
              <h4 className="font-display text-xs tracking-wider text-foreground">{inst.name}</h4>
              <p className="text-stratosphere text-xs mt-1 mb-3">{inst.title}</p>
              <div className="text-muted-foreground text-xs space-y-1">
                <p>{inst.hours}</p>
                <p>{inst.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
