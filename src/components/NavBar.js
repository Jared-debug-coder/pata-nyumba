import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("PATA NYUMBA");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section.getAttribute("id").toUpperCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="nav-title">{activeSection}</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#houses">Available Houses</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><Link to="/login" className="login-button">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;



