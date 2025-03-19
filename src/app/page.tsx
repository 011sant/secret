import HeroSection from '@/components/home/HeroSection';
import FeatureCards from '@/components/home/FeatureCards';
import WhyChooseSection from '@/components/home/WhyChooseSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureCards />
      <WhyChooseSection />
    </main>
  );
}
