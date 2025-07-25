import Navigation from '@utils/Navigation';
import Hero from '@components/Services/Hero';
import CareersSection from '@components/Services/Career';
import OurServices from '@components/Services/OurServices';
import ServicesCard from '@components/Services/ServicesCard';
import ProcessComponent from '@components/Services/ProcessComponent';
import Portfolio from '../components/Services/Portfolio';
import TestimonialsComponent from '../components/Services/TestimonialsComponent';
import BlogCardsComponent from '../components/Services/BlogCard';
import ContactSection from '../components/Services/ContactSection';
import Footer from '../components/Home/Footer';

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <CareersSection />
      <OurServices /> 
      <ServicesCard />
      <ProcessComponent />
      <Portfolio />
      <TestimonialsComponent />
      <BlogCardsComponent/>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
  