import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import Procedure from "@/components/Procedure";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <StickyCTA />
      <Hero />
      <BeforeAfter />
      <Benefits />
      <Procedure />
      <Pricing />
      <Testimonials />
      <CTA />
    </main>
  );
}
