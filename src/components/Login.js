import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("landlord"); 
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (email === "admin@patanyumba.com" && password === "admin123" && role === "admin") {
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard
    } else if (email === "landlord@example.com" && password === "landlord123" && role === "landlord") {
      navigate("/landlord-dashboard"); // Redirect to Landlord Dashboard
    } else {
      setError("Invalid email, password, or role. Try again.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2>Login</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />

          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className={styles.selectField}>
            <option value="landlord">Landlord</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" className={styles.loginButton}>Login</button>
        </form>

        <p className={styles.registerPrompt}>
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
