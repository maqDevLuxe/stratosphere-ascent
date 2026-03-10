import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  { name: "Alexander Price", role: "Now First Officer, Emirates", quote: "Altitude Elite gave me the foundation to reach the flight deck of an A380. The training quality is unmatched." },
  { name: "Sophia Martinez", role: "Corporate Pilot, NetJets", quote: "From zero experience to flying Gulfstreams in under 3 years. The career support made all the difference." },
  { name: "David Kim", role: "Captain, Delta Air Lines", quote: "The simulator training prepared me for every scenario I've encountered in 15 years of airline flying." },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Success Stories"
          title="Graduate Testimonials"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-sm p-8 relative"
            >
              <Quote className="w-8 h-8 text-stratosphere/20 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-display text-xs tracking-wider text-foreground">{t.name}</p>
                <p className="text-stratosphere text-xs mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
