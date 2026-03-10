import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import cockpitImg from "@/assets/cockpit.jpg";

const aircraft = [
  { name: "Cessna 172 Skyhawk", type: "Single Engine", count: 12, desc: "The foundation of flight training. Glass cockpit equipped." },
  { name: "Piper Seminole PA-44", type: "Multi-Engine", count: 6, desc: "Twin-engine trainer for multi-engine rating preparation." },
  { name: "Diamond DA42 Twin Star", type: "Multi-Engine", count: 4, desc: "Advanced diesel twin with Garmin G1000 avionics." },
  { name: "Cirrus SR22T", type: "High Performance", count: 4, desc: "Turbocharged single with CAPS parachute system." },
  { name: "Beechcraft King Air C90", type: "Turboprop", count: 2, desc: "Multi-engine turboprop for advanced commercial training." },
  { name: "Citation CJ3+", type: "Light Jet", count: 2, desc: "Entry-level jet for type rating and jet transition." },
];

const Fleet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Aircraft"
            title="The Training Fleet"
            description="30+ aircraft spanning single-engine trainers to light jets"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aircraft.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-sm overflow-hidden hover:border-stratosphere/30 transition-all duration-500 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={cockpitImg} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <span className="absolute top-4 right-4 bg-stratosphere/20 text-stratosphere text-[10px] font-display tracking-widest px-3 py-1 rounded-sm backdrop-blur-sm">
                    {a.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-sm text-foreground mb-2">{a.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{a.desc}</p>
                  <div className="text-stratosphere text-xs font-display tracking-wider">{a.count} IN FLEET</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fleet;
