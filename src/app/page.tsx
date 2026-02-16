import HeroSection from "@/components/home/HeroSection";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import MethodSection from "@/components/home/MethodSection";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesCarousel />
      <MethodSection />
      <FaqSection />
    </main>
  );
}
