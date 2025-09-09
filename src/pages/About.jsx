import Navigation from '@utils/Navigation';
import Hero from '../components/About/Hero';
import AboutUs from '../components/About/AboutUs';
import WhyChooseFalco from '../components/About/WhyChooseFalco';
import GroupOfExperts from '../components/About/GroupOfExperts';
import MeetOurTeam from '../components/About/MeetOurTeam';
import CustomerTestimonialSection from '../components/About/CustomerTestimonialSection';
import Footer from '../components/Home/Footer';

function About() {
  return (
    <div>
      <Navigation />
      <Hero />
      <AboutUs />
      <WhyChooseFalco />
      <GroupOfExperts/>
      {/* <MeetOurTeam /> */}
      <CustomerTestimonialSection />
      <Footer />
    </div>
  );
}

export default About;
  