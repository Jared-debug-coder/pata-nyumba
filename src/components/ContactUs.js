import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">Get in touch with us for any inquiries or assistance.</p>

      <div className="contact-grid">
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h2>Call Us</h2>
          <p><a href="tel:+254700123456">+254 700 123 456</a></p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email Us</h2>
          <p><a href="mailto:support@patanyumba.co.ke">support@patanyumba.co.ke</a></p>
        </div>
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h2>Visit Us</h2>
          <p><a href="https://www.google.com/maps/place/Ruai+Kamulu,+Nairobi" target="_blank" rel="noopener noreferrer">Ruai Kamulu, Nairobi</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;




