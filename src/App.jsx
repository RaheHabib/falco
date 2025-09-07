import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from '@pages/Home';
import Services from '@pages/Services';
import About from '@pages/About';
import Contact from './pages/Contact';
import AdminServices from './pages/admin';
import NotFound from './pages/NotFound'; // Create this component for 404 pages
import './index.css';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Route - You could add authentication here later */}
          <Route path="/admin" element={<AdminServices />} />
          
          {/* Redirect old paths or common typos */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          
          {/* 404 Page - Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;