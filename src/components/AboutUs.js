import React from 'react';
import './AboutUs.css';
import shop from '../medico_assets/shop.jpg'

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <h1>About Us</h1>
      <div className="aboutus-content">
      <div className="aboutus-image">
          <img src={shop} alt="About Us" />
        </div>
        <div className="aboutus-text">
          <h2>Welcome to Dhanashri Medico!</h2>
          <p>
            At Dhanashri Medico Shop, we are committed to providing you with the highest quality medical supplies and pharmaceuticals to meet all your health needs. Our dedicated team of professionals ensures that you receive the best care and the most reliable products every time you visit us.
          </p>
          <p>
            Our mission is to support and enhance your health journey by offering a comprehensive range of products and services. From prescription medications to health and wellness products, we strive to be your trusted partner in health.
          </p>
          <div className="aboutus-image-hide">
          <img src={shop} alt="About Us" />
        </div>
          <div className="aboutus-values">
            <h2>Why Choose Us?</h2>
                <ul>
                    <li><strong>Quality Products:</strong> We source our products from trusted manufacturers to ensure the highest standards.</li>
                    <li><strong>Competitive Prices:</strong> Affordable rates without compromising on quality.</li>
                    <li><strong>Personalized Service:</strong> Friendly and helpful staff ready to assist you with your needs.</li>
                    <li><strong>Convenient Location:</strong> Easily accessible with ample parking for your convenience.</li>
                </ul>
      </div>
        </div>

      
        
      </div>
      
    </div>
  );
};

export default AboutUs;
