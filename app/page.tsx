import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import FAQs from '@/components/FAQs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Portfolio />
      <Team />
      <FAQs />
      <CTA />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}
