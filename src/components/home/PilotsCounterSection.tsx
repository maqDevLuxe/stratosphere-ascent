import AnimatedCounter from "@/components/AnimatedCounter";

const PilotsCounterSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimatedCounter target={2400} suffix="+" label="Licensed Graduates" />
          <AnimatedCounter target={35} suffix="" label="Countries Represented" />
          <AnimatedCounter target={96} suffix="%" label="Employment Rate" />
        </div>
      </div>
    </section>
  );
};

export default PilotsCounterSection;
