import { HeroSection } from "@/components/hero";
import { FeaturesSection, CodeSection } from "@/components/features";
import { ChainsSection } from "@/components/chains";
import { CTASection, Footer } from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <CodeSection />
      <ChainsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
