import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Removed <Router> since it's already in index.js
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import LandlordDashboard from "./components/LandlordDashboard";
import FullPageScroll from "./components/FullPageScroll";
import { FaMapMarkerAlt } from "react-icons/fa"; // ✅ Correct placement of import

const App = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<FullPageScroll />} />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Admin Dashboard */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      {/* Landlord Dashboard */}
      <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
    </Routes>
  );
};

export default App;
