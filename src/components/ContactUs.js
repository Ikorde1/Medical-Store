import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import saloniPhoto from '../medico_assets/contact_us.jpg'; // Replace with the path to your photo

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5l2ej28', 'template_j2l1qi7', form.current, 'RSI8VvudlHdkiHD0n')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
      });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="contactus-container">
      <h1>Contact Us</h1>
      <div className="contactus-info">
        <div className="contactus-details">
          <h2>Get in Touch</h2>
          <p>For any inquiries or assistance, feel free to reach out to us using the contact information below:</p>
          <ul>
            <li><strong>Address:</strong> 123 Health Street, Wellness City, HC 45678</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Email:</strong> <a href="mailto:info@dhanashrimedico.com">info@dhanashrimedico.com</a></li>
          </ul>
        </div>
        <div className="contactus-photo">
          <img src={saloniPhoto} alt="Saloni Chormale" />
          <div className="contactus-description">
            <h3>Saloni Chormale</h3>
            <p>Pharmacist</p>
            <p>B.Pharm.</p>
          </div>
        </div>
      </div>
      <div className="contactus-form">
        <h2>Send Us a Message</h2>
        <form ref={form} className="form" onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="from_name" name="from_name" required />

          <label htmlFor="email">Phone No.:</label>
          <input type="tel" id="from_number" name="from_number" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
