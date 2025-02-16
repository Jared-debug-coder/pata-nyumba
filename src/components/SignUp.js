import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css"; // Scoped styles

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
      setError("All fields are required!");
      return;
    }

    // Save landlord details (Replace with actual backend logic)
    localStorage.setItem("landlord", JSON.stringify(formData));
    setSuccess("Account created successfully! Redirecting to login...");
    
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <h2>Landlord Registration</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {success && <p className={styles.successMessage}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input type="text" name="fullName" placeholder="Enter your full name" onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" placeholder="Create a password" onChange={handleChange} required />

          <label>Phone Number:</label>
          <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} required />

          <button type="submit" className={styles.signupButton}>Register</button>
        </form>

        <p className={styles.loginPrompt}>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
