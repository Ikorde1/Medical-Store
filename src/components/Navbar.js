import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../medico_assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
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
