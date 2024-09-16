import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Dhanashri Medico Shop</h3>
          <p>
            We are committed to providing you with the highest quality medical supplies and pharmaceuticals.
          </p>
          <p>
            Address: 123 Health St, Wellness City, HC 12345
          </p>
          <p>
            &copy; {new Date().getFullYear()} Dhanashri Medico Shop. All rights reserved.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@dhanashrimedicoshop.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
         <div className='social_links'>
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
