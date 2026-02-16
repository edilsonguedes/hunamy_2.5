import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import FaqAccordion from "@/components/home/FaqAccordion";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />

      <ServicesGrid />

      <CtaSection />

      <FaqAccordion />

      <CtaSection />

      <Footer />
    </main>
  );
}
