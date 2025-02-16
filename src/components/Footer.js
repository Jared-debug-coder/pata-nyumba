import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./styles.css"; // Ensure you have styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow us on</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
