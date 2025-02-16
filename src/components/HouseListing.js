import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // ✅ Ensure the icon is imported
import "./HouseListing.css";

const HouseListing = () => {
  const allHouses = [
    { id: 1, location: "Nairobi, Westlands", category: "Single Room", price: 20000, image: "bed sitter.jpg" },
    { id: 2, location: "Nairobi, Kilimani", category: "One-Bedroom", price: 35000, image: "1b2.jpg" },
    { id: 3, location: "Nairobi, Umoja", category: "Bedsitter", price: 12000, image: "1b 1.jpeg" },
    { id: 4, location: "Nairobi, Karen", category: "Single Room", price: 25000, image: "image1.jpg" },
    { id: 5, location: "Nairobi, Runda", category: "One-Bedroom", price: 40000, image: "image2.jpg" },
    { id: 6, location: "Nairobi, Eastleigh", category: "Bedsitter", price: 15000, image: "image3.jpg" },
    { id: 7, location: "Nairobi, South B", category: "Single Room", price: 18000, image: "image4.jpg" },
    { id: 8, location: "Nairobi, Kileleshwa", category: "One-Bedroom", price: 45000, image: "image5.jpg" },
    { id: 9, location: "Nairobi, Kasarani", category: "Bedsitter", price: 13000, image: "image6.jpg" },
    { id: 10, location: "Nairobi, Ngong Road", category: "Single Room", price: 22000, image: "image7.jpg" },
    { id: 11, location: "Nairobi, Donholm", category: "One-Bedroom", price: 32000, image: "image8.jpg" },
    { id: 12, location: "Nairobi, Roysambu", category: "Bedsitter", price: 14000, image: "image9.jpg" },
    { id: 13, location: "Nairobi, Lavington", category: "Single Room", price: 27000, image: "image10.jpg" },
    { id: 14, location: "Nairobi, South C", category: "One-Bedroom", price: 38000, image: "image11.jpg" },
    { id: 15, location: "Nairobi, Kahawa", category: "Bedsitter", price: 16000, image: "image12.jpg" },
    { id: 16, location: "Nairobi, Ruaka", category: "Single Room", price: 24000, image: "image13.jpg" },
    { id: 17, location: "Nairobi, Thika Road", category: "One-Bedroom", price: 37000, image: "image14.jpg" },
    { id: 18, location: "Nairobi, Parklands", category: "Bedsitter", price: 15500, image: "image15.jpg" },
    { id: 19, location: "Nairobi, Upper Hill", category: "Single Room", price: 29000, image: "image16.jpg" },
    { id: 20, location: "Nairobi, CBD", category: "One-Bedroom", price: 40000, image: "image17.jpg" }
  ];

  const [visibleHouses, setVisibleHouses] = useState(allHouses.slice(0, 10));
  const [showMore, setShowMore] = useState(false);
  const [showForm, setShowForm] = useState(null);  // ✅ State to track which house form to show

  const handleShowMore = () => {
    setVisibleHouses(allHouses);
    setShowMore(true);
  };

  const handleShowLess = () => {
    setVisibleHouses(allHouses.slice(0, 10));
    setShowMore(false);
  };

  const handleBookNowClick = (id) => {
    setShowForm(id); // ✅ Show the form for the clicked house
  };

  const handleCloseForm = () => {
    setShowForm(null); // ✅ Close the form
  };

  return (
    <div className="listing-container">
      <div className="background-image"></div> 
      
      {visibleHouses.map((house) => (
        <div key={house.id} className="house-card">
          <img src={house.image} alt={house.category} className="house-image" />

          {/* ✅ Location Button Inside Each House */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(house.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="house-location"
          >
            <FaMapMarkerAlt className="location-icon" /> View on Map
          </a>

          <div className="house-details">
            <h3 className="house-title">{house.category}</h3>
            <p className="house-text"><strong>Location:</strong> {house.location}</p>
            <p className="house-text"><strong>Price:</strong> KSh {house.price.toLocaleString()}</p>
            
            {/* ✅ Book Now Button */}
            <button className="book-now-button" onClick={() => handleBookNowClick(house.id)}>
              Book Now
            </button>

            {/* ✅ Booking Form (Only for Selected House) */}
            {showForm === house.id && (
              <div className="booking-form">
                <h3>Booking Form for {house.category}</h3>
                <form>
                  <label>
                    Name:
                    <input type="text" required placeholder="e.g., Jared" />
                  </label>
                  <label>
                    Contact:
                    <input type="number" required placeholder="+254 000000" />
                  </label>
                  <label>
                    Date:
                    <input type="date" required />
                  </label>
                  <button type="submit">Submit Booking</button>
                </form>
                <button onClick={handleCloseForm}>Close Form</button>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="button-container">
        {!showMore ? (
          <button className="see-more-button" onClick={handleShowMore}>See More</button>
        ) : (
          <button className="see-less-button" onClick={handleShowLess}>See Less</button>
        )}
      </div>
    </div>
  );
};

export default HouseListing;





