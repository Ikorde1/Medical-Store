import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../medico_assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className={`right ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="link">Home</Link>
        <Link to="/services" className="link">Services</Link>
        <Link to="/contact" className="link">Contact</Link>
        <Link to="/about" className="link">About Us</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </div>
    </nav>
  );
};

export default Navbar;
