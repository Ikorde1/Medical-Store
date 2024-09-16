import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Pharmaceuticals',
    description: 'We offer a wide range of prescription and over-the-counter medications, ensuring that you get exactly what you need for your health. Our pharmacists are available to discuss your prescriptions, offer advice on dosage, and ensure that you fully understand how to take your medication properly.',
  },
  {
    title: 'Health & Wellness Products',
    description: 'Our wellness products help you maintain a healthy lifestyle. We provide vitamins, dietary supplements, and personal care products to ensure that your body gets the nutrients it needs.',
  },
  {
    title: 'Medical Equipment',
    description: 'We provide essential medical devices and supplies for home care and rehabilitation, including everything from mobility aids to monitoring devices.',
  },
  {
    title: 'Expert Advice & Health Consultations',
    description: 'Our team of experienced professionals offers personalized advice to help you make informed health decisions. Whether you\'re managing a chronic illness or looking for preventative care, our experts are here to support you.',
  },
  {
    title: 'Home Delivery Services',
    description: 'Can\'t make it to the shop? We offer convenient home delivery services for your prescriptions and health products, ensuring you never have to worry about running out of what you need.',
  },
  {
    title: 'Specialty Care',
    description: 'We understand that some health conditions require specialized products, and we work closely with trusted suppliers to ensure that we have the right products available for every customer\'s unique needs.',
  },
  {
    title: 'Medication Management',
    description: 'Our pharmacy provides comprehensive medication management services to help you safely and effectively manage your medications. We review your prescriptions, identify potential interactions, and offer guidance to optimize your medication regimen for better health outcomes.',
  },
  {
    title: 'Health Screening and Diagnostics',
    description: 'We offer a range of health screening and diagnostic services to help you monitor and maintain your health. From blood pressure checks to cholesterol screening, our services provide essential insights into your health status and help you make informed decisions.',
  },
  {
    title: 'Personalized Wellness Plans',
    description: 'Our team creates customized wellness plans tailored to your individual health goals and needs. Whether you’re looking to improve your diet, increase physical activity, or manage stress, we provide personalized recommendations and support to help you achieve a healthier lifestyle.',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
