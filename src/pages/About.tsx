import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import hangarImg from "@/assets/hangar.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";

const values = [
  { title: "Safety First", desc: "An uncompromising commitment to the highest safety standards in every flight operation." },
  { title: "Precision Training", desc: "Methodical, data-driven instruction that produces confident, competent pilots." },
  { title: "Elite Standards", desc: "We don't just meet industry standards — we define them." },
  { title: "Innovation", desc: "Continuously investing in the latest aircraft, simulators, and training methodologies." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={hangarImg} alt="About Altitude Elite" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6"
        >
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">ABOUT US</h1>
          <p className="text-silver text-lg">Defining the future of private aviation training</p>
        </motion.div>
      </div>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-stratosphere font-body text-xs tracking-[0.3em] uppercase mb-4 block">Our Story</span>
              <h2 className="font-display text-2xl md:text-4xl text-foreground mb-6">A Legacy of Excellence</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Founded in 2005 by former military test pilot Capt. Richard Thornton, Altitude Elite Aviation Academy was born from a vision to create the world's most comprehensive private aviation training program.</p>
                <p>What began as a small flight school with three aircraft has grown into a premier institution with over 30 aircraft, state-of-the-art simulators, and a faculty of veteran aviators from the world's most prestigious airlines and military branches.</p>
                <p>Today, our graduates fly for the world's leading airlines, corporate flight departments, and charter operations across 35 countries.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <AnimatedCounter target={20} suffix="+" label="Years of Excellence" />
              <AnimatedCounter target={2400} suffix="+" label="Licensed Pilots" />
              <AnimatedCounter target={150} suffix="K+" label="Flight Hours" />
              <AnimatedCounter target={35} suffix="" label="Countries" />
            </motion.div>
          </div>

          {/* Values */}
          <SectionHeading label="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-sm p-8 hover:border-stratosphere/30 transition-all duration-500"
              >
                <div className="w-8 h-px bg-stratosphere mb-6" />
                <h4 className="font-display text-xs tracking-wider text-foreground mb-3">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
