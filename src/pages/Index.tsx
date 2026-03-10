import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AccreditationsSection from "@/components/home/AccreditationsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import FleetSection from "@/components/home/FleetSection";
import MetricsSection from "@/components/home/MetricsSection";
import SimulatorSection from "@/components/home/SimulatorSection";
import InstructorsSection from "@/components/home/InstructorsSection";
import HangarSection from "@/components/home/HangarSection";
import PilotsCounterSection from "@/components/home/PilotsCounterSection";
import NewsSection from "@/components/home/NewsSection";
import CareerSection from "@/components/home/CareerSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AccreditationsSection />
      <ProgramsSection />
      <FleetSection />
      <MetricsSection />
      <SimulatorSection />
      <InstructorsSection />
      <HangarSection />
      <PilotsCounterSection />
      <NewsSection />
      <CareerSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
