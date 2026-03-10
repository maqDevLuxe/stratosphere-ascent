import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import simulatorImg from "@/assets/simulator.jpg";

const SimulatorSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Technology"
          title="State-of-the-Art Simulators"
          description="Train in FAA-certified Level D simulators that replicate real-world flying conditions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-sm"
          >
            <img src={simulatorImg} alt="Flight simulator" className="w-full h-80 md:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {[
              { title: "Full Motion Simulation", desc: "6-axis motion systems providing real-world feel for approach, turbulence, and emergency scenarios." },
              { title: "Glass Cockpit Avionics", desc: "Train on Garmin G1000 and Proline 21 avionics suites used in modern aircraft." },
              { title: "Multi-Aircraft Types", desc: "Simulators configured for single-engine, multi-engine, and light jet aircraft." },
              { title: "Weather & Scenario Training", desc: "Practice in extreme weather, system failures, and complex airport environments." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-px h-auto bg-gradient-to-b from-stratosphere to-transparent shrink-0" />
                <div>
                  <h4 className="font-display text-sm text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
