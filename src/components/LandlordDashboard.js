import React, { useState } from "react";
import axios from "axios"; // For API calls
import "./LandlordDashboard.css";

const LandlordDashboard = () => {
  const [houses, setHouses] = useState([]);
  const [newHouse, setNewHouse] = useState({
    image: "",
    location: "",
    category: "",
    price: "",
    paymentStatus: "Pending",
    approvalStatus: "Pending",
  });
  const [showForm, setShowForm] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    setNewHouse({ ...newHouse, [e.target.name]: e.target.value });
  };

  // ✅ Function to Send M-Pesa STK Push
  const handlePayment = async () => {
    if (!phoneNumber) {
      alert("Please enter your M-Pesa phone number.");
      return;
    }

    setPaymentProcessing(true);

    try {
      const response = await axios.post("http://localhost:5000/api/mpesa", {
        phoneNumber,
        amount: 500, // Charge per house
      });

      if (response.data.success) {
        alert("Payment request sent! Please complete payment on your phone.");
        setNewHouse({ ...newHouse, paymentStatus: "Paid" });
      } else {
        alert("Payment failed. Try again.");
      }
    } catch (error) {
      console.error("M-Pesa Error:", error);
      alert("Error processing payment. Try again.");
    }

    setPaymentProcessing(false);
  };

  // ✅ Function to Submit House After Payment
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newHouse.paymentStatus !== "Paid") {
      alert("Please complete payment via M-Pesa before submitting.");
      return;
    }

    setHouses([...houses, { ...newHouse, id: houses.length + 1 }]);
    setShowForm(false);
    alert("House submitted for approval. Admin will review it soon.");
  };

  return (
    <div className="landlord-dashboard">
      <h2>Landlord Dashboard</h2>

      {/* Add New House Section */}
      <div className="section">
        <h3>Add New House</h3>
        <button onClick={() => setShowForm(true)} className="add-house-button">
          + Add House
        </button>

        {showForm && (
          <div className="house-form">
            <form onSubmit={handleSubmit}>
              <label>Upload Image:</label>
              <input type="file" name="image" onChange={handleChange} required />

              <label>Location:</label>
              <input type="text" name="location" placeholder="Enter location" onChange={handleChange} required />

              <label>Category:</label>
              <select name="category" onChange={handleChange} required>
                <option value="">Select Category</option>
                <option value="Single Room">Single Room</option>
                <option value="Bedsitter">Bedsitter</option>
                <option value="One-Bedroom">One-Bedroom</option>
              </select>

              <label>Price (KSh):</label>
              <input type="number" name="price" placeholder="Enter price" onChange={handleChange} required />

              {/* ✅ M-Pesa Payment Section */}
              <label>M-Pesa Phone Number:</label>
              <input
                type="number"
                placeholder="Enter M-Pesa number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />

              <button type="button" onClick={handlePayment} disabled={paymentProcessing}>
                {paymentProcessing ? "Processing Payment..." : "Pay via M-Pesa"}
              </button>

              <button type="submit" disabled={newHouse.paymentStatus !== "Paid"}>
                Submit for Approval
              </button>

              <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>

      {/* My Listings Section */}
      <div className="section">
        <h3>My Listings</h3>
        {houses.length === 0 ? (
          <p>No houses listed yet.</p>
        ) : (
          <div className="house-list">
            {houses.map((house) => (
              <div key={house.id} className="house-card">
                <img src={house.image} alt={house.category} className="house-image" />
                <p><strong>Location:</strong> {house.location}</p>
                <p><strong>Category:</strong> {house.category}</p>
                <p><strong>Price:</strong> KSh {house.price}</p>
                <p><strong>Payment Status:</strong> {house.paymentStatus}</p>
                <p><strong>Approval Status:</strong> {house.approvalStatus}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LandlordDashboard;
