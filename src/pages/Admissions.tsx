import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  { step: "01", title: "Submit Application", desc: "Complete our online application with your background, goals, and preferred program." },
  { step: "02", title: "Discovery Flight", desc: "Experience a complimentary introductory flight with one of our senior instructors." },
  { step: "03", title: "Medical Certification", desc: "Obtain your FAA medical certificate — we guide you through the entire process." },
  { step: "04", title: "Begin Training", desc: "Start your personalized training program with your assigned instructor." },
];

const requirements = [
  "Minimum 17 years of age (PPL) or 18 years (CPL)",
  "Proficient in English (reading, writing, speaking)",
  "Valid government-issued photo identification",
  "FAA Medical Certificate (Class 1, 2, or 3)",
  "High school diploma or equivalent",
  "Strong commitment to safety and excellence",
];

const Admissions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Admissions"
            title="Begin Your Journey"
            description="Your path from aspiring aviator to licensed pilot starts here"
          />

          {/* Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass rounded-sm p-8 text-center relative"
              >
                <span className="text-stratosphere/20 font-display text-5xl absolute top-4 right-4">{s.step}</span>
                <h3 className="font-display text-xs tracking-wider text-foreground mb-3 relative">{s.title}</h3>
                <p className="text-muted-foreground text-sm relative">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-stratosphere font-body text-xs tracking-[0.3em] uppercase mb-4 block">Requirements</span>
              <h3 className="font-display text-2xl md:text-4xl text-foreground mb-8">Eligibility Criteria</h3>
              <div className="space-y-4">
                {requirements.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-stratosphere mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-sm p-10"
            >
              <h3 className="font-display text-sm tracking-wider text-foreground mb-6">REQUEST INFORMATION</h3>
              <div className="space-y-4">
                <input placeholder="Full Name" className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-stratosphere/50 focus:outline-none transition-colors" />
                <input placeholder="Email Address" className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-stratosphere/50 focus:outline-none transition-colors" />
                <input placeholder="Phone Number" className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-stratosphere/50 focus:outline-none transition-colors" />
                <select className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-muted-foreground focus:border-stratosphere/50 focus:outline-none transition-colors">
                  <option>Select Program</option>
                  <option>Private Pilot License (PPL)</option>
                  <option>Commercial Pilot License (CPL)</option>
                  <option>Instrument Rating (IR)</option>
                </select>
                <Button variant="hero" className="w-full text-xs">
                  Submit Application <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admissions;
