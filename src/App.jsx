import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from '@pages/Home';
import Services from '@pages/Services';
import About from '@pages/About';
import Contact from './pages/Contact';
import './index.css'; // or './main.css'

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
