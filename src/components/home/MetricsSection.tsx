import AnimatedCounter from "@/components/AnimatedCounter";

const metrics = [
  { target: 99, suffix: "%", label: "Safety Record" },
  { target: 150000, suffix: "+", label: "Flight Hours Logged" },
  { target: 45, suffix: "+", label: "Aircraft in Fleet" },
  { target: 98, suffix: "%", label: "First-Time Pass Rate" },
];

const MetricsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((m) => (
            <AnimatedCounter key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
