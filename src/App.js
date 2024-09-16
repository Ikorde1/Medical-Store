import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slideshow from './components/Slides';
import ShopComponent from './components/ShopComponent';
import Footer from './components/Footer';
import ModalWrapper from './components/Modal';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Slideshow />
      <ModalWrapper />
      <Routes>
        <Route path="/" element={<ShopComponent />} />
        {/* <Route path="/" element={<Slideshow />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
