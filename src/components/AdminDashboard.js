import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [pendingHouses, setPendingHouses] = useState([
    { id: 1, location: "Nairobi, Westlands", price: 20000, category: "Single Room", landlord: "John Doe" },
  ]);

  const [approvedHouses, setApprovedHouses] = useState([]);
  const [bookingRequests, setBookingRequests] = useState([
    { id: 1, clientName: "Jane Doe", houseLocation: "Nairobi, Kilimani" },
  ]);

  const [payments, setPayments] = useState([
    { id: 1, landlord: "John Doe", amount: 500, date: "2025-02-15", status: "Pending Approval" },
  ]);

  // ✅ Approve House & Remove from Pending
  const handleApproveHouse = (id) => {
    const houseToApprove = pendingHouses.find((house) => house.id === id);
    setApprovedHouses([...approvedHouses, houseToApprove]);
    setPendingHouses(pendingHouses.filter((house) => house.id !== id));
    alert(`House at ${houseToApprove.location} has been approved.`);
  };

  // ✅ Reject House & Remove from Pending
  const handleRejectHouse = (id) => {
    setPendingHouses(pendingHouses.filter((house) => house.id !== id));
    alert("House listing rejected.");
  };

  // ✅ Mark Payment as Verified
  const handleVerifyPayment = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, status: "Verified ✅" } : payment
      )
    );
    alert("Payment has been verified!");
  };

  return (
    <div className="admin-dashboard">
      <h2>🏠 Admin Dashboard</h2>

      {/* 🔹 SECTION: Landlord Payments */}
      <div className="section">
        <h3>💰 Landlord Payments</h3>
        {payments.length === 0 ? (
          <p>No pending payments.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Landlord</th>
                <th>Amount (KSh)</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.landlord}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.date}</td>
                  <td className={payment.status === "Verified ✅" ? "verified" : "pending"}>
                    {payment.status}
                  </td>
                  <td>
                    {payment.status !== "Verified ✅" && (
                      <button onClick={() => handleVerifyPayment(payment.id)} className="verify-btn">
                        ✅ Verify
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 🔹 SECTION: Pending House Approvals */}
      <div className="section">
        <h3>📌 Pending House Listings</h3>
        {pendingHouses.length === 0 ? (
          <p>No pending listings.</p>
        ) : (
          pendingHouses.map((house) => (
            <div key={house.id} className="house-request">
              <p><strong>🏠 Location:</strong> {house.location}</p>
              <p><strong>💵 Price:</strong> KSh {house.price}</p>
              <p><strong>📢 Category:</strong> {house.category}</p>
              <p><strong>👤 Landlord:</strong> {house.landlord}</p>
              <button onClick={() => handleApproveHouse(house.id)} className="approve-btn">✅ Approve</button>
              <button onClick={() => handleRejectHouse(house.id)} className="reject-btn">❌ Reject</button>
            </div>
          ))
        )}
      </div>

      {/* 🔹 SECTION: Approved Houses */}
      <div className="section">
        <h3>✅ Approved Houses</h3>
        {approvedHouses.length === 0 ? <p>No houses approved yet.</p> : (
          approvedHouses.map((house) => (
            <div key={house.id} className="approved-house">
              <p><strong>🏠 Location:</strong> {house.location}</p>
              <p><strong>💵 Price:</strong> KSh {house.price}</p>
              <p><strong>📢 Category:</strong> {house.category}</p>
            </div>
          ))
        )}
      </div>

      {/* 🔹 SECTION: Booking Requests */}
      <div className="section">
        <h3>📩 Booking Requests</h3>
        {bookingRequests.length === 0 ? (
          <p>No booking requests.</p>
        ) : (
          bookingRequests.map((booking) => (
            <div key={booking.id} className="booking-request">
              <p><strong>👤 Client:</strong> {booking.clientName}</p>
              <p><strong>🏠 House Location:</strong> {booking.houseLocation}</p>
              <button className="view-btn">📄 View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
