import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Portfolio from '../components/Home/Portfolio';
import TestimonialSection from '../components/Home/Quotes';
import HireUs from '../components/Home/HireUs';
import Community from '../components/Home/Community';
import GlowingCTASection from '../components/Home/CTA';
import Footer from '../components/Home/Footer';
import Navigation from '@utils/Navigation';

function Home() {
  return (
    <div>
      <Navigation/>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TestimonialSection />
      <HireUs />
      <Community />
      <GlowingCTASection />
      <Footer />
    </div>
  );
}

export default Home;
  