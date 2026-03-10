import { motion } from "framer-motion";
import { Shield, Award, Globe, CheckCircle } from "lucide-react";

const accreditations = [
  { icon: Shield, name: "FAA Part 141", desc: "Federal Aviation Administration Certified" },
  { icon: Award, name: "EASA Approved", desc: "European Aviation Safety Agency" },
  { icon: Globe, name: "ICAO Standards", desc: "International Civil Aviation Organization" },
  { icon: CheckCircle, name: "IS-BAO Certified", desc: "International Standard for Business Aviation" },
];

const AccreditationsSection = () => {
  return (
    <section className="section-padding border-b border-border">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-xs tracking-[0.3em] uppercase mb-12"
        >
          Trusted by Aviation Authorities Worldwide
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {accreditations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-sm glass hover:border-stratosphere/30 transition-all duration-500 group"
            >
              <item.icon className="w-8 h-8 text-stratosphere mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xs tracking-wider text-foreground mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationsSection;
