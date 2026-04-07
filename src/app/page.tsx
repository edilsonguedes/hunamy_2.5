import HeroSection from "@/components/home/HeroSection";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesCarousel />
      <FaqSection />
    </main>
  );
}
