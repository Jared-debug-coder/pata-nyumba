import React, { useRef } from "react";
import HeroSection from "./HeroSection";
import HouseListing from "./HouseListing";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import "./FullPageScroll.css";

const FullPageScroll = () => {
  const containerRef = useRef(null);

  return (
    <div className="scroll-container" ref={containerRef}>
      <NavBar />
      <section className="page-section" id="home">
        <HeroSection />
      </section>
      <section className="page-section" id="houses">
        <HouseListing />
      </section>
      <section className="page-section" id="about">
        <AboutUs />
      </section>
      <section className="page-section" id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default FullPageScroll;
