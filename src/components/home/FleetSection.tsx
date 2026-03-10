import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import cockpitImg from "@/assets/cockpit.jpg";

const fleet = [
  { name: "Cessna 172 Skyhawk", type: "Single Engine Piston", seats: 4, range: "640 nm", image: cockpitImg, desc: "The world's most popular training aircraft. Perfect for PPL students." },
  { name: "Diamond DA42 Twin Star", type: "Multi-Engine Piston", seats: 4, range: "1,040 nm", image: cockpitImg, desc: "Advanced multi-engine trainer with glass cockpit and superior handling." },
  { name: "Cirrus SR22T", type: "High Performance Single", seats: 4, range: "1,100 nm", image: cockpitImg, desc: "Premium high-performance aircraft with Cirrus Airframe Parachute System." },
  { name: "Citation CJ3+", type: "Light Jet", seats: 8, range: "2,040 nm", image: cockpitImg, desc: "Entry-level jet for type rating training and advanced jet operations." },
];

const FleetSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % fleet.length);
  const prev = () => setCurrent((p) => (p - 1 + fleet.length) % fleet.length);
  const aircraft = fleet[current];

  return (
    <section className="section-padding bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Fleet"
          title="The Modern Training Fleet"
          description="Train on state-of-the-art aircraft equipped with the latest avionics"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img src={aircraft.image} alt={aircraft.name} className="w-full h-72 md:h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 font-display text-xs tracking-[0.2em] text-stratosphere">
                  {String(current + 1).padStart(2, "0")} / {String(fleet.length).padStart(2, "0")}
                </div>
              </div>

              <div>
                <span className="text-stratosphere font-body text-xs tracking-[0.3em] uppercase">{aircraft.type}</span>
                <h3 className="font-display text-2xl md:text-4xl text-foreground mt-2 mb-4">{aircraft.name}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">{aircraft.desc}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-sm">
                    <div className="text-stratosphere font-display text-lg">{aircraft.seats}</div>
                    <div className="text-muted-foreground text-xs tracking-wider uppercase">Seats</div>
                  </div>
                  <div className="glass p-4 rounded-sm">
                    <div className="text-stratosphere font-display text-lg">{aircraft.range}</div>
                    <div className="text-muted-foreground text-xs tracking-wider uppercase">Range</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-sm glass flex items-center justify-center hover:border-stratosphere/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            {fleet.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 self-center ${
                  i === current ? "bg-stratosphere w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
            <button
              onClick={next}
              className="w-12 h-12 rounded-sm glass flex items-center justify-center hover:border-stratosphere/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
