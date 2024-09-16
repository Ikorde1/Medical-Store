import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const form = useRef();  // Create a ref for the form

  if (!isOpen) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data
    emailjs.sendForm('service_5l2ej28', 'template_j2l1qi7', form.current, 'RSI8VvudlHdkiHD0n')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message Sent Successfully!');
        onClose(); // Close the modal
      }, (err) => {
        console.error('FAILED...', err);
        alert('There was an issue sending the message.');
      });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Book a Call</h2>
        <form ref={form} className="modal-form" onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="from_name" name="from_name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="from_email" name="from_email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="from_number" name="from_number" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const ModalWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const modalClosed = localStorage.getItem('modalClosed');
    if (modalClosed) {
      setIsModalOpen(false);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('modalClosed', 'true');
  };

  return <Modal isOpen={isModalOpen} onClose={closeModal} />;
};

export default ModalWrapper;
