import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import "./HeroSection.css";
import HouseListing from "./HouseListing";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [userLocation, setUserLocation] = useState("");
  const [locationPermission, setLocationPermission] = useState(null);
  const [noMatch, setNoMatch] = useState(false); // ✅ State for no match warning

  const allHouses = [
    { id: 1, location: "Nairobi, Westlands", category: "Single Room", price: 20000, image: "house1.jpg" },
    { id: 2, location: "Nairobi, Kilimani", category: "One-Bedroom", price: 35000, image: "house2.jpg" },
    { id: 3, location: "Nairobi, Umoja", category: "Bedsitter", price: 12000, image: "house3.jpg" },
    { id: 4, location: "Nairobi, Karen", category: "Single Room", price: 25000, image: "house4.jpg" },
    { id: 5, location: "Nairobi, Runda", category: "One-Bedroom", price: 40000, image: "house5.jpg" },
    { id: 6, location: "Nairobi, Eastleigh", category: "Bedsitter", price: 15000, image: "house6.jpg" },
    { id: 7, location: "Nairobi, South B", category: "Single Room", price: 18000, image: "house7.jpg" },
    { id: 8, location: "Nairobi, Kileleshwa", category: "One-Bedroom", price: 45000, image: "house8.jpg" },
    { id: 9, location: "Nairobi, Kasarani", category: "Bedsitter", price: 13000, image: "house9.jpg" },
    { id: 10, location: "Nairobi, Ngong Road", category: "Single Room", price: 22000, image: "house10.jpg" }
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationName = await getLocationName(latitude, longitude);
          setUserLocation(locationName);
          setSearchTerm(locationName); // ✅ Auto-fill detected location
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationPermission("denied"); // ✅ Show warning if denied
        }
      );
    }
  }, []);

  const getLocationName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      return data.address?.city || data.address?.town || "Unknown Location";
    } catch (error) {
      console.error("Error fetching location name:", error);
      return "Unknown Location";
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let filtered = allHouses.filter(
      (house) =>
        house.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "" || house.category === category) &&
        (budget === "" || house.price <= parseInt(budget))
    );

    setFilteredHouses(filtered);
    setNoMatch(filtered.length === 0); // ✅ Show warning if no houses match
  };

  return (
    <div className="hero-container page-container">
      <motion.h1 className="hero-title">Find Your Dream Home</motion.h1>
      <motion.p className="hero-subtitle">Search for the best rental houses near you</motion.p>
      <motion.form className="hero-form" onSubmit={handleSearch}>
        <div className="location-wrapper">
          <FaMapMarkerAlt className="location-icon" />
          <input
            type="text"
            className="hero-input"
            placeholder="Enter location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="hero-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Single Room">Single Room</option>
          <option value="One-Bedroom">One-Bedroom</option>
          <option value="Bedsitter">Bedsitter</option>
          <option value="Bedsitter">two bedroom</option>
        </select>
        <input
          type="number"
          className="hero-input budget-input"
          placeholder="Enter budget..."
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <button type="submit" className="hero-button">
          <FaSearch /> Search
        </button>
      </motion.form>

      {/* ✅ Show permission warning if location is denied */}
      {locationPermission === "denied" && (
        <p className="location-error">
          Location access denied. Please enter your location manually.
        </p>
      )}

      {/* ✅ Show warning if no houses match the budget */}
      {noMatch && (
        <p className="budget-warning">
          No houses available for this budget at the moment. Try adjusting your budget.
        </p>
      )}

      <HouseListing houses={filteredHouses.length > 0 ? filteredHouses : allHouses} />
    </div>
  );
};

export default HeroSection;














