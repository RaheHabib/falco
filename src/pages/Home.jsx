import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Portfolio from '../components/Home/Portfolio';
import TestimonialSection from '../components/Home/Quotes';
import HireUs from '../components/Home/HireUs';
import Community from '../components/Home/Community';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TestimonialSection />
      <HireUs />
      <Community />
    </div>
  );
}

export default Home;
  