
import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import { FaBuilding, FaUsers, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-container">
      <motion.h1 className="about-title">About Pata Nyumba</motion.h1>
      <motion.p className="about-description">
        Pata Nyumba is the leading real estate platform in Kenya, helping clients find their dream homes easily.
      </motion.p>

      <div className="about-grid">
        <div className="about-card">
          <FaBuilding className="about-icon" />
          <h2>Wide Listings</h2>
          <p>We have a vast collection of rental houses across Nairobi and beyond.</p>
        </div>
        <div className="about-card">
          <FaUsers className="about-icon" />
          <h2>Reliable Agents</h2>
          <p>Our team ensures every listed house is verified and meets quality standards.</p>
        </div>
        <div className="about-card">
          <FaHandshake className="about-icon" />
          <h2>Customer Support</h2>
          <p>We provide 24/7 customer service to assist with all your inquiries.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
