import React from 'react';
import './ShopComponent.css'; // External CSS file for styling

import img1 from '../medico_assets/Home_images/img1.jpg';
import img3 from '../medico_assets/Home_images/img3.png';
import img6 from '../medico_assets/Home_images/img6.jpg';
import img7 from '../medico_assets/Home_images/img7.jpg';
import img8 from '../medico_assets/Home_images/img8.jpg';
import img9 from '../medico_assets/Home_images/img9.jpg';

const ShopComponent = () => {
  const dummyImages = [img8, img6, img3, img9, img7, img1];

  return (
    <div className="shop-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome to Dhanashree Medico!</h1>
          <p>
            At Dhanashree Medico, we are dedicated to being your one-stop destination for all your healthcare needs. From prescription medications to health and wellness products, we provide a comprehensive range of medical supplies and services to ensure that you and your family are taken care of with the highest quality standards.
          </p>
          {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Prescription Medications: A wide variety of prescription drugs available.</li>
          <li>Over-the-Counter Products: Pain relievers, cold and flu remedies, skincare products, and more.</li>
          <li>Health & Wellness Solutions: Vitamins, supplements, and personal care  products.</li>
          <li>Medical Equipment: Devices like blood pressure monitors, glucose meters, and mobility aids.</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Shop with Us?</h2>
        <ul>
          <li>High-Quality Products: Sourced from trusted manufacturers.</li>
          <li>Affordable Prices: Competitive pricing without compromising on quality.</li>
          <li>Exceptional Customer Service: Friendly and professional assistance.</li>
          <li>Convenience at Your Fingertips: Home delivery service available.</li>
        </ul>
      </section>
        </div>
        <div className="welcome-images">
          {dummyImages.map((image, index) => (
            <img key={index} src={image} alt={`Shop ${index + 1}`} className="welcome-img" />
          ))}
        </div>
      </section>

      {/* visit us today section */}
      <div class="visit-container">
        <div class="visit-info">
            <h2>Visit Us Today!</h2>
            <p className='hide'>Whether you're seeking expert advice, the latest wellness products, or prompt and reliable service, Dhanashri Medico Shop is here to cater to your healthcare needs.</p>
            <h3>Store Hours</h3>
            <p>Monday to Saturday: 9:00 AM – 8:00 PM<br/>Sunday: Closed</p>

            <h3>Location</h3>
            <p>Yavatmal, 50001</p>

            <h3>Contact Us</h3>
            <p>Phone: 000000<br/>Email: xyz@gmail.com</p>
        </div>
        <div class="testimonials">
            <h3>Testimonials</h3>
            <blockquote>
                <p>“Dhanashri Medico Shop always has what I need, and the staff is so helpful in answering my questions. They truly care about their customers!”</p>
                <footer>— Anjali K.</footer>
            </blockquote>
            <blockquote>
                <p>“I love the convenience of their home delivery service. It’s made managing my medications so much easier!”</p>
                <footer>— Ravi P.</footer>
            </blockquote>
        </div>
    </div>
      
      
    </div>
  );
};

export default ShopComponent;
